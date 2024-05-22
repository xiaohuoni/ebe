import { LXProjectOptions, ResultFile } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(
  config?: LXProjectOptions,
): [string[], ResultFile] {
  const isMobile = config?.platform === 'h5';
  const file = createResultFile(
    'withPageHOC',
    'tsx',
    `import React, { useContext, useEffect, useState, useRef, useMemo } from 'react';
    import { api as baseApi } from '@/services/api';
    import { messageApi } from '@/utils/messageApi';
import locales from '@lingxiteam/engine-${
      isMobile ? 'app' : 'pc'
    }/es/utils/locales';
import { pageStaticData } from '@/components/Pageview';
import BannerModal from '@/components/BannerModal';
import ExpBusiObjModal from '@/components/ExpBusiObjModal';
import { createRenderId } from '@/utils/customFuncMapping';
import ImportBusiObjModal from '@/components/ImportBusiObjModal';
import ExpSQLServiceModal from "@/components/ExpSQLServiceModal";
import * as functorsMap from '@/utils/functors';
import Sandbox from '@lingxiteam/engine-sandbox';
import {
  i18n,
} from '@lingxiteam/engine-utils';
import { useLocation } from 'alita';
import { parse } from 'qs';
import lcdpApi from '@/utils/lcdpApi';
import { Context } from './Context/context';
import assetHelper from '@lingxiteam/engine-assets';
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

export interface PageProps {
  CMDGenerator?: any;
  injectData?: any;
  state: any;
  [key: string]: any;
}
export interface PageHOCOptions {
  renderId: string;
  dataSource?: any[];
  defaultState: any;
  hasLogin?: boolean;
}
export const withPageHOC = (
  WrappedComponent: React.FC<PageProps>,
  options: PageHOCOptions,
) => {
  return React.forwardRef((props: any, ref) => {
    const renderId = props?.$$componentItem?.uid ?? options.renderId;
    const location = useLocation();
    const refs = useRef<Record<string, any>>({}).current;
    // 挂载自定义事件
    const customActionId = useRef<string>();
    const { ModalManagerRef, refs: renerRefs, appId } = useContext(Context);
    const ExpBusiObjModalRef = React.useRef<any>();
    const ExpSQLServiceModalRef = React.useRef<any>();
    const ImportBusiObjModalRef = React.useRef<any>();
    const [loading, setLoading] = useState(true);
    const sandBoxContext = useRef<Record<string, any>>({});
    // 组件状态的处理
    const state = useMemo(() => {
      return {
        ...options.defaultState,
        ...props.state,
      };
    }, [props.state]);

    const urlParam = useMemo(() => {
      const queryParams = parse((location?.search ?? '?')?.split('?')[1]);
      return ({
        ...queryParams,
        ...props.urlParam
      })
    }, [props.urlParam])

    // 指令定时器存储
    const actionTimerRef = useRef<Record<string, any>>({
      timeout: {},
      interval: {},
    });

    // 清除定时器
    const clearActionTimer = (timerName: string) => {
      const actionTimer = actionTimerRef.current;
      
      if (actionTimer.interval?.[timerName]) {
        clearInterval(actionTimer.interval[timerName]);
        actionTimer.interval[timerName] = null;
      }

     if (actionTimer.timeout?.[timerName]) {
        clearTimeout(actionTimer.timeout[timerName]);
        actionTimer.timeout[timerName] = null;
      }
    }

   const addActionTimer = (type: 'interval' | 'timeout' = 'timeout', timerName: string, callback: () => void, time: number = 0) => {
    const actionTimer = actionTimerRef.current;
    clearActionTimer(type);

    const delay = time > 0 ? +time : 0;

    if (type === 'interval') {
      actionTimer.interval[timerName] = setInterval(
        () => {
          callback?.();
        },
        delay
      );
    }
    if (type === 'timeout') {
      actionTimer.interval[timerName] = setTimeout(
        () => {
          callback?.();
        },
        delay
      );
    }

   } 
    const setComponentRef = (r: any, comId: string) => {
      if (r) {
        // @ts-ignore
        refs[comId] = r;
      }
      renerRefs.setSystemRef(renderId, refs);
    }
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
    const init = async () => {
      const getStaticAttrByKeys = async (attrNbrKeys: string[]) => {
        const reqNbrKeys = attrNbrKeys.filter((key) => !cacheKeys.has(key));
        if (reqNbrKeys.length) {
          const params = {
            attrCodes: reqNbrKeys,
            appId,
            renderId,
          };
          const res: any = await baseApi.batchGetAppStaticAttr(params);
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
        pageStaticData[renderId] ?? [],
      );
      const injectData = {
        getEngineApis: () => {
          return {
            BannerModal,
            stateListener: () => { },
            sandBoxLoadModule: () => { },
            ...baseApi,
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
              return refs.value?.[compId]?.visible;
            },
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
            service: {
              ...baseApi,
            },
          };
        },
      };
      const getValue = (id: string, stateName?: string) => {
        if (stateName) {
          // @ts-ignore
          return refs.value?.[id]?.[stateName];
        }
        // @ts-ignore
        return refs.value?.[id]?.value;
      };
      // 设置默认属性
      BannerModal.defaultProps = {
        // @ts-ignore
        api: baseApi,
      };
      const defaultContext = {
        getValue,
        urlParam,
        // TODO 需要将lcdpApi移动过来
        lcdpApi,
        getStaticDataSourceService,
        ModalManagerRef,
        ExpBusiObjModalRef,
        ExpSQLServiceModalRef,
        ImportBusiObjModalRef,
        closeModal: (modalId: string) => {
          ModalManagerRef.current?.closeModal(modalId, renderId);
        },
      };
      const sandBoxRun = (
        code: string,
        extendAllowMap: Record<string, any> = {},
      ) => {
        return Sandbox.run(code, {
          ...defaultContext,
          ...extendAllowMap,
        });
      };
      sandBoxContext.current= {
        ...injectData,
        ...defaultContext,
        sandBoxRun,
        attrDataMap,
        functorsMap,
        state,
        messageApi,
      }
      setLoading(false);
    };
    useEffect(() => {
      init();
      customActionId.current = createRenderId(renderId)
    }, []);
    // // 可以在这里加 loading
    if (loading === true) {
      return <div></div>;
    }
    return (
      <>
        <WrappedComponent
          {...props}
          urlParam={urlParam}
          ref={ref}
          refs={refs}
          setComponentRef={setComponentRef}
          lcdpParentRenderId={props.lcdpParentRenderId}
          renerRefs={renerRefs}
          lcdpApi={lcdpApi}
          injectData={{getEngineApis: sandBoxContext.current.getEngineApis}}
          attrDataMap={sandBoxContext.current.attrDataMap}
          ModalManagerRef={ModalManagerRef}
          sandBoxContext={sandBoxContext}
          functorsMap={functorsMap}
          state={state}
          addActionTimer={addActionTimer}
          clearActionTimer={clearActionTimer}
          ExpSQLServiceModalRef={ExpSQLServiceModalRef}
          ExpBusiObjModalRef={ExpBusiObjModalRef}
          ImportBusiObjModalRef={ImportBusiObjModalRef}
          BannerModal={BannerModal}
          customActionId={customActionId.current}
        />
        ${
          isMobile
            ? ''
            : `<ExpBusiObjModal
          ref={ExpBusiObjModalRef}
          key={\`ExpBusiObjModal-\${renderId}\`}
          // api={baseApi}
          // utils写内部了，看后面需不需要整合
          // utils={{}}
          getLocale={getLocale}
        />`
        }
        ${
          isMobile
            ? ''
            : `<ImportBusiObjModal
      ref={ImportBusiObjModalRef}
      key={\`ImportBusiObjModal-\${renderId}\`}
      // TODO: 控件内部还存在需要 appId 和 pageId 的场景
      // appId={appId}
      // pageId={pageId}
      // utils写内部了，看后面需不需要整合
      // utils={renderCtx.utils}
      getLocale={getLocale}
      />`
        }
    ${
      isMobile
        ? ''
        : `<ExpSQLServiceModal
      ref={ExpSQLServiceModalRef}
      key={\`ExpSQLServiceModal-\${renderId}\`}
      // TODO: 控件内部还存在需要 appId 的场景
      // appId={appId}
      // api={baseApi}
      // pageId={renderId}
      // utils写内部了，看后面需不需要整合
      // utils={{}}
      getLocale={getLocale}
    />`
    }
      </>
    );
  });
};
`,
  );

  return [['src', 'utils'], file];
}
