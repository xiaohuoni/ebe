// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, Input, Select } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '1067982050587299840';
const AddOtherBudgetList$$Modal: React.FC<PageProps> = ({
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
    const eventDatavalidateCurrentForm18: any = [
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
    eventDatavalidateCurrentForm18.params = [] || [];
    CMDGenerator(eventDatavalidateCurrentForm18, {}, 'validateCurrentForm', {
      id: 'validateCurrentForm',
      name: 'validateCurrentForm',
      type: 'validateCurrentForm',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal4: any = [
      {
        type: 'closeModal',
        dataId: '141986_1',
        options: { compId: 'page', compName: 'page', id: '552291' },
        line_number: 1,
      },
    ];
    eventDatacloseModal4.params = [] || [];
    CMDGenerator(eventDatacloseModal4, {}, 'closeModal', {
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
    const eventDataapiRequest142: any = [
      {
        type: 'apiRequest',
        dataId: 170623353902010800,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '535251',
          pageJsonId: '558169',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryCatalogAttrValueList',
          _apiCode: 'qryCatalogAttrValueList',
          _source: 'rhin',
          _sourceName: '查询场景规格属性值列表-tsm',
          _serviceId: '889391610000404480',
          _serviceTitle: '查询场景规格属性值列表-tsm: qryCatalogAttrValueList',
          valueType: 'object',
          apiRequestSetParams: [
            {
              code: 'root',
              name: '根节点',
              attrType: 'object',
              children: [
                {
                  code: 'header',
                  name: '请求头参数',
                  attrType: 'object',
                  _id: 'root.header',
                  compType: 'Input',
                  parents: ['root'],
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-0',
                  id: 'root.header',
                  dataKey: '535251_root.header',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  _id: 'root.path',
                  compType: 'Input',
                  parents: ['root'],
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-1',
                  id: 'root.path',
                  dataKey: '535251_root.path',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'root.query',
                  compType: 'Input',
                  parents: ['root'],
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-2',
                  id: 'root.query',
                  dataKey: '535251_root.query',
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  children: [
                    {
                      code: 'catalogCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.catalogCode',
                      compType: 'Input',
                      name: 'catalogCode',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-0',
                      id: 'root.body.catalogCode',
                      dataKey: '535251_root.body.catalogCode',
                      value: {
                        type: ['context', '$state.catalogCode$'],
                        code: '',
                      },
                    },
                    {
                      code: 'attrCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.attrCode',
                      compType: 'Input',
                      name: 'attrCode',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                      id: 'root.body.attrCode',
                      dataKey: '535251_root.body.attrCode',
                      value: { type: ['customize'], code: 'contractType' },
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-3',
                  id: 'root.body',
                  dataKey: '535251_root.body',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '535251_root',
            },
          ],
          params: 'object',
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 170623377629563100,
            options: {
              compId: 'Input_4251524',
              compLib: 'comm',
              pageJsonId: '558169',
              compName: 'Select',
              id: '653289',
              data: '$reply_535251?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 2,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest142.params = [] || [];
    CMDGenerator(eventDataapiRequest142, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });

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
        ref={(r: any) => refs.setComponentRef(r, 'View_558169_1')}
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
          ref={(r: any) => refs.setComponentRef(r, 'View_480919')}
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
              const eventDatasetDataSource59: any = [
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
                      {
                        attrId: '9970925',
                        code: 'contractType',
                        name: '合同类型',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['contractType'],
                        _idpath: ['9970925'],
                        value: {
                          type: ['form', 'Form_775282', 'getFieldsValue'],
                          code: 'contractType',
                        },
                      },
                      {
                        attrId: '003183',
                        code: 'size',
                        name: '尺寸/规格',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['size'],
                        _idpath: ['003183'],
                        value: {
                          type: ['form', 'Form_775282', 'getFieldsValue'],
                          code: 'size',
                        },
                      },
                      {
                        attrId: '0692611',
                        code: 'contractTypeName',
                        name: '合同类型名称',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['contractTypeName'],
                        _idpath: ['0692611'],
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
              eventDatasetDataSource59.params =
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
                eventDatasetDataSource59,
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
            ref={(r: any) => refs.setComponentRef(r, 'Form_775282')}
            {...injectData}
          >
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
              formItemIndex={0}
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
              ref={(r: any) => refs.setComponentRef(r, 'Input_548785')}
              {...injectData}
            />
            <Input
              name={'尺寸/规格'}
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
              formItemIndex={1}
              fieldName={'size'}
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
                id: 'Input_814802',
                uid: 'Input_814802',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_814802')}
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
              formItemIndex={2}
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
              ref={(r: any) => refs.setComponentRef(r, 'Input_8974914')}
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
              formItemIndex={3}
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
              ref={(r: any) => refs.setComponentRef(r, 'Input_861572')}
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
              formItemIndex={4}
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
              ref={(r: any) => refs.setComponentRef(r, 'Input_379836')}
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
              formItemIndex={5}
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
              ref={(r: any) => refs.setComponentRef(r, 'Input_63548266')}
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
              formItemIndex={6}
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
              ref={(r: any) => refs.setComponentRef(r, 'Input_719')}
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
              formItemIndex={7}
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
              ref={(r: any) => refs.setComponentRef(r, 'Input_6826827')}
              {...injectData}
            />
            <Select
              name={'合同内容'}
              size={'default'}
              selfSpan={''}
              labelCol={'7'}
              wrapperCol={17}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              filter={'none'}
              classification={'default'}
              attr={{}}
              placeholder={'请选择'}
              fieldName={'contractType'}
              formItemIndex={8}
              $$componentItem={{
                id: 'Input_4251524',
                uid: 'Input_4251524',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatagetSelectedData95: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 170623460937224540,
                    options: {
                      compId: 'Input_4251524',
                      compLib: 'comm',
                      pageJsonId: '558169',
                      compName: 'Select',
                      id: '056504',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'setDataSource',
                        dataId: 170623461575105340,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '36509955',
                          pageJsonId: '558169',
                          dataSourceId: 170174310429008500,
                          dataSourceName: 'groupInfo',
                          dataSourceRelType: 'custom',
                          dataSourceSetValue: [
                            {
                              attrId: '443267',
                              code: 'projectContent',
                              name: '项目内容',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '332259',
                              code: 'benchmarkPrice',
                              name: '基准价（不含税，元）',
                              type: 'number',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '414565',
                              code: 'discountedUnitPrice',
                              name: '折后单价（不含税，元）',
                              type: 'number',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '039642',
                              code: 'number',
                              name: '数量',
                              type: 'number',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '5863026',
                              code: 'discountedTotalPrice',
                              name: '折后总价（不含税，元）',
                              type: 'number',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '4050278',
                              code: 'taxRate',
                              name: '税率',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '2714305',
                              code: 'totalAmount',
                              name: '总金额（含税，元）',
                              type: 'number',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '975526',
                              code: 'remark',
                              name: '备注',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '003183',
                              code: 'size',
                              name: '尺寸/规格',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '9970925',
                              code: 'contractType',
                              name: '合同类型',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '0692611',
                              code: 'contractTypeName',
                              name: '合同类型名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              value: {
                                type: ['context', '$selectedData_056504[0]$'],
                                code: 'label',
                              },
                            },
                          ],
                          operateType: 1,
                          onlySetPatch: true,
                          otherObjectArrayOptions: {},
                          targetDataSourcePaths: [],
                        },
                        line_number: 2,
                        callback1: [],
                        callback2: [],
                      },
                      {
                        type: 'console',
                        dataId: 170623463117919070,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '6398786',
                          pageJsonId: '558169',
                          value: ['$selectedData_056504[0]$'],
                        },
                        line_number: 3,
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetSelectedData95.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData95,
                  { e },
                  'getSelectedData',
                  {
                    id: 'getSelectedData',
                    name: 'getSelectedData',
                    type: 'getSelectedData',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_4251524')}
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
              formItemIndex={9}
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
              ref={(r: any) => refs.setComponentRef(r, 'Input_94381')}
              {...injectData}
            />
          </Form>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(AddOtherBudgetList$$Modal, {
  pageId,
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
