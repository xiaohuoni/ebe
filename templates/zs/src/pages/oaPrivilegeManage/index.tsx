// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  VerticalView,
  Card,
  Form,
  Input,
  Select,
  Button,
  Table,
  Tabs,
  TabPane,
  TextArea,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const pageId = '952389338433073152';
const OaPrivilegeManage$$Page: React.FC<PageProps> = ({
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
  const reloadPrivilegePage = (options_4923572: any) => {
    const eventDataclearTableSelected3: any = [
      {
        type: 'clearTableSelected',
        dataId: 167893638427988220,
        options: {
          compId: 'Table_49_112',
          compLib: 'comm',
          pageJsonId: 49,
          compName: 'Table',
          id: '505341',
        },
        line_number: 1,
      },
    ];
    eventDataclearTableSelected3.params =
      [
        {
          title: '事件入参',
          name: 'options_4923572',
          value: '$options_4923572$',
        },
      ] || [];
    CMDGenerator(
      eventDataclearTableSelected3,
      { options_4923572 },
      'clearTableSelected',
      {
        id: 'clearTableSelected',
        name: 'clearTableSelected',
        type: 'clearTableSelected',
        platform: 'undefined',
      },
    );
    const eventDatavalidateCurrentForm12: any = [
      {
        type: 'validateCurrentForm',
        dataId: 167867797060170660,
        options: {
          compId: 'Form_7756987_259648',
          compLib: 'comm',
          pageJsonId: 49,
          compName: 'Form',
          id: '9962545',
        },
        line_number: 2,
        callback1: [
          {
            type: 'setLoading',
            dataId: 167875988282490340,
            options: {
              compId: 'Table_49_112',
              compLib: 'comm',
              pageJsonId: 49,
              compName: 'Table',
              id: '835054',
              loading: true,
            },
            line_number: 3,
          },
          {
            type: 'reloadDataSource',
            dataId: 167867797580195300,
            options: {
              compId: 'reloadDataSource',
              compName: 'page',
              id: '990032',
              pageJsonId: 49,
              dataSourceId: 167867612475848640,
              dataSourceName: 'oaPrivilegePage',
              dataSourceRelType: 'service',
              dataSourceReloadFilter: [
                {
                  attrId: '772787',
                  code: 'header',
                  name: '请求头参数',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                },
                {
                  attrId: '7572773',
                  code: 'path',
                  name: '请求路径参数',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                },
                {
                  attrId: '600455',
                  code: 'query',
                  name: 'URL 参数',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                },
                {
                  attrId: '571623',
                  code: 'body',
                  name: '请求体',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                  children: [
                    {
                      attrId: '0182055',
                      code: 'privilegeCode',
                      name: 'privilegeCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      value: {
                        type: ['context', '$Form_7756987_259648$'],
                        code: 'privilegeCode',
                      },
                    },
                    {
                      attrId: '2729615',
                      code: 'privilegeName',
                      name: 'privilegeName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      value: {
                        type: ['context', '$Form_7756987_259648$'],
                        code: 'privilegeName',
                      },
                    },
                    {
                      attrId: '191864',
                      code: 'pageNum',
                      name: 'pageNum',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '1' },
                      type: 'long',
                      value: { type: ['customize'], code: '1' },
                    },
                    {
                      attrId: '4316822',
                      code: 'privilegeType',
                      name: 'privilegeType',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      value: {
                        type: ['context', '$Form_7756987_259648$'],
                        code: 'privilegeType',
                      },
                    },
                    {
                      attrId: '512553',
                      code: 'pageSize',
                      name: 'pageSize',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '5' },
                      type: 'long',
                      value: { type: ['customize'], code: '5' },
                    },
                  ],
                },
              ],
              dataSourceSetValue: [
                {
                  attrId: '324366',
                  code: 'resultCode',
                  name: 'resultCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '499158',
                  code: 'resultMsgCode',
                  name: 'resultMsgCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '50746',
                  code: 'resultMsg',
                  name: 'resultMsg',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '951028',
                  code: 'resultData',
                  name: 'resultData',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'object',
                  children: [
                    {
                      attrId: '238608',
                      code: 'maxLimit',
                      name: 'maxLimit',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '168607',
                      code: 'total',
                      name: 'total',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                    },
                    {
                      attrId: '0999383',
                      code: 'current',
                      name: 'current',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                    },
                    {
                      attrId: '066807',
                      code: 'hitCount',
                      name: 'hitCount',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'boolean',
                    },
                    {
                      attrId: '033628',
                      code: 'size',
                      name: 'size',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                    },
                    {
                      attrId: '56364804',
                      code: 'optimizeCountSql',
                      name: 'optimizeCountSql',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'boolean',
                    },
                    {
                      attrId: '039231',
                      code: 'orders',
                      name: 'orders',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'fieldArray',
                      children: [
                        {
                          attrId: '836766',
                          code: 'listItem',
                          name: '列表元素',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'object',
                        },
                      ],
                    },
                    {
                      attrId: '08458',
                      code: 'countId',
                      name: 'countId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '276807',
                      code: 'isSearchCount',
                      name: 'isSearchCount',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'boolean',
                    },
                    {
                      attrId: '98503',
                      code: 'records',
                      name: 'records',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'objectArray',
                      children: [
                        {
                          attrId: '981233',
                          code: 'privilegeType',
                          name: 'privilegeType',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '3745',
                          code: 'privilegeTypeName',
                          name: '新增节点',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '734144',
                          code: 'statusCd',
                          name: 'statusCd',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '76862',
                          code: 'remark',
                          name: 'remark',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '435668',
                          code: 'createDate',
                          name: 'createDate',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '141696',
                          code: 'createStaff',
                          name: 'createStaff',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '0981156',
                          code: 'updateStaff',
                          name: 'updateStaff',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '7913758',
                          code: 'createStaffName',
                          name: 'createStaffName',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '920908',
                          code: 'updateDate',
                          name: 'updateDate',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '410171',
                          code: 'privilegeId',
                          name: 'privilegeId',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'long',
                        },
                        {
                          attrId: '485127',
                          code: 'privilegeDesc',
                          name: 'privilegeDesc',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '807932',
                          code: 'privilegeName',
                          name: 'privilegeName',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '4065437',
                          code: 'privilegeCode',
                          name: 'privilegeCode',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                      ],
                    },
                  ],
                },
              ],
              otherObjectArrayOptions: {},
            },
            line_number: 4,
            callback1: [
              {
                type: 'setLoading',
                dataId: 167875989463156700,
                options: {
                  compId: 'Table_49_112',
                  compLib: 'comm',
                  pageJsonId: 49,
                  compName: 'Table',
                  id: '092018',
                  loading: false,
                },
                line_number: 5,
              },
            ],
            callback2: [
              {
                type: 'setLoading',
                dataId: 167875989683130900,
                options: {
                  compId: 'Table_49_112',
                  compLib: 'comm',
                  pageJsonId: 49,
                  compName: 'Table',
                  id: '694612',
                  loading: false,
                },
                line_number: 6,
              },
            ],
          },
        ],
        callback2: [],
      },
    ];
    eventDatavalidateCurrentForm12.params =
      [
        {
          title: '事件入参',
          name: 'options_4923572',
          value: '$options_4923572$',
        },
      ] || [];
    CMDGenerator(
      eventDatavalidateCurrentForm12,
      { options_4923572 },
      'validateCurrentForm',
      {
        id: 'validateCurrentForm',
        name: 'validateCurrentForm',
        type: 'validateCurrentForm',
        platform: 'undefined',
      },
    );
  };
  const showPrivilegeDetail = (options_778665: any) => {
    const eventDataifelse56: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '651602',
            options: {
              useManual: true,
              useObject: false,
              context: '$data.privilegeParam.mode$',
              operate: '==',
              manualValue: 'U',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 167868859978753900,
        elseIfs: [
          {
            dataName: 'elseIf',
            dataId: 167868865601656160,
            children: [
              {
                dataName: 'action',
                dataId: 167868877728645000,
                children: [],
                todoOptions: [],
                options: {
                  compId: 'Form_7756987_259648_631751',
                  compLib: 'comm',
                  pageJsonId: 49,
                  compName: 'Form',
                  id: '8430072',
                },
                actionObjId: 'Form_7756987_259648_631751',
                actionObjName: 'Form',
                value: 'resetCurrentForm',
                compLib: 'comm',
                elseIfs: [],
                line_number: 6,
              },
              {
                dataName: 'action',
                dataId: 167868878654944740,
                children: [],
                todoOptions: ['params'],
                options: {
                  compId: 'Form_7756987_259648_631751',
                  compLib: 'comm',
                  pageJsonId: 49,
                  compName: 'Form',
                  id: '7245',
                  params: '$options_778665$',
                },
                actionObjId: 'Form_7756987_259648_631751',
                actionObjName: 'Form',
                value: 'setCurrentFormValues',
                compLib: 'comm',
                elseIfs: [],
                line_number: 7,
              },
              {
                dataName: 'action',
                dataId: 167868927707167200,
                children: [],
                todoOptions: ['visible', 'selectComp'],
                options: {
                  compId: [
                    'View_30_1122_56129022_411221_7870947',
                    'Button_30_121_490898_246542_8903187',
                  ],
                  compLib: 'custom',
                  pageJsonId: 49,
                  compName: 'View',
                  id: '972597',
                  visible: '',
                  compid: [
                    'View_30_1122_56129022_411221_7870947',
                    'Button_30_121_490898_246542_8903187',
                  ],
                },
                actionObjId: 'View_30_1122_56129022_411221_7870947',
                actionObjName: 'View',
                value: 'setVisible',
                compLib: 'custom',
                elseIfs: [],
                line_number: 8,
              },
              {
                dataName: 'action',
                dataId: 167868924458498460,
                children: [],
                todoOptions: ['disabled', 'selectComp'],
                options: {
                  compId: 'Form_7756987_259648_631751',
                  compLib: 'comm',
                  pageJsonId: 49,
                  compName: 'Form',
                  id: '51501485',
                  disabled: 'true',
                },
                actionObjId: 'Form_7756987_259648_631751',
                actionObjName: 'Form',
                value: 'setDisable',
                compLib: 'comm',
                elseIfs: [],
                line_number: 9,
              },
            ],
            condition: [],
            desc: '详情（其他）',
            elseIfs: [],
            callback: [
              {
                type: 'resetCurrentForm',
                dataId: 167868877728645000,
                options: {
                  compId: 'Form_7756987_259648_631751',
                  compLib: 'comm',
                  pageJsonId: 49,
                  compName: 'Form',
                  id: '8430072',
                },
                line_number: 6,
              },
              {
                type: 'setCurrentFormValues',
                dataId: 167868878654944740,
                options: {
                  compId: 'Form_7756987_259648_631751',
                  compLib: 'comm',
                  pageJsonId: 49,
                  compName: 'Form',
                  id: '7245',
                  params: '$options_778665$',
                },
                line_number: 7,
              },
              {
                type: 'setVisible',
                dataId: 167868927707167200,
                options: {
                  compId: [
                    'View_30_1122_56129022_411221_7870947',
                    'Button_30_121_490898_246542_8903187',
                  ],
                  compLib: 'custom',
                  pageJsonId: 49,
                  compName: 'View',
                  id: '972597',
                  visible: '',
                  compid: [
                    'View_30_1122_56129022_411221_7870947',
                    'Button_30_121_490898_246542_8903187',
                  ],
                },
                line_number: 8,
              },
              {
                type: 'setDisable',
                dataId: 167868924458498460,
                options: {
                  compId: 'Form_7756987_259648_631751',
                  compLib: 'comm',
                  pageJsonId: 49,
                  compName: 'Form',
                  id: '51501485',
                  disabled: 'true',
                },
                line_number: 9,
              },
            ],
          },
        ],
        line_number: 1,
        callback1: [
          {
            type: 'resetCurrentForm',
            dataId: 167889425398664830,
            options: {
              compId: 'Form_7756987_259648_631751',
              compLib: 'comm',
              pageJsonId: 49,
              compName: 'Form',
              id: '5143954',
            },
            line_number: 2,
          },
          {
            type: 'setCurrentFormValues',
            dataId: 167889426048184740,
            options: {
              compId: 'Form_7756987_259648_631751',
              compLib: 'comm',
              pageJsonId: 49,
              compName: 'Form',
              id: '014305',
              params: '$options_778665$',
            },
            line_number: 3,
          },
          {
            type: 'setVisible',
            dataId: 167889426598684350,
            options: {
              compId: [
                'View_30_1122_56129022_411221_7870947',
                'Button_30_121_490898_246542_8903187',
              ],
              compLib: 'custom',
              pageJsonId: 49,
              compName: 'View',
              id: '815352',
              visible: 'true',
              compid: [
                'View_30_1122_56129022_411221_7870947',
                'Button_30_121_490898_246542_8903187',
              ],
            },
            line_number: 4,
          },
          {
            type: 'setDisable',
            dataId: 167889427002642050,
            options: {
              compId: 'Form_7756987_259648_631751',
              compLib: 'comm',
              pageJsonId: 49,
              compName: 'Form',
              id: '118156',
              disabled: '',
            },
            line_number: 5,
          },
        ],
      },
    ];
    eventDataifelse56.params =
      [
        {
          title: '事件入参',
          name: 'options_778665',
          value: '$options_778665$',
        },
      ] || [];
    CMDGenerator(eventDataifelse56, { options_778665 }, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
  };
  const savePrivilegeDetail = (options_304542: any) => {
    const eventDatavalidateCurrentForm13: any = [
      {
        type: 'validateCurrentForm',
        dataId: 167897098969214800,
        options: {
          compId: 'Form_7756987_259648_631751',
          compLib: 'comm',
          pageJsonId: 49,
          compName: 'Form',
          id: '416022',
        },
        line_number: 1,
        callback1: [
          {
            type: 'ifelse',
            condition: [
              {
                condId: '651602',
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$data.privilegeParam.mode$',
                  operate: '==',
                  manualValue: 'A',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 167897100347690430,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 167897100347663580,
                children: [
                  {
                    dataName: 'action',
                    dataId: 167897100347617660,
                    children: [
                      {
                        dataName: 'callback',
                        dataId: 167897100347657060,
                        children: [
                          {
                            dataName: 'condition',
                            dataId: 167897100347683870,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 167897100347639840,
                                children: [],
                                todoOptions: ['msgType', 'value'],
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '152857',
                                  pageJsonId: 49,
                                  type: 'success',
                                  value: '编辑成功',
                                },
                                actionObjId: 'showMessage',
                                actionObjName: 'system',
                                value: 'showMessage',
                                line_number: 12,
                              },
                              {
                                dataName: 'action',
                                dataId: 167897100347642880,
                                children: [
                                  {
                                    dataName: 'callback',
                                    dataId: 167897100347693300,
                                    children: [],
                                    value: 'callback1',
                                    params: [],
                                  },
                                  {
                                    dataName: 'callback',
                                    dataId: 167897100347688060,
                                    children: [],
                                    value: 'callback2',
                                    params: [],
                                  },
                                ],
                                todoOptions: [
                                  'customFuncName',
                                  'customFuncParams',
                                ],
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '373215',
                                  pageJsonId: 49,
                                  customFuncName: 'reloadPrivilegePage',
                                },
                                actionObjId: 'callSelfFunc',
                                actionObjName: 'system',
                                value: 'callSelfFunc',
                                line_number: 13,
                              },
                            ],
                            elseIfs: [],
                            condition: [
                              {
                                condId: '777708',
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context: '$reply_2764832.resultCode$',
                                  operate: '==',
                                  manualValue: '0',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            line_number: 11,
                          },
                        ],
                        value: 'callback1',
                        params: [],
                        elseIfs: [],
                      },
                      {
                        dataName: 'callback',
                        dataId: 167897100347681060,
                        children: [],
                        value: 'callback2',
                        params: [],
                        elseIfs: [],
                      },
                    ],
                    todoOptions: ['actionTitle', 'sync', 'url', 'params'],
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '2764832',
                      pageJsonId: 49,
                      sync: false,
                      method: 'post',
                      url: '/app/rhin/gateway/callRhinEngine',
                      _capabilityCode: 'modDcOaPrivilege',
                      _apiCode: 'modDcOaPrivilege',
                      _source: 'rhin',
                      _serviceId: '952458569959100416',
                      _serviceTitle: '修改权限信息--tzp: modDcOaPrivilege',
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
                          dataKey: '712308_header',
                        },
                        {
                          code: 'path',
                          name: '请求路径参数',
                          attrType: 'object',
                          _id: 'path',
                          compType: 'Input',
                          parents: [],
                          id: 'path',
                          dataKey: '712308_path',
                        },
                        {
                          code: 'query',
                          name: 'URL 参数',
                          attrType: 'object',
                          _id: 'query',
                          compType: 'Input',
                          parents: [],
                          id: 'query',
                          dataKey: '712308_query',
                        },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          children: [
                            {
                              code: 'privilegeCode',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.privilegeCode',
                              compType: 'Input',
                              name: 'privilegeCode',
                              parents: ['body'],
                              id: 'body.privilegeCode',
                              dataKey: '712308_body.privilegeCode',
                              value: {
                                type: [
                                  'form',
                                  'Form_7756987_259648_631751',
                                  'validateFields',
                                ],
                                code: 'privilegeCode',
                              },
                            },
                            {
                              code: 'createStaffName',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.createStaffName',
                              compType: 'Input',
                              name: 'createStaffName',
                              parents: ['body'],
                              id: 'body.createStaffName',
                              dataKey: '712308_body.createStaffName',
                            },
                            {
                              code: 'updateDate',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.updateDate',
                              compType: 'Input',
                              name: 'updateDate',
                              parents: ['body'],
                              id: 'body.updateDate',
                              dataKey: '712308_body.updateDate',
                            },
                            {
                              code: 'privilegeId',
                              attrType: 'field',
                              type: 'long',
                              mustFlag: 'F',
                              _id: 'body.privilegeId',
                              compType: 'Input',
                              name: 'privilegeId',
                              parents: ['body'],
                              id: 'body.privilegeId',
                              dataKey: '712308_body.privilegeId',
                              value: {
                                type: [
                                  'form',
                                  'Form_7756987_259648_631751',
                                  'validateFields',
                                ],
                                code: 'privilegeId',
                              },
                            },
                            {
                              code: 'statusCd',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.statusCd',
                              compType: 'Input',
                              name: 'statusCd',
                              parents: ['body'],
                              id: 'body.statusCd',
                              dataKey: '712308_body.statusCd',
                            },
                            {
                              code: 'remark',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.remark',
                              compType: 'Input',
                              name: 'remark',
                              parents: ['body'],
                              id: 'body.remark',
                              dataKey: '712308_body.remark',
                            },
                            {
                              code: 'privilegeDesc',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.privilegeDesc',
                              compType: 'Input',
                              name: 'privilegeDesc',
                              parents: ['body'],
                              id: 'body.privilegeDesc',
                              dataKey: '712308_body.privilegeDesc',
                              value: {
                                type: [
                                  'form',
                                  'Form_7756987_259648_631751',
                                  'validateFields',
                                ],
                                code: 'privilegeDesc',
                              },
                            },
                            {
                              code: 'privilegeType',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.privilegeType',
                              compType: 'Input',
                              name: 'privilegeType',
                              parents: ['body'],
                              id: 'body.privilegeType',
                              dataKey: '712308_body.privilegeType',
                              value: {
                                type: [
                                  'form',
                                  'Form_7756987_259648_631751',
                                  'validateFields',
                                ],
                                code: 'privilegeType',
                              },
                            },
                            {
                              code: 'privilegeName',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.privilegeName',
                              compType: 'Input',
                              name: 'privilegeName',
                              parents: ['body'],
                              id: 'body.privilegeName',
                              dataKey: '712308_body.privilegeName',
                              value: {
                                type: [
                                  'form',
                                  'Form_7756987_259648_631751',
                                  'validateFields',
                                ],
                                code: 'privilegeName',
                              },
                            },
                            {
                              code: 'createDate',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.createDate',
                              compType: 'Input',
                              name: 'createDate',
                              parents: ['body'],
                              id: 'body.createDate',
                              dataKey: '712308_body.createDate',
                            },
                            {
                              code: 'createStaff',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.createStaff',
                              compType: 'Input',
                              name: 'createStaff',
                              parents: ['body'],
                              id: 'body.createStaff',
                              dataKey: '712308_body.createStaff',
                            },
                            {
                              code: 'updateStaff',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.updateStaff',
                              compType: 'Input',
                              name: 'updateStaff',
                              parents: ['body'],
                              id: 'body.updateStaff',
                              dataKey: '712308_body.updateStaff',
                            },
                          ],
                          _id: 'body',
                          compType: 'Input',
                          parents: [],
                          id: 'body',
                          dataKey: '712308_body',
                        },
                      ],
                    },
                    actionObjId: 'apiRequest',
                    actionObjName: 'system',
                    value: 'apiRequest',
                    elseIfs: [],
                    line_number: 10,
                  },
                ],
                condition: [
                  {
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$data.privilegeParam.mode$',
                      operate: '==',
                      manualValue: 'U',
                    },
                    condId: '0712083',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                desc: '更新(mode=U)',
                elseIfs: [],
                callback: [
                  {
                    type: 'apiRequest',
                    dataId: 167897100347617660,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '2764832',
                      pageJsonId: 49,
                      sync: false,
                      method: 'post',
                      url: '/app/rhin/gateway/callRhinEngine',
                      _capabilityCode: 'modDcOaPrivilege',
                      _apiCode: 'modDcOaPrivilege',
                      _source: 'rhin',
                      _serviceId: '952458569959100416',
                      _serviceTitle: '修改权限信息--tzp: modDcOaPrivilege',
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
                          dataKey: '712308_header',
                        },
                        {
                          code: 'path',
                          name: '请求路径参数',
                          attrType: 'object',
                          _id: 'path',
                          compType: 'Input',
                          parents: [],
                          id: 'path',
                          dataKey: '712308_path',
                        },
                        {
                          code: 'query',
                          name: 'URL 参数',
                          attrType: 'object',
                          _id: 'query',
                          compType: 'Input',
                          parents: [],
                          id: 'query',
                          dataKey: '712308_query',
                        },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          children: [
                            {
                              code: 'privilegeCode',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.privilegeCode',
                              compType: 'Input',
                              name: 'privilegeCode',
                              parents: ['body'],
                              id: 'body.privilegeCode',
                              dataKey: '712308_body.privilegeCode',
                              value: {
                                type: [
                                  'form',
                                  'Form_7756987_259648_631751',
                                  'validateFields',
                                ],
                                code: 'privilegeCode',
                              },
                            },
                            {
                              code: 'createStaffName',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.createStaffName',
                              compType: 'Input',
                              name: 'createStaffName',
                              parents: ['body'],
                              id: 'body.createStaffName',
                              dataKey: '712308_body.createStaffName',
                            },
                            {
                              code: 'updateDate',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.updateDate',
                              compType: 'Input',
                              name: 'updateDate',
                              parents: ['body'],
                              id: 'body.updateDate',
                              dataKey: '712308_body.updateDate',
                            },
                            {
                              code: 'privilegeId',
                              attrType: 'field',
                              type: 'long',
                              mustFlag: 'F',
                              _id: 'body.privilegeId',
                              compType: 'Input',
                              name: 'privilegeId',
                              parents: ['body'],
                              id: 'body.privilegeId',
                              dataKey: '712308_body.privilegeId',
                              value: {
                                type: [
                                  'form',
                                  'Form_7756987_259648_631751',
                                  'validateFields',
                                ],
                                code: 'privilegeId',
                              },
                            },
                            {
                              code: 'statusCd',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.statusCd',
                              compType: 'Input',
                              name: 'statusCd',
                              parents: ['body'],
                              id: 'body.statusCd',
                              dataKey: '712308_body.statusCd',
                            },
                            {
                              code: 'remark',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.remark',
                              compType: 'Input',
                              name: 'remark',
                              parents: ['body'],
                              id: 'body.remark',
                              dataKey: '712308_body.remark',
                            },
                            {
                              code: 'privilegeDesc',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.privilegeDesc',
                              compType: 'Input',
                              name: 'privilegeDesc',
                              parents: ['body'],
                              id: 'body.privilegeDesc',
                              dataKey: '712308_body.privilegeDesc',
                              value: {
                                type: [
                                  'form',
                                  'Form_7756987_259648_631751',
                                  'validateFields',
                                ],
                                code: 'privilegeDesc',
                              },
                            },
                            {
                              code: 'privilegeType',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.privilegeType',
                              compType: 'Input',
                              name: 'privilegeType',
                              parents: ['body'],
                              id: 'body.privilegeType',
                              dataKey: '712308_body.privilegeType',
                              value: {
                                type: [
                                  'form',
                                  'Form_7756987_259648_631751',
                                  'validateFields',
                                ],
                                code: 'privilegeType',
                              },
                            },
                            {
                              code: 'privilegeName',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.privilegeName',
                              compType: 'Input',
                              name: 'privilegeName',
                              parents: ['body'],
                              id: 'body.privilegeName',
                              dataKey: '712308_body.privilegeName',
                              value: {
                                type: [
                                  'form',
                                  'Form_7756987_259648_631751',
                                  'validateFields',
                                ],
                                code: 'privilegeName',
                              },
                            },
                            {
                              code: 'createDate',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.createDate',
                              compType: 'Input',
                              name: 'createDate',
                              parents: ['body'],
                              id: 'body.createDate',
                              dataKey: '712308_body.createDate',
                            },
                            {
                              code: 'createStaff',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.createStaff',
                              compType: 'Input',
                              name: 'createStaff',
                              parents: ['body'],
                              id: 'body.createStaff',
                              dataKey: '712308_body.createStaff',
                            },
                            {
                              code: 'updateStaff',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.updateStaff',
                              compType: 'Input',
                              name: 'updateStaff',
                              parents: ['body'],
                              id: 'body.updateStaff',
                              dataKey: '712308_body.updateStaff',
                            },
                          ],
                          _id: 'body',
                          compType: 'Input',
                          parents: [],
                          id: 'body',
                          dataKey: '712308_body',
                        },
                      ],
                    },
                    line_number: 10,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '777708',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$reply_2764832.resultCode$',
                              operate: '==',
                              manualValue: '0',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 167897100347683870,
                        elseIfs: [],
                        line_number: 11,
                        callback1: [
                          {
                            type: 'showMessage',
                            dataId: 167897100347639840,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '152857',
                              pageJsonId: 49,
                              type: 'success',
                              value: '编辑成功',
                            },
                            line_number: 12,
                          },
                          {
                            type: 'callSelfFunc',
                            dataId: 167897100347642880,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '373215',
                              pageJsonId: 49,
                              customFuncName: 'reloadPrivilegePage',
                            },
                            line_number: 13,
                            callback1: [],
                            callback2: [],
                          },
                        ],
                      },
                    ],
                    callback2: [],
                  },
                ],
              },
              {
                dataName: 'elseIf',
                dataId: 167897100347629950,
                children: [
                  {
                    dataName: 'action',
                    dataId: 167897100347618720,
                    children: [],
                    todoOptions: ['msgType', 'value'],
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '1688376',
                      pageJsonId: 49,
                      type: 'error',
                      value: '不支持的保存类型',
                    },
                    actionObjId: 'showMessage',
                    actionObjName: 'system',
                    value: 'showMessage',
                    elseIfs: [],
                    line_number: 14,
                  },
                ],
                condition: [],
                desc: '详情（其他）',
                elseIfs: [],
                callback: [
                  {
                    type: 'showMessage',
                    dataId: 167897100347618720,
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '1688376',
                      pageJsonId: 49,
                      type: 'error',
                      value: '不支持的保存类型',
                    },
                    line_number: 14,
                  },
                ],
              },
            ],
            line_number: 2,
            callback1: [
              {
                type: 'apiRequest',
                dataId: 167897100347601280,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '419607',
                  pageJsonId: 49,
                  sync: false,
                  method: 'post',
                  url: '/app/rhin/gateway/callRhinEngine',
                  _capabilityCode: 'addDcOaPrivilege',
                  _apiCode: 'addDcOaPrivilege',
                  _source: 'rhin',
                  _serviceId: '952458145828126720',
                  _serviceTitle: '新增权限信息--tzp: addDcOaPrivilege',
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
                      dataKey: '41083_header',
                    },
                    {
                      code: 'path',
                      name: '请求路径参数',
                      attrType: 'object',
                      _id: 'path',
                      compType: 'Input',
                      parents: [],
                      id: 'path',
                      dataKey: '41083_path',
                    },
                    {
                      code: 'query',
                      name: 'URL 参数',
                      attrType: 'object',
                      _id: 'query',
                      compType: 'Input',
                      parents: [],
                      id: 'query',
                      dataKey: '41083_query',
                    },
                    {
                      code: 'body',
                      name: '请求体',
                      attrType: 'object',
                      children: [
                        {
                          code: 'privilegeCode',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.privilegeCode',
                          compType: 'Input',
                          name: 'privilegeCode',
                          parents: ['body'],
                          id: 'body.privilegeCode',
                          dataKey: '41083_body.privilegeCode',
                          value: {
                            type: [
                              'form',
                              'Form_7756987_259648_631751',
                              'validateFields',
                            ],
                            code: 'privilegeCode',
                          },
                        },
                        {
                          code: 'createStaffName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.createStaffName',
                          compType: 'Input',
                          name: 'createStaffName',
                          parents: ['body'],
                          id: 'body.createStaffName',
                          dataKey: '41083_body.createStaffName',
                        },
                        {
                          code: 'updateDate',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.updateDate',
                          compType: 'Input',
                          name: 'updateDate',
                          parents: ['body'],
                          id: 'body.updateDate',
                          dataKey: '41083_body.updateDate',
                        },
                        {
                          code: 'privilegeId',
                          attrType: 'field',
                          type: 'long',
                          mustFlag: 'F',
                          _id: 'body.privilegeId',
                          compType: 'Input',
                          name: 'privilegeId',
                          parents: ['body'],
                          id: 'body.privilegeId',
                          dataKey: '41083_body.privilegeId',
                        },
                        {
                          code: 'statusCd',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.statusCd',
                          compType: 'Input',
                          name: 'statusCd',
                          parents: ['body'],
                          id: 'body.statusCd',
                          dataKey: '41083_body.statusCd',
                        },
                        {
                          code: 'remark',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.remark',
                          compType: 'Input',
                          name: 'remark',
                          parents: ['body'],
                          id: 'body.remark',
                          dataKey: '41083_body.remark',
                        },
                        {
                          code: 'privilegeDesc',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.privilegeDesc',
                          compType: 'Input',
                          name: 'privilegeDesc',
                          parents: ['body'],
                          id: 'body.privilegeDesc',
                          dataKey: '41083_body.privilegeDesc',
                          value: {
                            type: [
                              'form',
                              'Form_7756987_259648_631751',
                              'validateFields',
                            ],
                            code: 'privilegeDesc',
                          },
                        },
                        {
                          code: 'privilegeType',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.privilegeType',
                          compType: 'Input',
                          name: 'privilegeType',
                          parents: ['body'],
                          id: 'body.privilegeType',
                          dataKey: '41083_body.privilegeType',
                          value: {
                            type: [
                              'form',
                              'Form_7756987_259648_631751',
                              'validateFields',
                            ],
                            code: 'privilegeType',
                          },
                        },
                        {
                          code: 'privilegeName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.privilegeName',
                          compType: 'Input',
                          name: 'privilegeName',
                          parents: ['body'],
                          id: 'body.privilegeName',
                          dataKey: '41083_body.privilegeName',
                          value: {
                            type: [
                              'form',
                              'Form_7756987_259648_631751',
                              'validateFields',
                            ],
                            code: 'privilegeName',
                          },
                        },
                        {
                          code: 'createDate',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.createDate',
                          compType: 'Input',
                          name: 'createDate',
                          parents: ['body'],
                          id: 'body.createDate',
                          dataKey: '41083_body.createDate',
                        },
                        {
                          code: 'createStaff',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.createStaff',
                          compType: 'Input',
                          name: 'createStaff',
                          parents: ['body'],
                          id: 'body.createStaff',
                          dataKey: '41083_body.createStaff',
                        },
                        {
                          code: 'updateStaff',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.updateStaff',
                          compType: 'Input',
                          name: 'updateStaff',
                          parents: ['body'],
                          id: 'body.updateStaff',
                          dataKey: '41083_body.updateStaff',
                        },
                      ],
                      _id: 'body',
                      compType: 'Input',
                      parents: [],
                      id: 'body',
                      dataKey: '41083_body',
                    },
                  ],
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '165645',
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$reply_419607.resultCode$',
                          operate: '==',
                          manualValue: '0',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 167897100347658800,
                    elseIfs: [],
                    line_number: 4,
                    callback1: [
                      {
                        type: 'showMessage',
                        dataId: 167897100347606000,
                        options: {
                          compId: 'showMessage',
                          compName: 'system',
                          id: '176193',
                          pageJsonId: 49,
                          type: 'success',
                          value: '新增成功',
                        },
                        line_number: 5,
                      },
                      {
                        type: 'callSelfFunc',
                        dataId: 167897100347615000,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '155793',
                          pageJsonId: 49,
                          customFuncName: 'reloadPrivilegePage',
                        },
                        line_number: 6,
                        callback1: [],
                        callback2: [],
                      },
                      {
                        type: 'resetCurrentForm',
                        dataId: 167897100347659600,
                        options: {
                          compId: 'Form_7756987_259648_631751',
                          compLib: 'comm',
                          pageJsonId: 49,
                          compName: 'Form',
                          id: '31244',
                        },
                        line_number: 7,
                      },
                      {
                        type: 'setDisable',
                        dataId: 167897100347615400,
                        options: {
                          compId: 'Form_7756987_259648_631751',
                          compLib: 'comm',
                          pageJsonId: 49,
                          compName: 'Form',
                          id: '084549',
                          disabled: 'true',
                        },
                        line_number: 8,
                      },
                      {
                        type: 'setVisible',
                        dataId: 167897100347669540,
                        options: {
                          compId: 'View_30_1122_56129022_411221_7870947',
                          compLib: 'custom',
                          pageJsonId: 49,
                          compName: 'View',
                          id: '213666',
                          visible: '',
                        },
                        line_number: 9,
                      },
                    ],
                  },
                ],
                callback2: [],
              },
            ],
          },
        ],
        callback2: [],
      },
    ];
    eventDatavalidateCurrentForm13.params =
      [
        {
          title: '事件入参',
          name: 'options_304542',
          value: '$options_304542$',
        },
      ] || [];
    CMDGenerator(
      eventDatavalidateCurrentForm13,
      { options_304542 },
      'validateCurrentForm',
      {
        id: 'validateCurrentForm',
        name: 'validateCurrentForm',
        type: 'validateCurrentForm',
        platform: 'undefined',
      },
    );
  };
  const reloadPrivilegeRolePage = (options_2945305: any) => {
    const eventDataifelse57: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '375589',
            options: {
              context: '$data.privilegeParam.privilegeId$',
              operate: 'notEmpty',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 167870141330196350,
        elseIfs: [],
        line_number: 1,
        callback1: [
          {
            type: 'validateCurrentForm',
            dataId: 167870141873357000,
            options: {
              compId: 'Form_5336927',
              compLib: 'comm',
              pageJsonId: 49,
              compName: 'Form',
              id: '4835',
            },
            line_number: 2,
            callback1: [
              {
                type: 'setLoading',
                dataId: 167875993215166850,
                options: {
                  compId: 'Table_554268',
                  compLib: 'comm',
                  pageJsonId: 49,
                  compName: 'Table',
                  id: '165254',
                  loading: true,
                },
                line_number: 3,
              },
              {
                type: 'apiRequest',
                dataId: 167875791504796200,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '537111',
                  pageJsonId: 49,
                  sync: false,
                  method: 'post',
                  url: '/app/rhin/gateway/callRhinEngine',
                  _capabilityCode: 'qryRoleHavePrivilegePage',
                  _apiCode: 'qryRoleHavePrivilegePage',
                  _source: 'rhin',
                  _serviceId: '952496529879547904',
                  _serviceTitle:
                    '根据权限查找包含该权限的角色列表--tzp: qryRoleHavePrivilegePage',
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
                      dataKey: '537111_header',
                    },
                    {
                      code: 'path',
                      name: '请求路径参数',
                      attrType: 'object',
                      _id: 'path',
                      compType: 'Input',
                      parents: [],
                      id: 'path',
                      dataKey: '537111_path',
                    },
                    {
                      code: 'query',
                      name: 'URL 参数',
                      attrType: 'object',
                      _id: 'query',
                      compType: 'Input',
                      parents: [],
                      id: 'query',
                      dataKey: '537111_query',
                    },
                    {
                      code: 'body',
                      name: '请求体',
                      attrType: 'object',
                      children: [
                        {
                          code: 'roleName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.roleName',
                          compType: 'Input',
                          name: 'roleName',
                          parents: ['body'],
                          id: 'body.roleName',
                          dataKey: '537111_body.roleName',
                          value: {
                            type: ['context', '$Form_5336927$'],
                            code: 'roleName',
                          },
                        },
                        {
                          code: 'pageSize',
                          name: 'pageSize',
                          attrType: 'field',
                          type: 'long',
                          mustFlag: 'F',
                          defaultValue: '',
                          _id: 'body.pageSize',
                          compType: 'Input',
                          parents: ['body'],
                          id: 'body.pageSize',
                          dataKey: '537111_body.pageSize',
                          value: { type: ['customize'], code: '5' },
                        },
                        {
                          code: 'pageNum',
                          name: 'pageNum',
                          attrType: 'field',
                          type: 'long',
                          mustFlag: 'F',
                          defaultValue: '',
                          _id: 'body.pageNum',
                          compType: 'Input',
                          parents: ['body'],
                          id: 'body.pageNum',
                          dataKey: '537111_body.pageNum',
                          value: {
                            type: ['context', '$options_2945305$'],
                            code: 'pageNum',
                          },
                        },
                        {
                          code: 'privilegeId',
                          attrType: 'field',
                          type: 'long',
                          mustFlag: 'F',
                          _id: 'body.privilegeId',
                          compType: 'Input',
                          name: 'privilegeId',
                          parents: ['body'],
                          id: 'body.privilegeId',
                          dataKey: '537111_body.privilegeId',
                          value: {
                            type: ['datasource', 'privilegeParam', 'data'],
                            code: 'privilegeId',
                          },
                        },
                        {
                          code: 'roleCode',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.roleCode',
                          compType: 'Input',
                          name: 'roleCode',
                          parents: ['body'],
                          id: 'body.roleCode',
                          dataKey: '537111_body.roleCode',
                          value: {
                            type: ['context', '$Form_5336927$'],
                            code: 'roleCode',
                          },
                        },
                      ],
                      _id: 'body',
                      compType: 'Input',
                      parents: [],
                      id: 'body',
                      dataKey: '537111_body',
                    },
                  ],
                },
                line_number: 4,
                callback1: [
                  {
                    type: 'reloadTableData',
                    dataId: 167875803179539780,
                    options: {
                      compId: 'Table_554268',
                      compLib: 'comm',
                      pageJsonId: 49,
                      compName: 'Table',
                      id: '589191',
                      data: '$reply_537111?.resultData.records$',
                      total: '$reply_537111?.resultData.total$',
                      current: '$reply_537111?.resultData.current$',
                    },
                    line_number: 5,
                    callback1: [],
                  },
                  {
                    type: 'setLoading',
                    dataId: 167875994656821900,
                    options: {
                      compId: 'Table_554268',
                      compLib: 'comm',
                      pageJsonId: 49,
                      compName: 'Table',
                      id: '006588',
                      loading: false,
                    },
                    line_number: 6,
                  },
                ],
                callback2: [
                  {
                    type: 'setLoading',
                    dataId: 167875995008845540,
                    options: {
                      compId: 'Table_554268',
                      compLib: 'comm',
                      pageJsonId: 49,
                      compName: 'Table',
                      id: '283917',
                      loading: false,
                    },
                    line_number: 7,
                  },
                ],
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse57.params =
      [
        {
          title: '事件入参',
          name: 'options_2945305',
          value: '$options_2945305$',
        },
      ] || [];
    CMDGenerator(eventDataifelse57, { options_2945305 }, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
  };
  const emptyBelow = (options_3938694: any) => {
    const forms10 = getFormByCompId('Form_7756987_259648_631751', refs);
    // 支持循环容器中的表单重置
    (Array.isArray(forms10) ? forms10 : [forms10]).forEach((form) =>
      form?.resetFields(),
    );
    const eventDatasetDisable16: any = [
      {
        type: 'setDisable',
        dataId: 167878477151070750,
        options: {
          compId: 'Form_7756987_259648_631751',
          compLib: 'comm',
          pageJsonId: 49,
          compName: 'Form',
          id: '651667',
          disabled: 'true',
        },
        line_number: 2,
      },
    ];
    eventDatasetDisable16.params =
      [
        {
          title: '事件入参',
          name: 'options_3938694',
          value: '$options_3938694$',
        },
      ] || [];
    CMDGenerator(eventDatasetDisable16, { options_3938694 }, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDatasetVisible10: any = [
      {
        type: 'setVisible',
        dataId: 167877753206005730,
        options: {
          compId: [
            'View_30_1122_56129022_411221_7870947',
            'Button_508625_7684763_98176_283668',
          ],
          compLib: 'custom',
          pageJsonId: 49,
          compName: 'View',
          id: '6917325',
          visible: '',
          compid: [
            'View_30_1122_56129022_411221_7870947',
            'Button_508625_7684763_98176_283668',
          ],
        },
        line_number: 3,
      },
    ];
    eventDatasetVisible10.params =
      [
        {
          title: '事件入参',
          name: 'options_3938694',
          value: '$options_3938694$',
        },
      ] || [];
    CMDGenerator(eventDatasetVisible10, { options_3938694 }, 'setVisible', {
      id: 'setVisible',
      name: 'setVisible',
      type: 'setVisible',
      platform: 'undefined',
    });
    const forms11 = getFormByCompId('Form_5336927', refs);
    // 支持循环容器中的表单重置
    (Array.isArray(forms11) ? forms11 : [forms11]).forEach((form) =>
      form?.resetFields(),
    );
    const eventDatacustomActionCode199: any = [
      {
        type: 'customActionCode',
        dataId: 167877759213510200,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '51444894',
          pageJsonId: 49,
          code: 'function main(data,state,success,fail){success([])};',
        },
        line_number: 5,
        callback1: [
          {
            type: 'reloadTableData',
            dataId: 167877759213639940,
            options: {
              compId: 'Table_554268',
              compLib: 'comm',
              pageJsonId: 49,
              compName: 'Table',
              id: '169034',
              data: '$data_51444894$',
              total: '0',
              current: '1',
            },
            line_number: 6,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode199.params =
      [
        {
          title: '事件入参',
          name: 'options_3938694',
          value: '$options_3938694$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode199,
      { options_3938694 },
      'customActionCode',
      {
        id: 'customActionCode',
        name: 'customActionCode',
        type: 'customActionCode',
        platform: 'undefined',
      },
    );
    const eventDataclearTableSelected4: any = [
      {
        type: 'clearTableSelected',
        dataId: 167878297668579070,
        options: {
          compId: 'Table_49_112',
          compLib: 'comm',
          pageJsonId: 49,
          compName: 'Table',
          id: '1891546',
        },
        line_number: 7,
      },
    ];
    eventDataclearTableSelected4.params =
      [
        {
          title: '事件入参',
          name: 'options_3938694',
          value: '$options_3938694$',
        },
      ] || [];
    CMDGenerator(
      eventDataclearTableSelected4,
      { options_3938694 },
      'clearTableSelected',
      {
        id: 'clearTableSelected',
        name: 'clearTableSelected',
        type: 'clearTableSelected',
        platform: 'undefined',
      },
    );
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    reloadPrivilegePage,
    showPrivilegeDetail,
    savePrivilegeDetail,
    reloadPrivilegeRolePage,
    emptyBelow,
  }));

  useEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div style={{ height: '100%', ...style }} className="__CustomClass_49__">
      <View
        className="View_View_49_1"
        name={'页面'}
        backgroundType={{ type: 'cleanColor', color: 'rgba(255, 255, 255, 1)' }}
        $$componentItem={{
          id: 'View_49_1',
          uid: 'View_49_1',
          type: 'View',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
        style={{
          minHeight: '100%',
          display: 'block',
          padding: '20px 20px 20px 20px',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_49_1')}
        {...injectData}
      >
        <VerticalView
          name={'上下布局'}
          $$componentItem={{
            id: 'VerticalView_274594',
            uid: 'VerticalView_274594',
            type: 'VerticalView',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
            height: '100%',
            overflowY: 'auto',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'VerticalView_274594')}
          {...injectData}
        >
          <View
            className="View_View_2930917"
            name={'布局容器'}
            $$componentItem={{
              id: 'View_2930917',
              uid: 'View_2930917',
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
              height: '30%',
              width: '100%',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_2930917')}
            {...injectData}
          >
            <Card
              name={'卡片'}
              cardIconType={'middle'}
              extendNum={3}
              title={'权限列表'}
              bordered={true}
              size={'default'}
              hasHeader={true}
              hasIcon={true}
              titleColor={'#1c242e'}
              headerColor={'#ffffff'}
              extend={[
                {
                  id: '7734186',
                  title: '新增',
                  iconPos: 'left',
                  btnType: 'primary',
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
                id: 'Card_742823',
                uid: 'Card_742823',
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
              onClickBtn1={(e: any) => {
                const eventDatasetDataSource250: any = [
                  {
                    type: 'setDataSource',
                    dataId: 168196023969881630,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '47187',
                      pageJsonId: 49,
                      dataSourceId: 167868890039758200,
                      dataSourceName: 'privilegeParam',
                      dataSourceRelType: 'custom',
                      dataSourceReloadFilter: [],
                      dataSourceSetValue: [
                        {
                          attrId: '994448',
                          code: 'mode',
                          name: '处理模式',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: { type: ['customize'], code: 'A' },
                        },
                        {
                          attrId: '4193153',
                          code: 'privilegeId',
                          name: '关联主键',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['EMPTY_DATA', 'string'],
                            hideAttr: true,
                            code: '$EMPTY_DATA.string$',
                          },
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
                eventDatasetDataSource250.params =
                  [{ title: '新增点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatasetDataSource250,
                  { e },
                  'setDataSource',
                  {
                    id: 'setDataSource',
                    name: 'setDataSource',
                    type: 'setDataSource',
                    platform: 'pc',
                  },
                );
                const eventDatacallSelfFunc730: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 168196025337887940,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '4554566',
                      pageJsonId: 49,
                      customFuncName: 'emptyBelow',
                    },
                    line_number: 2,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc730.params =
                  [{ title: '新增点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatacallSelfFunc730, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
                const eventDatasetActiveTabPane12: any = [
                  {
                    type: 'setActiveTabPane',
                    dataId: 168196026609158500,
                    options: {
                      compId: 'Tabs_289434',
                      compLib: 'comm',
                      pageJsonId: 49,
                      compName: 'Tabs',
                      id: '073231',
                      paramsObj: { activiKey: '1' },
                      paramsObjKeyValueMap: { activiKey: '1' },
                    },
                    line_number: 3,
                  },
                ];
                eventDatasetActiveTabPane12.params =
                  [{ title: '新增点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatasetActiveTabPane12,
                  { e },
                  'setActiveTabPane',
                  {
                    id: 'setActiveTabPane',
                    name: 'setActiveTabPane',
                    type: 'setActiveTabPane',
                    platform: 'pc',
                  },
                );
                const eventDatasetVisible30: any = [
                  {
                    type: 'setVisible',
                    dataId: 168196027913223650,
                    options: {
                      compId: [
                        'View_30_1122_56129022_411221_7870947',
                        'Button_30_121_490898_246542_8903187',
                        'Button_017222',
                      ],
                      compLib: 'custom',
                      pageJsonId: 49,
                      compName: 'View',
                      id: '701095',
                      visible: 'true',
                      compid: [
                        'View_30_1122_56129022_411221_7870947',
                        'Button_30_121_490898_246542_8903187',
                        'Button_017222',
                      ],
                    },
                    line_number: 4,
                  },
                ];
                eventDatasetVisible30.params =
                  [{ title: '新增点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatasetVisible30, { e }, 'setVisible', {
                  id: 'setVisible',
                  name: 'setVisible',
                  type: 'setVisible',
                  platform: 'pc',
                });
                const eventDatasetDisable168: any = [
                  {
                    type: 'setDisable',
                    dataId: 168196029249277150,
                    options: {
                      compId: 'Form_7756987_259648_631751',
                      compLib: 'comm',
                      pageJsonId: 49,
                      compName: 'Form',
                      id: '5778526',
                      disabled: '',
                    },
                    line_number: 5,
                  },
                ];
                eventDatasetDisable168.params =
                  [{ title: '新增点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatasetDisable168, { e }, 'setDisable', {
                  id: 'setDisable',
                  name: 'setDisable',
                  type: 'setDisable',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Card_742823')}
              {...injectData}
            >
              <Form
                name={'表单'}
                colSpan={6}
                labelCol={8}
                wrapperCol={16}
                colon={true}
                layout={'horizontal'}
                labelAlign={'right'}
                header={'标题'}
                colSpace={0}
                rowSpace={16}
                formCode={'Form_7756987'}
                $$componentItem={{
                  id: 'Form_7756987_259648',
                  uid: 'Form_7756987_259648',
                  type: 'Form',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) => refs.setComponentRef(r, 'Form_7756987_259648')}
                {...injectData}
              >
                <Input
                  name={'权限编码'}
                  size={'default'}
                  selfSpan={6}
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
                  fieldName={'privilegeCode'}
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
                    id: 'Input_650422_201996',
                    uid: 'Input_650422_201996',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  onPressEnter={(e: any) => {
                    const eventDatacallSelfFunc735: any = [
                      {
                        type: 'callSelfFunc',
                        dataId: 166671258219248900,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '8695752',
                          pageJsonId: '8383459',
                          customFuncName: 'reloadPrivilegePage',
                        },
                        line_number: 1,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatacallSelfFunc735.params =
                      [
                        {
                          title: '输入框取值',
                          name: 'e',
                          value: '$e.target.value$',
                        },
                      ] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc735,
                      { e },
                      'callSelfFunc',
                      {
                        id: 'callSelfFunc',
                        name: 'callSelfFunc',
                        type: 'callSelfFunc',
                        platform: 'pc',
                      },
                    );
                  }}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'Input_650422_201996')
                  }
                  {...injectData}
                />
                <Input
                  name={'权限名称'}
                  size={'default'}
                  selfSpan={6}
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
                  fieldName={'privilegeName'}
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
                    id: 'Input_984985_229345',
                    uid: 'Input_984985_229345',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  onPressEnter={(e: any) => {
                    const eventDatacallSelfFunc736: any = [
                      {
                        type: 'callSelfFunc',
                        dataId: 166671259378888060,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '80086',
                          pageJsonId: '8383459',
                          customFuncName: 'reloadPrivilegePage',
                        },
                        line_number: 1,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatacallSelfFunc736.params =
                      [
                        {
                          title: '输入框取值',
                          name: 'e',
                          value: '$e.target.value$',
                        },
                      ] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc736,
                      { e },
                      'callSelfFunc',
                      {
                        id: 'callSelfFunc',
                        name: 'callSelfFunc',
                        type: 'callSelfFunc',
                        platform: 'pc',
                      },
                    );
                  }}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'Input_984985_229345')
                  }
                  {...injectData}
                />
                <Select
                  name={'权限类型'}
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
                  formItemIndex={2}
                  fieldName={'privilegeType'}
                  dataSource={getStaticDataSourceService(
                    data?.privilegeTypeList?.resultData,
                    'attrValueName',
                    'attrValue',
                  )}
                  $$componentItem={{
                    id: 'Select_953604',
                    uid: 'Select_953604',
                    type: 'Select',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Select_953604')}
                  {...injectData}
                />
                <View
                  className="View_View_756929_0062074"
                  name={'布局容器'}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_756929_0062074',
                    uid: 'View_756929_0062074',
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
                      formItemIndex: 3,
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
                    refs.setComponentRef(r, 'View_756929_0062074')
                  }
                  {...injectData}
                >
                  <Button
                    name={'查询'}
                    shape={null}
                    classification={'default'}
                    autoProcessFlow={false}
                    flowProcessResult={'common'}
                    iconPosition={'left'}
                    ghost={false}
                    block={false}
                    size={'default'}
                    type={'primary'}
                    labelCol={8}
                    wrapperCol={16}
                    hasIcon={false}
                    $$componentItem={{
                      id: 'Button_508625_7684763',
                      uid: 'Button_508625_7684763',
                      type: 'Button',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{ width: 'fit-content', margin: '0px 0px 0px 20px' }}
                    onClick={(e: any) => {
                      const eventDatasetDataSource252: any = [
                        {
                          type: 'setDataSource',
                          dataId: 167889393384981540,
                          options: {
                            compId: 'setDataSource',
                            compName: 'page',
                            id: '1322073',
                            pageJsonId: 49,
                            dataSourceId: 167868890039758200,
                            dataSourceName: 'privilegeParam',
                            dataSourceRelType: 'custom',
                            dataSourceReloadFilter: [],
                            dataSourceSetValue: [
                              {
                                attrId: '994448',
                                code: 'mode',
                                name: '处理模式',
                                type: 'string',
                                initialData: { type: 'static' },
                                value: { type: ['customize'], code: 'R' },
                              },
                              {
                                attrId: '4193153',
                                code: 'privilegeId',
                                name: '关联主键',
                                type: 'string',
                                initialData: { type: 'static' },
                                value: {
                                  type: ['EMPTY_DATA', 'string'],
                                  hideAttr: true,
                                  code: '$EMPTY_DATA.string$',
                                },
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
                      eventDatasetDataSource252.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(
                        eventDatasetDataSource252,
                        { e },
                        'setDataSource',
                        {
                          id: 'setDataSource',
                          name: 'setDataSource',
                          type: 'setDataSource',
                          platform: 'pc',
                        },
                      );
                      const eventDatacallSelfFunc737: any = [
                        {
                          type: 'callSelfFunc',
                          dataId: 167867804901210460,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '3309166',
                            pageJsonId: 49,
                            customFuncName: 'reloadPrivilegePage',
                          },
                          line_number: 2,
                          callback1: [],
                          callback2: [],
                        },
                      ];
                      eventDatacallSelfFunc737.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(
                        eventDatacallSelfFunc737,
                        { e },
                        'callSelfFunc',
                        {
                          id: 'callSelfFunc',
                          name: 'callSelfFunc',
                          type: 'callSelfFunc',
                          platform: 'pc',
                        },
                      );
                      const eventDatacallSelfFunc738: any = [
                        {
                          type: 'callSelfFunc',
                          dataId: 167889402837848640,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '186893',
                            pageJsonId: 49,
                            customFuncName: 'emptyBelow',
                          },
                          line_number: 3,
                          callback1: [],
                          callback2: [],
                        },
                      ];
                      eventDatacallSelfFunc738.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(
                        eventDatacallSelfFunc738,
                        { e },
                        'callSelfFunc',
                        {
                          id: 'callSelfFunc',
                          name: 'callSelfFunc',
                          type: 'callSelfFunc',
                          platform: 'pc',
                        },
                      );
                    }}
                    ref={(r: any) =>
                      refs.setComponentRef(r, 'Button_508625_7684763')
                    }
                    {...injectData}
                  />
                  <Button
                    name={'重置'}
                    shape={null}
                    classification={'default'}
                    autoProcessFlow={false}
                    flowProcessResult={'common'}
                    iconPosition={'left'}
                    ghost={false}
                    block={false}
                    size={'default'}
                    type={'default'}
                    hasIcon={false}
                    $$componentItem={{
                      id: 'Button_228714_24039',
                      uid: 'Button_228714_24039',
                      type: 'Button',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{ width: 'fit-content', margin: '0px 0px 0px 20px' }}
                    onClick={(e: any) => {
                      const forms173 = getFormByCompId(
                        'Form_7756987_259648',
                        refs,
                      );
                      // 支持循环容器中的表单重置
                      (Array.isArray(forms173) ? forms173 : [forms173]).forEach(
                        (form) => form?.resetFields(),
                      );
                    }}
                    ref={(r: any) =>
                      refs.setComponentRef(r, 'Button_228714_24039')
                    }
                    {...injectData}
                  />
                </View>
              </Form>
              <Table
                name={'表格'}
                columns={[
                  {
                    title: '权限ID',
                    key: 'privilegeId',
                    dataIndex: 'privilegeId',
                    className: '',
                    id: '563958',
                    width: null,
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
                    title: '权限编码',
                    key: 'privilegeCode',
                    dataIndex: 'privilegeCode',
                    className: 'divider',
                    id: '780887',
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
                    title: '权限名称',
                    key: 'privilegeName',
                    dataIndex: 'privilegeName',
                    className: 'divider',
                    id: '072541',
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
                    title: '权限类型',
                    key: 'privilegeType',
                    dataIndex: 'privilegeTypeName',
                    className: 'divider',
                    id: '303775',
                    width: 120,
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
                    key: 'createStaffName',
                    dataIndex: 'createStaffName',
                    className: 'divider',
                    id: '801393',
                    width: null,
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
                    key: 'createDate',
                    dataIndex: 'createDate',
                    className: 'divider',
                    id: '6366498',
                    width: null,
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
                rowKeyType={'specified'}
                editMode={'single'}
                selectType={'radio'}
                bordered={'segmentation'}
                size={'middle'}
                fixedAction={false}
                rowSelection={{ type: 'radio' }}
                showHead={false}
                showTotal={true}
                showSizeChanger={false}
                showQuickJumper={true}
                pageSizeOptions={'[5,10,20]'}
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
                extendNum={3}
                customNum={3}
                rowKey={'privilegeId'}
                rowActions={[
                  {
                    title: '编辑',
                    iconPos: 'left',
                    type: 'edit',
                    id: '965169',
                    checked: true,
                  },
                  {
                    title: '删除',
                    iconPos: 'left',
                    type: 'delete',
                    id: '5521378',
                    checked: true,
                  },
                ]}
                pageSize={data?.oaPrivilegePage?.resultData?.size}
                current={data?.oaPrivilegePage?.resultData?.current}
                total={data?.oaPrivilegePage?.resultData?.total}
                dataSource={data?.oaPrivilegePage?.resultData?.records}
                fieldName={'total'}
                dataSourceFromDataSourceConfig={
                  'data.oaPrivilegePage.resultData.records'
                }
                $$componentItem={{
                  id: 'Table_49_112',
                  uid: 'Table_49_112',
                  type: 'Table',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ margin: '12px 0px 0px 0px' }}
                onPageChange={(page: any, pageSize: any) => {
                  const eventDatavalidateCurrentForm86: any = [
                    {
                      type: 'validateCurrentForm',
                      dataId: 167877389495061280,
                      options: {
                        compId: 'Form_7756987_259648',
                        compLib: 'comm',
                        pageJsonId: 49,
                        compName: 'Form',
                        id: '85444',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'setDataSource',
                          dataId: 167889455367522940,
                          options: {
                            compId: 'setDataSource',
                            compName: 'page',
                            id: '878424',
                            pageJsonId: 49,
                            dataSourceId: 167868890039758200,
                            dataSourceName: 'privilegeParam',
                            dataSourceRelType: 'custom',
                            dataSourceReloadFilter: [],
                            dataSourceSetValue: [
                              {
                                attrId: '994448',
                                code: 'mode',
                                name: '处理模式',
                                type: 'string',
                                initialData: { type: 'static' },
                                value: { type: ['customize'], code: 'R' },
                              },
                              {
                                attrId: '4193153',
                                code: 'privilegeId',
                                name: '关联主键',
                                type: 'string',
                                initialData: { type: 'static' },
                                value: {
                                  type: ['EMPTY_DATA', 'string'],
                                  hideAttr: true,
                                  code: '$EMPTY_DATA.string$',
                                },
                              },
                            ],
                            operateType: 1,
                            onlySetPatch: true,
                            otherObjectArrayOptions: {},
                          },
                          line_number: 2,
                          callback1: [],
                          callback2: [],
                        },
                        {
                          type: 'reloadDataSource',
                          dataId: 167877390530139740,
                          options: {
                            compId: 'reloadDataSource',
                            compName: 'page',
                            id: '377453',
                            pageJsonId: 49,
                            dataSourceId: 167867612475848640,
                            dataSourceName: 'oaPrivilegePage',
                            dataSourceRelType: 'service',
                            dataSourceReloadFilter: [
                              {
                                attrId: '772787',
                                code: 'header',
                                name: '请求头参数',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                              },
                              {
                                attrId: '7572773',
                                code: 'path',
                                name: '请求路径参数',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                              },
                              {
                                attrId: '600455',
                                code: 'query',
                                name: 'URL 参数',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                              },
                              {
                                attrId: '571623',
                                code: 'body',
                                name: '请求体',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                                children: [
                                  {
                                    attrId: '0182055',
                                    code: 'privilegeCode',
                                    name: 'privilegeCode',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    value: {
                                      type: [
                                        'context',
                                        '$Form_7756987_259648$',
                                      ],
                                      code: 'privilegeCode',
                                    },
                                  },
                                  {
                                    attrId: '2729615',
                                    code: 'privilegeName',
                                    name: 'privilegeName',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    value: {
                                      type: [
                                        'context',
                                        '$Form_7756987_259648$',
                                      ],
                                      code: 'privilegeName',
                                    },
                                  },
                                  {
                                    attrId: '191864',
                                    code: 'pageNum',
                                    name: 'pageNum',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '1' },
                                    type: 'long',
                                    value: {
                                      type: ['context', '$page$'],
                                      hideAttr: true,
                                      code: '',
                                    },
                                  },
                                  {
                                    attrId: '4316822',
                                    code: 'privilegeType',
                                    name: 'privilegeType',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    value: {
                                      type: [
                                        'context',
                                        '$Form_7756987_259648$',
                                      ],
                                      code: 'privilegeType',
                                    },
                                  },
                                  {
                                    attrId: '512553',
                                    code: 'pageSize',
                                    name: 'pageSize',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '5' },
                                    type: 'long',
                                    value: {
                                      type: ['context', '$pageSize$'],
                                      hideAttr: true,
                                      code: '',
                                    },
                                  },
                                ],
                              },
                            ],
                            dataSourceSetValue: [
                              {
                                attrId: '324366',
                                code: 'resultCode',
                                name: 'resultCode',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '499158',
                                code: 'resultMsgCode',
                                name: 'resultMsgCode',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '50746',
                                code: 'resultMsg',
                                name: 'resultMsg',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '951028',
                                code: 'resultData',
                                name: 'resultData',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'object',
                                children: [
                                  {
                                    attrId: '238608',
                                    code: 'maxLimit',
                                    name: 'maxLimit',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '168607',
                                    code: 'total',
                                    name: 'total',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                  },
                                  {
                                    attrId: '0999383',
                                    code: 'current',
                                    name: 'current',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                  },
                                  {
                                    attrId: '066807',
                                    code: 'hitCount',
                                    name: 'hitCount',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'boolean',
                                  },
                                  {
                                    attrId: '033628',
                                    code: 'size',
                                    name: 'size',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'long',
                                  },
                                  {
                                    attrId: '56364804',
                                    code: 'optimizeCountSql',
                                    name: 'optimizeCountSql',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'boolean',
                                  },
                                  {
                                    attrId: '039231',
                                    code: 'orders',
                                    name: 'orders',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'fieldArray',
                                    children: [
                                      {
                                        attrId: '836766',
                                        code: 'listItem',
                                        name: '列表元素',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'object',
                                      },
                                    ],
                                  },
                                  {
                                    attrId: '08458',
                                    code: 'countId',
                                    name: 'countId',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '276807',
                                    code: 'isSearchCount',
                                    name: 'isSearchCount',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'boolean',
                                  },
                                  {
                                    attrId: '98503',
                                    code: 'records',
                                    name: 'records',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'objectArray',
                                    children: [
                                      {
                                        attrId: '981233',
                                        code: 'privilegeType',
                                        name: 'privilegeType',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '3745',
                                        code: 'privilegeTypeName',
                                        name: '新增节点',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '734144',
                                        code: 'statusCd',
                                        name: 'statusCd',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '76862',
                                        code: 'remark',
                                        name: 'remark',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '435668',
                                        code: 'createDate',
                                        name: 'createDate',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '141696',
                                        code: 'createStaff',
                                        name: 'createStaff',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '0981156',
                                        code: 'updateStaff',
                                        name: 'updateStaff',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '7913758',
                                        code: 'createStaffName',
                                        name: 'createStaffName',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '920908',
                                        code: 'updateDate',
                                        name: 'updateDate',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '410171',
                                        code: 'privilegeId',
                                        name: 'privilegeId',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'long',
                                      },
                                      {
                                        attrId: '485127',
                                        code: 'privilegeDesc',
                                        name: 'privilegeDesc',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '807932',
                                        code: 'privilegeName',
                                        name: 'privilegeName',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '4065437',
                                        code: 'privilegeCode',
                                        name: 'privilegeCode',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                            otherObjectArrayOptions: {},
                          },
                          line_number: 3,
                          callback1: [],
                          callback2: [],
                        },
                        {
                          type: 'callSelfFunc',
                          dataId: 167878081320113660,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '673643',
                            pageJsonId: 49,
                            customFuncName: 'emptyBelow',
                          },
                          line_number: 4,
                          callback1: [],
                          callback2: [],
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatavalidateCurrentForm86.params =
                    [
                      {
                        title: '当前页码取值',
                        name: 'page',
                        value: '$page$',
                        attrType: 'number',
                      },
                      {
                        title: '当前页尺寸',
                        name: 'pageSize',
                        value: '$pageSize$',
                        attrType: 'number',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatavalidateCurrentForm86,
                    { page, pageSize },
                    'validateCurrentForm',
                    {
                      id: 'validateCurrentForm',
                      name: 'validateCurrentForm',
                      type: 'validateCurrentForm',
                      platform: 'pc',
                    },
                  );
                }}
                onRowEdit={(rowId: any, row: any, index: any) => {
                  const eventDataclearTableSelected14: any = [
                    {
                      type: 'clearTableSelected',
                      dataId: 167878285606617470,
                      options: {
                        compId: 'Table_49_112',
                        compLib: 'comm',
                        pageJsonId: 49,
                        compName: 'Table',
                        id: '841792',
                      },
                      line_number: 1,
                    },
                  ];
                  eventDataclearTableSelected14.params =
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
                    eventDataclearTableSelected14,
                    { rowId, row, index },
                    'clearTableSelected',
                    {
                      id: 'clearTableSelected',
                      name: 'clearTableSelected',
                      type: 'clearTableSelected',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDataSource253: any = [
                    {
                      type: 'setDataSource',
                      dataId: 167893625977326460,
                      options: {
                        compId: 'setDataSource',
                        compName: 'page',
                        id: '486842',
                        pageJsonId: 49,
                        dataSourceId: 167893623883325400,
                        dataSourceName: 'fromEdit',
                        dataSourceRelType: 'custom',
                        dataSourceReloadFilter: [],
                        dataSourceSetValue: [
                          {
                            attrId: '194532',
                            code: 'flag',
                            name: '属性',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: { type: ['customize'], code: 'Y' },
                          },
                        ],
                        operateType: 1,
                        onlySetPatch: true,
                        otherObjectArrayOptions: {},
                      },
                      line_number: 2,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatasetDataSource253.params =
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
                    eventDatasetDataSource253,
                    { rowId, row, index },
                    'setDataSource',
                    {
                      id: 'setDataSource',
                      name: 'setDataSource',
                      type: 'setDataSource',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetSelectedRowKeys2: any = [
                    {
                      type: 'setSelectedRowKeys',
                      dataId: 167878286624241760,
                      options: {
                        compId: 'Table_49_112',
                        compLib: 'comm',
                        pageJsonId: 49,
                        compName: 'Table',
                        id: '3571796',
                        value: '$row$',
                      },
                      line_number: 3,
                      callback1: [],
                    },
                  ];
                  eventDatasetSelectedRowKeys2.params =
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
                    eventDatasetSelectedRowKeys2,
                    { rowId, row, index },
                    'setSelectedRowKeys',
                    {
                      id: 'setSelectedRowKeys',
                      name: 'setSelectedRowKeys',
                      type: 'setSelectedRowKeys',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDataSource254: any = [
                    {
                      type: 'setDataSource',
                      dataId: 167868898822332740,
                      options: {
                        compId: 'setDataSource',
                        compName: 'page',
                        id: '478755',
                        pageJsonId: 49,
                        dataSourceId: 167868890039758200,
                        dataSourceName: 'privilegeParam',
                        dataSourceRelType: 'custom',
                        dataSourceReloadFilter: [],
                        dataSourceSetValue: [
                          {
                            attrId: '994448',
                            code: 'mode',
                            name: '处理模式',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: { type: ['customize'], code: 'U' },
                          },
                          {
                            attrId: '4193153',
                            code: 'privilegeId',
                            name: '关联主键',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: { type: ['context', '$rowId$'], code: '' },
                          },
                        ],
                        operateType: 1,
                        onlySetPatch: true,
                        otherObjectArrayOptions: {},
                      },
                      line_number: 4,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatasetDataSource254.params =
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
                    eventDatasetDataSource254,
                    { rowId, row, index },
                    'setDataSource',
                    {
                      id: 'setDataSource',
                      name: 'setDataSource',
                      type: 'setDataSource',
                      platform: 'pc',
                    },
                  );
                  const eventDatacallSelfFunc739: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 167868916168773470,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '227185',
                        pageJsonId: 49,
                        customFuncName: 'showPrivilegeDetail',
                        customFuncParams: '$row$',
                      },
                      line_number: 5,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc739.params =
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
                    eventDatacallSelfFunc739,
                    { rowId, row, index },
                    'callSelfFunc',
                    {
                      id: 'callSelfFunc',
                      name: 'callSelfFunc',
                      type: 'callSelfFunc',
                      platform: 'pc',
                    },
                  );
                  const eventDatacallSelfFunc740: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 167870164494809200,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '858941',
                        pageJsonId: 49,
                        customFuncName: 'reloadPrivilegeRolePage',
                      },
                      line_number: 6,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc740.params =
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
                    eventDatacallSelfFunc740,
                    { rowId, row, index },
                    'callSelfFunc',
                    {
                      id: 'callSelfFunc',
                      name: 'callSelfFunc',
                      type: 'callSelfFunc',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetVisible31: any = [
                    {
                      type: 'setVisible',
                      dataId: 167893650298911740,
                      options: {
                        compId: 'Button_508625_7684763_98176_283668',
                        compLib: 'comm',
                        pageJsonId: 49,
                        compName: 'Button',
                        id: '754353',
                        visible: 'true',
                      },
                      line_number: 7,
                    },
                  ];
                  eventDatasetVisible31.params =
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
                    eventDatasetVisible31,
                    { rowId, row, index },
                    'setVisible',
                    {
                      id: 'setVisible',
                      name: 'setVisible',
                      type: 'setVisible',
                      platform: 'pc',
                    },
                  );
                }}
                onRowDelete={(rowId: any, row: any, index: any) => {
                  const eventDatagetTableSelectedKey82: any = [
                    {
                      type: 'getTableSelectedKey',
                      dataId: 167869064810584860,
                      options: {
                        compId: 'Table_49_112',
                        compLib: 'comm',
                        pageJsonId: 49,
                        compName: 'Table',
                        id: '5465822',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'showModal',
                          dataId: 167869417141981920,
                          options: {
                            compId: 'showModal',
                            compName: 'page',
                            id: '928873',
                            pageJsonId: 49,
                            type: 'confirm',
                            title: '删除确认',
                            content: '您确定要删除该权限信息吗？',
                            okText: '确认',
                            cancelText: '取消',
                          },
                          line_number: 2,
                          callback1: [
                            {
                              type: 'apiRequest',
                              dataId: 167869417141973600,
                              options: {
                                compId: 'apiRequest',
                                compName: 'system',
                                id: '6134432',
                                pageJsonId: 49,
                                sync: false,
                                actionTitle: '',
                                method: 'post',
                                url: '/app/rhin/gateway/callRhinEngine',
                                _capabilityCode: 'delDcOaPrivilegeById',
                                _apiCode: 'delDcOaPrivilegeById',
                                _source: 'rhin',
                                _serviceId: '952459387318861824',
                                _serviceTitle:
                                  '删除用户权限信息--tzp: delDcOaPrivilegeById',
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
                                    dataKey: '6134432_header',
                                  },
                                  {
                                    code: 'path',
                                    name: '请求路径参数',
                                    attrType: 'object',
                                    children: [
                                      {
                                        code: 'dcOaPrivilegeId',
                                        name: '权限主键',
                                        attrType: 'field',
                                        type: 'long',
                                        mustFlag: 'T',
                                        defaultValue: '',
                                        _id: 'path.dcOaPrivilegeId',
                                        compType: 'Input',
                                        parents: ['path'],
                                        id: 'path.dcOaPrivilegeId',
                                        dataKey: '6134432_path.dcOaPrivilegeId',
                                        value: {
                                          type: ['context', '$rowId$'],
                                          code: '',
                                        },
                                      },
                                    ],
                                    _id: 'path',
                                    compType: 'Input',
                                    parents: [],
                                    id: 'path',
                                    dataKey: '6134432_path',
                                  },
                                  {
                                    code: 'query',
                                    name: 'URL 参数',
                                    attrType: 'object',
                                    _id: 'query',
                                    compType: 'Input',
                                    parents: [],
                                    id: 'query',
                                    dataKey: '6134432_query',
                                  },
                                  {
                                    code: 'body',
                                    name: '请求体',
                                    attrType: 'object',
                                    _id: 'body',
                                    compType: 'Input',
                                    parents: [],
                                    id: 'body',
                                    dataKey: '6134432_body',
                                  },
                                ],
                              },
                              line_number: 3,
                              callback1: [
                                {
                                  type: 'ifelse',
                                  condition: [
                                    {
                                      condId: '527096',
                                      options: {
                                        useManual: true,
                                        useObject: false,
                                        context: '$reply_6134432.resultCode$',
                                        operate: '==',
                                        manualValue: '0',
                                      },
                                      conditionType: 'checkContextValue',
                                      objType: 'system',
                                      objId: 'sys',
                                    },
                                  ],
                                  dataId: 167869438034742980,
                                  elseIfs: [],
                                  line_number: 4,
                                  callback1: [
                                    {
                                      type: 'showMessage',
                                      dataId: 167869440608205020,
                                      options: {
                                        compId: 'showMessage',
                                        compName: 'system',
                                        id: '399584',
                                        pageJsonId: 49,
                                        type: 'success',
                                        value: '删除成功',
                                      },
                                      line_number: 5,
                                    },
                                    {
                                      type: 'setDataSource',
                                      dataId: 167889451380325280,
                                      options: {
                                        compId: 'setDataSource',
                                        compName: 'page',
                                        id: '4240077',
                                        pageJsonId: 49,
                                        dataSourceId: 167868890039758200,
                                        dataSourceName: 'privilegeParam',
                                        dataSourceRelType: 'custom',
                                        dataSourceReloadFilter: [],
                                        dataSourceSetValue: [
                                          {
                                            attrId: '994448',
                                            code: 'mode',
                                            name: '处理模式',
                                            type: 'string',
                                            initialData: { type: 'static' },
                                            value: {
                                              type: ['customize'],
                                              code: 'R',
                                            },
                                          },
                                          {
                                            attrId: '4193153',
                                            code: 'privilegeId',
                                            name: '关联主键',
                                            type: 'string',
                                            initialData: { type: 'static' },
                                            value: {
                                              type: ['EMPTY_DATA', 'string'],
                                              hideAttr: true,
                                              code: '$EMPTY_DATA.string$',
                                            },
                                          },
                                        ],
                                        operateType: 1,
                                        onlySetPatch: true,
                                        otherObjectArrayOptions: {},
                                      },
                                      line_number: 6,
                                      callback1: [],
                                      callback2: [],
                                    },
                                    {
                                      type: 'callSelfFunc',
                                      dataId: 167869442010607550,
                                      options: {
                                        compId: 'callSelfFunc',
                                        compName: 'system',
                                        id: '47353',
                                        pageJsonId: 49,
                                        customFuncName: 'reloadPrivilegePage',
                                      },
                                      line_number: 7,
                                      callback1: [],
                                      callback2: [],
                                    },
                                    {
                                      type: 'callSelfFunc',
                                      dataId: 167878497905574700,
                                      options: {
                                        compId: 'callSelfFunc',
                                        compName: 'system',
                                        id: '5374277',
                                        pageJsonId: 49,
                                        customFuncName: 'emptyBelow',
                                      },
                                      line_number: 8,
                                      callback1: [],
                                      callback2: [],
                                    },
                                  ],
                                },
                              ],
                              callback2: [],
                            },
                          ],
                          callback2: [],
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatagetTableSelectedKey82.params =
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
                    eventDatagetTableSelectedKey82,
                    { rowId, row, index },
                    'getTableSelectedKey',
                    {
                      id: 'getTableSelectedKey',
                      name: 'getTableSelectedKey',
                      type: 'getTableSelectedKey',
                      platform: 'pc',
                    },
                  );
                }}
                onSelectChange={(selectedRowKeys: any, selectedRows: any) => {
                  const eventDataifelse533: any = [
                    {
                      type: 'ifelse',
                      condition: [
                        {
                          condId: '800641',
                          options: {
                            useManual: true,
                            useObject: false,
                            context: '$data.fromEdit.flag$',
                            operate: '==',
                            manualValue: 'Y',
                          },
                          conditionType: 'checkContextValue',
                          objType: 'system',
                          objId: 'sys',
                        },
                      ],
                      dataId: 167893630289004580,
                      elseIfs: [
                        {
                          dataName: 'elseIf',
                          dataId: 167893632284164400,
                          children: [
                            {
                              dataName: 'action',
                              dataId: 167893632999398850,
                              children: [
                                {
                                  dataName: 'callback',
                                  dataId: 167893632999330750,
                                  children: [],
                                  value: 'callback1',
                                  params: [],
                                  elseIfs: [],
                                },
                                {
                                  dataName: 'callback',
                                  dataId: 167893632999388830,
                                  children: [],
                                  value: 'callback2',
                                  params: [],
                                  elseIfs: [],
                                },
                              ],
                              todoOptions: [
                                'selectAllDataSource',
                                'dataSourceSetValue',
                                'onlySetPatch',
                              ],
                              options: {
                                compId: 'setDataSource',
                                compName: 'page',
                                id: '649254',
                                pageJsonId: 49,
                                dataSourceId: 167868890039758200,
                                dataSourceName: 'privilegeParam',
                                dataSourceRelType: 'custom',
                                dataSourceReloadFilter: [],
                                dataSourceSetValue: [
                                  {
                                    attrId: '994448',
                                    code: 'mode',
                                    name: '处理模式',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    value: { type: ['customize'], code: 'V' },
                                  },
                                  {
                                    attrId: '4193153',
                                    code: 'privilegeId',
                                    name: '关联主键',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    value: {
                                      type: ['context', '$selectedRowKeys[0]$'],
                                      code: '',
                                    },
                                  },
                                ],
                                operateType: 1,
                                onlySetPatch: true,
                                otherObjectArrayOptions: {},
                              },
                              actionObjId: 'setDataSource',
                              actionObjName: 'page',
                              value: 'setDataSource',
                              elseIfs: [],
                              line_number: 3,
                            },
                            {
                              dataName: 'action',
                              dataId: 167893633475483940,
                              children: [
                                {
                                  dataName: 'callback',
                                  dataId: 167893633475424320,
                                  children: [],
                                  value: 'callback1',
                                  params: [],
                                  elseIfs: [],
                                },
                                {
                                  dataName: 'callback',
                                  dataId: 167893633475427870,
                                  children: [],
                                  value: 'callback2',
                                  params: [],
                                  elseIfs: [],
                                },
                              ],
                              todoOptions: [
                                'customFuncName',
                                'customFuncParams',
                              ],
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '818642',
                                pageJsonId: 49,
                                customFuncName: 'showPrivilegeDetail',
                                customFuncParams: '$selectedRows[0]$',
                              },
                              actionObjId: 'callSelfFunc',
                              actionObjName: 'system',
                              value: 'callSelfFunc',
                              elseIfs: [],
                              line_number: 4,
                            },
                            {
                              dataName: 'action',
                              dataId: 167893634095439040,
                              children: [
                                {
                                  dataName: 'callback',
                                  dataId: 167893634095486080,
                                  children: [],
                                  value: 'callback1',
                                  params: [],
                                  elseIfs: [],
                                },
                                {
                                  dataName: 'callback',
                                  dataId: 167893634095448200,
                                  children: [],
                                  value: 'callback2',
                                  params: [],
                                  elseIfs: [],
                                },
                              ],
                              todoOptions: [
                                'customFuncName',
                                'customFuncParams',
                              ],
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '5925556',
                                pageJsonId: 49,
                                customFuncName: 'reloadPrivilegeRolePage',
                                customFuncParams: 'object',
                                paramsObj: { pageNum: '1' },
                                paramsObjKeyValueMap: { pageNum: '1' },
                              },
                              actionObjId: 'callSelfFunc',
                              actionObjName: 'system',
                              value: 'callSelfFunc',
                              elseIfs: [],
                              line_number: 5,
                            },
                            {
                              dataName: 'action',
                              dataId: 167893651463474240,
                              children: [],
                              todoOptions: ['visible', 'selectComp'],
                              options: {
                                compId: 'Button_508625_7684763_98176_283668',
                                compLib: 'comm',
                                pageJsonId: 49,
                                compName: 'Button',
                                id: '514009',
                                visible: 'true',
                              },
                              actionObjId: 'Button_508625_7684763_98176_283668',
                              actionObjName: 'Button',
                              value: 'setVisible',
                              compLib: 'comm',
                              line_number: 6,
                            },
                          ],
                          condition: [],
                          elseIfs: [],
                          callback: [
                            {
                              type: 'setDataSource',
                              dataId: 167893632999398850,
                              options: {
                                compId: 'setDataSource',
                                compName: 'page',
                                id: '649254',
                                pageJsonId: 49,
                                dataSourceId: 167868890039758200,
                                dataSourceName: 'privilegeParam',
                                dataSourceRelType: 'custom',
                                dataSourceReloadFilter: [],
                                dataSourceSetValue: [
                                  {
                                    attrId: '994448',
                                    code: 'mode',
                                    name: '处理模式',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    value: { type: ['customize'], code: 'V' },
                                  },
                                  {
                                    attrId: '4193153',
                                    code: 'privilegeId',
                                    name: '关联主键',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    value: {
                                      type: ['context', '$selectedRowKeys[0]$'],
                                      code: '',
                                    },
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
                              type: 'callSelfFunc',
                              dataId: 167893633475483940,
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '818642',
                                pageJsonId: 49,
                                customFuncName: 'showPrivilegeDetail',
                                customFuncParams: '$selectedRows[0]$',
                              },
                              line_number: 4,
                              callback1: [],
                              callback2: [],
                            },
                            {
                              type: 'callSelfFunc',
                              dataId: 167893634095439040,
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '5925556',
                                pageJsonId: 49,
                                customFuncName: 'reloadPrivilegeRolePage',
                                customFuncParams: 'object',
                                paramsObj: { pageNum: '1' },
                                paramsObjKeyValueMap: { pageNum: '1' },
                              },
                              line_number: 5,
                              callback1: [],
                              callback2: [],
                            },
                            {
                              type: 'setVisible',
                              dataId: 167893651463474240,
                              options: {
                                compId: 'Button_508625_7684763_98176_283668',
                                compLib: 'comm',
                                pageJsonId: 49,
                                compName: 'Button',
                                id: '514009',
                                visible: 'true',
                              },
                              line_number: 6,
                            },
                          ],
                        },
                      ],
                      line_number: 1,
                      callback1: [
                        {
                          type: 'setDataSource',
                          dataId: 167893636181758460,
                          options: {
                            compId: 'setDataSource',
                            compName: 'page',
                            id: '614689',
                            pageJsonId: 49,
                            dataSourceId: 167893623883325400,
                            dataSourceName: 'fromEdit',
                            dataSourceRelType: 'custom',
                            dataSourceReloadFilter: [],
                            dataSourceSetValue: [
                              {
                                attrId: '194532',
                                code: 'flag',
                                name: '属性',
                                type: 'string',
                                initialData: { type: 'static' },
                                value: { type: ['customize'], code: 'N' },
                              },
                            ],
                            operateType: 1,
                            onlySetPatch: true,
                            otherObjectArrayOptions: {},
                          },
                          line_number: 2,
                          callback1: [],
                          callback2: [],
                        },
                      ],
                    },
                  ];
                  eventDataifelse533.params =
                    [
                      {
                        title: '表格选中行id(单选)',
                        name: 'selectedRowKeys',
                        value: '$selectedRowKeys[0]$',
                      },
                      {
                        title: '表格选中行id(多选)',
                        name: 'selectedRowKeys',
                        value: '$selectedRowKeys$',
                        attrType: 'array',
                      },
                      {
                        title: '表格选中行数据(单选)',
                        name: 'selectedRows',
                        value: '$selectedRows[0]$',
                        attrType: 'object',
                      },
                      {
                        title: '表格选中行数据(多选)',
                        name: 'selectedRows',
                        value: '$selectedRows$',
                        attrType: 'objectArray',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDataifelse533,
                    { selectedRowKeys, selectedRows },
                    'ifelse',
                    {
                      id: 'ifelse',
                      name: 'ifelse',
                      type: 'ifelse',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Table_49_112')}
                {...injectData}
              />
            </Card>
          </View>
          <View
            className="View_View_278871"
            name={'布局容器'}
            $$componentItem={{
              id: 'View_278871',
              uid: 'View_278871',
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
              height: '100%',
              width: '100%',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_278871')}
            {...injectData}
          >
            <Tabs
              name={'标签页'}
              defaultActiveKey={'1'}
              type={'line'}
              animated={false}
              tabActiveKey={'1'}
              tabBarGutter={'4px'}
              tabPosition={'top'}
              size={'default'}
              $$componentItem={{
                id: 'Tabs_289434',
                uid: 'Tabs_289434',
                type: 'Tabs',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                width: '100%',
                margin: '0 0 16px 0',
                padding: '20px 20px 20px 20px',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Tabs_289434')}
              {...injectData}
            >
              <TabPane
                name={'表单标签子面板'}
                tab={'权限信息'}
                key={'1'}
                $$componentItem={{
                  id: 'TabPane_61107',
                  uid: 'TabPane_61107',
                  type: 'TabPane',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ minHeight: 40 }}
                ref={(r: any) => refs.setComponentRef(r, 'TabPane_61107')}
                {...injectData}
              >
                <View
                  className="View_View_49_21119"
                  name={'布局容器'}
                  $$componentItem={{
                    id: 'View_49_21119',
                    uid: 'View_49_21119',
                    type: 'View',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ width: '100%' }}
                  ref={(r: any) => refs.setComponentRef(r, 'View_49_21119')}
                  {...injectData}
                >
                  <Card
                    name={'表单面板'}
                    title={'采集状态详情'}
                    bordered={true}
                    size={'default'}
                    hasHeader={false}
                    hasIcon={true}
                    cardIconType={'middle'}
                    titleColor={'#1c242e'}
                    headerColor={'#ffffff'}
                    extendNum={3}
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
                      id: 'Card_49_21114',
                      uid: 'Card_49_21114',
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
                    ref={(r: any) => refs.setComponentRef(r, 'Card_49_21114')}
                    {...injectData}
                  >
                    <Form
                      name={'详情表单'}
                      colSpan={12}
                      labelCol={8}
                      wrapperCol={16}
                      colon={true}
                      layout={'horizontal'}
                      labelAlign={'right'}
                      header={'标题'}
                      colSpace={0}
                      rowSpace={16}
                      formCode={'Form_7756987'}
                      $$componentItem={{
                        id: 'Form_7756987_259648_631751',
                        uid: 'Form_7756987_259648_631751',
                        type: 'Form',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={true}
                      readOnly={false}
                      style={{ padding: '0px 0px 0px 0px' }}
                      ref={(r: any) =>
                        refs.setComponentRef(r, 'Form_7756987_259648_631751')
                      }
                      {...injectData}
                    >
                      <Input
                        name={'权限ID'}
                        size={'default'}
                        selfSpan={12}
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
                        fieldName={'privilegeId'}
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
                          id: 'Input_650422_201996_788381',
                          uid: 'Input_650422_201996_788381',
                          type: 'Input',
                          ...componentItem,
                        }}
                        disabled={true}
                        visible={true}
                        readOnly={false}
                        isFormRootChild={true}
                        ref={(r: any) =>
                          refs.setComponentRef(r, 'Input_650422_201996_788381')
                        }
                        {...injectData}
                      />
                      <Input
                        name={'创建人'}
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
                          id: 'Input_406219',
                          uid: 'Input_406219',
                          type: 'Input',
                          ...componentItem,
                        }}
                        disabled={true}
                        visible={true}
                        readOnly={false}
                        isFormRootChild={true}
                        ref={(r: any) =>
                          refs.setComponentRef(r, 'Input_406219')
                        }
                        {...injectData}
                      />
                      <Input
                        name={'权限名称'}
                        size={'default'}
                        selfSpan={12}
                        labelCol={8}
                        wrapperCol={16}
                        titleTip={'notext'}
                        tipLocation={'after'}
                        tipContent={''}
                        tipPlacement={'top'}
                        prefixIconPosition={'before'}
                        postfix={''}
                        postfixIconPosition={'before'}
                        required={true}
                        placeholder={'请输入'}
                        formItemIndex={2}
                        fieldName={'privilegeName'}
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
                          id: 'Input_984985_229345_5159784',
                          uid: 'Input_984985_229345_5159784',
                          type: 'Input',
                          ...componentItem,
                        }}
                        disabled={false}
                        visible={true}
                        readOnly={false}
                        isFormRootChild={true}
                        ref={(r: any) =>
                          refs.setComponentRef(r, 'Input_984985_229345_5159784')
                        }
                        {...injectData}
                      />
                      <Input
                        name={'创建时间'}
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
                        fieldName={'createDate'}
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
                          id: 'Input_104648',
                          uid: 'Input_104648',
                          type: 'Input',
                          ...componentItem,
                        }}
                        disabled={true}
                        visible={true}
                        readOnly={false}
                        isFormRootChild={true}
                        ref={(r: any) =>
                          refs.setComponentRef(r, 'Input_104648')
                        }
                        {...injectData}
                      />
                      <Input
                        name={'权限编码'}
                        size={'default'}
                        selfSpan={12}
                        labelCol={8}
                        wrapperCol={16}
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
                        fieldName={'privilegeCode'}
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
                          id: 'Input_650422_201996_788381_6178676',
                          uid: 'Input_650422_201996_788381_6178676',
                          type: 'Input',
                          ...componentItem,
                        }}
                        disabled={false}
                        visible={true}
                        readOnly={false}
                        isFormRootChild={true}
                        ref={(r: any) =>
                          refs.setComponentRef(
                            r,
                            'Input_650422_201996_788381_6178676',
                          )
                        }
                        {...injectData}
                      />
                      <Input
                        name={'修改人'}
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
                        formItemIndex={5}
                        fieldName={'updateStaff'}
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
                          id: 'Input_768435',
                          uid: 'Input_768435',
                          type: 'Input',
                          ...componentItem,
                        }}
                        disabled={true}
                        visible={true}
                        readOnly={false}
                        isFormRootChild={true}
                        ref={(r: any) =>
                          refs.setComponentRef(r, 'Input_768435')
                        }
                        {...injectData}
                      />
                      <Select
                        name={'权限类型'}
                        size={'default'}
                        selfSpan={12}
                        labelCol={8}
                        wrapperCol={16}
                        titleTip={'notext'}
                        tipLocation={'after'}
                        tipPlacement={'top'}
                        required={true}
                        filter={'none'}
                        classification={'default'}
                        placeholder={'请选择'}
                        formItemIndex={6}
                        fieldName={'privilegeType'}
                        dataSource={getStaticDataSourceService(
                          data?.privilegeTypeList?.resultData,
                          'attrValueName',
                          'attrValue',
                        )}
                        $$componentItem={{
                          id: 'Select_953604_583598',
                          uid: 'Select_953604_583598',
                          type: 'Select',
                          ...componentItem,
                        }}
                        disabled={false}
                        visible={true}
                        readOnly={false}
                        isFormRootChild={true}
                        ref={(r: any) =>
                          refs.setComponentRef(r, 'Select_953604_583598')
                        }
                        {...injectData}
                      />
                      <Input
                        name={'修改时间'}
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
                        formItemIndex={7}
                        fieldName={'updateDate'}
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
                          id: 'Input_825004',
                          uid: 'Input_825004',
                          type: 'Input',
                          ...componentItem,
                        }}
                        disabled={true}
                        visible={true}
                        readOnly={false}
                        isFormRootChild={true}
                        ref={(r: any) =>
                          refs.setComponentRef(r, 'Input_825004')
                        }
                        {...injectData}
                      />
                      <TextArea
                        name={'权限描述'}
                        selfSpan={24}
                        labelCol={'4'}
                        wrapperCol={20}
                        titleTip={'notext'}
                        tipLocation={'after'}
                        tipPlacement={'top'}
                        required={true}
                        placeholder={'请输入'}
                        formItemIndex={8}
                        fieldName={'privilegeDesc'}
                        $$componentItem={{
                          id: 'TextArea_7406107',
                          uid: 'TextArea_7406107',
                          type: 'TextArea',
                          ...componentItem,
                        }}
                        disabled={false}
                        visible={true}
                        readOnly={false}
                        isFormRootChild={true}
                        ref={(r: any) =>
                          refs.setComponentRef(r, 'TextArea_7406107')
                        }
                        {...injectData}
                      />
                    </Form>
                  </Card>
                  <View
                    className="View_View_30_1122_56129022_411221_7870947"
                    name={'布局容器'}
                    $$componentItem={{
                      id: 'View_30_1122_56129022_411221_7870947',
                      uid: 'View_30_1122_56129022_411221_7870947',
                      type: 'View',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={false}
                    readOnly={false}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '12px 0px 12px 0px',
                      width: '100%',
                      borderRadius: '0px 0px 2px 2px',
                      backgroundColor: '#ffffff',
                      boxShadow: '0px 1px 0px 0px #e7e8ea inset',
                    }}
                    ref={(r: any) =>
                      refs.setComponentRef(
                        r,
                        'View_30_1122_56129022_411221_7870947',
                      )
                    }
                    {...injectData}
                  >
                    <Button
                      name={'确定'}
                      iconPosition={'left'}
                      ghost={false}
                      block={false}
                      size={'default'}
                      classification={'default'}
                      type={'primary'}
                      autoProcessFlow={false}
                      flowProcessResult={'common'}
                      hasIcon={false}
                      $$componentItem={{
                        id: 'Button_30_121_490898_246542_8903187',
                        uid: 'Button_30_121_490898_246542_8903187',
                        type: 'Button',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={true}
                      readOnly={false}
                      style={{ margin: '0px 0px 0px 24px' }}
                      onClick={(e: any) => {
                        const eventDatacallSelfFunc741: any = [
                          {
                            type: 'callSelfFunc',
                            dataId: 167869307541150300,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '605284',
                              pageJsonId: 49,
                              customFuncName: 'savePrivilegeDetail',
                            },
                            line_number: 1,
                            callback1: [],
                            callback2: [],
                          },
                        ];
                        eventDatacallSelfFunc741.params =
                          [{ title: '事件对象', value: '$e$', name: 'e' }] ||
                          [];
                        CMDGenerator(
                          eventDatacallSelfFunc741,
                          { e },
                          'callSelfFunc',
                          {
                            id: 'callSelfFunc',
                            name: 'callSelfFunc',
                            type: 'callSelfFunc',
                            platform: 'pc',
                          },
                        );
                      }}
                      ref={(r: any) =>
                        refs.setComponentRef(
                          r,
                          'Button_30_121_490898_246542_8903187',
                        )
                      }
                      {...injectData}
                    />
                    <Button
                      name={'取消'}
                      shape={null}
                      classification={'default'}
                      autoProcessFlow={false}
                      flowProcessResult={'common'}
                      iconPosition={'left'}
                      ghost={false}
                      block={false}
                      size={'default'}
                      type={'default'}
                      hasIcon={false}
                      $$componentItem={{
                        id: 'Button_017222',
                        uid: 'Button_017222',
                        type: 'Button',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={true}
                      readOnly={false}
                      style={{
                        width: 'fit-content',
                        margin: '0px 0px 0px 10px',
                      }}
                      onClick={(e: any) => {
                        const eventDatacallSelfFunc742: any = [
                          {
                            type: 'callSelfFunc',
                            dataId: 167896546982623520,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '685176',
                              pageJsonId: 49,
                              customFuncName: 'emptyBelow',
                            },
                            line_number: 1,
                            callback1: [],
                            callback2: [],
                          },
                        ];
                        eventDatacallSelfFunc742.params =
                          [{ title: '事件对象', value: '$e$', name: 'e' }] ||
                          [];
                        CMDGenerator(
                          eventDatacallSelfFunc742,
                          { e },
                          'callSelfFunc',
                          {
                            id: 'callSelfFunc',
                            name: 'callSelfFunc',
                            type: 'callSelfFunc',
                            platform: 'pc',
                          },
                        );
                      }}
                      ref={(r: any) => refs.setComponentRef(r, 'Button_017222')}
                      {...injectData}
                    />
                  </View>
                </View>
              </TabPane>
              <TabPane
                name={'标签子面板'}
                tab={'关联角色'}
                key={'2'}
                $$componentItem={{
                  id: 'TabPane_27172808',
                  uid: 'TabPane_27172808',
                  type: 'TabPane',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ minHeight: 40 }}
                ref={(r: any) => refs.setComponentRef(r, 'TabPane_27172808')}
                {...injectData}
              >
                <VerticalView
                  name={'上下布局'}
                  $$componentItem={{
                    id: 'VerticalView_53096',
                    uid: 'VerticalView_53096',
                    type: 'VerticalView',
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
                  }}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'VerticalView_53096')
                  }
                  {...injectData}
                >
                  <View
                    className="View_View_3326182"
                    name={'布局容器'}
                    $$componentItem={{
                      id: 'View_3326182',
                      uid: 'View_3326182',
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
                      height: '0%',
                      width: '100%',
                    }}
                    ref={(r: any) => refs.setComponentRef(r, 'View_3326182')}
                    {...injectData}
                  >
                    <Form
                      name={'角色查询表单'}
                      colSpan={8}
                      labelCol={8}
                      wrapperCol={16}
                      colon={true}
                      layout={'horizontal'}
                      labelAlign={'right'}
                      header={'标题'}
                      colSpace={0}
                      rowSpace={16}
                      formCode={'Form_5336927'}
                      $$componentItem={{
                        id: 'Form_5336927',
                        uid: 'Form_5336927',
                        type: 'Form',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={true}
                      readOnly={false}
                      style={{ padding: '0px 0px 0px 0px' }}
                      ref={(r: any) => refs.setComponentRef(r, 'Form_5336927')}
                      {...injectData}
                    >
                      <Input
                        name={'角色编码'}
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
                        formItemIndex={0}
                        fieldName={'roleCode'}
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
                          id: 'Input_510699',
                          uid: 'Input_510699',
                          type: 'Input',
                          ...componentItem,
                        }}
                        disabled={false}
                        visible={true}
                        readOnly={false}
                        isFormRootChild={true}
                        onPressEnter={(e: any) => {
                          const eventDatacallSelfFunc746: any = [
                            {
                              type: 'callSelfFunc',
                              dataId: 167896497858459600,
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '058374',
                                pageJsonId: 49,
                                customFuncName: 'reloadPrivilegeRolePage',
                              },
                              line_number: 1,
                              callback1: [],
                              callback2: [],
                            },
                          ];
                          eventDatacallSelfFunc746.params =
                            [
                              {
                                title: '输入框取值',
                                name: 'e',
                                value: '$e.target.value$',
                              },
                            ] || [];
                          CMDGenerator(
                            eventDatacallSelfFunc746,
                            { e },
                            'callSelfFunc',
                            {
                              id: 'callSelfFunc',
                              name: 'callSelfFunc',
                              type: 'callSelfFunc',
                              platform: 'pc',
                            },
                          );
                        }}
                        ref={(r: any) =>
                          refs.setComponentRef(r, 'Input_510699')
                        }
                        {...injectData}
                      />
                      <Input
                        name={'角色名称'}
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
                        fieldName={'roleName'}
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
                          id: 'Input_0129142',
                          uid: 'Input_0129142',
                          type: 'Input',
                          ...componentItem,
                        }}
                        disabled={false}
                        visible={true}
                        readOnly={false}
                        isFormRootChild={true}
                        onPressEnter={(e: any) => {
                          const eventDatacallSelfFunc747: any = [
                            {
                              type: 'callSelfFunc',
                              dataId: 167896499530647500,
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '6728325',
                                pageJsonId: 49,
                                customFuncName: 'reloadPrivilegeRolePage',
                              },
                              line_number: 1,
                              callback1: [],
                              callback2: [],
                            },
                          ];
                          eventDatacallSelfFunc747.params =
                            [
                              {
                                title: '输入框取值',
                                name: 'e',
                                value: '$e.target.value$',
                              },
                            ] || [];
                          CMDGenerator(
                            eventDatacallSelfFunc747,
                            { e },
                            'callSelfFunc',
                            {
                              id: 'callSelfFunc',
                              name: 'callSelfFunc',
                              type: 'callSelfFunc',
                              platform: 'pc',
                            },
                          );
                        }}
                        ref={(r: any) =>
                          refs.setComponentRef(r, 'Input_0129142')
                        }
                        {...injectData}
                      />
                      <View
                        className="View_View_756929_0062074_7390883"
                        name={'布局容器'}
                        backgroundType={{
                          type: 'cleanColor',
                          color: undefined,
                        }}
                        $$componentItem={{
                          id: 'View_756929_0062074_7390883',
                          uid: 'View_756929_0062074_7390883',
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
                            formItemIndex: 2,
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
                          refs.setComponentRef(r, 'View_756929_0062074_7390883')
                        }
                        {...injectData}
                      >
                        <Button
                          name={'查询'}
                          shape={null}
                          classification={'default'}
                          autoProcessFlow={false}
                          flowProcessResult={'common'}
                          iconPosition={'left'}
                          ghost={false}
                          block={false}
                          size={'default'}
                          type={'primary'}
                          labelCol={8}
                          wrapperCol={16}
                          hasIcon={false}
                          $$componentItem={{
                            id: 'Button_508625_7684763_98176',
                            uid: 'Button_508625_7684763_98176',
                            type: 'Button',
                            ...componentItem,
                          }}
                          disabled={false}
                          visible={true}
                          readOnly={false}
                          style={{
                            width: 'fit-content',
                            margin: '0px 0px 0px 12px',
                          }}
                          onClick={(e: any) => {
                            const eventDatacallSelfFunc748: any = [
                              {
                                type: 'callSelfFunc',
                                dataId: 167867804901210460,
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '3309166',
                                  pageJsonId: 49,
                                  customFuncName: 'reloadPrivilegeRolePage',
                                },
                                line_number: 1,
                                callback1: [],
                                callback2: [],
                              },
                            ];
                            eventDatacallSelfFunc748.params =
                              [
                                { title: '事件对象', value: '$e$', name: 'e' },
                              ] || [];
                            CMDGenerator(
                              eventDatacallSelfFunc748,
                              { e },
                              'callSelfFunc',
                              {
                                id: 'callSelfFunc',
                                name: 'callSelfFunc',
                                type: 'callSelfFunc',
                                platform: 'pc',
                              },
                            );
                          }}
                          ref={(r: any) =>
                            refs.setComponentRef(
                              r,
                              'Button_508625_7684763_98176',
                            )
                          }
                          {...injectData}
                        />
                        <Button
                          name={'重置'}
                          shape={null}
                          classification={'default'}
                          autoProcessFlow={false}
                          flowProcessResult={'common'}
                          iconPosition={'left'}
                          ghost={false}
                          block={false}
                          size={'default'}
                          type={'default'}
                          hasIcon={false}
                          $$componentItem={{
                            id: 'Button_228714_24039_080445',
                            uid: 'Button_228714_24039_080445',
                            type: 'Button',
                            ...componentItem,
                          }}
                          disabled={false}
                          visible={true}
                          readOnly={false}
                          style={{
                            width: 'fit-content',
                            margin: '0px 0px 0px 12px',
                          }}
                          onClick={(e: any) => {
                            const forms175 = getFormByCompId(
                              'Form_5336927',
                              refs,
                            );
                            // 支持循环容器中的表单重置
                            (Array.isArray(forms175)
                              ? forms175
                              : [forms175]
                            ).forEach((form) => form?.resetFields());
                          }}
                          ref={(r: any) =>
                            refs.setComponentRef(
                              r,
                              'Button_228714_24039_080445',
                            )
                          }
                          {...injectData}
                        />
                        <Button
                          name={'新增'}
                          shape={null}
                          classification={'default'}
                          autoProcessFlow={false}
                          flowProcessResult={'common'}
                          iconPosition={'left'}
                          ghost={false}
                          block={false}
                          size={'default'}
                          type={'primary'}
                          labelCol={8}
                          wrapperCol={16}
                          hasIcon={false}
                          $$componentItem={{
                            id: 'Button_508625_7684763_98176_283668',
                            uid: 'Button_508625_7684763_98176_283668',
                            type: 'Button',
                            ...componentItem,
                          }}
                          disabled={false}
                          visible={false}
                          readOnly={false}
                          style={{
                            width: 'fit-content',
                            margin: '0px 0px 0px 12px',
                          }}
                          onClick={(e: any) => {
                            const eventDatashowCustomModal262: any = [
                              {
                                type: 'showCustomModal',
                                dataId: 167870979488057300,
                                options: {
                                  compId: 'showCustomModal',
                                  compName: 'page',
                                  id: '678858',
                                  pageJsonId: 49,
                                  modalname: '/privilegeNotHaveRolePopup',
                                  pageId: '952538378574790656',
                                  modalPath: '/privilegeNotHaveRolePopup',
                                  paramsObj: {
                                    bizId: '$data.privilegeParam.privilegeId$',
                                  },
                                  paramsObjKeyValueMap: {
                                    bizId: '$data.privilegeParam.privilegeId$',
                                  },
                                },
                                line_number: 1,
                                callback1: [
                                  {
                                    type: 'callSelfFunc',
                                    dataId: 167871003087258300,
                                    options: {
                                      compId: 'callSelfFunc',
                                      compName: 'system',
                                      id: '501129',
                                      pageJsonId: 49,
                                      customFuncName: 'reloadPrivilegeRolePage',
                                    },
                                    line_number: 2,
                                    callback1: [],
                                    callback2: [],
                                  },
                                ],
                                callback2: [],
                              },
                            ];
                            eventDatashowCustomModal262.params =
                              [
                                { title: '事件对象', value: '$e$', name: 'e' },
                              ] || [];
                            CMDGenerator(
                              eventDatashowCustomModal262,
                              { e },
                              'showCustomModal',
                              {
                                id: 'showCustomModal',
                                name: 'showCustomModal',
                                type: 'showCustomModal',
                                platform: 'pc',
                              },
                            );
                          }}
                          ref={(r: any) =>
                            refs.setComponentRef(
                              r,
                              'Button_508625_7684763_98176_283668',
                            )
                          }
                          {...injectData}
                        />
                      </View>
                    </Form>
                  </View>
                  <View
                    className="View_View_184463"
                    name={'布局容器'}
                    $$componentItem={{
                      id: 'View_184463',
                      uid: 'View_184463',
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
                      height: '100%',
                      width: '100%',
                    }}
                    ref={(r: any) => refs.setComponentRef(r, 'View_184463')}
                    {...injectData}
                  >
                    <Table
                      name={'角色表格'}
                      isFlexColumn={false}
                      extendNum={3}
                      adjustModel={'auto'}
                      pageSize={5}
                      tableTitle={'表格名称'}
                      headBtnNum={3}
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
                          title: '角色ID',
                          dataIndex: 'roleId',
                          key: 'column1',
                          className: '',
                          id: '1755783',
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
                          title: '角色编码',
                          dataIndex: 'roleCode',
                          key: 'column2',
                          className: 'divider',
                          id: '329886',
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
                          title: '角色名称',
                          dataIndex: 'roleName',
                          key: 'column3',
                          className: 'divider',
                          id: '923719',
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
                          dataIndex: 'createStaffName',
                          key: 'column4',
                          className: 'divider',
                          id: '225326',
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
                          dataIndex: 'createDate',
                          key: 'column5',
                          className: 'divider',
                          id: '7384615',
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
                      rowKeyType={'specified'}
                      editMode={'single'}
                      selectType={'checkbox'}
                      bordered={'segmentation'}
                      size={'middle'}
                      fixedAction={false}
                      rowSelection={undefined}
                      showHead={false}
                      showTotal={true}
                      showSizeChanger={false}
                      showQuickJumper={true}
                      pageSizeOptions={'[5,10,20]'}
                      customNum={3}
                      rowKey={'rolePrivilegeRelId'}
                      dataSource={''}
                      rowActions={[
                        {
                          title: '删除',
                          iconPos: 'left',
                          icon: { theme: 'outlined', type: 'delete' },
                          type: 'delete',
                          id: '254695',
                          checked: true,
                        },
                      ]}
                      extend={[]}
                      fieldName={'current$"'}
                      scroll={{ y: 240 }}
                      $$componentItem={{
                        id: 'Table_554268',
                        uid: 'Table_554268',
                        type: 'Table',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={true}
                      readOnly={false}
                      style={{
                        margin: '20px 0px 0px 0px',
                        flex: '',
                        width: '100%',
                      }}
                      onRowDelete={(rowId: any, row: any, index: any) => {
                        const eventDatagetTableSelectedKey83: any = [
                          {
                            type: 'getTableSelectedKey',
                            dataId: 167870205467546660,
                            options: {
                              compId: 'Table_49_112',
                              compLib: 'comm',
                              pageJsonId: 49,
                              compName: 'Table',
                              id: '6794225',
                            },
                            line_number: 1,
                            callback1: [
                              {
                                type: 'showModal',
                                dataId: 167870205467689920,
                                options: {
                                  compId: 'showModal',
                                  compName: 'page',
                                  id: '5357713',
                                  pageJsonId: 49,
                                  type: 'confirm',
                                  title: '删除确认',
                                  content: '您确定要删除该权限角色关联信息吗？',
                                  okText: '确认',
                                  cancelText: '取消',
                                },
                                line_number: 2,
                                callback1: [
                                  {
                                    type: 'apiRequest',
                                    dataId: 167870205467690140,
                                    options: {
                                      compId: 'apiRequest',
                                      compName: 'system',
                                      id: '5926084',
                                      pageJsonId: 49,
                                      sync: false,
                                      actionTitle: '',
                                      method: 'post',
                                      url: '/app/rhin/gateway/callRhinEngine',
                                      _capabilityCode:
                                        'delDcOaRolePrivilegeRelById',
                                      _apiCode: 'delDcOaRolePrivilegeRelById',
                                      _source: 'rhin',
                                      _serviceId: '952498283450941440',
                                      _serviceTitle:
                                        '删除角色权限关联关系--tzp: delDcOaRolePrivilegeRelById',
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
                                          dataKey: '5926084_header',
                                        },
                                        {
                                          code: 'path',
                                          name: '请求路径参数',
                                          attrType: 'object',
                                          children: [
                                            {
                                              code: 'dcOaRolePrivilegeRelId',
                                              name: '关联主键',
                                              attrType: 'field',
                                              type: 'long',
                                              mustFlag: 'T',
                                              defaultValue: '',
                                              _id: 'path.dcOaRolePrivilegeRelId',
                                              compType: 'Input',
                                              parents: ['path'],
                                              id: 'path.dcOaRolePrivilegeRelId',
                                              dataKey:
                                                '5926084_path.dcOaRolePrivilegeRelId',
                                              value: {
                                                type: ['context', '$rowId$'],
                                                code: '',
                                              },
                                            },
                                          ],
                                          _id: 'path',
                                          compType: 'Input',
                                          parents: [],
                                          id: 'path',
                                          dataKey: '5926084_path',
                                        },
                                        {
                                          code: 'query',
                                          name: 'URL 参数',
                                          attrType: 'object',
                                          _id: 'query',
                                          compType: 'Input',
                                          parents: [],
                                          id: 'query',
                                          dataKey: '5926084_query',
                                        },
                                        {
                                          code: 'body',
                                          name: '请求体',
                                          attrType: 'object',
                                          _id: 'body',
                                          compType: 'Input',
                                          parents: [],
                                          id: 'body',
                                          dataKey: '5926084_body',
                                        },
                                      ],
                                    },
                                    line_number: 3,
                                    callback1: [
                                      {
                                        type: 'ifelse',
                                        condition: [
                                          {
                                            condId: '968688',
                                            options: {
                                              useManual: true,
                                              context:
                                                '$reply_5926084.resultCode$',
                                              operate: '==',
                                              manualValue: '0',
                                            },
                                            conditionType: 'checkContextValue',
                                            objType: 'system',
                                            objId: 'sys',
                                          },
                                        ],
                                        dataId: 167870213299686460,
                                        elseIfs: [],
                                        line_number: 4,
                                        callback1: [
                                          {
                                            type: 'showMessage',
                                            dataId: 167870217693115800,
                                            options: {
                                              compId: 'showMessage',
                                              compName: 'system',
                                              id: '2891924',
                                              pageJsonId: 49,
                                              type: 'success',
                                              value: '删除成功',
                                            },
                                            line_number: 5,
                                          },
                                          {
                                            type: 'callSelfFunc',
                                            dataId: 167870618015090800,
                                            options: {
                                              compId: 'callSelfFunc',
                                              compName: 'system',
                                              id: '725948',
                                              pageJsonId: 49,
                                              customFuncName:
                                                'reloadPrivilegeRolePage',
                                            },
                                            line_number: 6,
                                            callback1: [],
                                            callback2: [],
                                          },
                                        ],
                                      },
                                    ],
                                    callback2: [],
                                  },
                                ],
                                callback2: [],
                              },
                            ],
                            callback2: [],
                          },
                        ];
                        eventDatagetTableSelectedKey83.params =
                          [
                            { title: '行id', name: 'rowId', value: '$rowId$' },
                            {
                              title: '行对象',
                              name: 'row',
                              value: '$row$',
                              attrType: 'object',
                            },
                            {
                              title: '行索引',
                              name: 'index',
                              value: '$index$',
                            },
                          ] || [];
                        CMDGenerator(
                          eventDatagetTableSelectedKey83,
                          { rowId, row, index },
                          'getTableSelectedKey',
                          {
                            id: 'getTableSelectedKey',
                            name: 'getTableSelectedKey',
                            type: 'getTableSelectedKey',
                            platform: 'pc',
                          },
                        );
                      }}
                      onPageChange={(page: any, pageSize: any) => {
                        const eventDatacallSelfFunc749: any = [
                          {
                            type: 'callSelfFunc',
                            dataId: 167877355410988860,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '765899',
                              pageJsonId: 49,
                              customFuncName: 'reloadPrivilegeRolePage',
                              customFuncParams: 'object',
                              paramsObj: { pageNum: '$page$' },
                              paramsObjKeyValueMap: { pageNum: '$page$' },
                            },
                            line_number: 1,
                            callback1: [],
                            callback2: [],
                          },
                        ];
                        eventDatacallSelfFunc749.params =
                          [
                            {
                              title: '当前页码取值',
                              name: 'page',
                              value: '$page$',
                              attrType: 'number',
                            },
                            {
                              title: '当前页尺寸',
                              name: 'pageSize',
                              value: '$pageSize$',
                              attrType: 'number',
                            },
                          ] || [];
                        CMDGenerator(
                          eventDatacallSelfFunc749,
                          { page, pageSize },
                          'callSelfFunc',
                          {
                            id: 'callSelfFunc',
                            name: 'callSelfFunc',
                            type: 'callSelfFunc',
                            platform: 'pc',
                          },
                        );
                      }}
                      ref={(r: any) => refs.setComponentRef(r, 'Table_554268')}
                      {...injectData}
                    />
                  </View>
                </VerticalView>
              </TabPane>
            </Tabs>
          </View>
        </VerticalView>
      </View>
    </div>
  );
};

export default withPageHOC(OaPrivilegeManage$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
