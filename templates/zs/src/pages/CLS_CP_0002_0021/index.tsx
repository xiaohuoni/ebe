// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import {
  Checkbox,
  Divider,
  Form,
  HorizontalView,
  Input,
  Table,
  View,
} from '@/components/factory';

import BusiComp0521965 from '@/components/BusiComp0521965';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const ClsCp_0002_0021$$Page: React.FC<PageProps> = ({
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
}) => {
  const fileUpload = (options_467443: any) => {
    const eventDatacustomActionCode155: any = [
      {
        type: 'customActionCode',
        dataId: 168722884815597120,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '6856233',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=options_3216586;success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'callParentCustomFunc',
            dataId: 168722884815569900,
            options: {
              compId: 'callParentCustomFunc',
              compName: 'system',
              id: '3567379',
              pageJsonId: '537892',
              pathname: '/commonAuditOrder',
              pageId: '872682457815691264',
              customFuncName: 'getFactor',
              customFuncParams: '$data.sceneSubmit$',
            },
            line_number: 2,
            callback1: [],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode155.params =
      [
        {
          title: '事件入参',
          name: 'options_467443',
          value: '$options_467443$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode155,
      { options_467443 },
      'customActionCode',
      {
        id: 'customActionCode',
        name: 'customActionCode',
        type: 'customActionCode',
        platform: 'undefined',
      },
    );
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    fileUpload,
  }));

  useEffect(() => {
    const eventDataifelse234: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '989006',
            options: { context: '$state.itemList$', operate: 'notEmpty' },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 168722992064623580,
        elseIfs: [],
        line_number: 1,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 168722993769925100,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '815439',
              pageJsonId: '7946678',
              code: 'function main(data,state,success,fail){var itemList=state.itemList;var form={};if(itemList.attrList.length>0){for(var i=0;i<itemList.attrList.length;++i){form[itemList.attrList[i].attrCode]=itemList.attrList[i].attrValue}}data.form=form;var table=[];itemList.instList.forEach(function(v){var feeObj={};var instList=v.instAttrList;if(instList.length>0){for(var i=0;i<instList.length;i++){feeObj[instList[i].attrCode]=instList[i].attrValue}var discount=feeObj["actualPrice"]/feeObj["standardTariff"];feeObj["discount"]=discount.toFixed(2);feeObj.rowId=v.instCode;table.push(feeObj)}});data.table=table;console.log("-----------------------------------------------table");console.log(table);success(form)};',
              actionTitle: '表单和列表加载',
            },
            line_number: 2,
            callback1: [
              {
                type: 'console',
                dataId: 168722993769950700,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '436592',
                  pageJsonId: '7946678',
                  value: ['$data_815439$', 'TESTTEST'],
                },
                line_number: 3,
              },
              {
                type: 'setValue',
                dataId: 168722993769927940,
                options: {
                  compId: ['Input_035565'],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '108158',
                  value: '$state.itemList.approveGradeName$',
                  valueList: {
                    Input_035565: '$state.itemList.approveGradeName$',
                  },
                  compid: ['Input_035565'],
                },
                line_number: 4,
                callback1: [],
              },
              {
                type: 'setDataSource',
                dataId: 168783460360948580,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '3764016',
                  pageJsonId: '305338',
                  dataSourceId: 168722928227828030,
                  dataSourceName: 'form',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      attrId: '1421325',
                      code: 'ctGroupCode',
                      name: 'CT集团编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: { type: [], code: '' },
                    },
                    {
                      attrId: '549028',
                      code: 'ordSerialNum',
                      name: '订单流水',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '512266',
                      code: 'contractCode',
                      name: '合同编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '5101654',
                      code: 'contractTotalAmount',
                      name: '合同总价',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  targetDataSourcePaths: [],
                },
                line_number: 5,
                callback1: [],
                callback2: [],
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse234.params = [] || [];
    CMDGenerator(eventDataifelse234, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDatasetTimer3: any = [
      {
        type: 'setTimer',
        dataId: 168722897862368640,
        shielding: true,
        options: {
          compId: 'setTimer',
          compName: 'system',
          id: '9675334',
          pageJsonId: '841291',
          interval: 100,
          type: 'timeout',
          timername: '隐藏上一步按钮',
        },
        line_number: 6,
        callback1: [
          {
            type: 'callCustomPageFunc',
            dataId: 168722897862330100,
            shielding: true,
            options: {
              compId: 'callCustomPageFunc',
              compName: 'system',
              id: '114856',
              pageJsonId: '841291',
              pathname: '/flow/audit',
              pageId: '874567207627108352',
              modalPath: '/flow/audit',
              customFuncName: 'hidePreviousStep',
            },
            line_number: 7,
            callback1: [],
            callback2: [],
          },
          {
            type: 'customActionCode',
            dataId: 168835365176599330,
            shielding: true,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '898382',
              pageJsonId: '841291',
              code: 'function main(data,state,success,fail){console.log("TTTTTTTT");console.log(state);var tacheCode=state.tacheCode;if(tacheCode=="APPLY_CREATE"){success(state)}};',
              actionTitle: '不同意不允许重复提交',
            },
            line_number: 8,
            callback1: [
              {
                type: 'callCustomPageFunc',
                dataId: 168835365176529020,
                shielding: true,
                options: {
                  compId: 'callCustomPageFunc',
                  compName: 'system',
                  id: '48943',
                  pageJsonId: '841291',
                  pathname: '/flow/audit',
                  pageId: '874567207627108352',
                  modalPath: '/flow/audit',
                  customFuncName: 'disableSubmit',
                },
                line_number: 9,
                callback1: [],
                callback2: [],
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDatasetTimer3.params = [] || [];
    CMDGenerator(eventDatasetTimer3, {}, 'setTimer', {
      id: 'setTimer',
      name: 'setTimer',
      type: 'setTimer',
      platform: 'undefined',
    }); // console 169277919281669120
    console.log('移动商城场景', urlParam?.sceneCode, state?.scene);

    return () => {};
  }, []);

  useEffect(() => {
    const eventDatasetTimer2: any = [
      {
        type: 'setTimer',
        dataId: 169277959732725200,
        shielding: true,
        options: {
          compId: 'setTimer',
          compName: 'system',
          id: '818348',
          pageJsonId: '841291',
          interval: 100,
          type: 'timeout',
          timername: '隐藏上一步按钮',
        },
        line_number: 1,
        callback1: [
          {
            type: 'callCustomPageFunc',
            dataId: 169277959732737800,
            shielding: true,
            options: {
              compId: 'callCustomPageFunc',
              compName: 'system',
              id: '0064377',
              pageJsonId: '841291',
              pathname: '/flow/audit',
              pageId: '874567207627108352',
              modalPath: '/flow/audit',
              customFuncName: 'hidePreviousStep',
            },
            line_number: 2,
            callback1: [],
            callback2: [],
          },
          {
            type: 'customActionCode',
            dataId: 169277959732825440,
            shielding: true,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '093933',
              pageJsonId: '841291',
              code: 'function main(data,state,success,fail){console.log("TTTTTTTT");console.log(state);var tacheCode=state.tacheCode;if(tacheCode=="APPLY_CREATE"){success(state)}};',
              actionTitle: '不同意不允许重复提交',
            },
            line_number: 3,
            callback1: [
              {
                type: 'callCustomPageFunc',
                dataId: 169277959732839940,
                shielding: true,
                options: {
                  compId: 'callCustomPageFunc',
                  compName: 'system',
                  id: '4993442',
                  pageJsonId: '841291',
                  pathname: '/flow/audit',
                  pageId: '874567207627108352',
                  modalPath: '/flow/audit',
                  customFuncName: 'disableSubmit',
                },
                line_number: 4,
                callback1: [],
                callback2: [],
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDatasetTimer2.params = [] || [];
    CMDGenerator(eventDatasetTimer2, {}, 'setTimer', {
      id: 'setTimer',
      name: 'setTimer',
      type: 'setTimer',
      platform: 'undefined',
    });
    const eventDataifelse233: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '220713',
            options: {
              useManual: true,
              useObject: false,
              context: '$state.tacheCode$',
              operate: '!=',
              manualValue: 'CreateOrder',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 169278000438259800,
        elseIfs: [
          {
            dataName: 'elseIf',
            dataId: 169286100702269150,
            children: [
              {
                dataName: 'action',
                dataId: 169286102794911550,
                children: [],
                todoOptions: ['visible', 'selectComp'],
                options: {
                  compId: 'Input_035565',
                  compLib: 'comm',
                  pageJsonId: '305338',
                  compName: 'Input',
                  id: '845782',
                  visible: '',
                },
                actionObjId: 'Input_035565',
                actionObjName: 'Input',
                value: 'setVisible',
                compLib: 'comm',
                line_number: 10,
              },
            ],
            condition: [],
            value: 'elseIf',
            callback: [
              {
                type: 'setVisible',
                dataId: 169286102794911550,
                options: {
                  compId: 'Input_035565',
                  compLib: 'comm',
                  pageJsonId: '305338',
                  compName: 'Input',
                  id: '845782',
                  visible: '',
                },
                line_number: 10,
              },
            ],
          },
        ],
        line_number: 5,
        callback1: [
          {
            type: 'setTimer',
            dataId: 169278006457488900,
            options: {
              compId: 'setTimer',
              compName: 'system',
              id: '481605',
              pageJsonId: '841291',
              interval: 100,
              type: 'timeout',
              timername: '隐藏上一步按钮',
            },
            line_number: 6,
            callback1: [
              {
                type: 'callCustomPageFunc',
                dataId: 169278006457411230,
                options: {
                  compId: 'callCustomPageFunc',
                  compName: 'system',
                  id: '602913',
                  pageJsonId: '841291',
                  pathname: '/flow/audit',
                  pageId: '874567207627108352',
                  modalPath: '/flow/audit',
                  customFuncName: 'hidePreviousStep',
                },
                line_number: 7,
                callback1: [],
                callback2: [],
              },
              {
                type: 'customActionCode',
                dataId: 169278006457413120,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '789721',
                  pageJsonId: '841291',
                  code: 'function main(data,state,success,fail){console.log("TTTTTTTT");console.log(state);var tacheCode=state.tacheCode;if(tacheCode=="APPLY_CREATE"){success(state)}};',
                  actionTitle: '不同意不允许重复提交',
                },
                line_number: 8,
                callback1: [
                  {
                    type: 'callCustomPageFunc',
                    dataId: 169278006457405120,
                    options: {
                      compId: 'callCustomPageFunc',
                      compName: 'system',
                      id: '509248',
                      pageJsonId: '841291',
                      pathname: '/flow/audit',
                      pageId: '874567207627108352',
                      modalPath: '/flow/audit',
                      customFuncName: 'disableSubmit',
                    },
                    line_number: 9,
                    callback1: [],
                    callback2: [],
                  },
                ],
                callback2: [],
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse233.params = [] || [];
    CMDGenerator(eventDataifelse233, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
  });

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_305338__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_305338_1',
          uid: 'View_305338_1',
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
        ref={(r: any) => (refs['View_305338_1'] = r)}
        {...injectData}
      >
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_223738',
            uid: 'View_223738',
            type: 'View',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            textAlign: 'left',
            display: 'block',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
          }}
          ref={(r: any) => (refs['View_223738'] = r)}
          {...injectData}
        >
          <Divider
            name={'分割线'}
            orientation={'center'}
            type={'horizontal'}
            dashed={false}
            dividerText={'移动物联网商城订单折扣'}
            showTitle={true}
            $$componentItem={{
              id: 'Divider_156518',
              uid: 'Divider_156518',
              type: 'Divider',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ margin: '12px 0 12px 0', height: 'auto' }}
            ref={(r: any) => (refs['Divider_156518'] = r)}
            {...injectData}
          />
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_4459096',
              uid: 'View_4459096',
              type: 'View',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              display: 'block',
              flexDirection: 'column',
              padding: '0px 0px 0px 0px',
              width: '100%',
              overflowY: 'hidden',
              margin: '0px 0px 12px 0px',
            }}
            ref={(r: any) => (refs['View_4459096'] = r)}
            {...injectData}
          >
            <HorizontalView
              name={'左右布局'}
              formItemIndex={0}
              $$componentItem={{
                id: 'HorizontalView_08008',
                uid: 'HorizontalView_08008',
                type: 'HorizontalView',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                display: 'flex',
                flexDirection: 'row',
                padding: '0px 0px 0px 0px',
                width: '100%',
                height: 'auto',
                overflowY: 'hidden',
                margin: '0px 0px 0px 0px',
              }}
              ref={(r: any) => (refs['HorizontalView_08008'] = r)}
              {...injectData}
            >
              <View
                name={'布局容器'}
                $$componentItem={{
                  id: 'View_8234446',
                  uid: 'View_8234446',
                  type: 'View',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '0px 0px 0px 0px',
                  width: '100%',
                  height: 'auto',
                  overflowY: 'hidden',
                  margin: '0px 0px 0px 0px',
                }}
                ref={(r: any) => (refs['View_8234446'] = r)}
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
                  formCode={'Form_4311097'}
                  className={'beforeStyle'}
                  $$componentItem={{
                    id: 'Form_803572',
                    uid: 'Form_803572',
                    type: 'Form',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ padding: '0px 0px 0px 0px' }}
                  ref={(r: any) => (refs['Form_803572'] = r)}
                  {...injectData}
                >
                  <Checkbox
                    name={'审批场景'}
                    titleTip={'text'}
                    tipLocation={'after'}
                    tipPlacement={'top'}
                    text={'移动物联网商城订单折扣'}
                    selfSpan={8}
                    labelCol={8}
                    wrapperCol={16}
                    formItemIndex={0}
                    fieldName={'aduitClass'}
                    defaultChecked={true}
                    tipIcon={{
                      theme: 'outlined',
                      type: 'question-circle',
                      isIconFont: false,
                    }}
                    tipContent={data?.sceneSubmit?.childCatalogDesc}
                    $$componentItem={{
                      id: 'Checkbox_190357',
                      uid: 'Checkbox_190357',
                      type: 'Checkbox',
                      ...componentItem,
                    }}
                    disabled={true}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) => (refs['Checkbox_190357'] = r)}
                    {...injectData}
                  />
                  <View
                    name={'布局容器'}
                    labelCol={8}
                    wrapperCol={16}
                    backgroundType={{ type: 'cleanColor', color: undefined }}
                    $$componentItem={{
                      id: 'View_898005',
                      uid: 'View_898005',
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
                        formItemIndex: 1,
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
                    ref={(r: any) => (refs['View_898005'] = r)}
                    {...injectData}
                  />
                  <Input
                    name={'场景最高审批等级'}
                    size={'default'}
                    selfSpan={8}
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
                    fieldName={'auditClass'}
                    formItemIndex={2}
                    className={'fixed-form-item-label-width-150'}
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
                      id: 'Input_035565',
                      uid: 'Input_035565',
                      type: 'Input',
                      ...componentItem,
                    }}
                    disabled={true}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) => (refs['Input_035565'] = r)}
                    {...injectData}
                  />
                </Form>
              </View>
            </HorizontalView>
          </View>
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
            formCode={'Form_1354964'}
            fieldName={'$dataform'}
            relationDataSource={data?.$dataform}
            busiObjectId={''}
            $$componentItem={{
              id: 'Form_914573',
              uid: 'Form_914573',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => (refs['Form_914573'] = r)}
            {...injectData}
          >
            <Input
              name={'CT集团编码'}
              size={'default'}
              selfSpan={8}
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
              formItemIndex={0}
              fieldName={'ctGroupCode'}
              value={data?.form?.ctGroupCode}
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
                id: 'Input_0532',
                uid: 'Input_0532',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_0532'] = r)}
              {...injectData}
            />
            <Input
              name={'订单流水'}
              size={'default'}
              selfSpan={8}
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
              fieldName={'ordSerialNum'}
              value={data?.form?.ordSerialNum}
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
                id: 'Input_88055',
                uid: 'Input_88055',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_88055'] = r)}
              {...injectData}
            />
            <Input
              name={'合同编码'}
              size={'default'}
              selfSpan={8}
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
              fieldName={'contractCode'}
              value={data?.form?.contractCode}
              formItemIndex={2}
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
                id: 'Input_8368773',
                uid: 'Input_8368773',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_8368773'] = r)}
              {...injectData}
            />
            <Input
              name={'合同总价'}
              size={'default'}
              selfSpan={8}
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
              fieldName={'contractTotalAmount'}
              value={data?.form?.contractTotalAmount}
              formItemIndex={3}
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
                id: 'Input_231862',
                uid: 'Input_231862',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_231862'] = r)}
              {...injectData}
            />
          </Form>
          <Table
            name={'表格'}
            isFlexColumn={false}
            pageSize={10}
            current={1}
            tableTitle={'表格名称'}
            showCustom={{
              iconPosition: 'left',
              type: undefined,
              theme: undefined,
              fontAddress: undefined,
              isIconFont: undefined,
              customTitle: '自定义列',
              customStyle: 'default',
              iconFile: undefined,
              hasCustom: false,
            }}
            columns={[
              {
                title: 'SKU',
                dataIndex: 'sku',
                key: 'column1',
                className: '',
                id: '495838',
                customRendering: undefined,
                editContent: {
                  edittype: 'title',
                  title: {
                    code: 'function main(text, row, index) { return text;}',
                    originCode: [
                      '/**',
                      ' * 计算绑定的内容',
                      ' * @param {String} text 行数据中数据字段翻译后的内容',
                      ' * @param {Object} row 行数据对象',
                      ' * @param {Number} index 行索引',
                      ' * @returns {Boolean} 实际值',
                      ' * 例：return row.id，表示当行主键为id时，返回内容为row.id实际的值',
                      ' */',
                      'function main(text, row, index) {',
                      '    return text;',
                      '}',
                    ],
                  },
                },
              },
              {
                title: '产品名称',
                dataIndex: 'prodName',
                key: 'column2',
                className: 'divider',
                id: '40589',
                customRendering: undefined,
                editContent: {
                  edittype: 'title',
                  title: {
                    code: 'function main(text, row, index) { return text;}',
                    originCode: [
                      '/**',
                      ' * 计算绑定的内容',
                      ' * @param {String} text 行数据中数据字段翻译后的内容',
                      ' * @param {Object} row 行数据对象',
                      ' * @param {Number} index 行索引',
                      ' * @returns {Boolean} 实际值',
                      ' * 例：return row.id，表示当行主键为id时，返回内容为row.id实际的值',
                      ' */',
                      'function main(text, row, index) {',
                      '    return text;',
                      '}',
                    ],
                  },
                },
              },
              {
                title: '数量',
                dataIndex: 'number',
                key: 'column3',
                className: 'divider',
                id: '918226',
                customRendering: undefined,
                editContent: {
                  edittype: 'title',
                  title: {
                    code: 'function main(text, row, index) { return text;}',
                    originCode: [
                      '/**',
                      ' * 计算绑定的内容',
                      ' * @param {String} text 行数据中数据字段翻译后的内容',
                      ' * @param {Object} row 行数据对象',
                      ' * @param {Number} index 行索引',
                      ' * @returns {Boolean} 实际值',
                      ' * 例：return row.id，表示当行主键为id时，返回内容为row.id实际的值',
                      ' */',
                      'function main(text, row, index) {',
                      '    return text;',
                      '}',
                    ],
                  },
                },
              },
              {
                title: '类别',
                dataIndex: 'category',
                key: 'column4',
                className: 'divider',
                id: '005591',
                customRendering: undefined,
                editContent: {
                  edittype: 'title',
                  title: {
                    code: 'function main(text, row, index) { return text;}',
                    originCode: [
                      '/**',
                      ' * 计算绑定的内容',
                      ' * @param {String} text 行数据中数据字段翻译后的内容',
                      ' * @param {Object} row 行数据对象',
                      ' * @param {Number} index 行索引',
                      ' * @returns {Boolean} 实际值',
                      ' * 例：return row.id，表示当行主键为id时，返回内容为row.id实际的值',
                      ' */',
                      'function main(text, row, index) {',
                      '    return text;',
                      '}',
                    ],
                  },
                },
              },
              {
                title: '标志资费',
                dataIndex: 'standardTariff',
                key: 'column5',
                className: 'divider',
                id: '999555',
                customRendering: undefined,
                editContent: {
                  edittype: 'title',
                  title: {
                    code: 'function main(text, row, index) { return text;}',
                    originCode: [
                      '/**',
                      ' * 计算绑定的内容',
                      ' * @param {String} text 行数据中数据字段翻译后的内容',
                      ' * @param {Object} row 行数据对象',
                      ' * @param {Number} index 行索引',
                      ' * @returns {Boolean} 实际值',
                      ' * 例：return row.id，表示当行主键为id时，返回内容为row.id实际的值',
                      ' */',
                      'function main(text, row, index) {',
                      '    return text;',
                      '}',
                    ],
                  },
                },
              },
              {
                title: '销售底价（元）',
                dataIndex: 'saleFloorPrice',
                key: 'column6',
                className: 'divider',
                id: '470994',
                customRendering: undefined,
                editContent: {
                  edittype: 'title',
                  title: {
                    code: 'function main(text, row, index) { return text;}',
                    originCode: [
                      '/**',
                      ' * 计算绑定的内容',
                      ' * @param {String} text 行数据中数据字段翻译后的内容',
                      ' * @param {Object} row 行数据对象',
                      ' * @param {Number} index 行索引',
                      ' * @returns {Boolean} 实际值',
                      ' * 例：return row.id，表示当行主键为id时，返回内容为row.id实际的值',
                      ' */',
                      'function main(text, row, index) {',
                      '    return text;',
                      '}',
                    ],
                  },
                },
              },
              {
                type: 'staticCol',
                id: '03394',
                dataIndex: 'actualPrice',
                title: '实收价',
                key: '03394',
                className: 'divider',
                customRendering: undefined,
                editContent: {
                  edittype: 'title',
                  title: {
                    code: 'function main(text, row, index) { return text;}',
                    originCode: [
                      '/**',
                      ' * 计算绑定的内容',
                      ' * @param {String} text 行数据中数据字段翻译后的内容',
                      ' * @param {Object} row 行数据对象',
                      ' * @param {Number} index 行索引',
                      ' * @returns {Boolean} 实际值',
                      ' * 例：return row.id，表示当行主键为id时，返回内容为row.id实际的值',
                      ' */',
                      'function main(text, row, index) {',
                      '    return text;',
                      '}',
                    ],
                  },
                },
              },
              {
                type: 'staticCol',
                id: '831577',
                dataIndex: 'discount',
                title: '折扣',
                key: '831577',
                className: 'divider',
                customRendering: undefined,
                editContent: {
                  edittype: 'title',
                  title: {
                    code: 'function main(text, row, index) { return text;}',
                    originCode: [
                      '/**',
                      ' * 计算绑定的内容',
                      ' * @param {String} text 行数据中数据字段翻译后的内容',
                      ' * @param {Object} row 行数据对象',
                      ' * @param {Number} index 行索引',
                      ' * @returns {Boolean} 实际值',
                      ' * 例：return row.id，表示当行主键为id时，返回内容为row.id实际的值',
                      ' */',
                      'function main(text, row, index) {',
                      '    return text;',
                      '}',
                    ],
                  },
                },
              },
            ]}
            page={true}
            rowKeyType={'auto'}
            editMode={'single'}
            selectType={'checkbox'}
            bordered={'segmentation'}
            size={'middle'}
            fixedAction={false}
            rowSelection={undefined}
            showHead={false}
            showTotal={false}
            showSizeChanger={true}
            showQuickJumper={false}
            pageSizeOptions={'[5,10,20]'}
            dataSource={data?.table}
            fieldName={'data.MemberInfo.length'}
            total={data?.MemberInfo?.length}
            hiddenAction={true}
            rowKey={'rowId'}
            rowActions={[
              {
                title: '详情',
                iconPos: 'left',
                icon: { theme: 'outlined', type: 'file-search' },
                type: 'detail',
                id: '621807',
                checked: true,
              },
            ]}
            extend={[]}
            formItemIndex={4}
            dataSourceFromDataSourceConfig={'data.table;'}
            $$componentItem={{
              id: 'Table_443274',
              uid: 'Table_443274',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ margin: '16px 0px 0px 0px' }}
            onRowDetail={(rowId: any, row: any, index: any) => {}}
            onRowEdit={(rowId: any, row: any, index: any) => {}}
            ref={(r: any) => (refs['Table_443274'] = r)}
            {...injectData}
          />
        </View>
        <BusiComp0521965
          busiCompId={'922396081753948160'}
          name={'附件'}
          formItemIndex={5}
          busiCompStates={{
            catalogCode: state?.catalogCode,
            scene: state?.scene,
            fileList: state?.itemList?.fileInfo,
          }}
          style={{ margin: '12px 0px 0px 0px' }}
          ref={(r: any) => (refs['BOFramer_3668487'] = r)}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(ClsCp_0002_0021$$Page, {
  pageId: '988272183566274560',
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', bizData: '' },
});
