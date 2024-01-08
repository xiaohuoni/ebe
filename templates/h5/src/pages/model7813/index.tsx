// 注意: 出码模块正在调试
import React from 'react';

import { Button, View } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const Model7813$$MobileModal: React.FC<PageProps> = ({
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
          onClick={(e: any) => {
            const eventDatacloseModal: any = [
              {
                type: 'closeModal',
                dataId: 170442071992190200,
                options: {
                  compId: 'closeModal',
                  compName: 'system',
                  id: '82137',
                  pageJsonId: '136209',
                },
                path: [170442070724278180],
                line_number: 1,
              },
            ];
            eventDatacloseModal.params =
              [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
            CMDGenerator(eventDatacloseModal, { e }, 'closeModal', {
              id: 'closeModal',
              name: 'closeModal',
              type: 'closeModal',
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
