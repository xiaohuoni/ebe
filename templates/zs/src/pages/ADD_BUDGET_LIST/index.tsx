// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import { Form, Input, View } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const AddBudgetList$$Modal: React.FC<PageProps> = ({
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
}) => {
  const onOk = () => {
    const eventDatavalidateCurrentForm30: any = [
      {
        type: 'validateCurrentForm',
        dataId: 169926622885245300,
        options: {
          compId: 'Form_775282',
          compLib: 'comm',
          pageJsonId: '558169',
          compName: 'Form',
          id: '562369',
        },
        line_number: 1,
        callback1: [
          {
            type: 'console',
            dataId: 169994471678855600,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '122583',
              pageJsonId: '558169',
              value: ['$Form_775282$'],
            },
            line_number: 2,
          },
          {
            type: 'customActionCode',
            dataId: 169932247763489660,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '6555517',
              pageJsonId: '558169',
              code: 'function main(data,state,success,fail){success()};',
            },
            line_number: 3,
            callback1: [
              {
                type: 'okCallbackData',
                dataId: 169932266444533800,
                options: {
                  compId: 'okCallbackData',
                  compName: 'page',
                  id: '8433844',
                  pageJsonId: '558169',
                  params: '$data.groupInfo$',
                },
                line_number: 4,
              },
              {
                type: 'closeModal',
                dataId: 169932266915595040,
                options: { compId: 'page', compName: 'page', id: '576596' },
                line_number: 5,
              },
            ],
            callback2: [
              {
                type: 'showMessage',
                dataId: 169932265282674180,
                options: {
                  compId: 'showMessage',
                  compName: 'system',
                  id: '675155',
                  pageJsonId: '558169',
                  type: 'warn',
                  value: '$fail_6555517$',
                },
                line_number: 6,
              },
            ],
          },
        ],
        callback2: [],
      },
    ];
    eventDatavalidateCurrentForm30.params = [] || [];
    CMDGenerator(eventDatavalidateCurrentForm30, {}, 'validateCurrentForm', {
      id: 'validateCurrentForm',
      name: 'validateCurrentForm',
      type: 'validateCurrentForm',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal25: any = [
      {
        type: 'closeModal',
        dataId: '141986_1',
        options: { compId: 'page', compName: 'page', id: '552291' },
        line_number: 1,
      },
    ];
    eventDatacloseModal25.params = [] || [];
    CMDGenerator(eventDatacloseModal25, {}, 'closeModal', {
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
    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_558169__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_558169_1',
          uid: 'View_558169_1',
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
          textAlign: 'left',
        }}
        ref={(r: any) => (refs['View_558169_1'] = r)}
        {...injectData}
      >
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_480919',
            uid: 'View_480919',
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
            padding: '0px 20px 0px 0px',
            width: '100%',
          }}
          ref={(r: any) => (refs['View_480919'] = r)}
          {...injectData}
        >
          <Form
            name={'表单'}
            colSpan={24}
            labelCol={'6'}
            wrapperCol={18}
            colon={true}
            layout={'horizontal'}
            labelAlign={'right'}
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_775282'}
            $$componentItem={{
              id: 'Form_775282',
              uid: 'Form_775282',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            onValuesChange={(changedFieldName: any, changedValue: any) => {
              const eventDatasetDataSource115: any = [
                {
                  type: 'setDataSource',
                  dataId: 170174332848524400,
                  options: {
                    compId: 'setDataSource',
                    compName: 'page',
                    id: '6605323',
                    pageJsonId: '558169',
                    dataSourceId: 170174310429008500,
                    dataSourceName: 'groupInfo',
                    dataSourceRelType: 'custom',
                    dataSourceSetValue: [
                      {
                        attrId: '003967',
                        code: 'groupId',
                        name: '集团编码',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_775282', 'getFieldsValue'],
                          code: 'groupId',
                        },
                        _codePath: ['groupId'],
                        _idpath: ['003967'],
                      },
                      {
                        attrId: '102299',
                        code: 'groupName',
                        name: '集团名称',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_775282', 'getFieldsValue'],
                          code: 'groupName',
                        },
                        _codePath: ['groupName'],
                        _idpath: ['102299'],
                      },
                      {
                        attrId: '921065',
                        code: 'memberPhoneNumber',
                        name: '成员号码',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_775282', 'getFieldsValue'],
                          code: 'memberPhoneNumber',
                        },
                        _codePath: ['memberPhoneNumber'],
                        _idpath: ['921065'],
                      },
                      {
                        attrId: '443267',
                        code: 'projectContent',
                        name: '项目内容',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['projectContent'],
                        _idpath: ['443267'],
                        value: {
                          type: ['form', 'Form_775282', 'getFieldsValue'],
                          code: 'projectContent',
                        },
                      },
                      {
                        attrId: '332259',
                        code: 'benchmarkPrice',
                        name: '基准价（不含税，元）',
                        type: 'number',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['benchmarkPrice'],
                        _idpath: ['332259'],
                        value: {
                          type: ['form', 'Form_775282', 'getFieldsValue'],
                          code: 'benchmarkPrice',
                        },
                      },
                      {
                        attrId: '414565',
                        code: 'discountedUnitPrice',
                        name: '折后单价（不含税，元）',
                        type: 'number',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['discountedUnitPrice'],
                        _idpath: ['414565'],
                        value: {
                          type: ['form', 'Form_775282', 'getFieldsValue'],
                          code: 'discountedUnitPrice',
                        },
                      },
                      {
                        attrId: '975526',
                        code: 'remark',
                        name: '备注',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['remark'],
                        _idpath: ['975526'],
                        value: {
                          type: ['form', 'Form_775282', 'getFieldsValue'],
                          code: 'remark',
                        },
                      },
                      {
                        attrId: '2714305',
                        code: 'totalAmount',
                        name: '总金额（含税，元）',
                        type: 'number',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['totalAmount'],
                        _idpath: ['2714305'],
                        value: {
                          type: ['form', 'Form_775282', 'getFieldsValue'],
                          code: 'totalAmount',
                        },
                      },
                      {
                        attrId: '4050278',
                        code: 'taxRate',
                        name: '税率',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['taxRate'],
                        _idpath: ['4050278'],
                        value: {
                          type: ['form', 'Form_775282', 'getFieldsValue'],
                          code: 'taxRate',
                        },
                      },
                      {
                        attrId: '5863026',
                        code: 'discountedTotalPrice',
                        name: '折后总价（不含税，元）',
                        type: 'number',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['discountedTotalPrice'],
                        _idpath: ['5863026'],
                        value: {
                          type: ['form', 'Form_775282', 'getFieldsValue'],
                          code: 'discountedTotalPrice',
                        },
                      },
                      {
                        attrId: '039642',
                        code: 'number',
                        name: '数量',
                        type: 'number',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['number'],
                        _idpath: ['039642'],
                        value: {
                          type: ['form', 'Form_775282', 'getFieldsValue'],
                          code: 'number',
                        },
                      },
                    ],
                    operateType: 1,
                    onlySetPatch: true,
                    otherObjectArrayOptions: {},
                    targetDataSourcePaths: [],
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatasetDataSource115.params =
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
                eventDatasetDataSource115,
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
            ref={(r: any) => (refs['Form_775282'] = r)}
            {...injectData}
          >
            <Input
              name={'集团编码'}
              size={'default'}
              selfSpan={''}
              labelCol={'7'}
              wrapperCol={17}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'选择'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请点击右侧按钮选择集团'}
              formItemIndex={0}
              fieldName={'groupId'}
              icon={{
                type: 'search',
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
                id: 'Input_3342',
                uid: 'Input_3342',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={true}
              isFormRootChild={true}
              onIconClick={() => {
                const eventDatashowCustomModal111: any = [
                  {
                    type: 'showCustomModal',
                    dataId: 167755432297860260,
                    options: {
                      compId: 'showCustomModal',
                      compName: 'page',
                      id: '048343',
                      pageJsonId: 31,
                      modalname: '/groupInfoSel',
                      pageId: '899848269504155648',
                      paramsObj: {
                        groupCode: '1000',
                        userCode: '$state.staffCode$',
                      },
                      paramsObjKeyValueMap: {
                        groupCode: '1000',
                        userCode: '$state.staffCode$',
                      },
                      modalPath: '/groupInfoSel',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 167755432297814880,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '632962254',
                          pageJsonId: 31,
                          code: 'function main(data,state,success,fail){var _okData_;if(((_okData_=okData_048343)===null||_okData_===void 0?void 0:_okData_.length)>0){data.groupInfo.groupId=okData_048343[0].groupId;data.groupInfo.groupName=okData_048343[0].groupName;success(okData_048343[0])}else{fail()}};',
                        },
                        line_number: 2,
                        callback1: [
                          {
                            type: 'setValue',
                            dataId: 169994294486518460,
                            options: {
                              compId: ['Input_3342', 'Input_341384'],
                              compLib: 'comm',
                              pageJsonId: '558169',
                              compName: 'Input',
                              id: '6994904',
                              valueList: {
                                Input_3342: '$data_632962254.groupId$',
                                Input_341384: '$data_632962254.groupName$',
                              },
                              compid: ['Input_3342', 'Input_341384'],
                            },
                            line_number: 3,
                            callback1: [],
                          },
                        ],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatashowCustomModal111.params = [] || [];
                CMDGenerator(
                  eventDatashowCustomModal111,
                  {},
                  'showCustomModal',
                  {
                    id: 'showCustomModal',
                    name: 'showCustomModal',
                    type: 'showCustomModal',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => (refs['Input_3342'] = r)}
              {...injectData}
            />
            <Input
              name={'集团名称'}
              size={'default'}
              selfSpan={''}
              labelCol={'7'}
              wrapperCol={17}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'选择集团后自动带出'}
              formItemIndex={1}
              fieldName={'groupName'}
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
                id: 'Input_341384',
                uid: 'Input_341384',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={true}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_341384'] = r)}
              {...injectData}
            />
            <Input
              name={'成员号码'}
              size={'default'}
              selfSpan={''}
              labelCol={'7'}
              wrapperCol={17}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入成员号码'}
              formItemIndex={2}
              fieldName={'memberPhoneNumber'}
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
                id: 'Input_8230705',
                uid: 'Input_8230705',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_8230705'] = r)}
              {...injectData}
            />
            <Input
              name={'项目内容'}
              size={'default'}
              selfSpan={''}
              labelCol={'7'}
              wrapperCol={17}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入项目内容'}
              formItemIndex={3}
              fieldName={'projectContent'}
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
                id: 'Input_548785',
                uid: 'Input_548785',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_548785'] = r)}
              {...injectData}
            />
            <Input
              name={'基准价（不含税，元）'}
              size={'default'}
              selfSpan={''}
              labelCol={'7'}
              wrapperCol={17}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入基准价（不含税，元）'}
              formItemIndex={4}
              fieldName={'benchmarkPrice'}
              regexp={[
                {
                  id: '927182',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 1,
                  message: '请输入小数格式',
                  pattern: '/^[-\\+]?\\d+(\\.\\d+)?$/',
                },
              ]}
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
                id: 'Input_8974914',
                uid: 'Input_8974914',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_8974914'] = r)}
              {...injectData}
            />
            <Input
              name={'折后单价（不含税，元）'}
              size={'default'}
              selfSpan={''}
              labelCol={'7'}
              wrapperCol={17}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入折后单价（不含税，元）'}
              formItemIndex={5}
              fieldName={'discountedUnitPrice'}
              regexp={[
                {
                  id: '107729',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 1,
                  message: '请输入小数格式',
                  pattern: '/^[-\\+]?\\d+(\\.\\d+)?$/',
                },
              ]}
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
                id: 'Input_861572',
                uid: 'Input_861572',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_861572'] = r)}
              {...injectData}
            />
            <Input
              name={'数量'}
              size={'default'}
              selfSpan={''}
              labelCol={'7'}
              wrapperCol={17}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入数量'}
              formItemIndex={6}
              fieldName={'number'}
              regexp={[
                {
                  id: '9614115',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 1,
                  message: '请输入正整数',
                  pattern: '/^[1-9]\\d*$/',
                },
              ]}
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
                id: 'Input_379836',
                uid: 'Input_379836',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_379836'] = r)}
              {...injectData}
            />
            <Input
              name={'折后总价（不含税，元）'}
              size={'default'}
              selfSpan={''}
              labelCol={'7'}
              wrapperCol={17}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入折后总价（不含税，元）'}
              formItemIndex={7}
              fieldName={'discountedTotalPrice'}
              regexp={[
                {
                  id: '620208',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 1,
                  message: '请输入小数格式',
                  pattern: '/^[-\\+]?\\d+(\\.\\d+)?$/',
                },
              ]}
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
                id: 'Input_63548266',
                uid: 'Input_63548266',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_63548266'] = r)}
              {...injectData}
            />
            <Input
              name={'税率'}
              size={'default'}
              selfSpan={''}
              labelCol={'7'}
              wrapperCol={17}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入税率'}
              formItemIndex={8}
              fieldName={'taxRate'}
              regexp={[
                {
                  id: '295485',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 1,
                  message: '请输入小数格式',
                  pattern: '/^[-\\+]?\\d+(\\.\\d+)?$/',
                },
              ]}
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
                id: 'Input_719',
                uid: 'Input_719',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_719'] = r)}
              {...injectData}
            />
            <Input
              name={'总金额（含税，元）'}
              size={'default'}
              selfSpan={''}
              labelCol={'7'}
              wrapperCol={17}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入总金额（含税，元）'}
              formItemIndex={9}
              fieldName={'totalAmount'}
              regexp={[
                {
                  id: '162228',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 1,
                  message: '请输入小数格式',
                  pattern: '/^[-\\+]?\\d+(\\.\\d+)?$/',
                },
              ]}
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
                id: 'Input_6826827',
                uid: 'Input_6826827',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_6826827'] = r)}
              {...injectData}
            />
            <Input
              name={'备注'}
              size={'default'}
              selfSpan={''}
              labelCol={'7'}
              wrapperCol={17}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入备注'}
              formItemIndex={10}
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
                id: 'Input_94381',
                uid: 'Input_94381',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_94381'] = r)}
              {...injectData}
            />
          </Form>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(AddBudgetList$$Modal, {
  pageId: '1051773767489089536',
  hasLogin: false,
  dataSource,
  defaultState: {
    bizId: '',
    sceneCode: '',
    bizData: '',
    infoList: '',
    staffCode: '',
    catalogCode: '',
  },
});
