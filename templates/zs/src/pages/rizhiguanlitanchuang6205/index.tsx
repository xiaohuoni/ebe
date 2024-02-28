// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  Form,
  Select,
  Input,
  TimePicker,
  TextArea,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const pageId = '984385291984474112';
const Rizhiguanlitanchuang6205$$Modal: React.FC<PageProps> = ({
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
  const onOk = () => {
    const eventDatacloseModal76: any = [
      {
        type: 'closeModal',
        dataId: 168630281861732860,
        options: { compId: 'page', compName: 'page', id: '863935' },
        line_number: 1,
      },
    ];
    eventDatacloseModal76.params = [] || [];
    CMDGenerator(eventDatacloseModal76, {}, 'closeModal', {
      id: 'closeModal',
      name: 'closeModal',
      type: 'closeModal',
      platform: 'undefined',
    });
  };

  React.useImperativeHandle(forwardedRef, () => ({
    onOk,
  }));

  useEffect(() => {
    const eventDatasetCurrentFormValues5: any = [
      {
        type: 'setCurrentFormValues',
        dataId: 168636358798734940,
        options: {
          compId: 'Form_0178664',
          compLib: 'comm',
          pageJsonId: '027296',
          compName: 'Form',
          id: '933245',
          params: '$state.logInfo$',
        },
        line_number: 1,
      },
    ];
    eventDatasetCurrentFormValues5.params = [] || [];
    CMDGenerator(eventDatasetCurrentFormValues5, {}, 'setCurrentFormValues', {
      id: 'setCurrentFormValues',
      name: 'setCurrentFormValues',
      type: 'setCurrentFormValues',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_027296__"
    >
      <View
        className="View_View_027296_1"
        name={'页面'}
        $$componentItem={{
          id: 'View_027296_1',
          uid: 'View_027296_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_027296_1')}
        {...injectData}
      >
        <Form
          name={'表单'}
          colSpan={8}
          labelCol={8}
          wrapperCol={16}
          colon={true}
          layout={'horizontal'}
          labelAlign={'right'}
          header={'标题'}
          colSpace={0}
          rowSpace={16}
          formCode={'Form_0178664'}
          $$componentItem={{
            id: 'Form_0178664',
            uid: 'Form_0178664',
            type: 'Form',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ padding: '0px 0px 0px 0px' }}
          ref={(r: any) => refs.setComponentRef(r, 'Form_0178664')}
          {...injectData}
        >
          <Select
            name={'日志类型'}
            size={'default'}
            selfSpan={''}
            labelCol={8}
            wrapperCol={16}
            titleTip={'notext'}
            tipLocation={'after'}
            tipPlacement={'top'}
            required={false}
            filter={'none'}
            classification={'default'}
            placeholder={'请选择'}
            formItemIndex={0}
            fieldName={'logType'}
            dataSource={[
              { id: '2725412', label: '新增', value: '1001' },
              { id: '266771', label: '修改', value: '1002' },
              { id: '7261745', label: '删除', value: '1003' },
            ]}
            $$componentItem={{
              id: 'Select_130641',
              uid: 'Select_130641',
              type: 'Select',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={true}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Select_130641')}
            {...injectData}
          />
          <Input
            name={'日志模块'}
            size={'default'}
            selfSpan={''}
            labelCol={8}
            wrapperCol={16}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfix={''}
            postfixIconPosition={'before'}
            required={false}
            placeholder={'请输入'}
            formItemIndex={1}
            fieldName={'logModule'}
            icon={{
              type: undefined,
              theme: 'outlined',
              fontAddress: '',
              isIconFont: false,
              iconFileInfo: {},
            }}
            prefixIcon={{
              type: undefined,
              theme: 'outlined',
              fontAddress: '',
              isIconFont: false,
              iconFileInfo: {},
            }}
            $$componentItem={{
              id: 'Input_66284127',
              uid: 'Input_66284127',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={true}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_66284127')}
            {...injectData}
          />
          <Input
            name={'创建员工'}
            size={'default'}
            selfSpan={''}
            labelCol={8}
            wrapperCol={16}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfix={''}
            postfixIconPosition={'before'}
            required={false}
            placeholder={'请输入'}
            formItemIndex={2}
            fieldName={'createStaff'}
            icon={{
              type: undefined,
              theme: 'outlined',
              fontAddress: '',
              isIconFont: false,
              iconFileInfo: {},
            }}
            prefixIcon={{
              type: undefined,
              theme: 'outlined',
              fontAddress: '',
              isIconFont: false,
              iconFileInfo: {},
            }}
            $$componentItem={{
              id: 'Input_258391',
              uid: 'Input_258391',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={true}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_258391')}
            {...injectData}
          />
          <Input
            name={'创建人名称'}
            size={'default'}
            selfSpan={''}
            labelCol={8}
            wrapperCol={16}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfix={''}
            postfixIconPosition={'before'}
            required={false}
            placeholder={'请输入'}
            formItemIndex={3}
            fieldName={'createStaffName'}
            icon={{
              type: undefined,
              theme: 'outlined',
              fontAddress: '',
              isIconFont: false,
              iconFileInfo: {},
            }}
            prefixIcon={{
              type: undefined,
              theme: 'outlined',
              fontAddress: '',
              isIconFont: false,
              iconFileInfo: {},
            }}
            $$componentItem={{
              id: 'Input_3518966',
              uid: 'Input_3518966',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={true}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_3518966')}
            {...injectData}
          />
          <TimePicker
            name={'创建时间'}
            format={'YYYY-MM-DD HH:mm:ss'}
            size={'default'}
            selfSpan={''}
            labelCol={8}
            wrapperCol={16}
            titleTip={'notext'}
            tipLocation={'after'}
            tipPlacement={'top'}
            required={false}
            limitRange={'no'}
            startTime={''}
            endTime={''}
            timeMode={'time'}
            pickerType={'TimePicker'}
            placeholder={'请选择时间'}
            customTip={''}
            formItemIndex={4}
            fieldName={'createDate'}
            $$componentItem={{
              id: 'TimePicker_312603',
              uid: 'TimePicker_312603',
              type: 'TimePicker',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={true}
            defaultValue={{}}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'TimePicker_312603')}
            {...injectData}
          />
          <Input
            name={'备注'}
            size={'default'}
            selfSpan={''}
            labelCol={8}
            wrapperCol={16}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfix={''}
            postfixIconPosition={'before'}
            required={false}
            formItemIndex={5}
            fieldName={'remark'}
            icon={{
              type: undefined,
              theme: 'outlined',
              fontAddress: '',
              isIconFont: false,
              iconFileInfo: {},
            }}
            prefixIcon={{
              type: undefined,
              theme: 'outlined',
              fontAddress: '',
              isIconFont: false,
              iconFileInfo: {},
            }}
            $$componentItem={{
              id: 'Input_930943',
              uid: 'Input_930943',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={true}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_930943')}
            {...injectData}
          />
          <TextArea
            name={'日志内容'}
            selfSpan={24}
            labelCol={'2'}
            wrapperCol={22}
            titleTip={'notext'}
            tipLocation={'after'}
            tipPlacement={'top'}
            required={false}
            placeholder={'请输入'}
            formItemIndex={6}
            fieldName={'logContent'}
            $$componentItem={{
              id: 'TextArea_9083564',
              uid: 'TextArea_9083564',
              type: 'TextArea',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={true}
            isFormRootChild={true}
            style={{ minHeight: '250px' }}
            ref={(r: any) => refs.setComponentRef(r, 'TextArea_9083564')}
            {...injectData}
          />
        </Form>
      </View>
    </div>
  );
};

export default withPageHOC(Rizhiguanlitanchuang6205$$Modal, {
  pageId,
  hasLogin: false,
  defaultState: { bizId: '', sceneCode: '', bizData: '', logInfo: '' },
});
