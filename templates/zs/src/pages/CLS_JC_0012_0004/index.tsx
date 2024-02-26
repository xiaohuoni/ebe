// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  Divider,
  HorizontalView,
  Form,
  Checkbox,
  Input,
  Table,
} from '@/components/factory';

import BusiComp0521965 from '@/components/BusiComp0521965';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '957475253092319232';
const ClsJc_0012_0004$$Page: React.FC<PageProps> = ({
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
  const fileUpload = (options_896722: any) => {
    const eventDatacustomActionCode186: any = [
      {
        type: 'customActionCode',
        dataId: 168595618223359460,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '8394294',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=options_3216586;success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'callParentCustomFunc',
            dataId: 168595618223366460,
            options: {
              compId: 'callParentCustomFunc',
              compName: 'system',
              id: '491236',
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
    eventDatacustomActionCode186.params =
      [
        {
          title: '事件入参',
          name: 'options_896722',
          value: '$options_896722$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode186,
      { options_896722 },
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
    const eventDataifelse261: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '56263',
            options: { context: '$state.itemList$', operate: 'notEmpty' },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 167962339531869060,
        elseIfs: [],
        line_number: 1,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 167962339531892060,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '67819',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var item=state.itemList;item.attrList.forEach(function(v){data.formData[v.attrCode]=v.attrValue});var feeInfoList=[];item.instList.forEach(function(v){var feeObj={};var instList=v.instAttrList;if(instList!=undefined&&instList.length>0){for(var i=0;i<instList.length;i++){feeObj[instList[i].attrCode]=instList[i].attrValue}feeObj.rowId=v.instCode;feeInfoList.push(feeObj)}});success(feeInfoList)};',
              actionTitle: '设置界面初始化值',
            },
            line_number: 2,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 167962339531840700,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '7662834',
                  pageJsonId: '537892',
                  dataSourceId: 167947300166082140,
                  dataSourceName: 'feeInfo',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '890956',
                      code: 'areaName',
                      name: '区县名字',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '896171',
                      code: 'belongAreaText',
                      name: '归属区县文本',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '787338',
                      code: 'cityName',
                      name: '地市名称',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '7271435',
                      code: 'belongCityText',
                      name: '归属地市文本',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '352546',
                      code: 'cityRank',
                      name: '地市排名\t',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '49141',
                      code: 'allProvinceRank',
                      name: '全省排名',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '73333',
                      code: 'totalPoints',
                      name: '总分',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '39617',
                      code: 'checkCaseName',
                      name: '考核方案名称',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '4935335',
                      code: 'custManagerName',
                      name: '客户经理姓名',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '092242',
                      code: 'custManagerCode',
                      name: '客户经理工号',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '8122729',
                      code: 'checkMonth',
                      name: '考核月份',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                  ],
                  operateType: 3,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  newData: '$data_67819$',
                },
                line_number: 3,
                callback1: [],
                callback2: [],
              },
              {
                type: 'setValue',
                dataId: 167988662769339740,
                options: {
                  compId:
                    'Input_361479_887285_2150708_923492_98259415_5553247_846423',
                  compLib: 'comm',
                  pageJsonId: '724622414',
                  compName: 'Input',
                  id: '5255116',
                  valueList: {
                    Input_361479_887285_2150708_923492_98259415_5553247_846423:
                      '$state.itemList.approveGradeName$',
                  },
                },
                line_number: 4,
                callback1: [],
              },
            ],
            callback2: [],
          },
          {
            type: 'customActionCode',
            dataId: 167962339531856420,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '02972',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var item=state.itemList;success(item.fileInfo)};',
            },
            line_number: 5,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 167962339531887600,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '586789',
                  pageJsonId: '537892',
                  dataSourceId: 167953604007627170,
                  dataSourceName: 'fileInfoList',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '634755',
                      code: 'fileName',
                      name: '附件名称',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '513464',
                      code: 'filePath',
                      name: '附件文件路径',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '876905',
                      code: 'fileServerType',
                      name: '附件文件服务器类型',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '740156',
                      code: 'fileSubType',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '261705',
                      code: 'fileType',
                      name: '附件分类-大类',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '091394',
                      code: 'fileUrl',
                      name: '附件URL地址',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '057793',
                      code: 'tacheCode',
                      name: '环节编码',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '353952',
                      code: 'fileCode',
                      name: '文件编码',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '678656',
                      code: 'createTime',
                      name: '创建时间',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '993821',
                      code: 'createStaff',
                      name: '创建人',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '592066',
                      code: 'fileTypeName',
                      name: '附件类型',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                  ],
                  newData: '$data_02972$',
                  operateType: 3,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 6,
                callback1: [],
                callback2: [],
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse261.params = [] || [];
    CMDGenerator(eventDataifelse261, {}, 'ifelse', {
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
      className="__CustomClass_724622414__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_724622414_1_27472',
          uid: 'View_724622414_1_27472',
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
          width: '0A',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_724622414_1_27472')}
        {...injectData}
      >
        <Divider
          name={'客户经理绩效考核汇总报表'}
          orientation={'center'}
          type={'horizontal'}
          dashed={false}
          dividerText={'客户经理绩效考核汇总报表'}
          showTitle={true}
          $$componentItem={{
            id: 'Divider_6651058_9609896_644842_0395605',
            uid: 'Divider_6651058_9609896_644842_0395605',
            type: 'Divider',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ margin: '12px 0 12px 0', height: '0A' }}
          ref={(r: any) =>
            refs.setComponentRef(r, 'Divider_6651058_9609896_644842_0395605')
          }
          {...injectData}
        />
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_6806553_8058562_8839184_2485034',
            uid: 'View_6806553_8058562_8839184_2485034',
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
            margin: '16px 0px 16px 0px',
          }}
          ref={(r: any) =>
            refs.setComponentRef(r, 'View_6806553_8058562_8839184_2485034')
          }
          {...injectData}
        >
          <HorizontalView
            name={'左右布局'}
            formItemIndex={0}
            $$componentItem={{
              id: 'HorizontalView_004602_698859_3161244_543857',
              uid: 'HorizontalView_004602_698859_3161244_543857',
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
              height: '100%',
              overflowY: 'auto',
              margin: '0px 0px 12px 0px',
            }}
            ref={(r: any) =>
              refs.setComponentRef(
                r,
                'HorizontalView_004602_698859_3161244_543857',
              )
            }
            {...injectData}
          >
            <View
              name={'布局容器'}
              $$componentItem={{
                id: 'View_339406_2087875_965124_831519',
                uid: 'View_339406_2087875_965124_831519',
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
                height: '100%',
                overflowY: 'auto',
                margin: '15px 0px 5px 0px',
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'View_339406_2087875_965124_831519')
              }
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
                  id: 'Form_4311097_9385662_0413915_5274814_3749432_622202',
                  uid: 'Form_4311097_9385662_0413915_5274814_3749432_622202',
                  type: 'Form',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) =>
                  refs.setComponentRef(
                    r,
                    'Form_4311097_9385662_0413915_5274814_3749432_622202',
                  )
                }
                {...injectData}
              >
                <Checkbox
                  name={'审批场景'}
                  titleTip={'text'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  text={'客户经理绩效考核汇总报表'}
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
                    id: 'Checkbox_882584_5289015_934499_6069114_916609_273782_01595',
                    uid: 'Checkbox_882584_5289015_934499_6069114_916609_273782_01595',
                    type: 'Checkbox',
                    ...componentItem,
                  }}
                  disabled={true}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    refs.setComponentRef(
                      r,
                      'Checkbox_882584_5289015_934499_6069114_916609_273782_01595',
                    )
                  }
                  {...injectData}
                />
                <View
                  name={'布局容器'}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_5097806_1317393_2394241_21977',
                    uid: 'View_5097806_1317393_2394241_21977',
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
                    display: 'block',
                    flexDirection: 'column',
                    padding: '0px 0px 0px 0px',
                    width: '100%',
                  }}
                  ref={(r: any) =>
                    refs.setComponentRef(
                      r,
                      'View_5097806_1317393_2394241_21977',
                    )
                  }
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
                    id: 'Input_361479_887285_2150708_923492_98259415_5553247_846423',
                    uid: 'Input_361479_887285_2150708_923492_98259415_5553247_846423',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={true}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    refs.setComponentRef(
                      r,
                      'Input_361479_887285_2150708_923492_98259415_5553247_846423',
                    )
                  }
                  {...injectData}
                />
              </Form>
            </View>
          </HorizontalView>
        </View>
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_4949093_2026766_78116154_9383766_0165402',
            uid: 'View_4949093_2026766_78116154_9383766_0165402',
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
            margin: '0px 0px 20px 0px',
          }}
          ref={(r: any) =>
            refs.setComponentRef(
              r,
              'View_4949093_2026766_78116154_9383766_0165402',
            )
          }
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
            formCode={'Form_2854379'}
            genRuleType={'key'}
            formType={'normal'}
            relationDataSource={data?.formData}
            busiObjectId={''}
            $$componentItem={{
              id: 'Form_2854379',
              uid: 'Form_2854379',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            onValuesChange={(changedFieldName: any, changedValue: any) => {
              const eventDatasetDataSource228: any = [
                {
                  type: 'setDataSource',
                  dataId: 167988706826428400,
                  options: {
                    compId: 'page',
                    compName: 'page',
                    id: '7101973',
                    pageJsonId: '724622414',
                    dataSourceId: 167988700965378530,
                    dataSourceName: 'formData',
                    dataSourceRelType: 'custom',
                    dataSourceReloadFilter: [],
                    dataSourceSetValue: [
                      {
                        attrId: '966577',
                        code: 'belongAreaText',
                        name: '归属区县文本',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_2854379', 'getFieldsValue'],
                          code: 'belongAreaText',
                        },
                      },
                      {
                        attrId: '4200154',
                        code: 'belongCityText',
                        name: '归属地市文本',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_2854379', 'getFieldsValue'],
                          code: 'belongCityText',
                        },
                      },
                      {
                        attrId: '483107',
                        code: 'checkMonth',
                        name: '考核月份',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_2854379', 'getFieldsValue'],
                          code: 'checkMonth',
                        },
                      },
                    ],
                    onlySetPatch: true,
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatasetDataSource228.params =
                [
                  {
                    title: '表单当前改变字段编码',
                    name: 'changedFieldName',
                    value: '$changedFieldName$',
                  },
                  {
                    title: '表单当前改变字段值',
                    name: 'changedValue',
                    value: '$changedValue$',
                  },
                ] || [];
              CMDGenerator(
                eventDatasetDataSource228,
                { changedFieldName, changedValue },
                'setDataSource',
                {
                  id: 'setDataSource',
                  name: 'setDataSource',
                  type: 'setDataSource',
                  platform: 'pc',
                },
              );
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_2854379')}
            {...injectData}
          >
            <Input
              name={'考核月份'}
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
              fieldName={'checkMonth'}
              value={data?.formData?.checkMonth}
              formItemIndex={0}
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
                id: 'Input_checkMonth_77959',
                uid: 'Input_checkMonth_77959',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_checkMonth_77959')
              }
              {...injectData}
            />
            <Input
              name={'归属地市'}
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
              fieldName={'belongCityText'}
              value={data?.formData?.belongCityText}
              formItemIndex={1}
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
                id: 'Input_belongCityText_981912',
                uid: 'Input_belongCityText_981912',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_belongCityText_981912')
              }
              {...injectData}
            />
            <Input
              name={'归属区县'}
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
              fieldName={'belongAreaText'}
              value={data?.formData?.belongAreaText}
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
                id: 'Input_belongAreaText_2771636',
                uid: 'Input_belongAreaText_2771636',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_belongAreaText_2771636')
              }
              {...injectData}
            />
          </Form>
        </View>
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
              title: '归属地市',
              key: 'cityName',
              dataIndex: 'cityName',
              id: '440886',
              className: '',
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
              title: '归属区县',
              key: 'areaName',
              dataIndex: 'areaName',
              id: '9849326',
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
              title: '客户经理工号',
              key: 'custManagerCode',
              dataIndex: 'custManagerCode',
              className: 'divider',
              id: '9128854',
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
              title: '客户经理姓名',
              key: 'custManagerName',
              dataIndex: 'custManagerName',
              className: 'divider',
              id: '3961072',
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
              title: '考核方案名称',
              key: 'checkCaseName',
              dataIndex: 'checkCaseName',
              className: 'divider',
              id: '343504',
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
              title: '总分',
              key: 'totalPoints',
              dataIndex: 'totalPoints',
              className: 'divider',
              id: '897232',
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
              title: '全省排名',
              key: 'allProvinceRank',
              dataIndex: 'allProvinceRank',
              className: 'divider',
              id: '331461',
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
              title: '地市排名\t',
              key: 'cityRank',
              dataIndex: 'cityRank',
              className: 'divider',
              id: '784658',
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
          page={false}
          rowKeyType={'specified'}
          editMode={'single'}
          selectType={'checkbox'}
          bordered={'segmentation'}
          size={'middle'}
          fixedAction={false}
          rowSelection={undefined}
          showHead={false}
          showTotal={false}
          showSizeChanger={false}
          showQuickJumper={false}
          pageSizeOptions={'[5,10,20]'}
          dataSource={data?.feeInfo}
          rowActions={[]}
          extend={[]}
          rowKey={'fileCode'}
          dataSourceFromDataSourceConfig={'data.feeInfo'}
          $$componentItem={{
            id: 'Table_5369494_486586_311575_923499_919325',
            uid: 'Table_5369494_486586_311575_923499_919325',
            type: 'Table',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ margin: '10px 0px 0px 0px' }}
          onRowDelete={(rowId: any, row: any, index: any) => {
            const eventDatacustomActionCode749: any = [
              {
                type: 'customActionCode',
                dataId: 166192918606345900,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '8342055',
                  pageJsonId: '537892',
                  code: 'function main(data,state,success,fail){var newFileInfoList=[];for(var i=0;i<data.fileInfoList.length;i++){if(data.fileInfoList[i].fileCode!=rowId){newFileInfoList.push(data.fileInfoList[i])}}data.sceneSubmit.fileInfo=newFileInfoList;success(newFileInfoList)};',
                },
                line_number: 1,
                callback1: [
                  {
                    type: 'setDataSource',
                    dataId: 166193290759619360,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '4133837',
                      pageJsonId: '537892',
                      dataSourceId: 166192841018643170,
                      dataSourceName: 'fileInfoList',
                      dataSourceRelType: 'custom',
                      dataSourceReloadFilter: [],
                      dataSourceSetValue: [
                        {
                          code: 'fileName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '附件名称',
                          defaultValue: '',
                          name: '附件名称',
                          attrId: '458544',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                        },
                        {
                          code: 'filePath',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '附件文件路径',
                          defaultValue: '',
                          name: '附件文件路径',
                          attrId: '6354087',
                          initialData: {
                            type: 'static',
                            value: '附件文件路径',
                          },
                          parentKey: '1',
                          parentType: 'object',
                        },
                        {
                          code: 'fileServerType',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '附件文件服务器类型',
                          defaultValue: '',
                          name: '附件文件服务器类型',
                          attrId: '184934',
                          initialData: {
                            type: 'static',
                            value: '附件文件服务器类型',
                          },
                          parentKey: '1',
                          parentType: 'object',
                        },
                        {
                          code: 'fileSubType',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '附件分类-细类',
                          defaultValue: '',
                          name: '属性',
                          attrId: '551676',
                          initialData: {
                            type: 'static',
                            value: '附件分类-细类',
                          },
                          parentKey: '1',
                          parentType: 'object',
                        },
                        {
                          code: 'fileType',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '附件分类-大类',
                          defaultValue: '',
                          name: '附件分类-大类',
                          attrId: '383524',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                        },
                        {
                          code: 'fileUrl',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '附件url地址',
                          defaultValue: '',
                          name: '附件url地址',
                          attrId: '726875',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                        },
                        {
                          code: 'tacheCode',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '环节编码',
                          defaultValue: '',
                          name: '环节编码',
                          attrId: '865444',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                        },
                        {
                          attrId: '7419638',
                          code: 'fileCode',
                          name: '文件编码',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '097484',
                          code: 'createTime',
                          name: '创建时间',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '604675',
                          code: 'createStaff',
                          name: '创建人',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '729925',
                          code: 'fileTypeName',
                          name: '附件类型',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                      ],
                      newData: '$data_8342055$',
                      operateType: 3,
                      onlySetPatch: true,
                      otherObjectArrayOptions: {},
                    },
                    line_number: 2,
                    callback1: [
                      {
                        type: 'callParentCustomFunc',
                        dataId: 166193296648446750,
                        options: {
                          compId: 'callParentCustomFunc',
                          compName: 'system',
                          id: '773871',
                          pageJsonId: '537892',
                          pathname: '/commonAuditOrder',
                          pageId: '872682457815691264',
                          customFuncName: 'getFactor',
                          customFuncParams: '$data.sceneSubmit$',
                          modalPath: '/commonAuditOrder',
                        },
                        line_number: 3,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ],
                callback2: [],
              },
            ];
            eventDatacustomActionCode749.params =
              [
                { title: '行id', name: 'rowId', value: '$rowId$' },
                {
                  title: '行对象',
                  name: 'row',
                  value: '$row$',
                  attrType: 'object',
                },
                { title: '行索引', name: 'index', value: '$index$' },
              ] || [];
            CMDGenerator(
              eventDatacustomActionCode749,
              { rowId, row, index },
              'customActionCode',
              {
                id: 'customActionCode',
                name: 'customActionCode',
                type: 'customActionCode',
                platform: 'pc',
              },
            );
          }}
          ref={(r: any) =>
            refs.setComponentRef(r, 'Table_5369494_486586_311575_923499_919325')
          }
          {...injectData}
        />
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_4949093_2026766_78116154_9383766',
            uid: 'View_4949093_2026766_78116154_9383766',
            type: 'View',
            ...componentItem,
          }}
          disabled={false}
          visible={false}
          readOnly={false}
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
          }}
          ref={(r: any) =>
            refs.setComponentRef(r, 'View_4949093_2026766_78116154_9383766')
          }
          {...injectData}
        >
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
                title: '附件名称',
                key: 'fileName',
                dataIndex: 'fileName',
                className: '',
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
                title: '附件类型',
                key: 'fileTypeName',
                dataIndex: 'fileTypeName',
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
                title: '创建人',
                key: 'createStaff',
                dataIndex: 'createStaff',
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
                title: '创建时间',
                key: 'createTime',
                dataIndex: 'createTime',
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
            page={false}
            rowKeyType={'specified'}
            editMode={'single'}
            selectType={'checkbox'}
            bordered={'segmentation'}
            size={'middle'}
            fixedAction={false}
            rowSelection={undefined}
            showHead={false}
            showTotal={false}
            showSizeChanger={false}
            showQuickJumper={false}
            pageSizeOptions={'[5,10,20]'}
            dataSource={data?.fileInfoList}
            rowActions={[
              {
                title: '删除',
                iconPos: 'left',
                icon: { theme: 'outlined', type: 'delete' },
                type: 'delete',
                id: '948989',
                rule: "state.scene === 'V'",
                checked: true,
              },
            ]}
            extend={[
              {
                id: '5476746',
                title: '下载',
                iconPos: 'left',
                icon: {
                  theme: 'outlined',
                  type: 'download',
                  isIconFont: false,
                },
                checked: true,
              },
            ]}
            rowKey={'fileCode'}
            dataSourceFromDataSourceConfig={'data.fileInfoList'}
            $$componentItem={{
              id: 'Table_5369494_486586_311575_875318',
              uid: 'Table_5369494_486586_311575_875318',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ margin: '10px 0px 0px 0px' }}
            onRowDelete={(rowId: any, row: any, index: any) => {
              const eventDatacustomActionCode750: any = [
                {
                  type: 'customActionCode',
                  dataId: 166192918606345900,
                  options: {
                    compId: 'customActionCode',
                    compName: 'page',
                    id: '8342055',
                    pageJsonId: '537892',
                    code: 'function main(data,state,success,fail){var newFileInfoList=[];for(var i=0;i<data.fileInfoList.length;i++){if(data.fileInfoList[i].fileCode!=rowId){newFileInfoList.push(data.fileInfoList[i])}}data.sceneSubmit.fileInfo=newFileInfoList;success(newFileInfoList)};',
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'setDataSource',
                      dataId: 166193290759619360,
                      options: {
                        compId: 'setDataSource',
                        compName: 'page',
                        id: '4133837',
                        pageJsonId: '537892',
                        dataSourceId: 166192841018643170,
                        dataSourceName: 'fileInfoList',
                        dataSourceRelType: 'custom',
                        dataSourceReloadFilter: [],
                        dataSourceSetValue: [
                          {
                            code: 'fileName',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '附件名称',
                            defaultValue: '',
                            name: '附件名称',
                            attrId: '458544',
                            initialData: { type: 'static', value: '' },
                            parentKey: '1',
                            parentType: 'object',
                          },
                          {
                            code: 'filePath',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '附件文件路径',
                            defaultValue: '',
                            name: '附件文件路径',
                            attrId: '6354087',
                            initialData: {
                              type: 'static',
                              value: '附件文件路径',
                            },
                            parentKey: '1',
                            parentType: 'object',
                          },
                          {
                            code: 'fileServerType',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '附件文件服务器类型',
                            defaultValue: '',
                            name: '附件文件服务器类型',
                            attrId: '184934',
                            initialData: {
                              type: 'static',
                              value: '附件文件服务器类型',
                            },
                            parentKey: '1',
                            parentType: 'object',
                          },
                          {
                            code: 'fileSubType',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '附件分类-细类',
                            defaultValue: '',
                            name: '属性',
                            attrId: '551676',
                            initialData: {
                              type: 'static',
                              value: '附件分类-细类',
                            },
                            parentKey: '1',
                            parentType: 'object',
                          },
                          {
                            code: 'fileType',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '附件分类-大类',
                            defaultValue: '',
                            name: '附件分类-大类',
                            attrId: '383524',
                            initialData: { type: 'static', value: '' },
                            parentKey: '1',
                            parentType: 'object',
                          },
                          {
                            code: 'fileUrl',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '附件url地址',
                            defaultValue: '',
                            name: '附件url地址',
                            attrId: '726875',
                            initialData: { type: 'static', value: '' },
                            parentKey: '1',
                            parentType: 'object',
                          },
                          {
                            code: 'tacheCode',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '环节编码',
                            defaultValue: '',
                            name: '环节编码',
                            attrId: '865444',
                            initialData: { type: 'static', value: '' },
                            parentKey: '1',
                            parentType: 'object',
                          },
                          {
                            attrId: '7419638',
                            code: 'fileCode',
                            name: '文件编码',
                            type: 'string',
                            initialData: { type: 'static' },
                          },
                          {
                            attrId: '097484',
                            code: 'createTime',
                            name: '创建时间',
                            type: 'string',
                            initialData: { type: 'static' },
                          },
                          {
                            attrId: '604675',
                            code: 'createStaff',
                            name: '创建人',
                            type: 'string',
                            initialData: { type: 'static' },
                          },
                          {
                            attrId: '729925',
                            code: 'fileTypeName',
                            name: '附件类型',
                            type: 'string',
                            initialData: { type: 'static' },
                          },
                        ],
                        newData: '$data_8342055$',
                        operateType: 3,
                        onlySetPatch: true,
                        otherObjectArrayOptions: {},
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'callParentCustomFunc',
                          dataId: 166193296648446750,
                          options: {
                            compId: 'callParentCustomFunc',
                            compName: 'system',
                            id: '773871',
                            pageJsonId: '537892',
                            pathname: '/commonAuditOrder',
                            pageId: '872682457815691264',
                            customFuncName: 'getFactor',
                            customFuncParams: '$data.sceneSubmit$',
                            modalPath: '/commonAuditOrder',
                          },
                          line_number: 3,
                          callback1: [],
                          callback2: [],
                        },
                      ],
                      callback2: [],
                    },
                  ],
                  callback2: [],
                },
              ];
              eventDatacustomActionCode750.params =
                [
                  { title: '行id', name: 'rowId', value: '$rowId$' },
                  {
                    title: '行对象',
                    name: 'row',
                    value: '$row$',
                    attrType: 'object',
                  },
                  { title: '行索引', name: 'index', value: '$index$' },
                ] || [];
              CMDGenerator(
                eventDatacustomActionCode750,
                { rowId, row, index },
                'customActionCode',
                {
                  id: 'customActionCode',
                  name: 'customActionCode',
                  type: 'customActionCode',
                  platform: 'pc',
                },
              );
            }}
            onClickBtn1={(rowId: any, row: any, index: any) => {
              const eventDatadownloadByFileId91: any = [
                {
                  type: 'downloadByFileId',
                  dataId: 166193298494793600,
                  options: {
                    compId: 'downloadByFileId',
                    compName: 'system',
                    id: '698245',
                    pageJsonId: '537892',
                    data: '$rowId$',
                  },
                  line_number: 1,
                },
              ];
              eventDatadownloadByFileId91.params =
                [
                  { title: '行id', name: 'rowId', value: '$rowId$' },
                  {
                    title: '行对象',
                    name: 'row',
                    value: '$row$',
                    attrType: 'object',
                  },
                  { title: '行索引', name: 'index', value: '$index$' },
                ] || [];
              CMDGenerator(
                eventDatadownloadByFileId91,
                { rowId, row, index },
                'downloadByFileId',
                {
                  id: 'downloadByFileId',
                  name: 'downloadByFileId',
                  type: 'downloadByFileId',
                  platform: 'pc',
                },
              );
            }}
            ref={(r: any) =>
              refs.setComponentRef(r, 'Table_5369494_486586_311575_875318')
            }
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
          style={{ margin: '0 0 12px 0' }}
          ref={(r: any) => refs.setComponentRef(r, 'BOFramer_184014')}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(ClsJc_0012_0004$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
