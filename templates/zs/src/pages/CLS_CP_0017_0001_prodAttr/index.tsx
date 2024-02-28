// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, Input, Select, TextArea } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const pageId = '990878646190923776';
const ClsCp_0017_0001ProdAttr$$Modal: React.FC<PageProps> = ({
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
  const onOk = () => {};

  const onCancel = () => {
    const eventDatacloseModal49: any = [
      {
        type: 'closeModal',
        dataId: '108945_1',
        options: { compId: 'page', compName: 'page', id: '7423641' },
        line_number: 1,
      },
    ];
    eventDatacloseModal49.params = [] || [];
    CMDGenerator(eventDatacloseModal49, {}, 'closeModal', {
      id: 'closeModal',
      name: 'closeModal',
      type: 'closeModal',
      platform: 'undefined',
    });
  };

  React.useImperativeHandle(forwardedRef, () => ({
    onOk,
    onCancel,
  }));

  useEffect(() => {
    // console 168792108261371870
    console.log('====1+N+N 产品属性state======', state);
    const eventDatacustomActionCode262: any = [
      {
        type: 'customActionCode',
        dataId: 168785879646611330,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '9917186',
          pageJsonId: '273424',
          code: 'function main(data,state,success,fail){var _state$formData$value,_state$formData$value2;var _formData=Object.assign({productSpecCharacterNumber:state.formData.productSpecCharacterNumber,name:state.formData.name,valueSource:(_state$formData$value=state.formData.valueSource)===null||_state$formData$value===void 0?void 0:(_state$formData$value2=_state$formData$value.map(function(item){return item.enumName}))===null||_state$formData$value2===void 0?void 0:_state$formData$value2.toString()},state.formData.productSpecRule);console.log("\\u4EA7\\u54C1\\u5C5E\\u6027-state.formData",state.formData);console.log("\\u4EA7\\u54C1\\u5C5E\\u6027-formData",_formData);success(_formData)};',
        },
        line_number: 2,
        callback1: [
          {
            type: 'setCurrentFormValues',
            dataId: 168785897391429860,
            options: {
              compId: 'Form_3497275',
              compLib: 'comm',
              pageJsonId: '273424',
              compName: 'Form',
              id: '524294',
              params: '$data_9917186$',
            },
            line_number: 3,
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode262.params = [] || [];
    CMDGenerator(eventDatacustomActionCode262, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_273424__"
    >
      <View
        className="View_View_273424_1"
        name={'页面'}
        $$componentItem={{
          id: 'View_273424_1',
          uid: 'View_273424_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_273424_1')}
        {...injectData}
      >
        <Form
          name={'表单'}
          colSpan={8}
          labelCol={'9'}
          wrapperCol={15}
          colon={true}
          layout={'horizontal'}
          labelAlign={'right'}
          header={'标题'}
          colSpace={0}
          rowSpace={16}
          formCode={'Form_3497275'}
          $$componentItem={{
            id: 'Form_3497275',
            uid: 'Form_3497275',
            type: 'Form',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ padding: '0px 0px 0px 0px' }}
          ref={(r: any) => refs.setComponentRef(r, 'Form_3497275')}
          {...injectData}
        >
          <Input
            name={'产品属性代码'}
            size={'default'}
            selfSpan={''}
            labelCol={'9'}
            wrapperCol={15}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfix={''}
            postfixIconPosition={'before'}
            required={false}
            placeholder={'请输入'}
            formItemIndex={0}
            fieldName={'productSpecCharacterNumber'}
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
              id: 'Input_5509217',
              uid: 'Input_5509217',
              type: 'Input',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_5509217')}
            {...injectData}
          />
          <Input
            name={'属性名称'}
            size={'default'}
            selfSpan={''}
            labelCol={'9'}
            wrapperCol={15}
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
            fieldName={'name'}
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
              id: 'Input_1052787',
              uid: 'Input_1052787',
              type: 'Input',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_1052787')}
            {...injectData}
          />
          <Input
            name={'属性枚举值取值'}
            size={'default'}
            selfSpan={''}
            labelCol={'9'}
            wrapperCol={15}
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
            fieldName={'valueSource'}
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
              id: 'Input_410463',
              uid: 'Input_410463',
              type: 'Input',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_410463')}
            {...injectData}
          />
          <Select
            name={'是否必填'}
            size={'default'}
            selfSpan={''}
            labelCol={'9'}
            wrapperCol={15}
            titleTip={'notext'}
            tipLocation={'after'}
            tipPlacement={'top'}
            required={false}
            filter={'none'}
            classification={'default'}
            attr={{}}
            placeholder={'请选择'}
            formItemIndex={3}
            fieldName={'canEmpty'}
            $$componentItem={{
              id: 'Select_509303',
              uid: 'Select_509303',
              type: 'Select',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Select_509303')}
            {...injectData}
          />
          <Select
            name={'是否可变更'}
            size={'default'}
            selfSpan={''}
            labelCol={'9'}
            wrapperCol={15}
            titleTip={'notext'}
            tipLocation={'after'}
            tipPlacement={'top'}
            required={false}
            filter={'none'}
            classification={'default'}
            attr={{}}
            placeholder={'请选择'}
            formItemIndex={4}
            fieldName={'canModify'}
            $$componentItem={{
              id: 'Select_5436685',
              uid: 'Select_5436685',
              type: 'Select',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Select_5436685')}
            {...injectData}
          />
          <Input
            name={'参数最大长度'}
            size={'default'}
            selfSpan={''}
            labelCol={'9'}
            wrapperCol={15}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfix={''}
            postfixIconPosition={'before'}
            required={false}
            placeholder={'请输入'}
            formItemIndex={5}
            fieldName={'length'}
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
              id: 'Input_575931',
              uid: 'Input_575931',
              type: 'Input',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_575931')}
            {...injectData}
          />
          <Select
            name={'参数是否展示'}
            size={'default'}
            selfSpan={''}
            labelCol={'9'}
            wrapperCol={15}
            titleTip={'notext'}
            tipLocation={'after'}
            tipPlacement={'top'}
            required={false}
            filter={'none'}
            classification={'default'}
            attr={{}}
            placeholder={'请选择'}
            formItemIndex={6}
            fieldName={'displayType'}
            $$componentItem={{
              id: 'Select_635682',
              uid: 'Select_635682',
              type: 'Select',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Select_635682')}
            {...injectData}
          />
          <Select
            name={'建议元素组件类型'}
            size={'default'}
            selfSpan={''}
            labelCol={'9'}
            wrapperCol={15}
            titleTip={'notext'}
            tipLocation={'after'}
            tipPlacement={'top'}
            required={false}
            filter={'none'}
            classification={'default'}
            attr={{}}
            placeholder={'请选择'}
            formItemIndex={7}
            fieldName={'displayControl'}
            $$componentItem={{
              id: 'Select_178816',
              uid: 'Select_178816',
              type: 'Select',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Select_178816')}
            {...injectData}
          />
          <Input
            name={'默认值'}
            size={'default'}
            selfSpan={''}
            labelCol={'9'}
            wrapperCol={15}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfix={''}
            postfixIconPosition={'before'}
            required={false}
            placeholder={'请输入'}
            formItemIndex={8}
            fieldName={'defaultValue'}
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
              id: 'Input_8455874',
              uid: 'Input_8455874',
              type: 'Input',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_8455874')}
            {...injectData}
          />
          <Input
            name={'参数最小值'}
            size={'default'}
            selfSpan={''}
            labelCol={'9'}
            wrapperCol={15}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfix={''}
            postfixIconPosition={'before'}
            required={false}
            placeholder={'请输入'}
            formItemIndex={9}
            fieldName={'minValue'}
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
              id: 'Input_0889693',
              uid: 'Input_0889693',
              type: 'Input',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_0889693')}
            {...injectData}
          />
          <Input
            name={'参数最大值'}
            size={'default'}
            selfSpan={''}
            labelCol={'9'}
            wrapperCol={15}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfix={''}
            postfixIconPosition={'before'}
            required={false}
            placeholder={'请输入'}
            formItemIndex={10}
            fieldName={'maxValue'}
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
              id: 'Input_67744',
              uid: 'Input_67744',
              type: 'Input',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_67744')}
            {...injectData}
          />
          <TextArea
            name={'正则表达式'}
            selfSpan={24}
            labelCol={'3'}
            wrapperCol={21}
            titleTip={'notext'}
            tipLocation={'after'}
            tipPlacement={'top'}
            required={false}
            placeholder={'请输入'}
            formItemIndex={11}
            fieldName={'regular'}
            $$componentItem={{
              id: 'TextArea_669705',
              uid: 'TextArea_669705',
              type: 'TextArea',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'TextArea_669705')}
            {...injectData}
          />
          <TextArea
            name={'输入框要显示的填写说明'}
            selfSpan={24}
            labelCol={'3'}
            wrapperCol={21}
            titleTip={'notext'}
            tipLocation={'after'}
            tipPlacement={'top'}
            required={false}
            placeholder={'请输入'}
            formItemIndex={12}
            fieldName={'placeHolder'}
            $$componentItem={{
              id: 'TextArea_1979027',
              uid: 'TextArea_1979027',
              type: 'TextArea',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'TextArea_1979027')}
            {...injectData}
          />
          <TextArea
            name={'参数备注'}
            selfSpan={24}
            labelCol={'3'}
            wrapperCol={21}
            titleTip={'notext'}
            tipLocation={'after'}
            tipPlacement={'top'}
            required={false}
            placeholder={'请输入'}
            formItemIndex={13}
            fieldName={'remark'}
            $$componentItem={{
              id: 'TextArea_032018',
              uid: 'TextArea_032018',
              type: 'TextArea',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'TextArea_032018')}
            {...injectData}
          />
        </Form>
      </View>
    </div>
  );
};

export default withPageHOC(ClsCp_0017_0001ProdAttr$$Modal, {
  pageId,
  hasLogin: false,
  defaultState: { bizId: '', sceneCode: '', bizData: '', formData: '' },
});
