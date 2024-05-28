import generator from '@babel/generator';
import * as babel from '@babel/parser';
import traverse from '@babel/traverse';
import * as t from '@babel/types';

/**
 * 增加将代码操作链
 * a.b -> a?.b
 * a['b'] -> a?.['b']
 * a() -> a?.()
 * a.b() => a?.b?.()
 * @param code
 * @returns
 */
const addOperationChain = (code: string) => {
  if (typeof code !== 'string' || !code.length) return code;

  const trimCode = code.trim();

  const hasLastSemicolon = trimCode.charAt(trimCode.length - 1) === ';';

  try {
    const ast = babel.parse(code, {
      plugins: [],
    });

    traverse(ast, {
      MemberExpression: (path) => {
        // a.b -> a?.b
        // a['c'] -> a?.['c']
        const objectNode = path.get('object').node;
        const propertyNode = path.get('property').node;
        const computed = path.node.computed;
        const isPropIdentifier = t.isIdentifier(propertyNode);
        const isPropStringLiteral = t.isStringLiteral(propertyNode);

        if (isPropIdentifier || isPropStringLiteral) {
          path.replaceWith(
            t.optionalMemberExpression(
              objectNode,
              propertyNode,
              computed,
              true,
            ),
          );
        }
      },
      CallExpression: (path) => {
        // a.b() -> a.b?.();
        const calleeNode = path.get('callee').node;
        if (t.isExpression(calleeNode)) {
          path.replaceWith(
            t.optionalCallExpression(calleeNode, path.node.arguments, true),
          );
        }
      },
    });

    const resultCode = generator(ast).code;

    if (!hasLastSemicolon) {
      return resultCode.replace(/;$/, '');
    }
    return resultCode;
  } catch (error) {
    return code;
  }
};

export default addOperationChain;
