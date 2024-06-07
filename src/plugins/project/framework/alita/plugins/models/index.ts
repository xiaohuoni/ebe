import { camelCase, upperFirst } from 'lodash';
import { COMMON_CHUNK_NAME, LXGlobalDataInfo } from '../../../../../../core';
import {
  BuilderComponentPlugin,
  BuilderComponentPluginFactory,
  ChunkType,
  FileType,
  ICodeStruct,
} from '../../../../../../core/types';
import { parse2Var } from '../../../../../../core/utils/compositeType';
import { generatorType, getDSFilterName } from '../dataSource/type';
import { filterObjectEmptyField, generateParams } from '../dataSource/utils';

const pluginModels: BuilderComponentPluginFactory<unknown> = () => {
  const plugin: BuilderComponentPlugin = async (pre: ICodeStruct) => {
    const next: ICodeStruct = {
      ...pre,
    };

    const ir = next.ir as LXGlobalDataInfo;

    const globalDataConfig = ir.frontendDatasourceContent;

    const modelTypeName = upperFirst(
      camelCase([ir.camelCaseName, 'model'].join(' ')),
    );

    const source = globalDataConfig?.source as any;
    const initialValue = generateParams(globalDataConfig, source);

    const {
      config: { options, isInit },
      name,
      id,
    } = globalDataConfig;

    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TS,
      name: COMMON_CHUNK_NAME.FileGlobalDataModel,
      content: `
        import { useState } from "react";
        import cloneDeep from 'lodash/cloneDeep';
        import { fetchQueryObject, fetchQueryService } from '@/utils/dataSource';
        import ArrayUtil from '@/utils/array';
        import useSetState from '@/hooks/useSetState';
        import { ARRAY_OPERATE_TYPE } from '@/constants';

        export type ${modelTypeName} = {
          ${generatorType(ir.frontendDatasourceContent)}\n
          [key: string]: any;
        };

        interface Update${ir.camelCaseName}ModelOptions {
          /**
           * 全局数据源 
           */
          globalData: Record<string, any>;

          /**
           * 更新数据源的路径
           */
          path: string;
        
          /**
           * 目标值
           */
          value?: any;
        
          /**
           * 需要过滤的变量
           */
          predicate?: (item: any, index: number) => boolean;
        
          /**
           * 操作类型 数组时需要
           */
          operateType?: 0 | 1 | 2 | 3;
        
          /**
           * 数组或者对象类型
           */
          type: 'object' | 'array';
        
          /**
           * 是否局部赋值
           */
          onlySetPatch: boolean;
        }

        export interface ContextOptions {
          urlParam?: Record<string, any>;
          routerData?: Record<string, any>;
          state?: Record<string, any>;
          lcdpApi?: any;
        }

        const ${ir.moduleName} = () => {

          const initialData:  Partial<${modelTypeName}> = {
            ${initialValue},
          };

          const [model, setModel] = useSetState<${modelTypeName}>(initialData);
          const [${ir.readyCompleteName}, setReadyComplete] = useState(false);
          const [${ir.camelCaseName}Loading, setLoading] = useState(false);
          const [{ urlParam, routerData, state, lcdpApi }, setContext] = useState<ContextOptions>({});

          const initialModel = (context: ContextOptions) => {
            const { urlParam, routerData, state, lcdpApi } = context;
            ${
              !isInit || source === 'custom'
                ? 'return Promise.resolve(initialData)'
                : ''
            }
            ${
              isInit && source === 'object'
                ? `
            /**
             * 加载${name}数据源
             */
            return fetchQueryObject(
              ${parse2Var(options.url)},
              ${parse2Var({
                method: options.method,
                sceneCode: `$urlParam?.sceneCode ?? ''$`,
                busiObjectInstId: options.service?.appServiceId,
                actionId: id,
                busiObjectId: options.object?.busiObjectId,
                attrs: `$initialData.${getDSFilterName(name)}$`,
              })}
            ).catch(console.log)`
                : ''
            }
            ${
              isInit && source === 'service'
                ? `
            /**
             * 加载${name}数据源
             */
            return fetchQueryService(
              ${parse2Var(
                filterObjectEmptyField({
                  _capabilityCode: options.service?._capabilityCode,
                  _apiCode: options.service?._apiCode,
                  api: options.service?.api,
                  _source: options.service?._source,
                  _serviceId: options.service?._serviceId,
                  versionCode: options.service?.versionCode,
                  serviceCode: options.service?.serviceCode,
                  serviceMethod: options.service?.serviceMethod,
                }),
              )},
              initialData.${getDSFilterName(name)}
            ).catch(console.log)`
                : ''
            }
          }

          /**
           * 初始化数据源
           */
          const ${ir.initialFunctionName} = (context: ContextOptions) => {
            setContext(context);
            if (${ir.readyCompleteName}) return Promise.resolve(model);

            const newData: ${modelTypeName} = cloneDeep(initialData);
            setLoading(true);
           return initialModel(context).catch((err) => {
              console.log('全局数据源${ir.dataName}初始化失败');
              console.log(err);
            }).then(res => {
              setModel({
                ${ir.dataName}: res,
              })
            })
            .finally(() => {
              setLoading(false);
              setReadyComplete(true);
            });
          };

          // 更新数据源
          const ${ir.updateFunctionName} = ({
            globalData,
            path,
            value,
            type,
            operateType,
            predicate = () => false,
            onlySetPatch = true
          }: Update${ir.camelCaseName}ModelOptions) => {
            try {
              // 对象类型 直接赋值
              if (type === 'object') {
                ArrayUtil.updateObject({
                  data: model,
                  path,
                  value,
                  isPatch: onlySetPatch,
                });
              } else if (type === 'array') {
                if (operateType === ARRAY_OPERATE_TYPE.ADD) {
                  ArrayUtil.push(model, path, value);
                } else if (operateType === ARRAY_OPERATE_TYPE.DELETE) {
                  ArrayUtil.remove(model, path, predicate);
                } else if (operateType === ARRAY_OPERATE_TYPE.REPLACE) {
                  ArrayUtil.replace(${ir.dataName}, path, value);
                } else if (operateType === ARRAY_OPERATE_TYPE.UPDATE) {
                  ArrayUtil.update(
                    {
                      data: ${ir.dataName},
                      path,
                      value,
                      isPatch: onlySetPatch,
                    },
                    predicate,
                  );
                }
              }

              const nextModel = cloneDeep(model?.${ir.dataName});
              globalData.${ir.dataName} = nextModel;
              return setModel({
                ${ir.dataName}: nextModel,
              }).then(() => globalData);

            } catch (error) {
              return Promise.reject(error as Error);
            }
          }

          ${
            source === 'custom'
              ? `
            // 刷新全局数据源 
            const ${ir.reloadFunctionName} = (params?: any, globalData: Record<string, any>) => {
              globalData.${ir.dataName} = params;
              setModel({
                ${ir.dataName}: params;
              });
            }
          `
              : ''
          }
          
          ${
            source === 'object'
              ? `
          /**
           * 刷新对象数据源
           */
          const ${ir.reloadFunctionName} = (
            url: string,
            options: any,
            params: any,
            globalData: Record<string, any>,
          ) => {
            setLoading(true);
            return fetchQueryObject(url, {
              ...options,
              attrs: params,
            })
              .then((res) => {
                globalData.${ir.dataName} = res;
                return setModel({
                  ${ir.dataName}: res,
                }).then(() => globalData);
              })
              .catch(console.log)
              .finally(() => {
                setLoading(false);
              });
          };
          
          `
              : ''
          }
          ${
            source === 'service'
              ? `
          /**
           * 刷新对象数据源
           */
          const ${ir.reloadFunctionName} = (
            service: any,
            params: any,
            globalData: Record<string, any>,
          ) => {
          setLoading(true);
          return fetchQueryService(service, params)
            .then((res) => {
              globalData.${ir.dataName} = res;
              return setModel({
                ${ir.dataName}: res,
              }).then(() => globalData);
            })
            .catch(console.log)
            .finally(() => {
              setLoading(false);
            })
          };
          `
              : ''
          }

          // 重置数据源
          const ${ir.resetFunctionName} = (globalData: Record<string, any>) => {
            const nextModel: any = ${
              ['objectArray', 'array'].includes(globalDataConfig.type)
                ? '[]'
                : '{}'
            };
            globalData.${ir.dataName} = nextModel;
            return setModel({
              ${ir.dataName}: nextModel,
            }).then(() => globalData);
          };

          return {
            ${getDSFilterName(name)}: model?.${getDSFilterName(name)},
            ${ir.dataName}: model?.${name},
            ${ir.readyCompleteName},
            ${ir.camelCaseName}Loading,
            ${ir.initialFunctionName},
            ${ir.resetFunctionName},
            ${ir.updateFunctionName},
            ${ir.reloadFunctionName},
          }
        };

        export default ${ir.moduleName};
      `,
      linkAfter: [COMMON_CHUNK_NAME.ExternalDepsImport],
      subModule: ir.moduleName,
    });

    return next;
  };
  return plugin;
};

export default pluginModels;
