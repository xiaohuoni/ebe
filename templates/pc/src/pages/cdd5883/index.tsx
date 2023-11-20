// 注意: 出码模块正在调试
import React from 'react';

import { Button, View } from '@lingxiteam/pcfactory/es/index.component';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const Cdd5883$$Page: React.FC<PageProps> = ({
  data,
  CMDGenerator,
  injectData,
  refs,
}) => {
  useEffect(() => {
    const eventDatashowModal: any = [
      {
        type: 'showModal',
        dataId: 170047181697512220,
        options: {
          compId: 'showModal',
          compName: 'system',
          id: '4090913',
          pageJsonId: '09010154',
          title: '你好，pc',
          content: '这是一个正确的弹窗',
          type: 'success',
        },
        path: ['652091'],
        line_number: 1,
        callback1: [
          {
            type: 'console',
            dataId: 170047186680601950,
            options: {
              compId: 'console',
              compName: 'system',
              id: '031162',
              pageJsonId: '09010154',
              value: ['点击了确认按钮'],
            },
            path: ['652091', 170047181697512220, 170047181697582800],
            line_number: 2,
          },
        ],
        callback2: [],
      },
    ];
    eventDatashowModal.params = [] || [];
    CMDGenerator(eventDatashowModal, {}, 'showModal', {
      id: 'showModal',
      name: 'showModal',
      type: 'showModal',
      platform: 'pc',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div>
      <View
        name="普通容器1"
        basicStatus={1}
        backgroundType={{ type: 'cleanColor', color: '#FFFFFF' }}
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
          disabled={false}
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

export default withPageHOC(Cdd5883$$Page, {
  // TODO: appId
  appId: '1024143353417228288',
  dataSource: [],
});
