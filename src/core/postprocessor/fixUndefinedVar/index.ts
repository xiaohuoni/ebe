import generator from '@babel/generator';
import traverse from '@babel/traverse';
import * as t from '@babel/types';
import { PostProcessor, PostProcessorFactory } from '../../types';
import { parse } from '../babel/parse';

export interface ProcessorConfig {
  customFileTypeParser: Record<string, string>;
}

const factory: PostProcessorFactory<ProcessorConfig> = () => {
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

          const replaceCondition = [
            // +, -, *, /, ==, ===, !=, !==, <, <=, >, >= 等 表达式 左右 未定义
            t.isBinaryExpression(path.parent),

            // // c?.b   c未定义  TODO: 这种暂未遇到，遇到再放开
            // path.parentPath.key === 'object'
            // && (t.isOptionalMemberExpression(path.parent) || t.isMemberExpression(path.parent))
            // && !(t.isOptionalMemberExpression(path.parentPath.parent) || t.isMemberExpression(path.parentPath.parent)),

            // const a = { d: f }  f未定义
            t.isObjectProperty(path.parent) && path.parent.value === path.node,
          ];

          if (replaceCondition.includes(true)) {
            path.replaceWith(
              t.identifier(
                `undefined /* FIXME: 变量${identifierName}没有被定义，源码生成时被替换为undefined，请检查页面配置 */`,
              ),
            );
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
