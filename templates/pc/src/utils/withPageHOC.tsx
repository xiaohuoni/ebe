import { pageStaticData } from '@/components/Pageview';
import { PLATFORM } from '@/constants';
import assetHelper from '@lingxiteam/engine-assets';
import {
  checkIfCMDHasReturn,
  checkIfRefValue,
  checkIfRefValueByObject,
  CMDParse,
  CONDrun,
} from '@lingxiteam/engine-command';
import Meta from '@lingxiteam/engine-meta';
import { ExpBusiObjModal } from '@lingxiteam/engine-pc/es/components/ExpBusiObjModal';
import locales from '@lingxiteam/engine-pc/es/utils/locales';
import {
  createApp,
  getApis,
  getRunningUtils,
  user,
} from '@lingxiteam/engine-platform';
import monitt from '@lingxiteam/engine-plog';
import AwaitHandleData from '@lingxiteam/engine-render-core/es/utils/AwaitHandleData';
import EngineMapping from '@lingxiteam/engine-render/es/utils/EngineMapping';
import Sandbox from '@lingxiteam/engine-sandbox';
import {
  copyText,
  getStateListener,
  i18n,
  LcdpTerminalType,
  processCustomParams,
  SERVICE_SOURCE,
  SERVICE_SOURCE_PARAMS,
  transformValueDefined,
} from '@lingxiteam/engine-utils';
import { $$compDefine, SandBoxContext } from '@lingxiteam/types';
import { history, useLocation } from 'alita';
import { message as messageApi, Modal } from 'antd';
import { merge } from 'lodash';
import { parse } from 'qs';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from './Context/context';

const awaitKeys: Set<string> = new Set();
const cacheKeys: Set<string> = new Set();
const cacheAttrDataMap: any = {};
const getStaticDataSourceService = (
  ds: any[],
  labelKey: string,
  valueKey: string,
) => {
  if (!ds?.length) return [];
  if (!labelKey || !valueKey) return ds;
  return ds.map((item) => ({
    label: item[labelKey],
    value: item[valueKey],
  }));
};

