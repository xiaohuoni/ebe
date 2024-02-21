// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { Button, Text, View } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const pageId = '1077467890419003392';
const Qipao9952$$Popover: React.FC<PageProps> = ({
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
  const callFunctionTest1 = (options_4273553: any) => {
    // console 170849534925880060
    console.log('12321');
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    callFunctionTest1,
  }));

  useEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <Popover {...injectData} parentEngineId={parentEngineId}>
      <View
        name={'页面'}
        backgroundType={{ type: 'cleanColor', color: 'rgba(255, 255, 255, 1)' }}
        $$componentItem={{
          id: 'View_268601_1',
          uid: 'View_268601_1',
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
        ref={(r: any) => (refs['View_268601_1'] = r)}
        {...injectData}
      >
        <Text
          name={'文本'}
          content={'气泡调用父级方法'}
          textType={'span'}
          showHtml={false}
          $$componentItem={{
            id: 'Text_840687',
            uid: 'Text_840687',
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
          ref={(r: any) => (refs['Text_840687'] = r)}
          {...injectData}
        />
        <Button
          name={'按钮'}
          classification={'default'}
          autoProcessFlow={false}
          flowProcessResult={'common'}
          iconPosition={'left'}
          ghost={false}
          block={false}
          size={'default'}
          disabled={false}
          type={'default'}
          btnIcon={'none'}
          hasIcon={false}
          shape={'default'}
          loading={false}
          btnText={'按钮'}
          $$componentItem={{
            id: 'Button_489167',
            uid: 'Button_489167',
            type: 'Button',
            ...componentItem,
          }}
          visible={true}
          readOnly={false}
          style={{ textAlign: 'center' }}
          onClick={(e: any) => {
            const eventDatacallParentCustomFunc: any = [
              {
                type: 'callParentCustomFunc',
                dataId: 170849478747151550,
                options: {
                  compId: 'callParentCustomFunc',
                  compName: 'system',
                  id: '759558',
                  pageJsonId: '268601',
                  customFuncParams: 'object',
                  pathname: '/ceshi8260',
                  pageId: '1024261720265998336',
                  modalPath: '/ceshi8260',
                  customFuncName: 'callFunctionTest',
                },
                path: [170849478367183400],
                line_number: 1,
                callback1: [],
                callback2: [],
              },
            ];
            eventDatacallParentCustomFunc.params =
              [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
            CMDGenerator(
              eventDatacallParentCustomFunc,
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
          ref={(r: any) => (refs['Button_489167'] = r)}
          {...injectData}
        />
      </View>
    </Popover>
  );
};

export default withPageHOC(Qipao9952$$Popover, {
  pageId,
  hasLogin: true,
  defaultState: { bizId: '', sceneCode: '', bizData: '' },
});
