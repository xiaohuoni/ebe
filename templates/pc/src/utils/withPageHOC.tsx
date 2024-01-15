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
import locales from '@lingxiteam/engine-pc/es/utils/locales';
import { createApp, getApis, user } from '@lingxiteam/engine-platform';
import monitt from '@lingxiteam/engine-plog';
import AwaitHandleData from '@lingxiteam/engine-render-core/es/utils/AwaitHandleData';
import EngineMapping from '@lingxiteam/engine-render/es/utils/EngineMapping';
import Sandbox from '@lingxiteam/engine-sandbox';
import {
  copyText,
  i18n,
  LcdpTerminalType,
  processCustomParams,
  SERVICE_SOURCE,
  SERVICE_SOURCE_PARAMS,
  transformValueDefined,
} from '@lingxiteam/engine-utils';
import { $$compDefine, SandBoxContext } from '@lingxiteam/types';
import { history } from 'alita';
import { message as messageApi, Modal } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from './Context/context';

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
  dataSource: any[];
  defaultState: any;
  hasLogin?: boolean;
}

export const withPageHOC = (
  WrappedComponent: React.FC<PageProps>,
  options: PageHOCOptions,
) => {
  return (props: any) => {
    const { ModalManagerRef, refs, appId } = useContext(Context);
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
    const init = async () => {
      // 页面容器会传 pageId
      const pageId = props?.pageId ?? options?.pageId;
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
        beforeCreateApp: () => options?.hasLogin && user.init(),
      });
      const awaitHandleData = new AwaitHandleData();
      const defaultContext = {
        appId,
        pageId,
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
      const componentItem = {
        appId,
        pageId,
        platform: PLATFORM,
      };
      const engineApis = injectData.getEngineApis();
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
        )(args, {
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
          CONDrun: (arg0: any, arg1: any, arg2: SandBoxContext, arg3: any) => {
            return CONDrun(arg0, arg1, arg2, arg3, engineApis);
          },
          monitt,
          EventName,
          $$compDefine,
          Modal,
          messageApi,
          refs,
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
        });
      };
      const getValue = (id: string, stateName?: string) => {
        if (stateName) {
          // @ts-ignore
          return refs?.[id]?.[stateName];
        }
        // @ts-ignore
        return refs?.[id]?.value;
      };
      setData({
        ...context,
        CMDGenerator,
        injectData,
        refs,
        functorsMap: assetHelper.function.functorsMap,
        getValue,
        componentItem,
      });
      console.log(context);
      meta.dataDidUpdate = () => {
        console.log(context);
        setData({
          ...context,
          CMDGenerator,
          injectData,
          refs,
          functorsMap: assetHelper.function.functorsMap,
          getValue,
          componentItem,
        });
      };
    };
    useEffect(() => {
      init();
    }, []);

    if (!data || Object.keys(data).length === 0) {
      return <div>loading</div>;
    }
    return <WrappedComponent {...data} {...props} />;
  };
};
