// 注意: 出码模块正在调试
import React from 'react';

import { View } from 'custom';

import { Button } from 'comm';

import { history } from 'alita';

import {
  Modal,
  messageApi,
} from '@lingxiteam/engine-app/es/components/MessageApi';

import { createApp, getApis, user } from '@lingxiteam/engine-app';

import {
  checkIfCMDHasReturn,
  checkIfRefValue,
  checkIfRefValueByObject,
  CMDParse,
  CONDrun,
} from '@lingxiteam/engine-command';

import Meta from '@lingxiteam/engine-meta';

import monitt from '@lingxiteam/engine-plog';

import { useEffect, useState, useRef } from 'react';

import Sandbox from '@lingxiteam/engine-sandbox';

import { transformValueDefined } from '@lingxiteam/engine-utils';

import { SandBoxContext, $$compDefine } from '@lingxiteam/types';

interface PageProps extends SandBoxContext {
  CMDGenerator?: any;
  injectData?: any;
}
const withHOC = (WrappedComponent: React.FC<PageProps>, options: any) => {
  return () => {
    const [data, setData] = useState<any>();
    const refs = useRef<any>({});
    let meta: Meta;
    const init = async () => {
      const appId = '1024143353417228288';
      const api = getApis({ appId });
      const appInst: any = await createApp({
        appId,
        isInstallComponent: false,
        isUsePermission: false,
        isCheckUsedOldFlow: false,
        isCF: false,
        isMock: false,
        dataCollect: false,
        isOpenTheme: false,
        // beforeCreateApp: () => user.init(),
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

const Cdd5883$$Page: React.FC<PageProps> = ({
  data,
  CMDGenerator,
  injectData,
  refs,
}) => {
  useEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div>
      <View
        name="普通容器1"
        basicStatus={1}
        $$componentItem={{
          id: 'View_884363',
          uid: 'View_884363',
          pageId: '1028120483871506432',
          appId: '1024143353417228288',
          platform: 'pc',
          type: 'View',
        }}
        disabled={false}
        visible={true}
        readOnly={false}
        style={{
          display: 'block',
          flexDirection: 'column',
          padding: '0px 0px 0px 0px',
          width: '100%',
          backgroundColor: '#FFFFFF',
        }}
        ref={(r: any) => (refs['View_884363'] = r)}
        {...injectData}
      >
        <Button
          name="按钮"
          basicStatus={1}
          classification="default"
          autoProcessFlow={false}
          flowProcessResult="common"
          iconPosition="left"
          ghost={false}
          block={false}
          size="default"
          disabled={false}
          type="default"
          btnIcon="none"
          hasIcon={false}
          shape="default"
          loading={false}
          btnText="按钮"
          $$componentItem={{
            id: 'Button_576841',
            uid: 'Button_576841',
            pageId: '1028120483871506432',
            appId: '1024143353417228288',
            platform: 'pc',
            type: 'Button',
          }}
          visible={true}
          readOnly={false}
          style={{ textAlign: 'center' }}
          ref={(r: any) => (refs['Button_576841'] = r)}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withHOC(Cdd5883$$Page, {
  dataSource: [],
});
