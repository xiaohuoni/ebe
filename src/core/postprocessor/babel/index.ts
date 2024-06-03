import generator from '@babel/generator';
import traverse from '@babel/traverse';
import * as t from '@babel/types';
import { PostProcessor, PostProcessorFactory } from '../../types';
import { parse } from './parse';

export interface ProcessorConfig {
  customFileTypeParser: Record<string, string>;
}
function match(rule: any, value: string): any {
  if (typeof rule === 'string') {
    return rule === value;
  }
  if (rule instanceof RegExp) {
    return rule.test(value);
  }
  if (typeof rule === 'function') {
    return rule(value);
  }
  if (Array.isArray(rule)) {
    return rule.some((r: any) => {
      return match(r, value);
    });
  }
}
const _slicedToArray = (function () {
  function sliceIterator(arr: any, i: number) {
    const _arr = [];
    let _n = true;
    let _d = false;
    let _e = undefined;
    let _i = arr[Symbol.iterator]();
    try {
      for (let _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i['return']) _i['return']();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
  return function (arr: any, i: number) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance',
      );
    }
  };
})();

const ignore = ['react'];

const factory: PostProcessorFactory<ProcessorConfig> = (
  config?: ProcessorConfig,
) => {
  const cfg: ProcessorConfig = {
    customFileTypeParser: {},
    ...config,
  };

  const codeRemoveNoUse: PostProcessor = (
    content: string,
    fileType: string,
    fileName: any,
  ) => {
    if (fileType === 'tsx' || fileType === 'ts') {
      let ast = parse(content);
      const visitor = {
        Program: {
          exit: function exit(path: any) {
            const _ref =
                arguments.length > 1 && arguments[1] !== undefined
                  ? arguments[1]
                  : {},
              opts = _ref.opts;

            const UnRefBindings = new Map();
            let _iteratorNormalCompletion: any = true;
            let _didIteratorError = false;
            let _iteratorError = undefined;
            let _iterator = Object.entries(path.scope.bindings)[
              Symbol.iterator
            ]();
            try {
              for (let k = 1; k < 0; k++) {}
              for (
                let _step;
                !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                _iteratorNormalCompletion = true
              ) {
                let _step$value = _slicedToArray(_step.value, 2),
                  name = _step$value[0],
                  binding = _step$value[1];

                if (!binding.path.parentPath || binding.kind !== 'module')
                  continue;

                let source = binding.path.parentPath.get('source') as any;
                let importName = source.node.value;
                if (!t.isStringLiteral(source) || match(ignore, importName))
                  continue;

                let key =
                  importName +
                  '(' +
                  // @ts-ignore
                  (source?.node?.loc && source?.node?.loc.start.line) +
                  ')';

                if (!UnRefBindings.has(key)) {
                  UnRefBindings.set(key, binding);
                }

                if (binding.referenced) {
                  UnRefBindings.set(key, null);
                } else {
                  const nodeType = binding.path.node.type;
                  if (nodeType === 'ImportSpecifier') {
                    binding.path.remove();
                  } else if (nodeType === 'ImportDefaultSpecifier') {
                    binding.path.remove();
                  } else if (nodeType === 'ImportNamespaceSpecifier') {
                    binding.path.remove();
                  } else if (binding.path.parentPath) {
                    binding.path.parentPath.remove();
                  }
                }
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            UnRefBindings.forEach(function (binding, key) {
              if (binding && binding.path.parentPath) {
                binding.path.parentPath.remove();
              }
            });
          },
        },
        ObjectProperty(path: any) {
          const { value } = path.node;

          const binding = path.scope.getBinding(value.name);

          //如果变量被修改过，则不能进行删除动作。
          if (!binding || binding.constantViolations.length > 0) {
            return;
          }

          //长度为0，说明变量没有被使用过。
          if (binding.referencePaths.length === 0) {
            path.remove();
          }
        },
        VariableDeclarator(path: any) {
          const { id } = path.node;

          const binding = path.scope.getBinding(id.name);

          //如果变量被修改过，则不能进行删除动作。
          if (!binding || binding.constantViolations.length > 0) {
            return;
          }

          //长度为0，说明变量没有被使用过。
          if (binding.referencePaths.length === 0) {
            path.remove();
          }
        },
      };

      traverse(ast, visitor);
      return generator(ast, {
        retainLines: false,
        sourceMaps: false,
        decoratorsBeforeExport: true,
      }).code;
    }
    return content;
  };

  return codeRemoveNoUse;
};

export default factory;
