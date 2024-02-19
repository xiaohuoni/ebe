// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import { Button, View } from '@/components/factory';

import Pageview from '@/components/Pageview';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const Kaifaceshiyemian7391$$Page: React.FC<PageProps> = ({
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
}) => {
  useEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_5102934__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_5102934_1',
          uid: 'View_5102934_1',
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
        ref={(r: any) => (refs['View_5102934_1'] = r)}
        {...injectData}
      >
        <Pageview
          name={'页面容器'}
          pageViewCompState={{}}
          pageSrc={'/zibiaodanyemian3314'}
          pageId={'912940693587320832'}
          style={{ height: 'auto', width: '100%' }}
          ref={(r: any) => (refs['Pageview_970186'] = r)}
          {...injectData}
        />
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
            id: 'Button_8255664',
            uid: 'Button_8255664',
            type: 'Button',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ width: 'fit-content' }}
          onClick={(e: any) => {
            const eventDatashowCustomModal191: any = [
              {
                type: 'showCustomModal',
                dataId: 168860955247816540,
                options: {
                  compId: 'showCustomModal',
                  compName: 'page',
                  id: '0680646',
                  pageJsonId: '5102934',
                  modalname: '/audit/selectoneuser',
                  pageId: '881887068344979456',
                  modalPath: '/audit/selectoneuser',
                  paramsObj: {
                    flowCode: 'COMMON_IMPORTANT_FLOW',
                    tacheCode: 'BUSI_MANAGE_APPROVE',
                  },
                  paramsObjKeyValueMap: {
                    flowCode: 'COMMON_IMPORTANT_FLOW',
                    tacheCode: 'BUSI_MANAGE_APPROVE',
                  },
                },
                line_number: 1,
                callback1: [],
                callback2: [],
              },
            ];
            eventDatashowCustomModal191.params =
              [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
            CMDGenerator(
              eventDatashowCustomModal191,
              { e },
              'showCustomModal',
              {
                id: 'showCustomModal',
                name: 'showCustomModal',
                type: 'showCustomModal',
                platform: 'pc',
              },
            );
          }}
          ref={(r: any) => (refs['Button_8255664'] = r)}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(Kaifaceshiyemian7391$$Page, {
  pageId: '961199011142324224',
  hasLogin: false,
  defaultState: {},
});
