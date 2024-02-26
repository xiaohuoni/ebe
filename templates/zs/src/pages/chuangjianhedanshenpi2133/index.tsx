// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  Text,
  Card,
  Row,
  Form,
  Input,
  Table,
  Radio,
  Select,
  TextArea,
  Button,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const pageId = '907167547460595712';
const Chuangjianhedanshenpi2133$$Page: React.FC<PageProps> = ({
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
  const nextStaffChange = (options_9533806: any) => {
    const eventDataclearValue12: any = [
      {
        type: 'clearValue',
        dataId: 166842827483997920,
        options: {
          compId: 'Input_668689_2052015',
          compLib: 'comm',
          pageJsonId: '763609',
          compName: 'Input',
          id: '61058738',
        },
        line_number: 1,
      },
    ];
    eventDataclearValue12.params =
      [
        {
          title: '事件入参',
          name: 'options_9533806',
          value: '$options_9533806$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue12, { options_9533806 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDataclearValue13: any = [
      {
        type: 'clearValue',
        dataId: 166842827766400500,
        options: {
          compId: 'Input_9206452_698968',
          compLib: 'comm',
          pageJsonId: '763609',
          compName: 'Input',
          id: '3019925',
        },
        line_number: 2,
      },
    ];
    eventDataclearValue13.params =
      [
        {
          title: '事件入参',
          name: 'options_9533806',
          value: '$options_9533806$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue13, { options_9533806 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDatagetValue58: any = [
      {
        type: 'getValue',
        dataId: 166842828207370500,
        options: {
          compId: 'Select_599981_437465',
          compLib: 'comm',
          pageJsonId: '763609',
          compName: 'Select',
          id: '435056',
        },
        line_number: 3,
        callback1: [
          {
            type: 'ifelse',
            condition: [
              {
                condId: '2526907',
                options: { context: '$value_435056$', operate: 'empty' },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 166842828986683040,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 166842832939854370,
                children: [
                  {
                    dataName: 'action',
                    dataId: 166842833625893660,
                    children: [
                      {
                        dataName: 'callback',
                        dataId: 166842833625800350,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 166842837217128830,
                            children: [],
                            todoOptions: ['valueArray'],
                            options: {
                              compId: 'debug',
                              compName: 'system',
                              id: '3797273',
                              pageJsonId: '763609',
                              value: ['下一环节选中相关数据', '$data_717383$'],
                            },
                            actionObjId: 'debug',
                            actionObjName: 'system',
                            value: 'console',
                            line_number: 8,
                          },
                          {
                            dataName: 'condition',
                            dataId: 166842839185067500,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166842844627681250,
                                children: [],
                                todoOptions: ['required', 'selectComp'],
                                options: {
                                  compId: 'Input_668689_2052015',
                                  compLib: 'comm',
                                  pageJsonId: '763609',
                                  compName: 'Input',
                                  id: '929141',
                                  required: '',
                                },
                                actionObjId: 'Input_668689_2052015',
                                actionObjName: 'Input',
                                value: 'setRequired',
                                compLib: 'comm',
                                line_number: 10,
                              },
                              {
                                dataName: 'action',
                                dataId: 166842845097779000,
                                children: [],
                                todoOptions: ['visible', 'selectComp'],
                                options: {
                                  compId: 'Input_668689_2052015',
                                  compLib: 'comm',
                                  pageJsonId: '763609',
                                  compName: 'Input',
                                  id: '386556',
                                  visible: '',
                                },
                                actionObjId: 'Input_668689_2052015',
                                actionObjName: 'Input',
                                value: 'setVisible',
                                compLib: 'comm',
                                line_number: 11,
                              },
                            ],
                            elseIfs: [
                              {
                                dataName: 'elseIf',
                                dataId: 166842845988390850,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 166842846503324800,
                                    children: [],
                                    todoOptions: ['required', 'selectComp'],
                                    options: {
                                      compId: 'Input_668689_2052015',
                                      compLib: 'comm',
                                      pageJsonId: '763609',
                                      compName: 'Input',
                                      id: '271137',
                                      required: 'true',
                                    },
                                    actionObjId: 'Input_668689_2052015',
                                    actionObjName: 'Input',
                                    value: 'setRequired',
                                    compLib: 'comm',
                                    line_number: 12,
                                  },
                                  {
                                    dataName: 'action',
                                    dataId: 166842847278821820,
                                    children: [],
                                    todoOptions: ['visible', 'selectComp'],
                                    options: {
                                      compId: 'Input_668689_2052015',
                                      compLib: 'comm',
                                      pageJsonId: '763609',
                                      compName: 'Input',
                                      id: '4529121',
                                      visible: 'true',
                                    },
                                    actionObjId: 'Input_668689_2052015',
                                    actionObjName: 'Input',
                                    value: 'setVisible',
                                    compLib: 'comm',
                                    line_number: 13,
                                  },
                                ],
                                condition: [],
                                callback: [
                                  {
                                    type: 'setRequired',
                                    dataId: 166842846503324800,
                                    options: {
                                      compId: 'Input_668689_2052015',
                                      compLib: 'comm',
                                      pageJsonId: '763609',
                                      compName: 'Input',
                                      id: '271137',
                                      required: 'true',
                                    },
                                    line_number: 12,
                                  },
                                  {
                                    type: 'setVisible',
                                    dataId: 166842847278821820,
                                    options: {
                                      compId: 'Input_668689_2052015',
                                      compLib: 'comm',
                                      pageJsonId: '763609',
                                      compName: 'Input',
                                      id: '4529121',
                                      visible: 'true',
                                    },
                                    line_number: 13,
                                  },
                                ],
                              },
                            ],
                            condition: [
                              {
                                condId: '571347',
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context: '$data_717383.hideUserSelect$',
                                  operate: '==',
                                  manualValue: 'Y',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            desc: 'hideUserSelect为Y时隐藏处理人相关表单',
                            line_number: 9,
                          },
                          {
                            dataName: 'condition',
                            dataId: 166842848056033800,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166842851546670880,
                                children: [
                                  {
                                    dataName: 'callback',
                                    dataId: 166842851546640000,
                                    children: [],
                                    value: 'callback1',
                                    params: [],
                                  },
                                ],
                                todoOptions: ['compId', 'valueList'],
                                options: {
                                  compId: [
                                    'Input_9206452_698968',
                                    'Input_668689_2052015',
                                  ],
                                  compLib: 'comm',
                                  pageJsonId: '763609',
                                  compName: 'Input',
                                  id: '338234',
                                  valueList: {
                                    Input_9206452_698968:
                                      '$data_717383.fixedUser$',
                                    Input_668689_2052015:
                                      '$data_717383.fixedUserName$',
                                  },
                                  compid: [
                                    'Input_9206452_698968',
                                    'Input_668689_2052015',
                                  ],
                                },
                                actionObjId: 'Input_9206452_698968',
                                actionObjName: 'Input',
                                value: 'setValue',
                                compLib: 'comm',
                                line_number: 15,
                              },
                            ],
                            elseIfs: [],
                            condition: [
                              {
                                condId: '4546924',
                                options: {
                                  context: '$data_717383.fixedUser$',
                                  operate: 'notEmpty',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            desc: '判断是否有固定处理人，有则赋值',
                            line_number: 14,
                          },
                        ],
                        value: 'callback1',
                        params: [],
                      },
                      {
                        dataName: 'callback',
                        dataId: 166842833625882100,
                        children: [],
                        value: 'callback2',
                        params: [],
                      },
                    ],
                    todoOptions: ['actionTitle', 'editorCode'],
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '717383',
                      pageJsonId: '763609',
                      code: 'function main(data,state,success,fail){var _data$nextTacheList$r;var selected=(_data$nextTacheList$r=data.nextTacheList.resultData)===null||_data$nextTacheList$r===void 0?void 0:_data$nextTacheList$r.find(function(item){return item.tacheCode===value_435056});console.log("\\u4E0B\\u4E00\\u5904\\u7406\\u73AF\\u8282\\uFF1A",selected);if(selected){success(selected)}else{fail(selected)}};',
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
                    dataId: 166842833625893660,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '717383',
                      pageJsonId: '763609',
                      code: 'function main(data,state,success,fail){var _data$nextTacheList$r;var selected=(_data$nextTacheList$r=data.nextTacheList.resultData)===null||_data$nextTacheList$r===void 0?void 0:_data$nextTacheList$r.find(function(item){return item.tacheCode===value_435056});console.log("\\u4E0B\\u4E00\\u5904\\u7406\\u73AF\\u8282\\uFF1A",selected);if(selected){success(selected)}else{fail(selected)}};',
                    },
                    line_number: 7,
                    callback1: [
                      {
                        type: 'console',
                        dataId: 166842837217128830,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '3797273',
                          pageJsonId: '763609',
                          value: ['下一环节选中相关数据', '$data_717383$'],
                        },
                        line_number: 8,
                      },
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '571347',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$data_717383.hideUserSelect$',
                              operate: '==',
                              manualValue: 'Y',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 166842839185067500,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 166842845988390850,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166842846503324800,
                                children: [],
                                todoOptions: ['required', 'selectComp'],
                                options: {
                                  compId: 'Input_668689_2052015',
                                  compLib: 'comm',
                                  pageJsonId: '763609',
                                  compName: 'Input',
                                  id: '271137',
                                  required: 'true',
                                },
                                actionObjId: 'Input_668689_2052015',
                                actionObjName: 'Input',
                                value: 'setRequired',
                                compLib: 'comm',
                                line_number: 12,
                              },
                              {
                                dataName: 'action',
                                dataId: 166842847278821820,
                                children: [],
                                todoOptions: ['visible', 'selectComp'],
                                options: {
                                  compId: 'Input_668689_2052015',
                                  compLib: 'comm',
                                  pageJsonId: '763609',
                                  compName: 'Input',
                                  id: '4529121',
                                  visible: 'true',
                                },
                                actionObjId: 'Input_668689_2052015',
                                actionObjName: 'Input',
                                value: 'setVisible',
                                compLib: 'comm',
                                line_number: 13,
                              },
                            ],
                            condition: [],
                            callback: [
                              {
                                type: 'setRequired',
                                dataId: 166842846503324800,
                                options: {
                                  compId: 'Input_668689_2052015',
                                  compLib: 'comm',
                                  pageJsonId: '763609',
                                  compName: 'Input',
                                  id: '271137',
                                  required: 'true',
                                },
                                line_number: 12,
                              },
                              {
                                type: 'setVisible',
                                dataId: 166842847278821820,
                                options: {
                                  compId: 'Input_668689_2052015',
                                  compLib: 'comm',
                                  pageJsonId: '763609',
                                  compName: 'Input',
                                  id: '4529121',
                                  visible: 'true',
                                },
                                line_number: 13,
                              },
                            ],
                          },
                        ],
                        line_number: 9,
                        callback1: [
                          {
                            type: 'setRequired',
                            dataId: 166842844627681250,
                            options: {
                              compId: 'Input_668689_2052015',
                              compLib: 'comm',
                              pageJsonId: '763609',
                              compName: 'Input',
                              id: '929141',
                              required: '',
                            },
                            line_number: 10,
                          },
                          {
                            type: 'setVisible',
                            dataId: 166842845097779000,
                            options: {
                              compId: 'Input_668689_2052015',
                              compLib: 'comm',
                              pageJsonId: '763609',
                              compName: 'Input',
                              id: '386556',
                              visible: '',
                            },
                            line_number: 11,
                          },
                        ],
                      },
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '4546924',
                            options: {
                              context: '$data_717383.fixedUser$',
                              operate: 'notEmpty',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 166842848056033800,
                        elseIfs: [],
                        line_number: 14,
                        callback1: [
                          {
                            type: 'setValue',
                            dataId: 166842851546670880,
                            options: {
                              compId: [
                                'Input_9206452_698968',
                                'Input_668689_2052015',
                              ],
                              compLib: 'comm',
                              pageJsonId: '763609',
                              compName: 'Input',
                              id: '338234',
                              valueList: {
                                Input_9206452_698968: '$data_717383.fixedUser$',
                                Input_668689_2052015:
                                  '$data_717383.fixedUserName$',
                              },
                              compid: [
                                'Input_9206452_698968',
                                'Input_668689_2052015',
                              ],
                            },
                            line_number: 15,
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
                dataId: 166842831899728160,
                options: {
                  compId: 'Input_668689_2052015',
                  compLib: 'comm',
                  pageJsonId: '763609',
                  compName: 'Input',
                  id: '53476',
                  required: 'true',
                },
                line_number: 5,
              },
              {
                type: 'setVisible',
                dataId: 166842832229805380,
                options: {
                  compId: 'Input_668689_2052015',
                  compLib: 'comm',
                  pageJsonId: '763609',
                  compName: 'Input',
                  id: '448138',
                  visible: 'true',
                },
                line_number: 6,
              },
            ],
          },
          {
            type: 'console',
            dataId: 166847966278147600,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '490113',
              pageJsonId: '763609',
              value: ['下一处理环节2', '$value_435056$'],
            },
            line_number: 16,
          },
        ],
      },
    ];
    eventDatagetValue58.params =
      [
        {
          title: '事件入参',
          name: 'options_9533806',
          value: '$options_9533806$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue58, { options_9533806 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };
  const tachePassChange = (options_873832: any) => {
    const eventDataclearValue14: any = [
      {
        type: 'clearValue',
        dataId: 166842925668843800,
        options: {
          compId: 'Input_668689_2052015',
          compLib: 'comm',
          pageJsonId: '763609',
          compName: 'Input',
          id: '1365095',
        },
        line_number: 1,
      },
    ];
    eventDataclearValue14.params =
      [
        {
          title: '事件入参',
          name: 'options_873832',
          value: '$options_873832$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue14, { options_873832 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDataclearValue15: any = [
      {
        type: 'clearValue',
        dataId: 166842926506662140,
        options: {
          compId: 'Input_9206452_698968',
          compLib: 'comm',
          pageJsonId: '763609',
          compName: 'Input',
          id: '3957156',
        },
        line_number: 2,
      },
    ];
    eventDataclearValue15.params =
      [
        {
          title: '事件入参',
          name: 'options_873832',
          value: '$options_873832$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue15, { options_873832 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDatagetValue59: any = [
      {
        type: 'getValue',
        dataId: 166842927312426400,
        options: {
          compId: 'Radio_8525737_018091',
          compLib: 'comm',
          pageJsonId: '763609',
          compName: 'Radio',
          id: '290181',
        },
        line_number: 3,
        callback1: [
          {
            type: 'apiRequest',
            dataId: 166847613723982980,
            shielding: true,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '478645',
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
                  code: 'header',
                  name: '请求头参数',
                  attrType: 'object',
                  _id: 'header',
                  compType: 'Input',
                  parents: [],
                  id: 'header',
                  dataKey: '478645_header',
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
                  dataKey: '478645_path',
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
                  dataKey: '478645_query',
                  key: '2',
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
                      _id: 'body.endLevel',
                      compType: 'Input',
                      parents: ['body'],
                      id: 'body.endLevel',
                      dataKey: '478645_body.endLevel',
                      value: {
                        type: ['datasource', 'flowItemSimpleInfoLocal', 'data'],
                        code: 'endLevel',
                      },
                      parentType: 'object',
                      parentKey: '3',
                      key: '3-0',
                    },
                    {
                      code: 'tacheCode',
                      name: 'tacheCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.tacheCode',
                      compType: 'Input',
                      parents: ['body'],
                      id: 'body.tacheCode',
                      dataKey: '478645_body.tacheCode',
                      parentType: 'object',
                      parentKey: '3',
                      key: '3-3',
                    },
                    {
                      code: 'flowCode',
                      name: 'flowCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'body.flowCode',
                      compType: 'Input',
                      parents: ['body'],
                      id: 'body.flowCode',
                      dataKey: '478645_body.flowCode',
                      parentType: 'object',
                      parentKey: '3',
                      key: '3-1',
                    },
                    {
                      code: 'tachePass',
                      name: 'tachePass',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.tachePass',
                      compType: 'Input',
                      parents: ['body'],
                      id: 'body.tachePass',
                      dataKey: '478645_body.tachePass',
                      value: { type: ['context', '$value_290181$'], code: '' },
                      parentType: 'object',
                      parentKey: '3',
                      key: '3-4',
                    },
                    {
                      code: 'orderType',
                      name: 'orderType',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.orderType',
                      compType: 'Input',
                      parents: ['body'],
                      id: 'body.orderType',
                      dataKey: '478645_body.orderType',
                      parentType: 'object',
                      parentKey: '3',
                      key: '3-2',
                    },
                    {
                      code: 'workId',
                      name: 'workId',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.workId',
                      compType: 'Input',
                      parents: ['body'],
                      id: 'body.workId',
                      dataKey: '478645_body.workId',
                      parentType: 'object',
                      parentKey: '3',
                      key: '3-5',
                    },
                    {
                      code: 'workItemId',
                      name: 'workItemId',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'body.workItemId',
                      compType: 'Input',
                      parents: ['body'],
                      id: 'body.workItemId',
                      dataKey: '478645_body.workItemId',
                      value: {
                        type: ['datasource', 'flowItemSimpleInfoLocal', 'data'],
                        code: 'workItemId',
                      },
                      parentType: 'object',
                      parentKey: '3',
                      key: '3-6',
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
                          _id: 'body.sameList.meetingRemark',
                          compType: 'Input',
                          name: 'meetingRemark',
                          parents: ['body', 'sameList'],
                          parentType: 'objectArray',
                          parentKey: '3-7',
                          key: '3-7-0',
                        },
                        {
                          code: 'nextStaff',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.sameList.nextStaff',
                          compType: 'Input',
                          name: 'nextStaff',
                          parents: ['body', 'sameList'],
                          parentType: 'objectArray',
                          parentKey: '3-7',
                          key: '3-7-1',
                        },
                        {
                          code: 'nextStaffName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.sameList.nextStaffName',
                          compType: 'Input',
                          name: 'nextStaffName',
                          parents: ['body', 'sameList'],
                          parentType: 'objectArray',
                          parentKey: '3-7',
                          key: '3-7-2',
                        },
                        {
                          code: 'nextTache',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.sameList.nextTache',
                          compType: 'Input',
                          name: 'nextTache',
                          parents: ['body', 'sameList'],
                          parentType: 'objectArray',
                          parentKey: '3-7',
                          key: '3-7-3',
                        },
                        {
                          code: 'approveOrdNbr',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.sameList.approveOrdNbr',
                          compType: 'Input',
                          name: 'approveOrdNbr',
                          parents: ['body', 'sameList'],
                          parentType: 'objectArray',
                          parentKey: '3-7',
                          key: '3-7-4',
                        },
                        {
                          code: 'busiObjStatus',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.sameList.busiObjStatus',
                          compType: 'Input',
                          name: 'busiObjStatus',
                          parents: ['body', 'sameList'],
                          parentType: 'objectArray',
                          parentKey: '3-7',
                          key: '3-7-5',
                        },
                        {
                          code: 'busiObjSubType',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.sameList.busiObjSubType',
                          compType: 'Input',
                          name: 'busiObjSubType',
                          parents: ['body', 'sameList'],
                          parentType: 'objectArray',
                          parentKey: '3-7',
                          key: '3-7-6',
                        },
                        {
                          code: 'createStaff',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.sameList.createStaff',
                          compType: 'Input',
                          name: 'createStaff',
                          parents: ['body', 'sameList'],
                          parentType: 'objectArray',
                          parentKey: '3-7',
                          key: '3-7-7',
                        },
                        {
                          code: 'createStaffName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.sameList.createStaffName',
                          compType: 'Input',
                          name: 'createStaffName',
                          parents: ['body', 'sameList'],
                          parentType: 'objectArray',
                          parentKey: '3-7',
                          key: '3-7-8',
                        },
                        {
                          code: 'createTime',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.sameList.createTime',
                          compType: 'Input',
                          name: 'createTime',
                          parents: ['body', 'sameList'],
                          parentType: 'objectArray',
                          parentKey: '3-7',
                          key: '3-7-9',
                        },
                        {
                          code: 'effectDate',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.sameList.effectDate',
                          compType: 'Input',
                          name: 'effectDate',
                          parents: ['body', 'sameList'],
                          parentType: 'objectArray',
                          parentKey: '3-7',
                          key: '3-7-10',
                        },
                        {
                          code: 'handleObjCode',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.sameList.handleObjCode',
                          compType: 'Input',
                          name: 'handleObjCode',
                          parents: ['body', 'sameList'],
                          parentType: 'objectArray',
                          parentKey: '3-7',
                          key: '3-7-11',
                        },
                        {
                          code: 'handleObjType',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.sameList.handleObjType',
                          compType: 'Input',
                          name: 'handleObjType',
                          parents: ['body', 'sameList'],
                          parentType: 'objectArray',
                          parentKey: '3-7',
                          key: '3-7-12',
                        },
                        {
                          code: 'lastHandleTime',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.sameList.lastHandleTime',
                          compType: 'Input',
                          name: 'lastHandleTime',
                          parents: ['body', 'sameList'],
                          parentType: 'objectArray',
                          parentKey: '3-7',
                          key: '3-7-13',
                        },
                        {
                          code: 'workId',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.sameList.workId',
                          compType: 'Input',
                          name: 'workId',
                          parents: ['body', 'sameList'],
                          parentType: 'objectArray',
                          parentKey: '3-7',
                          key: '3-7-14',
                        },
                        {
                          code: 'workItemId',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.sameList.workItemId',
                          compType: 'Input',
                          name: 'workItemId',
                          parents: ['body', 'sameList'],
                          parentType: 'objectArray',
                          parentKey: '3-7',
                          key: '3-7-15',
                        },
                        {
                          code: 'tacheCode',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.sameList.tacheCode',
                          compType: 'Input',
                          name: 'tacheCode',
                          parents: ['body', 'sameList'],
                          parentType: 'objectArray',
                          parentKey: '3-7',
                          key: '3-7-16',
                        },
                        {
                          code: 'tacheName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.sameList.tacheName',
                          compType: 'Input',
                          name: 'tacheName',
                          parents: ['body', 'sameList'],
                          parentType: 'objectArray',
                          parentKey: '3-7',
                          key: '3-7-17',
                        },
                        {
                          code: 'tachePass',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.sameList.tachePass',
                          compType: 'Input',
                          name: 'tachePass',
                          parents: ['body', 'sameList'],
                          parentType: 'objectArray',
                          parentKey: '3-7',
                          key: '3-7-18',
                        },
                        {
                          code: 'tacheRemark',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.sameList.tacheRemark',
                          compType: 'Input',
                          name: 'tacheRemark',
                          parents: ['body', 'sameList'],
                          parentType: 'objectArray',
                          parentKey: '3-7',
                          key: '3-7-19',
                        },
                        {
                          code: 'handleStaffName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.sameList.handleStaffName',
                          compType: 'Input',
                          name: 'handleStaffName',
                          parents: ['body', 'sameList'],
                          parentType: 'objectArray',
                          parentKey: '3-7',
                          key: '3-7-20',
                        },
                        {
                          code: 'keyId',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.sameList.keyId',
                          compType: 'Input',
                          name: 'keyId',
                          parents: ['body', 'sameList'],
                          parentType: 'objectArray',
                          parentKey: '3-7',
                          key: '3-7-21',
                        },
                        {
                          code: 'title',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.sameList.title',
                          compType: 'Input',
                          name: 'title',
                          parents: ['body', 'sameList'],
                          parentType: 'objectArray',
                          parentKey: '3-7',
                          key: '3-7-22',
                        },
                      ],
                      _id: 'body.sameList',
                      compType: 'Input',
                      name: 'sameList',
                      parents: ['body'],
                      parentType: 'object',
                      parentKey: '3',
                      key: '3-7',
                    },
                  ],
                  _id: 'body',
                  compType: 'Input',
                  parents: [],
                  id: 'body',
                  dataKey: '478645_body',
                  key: '3',
                },
              ],
              _sourceName: '获取下一环节信息-tzp',
            },
            line_number: 4,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 166848007962867070,
                shielding: true,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '9264976',
                  pageJsonId: '763609',
                  dataSourceId: 166847609872405340,
                  dataSourceName: 'nextTacheList',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '347951',
                      code: 'resultData',
                      name: '下一处理环节列表',
                      type: 'array',
                      initialData: { type: 'static', value: '[]' },
                      value: {
                        type: ['context', '$reply_478645?.resultData$'],
                        code: '',
                      },
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: false,
                  otherObjectArrayOptions: {},
                },
                line_number: 5,
                callback1: [
                  {
                    type: 'reloadSelectData',
                    dataId: 166848010291970940,
                    shielding: true,
                    options: {
                      compId: 'Select_599981_437465',
                      compLib: 'comm',
                      pageJsonId: '763609',
                      compName: 'Select',
                      id: '8982066',
                      data: '$reply_478645?.resultData$',
                      labelKey: 'tacheName',
                      valueKey: 'tacheCode',
                    },
                    line_number: 6,
                    callback1: [
                      {
                        type: 'ifelse',
                        shielding: true,
                        condition: [
                          {
                            condId: '398549',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$reply_478645?.resultData.length$',
                              operate: '==',
                              manualValue: '1',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 166848010292010460,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 166858586457797570,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166858587412734400,
                                children: [],
                                todoOptions: [],
                                options: {
                                  compId: 'Select_599981_437465',
                                  compLib: 'comm',
                                  pageJsonId: '763609',
                                  compName: 'Select',
                                  id: '181516',
                                },
                                actionObjId: 'Select_599981_437465',
                                actionObjName: 'Select',
                                value: 'clearValue',
                                compLib: 'comm',
                                shielding: true,
                                line_number: 12,
                              },
                              {
                                dataName: 'action',
                                dataId: 166858587707128500,
                                children: [],
                                todoOptions: ['required', 'selectComp'],
                                options: {
                                  compId: 'Input_668689_2052015',
                                  compLib: 'comm',
                                  pageJsonId: '763609',
                                  compName: 'Input',
                                  id: '054882',
                                  required: 'true',
                                },
                                actionObjId: 'Input_668689_2052015',
                                actionObjName: 'Input',
                                value: 'setRequired',
                                compLib: 'comm',
                                shielding: true,
                                line_number: 13,
                              },
                              {
                                dataName: 'action',
                                dataId: 166858587973081400,
                                children: [],
                                todoOptions: ['visible', 'selectComp'],
                                options: {
                                  compId: 'Input_668689_2052015',
                                  compLib: 'comm',
                                  pageJsonId: '763609',
                                  compName: 'Input',
                                  id: '84054505',
                                  visible: 'true',
                                },
                                actionObjId: 'Input_668689_2052015',
                                actionObjName: 'Input',
                                value: 'setVisible',
                                compLib: 'comm',
                                shielding: true,
                                line_number: 14,
                              },
                            ],
                            condition: [],
                            shielding: true,
                            callback: [
                              {
                                type: 'clearValue',
                                dataId: 166858587412734400,
                                shielding: true,
                                options: {
                                  compId: 'Select_599981_437465',
                                  compLib: 'comm',
                                  pageJsonId: '763609',
                                  compName: 'Select',
                                  id: '181516',
                                },
                                line_number: 12,
                              },
                              {
                                type: 'setRequired',
                                dataId: 166858587707128500,
                                shielding: true,
                                options: {
                                  compId: 'Input_668689_2052015',
                                  compLib: 'comm',
                                  pageJsonId: '763609',
                                  compName: 'Input',
                                  id: '054882',
                                  required: 'true',
                                },
                                line_number: 13,
                              },
                              {
                                type: 'setVisible',
                                dataId: 166858587973081400,
                                shielding: true,
                                options: {
                                  compId: 'Input_668689_2052015',
                                  compLib: 'comm',
                                  pageJsonId: '763609',
                                  compName: 'Input',
                                  id: '84054505',
                                  visible: 'true',
                                },
                                line_number: 14,
                              },
                            ],
                          },
                        ],
                        line_number: 7,
                        callback1: [
                          {
                            type: 'setValue',
                            dataId: 166848010292012480,
                            shielding: true,
                            options: {
                              compId: 'Select_599981_437465',
                              compLib: 'comm',
                              pageJsonId: '763609',
                              compName: 'Select',
                              id: '711573',
                              valueList: {
                                Select_599981_437465:
                                  '$reply_478645?.resultData[0].tacheCode$',
                              },
                            },
                            line_number: 8,
                            callback1: [
                              {
                                type: 'callSelfFunc',
                                dataId: 166848010292063680,
                                shielding: true,
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '5411035',
                                  pageJsonId: '763609',
                                  customFuncName: 'nextStaffChange',
                                  customFuncParams: 'object',
                                },
                                line_number: 9,
                                callback1: [
                                  {
                                    type: 'console',
                                    dataId: 166848010292071070,
                                    shielding: true,
                                    options: {
                                      compId: 'debug',
                                      compName: 'system',
                                      id: '552466',
                                      pageJsonId: '763609',
                                      value: ['调用自定义下一环节处理成功'],
                                    },
                                    line_number: 10,
                                  },
                                ],
                                callback2: [
                                  {
                                    type: 'console',
                                    dataId: 166848010292074430,
                                    shielding: true,
                                    options: {
                                      compId: 'debug',
                                      compName: 'system',
                                      id: '890974',
                                      pageJsonId: '763609',
                                      value: ['调用自定义下一环节处理失败'],
                                    },
                                    line_number: 11,
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
                callback2: [],
              },
            ],
            callback2: [],
          },
          {
            type: 'customActionCode',
            dataId: 168636812450886820,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '479223',
              pageJsonId: '763609',
              actionTitle: '不同意返回合单列表',
              code: 'function main(data,state,success,fail){console.log("\\u662F\\u5426\\u540C\\u610F",value_290181);console.log("data.sameApproveOrdList",data.sameApproveOrdList);success(data.sameApproveOrdList.resultData)};',
            },
            line_number: 15,
            callback1: [
              {
                type: 'apiRequest',
                dataId: 168636871487689340,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '393158',
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
                              dataKey: '393158_root.body.endLevel',
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
                              _deletable: true,
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
                              dataKey: '393158_root.body.tachePass',
                              value: {
                                type: ['context', '$value_290181$'],
                                code: '',
                              },
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-4',
                              _deletable: true,
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
                              dataKey: '393158_root.body.workItemId',
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
                              _deletable: true,
                            },
                            {
                              code: 'sameList',
                              attrType: 'objectArray',
                              children: [],
                              _id: 'root.body.sameList',
                              compType: 'Input',
                              name: 'sameList',
                              parents: ['root', 'body'],
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-7',
                              id: 'root.body.sameList',
                              dataKey: '393158_root.body.sameList',
                              value: {
                                type: ['context', '$data_479223$'],
                                code: '',
                              },
                              _deletable: true,
                            },
                          ],
                          _id: 'root.body',
                          compType: 'Input',
                          parents: ['root'],
                          id: 'root.body',
                          dataKey: '393158_root.body',
                          parentType: 'object',
                          parentKey: '0',
                          key: '0-3',
                          _deletable: true,
                        },
                      ],
                      _id: 'root',
                      compType: 'Input',
                      isRoot: true,
                      parents: [],
                      key: '0',
                      id: 'root',
                      dataKey: '393158_root',
                      _deletable: true,
                    },
                    {
                      code: 'header',
                      name: '请求头参数',
                      attrType: 'object',
                      _id: 'header',
                      compType: 'Input',
                      parents: [],
                      key: '0',
                    },
                    {
                      code: 'path',
                      name: '请求路径参数',
                      attrType: 'object',
                      _id: 'path',
                      compType: 'Input',
                      parents: [],
                      key: '1',
                    },
                    {
                      code: 'query',
                      name: 'URL 参数',
                      attrType: 'object',
                      _id: 'query',
                      compType: 'Input',
                      parents: [],
                      key: '2',
                    },
                    {
                      code: 'body',
                      name: '请求体',
                      attrType: 'object',
                      children: [
                        {
                          code: 'endLevel',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.endLevel',
                          compType: 'Input',
                          name: 'endLevel',
                          parents: ['body'],
                          parentType: 'object',
                          parentKey: '3',
                          key: '3-0',
                        },
                        {
                          code: 'flowCode',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.flowCode',
                          compType: 'Input',
                          name: 'flowCode',
                          parents: ['body'],
                          parentType: 'object',
                          parentKey: '3',
                          key: '3-1',
                        },
                        {
                          code: 'orderType',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.orderType',
                          compType: 'Input',
                          name: 'orderType',
                          parents: ['body'],
                          parentType: 'object',
                          parentKey: '3',
                          key: '3-2',
                        },
                        {
                          code: 'tacheCode',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.tacheCode',
                          compType: 'Input',
                          name: 'tacheCode',
                          parents: ['body'],
                          parentType: 'object',
                          parentKey: '3',
                          key: '3-3',
                        },
                        {
                          code: 'tachePass',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.tachePass',
                          compType: 'Input',
                          name: 'tachePass',
                          parents: ['body'],
                          parentType: 'object',
                          parentKey: '3',
                          key: '3-4',
                        },
                        {
                          code: 'workId',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.workId',
                          compType: 'Input',
                          name: 'workId',
                          parents: ['body'],
                          parentType: 'object',
                          parentKey: '3',
                          key: '3-5',
                        },
                        {
                          code: 'workItemId',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.workItemId',
                          compType: 'Input',
                          name: 'workItemId',
                          parents: ['body'],
                          parentType: 'object',
                          parentKey: '3',
                          key: '3-6',
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
                              _id: 'body.sameList.meetingRemark',
                              compType: 'Input',
                              name: 'meetingRemark',
                              parents: ['body', 'sameList'],
                              parentType: 'objectArray',
                              parentKey: '3-7',
                              key: '3-7-0',
                            },
                            {
                              code: 'nextStaff',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.sameList.nextStaff',
                              compType: 'Input',
                              name: 'nextStaff',
                              parents: ['body', 'sameList'],
                              parentType: 'objectArray',
                              parentKey: '3-7',
                              key: '3-7-1',
                            },
                            {
                              code: 'nextStaffName',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.sameList.nextStaffName',
                              compType: 'Input',
                              name: 'nextStaffName',
                              parents: ['body', 'sameList'],
                              parentType: 'objectArray',
                              parentKey: '3-7',
                              key: '3-7-2',
                            },
                            {
                              code: 'nextTache',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.sameList.nextTache',
                              compType: 'Input',
                              name: 'nextTache',
                              parents: ['body', 'sameList'],
                              parentType: 'objectArray',
                              parentKey: '3-7',
                              key: '3-7-3',
                            },
                            {
                              code: 'approveOrdNbr',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.sameList.approveOrdNbr',
                              compType: 'Input',
                              name: 'approveOrdNbr',
                              parents: ['body', 'sameList'],
                              parentType: 'objectArray',
                              parentKey: '3-7',
                              key: '3-7-4',
                            },
                            {
                              code: 'busiObjStatus',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.sameList.busiObjStatus',
                              compType: 'Input',
                              name: 'busiObjStatus',
                              parents: ['body', 'sameList'],
                              parentType: 'objectArray',
                              parentKey: '3-7',
                              key: '3-7-5',
                            },
                            {
                              code: 'busiObjSubType',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.sameList.busiObjSubType',
                              compType: 'Input',
                              name: 'busiObjSubType',
                              parents: ['body', 'sameList'],
                              parentType: 'objectArray',
                              parentKey: '3-7',
                              key: '3-7-6',
                            },
                            {
                              code: 'createStaff',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.sameList.createStaff',
                              compType: 'Input',
                              name: 'createStaff',
                              parents: ['body', 'sameList'],
                              parentType: 'objectArray',
                              parentKey: '3-7',
                              key: '3-7-7',
                            },
                            {
                              code: 'createStaffName',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.sameList.createStaffName',
                              compType: 'Input',
                              name: 'createStaffName',
                              parents: ['body', 'sameList'],
                              parentType: 'objectArray',
                              parentKey: '3-7',
                              key: '3-7-8',
                            },
                            {
                              code: 'createTime',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.sameList.createTime',
                              compType: 'Input',
                              name: 'createTime',
                              parents: ['body', 'sameList'],
                              parentType: 'objectArray',
                              parentKey: '3-7',
                              key: '3-7-9',
                            },
                            {
                              code: 'effectDate',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.sameList.effectDate',
                              compType: 'Input',
                              name: 'effectDate',
                              parents: ['body', 'sameList'],
                              parentType: 'objectArray',
                              parentKey: '3-7',
                              key: '3-7-10',
                            },
                            {
                              code: 'handleObjCode',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.sameList.handleObjCode',
                              compType: 'Input',
                              name: 'handleObjCode',
                              parents: ['body', 'sameList'],
                              parentType: 'objectArray',
                              parentKey: '3-7',
                              key: '3-7-11',
                            },
                            {
                              code: 'handleObjType',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.sameList.handleObjType',
                              compType: 'Input',
                              name: 'handleObjType',
                              parents: ['body', 'sameList'],
                              parentType: 'objectArray',
                              parentKey: '3-7',
                              key: '3-7-12',
                            },
                            {
                              code: 'lastHandleTime',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.sameList.lastHandleTime',
                              compType: 'Input',
                              name: 'lastHandleTime',
                              parents: ['body', 'sameList'],
                              parentType: 'objectArray',
                              parentKey: '3-7',
                              key: '3-7-13',
                            },
                            {
                              code: 'workId',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.sameList.workId',
                              compType: 'Input',
                              name: 'workId',
                              parents: ['body', 'sameList'],
                              parentType: 'objectArray',
                              parentKey: '3-7',
                              key: '3-7-14',
                            },
                            {
                              code: 'workItemId',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.sameList.workItemId',
                              compType: 'Input',
                              name: 'workItemId',
                              parents: ['body', 'sameList'],
                              parentType: 'objectArray',
                              parentKey: '3-7',
                              key: '3-7-15',
                            },
                            {
                              code: 'tacheCode',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.sameList.tacheCode',
                              compType: 'Input',
                              name: 'tacheCode',
                              parents: ['body', 'sameList'],
                              parentType: 'objectArray',
                              parentKey: '3-7',
                              key: '3-7-16',
                            },
                            {
                              code: 'tacheName',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.sameList.tacheName',
                              compType: 'Input',
                              name: 'tacheName',
                              parents: ['body', 'sameList'],
                              parentType: 'objectArray',
                              parentKey: '3-7',
                              key: '3-7-17',
                            },
                            {
                              code: 'tachePass',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.sameList.tachePass',
                              compType: 'Input',
                              name: 'tachePass',
                              parents: ['body', 'sameList'],
                              parentType: 'objectArray',
                              parentKey: '3-7',
                              key: '3-7-18',
                            },
                            {
                              code: 'tacheRemark',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.sameList.tacheRemark',
                              compType: 'Input',
                              name: 'tacheRemark',
                              parents: ['body', 'sameList'],
                              parentType: 'objectArray',
                              parentKey: '3-7',
                              key: '3-7-19',
                            },
                            {
                              code: 'handleStaffName',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.sameList.handleStaffName',
                              compType: 'Input',
                              name: 'handleStaffName',
                              parents: ['body', 'sameList'],
                              parentType: 'objectArray',
                              parentKey: '3-7',
                              key: '3-7-20',
                            },
                            {
                              code: 'keyId',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.sameList.keyId',
                              compType: 'Input',
                              name: 'keyId',
                              parents: ['body', 'sameList'],
                              parentType: 'objectArray',
                              parentKey: '3-7',
                              key: '3-7-21',
                            },
                            {
                              code: 'title',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.sameList.title',
                              compType: 'Input',
                              name: 'title',
                              parents: ['body', 'sameList'],
                              parentType: 'objectArray',
                              parentKey: '3-7',
                              key: '3-7-22',
                            },
                          ],
                          _id: 'body.sameList',
                          compType: 'Input',
                          name: 'sameList',
                          parents: ['body'],
                          parentType: 'object',
                          parentKey: '3',
                          key: '3-7',
                        },
                      ],
                      _id: 'body',
                      compType: 'Input',
                      parents: [],
                      key: '3',
                    },
                  ],
                  _sourceName: '获取下一环节信息-tzp',
                },
                line_number: 16,
                callback1: [
                  {
                    type: 'setDataSource',
                    dataId: 168636871487669380,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '1571254',
                      pageJsonId: '763609',
                      dataSourceId: 166847609872405340,
                      dataSourceName: 'nextTacheList',
                      dataSourceRelType: 'custom',
                      dataSourceReloadFilter: [],
                      dataSourceSetValue: [
                        {
                          attrId: '347951',
                          code: 'resultData',
                          name: '下一处理环节列表',
                          type: 'array',
                          initialData: { type: 'static', value: '[]' },
                          value: {
                            type: ['context', '$reply_393158?.resultData$'],
                            code: '',
                          },
                        },
                      ],
                      operateType: 1,
                      onlySetPatch: false,
                      otherObjectArrayOptions: {},
                    },
                    line_number: 17,
                    callback1: [
                      {
                        type: 'reloadSelectData',
                        dataId: 168636871487617150,
                        options: {
                          compId: 'Select_599981_437465',
                          compLib: 'comm',
                          pageJsonId: '763609',
                          compName: 'Select',
                          id: '8511146',
                          data: '$reply_393158?.resultData$',
                          labelKey: 'tacheName',
                          valueKey: 'tacheCode',
                        },
                        line_number: 18,
                        callback1: [
                          {
                            type: 'ifelse',
                            condition: [
                              {
                                condId: '398549',
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context: '$reply_393158?.resultData.length$',
                                  operate: '==',
                                  manualValue: '1',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 168636871487654750,
                            elseIfs: [
                              {
                                dataName: 'elseIf',
                                dataId: 168636871487646000,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 168636871487603300,
                                    children: [],
                                    todoOptions: [],
                                    options: {
                                      compId: 'Select_599981_437465',
                                      compLib: 'comm',
                                      pageJsonId: '763609',
                                      compName: 'Select',
                                      id: '296643',
                                    },
                                    actionObjId: 'Select_599981_437465',
                                    actionObjName: 'Select',
                                    value: 'clearValue',
                                    compLib: 'comm',
                                    line_number: 24,
                                  },
                                  {
                                    dataName: 'action',
                                    dataId: 168636871487607940,
                                    children: [],
                                    todoOptions: ['required', 'selectComp'],
                                    options: {
                                      compId: 'Input_668689_2052015',
                                      compLib: 'comm',
                                      pageJsonId: '763609',
                                      compName: 'Input',
                                      id: '669293',
                                      required: 'true',
                                    },
                                    actionObjId: 'Input_668689_2052015',
                                    actionObjName: 'Input',
                                    value: 'setRequired',
                                    compLib: 'comm',
                                    line_number: 25,
                                  },
                                  {
                                    dataName: 'action',
                                    dataId: 168636871487665860,
                                    children: [],
                                    todoOptions: ['visible', 'selectComp'],
                                    options: {
                                      compId: 'Input_668689_2052015',
                                      compLib: 'comm',
                                      pageJsonId: '763609',
                                      compName: 'Input',
                                      id: '321443',
                                      visible: 'true',
                                    },
                                    actionObjId: 'Input_668689_2052015',
                                    actionObjName: 'Input',
                                    value: 'setVisible',
                                    compLib: 'comm',
                                    line_number: 26,
                                  },
                                ],
                                condition: [],
                                callback: [
                                  {
                                    type: 'clearValue',
                                    dataId: 168636871487603300,
                                    options: {
                                      compId: 'Select_599981_437465',
                                      compLib: 'comm',
                                      pageJsonId: '763609',
                                      compName: 'Select',
                                      id: '296643',
                                    },
                                    line_number: 24,
                                  },
                                  {
                                    type: 'setRequired',
                                    dataId: 168636871487607940,
                                    options: {
                                      compId: 'Input_668689_2052015',
                                      compLib: 'comm',
                                      pageJsonId: '763609',
                                      compName: 'Input',
                                      id: '669293',
                                      required: 'true',
                                    },
                                    line_number: 25,
                                  },
                                  {
                                    type: 'setVisible',
                                    dataId: 168636871487665860,
                                    options: {
                                      compId: 'Input_668689_2052015',
                                      compLib: 'comm',
                                      pageJsonId: '763609',
                                      compName: 'Input',
                                      id: '321443',
                                      visible: 'true',
                                    },
                                    line_number: 26,
                                  },
                                ],
                              },
                            ],
                            line_number: 19,
                            callback1: [
                              {
                                type: 'setValue',
                                dataId: 168636871487693980,
                                options: {
                                  compId: 'Select_599981_437465',
                                  compLib: 'comm',
                                  pageJsonId: '763609',
                                  compName: 'Select',
                                  id: '1135696',
                                  valueList: {
                                    Select_599981_437465:
                                      '$reply_393158?.resultData[0].tacheCode$',
                                  },
                                },
                                line_number: 20,
                                callback1: [
                                  {
                                    type: 'callSelfFunc',
                                    dataId: 168636871487614980,
                                    options: {
                                      compId: 'callSelfFunc',
                                      compName: 'system',
                                      id: '478122',
                                      pageJsonId: '763609',
                                      customFuncName: 'nextStaffChange',
                                      customFuncParams: 'object',
                                    },
                                    line_number: 21,
                                    callback1: [
                                      {
                                        type: 'console',
                                        dataId: 168636871487667840,
                                        options: {
                                          compId: 'debug',
                                          compName: 'system',
                                          id: '881436',
                                          pageJsonId: '763609',
                                          value: ['调用自定义下一环节处理成功'],
                                        },
                                        line_number: 22,
                                      },
                                    ],
                                    callback2: [
                                      {
                                        type: 'console',
                                        dataId: 168636871487641400,
                                        options: {
                                          compId: 'debug',
                                          compName: 'system',
                                          id: '5673847',
                                          pageJsonId: '763609',
                                          value: ['调用自定义下一环节处理失败'],
                                        },
                                        line_number: 23,
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                    callback2: [],
                  },
                  {
                    type: 'customActionCode',
                    dataId: 168637820015434530,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '851927',
                      pageJsonId: '763609',
                      actionTitle: '回填refuseNextStaff',
                      code: 'function main(data,state,success,fail){if(value_290181=="refuse"){var _reply_;data.refuseNextStaffNames=(_reply_=reply_393158)===null||_reply_===void 0?void 0:_reply_.resultData}};',
                    },
                    line_number: 27,
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
    eventDatagetValue59.params =
      [
        {
          title: '事件入参',
          name: 'options_873832',
          value: '$options_873832$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue59, { options_873832 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    nextStaffChange,
    tachePassChange,
  }));

  useEffect(() => {
    const eventDataapiRequest262: any = [
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
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '565413_body',
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
                  name: '属性',
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
                  name: '属性',
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
                  name: '属性',
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
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '876159',
                  code: 'workId',
                  name: '属性',
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
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$reply_565413?.resultData.workItemId$'],
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
            dataId: 166847897603896670,
            options: {
              compId: 'callSelfFunc',
              compName: 'system',
              id: '064045',
              pageJsonId: '763609',
              customFuncName: 'tachePassChange',
              customFuncParams: 'object',
            },
            line_number: 4,
            callback1: [],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest262.params = [] || [];
    CMDGenerator(eventDataapiRequest262, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest263: any = [
      {
        type: 'apiRequest',
        dataId: 166815394831893400,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '6149494',
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
              code: 'header',
              name: '请求头参数',
              attrType: 'object',
              _id: 'header',
              compType: 'Input',
              parents: [],
              id: 'header',
              dataKey: '6149494_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '6149494_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '6149494_query',
            },
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
                  _id: 'body.instNbr',
                  compType: 'Input',
                  name: 'instNbr',
                  parents: ['body'],
                  id: 'body.instNbr',
                  dataKey: '6149494_body.instNbr',
                  value: {
                    type: ['context', '$urlParam.approveOrdNbr$'],
                    code: '',
                  },
                },
                {
                  code: 'instId',
                  name: '新增节点',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  defaultValue: '',
                  _id: 'body.instId',
                  compType: 'Input',
                  parents: ['body'],
                  id: 'body.instId',
                  dataKey: '6149494_body.instId',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '6149494_body',
            },
          ],
          _sourceName: '审批单详情-hdb',
        },
        line_number: 5,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 166815397882898530,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '535255',
              pageJsonId: '763609',
              code: 'function main(data,state,success,fail){var _reply_,_reply_2,_reply_3,_detailData$svcCont$d,_detailData$svcCont$d2,_detailData$svcCont$d3;console.log("\\u5BA1\\u6279\\u8BE6\\u60C5\\u6570\\u636E\\uFF1A",JSON.parse((_reply_=reply_6149494)===null||_reply_===void 0?void 0:_reply_.resultData));var detailData=(_reply_2=reply_6149494)!==null&&_reply_2!==void 0&&_reply_2.resultData?JSON.parse((_reply_3=reply_6149494)===null||_reply_3===void 0?void 0:_reply_3.resultData):{};var approveGradeInfo=(detailData===null||detailData===void 0?void 0:(_detailData$svcCont$d=detailData.svcCont.data)===null||_detailData$svcCont$d===void 0?void 0:(_detailData$svcCont$d2=_detailData$svcCont$d.content)===null||_detailData$svcCont$d2===void 0?void 0:(_detailData$svcCont$d3=_detailData$svcCont$d2.itemList)===null||_detailData$svcCont$d3===void 0?void 0:_detailData$svcCont$d3.find(function(item){var _detailData$svcCont$d4,_detailData$svcCont$d5,_detailData$svcCont$d6;return(detailData===null||detailData===void 0?void 0:(_detailData$svcCont$d4=detailData.svcCont.data)===null||_detailData$svcCont$d4===void 0?void 0:(_detailData$svcCont$d5=_detailData$svcCont$d4.content)===null||_detailData$svcCont$d5===void 0?void 0:(_detailData$svcCont$d6=_detailData$svcCont$d5.approveInfo)===null||_detailData$svcCont$d6===void 0?void 0:_detailData$svcCont$d6.approveGrade)===item.approveGrade}))||{};success({approveGradeName:approveGradeInfo.approveGradeName||"",catalogCode:approveGradeInfo.catalogCode||""})};',
            },
            line_number: 6,
            callback1: [
              {
                type: 'setValue',
                dataId: 166815589058667870,
                options: {
                  compId: 'Input_941937_0593855',
                  compLib: 'comm',
                  pageJsonId: '763609',
                  compName: 'Input',
                  id: '465664',
                  valueList: {
                    Input_941937_0593855: '$data_535255.approveGradeName$',
                  },
                },
                line_number: 7,
                callback1: [],
              },
              {
                type: 'apiRequest',
                dataId: 166815594502807420,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '3684207',
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
                            type: ['context', '$data_535255$'],
                            code: 'catalogCode',
                          },
                        },
                      ],
                      _id: 'path',
                      compType: 'Input',
                      parents: [],
                      id: 'path',
                      dataKey: '3684207_path',
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
                    },
                  ],
                  _sourceName: '根据类目编码查询单个类目-tsm',
                },
                line_number: 8,
                callback1: [
                  {
                    type: 'sysSetValue',
                    dataId: 166815660206173380,
                    options: {
                      compId: ['Input_3386787_698768'],
                      compName: 'page',
                      id: '599529',
                      pageJsonId: '763609',
                      compid: ['Input_3386787_698768'],
                      valueList: {
                        Input_3386787_698768:
                          '$reply_3684207?.resultData.catalogName$',
                      },
                    },
                    line_number: 9,
                    callback1: [],
                  },
                  {
                    type: 'customActionCode',
                    dataId: 167512872324830600,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '8115233',
                      pageJsonId: '763609',
                      code: 'function main(data,state,success,fail){var _reply_;success("\\u5173\\u4E8E"+((_reply_=reply_3684207)===null||_reply_===void 0?void 0:_reply_.resultData.catalogName)+"\\u7684\\u5408\\u5E76\\u5BA1\\u6279\\u5355")};',
                      actionTitle: '审批单主题默认值',
                    },
                    line_number: 10,
                    callback1: [
                      {
                        type: 'setValue',
                        dataId: 167512879208948640,
                        options: {
                          compId: 'Input_765315_4158096',
                          compLib: 'comm',
                          pageJsonId: '763609',
                          compName: 'Input',
                          id: '662582',
                          valueList: { Input_765315_4158096: '$data_8115233$' },
                        },
                        line_number: 11,
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
    ];
    eventDataapiRequest263.params = [] || [];
    CMDGenerator(eventDataapiRequest263, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest264: any = [
      {
        type: 'apiRequest',
        dataId: 168639231601860830,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '057905',
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
        line_number: 12,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 168639235357803420,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '66267',
              pageJsonId: '763609',
              dataSourceId: 168639463280724800,
              dataSourceName: 'sameApproveOrdList',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  attrId: '0470507',
                  code: 'resultData',
                  name: '属性',
                  type: 'objectArray',
                  initialData: { type: 'static' },
                  showInput: true,
                  children: [
                    {
                      attrId: '602594',
                      code: 'approveOrdNbr',
                      name: '审批单号',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      parentCode: 'resultData',
                      parentKey: 'resultData',
                      _codePath: ['resultData', 'approveOrdNbr'],
                      _idpath: ['0470507', '602594'],
                    },
                    {
                      attrId: '4912104',
                      code: 'title',
                      name: '工单主题',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      parentCode: 'resultData',
                      parentKey: 'resultData',
                      _codePath: ['resultData', 'title'],
                      _idpath: ['0470507', '4912104'],
                    },
                    {
                      attrId: '536942',
                      code: 'tacheRemark',
                      name: '审批意见',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      parentCode: 'resultData',
                      parentKey: 'resultData',
                      _codePath: ['resultData', 'tacheRemark'],
                      _idpath: ['0470507', '536942'],
                    },
                    {
                      attrId: '9181334',
                      code: 'tachePass',
                      name: '是否同意',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      parentCode: 'resultData',
                      parentKey: 'resultData',
                      _codePath: ['resultData', 'tachePass'],
                      _idpath: ['0470507', '9181334'],
                    },
                    {
                      attrId: '997776',
                      code: 'nextStaffName',
                      name: '下一步处理人',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      parentCode: 'resultData',
                      parentKey: 'resultData',
                      _codePath: ['resultData', 'nextStaffName'],
                      _idpath: ['0470507', '997776'],
                    },
                    {
                      attrId: '212785',
                      code: 'lastHandleTime',
                      name: '最后处理时间',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      parentCode: 'resultData',
                      parentKey: 'resultData',
                      _codePath: ['resultData', 'lastHandleTime'],
                      _idpath: ['0470507', '212785'],
                    },
                    {
                      attrId: '185121',
                      code: 'createTime',
                      name: '创建时间',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      parentCode: 'resultData',
                      parentKey: 'resultData',
                      _codePath: ['resultData', 'createTime'],
                      _idpath: ['0470507', '185121'],
                    },
                    {
                      attrId: '867724',
                      code: 'keyId',
                      name: 'keyId',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      parentCode: 'resultData',
                      parentKey: 'resultData',
                      _codePath: ['resultData', 'keyId'],
                      _idpath: ['0470507', '867724'],
                    },
                  ],
                  value: {
                    type: ['context', '$reply_057905?.resultData$'],
                    code: '',
                  },
                  _codePath: ['resultData'],
                  _idpath: ['0470507'],
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
              targetDataSourcePaths: [],
            },
            line_number: 13,
            callback1: [],
            callback2: [],
          },
          {
            type: 'reloadTableData',
            dataId: 168639679963224300,
            options: {
              compId: 'Table_4346074',
              compLib: 'comm',
              pageJsonId: '763609',
              compName: 'Table',
              id: '8431008',
              data: '$reply_057905?.resultData$',
              total: '$reply_057905?.resultData.length$',
              current: '1',
            },
            line_number: 14,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest264.params = [] || [];
    CMDGenerator(eventDataapiRequest264, {}, 'apiRequest', {
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
          id: 'View_763609_1_8284215',
          uid: 'View_763609_1_8284215',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_763609_1_8284215')}
        {...injectData}
      >
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_905871_961943',
            uid: 'View_905871_961943',
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
          ref={(r: any) => refs.setComponentRef(r, 'View_905871_961943')}
          {...injectData}
        >
          <Text
            name={'合并审批单'}
            content={'合并审批单\n'}
            textType={'span'}
            version={'1.0'}
            showHtml={false}
            $$componentItem={{
              id: 'Text_236544_458361',
              uid: 'Text_236544_458361',
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
            ref={(r: any) => refs.setComponentRef(r, 'Text_236544_458361')}
            {...injectData}
          />
        </View>
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
            id: 'Card_733452_608588',
            uid: 'Card_733452_608588',
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
          ref={(r: any) => refs.setComponentRef(r, 'Card_733452_608588')}
          {...injectData}
        >
          <Row
            name={'行容器'}
            colSpan={24}
            gutterHorizontal={0}
            gutterVertical={0}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'Row_510227_934708',
              uid: 'Row_510227_934708',
              type: 'Row',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            ref={(r: any) => refs.setComponentRef(r, 'Row_510227_934708')}
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
              $$componentItem={{
                id: 'Form_8512707_5353887',
                uid: 'Form_8512707_5353887',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ padding: 'px px px px', margin: '0px 0px 8px 0px' }}
              ref={(r: any) => refs.setComponentRef(r, 'Form_8512707_5353887')}
              {...injectData}
            >
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
                required={true}
                placeholder={'请输入'}
                formItemIndex={0}
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
                  id: 'Input_765315_4158096',
                  uid: 'Input_765315_4158096',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_765315_4158096')
                }
                {...injectData}
              />
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
                formItemIndex={1}
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
                  id: 'Input_3386787_698768',
                  uid: 'Input_3386787_698768',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_3386787_698768')
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
                formItemIndex={2}
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
                  id: 'Input_941937_0593855',
                  uid: 'Input_941937_0593855',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_941937_0593855')
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
              id: 'Text_6986125_739866',
              uid: 'Text_6986125_739866',
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
            ref={(r: any) => refs.setComponentRef(r, 'Text_6986125_739866')}
            {...injectData}
          />
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_5773624_9763604',
              uid: 'View_5773624_9763604',
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
            ref={(r: any) => refs.setComponentRef(r, 'View_5773624_9763604')}
            {...injectData}
          >
            <Text
              name={'文本'}
              content={'注意'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_4031863_541239',
                uid: 'Text_4031863_541239',
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
              ref={(r: any) => refs.setComponentRef(r, 'Text_4031863_541239')}
              {...injectData}
            />
            <Text
              name={'文本'}
              content={'：请先查看每条审批单详情后，再进行批量审批操作'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_929211_226478',
                uid: 'Text_929211_226478',
                type: 'Text',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ fontSize: '14px', lineHeight: '24px', color: '#1c242e' }}
              ref={(r: any) => refs.setComponentRef(r, 'Text_929211_226478')}
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
              id: 'Table_4346074',
              uid: 'Table_4346074',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            onRowDetail={(rowId: any, row: any, index: any) => {
              const eventDatashowCustomModal130: any = [
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
              eventDatashowCustomModal130.params =
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
                eventDatashowCustomModal130,
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
            onRowDelete={(rowId: any, row: any, index: any) => {
              const eventDatacustomActionCode513: any = [
                {
                  type: 'customActionCode',
                  dataId: 168639723081076450,
                  options: {
                    compId: 'customActionCode',
                    compName: 'page',
                    id: '411828',
                    pageJsonId: '763609',
                    code: 'function main(data,state,success,fail){data.sameApproveOrdList.resultData=data.sameApproveOrdList.resultData.filter(function(item){return item.keyId!==rowId});success(data.sameApproveOrdList.resultData)};',
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'reloadTableData',
                      dataId: 168639725521747420,
                      options: {
                        compId: 'Table_4346074',
                        compLib: 'comm',
                        pageJsonId: '763609',
                        compName: 'Table',
                        id: '291122',
                        data: '$data_411828$',
                        total: '$data_411828.length$',
                        current: '1',
                      },
                      line_number: 2,
                      callback1: [],
                    },
                  ],
                  callback2: [],
                },
              ];
              eventDatacustomActionCode513.params =
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
                eventDatacustomActionCode513,
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
            ref={(r: any) => refs.setComponentRef(r, 'Table_4346074')}
            {...injectData}
          />
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_028577_482375',
              uid: 'View_028577_482375',
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
            ref={(r: any) => refs.setComponentRef(r, 'View_028577_482375')}
            {...injectData}
          >
            <Text
              name={'文本'}
              content={'操作说明'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_228554_771548',
                uid: 'Text_228554_771548',
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
              ref={(r: any) => refs.setComponentRef(r, 'Text_228554_771548')}
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
                id: 'Text_0227405_491373',
                uid: 'Text_0227405_491373',
                type: 'Text',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ fontSize: '14px', lineHeight: '24px', color: '#999' }}
              ref={(r: any) => refs.setComponentRef(r, 'Text_0227405_491373')}
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
            id: 'Card_5223316_930808',
            uid: 'Card_5223316_930808',
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
          ref={(r: any) => refs.setComponentRef(r, 'Card_5223316_930808')}
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
              id: 'Form_495566_5382465',
              uid: 'Form_495566_5382465',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_495566_5382465')}
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
                id: 'Radio_8525737_018091',
                uid: 'Radio_8525737_018091',
                type: 'Radio',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDataclearValue120: any = [
                  {
                    type: 'clearValue',
                    dataId: 166728800448490780,
                    options: {
                      compId: 'Select_599981_437465',
                      compLib: 'comm',
                      pageJsonId: '763609',
                      compName: 'Select',
                      id: '6334512',
                    },
                    line_number: 1,
                  },
                ];
                eventDataclearValue120.params =
                  [
                    {
                      title: '单选组取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDataclearValue120, { e }, 'clearValue', {
                  id: 'clearValue',
                  name: 'clearValue',
                  type: 'clearValue',
                  platform: 'pc',
                });
                const eventDataclearValue121: any = [
                  {
                    type: 'clearValue',
                    dataId: 166806688391316030,
                    options: {
                      compId: 'Input_668689_2052015',
                      compLib: 'comm',
                      pageJsonId: '763609',
                      compName: 'Input',
                      id: '07819',
                    },
                    line_number: 2,
                  },
                ];
                eventDataclearValue121.params =
                  [
                    {
                      title: '单选组取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDataclearValue121, { e }, 'clearValue', {
                  id: 'clearValue',
                  name: 'clearValue',
                  type: 'clearValue',
                  platform: 'pc',
                });
                const eventDataclearValue122: any = [
                  {
                    type: 'clearValue',
                    dataId: 166806688820622370,
                    options: {
                      compId: 'Input_9206452_698968',
                      compLib: 'comm',
                      pageJsonId: '763609',
                      compName: 'Input',
                      id: '470756',
                    },
                    line_number: 3,
                  },
                ];
                eventDataclearValue122.params =
                  [
                    {
                      title: '单选组取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDataclearValue122, { e }, 'clearValue', {
                  id: 'clearValue',
                  name: 'clearValue',
                  type: 'clearValue',
                  platform: 'pc',
                });
                const eventDatacallSelfFunc397: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166847891157282400,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '5526315',
                      pageJsonId: '763609',
                      customFuncName: 'tachePassChange',
                    },
                    line_number: 4,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc397.params =
                  [
                    {
                      title: '单选组取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc397, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Radio_8525737_018091')}
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
              dataSource={{ selectedService: {} }}
              $$componentItem={{
                id: 'Select_599981_437465',
                uid: 'Select_599981_437465',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatacallSelfFunc398: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166842858781514600,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '7204474',
                      pageJsonId: '763609',
                      customFuncName: 'nextStaffChange',
                      customFuncParams: 'object',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc398.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDatacallSelfFunc398, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Select_599981_437465')}
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
                id: 'Input_668689_2052015',
                uid: 'Input_668689_2052015',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={true}
              isFormRootChild={true}
              onIconClick={() => {
                const eventDatagetValue181: any = [
                  {
                    type: 'getValue',
                    dataId: 166849190564490050,
                    options: {
                      compId: 'Select_599981_437465',
                      compLib: 'comm',
                      pageJsonId: '763609',
                      compName: 'Select',
                      id: '5302174',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'console',
                        dataId: 166849192132631940,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '6364867',
                          pageJsonId: '763609',
                          value: ['环节选中数据', '$value_5302174$'],
                        },
                        line_number: 2,
                      },
                      {
                        type: 'customActionCode',
                        dataId: 166849211831803170,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '1484705',
                          pageJsonId: '763609',
                          code: 'function main(data,state,success,fail){var _data$nextTacheList$r;console.log("nextTacheList",data.nextTacheList);console.log("selectedData",value_5302174);var selectedItem=(_data$nextTacheList$r=data.nextTacheList.resultData)===null||_data$nextTacheList$r===void 0?void 0:_data$nextTacheList$r.find(function(item){return item.tacheCode===value_5302174});console.log("selectedItem",selectedItem);if(selectedItem!==null&&selectedItem!==void 0&&selectedItem.tacheCode){success(selectedItem.popupType)}else{fail()}};',
                        },
                        line_number: 3,
                        callback1: [
                          {
                            type: 'ifelse',
                            condition: [
                              {
                                condId: '827367',
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context: '$data_1484705$',
                                  operate: '==',
                                  manualValue: 'post',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 166849211831862850,
                            elseIfs: [
                              {
                                dataName: 'elseIf',
                                dataId: 166849211831825020,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 166849211831827870,
                                    children: [
                                      {
                                        dataName: 'callback',
                                        dataId: 166849211831892160,
                                        children: [
                                          {
                                            dataName: 'action',
                                            dataId: 166849211831889700,
                                            children: [],
                                            todoOptions: ['valueArray'],
                                            options: {
                                              compId: 'debug',
                                              compName: 'system',
                                              id: '35927',
                                              pageJsonId: '763609',
                                              value: [
                                                '下一步处理人信息',
                                                '$okData_3795577$',
                                              ],
                                            },
                                            actionObjId: 'debug',
                                            actionObjName: 'system',
                                            value: 'console',
                                            elseIfs: [],
                                            line_number: 9,
                                          },
                                          {
                                            dataName: 'action',
                                            dataId: 166849211831891500,
                                            children: [
                                              {
                                                dataName: 'callback',
                                                dataId: 166849211831861440,
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
                                                'Input_668689_2052015',
                                                'Input_9206452_698968',
                                              ],
                                              compLib: 'comm',
                                              pageJsonId: '763609',
                                              compName: 'Input',
                                              id: '34938',
                                              valueList: {
                                                Input_668689_2052015:
                                                  '$okData_3795577.staffSelect.userName$',
                                                Input_9206452_698968:
                                                  '$okData_3795577.staffSelect.userCode$',
                                              },
                                              compid: [
                                                'Input_668689_2052015',
                                                'Input_9206452_698968',
                                              ],
                                            },
                                            actionObjId: 'Input_668689_2052015',
                                            actionObjName: 'Input',
                                            value: 'setValue',
                                            compLib: 'comm',
                                            elseIfs: [],
                                            line_number: 10,
                                          },
                                        ],
                                        value: 'callback1',
                                        params: [
                                          {
                                            title: '弹窗确认回调参数',
                                            name: 'okData_5197527',
                                            value: '$okData_3795577$',
                                          },
                                        ],
                                        elseIfs: [],
                                      },
                                      {
                                        dataName: 'callback',
                                        dataId: 166849211831812580,
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
                                      id: '3795577',
                                      pageJsonId: '763609',
                                      modalname: '/audit/selectoneuser',
                                      pageId: '881887068344979456',
                                      paramsObj: {
                                        flowCode:
                                          '$data.flowItemSimpleInfoLocal.flowCode$',
                                        tacheCode: '$value_5302174$',
                                        workItemId:
                                          '$data.flowItemSimpleInfoLocal.workItemId$',
                                      },
                                      paramsObjKeyValueMap: {
                                        flowCode:
                                          '$data.flowItemSimpleInfoLocal.flowCode$',
                                        tacheCode: '$value_5302174$',
                                        workItemId:
                                          '$data.flowItemSimpleInfoLocal.workItemId$',
                                      },
                                      modalPath: '/audit/selectoneuser',
                                    },
                                    actionObjId: 'showCustomModal',
                                    actionObjName: 'page',
                                    value: 'showCustomModal',
                                    elseIfs: [],
                                    line_number: 8,
                                  },
                                ],
                                condition: [],
                                elseIfs: [],
                                callback: [
                                  {
                                    type: 'showCustomModal',
                                    dataId: 166849211831827870,
                                    options: {
                                      compId: 'showCustomModal',
                                      compName: 'page',
                                      id: '3795577',
                                      pageJsonId: '763609',
                                      modalname: '/audit/selectoneuser',
                                      pageId: '881887068344979456',
                                      paramsObj: {
                                        flowCode:
                                          '$data.flowItemSimpleInfoLocal.flowCode$',
                                        tacheCode: '$value_5302174$',
                                        workItemId:
                                          '$data.flowItemSimpleInfoLocal.workItemId$',
                                      },
                                      paramsObjKeyValueMap: {
                                        flowCode:
                                          '$data.flowItemSimpleInfoLocal.flowCode$',
                                        tacheCode: '$value_5302174$',
                                        workItemId:
                                          '$data.flowItemSimpleInfoLocal.workItemId$',
                                      },
                                      modalPath: '/audit/selectoneuser',
                                    },
                                    line_number: 8,
                                    callback1: [
                                      {
                                        type: 'console',
                                        dataId: 166849211831889700,
                                        options: {
                                          compId: 'debug',
                                          compName: 'system',
                                          id: '35927',
                                          pageJsonId: '763609',
                                          value: [
                                            '下一步处理人信息',
                                            '$okData_3795577$',
                                          ],
                                        },
                                        line_number: 9,
                                      },
                                      {
                                        type: 'setValue',
                                        dataId: 166849211831891500,
                                        options: {
                                          compId: [
                                            'Input_668689_2052015',
                                            'Input_9206452_698968',
                                          ],
                                          compLib: 'comm',
                                          pageJsonId: '763609',
                                          compName: 'Input',
                                          id: '34938',
                                          valueList: {
                                            Input_668689_2052015:
                                              '$okData_3795577.staffSelect.userName$',
                                            Input_9206452_698968:
                                              '$okData_3795577.staffSelect.userCode$',
                                          },
                                          compid: [
                                            'Input_668689_2052015',
                                            'Input_9206452_698968',
                                          ],
                                        },
                                        line_number: 10,
                                        callback1: [],
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
                                type: 'showCustomModal',
                                dataId: 166849211831836380,
                                options: {
                                  compId: 'showCustomModal',
                                  compName: 'page',
                                  id: '756265',
                                  pageJsonId: '763609',
                                  modalname: '/audit/selectonepostuser',
                                  pageId: '897014700989980672',
                                  paramsObj: {
                                    flowCode:
                                      '$data.flowItemSimpleInfoLocal.flowCode$',
                                    tacheCode: '$value_5302174$',
                                  },
                                  paramsObjKeyValueMap: {
                                    flowCode:
                                      '$data.flowItemSimpleInfoLocal.flowCode$',
                                    tacheCode: '$value_5302174$',
                                  },
                                  modalPath: '/audit/selectonepostuser',
                                },
                                line_number: 5,
                                callback1: [
                                  {
                                    type: 'console',
                                    dataId: 166849211831878100,
                                    options: {
                                      compId: 'debug',
                                      compName: 'system',
                                      id: '563427',
                                      pageJsonId: '763609',
                                      value: [
                                        '岗位处理人信息',
                                        '$okData_756265$',
                                      ],
                                    },
                                    line_number: 6,
                                  },
                                  {
                                    type: 'setValue',
                                    dataId: 166849211831827420,
                                    options: {
                                      compId: [
                                        'Input_668689_2052015',
                                        'Input_9206452_698968',
                                      ],
                                      compLib: 'comm',
                                      pageJsonId: '763609',
                                      compName: 'Input',
                                      id: '01824',
                                      valueList: {
                                        Input_668689_2052015:
                                          '$okData_756265.userName$',
                                        Input_9206452_698968:
                                          '$okData_756265.userCode$',
                                      },
                                      compid: [
                                        'Input_668689_2052015',
                                        'Input_9206452_698968',
                                      ],
                                    },
                                    line_number: 7,
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
                eventDatagetValue181.params = [] || [];
                CMDGenerator(eventDatagetValue181, {}, 'getValue', {
                  id: 'getValue',
                  name: 'getValue',
                  type: 'getValue',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_668689_2052015')}
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
                id: 'Input_9206452_698968',
                uid: 'Input_9206452_698968',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_9206452_698968')}
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
              required={true}
              placeholder={'请输入'}
              formItemIndex={4}
              fieldName={'tacheRemark'}
              $$componentItem={{
                id: 'TextArea_2382214_3272195',
                uid: 'TextArea_2382214_3272195',
                type: 'TextArea',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'TextArea_2382214_3272195')
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
                id: 'Button_8864054_286047',
                uid: 'Button_8864054_286047',
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
                const eventDatashowCustomModal132: any = [
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
                          compId: 'TextArea_2382214_3272195',
                          compLib: 'comm',
                          pageJsonId: '763609',
                          compName: 'TextArea',
                          id: '066216',
                          value: '$okData_710146.handleComment$',
                        },
                        line_number: 3,
                        callback1: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatashowCustomModal132.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatashowCustomModal132,
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
              ref={(r: any) => refs.setComponentRef(r, 'Button_8864054_286047')}
              {...injectData}
            />
          </Form>
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_582992_8451582',
              uid: 'View_582992_8451582',
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
            ref={(r: any) => refs.setComponentRef(r, 'View_582992_8451582')}
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
                id: 'Button_614168_6154713',
                uid: 'Button_614168_6154713',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ width: 'fit-content', margin: '8px 8px 8px 8px' }}
              onClick={(e: any) => {
                const eventDatagetTableSelected52: any = [
                  {
                    type: 'getTableSelected',
                    dataId: 168639641482553860,
                    options: {
                      compId: 'Table_4346074',
                      compLib: 'comm',
                      pageJsonId: '763609',
                      compName: 'Table',
                      id: '3843455',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            options: {
                              context: '$selectedRows_3843455$',
                              operate: 'empty',
                            },
                            condId: '98881',
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 168639642524210370,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 168639642524284770,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 168639642524289800,
                                children: [
                                  {
                                    dataName: 'callback',
                                    dataId: 168639642524262300,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 168639642524204540,
                                        children: [
                                          {
                                            dataName: 'callback',
                                            dataId: 168639642524208,
                                            children: [
                                              {
                                                dataName: 'action',
                                                dataId: 168639672070502700,
                                                children: [
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 168639672070503970,
                                                    children: [
                                                      {
                                                        dataName: 'action',
                                                        dataId: 168639744161190340,
                                                        children: [],
                                                        todoOptions: [],
                                                        options: {
                                                          compId:
                                                            'Table_4346074',
                                                          compLib: 'comm',
                                                          pageJsonId: '763609',
                                                          compName: 'Table',
                                                          id: '884008',
                                                        },
                                                        actionObjId:
                                                          'Table_4346074',
                                                        actionObjName: 'Table',
                                                        value:
                                                          'clearTableSelected',
                                                        compLib: 'comm',
                                                        line_number: 9,
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
                                                  compId: 'Table_4346074',
                                                  compLib: 'comm',
                                                  pageJsonId: '763609',
                                                  compName: 'Table',
                                                  id: '5196683',
                                                  data: '$data_670553$',
                                                  total: '$data_670553.length$',
                                                  current: '1',
                                                },
                                                actionObjId: 'Table_4346074',
                                                actionObjName: 'Table',
                                                value: 'reloadTableData',
                                                compLib: 'comm',
                                                line_number: 8,
                                              },
                                              {
                                                dataName: 'action',
                                                dataId: 168639642524340400,
                                                children: [],
                                                todoOptions: [],
                                                options: {
                                                  compId: 'Form_495566_5382465',
                                                  compLib: 'comm',
                                                  pageJsonId: '763609',
                                                  compName: 'Form',
                                                  id: '516372',
                                                },
                                                actionObjId:
                                                  'Form_495566_5382465',
                                                actionObjName: 'Form',
                                                value: 'resetCurrentForm',
                                                compLib: 'comm',
                                                line_number: 10,
                                              },
                                              {
                                                dataName: 'action',
                                                dataId: 168639642524394800,
                                                children: [
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 168639642524333500,
                                                    children: [],
                                                    value: 'callback1',
                                                    params: [],
                                                  },
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 168639642524349540,
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
                                                  id: '5309444',
                                                  pageJsonId: '763609',
                                                  customFuncName:
                                                    'tachePassChange',
                                                  customFuncParams: 'object',
                                                },
                                                actionObjId: 'callSelfFunc',
                                                actionObjName: 'system',
                                                value: 'callSelfFunc',
                                                line_number: 11,
                                              },
                                            ],
                                            value: 'callback1',
                                            params: [],
                                          },
                                          {
                                            dataName: 'callback',
                                            dataId: 168639642524306750,
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
                                          id: '670553',
                                          pageJsonId: '763609',
                                          actionTitle:
                                            '根据表单值更新选中表格数据',
                                          code: 'function main(data,state,success,fail){var _data$refuseNextStaff,_data$sameApproveOrdL,_data$sameApproveOrdL2;console.log("data",data);console.log("selectedRows",selectedRows_3843455);console.log("Form_495566_5382465",Form_495566_5382465);console.log("data.refuseNextStaffNames",data.refuseNextStaffNames);var currentRefuseNextStaffNames=((_data$refuseNextStaff=data.refuseNextStaffNames.find(function(item){return item.tacheCode===Form_495566_5382465.nextTache}))===null||_data$refuseNextStaff===void 0?void 0:_data$refuseNextStaff.sameList)||[];var _toDoList=(data===null||data===void 0?void 0:(_data$sameApproveOrdL=data.sameApproveOrdList)===null||_data$sameApproveOrdL===void 0?void 0:(_data$sameApproveOrdL2=_data$sameApproveOrdL.resultData)===null||_data$sameApproveOrdL2===void 0?void 0:_data$sameApproveOrdL2.map(function(item){var _selectedRows_,_Form_495566_7;var selectedIndex=(_selectedRows_=selectedRows_3843455)===null||_selectedRows_===void 0?void 0:_selectedRows_.findIndex(function(selected){return selected.keyId===item.keyId});if(selectedIndex>-1){var _Form_495566_,_Form_495566_2,_Form_495566_3,_Form_495566_4,_Form_495566_5,_Form_495566_6;item.tachePass=(_Form_495566_=Form_495566_5382465)===null||_Form_495566_===void 0?void 0:_Form_495566_.tachePass;item.tacheRemark=(_Form_495566_2=Form_495566_5382465)===null||_Form_495566_2===void 0?void 0:_Form_495566_2.tacheRemark;item.nextStaff=(_Form_495566_3=Form_495566_5382465)===null||_Form_495566_3===void 0?void 0:_Form_495566_3.nextStaff;item.nextStaffName=(_Form_495566_4=Form_495566_5382465)===null||_Form_495566_4===void 0?void 0:_Form_495566_4.nextStaffName;item.nextTache=(_Form_495566_5=Form_495566_5382465)===null||_Form_495566_5===void 0?void 0:_Form_495566_5.nextTache;if(((_Form_495566_6=Form_495566_5382465)===null||_Form_495566_6===void 0?void 0:_Form_495566_6.tachePass)==="refuse"){var currentRefuseNextStaffItem=currentRefuseNextStaffNames===null||currentRefuseNextStaffNames===void 0?void 0:currentRefuseNextStaffNames.find(function(refuseNextStaffNamesItem){return refuseNextStaffNamesItem.keyId===item.keyId});if(currentRefuseNextStaffItem){item.nextStaff=currentRefuseNextStaffItem===null||currentRefuseNextStaffItem===void 0?void 0:currentRefuseNextStaffItem.nextStaff;item.nextStaffName=currentRefuseNextStaffItem===null||currentRefuseNextStaffItem===void 0?void 0:currentRefuseNextStaffItem.nextStaffName}}return item}else if(((_Form_495566_7=Form_495566_5382465)===null||_Form_495566_7===void 0?void 0:_Form_495566_7.tachePass)==="pass"&&item.tachePass==="pass"){var _Form_495566_8,_Form_495566_9,_Form_495566_10,_Form_495566_11,_Form_495566_12;item.tachePass=(_Form_495566_8=Form_495566_5382465)===null||_Form_495566_8===void 0?void 0:_Form_495566_8.tachePass;item.tacheRemark=(_Form_495566_9=Form_495566_5382465)===null||_Form_495566_9===void 0?void 0:_Form_495566_9.tacheRemark;item.nextStaff=(_Form_495566_10=Form_495566_5382465)===null||_Form_495566_10===void 0?void 0:_Form_495566_10.nextStaff;item.nextStaffName=(_Form_495566_11=Form_495566_5382465)===null||_Form_495566_11===void 0?void 0:_Form_495566_11.nextStaffName;item.nextTache=(_Form_495566_12=Form_495566_5382465)===null||_Form_495566_12===void 0?void 0:_Form_495566_12.nextTache;return item}return item}))||[];console.log("_toDoList",_toDoList);if(_toDoList.length){data.sameApproveOrdList.resultData=_toDoList;console.log("data.sameApproveOrdList",data.sameApproveOrdList);success(_toDoList)}else{fail()}};',
                                        },
                                        actionObjId: 'customActionCode',
                                        actionObjName: 'page',
                                        value: 'customActionCode',
                                        line_number: 7,
                                      },
                                    ],
                                    value: 'callback1',
                                    params: [],
                                  },
                                  {
                                    dataName: 'callback',
                                    dataId: 168639642524345570,
                                    children: [],
                                    value: 'callback2',
                                    params: [],
                                  },
                                ],
                                todoOptions: [],
                                options: {
                                  compId: 'Form_495566_5382465',
                                  compLib: 'comm',
                                  pageJsonId: '763609',
                                  compName: 'Form',
                                  id: '026383',
                                },
                                actionObjId: 'Form_495566_5382465',
                                actionObjName: 'Form',
                                value: 'validateCurrentForm',
                                compLib: 'comm',
                                line_number: 6,
                              },
                            ],
                            condition: [],
                            callback: [
                              {
                                type: 'validateCurrentForm',
                                dataId: 168639642524289800,
                                options: {
                                  compId: 'Form_495566_5382465',
                                  compLib: 'comm',
                                  pageJsonId: '763609',
                                  compName: 'Form',
                                  id: '026383',
                                },
                                line_number: 6,
                                callback1: [
                                  {
                                    type: 'customActionCode',
                                    dataId: 168639642524204540,
                                    options: {
                                      compId: 'customActionCode',
                                      compName: 'page',
                                      id: '670553',
                                      pageJsonId: '763609',
                                      actionTitle: '根据表单值更新选中表格数据',
                                      code: 'function main(data,state,success,fail){var _data$refuseNextStaff,_data$sameApproveOrdL,_data$sameApproveOrdL2;console.log("data",data);console.log("selectedRows",selectedRows_3843455);console.log("Form_495566_5382465",Form_495566_5382465);console.log("data.refuseNextStaffNames",data.refuseNextStaffNames);var currentRefuseNextStaffNames=((_data$refuseNextStaff=data.refuseNextStaffNames.find(function(item){return item.tacheCode===Form_495566_5382465.nextTache}))===null||_data$refuseNextStaff===void 0?void 0:_data$refuseNextStaff.sameList)||[];var _toDoList=(data===null||data===void 0?void 0:(_data$sameApproveOrdL=data.sameApproveOrdList)===null||_data$sameApproveOrdL===void 0?void 0:(_data$sameApproveOrdL2=_data$sameApproveOrdL.resultData)===null||_data$sameApproveOrdL2===void 0?void 0:_data$sameApproveOrdL2.map(function(item){var _selectedRows_,_Form_495566_7;var selectedIndex=(_selectedRows_=selectedRows_3843455)===null||_selectedRows_===void 0?void 0:_selectedRows_.findIndex(function(selected){return selected.keyId===item.keyId});if(selectedIndex>-1){var _Form_495566_,_Form_495566_2,_Form_495566_3,_Form_495566_4,_Form_495566_5,_Form_495566_6;item.tachePass=(_Form_495566_=Form_495566_5382465)===null||_Form_495566_===void 0?void 0:_Form_495566_.tachePass;item.tacheRemark=(_Form_495566_2=Form_495566_5382465)===null||_Form_495566_2===void 0?void 0:_Form_495566_2.tacheRemark;item.nextStaff=(_Form_495566_3=Form_495566_5382465)===null||_Form_495566_3===void 0?void 0:_Form_495566_3.nextStaff;item.nextStaffName=(_Form_495566_4=Form_495566_5382465)===null||_Form_495566_4===void 0?void 0:_Form_495566_4.nextStaffName;item.nextTache=(_Form_495566_5=Form_495566_5382465)===null||_Form_495566_5===void 0?void 0:_Form_495566_5.nextTache;if(((_Form_495566_6=Form_495566_5382465)===null||_Form_495566_6===void 0?void 0:_Form_495566_6.tachePass)==="refuse"){var currentRefuseNextStaffItem=currentRefuseNextStaffNames===null||currentRefuseNextStaffNames===void 0?void 0:currentRefuseNextStaffNames.find(function(refuseNextStaffNamesItem){return refuseNextStaffNamesItem.keyId===item.keyId});if(currentRefuseNextStaffItem){item.nextStaff=currentRefuseNextStaffItem===null||currentRefuseNextStaffItem===void 0?void 0:currentRefuseNextStaffItem.nextStaff;item.nextStaffName=currentRefuseNextStaffItem===null||currentRefuseNextStaffItem===void 0?void 0:currentRefuseNextStaffItem.nextStaffName}}return item}else if(((_Form_495566_7=Form_495566_5382465)===null||_Form_495566_7===void 0?void 0:_Form_495566_7.tachePass)==="pass"&&item.tachePass==="pass"){var _Form_495566_8,_Form_495566_9,_Form_495566_10,_Form_495566_11,_Form_495566_12;item.tachePass=(_Form_495566_8=Form_495566_5382465)===null||_Form_495566_8===void 0?void 0:_Form_495566_8.tachePass;item.tacheRemark=(_Form_495566_9=Form_495566_5382465)===null||_Form_495566_9===void 0?void 0:_Form_495566_9.tacheRemark;item.nextStaff=(_Form_495566_10=Form_495566_5382465)===null||_Form_495566_10===void 0?void 0:_Form_495566_10.nextStaff;item.nextStaffName=(_Form_495566_11=Form_495566_5382465)===null||_Form_495566_11===void 0?void 0:_Form_495566_11.nextStaffName;item.nextTache=(_Form_495566_12=Form_495566_5382465)===null||_Form_495566_12===void 0?void 0:_Form_495566_12.nextTache;return item}return item}))||[];console.log("_toDoList",_toDoList);if(_toDoList.length){data.sameApproveOrdList.resultData=_toDoList;console.log("data.sameApproveOrdList",data.sameApproveOrdList);success(_toDoList)}else{fail()}};',
                                    },
                                    line_number: 7,
                                    callback1: [
                                      {
                                        type: 'reloadTableData',
                                        dataId: 168639672070502700,
                                        options: {
                                          compId: 'Table_4346074',
                                          compLib: 'comm',
                                          pageJsonId: '763609',
                                          compName: 'Table',
                                          id: '5196683',
                                          data: '$data_670553$',
                                          total: '$data_670553.length$',
                                          current: '1',
                                        },
                                        line_number: 8,
                                        callback1: [
                                          {
                                            type: 'clearTableSelected',
                                            dataId: 168639744161190340,
                                            options: {
                                              compId: 'Table_4346074',
                                              compLib: 'comm',
                                              pageJsonId: '763609',
                                              compName: 'Table',
                                              id: '884008',
                                            },
                                            line_number: 9,
                                          },
                                        ],
                                      },
                                      {
                                        type: 'resetCurrentForm',
                                        dataId: 168639642524340400,
                                        options: {
                                          compId: 'Form_495566_5382465',
                                          compLib: 'comm',
                                          pageJsonId: '763609',
                                          compName: 'Form',
                                          id: '516372',
                                        },
                                        line_number: 10,
                                      },
                                      {
                                        type: 'callSelfFunc',
                                        dataId: 168639642524394800,
                                        options: {
                                          compId: 'callSelfFunc',
                                          compName: 'system',
                                          id: '5309444',
                                          pageJsonId: '763609',
                                          customFuncName: 'tachePassChange',
                                          customFuncParams: 'object',
                                        },
                                        line_number: 11,
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
                        line_number: 2,
                        callback1: [
                          {
                            type: 'showMessage',
                            dataId: 168639642524278200,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '154235',
                              pageJsonId: '763609',
                              type: 'info',
                              value: '请选中表格数据',
                            },
                            line_number: 3,
                          },
                          {
                            type: 'console',
                            dataId: 168639642524264420,
                            options: {
                              compId: 'debug',
                              compName: 'system',
                              id: '2563182',
                              pageJsonId: '763609',
                              value: ['=====未选中表格选项====='],
                            },
                            line_number: 4,
                          },
                          {
                            type: 'console',
                            dataId: 168639642524291520,
                            options: {
                              compId: 'debug',
                              compName: 'system',
                              id: '8599477',
                              pageJsonId: '763609',
                              value: ['$selectedRows_8352$'],
                            },
                            line_number: 5,
                          },
                        ],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetTableSelected52.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatagetTableSelected52,
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
              ref={(r: any) => refs.setComponentRef(r, 'Button_614168_6154713')}
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
                id: 'Button_3398434_019155',
                uid: 'Button_3398434_019155',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ width: 'fit-content' }}
              onClick={(e: any) => {
                const forms99 = getFormByCompId('Form_495566_5382465', refs);
                // 支持循环容器中的表单重置
                (Array.isArray(forms99) ? forms99 : [forms99]).forEach((form) =>
                  form?.resetFields(),
                );
                const eventDatacallSelfFunc399: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166842946598668700,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '443106',
                      pageJsonId: '763609',
                      customFuncName: 'tachePassChange',
                      customFuncParams: 'object',
                    },
                    line_number: 2,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc399.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatacallSelfFunc399, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Button_3398434_019155')}
              {...injectData}
            />
          </View>
        </Card>
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_672632_9537307',
            uid: 'View_672632_9537307',
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
          ref={(r: any) => refs.setComponentRef(r, 'View_672632_9537307')}
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
              id: 'Button_219692_3851914',
              uid: 'Button_219692_3851914',
              type: 'Button',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ width: 'fit-content', margin: '8px 8px 8px 8px' }}
            onClick={(e: any) => {
              const eventDatasetDisable93: any = [
                {
                  type: 'setDisable',
                  dataId: 166936822590936640,
                  options: {
                    compId: 'Button_219692_3851914',
                    compLib: 'comm',
                    pageJsonId: '763609',
                    compName: 'Button',
                    id: '7240528',
                    disabled: 'true',
                  },
                  line_number: 1,
                },
              ];
              eventDatasetDisable93.params =
                [
                  {
                    title: '事件对象',
                    value: '$e$',
                    name: 'e',
                    label: '事件对象',
                  },
                ] || [];
              CMDGenerator(eventDatasetDisable93, { e }, 'setDisable', {
                id: 'setDisable',
                name: 'setDisable',
                type: 'setDisable',
                platform: 'pc',
              });
              const eventDatavalidateCurrentForm71: any = [
                {
                  type: 'validateCurrentForm',
                  dataId: 166738194573171680,
                  options: {
                    compId: 'Form_8512707_5353887',
                    compLib: 'comm',
                    pageJsonId: '763609',
                    compName: 'Form',
                    id: '062148',
                  },
                  line_number: 2,
                  callback1: [
                    {
                      type: 'customActionCode',
                      dataId: 166738200041761120,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '025774',
                        pageJsonId: '763609',
                        code: 'function main(data,state,success,fail){var _data$sameApproveOrdL,_data$sameApproveOrdL2,_data$sameApproveOrdL3,_data$sameApproveOrdL4,_data$sameApproveOrdL5;console.log("\\u5408\\u5355data",data);var _index=data===null||data===void 0?void 0:(_data$sameApproveOrdL=data.sameApproveOrdList)===null||_data$sameApproveOrdL===void 0?void 0:(_data$sameApproveOrdL2=_data$sameApproveOrdL.resultData)===null||_data$sameApproveOrdL2===void 0?void 0:_data$sameApproveOrdL2.findIndex(function(item){return!item.tachePass});var passNum=data===null||data===void 0?void 0:(_data$sameApproveOrdL3=data.sameApproveOrdList)===null||_data$sameApproveOrdL3===void 0?void 0:(_data$sameApproveOrdL4=_data$sameApproveOrdL3.resultData)===null||_data$sameApproveOrdL4===void 0?void 0:(_data$sameApproveOrdL5=_data$sameApproveOrdL4.filter(function(item){return item.tachePass==="pass"}))===null||_data$sameApproveOrdL5===void 0?void 0:_data$sameApproveOrdL5.length;if(_index>-1){fail("\\u8BF7\\u5B8C\\u6210\\u6240\\u6709\\u5F85\\u529E\\u5BA1\\u6279\\u540E\\u63D0\\u4EA4")}else if(passNum<2){fail("\\u540C\\u610F\\u7684\\u5F85\\u529E\\u5BA1\\u6279\\u5355\\u9700\\u5927\\u4E8E\\u7B49\\u4E8E\\u4E24\\u6761")}else{var _data$sameApproveOrdL6;var _list=data===null||data===void 0?void 0:(_data$sameApproveOrdL6=data.sameApproveOrdList)===null||_data$sameApproveOrdL6===void 0?void 0:_data$sameApproveOrdL6.resultData.map(function(item){item.busiObjNbr=item.approveOrdNbr;return item});console.log("\\u5408\\u5355\\u8BF7\\u6C42\\u5165\\u53C2\\uFF1A",_list);success(_list)}};',
                      },
                      line_number: 3,
                      callback1: [
                        {
                          type: 'apiRequest',
                          dataId: 166807106844588030,
                          options: {
                            compId: 'apiRequest',
                            compName: 'system',
                            id: '654316',
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
                                code: 'header',
                                name: '请求头参数',
                                attrType: 'object',
                                _id: 'header',
                                compType: 'Input',
                                parents: [],
                                id: 'header',
                                dataKey: '654316_header',
                              },
                              {
                                code: 'path',
                                name: '请求路径参数',
                                attrType: 'object',
                                _id: 'path',
                                compType: 'Input',
                                parents: [],
                                id: 'path',
                                dataKey: '654316_path',
                              },
                              {
                                code: 'query',
                                name: 'URL 参数',
                                attrType: 'object',
                                _id: 'query',
                                compType: 'Input',
                                parents: [],
                                id: 'query',
                                dataKey: '654316_query',
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
                                    _id: 'body.tacheCode',
                                    compType: 'Input',
                                    name: 'tacheCode',
                                    parents: ['body'],
                                    id: 'body.tacheCode',
                                    dataKey: '654316_body.tacheCode',
                                    value: {
                                      type: [
                                        'datasource',
                                        'flowItemSimpleInfoLocal',
                                        'data',
                                      ],
                                      code: 'tacheCode',
                                    },
                                  },
                                  {
                                    code: 'nextStaff',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'body.nextStaff',
                                    compType: 'Input',
                                    name: 'nextStaff',
                                    parents: ['body'],
                                    id: 'body.nextStaff',
                                    dataKey: '654316_body.nextStaff',
                                  },
                                  {
                                    code: 'nextTache',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'body.nextTache',
                                    compType: 'Input',
                                    name: 'nextTache',
                                    parents: ['body'],
                                    id: 'body.nextTache',
                                    dataKey: '654316_body.nextTache',
                                  },
                                  {
                                    code: 'workItemId',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'body.workItemId',
                                    compType: 'Input',
                                    name: 'workItemId',
                                    parents: ['body'],
                                    id: 'body.workItemId',
                                    dataKey: '654316_body.workItemId',
                                    value: {
                                      type: [
                                        'datasource',
                                        'flowItemSimpleInfoLocal',
                                        'data',
                                      ],
                                      code: 'workItemId',
                                    },
                                  },
                                  {
                                    code: 'orderMessage',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'body.orderMessage',
                                    compType: 'Input',
                                    name: 'orderMessage',
                                    parents: ['body'],
                                    id: 'body.orderMessage',
                                    dataKey: '654316_body.orderMessage',
                                  },
                                  {
                                    code: 'workId',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'body.workId',
                                    compType: 'Input',
                                    name: 'workId',
                                    parents: ['body'],
                                    id: 'body.workId',
                                    dataKey: '654316_body.workId',
                                  },
                                  {
                                    code: 'tachePass',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'body.tachePass',
                                    compType: 'Input',
                                    name: 'tachePass',
                                    parents: ['body'],
                                    id: 'body.tachePass',
                                    dataKey: '654316_body.tachePass',
                                  },
                                  {
                                    code: 'busiObjNbr',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'body.busiObjNbr',
                                    compType: 'Input',
                                    name: 'busiObjNbr',
                                    parents: ['body'],
                                    id: 'body.busiObjNbr',
                                    dataKey: '654316_body.busiObjNbr',
                                  },
                                  {
                                    code: 'endLevel',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'body.endLevel',
                                    compType: 'Input',
                                    name: 'endLevel',
                                    parents: ['body'],
                                    id: 'body.endLevel',
                                    dataKey: '654316_body.endLevel',
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
                                    code: 'parentWorkItemId',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'body.parentWorkItemId',
                                    compType: 'Input',
                                    name: 'parentWorkItemId',
                                    parents: ['body'],
                                    id: 'body.parentWorkItemId',
                                    dataKey: '654316_body.parentWorkItemId',
                                  },
                                  {
                                    code: 'isRollback',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'body.isRollback',
                                    compType: 'Input',
                                    name: 'isRollback',
                                    parents: ['body'],
                                    id: 'body.isRollback',
                                    dataKey: '654316_body.isRollback',
                                  },
                                  {
                                    code: 'tacheRemark',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'body.tacheRemark',
                                    compType: 'Input',
                                    name: 'tacheRemark',
                                    parents: ['body'],
                                    id: 'body.tacheRemark',
                                    dataKey: '654316_body.tacheRemark',
                                  },
                                  {
                                    code: 'mergeTitle',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'body.mergeTitle',
                                    compType: 'Input',
                                    name: 'mergeTitle',
                                    parents: ['body'],
                                    id: 'body.mergeTitle',
                                    dataKey: '654316_body.mergeTitle',
                                    value: {
                                      type: [
                                        'form',
                                        'Form_8512707_5353887',
                                        'getFieldsValue',
                                      ],
                                      code: 'mergeTitle',
                                    },
                                  },
                                  {
                                    code: 'parentWorkId',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'body.parentWorkId',
                                    compType: 'Input',
                                    name: 'parentWorkId',
                                    parents: ['body'],
                                    id: 'body.parentWorkId',
                                    dataKey: '654316_body.parentWorkId',
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
                                        _id: 'body.tacheAttachments.fileName',
                                        compType: 'Input',
                                        name: 'fileName',
                                        parents: ['body', 'tacheAttachments'],
                                        id: 'body.tacheAttachments.fileName',
                                        dataKey:
                                          '654316_body.tacheAttachments.fileName',
                                      },
                                      {
                                        code: 'url',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        _id: 'body.tacheAttachments.url',
                                        compType: 'Input',
                                        name: 'url',
                                        parents: ['body', 'tacheAttachments'],
                                        id: 'body.tacheAttachments.url',
                                        dataKey:
                                          '654316_body.tacheAttachments.url',
                                      },
                                      {
                                        code: 'fileId',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        _id: 'body.tacheAttachments.fileId',
                                        compType: 'Input',
                                        name: 'fileId',
                                        parents: ['body', 'tacheAttachments'],
                                        id: 'body.tacheAttachments.fileId',
                                        dataKey:
                                          '654316_body.tacheAttachments.fileId',
                                      },
                                    ],
                                    _id: 'body.tacheAttachments',
                                    compType: 'Input',
                                    name: 'tacheAttachments',
                                    parents: ['body'],
                                    id: 'body.tacheAttachments',
                                    dataKey: '654316_body.tacheAttachments',
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
                                        _id: 'body.sameList.tacheRemark',
                                        compType: 'Input',
                                        name: 'tacheRemark',
                                        parents: ['body', 'sameList'],
                                        id: 'body.sameList.tacheRemark',
                                        dataKey:
                                          '654316_body.sameList.tacheRemark',
                                      },
                                      {
                                        code: 'nextStaff',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        _id: 'body.sameList.nextStaff',
                                        compType: 'Input',
                                        name: 'nextStaff',
                                        parents: ['body', 'sameList'],
                                        id: 'body.sameList.nextStaff',
                                        dataKey:
                                          '654316_body.sameList.nextStaff',
                                      },
                                      {
                                        code: 'nextTache',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        _id: 'body.sameList.nextTache',
                                        compType: 'Input',
                                        name: 'nextTache',
                                        parents: ['body', 'sameList'],
                                        id: 'body.sameList.nextTache',
                                        dataKey:
                                          '654316_body.sameList.nextTache',
                                      },
                                      {
                                        code: 'nextStaffName',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        _id: 'body.sameList.nextStaffName',
                                        compType: 'Input',
                                        name: 'nextStaffName',
                                        parents: ['body', 'sameList'],
                                        id: 'body.sameList.nextStaffName',
                                        dataKey:
                                          '654316_body.sameList.nextStaffName',
                                      },
                                      {
                                        code: 'workItemId',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        _id: 'body.sameList.workItemId',
                                        compType: 'Input',
                                        name: 'workItemId',
                                        parents: ['body', 'sameList'],
                                        id: 'body.sameList.workItemId',
                                        dataKey:
                                          '654316_body.sameList.workItemId',
                                      },
                                      {
                                        code: 'busiObjNbr',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        _id: 'body.sameList.busiObjNbr',
                                        compType: 'Input',
                                        name: 'busiObjNbr',
                                        parents: ['body', 'sameList'],
                                        id: 'body.sameList.busiObjNbr',
                                        dataKey:
                                          '654316_body.sameList.busiObjNbr',
                                      },
                                      {
                                        code: 'tachePass',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        _id: 'body.sameList.tachePass',
                                        compType: 'Input',
                                        name: 'tachePass',
                                        parents: ['body', 'sameList'],
                                        id: 'body.sameList.tachePass',
                                        dataKey:
                                          '654316_body.sameList.tachePass',
                                      },
                                      {
                                        code: 'workId',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        _id: 'body.sameList.workId',
                                        compType: 'Input',
                                        name: 'workId',
                                        parents: ['body', 'sameList'],
                                        id: 'body.sameList.workId',
                                        dataKey: '654316_body.sameList.workId',
                                      },
                                    ],
                                    _id: 'body.sameList',
                                    compType: 'Input',
                                    name: 'sameList',
                                    parents: ['body'],
                                    id: 'body.sameList',
                                    dataKey: '654316_body.sameList',
                                    value: {
                                      type: ['context', '$data_025774$'],
                                      code: '',
                                    },
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
                                        _id: 'body.copyUserList.userName',
                                        compType: 'Input',
                                        name: 'userName',
                                        parents: ['body', 'copyUserList'],
                                        id: 'body.copyUserList.userName',
                                        dataKey:
                                          '654316_body.copyUserList.userName',
                                      },
                                      {
                                        code: 'userCode',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        _id: 'body.copyUserList.userCode',
                                        compType: 'Input',
                                        name: 'userCode',
                                        parents: ['body', 'copyUserList'],
                                        id: 'body.copyUserList.userCode',
                                        dataKey:
                                          '654316_body.copyUserList.userCode',
                                      },
                                    ],
                                    _id: 'body.copyUserList',
                                    compType: 'Input',
                                    name: 'copyUserList',
                                    parents: ['body'],
                                    id: 'body.copyUserList',
                                    dataKey: '654316_body.copyUserList',
                                  },
                                ],
                                _id: 'body',
                                compType: 'Input',
                                parents: [],
                                id: 'body',
                                dataKey: '654316_body',
                              },
                            ],
                            _sourceName: '保存数据并流转摩卡流程-tzp',
                          },
                          line_number: 4,
                          callback1: [
                            {
                              type: 'ifelse',
                              condition: [
                                {
                                  condId: '096154',
                                  options: {
                                    useManual: true,
                                    useObject: false,
                                    context: '$reply_654316?.resultCode$',
                                    operate: '==',
                                    manualValue: '0',
                                  },
                                  conditionType: 'checkContextValue',
                                  objType: 'system',
                                  objId: 'sys',
                                },
                              ],
                              dataId: 166842758121515680,
                              elseIfs: [
                                {
                                  dataName: 'elseIf',
                                  dataId: 166842784355466020,
                                  children: [
                                    {
                                      dataName: 'action',
                                      dataId: 166842784794489250,
                                      children: [],
                                      todoOptions: ['msgType', 'value'],
                                      options: {
                                        compId: 'showMessage',
                                        compName: 'system',
                                        id: '652867',
                                        pageJsonId: '763609',
                                        type: 'error',
                                        value: '$reply_654316?.resultMsg$',
                                      },
                                      actionObjId: 'showMessage',
                                      actionObjName: 'system',
                                      value: 'showMessage',
                                      line_number: 9,
                                    },
                                    {
                                      dataName: 'action',
                                      dataId: 166936826917759520,
                                      children: [],
                                      todoOptions: ['disabled', 'selectComp'],
                                      options: {
                                        compId: 'Button_219692_3851914',
                                        compLib: 'comm',
                                        pageJsonId: '763609',
                                        compName: 'Button',
                                        id: '4892215',
                                        disabled: '',
                                      },
                                      actionObjId: 'Button_219692_3851914',
                                      actionObjName: 'Button',
                                      value: 'setDisable',
                                      compLib: 'comm',
                                      line_number: 10,
                                    },
                                  ],
                                  condition: [],
                                  callback: [
                                    {
                                      type: 'showMessage',
                                      dataId: 166842784794489250,
                                      options: {
                                        compId: 'showMessage',
                                        compName: 'system',
                                        id: '652867',
                                        pageJsonId: '763609',
                                        type: 'error',
                                        value: '$reply_654316?.resultMsg$',
                                      },
                                      line_number: 9,
                                    },
                                    {
                                      type: 'setDisable',
                                      dataId: 166936826917759520,
                                      options: {
                                        compId: 'Button_219692_3851914',
                                        compLib: 'comm',
                                        pageJsonId: '763609',
                                        compName: 'Button',
                                        id: '4892215',
                                        disabled: '',
                                      },
                                      line_number: 10,
                                    },
                                  ],
                                },
                              ],
                              line_number: 5,
                              callback1: [
                                {
                                  type: 'showMessage',
                                  dataId: 166842783752088830,
                                  options: {
                                    compId: 'showMessage',
                                    compName: 'system',
                                    id: '811015',
                                    pageJsonId: '763609',
                                    type: 'success',
                                    value: '创建合单成功',
                                  },
                                  line_number: 6,
                                },
                                {
                                  type: 'customActionCode',
                                  dataId: 170307662463519940,
                                  options: {
                                    compId: 'customActionCode',
                                    compName: 'page',
                                    id: '989451',
                                    pageJsonId: '030387',
                                    code: 'function main(data,state,success,fail){if(window.opener){console.log("\\u662F\\u4ECEwindow.open\\u6253\\u5F00\\u7684");window.close()}else{console.log("\\u4E0D\\u662F\\u4ECEwindow.open\\u6253\\u5F00\\u7684\\uFF0C\\u4E0D\\u505A\\u5904\\u7406")}};',
                                    actionTitle:
                                      '如果当前页面是window.open打开',
                                  },
                                  line_number: 7,
                                  callback1: [],
                                  callback2: [],
                                },
                                {
                                  type: 'history',
                                  dataId: 166842784125691000,
                                  options: {
                                    compId: 'history',
                                    compName: 'system',
                                    id: '8233021',
                                    pageJsonId: '763609',
                                    type: 'push',
                                    pathname: '/approveOrderTodo',
                                    selectedType: 'page',
                                    pageId: '878815340415455232',
                                    modalPath: '/approveOrderTodo',
                                  },
                                  line_number: 8,
                                },
                              ],
                            },
                          ],
                          callback2: [
                            {
                              type: 'setDisable',
                              dataId: 166944783262359680,
                              options: {
                                compId: 'Button_219692_3851914',
                                compLib: 'comm',
                                pageJsonId: '763609',
                                compName: 'Button',
                                id: '69377',
                                disabled: '',
                              },
                              line_number: 11,
                            },
                          ],
                        },
                      ],
                      callback2: [
                        {
                          type: 'showMessage',
                          dataId: 166745569511737120,
                          options: {
                            compId: 'showMessage',
                            compName: 'system',
                            id: '641508',
                            pageJsonId: '763609',
                            type: 'info',
                            value: '$fail_025774$',
                          },
                          line_number: 12,
                        },
                        {
                          type: 'setDisable',
                          dataId: 166944779765541660,
                          options: {
                            compId: 'Button_219692_3851914',
                            compLib: 'comm',
                            pageJsonId: '763609',
                            compName: 'Button',
                            id: '359723',
                            disabled: '',
                          },
                          line_number: 13,
                        },
                      ],
                    },
                  ],
                  callback2: [
                    {
                      type: 'showMessage',
                      dataId: 166857993819345920,
                      options: {
                        compId: 'showMessage',
                        compName: 'system',
                        id: '004564',
                        pageJsonId: '763609',
                        type: 'warn',
                        value: '请输入审批单主题后，再提交',
                      },
                      line_number: 14,
                    },
                    {
                      type: 'setDisable',
                      dataId: 166936824973640800,
                      options: {
                        compId: 'Button_219692_3851914',
                        compLib: 'comm',
                        pageJsonId: '763609',
                        compName: 'Button',
                        id: '952137',
                        disabled: '',
                      },
                      line_number: 15,
                    },
                  ],
                },
              ];
              eventDatavalidateCurrentForm71.params =
                [
                  {
                    title: '事件对象',
                    value: '$e$',
                    name: 'e',
                    label: '事件对象',
                  },
                ] || [];
              CMDGenerator(
                eventDatavalidateCurrentForm71,
                { e },
                'validateCurrentForm',
                {
                  id: 'validateCurrentForm',
                  name: 'validateCurrentForm',
                  type: 'validateCurrentForm',
                  platform: 'pc',
                },
              ); // console 166945092826272030
              console.log('创建合单点击提交');
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Button_219692_3851914')}
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
              id: 'Button_713182_647206',
              uid: 'Button_713182_647206',
              type: 'Button',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ width: 'fit-content' }}
            onClick={(e: any) => {
              const eventDatahistoryGoBack2: any = [
                {
                  type: 'historyGoBack',
                  dataId: 166789368067972260,
                  options: {
                    compId: 'historyGoBack',
                    compName: 'system',
                    id: '747505',
                    pageJsonId: '763609',
                  },
                  line_number: 1,
                },
              ];
              eventDatahistoryGoBack2.params =
                [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
              CMDGenerator(eventDatahistoryGoBack2, { e }, 'historyGoBack', {
                id: 'historyGoBack',
                name: 'historyGoBack',
                type: 'historyGoBack',
                platform: 'pc',
              });
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Button_713182_647206')}
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(Chuangjianhedanshenpi2133$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
