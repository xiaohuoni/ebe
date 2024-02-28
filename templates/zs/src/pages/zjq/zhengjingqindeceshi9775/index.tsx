// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Button, RemoteComponent } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const pageId = '906774173425287168';
const ZjqZhengjingqindeceshi9775$$Page: React.FC<PageProps> = ({
  data,
  CMDGenerator,
  attrDataMap = {},
  customActionMapRef,
  injectData,
  refs,
  state,
  functorsMap,
  getStaticDataSourceService,
  getValue,
  componentItem,
  style,
  urlParam,
  parentEngineId = pageId,
}) => {
  useEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_789114__"
    >
      <View
        className="View_View_789114_1"
        name={'页面'}
        $$componentItem={{
          id: 'View_789114_1',
          uid: 'View_789114_1',
          type: 'View',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
        style={{
          minHeight: '100%',
          display: 'flex',
          padding: '20px 20px 20px 20px',
          flexDirection: 'column',
          overflowY: 'auto',
          width: 'auto',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_789114_1')}
        {...injectData}
      >
        <Button
          name={'按钮'}
          shape={null}
          classification={'default'}
          autoProcessFlow={false}
          flowProcessResult={'common'}
          iconPosition={'left'}
          ghost={false}
          block={false}
          size={'default'}
          type={'default'}
          hasIcon={false}
          $$componentItem={{
            id: 'Button_5558158',
            uid: 'Button_5558158',
            type: 'Button',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ width: 'fit-content' }}
          onClick={(e: any) => {
            const eventDatahistory12: any = [
              {
                type: 'history',
                dataId: 166779829598398700,
                options: {
                  compId: 'history',
                  compName: 'system',
                  id: '216648',
                  pageJsonId: '789114',
                  type: 'push',
                  pathname: '/zjq2/zhengjingqindeceshi26615',
                  selectedType: 'page',
                },
                line_number: 1,
              },
            ];
            eventDatahistory12.params =
              [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
            CMDGenerator(eventDatahistory12, { e }, 'history', {
              id: 'history',
              name: 'history',
              type: 'history',
              platform: 'pc',
            });
          }}
          ref={(r: any) => refs.setComponentRef(r, 'Button_5558158')}
          {...injectData}
        />
        <RemoteComponent
          name={'远程组件'}
          associatedType={'file'}
          remoteCompType={'innerRemoteComp'}
          compExtCode={''}
          compExtName={''}
          fileName={'审批矩阵-远程组件'}
          fileCode={'approvalMatrix'}
          $$componentItem={{
            id: 'RemoteComponent_5882053',
            uid: 'RemoteComponent_5882053',
            type: 'RemoteComponent',
            ...componentItem,
          }}
          appId={undefined}
          lcdpParentRenderId={undefined}
          onMessage={(msg: any) => {}}
          ref={(r: any) => refs.setComponentRef(r, 'RemoteComponent_5882053')}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(ZjqZhengjingqindeceshi9775$$Page, {
  pageId,
  hasLogin: false,
  defaultState: {},
});
