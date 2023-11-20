import {
  checkIfCMDHasReturn,
  checkIfRefValue,
  checkIfRefValueByObject,
  CMDParse,
  CONDrun,
} from '@lingxiteam/engine-command';
import Meta from '@lingxiteam/engine-meta';
import {
  message,
  Modal,
} from '@lingxiteam/engine-pc/es/components/EnhanceAntdComp';
import {
  closeProgressMsg,
  closeProgressNotification,
  openProgressMsg,
  showProgressNotification,
} from '@lingxiteam/engine-pc/es/components/ProgressComp';
import { createApp, getApis, user } from '@lingxiteam/engine-platform';
import monitt from '@lingxiteam/engine-plog';
import Sandbox from '@lingxiteam/engine-sandbox';
import { transformValueDefined } from '@lingxiteam/engine-utils';
import { $$compDefine, SandBoxContext } from '@lingxiteam/types';
import { history } from 'alita';

import React, { useEffect, useRef, useState } from 'react';

export interface PageProps extends SandBoxContext {
  CMDGenerator?: any;
  injectData?: any;
  [key: string]: any;
}

export interface PageHOCOptions {
  appId: string;
  dataSource: any[];
  hasLogin?: boolean;
}

export const withPageHOC = (
  WrappedComponent: React.FC<PageProps>,
  options: PageHOCOptions,
) => {
  return () => {
    const [data, setData] = useState<any>();
    const refs = useRef<any>({});
    let meta: Meta;
    const init = async () => {
      const api = getApis({ appId: options?.appId });
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
        state: {},
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
      const injectData = {
        getEngineApis: () => {
          return {
            downloadFileByFileCode: '',
            getLocale: () => '',
          };
        },
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
          checkIfCMDHasReturn,
          checkIfRefValue,
          transformValueDefined,
          checkIfRefValueByObject: (
            val: string | Record<string, any>,
            field: Record<string, any>,
            cmd?: any,
          ) => {
            return checkIfRefValueByObject(val, field, cmd, engineApis);
          },
          CMDParse,
          CONDrun,
          monitt,
          EventName,
          $$compDefine,
          messageApi: {
            ...message,
            openProgressMsg,
            closeProgressMsg,
            showProgressNotification,
            closeProgressNotification,
          },
          message,
          Modal,
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
      setData({ ...context, CMDGenerator, injectData, refs });
      meta.dataDidUpdate = () => {
        setData({ ...context, CMDGenerator, injectData, refs });
      };
    };
    useEffect(() => {
      init();
    }, []);

    if (!data || Object.keys(data).length === 0) {
      return <div>loading</div>;
    }
    return <WrappedComponent {...data} />;
  };
};
