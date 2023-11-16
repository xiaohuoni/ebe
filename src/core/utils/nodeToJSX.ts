import lodash from 'lodash';
import {
  IScope,
  CodeGeneratorError,
  PIECE_TYPE,
  CodePiece,
  NodeGenerator,
  NodeGeneratorConfig,
  AttrData,
} from '../types';
import { generateCompositeType } from './compositeType';
import { getStaticExprValue } from './common';
import { executeFunctionStack } from './aopHelper';
import { encodeJsxStringNode } from './encodeJsxAttrString';
import { unwrapJsExprQuoteInJsx } from './jsxHelpers';
import { isNodeSchema } from '../utils/deprecated';
import { isValidIdentifier } from './validate';
import {IProjectSchema } from '../types';

function mergeNodeGeneratorConfig(
  cfg1: NodeGeneratorConfig,
  cfg2: NodeGeneratorConfig = {},
): NodeGeneratorConfig {
  const resCfg: NodeGeneratorConfig = {};
  if (cfg1.handlers || cfg2.handlers) {
    resCfg.handlers = {
      ...(cfg1.handlers || {}),
      ...(cfg2.handlers || {}),
    };
  }

  if (cfg1.tagMapping || cfg2.tagMapping) {
    resCfg.tagMapping = cfg2.tagMapping || cfg1.tagMapping;
  }

  if (cfg1.attrPlugins || cfg2.attrPlugins) {
    resCfg.attrPlugins = [];
    resCfg.attrPlugins.push(...(cfg2.attrPlugins || []));
    resCfg.attrPlugins.push(...(cfg1.attrPlugins || []));
  }

  if (cfg1.nodePlugins || cfg2.nodePlugins) {
    resCfg.nodePlugins = [];
    resCfg.nodePlugins.push(...(cfg2.nodePlugins || []));
    resCfg.nodePlugins.push(...(cfg1.nodePlugins || []));
  }

  return resCfg;
}

export function isPureString(v: string) {
  // FIXME: 目前的方式不够严谨
  return (
    (v[0] === "'" && v[v.length - 1] === "'") ||
    (v[0] === '"' && v[v.length - 1] === '"')
  );
}

function generateAttrValue(
  attrData: { attrName: string; attrValue: any },
  scope: IScope,
  config?: NodeGeneratorConfig,
): CodePiece[] {
  const valueStr = generateCompositeType(attrData.attrValue, scope, {
    handlers: config?.handlers,
    nodeGenerator: config?.self,
  });
  return [
    {
      type: PIECE_TYPE.ATTR,
      name: attrData.attrName,
      value: valueStr,
    },
  ];
}

function generateAttr(
  attrName: string,
  attrValue: any,
  scope: IScope,
  config?: NodeGeneratorConfig,
): CodePiece[] {
  let pieces: CodePiece[];
  if (config?.attrPlugins) {
    pieces = executeFunctionStack<AttrData, CodePiece[], NodeGeneratorConfig>(
      { attrName, attrValue },
      scope,
      config.attrPlugins,
      generateAttrValue,
      config,
    );
  } else {
    pieces = generateAttrValue({ attrName, attrValue }, scope, config);
  }

  pieces = pieces.map((p) => {
    // FIXME: 在经过 generateCompositeType 处理过之后，其实已经无法通过传入值的类型判断传出值是否为纯字面值字符串了（可能包裹了加工函数之类的）
    //        因此这个处理最好的方式是对传出值做语法分析，判断以哪种模版产出 Attr 值
    let newValue: string;
    if (p.value && isPureString(p.value)) {
      // 似乎多次一举，目前的诉求是处理多种引号类型字符串的 case，正确处理转义
      const content = getStaticExprValue<string>(p.value);
      newValue = JSON.stringify(encodeJsxStringNode(content));
    } else {
      newValue = `{${p.value}}`;
    }

    return {
      value: `${p.name}=${newValue}`,
      type: PIECE_TYPE.ATTR,
    };
  });

  return pieces;
}

function generateAttrs(
  nodeItem: IProjectSchema,
  scope: IScope,
  config?: NodeGeneratorConfig,
): CodePiece[] {
  // event 是预处理之后塞进去的
  // @ts-ignore
  const { props, style, events, type } = nodeItem;

  let pieces: CodePiece[] = [];

  if (props) {
    if (!Array.isArray(props)) {
      Object.keys(props).forEach((propName: string) => {
        if (isValidIdentifier(propName)) {
          pieces = pieces.concat(
            generateAttr(propName, props[propName] as any, scope, config),
          );
        }
      });
    } else {
      props.forEach((prop) => {
        if (prop.name && isValidIdentifier(prop.name) && !prop.spread) {
          pieces = pieces.concat(
            generateAttr(prop.name, prop.value, scope, config),
          );
        }
      });
    }
  }
  // 处理 style
  if (style && Object.keys(style).length > 0) {
    pieces = pieces.concat(generateAttr('style', style, scope, config));
  }

  // 处理 events
  // TODO: Page 事件处理方式不同
  if (events && Object.keys(events).length > 0 && type !== 'Page') {
    Object.keys(events).forEach((eventName: any) => {
      if (isValidIdentifier(eventName)) {
        const { value = [] } = events[eventName];
        const renderEvent = `(...args: unknown[])=>{const eventData: any = [${JSON.stringify(
          value[0],
        )},];eventData.params = ${JSON.stringify(
          value.params,
        )} || [];CMDGenerator(eventData, args, '${eventName}', { id: '${
          nodeItem?.id
        }',name: '${nodeItem?.id}',type: '${nodeItem?.type}',platform: '${
          nodeItem?.platform
        }',});}`;
        pieces = pieces.concat(
          generateAttr(
            eventName,
            { type: 'JSCode', value: renderEvent },
            scope,
            config,
          ),
        );
      }
    });
  }

  return pieces;
}

