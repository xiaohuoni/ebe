// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import { Button, View } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const pageId = '1028120483871506432';
const Cdd5883$$Page: React.FC<PageProps> = ({
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
      className="__CustomClass_09010154__"
    >
      <View
        name={'普通容器1'}
        backgroundType={{ type: 'cleanColor' }}
        $$componentItem={{
          id: 'View_884363',
          uid: 'View_884363',
          type: 'View',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
        style={{
          display: 'block',
          flexDirection: 'column',
          padding: '0px 0px 0px 0px',
          width: '100%',
        }}
        ref={(r: any) => (refs['View_884363'] = r)}
        {...injectData}
      >
        <Button
          name={'按钮'}
          classification={'default'}
          autoProcessFlow={false}
          flowProcessResult={'common'}
          iconPosition={'left'}
          ghost={false}
          block={false}
          size={'default'}
          type={'default'}
          btnIcon={'none'}
          hasIcon={false}
          shape={'default'}
          loading={false}
          btnText={'按钮'}
          $$componentItem={{
            id: 'Button_576841',
            uid: 'Button_576841',
            type: 'Button',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ textAlign: 'center' }}
          onClick={(e: any) => {
            const eventDatacallParentCustomFunc1: any = [
              {
                type: 'callParentCustomFunc',
                dataId: 170841416628564540,
                options: {
                  compId: 'callParentCustomFunc',
                  compName: 'system',
                  id: '931862',
                  pageJsonId: '09010154',
                  customFuncParams: 'object',
                  pathname: '/ceshi8260',
                  pageId: '1024261720265998336',
                  modalPath: '/ceshi8260',
                  customFuncName: 'callFunctionTest',
                },
                line_number: 1,
                callback1: [],
                callback2: [],
              },
            ];
            eventDatacallParentCustomFunc1.params =
              [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
            CMDGenerator(
              eventDatacallParentCustomFunc1,
              { e },
              'callParentCustomFunc',
              {
                id: 'callParentCustomFunc',
                name: 'callParentCustomFunc',
                type: 'callParentCustomFunc',
                platform: 'pc',
              },
            );
          }}
          ref={(r: any) => (refs['Button_576841'] = r)}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(Cdd5883$$Page, {
  pageId,
  hasLogin: true,
  defaultState: { bizId: '', sceneCode: '', bizData: '' },
});
