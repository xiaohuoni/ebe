import generator from '@babel/generator';
import traverse, { NodePath } from '@babel/traverse';
import * as t from '@babel/types';
import { PostProcessor, PostProcessorFactory } from '../../types';
import { hasOwn } from '../../utils/common';
import { parse } from '../babel/parse';
import { excludeIdentifiers } from './excludeIdentifiers';

export interface ProcessorConfig {
  customFileTypeParser: Record<string, string>;
}

export const getContext = () => {
  if (typeof globalThis !== 'undefined') {
    return globalThis;
  } else if (typeof self !== 'undefined') {
    return self;
  } else if (typeof window !== 'undefined') {
    return window;
  } else {
    return Function('return this')();
  }
};

export const getCodeComment = (varCode: string) => {
  return `/* FIXME: 变量${varCode}没有被定义，源码生成时被替换为undefined，请检查页面配置 */undefined`;
};

/**
 * 是否是MemberExpression的顶级变量
 * @param path
 * @returns
 */
const isTopLevelMemberExpressionIdentifier = (path: NodePath<t.Identifier>) => {
  // 如果父级节点不在左侧，就一定不是顶级变量
  // if (path.parentPath.key !== 'object') return false;

  // 当前节点
  let current: NodePath<any> = path;

  // 先向上查找到最顶层的memberExpression
  while (t.isMemberExpression(current.parent)) {
    if (current.parentPath) {
      current = current.parentPath;
    }
  }

  // 再向下一直找object 找到顶层变量
  let topLevelNode = current.node;
  while (topLevelNode?.object) {
    topLevelNode = topLevelNode.object;
  }

  // 如果当前节点是成员表达式的 object 部分
  if (
    (t.isMemberExpression(current.node) ||
      t.isOptionalMemberExpression(current.node)) &&
    topLevelNode === path.node
  ) {
    return true;
  }
  return false;
};

const factory: PostProcessorFactory<ProcessorConfig> = (config) => {
  const fixUndefinedVar: PostProcessor = (
    content: string,
    fileType: string,
  ) => {
    if (fileType === 'tsx' || fileType === 'ts') {
      let ast = parse(content);

      traverse(ast, {
        Identifier(path) {
          const identifierName = path.node.name;
          const hasBinding = path.scope.hasBinding(identifierName);
          if (hasBinding) {
            return;
          }
          const shouldReplaceToUndefined = [
            // if(d){}  c未定义
            t.isIfStatement(path.parent),

            // +, -, *, /, ==, ===, !=, !==, <, <=, >, >= 等 表达式 左右 未定义
            t.isBinaryExpression(path.parent),

            // // c?.b   c未定义  TODO: 这种暂未遇到，遇到再放开
            isTopLevelMemberExpressionIdentifier(path),

            // const a = { d: f }  f未定义
            t.isObjectProperty(path.parent) && path.parent.value === path.node,

            // console.log(a)  a未定义
            t.isCallExpression(path.parent) &&
              path.parent.arguments.includes(path.node),
          ].includes(true);

          if (
            hasOwn(getContext(), path.node.name) ||
            excludeIdentifiers.includes(path.node.name)
          ) {
            return;
          }

          if (shouldReplaceToUndefined) {
            path.replaceWith(t.identifier(getCodeComment(identifierName)));
            path.skip();
          }
        },
      });
      return generator(ast, {
        retainLines: false,
        sourceMaps: false,
        decoratorsBeforeExport: true,
      }).code;
    }
    return content;
  };

  return fixUndefinedVar;
};

export default factory;
