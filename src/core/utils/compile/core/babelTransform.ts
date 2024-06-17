import generator from '@babel/generator';
import * as babel from '@babel/parser';
import traverse, { NodePath, VisitNodeFunction } from '@babel/traverse';
import * as t from '@babel/types';
import { excludeCalleeNames, functorsKeys, functorTopKey } from '../constants';

/**
 * 成员变量表达式，转成操作连
 * @param path
 */
const memberExprOperationChain = (path: NodePath<t.MemberExpression>) => {
  // a.b -> a?.b
  // a['c'] -> a?.['c']
  // a[0] -> a?.[0];
  const objectNode = path.get('object').node;
  const propertyNode = path.get('property').node;
  const computed = path.node.computed;
  const isPropIdentifier = t.isIdentifier(propertyNode);
  const isPropStringLiteral = t.isStringLiteral(propertyNode);
  const isPropNumericLiteral = t.isNumericLiteral(propertyNode);

  if (isPropIdentifier || isPropStringLiteral || isPropNumericLiteral) {
    path.replaceWith(
      t.optionalMemberExpression(objectNode, propertyNode, computed, true),
    );
  }
};

interface BabelTransformOptions {
  buildCode: (code: string) => string;
}

/**
 * 自定义语法转化
 * '$IF("$globalData.a$", 1, 2)$' -> functorsMap.IF(globalData.a, 1, 2);
 */
const customSyntaxToJS: (options: BabelTransformOptions) => {
  [Type in t.Node['type']]?: VisitNodeFunction<
    t.Node,
    Extract<t.Node, { type: Type }>
  >;
} = (options) => {
  const { buildCode } = options;
  return {
    CallExpression(path) {
      const calleeNode = path.get('callee').node;
      if (
        calleeNode.type === 'Identifier' &&
        functorsKeys.includes(calleeNode.name)
      ) {
        const fnName = calleeNode.name;
        path.replaceWith(
          t.callExpression(
            t.memberExpression(
              t.identifier(functorTopKey),
              t.identifier(fnName),
            ),
            path.node.arguments,
          ),
        );
      }
    },
    StringLiteral(path) {
      const valueName = path.node?.extra?.raw || path.node?.value || '';
      if (typeof valueName !== 'string') {
        return;
      }

      let [, realName = ''] = valueName.match(/['|"]\$(.*)\$['|"]/) || [];
      realName = realName.trim();
      if (
        [
          /^globalData(.([\w]*))*/.test(realName),
          /^data(.([\w]*))*/.test(realName),
          /^state(.([\w]*))*/.test(realName),
          /^urlParam(.([\w]*))*/.test(realName),
          /^routerData(.([\w]*))*/.test(realName),
          /^appInfo(.([\w]*))*/.test(realName),
        ].includes(true)
      ) {
        path.replaceWith(t.identifier(buildCode(realName)));
      } else if (/^getValue\((.*)\)$/.test(realName)) {
        const match = valueName.match(/getValue\("(.*)"\)/);
        if (match && match?.length > 1) {
          const param = match[1];
          path.replaceWith(
            t.callExpression(t.identifier('getValue'), [
              t.stringLiteral(param),
            ]),
          );
        }
      } else if (/^getDynamicDataValue\((.*)\)$/.test(realName)) {
        const match = valueName.match(/getDynamicDataValue\("(.*)"\)/);
        if (match && match?.length > 1) {
          const param = match[1];
          path.replaceWith(
            t.callExpression(t.identifier('getValue'), [
              t.stringLiteral(param),
            ]),
          );
        }
      }
    },
    DirectiveLiteral(path) {
      const paramPath = path.parentPath.parentPath;
      if (!paramPath?.isProgram()) {
        return;
      }
      const body = paramPath?.node?.body || [];

      let valueName = '';

      if (typeof path.node?.extra?.raw == 'string') {
        valueName = path.node?.extra?.raw;
      } else if (typeof path.node?.value === 'string') {
        valueName = path.node?.value;
      }

      let [, realName = ''] =
        (valueName as string)?.match(/['|"]\$(.*)\$['|"]/) || [];

      realName = realName.trimStart().trimEnd();
      if (
        /^globalData(.([\w]*))*/.test(realName) ||
        /^data(.([\w]*))*/.test(realName) ||
        /^state(.([\w]*))*/.test(realName) ||
        /^urlParam(.([\w]*))*/.test(realName) ||
        /^routerData(.([\w]*))*/.test(realName) ||
        /^appInfo(.([\w]*))*/.test(realName)
      ) {
        paramPath.node.body = [
          t.expressionStatement(t.identifier(buildCode(realName))),
          ...body,
        ];
        path.parentPath.remove();
      } else if (/^getValue\((.*)\)$/.test(realName)) {
        const match = valueName.match(/getValue\("(.*)"\)/);
        if (match && match?.length > 1) {
          const param = match[1];
          paramPath.node.body = [
            t.expressionStatement(
              t.callExpression(t.identifier('getValue'), [
                t.stringLiteral(param),
              ]),
            ),
            ...body,
          ];
          path.parentPath.remove();
        }
      } else if (/^getDynamicDataValue\((.*)\)$/.test(realName)) {
        const match = valueName.match(/getDynamicDataValue\("(.*)"\)/);
        if (match && match?.length > 1) {
          const param = match[1];
          paramPath.node.body = [
            t.expressionStatement(
              t.callExpression(t.identifier('getValue'), [
                t.stringLiteral(param),
              ]),
            ),
            ...body,
          ];
          path.parentPath.remove();
        }
      }
    },
  };
};

const babelTransform = (code: string, options: BabelTransformOptions) => {
  const { CallExpression, StringLiteral, DirectiveLiteral } =
    customSyntaxToJS(options);

  const ast = babel.parse(code, {
    plugins: [],
    sourceType: 'unambiguous',
  });

  traverse(ast, {
    MemberExpression: (path) => {
      memberExprOperationChain(path);
    },
    CallExpression: (path, node) => {
      CallExpression?.call(node, path, node);

      // a.b() -> a.b?.();
      const calleeNode = path.get('callee').node;
      if (
        calleeNode.type === 'Identifier' &&
        excludeCalleeNames.includes(calleeNode.name)
      ) {
        path.skip();
        return;
      }
      if (t.isExpression(calleeNode)) {
        path.replaceWith(
          t.optionalCallExpression(calleeNode, path.node.arguments, true),
        );
      }
    },
    StringLiteral: (path, node) => {
      StringLiteral?.call(node, path, node);
    },
    DirectiveLiteral: (path, node) => {
      DirectiveLiteral?.call(node, path, node);
    },
  });

  return generator(ast).code || '';
};

export default babelTransform;
