// 注意: 出码模块正在调试
import React from 'react';

import { Button, View } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import { setPageNavBar } from 'alita';

const Tanchuang1787$$Page: React.FC<PageProps> = ({
  data,
  CMDGenerator,
  injectData,
  refs,
  state,
  functorsMap,
  getStaticDataSourceService,
  getValue,
  componentItem,
  style,
}) => {
  useEffect(() => {
    setPageNavBar({
      pagePath: '/tanchuang1787',
      navBar: {
        pageTitle: 'tanchuang',
        hideNavBar: false,
      },
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div style={style}>
      <View
        name={'页面'}
        backgroundType={{ type: 'cleanColor', color: 'rgba(255, 255, 255, 1)' }}
        $$componentItem={{
          id: 'View_244623_1',
          uid: 'View_244623_1',
          type: 'View',
          ...componentItem,
        }}
        visible={true}
        style={{
          height: '100%',
          display: 'block',
          padding: '12px 12px 12px 12px',
          flexDirection: 'column',
          overflowY: 'auto',
        }}
        ref={(r: any) => (refs['View_244623_1'] = r)}
        {...injectData}
      >
        <Button
          name={'按钮'}
          btnIcon={false}
          type={'primary'}
          size={'large'}
          loading={false}
          mImagePostion={'left'}
          shape={'default'}
          status={'1'}
          children={'按钮'}
          $$componentItem={{
            id: 'Button_9002984',
            uid: 'Button_9002984',
            type: 'Button',
            ...componentItem,
          }}
          visible={true}
          disabled={false}
          readOnly={false}
          style={{ textAlign: 'center' }}
          onClick={(e: any) => {
            const eventDatashowAppCustomModal: any = [
              {
                type: 'showAppCustomModal',
                dataId: 170442067444027460,
                options: {
                  compId: 'showAppCustomModal',
                  compName: 'system',
                  id: '83565',
                  pageJsonId: '244623',
                  modalname: '/model7813',
                  pageId: '1049266938740068352',
                  modalPath: '/model7813',
                },
                path: [170442066627560300],
                line_number: 1,
                callback1: [],
                callback2: [],
              },
            ];
            eventDatashowAppCustomModal.params =
              [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
            CMDGenerator(
              eventDatashowAppCustomModal,
              { e },
              'showAppCustomModal',
              {
                id: 'showAppCustomModal',
                name: 'showAppCustomModal',
                type: 'showAppCustomModal',
                platform: 'h5',
              },
            );
          }}
          ref={(r: any) => (refs['Button_9002984'] = r)}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(Tanchuang1787$$Page, {
  appId: '1024143353417228288',
  pageId: '1060380198735069184',
  hasLogin: false,
  dataSource: [],
  defaultState: { bizId: '', sceneCode: '', bizData: '' },
});
