// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  Text,
  Card,
  RemoteComponent,
  Row,
  Form,
  Input,
  Table,
  Radio,
  Select,
  TextArea,
  Button,
} from '@/components/factory';

import BusiComp0496635 from '@/components/BusiComp0496635';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const pageId = '908280951234510848';
const MergeOrderApprove$$Page: React.FC<PageProps> = ({
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
  const nextTacheChange = (options_085079: any) => {
    const eventDataclearValue16: any = [
      {
        type: 'clearValue',
        dataId: 16684268858369692,
        options: {
          compId: 'Input_668689_2052015_8235997',
          compLib: 'comm',
          pageJsonId: '763609',
          compName: 'Input',
          id: '382115',
        },
        line_number: 1,
      },
    ];
    eventDataclearValue16.params =
      [
        {
          title: '事件入参',
          name: 'options_085079',
          value: '$options_085079$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue16, { options_085079 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDataclearValue17: any = [
      {
        type: 'clearValue',
        dataId: 166842688984483800,
        options: {
          compId: 'Input_9206452_698968_5646934',
          compLib: 'comm',
          pageJsonId: '763609',
          compName: 'Input',
          id: '969603',
        },
        line_number: 2,
      },
    ];
    eventDataclearValue17.params =
      [
        {
          title: '事件入参',
          name: 'options_085079',
          value: '$options_085079$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue17, { options_085079 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDatagetValue60: any = [
      {
        type: 'getValue',
        dataId: 166842689522383900,
        options: {
          compId: 'Select_599981_437465_642991',
          compLib: 'comm',
          pageJsonId: '763609',
          compName: 'Select',
          id: '35716',
        },
        line_number: 3,
        callback1: [
          {
            type: 'ifelse',
            condition: [
              {
                condId: '328102',
                options: { context: '$value_35716$', operate: 'empty' },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 166842689522318240,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 166842689522413730,
                children: [
                  {
                    dataName: 'action',
                    dataId: 166842689522422430,
                    children: [
                      {
                        dataName: 'callback',
                        dataId: 166842689522428930,
                        children: [
                          {
                            dataName: 'condition',
                            dataId: 166842689522497600,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166842701887635620,
                                children: [],
                                todoOptions: ['required', 'selectComp'],
                                options: {
                                  compId: 'Input_668689_2052015_8235997',
                                  compLib: 'comm',
                                  pageJsonId: '763609',
                                  compName: 'Input',
                                  id: '8272128',
                                  required: '',
                                },
                                actionObjId: 'Input_668689_2052015_8235997',
                                actionObjName: 'Input',
                                value: 'setRequired',
                                compLib: 'comm',
                                line_number: 9,
                              },
                              {
                                dataName: 'action',
                                dataId: 166842702190370050,
                                children: [],
                                todoOptions: ['visible', 'selectComp'],
                                options: {
                                  compId: 'Input_668689_2052015_8235997',
                                  compLib: 'comm',
                                  pageJsonId: '763609',
                                  compName: 'Input',
                                  id: '042718',
                                  visible: '',
                                },
                                actionObjId: 'Input_668689_2052015_8235997',
                                actionObjName: 'Input',
                                value: 'setVisible',
                                compLib: 'comm',
                                line_number: 10,
                              },
                            ],
                            elseIfs: [
                              {
                                dataName: 'elseIf',
                                dataId: 166842717974886430,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 166842718741622800,
                                    children: [],
                                    todoOptions: ['required', 'selectComp'],
                                    options: {
                                      compId: 'Input_668689_2052015_8235997',
                                      compLib: 'comm',
                                      pageJsonId: '763609',
                                      compName: 'Input',
                                      id: '440678',
                                      required: 'true',
                                    },
                                    actionObjId: 'Input_668689_2052015_8235997',
                                    actionObjName: 'Input',
                                    value: 'setRequired',
                                    compLib: 'comm',
                                    line_number: 11,
                                  },
                                  {
                                    dataName: 'action',
                                    dataId: 166842720405526820,
                                    children: [],
                                    todoOptions: ['visible', 'selectComp'],
                                    options: {
                                      compId: 'Input_668689_2052015_8235997',
                                      compLib: 'comm',
                                      pageJsonId: '763609',
                                      compName: 'Input',
                                      id: '9792977',
                                      visible: 'true',
                                    },
                                    actionObjId: 'Input_668689_2052015_8235997',
                                    actionObjName: 'Input',
                                    value: 'setVisible',
                                    compLib: 'comm',
                                    line_number: 12,
                                  },
                                ],
                                condition: [],
                                callback: [
                                  {
                                    type: 'setRequired',
                                    dataId: 166842718741622800,
                                    options: {
                                      compId: 'Input_668689_2052015_8235997',
                                      compLib: 'comm',
                                      pageJsonId: '763609',
                                      compName: 'Input',
                                      id: '440678',
                                      required: 'true',
                                    },
                                    line_number: 11,
                                  },
                                  {
                                    type: 'setVisible',
                                    dataId: 166842720405526820,
                                    options: {
                                      compId: 'Input_668689_2052015_8235997',
                                      compLib: 'comm',
                                      pageJsonId: '763609',
                                      compName: 'Input',
                                      id: '9792977',
                                      visible: 'true',
                                    },
                                    line_number: 12,
                                  },
                                ],
                              },
                            ],
                            condition: [
                              {
                                condId: '302171',
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context: '$data_2196596.hideUserSelect$',
                                  operate: '==',
                                  manualValue: 'Y',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            desc: 'hideUserSelect为Y时隐藏处理人相关表单',
                            line_number: 8,
                          },
                          {
                            dataName: 'condition',
                            dataId: 166842704957572960,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166842710614021950,
                                children: [
                                  {
                                    dataName: 'callback',
                                    dataId: 166842710614094750,
                                    children: [],
                                    value: 'callback1',
                                    params: [],
                                  },
                                ],
                                todoOptions: ['compId', 'valueList'],
                                options: {
                                  compId: [
                                    'Input_9206452_698968_5646934',
                                    'Input_668689_2052015_8235997',
                                  ],
                                  compLib: 'comm',
                                  pageJsonId: '763609',
                                  compName: 'Input',
                                  id: '421457',
                                  valueList: {
                                    Input_9206452_698968_5646934:
                                      '$data_2196596.fixedUser$',
                                    Input_668689_2052015_8235997:
                                      '$data_2196596.fixedUserName$',
                                  },
                                  compid: [
                                    'Input_9206452_698968_5646934',
                                    'Input_668689_2052015_8235997',
                                  ],
                                },
                                actionObjId: 'Input_9206452_698968_5646934',
                                actionObjName: 'Input',
                                value: 'setValue',
                                compLib: 'comm',
                                line_number: 14,
                              },
                            ],
                            elseIfs: [],
                            condition: [
                              {
                                condId: '029717',
                                options: {
                                  context: '$data_2196596.fixedUser$',
                                  operate: 'notEmpty',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            desc: '判断是否有固定处理人，有则赋值',
                            line_number: 13,
                          },
                        ],
                        value: 'callback1',
                        params: [],
                      },
                      {
                        dataName: 'callback',
                        dataId: 166842689522408000,
                        children: [],
                        value: 'callback2',
                        params: [],
                      },
                    ],
                    todoOptions: ['actionTitle', 'editorCode'],
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '2196596',
                      pageJsonId: '763609',
                      code: 'function main(data,state,success,fail){var _data$nextTacheList,_data$nextTacheList$r;var selected=(_data$nextTacheList=data.nextTacheList)===null||_data$nextTacheList===void 0?void 0:(_data$nextTacheList$r=_data$nextTacheList.resultData)===null||_data$nextTacheList$r===void 0?void 0:_data$nextTacheList$r.find(function(item){return item.tacheCode===value_35716});console.log("\\u4E0B\\u4E00\\u5904\\u7406\\u73AF\\u8282\\u6570\\u636E\\uFF1A",selected);if(selected){success(selected)}else{fail(selected)}};',
                      actionTitle: '获取下一环节选中相关数据',
                    },
                    actionObjId: 'customActionCode',
                    actionObjName: 'page',
                    value: 'customActionCode',
                    line_number: 7,
                  },
                ],
                condition: [],
                callback: [
                  {
                    type: 'customActionCode',
                    dataId: 166842689522422430,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '2196596',
                      pageJsonId: '763609',
                      code: 'function main(data,state,success,fail){var _data$nextTacheList,_data$nextTacheList$r;var selected=(_data$nextTacheList=data.nextTacheList)===null||_data$nextTacheList===void 0?void 0:(_data$nextTacheList$r=_data$nextTacheList.resultData)===null||_data$nextTacheList$r===void 0?void 0:_data$nextTacheList$r.find(function(item){return item.tacheCode===value_35716});console.log("\\u4E0B\\u4E00\\u5904\\u7406\\u73AF\\u8282\\u6570\\u636E\\uFF1A",selected);if(selected){success(selected)}else{fail(selected)}};',
                      actionTitle: '获取下一环节选中相关数据',
                    },
                    line_number: 7,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '302171',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$data_2196596.hideUserSelect$',
                              operate: '==',
                              manualValue: 'Y',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 166842689522497600,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 166842717974886430,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166842718741622800,
                                children: [],
                                todoOptions: ['required', 'selectComp'],
                                options: {
                                  compId: 'Input_668689_2052015_8235997',
                                  compLib: 'comm',
                                  pageJsonId: '763609',
                                  compName: 'Input',
                                  id: '440678',
                                  required: 'true',
                                },
                                actionObjId: 'Input_668689_2052015_8235997',
                                actionObjName: 'Input',
                                value: 'setRequired',
                                compLib: 'comm',
                                line_number: 11,
                              },
                              {
                                dataName: 'action',
                                dataId: 166842720405526820,
                                children: [],
                                todoOptions: ['visible', 'selectComp'],
                                options: {
                                  compId: 'Input_668689_2052015_8235997',
                                  compLib: 'comm',
                                  pageJsonId: '763609',
                                  compName: 'Input',
                                  id: '9792977',
                                  visible: 'true',
                                },
                                actionObjId: 'Input_668689_2052015_8235997',
                                actionObjName: 'Input',
                                value: 'setVisible',
                                compLib: 'comm',
                                line_number: 12,
                              },
                            ],
                            condition: [],
                            callback: [
                              {
                                type: 'setRequired',
                                dataId: 166842718741622800,
                                options: {
                                  compId: 'Input_668689_2052015_8235997',
                                  compLib: 'comm',
                                  pageJsonId: '763609',
                                  compName: 'Input',
                                  id: '440678',
                                  required: 'true',
                                },
                                line_number: 11,
                              },
                              {
                                type: 'setVisible',
                                dataId: 166842720405526820,
                                options: {
                                  compId: 'Input_668689_2052015_8235997',
                                  compLib: 'comm',
                                  pageJsonId: '763609',
                                  compName: 'Input',
                                  id: '9792977',
                                  visible: 'true',
                                },
                                line_number: 12,
                              },
                            ],
                          },
                        ],
                        line_number: 8,
                        callback1: [
                          {
                            type: 'setRequired',
                            dataId: 166842701887635620,
                            options: {
                              compId: 'Input_668689_2052015_8235997',
                              compLib: 'comm',
                              pageJsonId: '763609',
                              compName: 'Input',
                              id: '8272128',
                              required: '',
                            },
                            line_number: 9,
                          },
                          {
                            type: 'setVisible',
                            dataId: 166842702190370050,
                            options: {
                              compId: 'Input_668689_2052015_8235997',
                              compLib: 'comm',
                              pageJsonId: '763609',
                              compName: 'Input',
                              id: '042718',
                              visible: '',
                            },
                            line_number: 10,
                          },
                        ],
                      },
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '029717',
                            options: {
                              context: '$data_2196596.fixedUser$',
                              operate: 'notEmpty',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 166842704957572960,
                        elseIfs: [],
                        line_number: 13,
                        callback1: [
                          {
                            type: 'setValue',
                            dataId: 166842710614021950,
                            options: {
                              compId: [
                                'Input_9206452_698968_5646934',
                                'Input_668689_2052015_8235997',
                              ],
                              compLib: 'comm',
                              pageJsonId: '763609',
                              compName: 'Input',
                              id: '421457',
                              valueList: {
                                Input_9206452_698968_5646934:
                                  '$data_2196596.fixedUser$',
                                Input_668689_2052015_8235997:
                                  '$data_2196596.fixedUserName$',
                              },
                              compid: [
                                'Input_9206452_698968_5646934',
                                'Input_668689_2052015_8235997',
                              ],
                            },
                            line_number: 14,
                            callback1: [],
                          },
                        ],
                      },
                    ],
                    callback2: [],
                  },
                ],
              },
            ],
            line_number: 4,
            callback1: [
              {
                type: 'setRequired',
                dataId: 166842689522385020,
                options: {
                  compId: 'Input_668689_2052015_8235997',
                  compLib: 'comm',
                  pageJsonId: '763609',
                  compName: 'Input',
                  id: '513558',
                  required: 'true',
                },
                line_number: 5,
              },
              {
                type: 'setVisible',
                dataId: 166842689522403620,
                options: {
                  compId: 'Input_668689_2052015_8235997',
                  compLib: 'comm',
                  pageJsonId: '763609',
                  compName: 'Input',
                  id: '369677',
                  visible: 'true',
                },
                line_number: 6,
              },
            ],
          },
          {
            type: 'console',
            dataId: 166842734934575940,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '615084',
              pageJsonId: '763609',
              value: ['下一环节：', '$value_35716$'],
            },
            line_number: 15,
          },
        ],
      },
    ];
    eventDatagetValue60.params =
      [
        {
          title: '事件入参',
          name: 'options_085079',
          value: '$options_085079$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue60, { options_085079 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    }); // console 166858544124938780
    console.log('调用下一环节值变更处理事件');
  };
  const tachePassChange = (options_6670217: any) => {
    const eventDataclearValue18: any = [
      {
        type: 'clearValue',
        dataId: 166848150299034460,
        options: {
          compId: 'Input_668689_2052015_8235997',
          compLib: 'comm',
          pageJsonId: '763609',
          compName: 'Input',
          id: '993199',
        },
        line_number: 1,
      },
    ];
    eventDataclearValue18.params =
      [
        {
          title: '事件入参',
          name: 'options_6670217',
          value: '$options_6670217$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue18, { options_6670217 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDataclearValue19: any = [
      {
        type: 'clearValue',
        dataId: 166848150509767200,
        options: {
          compId: 'Input_9206452_698968_5646934',
          compLib: 'comm',
          pageJsonId: '763609',
          compName: 'Input',
          id: '817239',
        },
        line_number: 2,
      },
    ];
    eventDataclearValue19.params =
      [
        {
          title: '事件入参',
          name: 'options_6670217',
          value: '$options_6670217$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue19, { options_6670217 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDatagetValue61: any = [
      {
        type: 'getValue',
        dataId: 166858417390316740,
        options: {
          compId: 'Radio_8525737_018091_602067',
          compLib: 'comm',
          pageJsonId: '763609',
          compName: 'Radio',
          id: '297722',
        },
        line_number: 3,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 168639899293922400,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '766369',
              pageJsonId: '763609',
              code: 'function main(data,state,success,fail){success(data.sameApproveOrdList.resultData)};',
            },
            line_number: 4,
            callback1: [
              {
                type: 'apiRequest',
                dataId: 168639900702754000,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '4248753',
                  pageJsonId: '763609',
                  sync: false,
                  method: 'post',
                  url: '/app/rhin/gateway/callRhinEngine',
                  _capabilityCode: 'queryNextTacheList',
                  _apiCode: 'queryNextTacheList',
                  _source: 'rhin',
                  _serviceId: '874463664148983808',
                  _serviceTitle: '获取下一环节信息-tzp: queryNextTacheList',
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
                          dataKey: '4248753_root.header',
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
                          dataKey: '4248753_root.path',
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
                          dataKey: '4248753_root.query',
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
                              code: 'endLevel',
                              name: 'endLevel',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              defaultValue: '',
                              _id: 'root.body.endLevel',
                              compType: 'Input',
                              parents: ['root', 'body'],
                              id: 'root.body.endLevel',
                              dataKey: '4248753_root.body.endLevel',
                              value: {
                                type: [
                                  'datasource',
                                  'flowItemSimpleInfoLocal',
                                  'data',
                                ],
                                code: 'endLevel',
                              },
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-0',
                            },
                            {
                              code: 'tacheCode',
                              name: 'tacheCode',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'root.body.tacheCode',
                              compType: 'Input',
                              parents: ['root', 'body'],
                              id: 'root.body.tacheCode',
                              dataKey: '4248753_root.body.tacheCode',
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-3',
                            },
                            {
                              code: 'flowCode',
                              name: 'flowCode',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              defaultValue: '',
                              _id: 'root.body.flowCode',
                              compType: 'Input',
                              parents: ['root', 'body'],
                              id: 'root.body.flowCode',
                              dataKey: '4248753_root.body.flowCode',
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-1',
                            },
                            {
                              code: 'tachePass',
                              name: 'tachePass',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'root.body.tachePass',
                              compType: 'Input',
                              parents: ['root', 'body'],
                              id: 'root.body.tachePass',
                              dataKey: '4248753_root.body.tachePass',
                              value: {
                                type: ['context', '$value_297722$'],
                                code: '',
                              },
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-4',
                            },
                            {
                              code: 'orderType',
                              name: 'orderType',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'root.body.orderType',
                              compType: 'Input',
                              parents: ['root', 'body'],
                              id: 'root.body.orderType',
                              dataKey: '4248753_root.body.orderType',
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-2',
                            },
                            {
                              code: 'workId',
                              name: 'workId',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'root.body.workId',
                              compType: 'Input',
                              parents: ['root', 'body'],
                              id: 'root.body.workId',
                              dataKey: '4248753_root.body.workId',
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-5',
                            },
                            {
                              code: 'workItemId',
                              name: 'workItemId',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              defaultValue: '',
                              _id: 'root.body.workItemId',
                              compType: 'Input',
                              parents: ['root', 'body'],
                              id: 'root.body.workItemId',
                              dataKey: '4248753_root.body.workItemId',
                              value: {
                                type: [
                                  'datasource',
                                  'flowItemSimpleInfoLocal',
                                  'data',
                                ],
                                code: 'workItemId',
                              },
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-6',
                            },
                            {
                              code: 'sameList',
                              attrType: 'objectArray',
                              children: [
                                {
                                  code: 'meetingRemark',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'root.body.sameList.meetingRemark',
                                  compType: 'Input',
                                  name: 'meetingRemark',
                                  parents: ['root', 'body', 'sameList'],
                                  parentType: 'objectArray',
                                  parentKey: '0-3-7',
                                  key: '0-3-7-0',
                                  parentCode: 'sameList',
                                  id: 'root.body.sameList.meetingRemark',
                                  dataKey:
                                    '4248753_root.body.sameList.meetingRemark',
                                },
                                {
                                  code: 'nextStaff',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'root.body.sameList.nextStaff',
                                  compType: 'Input',
                                  name: 'nextStaff',
                                  parents: ['root', 'body', 'sameList'],
                                  parentType: 'objectArray',
                                  parentKey: '0-3-7',
                                  key: '0-3-7-1',
                                  parentCode: 'sameList',
                                  id: 'root.body.sameList.nextStaff',
                                  dataKey:
                                    '4248753_root.body.sameList.nextStaff',
                                },
                                {
                                  code: 'nextStaffName',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'root.body.sameList.nextStaffName',
                                  compType: 'Input',
                                  name: 'nextStaffName',
                                  parents: ['root', 'body', 'sameList'],
                                  parentType: 'objectArray',
                                  parentKey: '0-3-7',
                                  key: '0-3-7-2',
                                  parentCode: 'sameList',
                                  id: 'root.body.sameList.nextStaffName',
                                  dataKey:
                                    '4248753_root.body.sameList.nextStaffName',
                                },
                                {
                                  code: 'nextTache',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'root.body.sameList.nextTache',
                                  compType: 'Input',
                                  name: 'nextTache',
                                  parents: ['root', 'body', 'sameList'],
                                  parentType: 'objectArray',
                                  parentKey: '0-3-7',
                                  key: '0-3-7-3',
                                  parentCode: 'sameList',
                                  id: 'root.body.sameList.nextTache',
                                  dataKey:
                                    '4248753_root.body.sameList.nextTache',
                                },
                                {
                                  code: 'approveOrdNbr',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'root.body.sameList.approveOrdNbr',
                                  compType: 'Input',
                                  name: 'approveOrdNbr',
                                  parents: ['root', 'body', 'sameList'],
                                  parentType: 'objectArray',
                                  parentKey: '0-3-7',
                                  key: '0-3-7-4',
                                  parentCode: 'sameList',
                                  id: 'root.body.sameList.approveOrdNbr',
                                  dataKey:
                                    '4248753_root.body.sameList.approveOrdNbr',
                                },
                                {
                                  code: 'busiObjStatus',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'root.body.sameList.busiObjStatus',
                                  compType: 'Input',
                                  name: 'busiObjStatus',
                                  parents: ['root', 'body', 'sameList'],
                                  parentType: 'objectArray',
                                  parentKey: '0-3-7',
                                  key: '0-3-7-5',
                                  parentCode: 'sameList',
                                  id: 'root.body.sameList.busiObjStatus',
                                  dataKey:
                                    '4248753_root.body.sameList.busiObjStatus',
                                },
                                {
                                  code: 'busiObjSubType',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'root.body.sameList.busiObjSubType',
                                  compType: 'Input',
                                  name: 'busiObjSubType',
                                  parents: ['root', 'body', 'sameList'],
                                  parentType: 'objectArray',
                                  parentKey: '0-3-7',
                                  key: '0-3-7-6',
                                  parentCode: 'sameList',
                                  id: 'root.body.sameList.busiObjSubType',
                                  dataKey:
                                    '4248753_root.body.sameList.busiObjSubType',
                                },
                                {
                                  code: 'createStaff',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'root.body.sameList.createStaff',
                                  compType: 'Input',
                                  name: 'createStaff',
                                  parents: ['root', 'body', 'sameList'],
                                  parentType: 'objectArray',
                                  parentKey: '0-3-7',
                                  key: '0-3-7-7',
                                  parentCode: 'sameList',
                                  id: 'root.body.sameList.createStaff',
                                  dataKey:
                                    '4248753_root.body.sameList.createStaff',
                                },
                                {
                                  code: 'createStaffName',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'root.body.sameList.createStaffName',
                                  compType: 'Input',
                                  name: 'createStaffName',
                                  parents: ['root', 'body', 'sameList'],
                                  parentType: 'objectArray',
                                  parentKey: '0-3-7',
                                  key: '0-3-7-8',
                                  parentCode: 'sameList',
                                  id: 'root.body.sameList.createStaffName',
                                  dataKey:
                                    '4248753_root.body.sameList.createStaffName',
                                },
                                {
                                  code: 'createTime',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'root.body.sameList.createTime',
                                  compType: 'Input',
                                  name: 'createTime',
                                  parents: ['root', 'body', 'sameList'],
                                  parentType: 'objectArray',
                                  parentKey: '0-3-7',
                                  key: '0-3-7-9',
                                  parentCode: 'sameList',
                                  id: 'root.body.sameList.createTime',
                                  dataKey:
                                    '4248753_root.body.sameList.createTime',
                                },
                                {
                                  code: 'effectDate',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'root.body.sameList.effectDate',
                                  compType: 'Input',
                                  name: 'effectDate',
                                  parents: ['root', 'body', 'sameList'],
                                  parentType: 'objectArray',
                                  parentKey: '0-3-7',
                                  key: '0-3-7-10',
                                  parentCode: 'sameList',
                                  id: 'root.body.sameList.effectDate',
                                  dataKey:
                                    '4248753_root.body.sameList.effectDate',
                                },
                                {
                                  code: 'handleObjCode',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'root.body.sameList.handleObjCode',
                                  compType: 'Input',
                                  name: 'handleObjCode',
                                  parents: ['root', 'body', 'sameList'],
                                  parentType: 'objectArray',
                                  parentKey: '0-3-7',
                                  key: '0-3-7-11',
                                  parentCode: 'sameList',
                                  id: 'root.body.sameList.handleObjCode',
                                  dataKey:
                                    '4248753_root.body.sameList.handleObjCode',
                                },
                                {
                                  code: 'handleObjType',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'root.body.sameList.handleObjType',
                                  compType: 'Input',
                                  name: 'handleObjType',
                                  parents: ['root', 'body', 'sameList'],
                                  parentType: 'objectArray',
                                  parentKey: '0-3-7',
                                  key: '0-3-7-12',
                                  parentCode: 'sameList',
                                  id: 'root.body.sameList.handleObjType',
                                  dataKey:
                                    '4248753_root.body.sameList.handleObjType',
                                },
                                {
                                  code: 'lastHandleTime',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'root.body.sameList.lastHandleTime',
                                  compType: 'Input',
                                  name: 'lastHandleTime',
                                  parents: ['root', 'body', 'sameList'],
                                  parentType: 'objectArray',
                                  parentKey: '0-3-7',
                                  key: '0-3-7-13',
                                  parentCode: 'sameList',
                                  id: 'root.body.sameList.lastHandleTime',
                                  dataKey:
                                    '4248753_root.body.sameList.lastHandleTime',
                                },
                                {
                                  code: 'workId',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'root.body.sameList.workId',
                                  compType: 'Input',
                                  name: 'workId',
                                  parents: ['root', 'body', 'sameList'],
                                  parentType: 'objectArray',
                                  parentKey: '0-3-7',
                                  key: '0-3-7-14',
                                  parentCode: 'sameList',
                                  id: 'root.body.sameList.workId',
                                  dataKey: '4248753_root.body.sameList.workId',
                                },
                                {
                                  code: 'workItemId',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'root.body.sameList.workItemId',
                                  compType: 'Input',
                                  name: 'workItemId',
                                  parents: ['root', 'body', 'sameList'],
                                  parentType: 'objectArray',
                                  parentKey: '0-3-7',
                                  key: '0-3-7-15',
                                  parentCode: 'sameList',
                                  id: 'root.body.sameList.workItemId',
                                  dataKey:
                                    '4248753_root.body.sameList.workItemId',
                                },
                                {
                                  code: 'tacheCode',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'root.body.sameList.tacheCode',
                                  compType: 'Input',
                                  name: 'tacheCode',
                                  parents: ['root', 'body', 'sameList'],
                                  parentType: 'objectArray',
                                  parentKey: '0-3-7',
                                  key: '0-3-7-16',
                                  parentCode: 'sameList',
                                  id: 'root.body.sameList.tacheCode',
                                  dataKey:
                                    '4248753_root.body.sameList.tacheCode',
                                },
                                {
                                  code: 'tacheName',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'root.body.sameList.tacheName',
                                  compType: 'Input',
                                  name: 'tacheName',
                                  parents: ['root', 'body', 'sameList'],
                                  parentType: 'objectArray',
                                  parentKey: '0-3-7',
                                  key: '0-3-7-17',
                                  parentCode: 'sameList',
                                  id: 'root.body.sameList.tacheName',
                                  dataKey:
                                    '4248753_root.body.sameList.tacheName',
                                },
                                {
                                  code: 'tachePass',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'root.body.sameList.tachePass',
                                  compType: 'Input',
                                  name: 'tachePass',
                                  parents: ['root', 'body', 'sameList'],
                                  parentType: 'objectArray',
                                  parentKey: '0-3-7',
                                  key: '0-3-7-18',
                                  parentCode: 'sameList',
                                  id: 'root.body.sameList.tachePass',
                                  dataKey:
                                    '4248753_root.body.sameList.tachePass',
                                },
                                {
                                  code: 'tacheRemark',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'root.body.sameList.tacheRemark',
                                  compType: 'Input',
                                  name: 'tacheRemark',
                                  parents: ['root', 'body', 'sameList'],
                                  parentType: 'objectArray',
                                  parentKey: '0-3-7',
                                  key: '0-3-7-19',
                                  parentCode: 'sameList',
                                  id: 'root.body.sameList.tacheRemark',
                                  dataKey:
                                    '4248753_root.body.sameList.tacheRemark',
                                },
                                {
                                  code: 'handleStaffName',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'root.body.sameList.handleStaffName',
                                  compType: 'Input',
                                  name: 'handleStaffName',
                                  parents: ['root', 'body', 'sameList'],
                                  parentType: 'objectArray',
                                  parentKey: '0-3-7',
                                  key: '0-3-7-20',
                                  parentCode: 'sameList',
                                  id: 'root.body.sameList.handleStaffName',
                                  dataKey:
                                    '4248753_root.body.sameList.handleStaffName',
                                },
                                {
                                  code: 'keyId',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'root.body.sameList.keyId',
                                  compType: 'Input',
                                  name: 'keyId',
                                  parents: ['root', 'body', 'sameList'],
                                  parentType: 'objectArray',
                                  parentKey: '0-3-7',
                                  key: '0-3-7-21',
                                  parentCode: 'sameList',
                                  id: 'root.body.sameList.keyId',
                                  dataKey: '4248753_root.body.sameList.keyId',
                                },
                                {
                                  code: 'title',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'root.body.sameList.title',
                                  compType: 'Input',
                                  name: 'title',
                                  parents: ['root', 'body', 'sameList'],
                                  parentType: 'objectArray',
                                  parentKey: '0-3-7',
                                  key: '0-3-7-22',
                                  parentCode: 'sameList',
                                  id: 'root.body.sameList.title',
                                  dataKey: '4248753_root.body.sameList.title',
                                },
                              ],
                              _id: 'root.body.sameList',
                              compType: 'Input',
                              name: 'sameList',
                              parents: ['root', 'body'],
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-7',
                              id: 'root.body.sameList',
                              dataKey: '4248753_root.body.sameList',
                              value: {
                                type: ['context', '$data_766369$'],
                                code: '',
                              },
                            },
                          ],
                          _id: 'root.body',
                          compType: 'Input',
                          parents: ['root'],
                          id: 'root.body',
                          dataKey: '4248753_root.body',
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
                      dataKey: '4248753_root',
                    },
                  ],
                  _sourceName: '获取下一环节信息-tzp',
                },
                line_number: 5,
                callback1: [
                  {
                    type: 'setDataSource',
                    dataId: 168639900702710500,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '741742',
                      pageJsonId: '763609',
                      dataSourceId: 166848145645645570,
                      dataSourceName: 'nextTacheList',
                      dataSourceRelType: 'custom',
                      dataSourceReloadFilter: [],
                      dataSourceSetValue: [
                        {
                          attrId: '150406',
                          code: 'resultData',
                          name: '下一处理环节列表',
                          type: 'array',
                          initialData: { type: 'static', value: '[]' },
                          value: {
                            type: ['context', '$reply_4248753?.resultData$'],
                            code: '',
                          },
                        },
                      ],
                      operateType: 1,
                      onlySetPatch: false,
                      otherObjectArrayOptions: {},
                    },
                    line_number: 6,
                    callback1: [
                      {
                        type: 'reloadSelectData',
                        dataId: 168639900702794850,
                        options: {
                          compId: 'Select_599981_437465_642991',
                          compLib: 'comm',
                          pageJsonId: '763609',
                          compName: 'Select',
                          id: '6647947',
                          data: '$reply_4248753?.resultData$',
                          labelKey: 'tacheName',
                          valueKey: 'tacheCode',
                        },
                        line_number: 7,
                        callback1: [
                          {
                            type: 'ifelse',
                            condition: [
                              {
                                condId: '681546',
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context: '$reply_4248753?.resultData.length$',
                                  operate: '==',
                                  manualValue: '1',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 168639900702796260,
                            elseIfs: [
                              {
                                dataName: 'elseIf',
                                dataId: 168639900702740100,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 168639900702723800,
                                    children: [],
                                    todoOptions: [],
                                    options: {
                                      compId: 'Select_599981_437465_642991',
                                      compLib: 'comm',
                                      pageJsonId: '763609',
                                      compName: 'Select',
                                      id: '3576237',
                                    },
                                    actionObjId: 'Select_599981_437465_642991',
                                    actionObjName: 'Select',
                                    value: 'clearValue',
                                    compLib: 'comm',
                                    line_number: 11,
                                  },
                                  {
                                    dataName: 'action',
                                    dataId: 168639900702795680,
                                    children: [],
                                    todoOptions: ['required', 'selectComp'],
                                    options: {
                                      compId: 'Input_668689_2052015_8235997',
                                      compLib: 'comm',
                                      pageJsonId: '763609',
                                      compName: 'Input',
                                      id: '8386821',
                                      required: 'true',
                                    },
                                    actionObjId: 'Input_668689_2052015_8235997',
                                    actionObjName: 'Input',
                                    value: 'setRequired',
                                    compLib: 'comm',
                                    line_number: 12,
                                  },
                                  {
                                    dataName: 'action',
                                    dataId: 168639900702764740,
                                    children: [],
                                    todoOptions: ['visible', 'selectComp'],
                                    options: {
                                      compId: 'Input_668689_2052015_8235997',
                                      compLib: 'comm',
                                      pageJsonId: '763609',
                                      compName: 'Input',
                                      id: '6219424',
                                      visible: 'true',
                                    },
                                    actionObjId: 'Input_668689_2052015_8235997',
                                    actionObjName: 'Input',
                                    value: 'setVisible',
                                    compLib: 'comm',
                                    line_number: 13,
                                  },
                                ],
                                condition: [],
                                callback: [
                                  {
                                    type: 'clearValue',
                                    dataId: 168639900702723800,
                                    options: {
                                      compId: 'Select_599981_437465_642991',
                                      compLib: 'comm',
                                      pageJsonId: '763609',
                                      compName: 'Select',
                                      id: '3576237',
                                    },
                                    line_number: 11,
                                  },
                                  {
                                    type: 'setRequired',
                                    dataId: 168639900702795680,
                                    options: {
                                      compId: 'Input_668689_2052015_8235997',
                                      compLib: 'comm',
                                      pageJsonId: '763609',
                                      compName: 'Input',
                                      id: '8386821',
                                      required: 'true',
                                    },
                                    line_number: 12,
                                  },
                                  {
                                    type: 'setVisible',
                                    dataId: 168639900702764740,
                                    options: {
                                      compId: 'Input_668689_2052015_8235997',
                                      compLib: 'comm',
                                      pageJsonId: '763609',
                                      compName: 'Input',
                                      id: '6219424',
                                      visible: 'true',
                                    },
                                    line_number: 13,
                                  },
                                ],
                              },
                            ],
                            line_number: 8,
                            callback1: [
                              {
                                type: 'setValue',
                                dataId: 168639900702704500,
                                options: {
                                  compId: 'Select_599981_437465_642991',
                                  compLib: 'comm',
                                  pageJsonId: '763609',
                                  compName: 'Select',
                                  id: '627782',
                                  valueList: {
                                    Select_599981_437465_642991:
                                      '$reply_4248753?.resultData[0].tacheCode$',
                                  },
                                },
                                line_number: 9,
                                callback1: [
                                  {
                                    type: 'callSelfFunc',
                                    dataId: 168639900702761950,
                                    options: {
                                      compId: 'callSelfFunc',
                                      compName: 'system',
                                      id: '6919967',
                                      pageJsonId: '763609',
                                      customFuncName: 'nextTacheChange',
                                      customFuncParams: 'object',
                                    },
                                    line_number: 10,
                                    callback1: [],
                                    callback2: [],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            type: 'console',
                            dataId: 168639900702711200,
                            options: {
                              compId: 'debug',
                              compName: 'system',
                              id: '5756716',
                              pageJsonId: '763609',
                              value: [
                                '环节列表',
                                '$reply_4248753?.resultData$',
                              ],
                            },
                            line_number: 14,
                          },
                        ],
                      },
                    ],
                    callback2: [],
                  },
                  {
                    type: 'customActionCode',
                    dataId: 168639906973889800,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '260577',
                      pageJsonId: '763609',
                      actionTitle: '回填refuseNextStaff',
                      code: 'function main(data,state,success,fail){if(value_297722=="refuse"){var _reply_;data.refuseNextStaffNames=(_reply_=reply_4248753)===null||_reply_===void 0?void 0:_reply_.resultData}};',
                    },
                    line_number: 15,
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
    ];
    eventDatagetValue61.params =
      [
        {
          title: '事件入参',
          name: 'options_6670217',
          value: '$options_6670217$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue61, { options_6670217 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    nextTacheChange,
    tachePassChange,
  }));

  useEffect(() => {
    const eventDataapiRequest265: any = [
      {
        type: 'apiRequest',
        dataId: 166806236219221920,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '565413',
          pageJsonId: '763609',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'getFlowItemSimpleInfo',
          _apiCode: 'getFlowItemSimpleInfo',
          _source: 'rhin',
          _serviceId: '874132034304221184',
          _serviceTitle: '获取流程环节实例简要信息-tzp: getFlowItemSimpleInfo',
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
              dataKey: '565413_header',
              key: '0',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '565413_path',
              key: '1',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '565413_query',
              key: '2',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              children: [
                {
                  code: 'workItemId',
                  name: '环节实例id',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  defaultValue: '',
                  _id: 'body.workItemId',
                  compType: 'Input',
                  parents: ['body'],
                  id: 'body.workItemId',
                  dataKey: '565413_body.workItemId',
                  value: { type: ['page', 'url'], code: 'workItemId' },
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-0',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '565413_body',
              key: '3',
            },
          ],
          actionTitle: '',
          _sourceName: '获取流程环节实例简要信息-tzp',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 166806260026886200,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '953126',
              pageJsonId: '763609',
              dataSourceId: 166806050585803200,
              dataSourceName: 'flowItemSimpleInfoLocal',
              dataSourceRelType: 'custom',
              dataSourceReloadFilter: [],
              dataSourceSetValue: [
                {
                  attrId: '5865497',
                  code: 'endLevel',
                  name: '最高审批层级',
                  type: 'string',
                  initialData: { type: 'static', value: '' },
                  value: {
                    type: ['context', '$reply_565413?.resultData.endLevel$'],
                    hideAttr: true,
                    code: '',
                  },
                },
                {
                  attrId: '630875',
                  code: 'tacheCode',
                  name: '环节编码',
                  type: 'string',
                  initialData: { type: 'static', value: '' },
                  value: {
                    type: ['context', '$reply_565413?.resultData.traceCode$'],
                    hideAttr: true,
                    code: '',
                  },
                },
                {
                  attrId: '8886464',
                  code: 'flowCode',
                  name: '流程编码',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$reply_565413?.resultData.flowCode$'],
                    hideAttr: true,
                    code: '',
                  },
                },
                {
                  attrId: '092456',
                  code: 'orderType',
                  name: '订单类型',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '876159',
                  code: 'workId',
                  name: '流程id',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$reply_565413?.resultData.workId$'],
                    hideAttr: true,
                    code: '',
                  },
                },
                {
                  attrId: '320347',
                  code: 'workItemId',
                  name: '环节id',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$reply_565413?.resultData.workItemId$'],
                    hideAttr: true,
                    code: '',
                  },
                },
                {
                  attrId: '1796925',
                  code: 'showMeetingBtn',
                  name: '是否展示会签按钮',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: [
                      'context',
                      '$reply_565413?.resultData.showMeetingBtn$',
                    ],
                    hideAttr: true,
                    code: '',
                  },
                },
                {
                  attrId: '930038',
                  code: 'meetingType',
                  name: '会签类型',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$reply_565413?.resultData.meetingType$'],
                    hideAttr: true,
                    code: '',
                  },
                },
                {
                  attrId: '428365',
                  code: 'meetingOrderType',
                  name: '会签订单类型',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: [
                      'context',
                      '$reply_565413?.resultData.meetingOrderType$',
                    ],
                    hideAttr: true,
                    code: '',
                  },
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
            },
            line_number: 2,
            callback1: [
              {
                type: 'console',
                dataId: 166806265133824670,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '335739',
                  pageJsonId: '763609',
                  value: ['流程环节信息：', '$data.flowItemSimpleInfoLocal$'],
                },
                line_number: 3,
              },
            ],
            callback2: [],
          },
          {
            type: 'callSelfFunc',
            dataId: 166848187142601500,
            options: {
              compId: 'callSelfFunc',
              compName: 'system',
              id: '079847',
              pageJsonId: '763609',
              customFuncName: 'tachePassChange',
              customFuncParams: 'object',
            },
            line_number: 4,
            callback1: [],
            callback2: [],
          },
          {
            type: 'ifelse',
            condition: [
              {
                condId: '492896',
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$reply_565413?.resultData.showMeetingBtn$',
                  operate: '==',
                  manualValue: 'Y',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
              {
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$urlParam.scene$',
                  operate: '==',
                  manualValue: 'U',
                },
                condId: '8880226',
                connector: '&&',
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 166831170673698620,
            elseIfs: [],
            line_number: 5,
            callback1: [
              {
                type: 'setVisible',
                dataId: 166831172934656130,
                options: {
                  compId: 'Button_534781',
                  compLib: 'comm',
                  pageJsonId: '763609',
                  compName: 'Button',
                  id: '472853',
                  visible: 'true',
                },
                line_number: 6,
              },
            ],
          },
          {
            type: 'ifelse',
            condition: [
              {
                condId: '744809',
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$reply_565413?.resultData.showSubmitBtn$',
                  operate: '==',
                  manualValue: 'Y',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
              {
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$urlParam.scene$',
                  operate: '==',
                  manualValue: 'U',
                },
                condId: '187352',
                connector: '&&',
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 166839406705465060,
            elseIfs: [],
            line_number: 7,
            callback1: [
              {
                type: 'setVisible',
                dataId: 166839411468327900,
                options: {
                  compId: 'Button_219692_3851914_6006513',
                  compLib: 'comm',
                  pageJsonId: '763609',
                  compName: 'Button',
                  id: '995236',
                  visible: 'true',
                },
                line_number: 8,
              },
            ],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest265.params = [] || [];
    CMDGenerator(eventDataapiRequest265, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest266: any = [
      {
        type: 'apiRequest',
        dataId: 166823830351164200,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '88717',
          pageJsonId: '9704152',
          sync: false,
          actionTitle: '查询流程视图',
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryFlowView',
          _apiCode: 'qryFlowView',
          _source: 'rhin',
          _serviceId: '887698304253431808',
          _serviceTitle: '查询流程视图: qryFlowView',
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
              dataKey: '88717_header',
              key: '0',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              children: [
                {
                  code: 'workId',
                  name: '新增节点',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'T',
                  defaultValue: '',
                  _id: 'path.workId',
                  compType: 'Input',
                  parents: ['path'],
                  id: 'path.workId',
                  dataKey: '88717_path.workId',
                  value: { type: ['context', '$urlParam.workId$'], code: '' },
                  parentType: 'object',
                  parentKey: '1',
                  key: '1-0',
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '88717_path',
              key: '1',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '88717_query',
              key: '2',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '88717_body',
              key: '3',
            },
          ],
        },
        line_number: 9,
        callback1: [
          {
            type: 'setRemoteCompProps',
            dataId: 166823835229628030,
            options: {
              compId: 'RemoteComponent_73826_358577_6797494',
              compLib: 'comm',
              pageJsonId: '763609',
              compName: 'RemoteComponent',
              id: '5948666',
              rProps: '$reply_88717?.resultData$',
            },
            line_number: 10,
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest266.params = [] || [];
    CMDGenerator(eventDataapiRequest266, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDatasetValue13: any = [
      {
        type: 'setValue',
        dataId: 166823902426456580,
        options: {
          compId: 'Input_190541',
          compLib: 'comm',
          pageJsonId: '763609',
          compName: 'Input',
          id: '4157466',
          valueList: { Input_190541: '$urlParam.approveOrdNbr$' },
        },
        line_number: 11,
        callback1: [],
      },
    ];
    eventDatasetValue13.params = [] || [];
    CMDGenerator(eventDatasetValue13, {}, 'setValue', {
      id: 'setValue',
      name: 'setValue',
      type: 'setValue',
      platform: 'undefined',
    });
    const eventDatasetValue14: any = [
      {
        type: 'setValue',
        dataId: 166824551564189730,
        options: {
          compId: 'Input_765315_4158096_136893',
          compLib: 'comm',
          pageJsonId: '763609',
          compName: 'Input',
          id: '0778478',
          valueList: { Input_765315_4158096_136893: '$urlParam.title$' },
        },
        line_number: 12,
        callback1: [],
      },
    ];
    eventDatasetValue14.params = [] || [];
    CMDGenerator(eventDatasetValue14, {}, 'setValue', {
      id: 'setValue',
      name: 'setValue',
      type: 'setValue',
      platform: 'undefined',
    });
    const eventDataifelse148: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '00148',
            options: {
              useManual: true,
              useObject: false,
              context: '$urlParam.scene$',
              operate: '==',
              manualValue: 'V',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 166839492062499840,
        elseIfs: [],
        line_number: 13,
      },
    ];
    eventDataifelse148.params = [] || [];
    CMDGenerator(eventDataifelse148, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDataapiRequest267: any = [
      {
        type: 'apiRequest',
        dataId: 168639829207556060,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '683165',
          pageJsonId: '763609',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qrySameApproveOrdList',
          _apiCode: 'qrySameApproveOrdList',
          _source: 'rhin',
          _sourceName: '可合单工单列表查询-tzp',
          _serviceId: '905659911446880256',
          _serviceTitle: '可合单工单列表查询-tzp: qrySameApproveOrdList',
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
                  dataKey: '057905_root.header',
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
                  dataKey: '057905_root.path',
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
                  dataKey: '057905_root.query',
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  children: [
                    {
                      code: 'workItemId',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.workItemId',
                      compType: 'Input',
                      name: 'workItemId',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-0',
                      id: 'root.body.workItemId',
                      dataKey: '057905_root.body.workItemId',
                      value: {
                        type: ['context', '$urlParam.workItemId$'],
                        code: '',
                      },
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-3',
                  id: 'root.body',
                  dataKey: '057905_root.body',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '057905_root',
            },
          ],
        },
        line_number: 14,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 168639922442628100,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '300638',
              pageJsonId: '763609',
              dataSourceId: 166789053110668160,
              dataSourceName: 'sameApproveOrdList',
              dataSourceRelType: 'service',
              dataSourceSetValue: [
                {
                  attrId: '9754188',
                  code: 'resultCode',
                  name: 'resultCode',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                },
                {
                  attrId: '899207',
                  code: 'resultMsgCode',
                  name: 'resultMsgCode',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                },
                {
                  attrId: '355707',
                  code: 'resultMsg',
                  name: 'resultMsg',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                },
                {
                  attrId: '675357',
                  code: 'resultData',
                  name: 'resultData',
                  type: 'objectArray',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  children: [
                    {
                      attrId: '5436717',
                      code: 'nextStaff',
                      name: '下一步处理人',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      parentCode: 'resultData',
                      parentKey: 'resultData',
                    },
                    {
                      attrId: '484549',
                      code: 'nextStaffName',
                      name: '下一步处理人名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      parentCode: 'resultData',
                      parentKey: 'resultData',
                    },
                    {
                      attrId: '293832',
                      code: 'approveOrdNbr',
                      name: 'approveOrdNbr',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      parentCode: 'resultData',
                      parentKey: 'resultData',
                    },
                    {
                      attrId: '435545',
                      code: 'handleStaffName',
                      name: 'handleStaffName',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      parentCode: 'resultData',
                      parentKey: 'resultData',
                    },
                    {
                      attrId: '8354143',
                      code: 'tacheName',
                      name: 'tacheName',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      parentCode: 'resultData',
                      parentKey: 'resultData',
                    },
                    {
                      attrId: '900329',
                      code: 'tacheRemark',
                      name: 'tacheRemark',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      parentCode: 'resultData',
                      parentKey: 'resultData',
                    },
                    {
                      attrId: '87711',
                      code: 'effectDate',
                      name: 'effectDate',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      parentCode: 'resultData',
                      parentKey: 'resultData',
                    },
                    {
                      attrId: '4487509',
                      code: 'lastHandleTime',
                      name: 'lastHandleTime',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      parentCode: 'resultData',
                      parentKey: 'resultData',
                    },
                    {
                      attrId: '170486',
                      code: 'tacheCode',
                      name: 'tacheCode',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      parentCode: 'resultData',
                      parentKey: 'resultData',
                    },
                    {
                      attrId: '051059',
                      code: 'nextTache',
                      name: 'nextTache',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      parentCode: 'resultData',
                      parentKey: 'resultData',
                    },
                    {
                      attrId: '5113155',
                      code: 'keyId',
                      name: 'keyId',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      parentCode: 'resultData',
                      parentKey: 'resultData',
                    },
                    {
                      attrId: '337909',
                      code: 'createStaffName',
                      name: 'createStaffName',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      parentCode: 'resultData',
                      parentKey: 'resultData',
                    },
                    {
                      attrId: '672305',
                      code: 'handleObjCode',
                      name: 'handleObjCode',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      parentCode: 'resultData',
                      parentKey: 'resultData',
                    },
                    {
                      attrId: '752056',
                      code: 'workItemId',
                      name: 'workItemId',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      parentCode: 'resultData',
                      parentKey: 'resultData',
                    },
                    {
                      attrId: '408718',
                      code: 'title',
                      name: 'title',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      parentCode: 'resultData',
                      parentKey: 'resultData',
                    },
                    {
                      attrId: '20285272',
                      code: 'handleObjType',
                      name: 'handleObjType',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      parentCode: 'resultData',
                      parentKey: 'resultData',
                    },
                    {
                      attrId: '723936',
                      code: 'workId',
                      name: 'workId',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      parentCode: 'resultData',
                      parentKey: 'resultData',
                    },
                    {
                      attrId: '2775649',
                      code: 'tachePass',
                      name: 'tachePass',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      parentCode: 'resultData',
                      parentKey: 'resultData',
                    },
                    {
                      attrId: '983249',
                      code: 'createTime',
                      name: 'createTime',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      parentCode: 'resultData',
                      parentKey: 'resultData',
                    },
                  ],
                  value: {
                    type: ['context', '$reply_683165?.resultData$'],
                    code: '',
                  },
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
              targetDataSourcePaths: [],
            },
            line_number: 15,
            callback1: [],
            callback2: [],
          },
          {
            type: 'reloadTableData',
            dataId: 168639831219657660,
            options: {
              compId: 'Table_2737373',
              compLib: 'comm',
              pageJsonId: '763609',
              compName: 'Table',
              id: '8124666',
              data: '$reply_683165?.resultData$',
              total: '$reply_683165?.resultData.length$',
              current: '1',
            },
            line_number: 16,
            callback1: [],
          },
          {
            type: 'customActionCode',
            dataId: 168639868424876860,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '880866',
              pageJsonId: '763609',
              code: 'function main(data,state,success,fail){var _reply_,_reply_2,_reply_2$resultData;console.log("tableData_1878164;",(_reply_=reply_683165)===null||_reply_===void 0?void 0:_reply_.resultData);if((_reply_2=reply_683165)!==null&&_reply_2!==void 0&&(_reply_2$resultData=_reply_2.resultData)!==null&&_reply_2$resultData!==void 0&&_reply_2$resultData.length){var _reply_3,_reply_3$resultData$;success(((_reply_3=reply_683165)===null||_reply_3===void 0?void 0:(_reply_3$resultData$=_reply_3.resultData[0])===null||_reply_3$resultData$===void 0?void 0:_reply_3$resultData$.approveOrdNbr)||"")}};',
              actionTitle: '获取子单工单编号来获取审批单详情',
            },
            line_number: 17,
            callback1: [
              {
                type: 'apiRequest',
                dataId: 168639868424893250,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '3215736',
                  pageJsonId: '763609',
                  sync: false,
                  method: 'post',
                  url: '/app/rhin/gateway/callRhinEngine',
                  _capabilityCode: 'auditOrderDistail',
                  _apiCode: 'auditOrderDistail',
                  _source: 'rhin',
                  _serviceId: '879342105577734144',
                  _serviceTitle: '审批单详情-hdb: auditOrderDistail',
                  params: 'object',
                  apiRequestSetParams: [
                    {
                      code: 'root',
                      name: '根节点',
                      attrType: 'object',
                      children: [
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          children: [
                            {
                              code: 'instNbr',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'root.body.instNbr',
                              compType: 'Input',
                              name: 'instNbr',
                              parents: ['root', 'body'],
                              id: 'root.body.instNbr',
                              dataKey: '580533_root.body.instNbr',
                              value: {
                                type: ['context', '$data_880866$'],
                                code: '',
                              },
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-1',
                            },
                            {
                              code: 'instId',
                              name: '新增节点',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              defaultValue: '',
                              _id: 'root.body.instId',
                              compType: 'Input',
                              parents: ['root', 'body'],
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-0',
                            },
                          ],
                          _id: 'root.body',
                          compType: 'Input',
                          parents: ['root'],
                          id: 'root.body',
                          dataKey: '580533_root.body',
                          parentType: 'object',
                          parentKey: '0',
                          key: '0-3',
                        },
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
                        },
                      ],
                      _id: 'root',
                      compType: 'Input',
                      isRoot: true,
                      parents: [],
                      key: '0',
                      id: 'root',
                      dataKey: '580533_root',
                    },
                  ],
                  _sourceName: '审批单详情-hdb',
                },
                line_number: 18,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 168639868424838180,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '893808',
                      pageJsonId: '763609',
                      code: 'function main(data,state,success,fail){var _reply_,_reply_2,_reply_3,_detailData$svcCont$d,_detailData$svcCont$d2,_detailData$svcCont$d3;console.log("\\u5BA1\\u6279\\u8BE6\\u60C5\\u6570\\u636E\\uFF1A",JSON.parse((_reply_=reply_3215736)===null||_reply_===void 0?void 0:_reply_.resultData));var detailData=(_reply_2=reply_3215736)!==null&&_reply_2!==void 0&&_reply_2.resultData?JSON.parse((_reply_3=reply_3215736)===null||_reply_3===void 0?void 0:_reply_3.resultData):{};var approveGradeInfo=(detailData===null||detailData===void 0?void 0:(_detailData$svcCont$d=detailData.svcCont.data)===null||_detailData$svcCont$d===void 0?void 0:(_detailData$svcCont$d2=_detailData$svcCont$d.content)===null||_detailData$svcCont$d2===void 0?void 0:(_detailData$svcCont$d3=_detailData$svcCont$d2.itemList)===null||_detailData$svcCont$d3===void 0?void 0:_detailData$svcCont$d3.find(function(item){var _detailData$svcCont$d4,_detailData$svcCont$d5,_detailData$svcCont$d6;return(detailData===null||detailData===void 0?void 0:(_detailData$svcCont$d4=detailData.svcCont.data)===null||_detailData$svcCont$d4===void 0?void 0:(_detailData$svcCont$d5=_detailData$svcCont$d4.content)===null||_detailData$svcCont$d5===void 0?void 0:(_detailData$svcCont$d6=_detailData$svcCont$d5.approveInfo)===null||_detailData$svcCont$d6===void 0?void 0:_detailData$svcCont$d6.approveGrade)===item.approveGrade}))||{};success({approveGradeName:approveGradeInfo.approveGradeName||"",catalogCode:approveGradeInfo.catalogCode||""})};',
                    },
                    line_number: 19,
                    callback1: [
                      {
                        type: 'setValue',
                        dataId: 168639868424807680,
                        options: {
                          compId: ['Input_941937_0593855_0024877'],
                          compLib: 'comm',
                          pageJsonId: '763609',
                          compName: 'Input',
                          id: '58389',
                          valueList: {
                            Input_941937_0593855_0024877:
                              '$data_893808.approveGradeName$',
                          },
                          compid: ['Input_941937_0593855_0024877'],
                        },
                        line_number: 20,
                        callback1: [],
                      },
                      {
                        type: 'apiRequest',
                        dataId: 168639868424860770,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '7010638',
                          pageJsonId: '763609',
                          sync: false,
                          method: 'post',
                          url: '/app/rhin/gateway/callRhinEngine',
                          _capabilityCode: 'getDcCatalogByCode',
                          _apiCode: 'getDcCatalogByCode',
                          _source: 'rhin',
                          _serviceId: '881821311255793664',
                          _serviceTitle:
                            '根据类目编码查询单个类目-tsm: getDcCatalogByCode',
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
                              dataKey: '3684207_header',
                              key: '0',
                            },
                            {
                              code: 'path',
                              name: '请求路径参数',
                              attrType: 'object',
                              children: [
                                {
                                  code: 'catalogCode',
                                  name: '新增节点',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'T',
                                  defaultValue: '',
                                  _id: 'path.catalogCode',
                                  compType: 'Input',
                                  parents: ['path'],
                                  id: 'path.catalogCode',
                                  dataKey: '3684207_path.catalogCode',
                                  value: {
                                    type: ['context', '$data_893808$'],
                                    code: 'catalogCode',
                                  },
                                  parentType: 'object',
                                  parentKey: '1',
                                  key: '1-0',
                                },
                              ],
                              _id: 'path',
                              compType: 'Input',
                              parents: [],
                              id: 'path',
                              dataKey: '3684207_path',
                              key: '1',
                            },
                            {
                              code: 'query',
                              name: 'URL 参数',
                              attrType: 'object',
                              _id: 'query',
                              compType: 'Input',
                              parents: [],
                              id: 'query',
                              dataKey: '3684207_query',
                              key: '2',
                            },
                            {
                              code: 'body',
                              name: '请求体',
                              attrType: 'object',
                              _id: 'body',
                              compType: 'Input',
                              parents: [],
                              id: 'body',
                              dataKey: '3684207_body',
                              key: '3',
                            },
                          ],
                          _sourceName: '根据类目编码查询单个类目-tsm',
                        },
                        line_number: 21,
                        callback1: [
                          {
                            type: 'sysSetValue',
                            dataId: 16863986842483516,
                            options: {
                              compId: ['Input_3386787_698768_759285'],
                              compName: 'page',
                              id: '532728',
                              pageJsonId: '763609',
                              compid: ['Input_3386787_698768_759285'],
                              valueList: {
                                Input_3386787_698768_759285:
                                  '$reply_7010638?.resultData.catalogName$',
                              },
                            },
                            line_number: 22,
                            callback1: [],
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
            ],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest267.params = [] || [];
    CMDGenerator(eventDataapiRequest267, {}, 'apiRequest', {
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
      className="__CustomClass_763609__"
    >
      <View
        name={'页面'}
        className={'fixed-form-item-label-width-120'}
        backgroundType={{ type: 'cleanColor', color: undefined }}
        $$componentItem={{
          id: 'View_763609_1_8284215_751155',
          uid: 'View_763609_1_8284215_751155',
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
        ref={(r: any) =>
          refs.setComponentRef(r, 'View_763609_1_8284215_751155')
        }
        {...injectData}
      >
        <View
          className="View_View_905871_961943_677577"
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_905871_961943_677577',
            uid: 'View_905871_961943_677577',
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
            textAlign: 'center',
            height: '42px',
            margin: 'px px px px',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_905871_961943_677577')}
          {...injectData}
        >
          <Text
            name={'合并审批单'}
            content={'合并审批单\n'}
            textType={'span'}
            version={'1.0'}
            showHtml={false}
            $$componentItem={{
              id: 'Text_236544_458361_1502133',
              uid: 'Text_236544_458361_1502133',
              type: 'Text',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              fontSize: 26,
              lineHeight: '42px',
              color: '#1c242e',
              textAlign: 'center',
              letterSpacing: '',
            }}
            ref={(r: any) =>
              refs.setComponentRef(r, 'Text_236544_458361_1502133')
            }
            {...injectData}
          />
        </View>
        <Card
          name={'卡片'}
          cardIconType={'middle'}
          title={'流程导向'}
          bordered={true}
          size={'default'}
          hasHeader={true}
          hasIcon={true}
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
            id: 'Card_2363325_028033_8706923',
            uid: 'Card_2363325_028033_8706923',
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
          ref={(r: any) =>
            refs.setComponentRef(r, 'Card_2363325_028033_8706923')
          }
          {...injectData}
        >
          <RemoteComponent
            name={'远程组件'}
            fileCode={'flow_view'}
            $$componentItem={{
              id: 'RemoteComponent_73826_358577_6797494',
              uid: 'RemoteComponent_73826_358577_6797494',
              type: 'RemoteComponent',
              ...componentItem,
            }}
            appId={undefined}
            lcdpParentRenderId={undefined}
            onMessage={(msg: any) => {}}
            ref={(r: any) =>
              refs.setComponentRef(r, 'RemoteComponent_73826_358577_6797494')
            }
            {...injectData}
          />
        </Card>
        <Card
          name={'卡片'}
          cardIconType={'middle'}
          title={'合并审批单信息'}
          bordered={true}
          size={'default'}
          hasHeader={true}
          hasIcon={true}
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
            id: 'Card_733452_608588_997676',
            uid: 'Card_733452_608588_997676',
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
          ref={(r: any) => refs.setComponentRef(r, 'Card_733452_608588_997676')}
          {...injectData}
        >
          <Row
            name={'行容器'}
            colSpan={24}
            gutterHorizontal={0}
            gutterVertical={0}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'Row_510227_934708_620667',
              uid: 'Row_510227_934708_620667',
              type: 'Row',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            ref={(r: any) =>
              refs.setComponentRef(r, 'Row_510227_934708_620667')
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
              formCode={'Form_8512707'}
              formColumns={[
                {
                  id: 'Input_190541',
                  label: '输入框',
                  compName: 'Input',
                  type: 'Input',
                  compType: 2,
                  compLib: 'comm',
                  props: {
                    name: '输入框',
                    basicStatus: 3,
                    size: 'default',
                    selfSpan: 16,
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
                    formItemIndex: 1,
                    fieldName: 'approveNbr',
                    disabled: true,
                    visible: true,
                    readOnly: false,
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
                  alias: 'DformInput',
                  setEvents: [],
                  isLabelDropBoxChild: false,
                  components: [],
                },
                {
                  id: 'Input_765315_4158096_136893',
                  label: '输入框',
                  compName: 'Input',
                  type: 'Input',
                  compType: 2,
                  compLib: 'comm',
                  props: {
                    name: '审批单主题',
                    basicStatus: 1,
                    size: 'default',
                    selfSpan: 16,
                    labelCol: 8,
                    wrapperCol: 16,
                    titleTip: 'notext',
                    tipLocation: 'after',
                    tipContent: '',
                    tipPlacement: 'top',
                    prefixIconPosition: 'before',
                    postfix: '',
                    postfixIconPosition: 'before',
                    required: true,
                    placeholder: '请输入',
                    formItemIndex: 0,
                    fieldName: 'mergeTitle',
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
                  setEvents: [],
                  isLabelDropBoxChild: false,
                  components: [],
                },
              ]}
              $$componentItem={{
                id: 'Form_8512707_5353887_082748',
                uid: 'Form_8512707_5353887_082748',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ padding: 'px px px px', margin: '0px 0px 8px 0px' }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Form_8512707_5353887_082748')
              }
              {...injectData}
            >
              <Input
                name={'合并审批单号'}
                size={'default'}
                selfSpan={16}
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
                fieldName={'approveNbr'}
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
                  id: 'Input_190541',
                  uid: 'Input_190541',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_190541')}
                {...injectData}
              />
              <Input
                name={'审批单主题'}
                size={'default'}
                selfSpan={16}
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
                fieldName={'mergeTitle'}
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
                  id: 'Input_765315_4158096_136893',
                  uid: 'Input_765315_4158096_136893',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_765315_4158096_136893')
                }
                {...injectData}
              />
            </Form>
          </Row>
          <Row
            name={'行容器'}
            colSpan={24}
            gutterHorizontal={0}
            gutterVertical={0}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'Row_833374_404443_504813',
              uid: 'Row_833374_404443_504813',
              type: 'Row',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            ref={(r: any) =>
              refs.setComponentRef(r, 'Row_833374_404443_504813')
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
              formCode={'Form_267917'}
              $$componentItem={{
                id: 'Form_267917_734842_8657022',
                uid: 'Form_267917_734842_8657022',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ padding: '0px 0px 0px 0px' }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Form_267917_734842_8657022')
              }
              {...injectData}
            >
              <Input
                name={'审批场景'}
                size={'default'}
                selfSpan={16}
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
                fieldName={'approveScene'}
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
                  id: 'Input_3386787_698768_759285',
                  uid: 'Input_3386787_698768_759285',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_3386787_698768_759285')
                }
                {...injectData}
              />
              <Input
                name={'最高审批层级'}
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
                fieldName={'approveGrade'}
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
                  id: 'Input_941937_0593855_0024877',
                  uid: 'Input_941937_0593855_0024877',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_941937_0593855_0024877')
                }
                {...injectData}
              />
            </Form>
          </Row>
          <Text
            name={'文本'}
            textType={'span'}
            version={'1.0'}
            showHtml={false}
            $$componentItem={{
              id: 'Text_6986125_739866_50631',
              uid: 'Text_6986125_739866_50631',
              type: 'Text',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              fontSize: '14px',
              lineHeight: '24px',
              color: 'rgba(220, 41, 63, 1)',
            }}
            ref={(r: any) =>
              refs.setComponentRef(r, 'Text_6986125_739866_50631')
            }
            {...injectData}
          />
          <View
            className="View_View_5773624_9763604_45619156"
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_5773624_9763604_45619156',
              uid: 'View_5773624_9763604_45619156',
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
              margin: '8px 0px 8px 0px',
            }}
            ref={(r: any) =>
              refs.setComponentRef(r, 'View_5773624_9763604_45619156')
            }
            {...injectData}
          >
            <Text
              name={'文本'}
              content={'注意'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_4031863_541239_797905',
                uid: 'Text_4031863_541239_797905',
                type: 'Text',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                fontSize: '14px',
                lineHeight: '24px',
                color: 'rgba(241, 80, 100, 1)',
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Text_4031863_541239_797905')
              }
              {...injectData}
            />
            <Text
              name={'文本'}
              content={'：请先查看每条审批单详情后，再进行批量审批操作'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_929211_226478_2574557',
                uid: 'Text_929211_226478_2574557',
                type: 'Text',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ fontSize: '14px', lineHeight: '24px', color: '#1c242e' }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Text_929211_226478_2574557')
              }
              {...injectData}
            />
          </View>
          <Table
            name={'表格'}
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
                title: '审批单号',
                dataIndex: 'approveOrdNbr',
                key: 'column1',
                className: '',
                id: '558752952',
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
                id: '207618',
                dataIndex: 'title',
                title: '工单主题',
                key: '207618',
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
                id: '0221628',
                dataIndex: 'tachePass',
                title: '是否同意',
                key: '0221628',
                className: 'divider',
                staticDataSource: [
                  { id: '719654', label: '同意', value: 'pass' },
                  { id: '249151', label: '不同意', value: 'refuse' },
                ],
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
                id: '829413',
                dataIndex: 'nextStaffName',
                title: '下一步处理人',
                key: '829413',
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
                title: '审批意见',
                dataIndex: 'tacheRemark',
                key: 'column2',
                className: 'divider',
                id: '336261',
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
                id: '055436',
                dataIndex: 'lastHandleTime',
                title: '最后处理时间',
                key: '055436',
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
                id: '762167',
                dataIndex: 'createTime',
                title: '创建时间',
                key: '762167',
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
            rowSelection={{ type: 'checkbox' }}
            showHead={false}
            showTotal={false}
            showSizeChanger={false}
            showQuickJumper={false}
            pageSizeOptions={'[5,10,20]'}
            customNum={3}
            dataSource={''}
            rowKey={'keyId'}
            rowActions={[
              {
                title: '详情',
                iconPos: 'left',
                icon: { theme: 'outlined', type: 'file-search' },
                type: 'detail',
                id: '0226883',
                checked: true,
              },
              {
                title: '删除',
                iconPos: 'left',
                icon: { theme: 'outlined', type: 'delete' },
                type: 'delete',
                id: '870375',
                checked: true,
              },
            ]}
            extend={[]}
            $$componentItem={{
              id: 'Table_2737373',
              uid: 'Table_2737373',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            onRowDetail={(rowId: any, row: any, index: any) => {
              const eventDatashowCustomModal133: any = [
                {
                  type: 'showCustomModal',
                  dataId: 168639721701020400,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '628825',
                    pageJsonId: '763609',
                    modalname: '/auditDetailsModal',
                    pageId: '907454980792348672',
                    modalPath: '/auditDetailsModal',
                    paramsObj: {
                      scene: 'V',
                      instNbr: '$row.approveOrdNbr$',
                      workId: '$row.workId$',
                    },
                    paramsObjKeyValueMap: {
                      scene: 'V',
                      instNbr: '$row.approveOrdNbr$',
                      workId: '$row.workId$',
                    },
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatashowCustomModal133.params =
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
                eventDatashowCustomModal133,
                { rowId, row, index },
                'showCustomModal',
                {
                  id: 'showCustomModal',
                  name: 'showCustomModal',
                  type: 'showCustomModal',
                  platform: 'pc',
                },
              );
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Table_2737373')}
            {...injectData}
          />
          <View
            className="View_View_028577_482375_5168184"
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_028577_482375_5168184',
              uid: 'View_028577_482375_5168184',
              type: 'View',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              display: 'block',
              flexDirection: 'column',
              padding: 'px px px px',
              width: '100%',
              margin: '8px 0px 0px 0px',
            }}
            ref={(r: any) =>
              refs.setComponentRef(r, 'View_028577_482375_5168184')
            }
            {...injectData}
          >
            <Text
              name={'文本'}
              content={'操作说明'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_228554_771548_389914',
                uid: 'Text_228554_771548_389914',
                type: 'Text',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                fontSize: '14px',
                lineHeight: '24px',
                color: '#1c242e',
                fontWeight: 600,
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Text_228554_771548_389914')
              }
              {...injectData}
            />
            <Text
              name={'文本'}
              content={
                '：可多选审批单后，再批量处理为“同意”或“不同意”。全部审批单都处理后，方可提交至下一环节。'
              }
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_0227405_491373_9209739',
                uid: 'Text_0227405_491373_9209739',
                type: 'Text',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ fontSize: '14px', lineHeight: '24px', color: '#999' }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Text_0227405_491373_9209739')
              }
              {...injectData}
            />
          </View>
        </Card>
        <Card
          name={'流程'}
          cardIconType={'middle'}
          title={'流程'}
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
            id: 'Card_5223316_930808_326126',
            uid: 'Card_5223316_930808_326126',
            type: 'Card',
            ...componentItem,
          }}
          disabled={`${functorsMap?.IF(urlParam?.scene === 'U', 1, 2)}` === '3'}
          visible={`${functorsMap?.IF(urlParam?.scene === 'U', 1, 2)}` !== '2'}
          readOnly={`${functorsMap?.IF(urlParam?.scene === 'U', 1, 2)}` === '4'}
          style={{
            padding: '20px 20px 20px 20px',
            overflowY: 'visible',
            margin: '0 0 16px 0',
          }}
          ref={(r: any) =>
            refs.setComponentRef(r, 'Card_5223316_930808_326126')
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
            formCode={'Form_495566'}
            formColumns={[
              {
                id: 'Radio_8525737_018091',
                label: '单选组',
                compName: 'Radio',
                type: 'Radio',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '是否同意',
                  radioType: 'Radio',
                  optionMarginRight: 0,
                  selfSpan: 16,
                  labelCol: 8,
                  wrapperCol: 16,
                  disabled: false,
                  visible: true,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipPlacement: 'top',
                  required: true,
                  formItemIndex: 0,
                  staticData: {
                    data: [
                      { id: '932459', label: '同意', value: 'pass' },
                      { id: '2324481', label: '不同意', value: 'refuse' },
                    ],
                    type: 'custom',
                  },
                  options: [
                    { id: '932459', label: '同意', value: 'pass' },
                    { id: '2324481', label: '不同意', value: 'refuse' },
                  ],
                  fieldName: 'tachePass',
                  defaultValue: 'pass',
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Radio',
                description: '',
                image: '',
                groupsName: '数据录入',
                isInlineBlock: true,
                setEvents: [
                  {
                    dataName: 'event',
                    dataId: 166694643818041300,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 166728800448490780,
                        children: [],
                        todoOptions: [],
                        options: {
                          compId: 'Select_599981_437465',
                          compLib: 'comm',
                          pageJsonId: '763609',
                          compName: 'Select',
                          id: '6334512',
                        },
                        actionObjId: 'Select_599981_437465',
                        actionObjName: 'Select',
                        value: 'clearValue',
                        compLib: 'comm',
                        elseIfs: [],
                      },
                      {
                        dataName: 'action',
                        dataId: 166806408762868930,
                        children: [
                          {
                            dataName: 'callback',
                            dataId: 166806408762822940,
                            children: [
                              {
                                dataName: 'condition',
                                dataId: 166806410154891740,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 166806410154863170,
                                    children: [
                                      {
                                        dataName: 'callback',
                                        dataId: 166806410154801200,
                                        children: [],
                                        value: 'callback1',
                                        params: [],
                                        elseIfs: [],
                                      },
                                    ],
                                    todoOptions: ['value'],
                                    options: {
                                      compId: 'Select_599981_437465',
                                      compLib: 'comm',
                                      pageJsonId: '763609',
                                      compName: 'Select',
                                      id: '201343',
                                      value:
                                        refData?.current?.nextTacheList
                                          ?.resultData[0]?.tacheCode,
                                      valueList: {
                                        Select_599981_437465:
                                          refData?.current?.nextTacheList
                                            ?.resultData[0]?.tacheCode,
                                      },
                                    },
                                    actionObjId: 'Select_599981_437465',
                                    actionObjName: 'Select',
                                    value: 'setValue',
                                    compLib: 'comm',
                                    elseIfs: [],
                                  },
                                ],
                                elseIfs: [],
                                condition: [
                                  {
                                    condId: '018642',
                                    options: {
                                      useManual: true,
                                      useObject: false,
                                      context:
                                        refData?.current?.nextTacheList
                                          ?.resultData?.length,
                                      operate: '==',
                                      manualValue: '1',
                                    },
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                                desc: '如果只有一条数据',
                              },
                            ],
                            value: 'callback1',
                            params: [],
                            elseIfs: [],
                          },
                          {
                            dataName: 'callback',
                            dataId: 166806408762834940,
                            children: [],
                            value: 'callback2',
                            params: [],
                            elseIfs: [],
                          },
                        ],
                        todoOptions: [
                          'selectServerDataSource',
                          'dataSourceReloadFilter',
                        ],
                        options: {
                          compId: 'reloadDataSource',
                          compName: 'page',
                          id: '613539',
                          pageJsonId: '763609',
                          dataSourceId: 166728910592359680,
                          dataSourceName: 'nextTacheList',
                          dataSourceRelType: 'service',
                          dataSourceReloadFilter: [
                            {
                              attrId: '195894',
                              code: 'header',
                              name: '请求头参数',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'object',
                            },
                            {
                              attrId: '5252861',
                              code: 'path',
                              name: '请求路径参数',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'object',
                            },
                            {
                              attrId: '639022',
                              code: 'query',
                              name: 'URL 参数',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'object',
                            },
                            {
                              attrId: '5624153',
                              code: 'body',
                              name: '请求体',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'object',
                              children: [
                                {
                                  attrId: '7905776',
                                  code: 'endLevel',
                                  name: '最高审批等级',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  value: {
                                    type: [
                                      'datasource',
                                      'flowItemSimpleInfoLocal',
                                      'data',
                                    ],
                                    code: 'endLevel',
                                  },
                                },
                                {
                                  attrId: '964025',
                                  code: 'tacheCode',
                                  name: '环节编码',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  value: { type: [], code: 'tacheCode' },
                                },
                                {
                                  attrId: '910371',
                                  code: 'flowCode',
                                  name: '流程编码',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  value: { type: [], code: 'flowCode' },
                                },
                                {
                                  attrId: '616947',
                                  code: 'tachePass',
                                  name: '审批结果',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  value: {
                                    type: ['context', e?.target?.value],
                                    code: '',
                                  },
                                },
                                {
                                  attrId: '81947957',
                                  code: 'orderType',
                                  name: '流程订单类型',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  value: { type: [], code: 'orderType' },
                                },
                                {
                                  attrId: '4576673',
                                  code: 'workId',
                                  name: '流程实例id',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  value: { type: [], code: 'workId' },
                                },
                                {
                                  attrId: '32249',
                                  code: 'workItemId',
                                  name: '流程环节实例id',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                  value: {
                                    type: [
                                      'datasource',
                                      'flowItemSimpleInfoLocal',
                                      'data',
                                    ],
                                    code: 'workItemId',
                                  },
                                },
                              ],
                            },
                          ],
                          dataSourceSetValue: [
                            {
                              attrId: '3798785',
                              code: 'resultMsgCode',
                              name: 'resultMsgCode',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '826613',
                              code: 'resultMsg',
                              name: 'resultMsg',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '7323296',
                              code: 'resultCode',
                              name: 'resultCode',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'string',
                            },
                            {
                              attrId: '604261',
                              code: 'resultData',
                              name: 'resultData',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'objectArray',
                              children: [
                                {
                                  attrId: '9740774',
                                  code: 'tacheName',
                                  name: '环节名称',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '872747',
                                  code: 'tacheCode',
                                  name: '环节编码',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '8913793',
                                  code: 'fixedUser',
                                  name: '新增节点',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '790677',
                                  code: 'hideUserSelect',
                                  name: '新增节点',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                                {
                                  attrId: '4662089',
                                  code: 'popupType',
                                  name: '选人弹窗类型',
                                  sort: { isSort: true },
                                  initialData: { type: 'static' },
                                  type: 'string',
                                },
                              ],
                            },
                          ],
                          otherObjectArrayOptions: {},
                        },
                        actionObjId: 'reloadDataSource',
                        actionObjName: 'page',
                        value: 'reloadDataSource',
                        elseIfs: [],
                      },
                    ],
                    value: 'onChange',
                    params: [
                      {
                        title: '单选组取值',
                        name: 'e',
                        value: e?.target?.value,
                      },
                    ],
                    elseIfs: [],
                  },
                ],
                isLabelDropBoxChild: false,
                components: [],
              },
              {
                id: 'Select_599981_437465',
                label: '下拉单选',
                compName: 'Select',
                type: 'Select',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '下一处理环节',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: 16,
                  labelCol: 8,
                  wrapperCol: 16,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipPlacement: 'top',
                  required: true,
                  filter: 'none',
                  classification: 'default',
                  placeholder: '请选择',
                  formItemIndex: 1,
                  fieldName: 'data.flowNextNodeList.resultData.tacheName',
                  staticData: {
                    data: {
                      dataSource: data?.nextTacheList?.resultData,
                      labelKey: 'tacheName',
                      valueKey: 'tacheCode',
                    },
                    type: 'dataSource',
                  },
                  staticDataSourceService: {
                    dataSource: data?.nextTacheList?.resultData,
                    labelKey: 'tacheName',
                    valueKey: 'tacheCode',
                  },
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
                functors: {},
                hasValue: true,
                components: [],
              },
              {
                id: 'Input_668689_2052015',
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '下一步处理人',
                  basicStatus: 4,
                  size: 'default',
                  selfSpan: 16,
                  labelCol: 8,
                  wrapperCol: '16',
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipContent: '',
                  tipPlacement: 'top',
                  prefixIconPosition: 'before',
                  postfix: '选择处理人',
                  postfixIconPosition: 'before',
                  required: true,
                  placeholder: '请输入',
                  formItemIndex: 2,
                  fieldName: 'nextStaffName',
                  postfixStyle: '3',
                  disabled: false,
                  visible: true,
                  readOnly: true,
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
                    dataId: 166210684131586180,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 166547684276573920,
                        children: [
                          {
                            dataName: 'callback',
                            dataId: 166547684276595200,
                            children: [
                              {
                                dataName: 'condition',
                                dataId: 16659723928556222,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 166597239957664580,
                                    children: [
                                      {
                                        dataName: 'callback',
                                        dataId: 166597239957601250,
                                        children: [
                                          {
                                            dataName: 'action',
                                            dataId: 166597239957605150,
                                            children: [
                                              {
                                                dataName: 'callback',
                                                dataId: 166597239957636030,
                                                children: [],
                                                value: 'callback1',
                                                params: [],
                                                elseIfs: [],
                                              },
                                            ],
                                            todoOptions: ['value'],
                                            options: {
                                              compId: 'Input_668689_2052015',
                                              compLib: 'comm',
                                              pageJsonId: '530274',
                                              compName: 'Input',
                                              id: '694321',
                                              value: okData_443613.userName,
                                            },
                                            actionObjId: 'Input_668689_2052015',
                                            actionObjName: 'Input',
                                            value: 'setValue',
                                            compLib: 'comm',
                                            elseIfs: [],
                                          },
                                          {
                                            dataName: 'action',
                                            dataId: 166597239957634750,
                                            children: [
                                              {
                                                dataName: 'callback',
                                                dataId: 166597239957613280,
                                                children: [],
                                                value: 'callback1',
                                                params: [],
                                                elseIfs: [],
                                              },
                                            ],
                                            todoOptions: ['value'],
                                            options: {
                                              compId: 'Input_9206452',
                                              compLib: 'comm',
                                              pageJsonId: '530274',
                                              compName: 'Input',
                                              id: '6445214',
                                              value: okData_443613.userCode,
                                            },
                                            actionObjId: 'Input_9206452',
                                            actionObjName: 'Input',
                                            value: 'setValue',
                                            compLib: 'comm',
                                            elseIfs: [],
                                          },
                                        ],
                                        value: 'callback1',
                                        params: [
                                          {
                                            title: '弹窗确认回调参数',
                                            name: 'okData_016049',
                                            value: okData_443613,
                                          },
                                        ],
                                        elseIfs: [],
                                      },
                                      {
                                        dataName: 'callback',
                                        dataId: 166597239957606620,
                                        children: [],
                                        value: 'callback2',
                                        params: [],
                                        elseIfs: [],
                                      },
                                    ],
                                    todoOptions: ['modalname', 'compState'],
                                    options: {
                                      compId: 'showCustomModal',
                                      compName: 'page',
                                      id: '443613',
                                      pageJsonId: '530274',
                                      modalname: '/audit/selectonepostuser',
                                      pageId: '897014700989980672',
                                      paramsObj: {
                                        tacheCode:
                                          selectedData_1932047[0]?.value,
                                        flowCode: data?.globalParam?.flowCode,
                                      },
                                      paramsObjKeyValueMap: {
                                        tacheCode:
                                          selectedData_1932047[0]?.value,
                                        flowCode: data?.globalParam?.flowCode,
                                      },
                                    },
                                    actionObjId: 'showCustomModal',
                                    actionObjName: 'page',
                                    value: 'showCustomModal',
                                    elseIfs: [],
                                  },
                                ],
                                elseIfs: [
                                  {
                                    dataName: 'elseIf',
                                    dataId: 166597344303980830,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 166597344881641600,
                                        children: [
                                          {
                                            dataName: 'callback',
                                            dataId: 166597344881645300,
                                            children: [
                                              {
                                                dataName: 'action',
                                                dataId: 166597344881630400,
                                                children: [
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 166597344881636060,
                                                    children: [],
                                                    value: 'callback1',
                                                    params: [],
                                                    elseIfs: [],
                                                  },
                                                ],
                                                todoOptions: ['value'],
                                                options: {
                                                  compId:
                                                    'Input_668689_2052015',
                                                  compLib: 'comm',
                                                  pageJsonId: '530274',
                                                  compName: 'Input',
                                                  id: '288118',
                                                  value:
                                                    okData_1424606.staffSelect
                                                      ?.userName,
                                                },
                                                actionObjId:
                                                  'Input_668689_2052015',
                                                actionObjName: 'Input',
                                                value: 'setValue',
                                                compLib: 'comm',
                                                elseIfs: [],
                                              },
                                              {
                                                dataName: 'action',
                                                dataId: 16659734488161124,
                                                children: [
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 166597344881695360,
                                                    children: [],
                                                    value: 'callback1',
                                                    params: [],
                                                    elseIfs: [],
                                                  },
                                                ],
                                                todoOptions: ['value'],
                                                options: {
                                                  compId: 'Input_9206452',
                                                  compLib: 'comm',
                                                  pageJsonId: '530274',
                                                  compName: 'Input',
                                                  id: '306824',
                                                  value:
                                                    okData_1424606.staffSelect
                                                      ?.userCode,
                                                },
                                                actionObjId: 'Input_9206452',
                                                actionObjName: 'Input',
                                                value: 'setValue',
                                                compLib: 'comm',
                                                elseIfs: [],
                                              },
                                            ],
                                            value: 'callback1',
                                            params: [
                                              {
                                                title: '弹窗确认回调参数',
                                                name: 'okData_016049',
                                                value: okData_1424606,
                                              },
                                            ],
                                            elseIfs: [],
                                          },
                                          {
                                            dataName: 'callback',
                                            dataId: 166597344881613600,
                                            children: [],
                                            value: 'callback2',
                                            params: [],
                                            elseIfs: [],
                                          },
                                        ],
                                        todoOptions: ['modalname', 'compState'],
                                        options: {
                                          compId: 'showCustomModal',
                                          compName: 'page',
                                          id: '1424606',
                                          pageJsonId: '530274',
                                          modalname: '/audit/selectoneuser',
                                          pageId: '881887068344979456',
                                          paramsObj: {
                                            tacheCode:
                                              selectedData_1932047[0]?.value,
                                            flowCode:
                                              data?.globalParam?.flowCode,
                                            workItemId:
                                              data?.globalParam?.workItemId,
                                          },
                                          paramsObjKeyValueMap: {
                                            tacheCode:
                                              selectedData_1932047[0]?.value,
                                            flowCode:
                                              data?.globalParam?.flowCode,
                                            workItemId:
                                              data?.globalParam?.workItemId,
                                          },
                                          modalPath: '/audit/selectoneuser',
                                        },
                                        actionObjId: 'showCustomModal',
                                        actionObjName: 'page',
                                        value: 'showCustomModal',
                                        elseIfs: [],
                                      },
                                    ],
                                    condition: [],
                                  },
                                ],
                                condition: [
                                  {
                                    condId: '417841',
                                    options: {
                                      context: data?.globalParam?.popupType,
                                      operate: '==',
                                      useManual: true,
                                      manualValue: 'post',
                                    },
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                              },
                            ],
                            value: 'callback1',
                            params: [],
                            elseIfs: [],
                          },
                          {
                            dataName: 'callback',
                            dataId: 166547684276564130,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166547754215848640,
                                children: [],
                                todoOptions: ['msgType', 'value'],
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '719037',
                                  pageJsonId: '530274',
                                  type: 'info',
                                  value: '请先选择下一处理环节',
                                },
                                actionObjId: 'showMessage',
                                actionObjName: 'system',
                                value: 'showMessage',
                                elseIfs: [],
                              },
                            ],
                            value: 'callback2',
                            params: [],
                            elseIfs: [],
                          },
                        ],
                        todoOptions: [],
                        options: {
                          compId: 'Select_6041524',
                          compLib: 'comm',
                          pageJsonId: '530274',
                          compName: 'Select',
                          id: '1932047',
                        },
                        actionObjId: 'Select_6041524',
                        actionObjName: 'Select',
                        value: 'getSelectedData',
                        compLib: 'comm',
                        elseIfs: [],
                      },
                    ],
                    value: 'onIconClick',
                    params: [],
                    elseIfs: [],
                  },
                ],
                isLabelDropBoxChild: false,
                components: [],
              },
              {
                id: 'Input_9206452_698968',
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '处理人隐藏框',
                  basicStatus: 2,
                  size: 'default',
                  selfSpan: 16,
                  labelCol: 8,
                  wrapperCol: '16',
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipContent: '',
                  tipPlacement: 'top',
                  prefixIconPosition: 'before',
                  postfix: '',
                  postfixIconPosition: 'before',
                  required: false,
                  placeholder: '请输入',
                  formItemIndex: 3,
                  fieldName: '1',
                  disabled: false,
                  visible: false,
                  readOnly: false,
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
                setEvents: [],
                isLabelDropBoxChild: false,
                components: [],
              },
              {
                id: 'TextArea_2382214_3272195',
                label: '文本域',
                compName: 'TextArea',
                type: 'TextArea',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '审批意见',
                  selfSpan: 16,
                  labelCol: 8,
                  wrapperCol: 16,
                  readOnly: false,
                  disabled: false,
                  visible: true,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipPlacement: 'top',
                  required: false,
                  placeholder: '请输入',
                  formItemIndex: 4,
                  fieldName: 'desc',
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'TextArea',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                isLabelDropBoxChild: false,
                components: [],
              },
              {
                id: 'Button_8864054_286047',
                label: '按钮',
                compName: 'Button',
                type: 'Button',
                compType: 1,
                compLib: 'comm',
                props: {
                  name: '我的常用意见',
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
                  type: 'link',
                  formItemIndex: 5,
                  labelCol: 8,
                  wrapperCol: 16,
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
                    dataId: 166729076926091650,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 166729082352126980,
                        children: [
                          {
                            dataName: 'callback',
                            dataId: 166729082352164860,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166729084670519140,
                                children: [],
                                todoOptions: ['valueArray'],
                                options: {
                                  compId: 'debug',
                                  compName: 'system',
                                  id: '6881507',
                                  pageJsonId: '763609',
                                },
                                actionObjId: 'debug',
                                actionObjName: 'system',
                                value: 'console',
                              },
                              {
                                dataName: 'action',
                                dataId: 166729086687566750,
                                children: [
                                  {
                                    dataName: 'callback',
                                    dataId: 166729086687514800,
                                    children: [],
                                    value: 'callback1',
                                    params: [],
                                  },
                                ],
                                todoOptions: ['value'],
                                options: {
                                  compId: 'TextArea_2382214_3272195',
                                  compLib: 'comm',
                                  pageJsonId: '763609',
                                  compName: 'TextArea',
                                  id: '066216',
                                  value: okData_710146.handleComment,
                                },
                                actionObjId: 'TextArea_2382214_3272195',
                                actionObjName: 'TextArea',
                                value: 'setValue',
                                compLib: 'comm',
                              },
                            ],
                            value: 'callback1',
                            params: [
                              {
                                title: '弹窗确认回调参数',
                                name: 'okData_710146',
                                value: okData_710146,
                              },
                            ],
                          },
                          {
                            dataName: 'callback',
                            dataId: 166729082352178460,
                            children: [],
                            value: 'callback2',
                            params: [],
                          },
                        ],
                        todoOptions: ['modalname', 'compState'],
                        options: {
                          compId: 'showCustomModal',
                          compName: 'page',
                          id: '710146',
                          pageJsonId: '763609',
                          modalname: '/common/comment/list',
                          pageId: '895869212089622528',
                        },
                        actionObjId: 'showCustomModal',
                        actionObjName: 'page',
                        value: 'showCustomModal',
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
            ]}
            formItemIndex={2}
            $$componentItem={{
              id: 'Form_495566_5382465_894809',
              uid: 'Form_495566_5382465_894809',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) =>
              refs.setComponentRef(r, 'Form_495566_5382465_894809')
            }
            {...injectData}
          >
            <Radio
              name={'是否同意'}
              radioType={'Radio'}
              optionMarginRight={0}
              selfSpan={16}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              formItemIndex={0}
              fieldName={'tachePass'}
              defaultValue={'pass'}
              dataSource={[
                { id: '932459', label: '同意', value: 'pass' },
                { id: '2324481', label: '不同意', value: 'refuse' },
              ]}
              $$componentItem={{
                id: 'Radio_8525737_018091_602067',
                uid: 'Radio_8525737_018091_602067',
                type: 'Radio',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatacallSelfFunc402: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166848178086493760,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '5737813',
                      pageJsonId: '763609',
                      customFuncName: 'tachePassChange',
                      customFuncParams: 'object',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc402.params =
                  [
                    {
                      title: '单选组取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc402, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Radio_8525737_018091_602067')
              }
              {...injectData}
            />
            <Select
              name={'下一处理环节'}
              size={'default'}
              selfSpan={16}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              filter={'none'}
              classification={'default'}
              placeholder={'请选择'}
              formItemIndex={1}
              fieldName={'nextTache'}
              dataSource={getStaticDataSourceService(
                data?.nextTacheList?.resultData,
                'tacheName',
                'tacheCode',
              )}
              $$componentItem={{
                id: 'Select_599981_437465_642991',
                uid: 'Select_599981_437465_642991',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatacallSelfFunc403: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166842722195184030,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '120372',
                      pageJsonId: '763609',
                      customFuncName: 'nextTacheChange',
                      customFuncParams: 'object',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc403.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDatacallSelfFunc403, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Select_599981_437465_642991')
              }
              {...injectData}
            />
            <Input
              name={'下一步处理人'}
              size={'default'}
              selfSpan={16}
              labelCol={8}
              wrapperCol={'16'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'选择处理人'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              formItemIndex={2}
              fieldName={'nextStaffName'}
              postfixStyle={'3'}
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
                id: 'Input_668689_2052015_8235997',
                uid: 'Input_668689_2052015_8235997',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={true}
              isFormRootChild={true}
              onIconClick={() => {
                const eventDatagetValue183: any = [
                  {
                    type: 'getValue',
                    dataId: 166849562249611170,
                    options: {
                      compId: 'Select_599981_437465_642991',
                      compLib: 'comm',
                      pageJsonId: '763609',
                      compName: 'Select',
                      id: '048087',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 166849564637170900,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '633515',
                          pageJsonId: '763609',
                          code: 'function main(data,state,success,fail){console.log("\\u4E0B\\u62C9\\u6846\\u5217\\u8868\\uFF1A",data.nextTacheList);console.log("\\u4E0B\\u62C9\\u6846\\u9009\\u4E2D\\u503C\\uFF1A",value_048087);var selectedItem=data.nextTacheList.resultData.find(function(item){return item.tacheCode===value_048087});console.log("\\u4E0B\\u62C9\\u6846\\u9009\\u4E2D\\u6570\\u636E\\uFF1A",selectedItem);if(selectedItem!==null&&selectedItem!==void 0&&selectedItem.tacheCode){success(selectedItem.popupType)}else{fail()}};',
                        },
                        line_number: 2,
                        callback1: [
                          {
                            type: 'ifelse',
                            condition: [
                              {
                                condId: '827367',
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context: '$data_633515$',
                                  operate: '==',
                                  manualValue: 'post',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 166849564637177340,
                            elseIfs: [
                              {
                                dataName: 'elseIf',
                                dataId: 166849564637149500,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 166849564637122880,
                                    children: [
                                      {
                                        dataName: 'callback',
                                        dataId: 166849564637144500,
                                        children: [
                                          {
                                            dataName: 'action',
                                            dataId: 166849564637198560,
                                            children: [],
                                            todoOptions: ['valueArray'],
                                            options: {
                                              compId: 'debug',
                                              compName: 'system',
                                              id: '4558045',
                                              pageJsonId: '763609',
                                              value: [
                                                '下一步处理人信息',
                                                '$okData_530665$',
                                              ],
                                            },
                                            actionObjId: 'debug',
                                            actionObjName: 'system',
                                            value: 'console',
                                            elseIfs: [],
                                            line_number: 8,
                                          },
                                          {
                                            dataName: 'action',
                                            dataId: 166849564637111650,
                                            children: [
                                              {
                                                dataName: 'callback',
                                                dataId: 166849564637131200,
                                                children: [],
                                                value: 'callback1',
                                                params: [],
                                                elseIfs: [],
                                              },
                                            ],
                                            todoOptions: [
                                              'compId',
                                              'valueList',
                                            ],
                                            options: {
                                              compId: [
                                                'Input_668689_2052015_8235997',
                                                'Input_9206452_698968_5646934',
                                              ],
                                              compLib: 'comm',
                                              pageJsonId: '763609',
                                              compName: 'Input',
                                              id: '0175007',
                                              valueList: {
                                                Input_668689_2052015_8235997:
                                                  '$okData_530665.staffSelect.userName$',
                                                Input_9206452_698968_5646934:
                                                  '$okData_530665.staffSelect.userCode$',
                                              },
                                              compid: [
                                                'Input_668689_2052015_8235997',
                                                'Input_9206452_698968_5646934',
                                              ],
                                            },
                                            actionObjId:
                                              'Input_668689_2052015_8235997',
                                            actionObjName: 'Input',
                                            value: 'setValue',
                                            compLib: 'comm',
                                            elseIfs: [],
                                            line_number: 9,
                                          },
                                        ],
                                        value: 'callback1',
                                        params: [
                                          {
                                            title: '弹窗确认回调参数',
                                            name: 'okData_5197527',
                                            value: '$okData_530665$',
                                          },
                                        ],
                                        elseIfs: [],
                                      },
                                      {
                                        dataName: 'callback',
                                        dataId: 166849564637170660,
                                        children: [],
                                        value: 'callback2',
                                        params: [],
                                        elseIfs: [],
                                      },
                                    ],
                                    todoOptions: ['modalname', 'compState'],
                                    options: {
                                      compId: 'showCustomModal',
                                      compName: 'page',
                                      id: '530665',
                                      pageJsonId: '763609',
                                      modalname: '/audit/selectoneuser',
                                      pageId: '881887068344979456',
                                      paramsObj: {
                                        flowCode:
                                          '$data.flowItemSimpleInfoLocal.flowCode$',
                                        tacheCode: '$value_048087$',
                                        workItemId:
                                          '$data.flowItemSimpleInfoLocal.workItemId$',
                                      },
                                      paramsObjKeyValueMap: {
                                        flowCode:
                                          '$data.flowItemSimpleInfoLocal.flowCode$',
                                        tacheCode: '$value_048087$',
                                        workItemId:
                                          '$data.flowItemSimpleInfoLocal.workItemId$',
                                      },
                                    },
                                    actionObjId: 'showCustomModal',
                                    actionObjName: 'page',
                                    value: 'showCustomModal',
                                    elseIfs: [],
                                    line_number: 7,
                                  },
                                ],
                                condition: [],
                                elseIfs: [],
                                callback: [
                                  {
                                    type: 'showCustomModal',
                                    dataId: 166849564637122880,
                                    options: {
                                      compId: 'showCustomModal',
                                      compName: 'page',
                                      id: '530665',
                                      pageJsonId: '763609',
                                      modalname: '/audit/selectoneuser',
                                      pageId: '881887068344979456',
                                      paramsObj: {
                                        flowCode:
                                          '$data.flowItemSimpleInfoLocal.flowCode$',
                                        tacheCode: '$value_048087$',
                                        workItemId:
                                          '$data.flowItemSimpleInfoLocal.workItemId$',
                                      },
                                      paramsObjKeyValueMap: {
                                        flowCode:
                                          '$data.flowItemSimpleInfoLocal.flowCode$',
                                        tacheCode: '$value_048087$',
                                        workItemId:
                                          '$data.flowItemSimpleInfoLocal.workItemId$',
                                      },
                                    },
                                    line_number: 7,
                                    callback1: [
                                      {
                                        type: 'console',
                                        dataId: 166849564637198560,
                                        options: {
                                          compId: 'debug',
                                          compName: 'system',
                                          id: '4558045',
                                          pageJsonId: '763609',
                                          value: [
                                            '下一步处理人信息',
                                            '$okData_530665$',
                                          ],
                                        },
                                        line_number: 8,
                                      },
                                      {
                                        type: 'setValue',
                                        dataId: 166849564637111650,
                                        options: {
                                          compId: [
                                            'Input_668689_2052015_8235997',
                                            'Input_9206452_698968_5646934',
                                          ],
                                          compLib: 'comm',
                                          pageJsonId: '763609',
                                          compName: 'Input',
                                          id: '0175007',
                                          valueList: {
                                            Input_668689_2052015_8235997:
                                              '$okData_530665.staffSelect.userName$',
                                            Input_9206452_698968_5646934:
                                              '$okData_530665.staffSelect.userCode$',
                                          },
                                          compid: [
                                            'Input_668689_2052015_8235997',
                                            'Input_9206452_698968_5646934',
                                          ],
                                        },
                                        line_number: 9,
                                        callback1: [],
                                      },
                                    ],
                                    callback2: [],
                                  },
                                ],
                              },
                            ],
                            line_number: 3,
                            callback1: [
                              {
                                type: 'showCustomModal',
                                dataId: 166849564637167140,
                                options: {
                                  compId: 'showCustomModal',
                                  compName: 'page',
                                  id: '59262',
                                  pageJsonId: '763609',
                                  modalname: '/audit/selectonepostuser',
                                  pageId: '897014700989980672',
                                  paramsObj: {
                                    flowCode:
                                      '$data.flowItemSimpleInfoLocal.flowCode$',
                                    tacheCode: '$value_048087$',
                                  },
                                  paramsObjKeyValueMap: {
                                    flowCode:
                                      '$data.flowItemSimpleInfoLocal.flowCode$',
                                    tacheCode: '$value_048087$',
                                  },
                                },
                                line_number: 4,
                                callback1: [
                                  {
                                    type: 'console',
                                    dataId: 166849564637102300,
                                    options: {
                                      compId: 'debug',
                                      compName: 'system',
                                      id: '551113',
                                      pageJsonId: '763609',
                                      value: [
                                        '岗位处理人信息',
                                        '$okData_59262$',
                                      ],
                                    },
                                    line_number: 5,
                                  },
                                  {
                                    type: 'setValue',
                                    dataId: 166849564637177000,
                                    options: {
                                      compId: [
                                        'Input_668689_2052015_8235997',
                                        'Input_9206452_698968_5646934',
                                      ],
                                      compLib: 'comm',
                                      pageJsonId: '763609',
                                      compName: 'Input',
                                      id: '054831',
                                      valueList: {
                                        Input_668689_2052015_8235997:
                                          '$okData_59262.userName$',
                                        Input_9206452_698968_5646934:
                                          '$okData_59262.userCode$',
                                      },
                                      compid: [
                                        'Input_668689_2052015_8235997',
                                        'Input_9206452_698968_5646934',
                                      ],
                                    },
                                    line_number: 6,
                                    callback1: [],
                                  },
                                ],
                                callback2: [],
                              },
                            ],
                          },
                        ],
                        callback2: [],
                      },
                    ],
                  },
                ];
                eventDatagetValue183.params = [] || [];
                CMDGenerator(eventDatagetValue183, {}, 'getValue', {
                  id: 'getValue',
                  name: 'getValue',
                  type: 'getValue',
                  platform: 'pc',
                });
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_668689_2052015_8235997')
              }
              {...injectData}
            />
            <Input
              name={'处理人隐藏框'}
              size={'default'}
              selfSpan={16}
              labelCol={8}
              wrapperCol={'16'}
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
              fieldName={'nextStaff'}
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
                id: 'Input_9206452_698968_5646934',
                uid: 'Input_9206452_698968_5646934',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_9206452_698968_5646934')
              }
              {...injectData}
            />
            <TextArea
              name={'审批意见'}
              selfSpan={16}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={4}
              fieldName={'tacheRemark'}
              $$componentItem={{
                id: 'TextArea_2382214_3272195_63763795',
                uid: 'TextArea_2382214_3272195_63763795',
                type: 'TextArea',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'TextArea_2382214_3272195_63763795')
              }
              {...injectData}
            />
            <Button
              name={'我的常用意见'}
              shape={null}
              classification={'default'}
              autoProcessFlow={false}
              flowProcessResult={'common'}
              iconPosition={'left'}
              ghost={false}
              block={false}
              size={'default'}
              type={'link'}
              labelCol={8}
              wrapperCol={16}
              hasIcon={false}
              $$componentItem={{
                id: 'Button_8864054_286047_922143',
                uid: 'Button_8864054_286047_922143',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              schema={{
                compType: 1,
                props: {
                  formItemIndex: 5,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{ width: 'fit-content' }}
              onClick={(e: any) => {
                const eventDatashowCustomModal135: any = [
                  {
                    type: 'showCustomModal',
                    dataId: 166729082352126980,
                    options: {
                      compId: 'showCustomModal',
                      compName: 'page',
                      id: '710146',
                      pageJsonId: '763609',
                      modalname: '/common/comment/list',
                      pageId: '895869212089622528',
                      modalPath: '/common/comment/list',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'console',
                        dataId: 166729084670519140,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '6881507',
                          pageJsonId: '763609',
                        },
                        line_number: 2,
                      },
                      {
                        type: 'setValue',
                        dataId: 166729086687566750,
                        options: {
                          compId: 'TextArea_2382214_3272195_63763795',
                          compLib: 'comm',
                          pageJsonId: '763609',
                          compName: 'TextArea',
                          id: '066216',
                          value: '$okData_710146.handleComment$',
                          valueList: {
                            TextArea_2382214_3272195_63763795:
                              '$okData_710146.handleComment$',
                          },
                        },
                        line_number: 3,
                        callback1: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatashowCustomModal135.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatashowCustomModal135,
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
                refs.setComponentRef(r, 'Button_8864054_286047_922143')
              }
              {...injectData}
            />
          </Form>
          <View
            className="View_View_582992_8451582_75132"
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_582992_8451582_75132',
              uid: 'View_582992_8451582_75132',
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
              textAlign: 'center',
            }}
            ref={(r: any) =>
              refs.setComponentRef(r, 'View_582992_8451582_75132')
            }
            {...injectData}
          >
            <Button
              name={'确认'}
              shape={null}
              classification={'default'}
              autoProcessFlow={false}
              flowProcessResult={'common'}
              iconPosition={'left'}
              ghost={false}
              block={false}
              size={'default'}
              type={'primary'}
              hasIcon={false}
              $$componentItem={{
                id: 'Button_614168_6154713_384267',
                uid: 'Button_614168_6154713_384267',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ width: 'fit-content', margin: '8px 8px 8px 8px' }}
              onClick={(e: any) => {
                const eventDatagetTableSelected53: any = [
                  {
                    type: 'getTableSelected',
                    dataId: 168639837488471100,
                    options: {
                      compId: 'Table_2737373',
                      compLib: 'comm',
                      pageJsonId: '763609',
                      compName: 'Table',
                      id: '9916425',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '178564',
                            options: {
                              context: '$selectedRows_9916425$',
                              operate: 'empty',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 168639838121950050,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 168639838121938600,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 168639838121934180,
                                children: [
                                  {
                                    dataName: 'callback',
                                    dataId: 168639838121901660,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 168639838121943870,
                                        children: [
                                          {
                                            dataName: 'callback',
                                            dataId: 168639838121934940,
                                            children: [
                                              {
                                                dataName: 'action',
                                                dataId: 168639838121924000,
                                                children: [
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 168639838121950800,
                                                    children: [],
                                                    value: 'callback1',
                                                    params: [],
                                                  },
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 168639838121942660,
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
                                                  id: '281341346',
                                                  pageJsonId: '763609',
                                                  dataSourceId: 166789053110668160,
                                                  dataSourceName:
                                                    'sameApproveOrdList',
                                                  dataSourceRelType: 'service',
                                                  dataSourceReloadFilter: [
                                                    {
                                                      attrId: '3720608',
                                                      code: 'header',
                                                      name: '请求头参数',
                                                      sort: { isSort: true },
                                                      initialData: {
                                                        type: 'static',
                                                        value: '',
                                                      },
                                                      type: 'object',
                                                      key: 'header',
                                                    },
                                                    {
                                                      attrId: '775713',
                                                      code: 'path',
                                                      name: '请求路径参数',
                                                      sort: { isSort: true },
                                                      initialData: {
                                                        type: 'static',
                                                        value: '',
                                                      },
                                                      type: 'object',
                                                      key: 'path',
                                                    },
                                                    {
                                                      attrId: '3443287',
                                                      code: 'query',
                                                      name: 'URL 参数',
                                                      sort: { isSort: true },
                                                      initialData: {
                                                        type: 'static',
                                                        value: '',
                                                      },
                                                      type: 'object',
                                                      key: 'query',
                                                    },
                                                    {
                                                      attrId: '689687',
                                                      code: 'body',
                                                      name: '请求体',
                                                      sort: { isSort: true },
                                                      initialData: {
                                                        type: 'static',
                                                        value: '',
                                                      },
                                                      type: 'object',
                                                      children: [
                                                        {
                                                          attrId: '7822614',
                                                          code: 'workItemId',
                                                          name: 'workItemId',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value:
                                                              '$urlParam.workItemId$',
                                                          },
                                                          type: 'string',
                                                          key: 'body.workItemId',
                                                        },
                                                      ],
                                                      key: 'body',
                                                    },
                                                  ],
                                                  dataSourceSetValue: [
                                                    {
                                                      attrId: '9754188',
                                                      code: 'resultCode',
                                                      name: 'resultCode',
                                                      sort: { isSort: true },
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      type: 'string',
                                                    },
                                                    {
                                                      attrId: '899207',
                                                      code: 'resultMsgCode',
                                                      name: 'resultMsgCode',
                                                      sort: { isSort: true },
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      type: 'string',
                                                    },
                                                    {
                                                      attrId: '355707',
                                                      code: 'resultMsg',
                                                      name: 'resultMsg',
                                                      sort: { isSort: true },
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      type: 'string',
                                                    },
                                                    {
                                                      attrId: '675357',
                                                      code: 'resultData',
                                                      name: 'resultData',
                                                      sort: { isSort: true },
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      type: 'objectArray',
                                                      children: [
                                                        {
                                                          attrId: '5436717',
                                                          code: 'nextStaff',
                                                          name: '下一步处理人',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          type: 'string',
                                                          parentCode:
                                                            'resultData',
                                                          parentKey:
                                                            'resultData',
                                                        },
                                                        {
                                                          attrId: '484549',
                                                          code: 'nextStaffName',
                                                          name: '下一步处理人名称',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          type: 'string',
                                                          parentCode:
                                                            'resultData',
                                                          parentKey:
                                                            'resultData',
                                                        },
                                                        {
                                                          attrId: '293832',
                                                          code: 'approveOrdNbr',
                                                          name: 'approveOrdNbr',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          type: 'string',
                                                          parentCode:
                                                            'resultData',
                                                          parentKey:
                                                            'resultData',
                                                        },
                                                        {
                                                          attrId: '435545',
                                                          code: 'handleStaffName',
                                                          name: 'handleStaffName',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          type: 'string',
                                                          parentCode:
                                                            'resultData',
                                                          parentKey:
                                                            'resultData',
                                                        },
                                                        {
                                                          attrId: '8354143',
                                                          code: 'tacheName',
                                                          name: 'tacheName',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          type: 'string',
                                                          parentCode:
                                                            'resultData',
                                                          parentKey:
                                                            'resultData',
                                                        },
                                                        {
                                                          attrId: '900329',
                                                          code: 'tacheRemark',
                                                          name: 'tacheRemark',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          type: 'string',
                                                          parentCode:
                                                            'resultData',
                                                          parentKey:
                                                            'resultData',
                                                        },
                                                        {
                                                          attrId: '87711',
                                                          code: 'effectDate',
                                                          name: 'effectDate',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          type: 'string',
                                                          parentCode:
                                                            'resultData',
                                                          parentKey:
                                                            'resultData',
                                                        },
                                                        {
                                                          attrId: '4487509',
                                                          code: 'lastHandleTime',
                                                          name: 'lastHandleTime',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          type: 'string',
                                                          parentCode:
                                                            'resultData',
                                                          parentKey:
                                                            'resultData',
                                                        },
                                                        {
                                                          attrId: '170486',
                                                          code: 'tacheCode',
                                                          name: 'tacheCode',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          type: 'string',
                                                          parentCode:
                                                            'resultData',
                                                          parentKey:
                                                            'resultData',
                                                        },
                                                        {
                                                          attrId: '051059',
                                                          code: 'nextTache',
                                                          name: 'nextTache',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          type: 'string',
                                                          parentCode:
                                                            'resultData',
                                                          parentKey:
                                                            'resultData',
                                                        },
                                                        {
                                                          attrId: '5113155',
                                                          code: 'keyId',
                                                          name: 'keyId',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          type: 'string',
                                                          parentCode:
                                                            'resultData',
                                                          parentKey:
                                                            'resultData',
                                                        },
                                                        {
                                                          attrId: '337909',
                                                          code: 'createStaffName',
                                                          name: 'createStaffName',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          type: 'string',
                                                          parentCode:
                                                            'resultData',
                                                          parentKey:
                                                            'resultData',
                                                        },
                                                        {
                                                          attrId: '672305',
                                                          code: 'handleObjCode',
                                                          name: 'handleObjCode',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          type: 'string',
                                                          parentCode:
                                                            'resultData',
                                                          parentKey:
                                                            'resultData',
                                                        },
                                                        {
                                                          attrId: '752056',
                                                          code: 'workItemId',
                                                          name: 'workItemId',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          type: 'string',
                                                          parentCode:
                                                            'resultData',
                                                          parentKey:
                                                            'resultData',
                                                        },
                                                        {
                                                          attrId: '408718',
                                                          code: 'title',
                                                          name: 'title',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          type: 'string',
                                                          parentCode:
                                                            'resultData',
                                                          parentKey:
                                                            'resultData',
                                                        },
                                                        {
                                                          attrId: '20285272',
                                                          code: 'handleObjType',
                                                          name: 'handleObjType',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          type: 'string',
                                                          parentCode:
                                                            'resultData',
                                                          parentKey:
                                                            'resultData',
                                                        },
                                                        {
                                                          attrId: '723936',
                                                          code: 'workId',
                                                          name: 'workId',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          type: 'string',
                                                          parentCode:
                                                            'resultData',
                                                          parentKey:
                                                            'resultData',
                                                        },
                                                        {
                                                          attrId: '2775649',
                                                          code: 'tachePass',
                                                          name: 'tachePass',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          type: 'string',
                                                          parentCode:
                                                            'resultData',
                                                          parentKey:
                                                            'resultData',
                                                        },
                                                        {
                                                          attrId: '983249',
                                                          code: 'createTime',
                                                          name: 'createTime',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                          },
                                                          type: 'string',
                                                          parentCode:
                                                            'resultData',
                                                          parentKey:
                                                            'resultData',
                                                        },
                                                      ],
                                                      value: {
                                                        type: [],
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
                                                line_number: 6,
                                              },
                                              {
                                                dataName: 'action',
                                                dataId: 168639838121935100,
                                                children: [
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 168639838121944300,
                                                    children: [
                                                      {
                                                        dataName: 'action',
                                                        dataId: 168639838121984900,
                                                        children: [],
                                                        todoOptions: [],
                                                        options: {
                                                          compId:
                                                            'Table_2737373',
                                                          compLib: 'comm',
                                                          pageJsonId: '763609',
                                                          compName: 'Table',
                                                          id: '5377304',
                                                        },
                                                        actionObjId:
                                                          'Table_2737373',
                                                        actionObjName: 'Table',
                                                        value:
                                                          'clearTableSelected',
                                                        compLib: 'comm',
                                                        line_number: 8,
                                                      },
                                                      {
                                                        dataName: 'action',
                                                        dataId: 168639879669409860,
                                                        children: [],
                                                        todoOptions: [],
                                                        options: {
                                                          compId:
                                                            'Form_495566_5382465_894809',
                                                          compLib: 'comm',
                                                          pageJsonId: '763609',
                                                          compName: 'Form',
                                                          id: '349079',
                                                        },
                                                        actionObjId:
                                                          'Form_495566_5382465_894809',
                                                        actionObjName: 'Form',
                                                        value:
                                                          'resetCurrentForm',
                                                        compLib: 'comm',
                                                        line_number: 9,
                                                      },
                                                      {
                                                        dataName: 'action',
                                                        dataId: 168639880085316320,
                                                        children: [
                                                          {
                                                            dataName:
                                                              'callback',
                                                            dataId: 168639880085322100,
                                                            children: [],
                                                            value: 'callback1',
                                                            params: [],
                                                          },
                                                          {
                                                            dataName:
                                                              'callback',
                                                            dataId: 168639880085328600,
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
                                                          compId:
                                                            'callSelfFunc',
                                                          compName: 'system',
                                                          id: '724456',
                                                          pageJsonId: '763609',
                                                          customFuncName:
                                                            'tachePassChange',
                                                          customFuncParams:
                                                            'object',
                                                        },
                                                        actionObjId:
                                                          'callSelfFunc',
                                                        actionObjName: 'system',
                                                        value: 'callSelfFunc',
                                                        line_number: 10,
                                                      },
                                                    ],
                                                    value: 'callback1',
                                                    params: [],
                                                  },
                                                ],
                                                todoOptions: [
                                                  'dataSource',
                                                  'total',
                                                  'curPage',
                                                ],
                                                options: {
                                                  compId: 'Table_2737373',
                                                  compLib: 'comm',
                                                  pageJsonId: '763609',
                                                  compName: 'Table',
                                                  id: '52909',
                                                  data: '$data_2740955$',
                                                  total:
                                                    '$data_2740955.length$',
                                                  current: '1',
                                                },
                                                actionObjId: 'Table_2737373',
                                                actionObjName: 'Table',
                                                value: 'reloadTableData',
                                                compLib: 'comm',
                                                line_number: 7,
                                              },
                                            ],
                                            value: 'callback1',
                                            params: [],
                                          },
                                          {
                                            dataName: 'callback',
                                            dataId: 168639838121960000,
                                            children: [],
                                            value: 'callback2',
                                            params: [],
                                          },
                                        ],
                                        todoOptions: [
                                          'actionTitle',
                                          'editorCode',
                                        ],
                                        options: {
                                          compId: 'customActionCode',
                                          compName: 'page',
                                          id: '2740955',
                                          pageJsonId: '763609',
                                          actionTitle:
                                            '根据表单值更新选中表格数据',
                                          code: 'function main(data,state,success,fail){var _data$refuseNextStaff,_data$sameApproveOrdL,_data$sameApproveOrdL2;console.log("data",data);console.log("selectedRows",selectedRows_9916425);console.log("Form_495566_5382465_894809",Form_495566_5382465_894809);console.log("data.refuseNextStaffNames",data.refuseNextStaffNames);var currentRefuseNextStaffNames=((_data$refuseNextStaff=data.refuseNextStaffNames.find(function(item){return item.tacheCode===Form_495566_5382465_894809.nextTache}))===null||_data$refuseNextStaff===void 0?void 0:_data$refuseNextStaff.sameList)||[];var _toDoList=(data===null||data===void 0?void 0:(_data$sameApproveOrdL=data.sameApproveOrdList)===null||_data$sameApproveOrdL===void 0?void 0:(_data$sameApproveOrdL2=_data$sameApproveOrdL.resultData)===null||_data$sameApproveOrdL2===void 0?void 0:_data$sameApproveOrdL2.map(function(item){var _selectedRows_,_Form_495566_5382465_7;var selectedIndex=(_selectedRows_=selectedRows_9916425)===null||_selectedRows_===void 0?void 0:_selectedRows_.findIndex(function(selected){return selected.keyId===item.keyId});if(selectedIndex>-1){var _Form_495566_5382465_,_Form_495566_5382465_2,_Form_495566_5382465_3,_Form_495566_5382465_4,_Form_495566_5382465_5,_Form_495566_5382465_6;item.tachePass=(_Form_495566_5382465_=Form_495566_5382465_894809)===null||_Form_495566_5382465_===void 0?void 0:_Form_495566_5382465_.tachePass;item.tacheRemark=(_Form_495566_5382465_2=Form_495566_5382465_894809)===null||_Form_495566_5382465_2===void 0?void 0:_Form_495566_5382465_2.tacheRemark;item.nextStaff=(_Form_495566_5382465_3=Form_495566_5382465_894809)===null||_Form_495566_5382465_3===void 0?void 0:_Form_495566_5382465_3.nextStaff;item.nextStaffName=(_Form_495566_5382465_4=Form_495566_5382465_894809)===null||_Form_495566_5382465_4===void 0?void 0:_Form_495566_5382465_4.nextStaffName;item.nextTache=(_Form_495566_5382465_5=Form_495566_5382465_894809)===null||_Form_495566_5382465_5===void 0?void 0:_Form_495566_5382465_5.nextTache;if(((_Form_495566_5382465_6=Form_495566_5382465_894809)===null||_Form_495566_5382465_6===void 0?void 0:_Form_495566_5382465_6.tachePass)==="refuse"){var currentRefuseNextStaffItem=currentRefuseNextStaffNames===null||currentRefuseNextStaffNames===void 0?void 0:currentRefuseNextStaffNames.find(function(refuseNextStaffNamesItem){return refuseNextStaffNamesItem.keyId===item.keyId});if(currentRefuseNextStaffItem){item.nextStaff=currentRefuseNextStaffItem===null||currentRefuseNextStaffItem===void 0?void 0:currentRefuseNextStaffItem.nextStaff;item.nextStaffName=currentRefuseNextStaffItem===null||currentRefuseNextStaffItem===void 0?void 0:currentRefuseNextStaffItem.nextStaffName}}return item}else if(((_Form_495566_5382465_7=Form_495566_5382465_894809)===null||_Form_495566_5382465_7===void 0?void 0:_Form_495566_5382465_7.tachePass)==="pass"&&item.tachePass==="pass"){var _Form_495566_5382465_8,_Form_495566_5382465_9,_Form_495566_5382465_10,_Form_495566_5382465_11,_Form_495566_5382465_12;item.tachePass=(_Form_495566_5382465_8=Form_495566_5382465_894809)===null||_Form_495566_5382465_8===void 0?void 0:_Form_495566_5382465_8.tachePass;item.tacheRemark=(_Form_495566_5382465_9=Form_495566_5382465_894809)===null||_Form_495566_5382465_9===void 0?void 0:_Form_495566_5382465_9.tacheRemark;item.nextStaff=(_Form_495566_5382465_10=Form_495566_5382465_894809)===null||_Form_495566_5382465_10===void 0?void 0:_Form_495566_5382465_10.nextStaff;item.nextStaffName=(_Form_495566_5382465_11=Form_495566_5382465_894809)===null||_Form_495566_5382465_11===void 0?void 0:_Form_495566_5382465_11.nextStaffName;item.nextTache=(_Form_495566_5382465_12=Form_495566_5382465_894809)===null||_Form_495566_5382465_12===void 0?void 0:_Form_495566_5382465_12.nextTache;return item}return item}))||[];console.log("_toDoList",_toDoList);if(_toDoList.length){data.sameApproveOrdList.resultData=_toDoList;console.log("data.sameApproveOrdList",data.sameApproveOrdList);success(_toDoList)}else{fail()}};',
                                        },
                                        actionObjId: 'customActionCode',
                                        actionObjName: 'page',
                                        value: 'customActionCode',
                                        line_number: 5,
                                      },
                                    ],
                                    value: 'callback1',
                                    params: [],
                                  },
                                  {
                                    dataName: 'callback',
                                    dataId: 168639838121903680,
                                    children: [],
                                    value: 'callback2',
                                    params: [],
                                  },
                                ],
                                todoOptions: [],
                                options: {
                                  compId: 'Form_495566_5382465_894809',
                                  compLib: 'comm',
                                  pageJsonId: '763609',
                                  compName: 'Form',
                                  id: '6812886',
                                },
                                actionObjId: 'Form_495566_5382465_894809',
                                actionObjName: 'Form',
                                value: 'validateCurrentForm',
                                compLib: 'comm',
                                line_number: 4,
                              },
                            ],
                            condition: [],
                            callback: [
                              {
                                type: 'validateCurrentForm',
                                dataId: 168639838121934180,
                                options: {
                                  compId: 'Form_495566_5382465_894809',
                                  compLib: 'comm',
                                  pageJsonId: '763609',
                                  compName: 'Form',
                                  id: '6812886',
                                },
                                line_number: 4,
                                callback1: [
                                  {
                                    type: 'customActionCode',
                                    dataId: 168639838121943870,
                                    options: {
                                      compId: 'customActionCode',
                                      compName: 'page',
                                      id: '2740955',
                                      pageJsonId: '763609',
                                      actionTitle: '根据表单值更新选中表格数据',
                                      code: 'function main(data,state,success,fail){var _data$refuseNextStaff,_data$sameApproveOrdL,_data$sameApproveOrdL2;console.log("data",data);console.log("selectedRows",selectedRows_9916425);console.log("Form_495566_5382465_894809",Form_495566_5382465_894809);console.log("data.refuseNextStaffNames",data.refuseNextStaffNames);var currentRefuseNextStaffNames=((_data$refuseNextStaff=data.refuseNextStaffNames.find(function(item){return item.tacheCode===Form_495566_5382465_894809.nextTache}))===null||_data$refuseNextStaff===void 0?void 0:_data$refuseNextStaff.sameList)||[];var _toDoList=(data===null||data===void 0?void 0:(_data$sameApproveOrdL=data.sameApproveOrdList)===null||_data$sameApproveOrdL===void 0?void 0:(_data$sameApproveOrdL2=_data$sameApproveOrdL.resultData)===null||_data$sameApproveOrdL2===void 0?void 0:_data$sameApproveOrdL2.map(function(item){var _selectedRows_,_Form_495566_5382465_7;var selectedIndex=(_selectedRows_=selectedRows_9916425)===null||_selectedRows_===void 0?void 0:_selectedRows_.findIndex(function(selected){return selected.keyId===item.keyId});if(selectedIndex>-1){var _Form_495566_5382465_,_Form_495566_5382465_2,_Form_495566_5382465_3,_Form_495566_5382465_4,_Form_495566_5382465_5,_Form_495566_5382465_6;item.tachePass=(_Form_495566_5382465_=Form_495566_5382465_894809)===null||_Form_495566_5382465_===void 0?void 0:_Form_495566_5382465_.tachePass;item.tacheRemark=(_Form_495566_5382465_2=Form_495566_5382465_894809)===null||_Form_495566_5382465_2===void 0?void 0:_Form_495566_5382465_2.tacheRemark;item.nextStaff=(_Form_495566_5382465_3=Form_495566_5382465_894809)===null||_Form_495566_5382465_3===void 0?void 0:_Form_495566_5382465_3.nextStaff;item.nextStaffName=(_Form_495566_5382465_4=Form_495566_5382465_894809)===null||_Form_495566_5382465_4===void 0?void 0:_Form_495566_5382465_4.nextStaffName;item.nextTache=(_Form_495566_5382465_5=Form_495566_5382465_894809)===null||_Form_495566_5382465_5===void 0?void 0:_Form_495566_5382465_5.nextTache;if(((_Form_495566_5382465_6=Form_495566_5382465_894809)===null||_Form_495566_5382465_6===void 0?void 0:_Form_495566_5382465_6.tachePass)==="refuse"){var currentRefuseNextStaffItem=currentRefuseNextStaffNames===null||currentRefuseNextStaffNames===void 0?void 0:currentRefuseNextStaffNames.find(function(refuseNextStaffNamesItem){return refuseNextStaffNamesItem.keyId===item.keyId});if(currentRefuseNextStaffItem){item.nextStaff=currentRefuseNextStaffItem===null||currentRefuseNextStaffItem===void 0?void 0:currentRefuseNextStaffItem.nextStaff;item.nextStaffName=currentRefuseNextStaffItem===null||currentRefuseNextStaffItem===void 0?void 0:currentRefuseNextStaffItem.nextStaffName}}return item}else if(((_Form_495566_5382465_7=Form_495566_5382465_894809)===null||_Form_495566_5382465_7===void 0?void 0:_Form_495566_5382465_7.tachePass)==="pass"&&item.tachePass==="pass"){var _Form_495566_5382465_8,_Form_495566_5382465_9,_Form_495566_5382465_10,_Form_495566_5382465_11,_Form_495566_5382465_12;item.tachePass=(_Form_495566_5382465_8=Form_495566_5382465_894809)===null||_Form_495566_5382465_8===void 0?void 0:_Form_495566_5382465_8.tachePass;item.tacheRemark=(_Form_495566_5382465_9=Form_495566_5382465_894809)===null||_Form_495566_5382465_9===void 0?void 0:_Form_495566_5382465_9.tacheRemark;item.nextStaff=(_Form_495566_5382465_10=Form_495566_5382465_894809)===null||_Form_495566_5382465_10===void 0?void 0:_Form_495566_5382465_10.nextStaff;item.nextStaffName=(_Form_495566_5382465_11=Form_495566_5382465_894809)===null||_Form_495566_5382465_11===void 0?void 0:_Form_495566_5382465_11.nextStaffName;item.nextTache=(_Form_495566_5382465_12=Form_495566_5382465_894809)===null||_Form_495566_5382465_12===void 0?void 0:_Form_495566_5382465_12.nextTache;return item}return item}))||[];console.log("_toDoList",_toDoList);if(_toDoList.length){data.sameApproveOrdList.resultData=_toDoList;console.log("data.sameApproveOrdList",data.sameApproveOrdList);success(_toDoList)}else{fail()}};',
                                    },
                                    line_number: 5,
                                    callback1: [
                                      {
                                        type: 'setDataSource',
                                        dataId: 168639838121924000,
                                        options: {
                                          compId: 'setDataSource',
                                          compName: 'page',
                                          id: '281341346',
                                          pageJsonId: '763609',
                                          dataSourceId: 166789053110668160,
                                          dataSourceName: 'sameApproveOrdList',
                                          dataSourceRelType: 'service',
                                          dataSourceReloadFilter: [
                                            {
                                              attrId: '3720608',
                                              code: 'header',
                                              name: '请求头参数',
                                              sort: { isSort: true },
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              type: 'object',
                                              key: 'header',
                                            },
                                            {
                                              attrId: '775713',
                                              code: 'path',
                                              name: '请求路径参数',
                                              sort: { isSort: true },
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              type: 'object',
                                              key: 'path',
                                            },
                                            {
                                              attrId: '3443287',
                                              code: 'query',
                                              name: 'URL 参数',
                                              sort: { isSort: true },
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              type: 'object',
                                              key: 'query',
                                            },
                                            {
                                              attrId: '689687',
                                              code: 'body',
                                              name: '请求体',
                                              sort: { isSort: true },
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                              type: 'object',
                                              children: [
                                                {
                                                  attrId: '7822614',
                                                  code: 'workItemId',
                                                  name: 'workItemId',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                    value:
                                                      '$urlParam.workItemId$',
                                                  },
                                                  type: 'string',
                                                  key: 'body.workItemId',
                                                },
                                              ],
                                              key: 'body',
                                            },
                                          ],
                                          dataSourceSetValue: [
                                            {
                                              attrId: '9754188',
                                              code: 'resultCode',
                                              name: 'resultCode',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '899207',
                                              code: 'resultMsgCode',
                                              name: 'resultMsgCode',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '355707',
                                              code: 'resultMsg',
                                              name: 'resultMsg',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '675357',
                                              code: 'resultData',
                                              name: 'resultData',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'objectArray',
                                              children: [
                                                {
                                                  attrId: '5436717',
                                                  code: 'nextStaff',
                                                  name: '下一步处理人',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                  parentCode: 'resultData',
                                                  parentKey: 'resultData',
                                                },
                                                {
                                                  attrId: '484549',
                                                  code: 'nextStaffName',
                                                  name: '下一步处理人名称',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                  parentCode: 'resultData',
                                                  parentKey: 'resultData',
                                                },
                                                {
                                                  attrId: '293832',
                                                  code: 'approveOrdNbr',
                                                  name: 'approveOrdNbr',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                  parentCode: 'resultData',
                                                  parentKey: 'resultData',
                                                },
                                                {
                                                  attrId: '435545',
                                                  code: 'handleStaffName',
                                                  name: 'handleStaffName',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                  parentCode: 'resultData',
                                                  parentKey: 'resultData',
                                                },
                                                {
                                                  attrId: '8354143',
                                                  code: 'tacheName',
                                                  name: 'tacheName',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                  parentCode: 'resultData',
                                                  parentKey: 'resultData',
                                                },
                                                {
                                                  attrId: '900329',
                                                  code: 'tacheRemark',
                                                  name: 'tacheRemark',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                  parentCode: 'resultData',
                                                  parentKey: 'resultData',
                                                },
                                                {
                                                  attrId: '87711',
                                                  code: 'effectDate',
                                                  name: 'effectDate',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                  parentCode: 'resultData',
                                                  parentKey: 'resultData',
                                                },
                                                {
                                                  attrId: '4487509',
                                                  code: 'lastHandleTime',
                                                  name: 'lastHandleTime',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                  parentCode: 'resultData',
                                                  parentKey: 'resultData',
                                                },
                                                {
                                                  attrId: '170486',
                                                  code: 'tacheCode',
                                                  name: 'tacheCode',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                  parentCode: 'resultData',
                                                  parentKey: 'resultData',
                                                },
                                                {
                                                  attrId: '051059',
                                                  code: 'nextTache',
                                                  name: 'nextTache',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                  parentCode: 'resultData',
                                                  parentKey: 'resultData',
                                                },
                                                {
                                                  attrId: '5113155',
                                                  code: 'keyId',
                                                  name: 'keyId',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                  parentCode: 'resultData',
                                                  parentKey: 'resultData',
                                                },
                                                {
                                                  attrId: '337909',
                                                  code: 'createStaffName',
                                                  name: 'createStaffName',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                  parentCode: 'resultData',
                                                  parentKey: 'resultData',
                                                },
                                                {
                                                  attrId: '672305',
                                                  code: 'handleObjCode',
                                                  name: 'handleObjCode',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                  parentCode: 'resultData',
                                                  parentKey: 'resultData',
                                                },
                                                {
                                                  attrId: '752056',
                                                  code: 'workItemId',
                                                  name: 'workItemId',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                  parentCode: 'resultData',
                                                  parentKey: 'resultData',
                                                },
                                                {
                                                  attrId: '408718',
                                                  code: 'title',
                                                  name: 'title',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                  parentCode: 'resultData',
                                                  parentKey: 'resultData',
                                                },
                                                {
                                                  attrId: '20285272',
                                                  code: 'handleObjType',
                                                  name: 'handleObjType',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                  parentCode: 'resultData',
                                                  parentKey: 'resultData',
                                                },
                                                {
                                                  attrId: '723936',
                                                  code: 'workId',
                                                  name: 'workId',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                  parentCode: 'resultData',
                                                  parentKey: 'resultData',
                                                },
                                                {
                                                  attrId: '2775649',
                                                  code: 'tachePass',
                                                  name: 'tachePass',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                  parentCode: 'resultData',
                                                  parentKey: 'resultData',
                                                },
                                                {
                                                  attrId: '983249',
                                                  code: 'createTime',
                                                  name: 'createTime',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  type: 'string',
                                                  parentCode: 'resultData',
                                                  parentKey: 'resultData',
                                                },
                                              ],
                                              value: { type: [], code: '' },
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
                                        type: 'reloadTableData',
                                        dataId: 168639838121935100,
                                        options: {
                                          compId: 'Table_2737373',
                                          compLib: 'comm',
                                          pageJsonId: '763609',
                                          compName: 'Table',
                                          id: '52909',
                                          data: '$data_2740955$',
                                          total: '$data_2740955.length$',
                                          current: '1',
                                        },
                                        line_number: 7,
                                        callback1: [
                                          {
                                            type: 'clearTableSelected',
                                            dataId: 168639838121984900,
                                            options: {
                                              compId: 'Table_2737373',
                                              compLib: 'comm',
                                              pageJsonId: '763609',
                                              compName: 'Table',
                                              id: '5377304',
                                            },
                                            line_number: 8,
                                          },
                                          {
                                            type: 'resetCurrentForm',
                                            dataId: 168639879669409860,
                                            options: {
                                              compId:
                                                'Form_495566_5382465_894809',
                                              compLib: 'comm',
                                              pageJsonId: '763609',
                                              compName: 'Form',
                                              id: '349079',
                                            },
                                            line_number: 9,
                                          },
                                          {
                                            type: 'callSelfFunc',
                                            dataId: 168639880085316320,
                                            options: {
                                              compId: 'callSelfFunc',
                                              compName: 'system',
                                              id: '724456',
                                              pageJsonId: '763609',
                                              customFuncName: 'tachePassChange',
                                              customFuncParams: 'object',
                                            },
                                            line_number: 10,
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
                          },
                        ],
                        line_number: 2,
                        callback1: [
                          {
                            type: 'showMessage',
                            dataId: 168639838121930880,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '25831',
                              pageJsonId: '763609',
                              type: 'info',
                              value: '请选中表格数据',
                            },
                            line_number: 3,
                          },
                        ],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetTableSelected53.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatagetTableSelected53,
                  { e },
                  'getTableSelected',
                  {
                    id: 'getTableSelected',
                    name: 'getTableSelected',
                    type: 'getTableSelected',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Button_614168_6154713_384267')
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
                id: 'Button_3398434_019155_3896586',
                uid: 'Button_3398434_019155_3896586',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ width: 'fit-content' }}
              onClick={(e: any) => {
                const forms100 = getFormByCompId(
                  'Form_495566_5382465_894809',
                  refs,
                );
                // 支持循环容器中的表单重置
                (Array.isArray(forms100) ? forms100 : [forms100]).forEach(
                  (form) => form?.resetFields(),
                );
                const eventDatacallSelfFunc404: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166848179447873060,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '850288',
                      pageJsonId: '763609',
                      customFuncName: 'tachePassChange',
                      customFuncParams: 'object',
                    },
                    line_number: 2,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc404.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatacallSelfFunc404, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Button_3398434_019155_3896586')
              }
              {...injectData}
            />
          </View>
        </Card>
        <View
          className="View_View_672632_9537307_170568"
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_672632_9537307_170568',
            uid: 'View_672632_9537307_170568',
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
            textAlign: 'center',
            margin: '0px 0px 8px 0px',
          }}
          ref={(r: any) =>
            refs.setComponentRef(r, 'View_672632_9537307_170568')
          }
          {...injectData}
        >
          <Button
            name={'提交'}
            shape={null}
            classification={'default'}
            autoProcessFlow={false}
            flowProcessResult={'common'}
            iconPosition={'left'}
            ghost={false}
            block={false}
            size={'default'}
            type={'primary'}
            hasIcon={false}
            $$componentItem={{
              id: 'Button_219692_3851914_6006513',
              uid: 'Button_219692_3851914_6006513',
              type: 'Button',
              ...componentItem,
            }}
            disabled={false}
            visible={false}
            readOnly={false}
            style={{ width: 'fit-content', margin: '8px 8px 8px 8px' }}
            onClick={(e: any) => {
              const eventDatasysSetDisable5: any = [
                {
                  type: 'sysSetDisable',
                  dataId: 166945144827988540,
                  options: {
                    compId: ['Button_219692_3851914_6006513'],
                    compName: 'page',
                    id: '7640964',
                    pageJsonId: '763609',
                    disabled: 'true',
                    compid: ['Button_219692_3851914_6006513'],
                  },
                  line_number: 1,
                },
              ];
              eventDatasysSetDisable5.params =
                [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
              CMDGenerator(eventDatasysSetDisable5, { e }, 'sysSetDisable', {
                id: 'sysSetDisable',
                name: 'sysSetDisable',
                type: 'sysSetDisable',
                platform: 'pc',
              });
              const eventDatacustomActionCode514: any = [
                {
                  type: 'customActionCode',
                  dataId: 166831033207712960,
                  options: {
                    compId: 'customActionCode',
                    compName: 'page',
                    id: '668458',
                    pageJsonId: '763609',
                    code: 'function main(data,state,success,fail){var _data$sameApproveOrdL,_data$sameApproveOrdL2;console.log("data",data);var _index=data===null||data===void 0?void 0:(_data$sameApproveOrdL=data.sameApproveOrdList)===null||_data$sameApproveOrdL===void 0?void 0:(_data$sameApproveOrdL2=_data$sameApproveOrdL.resultData)===null||_data$sameApproveOrdL2===void 0?void 0:_data$sameApproveOrdL2.findIndex(function(item){return!item.tachePass});if(_index>-1){fail(_index)}else{var _data$sameApproveOrdL3;var _list=data===null||data===void 0?void 0:(_data$sameApproveOrdL3=data.sameApproveOrdList)===null||_data$sameApproveOrdL3===void 0?void 0:_data$sameApproveOrdL3.resultData.map(function(item){item.busiObjNbr=item.approveOrdNbr;return item});console.log("\\u5408\\u5355\\u8BF7\\u6C42\\u5165\\u53C2\\uFF1A",_list);success(_list)}};',
                  },
                  line_number: 2,
                  callback1: [
                    {
                      type: 'apiRequest',
                      dataId: 166831033207721120,
                      options: {
                        compId: 'apiRequest',
                        compName: 'system',
                        id: '982867',
                        pageJsonId: '763609',
                        sync: false,
                        actionTitle: '',
                        method: 'post',
                        url: '/app/rhin/gateway/callRhinEngine',
                        _capabilityCode: 'saveDataAndDealFlow',
                        _apiCode: 'saveDataAndDealFlow',
                        _source: 'rhin',
                        _serviceId: '890049764606439424',
                        _serviceTitle:
                          '保存数据并流转摩卡流程-tzp: saveDataAndDealFlow',
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
                                dataKey: '982867_root.header',
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
                                dataKey: '982867_root.path',
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
                                dataKey: '982867_root.query',
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
                                    code: 'tacheCode',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'root.body.tacheCode',
                                    compType: 'Input',
                                    name: 'tacheCode',
                                    parents: ['root', 'body'],
                                    id: 'root.body.tacheCode',
                                    dataKey: '982867_root.body.tacheCode',
                                    value: {
                                      type: [
                                        'datasource',
                                        'flowItemSimpleInfoLocal',
                                        'data',
                                      ],
                                      code: 'tacheCode',
                                    },
                                    parentType: 'object',
                                    parentKey: '0-3',
                                    key: '0-3-8',
                                  },
                                  {
                                    code: 'nextStaff',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'root.body.nextStaff',
                                    compType: 'Input',
                                    name: 'nextStaff',
                                    parents: ['root', 'body'],
                                    id: 'root.body.nextStaff',
                                    dataKey: '982867_root.body.nextStaff',
                                    parentType: 'object',
                                    parentKey: '0-3',
                                    key: '0-3-10',
                                  },
                                  {
                                    code: 'nextTache',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'root.body.nextTache',
                                    compType: 'Input',
                                    name: 'nextTache',
                                    parents: ['root', 'body'],
                                    id: 'root.body.nextTache',
                                    dataKey: '982867_root.body.nextTache',
                                    parentType: 'object',
                                    parentKey: '0-3',
                                    key: '0-3-7',
                                  },
                                  {
                                    code: 'workItemId',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'root.body.workItemId',
                                    compType: 'Input',
                                    name: 'workItemId',
                                    parents: ['root', 'body'],
                                    id: 'root.body.workItemId',
                                    dataKey: '982867_root.body.workItemId',
                                    value: {
                                      type: [
                                        'datasource',
                                        'flowItemSimpleInfoLocal',
                                        'data',
                                      ],
                                      code: 'workItemId',
                                    },
                                    parentType: 'object',
                                    parentKey: '0-3',
                                    key: '0-3-9',
                                  },
                                  {
                                    code: 'orderMessage',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'root.body.orderMessage',
                                    compType: 'Input',
                                    name: 'orderMessage',
                                    parents: ['root', 'body'],
                                    id: 'root.body.orderMessage',
                                    dataKey: '982867_root.body.orderMessage',
                                    parentType: 'object',
                                    parentKey: '0-3',
                                    key: '0-3-5',
                                  },
                                  {
                                    code: 'workId',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'root.body.workId',
                                    compType: 'Input',
                                    name: 'workId',
                                    parents: ['root', 'body'],
                                    id: 'root.body.workId',
                                    dataKey: '982867_root.body.workId',
                                    parentType: 'object',
                                    parentKey: '0-3',
                                    key: '0-3-6',
                                  },
                                  {
                                    code: 'tachePass',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'root.body.tachePass',
                                    compType: 'Input',
                                    name: 'tachePass',
                                    parents: ['root', 'body'],
                                    id: 'root.body.tachePass',
                                    dataKey: '982867_root.body.tachePass',
                                    parentType: 'object',
                                    parentKey: '0-3',
                                    key: '0-3-11',
                                  },
                                  {
                                    code: 'busiObjNbr',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'root.body.busiObjNbr',
                                    compType: 'Input',
                                    name: 'busiObjNbr',
                                    parents: ['root', 'body'],
                                    id: 'root.body.busiObjNbr',
                                    dataKey: '982867_root.body.busiObjNbr',
                                    parentType: 'object',
                                    parentKey: '0-3',
                                    key: '0-3-12',
                                    value: {
                                      type: [
                                        'context',
                                        '$urlParam.busiObjNbr$',
                                      ],
                                      code: '',
                                    },
                                  },
                                  {
                                    code: 'endLevel',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'root.body.endLevel',
                                    compType: 'Input',
                                    name: 'endLevel',
                                    parents: ['root', 'body'],
                                    id: 'root.body.endLevel',
                                    dataKey: '982867_root.body.endLevel',
                                    value: {
                                      type: [
                                        'datasource',
                                        'flowItemSimpleInfoLocal',
                                        'data',
                                      ],
                                      code: 'endLevel',
                                    },
                                    parentType: 'object',
                                    parentKey: '0-3',
                                    key: '0-3-13',
                                  },
                                  {
                                    code: 'parentWorkItemId',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'root.body.parentWorkItemId',
                                    compType: 'Input',
                                    name: 'parentWorkItemId',
                                    parents: ['root', 'body'],
                                    id: 'root.body.parentWorkItemId',
                                    dataKey:
                                      '982867_root.body.parentWorkItemId',
                                    parentType: 'object',
                                    parentKey: '0-3',
                                    key: '0-3-0',
                                  },
                                  {
                                    code: 'isRollback',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'root.body.isRollback',
                                    compType: 'Input',
                                    name: 'isRollback',
                                    parents: ['root', 'body'],
                                    id: 'root.body.isRollback',
                                    dataKey: '982867_root.body.isRollback',
                                    parentType: 'object',
                                    parentKey: '0-3',
                                    key: '0-3-1',
                                  },
                                  {
                                    code: 'tacheRemark',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'root.body.tacheRemark',
                                    compType: 'Input',
                                    name: 'tacheRemark',
                                    parents: ['root', 'body'],
                                    id: 'root.body.tacheRemark',
                                    dataKey: '982867_root.body.tacheRemark',
                                    parentType: 'object',
                                    parentKey: '0-3',
                                    key: '0-3-2',
                                  },
                                  {
                                    code: 'mergeTitle',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'root.body.mergeTitle',
                                    compType: 'Input',
                                    name: 'mergeTitle',
                                    parents: ['root', 'body'],
                                    id: 'root.body.mergeTitle',
                                    dataKey: '982867_root.body.mergeTitle',
                                    value: {
                                      type: [
                                        'form',
                                        'Form_8512707_5353887_082748',
                                        'getFieldsValue',
                                      ],
                                      code: 'mergeTitle',
                                    },
                                    parentType: 'object',
                                    parentKey: '0-3',
                                    key: '0-3-3',
                                  },
                                  {
                                    code: 'parentWorkId',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'root.body.parentWorkId',
                                    compType: 'Input',
                                    name: 'parentWorkId',
                                    parents: ['root', 'body'],
                                    id: 'root.body.parentWorkId',
                                    dataKey: '982867_root.body.parentWorkId',
                                    parentType: 'object',
                                    parentKey: '0-3',
                                    key: '0-3-4',
                                  },
                                  {
                                    code: 'tacheAttachments',
                                    attrType: 'objectArray',
                                    children: [
                                      {
                                        code: 'fileName',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        _id: 'root.body.tacheAttachments.fileName',
                                        compType: 'Input',
                                        name: 'fileName',
                                        parents: [
                                          'root',
                                          'body',
                                          'tacheAttachments',
                                        ],
                                        id: 'root.body.tacheAttachments.fileName',
                                        dataKey:
                                          '982867_root.body.tacheAttachments.fileName',
                                        parentType: 'objectArray',
                                        parentKey: '0-3-16',
                                        key: '0-3-16-0',
                                        parentCode: 'tacheAttachments',
                                      },
                                      {
                                        code: 'url',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        _id: 'root.body.tacheAttachments.url',
                                        compType: 'Input',
                                        name: 'url',
                                        parents: [
                                          'root',
                                          'body',
                                          'tacheAttachments',
                                        ],
                                        id: 'root.body.tacheAttachments.url',
                                        dataKey:
                                          '982867_root.body.tacheAttachments.url',
                                        parentType: 'objectArray',
                                        parentKey: '0-3-16',
                                        key: '0-3-16-1',
                                        parentCode: 'tacheAttachments',
                                      },
                                      {
                                        code: 'fileId',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        _id: 'root.body.tacheAttachments.fileId',
                                        compType: 'Input',
                                        name: 'fileId',
                                        parents: [
                                          'root',
                                          'body',
                                          'tacheAttachments',
                                        ],
                                        id: 'root.body.tacheAttachments.fileId',
                                        dataKey:
                                          '982867_root.body.tacheAttachments.fileId',
                                        parentType: 'objectArray',
                                        parentKey: '0-3-16',
                                        key: '0-3-16-2',
                                        parentCode: 'tacheAttachments',
                                      },
                                    ],
                                    _id: 'root.body.tacheAttachments',
                                    compType: 'Input',
                                    name: 'tacheAttachments',
                                    parents: ['root', 'body'],
                                    id: 'root.body.tacheAttachments',
                                    dataKey:
                                      '982867_root.body.tacheAttachments',
                                    parentType: 'object',
                                    parentKey: '0-3',
                                    key: '0-3-16',
                                  },
                                  {
                                    code: 'sameList',
                                    attrType: 'objectArray',
                                    children: [
                                      {
                                        code: 'tacheRemark',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        _id: 'root.body.sameList.tacheRemark',
                                        compType: 'Input',
                                        name: 'tacheRemark',
                                        parents: ['root', 'body', 'sameList'],
                                        id: 'root.body.sameList.tacheRemark',
                                        dataKey:
                                          '982867_root.body.sameList.tacheRemark',
                                        parentType: 'objectArray',
                                        parentKey: '0-3-15',
                                        key: '0-3-15-0',
                                        parentCode: 'sameList',
                                      },
                                      {
                                        code: 'nextStaff',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        _id: 'root.body.sameList.nextStaff',
                                        compType: 'Input',
                                        name: 'nextStaff',
                                        parents: ['root', 'body', 'sameList'],
                                        id: 'root.body.sameList.nextStaff',
                                        dataKey:
                                          '982867_root.body.sameList.nextStaff',
                                        parentType: 'objectArray',
                                        parentKey: '0-3-15',
                                        key: '0-3-15-1',
                                        parentCode: 'sameList',
                                      },
                                      {
                                        code: 'nextTache',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        _id: 'root.body.sameList.nextTache',
                                        compType: 'Input',
                                        name: 'nextTache',
                                        parents: ['root', 'body', 'sameList'],
                                        id: 'root.body.sameList.nextTache',
                                        dataKey:
                                          '982867_root.body.sameList.nextTache',
                                        parentType: 'objectArray',
                                        parentKey: '0-3-15',
                                        key: '0-3-15-2',
                                        parentCode: 'sameList',
                                      },
                                      {
                                        code: 'nextStaffName',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        _id: 'root.body.sameList.nextStaffName',
                                        compType: 'Input',
                                        name: 'nextStaffName',
                                        parents: ['root', 'body', 'sameList'],
                                        id: 'root.body.sameList.nextStaffName',
                                        dataKey:
                                          '982867_root.body.sameList.nextStaffName',
                                        parentType: 'objectArray',
                                        parentKey: '0-3-15',
                                        key: '0-3-15-3',
                                        parentCode: 'sameList',
                                      },
                                      {
                                        code: 'workItemId',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        _id: 'root.body.sameList.workItemId',
                                        compType: 'Input',
                                        name: 'workItemId',
                                        parents: ['root', 'body', 'sameList'],
                                        id: 'root.body.sameList.workItemId',
                                        dataKey:
                                          '982867_root.body.sameList.workItemId',
                                        parentType: 'objectArray',
                                        parentKey: '0-3-15',
                                        key: '0-3-15-6',
                                        parentCode: 'sameList',
                                      },
                                      {
                                        code: 'busiObjNbr',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        _id: 'root.body.sameList.busiObjNbr',
                                        compType: 'Input',
                                        name: 'busiObjNbr',
                                        parents: ['root', 'body', 'sameList'],
                                        id: 'root.body.sameList.busiObjNbr',
                                        dataKey:
                                          '982867_root.body.sameList.busiObjNbr',
                                        parentType: 'objectArray',
                                        parentKey: '0-3-15',
                                        key: '0-3-15-4',
                                        parentCode: 'sameList',
                                      },
                                      {
                                        code: 'tachePass',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        _id: 'root.body.sameList.tachePass',
                                        compType: 'Input',
                                        name: 'tachePass',
                                        parents: ['root', 'body', 'sameList'],
                                        id: 'root.body.sameList.tachePass',
                                        dataKey:
                                          '982867_root.body.sameList.tachePass',
                                        parentType: 'objectArray',
                                        parentKey: '0-3-15',
                                        key: '0-3-15-7',
                                        parentCode: 'sameList',
                                      },
                                      {
                                        code: 'workId',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        _id: 'root.body.sameList.workId',
                                        compType: 'Input',
                                        name: 'workId',
                                        parents: ['root', 'body', 'sameList'],
                                        id: 'root.body.sameList.workId',
                                        dataKey:
                                          '982867_root.body.sameList.workId',
                                        parentType: 'objectArray',
                                        parentKey: '0-3-15',
                                        key: '0-3-15-5',
                                        parentCode: 'sameList',
                                      },
                                    ],
                                    _id: 'root.body.sameList',
                                    compType: 'Input',
                                    name: 'sameList',
                                    parents: ['root', 'body'],
                                    id: 'root.body.sameList',
                                    dataKey: '982867_root.body.sameList',
                                    value: {
                                      type: ['context', '$data_668458$'],
                                      code: '',
                                    },
                                    parentType: 'object',
                                    parentKey: '0-3',
                                    key: '0-3-15',
                                  },
                                  {
                                    code: 'copyUserList',
                                    attrType: 'objectArray',
                                    children: [
                                      {
                                        code: 'userName',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        _id: 'root.body.copyUserList.userName',
                                        compType: 'Input',
                                        name: 'userName',
                                        parents: [
                                          'root',
                                          'body',
                                          'copyUserList',
                                        ],
                                        id: 'root.body.copyUserList.userName',
                                        dataKey:
                                          '982867_root.body.copyUserList.userName',
                                        parentType: 'objectArray',
                                        parentKey: '0-3-14',
                                        key: '0-3-14-0',
                                        parentCode: 'copyUserList',
                                      },
                                      {
                                        code: 'userCode',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        _id: 'root.body.copyUserList.userCode',
                                        compType: 'Input',
                                        name: 'userCode',
                                        parents: [
                                          'root',
                                          'body',
                                          'copyUserList',
                                        ],
                                        id: 'root.body.copyUserList.userCode',
                                        dataKey:
                                          '982867_root.body.copyUserList.userCode',
                                        parentType: 'objectArray',
                                        parentKey: '0-3-14',
                                        key: '0-3-14-1',
                                        parentCode: 'copyUserList',
                                      },
                                    ],
                                    _id: 'root.body.copyUserList',
                                    compType: 'Input',
                                    name: 'copyUserList',
                                    parents: ['root', 'body'],
                                    id: 'root.body.copyUserList',
                                    dataKey: '982867_root.body.copyUserList',
                                    parentType: 'object',
                                    parentKey: '0-3',
                                    key: '0-3-14',
                                  },
                                ],
                                _id: 'root.body',
                                compType: 'Input',
                                parents: ['root'],
                                id: 'root.body',
                                dataKey: '982867_root.body',
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
                            dataKey: '982867_root',
                          },
                        ],
                        _sourceName: '保存数据并流转摩卡流程-tzp',
                      },
                      line_number: 3,
                      callback1: [
                        {
                          type: 'ifelse',
                          condition: [
                            {
                              condId: '290224',
                              options: {
                                useManual: true,
                                useObject: false,
                                context: '$reply_982867?.resultCode$',
                                operate: '!=',
                                manualValue: '0',
                              },
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          dataId: 166839133969054660,
                          elseIfs: [
                            {
                              dataName: 'elseIf',
                              dataId: 166839143138304480,
                              children: [
                                {
                                  dataName: 'action',
                                  dataId: 166839143547645380,
                                  children: [],
                                  todoOptions: ['msgType', 'value'],
                                  options: {
                                    compId: 'showMessage',
                                    compName: 'system',
                                    id: '044263',
                                    pageJsonId: '763609',
                                    type: 'success',
                                    value: '审核成功',
                                  },
                                  actionObjId: 'showMessage',
                                  actionObjName: 'system',
                                  value: 'showMessage',
                                  line_number: 7,
                                },
                                {
                                  dataName: 'action',
                                  dataId: 170307658384325730,
                                  children: [
                                    {
                                      dataName: 'callback',
                                      dataId: 170307658384315230,
                                      children: [],
                                      value: 'callback1',
                                      params: [],
                                    },
                                    {
                                      dataName: 'callback',
                                      dataId: 170307658384367500,
                                      children: [],
                                      value: 'callback2',
                                      params: [],
                                    },
                                  ],
                                  todoOptions: ['actionTitle', 'editorCode'],
                                  options: {
                                    compId: 'customActionCode',
                                    compName: 'page',
                                    id: '936777',
                                    pageJsonId: '030387',
                                    code: 'function main(data,state,success,fail){if(window.opener){console.log("\\u662F\\u4ECEwindow.open\\u6253\\u5F00\\u7684");window.close()}else{console.log("\\u4E0D\\u662F\\u4ECEwindow.open\\u6253\\u5F00\\u7684\\uFF0C\\u4E0D\\u505A\\u5904\\u7406")}};',
                                    actionTitle:
                                      '如果当前页面是window.open打开',
                                  },
                                  actionObjId: 'customActionCode',
                                  actionObjName: 'page',
                                  value: 'customActionCode',
                                  tips: '注意：如果需要配合退出事件，请在代码块中增加return true',
                                  line_number: 8,
                                },
                                {
                                  dataName: 'action',
                                  dataId: 166839143942675300,
                                  children: [],
                                  todoOptions: ['custParams'],
                                  options: {
                                    compId: 'historyGoBack',
                                    compName: 'system',
                                    id: '754531',
                                    pageJsonId: '763609',
                                  },
                                  actionObjId: 'historyGoBack',
                                  actionObjName: 'system',
                                  value: 'historyGoBack',
                                  line_number: 9,
                                },
                              ],
                              condition: [],
                              callback: [
                                {
                                  type: 'showMessage',
                                  dataId: 166839143547645380,
                                  options: {
                                    compId: 'showMessage',
                                    compName: 'system',
                                    id: '044263',
                                    pageJsonId: '763609',
                                    type: 'success',
                                    value: '审核成功',
                                  },
                                  line_number: 7,
                                },
                                {
                                  type: 'customActionCode',
                                  dataId: 170307658384325730,
                                  options: {
                                    compId: 'customActionCode',
                                    compName: 'page',
                                    id: '936777',
                                    pageJsonId: '030387',
                                    code: 'function main(data,state,success,fail){if(window.opener){console.log("\\u662F\\u4ECEwindow.open\\u6253\\u5F00\\u7684");window.close()}else{console.log("\\u4E0D\\u662F\\u4ECEwindow.open\\u6253\\u5F00\\u7684\\uFF0C\\u4E0D\\u505A\\u5904\\u7406")}};',
                                    actionTitle:
                                      '如果当前页面是window.open打开',
                                  },
                                  line_number: 8,
                                  callback1: [],
                                  callback2: [],
                                },
                                {
                                  type: 'historyGoBack',
                                  dataId: 166839143942675300,
                                  options: {
                                    compId: 'historyGoBack',
                                    compName: 'system',
                                    id: '754531',
                                    pageJsonId: '763609',
                                  },
                                  line_number: 9,
                                },
                              ],
                            },
                          ],
                          line_number: 4,
                          callback1: [
                            {
                              type: 'showMessage',
                              dataId: 166839146194784480,
                              options: {
                                compId: 'showMessage',
                                compName: 'system',
                                id: '30717087',
                                pageJsonId: '763609',
                                type: 'error',
                                value: '$reply_982867?.resultMsg$',
                              },
                              line_number: 5,
                            },
                            {
                              type: 'sysSetDisable',
                              dataId: 166945150221917860,
                              options: {
                                compId: ['Button_219692_3851914_6006513'],
                                compName: 'page',
                                id: '8104771',
                                pageJsonId: '763609',
                                disabled: '',
                                compid: ['Button_219692_3851914_6006513'],
                              },
                              line_number: 6,
                            },
                          ],
                        },
                      ],
                      callback2: [
                        {
                          type: 'sysSetDisable',
                          dataId: 166945151969974460,
                          options: {
                            compId: ['Button_219692_3851914_6006513'],
                            compName: 'page',
                            id: '0612605',
                            pageJsonId: '763609',
                            disabled: '',
                            compid: ['Button_219692_3851914_6006513'],
                          },
                          line_number: 10,
                        },
                      ],
                    },
                  ],
                  callback2: [
                    {
                      type: 'showMessage',
                      dataId: 166831033207700130,
                      options: {
                        compId: 'showMessage',
                        compName: 'system',
                        id: '9911565',
                        pageJsonId: '763609',
                        type: 'info',
                        value: '请完成所有待办审批后提交',
                      },
                      line_number: 11,
                    },
                    {
                      type: 'sysSetDisable',
                      dataId: 166945146303382900,
                      options: {
                        compId: ['Button_219692_3851914_6006513'],
                        compName: 'page',
                        id: '745031',
                        pageJsonId: '763609',
                        disabled: '',
                        compid: ['Button_219692_3851914_6006513'],
                      },
                      line_number: 12,
                    },
                  ],
                },
              ];
              eventDatacustomActionCode514.params =
                [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
              CMDGenerator(
                eventDatacustomActionCode514,
                { e },
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
              refs.setComponentRef(r, 'Button_219692_3851914_6006513')
            }
            {...injectData}
          />
          <Button
            name={'会签'}
            shape={null}
            classification={'default'}
            autoProcessFlow={false}
            flowProcessResult={'common'}
            iconPosition={'left'}
            ghost={false}
            block={false}
            size={'default'}
            type={'primary'}
            hasIcon={false}
            $$componentItem={{
              id: 'Button_534781',
              uid: 'Button_534781',
              type: 'Button',
              ...componentItem,
            }}
            disabled={false}
            visible={false}
            readOnly={false}
            style={{ width: 'fit-content', margin: '0px 8px 0px 0px' }}
            onClick={(e: any) => {
              const eventDatacustomActionCode515: any = [
                {
                  type: 'customActionCode',
                  dataId: 166839221389227300,
                  options: {
                    compId: 'customActionCode',
                    compName: 'page',
                    id: '1723652',
                    pageJsonId: '763609',
                    code: 'function main(data,state,success,fail){var _data$sameApproveOrdL;console.log("data",data);var _list=data===null||data===void 0?void 0:(_data$sameApproveOrdL=data.sameApproveOrdList)===null||_data$sameApproveOrdL===void 0?void 0:_data$sameApproveOrdL.resultData.map(function(item){item.busiObjNbr=item.approveOrdNbr;return item});console.log("\\u5408\\u5355\\u8BF7\\u6C42\\u5165\\u53C2\\uFF1A",_list);success(_list)};',
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'showCustomModal',
                      dataId: 166839225705235000,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '307272',
                        pageJsonId: '763609',
                        modalname: '/meeting/createpop',
                        pageId: '876645169117937664',
                        paramsObj: {
                          meetingType:
                            '$data.flowItemSimpleInfoLocal.meetingType$',
                          meetingOrderType:
                            '$data.flowItemSimpleInfoLocal.meetingOrderType$',
                          sameList: '$data_1723652$',
                        },
                        paramsObjKeyValueMap: {
                          meetingType:
                            '$data.flowItemSimpleInfoLocal.meetingType$',
                          meetingOrderType:
                            '$data.flowItemSimpleInfoLocal.meetingOrderType$',
                          sameList: '$data_1723652$',
                        },
                        modalPath: '/meeting/createpop',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'setVisible',
                          dataId: 166839391012813100,
                          options: {
                            compId: 'Button_219692_3851914_6006513',
                            compLib: 'comm',
                            pageJsonId: '763609',
                            compName: 'Button',
                            id: '3187556',
                            visible: '',
                          },
                          line_number: 3,
                        },
                      ],
                      callback2: [],
                    },
                  ],
                  callback2: [
                    {
                      type: 'showMessage',
                      dataId: 166839221389276670,
                      options: {
                        compId: 'showMessage',
                        compName: 'system',
                        id: '785943',
                        pageJsonId: '763609',
                        type: 'info',
                        value: '请完成所有待办审批后提交',
                      },
                      line_number: 4,
                    },
                  ],
                },
              ];
              eventDatacustomActionCode515.params =
                [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
              CMDGenerator(
                eventDatacustomActionCode515,
                { e },
                'customActionCode',
                {
                  id: 'customActionCode',
                  name: 'customActionCode',
                  type: 'customActionCode',
                  platform: 'pc',
                },
              );
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Button_534781')}
            {...injectData}
          />
          <Button
            name={'返回'}
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
              id: 'Button_713182_647206_4599004',
              uid: 'Button_713182_647206_4599004',
              type: 'Button',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ width: 'fit-content' }}
            onClick={(e: any) => {
              const eventDataifelse446: any = [
                {
                  type: 'ifelse',
                  condition: [
                    {
                      condId: '1954217',
                      options: {
                        useManual: true,
                        useObject: false,
                        context: '$urlParam.origin$',
                        operate: '==',
                        manualValue: '0',
                      },
                      conditionType: 'checkContextValue',
                      objType: 'system',
                      objId: 'sys',
                    },
                  ],
                  dataId: 167144312329528900,
                  elseIfs: [
                    {
                      dataName: 'elseIf',
                      dataId: 167144315690410900,
                      children: [
                        {
                          dataName: 'action',
                          dataId: 167144317838317800,
                          children: [],
                          todoOptions: [
                            'historyType',
                            'pathname',
                            'searchParams',
                          ],
                          options: {
                            compId: 'history',
                            compName: 'system',
                            id: '207225',
                            pageJsonId: '763609',
                            type: 'push',
                            pathname: '/approveOrderTodo',
                            selectedType: 'page',
                            pageId: '878815340415455232',
                            modalPath: '/approveOrderTodo',
                          },
                          actionObjId: 'history',
                          actionObjName: 'system',
                          value: 'history',
                          line_number: 4,
                        },
                      ],
                      condition: [],
                      callback: [
                        {
                          type: 'history',
                          dataId: 167144317838317800,
                          options: {
                            compId: 'history',
                            compName: 'system',
                            id: '207225',
                            pageJsonId: '763609',
                            type: 'push',
                            pathname: '/approveOrderTodo',
                            selectedType: 'page',
                            pageId: '878815340415455232',
                            modalPath: '/approveOrderTodo',
                          },
                          line_number: 4,
                        },
                      ],
                    },
                  ],
                  line_number: 1,
                  callback1: [
                    {
                      type: 'customActionCode',
                      dataId: 170307546974911420,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '775616',
                        pageJsonId: '030387',
                        code: 'function main(data,state,success,fail){if(window.opener){console.log("\\u662F\\u4ECEwindow.open\\u6253\\u5F00\\u7684");window.close()}else{console.log("\\u4E0D\\u662F\\u4ECEwindow.open\\u6253\\u5F00\\u7684\\uFF0C\\u4E0D\\u505A\\u5904\\u7406")}};',
                        actionTitle: '如果当前页面是window.open打开',
                      },
                      line_number: 2,
                      callback1: [],
                      callback2: [],
                    },
                    {
                      type: 'history',
                      dataId: 167144314607912060,
                      options: {
                        compId: 'history',
                        compName: 'system',
                        id: '991026',
                        pageJsonId: '763609',
                        type: 'push',
                        pathname: '/approveWorkbench',
                        selectedType: 'page',
                        pageId: '922008281896452096',
                        modalPath: '/approveWorkbench',
                      },
                      line_number: 3,
                    },
                  ],
                },
              ];
              eventDataifelse446.params =
                [
                  {
                    title: '事件对象',
                    value: '$e$',
                    name: 'e',
                    label: '事件对象',
                  },
                ] || [];
              CMDGenerator(eventDataifelse446, { e }, 'ifelse', {
                id: 'ifelse',
                name: 'ifelse',
                type: 'ifelse',
                platform: 'pc',
              });
            }}
            ref={(r: any) =>
              refs.setComponentRef(r, 'Button_713182_647206_4599004')
            }
            {...injectData}
          />
        </View>
        <BusiComp0496635
          pageId={pageId}
          busiCompId={'878166584210399232'}
          name={'处理过程组件'}
          basicStatus={1}
          busiCompStates={{ workId: urlParam?.workId }}
          style={{ margin: '0 0 12px 0' }}
          ref={(r: any) =>
            refs.setComponentRef(r, 'BOFramer_6337954_86039_2412755')
          }
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(MergeOrderApprove$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
