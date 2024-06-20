import { last, upperFirst } from 'lodash';
import {
  CLASS_DEFINE_CHUNK_NAME,
  DEFAULT_LINK_AFTER,
} from '../../core/const/generator';

import {
  BuilderComponentPlugin,
  BuilderComponentPluginFactory,
  ChunkType,
  FileType,
  ICodeStruct,
  IContainerInfo,
} from '../../core/types';
import { extractLettersAndNumbers } from '../../core/utils/common';
import createEventFile, {
  generatorFuncCode,
} from '../../core/utils/createEventFile';
import { generateFunction } from '../../core/utils/jsExpression';
import { getImportFrom } from '../../utils/depsHelper';
import { shouldUsedGlobalData } from '../../utils/globalDataSource/general';
import {
  CUSTOM_ACTION_CHUNK_NAME,
  DATA_SOURCE_CHUNK_NAME,
  LIFE_CYCLE_CHUNK_NAME,
  PAGE_TOOL_CHUNK_NAME,
} from './const';

export interface PluginConfig {
  fileType?: string;
  exportNameMapping?: Record<string, string>;
  normalizeNameMapping?: Record<string, string>;
  exclude?: string[];
}

const pluginFactory: BuilderComponentPluginFactory<PluginConfig> = (
  config?,
) => {
  const cfg = {
    fileType: FileType.TS,
    exportNameMapping: {},
    normalizeNameMapping: {},
    ...config,
  };

  const plugin: BuilderComponentPlugin = async (pre: ICodeStruct) => {
    const next: ICodeStruct = {
      ...pre,
    };

    const ir = next.ir as IContainerInfo;
    const hasCustomFunctions =
      ir?.customFuctions && ir?.customFuctions.length > 0;
    // 字符串容器
    const imperativeContent: string[] = hasCustomFunctions
      ? ['customActionMap']
      : [];
    // 要导出的变量
    const exportVars: string[] = [];

    const subModule = [
      'use',
      upperFirst(extractLettersAndNumbers(last(ir.moduleName.split('/'))!)),
    ].join('');

    const content = await createEventFile(
      { containerInfo: ir, contextVars: ['customActionMap'] },
      async ({ deconstructionContextCode, plugins }) => {
        // 生成生命周期
        const lifeCycleCode = async () => {
          const events = ir.events || {};
          const keys = Object.keys(events);

          plugins.addEntryCode(() => {
            return `import useLifeCycle from '@/hooks/useLifeCycle';`;
          });

          let lifeCycleCallHook = [
            `
          // 获取生命周期
          const { useMount, useStateUpdate, useUnmounted } = useLifeCycle({
            monutDeps: [
              ${[
                'dataReadyComplete',
                shouldUsedGlobalData(ir.globalDataSource) &&
                  'globalDataReadyComplete',
              ]
                .filter(Boolean)
                .join(',')}
            ],
            stateDeps: [state],
            mountCond: () => ${[
              'dataReadyComplete',
              shouldUsedGlobalData(ir.globalDataSource) &&
                'globalDataReadyComplete',
            ]
              .filter(Boolean)
              .join('&&')},
          })
        `,
          ];

          // 非页面类型， 业务组件的事件为空时
          if (!keys.length) return lifeCycleCallHook.join('\n');

          // 页面加载完成
          if (hasCustomFunctions || events?.useEffect) {
            const mountedCall = await generatorFuncCode({ type: 'Anonymous' });

            if (events.useEffect) {
              // 定义事件
              const didMount = await generatorFuncCode({
                type: 'arrowFunction',
                functionName: 'didMount',
                prefix: 'async',
              });

              // 生成函数体
              didMount.appendFuncBody(() =>
                generateFunction(
                  events?.useEffect,
                  {
                    name: ir.platform,
                  },
                  { ir, options: next.contextData.options },
                ),
              );

              // 生成函数
              lifeCycleCallHook.push(didMount.toString());

              // 在生命周期后调用
              mountedCall.appendFuncBody(() => `didMount()`);
            }

            if (hasCustomFunctions) {
              mountedCall.appendFuncBody(
                () => `
              // 挂载自定义事件
              customFuncMapping.add(customActionId, customActionMap);
            `,
              );
            }

            lifeCycleCallHook.push(`
            // 页面加载完成
            useMount(${mountedCall.toString()});
          `);
          }

          // 状态变化
          if (events?.stateChange) {
            // 定义事件
            const stateChangeFunc = await generatorFuncCode({
              type: 'arrowFunction',
              functionName: 'stateChange',
              prefix: 'async',
            });
            stateChangeFunc.appendFuncBody(() => {
              return generateFunction(
                events.stateChange,
                { name: ir.platform },
                { ir, options: next.contextData.options },
              );
            });
            lifeCycleCallHook.push(stateChangeFunc.toString());

            // 触发事件调用
            const stateChangeCall = await generatorFuncCode({
              type: 'Anonymous',
            });
            stateChangeCall.appendFuncBody(() => `stateChange()`);

            lifeCycleCallHook.push(`
            // 组件状态发生变化
            useStateUpdate(${stateChangeCall.toString()});
          `);
          }

          // 页面卸载
          if (hasCustomFunctions || events.willUnmount) {
            const unmountedCall = await generatorFuncCode({
              type: 'Anonymous',
            });

            if (events.willUnmount) {
              // 定义事件
              const willUnmount = await generatorFuncCode({
                type: 'arrowFunction',
                functionName: 'willUnmount',
                prefix: 'async',
              });

              // 生成函数体
              willUnmount.appendFuncBody(() =>
                generateFunction(
                  events?.willUnmount,
                  {
                    name: ir.platform,
                  },
                  { ir, options: next.contextData.options },
                ),
              );

              // 生成函数
              lifeCycleCallHook.push(willUnmount.toString());

              // 在生命周期后调用
              unmountedCall.appendFuncBody(() => `willUnmount()`);
            }

            if (hasCustomFunctions) {
              unmountedCall.appendFuncBody(
                () => `
              // 卸载自定义事件
              customFuncMapping.remove(customActionId);
            `,
              );
            }

            lifeCycleCallHook.push(`
            // 页面将要卸载
            useUnmounted(${unmountedCall.toString()});
          `);
          }

          // 弹窗确定
          if (events?.onOk) {
            const funcName = 'onOk';
            exportVars.push(funcName);
            imperativeContent.push(funcName);

            // 定义事件
            const onOkFunction = await generatorFuncCode({
              type: 'arrowFunction',
              functionName: funcName,
              prefix: 'async',
            });
            onOkFunction.insertFuncDefineTop(() => `\n// 关闭弹窗`);

            // 生成函数体
            onOkFunction.appendFuncBody(() =>
              generateFunction(
                events?.onOk,
                {
                  name: ir.platform,
                },
                { ir, options: next.contextData.options },
              ),
            );

            lifeCycleCallHook.push(onOkFunction.toString());
          }

          // 弹窗取消
          if (events.onCancel) {
            const funcName = 'onCancel';
            exportVars.push(funcName);
            imperativeContent.push(funcName);
            // 定义事件
            const onCancel = await generatorFuncCode({
              type: 'arrowFunction',
              functionName: funcName,
              prefix: 'async',
            });

            onCancel.insertFuncDefineTop(() => `\n// 确定事件`);

            // 生成函数体
            onCancel.appendFuncBody(() =>
              generateFunction(
                events?.onCancel,
                {
                  name: ir.platform,
                },
                { ir, options: next.contextData.options },
              ),
            );

            lifeCycleCallHook.push(onCancel.toString());
          }

          return lifeCycleCallHook.join('\n');
        };

        return `
        const ${subModule} = (context: Record<string, any>) => {
          ${deconstructionContextCode}
          ${await lifeCycleCode()}
          
          return {
            ${exportVars.filter(Boolean).join(',')}
          }
        }
        export default ${subModule}
      `;
      },
    );

    next.chunks.push({
      type: ChunkType.STRING,
      fileType: cfg.fileType,
      name: PAGE_TOOL_CHUNK_NAME.PageHookFile,
      subModule,
      content,
      linkAfter: [
        ...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.ConstructorStart],
      ],
    });

    let callContainerHookEequalLeft = `const { ${exportVars
      .filter(Boolean)
      .join(',')} } = `;
    if (!exportVars.filter(Boolean).length) {
      callContainerHookEequalLeft = '';
    }

    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: PAGE_TOOL_CHUNK_NAME.CallContainerHook,
      content: `
        \n 
       ${callContainerHookEequalLeft} ${subModule}(${
        hasCustomFunctions ? `{...context, customActionMap}` : 'context'
      })
        \n
      `,
      linkAfter: [
        CUSTOM_ACTION_CHUNK_NAME.ImperativeHandle,
        PAGE_TOOL_CHUNK_NAME.useMergeContextCallHook,
        ...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.ConstructorStart],
        DATA_SOURCE_CHUNK_NAME.CallDataSource,
        PAGE_TOOL_CHUNK_NAME.PageTooL,
      ],
    });

    const imperativeCodes = imperativeContent.filter(Boolean);
    if (imperativeCodes.length) {
      // 在useImperativeHandle暴漏onOk/onCancel/customActionMap方法
      next.chunks.push({
        type: ChunkType.STRING,
        fileType: cfg.fileType,
        name: LIFE_CYCLE_CHUNK_NAME.UseImperativeHandleContent,
        content: `${imperativeCodes.join(',')},`,
        linkAfter: [LIFE_CYCLE_CHUNK_NAME.UseImperativeHandleStart],
      });
    }

    // 在文件头引入
    next.ir.deps.push(getImportFrom(`./${subModule}`, subModule, false));
    return next;
  };
  return plugin;
};

export default pluginFactory;
