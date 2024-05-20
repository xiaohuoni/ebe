import { PlatformType, ProcessFunctionType } from '@lingxiteam/types';
import * as _ from 'lodash';
import { IProjectSchema, IPublicTypeNodeDataType } from '../../core';
import { CodeGeneratorError } from '../../core/types/error';
import { generateVarString, parse2Var } from '../../core/utils/compositeType';
import { isJSVar, isNodeSchema } from '../../core/utils/deprecated';
import assetHelper from './assets/assets';
import { parseDsl } from './parseDsl';
import { LOOPCOMPONENTS, LoopMarkSymbol } from '../../constants';

const noop = () => undefined;

const handleChildrenDefaultOptions = {
  rerun: false,
};

/**
 * 生成uid
 * @param schema 
 * @returns 
 */
export const generateUid = (schema: IProjectSchema) => { 
  let uid = parse2Var(schema.id);
  // 如果在循环容器下
  if (schema[LoopMarkSymbol]?.parentLoopId) {
    uid = `getUid(compId, itemId, ${parse2Var(schema.id)})`;
  }
  return uid;
}

const DEFAULT_MAX_DEPTH = 100000;

/**
 * 遍历并处理所有的子节点
 * @param components
 * @param handlers
 * @param options
 * @returns
 */
export function handleSubNodes<T>(
  components: IPublicTypeNodeDataType,
  handlers: {
    string?: (i: string) => T;
    node?: (i: IPublicTypeNodeDataType) => T;
  },
  options?: {
    rerun?: boolean;
    maxDepth?: number; // 防止出现死循环无穷递归
  },
): T[] {
  const opt = {
    ...handleChildrenDefaultOptions,
    ...(options || {}),
  };
  const maxDepth = opt.maxDepth ?? DEFAULT_MAX_DEPTH;
  if (maxDepth <= 0) {
    throw new Error('handleSubNodes maxDepth reached');
  }

  if (Array.isArray(components)) {
    const list: IPublicTypeNodeDataType = components;
    return list
      .map((child) =>
        handleSubNodes(child, handlers, { ...opt, maxDepth: maxDepth - 1 }),
      )
      .reduce((p, c) => p.concat(c), []);
  }

  let result: T | undefined;
  const childrenRes: T[] = [];
  if (components === null || components === undefined) {
    return [];
  } else if (isNodeSchema(components)) {
    const handler = handlers.node || noop;
    const child = components;
    result = handler(child);

    if (child.components) {
      const childRes = handleSubNodes(child.components, handlers, opt);
      childrenRes.push(...childRes);
    }
  } else {
    throw new CodeGeneratorError(
      'handleSubNodes got invalid NodeData',
      components,
    );
  }

  if (result !== undefined) {
    childrenRes.unshift(result);
  }

  return childrenRes;
}

/**
 * 控件属性预处理-只执行一次
 * @param schema
 * @param isRoot
 * @returns
 */
