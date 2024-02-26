// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Card, Form, Input, Select } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const pageId = '990817782033211392';
const ClsCp_0017_0001FeeInfo$$Modal: React.FC<PageProps> = ({
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
    const eventDatavalidateCurrentForm47: any = [
      {
        type: 'validateCurrentForm',
        dataId: 168785811262418850,
        options: {
          compId: 'Form_056846',
          compLib: 'comm',
          pageJsonId: '912842',
          compName: 'Form',
          id: '983675',
        },
        line_number: 1,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 168785812277673470,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '012535',
              pageJsonId: '912842',
              code: 'function main(data,state,success,fail){console.log("\\u8D39\\u7528\\u9879\\u4FE1\\u606F-\\u7701\\u5185",Form_056846);success(Form_056846)};',
            },
            line_number: 2,
            callback1: [
              {
                type: 'okCallbackData',
                dataId: 168785822307242800,
                options: {
                  compId: 'okCallbackData',
                  compName: 'page',
                  id: '30309',
                  pageJsonId: '912842',
                  params: '$data_012535$',
                },
                line_number: 3,
              },
              {
                type: 'closeModal',
                dataId: 168785823478463840,
                options: {
                  compId: 'closeModal',
                  compName: 'page',
                  id: '3097604',
                  pageJsonId: '912842',
                },
                line_number: 4,
              },
            ],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatavalidateCurrentForm47.params = [] || [];
    CMDGenerator(eventDatavalidateCurrentForm47, {}, 'validateCurrentForm', {
      id: 'validateCurrentForm',
      name: 'validateCurrentForm',
      type: 'validateCurrentForm',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal50: any = [
      {
        type: 'closeModal',
        dataId: '548241_1',
        options: { compId: 'page', compName: 'page', id: '134401' },
        line_number: 1,
      },
    ];
    eventDatacloseModal50.params = [] || [];
    CMDGenerator(eventDatacloseModal50, {}, 'closeModal', {
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
    // console 168791971813909660
    console.log('====1+N+N 费项 state======', state);
    const eventDatasetCurrentFormValues2: any = [
      {
        type: 'setCurrentFormValues',
        dataId: 168785807996701340,
        options: {
          compId: 'Form_056846',
          compLib: 'comm',
          pageJsonId: '912842',
          compName: 'Form',
          id: '751026',
          params: '$state.formData$',
        },
        line_number: 2,
      },
    ];
    eventDatasetCurrentFormValues2.params = [] || [];
    CMDGenerator(eventDatasetCurrentFormValues2, {}, 'setCurrentFormValues', {
      id: 'setCurrentFormValues',
      name: 'setCurrentFormValues',
      type: 'setCurrentFormValues',
      platform: 'undefined',
    });
    const eventDatasetCurrentFormValues3: any = [
      {
        type: 'setCurrentFormValues',
        dataId: 168785808796516450,
        options: {
          compId: 'Form_1870402',
          compLib: 'comm',
          pageJsonId: '912842',
          compName: 'Form',
          id: '570682',
          params: '$state.formData$',
        },
        line_number: 3,
      },
    ];
    eventDatasetCurrentFormValues3.params = [] || [];
    CMDGenerator(eventDatasetCurrentFormValues3, {}, 'setCurrentFormValues', {
      id: 'setCurrentFormValues',
      name: 'setCurrentFormValues',
      type: 'setCurrentFormValues',
      platform: 'undefined',
    });
    const eventDataifelse203: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '0246362',
            options: {
              useManual: true,
              useObject: false,
              context: '$state.actionType$',
              operate: '==',
              manualValue: 'U',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 168785828885399800,
        elseIfs: [],
        line_number: 4,
        callback1: [
          {
            type: 'setDisable',
            dataId: 168785832600098500,
            options: {
              compId: ['Input_853862', 'Input_518502', 'Input_7086615'],
              compLib: 'comm',
              pageJsonId: '912842',
              compName: 'Input',
              id: '3521054',
              disabled: '',
              compid: ['Input_853862', 'Input_518502', 'Input_7086615'],
            },
            line_number: 5,
          },
          {
            type: 'setRequired',
            dataId: 168785833120970100,
            options: {
              compId: ['Input_853862', 'Input_518502', 'Input_7086615'],
              compLib: 'comm',
              pageJsonId: '912842',
              compName: 'Input',
              id: '466006',
              required: 'true',
              compid: ['Input_853862', 'Input_518502', 'Input_7086615'],
            },
            line_number: 6,
          },
        ],
      },
    ];
    eventDataifelse203.params = [] || [];
    CMDGenerator(eventDataifelse203, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDataifelse204: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '83737',
            options: {
              context: '$state.formData.productBillItem$',
              operate: 'notEmpty',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 168794433981641380,
        elseIfs: [],
        line_number: 7,
        callback1: [
          {
            type: 'setValue',
            dataId: 168794439326952480,
            options: {
              compId: ['Input_853862', 'Input_518502', 'Input_7086615'],
              compLib: 'comm',
              pageJsonId: '912842',
              compName: 'Input',
              id: '424944',
              valueList: {
                Input_853862: '$state.formData.productBillItem$',
                Input_518502: '$state.formData.productChargeItem$',
                Input_7086615: '$state.formData.productChargeItemName$',
              },
              compid: ['Input_853862', 'Input_518502', 'Input_7086615'],
            },
            line_number: 8,
            callback1: [],
          },
        ],
      },
    ];
    eventDataifelse204.params = [] || [];
    CMDGenerator(eventDataifelse204, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_912842__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_912842_1',
          uid: 'View_912842_1',
          type: 'View',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
        style={{
          minHeight: '100%',
          display: 'flex',
          padding: '0px 0px 0px 0px',
          flexDirection: 'column',
          overflowY: 'auto',
          width: 'auto',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_912842_1')}
        {...injectData}
      >
        <Card
          name={'省内配置信息卡片'}
          cardIconType={'none'}
          extendNum={3}
          title={'省内配置信息'}
          bordered={false}
          size={'default'}
          hasHeader={true}
          hasIcon={true}
          titleColor={'#1c242e'}
          headerColor={'#ffffff'}
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
            id: 'Card_933506',
            uid: 'Card_933506',
            type: 'Card',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            padding: '20px 20px 20px 20px',
            overflowY: 'visible',
            margin: '0 0 16px 0',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'Card_933506')}
          {...injectData}
        >
          <Form
            name={'省内配置信息表单'}
            colSpan={8}
            labelCol={'9'}
            wrapperCol={15}
            colon={true}
            layout={'horizontal'}
            labelAlign={'right'}
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_056846'}
            $$componentItem={{
              id: 'Form_056846',
              uid: 'Form_056846',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_056846')}
            {...injectData}
          >
            <Input
              name={'省内账目项'}
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
              fieldName={'poBillItem'}
              maxLength={32}
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
                id: 'Input_853862',
                uid: 'Input_853862',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_853862')}
              {...injectData}
            />
            <Input
              name={'总部' + state?.title + '费用项目'}
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
              fieldName={'poChargeItem'}
              maxLength={16}
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
                id: 'Input_518502',
                uid: 'Input_518502',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_518502')}
              {...injectData}
            />
            <Input
              name={'总部' + state?.title + '费用项目名称'}
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
              fieldName={'poChargeItemName'}
              maxLength={16}
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
                id: 'Input_7086615',
                uid: 'Input_7086615',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_7086615')}
              {...injectData}
            />
          </Form>
        </Card>
        <Card
          name={'总部配置信息卡片'}
          cardIconType={'none'}
          extendNum={3}
          title={'总部配置信息'}
          bordered={false}
          size={'default'}
          hasHeader={true}
          hasIcon={true}
          titleColor={'#1c242e'}
          headerColor={'#ffffff'}
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
            id: 'Card_323816',
            uid: 'Card_323816',
            type: 'Card',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            padding: '20px 20px 20px 20px',
            overflowY: 'visible',
            margin: '0 0 16px 0',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'Card_323816')}
          {...injectData}
        >
          <Form
            name={'总部配置信息表单'}
            colSpan={8}
            labelCol={'9'}
            wrapperCol={15}
            colon={true}
            layout={'horizontal'}
            labelAlign={'right'}
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_1870402'}
            $$componentItem={{
              id: 'Form_1870402',
              uid: 'Form_1870402',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_1870402')}
            {...injectData}
          >
            <Input
              name={'一级费项编码'}
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
              fieldName={'chargeCode1'}
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
                id: 'Input_2006585',
                uid: 'Input_2006585',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_2006585')}
              {...injectData}
            />
            <Input
              name={'一级费项名称'}
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
              fieldName={'chargeName1'}
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
                id: 'Input_038606',
                uid: 'Input_038606',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_038606')}
              {...injectData}
            />
            <Input
              name={'税率'}
              size={'default'}
              selfSpan={''}
              labelCol={'9'}
              wrapperCol={15}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'%'}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={2}
              fieldName={'taxRate'}
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
                id: 'Input_587416',
                uid: 'Input_587416',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_587416')}
              {...injectData}
            />
            <Input
              name={'二级费项编码'}
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
              formItemIndex={3}
              fieldName={'chargeCode2'}
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
                id: 'Input_173548',
                uid: 'Input_173548',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_173548')}
              {...injectData}
            />
            <Input
              name={'二级费项名称'}
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
              formItemIndex={4}
              fieldName={'chargeName2'}
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
                id: 'Input_703344',
                uid: 'Input_703344',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_703344')}
              {...injectData}
            />
            <Select
              name={'费项类型'}
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
              formItemIndex={5}
              fieldName={'chargeType'}
              $$componentItem={{
                id: 'Select_5004844',
                uid: 'Select_5004844',
                type: 'Select',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Select_5004844')}
              {...injectData}
            />
            <Input
              name={'三级费项编码'}
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
              formItemIndex={6}
              fieldName={'chargeCode3'}
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
                id: 'Input_68279565',
                uid: 'Input_68279565',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_68279565')}
              {...injectData}
            />
            <Input
              name={'三级费项名称'}
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
              formItemIndex={7}
              fieldName={'chargeName3'}
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
                id: 'Input_0938348',
                uid: 'Input_0938348',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_0938348')}
              {...injectData}
            />
            <Input
              name={'资费周期类型'}
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
              fieldName={'platformChargeType'}
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
                id: 'Input_763509',
                uid: 'Input_763509',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_763509')}
              {...injectData}
            />
            <Input
              name={'管会产品编码'}
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
              fieldName={'acctProductCode'}
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
                id: 'Input_930302',
                uid: 'Input_930302',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_930302')}
              {...injectData}
            />
            <Input
              name={'管会科目代码'}
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
              fieldName={'acctCode'}
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
                id: 'Input_8121889',
                uid: 'Input_8121889',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_8121889')}
              {...injectData}
            />
            <View
              name={'布局容器'}
              labelCol={8}
              wrapperCol={16}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_0021094',
                uid: 'View_0021094',
                type: 'View',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              schema={{
                compType: 0,
                props: {
                  formItemIndex: 11,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{
                textAlign: 'left',
                display: 'block',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_0021094')}
              {...injectData}
            />
            <Input
              name={'一级经分产品费项名称'}
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
              formItemIndex={12}
              fieldName={'chargeBIName'}
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
                id: 'Input_7907087',
                uid: 'Input_7907087',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_7907087')}
              {...injectData}
            />
            <Input
              name={'资费场景实例编码'}
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
              formItemIndex={13}
              fieldName={'entryParaNumber'}
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
                id: 'Input_508079',
                uid: 'Input_508079',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_508079')}
              {...injectData}
            />
            <Input
              name={'一经通信和信息化费项编码'}
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
              formItemIndex={14}
              fieldName={'chargeBICode'}
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
                id: 'Input_90977',
                uid: 'Input_90977',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_90977')}
              {...injectData}
            />
            <Input
              name={'一经通信和信息化产品编码'}
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
              formItemIndex={15}
              fieldName={'productBICode'}
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
                id: 'Input_764415',
                uid: 'Input_764415',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_764415')}
              {...injectData}
            />
            <Input
              name={'一经通信和信息化产品名称'}
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
              formItemIndex={16}
              fieldName={'productBIName'}
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
                id: 'Input_174455',
                uid: 'Input_174455',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_174455')}
              {...injectData}
            />
          </Form>
        </Card>
      </View>
    </div>
  );
};

export default withPageHOC(ClsCp_0017_0001FeeInfo$$Modal, {
  pageId,
  hasLogin: false,
  defaultState: {
    bizId: '',
    sceneCode: '',
    bizData: '',
    formData: '',
    actionType: '',
    title: '',
  },
});
