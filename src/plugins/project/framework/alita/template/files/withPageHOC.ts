import { LXProjectOptions, ResultFile } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(
  config?: LXProjectOptions,
): [string[], ResultFile] {
  const isMobile = config?.platform === 'h5';

  const file = createResultFile(
    'withPageHOC',
    'tsx',
    `import { api as baseApi } from '@/services/api';
${
  isMobile
    ? `import {
  messageApi,
  Modal,
} from '@lingxiteam/engine-app/es/components/MessageApi';`
    : `import { message as messageApi, Modal } from 'antd';`
}
import locales from '@lingxiteam/engine-${
      isMobile ? 'app' : 'pc'
    }/es/utils/locales';
${
  isMobile
    ? ''
    : `import { ExpBusiObjModal } from '@lingxiteam/engine-pc/es/components/ExpBusiObjModal';`
}

import { pageStaticData } from '@/components/Pageview';
import { PLATFORM } from '@/constants';
import assetHelper from '@lingxiteam/engine-assets';
import { getRunningUtils } from '@lingxiteam/engine-platform';
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
import { SandBoxContext } from '@lingxiteam/types';
import { useLocation } from 'alita';
import { merge } from 'lodash';
import { parse } from 'qs';
import React, { useContext, useEffect, useState, useRef } from 'react';
import { Context } from './Context/context';
import { createId } from '../utils/historytool'

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
    // TODO: 和 service 的时候一起处理
    const api: any = {};
    const location = useLocation();
    const urlParam = parse((location?.search ?? '?')?.split('?')[1]);
    const refs = useRef<Record<string, any>>({}).current;
    const { ModalManagerRef, refs: renerRefs, appId } = useContext(Context);
    const renderId = createId(location.pathname)
    const setComponentRef = (r: any, comId: string) => {
      if (r) {
        // @ts-ignore
        refs[comId] = r;
      }
      renerRefs.setSystemRef(renderId, refs);
    }
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
    const pageId = props?.pageId ?? options?.pageId;
    const init = async () => {
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
            service: {
              ...api,
              ...baseApi.service
            },
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
        lcdpApi: api,
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
      const sandBoxRun = (
        code: string,
        extendAllowMap: Record<string, any> = {},
      ) => {
        return Sandbox.run(code, {
          ...defaultContext,
          ...extendAllowMap,
        });
      };

      const componentItem = {
        appId,
        pageId,
        platform: PLATFORM,
      };
      setData({
        ...defaultContext,
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
            ...defaultContext,
            customActionMap: customActionMapRef.current,
          } as any);
        }, 100);
      }
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
        <WrappedComponent
          {...data}
          {...props}
          urlParam={urlParam}
          forwardedRef={ref}
          customActionMapRef={customActionMapRef}
          refs={refs}
          setComponentRef={setComponentRef}
          renderId={renderId}
        />
        ${
          isMobile
            ? ''
            : `<ExpBusiObjModal
          ref={ExpBusiObjModalRef}
          key={\`ExpBusiObjModal-\${pageId}\`}
          api={data.utils}
          pageId={pageId}
          appId={appId}
          utils={data.utils}
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
