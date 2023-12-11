// 注意: 出码模块正在调试
import React from 'react';

import { Button, View } from '@lingxiteam/factory/es/index.component';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const Model7813$$MobileModal: React.FC<PageProps> = ({
  data,
  CMDGenerator,
  injectData,
  refs,
  state,
  functorsMap,
  getValue,
  componentItem,
  style,
}) => {
  useEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div style={style}>
      <View
        name={'页面'}
        backgroundType={{ type: 'cleanColor', color: 'rgba(255, 255, 255, 1)' }}
        visible={true}
        $$componentItem={{
          id: 'View_136209_1',
          uid: 'View_136209_1',
          type: 'View',
          ...componentItem,
        }}
        style={{
          height: '100%',
          display: 'block',
          padding: '12px 12px 12px 12px',
          flexDirection: 'column',
          overflowY: 'scroll',
        }}
        ref={(r: any) => (refs['View_136209_1'] = r)}
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
            id: 'Button_43856206',
            uid: 'Button_43856206',
            type: 'Button',
            ...componentItem,
          }}
          visible={true}
          disabled={false}
          readOnly={false}
          style={{ textAlign: 'center' }}
          onClick={(...args: unknown[]) => {
            const eventData: any = [
              {
                type: 'showAppCustomModal',
                dataId: 170228480707245340,
                options: {
                  compId: 'showAppCustomModal',
                  compName: 'system',
                  id: '817989',
                  pageJsonId: '136209',
                  modalname: '/model28529',
                  pageId: '1051421568049684480',
                  modalPath: '/model28529',
                },
                path: [170228480022779940],
                line_number: 1,
                callback1: [],
                callback2: [],
              },
            ];
            eventData.params =
              [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
            CMDGenerator(eventData, args, 'onClick', {
              id: 'Button_43856206',
              name: 'Button_43856206',
              type: 'Button',
              platform: 'h5',
            });
          }}
          ref={(r: any) => (refs['Button_43856206'] = r)}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(Model7813$$MobileModal, {
  appId: '1024143353417228288',
  pageId: '1049266938740068352',
  hasLogin: false,
  dataSource: [],
  defaultState: { bizId: '', sceneCode: '', bizData: '' },
});
