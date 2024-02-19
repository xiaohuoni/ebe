// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import { Card, Form, Input, Table, View } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const QueryLine$$Modal: React.FC<PageProps> = ({
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
    const eventDataifelse100: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '815482',
            options: {
              useManual: true,
              useObject: false,
              context: '$state.prodId$',
              operate: '==',
              manualValue: '3514',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 170606623707836350,
        elseIfs: [
          {
            dataName: 'elseIf',
            dataId: 170606623707805500,
            children: [
              {
                dataName: 'action',
                dataId: 170606633765337730,
                children: [
                  {
                    dataName: 'callback',
                    dataId: 170606633765408450,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 170606634348294560,
                        children: [],
                        todoOptions: ['setParams'],
                        options: {
                          compId: 'okCallbackData',
                          compName: 'page',
                          id: '7455047',
                          pageJsonId: '784293',
                          params: '$selectedRows_5653254[0]$',
                        },
                        actionObjId: 'okCallbackData',
                        actionObjName: 'page',
                        value: 'okCallbackData',
                        line_number: 6,
                      },
                      {
                        dataName: 'action',
                        dataId: 170606634348252220,
                        children: [],
                        todoOptions: [],
                        options: {
                          compId: 'closeModal',
                          compName: 'page',
                          id: '9042834',
                          pageJsonId: '784293',
                        },
                        actionObjId: 'closeModal',
                        actionObjName: 'page',
                        value: 'closeModal',
                        line_number: 7,
                      },
                    ],
                    value: 'callback1',
                    params: [],
                  },
                  {
                    dataName: 'callback',
                    dataId: 170606633765442080,
                    children: [],
                    value: 'callback2',
                    params: [],
                  },
                ],
                todoOptions: [],
                options: {
                  compId: 'Table_505147',
                  compLib: 'comm',
                  pageJsonId: '784293',
                  compName: 'Table',
                  id: '5653254',
                },
                actionObjId: 'Table_505147',
                actionObjName: 'Table',
                value: 'getTableSelected',
                compLib: 'comm',
                line_number: 5,
              },
            ],
            condition: [
              {
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$state.prodId$',
                  operate: '==',
                  manualValue: '3367',
                },
                condId: '326204',
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            value: 'elseIf',
            desc: '商务快线',
            callback: [
              {
                type: 'getTableSelected',
                dataId: 170606633765337730,
                options: {
                  compId: 'Table_505147',
                  compLib: 'comm',
                  pageJsonId: '784293',
                  compName: 'Table',
                  id: '5653254',
                },
                line_number: 5,
                callback1: [
                  {
                    type: 'okCallbackData',
                    dataId: 170606634348294560,
                    options: {
                      compId: 'okCallbackData',
                      compName: 'page',
                      id: '7455047',
                      pageJsonId: '784293',
                      params: '$selectedRows_5653254[0]$',
                    },
                    line_number: 6,
                  },
                  {
                    type: 'closeModal',
                    dataId: 170606634348252220,
                    options: {
                      compId: 'closeModal',
                      compName: 'page',
                      id: '9042834',
                      pageJsonId: '784293',
                    },
                    line_number: 7,
                  },
                ],
                callback2: [],
              },
            ],
          },
          {
            dataName: 'elseIf',
            dataId: 170606623707843500,
            children: [
              {
                dataName: 'action',
                dataId: 170606628115747170,
                children: [
                  {
                    dataName: 'callback',
                    dataId: 170606628115734620,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 170606628115795600,
                        children: [],
                        todoOptions: ['valueArray'],
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '579495',
                          pageJsonId: '784293',
                          value: ['$selectedRows_980714[0]$', '表格选择行'],
                        },
                        actionObjId: 'debug',
                        actionObjName: 'system',
                        value: 'console',
                        line_number: 9,
                      },
                      {
                        dataName: 'action',
                        dataId: 170606628115764770,
                        children: [],
                        todoOptions: ['setParams'],
                        options: {
                          compId: 'okCallbackData',
                          compName: 'page',
                          id: '886599',
                          pageJsonId: '784293',
                          params: '$selectedRows_980714[0]$',
                        },
                        actionObjId: 'okCallbackData',
                        actionObjName: 'page',
                        value: 'okCallbackData',
                        line_number: 10,
                      },
                      {
                        dataName: 'action',
                        dataId: 170606628115769500,
                        children: [],
                        todoOptions: [],
                        options: {
                          compId: 'closeModal',
                          compName: 'page',
                          id: '520918',
                          pageJsonId: '784293',
                        },
                        actionObjId: 'closeModal',
                        actionObjName: 'page',
                        value: 'closeModal',
                        line_number: 11,
                      },
                    ],
                    value: 'callback1',
                    params: [],
                  },
                  {
                    dataName: 'callback',
                    dataId: 170606628115760500,
                    children: [],
                    value: 'callback2',
                    params: [],
                  },
                ],
                todoOptions: [],
                options: {
                  compId: 'Table_1286184',
                  compLib: 'comm',
                  pageJsonId: '784293',
                  compName: 'Table',
                  id: '980714',
                },
                actionObjId: 'Table_1286184',
                actionObjName: 'Table',
                value: 'getTableSelected',
                compLib: 'comm',
                line_number: 8,
              },
            ],
            condition: [],
            value: 'elseIf',
            desc: '互联网专线',
            callback: [
              {
                type: 'getTableSelected',
                dataId: 170606628115747170,
                options: {
                  compId: 'Table_1286184',
                  compLib: 'comm',
                  pageJsonId: '784293',
                  compName: 'Table',
                  id: '980714',
                },
                line_number: 8,
                callback1: [
                  {
                    type: 'console',
                    dataId: 170606628115795600,
                    options: {
                      compId: 'debug',
                      compName: 'system',
                      id: '579495',
                      pageJsonId: '784293',
                      value: ['$selectedRows_980714[0]$', '表格选择行'],
                    },
                    line_number: 9,
                  },
                  {
                    type: 'okCallbackData',
                    dataId: 170606628115764770,
                    options: {
                      compId: 'okCallbackData',
                      compName: 'page',
                      id: '886599',
                      pageJsonId: '784293',
                      params: '$selectedRows_980714[0]$',
                    },
                    line_number: 10,
                  },
                  {
                    type: 'closeModal',
                    dataId: 170606628115769500,
                    options: {
                      compId: 'closeModal',
                      compName: 'page',
                      id: '520918',
                      pageJsonId: '784293',
                    },
                    line_number: 11,
                  },
                ],
                callback2: [],
              },
            ],
          },
        ],
        line_number: 1,
        callback1: [
          {
            type: 'getTableSelected',
            dataId: 170606629560345470,
            options: {
              compId: 'Table_8107356',
              compLib: 'comm',
              pageJsonId: '784293',
              compName: 'Table',
              id: '495122',
            },
            line_number: 2,
            callback1: [
              {
                type: 'okCallbackData',
                dataId: 170606630625793340,
                options: {
                  compId: 'okCallbackData',
                  compName: 'page',
                  id: '874999',
                  pageJsonId: '784293',
                  params: '$selectedRows_495122[0]$',
                },
                line_number: 3,
              },
              {
                type: 'closeModal',
                dataId: 170606630625780930,
                options: {
                  compId: 'closeModal',
                  compName: 'page',
                  id: '803875',
                  pageJsonId: '784293',
                },
                line_number: 4,
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse100.params = [] || [];
    CMDGenerator(eventDataifelse100, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal11: any = [
      {
        type: 'closeModal',
        dataId: '5421746_1',
        options: { compId: 'page', compName: 'page', id: '1446484' },
        line_number: 1,
      },
    ];
    eventDatacloseModal11.params = [] || [];
    CMDGenerator(eventDatacloseModal11, {}, 'closeModal', {
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
    const eventDataapiRequest163: any = [
      {
        type: 'apiRequest',
        dataId: 168793992279226530,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '92058',
          pageJsonId: '784293',
          sync: false,
          actionTitle: '',
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qrySalesGroupLineList',
          _apiCode: 'qrySalesGroupLineList',
          _source: 'rhin',
          _sourceName: '查询销售中心集团专线列表',
          _serviceId: '991237059374669824',
          _serviceTitle: '查询销售中心集团专线列表: qrySalesGroupLineList',
          valueType: 'object',
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
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-0',
                  id: 'root.header',
                  dataKey: '92058_root.header',
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
                  dataKey: '92058_root.path',
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
                  dataKey: '92058_root.query',
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  children: [
                    {
                      code: 'groupId',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.groupId',
                      compType: 'Input',
                      name: 'groupId',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-0',
                      id: 'root.body.groupId',
                      dataKey: '92058_root.body.groupId',
                      value: { type: ['context', '$state.groupId$'], code: '' },
                    },
                    {
                      code: 'productId',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.productId',
                      compType: 'Input',
                      name: 'productId',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                      id: 'root.body.productId',
                      dataKey: '92058_root.body.productId',
                      value: { type: ['context', '$state.prodId$'], code: '' },
                    },
                    {
                      code: 'projectId',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.projectId',
                      compType: 'Input',
                      name: 'projectId',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-2',
                      id: 'root.body.projectId',
                      dataKey: '92058_root.body.projectId',
                    },
                    {
                      code: 'bandwidth',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.bandwidth',
                      compType: 'Input',
                      name: 'bandwidth',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-3',
                      id: 'root.body.bandwidth',
                      dataKey: '92058_root.body.bandwidth',
                    },
                    {
                      code: 'lineId',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.lineId',
                      compType: 'Input',
                      name: 'lineId',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-4',
                      id: 'root.body.lineId',
                      dataKey: '92058_root.body.lineId',
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-3',
                  id: 'root.body',
                  dataKey: '92058_root.body',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '92058_root',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 168794105735808670,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '1903',
              pageJsonId: '784293',
              dataSourceId: 168794034772979170,
              dataSourceName: 'lineData',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  code: 'lineList',
                  children: [
                    {
                      code: 'dispatchAddr',
                      name: '属性',
                      type: 'string',
                      attrId: '904953',
                      initialData: { type: 'static', value: '派单安装地址' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'portaContactPhone',
                      name: '属性',
                      type: 'string',
                      attrId: '57533',
                      initialData: { type: 'static', value: '18850114944' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'openRequireNo',
                      name: '属性',
                      type: 'string',
                      attrId: '022796',
                      initialData: {
                        type: 'static',
                        value: 'FZ1012018062279564-000',
                      },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'bstarttime',
                      name: '属性',
                      type: 'string',
                      attrId: '0378826',
                      initialData: { type: 'static', value: '20180712' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'ipAddr',
                      name: '属性',
                      type: 'string',
                      attrId: '6508728',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'testReport',
                      name: '属性',
                      type: 'string',
                      attrId: '6910424',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'installAddr',
                      name: '属性',
                      type: 'string',
                      attrId: '154615',
                      initialData: {
                        type: 'static',
                        value: '福建省福州市鼓楼区鼓东街道马尾儒江西路',
                      },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'transferMode',
                      name: '属性',
                      type: 'string',
                      attrId: '703223',
                      initialData: { type: 'static', value: '3' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'cusAppservIpv6addNum',
                      name: '属性',
                      type: 'string',
                      attrId: '334526',
                      initialData: { type: 'static' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'portaContact',
                      name: '属性',
                      type: 'string',
                      attrId: '976424',
                      initialData: { type: 'static', value: '大白' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'isStrideCity',
                      name: '属性',
                      type: 'string',
                      attrId: '375787',
                      initialData: { type: 'static', value: '6' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'businessMode',
                      name: '属性',
                      type: 'string',
                      attrId: '675924',
                      initialData: { type: 'static', value: '3512' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'bandwidth',
                      name: '属性',
                      type: 'string',
                      attrId: '089947',
                      initialData: { type: 'static', value: '10' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'needBuild',
                      name: '属性',
                      type: 'string',
                      attrId: '080545',
                      initialData: { type: 'static', value: '0' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'specialAttrName',
                      name: '属性',
                      type: 'string',
                      attrId: '0982897',
                      initialData: { type: 'static', value: '不需要建设' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'lineCost',
                      name: '属性',
                      type: 'number',
                      attrId: '346566',
                      initialData: { type: 'static', value: '100' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'specialLine',
                      name: '属性',
                      type: 'string',
                      attrId: '482048',
                      initialData: {
                        type: 'static',
                        value: '591351220140813002932',
                      },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'circuitCode',
                      name: '属性',
                      type: 'string',
                      attrId: '36261101',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'transferModeName',
                      name: '属性',
                      type: 'string',
                      attrId: '976023',
                      initialData: { type: 'static', value: 'PDH' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'cusAppservIpaddNum',
                      name: '属性',
                      type: 'string',
                      attrId: '921368',
                      initialData: { type: 'static', value: '100' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'transfBusiness',
                      name: '属性',
                      type: 'string',
                      attrId: '440679',
                      initialData: { type: 'static', value: '9' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'widthCode',
                      name: '属性',
                      type: 'string',
                      attrId: '368795',
                      initialData: { type: 'static', value: '5' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'areaa',
                      name: '属性',
                      type: 'string',
                      attrId: '7716191',
                      initialData: { type: 'static', value: '101' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'bizSecurityLvName',
                      name: '属性',
                      type: 'string',
                      attrId: '699188',
                      initialData: { type: 'static', value: '普通' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'isStrideCityName',
                      name: '属性',
                      type: 'string',
                      attrId: '087209',
                      initialData: { type: 'static', value: '本地区内' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'bizSecurityLv',
                      name: '属性',
                      type: 'string',
                      attrId: '849405',
                      initialData: { type: 'static', value: '1' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'installationPrice',
                      name: '属性',
                      type: 'number',
                      attrId: '748941',
                      initialData: { type: 'static', value: '11' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'specialAttr',
                      name: '属性',
                      type: 'string',
                      attrId: '7723642',
                      initialData: { type: 'static', value: '5' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'status',
                      name: '属性',
                      type: 'string',
                      attrId: '885973',
                      initialData: { type: 'static', value: '0' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                  ],
                  name: '',
                  type: 'objectArray',
                  attrId: '054823',
                  initialData: { type: 'static' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['context', '$reply_92058?.resultData.lineList$'],
                    code: '',
                  },
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
              targetDataSourcePaths: [],
            },
            line_number: 2,
            callback1: [
              {
                type: 'console',
                dataId: 168912454158677400,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '550678',
                  pageJsonId: '784293',
                  value: ['专线数据源', '$data.lineData$'],
                },
                line_number: 3,
              },
            ],
            callback2: [],
          },
        ],
        callback2: [
          {
            type: 'setDataSource',
            dataId: 168912600096008130,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '18211525',
              pageJsonId: '784293',
              dataSourceId: 168794034772979170,
              dataSourceName: 'lineData',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  code: 'lineList',
                  children: [
                    {
                      code: 'dispatchAddr',
                      name: '属性',
                      type: 'string',
                      attrId: '904953',
                      initialData: { type: 'static', value: '派单安装地址' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'portaContactPhone',
                      name: '属性',
                      type: 'string',
                      attrId: '57533',
                      initialData: { type: 'static', value: '18850114944' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'openRequireNo',
                      name: '属性',
                      type: 'string',
                      attrId: '022796',
                      initialData: {
                        type: 'static',
                        value: 'FZ1012018062279564-000',
                      },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'bstarttime',
                      name: '属性',
                      type: 'string',
                      attrId: '0378826',
                      initialData: { type: 'static', value: '20180712' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'ipAddr',
                      name: '属性',
                      type: 'string',
                      attrId: '6508728',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'testReport',
                      name: '属性',
                      type: 'string',
                      attrId: '6910424',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'installAddr',
                      name: '属性',
                      type: 'string',
                      attrId: '154615',
                      initialData: {
                        type: 'static',
                        value: '福建省福州市鼓楼区鼓东街道马尾儒江西路',
                      },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                      value: {
                        type: ['customize'],
                        code: '福建省福州市鼓楼区',
                      },
                    },
                    {
                      code: 'transferMode',
                      name: '属性',
                      type: 'string',
                      attrId: '703223',
                      initialData: { type: 'static', value: '3' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                      value: { type: ['customize'], code: '1' },
                    },
                    {
                      code: 'cusAppservIpv6addNum',
                      name: '属性',
                      type: 'string',
                      attrId: '334526',
                      initialData: { type: 'static' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'portaContact',
                      name: '属性',
                      type: 'string',
                      attrId: '976424',
                      initialData: { type: 'static', value: '大白' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'isStrideCity',
                      name: '属性',
                      type: 'string',
                      attrId: '375787',
                      initialData: { type: 'static', value: '6' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'businessMode',
                      name: '属性',
                      type: 'string',
                      attrId: '675924',
                      initialData: { type: 'static', value: '3512' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'bandwidth',
                      name: '属性',
                      type: 'string',
                      attrId: '089947',
                      initialData: { type: 'static', value: '10' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                      value: { type: ['customize'], code: '10G' },
                    },
                    {
                      code: 'needBuild',
                      name: '属性',
                      type: 'string',
                      attrId: '080545',
                      initialData: { type: 'static', value: '0' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'specialAttrName',
                      name: '属性',
                      type: 'string',
                      attrId: '0982897',
                      initialData: { type: 'static', value: '不需要建设' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'lineCost',
                      name: '属性',
                      type: 'number',
                      attrId: '346566',
                      initialData: { type: 'static', value: '100' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'specialLine',
                      name: '属性',
                      type: 'string',
                      attrId: '482048',
                      initialData: {
                        type: 'static',
                        value: '591351220140813002932',
                      },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                      value: { type: ['customize'], code: '123456' },
                    },
                    {
                      code: 'circuitCode',
                      name: '属性',
                      type: 'string',
                      attrId: '36261101',
                      initialData: { type: 'static', value: '' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'transferModeName',
                      name: '属性',
                      type: 'string',
                      attrId: '976023',
                      initialData: { type: 'static', value: 'PDH' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                      value: { type: ['customize'], code: 'PON' },
                    },
                    {
                      code: 'cusAppservIpaddNum',
                      name: '属性',
                      type: 'string',
                      attrId: '921368',
                      initialData: { type: 'static', value: '100' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'transfBusiness',
                      name: '属性',
                      type: 'string',
                      attrId: '440679',
                      initialData: { type: 'static', value: '9' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'widthCode',
                      name: '属性',
                      type: 'string',
                      attrId: '368795',
                      initialData: { type: 'static', value: '5' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'areaa',
                      name: '属性',
                      type: 'string',
                      attrId: '7716191',
                      initialData: { type: 'static', value: '101' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'bizSecurityLvName',
                      name: '属性',
                      type: 'string',
                      attrId: '699188',
                      initialData: { type: 'static', value: '普通' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                      value: { type: ['customize'], code: 'AA' },
                    },
                    {
                      code: 'isStrideCityName',
                      name: '属性',
                      type: 'string',
                      attrId: '087209',
                      initialData: { type: 'static', value: '本地区内' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'bizSecurityLv',
                      name: '属性',
                      type: 'string',
                      attrId: '849405',
                      initialData: { type: 'static', value: '1' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                      value: { type: ['customize'], code: 'AA' },
                    },
                    {
                      code: 'installationPrice',
                      name: '属性',
                      type: 'number',
                      attrId: '748941',
                      initialData: { type: 'static', value: '11' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'specialAttr',
                      name: '属性',
                      type: 'string',
                      attrId: '7723642',
                      initialData: { type: 'static', value: '5' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                    {
                      code: 'status',
                      name: '属性',
                      type: 'string',
                      attrId: '885973',
                      initialData: { type: 'static', value: '0' },
                      parentKey: 'lineList',
                      parentType: 'objectArray',
                      showInput: false,
                      parentCode: 'lineList',
                    },
                  ],
                  name: '',
                  type: 'objectArray',
                  attrId: '054823',
                  initialData: { type: 'static' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
              ],
              operateType: 0,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
              targetDataSourcePaths: [
                { operateType: 0, onlySetPatch: true, attrId: '054823' },
              ],
            },
            line_number: 4,
            callback1: [],
            callback2: [],
          },
        ],
      },
    ];
    eventDataapiRequest163.params = [] || [];
    CMDGenerator(eventDataapiRequest163, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse101: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '357898',
            options: { context: '$state.prodName$', operate: 'notEmpty' },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 170597440549640300,
        elseIfs: [],
        line_number: 5,
        callback1: [
          {
            type: 'setValue',
            dataId: 170597442555624670,
            options: {
              compId: 'Input_4573226',
              compLib: 'comm',
              pageJsonId: '784293',
              compName: 'Input',
              id: '995808',
              valueList: { Input_4573226: '$state.prodName$' },
            },
            line_number: 6,
            callback1: [],
          },
        ],
      },
    ];
    eventDataifelse101.params = [] || [];
    CMDGenerator(eventDataifelse101, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDataifelse102: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '815482',
            options: {
              useManual: true,
              useObject: false,
              context: '$state.prodId$',
              operate: '==',
              manualValue: '3514',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 170597700008300260,
        elseIfs: [
          {
            dataName: 'elseIf',
            dataId: 170597702969755680,
            children: [
              {
                dataName: 'action',
                dataId: 170597707414309900,
                children: [],
                todoOptions: ['visible', 'selectComp'],
                options: {
                  compId: ['Table_505147'],
                  compLib: 'comm',
                  pageJsonId: '784293',
                  compName: 'Table',
                  id: '099627',
                  visible: 'true',
                  compid: ['Table_505147'],
                },
                actionObjId: 'Table_1286184',
                actionObjName: 'Table',
                value: 'setVisible',
                compLib: 'comm',
                line_number: 9,
              },
            ],
            condition: [
              {
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$state.prodId$',
                  operate: '==',
                  manualValue: '3367',
                },
                condId: '326204',
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            value: 'elseIf',
            desc: '商务快线',
            callback: [
              {
                type: 'setVisible',
                dataId: 170597707414309900,
                options: {
                  compId: ['Table_505147'],
                  compLib: 'comm',
                  pageJsonId: '784293',
                  compName: 'Table',
                  id: '099627',
                  visible: 'true',
                  compid: ['Table_505147'],
                },
                line_number: 9,
              },
            ],
          },
          {
            dataName: 'elseIf',
            dataId: 170597703294560420,
            children: [
              {
                dataName: 'action',
                dataId: 170606152940429250,
                children: [],
                todoOptions: ['visible', 'selectComp'],
                options: {
                  compId: ['Table_1286184'],
                  compLib: 'comm',
                  pageJsonId: '784293',
                  compName: 'Table',
                  id: '423822',
                  visible: 'true',
                  compid: ['Table_1286184'],
                },
                actionObjId: 'Table_1286184',
                actionObjName: 'Table',
                value: 'setVisible',
                compLib: 'comm',
                line_number: 10,
              },
            ],
            condition: [],
            value: 'elseIf',
            desc: '互联网专线',
            callback: [
              {
                type: 'setVisible',
                dataId: 170606152940429250,
                options: {
                  compId: ['Table_1286184'],
                  compLib: 'comm',
                  pageJsonId: '784293',
                  compName: 'Table',
                  id: '423822',
                  visible: 'true',
                  compid: ['Table_1286184'],
                },
                line_number: 10,
              },
            ],
          },
        ],
        line_number: 7,
        callback1: [
          {
            type: 'setVisible',
            dataId: 170597706313143000,
            options: {
              compId: ['Table_8107356'],
              compLib: 'comm',
              pageJsonId: '784293',
              compName: 'Table',
              id: '695519',
              visible: 'true',
              compid: ['Table_8107356'],
            },
            line_number: 8,
          },
        ],
      },
    ];
    eventDataifelse102.params = [] || [];
    CMDGenerator(eventDataifelse102, {}, 'ifelse', {
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
      className="__CustomClass_784293__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_784293_1',
          uid: 'View_784293_1',
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
        ref={(r: any) => (refs['View_784293_1'] = r)}
        {...injectData}
      >
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_2188005',
            uid: 'View_2188005',
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
          ref={(r: any) => (refs['View_2188005'] = r)}
          {...injectData}
        >
          <Card
            name={'卡片'}
            cardIconType={'none'}
            extendNum={3}
            title={'专线查询'}
            bordered={true}
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
              id: 'Card_254938',
              uid: 'Card_254938',
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
            ref={(r: any) => (refs['Card_254938'] = r)}
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
              formCode={'Form_946046'}
              $$componentItem={{
                id: 'Form_946046',
                uid: 'Form_946046',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ padding: '0px 0px 0px 0px' }}
              ref={(r: any) => (refs['Form_946046'] = r)}
              {...injectData}
            >
              <Input
                name={'产品'}
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
                required={true}
                placeholder={'请输入'}
                formItemIndex={0}
                fieldName={'1'}
                defaultValue={'互联网专线'}
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
                  id: 'Input_4573226',
                  uid: 'Input_4573226',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_4573226'] = r)}
                {...injectData}
              />
            </Form>
            <Table
              name={'互联网专线表格'}
              isFlexColumn={false}
              extendNum={3}
              adjustModel={'auto'}
              pageSize={10}
              current={1}
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
                  title: '专线编码',
                  key: 'specialLine',
                  dataIndex: 'specialLine',
                  id: '84719813',
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
                  title: '带宽',
                  key: 'bandwidth',
                  dataIndex: 'bandwidth',
                  id: '432565',
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
                  title: '接入方式',
                  key: 'transferModeName',
                  dataIndex: 'transferModeName',
                  id: '2796288',
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
                  title: '安装地址',
                  key: 'installAddr',
                  dataIndex: 'installAddr',
                  id: '477131',
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
                  title: '业务保障等级',
                  key: 'bizSecurityLvName',
                  dataIndex: 'bizSecurityLvName',
                  id: '044437',
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
                  id: '3384173',
                  title: 'IPv4数',
                  dataIndex: 'cusAppservIpaddNum',
                  key: '3384173',
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
                  id: '3171775',
                  title: 'IPv6数',
                  dataIndex: 'cusAppservIpv6addNum',
                  key: '3171775',
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
              selectType={'radio'}
              bordered={'segmentation'}
              size={'middle'}
              fixedAction={false}
              rowSelection={{ type: 'radio' }}
              showHead={false}
              showTotal={false}
              showSizeChanger={false}
              showQuickJumper={false}
              pageSizeOptions={'[5,10,20]'}
              customNum={3}
              formItemIndex={0}
              rowKey={'specialLine'}
              dataSource={data?.lineData?.lineList}
              fieldName={'specialLine'}
              dataSourceFromDataSourceConfig={'data.lineData.lineList'}
              $$componentItem={{
                id: 'Table_1286184',
                uid: 'Table_1286184',
                type: 'Table',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              ref={(r: any) => (refs['Table_1286184'] = r)}
              {...injectData}
            />
            <Table
              name={'广域网专线表格'}
              isFlexColumn={false}
              extendNum={3}
              adjustModel={'auto'}
              pageSize={10}
              current={1}
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
                  title: '专线编码',
                  key: 'specialLine',
                  dataIndex: 'specialLine',
                  id: '84719813',
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
                  title: '带宽',
                  key: 'bandwidth',
                  dataIndex: 'bandwidth',
                  id: '432565',
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
                  title: '区域类型',
                  key: 'transferModeName',
                  dataIndex: 'transferModeName',
                  id: '2796288',
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
                  title: '单条实收价',
                  key: 'installAddr',
                  dataIndex: 'installAddr',
                  id: '477131',
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
                  title: '条数',
                  key: 'bizSecurityLvName',
                  dataIndex: 'bizSecurityLvName',
                  id: '044437',
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
                  id: '3384173',
                  title: 'A端地址',
                  dataIndex: 'aDispatchAddr',
                  key: '3384173',
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
                  id: '3171775',
                  title: 'Z端地址',
                  dataIndex: 'zDispatchAddr',
                  key: '3171775',
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
              selectType={'radio'}
              bordered={'segmentation'}
              size={'middle'}
              fixedAction={false}
              rowSelection={{ type: 'radio' }}
              showHead={false}
              showTotal={false}
              showSizeChanger={false}
              showQuickJumper={false}
              pageSizeOptions={'[5,10,20]'}
              customNum={3}
              formItemIndex={0}
              rowKey={'specialLine'}
              dataSource={data?.lineData?.lineList}
              fieldName={'specialLine'}
              dataSourceFromDataSourceConfig={'data.lineData.lineList'}
              $$componentItem={{
                id: 'Table_8107356',
                uid: 'Table_8107356',
                type: 'Table',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              ref={(r: any) => (refs['Table_8107356'] = r)}
              {...injectData}
            />
            <Table
              name={'商务快线表格'}
              isFlexColumn={false}
              extendNum={3}
              adjustModel={'auto'}
              pageSize={10}
              current={1}
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
                  title: '专线编码',
                  key: 'specialLine',
                  dataIndex: 'specialLine',
                  id: '84719813',
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
                  title: '上行带宽',
                  key: 'bandwidth',
                  dataIndex: 'upstreamBandwidth',
                  id: '432565',
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
                  title: '下行带宽',
                  key: 'transferModeName',
                  dataIndex: 'downstreamBandwidth',
                  id: '2796288',
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
                  title: 'IPV4个数',
                  key: 'installAddr',
                  dataIndex: 'cusAppservIpaddNum',
                  id: '477131',
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
                  title: '单条实收价',
                  key: 'bizSecurityLvName',
                  dataIndex: 'bizSecurityLvName',
                  id: '044437',
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
                  id: '3384173',
                  title: '安装条数',
                  dataIndex: 'ipv4Num',
                  key: '3384173',
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
                  id: '3171775',
                  title: '安装地址',
                  dataIndex: 'dispatchAddr',
                  key: '3171775',
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
              selectType={'radio'}
              bordered={'segmentation'}
              size={'middle'}
              fixedAction={false}
              rowSelection={{ type: 'radio' }}
              showHead={false}
              showTotal={false}
              showSizeChanger={false}
              showQuickJumper={false}
              pageSizeOptions={'[5,10,20]'}
              customNum={3}
              formItemIndex={0}
              rowKey={'specialLine'}
              dataSource={data?.lineData?.lineList}
              fieldName={'specialLine'}
              dataSourceFromDataSourceConfig={'data.lineData.lineList'}
              $$componentItem={{
                id: 'Table_505147',
                uid: 'Table_505147',
                type: 'Table',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              ref={(r: any) => (refs['Table_505147'] = r)}
              {...injectData}
            />
            <Table
              name={'SDWAN省内资费'}
              isFlexColumn={false}
              extendNum={3}
              adjustModel={'auto'}
              pageSize={10}
              current={1}
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
                  title: '专线编码',
                  key: 'specialLine',
                  dataIndex: 'specialLine',
                  id: '84719813',
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
                  title: '带宽',
                  key: 'bandwidth',
                  dataIndex: 'bandwidth',
                  id: '432565',
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
                  title: '接入方式',
                  key: 'transferModeName',
                  dataIndex: 'transferModeName',
                  id: '2796288',
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
                  title: '安装地址',
                  key: 'installAddr',
                  dataIndex: 'installAddr',
                  id: '477131',
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
                  title: '业务保障等级',
                  key: 'bizSecurityLvName',
                  dataIndex: 'bizSecurityLvName',
                  id: '044437',
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
                  id: '3384173',
                  title: 'IPv4数',
                  dataIndex: 'ipv4Num',
                  key: '3384173',
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
                  id: '3171775',
                  title: 'IPv6数',
                  dataIndex: 'ipv6Num',
                  key: '3171775',
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
              selectType={'radio'}
              bordered={'segmentation'}
              size={'middle'}
              fixedAction={false}
              rowSelection={{ type: 'radio' }}
              showHead={false}
              showTotal={false}
              showSizeChanger={false}
              showQuickJumper={false}
              pageSizeOptions={'[5,10,20]'}
              customNum={3}
              formItemIndex={0}
              rowKey={'specialLine'}
              dataSource={data?.lineData?.lineList}
              fieldName={'specialLine'}
              dataSourceFromDataSourceConfig={'data.lineData.lineList'}
              $$componentItem={{
                id: 'Table_9147857',
                uid: 'Table_9147857',
                type: 'Table',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              ref={(r: any) => (refs['Table_9147857'] = r)}
              {...injectData}
            />
            <Table
              name={'集团MPLS-VPN专线资费'}
              isFlexColumn={false}
              extendNum={3}
              adjustModel={'auto'}
              pageSize={10}
              current={1}
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
                  title: '专线编码',
                  key: 'specialLine',
                  dataIndex: 'specialLine',
                  id: '84719813',
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
                  title: '带宽',
                  key: 'bandwidth',
                  dataIndex: 'bandwidth',
                  id: '432565',
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
                  title: '接入方式',
                  key: 'transferModeName',
                  dataIndex: 'transferModeName',
                  id: '2796288',
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
                  title: '安装地址',
                  key: 'installAddr',
                  dataIndex: 'installAddr',
                  id: '477131',
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
                  title: '业务保障等级',
                  key: 'bizSecurityLvName',
                  dataIndex: 'bizSecurityLvName',
                  id: '044437',
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
                  id: '3384173',
                  title: 'IPv4数',
                  dataIndex: 'ipv4Num',
                  key: '3384173',
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
                  id: '3171775',
                  title: 'IPv6数',
                  dataIndex: 'ipv6Num',
                  key: '3171775',
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
              selectType={'radio'}
              bordered={'segmentation'}
              size={'middle'}
              fixedAction={false}
              rowSelection={{ type: 'radio' }}
              showHead={false}
              showTotal={false}
              showSizeChanger={false}
              showQuickJumper={false}
              pageSizeOptions={'[5,10,20]'}
              customNum={3}
              formItemIndex={0}
              rowKey={'specialLine'}
              dataSource={data?.lineData?.lineList}
              fieldName={'specialLine'}
              dataSourceFromDataSourceConfig={'data.lineData.lineList'}
              $$componentItem={{
                id: 'Table_721063',
                uid: 'Table_721063',
                type: 'Table',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              ref={(r: any) => (refs['Table_721063'] = r)}
              {...injectData}
            />
          </Card>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(QueryLine$$Modal, {
  pageId: '991181819535351808',
  hasLogin: false,
  dataSource,
  defaultState: {
    bizId: '',
    sceneCode: '',
    bizData: '',
    groupId: '',
    prodId: '',
    prodName: '',
  },
});
