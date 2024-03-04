// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import { Text, View } from '@/components/factory';

import Pageview from '@/components/Pageview';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const pageId = '1077431851017072640';
const Modal0804$$Modal: React.FC<PageProps> = ({
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
  forwardedRef,
  parentEngineId = pageId,
}) => {
  const callFunctionTestModal = (options_265061: any) => {
    // console 170849664014925700
    console.log('1213');
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    callFunctionTestModal,
  }));

  const onOk = () => {};

  const onCancel = () => {
    const eventDatacloseModal: any = [
      {
        type: 'closeModal',
        dataId: '256747_1',
        options: { compId: 'page', compName: 'page', id: '6097785' },
        line_number: 1,
      },
    ];
    eventDatacloseModal.params = [] || [];
    CMDGenerator(eventDatacloseModal, {}, 'closeModal', {
      id: 'closeModal',
      name: 'closeModal',
      type: 'closeModal',
      platform: 'pc',
    });
  };

  React.useImperativeHandle(forwardedRef, () => ({
    onOk,
    onCancel,
  }));

  useEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_155774__"
    >
      <View
        className="View_View_155774_1"
        name={'页面'}
        backgroundType={{ type: 'cleanColor', color: 'rgba(255, 255, 255, 1)' }}
        $$componentItem={{
          id: 'View_155774_1',
          uid: 'View_155774_1',
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
          height: 'auto',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_155774_1')}
        {...injectData}
      >
        <Text
          name={'文本'}
          content={'弹窗里面有页面容器并调用父级方法'}
          textType={'span'}
          showHtml={false}
          $$componentItem={{
            id: 'Text_306996',
            uid: 'Text_306996',
            type: 'Text',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            textAlign: 'left',
            fontSize: '14px',
            lineHeight: '24px',
            color: '#1c242e',
            backgroundColor: 'rgba(255, 255, 255,0)',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'Text_306996')}
          {...injectData}
        />
        <Pageview
          name={'页面容器'}
          pageViewCompState={{}}
          pageSrc={'/cdd5883'}
          pageId={'1028120483871506432'}
          style={{ height: 'auto', width: '100%' }}
          ref={(r: any) => refs.setComponentRef(r, 'Pageview_710085')}
          {...injectData}
          parentEngineId={parentEngineId}
        />
      </View>
    </div>
  );
};

export default withPageHOC(Modal0804$$Modal, {
  pageId,
  hasLogin: true,
  defaultState: { bizId: '', sceneCode: '', bizData: '' },
});
