// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, Input, Button, Select, Table } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const pageId = '914478259933954048';
const Yingxiaoanfangweixuanzhe$$Modal: React.FC<PageProps> = ({
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
  const query = (options_84995934: any) => {
    const eventDatasetLoading38: any = [
      {
        type: 'setLoading',
        dataId: 166968857519508400,
        options: {
          compId: 'Table_37209506_915744_611823',
          compLib: 'comm',
          pageJsonId: '541575',
          compName: 'Table',
          id: '307696',
          loading: true,
        },
        line_number: 1,
      },
    ];
    eventDatasetLoading38.params =
      [
        {
          title: '事件入参',
          name: 'options_84995934',
          value: '$options_84995934$',
        },
      ] || [];
    CMDGenerator(eventDatasetLoading38, { options_84995934 }, 'setLoading', {
      id: 'setLoading',
      name: 'setLoading',
      type: 'setLoading',
      platform: 'undefined',
    });
    const eventDatareloadDataSource52: any = [
      {
        type: 'reloadDataSource',
        dataId: 166968858262045400,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '285789',
          pageJsonId: '541575',
          dataSourceId: 166925459865808000,
          dataSourceName: 'saleConfigList',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '133593',
              code: 'header',
              name: '请求头参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
            },
            {
              attrId: '6786983',
              code: 'path',
              name: '请求路径参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
            },
            {
              attrId: '7376077',
              code: 'query',
              name: 'URL 参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
            },
            {
              attrId: '110724',
              code: 'body',
              name: '请求体',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              children: [
                {
                  attrId: '6752181',
                  code: 'saleDesc',
                  name: '新增节点',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  value: {
                    type: ['form', 'Form_126816_084922', 'getFieldsValue'],
                    code: 'saleDesc',
                  },
                },
                {
                  attrId: '294087',
                  code: 'saleCode',
                  name: 'saleCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  value: {
                    type: ['form', 'Form_126816_084922', 'getFieldsValue'],
                    code: 'saleCode',
                  },
                },
                {
                  attrId: '026035',
                  code: 'pageSize',
                  name: 'pageSize',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                  value: { type: ['customize'], code: '5' },
                },
                {
                  attrId: '229813',
                  code: 'pageNum',
                  name: 'pageNum',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                  value: {
                    type: ['context', '$options_84995934$'],
                    code: 'pageNum',
                  },
                },
                {
                  attrId: '7771103',
                  code: 'saleName',
                  name: 'saleName',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  value: {
                    type: ['form', 'Form_126816_084922', 'getFieldsValue'],
                    code: 'saleName',
                  },
                },
                {
                  attrId: '610559',
                  code: 'lanId',
                  name: 'lanId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  value: {
                    type: ['form', 'Form_126816_084922', 'getFieldsValue'],
                    code: 'lanId',
                  },
                },
                {
                  attrId: '855995',
                  code: 'saleStatus',
                  name: 'saleStatus',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  value: {
                    type: ['form', 'Form_126816_084922', 'getFieldsValue'],
                    code: 'saleStatus',
                  },
                },
              ],
            },
          ],
          dataSourceSetValue: [
            {
              attrId: '363393',
              code: 'resultCode',
              name: 'resultCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '1189698',
              code: 'resultMsgCode',
              name: 'resultMsgCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '0879307',
              code: 'resultMsg',
              name: 'resultMsg',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '699439',
              code: 'resultData',
              name: 'resultData',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'object',
              children: [
                {
                  attrId: '4992505',
                  code: 'total',
                  name: 'total',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '7533176',
                  code: 'current',
                  name: 'current',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '19636276',
                  code: 'hitCount',
                  name: 'hitCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '4267135',
                  code: 'size',
                  name: 'size',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '940138',
                  code: 'optimizeCountSql',
                  name: 'optimizeCountSql',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '732748',
                  code: 'maxLimit',
                  name: 'maxLimit',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '063129',
                  code: 'orders',
                  name: 'orders',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'fieldArray',
                  children: [
                    {
                      attrId: '718951',
                      code: 'listItem',
                      name: '列表元素',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'object',
                    },
                  ],
                },
                {
                  attrId: '651332',
                  code: 'countId',
                  name: 'countId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '5578116',
                  code: 'isSearchCount',
                  name: 'isSearchCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '896333',
                  code: 'records',
                  name: 'records',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'objectArray',
                  children: [
                    {
                      attrId: '646067',
                      code: 'saleCfgId',
                      name: 'saleCfgId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                    },
                    {
                      attrId: '699076',
                      code: 'createDate',
                      name: 'createDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '349686',
                      code: 'updateStaff',
                      name: 'updateStaff',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '297238',
                      code: 'updateDate',
                      name: 'updateDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '001825',
                      code: 'saleDesc',
                      name: 'saleDesc',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '680603',
                      code: 'saleCode',
                      name: 'saleCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '467772538',
                      code: 'statusCd',
                      name: 'statusCd',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '236534',
                      code: 'remark',
                      name: 'remark',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '112426',
                      code: 'lanId',
                      name: 'lanId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '225749',
                      code: 'saleStatus',
                      name: 'saleStatus',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '6997805',
                      code: 'createStaff',
                      name: 'createStaff',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '096018',
                      code: 'createStaffName',
                      name: 'createStaffName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '458328',
                      code: 'saleName',
                      name: 'saleName',
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
        line_number: 2,
        callback1: [
          {
            type: 'setLoading',
            dataId: 166968861547153630,
            options: {
              compId: 'Table_37209506_915744_611823',
              compLib: 'comm',
              pageJsonId: '541575',
              compName: 'Table',
              id: '268076',
              loading: false,
            },
            line_number: 3,
          },
        ],
        callback2: [],
      },
    ];
    eventDatareloadDataSource52.params =
      [
        {
          title: '事件入参',
          name: 'options_84995934',
          value: '$options_84995934$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource52,
      { options_84995934 },
      'reloadDataSource',
      {
        id: 'reloadDataSource',
        name: 'reloadDataSource',
        type: 'reloadDataSource',
        platform: 'undefined',
      },
    );
  };
  const cleanQuery = (options_2744055: any) => {
    const eventDataclearTableSelected5: any = [
      {
        type: 'clearTableSelected',
        dataId: 166927647236891200,
        options: {
          compId: 'Table_37209506_915744',
          compLib: 'comm',
          pageJsonId: '541575',
          compName: 'Table',
          id: '859121',
        },
        line_number: 1,
      },
    ];
    eventDataclearTableSelected5.params =
      [
        {
          title: '事件入参',
          name: 'options_2744055',
          value: '$options_2744055$',
        },
      ] || [];
    CMDGenerator(
      eventDataclearTableSelected5,
      { options_2744055 },
      'clearTableSelected',
      {
        id: 'clearTableSelected',
        name: 'clearTableSelected',
        type: 'clearTableSelected',
        platform: 'undefined',
      },
    );
    const eventDatasetLoading39: any = [
      {
        type: 'setLoading',
        dataId: 166968864136681150,
        options: {
          compId: 'Table_37209506_915744_611823',
          compLib: 'comm',
          pageJsonId: '541575',
          compName: 'Table',
          id: '3823665',
          loading: true,
        },
        line_number: 2,
      },
    ];
    eventDatasetLoading39.params =
      [
        {
          title: '事件入参',
          name: 'options_2744055',
          value: '$options_2744055$',
        },
      ] || [];
    CMDGenerator(eventDatasetLoading39, { options_2744055 }, 'setLoading', {
      id: 'setLoading',
      name: 'setLoading',
      type: 'setLoading',
      platform: 'undefined',
    });
    const eventDatacallSelfFunc8: any = [
      {
        type: 'callSelfFunc',
        dataId: 166927649782531840,
        options: {
          compId: 'callSelfFunc',
          compName: 'system',
          id: '833099',
          pageJsonId: '541575',
          customFuncName: 'query',
          customFuncParams: 'object',
          paramsObj: { pageNum: '$options_2744055.pageNum$', pageSize: '5' },
          paramsObjKeyValueMap: {
            pageNum: '$options_2744055.pageNum$',
            pageSize: '5',
          },
        },
        line_number: 3,
        callback1: [
          {
            type: 'setLoading',
            dataId: 166968864982875200,
            options: {
              compId: 'Table_37209506_915744_611823',
              compLib: 'comm',
              pageJsonId: '541575',
              compName: 'Table',
              id: '50406',
              loading: false,
            },
            line_number: 4,
          },
        ],
        callback2: [],
      },
    ];
    eventDatacallSelfFunc8.params =
      [
        {
          title: '事件入参',
          name: 'options_2744055',
          value: '$options_2744055$',
        },
      ] || [];
    CMDGenerator(eventDatacallSelfFunc8, { options_2744055 }, 'callSelfFunc', {
      id: 'callSelfFunc',
      name: 'callSelfFunc',
      type: 'callSelfFunc',
      platform: 'undefined',
    });
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    query,
    cleanQuery,
  }));

  const onOk = () => {
    const eventDatagetTableSelected10: any = [
      {
        type: 'getTableSelected',
        dataId: 166963564800648480,
        options: {
          compId: 'Table_37209506_915744_611823',
          compLib: 'comm',
          pageJsonId: '541575',
          compName: 'Table',
          id: '526797',
        },
        line_number: 1,
        callback1: [
          {
            type: 'ifelse',
            condition: [
              {
                condId: '996607',
                options: {
                  context: '$selectedRows_526797[0]$',
                  operate: 'notEmpty',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 166963565185930300,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 166963566219596030,
                children: [
                  {
                    dataName: 'action',
                    dataId: 166963567032356580,
                    children: [],
                    todoOptions: ['msgType', 'value'],
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '1761629',
                      pageJsonId: '541575',
                      type: 'warn',
                      value: '请选择表格数据后，点击确认按钮',
                    },
                    actionObjId: 'showMessage',
                    actionObjName: 'system',
                    value: 'showMessage',
                    elseIfs: [],
                    line_number: 13,
                  },
                ],
                condition: [],
                elseIfs: [],
                callback: [
                  {
                    type: 'showMessage',
                    dataId: 166963567032356580,
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '1761629',
                      pageJsonId: '541575',
                      type: 'warn',
                      value: '请选择表格数据后，点击确认按钮',
                    },
                    line_number: 13,
                  },
                ],
              },
            ],
            line_number: 2,
            callback1: [
              {
                type: 'setLoading',
                dataId: 166968708816776540,
                options: {
                  compId: 'View_541575_1_991005_958964',
                  compLib: 'custom',
                  pageJsonId: '541575',
                  compName: 'View',
                  id: '905743',
                  loading: true,
                },
                line_number: 3,
              },
              {
                type: 'apiRequest',
                dataId: 166968681661731000,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '209281',
                  pageJsonId: '541575',
                  sync: false,
                  method: 'post',
                  url: '/app/rhin/gateway/callRhinEngine',
                  _capabilityCode: 'queryMarketCaseInfo',
                  _apiCode: 'queryMarketCaseInfo',
                  _source: 'rhin',
                  _serviceId: '896680797913452544',
                  _serviceTitle: '查询营销案信息-hdb: queryMarketCaseInfo',
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
                      dataKey: '209281_header',
                    },
                    {
                      code: 'path',
                      name: '请求路径参数',
                      attrType: 'object',
                      _id: 'path',
                      compType: 'Input',
                      parents: [],
                      id: 'path',
                      dataKey: '209281_path',
                    },
                    {
                      code: 'query',
                      name: 'URL 参数',
                      attrType: 'object',
                      _id: 'query',
                      compType: 'Input',
                      parents: [],
                      id: 'query',
                      dataKey: '209281_query',
                    },
                    {
                      code: 'body',
                      name: '请求体',
                      attrType: 'object',
                      children: [
                        {
                          code: 'saleId',
                          name: '营销案编码',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          defaultValue: '',
                          _id: 'body.saleId',
                          compType: 'Input',
                          parents: ['body'],
                          id: 'body.saleId',
                          dataKey: '209281_body.saleId',
                          value: {
                            type: ['context', '$selectedRows_526797[0]$'],
                            code: 'saleCode',
                          },
                        },
                        {
                          code: 'saleName',
                          name: '营销案名称',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          defaultValue: '',
                          _id: 'body.saleName',
                          compType: 'Input',
                          parents: ['body'],
                          id: 'body.saleName',
                          dataKey: '209281_body.saleName',
                        },
                        {
                          code: 'marketTypeLabel',
                          name: '营销案类型',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          defaultValue: '',
                          _id: 'body.marketTypeLabel',
                          compType: 'Input',
                          parents: ['body'],
                          id: 'body.marketTypeLabel',
                          dataKey: '209281_body.marketTypeLabel',
                        },
                        {
                          code: 'homeCity',
                          name: '地市',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          defaultValue: '',
                          _id: 'body.homeCity',
                          compType: 'Input',
                          parents: ['body'],
                          id: 'body.homeCity',
                          dataKey: '209281_body.homeCity',
                        },
                      ],
                      _id: 'body',
                      compType: 'Input',
                      parents: [],
                      id: 'body',
                      dataKey: '209281_body',
                    },
                  ],
                },
                line_number: 4,
                callback1: [
                  {
                    type: 'setLoading',
                    dataId: 166968716988843300,
                    options: {
                      compId: 'View_541575_1_991005_958964',
                      compLib: 'custom',
                      pageJsonId: '541575',
                      compName: 'View',
                      id: '63548',
                      loading: false,
                    },
                    line_number: 5,
                  },
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '299249',
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$reply_209281?.resultCode$',
                          operate: '==',
                          manualValue: '0',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 166968822226612740,
                    elseIfs: [
                      {
                        dataName: 'elseIf',
                        dataId: 166968837370546940,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 166968837739000640,
                            children: [],
                            todoOptions: ['msgType', 'value'],
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '652599',
                              pageJsonId: '541575',
                              type: 'error',
                              value: '$reply_209281?.resultMsg$',
                            },
                            actionObjId: 'showMessage',
                            actionObjName: 'system',
                            value: 'showMessage',
                            elseIfs: [],
                            line_number: 11,
                          },
                        ],
                        condition: [],
                        elseIfs: [],
                        callback: [
                          {
                            type: 'showMessage',
                            dataId: 166968837739000640,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '652599',
                              pageJsonId: '541575',
                              type: 'error',
                              value: '$reply_209281?.resultMsg$',
                            },
                            line_number: 11,
                          },
                        ],
                      },
                    ],
                    line_number: 6,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '0008028',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$reply_209281?.resultData.length$',
                              operate: '>',
                              manualValue: '0',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 166968830826015200,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 166968833692946240,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166968834499885440,
                                children: [],
                                todoOptions: ['msgType', 'value'],
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '406219',
                                  pageJsonId: '541575',
                                  type: 'warn',
                                  value: '未查询到对应编码相应数据',
                                },
                                actionObjId: 'showMessage',
                                actionObjName: 'system',
                                value: 'showMessage',
                                elseIfs: [],
                                line_number: 10,
                              },
                            ],
                            condition: [],
                            elseIfs: [],
                            callback: [
                              {
                                type: 'showMessage',
                                dataId: 166968834499885440,
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '406219',
                                  pageJsonId: '541575',
                                  type: 'warn',
                                  value: '未查询到对应编码相应数据',
                                },
                                line_number: 10,
                              },
                            ],
                          },
                        ],
                        line_number: 7,
                        callback1: [
                          {
                            type: 'okCallbackData',
                            dataId: 166968833295026300,
                            options: {
                              compId: 'okCallbackData',
                              compName: 'page',
                              id: '5342055',
                              pageJsonId: '541575',
                              params: '$reply_209281?.resultData$',
                            },
                            line_number: 8,
                          },
                          {
                            type: 'closeModal',
                            dataId: 166968845163327170,
                            options: {
                              compId: 'closeModal',
                              compName: 'page',
                              id: '155016',
                              pageJsonId: '541575',
                            },
                            line_number: 9,
                          },
                        ],
                      },
                    ],
                  },
                ],
                callback2: [
                  {
                    type: 'showMessage',
                    dataId: 166968848596916770,
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '9647176',
                      pageJsonId: '541575',
                      type: 'error',
                      value: '获取营销案详情失败',
                    },
                    line_number: 12,
                  },
                ],
              },
            ],
          },
        ],
        callback2: [],
      },
    ];
    eventDatagetTableSelected10.params = [] || [];
    CMDGenerator(eventDatagetTableSelected10, {}, 'getTableSelected', {
      id: 'getTableSelected',
      name: 'getTableSelected',
      type: 'getTableSelected',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal111: any = [
      {
        type: 'closeModal',
        dataId: 166963660408257900,
        options: {
          compId: 'closeModal',
          compName: 'page',
          id: '3902723',
          pageJsonId: '541575',
        },
        line_number: 1,
      },
    ];
    eventDatacloseModal111.params = [] || [];
    CMDGenerator(eventDatacloseModal111, {}, 'closeModal', {
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
    const eventDataapiRequest635: any = [
      {
        type: 'apiRequest',
        dataId: 166096252894620860,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '073905',
          pageJsonId: '541575',
          sync: false,
          actionTitle: '加载归属地市下拉框',
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'SYS_qryRegionListByParentId',
          _apiCode: 'qryRegionListByParentId',
          _source: 'rhin',
          _serviceId: '878100790201982976',
          _serviceTitle: '根据父区域ID查询所有子区域: qryRegionListByParentId',
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
              dataKey: '073905_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '073905_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '073905_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              children: [
                {
                  code: 'parentRegionId',
                  attrType: 'field',
                  type: 'long',
                  mustFlag: 'F',
                  _id: 'body.parentRegionId',
                  compType: 'Input',
                  name: 'parentRegionId',
                  parents: ['body'],
                  id: 'body.parentRegionId',
                  dataKey: '073905_body.parentRegionId',
                  value: { type: ['customize'], code: '350000' },
                },
                {
                  code: 'includeParent',
                  attrType: 'field',
                  type: 'boolean',
                  mustFlag: 'F',
                  _id: 'body.includeParent',
                  compType: 'Input',
                  name: 'includeParent',
                  parents: ['body'],
                  id: 'body.includeParent',
                  dataKey: '073905_body.includeParent',
                  value: { type: ['customize'], code: 'true' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '073905_body',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166096268222510430,
            options: {
              compId: 'Input_836023_885786',
              compLib: 'comm',
              pageJsonId: '541575',
              compName: 'Select',
              id: '593812',
              data: '$reply_073905?.resultData$',
              labelKey: 'regionName',
              valueKey: 'regionId',
            },
            line_number: 2,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest635.params = [] || [];
    CMDGenerator(eventDataapiRequest635, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDatacallSelfFunc51: any = [
      {
        type: 'callSelfFunc',
        dataId: 166400366662758240,
        options: {
          compId: 'callSelfFunc',
          compName: 'system',
          id: '226361',
          pageJsonId: '541575',
          customFuncName: 'query',
          customFuncParams: 'object',
          paramsObj: {
            pageNum: '1',
            isDraft: '$urlParam.isDraft$',
            pageSize: '10',
          },
          paramsObjKeyValueMap: {
            pageNum: '1',
            isDraft: '$urlParam.isDraft$',
            pageSize: '10',
          },
        },
        line_number: 3,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacallSelfFunc51.params = [] || [];
    CMDGenerator(eventDatacallSelfFunc51, {}, 'callSelfFunc', {
      id: 'callSelfFunc',
      name: 'callSelfFunc',
      type: 'callSelfFunc',
      platform: 'undefined',
    });
    const eventDataapiRequest636: any = [
      {
        type: 'apiRequest',
        dataId: 166625713069014750,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '5870684',
          pageJsonId: '541575',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'selectAlltreeNodeCode',
          _apiCode: 'selectAlltreeNodeCode',
          _source: 'rhin',
          _serviceId: '874896712636026880',
          _serviceTitle: '获取树的所有节点-hdb: selectAlltreeNodeCode',
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
              dataKey: '5870684_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '5870684_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '5870684_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              children: [
                {
                  code: 'nodeKey',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.nodeKey',
                  compType: 'Input',
                  name: 'nodeKey',
                  parents: ['body'],
                  id: 'body.nodeKey',
                  dataKey: '5870684_body.nodeKey',
                  value: { type: ['customize'], code: '-1' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '5870684_body',
            },
          ],
        },
        line_number: 4,
        callback1: [
          {
            type: 'reloadData',
            dataId: 166625721654236400,
            options: {
              compId: 'TreeSelect_07743',
              compLib: 'comm',
              pageJsonId: '541575',
              compName: 'TreeSelect',
              id: '99856',
              data: '$reply_5870684?.resultData$',
            },
            line_number: 5,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest636.params = [] || [];
    CMDGenerator(eventDataapiRequest636, {}, 'apiRequest', {
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
      className="__CustomClass_541575__"
    >
      <View
        name={'页面'}
        visible={true}
        backgroundType={{ type: 'cleanColor', color: '#ffffff' }}
        $$componentItem={{
          id: 'View_541575_1_991005_958964',
          uid: 'View_541575_1_991005_958964',
          type: 'View',
          ...componentItem,
        }}
        style={{
          minHeight: '100%',
          display: 'flex',
          padding: '8px 8px 8px 8px',
          flexDirection: 'column',
          overflowY: 'auto',
          width: 'auto',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_541575_1_991005_958964')}
        {...injectData}
      >
        <Form
          name={'营销案查询条件表单'}
          colSpan={8}
          labelCol={8}
          wrapperCol={16}
          colon={true}
          layout={'horizontal'}
          labelAlign={'right'}
          visible={true}
          header={'标题'}
          colSpace={0}
          rowSpace={16}
          formCode={'Form_126816'}
          formColumns={[
            {
              id: 'Input_8789281_676623',
              label: '输入框',
              compName: 'Input',
              type: 'Input',
              compType: 2,
              compLib: 'comm',
              props: {
                name: '营销案编码',
                basicStatus: 1,
                size: 'default',
                selfSpan: '',
                labelCol: 8,
                wrapperCol: 16,
                titleTip: 'notext',
                tipLocation: 'after',
                tipContent: '',
                tipPlacement: 'top',
                prefixIconPosition: 'before',
                postfix: '',
                postfixIconPosition: 'before',
                required: false,
                placeholder: '请输入',
                formItemIndex: 0,
                fieldName: 'saleCode',
                allowClear: true,
              },
              style: {},
              isContainer: false,
              isBusiObjContainer: false,
              cmdgroup: ['basic'],
              platform: 'pc',
              icon: 'Input',
              description: '',
              image: '',
              groupsName: '数据录入',
              setEvents: [
                {
                  dataName: 'event',
                  dataId: 166372531217197630,
                  children: [
                    {
                      dataName: 'action',
                      dataId: 166372531611285300,
                      children: [
                        {
                          dataName: 'callback',
                          dataId: 166372531611290050,
                          children: [],
                          value: 'callback1',
                          params: [],
                        },
                        {
                          dataName: 'callback',
                          dataId: 166372531611272500,
                          children: [],
                          value: 'callback2',
                          params: [],
                        },
                      ],
                      todoOptions: ['customFuncName', 'customFuncParams'],
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '703487',
                        pageJsonId: '541575',
                        customFuncName: 'query',
                        customFuncParams: 'object',
                        paramsObj: { pageNum: '1' },
                        paramsObjKeyValueMap: { pageNum: '1' },
                      },
                      actionObjId: 'callSelfFunc',
                      actionObjName: 'system',
                      value: 'callSelfFunc',
                    },
                  ],
                  value: 'onPressEnter',
                  params: [
                    { title: '输入框取值', name: 'e', value: e?.target?.value },
                  ],
                },
              ],
              isLabelDropBoxChild: false,
              components: [],
            },
            {
              id: 'Select_250177',
              label: '下拉框',
              compName: 'Select',
              type: 'Select',
              compType: 2,
              compLib: 'comm',
              props: {
                name: '地市',
                basicStatus: 1,
                size: 'default',
                selfSpan: '',
                labelCol: 8,
                wrapperCol: 16,
                titleTip: 'notext',
                tipLocation: 'after',
                tipPlacement: 'top',
                required: false,
                filter: 'none',
                classification: 'default',
                attr: {},
                placeholder: '请选择',
                formItemIndex: 1,
                fieldName: 'lanId',
              },
              style: {},
              isContainer: false,
              isBusiObjContainer: false,
              cmdgroup: ['basic'],
              platform: 'pc',
              icon: 'Select',
              description: '',
              image: '',
              groupsName: '数据录入',
              setEvents: [],
              isLabelDropBoxChild: false,
              components: [],
            },
            {
              id: 'Select_349027',
              label: '下拉单选',
              compName: 'Select',
              type: 'Select',
              compType: 2,
              compLib: 'comm',
              props: {
                name: '状态',
                basicStatus: 1,
                size: 'default',
                selfSpan: '',
                labelCol: 8,
                wrapperCol: 16,
                titleTip: 'notext',
                tipLocation: 'after',
                tipPlacement: 'top',
                required: false,
                filter: 'none',
                classification: 'default',
                attr: {},
                placeholder: '请选择',
                formItemIndex: 2,
                fieldName: 'saleStatus',
              },
              style: {},
              isContainer: false,
              isBusiObjContainer: false,
              cmdgroup: ['basic'],
              platform: 'pc',
              icon: 'Select',
              description: '',
              image: '',
              groupsName: '数据录入',
              setEvents: [],
              isLabelDropBoxChild: false,
              components: [],
            },
            {
              id: 'View_445165_85808',
              label: '普通容器',
              compName: 'View',
              type: 'View',
              compType: 0,
              compLib: 'custom',
              props: { name: '布局容器', visible: true, formItemIndex: 5 },
              style: {
                display: 'flex',
                flexDirection: 'row',
                padding: 'px px px px',
                width: '100%',
                backgroundColor: '#FFFFFF',
                textAlign: 'right',
                fontSize: '',
                justifyContent: 'flex-end',
                alignItems: 'center',
              },
              isContainer: true,
              isBusiObjContainer: false,
              cmdgroup: ['basic'],
              platform: 'pc',
              icon: 'View',
              description: '',
              image: '',
              groupsName: '布局',
              setEvents: [],
              isLabelDropBoxChild: false,
              components: [
                {
                  id: 'Button_616697_167142',
                  label: '按钮',
                  compName: 'Button',
                  type: 'Button',
                  compType: 1,
                  compLib: 'comm',
                  props: {
                    name: '查询',
                    shape: null,
                    visible: true,
                    classification: 'default',
                    autoProcessFlow: false,
                    flowProcessResult: 'common',
                    iconPosition: 'left',
                    ghost: false,
                    block: false,
                    size: 'default',
                    disabled: false,
                    type: 'primary',
                  },
                  style: { width: 'fit-content' },
                  isContainer: false,
                  isBusiObjContainer: false,
                  cmdgroup: ['basic'],
                  platform: 'pc',
                  icon: 'Button',
                  description: '',
                  image: '',
                  groupsName: '通用',
                  isInlineBlock: true,
                  setEvents: [
                    {
                      dataName: 'event',
                      dataId: 166096591596917440,
                      children: [
                        {
                          dataName: 'action',
                          dataId: 166372534775213060,
                          children: [
                            {
                              dataName: 'callback',
                              dataId: 166372534775273800,
                              children: [],
                              value: 'callback1',
                              params: [],
                            },
                            {
                              dataName: 'callback',
                              dataId: 166372534775216100,
                              children: [],
                              value: 'callback2',
                              params: [],
                            },
                          ],
                          todoOptions: ['customFuncName', 'customFuncParams'],
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '3379907',
                            pageJsonId: '541575',
                            customFuncName: 'query',
                            customFuncParams: 'object',
                            paramsObj: { pageNum: '1' },
                            paramsObjKeyValueMap: { pageNum: '1' },
                          },
                          actionObjId: 'callSelfFunc',
                          actionObjName: 'system',
                          value: 'callSelfFunc',
                        },
                      ],
                      value: 'onClick',
                      params: [{ title: '事件对象', value: e, name: 'e' }],
                      elseIfs: [],
                    },
                  ],
                  isLabelDropBoxChild: false,
                  components: [],
                },
                {
                  id: 'Button_505213_977442',
                  label: '按钮',
                  compName: 'Button',
                  type: 'Button',
                  compType: 1,
                  compLib: 'comm',
                  props: {
                    name: '重置',
                    shape: null,
                    visible: true,
                    classification: 'default',
                    autoProcessFlow: false,
                    flowProcessResult: 'common',
                    iconPosition: 'left',
                    ghost: false,
                    block: false,
                    size: 'default',
                    disabled: false,
                    type: 'default',
                  },
                  style: { width: 'fit-content', margin: '0px 8px 0px 8px' },
                  isContainer: false,
                  isBusiObjContainer: false,
                  cmdgroup: ['basic'],
                  platform: 'pc',
                  icon: 'Button',
                  description: '',
                  image: '',
                  groupsName: '通用',
                  isInlineBlock: true,
                  setEvents: [
                    {
                      dataName: 'event',
                      dataId: 166372522389901920,
                      children: [
                        {
                          dataName: 'action',
                          dataId: 166919181574355650,
                          children: [],
                          todoOptions: [],
                          options: {
                            compId: 'Form_126816_084922',
                            compLib: 'comm',
                            pageJsonId: '541575',
                            compName: 'Form',
                            id: '740968',
                          },
                          actionObjId: 'Form_126816_084922',
                          actionObjName: 'Form',
                          value: 'resetCurrentForm',
                          compLib: 'comm',
                        },
                        {
                          dataName: 'action',
                          dataId: 166919182472212930,
                          children: [
                            {
                              dataName: 'callback',
                              dataId: 166919182472239550,
                              children: [],
                              value: 'callback1',
                              params: [],
                            },
                            {
                              dataName: 'callback',
                              dataId: 166919182472229000,
                              children: [],
                              value: 'callback2',
                              params: [],
                            },
                          ],
                          todoOptions: ['customFuncName', 'customFuncParams'],
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '1279756',
                            pageJsonId: '541575',
                            customFuncName: 'query',
                          },
                          actionObjId: 'callSelfFunc',
                          actionObjName: 'system',
                          value: 'callSelfFunc',
                        },
                      ],
                      value: 'onClick',
                      params: [{ title: '事件对象', value: e, name: 'e' }],
                      elseIfs: [],
                    },
                  ],
                  isLabelDropBoxChild: false,
                  components: [],
                },
              ],
            },
          ]}
          $$componentItem={{
            id: 'Form_126816_084922_5117034',
            uid: 'Form_126816_084922_5117034',
            type: 'Form',
            ...componentItem,
          }}
          style={{ padding: '0px 0px 0px 0px' }}
          ref={(r: any) =>
            refs.setComponentRef(r, 'Form_126816_084922_5117034')
          }
          {...injectData}
        >
          <Input
            name={'营销案编码'}
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
            fieldName={'saleCode'}
            allowClear={true}
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
              id: 'Input_8789281_676623_380348',
              uid: 'Input_8789281_676623_380348',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            onPressEnter={(e: any) => {
              const eventDatacallSelfFunc823: any = [
                {
                  type: 'callSelfFunc',
                  dataId: 166372531611285300,
                  options: {
                    compId: 'callSelfFunc',
                    compName: 'system',
                    id: '703487',
                    pageJsonId: '541575',
                    customFuncName: 'query',
                    customFuncParams: 'object',
                    paramsObj: { pageNum: '1' },
                    paramsObjKeyValueMap: { pageNum: '1' },
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatacallSelfFunc823.params =
                [
                  { title: '输入框取值', name: 'e', value: '$e.target.value$' },
                ] || [];
              CMDGenerator(eventDatacallSelfFunc823, { e }, 'callSelfFunc', {
                id: 'callSelfFunc',
                name: 'callSelfFunc',
                type: 'callSelfFunc',
                platform: 'pc',
              });
            }}
            ref={(r: any) =>
              refs.setComponentRef(r, 'Input_8789281_676623_380348')
            }
            {...injectData}
          />
          <Input
            name={'营销案名称'}
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
            fieldName={'saleName'}
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
              id: 'Input_231425_268565',
              uid: 'Input_231425_268565',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_231425_268565')}
            {...injectData}
          />
          <View
            name={'布局容器'}
            visible={true}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_445165_85808_214257',
              uid: 'View_445165_85808_214257',
              type: 'View',
              ...componentItem,
            }}
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
              padding: 'px px px px',
              width: '100%',
              textAlign: 'center',
              fontSize: '',
            }}
            ref={(r: any) =>
              refs.setComponentRef(r, 'View_445165_85808_214257')
            }
            {...injectData}
          >
            <Button
              name={'查询'}
              shape={null}
              visible={true}
              classification={'default'}
              autoProcessFlow={false}
              flowProcessResult={'common'}
              iconPosition={'left'}
              ghost={false}
              block={false}
              size={'default'}
              disabled={false}
              type={'primary'}
              hasIcon={false}
              $$componentItem={{
                id: 'Button_616697_167142_467455',
                uid: 'Button_616697_167142_467455',
                type: 'Button',
                ...componentItem,
              }}
              style={{ width: 'fit-content' }}
              onClick={(e: any) => {
                const eventDatacallSelfFunc824: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166927687663021600,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '512364',
                      pageJsonId: '541575',
                      customFuncName: 'cleanQuery',
                      customFuncParams: 'object',
                      paramsObj: { pageNum: '1' },
                      paramsObjKeyValueMap: { pageNum: '1' },
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc824.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatacallSelfFunc824, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Button_616697_167142_467455')
              }
              {...injectData}
            />
            <Button
              name={'重置'}
              shape={null}
              visible={true}
              classification={'default'}
              autoProcessFlow={false}
              flowProcessResult={'common'}
              iconPosition={'left'}
              ghost={false}
              block={false}
              size={'default'}
              disabled={false}
              type={'default'}
              hasIcon={false}
              $$componentItem={{
                id: 'Button_505213_977442_277065',
                uid: 'Button_505213_977442_277065',
                type: 'Button',
                ...componentItem,
              }}
              style={{ width: 'fit-content', margin: '0px 8px 0px 8px' }}
              onClick={(e: any) => {
                const forms210 = getFormByCompId(
                  'Form_126816_084922_5117034',
                  refs,
                );
                // 支持循环容器中的表单重置
                (Array.isArray(forms210) ? forms210 : [forms210]).forEach(
                  (form) => form?.resetFields(),
                );
                const eventDatacallSelfFunc825: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166927690450979840,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '976445',
                      pageJsonId: '541575',
                      customFuncName: 'cleanQuery',
                      customFuncParams: 'object',
                      paramsObj: { pageNum: '1' },
                      paramsObjKeyValueMap: { pageNum: '1' },
                    },
                    line_number: 2,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc825.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatacallSelfFunc825, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Button_505213_977442_277065')
              }
              {...injectData}
            />
          </View>
          <Select
            name={'地市'}
            size={'default'}
            selfSpan={8}
            labelCol={8}
            wrapperCol={16}
            titleTip={'notext'}
            tipLocation={'after'}
            tipPlacement={'top'}
            required={false}
            filter={'none'}
            classification={'default'}
            placeholder={'请选择'}
            formItemIndex={3}
            fieldName={'lanId'}
            dataSource={attrDataMap['CITY_CODE']}
            $$componentItem={{
              id: 'Select_250177_461629',
              uid: 'Select_250177_461629',
              type: 'Select',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Select_250177_461629')}
            {...injectData}
          />
          <Select
            name={'状态'}
            size={'default'}
            selfSpan={8}
            labelCol={8}
            wrapperCol={16}
            titleTip={'notext'}
            tipLocation={'after'}
            tipPlacement={'top'}
            required={false}
            filter={'none'}
            classification={'default'}
            placeholder={'请选择'}
            formItemIndex={4}
            fieldName={'saleStatus'}
            dataSource={[
              { id: '9091504', label: '生效', value: '1000' },
              { id: '1114829', label: '失效', value: '1100' },
            ]}
            $$componentItem={{
              id: 'Select_349027_750542',
              uid: 'Select_349027_750542',
              type: 'Select',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Select_349027_750542')}
            {...injectData}
          />
        </Form>
        <Table
          name={'营销案列表'}
          isFlexColumn={false}
          pageSize={data?.saleConfigList?.resultData?.size}
          current={data?.saleConfigList?.resultData?.current}
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
              title: '营销案编码',
              key: 'createStaffName',
              dataIndex: 'saleCode',
              className: '',
              id: '051054',
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
              title: '营销案名称',
              key: 'updateDate',
              dataIndex: 'saleName',
              className: 'divider',
              id: '036987',
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
              title: '地市',
              key: 'saleCode',
              dataIndex: 'lanId',
              className: 'divider',
              id: '266609',
              staticDataSource: attrDataMap['CITY_CODE'],
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
              title: '营销案描述',
              key: 'saleDesc',
              dataIndex: 'saleDesc',
              className: 'divider',
              id: '0045463',
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
              title: '状态',
              key: 'saleStatus',
              dataIndex: 'saleStatus',
              className: 'divider',
              id: '001876',
              customRendering:
                '/** * 自定义渲染函数 * @param {String} text 单元格显示的文字内容 * @param {Object} row 行数据对象 * @param {number} index 行索引 * @returns 渲染的内容：可以是 html 模板字符串 */function renderFunc(text, row, index) {  let fontColor = "#0000FF";  if (row.saleStatus === "1100") {    fontColor = "#FF0000";  }  return text ? "<span style=\\"color: ".concat(fontColor, "; \\">").concat(text, "</span>") : "";}',
              originCustomRendering: [
                ' /**',
                ' * 自定义渲染函数',
                ' * @param {String} text 单元格显示的文字内容',
                ' * @param {Object} row 行数据对象',
                ' * @param {number} index 行索引',
                ' * @returns 渲染的内容：可以是 html 模板字符串',
                ' */',
                'function renderFunc(text, row, index) {',
                '      let fontColor = "#0000FF";',
                '',
                '      if (row.saleStatus === "1100") {',
                '        fontColor = "#FF0000";',
                '      }',
                '    ',
                '      return text ? "<span style=\\"color: ".concat(fontColor, "; \\">").concat(text, "</span>") : "";',
                '}',
              ],
              staticDataSource: [
                { id: '523934', label: '生效', value: '1000' },
                { id: '4378357', label: '失效', value: '1100' },
              ],
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
              id: '381627',
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
              id: '420725',
              dataIndex: 'updateDate',
              title: '更新时间',
              key: '420725',
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
          rowKeyType={'specified'}
          visible={true}
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
          rowKey={'saleCfgId'}
          total={data?.saleConfigList?.resultData?.total}
          dataSource={data?.saleConfigList?.resultData?.records}
          fieldName={'data.qryDcApproveOrdTodoPage.resultData.total'}
          hiddenAction={false}
          rowActions={[]}
          extend={[]}
          actionWidth={100}
          extendNum={0}
          dataSourceFromDataSourceConfig={
            'data.saleConfigList.resultData.records'
          }
          $$componentItem={{
            id: 'Table_37209506_915744_611823',
            uid: 'Table_37209506_915744_611823',
            type: 'Table',
            ...componentItem,
          }}
          style={{ margin: '16px 0px 0px 0px' }}
          onPageChange={(page: any, pageSize: any) => {
            const eventDatacallSelfFunc826: any = [
              {
                type: 'callSelfFunc',
                dataId: 166389820424598850,
                options: {
                  compId: 'callSelfFunc',
                  compName: 'system',
                  id: '396761',
                  pageJsonId: '541575',
                  customFuncName: 'query',
                  customFuncParams: 'object',
                  paramsObj: { pageNum: '$page$', pageSize: '$pageSize$' },
                  paramsObjKeyValueMap: {
                    pageNum: '$page$',
                    pageSize: '$pageSize$',
                  },
                },
                line_number: 1,
                callback1: [],
                callback2: [],
              },
            ];
            eventDatacallSelfFunc826.params =
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
              eventDatacallSelfFunc826,
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
          onClickBtn1={(rowId: any, row: any, index: any) => {
            const eventDatagetTableSelected85: any = [
              {
                type: 'getTableSelected',
                dataId: 166255419371255300,
                options: {
                  compId: 'Table_37209506_915744_611823',
                  compLib: 'comm',
                  pageJsonId: '541575',
                  compName: 'Table',
                  id: '3706402',
                },
                line_number: 1,
                callback1: [
                  {
                    type: 'console',
                    dataId: 166255419371286980,
                    options: {
                      compId: 'debug',
                      compName: 'system',
                      id: '1867025',
                      pageJsonId: '541575',
                      value: ['$row$'],
                    },
                    line_number: 2,
                  },
                  {
                    type: 'getPageNum',
                    dataId: 166927712852881300,
                    options: {
                      compId: 'Table_37209506_915744_611823',
                      compLib: 'comm',
                      pageJsonId: '541575',
                      compName: 'Table',
                      id: '24388',
                    },
                    line_number: 3,
                    callback1: [
                      {
                        type: 'showCustomModal',
                        dataId: 166927713667803260,
                        options: {
                          compId: 'showCustomModal',
                          compName: 'page',
                          id: '20518',
                          pageJsonId: '541575',
                          modalname: '/bianjiyingxiaoanfanwei4145',
                          pageId: '912619917963702272',
                          paramsObj: {
                            saleCfgId: '$row.saleCfgId$',
                            saleCode: '$row.saleCode$',
                            saleName: '$row.saleName$',
                            saleStatus: '$row.saleStatus$',
                            lanId: '$row.lanId$',
                            saleDesc: '$row.saleDesc$',
                            pageNum: '$pageNum_24388$',
                          },
                          paramsObjKeyValueMap: {
                            saleCfgId: '$row.saleCfgId$',
                            saleCode: '$row.saleCode$',
                            saleName: '$row.saleName$',
                            saleStatus: '$row.saleStatus$',
                            lanId: '$row.lanId$',
                            saleDesc: '$row.saleDesc$',
                            pageNum: '$pageNum_24388$',
                          },
                          modalPath: '/bianjiyingxiaoanfanwei4145',
                        },
                        line_number: 4,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                  },
                ],
                callback2: [],
              },
            ];
            eventDatagetTableSelected85.params =
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
              eventDatagetTableSelected85,
              { rowId, row, index },
              'getTableSelected',
              {
                id: 'getTableSelected',
                name: 'getTableSelected',
                type: 'getTableSelected',
                platform: 'pc',
              },
            );
          }}
          onClickBtn2={(rowId: any, row: any, index: any) => {
            const eventDatashowModal24: any = [
              {
                type: 'showModal',
                dataId: 166926980955198560,
                options: {
                  compId: 'showModal',
                  compName: 'page',
                  id: '262361',
                  pageJsonId: '541575',
                  type: 'confirm',
                  title: '是否让此方案失效？',
                  okText: '确认',
                  cancelText: '取消',
                },
                line_number: 1,
                callback1: [
                  {
                    type: 'apiRequest',
                    dataId: 166926984836969280,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '4528635',
                      pageJsonId: '541575',
                      sync: false,
                      method: 'post',
                      url: '/app/rhin/gateway/callRhinEngine',
                      _capabilityCode: 'modDcSaleConfig',
                      _apiCode: 'modDcSaleConfig',
                      _source: 'rhin',
                      _serviceId: '912649490086060032',
                      _serviceTitle: '营销案修改-tsm: modDcSaleConfig',
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
                          dataKey: '39918_header',
                        },
                        {
                          code: 'path',
                          name: '请求路径参数',
                          attrType: 'object',
                          _id: 'path',
                          compType: 'Input',
                          parents: [],
                          id: 'path',
                          dataKey: '39918_path',
                        },
                        {
                          code: 'query',
                          name: 'URL 参数',
                          attrType: 'object',
                          _id: 'query',
                          compType: 'Input',
                          parents: [],
                          id: 'query',
                          dataKey: '39918_query',
                        },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          children: [
                            {
                              code: 'saleCfgId',
                              attrType: 'field',
                              type: 'long',
                              mustFlag: 'F',
                              _id: 'body.saleCfgId',
                              compType: 'Input',
                              name: 'saleCfgId',
                              parents: ['body'],
                              id: 'body.saleCfgId',
                              dataKey: '39918_body.saleCfgId',
                              value: {
                                type: ['context', '$row$'],
                                hideAttr: false,
                                code: 'saleCfgId',
                              },
                            },
                            {
                              code: 'saleCode',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.saleCode',
                              compType: 'Input',
                              name: 'saleCode',
                              parents: ['body'],
                              id: 'body.saleCode',
                              dataKey: '39918_body.saleCode',
                              value: { type: [], code: '' },
                            },
                            {
                              code: 'saleName',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.saleName',
                              compType: 'Input',
                              name: 'saleName',
                              parents: ['body'],
                              id: 'body.saleName',
                              dataKey: '39918_body.saleName',
                              value: { type: [], code: '' },
                            },
                            {
                              code: 'lanId',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.lanId',
                              compType: 'Input',
                              name: 'lanId',
                              parents: ['body'],
                              id: 'body.lanId',
                              dataKey: '39918_body.lanId',
                              value: { type: [], code: '' },
                            },
                            {
                              code: 'saleStatus',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.saleStatus',
                              compType: 'Input',
                              name: 'saleStatus',
                              parents: ['body'],
                              id: 'body.saleStatus',
                              dataKey: '39918_body.saleStatus',
                              value: { type: ['customize'], code: '1100' },
                            },
                            {
                              code: 'saleDesc',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.saleDesc',
                              compType: 'Input',
                              name: 'saleDesc',
                              parents: ['body'],
                              id: 'body.saleDesc',
                              dataKey: '39918_body.saleDesc',
                              value: { type: [], code: '' },
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
                              dataKey: '39918_body.remark',
                              value: { type: [], code: '' },
                            },
                          ],
                          _id: 'body',
                          compType: 'Input',
                          parents: [],
                          id: 'body',
                          dataKey: '39918_body',
                        },
                      ],
                    },
                    line_number: 2,
                    callback1: [
                      {
                        type: 'getPageNum',
                        dataId: 1669276961734804,
                        options: {
                          compId: 'Table_37209506_915744_611823',
                          compLib: 'comm',
                          pageJsonId: '541575',
                          compName: 'Table',
                          id: '4763131',
                        },
                        line_number: 3,
                        callback1: [
                          {
                            type: 'callSelfFunc',
                            dataId: 166927700810263870,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '961191',
                              pageJsonId: '541575',
                              customFuncName: 'cleanQuery',
                              customFuncParams: 'object',
                              paramsObj: { pageNum: '$pageNum_4763131$' },
                              paramsObjKeyValueMap: {
                                pageNum: '$pageNum_4763131$',
                              },
                            },
                            line_number: 4,
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
            ];
            eventDatashowModal24.params =
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
              eventDatashowModal24,
              { rowId, row, index },
              'showModal',
              {
                id: 'showModal',
                name: 'showModal',
                type: 'showModal',
                platform: 'pc',
              },
            );
          }}
          onClickBtn3={(rowId: any, row: any, index: any) => {
            const eventDatashowModal25: any = [
              {
                type: 'showModal',
                dataId: 166927030637871780,
                options: {
                  compId: 'showModal',
                  compName: 'page',
                  id: '127097',
                  pageJsonId: '541575',
                  type: 'confirm',
                  title: '是否让此方案生效？',
                  okText: '确认',
                  cancelText: '取消',
                },
                line_number: 1,
                callback1: [
                  {
                    type: 'apiRequest',
                    dataId: 166927033909718850,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '411824',
                      pageJsonId: '541575',
                      sync: false,
                      method: 'post',
                      url: '/app/rhin/gateway/callRhinEngine',
                      _capabilityCode: 'modDcSaleConfig',
                      _apiCode: 'modDcSaleConfig',
                      _source: 'rhin',
                      _serviceId: '912649490086060032',
                      _serviceTitle: '营销案修改-tsm: modDcSaleConfig',
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
                          dataKey: '61759_header',
                        },
                        {
                          code: 'path',
                          name: '请求路径参数',
                          attrType: 'object',
                          _id: 'path',
                          compType: 'Input',
                          parents: [],
                          id: 'path',
                          dataKey: '61759_path',
                        },
                        {
                          code: 'query',
                          name: 'URL 参数',
                          attrType: 'object',
                          _id: 'query',
                          compType: 'Input',
                          parents: [],
                          id: 'query',
                          dataKey: '61759_query',
                        },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          children: [
                            {
                              code: 'saleCfgId',
                              attrType: 'field',
                              type: 'long',
                              mustFlag: 'F',
                              _id: 'body.saleCfgId',
                              compType: 'Input',
                              name: 'saleCfgId',
                              parents: ['body'],
                              id: 'body.saleCfgId',
                              dataKey: '61759_body.saleCfgId',
                              value: {
                                type: ['context', '$row$'],
                                hideAttr: false,
                                code: 'saleCfgId',
                              },
                            },
                            {
                              code: 'saleCode',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.saleCode',
                              compType: 'Input',
                              name: 'saleCode',
                              parents: ['body'],
                              id: 'body.saleCode',
                              dataKey: '61759_body.saleCode',
                              value: { type: [], code: '' },
                            },
                            {
                              code: 'saleName',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.saleName',
                              compType: 'Input',
                              name: 'saleName',
                              parents: ['body'],
                              id: 'body.saleName',
                              dataKey: '61759_body.saleName',
                              value: { type: [], code: '' },
                            },
                            {
                              code: 'lanId',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.lanId',
                              compType: 'Input',
                              name: 'lanId',
                              parents: ['body'],
                              id: 'body.lanId',
                              dataKey: '61759_body.lanId',
                              value: { type: [], code: '' },
                            },
                            {
                              code: 'saleStatus',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.saleStatus',
                              compType: 'Input',
                              name: 'saleStatus',
                              parents: ['body'],
                              id: 'body.saleStatus',
                              dataKey: '61759_body.saleStatus',
                              value: { type: ['customize'], code: '1000' },
                            },
                            {
                              code: 'saleDesc',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.saleDesc',
                              compType: 'Input',
                              name: 'saleDesc',
                              parents: ['body'],
                              id: 'body.saleDesc',
                              dataKey: '61759_body.saleDesc',
                              value: { type: [], code: '' },
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
                              dataKey: '61759_body.remark',
                              value: { type: [], code: '' },
                            },
                          ],
                          _id: 'body',
                          compType: 'Input',
                          parents: [],
                          id: 'body',
                          dataKey: '61759_body',
                        },
                      ],
                    },
                    line_number: 2,
                    callback1: [
                      {
                        type: 'getPageNum',
                        dataId: 166927703736786080,
                        options: {
                          compId: 'Table_37209506_915744_611823',
                          compLib: 'comm',
                          pageJsonId: '541575',
                          compName: 'Table',
                          id: '30005706',
                        },
                        line_number: 3,
                        callback1: [
                          {
                            type: 'callSelfFunc',
                            dataId: 166927704866243170,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '866522',
                              pageJsonId: '541575',
                              customFuncName: 'cleanQuery',
                              customFuncParams: 'object',
                              paramsObj: { pageNum: '$pageNum_30005706$' },
                              paramsObjKeyValueMap: {
                                pageNum: '$pageNum_30005706$',
                              },
                            },
                            line_number: 4,
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
            ];
            eventDatashowModal25.params =
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
              eventDatashowModal25,
              { rowId, row, index },
              'showModal',
              {
                id: 'showModal',
                name: 'showModal',
                type: 'showModal',
                platform: 'pc',
              },
            );
          }}
          ref={(r: any) =>
            refs.setComponentRef(r, 'Table_37209506_915744_611823')
          }
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(Yingxiaoanfangweixuanzhe$$Modal, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
