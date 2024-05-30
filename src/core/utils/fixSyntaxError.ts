import generator from '@babel/generator';
import * as babel from '@babel/parser';
import traverse, { NodePath } from '@babel/traverse';
import * as t from '@babel/types';

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

const excludeCalleeNames = ['classNames'];

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
      CallExpression: (path) => {
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
