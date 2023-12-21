import { PLATFORM } from '@/constants';
import {
  messageApi,
  Modal,
} from '@lingxiteam/engine-app/es/components/MessageApi';
import assetHelper from '@lingxiteam/engine-assets';
import {
  checkIfCMDHasReturn,
  checkIfRefValue,
  checkIfRefValueByObject,
  CMDParse,
  CONDrun,
} from '@lingxiteam/engine-command';
import Meta from '@lingxiteam/engine-meta';
import { createApp, getApis, user } from '@lingxiteam/engine-platform';
import monitt from '@lingxiteam/engine-plog';
import AwaitHandleData from '@lingxiteam/engine-render-core/es/utils/AwaitHandleData';
import Sandbox from '@lingxiteam/engine-sandbox';
import {
  copyText,
  LcdpTerminalType,
  processCustomParams,
  SERVICE_SOURCE,
  SERVICE_SOURCE_PARAMS,
  transformValueDefined,
} from '@lingxiteam/engine-utils';
import { $$compDefine, SandBoxContext } from '@lingxiteam/types';
import { history } from 'alita';
import React, { useEffect, useRef, useState } from 'react';
import ModalView from './Modal';

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
  appId: string;
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
    const ModalManagerRef = useRef<any>(); // 页面弹窗的所有实例
    const [data, setData] = useState<any>();
    const refs = useRef<any>({});
    let meta: Meta;
    const getLocale = (_: string, t: string) => t || _;
    const init = async () => {
      const api = getApis({
        appId: options?.appId,
        // 页面容器会传 pageId
        pageId: props?.pageId ?? options?.pageId,
      });
      const appInst: any = await createApp({
        appId: options?.appId,
        isInstallComponent: false,
        isUsePermission: false,
        isCheckUsedOldFlow: false,
        isCF: false,
        isMock: false,
        dataCollect: false,
        isOpenTheme: false,
        beforeCreateApp: () => options?.hasLogin && user.init(),
      });
      const defaultContext = {
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
        ) => {},
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
      const awaitHandleData = new AwaitHandleData();
      const injectData = {
        getEngineApis: () => {
          return {
            // TODO: 这需要正确的请求
            downloadFileByFileCode: () => null,
            downloadByFileId: () => null,
            getLocale,
            // 打开弹窗能力
            openModal: (data: any) =>
              ModalManagerRef.current?.openModal({
                appId: options?.appId,
                ...data,
              }),
            ...api,
          };
        },
      };
      const componentItem = {
        appId: options?.appId,
        pageId: props?.pageId ?? options?.pageId,
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
            console.log(val);
            console.log(field);
            console.log(cmd);
            const a = checkIfRefValueByObject(val, field, cmd, engineApis);
            console.log('asdasdsadsdas');
            console.log(a);
            return a;
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
          addToAwaitQueue: (
            compId: string,
            functionName: string,
            ...data: any
          ) => {
            console.log(compId);
            // @ts-ignore
            refs?.[compId]?.[functionName]?.(data);
            console.log(refs?.[compId]);
            console.log(functionName);
            console.log(data);
            // awaitHandleData.addToAwaitQueue(compId, functionName, ...data)
          },
          runAwaitQueue: (comId: string) => {
            awaitHandleData.runQueue(comId, refs);
          },
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

    useEffect(() => {});
    if (!data || Object.keys(data).length === 0) {
      return <div>loading</div>;
    }
    return (
      <>
        <WrappedComponent {...data} {...props} />
        <ModalView
          getLocale={getLocale as any}
          appId={options.appId}
          ref={ModalManagerRef}
        />
      </>
    );
  };
};