export interface PageProps extends SandBoxContext {
  CMDGenerator?: any;
  injectData?: any;
  state: any;
  [key: string]: any;
}
export interface PageHOCOptions {
  pageId: string;
  dataSource?: any[];
  defaultState: any;
  hasLogin?: boolean;
}
export const withPageHOC = (
  WrappedComponent: React.FC<PageProps>,
  options: PageHOCOptions,
) => {
  return React.forwardRef((props: any, ref) => {
    const location = useLocation();
    const urlParam = parse((location?.search ?? '?')?.split('?')[1]);
    const { ModalManagerRef, refs, appId } = useContext(Context);
    const ExpBusiObjModalRef = React.useRef<any>();
    const customActionMapRef = React.useRef<any>();
    const { getLocaleLanguage, getLocale, getLocaleEnv, locale, language } =
      i18n.useLocale(
        {
          locale: props.i18n?.locale!,
          remoteLocale: props.i18n?.remoteLocale,
          language: props.i18n?.language!,
          configLocale: assetHelper.locale.locales,
        },
        locales,
      );
    const [data, setData] = useState<any>();
    let meta: Meta;
    const pageId = props?.pageId ?? options?.pageId;
    const init = async () => {
      // 页面容器会传 pageId
      const api = getApis({
        appId,
        // 页面容器会传 pageId
        pageId,
      });
      const appInst: any = await createApp({
        appId,
        isInstallComponent: false,
        isUsePermission: false,
        isCheckUsedOldFlow: false,
        isCF: false,
        isMock: false,
        dataCollect: false,
        isOpenTheme: false,
        // TODO: 页面开启免登录，页面里面又绑定了用户信息，怎么处理？
        beforeCreateApp: () => user.init(),
        // beforeCreateApp: () => options?.hasLogin && user.init(),
      });

      const getStaticAttrByKeys = async (attrNbrKeys: string[]) => {
        const reqNbrKeys = attrNbrKeys.filter((key) => !cacheKeys.has(key));
        if (reqNbrKeys.length) {
          const params = {
            attrCodes: reqNbrKeys,
            appId,
            pageId,
          };
          let res: any = {};
          if (process.env.LCDP_VERSION === '1.0.9') {
            res = await api.batchGetAppStaticAttr109(params);
          } else {
            res = await api.batchGetAppStaticAttr(params);
          }
          reqNbrKeys.forEach((key) => {
            const list = res[key];
            if (list?.length > 0) {
              cacheAttrDataMap[key] = (list || []).map((item: any) => {
                // 记录子级静态数据与编码关系
                const zattrNbrValueMap: Record<any, any[]> = {};
                if (
                  Array.isArray(item.relatedAttrSpecList) &&
                  item.relatedAttrSpecList.length
                ) {
                  const children = item.relatedAttrSpecList
                    .map((aItem: any) => {
                      if (aItem.zrelatedAttrValueList) {
                        // 记录子级编码
                        const zattrValues = new Set();
                        // 这级只做展示不做选择
                        const zChildren = aItem.zrelatedAttrValueList.map(
                          (zItem: any) => {
                            zattrValues.add(zItem.zattrValue);
                            return {
                              label: zItem.zattrValueName,
                              title: zItem.zattrValueName,
                              value: zItem.zattrValue,
                              isLeaf: false,
                            };
                          },
                        );
                        zattrNbrValueMap[aItem.zattrNbr] = [...zattrValues];
                        return zChildren;
                      }
                      return undefined;
                    })
                    .filter(Boolean)
                    .flat();
                  if (children.length) {
                    return {
                      ...item,
                      label: item.attrValueName,
                      title: item.attrValueName,
                      value: item.attrValue,
                      relatedAttrSpecList: item.relatedAttrSpecList,
                      children,
                      zattrNbrValueMap,
                    };
                  }
                }
                return {
                  ...item,
                  label: item.attrValueName,
                  title: item.attrValueName,
                  value: item.attrValue,
                  relatedAttrSpecList: item.relatedAttrSpecList,
                };
              });
              cacheKeys.add(key);
              awaitKeys.delete(key);
            }
          });
        }
        return Promise.resolve(cacheAttrDataMap);
      };

      const attrDataMap = await getStaticAttrByKeys(
        pageStaticData[pageId] ?? [],
      );
      const awaitHandleData = new AwaitHandleData();
      const platformUtils = getRunningUtils({
        appId: appId,
        pageId: pageId,
        language,
      });
      const injectData = {
        getEngineApis: () => {
          return {
            // TODO: 这需要正确的请求
            downloadFileByFileCode: () => null,
            downloadByFileId: () => null,
            getLocaleLanguage,
            getLocale,
            getLocaleEnv,
            locale,
            language,
            // 打开弹窗能力
            openModal: (data: any) =>
              ModalManagerRef.current?.openModal({
                appId,
                ...data,
              }),
            getVisible: (compId: string) => {
              // @ts-ignore
              return refs.value[compId]?.visible;
            },
            stateListener: getStateListener(pageId),
            sandBoxRun,
            sandBoxSafeRun: (
              code: string,
              extendAllowMap: Record<string, any> = {},
            ) => {
              try {
                return sandBoxRun(code, extendAllowMap);
                // eslint-disable-next-line no-empty
              } catch {}
              return undefined;
            },
            // ??? 外层和 service 都需要？
            service: api,
            ...api,
          };
        },
      };
      const engineApis = injectData.getEngineApis();
      const getValue = (id: string, stateName?: string) => {
        if (stateName) {
          // @ts-ignore
          return refs.value?.[id]?.[stateName];
        }
        // @ts-ignore
        return refs.value?.[id]?.value;
      };
      const defaultContext = {
        getValue,
        urlParam,
        appId,
        pageId,
        busiCompId: props?.busiCompId,
        // 如果是子组件，直接存父组件对象
        routerId: props?.parentEngineId ?? pageId,
        renderId: props?.parentEngineId ?? pageId,
        parentEngineId: props?.parentEngineId ?? pageId,
        engineRelation: EngineMapping.publicMethod,
        lcdpApi: appInst.lcdpApi,
        transformValueDefined,
        processCustomParams,
        SERVICE_SOURCE,
        SERVICE_SOURCE_PARAMS,
        getStaticDataSourceService,
        copy: copyText,
        LcdpTerminalType: {
          ...LcdpTerminalType,
          isH5: true,
        },
        ModalManagerRef,
        ExpBusiObjModalRef,
        addToAwaitQueue: (
          compId: string,
          functionName: string,
          ...data: any
        ) => {
          awaitHandleData.addToAwaitQueue(compId, functionName, ...data);
        },
        runAwaitQueue: (comId: string) => {
          awaitHandleData.runQueue(comId, refs);
        },
        closeModal: (modalId: string) => {
          ModalManagerRef.current?.closeModal(modalId, pageId);
        },
        utils: merge(platformUtils, engineApis),
      };
      meta = new Meta({
        SandBox: Sandbox,
        trigger: ({ relationMap }) => {
          meta.updateComponentWithRelationMap(relationMap);
        },
        pageInst: {
          dataSource: options?.dataSource || [],
        },
        service: api,
        // @ts-ignore
        context: defaultContext,
        provideData: {},
        state: {
          ...(options?.defaultState || {}),
          ...(props?.busiCompStates || {}),
          ...(props?.pageViewCompState || {}),
          ...(props?.state || {}),
        },
        engineStateChange: () => {
          console.log('engineStateChange');
        },
        dataDidUpdate: () => {
          console.log('dataDidUpdate');
        },
      });
      appInst.use(meta.globalInstance);
      // 收集内置数据
      await meta.initialData();
      const context = meta?.getContext(defaultContext);
      const sandBoxRun = (
        code: string,
        extendAllowMap: Record<string, any> = {},
      ) => {
        return Sandbox.run(code, {
          ...context,
          ...extendAllowMap,
        });
      };

      const componentItem = {
        appId,
        pageId,
        platform: PLATFORM,
      };
      const CMDGenerator = (
        targetEventData: any,
        args: any,
        EventName: string,
        $$compDefine: $$compDefine,
      ) => {
        return CMDParse(
          targetEventData,
          '',
          engineApis,
        )(
          { ...args, urlParam },
          {
            ...context,
            api,
            checkIfCMDHasReturn: (cmddata: any[]) => {
              return checkIfCMDHasReturn(cmddata, engineApis);
            },
            checkIfRefValue: (val: string, field: any, cmd: any) => {
              return checkIfRefValue(val, field, cmd, engineApis);
            },
            checkIfRefValueByObject: (
              val: string | Record<string, any>,
              field: Record<string, any>,
              cmd?: any,
            ) => {
              return checkIfRefValueByObject(val, field, cmd, engineApis);
            },
            CMDParse: (cmddata: string | any[], actionname?: string) => {
              return CMDParse(cmddata, actionname, engineApis);
            },
            CONDrun: (
              arg0: any,
              arg1: any,
              arg2: SandBoxContext,
              arg3: any,
            ) => {
              return CONDrun(arg0, arg1, arg2, arg3, engineApis);
            },
            customActionMap: customActionMapRef.current,
            monitt,
            EventName,
            $$compDefine,
            Modal,
            messageApi,
            refs: refs.value,
            utils: engineApis,
            history,
            sandBoxRun: (
              code: string,
              extendAllowMap: Record<string, any> = {},
            ) => {
              return Sandbox.run(code, {
                ...context,
                ...engineApis,
                ...extendAllowMap,
              });
            },
          },
        );
      };
      setData({
        ...context,
        CMDGenerator,
        injectData,
        refs,
        functorsMap: assetHelper.function.functorsMap,
        componentItem,
        attrDataMap,
      });
      if (!props?.parentEngineId) {
        setTimeout(() => {
          // 太早设置，ref 还未渲染！
          EngineMapping.add(pageId, pageId, {
            ...context,
            customActionMap: customActionMapRef.current,
          });
        }, 100);
      }
      meta.dataDidUpdate = () => {
        setData({
          ...context,
          CMDGenerator,
          injectData,
          refs,
          functorsMap: assetHelper.function.functorsMap,
          componentItem,
          attrDataMap,
        });
      };
    };
    useEffect(() => {
      init();
    }, []);

    // 可以在这里加 loading
    if (!data || Object.keys(data).length === 0) {
      return <div></div>;
    }
    return (
      <>
        {' '}
        <WrappedComponent
          {...data}
          {...props}
          urlParam={urlParam}
          forwardedRef={ref}
          customActionMapRef={customActionMapRef}
        />
        <ExpBusiObjModal
          ref={ExpBusiObjModalRef}
          key={`ExpBusiObjModal-${pageId}`}
          api={data.utils}
          pageId={pageId}
          appId={appId}
          utils={data.utils}
          getLocale={getLocale}
        />
      </>
    );
  });
};
