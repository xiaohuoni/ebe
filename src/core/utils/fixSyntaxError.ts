import generator from '@babel/generator';
import * as babel from '@babel/parser';
import traverse, { NodePath, VisitNodeFunction } from '@babel/traverse';
import * as t from '@babel/types';

const functorsKeys = [
  'ABS',
  'AES_DECRYPT',
  'AES_ENCRYPT',
  'ARRAYINDEX',
  'ARRAYTOSTR',
  'AVERAGE',
  'CONCAT',
  'COUNTA',
  'COUNTARRAY',
  'COUNTBLANK',
  'COUNTCHAR',
  'DATAMASK',
  'DATEADD',
  'DATENOW',
  'DATETIME',
  'IF',
  'INT',
  'LOG',
  'MAX',
  'MIN',
  'MOD',
  'NUMBER',
  'OBJECTVALUE',
  'POWER',
  'PRODUCT',
  'RANDBETWEEN',
  'RANDOMNUM',
  'ROUND',
  'ROUNDDOWN',
  'ROUNDUP',
  'STRTOARRAY',
  'SUM',
];

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

/**
 * 修正对象的小括号
 * ({ a: 0, b: 100 }) -> { a: 0, b: 100 }
 * @param code
 */
const patchObjectParenthesis = (code: string) => {
  const newCode = code.replace(/[;]+$/, '');
  if (newCode.startsWith('({') && newCode.endsWith('})')) {
    return newCode.replace(/^\({/, '{').replace(/}\)$/, '}');
  }
  return code;
};

const functorTopKey = 'functorsMap';
const excludeCalleeNames = ['classNames', functorTopKey];
/**
 * 自定义语法转化
 * '$IF("$globalData.a$", 1, 2)$' -> functorsMap.IF(globalData.a, 1, 2);
 */
const customSyntaxToJS: {
  [Type in t.Node['type']]?: VisitNodeFunction<
    t.Node,
    Extract<t.Node, { type: Type }>
  >;
} = {
  CallExpression(path) {
    const calleeNode = path.get('callee').node;
    if (
      calleeNode.type === 'Identifier' &&
      functorsKeys.includes(calleeNode.name)
    ) {
      const fnName = calleeNode.name;
      path.replaceWith(
        t.callExpression(
          t.memberExpression(t.identifier(functorTopKey), t.identifier(fnName)),
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
      path.replaceWith(t.identifier(fixSyntaxError(realName)));
    } else if (/^getValue\((.*)\)$/.test(realName)) {
      const match = valueName.match(/getValue\("(.*)"\)/);
      if (match && match?.length > 1) {
        const param = match[1];
        path.replaceWith(
          t.callExpression(t.identifier('getValue'), [t.stringLiteral(param)]),
        );
      }
    } else if (/^getDynamicDataValue\((.*)\)$/.test(realName)) {
      const match = valueName.match(/getDynamicDataValue\("(.*)"\)/);
      if (match && match?.length > 1) {
        const param = match[1];
        path.replaceWith(
          t.callExpression(t.identifier('getValue'), [t.stringLiteral(param)]),
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
    if (/^globalData(.([\w]*))*/.test(realName)) {
      paramPath.node.body = [
        t.expressionStatement(t.identifier(realName)),
        ...body,
      ];
      path.parentPath.remove();
    } else if (/^data(.([\w]*))*/.test(realName)) {
      paramPath.node.body = [
        t.expressionStatement(t.identifier(realName)),
        ...body,
      ];
      path.parentPath.remove();
    } else if (/^state(.([\w]*))*/.test(realName)) {
      paramPath.node.body = [
        t.expressionStatement(t.identifier(realName)),
        ...body,
      ];
      path.parentPath.remove();
    } else if (/^urlParam(.([\w]*))*/.test(realName)) {
      paramPath.node.body = [
        t.expressionStatement(t.identifier(realName)),
        ...body,
      ];
      path.parentPath.remove();
    } else if (/^routerData(.([\w]*))*/.test(realName)) {
      paramPath.node.body = [
        t.expressionStatement(t.identifier(realName)),
        ...body,
      ];
      path.parentPath.remove();
    } else if (/^appInfo(.([\w]*))*/.test(realName)) {
      paramPath.node.body = [
        t.expressionStatement(t.identifier(realName)),
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

/**
 * 修正语法错误
 *
 * 例如1: 将代码转化: a.b -> a?.b
 * 例如2: 将代码转化: a['b'] -> a?.['b']
 * 例如3: 将代码转化: a() -> a?.()
 * 例如4: 将代码转化: a.b() => a?.b?.()
 * @param code
 * @returns
 */
const fixSyntaxError = (code: string) => {
  if (typeof code !== 'string' || !code.length) return code;

  // 是否已分号结尾
  const trimCode = code.trim();
  const hasLastSemicolon = trimCode.charAt(trimCode.length - 1) === ';';

  try {
    const ast = babel.parse(code, {
      plugins: [],
      sourceType: 'unambiguous',
    });

    traverse(ast, {
      MemberExpression: (path) => {
        memberExprOperationChain(path);
      },
      CallExpression: (path, node) => {
        customSyntaxToJS?.CallExpression?.call(node, path, node);

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
        customSyntaxToJS.StringLiteral?.call(node, path, node);
      },
      DirectiveLiteral: (path, node) => {
        customSyntaxToJS.DirectiveLiteral?.call(node, path, node);
      },
    });

    let resultCode = patchObjectParenthesis(generator(ast).code);

    if (!hasLastSemicolon) {
      return resultCode.replace(/;$/, '');
    }
    return resultCode;
  } catch (error) {
    return code;
  }
};

export default fixSyntaxError;