function generateBasicNode(
  nodeItem: IProjectSchema,
  _: IScope,
  config?: NodeGeneratorConfig,
): CodePiece[] {
  const pieces: CodePiece[] = [];
  const tagName = (config?.tagMapping || lodash.identity)(nodeItem.type);

  pieces.push({
    value: tagName || '', // FIXME: type detection error
    type: PIECE_TYPE.TAG,
  });

  return pieces;
}

function generateSimpleNode(
  nodeItem: IProjectSchema,
  scope: IScope,
  config?: NodeGeneratorConfig,
): CodePiece[] {
  const basicParts = generateBasicNode(nodeItem, scope, config) || [];
  const attrParts = generateAttrs(nodeItem, scope, config) || [];
  const childrenParts: CodePiece[] = [];
  
  if (nodeItem.components && config?.self ) {
    // @ts-ignore
    const childrenStr = config.self(nodeItem.components, scope);

    childrenParts.push({
      type: PIECE_TYPE.CHILDREN,
      value: childrenStr,
    });
  }

  return [...basicParts, ...attrParts, ...childrenParts];
}

function linkPieces(pieces: CodePiece[]): string {
  const tagsPieces = pieces.filter((p) => p.type === PIECE_TYPE.TAG);
  if (tagsPieces.length !== 1) {
    throw new CodeGeneratorError(
      'Only one tag definition required',
      tagsPieces,
    );
  }
  const tagName = tagsPieces[0].value;

  const beforeParts = pieces
    .filter((p) => p.type === PIECE_TYPE.BEFORE)
    .map((p) => p.value)
    .join('');

  const afterParts = pieces
    .filter((p) => p.type === PIECE_TYPE.AFTER)
    .map((p) => p.value)
    .join('');

  const childrenParts = pieces
    .filter((p) => p.type === PIECE_TYPE.CHILDREN)
    .map((p) => p.value)
    .join('');

  let attrsParts = pieces
    .filter((p) => p.type === PIECE_TYPE.ATTR)
    .map((p) => p.value)
    .join(' ');

  attrsParts = attrsParts ? ` ${attrsParts}` : '';

  if (childrenParts) {
    return `${beforeParts}<${tagName}${attrsParts}>${childrenParts}</${tagName}>${afterParts}`;
  }

  return `${beforeParts}<${tagName}${attrsParts} />${afterParts}`;
}

function generateNodeSchema(
  nodeItem: IProjectSchema,
  scope: IScope,
  config?: NodeGeneratorConfig,
): string {
  const pieces: CodePiece[] = [];
  if (config?.nodePlugins) {
    const res = executeFunctionStack<
      IProjectSchema,
      CodePiece[],
      NodeGeneratorConfig
    >(nodeItem, scope, config.nodePlugins, generateSimpleNode, config);
    pieces.push(...res);
  } else {
    pieces.push(...generateSimpleNode(nodeItem, scope, config));
  }

  return linkPieces(pieces);
}

const handleChildren = (v: string[]) => v.join('');

export function createNodeGenerator(
  cfg: NodeGeneratorConfig = {},
): NodeGenerator<string> {
  const generateNode = (nodeItem: IProjectSchema, scope: IScope): string => {
    if (lodash.isArray(nodeItem)) {
      const resList = nodeItem.map((n) => generateNode(n, scope));
      return handleChildren(resList);
    }

    if (isNodeSchema(nodeItem)) {
      return generateNodeSchema(nodeItem, scope, {
        ...cfg,
        self: generateNode as any,
      });
    }

    const valueStr = generateCompositeType(nodeItem, scope, {
      handlers: cfg.handlers,
      nodeGenerator: generateNode as any,
    });

    if (isPureString(valueStr)) {
      return encodeJsxStringNode(getStaticExprValue<string>(valueStr));
    }

    return `{${valueStr}}`;
  };

  return (nodeItem: IProjectSchema, scope: IScope) =>
    unwrapJsExprQuoteInJsx(generateNode(nodeItem, scope)) ;
}

const defaultReactGeneratorConfig: NodeGeneratorConfig = {
  nodePlugins: [
    // TODO: 这里可以做一些前置处理
  ],
};

export function createReactNodeGenerator(
  cfg?: NodeGeneratorConfig,
): NodeGenerator<string> {
  const newCfg = mergeNodeGeneratorConfig(defaultReactGeneratorConfig, cfg);

  return createNodeGenerator(newCfg);
}
