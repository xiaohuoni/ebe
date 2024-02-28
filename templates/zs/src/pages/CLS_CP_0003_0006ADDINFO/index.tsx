// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, Input, Select } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '1048796046940811264';
const ClsCp_0003_0006Addinfo$$Modal: React.FC<PageProps> = ({
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
    const eventDatavalidateCurrentForm36: any = [
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
    eventDatavalidateCurrentForm36.params = [] || [];
    CMDGenerator(eventDatavalidateCurrentForm36, {}, 'validateCurrentForm', {
      id: 'validateCurrentForm',
      name: 'validateCurrentForm',
      type: 'validateCurrentForm',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal32: any = [
      {
        type: 'closeModal',
        dataId: '141986_1',
        options: { compId: 'page', compName: 'page', id: '552291' },
        line_number: 1,
      },
    ];
    eventDatacloseModal32.params = [] || [];
    CMDGenerator(eventDatacloseModal32, {}, 'closeModal', {
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
    const eventDataifelse156: any = [
      {
        type: 'ifelse',
        shielding: true,
        condition: [
          {
            condId: '1162285',
            options: {
              useManual: true,
              useObject: false,
              context: '$state.sceneCode$',
              operate: '==',
              manualValue: 'V',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 170166904826934940,
        elseIfs: [
          {
            dataName: 'elseIf',
            dataId: 170166905355082750,
            children: [
              {
                dataName: 'action',
                dataId: 170166917627840350,
                children: [],
                todoOptions: ['params'],
                options: {
                  compId: 'Form_775282',
                  compLib: 'comm',
                  pageJsonId: '558169',
                  compName: 'Form',
                  id: '421568',
                  params: '$state.bizData$',
                },
                actionObjId: 'Form_775282',
                actionObjName: 'Form',
                value: 'setCurrentFormValues',
                compLib: 'comm',
                shielding: true,
                line_number: 4,
              },
            ],
            condition: [],
            value: 'elseIf',
            desc: '修改',
            shielding: true,
            callback: [
              {
                type: 'setCurrentFormValues',
                dataId: 170166917627840350,
                shielding: true,
                options: {
                  compId: 'Form_775282',
                  compLib: 'comm',
                  pageJsonId: '558169',
                  compName: 'Form',
                  id: '421568',
                  params: '$state.bizData$',
                },
                line_number: 4,
              },
            ],
          },
        ],
        line_number: 1,
        callback1: [
          {
            type: 'setCurrentFormValues',
            dataId: 170166915883868580,
            shielding: true,
            options: {
              compId: 'Form_775282',
              compLib: 'comm',
              pageJsonId: '558169',
              compName: 'Form',
              id: '71903',
              params: '$state.bizData$',
            },
            line_number: 2,
          },
          {
            type: 'setDisable',
            dataId: 170166990884737150,
            shielding: true,
            options: {
              compId: 'Form_775282',
              compLib: 'comm',
              pageJsonId: '558169',
              compName: 'Form',
              id: '5059925',
              disabled: 'true',
            },
            line_number: 3,
          },
        ],
      },
    ];
    eventDataifelse156.params = [] || [];
    CMDGenerator(eventDataifelse156, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDataapiRequest293: any = [
      {
        type: 'apiRequest',
        dataId: 170167424341656860,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '9003513',
          pageJsonId: '537892',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryCatalogAttrValueList',
          _apiCode: 'qryCatalogAttrValueList',
          _source: 'rhin',
          _serviceId: '889391610000404480',
          _serviceTitle: '查询场景规格属性值列表: qryCatalogAttrValueList',
          params: 'object',
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
                  id: 'root.header',
                  dataKey: '861063_root.header',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-0',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  _id: 'root.path',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.path',
                  dataKey: '861063_root.path',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-1',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'root.query',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.query',
                  dataKey: '861063_root.query',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-2',
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
                      id: 'root.body.catalogCode',
                      dataKey: '861063_root.body.catalogCode',
                      value: {
                        type: ['customize'],
                        code: '$state.catalogCode$',
                      },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-0',
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
                      id: 'root.body.attrCode',
                      dataKey: '861063_root.body.attrCode',
                      value: { type: ['customize'], code: 'devChannel' },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.body',
                  dataKey: '861063_root.body',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-3',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '861063_root',
            },
          ],
        },
        line_number: 5,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 170167424341683420,
            options: {
              compId: 'Select_569744',
              compLib: 'comm',
              pageJsonId: '558169',
              compName: 'Select',
              id: '922555',
              data: '$reply_9003513?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 6,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest293.params = [] || [];
    CMDGenerator(eventDataapiRequest293, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest294: any = [
      {
        type: 'apiRequest',
        dataId: 170167425094249500,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '818832',
          pageJsonId: '537892',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryCatalogAttrValueList',
          _apiCode: 'qryCatalogAttrValueList',
          _source: 'rhin',
          _serviceId: '889391610000404480',
          _serviceTitle: '查询场景规格属性值列表: qryCatalogAttrValueList',
          params: 'object',
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
                  id: 'root.header',
                  dataKey: '466798_root.header',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-0',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  _id: 'root.path',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.path',
                  dataKey: '466798_root.path',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-1',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'root.query',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.query',
                  dataKey: '466798_root.query',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-2',
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
                      id: 'root.body.catalogCode',
                      dataKey: '466798_root.body.catalogCode',
                      value: {
                        type: ['customize'],
                        code: '$state.catalogCode$',
                      },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-0',
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
                      id: 'root.body.attrCode',
                      dataKey: '466798_root.body.attrCode',
                      value: {
                        type: ['customize'],
                        code: 'yellowWarningInSixMonths',
                      },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.body',
                  dataKey: '466798_root.body',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-3',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '466798_root',
            },
          ],
        },
        line_number: 7,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 170167425094287100,
            options: {
              compId: 'Select_9964457',
              compLib: 'comm',
              pageJsonId: '558169',
              compName: 'Select',
              id: '43532',
              data: '$reply_818832?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 8,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest294.params = [] || [];
    CMDGenerator(eventDataapiRequest294, {}, 'apiRequest', {
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
        className="View_View_558169_1"
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
          className="View_View_480919"
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
              const eventDatasetDataSource132: any = [
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
                        name: '属性',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_775282', 'getFieldsValue'],
                          code: 'groupId',
                        },
                      },
                      {
                        attrId: '102299',
                        code: 'groupName',
                        name: '属性',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_775282', 'getFieldsValue'],
                          code: 'groupName',
                        },
                      },
                      {
                        attrId: '130872',
                        code: 'devChannel',
                        name: '属性',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_775282', 'getFieldsValue'],
                          code: 'devChannel',
                        },
                      },
                      {
                        attrId: '9901323',
                        code: 'devChannelName',
                        name: '属性',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                      },
                      {
                        attrId: '396463',
                        code: 'agencyName',
                        name: '属性',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_775282', 'getFieldsValue'],
                          code: 'agencyName',
                        },
                      },
                      {
                        attrId: '699491',
                        code: 'basicAccessNumber',
                        name: '属性',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_775282', 'getFieldsValue'],
                          code: 'basicAccessNumber',
                        },
                      },
                      {
                        attrId: '4092825',
                        code: 'busiAccessNumber',
                        name: '属性',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_775282', 'getFieldsValue'],
                          code: 'busiAccessNumber',
                        },
                      },
                      {
                        attrId: '6667824',
                        code: 'annualComplaintRate',
                        name: '属性',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_775282', 'getFieldsValue'],
                          code: 'annualComplaintRate',
                        },
                      },
                      {
                        attrId: '921065',
                        code: 'yellowWarningInSixMonths',
                        name: '属性',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_775282', 'getFieldsValue'],
                          code: 'yellowWarningInSixMonths',
                        },
                      },
                      {
                        attrId: '443267',
                        code: 'yellowWarningInSixMonthsName',
                        name: '属性',
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
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatasetDataSource132.params =
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
                eventDatasetDataSource132,
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
                const eventDatashowCustomModal137: any = [
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
                eventDatashowCustomModal137.params = [] || [];
                CMDGenerator(
                  eventDatashowCustomModal137,
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
              ref={(r: any) => refs.setComponentRef(r, 'Input_3342')}
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
              ref={(r: any) => refs.setComponentRef(r, 'Input_341384')}
              {...injectData}
            />
            <Select
              name={'发展渠道'}
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
              formItemIndex={2}
              fieldName={'devChannel'}
              allowClear={true}
              $$componentItem={{
                id: 'Select_569744',
                uid: 'Select_569744',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatagetSelectedData237: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 170174355100358140,
                    options: {
                      compId: 'Select_569744',
                      compLib: 'comm',
                      pageJsonId: '558169',
                      compName: 'Select',
                      id: '0328916',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'setDataSource',
                        dataId: 170174356820869950,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '101208',
                          pageJsonId: '558169',
                          dataSourceId: 170174310429008500,
                          dataSourceName: 'groupInfo',
                          dataSourceRelType: 'custom',
                          dataSourceSetValue: [
                            {
                              attrId: '003967',
                              code: 'groupId',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '102299',
                              code: 'groupName',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '130872',
                              code: 'devChannel',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '9901323',
                              code: 'devChannelName',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              value: {
                                type: ['customize'],
                                code: '$selectedData_0328916[0].label$',
                              },
                            },
                            {
                              attrId: '396463',
                              code: 'agencyName',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '699491',
                              code: 'basicAccessNumber',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '4092825',
                              code: 'busiAccessNumber',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '6667824',
                              code: 'annualComplaintRate',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '921065',
                              code: 'yellowWarningInSixMonths',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '443267',
                              code: 'yellowWarningInSixMonthsName',
                              name: '属性',
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
                        line_number: 2,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetSelectedData237.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData237,
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
              ref={(r: any) => refs.setComponentRef(r, 'Select_569744')}
              {...injectData}
            />
            <Input
              name={'代理商名称'}
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
              required={false}
              placeholder={'请输入'}
              formItemIndex={3}
              fieldName={'agencyName'}
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
                id: 'Input_543601',
                uid: 'Input_543601',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_543601')}
              {...injectData}
            />
            <Input
              name={'基本接入号'}
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
              placeholder={'请输入'}
              formItemIndex={4}
              fieldName={'basicAccessNumber'}
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
              ref={(r: any) => refs.setComponentRef(r, 'Input_8230705')}
              {...injectData}
            />
            <Input
              name={'业务接入号'}
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
              placeholder={'请输入'}
              formItemIndex={5}
              fieldName={'busiAccessNumber'}
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
              name={'当年投述率'}
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
              placeholder={'请输入'}
              formItemIndex={6}
              fieldName={'annualComplaintRate'}
              regexp={[
                {
                  id: '0325896',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入0-100的最多两位小数',
                  pattern:
                    '/^(100(\\.0{1,2})?|0(\\.0{1,2})?|\\d(\\.\\d{1,2})?|([1-9]\\d(\\.\\d{1,2})?))$/',
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
                id: 'Input_27307976',
                uid: 'Input_27307976',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_27307976')}
              {...injectData}
            />
            <Select
              name={'半年内有无黄色以上预警'}
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
              formItemIndex={7}
              fieldName={'yellowWarningInSixMonths'}
              allowClear={true}
              $$componentItem={{
                id: 'Select_9964457',
                uid: 'Select_9964457',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatagetSelectedData238: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 170174360457492670,
                    options: {
                      compId: 'Select_9964457',
                      compLib: 'comm',
                      pageJsonId: '558169',
                      compName: 'Select',
                      id: '060831',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'setDataSource',
                        dataId: 170174366155137440,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '472123',
                          pageJsonId: '558169',
                          dataSourceId: 170174310429008500,
                          dataSourceName: 'groupInfo',
                          dataSourceRelType: 'custom',
                          dataSourceSetValue: [
                            {
                              attrId: '003967',
                              code: 'groupId',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '102299',
                              code: 'groupName',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '130872',
                              code: 'devChannel',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '9901323',
                              code: 'devChannelName',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '396463',
                              code: 'agencyName',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '699491',
                              code: 'basicAccessNumber',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '4092825',
                              code: 'busiAccessNumber',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '6667824',
                              code: 'annualComplaintRate',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '921065',
                              code: 'yellowWarningInSixMonths',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '443267',
                              code: 'yellowWarningInSixMonthsName',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              value: {
                                type: ['customize'],
                                code: '$selectedData_060831[0].label$',
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
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetSelectedData238.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData238,
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
              ref={(r: any) => refs.setComponentRef(r, 'Select_9964457')}
              {...injectData}
            />
          </Form>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(ClsCp_0003_0006Addinfo$$Modal, {
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