const preprocessComponentSchema = (
  schema: IProjectSchema,
  isRoot: boolean,
): IProjectSchema => {
  let newSchema: any = _.cloneDeep(schema);
  // TODO: extraData sandBoxContext
  const StaticDataKey = 'attrDataMap';

  const extraData = {
    collectRelationKey: (
      compId: string,
      attrNbrKey: string,
      childKeys?: string[],
    ) => {
      if (!attrNbrKey) {
        return '';
      }
      if (Array.isArray(childKeys) && childKeys.length > 0) {
        return `$${StaticDataKey}['${attrNbrKey}'].filter(item=>${JSON.stringify(
          childKeys,
        )}.includes(item.attrValue))$`;
      }
      return `$${StaticDataKey}['${attrNbrKey}']$`;
    },
  } as any;
  const sandBoxContext = {};
  // 预处理事件
  newSchema = parseDsl(schema, isRoot);
  // 业务组件和页面容器不需要预处理
  if (
    isRoot ||
    schema.compName === 'Pageview' ||
    schema.compName === 'BOFramer'
  ) {
    return newSchema;
  }
  const methods = assetHelper.comPreprocess.getComPreprocessMethods(
    schema.compName!,
    schema.platform as PlatformType,
  );
  methods?.forEach((fc: ProcessFunctionType) => {
    newSchema = fc(newSchema, extraData);
  });
  const originProps = schema?.props || {};
  
  let uid = parse2Var(schema.id);
  // 如果在循环容器下
  if (schema[LoopMarkSymbol]?.parentLoopId) {
    uid = `getUid(compId, itemId, ${parse2Var(schema.id)})`;
  }
  const props = {
    ...originProps,
    // pageId: pageId,
    // appId: appId,
    // platform: schema.platform,
    // TODO: fusionMode
    // fusionMode: schema?.fusionMode,
    uid: schema.id,
    $$componentItem: `##{{id: '${schema.id}',uid: ${generateUid(schema)}, type: '${schema.compName}',...componentItem}}##`,
  };
  // 执行组件预处理
  const methodsRun = assetHelper.comRunPreprocess.getRunComPreprocessMethods(
    schema.compName!,
    schema.platform as PlatformType,
  );
  methodsRun?.forEach((fc: ProcessFunctionType) => {
    // @ts-ignore
    const aprops = fc(newSchema, props, sandBoxContext, extraData);
    newSchema.props = aprops;
  });

  // TOTO: popoverSetting pc
  const { popoverSetting, basicStatus, collapseColumns, ...otherProps } =
    newSchema?.props ?? {};
  // {value: 'popoverSetting={{"options": {"tipType": "2",\n…"destroyOnHide": false,\n"placement": "top"}}}', type: 'NodeCodePieceAttr'}
  if (popoverSetting) {
    // 如果是弹窗的话，需要用组件包裹原始组件
    // @ts-ignore
    return {
      compLib: 'antd-mobile-5',
      type: 'Popover',
      events: {},
      props: { ...popoverSetting, id: otherProps?.['data-compid'] },
      compName: 'Popover',
      platform: 'h5',
      components: [{ ...newSchema, props: otherProps }],
    };
  }
  if (isJSVar(basicStatus)) {
    const basicStatusStr = generateVarString(basicStatus);
    newSchema.props.disabled = `$\`\${${basicStatusStr}}\` === '3'$`;
    newSchema.props.visible = `$\`\${${basicStatusStr}}\` !== '2'$`;
    newSchema.props.readOnly = `$\`\${${basicStatusStr}}\` === '4'$`;
  }
  if (newSchema?.props?.basicStatus) {
    delete newSchema.props.basicStatus;
  }
  // 预处理中已经将 collapseColumns 转成子集，这里删掉
  if (collapseColumns) {
    delete newSchema.props.collapseColumns;
  }
  return newSchema;
};

/**
 * 标记循环容器组件
 * @param schema 
 */
export const markerLoopComponent = (schema: IProjectSchema) => { 
  const marker = (components: IProjectSchema[], parentLoopId = '', type: any = ''): IProjectSchema[] => { 
    return components.map(item => { 
      let loopType = type;
      let loopId = parentLoopId;
      if (LOOPCOMPONENTS.includes(item.type)) {
        loopType = !type ? 'outerLayer' : 'innerLayer';
        loopId = item.id!;
      }
      return {
        ...item,
        [LoopMarkSymbol]: {
          parentLoopId,
          loopType
        },
        components: marker(item.components || [], loopId, loopType)
      };
    })
  }

  schema.components = marker(schema.components || [], '');
}

// 解析schema数据
export const parseSchema = (schema: IProjectSchema, isRoot: boolean) => {
  modifySchemaCompName(schema, isRoot);

  const target = preprocessComponentSchema(schema, isRoot) ?? schema;
  const { components } = target as any;
  target.components = components?.map((schem: any) => {
    return parseSchema(schem, false) ?? schem;
  });
  return target;
};

/**
 * 修改schema的组件名称
 * @param schema
 * @param isRoot
 */
const modifySchemaCompName = (schema: IProjectSchema, isRoot: boolean) => {
  const compName = schema?.compName || schema?.type;
  if (schema.path) {
    // @ts-ignore
    delete schema.path;
  }
  if (!isRoot && compName) {
    if (schema.compName) {
      schema.compName = compName;
    }
    schema.type = compName;
    if (schema?.customClass) {
      schema.props.className = schema.id;
    }
  }
};
