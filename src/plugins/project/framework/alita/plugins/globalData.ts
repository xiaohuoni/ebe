import { COMMON_CHUNK_NAME } from '../../../../../core/const/generator';
import {
  BuilderComponentPlugin,
  BuilderComponentPluginFactory,
  ChunkType,
  FileType,
  ICodeStruct,
} from '../../../../../core/types';
import { shouldUsedGlobalData } from '../../../../../utils/globalDataSource/general';
import { getGlobalDataExportNamesCode } from '../../../../../utils/globalDataSource/template';
import { getDSFilterName } from './dataSource/type';

const pluginGlobalData: BuilderComponentPluginFactory<unknown> = () => {
  const plugin: BuilderComponentPlugin = async (pre: ICodeStruct) => {
    const next: ICodeStruct = {
      ...pre,
    };

    const ir = next.ir as any;

    if (!shouldUsedGlobalData(ir?.globalDataSource)) {
      return next;
    }
    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TS,
      name: COMMON_CHUNK_NAME.InternalDepsImport,
      content: `
        import { useEffect, useState, useMemo, useRef } from 'react';
        import { useModel } from 'alita';
        import useReactive from '@/utils/hooks/useReactive'

        interface ContextOptions {
          urlParam?: Record<string, any>;
          routerData?: Record<string, any>;
          state?: Record<string, any>;
          lcdpApi?: any;
        }

        const useGlobalData = (context: ContextOptions) => {
          // 数据源是否准备完成
          const [globalDataReadyComplete, setDataReadyComplete] = useState(false);
          ${Object.keys(ir.globalDataSource)
            .map((name) => {
              const {
                namespace,
                updateFunctionName,
                reloadFunctionName,
                resetFunctionName,
                dataName,
                readyCompleteName,
                initialFunctionName,
              } = ir.globalDataSource[name];
              return `const {
              ${dataName},
              ${getDSFilterName(dataName)},
              ${readyCompleteName},
              ${updateFunctionName},
              ${reloadFunctionName},
              ${resetFunctionName},
              ${initialFunctionName},
            } = useModel("${namespace}")`;
            })
            .join(';')}

            const globalDataRef = useRef<{
              ${Object.keys(ir.globalDataSource).map((name) =>
                [
                  `${name}: typeof ${name}`,
                  `${getDSFilterName(name)}: typeof ${getDSFilterName(name)}`,
                ].join(','),
              )}
            }>({
              ${Object.keys(ir.globalDataSource).map((name) =>
                [name, getDSFilterName(name)].join(','),
              )}
            });
            const globalData = useMemo(() => {
              Object.assign(globalDataRef.current, {
                ${Object.keys(ir.globalDataSource).map((name) =>
                  [name, getDSFilterName(name)].join(','),
                )}
              });

              return globalDataRef.current;
            }, [${Object.keys(ir.globalDataSource).map((name) =>
              [name, getDSFilterName(name)].join(','),
            )}]);

          useEffect(() => {
            ${
              Object.keys(ir.globalDataSource).length === 0
                ? 'setDataReadyComplete(true)'
                : ''
            }
            ${
              Object.keys(ir.globalDataSource).length > 0
                ? `
         Promise.all([${Object.keys(ir.globalDataSource)
           .map((name) => {
             const { initialFunctionName } = ir.globalDataSource[name];
             return `${initialFunctionName}(context)`;
           })
           .join(',')}]).finally(() => {
                setDataReadyComplete(true);
              })
        `
                : ''
            }
          }, []);
          
          return {
            ${getGlobalDataExportNamesCode(ir.globalDataSource)}
          }
        };
        export default useGlobalData;
      `,
      linkAfter: [COMMON_CHUNK_NAME.ExternalDepsImport],
      subModule: 'useGlobalData',
    });
    return next;
  };
  return plugin;
};

export default pluginGlobalData;
