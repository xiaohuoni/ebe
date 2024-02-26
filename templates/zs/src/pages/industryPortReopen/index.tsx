// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, Input, Button, Select } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '1036170946836533248';
const IndustryPortReopen$$Modal: React.FC<PageProps> = ({
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
    const eventDatavalidateCurrentForm49: any = [
      {
        type: 'validateCurrentForm',
        dataId: 169865594333311680,
        options: {
          compId: 'Form_398551',
          compLib: 'comm',
          pageJsonId: '884882',
          compName: 'Form',
          id: '491716',
        },
        line_number: 1,
        callback1: [
          {
            type: 'ifelse',
            condition: [
              {
                condId: '906293',
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$state.sceneCode$',
                  operate: '!=',
                  manualValue: 'V',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
              {
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$state.sceneCode$',
                  operate: '!=',
                  manualValue: 'M',
                },
                condId: '850724',
                connector: '&&',
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 169871596427642850,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 169871600754137380,
                children: [
                  {
                    actionObjId: 'page',
                    actionObjName: 'page',
                    children: [],
                    dataId: 169871603298500000,
                    dataName: 'action',
                    options: { compId: 'page', compName: 'page', id: '573188' },
                    todoOptions: [],
                    value: 'closeModal',
                    line_number: 10,
                  },
                  {
                    dataName: 'action',
                    dataId: 169871603700411620,
                    children: [],
                    todoOptions: ['setParams'],
                    options: {
                      compId: 'okCallbackData',
                      compName: 'page',
                      id: '0445344',
                      pageJsonId: '884882',
                      params: '$data.groupInfo$',
                    },
                    actionObjId: 'okCallbackData',
                    actionObjName: 'page',
                    value: 'okCallbackData',
                    line_number: 11,
                  },
                ],
                condition: [],
                value: 'elseIf',
                callback: [
                  {
                    type: 'closeModal',
                    dataId: 169871603298500000,
                    options: { compId: 'page', compName: 'page', id: '573188' },
                    line_number: 10,
                  },
                  {
                    type: 'okCallbackData',
                    dataId: 169871603700411620,
                    options: {
                      compId: 'okCallbackData',
                      compName: 'page',
                      id: '0445344',
                      pageJsonId: '884882',
                      params: '$data.groupInfo$',
                    },
                    line_number: 11,
                  },
                ],
              },
            ],
            line_number: 2,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 169871605300443420,
                shielding: true,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '539646',
                  pageJsonId: '884882',
                  dataSourceId: 169865424292811620,
                  dataSourceName: 'groupInfo',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      attrId: '8503888',
                      code: 'groupId',
                      name: '集团编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '95902',
                      code: 'groupName',
                      name: '集团名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '275294',
                      code: 'basicAccessNumber',
                      name: '基本接入号',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '991743',
                      code: 'busiAccessNumber',
                      name: '业务接入号',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '387407',
                      code: 'agentName',
                      name: '代理商名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '92785',
                      code: 'devChannel',
                      name: '发展渠道',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '165085',
                      code: 'devChannelName',
                      name: '发展渠道名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '826146',
                      code: 'rowId',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['$function$', 'other', 'random'],
                        code: '$_.random(1000)+_.random(1000)+_.random(1000)+_.random(1000)$',
                      },
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  targetDataSourcePaths: [],
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'okCallbackData',
                    dataId: 169871607560952960,
                    shielding: true,
                    options: {
                      compId: 'okCallbackData',
                      compName: 'page',
                      id: '0902426',
                      pageJsonId: '884882',
                      params: '$data.groupInfo$',
                    },
                    line_number: 4,
                  },
                  {
                    type: 'closeModal',
                    dataId: 169871608039907970,
                    shielding: true,
                    options: { compId: 'page', compName: 'page', id: '726504' },
                    line_number: 5,
                  },
                ],
                callback2: [],
              },
              {
                type: 'customActionCode',
                dataId: 169871623449360770,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '269819',
                  pageJsonId: '884882',
                  actionTitle: '生成随机id',
                  code: 'function main(data,state,success,fail){success(new Date().getTime())};',
                },
                line_number: 6,
                callback1: [
                  {
                    type: 'setDataSource',
                    dataId: 169899012121589860,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '889275',
                      pageJsonId: '884882',
                      dataSourceId: 169865424292811620,
                      dataSourceName: 'groupInfo',
                      dataSourceRelType: 'custom',
                      dataSourceSetValue: [
                        {
                          attrId: '8503888',
                          code: 'groupId',
                          name: '集团编码',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '95902',
                          code: 'groupName',
                          name: '集团名称',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '275294',
                          code: 'basicAccessNumber',
                          name: '基本接入号',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '991743',
                          code: 'busiAccessNumber',
                          name: '业务接入号',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '387407',
                          code: 'agentName',
                          name: '代理商名称',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '92785',
                          code: 'devChannel',
                          name: '发展渠道',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '165085',
                          code: 'devChannelName',
                          name: '发展渠道名称',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '826146',
                          code: 'rowId',
                          name: '属性',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          value: {
                            type: ['context', '$data_269819$'],
                            code: '',
                          },
                        },
                      ],
                      operateType: 1,
                      onlySetPatch: true,
                      otherObjectArrayOptions: {},
                      targetDataSourcePaths: [],
                    },
                    line_number: 7,
                    callback1: [
                      {
                        type: 'okCallbackData',
                        dataId: 169899012121513250,
                        options: {
                          compId: 'okCallbackData',
                          compName: 'page',
                          id: '8918142',
                          pageJsonId: '884882',
                          params: '$data.groupInfo$',
                        },
                        line_number: 8,
                      },
                      {
                        type: 'closeModal',
                        dataId: 169899012121522750,
                        options: {
                          compId: 'page',
                          compName: 'page',
                          id: '208634',
                        },
                        line_number: 9,
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
        callback2: [],
      },
    ];
    eventDatavalidateCurrentForm49.params = [] || [];
    CMDGenerator(eventDatavalidateCurrentForm49, {}, 'validateCurrentForm', {
      id: 'validateCurrentForm',
      name: 'validateCurrentForm',
      type: 'validateCurrentForm',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal55: any = [
      {
        type: 'closeModal',
        dataId: '709774_1',
        options: { compId: 'page', compName: 'page', id: '7365298' },
        line_number: 1,
      },
    ];
    eventDatacloseModal55.params = [] || [];
    CMDGenerator(eventDatacloseModal55, {}, 'closeModal', {
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
    const eventDataapiRequest395: any = [
      {
        type: 'apiRequest',
        dataId: 169865434597740960,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '861063',
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
        line_number: 1,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 169865440529146370,
            options: {
              compId: 'Select_529354',
              compLib: 'comm',
              pageJsonId: '884882',
              compName: 'Select',
              id: '819865',
              data: '$reply_861063?.resultData$',
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
    eventDataapiRequest395.params = [] || [];
    CMDGenerator(eventDataapiRequest395, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse210: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '500656',
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
        dataId: 16986575100551318,
        elseIfs: [
          {
            dataName: 'elseIf',
            dataId: 169865752464192000,
            children: [
              {
                dataName: 'action',
                dataId: 169871713655991460,
                children: [
                  {
                    dataName: 'callback',
                    dataId: 169871713655935070,
                    children: [],
                    value: 'callback1',
                    params: [],
                  },
                  {
                    dataName: 'callback',
                    dataId: 169871713655921500,
                    children: [],
                    value: 'callback2',
                    params: [],
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
                  id: '4518494',
                  pageJsonId: '884882',
                  dataSourceId: 169865424292811620,
                  dataSourceName: 'groupInfo',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      attrId: '8503888',
                      code: 'groupId',
                      name: '集团编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['context', '$state.bizData$'],
                        code: 'groupId',
                      },
                    },
                    {
                      attrId: '95902',
                      code: 'groupName',
                      name: '集团名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['context', '$state.bizData$'],
                        code: 'groupName',
                      },
                    },
                    {
                      attrId: '275294',
                      code: 'basicAccessNumber',
                      name: '基本接入号',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['context', '$state.bizData$'],
                        code: 'basicAccessNumber',
                      },
                    },
                    {
                      attrId: '991743',
                      code: 'busiAccessNumber',
                      name: '业务接入号',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['context', '$state.bizData$'],
                        code: 'busiAccessNumber',
                      },
                    },
                    {
                      attrId: '387407',
                      code: 'agentName',
                      name: '代理商名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['context', '$state.bizData$'],
                        code: 'agentName',
                      },
                    },
                    {
                      attrId: '92785',
                      code: 'devChannel',
                      name: '发展渠道',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['context', '$state.bizData$'],
                        code: 'devChannel',
                      },
                    },
                    {
                      attrId: '165085',
                      code: 'devChannelName',
                      name: '发展渠道名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['context', '$state.bizData$'],
                        code: 'devChannelName',
                      },
                    },
                    {
                      attrId: '826146',
                      code: 'rowId',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['context', '$state.bizData$'],
                        code: 'rowId',
                      },
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  targetDataSourcePaths: [],
                },
                actionObjId: 'setDataSource',
                actionObjName: 'page',
                value: 'setDataSource',
                line_number: 7,
              },
            ],
            condition: [],
            value: 'elseIf',
            desc: '修改',
            callback: [
              {
                type: 'setDataSource',
                dataId: 169871713655991460,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '4518494',
                  pageJsonId: '884882',
                  dataSourceId: 169865424292811620,
                  dataSourceName: 'groupInfo',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      attrId: '8503888',
                      code: 'groupId',
                      name: '集团编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['context', '$state.bizData$'],
                        code: 'groupId',
                      },
                    },
                    {
                      attrId: '95902',
                      code: 'groupName',
                      name: '集团名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['context', '$state.bizData$'],
                        code: 'groupName',
                      },
                    },
                    {
                      attrId: '275294',
                      code: 'basicAccessNumber',
                      name: '基本接入号',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['context', '$state.bizData$'],
                        code: 'basicAccessNumber',
                      },
                    },
                    {
                      attrId: '991743',
                      code: 'busiAccessNumber',
                      name: '业务接入号',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['context', '$state.bizData$'],
                        code: 'busiAccessNumber',
                      },
                    },
                    {
                      attrId: '387407',
                      code: 'agentName',
                      name: '代理商名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['context', '$state.bizData$'],
                        code: 'agentName',
                      },
                    },
                    {
                      attrId: '92785',
                      code: 'devChannel',
                      name: '发展渠道',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['context', '$state.bizData$'],
                        code: 'devChannel',
                      },
                    },
                    {
                      attrId: '165085',
                      code: 'devChannelName',
                      name: '发展渠道名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['context', '$state.bizData$'],
                        code: 'devChannelName',
                      },
                    },
                    {
                      attrId: '826146',
                      code: 'rowId',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['context', '$state.bizData$'],
                        code: 'rowId',
                      },
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  targetDataSourcePaths: [],
                },
                line_number: 7,
                callback1: [],
                callback2: [],
              },
            ],
          },
        ],
        line_number: 3,
        callback1: [
          {
            type: 'setDisable',
            dataId: 169865757882417440,
            options: {
              compId: ['Form_398551', 'Button_602282'],
              compLib: 'comm',
              pageJsonId: '884882',
              compName: 'Form',
              id: '42029',
              disabled: 'true',
              compid: ['Form_398551', 'Button_602282'],
            },
            line_number: 4,
          },
          {
            type: 'setDataSource',
            dataId: 169865760215467040,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '202617',
              pageJsonId: '884882',
              dataSourceId: 169865424292811620,
              dataSourceName: 'groupInfo',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  attrId: '8503888',
                  code: 'groupId',
                  name: '集团编码',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: ['context', '$state.bizData$'],
                    code: 'groupId',
                  },
                  _codePath: ['groupId'],
                  _idpath: ['8503888'],
                },
                {
                  attrId: '95902',
                  code: 'groupName',
                  name: '集团名称',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: ['context', '$state.bizData$'],
                    code: 'groupName',
                  },
                  _codePath: ['groupName'],
                  _idpath: ['95902'],
                },
                {
                  attrId: '275294',
                  code: 'basicAccessNumber',
                  name: '基本接入号',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: ['context', '$state.bizData$'],
                    code: 'basicAccessNumber',
                  },
                  _codePath: ['basicAccessNumber'],
                  _idpath: ['275294'],
                },
                {
                  attrId: '991743',
                  code: 'busiAccessNumber',
                  name: '业务接入号',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: ['context', '$state.bizData$'],
                    code: 'busiAccessNumber',
                  },
                  _codePath: ['busiAccessNumber'],
                  _idpath: ['991743'],
                },
                {
                  attrId: '387407',
                  code: 'agentName',
                  name: '代理商名称',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: ['context', '$state.bizData$'],
                    code: 'agentName',
                  },
                  _codePath: ['agentName'],
                  _idpath: ['387407'],
                },
                {
                  attrId: '92785',
                  code: 'devChannel',
                  name: '发展渠道',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: ['context', '$state.bizData$'],
                    code: 'devChannel',
                  },
                  _codePath: ['devChannel'],
                  _idpath: ['92785'],
                },
                {
                  attrId: '165085',
                  code: 'devChannelName',
                  name: '发展渠道名称',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: ['context', '$state.bizData$'],
                    code: 'devChannelName',
                  },
                  _codePath: ['devChannelName'],
                  _idpath: ['165085'],
                },
                {
                  attrId: '826146',
                  code: 'rowId',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['rowId'],
                  _idpath: ['826146'],
                  value: {
                    type: ['context', '$state.bizData$'],
                    code: 'rowId',
                  },
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
          {
            type: 'console',
            dataId: 169865956532693220,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '00703',
              pageJsonId: '884882',
              value: ['$state.bizData$'],
            },
            line_number: 6,
          },
        ],
      },
    ];
    eventDataifelse210.params = [] || [];
    CMDGenerator(eventDataifelse210, {}, 'ifelse', {
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
      className="__CustomClass_884882__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_884882_1',
          uid: 'View_884882_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_884882_1')}
        {...injectData}
      >
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_632961',
            uid: 'View_632961',
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
          ref={(r: any) => refs.setComponentRef(r, 'View_632961')}
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
            formCode={'Form_398551'}
            $$componentItem={{
              id: 'Form_398551',
              uid: 'Form_398551',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            onValuesChange={(changedFieldName: any, changedValue: any) => {
              const eventDatagetCurrentFormValues27: any = [
                {
                  type: 'getCurrentFormValues',
                  dataId: 169865584227167460,
                  options: {
                    compId: 'Form_398551',
                    compLib: 'comm',
                    pageJsonId: '884882',
                    compName: 'Form',
                    id: '269088',
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'setDataSource',
                      dataId: 169865584646230430,
                      options: {
                        compId: 'setDataSource',
                        compName: 'page',
                        id: '035346',
                        pageJsonId: '884882',
                        dataSourceId: 169865424292811620,
                        dataSourceName: 'groupInfo',
                        dataSourceRelType: 'custom',
                        dataSourceSetValue: [
                          {
                            attrId: '8503888',
                            code: 'groupId',
                            name: '集团编码',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            value: {
                              type: ['context', '$Form_398551$'],
                              code: 'groupId',
                            },
                            _codePath: ['groupId'],
                            _idpath: ['8503888'],
                          },
                          {
                            attrId: '95902',
                            code: 'groupName',
                            name: '集团名称',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            value: {
                              type: ['context', '$Form_398551$'],
                              code: 'groupName',
                            },
                            _codePath: ['groupName'],
                            _idpath: ['95902'],
                          },
                          {
                            attrId: '275294',
                            code: 'basicAccessNumber',
                            name: '基本接入号',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            value: {
                              type: ['context', '$Form_398551$'],
                              code: 'basicAccessNumber',
                            },
                            _codePath: ['basicAccessNumber'],
                            _idpath: ['275294'],
                          },
                          {
                            attrId: '991743',
                            code: 'busiAccessNumber',
                            name: '业务接入号',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            value: {
                              type: ['context', '$Form_398551$'],
                              code: 'busiAccessNumber',
                            },
                            _codePath: ['busiAccessNumber'],
                            _idpath: ['991743'],
                          },
                          {
                            attrId: '387407',
                            code: 'agentName',
                            name: '代理商名称',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            value: {
                              type: ['context', '$Form_398551$'],
                              code: 'agentName',
                            },
                            _codePath: ['agentName'],
                            _idpath: ['387407'],
                          },
                          {
                            attrId: '92785',
                            code: 'devChannel',
                            name: '发展渠道',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            value: {
                              type: ['context', '$Form_398551$'],
                              code: 'devChannel',
                            },
                            _codePath: ['devChannel'],
                            _idpath: ['92785'],
                          },
                          {
                            attrId: '165085',
                            code: 'devChannelName',
                            name: '发展渠道名称',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['devChannelName'],
                            _idpath: ['165085'],
                          },
                          {
                            attrId: '826146',
                            code: 'rowId',
                            name: '属性',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['rowId'],
                            _idpath: ['826146'],
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
                },
              ];
              eventDatagetCurrentFormValues27.params =
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
                eventDatagetCurrentFormValues27,
                { changedFieldName, changedValue },
                'getCurrentFormValues',
                {
                  id: 'getCurrentFormValues',
                  name: 'getCurrentFormValues',
                  type: 'getCurrentFormValues',
                  platform: 'pc',
                },
              );
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_398551')}
            {...injectData}
          >
            <View
              name={'布局容器'}
              labelCol={8}
              wrapperCol={16}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_561734',
                uid: 'View_561734',
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
                  formItemIndex: 0,
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
              ref={(r: any) => refs.setComponentRef(r, 'View_561734')}
              {...injectData}
            />
            <Input
              name={'集团编码'}
              size={'default'}
              selfSpan={12}
              labelCol={'8'}
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
              formItemIndex={1}
              fieldName={'groupId'}
              value={data?.groupInfo?.groupId}
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
                id: 'Input_289893',
                uid: 'Input_289893',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={true}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_289893')}
              {...injectData}
            />
            <View
              name={'布局容器'}
              labelCol={8}
              wrapperCol={16}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_225653',
                uid: 'View_225653',
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
                textAlign: 'left',
                display: 'block',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_225653')}
              {...injectData}
            >
              <Button
                name={'选择'}
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
                  id: 'Button_602282',
                  uid: 'Button_602282',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ width: 'fit-content', margin: '0px 0px 0px 12px' }}
                onClick={(e: any) => {
                  const eventDatashowCustomModal187: any = [
                    {
                      type: 'showCustomModal',
                      dataId: 169865234567136800,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '6075305',
                        pageJsonId: '884882',
                        modalname: '/groupInfoSel',
                        pageId: '899848269504155648',
                        modalPath: '/groupInfoSel',
                        paramsObj: {
                          userCode: '$state.staffCode$',
                          orderNbr: '$state.orderNbr$',
                          groupCode: '1000',
                        },
                        paramsObjKeyValueMap: {
                          userCode: '$state.staffCode$',
                          orderNbr: '$state.orderNbr$',
                          groupCode: '1000',
                        },
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'console',
                          dataId: 169865346198830240,
                          options: {
                            compId: 'debug',
                            compName: 'system',
                            id: '9246295',
                            pageJsonId: '884882',
                            value: ['$okData_6075305$', '123456'],
                          },
                          line_number: 2,
                        },
                        {
                          type: 'setDataSource',
                          dataId: 169865427608246620,
                          options: {
                            compId: 'setDataSource',
                            compName: 'page',
                            id: '566591',
                            pageJsonId: '884882',
                            dataSourceId: 169865424292811620,
                            dataSourceName: 'groupInfo',
                            dataSourceRelType: 'custom',
                            dataSourceSetValue: [
                              {
                                attrId: '8503888',
                                code: 'groupId',
                                name: '集团编码',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: true,
                                value: {
                                  type: ['customize'],
                                  code: '$okData_6075305[0].groupId$',
                                },
                                _codePath: ['groupId'],
                                _idpath: ['8503888'],
                              },
                              {
                                attrId: '95902',
                                code: 'groupName',
                                name: '集团名称',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: true,
                                value: {
                                  type: ['customize'],
                                  code: '$okData_6075305[0].groupName$',
                                },
                                _codePath: ['groupName'],
                                _idpath: ['95902'],
                              },
                              {
                                attrId: '275294',
                                code: 'basicAccessNumber',
                                name: '基本接入号',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: true,
                                _codePath: ['basicAccessNumber'],
                                _idpath: ['275294'],
                              },
                              {
                                attrId: '991743',
                                code: 'busiAccessNumber',
                                name: '业务接入号',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: true,
                                _codePath: ['busiAccessNumber'],
                                _idpath: ['991743'],
                              },
                              {
                                attrId: '387407',
                                code: 'agentName',
                                name: '代理商名称',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: true,
                                _codePath: ['agentName'],
                                _idpath: ['387407'],
                              },
                              {
                                attrId: '92785',
                                code: 'devChannel',
                                name: '发展渠道',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: true,
                                _codePath: ['devChannel'],
                                _idpath: ['92785'],
                              },
                              {
                                attrId: '165085',
                                code: 'devChannelName',
                                name: '发展渠道名称',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: true,
                                _codePath: ['devChannelName'],
                                _idpath: ['165085'],
                              },
                              {
                                attrId: '826146',
                                code: 'rowId',
                                name: '属性',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: true,
                                _codePath: ['rowId'],
                                _idpath: ['826146'],
                              },
                            ],
                            operateType: 1,
                            onlySetPatch: true,
                            otherObjectArrayOptions: {},
                            targetDataSourcePaths: [],
                          },
                          line_number: 3,
                          callback1: [
                            {
                              type: 'console',
                              dataId: 169865504120652350,
                              options: {
                                compId: 'debug',
                                compName: 'system',
                                id: '563753',
                                pageJsonId: '884882',
                                value: ['$data.groupInfo$'],
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
                  eventDatashowCustomModal187.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatashowCustomModal187,
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
                ref={(r: any) => refs.setComponentRef(r, 'Button_602282')}
                {...injectData}
              />
            </View>
            <View
              name={'布局容器'}
              labelCol={8}
              wrapperCol={16}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_352131',
                uid: 'View_352131',
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
                textAlign: 'left',
                display: 'block',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_352131')}
              {...injectData}
            />
            <Input
              name={'集团名称'}
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
              fieldName={'groupName'}
              value={data?.groupInfo?.groupName}
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
                id: 'Input_2130556',
                uid: 'Input_2130556',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={true}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_2130556')}
              {...injectData}
            />
            <View
              name={'布局容器'}
              labelCol={8}
              wrapperCol={16}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_694778',
                uid: 'View_694778',
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
                  formItemIndex: 5,
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
              ref={(r: any) => refs.setComponentRef(r, 'View_694778')}
              {...injectData}
            />
            <View
              name={'布局容器'}
              labelCol={8}
              wrapperCol={16}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_937846',
                uid: 'View_937846',
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
                  formItemIndex: 6,
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
              ref={(r: any) => refs.setComponentRef(r, 'View_937846')}
              {...injectData}
            />
            <Select
              name={'发展渠道'}
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
              attr={{}}
              placeholder={'请选择'}
              formItemIndex={7}
              fieldName={'devChannel'}
              value={data?.groupInfo?.devChannel}
              $$componentItem={{
                id: 'Select_529354',
                uid: 'Select_529354',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatagetSelectedData345: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 169865681824862500,
                    options: {
                      compId: 'Select_529354',
                      compLib: 'comm',
                      pageJsonId: '884882',
                      compName: 'Select',
                      id: '8466163',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'setDataSource',
                        dataId: 169865690031739230,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '92938562',
                          pageJsonId: '884882',
                          dataSourceId: 169865424292811620,
                          dataSourceName: 'groupInfo',
                          dataSourceRelType: 'custom',
                          dataSourceSetValue: [
                            {
                              attrId: '8503888',
                              code: 'groupId',
                              name: '集团编码',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['groupId'],
                              _idpath: ['8503888'],
                            },
                            {
                              attrId: '95902',
                              code: 'groupName',
                              name: '集团名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['groupName'],
                              _idpath: ['95902'],
                            },
                            {
                              attrId: '275294',
                              code: 'basicAccessNumber',
                              name: '基本接入号',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['basicAccessNumber'],
                              _idpath: ['275294'],
                            },
                            {
                              attrId: '991743',
                              code: 'busiAccessNumber',
                              name: '业务接入号',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['busiAccessNumber'],
                              _idpath: ['991743'],
                            },
                            {
                              attrId: '387407',
                              code: 'agentName',
                              name: '代理商名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['agentName'],
                              _idpath: ['387407'],
                            },
                            {
                              attrId: '92785',
                              code: 'devChannel',
                              name: '发展渠道',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['devChannel'],
                              _idpath: ['92785'],
                            },
                            {
                              attrId: '165085',
                              code: 'devChannelName',
                              name: '发展渠道名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['devChannelName'],
                              _idpath: ['165085'],
                              value: {
                                type: ['customize'],
                                code: '$selectedData_8466163[0].label$',
                              },
                            },
                            {
                              attrId: '826146',
                              code: 'rowId',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['rowId'],
                              _idpath: ['826146'],
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
                eventDatagetSelectedData345.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData345,
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
              ref={(r: any) => refs.setComponentRef(r, 'Select_529354')}
              {...injectData}
            />
            <View
              name={'布局容器'}
              labelCol={8}
              wrapperCol={16}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_5191',
                uid: 'View_5191',
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
                  formItemIndex: 8,
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
              ref={(r: any) => refs.setComponentRef(r, 'View_5191')}
              {...injectData}
            />
            <View
              name={'布局容器'}
              labelCol={8}
              wrapperCol={16}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_5373545',
                uid: 'View_5373545',
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
                  formItemIndex: 9,
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
              ref={(r: any) => refs.setComponentRef(r, 'View_5373545')}
              {...injectData}
            />
            <Input
              name={'代理商名称'}
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
              formItemIndex={10}
              fieldName={'agentName'}
              value={data?.groupInfo?.agentName}
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
                id: 'Input_4887428',
                uid: 'Input_4887428',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_4887428')}
              {...injectData}
            />
            <View
              name={'布局容器'}
              labelCol={8}
              wrapperCol={16}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_90806',
                uid: 'View_90806',
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
              ref={(r: any) => refs.setComponentRef(r, 'View_90806')}
              {...injectData}
            />
            <View
              name={'布局容器'}
              labelCol={8}
              wrapperCol={16}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_89121',
                uid: 'View_89121',
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
                  formItemIndex: 12,
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
              ref={(r: any) => refs.setComponentRef(r, 'View_89121')}
              {...injectData}
            />
            <Input
              name={'基本接入号'}
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
              formItemIndex={13}
              fieldName={'basicAccessNumber'}
              value={data?.groupInfo?.basicAccessNumber}
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
                id: 'Input_375185',
                uid: 'Input_375185',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_375185')}
              {...injectData}
            />
            <View
              name={'布局容器'}
              labelCol={8}
              wrapperCol={16}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_580862',
                uid: 'View_580862',
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
                  formItemIndex: 14,
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
              ref={(r: any) => refs.setComponentRef(r, 'View_580862')}
              {...injectData}
            />
            <View
              name={'布局容器'}
              labelCol={8}
              wrapperCol={16}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_593768',
                uid: 'View_593768',
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
                  formItemIndex: 15,
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
              ref={(r: any) => refs.setComponentRef(r, 'View_593768')}
              {...injectData}
            />
            <Input
              name={'业务接入号'}
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
              formItemIndex={16}
              fieldName={'busiAccessNumber'}
              value={data?.groupInfo?.busiAccessNumber}
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
                id: 'Input_200922',
                uid: 'Input_200922',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_200922')}
              {...injectData}
            />
          </Form>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(IndustryPortReopen$$Modal, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {
    bizId: '',
    sceneCode: '',
    bizData: '',
    staffCode: '',
    orderNbr: '',
    catalogCode: '',
  },
});
