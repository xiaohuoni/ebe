// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  Button,
  DatePicker,
  Form,
  RangePicker,
  TimePicker,
  View,
} from '@/components/factory';

import Pageview from '@/components/Pageview';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

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
        ref={(r: any) => (refs['View_057343_1'] = r)}
        {...injectData}
      >
        <Form
          name={'表单'}
          colSpan={8}
          labelCol={8}
          wrapperCol={16}
          layout={'vertical'}
          colon={true}
          labelAlign={'right'}
          colSpace={16}
          rowSpace={16}
          formCode={'Code_Form_369024'}
          $$componentItem={{
            id: 'Form_369024',
            uid: 'Form_369024',
            type: 'Form',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ padding: '0px 0px 0px 0px' }}
          ref={(r: any) => (refs['Form_369024'] = r)}
          {...injectData}
        >
          <DatePicker
            name={'日期选择'}
            timeMode={'date'}
            size={'default'}
            labelCol={8}
            wrapperCol={16}
            titleTip={'notext'}
            tipSize={'default'}
            tipWidth={'240px'}
            tipHeight={'auto'}
            required={false}
            limitRange={'no'}
            startTime={''}
            endTime={''}
            format={'YYYY-MM-DD'}
            placeholder={'请选择日期'}
            pickerType={'DatePicker'}
            customTip={''}
            allowClear={true}
            formItemIndex={0}
            fieldName={'1221'}
            $$componentItem={{
              id: 'DatePicker_05751',
              uid: 'DatePicker_05751',
              type: 'DatePicker',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['DatePicker_05751'] = r)}
            {...injectData}
          />
          <TimePicker
            name={'时间选择'}
            size={'default'}
            showNow={true}
            selfSpan={''}
            labelCol={8}
            wrapperCol={16}
            titleTip={'notext'}
            tipSize={'default'}
            tipWidth={'240px'}
            tipHeight={'auto'}
            required={false}
            limitRange={'no'}
            startTime={''}
            endTime={''}
            format={'YYYY-MM-DD HH:mm:ss'}
            timeMode={'time'}
            pickerType={'TimePicker'}
            placeholder={'请选择时间'}
            customTip={''}
            allowClear={true}
            formItemIndex={1}
            fieldName={'asdsa'}
            $$componentItem={{
              id: 'TimePicker_563977',
              uid: 'TimePicker_563977',
              type: 'TimePicker',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['TimePicker_563977'] = r)}
            {...injectData}
          />
          <RangePicker
            name={'时间段选择'}
            timeMode={'date'}
            separator={'~'}
            size={'default'}
            labelCol={8}
            wrapperCol={16}
            titleTip={'notext'}
            tipSize={'default'}
            tipWidth={'240px'}
            tipHeight={'auto'}
            required={false}
            format={'YYYY-MM-DD'}
            pickerType={'RangePicker'}
            allowClear={true}
            formItemIndex={2}
            fieldName={'adss'}
            $$componentItem={{
              id: 'RangePicker_616162',
              uid: 'RangePicker_616162',
              type: 'RangePicker',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['RangePicker_616162'] = r)}
            {...injectData}
          />
        </Form>
        <Pageview
          name={'页面容器'}
          pageViewCompState={{}}
          pageSrc={'/cdd5883'}
          pageId={'1028120483871506432'}
          style={{ height: 'auto', width: '100%' }}
          ref={(r: any) => (refs['Pageview_017745'] = r)}
          {...injectData}
          parentEngineId={parentEngineId}
        />
        <Popover
          page={{
            pagePath: '/qipao9952',
            pageId: '1077467890419003392',
            pageName: 'qipao',
            options: [
              { name: '业务主键', code: 'bizId' },
              { name: '业务场景', code: 'sceneCode' },
              { name: '业务数据', code: 'bizData' },
            ],
            tipType: '1',
            trigger: 'hover',
          }}
          id={'Button_778372'}
          {...injectData}
          parentEngineId={parentEngineId}
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
            btnText={'气泡'}
            $$componentItem={{
              id: 'Button_778372',
              uid: 'Button_778372',
              type: 'Button',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ textAlign: 'center' }}
            ref={(r: any) => (refs['Button_778372'] = r)}
            {...injectData}
          />
        </Popover>
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
          btnText={'调用自己'}
          $$componentItem={{
            id: 'Button_106325',
            uid: 'Button_106325',
            type: 'Button',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ textAlign: 'center' }}
          onClick={(e: any) => {
            const eventDatacallSelfFunc: any = [
              {
                type: 'callSelfFunc',
                dataId: 170848424025387420,
                options: {
                  compId: 'callSelfFunc',
                  compName: 'system',
                  id: '7715386',
                  pageJsonId: '057343',
                  customFuncParams: 'object',
                  customFuncName: 'callFunctionTest',
                },
                line_number: 1,
                callback1: [],
                callback2: [],
              },
            ];
            eventDatacallSelfFunc.params =
              [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
            CMDGenerator(eventDatacallSelfFunc, { e }, 'callSelfFunc', {
              id: 'callSelfFunc',
              name: 'callSelfFunc',
              type: 'callSelfFunc',
              platform: 'pc',
            });
          }}
          ref={(r: any) => (refs['Button_106325'] = r)}
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
          type={'default'}
          btnIcon={'none'}
          hasIcon={false}
          shape={'default'}
          loading={false}
          btnText={'打开弹窗'}
          $$componentItem={{
            id: 'Button_920658',
            uid: 'Button_920658',
            type: 'Button',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ textAlign: 'center' }}
          onClick={(e: any) => {
            const eventDatashowCustomModal: any = [
              {
                type: 'showCustomModal',
                dataId: 170848637018408540,
                options: {
                  compId: 'showCustomModal',
                  compName: 'system',
                  id: '23562',
                  pageJsonId: '057343',
                  modalname: '/modal0804',
                  pageId: '1077431851017072640',
                  modalPath: '/modal0804',
                },
                line_number: 1,
                callback1: [
                  {
                    type: 'closeModal',
                    dataId: 170848639918487040,
                    options: {
                      compId: 'closeModal',
                      compName: 'system',
                      id: '1691886',
                      pageJsonId: '057343',
                    },
                    line_number: 2,
                  },
                ],
                callback2: [
                  {
                    type: 'closeModal',
                    dataId: 170848640494115650,
                    options: {
                      compId: 'closeModal',
                      compName: 'system',
                      id: '30948',
                      pageJsonId: '057343',
                    },
                    line_number: 3,
                  },
                ],
              },
            ];
            eventDatashowCustomModal.params =
              [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
            CMDGenerator(eventDatashowCustomModal, { e }, 'showCustomModal', {
              id: 'showCustomModal',
              name: 'showCustomModal',
              type: 'showCustomModal',
              platform: 'pc',
            });
          }}
          ref={(r: any) => (refs['Button_920658'] = r)}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(Ceshi8260$$Page, {
  pageId,
  hasLogin: true,
  defaultState: { bizId: '', sceneCode: '', bizData: '' },
});
