import type { NodePath } from '@babel/traverse';
import * as t from '@babel/types';

export type Path = NodePath<t.Identifier>;

export function fromFunction(
  path: NodePath<
    t.FunctionDeclaration | t.FunctionExpression | t.ArrowFunctionExpression
  >,
): NodePath<t.Identifier> | null {
  let parentPath = path.parentPath;
  if (parentPath.type === 'VariableDeclarator') {
    let variablePath = parentPath as NodePath<t.VariableDeclarator>;
    let name = variablePath.get('id');
    return name.node.type === 'Identifier'
      ? (name as NodePath<t.Identifier>)
      : null;
  }

  if (parentPath.type === 'AssignmentExpression') {
    let variablePath = parentPath as NodePath<t.AssignmentExpression>;
    let name = variablePath.get('left');
    return name.node.type === 'Identifier'
      ? (name as NodePath<t.Identifier>)
      : null;
  }

  if (path.node.type === 'ArrowFunctionExpression') {
    return null;
  }

  return path.node.id && path.node.id.type === 'Identifier'
    ? (path.get('id') as NodePath<t.Identifier>)
    : null;
}

export function isReferenced(ident: NodePath<t.Identifier>): boolean {
  let binding = ident.scope.getBinding(ident.node.name);
  if (binding?.referenced) {
    // Functions can reference themselves, so we need to check if there's a
    // binding outside the function scope or not.
    if (binding.path.type === 'FunctionDeclaration') {
      return !binding.constantViolations
        .concat(binding.referencePaths)
        // Check that every reference is contained within the function:
        .every((ref) => ref.findParent((parent) => parent === binding?.path));
    }

    return true;
  }
  return false;
}
