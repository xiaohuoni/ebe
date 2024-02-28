// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, Input, TimePicker, Radio } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '906795803356061696';
const MemberTerm$$Modal: React.FC<PageProps> = ({
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
    const eventDatavalidateCurrentForm66: any = [
      {
        type: 'validateCurrentForm',
        dataId: 166400501987822370,
        options: {
          compId: 'Form_31_1121',
          compLib: 'comm',
          pageJsonId: 31,
          compName: 'Form',
          id: '342634',
        },
        line_number: 1,
        callback1: [
          {
            type: 'okCallbackData',
            dataId: 166400502346373300,
            options: {
              compId: 'okCallbackData',
              compName: 'page',
              id: '094225',
              pageJsonId: 31,
              params: '$data.MemberInfo$',
            },
            line_number: 2,
          },
          {
            type: 'closeModal',
            dataId: 166400502719263680,
            options: {
              compId: 'closeModal',
              compName: 'page',
              id: '163303',
              pageJsonId: 31,
            },
            line_number: 3,
          },
        ],
        callback2: [],
      },
    ];
    eventDatavalidateCurrentForm66.params = [] || [];
    CMDGenerator(eventDatavalidateCurrentForm66, {}, 'validateCurrentForm', {
      id: 'validateCurrentForm',
      name: 'validateCurrentForm',
      type: 'validateCurrentForm',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal118: any = [
      {
        type: 'closeModal',
        dataId: '545098_1',
        options: { compId: 'page', compName: 'page', id: '9354904' },
        line_number: 1,
      },
    ];
    eventDatacloseModal118.params = [] || [];
    CMDGenerator(eventDatacloseModal118, {}, 'closeModal', {
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
    const eventDataifelse332: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '484819',
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
        dataId: 166324252198304130,
        elseIfs: [],
        line_number: 1,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 166324253994456930,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '646259',
              pageJsonId: 31,
              code: 'function main(data,state,success,fail){data.MemberInfo=state.memberInfo;success()};',
            },
            line_number: 2,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 166324257431323550,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '005492',
                  pageJsonId: 31,
                  dataSourceId: 166304804411681470,
                  dataSourceName: 'MemberInfo',
                  dataSourceRelType: 'object',
                  dataSourceReloadFilter: [
                    {
                      attrId: '229143',
                      code: 'primaryValue',
                      name: '主键值',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                    },
                  ],
                  dataSourceSetValue: [
                    {
                      attrId: '7007954',
                      code: 'msisdn',
                      name: '手机号码',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '9566397',
                      code: 'memberJoinDate',
                      name: '纳入成员骨干时间',
                      type: 'datetime',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '606111',
                      code: 'groupLevelName',
                      name: '价值等级',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '292069',
                      code: 'statusName',
                      name: '集团状态',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '669499',
                      code: 'memberType',
                      name: '成员类型',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '088257',
                      code: 'officialLevel',
                      name: '行政级别',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '507061',
                      code: 'keyType',
                      name: '关键人标识',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '286049',
                      code: 'duty',
                      name: '职务',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '163206',
                      code: 'cutOffTime',
                      name: '免扰截至时间',
                      type: 'datetime',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '384631',
                      code: 'noDisturbScope',
                      name: '免扰范围',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                    },
                    {
                      attrId: '7546488',
                      code: 'name',
                      name: '姓名',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '262831',
                      code: 'tradeclassTop',
                      name: '行业类型ID',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '442727',
                      code: 'customerId',
                      name: '客户ID',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '464926',
                      code: 'supervise',
                      name: '看管人员',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '0327732',
                      code: 'keyTypeName',
                      name: '关键人标识名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '823974',
                      code: 'memberTypeName',
                      name: '成员类型名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '187795',
                      code: 'officialLevelName',
                      name: '行政级别名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '095668',
                      code: 'tradeclassTopName',
                      name: '行业类型名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '840388',
                      code: 'groupId',
                      name: '集团编码',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '146567',
                      code: 'groupName',
                      name: '集团名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '6948413',
                      code: 'rowId',
                      name: '行ID',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 3,
                callback1: [],
                callback2: [],
              },
              {
                type: 'setValue',
                dataId: 166324262165689600,
                options: {
                  compId: 'MultipleSelect_noDisturbScope_187169',
                  compLib: 'comm',
                  pageJsonId: 31,
                  compName: 'CheckboxGroup',
                  id: '426005',
                  value: 'key1',
                },
                line_number: 4,
                callback1: [],
              },
              {
                type: 'setDisable',
                dataId: 166324263177637660,
                options: {
                  compId: 'Form_31_1121',
                  compLib: 'comm',
                  pageJsonId: 31,
                  compName: 'Form',
                  id: '8925014',
                  disabled: 'true',
                },
                line_number: 5,
              },
              {
                type: 'setDisable',
                dataId: 166324264445644540,
                options: {
                  compId: 'MultipleSelect_noDisturbScope_187169',
                  compLib: 'comm',
                  pageJsonId: 31,
                  compName: 'CheckboxGroup',
                  id: '2617695',
                  disabled: 'true',
                },
                line_number: 6,
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse332.params = [] || [];
    CMDGenerator(eventDataifelse332, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div style={{ height: '100%', ...style }} className="__CustomClass_31__">
      <View
        className="View_View_31_1"
        name={'页面'}
        visible={true}
        backgroundType={{ type: 'cleanColor', color: undefined }}
        $$componentItem={{
          id: 'View_31_1',
          uid: 'View_31_1',
          type: 'View',
          ...componentItem,
        }}
        style={{
          minHeight: '100%',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'hidden',
          margin: '0px 0px 0px 0px',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_31_1')}
        {...injectData}
      >
        <View
          className="View_VerticalView_31_11"
          name={'布局容器'}
          visible={true}
          $$componentItem={{
            id: 'VerticalView_31_11',
            uid: 'VerticalView_31_11',
            type: 'View',
            ...componentItem,
          }}
          style={{ width: '100%', overflowY: 'auto' }}
          ref={(r: any) => refs.setComponentRef(r, 'VerticalView_31_11')}
          {...injectData}
        >
          <View
            className="View_View_31_112"
            name={'布局容器'}
            visible={true}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_31_112',
              uid: 'View_31_112',
              type: 'View',
              ...componentItem,
            }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '0px 0px 0px 0px',
              width: '100%',
              margin: '0px 0px 0px 0px',
              borderRadius: '2px 2px 2px 2px',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_31_112')}
            {...injectData}
          >
            <Form
              name={'表单'}
              header={'标题'}
              colSpan={12}
              colSpace={16}
              rowSpace={16}
              labelCol={8}
              wrapperCol={16}
              layout={'horizontal'}
              genRuleType={'object'}
              formType={'normal'}
              relationDataSource={data?.MemberInfo}
              busiObjectId={'886805849749016577'}
              $$componentItem={{
                id: 'Form_31_1121',
                uid: 'Form_31_1121',
                type: 'Form',
                ...componentItem,
              }}
              style={{ padding: '20px 20px 20px 20px' }}
              onValuesChange={() => {
                const eventDatasetDataSource311: any = [
                  {
                    type: 'setDataSource',
                    dataId: 166304805174437340,
                    options: {
                      compId: 'page',
                      compName: 'page',
                      id: '1137146',
                      pageJsonId: 31,
                      dataSourceId: 166304804411681470,
                      dataSourceName: 'MemberInfo',
                      dataSourceRelType: 'object',
                      dataSourceReloadFilter: [],
                      dataSourceSetValue: [
                        {
                          attrId: '7007954',
                          code: 'msisdn',
                          name: '手机号码',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'msisdn',
                          },
                        },
                        {
                          attrId: '9566397',
                          code: 'memberJoinDate',
                          name: '纳入成员骨干时间',
                          type: 'datetime',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'memberJoinDate',
                          },
                        },
                        {
                          attrId: '606111',
                          code: 'groupLevelName',
                          name: '价值等级',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'groupLevelName',
                          },
                        },
                        {
                          attrId: '292069',
                          code: 'statusName',
                          name: '集团状态',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'statusName',
                          },
                        },
                        {
                          attrId: '669499',
                          code: 'memberType',
                          name: '成员类型',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '088257',
                          code: 'officialLevel',
                          name: '行政级别',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '507061',
                          code: 'keyType',
                          name: '关键人标识',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'keyType',
                          },
                        },
                        {
                          attrId: '286049',
                          code: 'duty',
                          name: '职务',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'duty',
                          },
                        },
                        {
                          attrId: '163206',
                          code: 'cutOffTime',
                          name: '免扰截至时间',
                          type: 'datetime',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'cutOffTime',
                          },
                        },
                        {
                          attrId: '384631',
                          code: 'noDisturbScope',
                          name: '免扰范围',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                        },
                        {
                          attrId: '7546488',
                          code: 'name',
                          name: '姓名',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '262831',
                          code: 'tradeclassTop',
                          name: '行业类型ID',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '442727',
                          code: 'customerId',
                          name: '客户ID',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '464926',
                          code: 'supervise',
                          name: '看管人员',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'supervise',
                          },
                        },
                        {
                          attrId: '0327732',
                          code: 'keyTypeName',
                          name: '关键人标识名称',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '823974',
                          code: 'memberTypeName',
                          name: '成员类型名称',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '187795',
                          code: 'officialLevelName',
                          name: '行政级别名称',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                        {
                          attrId: '095668',
                          code: 'tradeclassTopName',
                          name: '行业类型名称',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                        },
                      ],
                      onlySetPatch: true,
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatasetDataSource311.params = [] || [];
                CMDGenerator(eventDatasetDataSource311, {}, 'setDataSource', {
                  id: 'setDataSource',
                  name: 'setDataSource',
                  type: 'setDataSource',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Form_31_1121')}
              {...injectData}
            >
              <Input
                name={'手机号码'}
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
                fieldName={'msisdn'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.MemberInfo?.msisdn}
                formItemIndex={0}
                icon={{ theme: 'outlined', type: 'search', isIconFont: false }}
                prefixIcon={{
                  type: undefined,
                  theme: 'outlined',
                  fontAddress: '',
                  isIconFont: false,
                  iconFileInfo: {},
                }}
                $$componentItem={{
                  id: 'Input_msisdn_9598107',
                  uid: 'Input_msisdn_9598107',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                isFormRootChild={true}
                onIconClick={() => {
                  const eventDatagetValue273: any = [
                    {
                      type: 'getValue',
                      dataId: 166324222918363400,
                      options: {
                        compId: 'Input_msisdn_9598107',
                        compLib: 'comm',
                        pageJsonId: 31,
                        compName: 'Input',
                        id: '141129',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'ifelse',
                          condition: [
                            {
                              condId: '277232',
                              options: {
                                context: '$value_141129$',
                                operate: 'notEmpty',
                              },
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          dataId: 166324223247267330,
                          elseIfs: [
                            {
                              dataName: 'elseIf',
                              dataId: 166324224486415550,
                              children: [
                                {
                                  dataName: 'action',
                                  dataId: 166324225302479520,
                                  children: [],
                                  todoOptions: ['msgType', 'value'],
                                  options: {
                                    compId: 'showMessage',
                                    compName: 'system',
                                    id: '524909',
                                    pageJsonId: 31,
                                    type: 'error',
                                    value: '请输入手机号码',
                                  },
                                  actionObjId: 'showMessage',
                                  actionObjName: 'system',
                                  value: 'showMessage',
                                  elseIfs: [],
                                  line_number: 6,
                                },
                              ],
                              condition: [],
                              elseIfs: [],
                              callback: [
                                {
                                  type: 'showMessage',
                                  dataId: 166324225302479520,
                                  options: {
                                    compId: 'showMessage',
                                    compName: 'system',
                                    id: '524909',
                                    pageJsonId: 31,
                                    type: 'error',
                                    value: '请输入手机号码',
                                  },
                                  line_number: 6,
                                },
                              ],
                            },
                          ],
                          line_number: 2,
                          callback1: [
                            {
                              type: 'apiRequest',
                              dataId: 166324227096907170,
                              options: {
                                compId: 'apiRequest',
                                compName: 'system',
                                id: '4361715',
                                pageJsonId: 31,
                                sync: false,
                                method: 'post',
                                url: '/app/rhin/gateway/callRhinEngine',
                                _capabilityCode: 'queryGroupMemberInfo',
                                _apiCode: 'queryGroupMemberInfo',
                                _source: 'rhin',
                                _serviceId: '887259504713355264',
                                _serviceTitle:
                                  '查询集团成员详细信息服务-hdb: queryGroupMemberInfo',
                                params: 'object',
                                apiRequestSetParams: [
                                  {
                                    code: 'header',
                                    name: '请求头参数',
                                    attrType: 'object',
                                    _id: 'header',
                                    compType: 'Input',
                                    parents: [],
                                    id: 'header',
                                    dataKey: '4361715_header',
                                  },
                                  {
                                    code: 'path',
                                    name: '请求路径参数',
                                    attrType: 'object',
                                    _id: 'path',
                                    compType: 'Input',
                                    parents: [],
                                    id: 'path',
                                    dataKey: '4361715_path',
                                  },
                                  {
                                    code: 'query',
                                    name: 'URL 参数',
                                    attrType: 'object',
                                    _id: 'query',
                                    compType: 'Input',
                                    parents: [],
                                    id: 'query',
                                    dataKey: '4361715_query',
                                  },
                                  {
                                    code: 'body',
                                    name: '请求体',
                                    attrType: 'object',
                                    children: [
                                      {
                                        code: 'group_id',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        _id: 'body.group_id',
                                        compType: 'Input',
                                        name: 'group_id',
                                        parents: ['body'],
                                        id: 'body.group_id',
                                        dataKey: '4361715_body.group_id',
                                      },
                                      {
                                        code: 'group_home_city',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        _id: 'body.group_home_city',
                                        compType: 'Input',
                                        name: 'group_home_city',
                                        parents: ['body'],
                                        id: 'body.group_home_city',
                                        dataKey: '4361715_body.group_home_city',
                                      },
                                      {
                                        code: 'msisdn',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        _id: 'body.msisdn',
                                        compType: 'Input',
                                        name: 'msisdn',
                                        parents: ['body'],
                                        id: 'body.msisdn',
                                        dataKey: '4361715_body.msisdn',
                                        value: {
                                          type: ['context', '$value_141129$'],
                                          code: '',
                                        },
                                      },
                                      {
                                        code: 'member_home_city',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        _id: 'body.member_home_city',
                                        compType: 'Input',
                                        name: 'member_home_city',
                                        parents: ['body'],
                                        id: 'body.member_home_city',
                                        dataKey:
                                          '4361715_body.member_home_city',
                                        value: {
                                          type: ['context', '$state.lanId$'],
                                          code: '',
                                        },
                                      },
                                    ],
                                    _id: 'body',
                                    compType: 'Input',
                                    parents: [],
                                    id: 'body',
                                    dataKey: '4361715_body',
                                  },
                                ],
                              },
                              line_number: 3,
                              callback1: [
                                {
                                  type: 'customActionCode',
                                  dataId: 16632423265280458,
                                  options: {
                                    compId: 'customActionCode',
                                    compName: 'page',
                                    id: '3306955',
                                    pageJsonId: 31,
                                    code: 'function main(data,state,success,fail){var _reply_;var min=0;var max=10000;var rowId=Math.round(Math.random()*(max-min))+min;data.MemberInfo=(_reply_=reply_4361715)===null||_reply_===void 0?void 0:_reply_.resultData;data.MemberInfo.rowId=rowId;success()};',
                                  },
                                  line_number: 4,
                                  callback1: [
                                    {
                                      type: 'setDataSource',
                                      dataId: 166324239685727520,
                                      options: {
                                        compId: 'setDataSource',
                                        compName: 'page',
                                        id: '241894',
                                        pageJsonId: 31,
                                        dataSourceId: 166304804411681470,
                                        dataSourceName: 'MemberInfo',
                                        dataSourceRelType: 'object',
                                        dataSourceReloadFilter: [
                                          {
                                            attrId: '229143',
                                            code: 'primaryValue',
                                            name: '主键值',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: '',
                                            },
                                          },
                                        ],
                                        dataSourceSetValue: [
                                          {
                                            attrId: '7007954',
                                            code: 'msisdn',
                                            name: '手机号码',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: null,
                                            },
                                          },
                                          {
                                            attrId: '9566397',
                                            code: 'memberJoinDate',
                                            name: '纳入成员骨干时间',
                                            type: 'datetime',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: null,
                                            },
                                          },
                                          {
                                            attrId: '606111',
                                            code: 'groupLevelName',
                                            name: '价值等级',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: null,
                                            },
                                          },
                                          {
                                            attrId: '292069',
                                            code: 'statusName',
                                            name: '集团状态',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: null,
                                            },
                                          },
                                          {
                                            attrId: '669499',
                                            code: 'memberType',
                                            name: '成员类型',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: null,
                                            },
                                          },
                                          {
                                            attrId: '088257',
                                            code: 'officialLevel',
                                            name: '行政级别',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: null,
                                            },
                                          },
                                          {
                                            attrId: '507061',
                                            code: 'keyType',
                                            name: '关键人标识',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: null,
                                            },
                                          },
                                          {
                                            attrId: '286049',
                                            code: 'duty',
                                            name: '职务',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: null,
                                            },
                                          },
                                          {
                                            attrId: '163206',
                                            code: 'cutOffTime',
                                            name: '免扰截至时间',
                                            type: 'datetime',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: null,
                                            },
                                          },
                                          {
                                            attrId: '384631',
                                            code: 'noDisturbScope',
                                            name: '免扰范围',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: '',
                                            },
                                          },
                                          {
                                            attrId: '7546488',
                                            code: 'name',
                                            name: '姓名',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: null,
                                            },
                                          },
                                          {
                                            attrId: '262831',
                                            code: 'tradeclassTop',
                                            name: '行业类型ID',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: null,
                                            },
                                          },
                                          {
                                            attrId: '442727',
                                            code: 'customerId',
                                            name: '客户ID',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: null,
                                            },
                                          },
                                          {
                                            attrId: '464926',
                                            code: 'supervise',
                                            name: '看管人员',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: null,
                                            },
                                          },
                                          {
                                            attrId: '0327732',
                                            code: 'keyTypeName',
                                            name: '关键人标识名称',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: null,
                                            },
                                          },
                                          {
                                            attrId: '823974',
                                            code: 'memberTypeName',
                                            name: '成员类型名称',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: null,
                                            },
                                          },
                                          {
                                            attrId: '187795',
                                            code: 'officialLevelName',
                                            name: '行政级别名称',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: null,
                                            },
                                          },
                                          {
                                            attrId: '095668',
                                            code: 'tradeclassTopName',
                                            name: '行业类型名称',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: null,
                                            },
                                          },
                                        ],
                                        operateType: 1,
                                        onlySetPatch: true,
                                        otherObjectArrayOptions: {},
                                      },
                                      line_number: 5,
                                      callback1: [],
                                      callback2: [],
                                    },
                                  ],
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
                  eventDatagetValue273.params = [] || [];
                  CMDGenerator(eventDatagetValue273, {}, 'getValue', {
                    id: 'getValue',
                    name: 'getValue',
                    type: 'getValue',
                    platform: 'pc',
                  });
                }}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_msisdn_9598107')
                }
                {...injectData}
              />
              <TimePicker
                name={'纳入成员骨干时间'}
                customTime={''}
                format={'YYYY-MM-DD HH:mm:ss'}
                size={'default'}
                selfSpan={''}
                labelCol={8}
                wrapperCol={16}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                limitRange={''}
                startTime={''}
                endTime={''}
                timeMode={'time'}
                pickerType={'TimePicker'}
                placeholder={'请选择时间'}
                fieldName={'memberJoinDate'}
                hidden={false}
                readOnly={true}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.MemberInfo?.memberJoinDate}
                formItemIndex={1}
                isCurrent={'now'}
                disabled={false}
                visible={true}
                $$componentItem={{
                  id: 'TimePicker_memberJoinDate_056056',
                  uid: 'TimePicker_memberJoinDate_056056',
                  type: 'TimePicker',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'TimePicker_memberJoinDate_056056')
                }
                {...injectData}
              />
              <Input
                name={'集团编码'}
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
                fieldName={'custCode'}
                hidden={false}
                readOnly={true}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.MemberInfo?.groupId}
                formItemIndex={2}
                disabled={false}
                visible={true}
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
                  id: 'Input_custCode_9151754',
                  uid: 'Input_custCode_9151754',
                  type: 'Input',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_custCode_9151754')
                }
                {...injectData}
              />
              <Input
                name={'集团名称'}
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
                fieldName={'custName'}
                hidden={false}
                readOnly={true}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.MemberInfo?.groupName}
                formItemIndex={3}
                disabled={false}
                visible={true}
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
                  id: 'Input_custName_775747',
                  uid: 'Input_custName_775747',
                  type: 'Input',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_custName_775747')
                }
                {...injectData}
              />
              <Input
                name={'看管人员'}
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
                fieldName={'supervise'}
                hidden={false}
                readOnly={true}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.MemberInfo?.supervise}
                formItemIndex={4}
                disabled={false}
                visible={true}
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
                  id: 'Input_supervise_4522859',
                  uid: 'Input_supervise_4522859',
                  type: 'Input',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_supervise_4522859')
                }
                {...injectData}
              />
              <Input
                name={'价值等级'}
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
                fieldName={'groupLevelName'}
                hidden={false}
                readOnly={true}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.MemberInfo?.groupLevelName}
                formItemIndex={5}
                disabled={false}
                visible={true}
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
                  id: 'Input_groupLevelName_399168',
                  uid: 'Input_groupLevelName_399168',
                  type: 'Input',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_groupLevelName_399168')
                }
                {...injectData}
              />
              <Input
                name={'集团状态'}
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
                fieldName={'statusName'}
                hidden={false}
                readOnly={true}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.MemberInfo?.statusName}
                formItemIndex={6}
                disabled={false}
                visible={true}
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
                  id: 'Input_statusName_928163',
                  uid: 'Input_statusName_928163',
                  type: 'Input',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_statusName_928163')
                }
                {...injectData}
              />
              <Input
                name={'关键人标识'}
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
                fieldName={'keyType'}
                hidden={false}
                readOnly={true}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.MemberInfo?.keyType}
                formItemIndex={7}
                disabled={false}
                visible={true}
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
                  id: 'Input_keyType_957598',
                  uid: 'Input_keyType_957598',
                  type: 'Input',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_keyType_957598')
                }
                {...injectData}
              />
              <Input
                name={'职务'}
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
                fieldName={'duty'}
                hidden={false}
                readOnly={true}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.MemberInfo?.duty}
                formItemIndex={8}
                disabled={false}
                visible={true}
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
                  id: 'Input_duty_62565166',
                  uid: 'Input_duty_62565166',
                  type: 'Input',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_duty_62565166')}
                {...injectData}
              />
              <TimePicker
                name={'免扰截至时间'}
                customTime={''}
                format={'YYYY-MM-DD HH:mm:ss'}
                size={'default'}
                selfSpan={''}
                labelCol={8}
                wrapperCol={16}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                limitRange={''}
                startTime={''}
                endTime={''}
                timeMode={'time'}
                pickerType={'TimePicker'}
                placeholder={'请选择时间'}
                fieldName={'cutOffTime'}
                hidden={false}
                readOnly={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.MemberInfo?.cutOffTime}
                formItemIndex={9}
                isCurrent={'now'}
                disabled={false}
                visible={true}
                $$componentItem={{
                  id: 'TimePicker_cutOffTime_6833793',
                  uid: 'TimePicker_cutOffTime_6833793',
                  type: 'TimePicker',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'TimePicker_cutOffTime_6833793')
                }
                {...injectData}
              />
            </Form>
          </View>
        </View>
        <Form
          name={'表单'}
          colSpan={24}
          labelCol={8}
          wrapperCol={16}
          colon={true}
          layout={'horizontal'}
          labelAlign={'right'}
          visible={true}
          header={'标题'}
          colSpace={0}
          rowSpace={16}
          formCode={'Form_7791756'}
          $$componentItem={{
            id: 'Form_7791756',
            uid: 'Form_7791756',
            type: 'Form',
            ...componentItem,
          }}
          style={{ padding: '0px 0px 0px 0px', margin: '0px 0px 0px 102px' }}
          ref={(r: any) => refs.setComponentRef(r, 'Form_7791756')}
          {...injectData}
        >
          <Radio
            name={'免扰范围'}
            radioType={'Radio'}
            optionMarginRight={0}
            selfSpan={''}
            labelCol={'18%'}
            wrapperCol={'82%'}
            visible={true}
            titleTip={'notext'}
            tipLocation={'after'}
            tipPlacement={'top'}
            required={false}
            fieldName={'noDisturbScope'}
            value={data?.MemberInfo?.noDisturbScope}
            formItemIndex={0}
            dataSource={attrDataMap['noDisturbScope']}
            $$componentItem={{
              id: 'MultipleSelect_noDisturbScope_187169',
              uid: 'MultipleSelect_noDisturbScope_187169',
              type: 'Radio',
              ...componentItem,
            }}
            isFormRootChild={true}
            onChange={(e: any) => {
              const eventDatasetDataSource313: any = [
                {
                  type: 'setDataSource',
                  dataId: 166324488837668800,
                  options: {
                    compId: 'setDataSource',
                    compName: 'page',
                    id: '878775',
                    pageJsonId: 31,
                    dataSourceId: 166304804411681470,
                    dataSourceName: 'MemberInfo',
                    dataSourceRelType: 'object',
                    dataSourceReloadFilter: [
                      {
                        attrId: '229143',
                        code: 'primaryValue',
                        name: '主键值',
                        type: 'string',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                      },
                    ],
                    dataSourceSetValue: [
                      {
                        attrId: '7007954',
                        code: 'msisdn',
                        name: '手机号码',
                        type: 'string',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: null },
                      },
                      {
                        attrId: '9566397',
                        code: 'memberJoinDate',
                        name: '纳入成员骨干时间',
                        type: 'datetime',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: null },
                      },
                      {
                        attrId: '840388',
                        code: 'groupId',
                        name: '集团编码',
                        type: 'string',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: null },
                      },
                      {
                        attrId: '146567',
                        code: 'groupName',
                        name: '集团名称',
                        type: 'string',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: null },
                      },
                      {
                        attrId: '606111',
                        code: 'groupLevelName',
                        name: '价值等级',
                        type: 'string',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: null },
                      },
                      {
                        attrId: '292069',
                        code: 'statusName',
                        name: '集团状态',
                        type: 'string',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: null },
                      },
                      {
                        attrId: '669499',
                        code: 'memberType',
                        name: '成员类型',
                        type: 'string',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: null },
                      },
                      {
                        attrId: '088257',
                        code: 'officialLevel',
                        name: '行政级别',
                        type: 'string',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: null },
                      },
                      {
                        attrId: '507061',
                        code: 'keyType',
                        name: '关键人标识',
                        type: 'string',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: null },
                      },
                      {
                        attrId: '286049',
                        code: 'duty',
                        name: '职务',
                        type: 'string',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: null },
                      },
                      {
                        attrId: '163206',
                        code: 'cutOffTime',
                        name: '免扰截至时间',
                        type: 'datetime',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: null },
                      },
                      {
                        attrId: '384631',
                        code: 'noDisturbScope',
                        name: '免扰范围',
                        type: 'string',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        value: {
                          type: ['context', '$e.target.value$'],
                          code: '',
                        },
                      },
                      {
                        attrId: '7546488',
                        code: 'name',
                        name: '姓名',
                        type: 'string',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: null },
                      },
                      {
                        attrId: '262831',
                        code: 'tradeclassTop',
                        name: '行业类型ID',
                        type: 'string',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: null },
                      },
                      {
                        attrId: '442727',
                        code: 'customerId',
                        name: '客户ID',
                        type: 'string',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: null },
                      },
                      {
                        attrId: '464926',
                        code: 'supervise',
                        name: '看管人员',
                        type: 'string',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: null },
                      },
                      {
                        attrId: '0327732',
                        code: 'keyTypeName',
                        name: '关键人标识名称',
                        type: 'string',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: null },
                      },
                      {
                        attrId: '823974',
                        code: 'memberTypeName',
                        name: '成员类型名称',
                        type: 'string',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: null },
                      },
                      {
                        attrId: '187795',
                        code: 'officialLevelName',
                        name: '行政级别名称',
                        type: 'string',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: null },
                      },
                      {
                        attrId: '095668',
                        code: 'tradeclassTopName',
                        name: '行业类型名称',
                        type: 'string',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: null },
                      },
                    ],
                    operateType: 1,
                    onlySetPatch: true,
                    otherObjectArrayOptions: {},
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatasetDataSource313.params =
                [
                  { title: '单选组取值', name: 'e', value: '$e.target.value$' },
                ] || [];
              CMDGenerator(eventDatasetDataSource313, { e }, 'setDataSource', {
                id: 'setDataSource',
                name: 'setDataSource',
                type: 'setDataSource',
                platform: 'pc',
              });
            }}
            ref={(r: any) =>
              refs.setComponentRef(r, 'MultipleSelect_noDisturbScope_187169')
            }
            {...injectData}
          />
        </Form>
      </View>
    </div>
  );
};

export default withPageHOC(MemberTerm$$Modal, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', lanId: '', memberInfo: '' },
});
