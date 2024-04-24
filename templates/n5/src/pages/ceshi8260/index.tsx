// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, RemoteComponent } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '1024261720265998336';
const Ceshi8260$$Page: React.FC<PageProps> = ({
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
  const callFunctionTest = (options_856815: any) => {
    // console 170841413251678100
    console.log('父级事件调用成功');
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    callFunctionTest,
  }));

  useEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_057343__"
    >
      <View
        className="View_View_057343_1"
        name={'页面'}
        $$componentItem={{
          id: 'View_057343_1',
          uid: 'View_057343_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_057343_1')}
        {...injectData}
      >
        <RemoteComponent
          name={'自定义组件'}
          associatedType={'file'}
          type={'React'}
          fileCode={'R_COMP_590888'}
          $$componentItem={{
            id: 'RemoteComponent_759107',
            uid: 'RemoteComponent_759107',
            type: 'RemoteComponent',
            ...componentItem,
          }}
          appId={undefined}
          lcdpParentRenderId={undefined}
          onMessage={(msg: any) => {}}
          ref={(r: any) => refs.setComponentRef(r, 'RemoteComponent_759107')}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(Ceshi8260$$Page, {
  pageId,
  hasLogin: true,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', bizData: '' },
});
