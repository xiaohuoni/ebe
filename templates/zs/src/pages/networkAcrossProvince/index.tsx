// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import { Divider, Form, Input, Select, Text, View } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const NetworkAcrossProvince$$Modal: React.FC<PageProps> = ({
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
  const calculEndDiscount = (options_152622: any) => {
    const eventDatagetValue2: any = [
      {
        type: 'getValue',
        dataId: 169900551683489540,
        options: {
          compId: 'Input_241407',
          compLib: 'comm',
          pageJsonId: '8430824',
          compName: 'Input',
          id: '6704864',
        },
        line_number: 1,
        callback1: [
          {
            type: 'getValue',
            dataId: 169900551683447740,
            options: {
              compId: 'Input_022401',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Input',
              id: '394135',
            },
            line_number: 2,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '022748',
                    options: { context: '$value_394135$', operate: 'notEmpty' },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                  {
                    options: {
                      context: '$value_6704864$',
                      operate: 'notEmpty',
                    },
                    condId: '163823',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 169900551683493280,
                elseIfs: [],
                line_number: 3,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 169900551683449500,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '76733',
                      pageJsonId: '8430824',
                      code: 'function main(data,state,success,fail){var stand=value_6704864;var real=value_394135;console.log("stand:",stand);console.log("real:",real);var result=(parseFloat(real)/parseFloat(stand)*10).toFixed(3);data.feeInfo.lastDiscount=result;success(result)};',
                    },
                    line_number: 4,
                    callback1: [
                      {
                        type: 'setValue',
                        dataId: 169900551683417280,
                        options: {
                          compId: 'Input_468733',
                          compLib: 'comm',
                          pageJsonId: '8430824',
                          compName: 'Input',
                          id: '155068',
                          valueList: { Input_468733: '$data_76733$' },
                        },
                        line_number: 5,
                        callback1: [],
                      },
                    ],
                    callback2: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ];
    eventDatagetValue2.params =
      [
        {
          title: '事件入参',
          name: 'options_152622',
          value: '$options_152622$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue2, { options_152622 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };
  const calculPrice = (options_4731497: any) => {
    const eventDatagetSelectedData8: any = [
      {
        type: 'getSelectedData',
        dataId: 169900432833625540,
        options: {
          compId: 'Select_371996',
          compLib: 'comm',
          pageJsonId: '8430824',
          compName: 'Select',
          id: '306467',
        },
        line_number: 1,
        callback1: [
          {
            type: 'getSelectedData',
            dataId: 169900432833603500,
            options: {
              compId: 'Input_719179',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '656873',
            },
            line_number: 2,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '97059224',
                    options: {
                      context: '$selectedData_656873[0]$',
                      operate: 'notEmpty',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                  {
                    options: {
                      context: '$selectedData_306467[0]$',
                      operate: 'notEmpty',
                    },
                    condId: '297847',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 169900432833641150,
                elseIfs: [],
                line_number: 3,
                callback1: [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '490615',
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$selectedData_656873[0].value$',
                          operate: '==',
                          manualValue: '2',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 169900432833695780,
                    elseIfs: [],
                    line_number: 4,
                    callback1: [
                      {
                        type: 'apiRequest',
                        dataId: 169900432833612400,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '3939113',
                          pageJsonId: '8430824',
                          sync: false,
                          method: 'post',
                          url: '/app/rhin/gateway/callRhinEngine',
                          _capabilityCode: 'qryCatalogAttrValueList',
                          _apiCode: 'qryCatalogAttrValueList',
                          _source: 'rhin',
                          _serviceId: '889391610000404480',
                          _serviceTitle:
                            '查询场景规格属性值列表: qryCatalogAttrValueList',
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
                                      code: 'catalogCode',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'root.body.catalogCode',
                                      compType: 'Input',
                                      name: 'catalogCode',
                                      parents: ['root', 'body'],
                                      id: 'root.body.catalogCode',
                                      dataKey: '3939113_root.body.catalogCode',
                                      value: {
                                        type: [
                                          'context',
                                          '$state.catalogCode$',
                                        ],
                                        code: '',
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
                                      dataKey: '3939113_root.body.attrCode',
                                      value: {
                                        type: ['customize'],
                                        code: 'specStandardPrice',
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
                                  dataKey: '3939113_root.body',
                                  key: '0-3',
                                  parentType: 'object',
                                  parentKey: '0',
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
                                  id: 'root.header',
                                  dataKey: '3939113_root.header',
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
                                  dataKey: '3939113_root.path',
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
                                  dataKey: '3939113_root.query',
                                },
                              ],
                              _id: 'root',
                              compType: 'Input',
                              isRoot: true,
                              parents: [],
                              key: '0',
                              id: 'root',
                              dataKey: '3939113_root',
                            },
                          ],
                        },
                        line_number: 5,
                        callback1: [
                          {
                            type: 'customActionCode',
                            dataId: 169900432833693860,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '1994014',
                              pageJsonId: '8430824',
                              code: 'function main(data,state,success,fail){var _reply_;var bandwidth=selectedData_306467[0].label;console.log("\\u5E26\\u5BBD\\uFF1A",bandwidth);var result=(_reply_=reply_3939113)===null||_reply_===void 0?void 0:_reply_.resultData;var f=result.filter(function(item){return item.attrValueDesc==bandwidth});console.log("\\u6807\\u51C6\\u4EF7\\u683C\\u8FC7\\u6EE4\\u503C\\uFF1A",f);data.feeInfo.standardPrice=f[0].attrValue;console.log("\\u6807\\u51C6\\u4EF7\\u683C\\u8FC7\\u6EE4\\u503C\\uFF1A",f[0].attrValue);success(f[0].attrValue)};',
                            },
                            line_number: 6,
                            callback1: [
                              {
                                type: 'setValue',
                                dataId: 169900432833653760,
                                options: {
                                  compId: ['Input_241407'],
                                  compLib: 'comm',
                                  pageJsonId: '8430824',
                                  compName: 'Input',
                                  id: '869548',
                                  valueList: { Input_241407: '$data_1994014$' },
                                  compid: ['Input_241407'],
                                },
                                line_number: 7,
                                callback1: [
                                  {
                                    type: 'callSelfFunc',
                                    dataId: 169900614686998530,
                                    options: {
                                      compId: 'callSelfFunc',
                                      compName: 'system',
                                      id: '61035',
                                      pageJsonId: '8430824',
                                      customFuncName: 'calculEndDiscount',
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
                  },
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '490615',
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$selectedData_656873[0].value$',
                          operate: '==',
                          manualValue: '1',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 169900432833611260,
                    elseIfs: [],
                    line_number: 9,
                    callback1: [
                      {
                        type: 'apiRequest',
                        dataId: 169900432833685220,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '29077953',
                          pageJsonId: '8430824',
                          sync: false,
                          method: 'post',
                          url: '/app/rhin/gateway/callRhinEngine',
                          _capabilityCode: 'qryCatalogAttrValueList',
                          _apiCode: 'qryCatalogAttrValueList',
                          _source: 'rhin',
                          _serviceId: '889391610000404480',
                          _serviceTitle:
                            '查询场景规格属性值列表: qryCatalogAttrValueList',
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
                                      code: 'catalogCode',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'root.body.catalogCode',
                                      compType: 'Input',
                                      name: 'catalogCode',
                                      parents: ['root', 'body'],
                                      id: 'root.body.catalogCode',
                                      dataKey: '29077953_root.body.catalogCode',
                                      value: {
                                        type: [
                                          'context',
                                          '$state.catalogCode$',
                                        ],
                                        code: '',
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
                                      dataKey: '29077953_root.body.attrCode',
                                      value: {
                                        type: ['customize'],
                                        code: 'tradStandardPrice',
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
                                  dataKey: '29077953_root.body',
                                  key: '0-3',
                                  parentType: 'object',
                                  parentKey: '0',
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
                                  id: 'root.header',
                                  dataKey: '29077953_root.header',
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
                                  dataKey: '29077953_root.path',
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
                                  dataKey: '29077953_root.query',
                                },
                              ],
                              _id: 'root',
                              compType: 'Input',
                              isRoot: true,
                              parents: [],
                              key: '0',
                              id: 'root',
                              dataKey: '29077953_root',
                            },
                          ],
                        },
                        line_number: 10,
                        callback1: [
                          {
                            type: 'customActionCode',
                            dataId: 169900432833634940,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '040259',
                              pageJsonId: '8430824',
                              code: 'function main(data,state,success,fail){var _reply_;var bandwidth=selectedData_306467[0].label;console.log("\\u5E26\\u5BBD\\uFF1A",bandwidth);var result=(_reply_=reply_29077953)===null||_reply_===void 0?void 0:_reply_.resultData;var f=result.filter(function(item){return item.attrValueDesc==bandwidth});console.log("\\u8FC7\\u6EE4\\u503C\\uFF1A",f);data.feeInfo.standardPrice=f[0].attrValue;success(f[0].attrValue)};',
                            },
                            line_number: 11,
                            callback1: [
                              {
                                type: 'setValue',
                                dataId: 169900439324694940,
                                options: {
                                  compId: ['Input_241407'],
                                  compLib: 'comm',
                                  pageJsonId: '8430824',
                                  compName: 'Input',
                                  id: '208521',
                                  valueList: { Input_241407: '$data_040259$' },
                                  compid: ['Input_241407'],
                                },
                                line_number: 12,
                                callback1: [
                                  {
                                    type: 'callSelfFunc',
                                    dataId: 169900615329074880,
                                    options: {
                                      compId: 'callSelfFunc',
                                      compName: 'system',
                                      id: '162894',
                                      pageJsonId: '8430824',
                                      customFuncName: 'calculEndDiscount',
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
                        callback2: [],
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
    ];
    eventDatagetSelectedData8.params =
      [
        {
          title: '事件入参',
          name: 'options_4731497',
          value: '$options_4731497$',
        },
      ] || [];
    CMDGenerator(
      eventDatagetSelectedData8,
      { options_4731497 },
      'getSelectedData',
      {
        id: 'getSelectedData',
        name: 'getSelectedData',
        type: 'getSelectedData',
        platform: 'undefined',
      },
    ); // console 169900493157301600
    console.log('===计算标准价格==');
  };
  const calculReceiptsPriceSum = (options_57729: any) => {
    const eventDatagetValue3: any = [
      {
        type: 'getValue',
        dataId: 169900573590816160,
        options: {
          compId: 'Input_022401',
          compLib: 'comm',
          pageJsonId: '8430824',
          compName: 'Input',
          id: '048391',
        },
        line_number: 1,
        callback1: [
          {
            type: 'getValue',
            dataId: 169900573946173630,
            options: {
              compId: 'Input_7254833',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Input',
              id: '2016154',
            },
            line_number: 2,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '2261914',
                    options: {
                      context: '$value_2016154$',
                      operate: 'notEmpty',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                  {
                    options: { context: '$value_048391$', operate: 'notEmpty' },
                    condId: '340636',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 169900574264542140,
                elseIfs: [],
                line_number: 3,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 169900576256074100,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '41239',
                      pageJsonId: '8430824',
                      code: 'function main(data,state,success,fail){var count=value_2016154;var real=value_048391;var result=(parseFloat(count)*parseFloat(real)).toFixed(2);data.feeInfo.receiptsPriceSum=result;success(result)};',
                    },
                    line_number: 4,
                    callback1: [
                      {
                        type: 'setValue',
                        dataId: 169900578544151740,
                        options: {
                          compId: 'Input_2861392',
                          compLib: 'comm',
                          pageJsonId: '8430824',
                          compName: 'Input',
                          id: '095043',
                          valueList: { Input_2861392: '$data_41239$' },
                        },
                        line_number: 5,
                        callback1: [],
                      },
                    ],
                    callback2: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ];
    eventDatagetValue3.params =
      [
        { title: '事件入参', name: 'options_57729', value: '$options_57729$' },
      ] || [];
    CMDGenerator(eventDatagetValue3, { options_57729 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };
  const caluOfferPrice = (options_4325873: any) => {
    const eventDatagetSelectedData9: any = [
      {
        type: 'getSelectedData',
        dataId: 169900258320866200,
        options: {
          compId: 'Select_371996',
          compLib: 'comm',
          pageJsonId: '8430824',
          compName: 'Select',
          id: '7812103',
        },
        line_number: 1,
        callback1: [
          {
            type: 'getSelectedData',
            dataId: 169900258320863000,
            options: {
              compId: 'Input_719179',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '61988',
            },
            line_number: 2,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '97059224',
                    options: {
                      context: '$selectedData_61988[0]$',
                      operate: 'notEmpty',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                  {
                    options: {
                      context: '$selectedData_7812103[0]$',
                      operate: 'notEmpty',
                    },
                    condId: '297847',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 169900258320810000,
                elseIfs: [],
                line_number: 3,
                callback1: [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '490615',
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$selectedData_61988[0].value$',
                          operate: '==',
                          manualValue: '2',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 169900258320867230,
                    elseIfs: [],
                    line_number: 4,
                    callback1: [
                      {
                        type: 'apiRequest',
                        dataId: 169900346697344220,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '6958096',
                          pageJsonId: '8430824',
                          sync: false,
                          method: 'post',
                          url: '/app/rhin/gateway/callRhinEngine',
                          _capabilityCode: 'qryCatalogAttrValueList',
                          _apiCode: 'qryCatalogAttrValueList',
                          _source: 'rhin',
                          _serviceId: '889391610000404480',
                          _serviceTitle:
                            '查询场景规格属性值列表: qryCatalogAttrValueList',
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
                                      code: 'catalogCode',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'root.body.catalogCode',
                                      compType: 'Input',
                                      name: 'catalogCode',
                                      parents: ['root', 'body'],
                                      id: 'root.body.catalogCode',
                                      dataKey: '6958096_root.body.catalogCode',
                                      value: {
                                        type: [
                                          'context',
                                          '$state.catalogCode$',
                                        ],
                                        code: '',
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
                                      dataKey: '6958096_root.body.attrCode',
                                      value: {
                                        type: ['customize'],
                                        code: 'specOfferPrice',
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
                                  dataKey: '6958096_root.body',
                                  key: '0-3',
                                  parentType: 'object',
                                  parentKey: '0',
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
                                  id: 'root.header',
                                  dataKey: '6958096_root.header',
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
                                  dataKey: '6958096_root.path',
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
                                  dataKey: '6958096_root.query',
                                },
                              ],
                              _id: 'root',
                              compType: 'Input',
                              isRoot: true,
                              parents: [],
                              key: '0',
                              id: 'root',
                              dataKey: '6958096_root',
                            },
                          ],
                        },
                        line_number: 5,
                        callback1: [
                          {
                            type: 'customActionCode',
                            dataId: 169900346697305950,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '8966626',
                              pageJsonId: '8430824',
                              code: 'function main(data,state,success,fail){var _reply_;var bandwidth=selectedData_7812103[0].label;console.log("\\u5E26\\u5BBD\\uFF1A",bandwidth);var result=(_reply_=reply_6958096)===null||_reply_===void 0?void 0:_reply_.resultData;var f=result.filter(function(item){return item.attrValueDesc==bandwidth});console.log("\\u8FC7\\u6EE4\\u503C\\uFF1A",f);data.feeInfo.officePrice=f[0].attrValue;success(f[0].attrValue)};',
                            },
                            line_number: 6,
                            callback1: [
                              {
                                type: 'setValue',
                                dataId: 169900366364633540,
                                options: {
                                  compId: 'Input_4646994',
                                  compLib: 'comm',
                                  pageJsonId: '8430824',
                                  compName: 'Input',
                                  id: '9382619',
                                  valueList: {
                                    Input_4646994: '$data_8966626$',
                                  },
                                },
                                line_number: 7,
                                callback1: [],
                              },
                            ],
                            callback2: [],
                          },
                        ],
                        callback2: [],
                      },
                    ],
                  },
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '490615',
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$selectedData_61988[0].value$',
                          operate: '==',
                          manualValue: '1',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 169900258320834180,
                    elseIfs: [],
                    line_number: 8,
                    callback1: [
                      {
                        type: 'apiRequest',
                        dataId: 169900258320858750,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '4443304',
                          pageJsonId: '8430824',
                          sync: false,
                          method: 'post',
                          url: '/app/rhin/gateway/callRhinEngine',
                          _capabilityCode: 'qryCatalogAttrValueList',
                          _apiCode: 'qryCatalogAttrValueList',
                          _source: 'rhin',
                          _serviceId: '889391610000404480',
                          _serviceTitle:
                            '查询场景规格属性值列表: qryCatalogAttrValueList',
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
                                      code: 'catalogCode',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'root.body.catalogCode',
                                      compType: 'Input',
                                      name: 'catalogCode',
                                      parents: ['root', 'body'],
                                      id: 'root.body.catalogCode',
                                      dataKey: '201749_root.body.catalogCode',
                                      value: {
                                        type: [
                                          'context',
                                          '$state.catalogCode$',
                                        ],
                                        code: '',
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
                                      dataKey: '201749_root.body.attrCode',
                                      value: {
                                        type: ['customize'],
                                        code: 'tradOfferPrice',
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
                                  dataKey: '201749_root.body',
                                  key: '0-3',
                                  parentType: 'object',
                                  parentKey: '0',
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
                                  id: 'root.header',
                                  dataKey: '201749_root.header',
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
                                  dataKey: '201749_root.path',
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
                                  dataKey: '201749_root.query',
                                },
                              ],
                              _id: 'root',
                              compType: 'Input',
                              isRoot: true,
                              parents: [],
                              key: '0',
                              id: 'root',
                              dataKey: '201749_root',
                            },
                          ],
                        },
                        line_number: 9,
                        callback1: [
                          {
                            type: 'customActionCode',
                            dataId: 169900258320833860,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '850705',
                              pageJsonId: '8430824',
                              code: 'function main(data,state,success,fail){var _reply_;var bandwidth=selectedData_7812103[0].label;console.log("\\u5E26\\u5BBD\\uFF1A",bandwidth);var result=(_reply_=reply_4443304)===null||_reply_===void 0?void 0:_reply_.resultData;var f=result.filter(function(item){return item.attrValueDesc==bandwidth});console.log("\\u8FC7\\u6EE4\\u503C\\uFF1A",f);data.feeInfo.officePrice=f[0].attrValue;success(f[0].attrValue)};',
                            },
                            line_number: 10,
                            callback1: [
                              {
                                type: 'setValue',
                                dataId: 169900373659668130,
                                options: {
                                  compId: 'Input_4646994',
                                  compLib: 'comm',
                                  pageJsonId: '8430824',
                                  compName: 'Input',
                                  id: '633491',
                                  valueList: { Input_4646994: '$data_850705$' },
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
    eventDatagetSelectedData9.params =
      [
        {
          title: '事件入参',
          name: 'options_4325873',
          value: '$options_4325873$',
        },
      ] || [];
    CMDGenerator(
      eventDatagetSelectedData9,
      { options_4325873 },
      'getSelectedData',
      {
        id: 'getSelectedData',
        name: 'getSelectedData',
        type: 'getSelectedData',
        platform: 'undefined',
      },
    ); // console 169900494554313600
    console.log('===计算管控价格===');
  };
  const caluRevenueShare = (options_638773: any) => {
    const eventDatagetSelectedData10: any = [
      {
        type: 'getSelectedData',
        dataId: 169923493768986080,
        options: {
          compId: 'Input_standardPrice_89896',
          compLib: 'comm',
          pageJsonId: '8430824',
          compName: 'Select',
          id: '78232',
        },
        line_number: 1,
        callback1: [
          {
            type: 'getSelectedData',
            dataId: 169923493768973280,
            options: {
              compId: 'Select_8264436',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '2238635',
            },
            line_number: 2,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '9681593',
                    options: {
                      context: '$selectedData_2238635[0]$',
                      operate: 'notEmpty',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                  {
                    options: {
                      context: '$selectedData_78232[0]$',
                      operate: 'notEmpty',
                    },
                    condId: '3613044',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 169923493768961760,
                elseIfs: [],
                line_number: 3,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 169923777617543170,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '17141503',
                      pageJsonId: '8430824',
                      actionTitle: '设置分成——成功则都不为福建',
                      code: 'function main(data,state,success,fail){var as=selectedData_78232[0];var zs=selectedData_2238635[0];var f=data.feeInfo.revenueShare;var a=data.feeInfo.fromShare;var z=data.feeInfo.toShare;var result="";if(as.label!="\\u798F\\u5EFA"&&zs.label!="\\u798F\\u5EFA"){result="\\u798F\\u5EFA:"+f+"%,"+"A\\u7701\\u4EFD"+a+"%,"+"Z\\u7701\\u4EFD:"+z+"%";if(parseFloat(f)+parseFloat(a)+parseFloat(z)!=100){fail()}else{success()}}else{data.feeInfo.revenueShare="";result="A\\u7701\\u4EFD"+a+"%,"+"Z\\u7701\\u4EFD:"+z+"%";if(parseFloat(a)+parseFloat(z)!=100){fail()}else{success()}}data.feeInfo.revenueShareName=result};',
                    },
                    line_number: 4,
                    callback1: [],
                    callback2: [
                      {
                        type: 'showMessage',
                        dataId: 169923816377681700,
                        options: {
                          compId: 'showMessage',
                          compName: 'system',
                          id: '9002266',
                          pageJsonId: '8430824',
                          type: 'info',
                          value: '收入分成相加应等于100%',
                        },
                        line_number: 5,
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
    ];
    eventDatagetSelectedData10.params =
      [
        {
          title: '事件入参',
          name: 'options_638773',
          value: '$options_638773$',
        },
      ] || [];
    CMDGenerator(
      eventDatagetSelectedData10,
      { options_638773 },
      'getSelectedData',
      {
        id: 'getSelectedData',
        name: 'getSelectedData',
        type: 'getSelectedData',
        platform: 'undefined',
      },
    );
  };
  const caluNet = (options_127016: any) => {
    const eventDatagetValue4: any = [
      {
        type: 'getValue',
        dataId: 169933920057014180,
        options: {
          compId: 'Input_326617',
          compLib: 'comm',
          pageJsonId: '8430824',
          compName: 'Input',
          id: '641193',
        },
        line_number: 1,
        callback1: [
          {
            type: 'getValue',
            dataId: 169933920810548500,
            options: {
              compId: 'Input_6435406',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Input',
              id: '5524936',
            },
            line_number: 2,
            callback1: [
              {
                type: 'getValue',
                dataId: 169933921060650940,
                options: {
                  compId: 'Input_279786',
                  compLib: 'comm',
                  pageJsonId: '8430824',
                  compName: 'Input',
                  id: '90832',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '4766997',
                        options: {
                          context: '$value_90832$',
                          operate: 'notEmpty',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                      {
                        options: {
                          context: '$value_5524936$',
                          operate: 'notEmpty',
                        },
                        condId: '953452',
                        connector: '&&',
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                      {
                        options: {
                          context: '$value_641193$',
                          operate: 'notEmpty',
                        },
                        condId: '035543',
                        connector: '&&',
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 169933922235365250,
                    elseIfs: [],
                    line_number: 4,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 169933930555001860,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '5445259',
                          pageJsonId: '8430824',
                          code: 'function main(data,state,success,fail){var w=parseFloat(value_90832);var z=parseFloat(value_5524936);var one=parseFloat(value_641193);var result=Math.ceil(one/(z-w/12));data.feeInfo.recoverNetCost=result;success(result)};',
                        },
                        line_number: 5,
                        callback1: [
                          {
                            type: 'setValue',
                            dataId: 169933947683836900,
                            options: {
                              compId: 'Input_0484931',
                              compLib: 'comm',
                              pageJsonId: '8430824',
                              compName: 'Input',
                              id: '0505875',
                              valueList: { Input_0484931: '$data_5445259$' },
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
              },
            ],
          },
        ],
      },
    ];
    eventDatagetValue4.params =
      [
        {
          title: '事件入参',
          name: 'options_127016',
          value: '$options_127016$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue4, { options_127016 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };
  const caluYear = (options_05078: any) => {
    const eventDatagetValue5: any = [
      {
        type: 'getValue',
        dataId: 169934009442118600,
        options: {
          compId: 'Input_6435406',
          compLib: 'comm',
          pageJsonId: '8430824',
          compName: 'Input',
          id: '8381158',
        },
        line_number: 1,
        callback1: [
          {
            type: 'ifelse',
            condition: [
              {
                condId: '81524444',
                options: { context: '$value_8381158$', operate: 'notEmpty' },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 169934014339143330,
            elseIfs: [],
            line_number: 2,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 169934015964613920,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '940784',
                  pageJsonId: '8430824',
                  code: 'function main(data,state,success,fail){var result=(parseFloat(value_8381158)*12).toFixed(0);data.feeInfo.infoIncomeYear=result;success(result)};',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'sysSetValue',
                    dataId: 169934028426517600,
                    options: {
                      compId: ['Input_137463'],
                      compName: 'page',
                      id: '9258391',
                      pageJsonId: '8430824',
                      compid: ['Input_137463'],
                      valueList: { Input_137463: '$data_940784$' },
                    },
                    line_number: 4,
                    callback1: [],
                  },
                ],
                callback2: [],
              },
            ],
          },
        ],
      },
    ];
    eventDatagetValue5.params =
      [
        { title: '事件入参', name: 'options_05078', value: '$options_05078$' },
      ] || [];
    CMDGenerator(eventDatagetValue5, { options_05078 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    calculEndDiscount,
    calculPrice,
    calculReceiptsPriceSum,
    caluOfferPrice,
    caluRevenueShare,
    caluNet,
    caluYear,
  }));

  const onOk = () => {
    const eventDatacallSelfFunc9: any = [
      {
        type: 'callSelfFunc',
        dataId: 169923737271072500,
        shielding: true,
        options: {
          compId: 'callSelfFunc',
          compName: 'system',
          id: '2350004',
          pageJsonId: '8430824',
          customFuncName: 'caluRevenueShare',
        },
        line_number: 1,
        callback1: [
          {
            type: 'validateCurrentForm',
            dataId: 169923737905500640,
            shielding: true,
            options: {
              compId: 'Form_981467',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Form',
              id: '196509',
            },
            line_number: 2,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 169923737905579700,
                shielding: true,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '848749',
                  pageJsonId: '8430824',
                  dataSourceId: 166452624216490180,
                  dataSourceName: 'feeInfo',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      code: 'recoverNetCost',
                      name: '可收回网络成本（月)',
                      type: 'string',
                      attrId: '8571626',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      value: {
                        type: ['form', 'Form_981467', 'getFieldsValue'],
                        code: 'recoverNetCost',
                      },
                      _codePath: ['recoverNetCost'],
                      _idpath: ['8571626'],
                    },
                    {
                      code: 'infoIncomeYear',
                      name: '年信息化收入',
                      type: 'string',
                      attrId: '121017',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      value: {
                        type: ['form', 'Form_981467', 'getFieldsValue'],
                        code: 'infoIncomeYear',
                      },
                      _codePath: ['infoIncomeYear'],
                      _idpath: ['121017'],
                    },
                    {
                      code: 'lineFuncFee',
                      name: '专线功能费(元)',
                      type: 'string',
                      attrId: '14036',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      value: {
                        type: ['form', 'Form_981467', 'getFieldsValue'],
                        code: 'lineFuncFee',
                      },
                      _codePath: ['lineFuncFee'],
                      _idpath: ['14036'],
                    },
                    {
                      code: 'maintenanceCost',
                      name: '维护费(元/年)',
                      type: 'string',
                      attrId: '7039381',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      value: {
                        type: ['form', 'Form_981467', 'getFieldsValue'],
                        code: 'maintenanceCost',
                      },
                      _codePath: ['maintenanceCost'],
                      _idpath: ['7039381'],
                    },
                    {
                      code: 'oneInput',
                      name: '一次性投入(元)',
                      type: 'string',
                      attrId: '009453',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      value: {
                        type: ['form', 'Form_981467', 'getFieldsValue'],
                        code: 'oneInput',
                      },
                      _codePath: ['oneInput'],
                      _idpath: ['009453'],
                    },
                    {
                      code: 'revenueShare',
                      name: '收入分成',
                      type: 'string',
                      attrId: '1462483',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      value: {
                        type: ['form', 'Form_981467', 'getFieldsValue'],
                        code: 'revenueShare',
                      },
                      _codePath: ['revenueShare'],
                      _idpath: ['1462483'],
                    },
                    {
                      code: 'toShare',
                      name: 'Z端分成',
                      type: 'string',
                      attrId: '099531',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      value: {
                        type: ['form', 'Form_981467', 'getFieldsValue'],
                        code: 'toShare',
                      },
                      _codePath: ['toShare'],
                      _idpath: ['099531'],
                    },
                    {
                      code: 'fromShare',
                      name: 'A端分成',
                      type: 'string',
                      attrId: '1095926',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      value: {
                        type: ['form', 'Form_981467', 'getFieldsValue'],
                        code: 'fromShare',
                      },
                      _codePath: ['fromShare'],
                      _idpath: ['1095926'],
                    },
                    {
                      code: 'singedTime',
                      name: '签约时间',
                      type: 'string',
                      attrId: '0888886',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      value: {
                        type: ['form', 'Form_981467', 'getFieldsValue'],
                        code: 'singedTime',
                      },
                      _codePath: ['singedTime'],
                      _idpath: ['0888886'],
                    },
                    {
                      code: 'receiptsPriceSum',
                      name: '总实收价',
                      type: 'string',
                      attrId: '0885963',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      value: {
                        type: ['form', 'Form_981467', 'getFieldsValue'],
                        code: 'receiptsPriceSum',
                      },
                      _codePath: ['receiptsPriceSum'],
                      _idpath: ['0885963'],
                    },
                    {
                      code: 'officePrice',
                      name: '总部管控价格',
                      type: 'string',
                      attrId: '892599',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      value: {
                        type: ['form', 'Form_981467', 'getFieldsValue'],
                        code: 'officePrice',
                      },
                      _codePath: ['officePrice'],
                      _idpath: ['892599'],
                    },
                    {
                      code: 'lastDiscount',
                      name: '最终折扣',
                      type: 'string',
                      attrId: '836689',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      value: {
                        type: ['form', 'Form_981467', 'getFieldsValue'],
                        code: 'lastDiscount',
                      },
                      _codePath: ['lastDiscount'],
                      _idpath: ['836689'],
                    },
                    {
                      code: 'receiptsPrice',
                      name: '实收价',
                      type: 'string',
                      attrId: '483326',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      value: {
                        type: ['form', 'Form_981467', 'getFieldsValue'],
                        code: 'receiptsPrice',
                      },
                      _codePath: ['receiptsPrice'],
                      _idpath: ['483326'],
                    },
                    {
                      code: 'standardPrice',
                      name: '省内标准价格',
                      type: 'string',
                      attrId: '411916',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      value: {
                        type: ['form', 'Form_981467', 'getFieldsValue'],
                        code: 'standardPrice',
                      },
                      _codePath: ['standardPrice'],
                      _idpath: ['411916'],
                    },
                    {
                      code: 'toProvince',
                      name: 'Z端省份',
                      type: 'string',
                      attrId: '719928',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      value: {
                        type: ['form', 'Form_981467', 'getFieldsValue'],
                        code: 'toProvince',
                      },
                      _codePath: ['toProvince'],
                      _idpath: ['719928'],
                    },
                    {
                      code: 'toAddress',
                      name: 'Z端地址',
                      type: 'string',
                      attrId: '7259194',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      value: {
                        type: ['form', 'Form_981467', 'getFieldsValue'],
                        code: 'toAddress',
                      },
                      _codePath: ['toAddress'],
                      _idpath: ['7259194'],
                    },
                    {
                      code: 'toCityText',
                      name: 'Z端地市',
                      type: 'string',
                      attrId: '6278025',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      value: {
                        type: ['form', 'Form_981467', 'getFieldsValue'],
                        code: 'toCityText',
                      },
                      _codePath: ['toCityText'],
                      _idpath: ['6278025'],
                    },
                    {
                      code: 'fromCityText',
                      name: 'A端地市',
                      type: 'string',
                      attrId: '696137',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      value: {
                        type: ['form', 'Form_981467', 'getFieldsValue'],
                        code: 'fromCityText',
                      },
                      _codePath: ['fromCityText'],
                      _idpath: ['696137'],
                    },
                    {
                      code: 'fromCity',
                      name: 'A端地市',
                      type: 'string',
                      attrId: '734603',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      value: {
                        type: ['form', 'Form_981467', 'getFieldsValue'],
                        code: 'fromCity',
                      },
                      _codePath: ['fromCity'],
                      _idpath: ['734603'],
                    },
                    {
                      code: 'fromProvince',
                      name: 'A端省份',
                      type: 'string',
                      attrId: '4746006',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      value: {
                        type: ['form', 'Form_981467', 'getFieldsValue'],
                        code: 'fromProvince',
                      },
                      _codePath: ['fromProvince'],
                      _idpath: ['4746006'],
                    },
                    {
                      code: 'fromAddress',
                      name: 'A端地址',
                      type: 'string',
                      attrId: '6264173',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      value: {
                        type: ['form', 'Form_981467', 'getFieldsValue'],
                        code: 'fromAddress',
                      },
                      _codePath: ['fromAddress'],
                      _idpath: ['6264173'],
                    },
                    {
                      code: 'toCity',
                      name: 'Z端地市',
                      type: 'string',
                      attrId: '904957',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      value: {
                        type: ['form', 'Form_981467', 'getFieldsValue'],
                        code: 'toCity',
                      },
                      _codePath: ['toCity'],
                      _idpath: ['904957'],
                    },
                    {
                      code: 'count',
                      name: '条数',
                      type: 'string',
                      attrId: '811781',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      value: {
                        type: ['form', 'Form_981467', 'getFieldsValue'],
                        code: 'count',
                      },
                      _codePath: ['count'],
                      _idpath: ['811781'],
                    },
                    {
                      code: 'bandwidth',
                      name: '带宽',
                      type: 'string',
                      attrId: '9558123',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      value: {
                        type: ['form', 'Form_981467', 'getFieldsValue'],
                        code: 'bandwidth',
                      },
                      _codePath: ['bandwidth'],
                      _idpath: ['9558123'],
                    },
                    {
                      code: 'busiType',
                      name: '业务类型',
                      type: 'string',
                      attrId: '435897',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      value: {
                        type: ['form', 'Form_981467', 'getFieldsValue'],
                        code: 'busiType',
                      },
                      _codePath: ['busiType'],
                      _idpath: ['435897'],
                    },
                    {
                      attrId: '4662965',
                      code: 'accessWay',
                      name: '接入方式',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['form', 'Form_981467', 'getFieldsValue'],
                        code: 'accessWay',
                      },
                      _codePath: ['accessWay'],
                      _idpath: ['4662965'],
                    },
                    {
                      attrId: '437556',
                      code: 'lineType',
                      name: '专线类型',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['form', 'Form_981467', 'getFieldsValue'],
                        code: 'lineType',
                      },
                      _codePath: ['lineType'],
                      _idpath: ['437556'],
                    },
                    {
                      attrId: '6720962',
                      code: 'busiTypeName',
                      name: '业务类型名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['busiTypeName'],
                      _idpath: ['6720962'],
                    },
                    {
                      attrId: '904194',
                      code: 'bandwidthName',
                      name: '带宽名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['bandwidthName'],
                      _idpath: ['904194'],
                    },
                    {
                      attrId: '8290088',
                      code: 'flag',
                      name: '标识',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['flag'],
                      _idpath: ['8290088'],
                    },
                    {
                      attrId: '326716',
                      code: 'fromProvinceName',
                      name: 'A端省份名字',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['fromProvinceName'],
                      _idpath: ['326716'],
                    },
                    {
                      attrId: '326753',
                      code: 'toProvinceName',
                      name: 'Z端省份名字',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['toProvinceName'],
                      _idpath: ['326753'],
                    },
                    {
                      attrId: '312459',
                      code: 'revenueShareName',
                      name: '各收入分成',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['revenueShareName'],
                      _idpath: ['312459'],
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
                    type: 'getValue',
                    dataId: 169923737905531200,
                    shielding: true,
                    options: {
                      compId: 'Input_4646994',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Input',
                      id: '217347',
                    },
                    line_number: 4,
                    callback1: [
                      {
                        type: 'getValue',
                        dataId: 169923737905510400,
                        shielding: true,
                        options: {
                          compId: 'Input_022401',
                          compLib: 'comm',
                          pageJsonId: '8430824',
                          compName: 'Input',
                          id: '784807',
                        },
                        line_number: 5,
                        callback1: [
                          {
                            type: 'customActionCode',
                            dataId: 169923737905594460,
                            shielding: true,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '506942',
                              pageJsonId: '8430824',
                              actionTitle: '',
                              code: 'function main(data,state,success,fail){var oldRowId=data.feeInfo.rowId;if(state.feeInfo==undefined||state.feeInfo==null){var min=0;var max=10000;var rowId=Math.round(Math.random()*(max-min))+min;data.feeInfo.rowId=rowId}else{data.feeInfo.rowId=oldRowId}var officePrice=parseFloat(value_217347);var onePrice=parseFloat(value_784807);if(onePrice<officePrice){data.feeInfo.flag=1}else{data.feeInfo.flag=2}success(data.feeInfo)};',
                            },
                            line_number: 6,
                            callback1: [
                              {
                                type: 'okCallbackData',
                                dataId: 169923737905516200,
                                shielding: true,
                                options: {
                                  compId: 'okCallbackData',
                                  compName: 'page',
                                  id: '179862',
                                  pageJsonId: '8430824',
                                  params: '$data_506942$',
                                },
                                line_number: 7,
                              },
                              {
                                type: 'closeModal',
                                dataId: 169923737905545250,
                                shielding: true,
                                options: {
                                  compId: 'closeModal',
                                  compName: 'page',
                                  id: '281742',
                                  pageJsonId: '8430824',
                                },
                                line_number: 8,
                              },
                            ],
                            callback2: [],
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
        ],
        callback2: [],
      },
    ];
    eventDatacallSelfFunc9.params = [] || [];
    CMDGenerator(eventDatacallSelfFunc9, {}, 'callSelfFunc', {
      id: 'callSelfFunc',
      name: 'callSelfFunc',
      type: 'callSelfFunc',
      platform: 'undefined',
    });
    const eventDatavalidateCurrentForm14: any = [
      {
        type: 'validateCurrentForm',
        dataId: 169923828373921540,
        options: {
          compId: 'Form_981467',
          compLib: 'comm',
          pageJsonId: '8430824',
          compName: 'Form',
          id: '128072',
        },
        line_number: 9,
        callback1: [
          {
            type: 'getSelectedData',
            dataId: 169923828373991520,
            options: {
              compId: 'Input_standardPrice_89896',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '477201',
            },
            line_number: 10,
            callback1: [
              {
                type: 'getSelectedData',
                dataId: 169923828373968670,
                options: {
                  compId: 'Select_8264436',
                  compLib: 'comm',
                  pageJsonId: '8430824',
                  compName: 'Select',
                  id: '453461',
                },
                line_number: 11,
                callback1: [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '9681593',
                        options: {
                          context: '$selectedData_453461[0]$',
                          operate: 'notEmpty',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                      {
                        options: {
                          context: '$selectedData_477201[0]$',
                          operate: 'notEmpty',
                        },
                        condId: '3613044',
                        connector: '&&',
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 169923828373962100,
                    elseIfs: [],
                    line_number: 12,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 169923828373978140,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '7223374',
                          pageJsonId: '8430824',
                          actionTitle: '设置分成——成功则都不为福建',
                          code: 'function main(data,state,success,fail){var as=selectedData_477201[0];var zs=selectedData_453461[0];var f=data.feeInfo.revenueShare;var a=data.feeInfo.fromShare;var z=data.feeInfo.toShare;var result="";if(as.label!="\\u798F\\u5EFA"&&zs.label!="\\u798F\\u5EFA"){console.log("\\u90FD\\u4E0D\\u4E3A\\u798F\\u5EFA");result="\\u798F\\u5EFA\\uFF1A"+f+"\\uFF05\\uFF0C"+"A\\u7701\\u4EFD\\uFF1A"+a+"\\uFF05\\uFF0C"+"Z\\u7701\\u4EFD\\uFF1A"+z+"\\uFF05";if(parseFloat(f)+parseFloat(a)+parseFloat(z)!=100){fail()}else{success()}}else{console.log("\\u6709\\u4E00\\u4E2A\\u4E3A\\u798F\\u5EFA");data.feeInfo.revenueShare="";result="A\\u7701\\u4EFD\\uFF1A"+a+"\\uFF05\\uFF0C"+"Z\\u7701\\u4EFD\\uFF1A"+z+"\\uFF05";if(parseFloat(a)+parseFloat(z)!=100){fail()}else{success()}}data.feeInfo.revenueShareName=result};',
                        },
                        line_number: 13,
                        callback1: [
                          {
                            type: 'setDataSource',
                            dataId: 169923828373922430,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '216768',
                              pageJsonId: '8430824',
                              dataSourceId: 166452624216490180,
                              dataSourceName: 'feeInfo',
                              dataSourceRelType: 'custom',
                              dataSourceSetValue: [
                                {
                                  code: 'recoverNetCost',
                                  name: '可收回网络成本（月)',
                                  type: 'string',
                                  attrId: '8571626',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1',
                                  parentType: 'object',
                                  showInput: true,
                                  value: {
                                    type: [
                                      'form',
                                      'Form_981467',
                                      'getFieldsValue',
                                    ],
                                    code: 'recoverNetCost',
                                  },
                                  _codePath: ['recoverNetCost'],
                                  _idpath: ['8571626'],
                                },
                                {
                                  code: 'infoIncomeYear',
                                  name: '年信息化收入',
                                  type: 'string',
                                  attrId: '121017',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1',
                                  parentType: 'object',
                                  showInput: true,
                                  value: {
                                    type: [
                                      'form',
                                      'Form_981467',
                                      'getFieldsValue',
                                    ],
                                    code: 'infoIncomeYear',
                                  },
                                  _codePath: ['infoIncomeYear'],
                                  _idpath: ['121017'],
                                },
                                {
                                  code: 'lineFuncFee',
                                  name: '专线功能费(元)',
                                  type: 'string',
                                  attrId: '14036',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1',
                                  parentType: 'object',
                                  showInput: true,
                                  value: {
                                    type: [
                                      'form',
                                      'Form_981467',
                                      'getFieldsValue',
                                    ],
                                    code: 'lineFuncFee',
                                  },
                                  _codePath: ['lineFuncFee'],
                                  _idpath: ['14036'],
                                },
                                {
                                  code: 'maintenanceCost',
                                  name: '维护费(元/年)',
                                  type: 'string',
                                  attrId: '7039381',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1',
                                  parentType: 'object',
                                  showInput: true,
                                  value: {
                                    type: [
                                      'form',
                                      'Form_981467',
                                      'getFieldsValue',
                                    ],
                                    code: 'maintenanceCost',
                                  },
                                  _codePath: ['maintenanceCost'],
                                  _idpath: ['7039381'],
                                },
                                {
                                  code: 'oneInput',
                                  name: '一次性投入(元)',
                                  type: 'string',
                                  attrId: '009453',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1',
                                  parentType: 'object',
                                  showInput: true,
                                  value: {
                                    type: [
                                      'form',
                                      'Form_981467',
                                      'getFieldsValue',
                                    ],
                                    code: 'oneInput',
                                  },
                                  _codePath: ['oneInput'],
                                  _idpath: ['009453'],
                                },
                                {
                                  code: 'revenueShare',
                                  name: '收入分成',
                                  type: 'string',
                                  attrId: '1462483',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1',
                                  parentType: 'object',
                                  showInput: true,
                                  value: {
                                    type: [
                                      'form',
                                      'Form_981467',
                                      'getFieldsValue',
                                    ],
                                    code: 'revenueShare',
                                  },
                                  _codePath: ['revenueShare'],
                                  _idpath: ['1462483'],
                                },
                                {
                                  code: 'toShare',
                                  name: 'Z端分成',
                                  type: 'string',
                                  attrId: '099531',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1',
                                  parentType: 'object',
                                  showInput: true,
                                  value: {
                                    type: [
                                      'form',
                                      'Form_981467',
                                      'getFieldsValue',
                                    ],
                                    code: 'toShare',
                                  },
                                  _codePath: ['toShare'],
                                  _idpath: ['099531'],
                                },
                                {
                                  code: 'fromShare',
                                  name: 'A端分成',
                                  type: 'string',
                                  attrId: '1095926',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1',
                                  parentType: 'object',
                                  showInput: true,
                                  value: {
                                    type: [
                                      'form',
                                      'Form_981467',
                                      'getFieldsValue',
                                    ],
                                    code: 'fromShare',
                                  },
                                  _codePath: ['fromShare'],
                                  _idpath: ['1095926'],
                                },
                                {
                                  code: 'singedTime',
                                  name: '签约时间',
                                  type: 'string',
                                  attrId: '0888886',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1',
                                  parentType: 'object',
                                  showInput: true,
                                  value: {
                                    type: [
                                      'form',
                                      'Form_981467',
                                      'getFieldsValue',
                                    ],
                                    code: 'singedTime',
                                  },
                                  _codePath: ['singedTime'],
                                  _idpath: ['0888886'],
                                },
                                {
                                  code: 'receiptsPriceSum',
                                  name: '总实收价',
                                  type: 'string',
                                  attrId: '0885963',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1',
                                  parentType: 'object',
                                  showInput: true,
                                  value: {
                                    type: [
                                      'form',
                                      'Form_981467',
                                      'getFieldsValue',
                                    ],
                                    code: 'receiptsPriceSum',
                                  },
                                  _codePath: ['receiptsPriceSum'],
                                  _idpath: ['0885963'],
                                },
                                {
                                  code: 'officePrice',
                                  name: '总部管控价格',
                                  type: 'string',
                                  attrId: '892599',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1',
                                  parentType: 'object',
                                  showInput: true,
                                  value: {
                                    type: [
                                      'form',
                                      'Form_981467',
                                      'getFieldsValue',
                                    ],
                                    code: 'officePrice',
                                  },
                                  _codePath: ['officePrice'],
                                  _idpath: ['892599'],
                                },
                                {
                                  code: 'lastDiscount',
                                  name: '最终折扣',
                                  type: 'string',
                                  attrId: '836689',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1',
                                  parentType: 'object',
                                  showInput: true,
                                  value: {
                                    type: [
                                      'form',
                                      'Form_981467',
                                      'getFieldsValue',
                                    ],
                                    code: 'lastDiscount',
                                  },
                                  _codePath: ['lastDiscount'],
                                  _idpath: ['836689'],
                                },
                                {
                                  code: 'receiptsPrice',
                                  name: '实收价',
                                  type: 'string',
                                  attrId: '483326',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1',
                                  parentType: 'object',
                                  showInput: true,
                                  value: {
                                    type: [
                                      'form',
                                      'Form_981467',
                                      'getFieldsValue',
                                    ],
                                    code: 'receiptsPrice',
                                  },
                                  _codePath: ['receiptsPrice'],
                                  _idpath: ['483326'],
                                },
                                {
                                  code: 'standardPrice',
                                  name: '省内标准价格',
                                  type: 'string',
                                  attrId: '411916',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1',
                                  parentType: 'object',
                                  showInput: true,
                                  value: {
                                    type: [
                                      'form',
                                      'Form_981467',
                                      'getFieldsValue',
                                    ],
                                    code: 'standardPrice',
                                  },
                                  _codePath: ['standardPrice'],
                                  _idpath: ['411916'],
                                },
                                {
                                  code: 'toProvince',
                                  name: 'Z端省份',
                                  type: 'string',
                                  attrId: '719928',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1',
                                  parentType: 'object',
                                  showInput: true,
                                  value: {
                                    type: [
                                      'form',
                                      'Form_981467',
                                      'getFieldsValue',
                                    ],
                                    code: 'toProvince',
                                  },
                                  _codePath: ['toProvince'],
                                  _idpath: ['719928'],
                                },
                                {
                                  code: 'toAddress',
                                  name: 'Z端地址',
                                  type: 'string',
                                  attrId: '7259194',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1',
                                  parentType: 'object',
                                  showInput: true,
                                  value: {
                                    type: [
                                      'form',
                                      'Form_981467',
                                      'getFieldsValue',
                                    ],
                                    code: 'toAddress',
                                  },
                                  _codePath: ['toAddress'],
                                  _idpath: ['7259194'],
                                },
                                {
                                  code: 'toCityText',
                                  name: 'Z端地市',
                                  type: 'string',
                                  attrId: '6278025',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1',
                                  parentType: 'object',
                                  showInput: true,
                                  value: {
                                    type: [
                                      'form',
                                      'Form_981467',
                                      'getFieldsValue',
                                    ],
                                    code: 'toCityText',
                                  },
                                  _codePath: ['toCityText'],
                                  _idpath: ['6278025'],
                                },
                                {
                                  code: 'fromCityText',
                                  name: 'A端地市',
                                  type: 'string',
                                  attrId: '696137',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1',
                                  parentType: 'object',
                                  showInput: true,
                                  value: {
                                    type: [
                                      'form',
                                      'Form_981467',
                                      'getFieldsValue',
                                    ],
                                    code: 'fromCityText',
                                  },
                                  _codePath: ['fromCityText'],
                                  _idpath: ['696137'],
                                },
                                {
                                  code: 'fromCity',
                                  name: 'A端地市',
                                  type: 'string',
                                  attrId: '734603',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1',
                                  parentType: 'object',
                                  showInput: true,
                                  value: {
                                    type: [
                                      'form',
                                      'Form_981467',
                                      'getFieldsValue',
                                    ],
                                    code: 'fromCity',
                                  },
                                  _codePath: ['fromCity'],
                                  _idpath: ['734603'],
                                },
                                {
                                  code: 'fromProvince',
                                  name: 'A端省份',
                                  type: 'string',
                                  attrId: '4746006',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1',
                                  parentType: 'object',
                                  showInput: true,
                                  value: {
                                    type: [
                                      'form',
                                      'Form_981467',
                                      'getFieldsValue',
                                    ],
                                    code: 'fromProvince',
                                  },
                                  _codePath: ['fromProvince'],
                                  _idpath: ['4746006'],
                                },
                                {
                                  code: 'fromAddress',
                                  name: 'A端地址',
                                  type: 'string',
                                  attrId: '6264173',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1',
                                  parentType: 'object',
                                  showInput: true,
                                  value: {
                                    type: [
                                      'form',
                                      'Form_981467',
                                      'getFieldsValue',
                                    ],
                                    code: 'fromAddress',
                                  },
                                  _codePath: ['fromAddress'],
                                  _idpath: ['6264173'],
                                },
                                {
                                  code: 'toCity',
                                  name: 'Z端地市',
                                  type: 'string',
                                  attrId: '904957',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1',
                                  parentType: 'object',
                                  showInput: true,
                                  value: {
                                    type: [
                                      'form',
                                      'Form_981467',
                                      'getFieldsValue',
                                    ],
                                    code: 'toCity',
                                  },
                                  _codePath: ['toCity'],
                                  _idpath: ['904957'],
                                },
                                {
                                  code: 'count',
                                  name: '条数',
                                  type: 'string',
                                  attrId: '811781',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1',
                                  parentType: 'object',
                                  showInput: true,
                                  value: {
                                    type: [
                                      'form',
                                      'Form_981467',
                                      'getFieldsValue',
                                    ],
                                    code: 'count',
                                  },
                                  _codePath: ['count'],
                                  _idpath: ['811781'],
                                },
                                {
                                  code: 'bandwidth',
                                  name: '带宽',
                                  type: 'string',
                                  attrId: '9558123',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1',
                                  parentType: 'object',
                                  showInput: true,
                                  value: {
                                    type: [
                                      'form',
                                      'Form_981467',
                                      'getFieldsValue',
                                    ],
                                    code: 'bandwidth',
                                  },
                                  _codePath: ['bandwidth'],
                                  _idpath: ['9558123'],
                                },
                                {
                                  code: 'busiType',
                                  name: '业务类型',
                                  type: 'string',
                                  attrId: '435897',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1',
                                  parentType: 'object',
                                  showInput: true,
                                  value: {
                                    type: [
                                      'form',
                                      'Form_981467',
                                      'getFieldsValue',
                                    ],
                                    code: 'busiType',
                                  },
                                  _codePath: ['busiType'],
                                  _idpath: ['435897'],
                                },
                                {
                                  attrId: '4662965',
                                  code: 'accessWay',
                                  name: '接入方式',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                  value: {
                                    type: [
                                      'form',
                                      'Form_981467',
                                      'getFieldsValue',
                                    ],
                                    code: 'accessWay',
                                  },
                                  _codePath: ['accessWay'],
                                  _idpath: ['4662965'],
                                },
                                {
                                  attrId: '437556',
                                  code: 'lineType',
                                  name: '专线类型',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                  value: {
                                    type: [
                                      'form',
                                      'Form_981467',
                                      'getFieldsValue',
                                    ],
                                    code: 'lineType',
                                  },
                                  _codePath: ['lineType'],
                                  _idpath: ['437556'],
                                },
                                {
                                  attrId: '6720962',
                                  code: 'busiTypeName',
                                  name: '业务类型名称',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                  _codePath: ['busiTypeName'],
                                  _idpath: ['6720962'],
                                },
                                {
                                  attrId: '904194',
                                  code: 'bandwidthName',
                                  name: '带宽名称',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                  _codePath: ['bandwidthName'],
                                  _idpath: ['904194'],
                                },
                                {
                                  attrId: '8290088',
                                  code: 'flag',
                                  name: '标识',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                  _codePath: ['flag'],
                                  _idpath: ['8290088'],
                                },
                                {
                                  attrId: '326716',
                                  code: 'fromProvinceName',
                                  name: 'A端省份名字',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                  _codePath: ['fromProvinceName'],
                                  _idpath: ['326716'],
                                },
                                {
                                  attrId: '326753',
                                  code: 'toProvinceName',
                                  name: 'Z端省份名字',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                  _codePath: ['toProvinceName'],
                                  _idpath: ['326753'],
                                },
                                {
                                  attrId: '312459',
                                  code: 'revenueShareName',
                                  name: '各收入分成',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                  _codePath: ['revenueShareName'],
                                  _idpath: ['312459'],
                                },
                              ],
                              operateType: 1,
                              onlySetPatch: true,
                              otherObjectArrayOptions: {},
                              targetDataSourcePaths: [],
                            },
                            line_number: 14,
                            callback1: [
                              {
                                type: 'getValue',
                                dataId: 169923828373954300,
                                options: {
                                  compId: 'Input_4646994',
                                  compLib: 'comm',
                                  pageJsonId: '8430824',
                                  compName: 'Input',
                                  id: '9166354',
                                },
                                line_number: 15,
                                callback1: [
                                  {
                                    type: 'getValue',
                                    dataId: 169923828373950530,
                                    options: {
                                      compId: 'Input_022401',
                                      compLib: 'comm',
                                      pageJsonId: '8430824',
                                      compName: 'Input',
                                      id: '6976495',
                                    },
                                    line_number: 16,
                                    callback1: [
                                      {
                                        type: 'customActionCode',
                                        dataId: 169923828373934980,
                                        options: {
                                          compId: 'customActionCode',
                                          compName: 'page',
                                          id: '252167',
                                          pageJsonId: '8430824',
                                          actionTitle: '',
                                          code: 'function main(data,state,success,fail){var oldRowId=data.feeInfo.rowId;if(state.feeInfo==undefined||state.feeInfo==null){var min=0;var max=10000;var rowId=Math.round(Math.random()*(max-min))+min;data.feeInfo.rowId=rowId}else{data.feeInfo.rowId=oldRowId}var officePrice=parseFloat(value_9166354);var onePrice=parseFloat(value_6976495);if(onePrice<officePrice){data.feeInfo.flag=1}else{data.feeInfo.flag=2}success(data.feeInfo)};',
                                        },
                                        line_number: 17,
                                        callback1: [
                                          {
                                            type: 'okCallbackData',
                                            dataId: 169923828373900220,
                                            options: {
                                              compId: 'okCallbackData',
                                              compName: 'page',
                                              id: '976338',
                                              pageJsonId: '8430824',
                                              params: '$data_252167$',
                                            },
                                            line_number: 18,
                                          },
                                          {
                                            type: 'closeModal',
                                            dataId: 169923828373994050,
                                            options: {
                                              compId: 'closeModal',
                                              compName: 'page',
                                              id: '128187',
                                              pageJsonId: '8430824',
                                            },
                                            line_number: 19,
                                          },
                                        ],
                                        callback2: [],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                            callback2: [],
                          },
                        ],
                        callback2: [
                          {
                            type: 'showMessage',
                            dataId: 169923828373945200,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '198816',
                              pageJsonId: '8430824',
                              type: 'info',
                              value: '收入分成相加应等于100%',
                            },
                            line_number: 20,
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
        ],
        callback2: [],
      },
    ];
    eventDatavalidateCurrentForm14.params = [] || [];
    CMDGenerator(eventDatavalidateCurrentForm14, {}, 'validateCurrentForm', {
      id: 'validateCurrentForm',
      name: 'validateCurrentForm',
      type: 'validateCurrentForm',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal: any = [
      {
        type: 'closeModal',
        dataId: '3594441_1',
        options: { compId: 'page', compName: 'page', id: '7285676' },
        line_number: 1,
      },
    ];
    eventDatacloseModal.params = [] || [];
    CMDGenerator(eventDatacloseModal, {}, 'closeModal', {
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
    const eventDataapiRequest78: any = [
      {
        type: 'apiRequest',
        dataId: 166530115300733630,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '14766',
          pageJsonId: '8430824',
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
              code: 'header',
              name: '请求头参数',
              attrType: 'object',
              _id: 'header',
              compType: 'Input',
              parents: [],
              id: 'header',
              dataKey: '14766_header',
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
              dataKey: '14766_path',
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
              dataKey: '14766_query',
              key: '2',
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
                  _id: 'body.catalogCode',
                  compType: 'Input',
                  name: 'catalogCode',
                  parents: ['body'],
                  id: 'body.catalogCode',
                  dataKey: '14766_body.catalogCode',
                  value: { type: ['context', '$state.catalogCode$'], code: '' },
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-0',
                },
                {
                  code: 'attrCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.attrCode',
                  compType: 'Input',
                  name: 'attrCode',
                  parents: ['body'],
                  id: 'body.attrCode',
                  dataKey: '14766_body.attrCode',
                  value: { type: ['customize'], code: 'busiType' },
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-1',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '14766_body',
              key: '3',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166530137693066660,
            options: {
              compId: 'Input_busiType_956176',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '908097',
              data: '$reply_14766?.resultData$',
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
    eventDataapiRequest78.params = [] || [];
    CMDGenerator(eventDataapiRequest78, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest79: any = [
      {
        type: 'apiRequest',
        dataId: 166530305308729150,
        shielding: true,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '240965',
          pageJsonId: '8430824',
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
              code: 'header',
              name: '请求头参数',
              attrType: 'object',
              _id: 'header',
              compType: 'Input',
              parents: [],
              id: 'header',
              dataKey: '240965_header',
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
              dataKey: '240965_path',
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
              dataKey: '240965_query',
              key: '2',
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
                  _id: 'body.catalogCode',
                  compType: 'Input',
                  name: 'catalogCode',
                  parents: ['body'],
                  id: 'body.catalogCode',
                  dataKey: '240965_body.catalogCode',
                  value: { type: ['context', '$state.catalogCode$'], code: '' },
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-0',
                },
                {
                  code: 'attrCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.attrCode',
                  compType: 'Input',
                  name: 'attrCode',
                  parents: ['body'],
                  id: 'body.attrCode',
                  dataKey: '240965_body.attrCode',
                  value: { type: ['customize'], code: 'bandwidth' },
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-1',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '240965_body',
              key: '3',
            },
          ],
        },
        line_number: 3,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166530307974384420,
            shielding: true,
            options: {
              compId: 'Input_bandwidth_198362',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '511085',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
              data: '$reply_240965?.resultData$',
            },
            line_number: 4,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest79.params = [] || [];
    CMDGenerator(eventDataapiRequest79, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest80: any = [
      {
        type: 'apiRequest',
        dataId: 166547108393365630,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '847654',
          pageJsonId: '8430824',
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
                      dataKey: '847654_root.body.catalogCode',
                      value: {
                        type: ['context', '$state.catalogCode$'],
                        code: '',
                      },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-0',
                      _deletable: true,
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
                      dataKey: '847654_root.body.attrCode',
                      value: { type: ['customize'], code: 'accessWay' },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                      _deletable: true,
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.body',
                  dataKey: '847654_root.body',
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
              dataKey: '847654_root',
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
                  code: 'catalogCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.catalogCode',
                  compType: 'Input',
                  name: 'catalogCode',
                  parents: ['body'],
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-0',
                },
                {
                  code: 'attrCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.attrCode',
                  compType: 'Input',
                  name: 'attrCode',
                  parents: ['body'],
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-1',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              key: '3',
            },
          ],
        },
        line_number: 5,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 169865908113035330,
            options: {
              compId: 'Input_areaType_945066',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '3428426',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
              data: '$reply_847654?.resultData$',
            },
            line_number: 6,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest80.params = [] || [];
    CMDGenerator(eventDataapiRequest80, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest81: any = [
      {
        type: 'apiRequest',
        dataId: 169866269585517280,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '525088',
          pageJsonId: '8430824',
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
                      dataKey: '525088_root.body.catalogCode',
                      value: {
                        type: ['context', '$state.catalogCode$'],
                        code: '',
                      },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-0',
                      _deletable: true,
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
                      dataKey: '525088_root.body.attrCode',
                      value: { type: ['customize'], code: 'fromProvince' },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                      _deletable: true,
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.body',
                  dataKey: '525088_root.body',
                  key: '0-3',
                  parentType: 'object',
                  parentKey: '0',
                  _deletable: true,
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '525088_root',
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
                  code: 'catalogCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.catalogCode',
                  compType: 'Input',
                  name: 'catalogCode',
                  parents: ['body'],
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-0',
                },
                {
                  code: 'attrCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.attrCode',
                  compType: 'Input',
                  name: 'attrCode',
                  parents: ['body'],
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-1',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              key: '3',
            },
          ],
        },
        line_number: 7,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 169866271203923680,
            options: {
              compId: 'Input_standardPrice_89896',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '1858351',
              valueKey: 'attrValue',
              labelKey: 'attrValueName',
              data: '$reply_525088?.resultData$',
            },
            line_number: 8,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 169937919429704000,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '360244',
                  pageJsonId: '8430824',
                  code: 'function main(data,state,success,fail){console.log("===\\u8BBE\\u7F6E\\u9ED8\\u8BA4\\u503C====");console.log(data);if(data.feeInfo.fromProvince==undefined||data.feeInfo.fromProvince==""){data.feeInfo.fromProvince="9";data.feeInfo.fromProvinceName="\\u798F\\u5EFA";console.log("===\\u8BBE\\u7F6E\\u6570\\u636E\\u6E90\\u503C",data);success()}};',
                  actionTitle: '设置默认值福建',
                },
                line_number: 9,
                callback1: [
                  {
                    type: 'setDataSource',
                    dataId: 169937919429749540,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '357612',
                      pageJsonId: '8430824',
                      dataSourceId: 166452624216490180,
                      dataSourceName: 'feeInfo',
                      dataSourceRelType: 'custom',
                      dataSourceSetValue: [
                        {
                          code: 'recoverNetCost',
                          name: '可收回网络成本（月)',
                          type: 'string',
                          attrId: '8571626',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'infoIncomeYear',
                          name: '年信息化收入',
                          type: 'string',
                          attrId: '121017',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'lineFuncFee',
                          name: '专线功能费(元)',
                          type: 'string',
                          attrId: '14036',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'maintenanceCost',
                          name: '维护费(元/年)',
                          type: 'string',
                          attrId: '7039381',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'oneInput',
                          name: '一次性投入(元)',
                          type: 'string',
                          attrId: '009453',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'revenueShare',
                          name: '收入分成',
                          type: 'string',
                          attrId: '1462483',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'toShare',
                          name: 'Z端分成',
                          type: 'string',
                          attrId: '099531',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'fromShare',
                          name: 'A端分成',
                          type: 'string',
                          attrId: '1095926',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'singedTime',
                          name: '签约时间',
                          type: 'string',
                          attrId: '0888886',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'receiptsPriceSum',
                          name: '总实收价',
                          type: 'string',
                          attrId: '0885963',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'officePrice',
                          name: '总部管控价格',
                          type: 'string',
                          attrId: '892599',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'lastDiscount',
                          name: '最终折扣',
                          type: 'string',
                          attrId: '836689',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'receiptsPrice',
                          name: '实收价',
                          type: 'string',
                          attrId: '483326',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'standardPrice',
                          name: '省内标准价格',
                          type: 'string',
                          attrId: '411916',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'toProvince',
                          name: 'Z端省份',
                          type: 'string',
                          attrId: '719928',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'toAddress',
                          name: 'Z端地址',
                          type: 'string',
                          attrId: '7259194',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'toCityText',
                          name: 'Z端地市',
                          type: 'string',
                          attrId: '6278025',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'fromCityText',
                          name: 'A端地市',
                          type: 'string',
                          attrId: '696137',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'fromCity',
                          name: 'A端地市',
                          type: 'string',
                          attrId: '734603',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'fromProvince',
                          name: 'A端省份',
                          type: 'string',
                          attrId: '4746006',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'fromAddress',
                          name: 'A端地址',
                          type: 'string',
                          attrId: '6264173',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'toCity',
                          name: 'Z端地市',
                          type: 'string',
                          attrId: '904957',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'count',
                          name: '条数',
                          type: 'string',
                          attrId: '811781',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'bandwidth',
                          name: '带宽',
                          type: 'string',
                          attrId: '9558123',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'busiType',
                          name: '业务类型',
                          type: 'string',
                          attrId: '435897',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          attrId: '4662965',
                          code: 'accessWay',
                          name: '接入方式',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '437556',
                          code: 'lineType',
                          name: '专线类型',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '6720962',
                          code: 'busiTypeName',
                          name: '业务类型名称',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '904194',
                          code: 'bandwidthName',
                          name: '带宽名称',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '8290088',
                          code: 'flag',
                          name: '标识',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '326716',
                          code: 'fromProvinceName',
                          name: 'A端省份名字',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '326753',
                          code: 'toProvinceName',
                          name: 'Z端省份名字',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '312459',
                          code: 'revenueShareName',
                          name: '各收入分成',
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
                    line_number: 10,
                    callback1: [],
                    callback2: [],
                  },
                ],
                callback2: [],
              },
            ],
          },
          {
            type: 'reloadSelectData',
            dataId: 169866277667518500,
            options: {
              compId: 'Select_8264436',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '031947',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
              data: '$reply_525088?.resultData$',
            },
            line_number: 11,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 169937929184049400,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '986459',
                  pageJsonId: '8430824',
                  code: 'function main(data,state,success,fail){console.log("===\\u8BBE\\u7F6E\\u9ED8\\u8BA4\\u503C====");console.log(data);if(data.feeInfo.toProvince==undefined||data.feeInfo.toProvince==""){data.feeInfo.toProvince="9";data.feeInfo.toProvinceName="\\u798F\\u5EFA";console.log("===\\u8BBE\\u7F6E\\u6570\\u636E\\u6E90\\u503C",data);success()}};',
                  actionTitle: '设置默认值福建',
                },
                line_number: 12,
                callback1: [
                  {
                    type: 'setDataSource',
                    dataId: 169937929184086000,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '746122',
                      pageJsonId: '8430824',
                      dataSourceId: 166452624216490180,
                      dataSourceName: 'feeInfo',
                      dataSourceRelType: 'custom',
                      dataSourceSetValue: [
                        {
                          code: 'recoverNetCost',
                          name: '可收回网络成本（月)',
                          type: 'string',
                          attrId: '8571626',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'infoIncomeYear',
                          name: '年信息化收入',
                          type: 'string',
                          attrId: '121017',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'lineFuncFee',
                          name: '专线功能费(元)',
                          type: 'string',
                          attrId: '14036',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'maintenanceCost',
                          name: '维护费(元/年)',
                          type: 'string',
                          attrId: '7039381',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'oneInput',
                          name: '一次性投入(元)',
                          type: 'string',
                          attrId: '009453',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'revenueShare',
                          name: '收入分成',
                          type: 'string',
                          attrId: '1462483',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'toShare',
                          name: 'Z端分成',
                          type: 'string',
                          attrId: '099531',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'fromShare',
                          name: 'A端分成',
                          type: 'string',
                          attrId: '1095926',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'singedTime',
                          name: '签约时间',
                          type: 'string',
                          attrId: '0888886',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'receiptsPriceSum',
                          name: '总实收价',
                          type: 'string',
                          attrId: '0885963',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'officePrice',
                          name: '总部管控价格',
                          type: 'string',
                          attrId: '892599',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'lastDiscount',
                          name: '最终折扣',
                          type: 'string',
                          attrId: '836689',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'receiptsPrice',
                          name: '实收价',
                          type: 'string',
                          attrId: '483326',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'standardPrice',
                          name: '省内标准价格',
                          type: 'string',
                          attrId: '411916',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'toProvince',
                          name: 'Z端省份',
                          type: 'string',
                          attrId: '719928',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'toAddress',
                          name: 'Z端地址',
                          type: 'string',
                          attrId: '7259194',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'toCityText',
                          name: 'Z端地市',
                          type: 'string',
                          attrId: '6278025',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'fromCityText',
                          name: 'A端地市',
                          type: 'string',
                          attrId: '696137',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'fromCity',
                          name: 'A端地市',
                          type: 'string',
                          attrId: '734603',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'fromProvince',
                          name: 'A端省份',
                          type: 'string',
                          attrId: '4746006',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'fromAddress',
                          name: 'A端地址',
                          type: 'string',
                          attrId: '6264173',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'toCity',
                          name: 'Z端地市',
                          type: 'string',
                          attrId: '904957',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'count',
                          name: '条数',
                          type: 'string',
                          attrId: '811781',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'bandwidth',
                          name: '带宽',
                          type: 'string',
                          attrId: '9558123',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          code: 'busiType',
                          name: '业务类型',
                          type: 'string',
                          attrId: '435897',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                          showInput: true,
                        },
                        {
                          attrId: '4662965',
                          code: 'accessWay',
                          name: '接入方式',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '437556',
                          code: 'lineType',
                          name: '专线类型',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '6720962',
                          code: 'busiTypeName',
                          name: '业务类型名称',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '904194',
                          code: 'bandwidthName',
                          name: '带宽名称',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '8290088',
                          code: 'flag',
                          name: '标识',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '326716',
                          code: 'fromProvinceName',
                          name: 'A端省份名字',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '326753',
                          code: 'toProvinceName',
                          name: 'Z端省份名字',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '312459',
                          code: 'revenueShareName',
                          name: '各收入分成',
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
                    line_number: 13,
                    callback1: [],
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
    eventDataapiRequest81.params = [] || [];
    CMDGenerator(eventDataapiRequest81, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest82: any = [
      {
        type: 'apiRequest',
        dataId: 169866279046071070,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '6607149',
          pageJsonId: '8430824',
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
                      dataKey: '6607149_root.body.catalogCode',
                      value: {
                        type: ['context', '$state.catalogCode$'],
                        code: '',
                      },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-0',
                      _deletable: true,
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
                      dataKey: '6607149_root.body.attrCode',
                      value: { type: ['customize'], code: 'fromCity' },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                      _deletable: true,
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.body',
                  dataKey: '6607149_root.body',
                  key: '0-3',
                  parentType: 'object',
                  parentKey: '0',
                  _deletable: true,
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '6607149_root',
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
                  code: 'catalogCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.catalogCode',
                  compType: 'Input',
                  name: 'catalogCode',
                  parents: ['body'],
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-0',
                },
                {
                  code: 'attrCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.attrCode',
                  compType: 'Input',
                  name: 'attrCode',
                  parents: ['body'],
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-1',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              key: '3',
            },
          ],
        },
        line_number: 14,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 169866282332363230,
            options: {
              compId: 'Input_2889604',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '926778',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
              data: '$reply_6607149?.resultData$',
            },
            line_number: 15,
            callback1: [],
          },
          {
            type: 'reloadSelectData',
            dataId: 169866282957206560,
            options: {
              compId: 'Select_886724',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '0164058',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
              data: '$reply_6607149?.resultData$',
            },
            line_number: 16,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest82.params = [] || [];
    CMDGenerator(eventDataapiRequest82, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest83: any = [
      {
        type: 'apiRequest',
        dataId: 169872017796689440,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '5872027',
          pageJsonId: '8430824',
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
                      dataKey: '5872027_root.body.catalogCode',
                      value: {
                        type: ['context', '$state.catalogCode$'],
                        code: '',
                      },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-0',
                      _deletable: true,
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
                      dataKey: '5872027_root.body.attrCode',
                      value: { type: ['customize'], code: 'lineType' },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                      _deletable: true,
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.body',
                  dataKey: '5872027_root.body',
                  key: '0-3',
                  parentType: 'object',
                  parentKey: '0',
                  _deletable: true,
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '5872027_root',
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
                  code: 'catalogCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.catalogCode',
                  compType: 'Input',
                  name: 'catalogCode',
                  parents: ['body'],
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-0',
                },
                {
                  code: 'attrCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.attrCode',
                  compType: 'Input',
                  name: 'attrCode',
                  parents: ['body'],
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-1',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              key: '3',
            },
          ],
        },
        line_number: 17,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 169872038707103500,
            options: {
              compId: 'Input_719179',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '3115389',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
              data: '$reply_5872027?.resultData$',
            },
            line_number: 18,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest83.params = [] || [];
    CMDGenerator(eventDataapiRequest83, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest84: any = [
      {
        type: 'apiRequest',
        dataId: 167386111804767330,
        shielding: true,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '59266',
          pageJsonId: '8430824',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'queryGroupLineRate',
          _apiCode: 'queryGroupLineRate',
          _source: 'rhin',
          _serviceId: '929637906224861184',
          _serviceTitle: '查询专线资费信息: queryGroupLineRate',
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
              dataKey: '1449723_header',
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
              dataKey: '1449723_path',
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
              dataKey: '1449723_query',
              key: '2',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              children: [
                {
                  code: 'bandWidth',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.bandWidth',
                  compType: 'Input',
                  name: 'bandWidth',
                  parents: ['body'],
                  id: 'body.bandWidth',
                  dataKey: '1449723_body.bandWidth',
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-1',
                },
                {
                  code: 'lineType',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.lineType',
                  compType: 'Input',
                  name: 'lineType',
                  parents: ['body'],
                  id: 'body.lineType',
                  dataKey: '1449723_body.lineType',
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-0',
                },
                {
                  code: 'productId',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.productId',
                  compType: 'Input',
                  name: 'productId',
                  parents: ['body'],
                  id: 'body.productId',
                  dataKey: '1449723_body.productId',
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-2',
                },
                {
                  code: 'status',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.status',
                  compType: 'Input',
                  name: 'status',
                  parents: ['body'],
                  id: 'body.status',
                  dataKey: '1449723_body.status',
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-3',
                },
                {
                  code: 'transferMode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.transferMode',
                  compType: 'Input',
                  name: 'transferMode',
                  parents: ['body'],
                  id: 'body.transferMode',
                  dataKey: '1449723_body.transferMode',
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-4',
                },
                {
                  code: 'catalogCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.catalogCode',
                  compType: 'Input',
                  name: 'catalogCode',
                  parents: ['body'],
                  id: 'body.catalogCode',
                  dataKey: '1449723_body.catalogCode',
                  value: { type: ['context', '$state.catalogCode$'], code: '' },
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-5',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '1449723_body',
              key: '3',
            },
          ],
        },
        line_number: 19,
        callback1: [
          {
            type: 'ifelse',
            shielding: true,
            condition: [
              {
                condId: '487137',
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$reply_59266.resultCode$',
                  operate: '==',
                  manualValue: '0',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
              {
                options: {
                  context: '$reply_59266.resultData.groupLineRateInfo$',
                  operate: 'notEmpty',
                },
                condId: '202022',
                connector: '&&',
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 167386111804755400,
            elseIfs: [],
            line_number: 20,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 167386111804754340,
                shielding: true,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '6082486',
                  pageJsonId: '8430824',
                  dataSourceId: 167386192810503330,
                  dataSourceName: 'groupLineRateData',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      code: 'groupLineRateInfo',
                      attrType: 'objectArray',
                      children: [
                        {
                          code: 'bandWidth',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '1',
                          defaultValue: '',
                          name: '属性',
                          attrId: '2277785',
                          initialData: { type: 'static', value: '1' },
                          parentKey: 'groupLineRateInfo',
                          parentType: 'objectArray',
                          parentCode: 'groupLineRateInfo',
                        },
                        {
                          code: 'configTime',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '20220417155847',
                          defaultValue: '',
                          name: '属性',
                          attrId: '9507814',
                          initialData: {
                            type: 'static',
                            value: '20220417155847',
                          },
                          parentKey: 'groupLineRateInfo',
                          parentType: 'objectArray',
                          parentCode: 'groupLineRateInfo',
                        },
                        {
                          code: 'portPrice',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '',
                          defaultValue: '',
                          name: '属性',
                          attrId: '9667206',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'groupLineRateInfo',
                          parentType: 'objectArray',
                          parentCode: 'groupLineRateInfo',
                        },
                        {
                          code: 'productId',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '3367',
                          defaultValue: '',
                          name: '属性',
                          attrId: '826875',
                          initialData: { type: 'static', value: '3367' },
                          parentKey: 'groupLineRateInfo',
                          parentType: 'objectArray',
                          parentCode: 'groupLineRateInfo',
                        },
                        {
                          code: 'linePrice',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '200000',
                          defaultValue: '',
                          name: '属性',
                          attrId: '187683',
                          initialData: { type: 'static', value: '200000' },
                          parentKey: 'groupLineRateInfo',
                          parentType: 'objectArray',
                          parentCode: 'groupLineRateInfo',
                        },
                        {
                          code: 'ipAmount',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '1',
                          defaultValue: '',
                          name: '属性',
                          attrId: '931143',
                          initialData: { type: 'static', value: '1' },
                          parentKey: 'groupLineRateInfo',
                          parentType: 'objectArray',
                          parentCode: 'groupLineRateInfo',
                        },
                        {
                          code: 'ipPrice',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '10000',
                          defaultValue: '',
                          name: '属性',
                          attrId: '75759',
                          initialData: { type: 'static', value: '10000' },
                          parentKey: 'groupLineRateInfo',
                          parentType: 'objectArray',
                          parentCode: 'groupLineRateInfo',
                        },
                        {
                          code: 'lineTypeName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '',
                          defaultValue: '',
                          name: '属性',
                          attrId: '452798',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'groupLineRateInfo',
                          parentType: 'objectArray',
                          parentCode: 'groupLineRateInfo',
                        },
                        {
                          code: 'lowDiscount',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '35',
                          defaultValue: '',
                          name: '属性',
                          attrId: '4721867',
                          initialData: { type: 'static', value: '35' },
                          parentKey: 'groupLineRateInfo',
                          parentType: 'objectArray',
                          parentCode: 'groupLineRateInfo',
                        },
                        {
                          code: 'configOperator',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '1010112',
                          defaultValue: '',
                          name: '属性',
                          attrId: '6707121',
                          initialData: { type: 'static', value: '1010112' },
                          parentKey: 'groupLineRateInfo',
                          parentType: 'objectArray',
                          parentCode: 'groupLineRateInfo',
                        },
                        {
                          code: 'transferModeName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: 'SDH',
                          defaultValue: '',
                          name: '属性',
                          attrId: '2835261',
                          initialData: { type: 'static', value: 'SDH' },
                          parentKey: 'groupLineRateInfo',
                          parentType: 'objectArray',
                          parentCode: 'groupLineRateInfo',
                        },
                        {
                          code: 'bandWidthName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '2M',
                          defaultValue: '',
                          name: '属性',
                          attrId: '5988504',
                          initialData: { type: 'static', value: '2M' },
                          parentKey: 'groupLineRateInfo',
                          parentType: 'objectArray',
                          parentCode: 'groupLineRateInfo',
                        },
                        {
                          code: 'ipv6Price',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '1',
                          defaultValue: '',
                          name: '属性',
                          attrId: '65242',
                          initialData: { type: 'static', value: '1' },
                          parentKey: 'groupLineRateInfo',
                          parentType: 'objectArray',
                          parentCode: 'groupLineRateInfo',
                        },
                        {
                          code: 'ipv6Amount',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '1',
                          defaultValue: '',
                          name: '属性',
                          attrId: '0845926',
                          initialData: { type: 'static', value: '1' },
                          parentKey: 'groupLineRateInfo',
                          parentType: 'objectArray',
                          parentCode: 'groupLineRateInfo',
                        },
                        {
                          code: 'lineType',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '',
                          defaultValue: '',
                          name: '属性',
                          attrId: '732054',
                          initialData: { type: 'static', value: '' },
                          parentKey: 'groupLineRateInfo',
                          parentType: 'objectArray',
                          parentCode: 'groupLineRateInfo',
                        },
                        {
                          code: 'transferMode',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '1',
                          defaultValue: '',
                          name: '属性',
                          attrId: '546357',
                          initialData: { type: 'static', value: '1' },
                          parentKey: 'groupLineRateInfo',
                          parentType: 'objectArray',
                          parentCode: 'groupLineRateInfo',
                        },
                        {
                          code: 'name',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '集团商务快线套餐',
                          defaultValue: '',
                          name: '属性',
                          attrId: '65596893',
                          initialData: {
                            type: 'static',
                            value: '集团商务快线套餐',
                          },
                          parentKey: 'groupLineRateInfo',
                          parentType: 'objectArray',
                          parentCode: 'groupLineRateInfo',
                        },
                        {
                          code: 'statusName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '生效',
                          defaultValue: '',
                          name: '属性',
                          attrId: '9581325',
                          initialData: { type: 'static', value: '生效' },
                          parentKey: 'groupLineRateInfo',
                          parentType: 'objectArray',
                          parentCode: 'groupLineRateInfo',
                        },
                        {
                          code: 'status',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '0',
                          defaultValue: '',
                          name: '属性',
                          attrId: '655548',
                          initialData: { type: 'static', value: '0' },
                          parentKey: 'groupLineRateInfo',
                          parentType: 'objectArray',
                          parentCode: 'groupLineRateInfo',
                        },
                        {
                          code: 'bandWidthDown',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '1',
                          defaultValue: '',
                          name: '属性',
                          attrId: '9724986',
                          initialData: { type: 'static', value: '1' },
                          parentKey: 'groupLineRateInfo',
                          parentType: 'objectArray',
                          parentCode: 'groupLineRateInfo',
                        },
                        {
                          code: 'bandWidthDownName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '2M',
                          defaultValue: '',
                          name: '属性',
                          attrId: '0691144',
                          initialData: { type: 'static', value: '2M' },
                          parentKey: 'groupLineRateInfo',
                          parentType: 'objectArray',
                          parentCode: 'groupLineRateInfo',
                        },
                      ],
                      name: '',
                      type: 'objectArray',
                      attrId: '204327',
                      initialData: { type: 'static' },
                      parentKey: '1',
                      parentType: 'object',
                      value: {
                        type: ['context', '$reply_59266$'],
                        code: 'resultData.groupLineRateInfo',
                        hideAttr: false,
                      },
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {
                    groupLineRateInfo: {
                      newData: '$reply_59266.resultData.groupLineRateInfo$',
                      operateType: 3,
                      onlySetPatch: true,
                    },
                  },
                },
                line_number: 21,
                callback1: [],
                callback2: [],
              },
              {
                type: 'customActionCode',
                dataId: 167533850158242880,
                shielding: true,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '835625',
                  pageJsonId: '8430824',
                  actionTitle: '区域类型',
                  code: 'function main(data,state,success,fail){var groupList=reply_59266.resultData.groupLineRateInfo;var lanList=[];for(var i=0;i<groupList.length;++i){var flag=true;var groupInfo=groupList[i];if(groupInfo.productId!="3514"||groupInfo.lineType==""||groupInfo.lineType==null){continue}for(var j=0;j<lanList.length;++j){if(lanList[j].lineType==groupInfo.lineType){flag=false;break}}if(flag){console.log("\\u533A\\u57DF\\u7C7B\\u578B",groupInfo);lanList.push(groupInfo)}}success(lanList)};',
                },
                line_number: 22,
                callback1: [
                  {
                    type: 'reloadSelectData',
                    dataId: 167533887058808960,
                    shielding: true,
                    options: {
                      compId: 'Input_areaType_945066',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Select',
                      id: '382892',
                      labelKey: 'lineTypeName',
                      valueKey: 'lineType',
                      data: '$data_835625$',
                    },
                    line_number: 23,
                    callback1: [],
                  },
                ],
                callback2: [],
              },
              {
                type: 'customActionCode',
                dataId: 167534197747662560,
                shielding: true,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '138771',
                  pageJsonId: '8430824',
                  actionTitle: '带宽',
                  code: 'function main(data,state,success,fail){var groupList=reply_59266.resultData.groupLineRateInfo;var lanList=[];for(var i=0;i<groupList.length;++i){var flag=true;var groupInfo=groupList[i];if(groupInfo.productId!="3514"||groupInfo.bandWidth==null||groupInfo.bandWidth==""){continue}for(var j=0;j<lanList.length;++j){if(lanList[j].bandWidth==groupInfo.bandWidth){flag=false;break}}if(flag){lanList.push(groupInfo)}}for(var _i=0;_i<lanList.length;++_i){for(var _j=_i+1;_j<lanList.length;++_j){var bandWidthCompara=-1;if(lanList[_j].bandWidthName.indexOf("M")!=-1){bandWidthCompara=parseFloat(lanList[_j].bandWidthName.split("M")[0])}else if(lanList[_j].bandWidthName.indexOf("G")!=-1){bandWidthCompara=parseFloat(lanList[_j].bandWidthName.split("G")[0])*1024}var bandWidth=-1;if(lanList[_i].bandWidthName.indexOf("M")!=-1){bandWidth=parseFloat(lanList[_i].bandWidthName.split("M")[0])}else if(lanList[_i].bandWidthName.indexOf("G")!=-1){bandWidth=parseFloat(lanList[_i].bandWidthName.split("G")[0])*1024}if(bandWidth>bandWidthCompara){var temp=lanList[_i];lanList[_i]=lanList[_j];lanList[_j]=temp}}}success(lanList)};',
                },
                line_number: 24,
                callback1: [
                  {
                    type: 'reloadSelectData',
                    dataId: 169871965544504100,
                    shielding: true,
                    options: {
                      compId: 'Select_371996',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Select',
                      id: '6004742',
                      labelKey: 'bandWidthName',
                      valueKey: 'bandWidth',
                      data: '$data_138771$',
                    },
                    line_number: 25,
                    callback1: [],
                  },
                ],
                callback2: [],
              },
              {
                type: 'customActionCode',
                dataId: 167534282301105760,
                shielding: true,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '473022',
                  pageJsonId: '8430824',
                  actionTitle: '接入方式',
                  code: 'function main(data,state,success,fail){var groupList=reply_59266.resultData.groupLineRateInfo;var lanList=[];for(var i=0;i<groupList.length;++i){var flag=true;var groupInfo=groupList[i];if(groupInfo.productId!="3514"||groupInfo.transferMode==null||groupInfo.transferMode==""){continue}for(var j=0;j<lanList.length;++j){if(lanList[j].transferMode==groupInfo.transferMode){flag=false;break}}if(flag){lanList.push(groupInfo)}}success(lanList)};',
                },
                line_number: 26,
                callback1: [
                  {
                    type: 'reloadSelectData',
                    dataId: 169866308146306720,
                    shielding: true,
                    options: {
                      compId: 'Input_areaType_945066',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Select',
                      id: '060288',
                      labelKey: 'transferModeName',
                      valueKey: 'transferMode',
                      data: '$data_473022$',
                    },
                    line_number: 27,
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
    ];
    eventDataapiRequest84.params = [] || [];
    CMDGenerator(eventDataapiRequest84, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest85: any = [
      {
        type: 'apiRequest',
        dataId: 169900481883135940,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '6640853',
          pageJsonId: '8430824',
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
                      dataKey: '6640853_root.body.catalogCode',
                      value: {
                        type: ['context', '$state.catalogCode$'],
                        code: '',
                      },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-0',
                      _deletable: true,
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
                      dataKey: '6640853_root.body.attrCode',
                      value: { type: ['customize'], code: 'bandwidth' },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                      _deletable: true,
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.body',
                  dataKey: '6640853_root.body',
                  key: '0-3',
                  parentType: 'object',
                  parentKey: '0',
                  _deletable: true,
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '6640853_root',
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
                  code: 'catalogCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.catalogCode',
                  compType: 'Input',
                  name: 'catalogCode',
                  parents: ['body'],
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-0',
                },
                {
                  code: 'attrCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.attrCode',
                  compType: 'Input',
                  name: 'attrCode',
                  parents: ['body'],
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-1',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              key: '3',
            },
          ],
        },
        line_number: 28,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 169900483354545180,
            options: {
              compId: 'Select_371996',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '391265',
              valueKey: 'attrValue',
              labelKey: 'attrValueName',
              data: '$reply_6640853?.resultData$',
            },
            line_number: 29,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest85.params = [] || [];
    CMDGenerator(eventDataapiRequest85, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse63: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '452131',
            options: { context: '$state.feeInfo$', operate: 'notEmpty' },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 167386144145118720,
        elseIfs: [],
        line_number: 30,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 169874448059282180,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '546527',
              pageJsonId: '8430824',
              code: 'function main(data,state,success,fail){data.feeInfo=state.feeInfo;success()};',
            },
            line_number: 31,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '3985294',
                    options: { context: '$data.feeInfo$', operate: 'notEmpty' },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 169874486866692540,
                elseIfs: [
                  {
                    dataName: 'elseIf',
                    dataId: 169874491556487940,
                    children: [],
                    condition: [],
                    value: 'elseIf',
                  },
                ],
                line_number: 32,
                callback1: [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '70153496',
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$data.feeInfo.fromProvince$',
                          operate: '==',
                          manualValue: '9',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 169874491109171870,
                    elseIfs: [
                      {
                        dataName: 'elseIf',
                        dataId: 169874491109127000,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 169874491109121630,
                            children: [],
                            todoOptions: ['required', 'selectComp'],
                            options: {
                              compId: ['Input_2889604'],
                              compName: 'page',
                              id: '016763',
                              pageJsonId: '8430824',
                              required: '',
                              compid: ['Input_2889604'],
                            },
                            actionObjId: 'sysSetRequired',
                            actionObjName: 'page',
                            value: 'sysSetRequired',
                            line_number: 39,
                          },
                          {
                            dataName: 'action',
                            dataId: 169874491109103800,
                            children: [],
                            todoOptions: ['visible', 'selectComp'],
                            options: {
                              compId: ['Input_2889604'],
                              compName: 'page',
                              id: '227544',
                              pageJsonId: '8430824',
                              visible: '',
                              compid: ['Input_2889604'],
                            },
                            actionObjId: 'sysSetVisible',
                            actionObjName: 'page',
                            value: 'sysSetVisible',
                            line_number: 40,
                          },
                          {
                            dataName: 'action',
                            dataId: 169874491109115900,
                            children: [],
                            todoOptions: ['required', 'selectComp'],
                            options: {
                              compId: ['Input_receiptsPrice_488443'],
                              compName: 'page',
                              id: '9950321',
                              pageJsonId: '8430824',
                              required: 'true',
                              compid: ['Input_receiptsPrice_488443'],
                            },
                            actionObjId: 'sysSetRequired',
                            actionObjName: 'page',
                            value: 'sysSetRequired',
                            line_number: 41,
                          },
                          {
                            dataName: 'action',
                            dataId: 169874491109159580,
                            children: [],
                            todoOptions: ['visible', 'selectComp'],
                            options: {
                              compId: ['Input_receiptsPrice_488443'],
                              compName: 'page',
                              id: '9478076',
                              pageJsonId: '8430824',
                              visible: 'true',
                              compid: ['Input_receiptsPrice_488443'],
                            },
                            actionObjId: 'sysSetVisible',
                            actionObjName: 'page',
                            value: 'sysSetVisible',
                            line_number: 42,
                          },
                        ],
                        condition: [],
                        value: 'elseIf',
                        callback: [
                          {
                            type: 'sysSetRequired',
                            dataId: 169874491109121630,
                            options: {
                              compId: ['Input_2889604'],
                              compName: 'page',
                              id: '016763',
                              pageJsonId: '8430824',
                              required: '',
                              compid: ['Input_2889604'],
                            },
                            line_number: 39,
                          },
                          {
                            type: 'sysSetVisible',
                            dataId: 169874491109103800,
                            options: {
                              compId: ['Input_2889604'],
                              compName: 'page',
                              id: '227544',
                              pageJsonId: '8430824',
                              visible: '',
                              compid: ['Input_2889604'],
                            },
                            line_number: 40,
                          },
                          {
                            type: 'sysSetRequired',
                            dataId: 169874491109115900,
                            options: {
                              compId: ['Input_receiptsPrice_488443'],
                              compName: 'page',
                              id: '9950321',
                              pageJsonId: '8430824',
                              required: 'true',
                              compid: ['Input_receiptsPrice_488443'],
                            },
                            line_number: 41,
                          },
                          {
                            type: 'sysSetVisible',
                            dataId: 169874491109159580,
                            options: {
                              compId: ['Input_receiptsPrice_488443'],
                              compName: 'page',
                              id: '9478076',
                              pageJsonId: '8430824',
                              visible: 'true',
                              compid: ['Input_receiptsPrice_488443'],
                            },
                            line_number: 42,
                          },
                        ],
                      },
                    ],
                    line_number: 33,
                    callback1: [
                      {
                        type: 'sysSetRequired',
                        dataId: 169874491109187870,
                        options: {
                          compId: ['Input_2889604'],
                          compName: 'page',
                          id: '8103383',
                          pageJsonId: '8430824',
                          required: 'true',
                          compid: ['Input_2889604'],
                        },
                        line_number: 34,
                      },
                      {
                        type: 'sysSetVisible',
                        dataId: 169874491109151740,
                        options: {
                          compId: ['Input_2889604'],
                          compName: 'page',
                          id: '693685',
                          pageJsonId: '8430824',
                          visible: 'true',
                          compid: ['Input_2889604'],
                        },
                        line_number: 35,
                      },
                      {
                        type: 'sysSetRequired',
                        dataId: 169874491109161950,
                        options: {
                          compId: ['Input_receiptsPrice_488443'],
                          compName: 'page',
                          id: '553358',
                          pageJsonId: '8430824',
                          required: '',
                          compid: ['Input_receiptsPrice_488443'],
                        },
                        line_number: 36,
                      },
                      {
                        type: 'sysSetVisible',
                        dataId: 169874491109184060,
                        options: {
                          compId: ['Input_receiptsPrice_488443'],
                          compName: 'page',
                          id: '509507',
                          pageJsonId: '8430824',
                          visible: '',
                          compid: ['Input_receiptsPrice_488443'],
                        },
                        line_number: 37,
                      },
                      {
                        type: 'console',
                        dataId: 169874640925763260,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '460325',
                          pageJsonId: '8430824',
                          value: ['===福建==='],
                        },
                        line_number: 38,
                      },
                    ],
                  },
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '70153496',
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$data.feeInfo.toProvince$',
                          operate: '==',
                          manualValue: '9',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 169874622812092220,
                    elseIfs: [
                      {
                        dataName: 'elseIf',
                        dataId: 169874622812103550,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 169874622812112350,
                            children: [],
                            todoOptions: ['required', 'selectComp'],
                            options: {
                              compId: ['Input_405627'],
                              compName: 'page',
                              id: '4914885',
                              pageJsonId: '8430824',
                              required: 'true',
                              compid: ['Input_405627'],
                            },
                            actionObjId: 'sysSetRequired',
                            actionObjName: 'page',
                            value: 'sysSetRequired',
                            line_number: 49,
                          },
                          {
                            dataName: 'action',
                            dataId: 169874622812123620,
                            children: [],
                            todoOptions: ['visible', 'selectComp'],
                            options: {
                              compId: ['Input_405627'],
                              compName: 'page',
                              id: '7332643',
                              pageJsonId: '8430824',
                              visible: 'true',
                              compid: ['Input_405627'],
                            },
                            actionObjId: 'sysSetVisible',
                            actionObjName: 'page',
                            value: 'sysSetVisible',
                            line_number: 50,
                          },
                          {
                            dataName: 'action',
                            dataId: 169874622812107500,
                            children: [],
                            todoOptions: ['required', 'selectComp'],
                            options: {
                              compId: ['Select_886724'],
                              compName: 'page',
                              id: '069188',
                              pageJsonId: '8430824',
                              required: '',
                              compid: ['Select_886724'],
                            },
                            actionObjId: 'sysSetRequired',
                            actionObjName: 'page',
                            value: 'sysSetRequired',
                            line_number: 51,
                          },
                          {
                            dataName: 'action',
                            dataId: 169874622812128580,
                            children: [],
                            todoOptions: ['visible', 'selectComp'],
                            options: {
                              compId: ['Select_886724'],
                              compName: 'page',
                              id: '902676',
                              pageJsonId: '8430824',
                              visible: '',
                              compid: ['Select_886724'],
                            },
                            actionObjId: 'sysSetVisible',
                            actionObjName: 'page',
                            value: 'sysSetVisible',
                            line_number: 52,
                          },
                        ],
                        condition: [],
                        value: 'elseIf',
                        callback: [
                          {
                            type: 'sysSetRequired',
                            dataId: 169874622812112350,
                            options: {
                              compId: ['Input_405627'],
                              compName: 'page',
                              id: '4914885',
                              pageJsonId: '8430824',
                              required: 'true',
                              compid: ['Input_405627'],
                            },
                            line_number: 49,
                          },
                          {
                            type: 'sysSetVisible',
                            dataId: 169874622812123620,
                            options: {
                              compId: ['Input_405627'],
                              compName: 'page',
                              id: '7332643',
                              pageJsonId: '8430824',
                              visible: 'true',
                              compid: ['Input_405627'],
                            },
                            line_number: 50,
                          },
                          {
                            type: 'sysSetRequired',
                            dataId: 169874622812107500,
                            options: {
                              compId: ['Select_886724'],
                              compName: 'page',
                              id: '069188',
                              pageJsonId: '8430824',
                              required: '',
                              compid: ['Select_886724'],
                            },
                            line_number: 51,
                          },
                          {
                            type: 'sysSetVisible',
                            dataId: 169874622812128580,
                            options: {
                              compId: ['Select_886724'],
                              compName: 'page',
                              id: '902676',
                              pageJsonId: '8430824',
                              visible: '',
                              compid: ['Select_886724'],
                            },
                            line_number: 52,
                          },
                        ],
                      },
                    ],
                    line_number: 43,
                    callback1: [
                      {
                        type: 'sysSetRequired',
                        dataId: 169874622812088200,
                        options: {
                          compId: ['Select_886724'],
                          compName: 'page',
                          id: '5377654',
                          pageJsonId: '8430824',
                          required: 'true',
                          compid: ['Select_886724'],
                        },
                        line_number: 44,
                      },
                      {
                        type: 'sysSetVisible',
                        dataId: 169874622812139040,
                        options: {
                          compId: ['Select_886724'],
                          compName: 'page',
                          id: '433225',
                          pageJsonId: '8430824',
                          visible: 'true',
                          compid: ['Select_886724'],
                        },
                        line_number: 45,
                      },
                      {
                        type: 'sysSetRequired',
                        dataId: 169874622812119000,
                        options: {
                          compId: ['Input_405627'],
                          compName: 'page',
                          id: '43397156',
                          pageJsonId: '8430824',
                          required: '',
                          compid: ['Input_405627'],
                        },
                        line_number: 46,
                      },
                      {
                        type: 'sysSetVisible',
                        dataId: 169874622812169920,
                        options: {
                          compId: ['Input_405627'],
                          compName: 'page',
                          id: '7894368',
                          pageJsonId: '8430824',
                          visible: '',
                          compid: ['Input_405627'],
                        },
                        line_number: 47,
                      },
                      {
                        type: 'console',
                        dataId: 169874664612093340,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '151471',
                          pageJsonId: '8430824',
                          value: ['===福建==='],
                        },
                        line_number: 48,
                      },
                    ],
                  },
                  {
                    type: 'console',
                    dataId: 16987463969951208,
                    options: {
                      compId: 'debug',
                      compName: 'system',
                      id: '937435',
                      pageJsonId: '8430824',
                      value: ['====设置地市==='],
                    },
                    line_number: 53,
                  },
                ],
              },
            ],
            callback2: [],
          },
          {
            type: 'ifelse',
            condition: [
              {
                condId: '074357',
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$state.isDetails$',
                  operate: '==',
                  manualValue: 'true',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 169934512009200900,
            elseIfs: [],
            line_number: 54,
            callback1: [
              {
                type: 'sysSetDisable',
                dataId: 169934514360128100,
                options: {
                  compId: ['Form_981467'],
                  compName: 'page',
                  id: '133104',
                  pageJsonId: '8430824',
                  disabled: 'true',
                  compid: ['Form_981467'],
                },
                line_number: 55,
              },
            ],
          },
          {
            type: 'console',
            dataId: 169934568047830850,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '937241',
              pageJsonId: '8430824',
              value: ['===组件状态===', '$state.isDetails$'],
            },
            line_number: 56,
          },
          {
            type: 'ifelse',
            condition: [
              {
                condId: '316672',
                options: {
                  context: '$data.feeInfo.fromProvince$',
                  operate: 'notEmpty',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
              {
                options: {
                  context: '$data.feeInfo.toProvince$',
                  operate: 'notEmpty',
                },
                condId: '471826',
                connector: '&&',
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 169937700090088060,
            elseIfs: [],
            line_number: 57,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 169937704024936480,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '641013',
                  pageJsonId: '8430824',
                  code: 'function main(data,state,success,fail){var a=data.feeInfo.fromProvince;var z=data.feeInfo.toProvince;console.log("a\\u7AEF",a);console.log("z\\u7AEF",z);if(a!="9"&&z!="9"){success()}else{fail()}};',
                },
                line_number: 58,
                callback1: [
                  {
                    type: 'sysSetVisible',
                    dataId: 169937705616630000,
                    options: {
                      compId: ['Input_449151'],
                      compName: 'page',
                      id: '975426',
                      pageJsonId: '8430824',
                      visible: 'true',
                      compid: ['Input_449151'],
                    },
                    line_number: 59,
                  },
                  {
                    type: 'sysSetRequired',
                    dataId: 169937705711999170,
                    options: {
                      compId: ['Input_449151'],
                      compName: 'page',
                      id: '988156',
                      pageJsonId: '8430824',
                      required: 'true',
                      compid: ['Input_449151'],
                    },
                    line_number: 60,
                  },
                  {
                    type: 'sysSetVisible',
                    dataId: 169943717941709440,
                    options: {
                      compId: ['Icon_2621727'],
                      compName: 'page',
                      id: '792338',
                      pageJsonId: '8430824',
                      visible: '',
                      compid: ['Icon_2621727'],
                    },
                    line_number: 61,
                  },
                ],
                callback2: [
                  {
                    type: 'sysSetVisible',
                    dataId: 169937707004706660,
                    options: {
                      compId: ['Input_449151'],
                      compName: 'page',
                      id: '330915',
                      pageJsonId: '8430824',
                      visible: '',
                      compid: ['Input_449151'],
                    },
                    line_number: 62,
                  },
                  {
                    type: 'sysSetRequired',
                    dataId: 169937707290101380,
                    options: {
                      compId: ['Input_449151'],
                      compName: 'page',
                      id: '5099947',
                      pageJsonId: '8430824',
                      required: '',
                      compid: ['Input_449151'],
                    },
                    line_number: 63,
                  },
                  {
                    type: 'sysSetVisible',
                    dataId: 169943719032462430,
                    options: {
                      compId: ['Icon_2621727'],
                      compName: 'page',
                      id: '903042',
                      pageJsonId: '8430824',
                      visible: 'true',
                      compid: ['Icon_2621727'],
                    },
                    line_number: 64,
                  },
                ],
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse63.params = [] || [];
    CMDGenerator(eventDataifelse63, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    }); // console 169874609006342900
    console.log(state?.feeInfo, '=====url====', urlParam);

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_8430824__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_8430824_1',
          uid: 'View_8430824_1',
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
        ref={(r: any) => (refs['View_8430824_1'] = r)}
        {...injectData}
      >
        <Divider
          name={'分割线'}
          orientation={'center'}
          type={'horizontal'}
          dashed={false}
          dividerText={'专线接入信息'}
          showTitle={true}
          $$componentItem={{
            id: 'Divider_9073224',
            uid: 'Divider_9073224',
            type: 'Divider',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ margin: '12px 0 12px 0', height: 'auto' }}
          ref={(r: any) => (refs['Divider_9073224'] = r)}
          {...injectData}
        />
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_917911',
            uid: 'View_917911',
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
          }}
          ref={(r: any) => (refs['View_917911'] = r)}
          {...injectData}
        >
          <Form
            name={'广域网'}
            colSpan={8}
            labelCol={8}
            wrapperCol={16}
            colon={true}
            layout={'horizontal'}
            labelAlign={'right'}
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_981467'}
            genRuleType={'key'}
            formType={'normal'}
            relationDataSource={data?.feeInfo}
            busiObjectId={''}
            $$componentItem={{
              id: 'Form_981467',
              uid: 'Form_981467',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            onValuesChange={() => {
              const eventDatasetDataSource25: any = [
                {
                  type: 'setDataSource',
                  dataId: 166452673655220600,
                  options: {
                    compId: 'page',
                    compName: 'page',
                    id: '74294704',
                    pageJsonId: '8430824',
                    dataSourceId: 166452624216490180,
                    dataSourceName: 'feeInfo',
                    dataSourceRelType: 'custom',
                    dataSourceReloadFilter: [],
                    dataSourceSetValue: [
                      {
                        code: 'recoverNetCost',
                        name: '可收回网络成本（月)',
                        type: 'string',
                        attrId: '8571626',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        value: { type: [], code: '' },
                      },
                      {
                        code: 'infoIncomeYear',
                        name: '年信息化收入',
                        type: 'string',
                        attrId: '121017',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        value: { type: [], code: '' },
                      },
                      {
                        code: 'lineFuncFee',
                        name: '专线功能费(元)',
                        type: 'string',
                        attrId: '14036',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'lineFuncFee',
                        },
                      },
                      {
                        code: 'maintenanceCost',
                        name: '维护费(元/年)',
                        type: 'string',
                        attrId: '7039381',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'maintenanceCost',
                        },
                      },
                      {
                        code: 'oneInput',
                        name: '一次性投入(元)',
                        type: 'string',
                        attrId: '009453',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'oneInput',
                        },
                      },
                      {
                        code: 'revenueShare',
                        name: '收入分成',
                        type: 'string',
                        attrId: '1462483',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'revenueShare',
                        },
                      },
                      {
                        code: 'toShare',
                        name: 'Z端分成',
                        type: 'string',
                        attrId: '099531',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'toShare',
                        },
                      },
                      {
                        code: 'fromShare',
                        name: 'A端分成',
                        type: 'string',
                        attrId: '1095926',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'fromShare',
                        },
                      },
                      {
                        code: 'singedTime',
                        name: '签约时间',
                        type: 'string',
                        attrId: '0888886',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'singedTime',
                        },
                      },
                      {
                        code: 'receiptsPriceSum',
                        name: '总实收价',
                        type: 'string',
                        attrId: '0885963',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'receiptsPriceSum',
                        },
                      },
                      {
                        code: 'officePrice',
                        name: '总部管控价格',
                        type: 'string',
                        attrId: '892599',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'officePrice',
                        },
                      },
                      {
                        code: 'lastDiscount',
                        name: '最终折扣',
                        type: 'string',
                        attrId: '836689',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'lastDiscount',
                        },
                      },
                      {
                        code: 'receiptsPrice',
                        name: '实收价',
                        type: 'string',
                        attrId: '483326',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'receiptsPrice',
                        },
                      },
                      {
                        code: 'standardPrice',
                        name: '省内标准价格',
                        type: 'string',
                        attrId: '411916',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'standardPrice',
                        },
                      },
                      {
                        code: 'toProvince',
                        name: 'Z端省份',
                        type: 'string',
                        attrId: '719928',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'toProvince',
                        },
                      },
                      {
                        code: 'toAddress',
                        name: 'Z端地址',
                        type: 'string',
                        attrId: '7259194',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'toAddress',
                        },
                      },
                      {
                        code: 'toCityText',
                        name: 'Z端地市',
                        type: 'string',
                        attrId: '6278025',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'toCityText',
                        },
                      },
                      {
                        code: 'fromCityText',
                        name: 'A端地市',
                        type: 'string',
                        attrId: '696137',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'fromCityText',
                        },
                      },
                      {
                        code: 'fromCity',
                        name: 'A端地市',
                        type: 'string',
                        attrId: '734603',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'fromCity',
                        },
                      },
                      {
                        code: 'fromProvince',
                        name: 'A端省份',
                        type: 'string',
                        attrId: '4746006',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'fromProvince',
                        },
                      },
                      {
                        code: 'fromAddress',
                        name: 'A端地址',
                        type: 'string',
                        attrId: '6264173',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'fromAddress',
                        },
                      },
                      {
                        code: 'toCity',
                        name: 'Z端地市',
                        type: 'string',
                        attrId: '904957',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'toCity',
                        },
                      },
                      {
                        code: 'count',
                        name: '条数',
                        type: 'string',
                        attrId: '811781',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'count',
                        },
                      },
                      {
                        code: 'bandwidth',
                        name: '带宽',
                        type: 'string',
                        attrId: '9558123',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'bandwidth',
                        },
                      },
                      {
                        code: 'busiType',
                        name: '业务类型',
                        type: 'string',
                        attrId: '435897',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'busiType',
                        },
                      },
                      {
                        attrId: '4662965',
                        code: 'accessWay',
                        name: '接入方式',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'accessWay',
                        },
                      },
                      {
                        attrId: '437556',
                        code: 'lineType',
                        name: '专线类型',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'lineType',
                        },
                      },
                      {
                        attrId: '6720962',
                        code: 'busiTypeName',
                        name: '业务类型名称',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                      },
                      {
                        attrId: '904194',
                        code: 'bandwidthName',
                        name: '带宽名称',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                      },
                      {
                        attrId: '8290088',
                        code: 'flag',
                        name: '标识',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                      },
                      {
                        attrId: '326716',
                        code: 'fromProvinceName',
                        name: 'A端省份名字',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                      },
                      {
                        attrId: '326753',
                        code: 'toProvinceName',
                        name: 'Z端省份名字',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                      },
                      {
                        attrId: '312459',
                        code: 'revenueShareName',
                        name: '各收入分成',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                      },
                    ],
                    onlySetPatch: true,
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatasetDataSource25.params = [] || [];
              CMDGenerator(eventDatasetDataSource25, {}, 'setDataSource', {
                id: 'setDataSource',
                name: 'setDataSource',
                type: 'setDataSource',
                platform: 'pc',
              });
              const eventDatagetSelectedData22: any = [
                {
                  type: 'getSelectedData',
                  dataId: 169875289486480600,
                  shielding: true,
                  options: {
                    compId: 'Input_standardPrice_89896',
                    compLib: 'comm',
                    pageJsonId: '8430824',
                    compName: 'Select',
                    id: '899419',
                  },
                  line_number: 2,
                  callback1: [
                    {
                      type: 'getSelectedData',
                      dataId: 169875289875937440,
                      shielding: true,
                      options: {
                        compId: 'Select_8264436',
                        compLib: 'comm',
                        pageJsonId: '8430824',
                        compName: 'Select',
                        id: '799304',
                      },
                      line_number: 3,
                      callback1: [
                        {
                          type: 'ifelse',
                          shielding: true,
                          condition: [
                            {
                              condId: '9681593',
                              options: {
                                context: '$selectedData_799304[0]$',
                                operate: 'notEmpty',
                              },
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                            {
                              options: {
                                context: '$selectedData_899419[0]$',
                                operate: 'notEmpty',
                              },
                              condId: '3613044',
                              connector: '&&',
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          dataId: 169875292421196960,
                          elseIfs: [],
                          line_number: 4,
                          callback1: [
                            {
                              type: 'customActionCode',
                              dataId: 169875294674558600,
                              shielding: true,
                              options: {
                                compId: 'customActionCode',
                                compName: 'page',
                                id: '828449',
                                pageJsonId: '8430824',
                                actionTitle: '设置分成——成功则都不为福建',
                                code: 'function main(data,state,success,fail){var a=selectedData_899419[0];var z=selectedData_799304[0];if(a.label!="\\u798F\\u5EFA"&&z.label!="\\u798F\\u5EFA"){success()}else{fail()}};',
                              },
                              line_number: 5,
                              callback1: [
                                {
                                  type: 'sysSetRequired',
                                  dataId: 169875304978034780,
                                  shielding: true,
                                  options: {
                                    compId: ['Input_449151'],
                                    compName: 'page',
                                    id: '3112177',
                                    pageJsonId: '8430824',
                                    required: 'true',
                                    compid: ['Input_449151'],
                                  },
                                  line_number: 6,
                                },
                                {
                                  type: 'sysSetVisible',
                                  dataId: 169875305526468400,
                                  shielding: true,
                                  options: {
                                    compId: ['Input_449151'],
                                    compName: 'page',
                                    id: '547191',
                                    pageJsonId: '8430824',
                                    visible: 'true',
                                    compid: ['Input_449151'],
                                  },
                                  line_number: 7,
                                },
                                {
                                  type: 'sysSetVisible',
                                  dataId: 169875534076376860,
                                  shielding: true,
                                  options: {
                                    compId: ['Icon_2621727'],
                                    compName: 'page',
                                    id: '286914',
                                    pageJsonId: '8430824',
                                    visible: '',
                                    compid: ['Icon_2621727'],
                                  },
                                  line_number: 8,
                                },
                              ],
                              callback2: [
                                {
                                  type: 'sysSetRequired',
                                  dataId: 169875316454089800,
                                  shielding: true,
                                  options: {
                                    compId: ['Input_449151'],
                                    compName: 'page',
                                    id: '220912',
                                    pageJsonId: '8430824',
                                    required: '',
                                    compid: ['Input_449151'],
                                  },
                                  line_number: 9,
                                },
                                {
                                  type: 'sysSetVisible',
                                  dataId: 169875316654176300,
                                  shielding: true,
                                  options: {
                                    compId: ['Input_449151'],
                                    compName: 'page',
                                    id: '049108',
                                    pageJsonId: '8430824',
                                    visible: '',
                                    compid: ['Input_449151'],
                                  },
                                  line_number: 10,
                                },
                                {
                                  type: 'sysSetVisible',
                                  dataId: 169875535233469980,
                                  shielding: true,
                                  options: {
                                    compId: ['Icon_2621727'],
                                    compName: 'page',
                                    id: '8958904',
                                    pageJsonId: '8430824',
                                    visible: 'true',
                                    compid: ['Icon_2621727'],
                                  },
                                  line_number: 11,
                                },
                              ],
                            },
                            {
                              type: 'console',
                              dataId: 169941311515323940,
                              shielding: true,
                              options: {
                                compId: 'debug',
                                compName: 'system',
                                id: '809323',
                                pageJsonId: '8430824',
                                value: ['====数据源变化，设置福建分成显隐===='],
                              },
                              line_number: 12,
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
              eventDatagetSelectedData22.params = [] || [];
              CMDGenerator(eventDatagetSelectedData22, {}, 'getSelectedData', {
                id: 'getSelectedData',
                name: 'getSelectedData',
                type: 'getSelectedData',
                platform: 'pc',
              });
              const eventDatacallSelfFunc52: any = [
                {
                  type: 'callSelfFunc',
                  dataId: 169934056032337000,
                  shielding: true,
                  options: {
                    compId: 'callSelfFunc',
                    compName: 'system',
                    id: '310775',
                    pageJsonId: '8430824',
                    customFuncName: 'caluNet',
                  },
                  line_number: 13,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatacallSelfFunc52.params = [] || [];
              CMDGenerator(eventDatacallSelfFunc52, {}, 'callSelfFunc', {
                id: 'callSelfFunc',
                name: 'callSelfFunc',
                type: 'callSelfFunc',
                platform: 'pc',
              });
            }}
            ref={(r: any) => (refs['Form_981467'] = r)}
            {...injectData}
          >
            <Select
              name={'业务类型'}
              size={'default'}
              selfSpan={8}
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
              fieldName={'busiType'}
              value={data?.feeInfo?.busiType}
              formItemIndex={0}
              $$componentItem={{
                id: 'Input_busiType_956176',
                uid: 'Input_busiType_956176',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatagetSelectedData29: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 166547291715707900,
                    options: {
                      compId: 'Input_busiType_956176',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Select',
                      id: '215887',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'setDataSource',
                        dataId: 166547292414076580,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '100739',
                          pageJsonId: '8430824',
                          dataSourceId: 166452624216490180,
                          dataSourceName: 'feeInfo',
                          dataSourceRelType: 'custom',
                          dataSourceReloadFilter: [],
                          dataSourceSetValue: [
                            {
                              attrId: '435897',
                              code: 'busiType',
                              name: '业务类型',
                              type: 'string',
                              initialData: { type: 'static', value: '' },
                              value: {
                                type: ['context', '$selectedData_215887[0]$'],
                                code: 'value',
                              },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _idpath: ['435897'],
                              _codePath: ['busiType'],
                            },
                            {
                              attrId: '411916',
                              code: 'standardPrice',
                              name: '省内标准价格',
                              type: 'string',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _idpath: ['411916'],
                              _codePath: ['standardPrice'],
                            },
                            {
                              attrId: '483326',
                              code: 'receiptsPrice',
                              name: '实收价',
                              type: 'string',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _idpath: ['483326'],
                              _codePath: ['receiptsPrice'],
                            },
                            {
                              attrId: '9558123',
                              code: 'bandwidth',
                              name: '带宽',
                              type: 'string',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _idpath: ['9558123'],
                              _codePath: ['bandwidth'],
                            },
                            {
                              attrId: '836689',
                              code: 'lastDiscount',
                              name: '最终折扣',
                              type: 'string',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _idpath: ['836689'],
                              _codePath: ['lastDiscount'],
                            },
                            {
                              attrId: '6720962',
                              code: 'busiTypeName',
                              name: '业务类型名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['context', '$selectedData_215887[0]$'],
                                code: 'label',
                              },
                              showInput: true,
                              _idpath: ['6720962'],
                              _codePath: ['busiTypeName'],
                            },
                            {
                              code: 'lineFuncFee',
                              name: '专线功能费(元)',
                              type: 'string',
                              attrId: '14036',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['lineFuncFee'],
                              _idpath: ['14036'],
                            },
                            {
                              code: 'infoIncomeYear',
                              name: '年信息化收入',
                              type: 'string',
                              attrId: '121017',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['infoIncomeYear'],
                              _idpath: ['121017'],
                            },
                            {
                              code: 'fromCityText',
                              name: 'A端地市',
                              type: 'string',
                              attrId: '696137',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['fromCityText'],
                              _idpath: ['696137'],
                            },
                            {
                              code: 'toProvince',
                              name: 'Z端省份',
                              type: 'string',
                              attrId: '719928',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['toProvince'],
                              _idpath: ['719928'],
                            },
                            {
                              code: 'fromCity',
                              name: 'A端地市',
                              type: 'string',
                              attrId: '734603',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['fromCity'],
                              _idpath: ['734603'],
                            },
                            {
                              code: 'count',
                              name: '条数',
                              type: 'string',
                              attrId: '811781',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['count'],
                              _idpath: ['811781'],
                            },
                            {
                              code: 'officePrice',
                              name: '总部管控价格',
                              type: 'string',
                              attrId: '892599',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['officePrice'],
                              _idpath: ['892599'],
                            },
                            {
                              code: 'toCity',
                              name: 'Z端地市',
                              type: 'string',
                              attrId: '904957',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['toCity'],
                              _idpath: ['904957'],
                            },
                            {
                              code: 'fromShare',
                              name: 'A端分成',
                              type: 'string',
                              attrId: '1095926',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['fromShare'],
                              _idpath: ['1095926'],
                            },
                            {
                              code: 'revenueShare',
                              name: '收入分成',
                              type: 'string',
                              attrId: '1462483',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['revenueShare'],
                              _idpath: ['1462483'],
                            },
                            {
                              code: 'fromProvince',
                              name: 'A端省份',
                              type: 'string',
                              attrId: '4746006',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['fromProvince'],
                              _idpath: ['4746006'],
                            },
                            {
                              code: 'fromAddress',
                              name: 'A端地址',
                              type: 'string',
                              attrId: '6264173',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['fromAddress'],
                              _idpath: ['6264173'],
                            },
                            {
                              code: 'toCityText',
                              name: 'Z端地市',
                              type: 'string',
                              attrId: '6278025',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['toCityText'],
                              _idpath: ['6278025'],
                            },
                            {
                              code: 'maintenanceCost',
                              name: '维护费(元/年)',
                              type: 'string',
                              attrId: '7039381',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['maintenanceCost'],
                              _idpath: ['7039381'],
                            },
                            {
                              code: 'toAddress',
                              name: 'Z端地址',
                              type: 'string',
                              attrId: '7259194',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['toAddress'],
                              _idpath: ['7259194'],
                            },
                            {
                              code: 'recoverNetCost',
                              name: '可收回网络成本（月)',
                              type: 'string',
                              attrId: '8571626',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['recoverNetCost'],
                              _idpath: ['8571626'],
                            },
                            {
                              code: 'oneInput',
                              name: '一次性投入(元)',
                              type: 'string',
                              attrId: '009453',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['oneInput'],
                              _idpath: ['009453'],
                            },
                            {
                              code: 'toShare',
                              name: 'Z端分成',
                              type: 'string',
                              attrId: '099531',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['toShare'],
                              _idpath: ['099531'],
                            },
                            {
                              code: 'singedTime',
                              name: '签约时间',
                              type: 'string',
                              attrId: '0888886',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['singedTime'],
                              _idpath: ['0888886'],
                            },
                            {
                              code: 'receiptsPriceSum',
                              name: '总实收价',
                              type: 'string',
                              attrId: '0885963',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['receiptsPriceSum'],
                              _idpath: ['0885963'],
                            },
                            {
                              attrId: '437556',
                              code: 'lineType',
                              name: '专线类型',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['lineType'],
                              _idpath: ['437556'],
                            },
                            {
                              attrId: '4662965',
                              code: 'accessWay',
                              name: '接入方式',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['accessWay'],
                              _idpath: ['4662965'],
                            },
                            {
                              attrId: '904194',
                              code: 'bandwidthName',
                              name: '带宽名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidthName'],
                              _idpath: ['904194'],
                            },
                            {
                              attrId: '8290088',
                              code: 'flag',
                              name: '标识',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['flag'],
                              _idpath: ['8290088'],
                            },
                            {
                              attrId: '326716',
                              code: 'fromProvinceName',
                              name: 'A端省份名字',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['fromProvinceName'],
                              _idpath: ['326716'],
                            },
                            {
                              attrId: '326753',
                              code: 'toProvinceName',
                              name: 'Z端省份名字',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['toProvinceName'],
                              _idpath: ['326753'],
                            },
                            {
                              attrId: '312459',
                              code: 'revenueShareName',
                              name: '各收入分成',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['revenueShareName'],
                              _idpath: ['312459'],
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
                    callback2: [],
                  },
                ];
                eventDatagetSelectedData29.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData29,
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
              ref={(r: any) => (refs['Input_busiType_956176'] = r)}
              {...injectData}
            />
            <Select
              name={'接入方式'}
              size={'default'}
              selfSpan={8}
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
              fieldName={'accessWay'}
              value={data?.feeInfo?.accessWay}
              formItemIndex={1}
              $$componentItem={{
                id: 'Input_areaType_945066',
                uid: 'Input_areaType_945066',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_areaType_945066'] = r)}
              {...injectData}
            />
            <Select
              name={'专线类型'}
              size={'default'}
              selfSpan={8}
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
              fieldName={'lineType'}
              value={data?.feeInfo?.lineType}
              formItemIndex={2}
              $$componentItem={{
                id: 'Input_719179',
                uid: 'Input_719179',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatacallSelfFunc65: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 169900259726540200,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '5338494',
                      pageJsonId: '8430824',
                      customFuncName: 'caluOfferPrice',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc65.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDatacallSelfFunc65, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
                const eventDatacallSelfFunc66: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 169932449532551300,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '8584254',
                      pageJsonId: '8430824',
                      customFuncName: 'calculPrice',
                    },
                    line_number: 2,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc66.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDatacallSelfFunc66, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Input_719179'] = r)}
              {...injectData}
            />
            <Select
              name={'A端省份'}
              size={'default'}
              selfSpan={8}
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
              fieldName={'fromProvince'}
              value={data?.feeInfo?.fromProvince}
              formItemIndex={3}
              $$componentItem={{
                id: 'Input_standardPrice_89896',
                uid: 'Input_standardPrice_89896',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatagetSelectedData30: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 169871992997582940,
                    options: {
                      compId: 'Input_standardPrice_89896',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Select',
                      id: '14336',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '70153496',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$selectedData_14336[0].label$',
                              operate: '==',
                              manualValue: '福建',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 169871993636102460,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 169872001983317100,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 169872011506438080,
                                children: [],
                                todoOptions: ['required', 'selectComp'],
                                options: {
                                  compId: ['Input_2889604'],
                                  compName: 'page',
                                  id: '395108',
                                  pageJsonId: '8430824',
                                  required: '',
                                  compid: ['Input_2889604'],
                                },
                                actionObjId: 'sysSetRequired',
                                actionObjName: 'page',
                                value: 'sysSetRequired',
                                line_number: 7,
                              },
                              {
                                dataName: 'action',
                                dataId: 169872011683765060,
                                children: [],
                                todoOptions: ['visible', 'selectComp'],
                                options: {
                                  compId: ['Input_2889604'],
                                  compName: 'page',
                                  id: '301405',
                                  pageJsonId: '8430824',
                                  visible: '',
                                  compid: ['Input_2889604'],
                                },
                                actionObjId: 'sysSetVisible',
                                actionObjName: 'page',
                                value: 'sysSetVisible',
                                line_number: 8,
                              },
                              {
                                dataName: 'action',
                                dataId: 169872011903611000,
                                children: [],
                                todoOptions: ['required', 'selectComp'],
                                options: {
                                  compId: ['Input_receiptsPrice_488443'],
                                  compName: 'page',
                                  id: '051323',
                                  pageJsonId: '8430824',
                                  required: 'true',
                                  compid: ['Input_receiptsPrice_488443'],
                                },
                                actionObjId: 'sysSetRequired',
                                actionObjName: 'page',
                                value: 'sysSetRequired',
                                line_number: 9,
                              },
                              {
                                dataName: 'action',
                                dataId: 169872012049346750,
                                children: [],
                                todoOptions: ['visible', 'selectComp'],
                                options: {
                                  compId: ['Input_receiptsPrice_488443'],
                                  compName: 'page',
                                  id: '119129',
                                  pageJsonId: '8430824',
                                  visible: 'true',
                                  compid: ['Input_receiptsPrice_488443'],
                                },
                                actionObjId: 'sysSetVisible',
                                actionObjName: 'page',
                                value: 'sysSetVisible',
                                line_number: 10,
                              },
                            ],
                            condition: [],
                            value: 'elseIf',
                            callback: [
                              {
                                type: 'sysSetRequired',
                                dataId: 169872011506438080,
                                options: {
                                  compId: ['Input_2889604'],
                                  compName: 'page',
                                  id: '395108',
                                  pageJsonId: '8430824',
                                  required: '',
                                  compid: ['Input_2889604'],
                                },
                                line_number: 7,
                              },
                              {
                                type: 'sysSetVisible',
                                dataId: 169872011683765060,
                                options: {
                                  compId: ['Input_2889604'],
                                  compName: 'page',
                                  id: '301405',
                                  pageJsonId: '8430824',
                                  visible: '',
                                  compid: ['Input_2889604'],
                                },
                                line_number: 8,
                              },
                              {
                                type: 'sysSetRequired',
                                dataId: 169872011903611000,
                                options: {
                                  compId: ['Input_receiptsPrice_488443'],
                                  compName: 'page',
                                  id: '051323',
                                  pageJsonId: '8430824',
                                  required: 'true',
                                  compid: ['Input_receiptsPrice_488443'],
                                },
                                line_number: 9,
                              },
                              {
                                type: 'sysSetVisible',
                                dataId: 169872012049346750,
                                options: {
                                  compId: ['Input_receiptsPrice_488443'],
                                  compName: 'page',
                                  id: '119129',
                                  pageJsonId: '8430824',
                                  visible: 'true',
                                  compid: ['Input_receiptsPrice_488443'],
                                },
                                line_number: 10,
                              },
                            ],
                          },
                        ],
                        line_number: 2,
                        callback1: [
                          {
                            type: 'sysSetRequired',
                            dataId: 169872003787098400,
                            options: {
                              compId: ['Input_2889604'],
                              compName: 'page',
                              id: '6829058',
                              pageJsonId: '8430824',
                              required: 'true',
                              compid: ['Input_2889604'],
                            },
                            line_number: 3,
                          },
                          {
                            type: 'sysSetVisible',
                            dataId: 169872004629344480,
                            options: {
                              compId: ['Input_2889604'],
                              compName: 'page',
                              id: '97003',
                              pageJsonId: '8430824',
                              visible: 'true',
                              compid: ['Input_2889604'],
                            },
                            line_number: 4,
                          },
                          {
                            type: 'sysSetRequired',
                            dataId: 169872005093588860,
                            options: {
                              compId: ['Input_receiptsPrice_488443'],
                              compName: 'page',
                              id: '79655593',
                              pageJsonId: '8430824',
                              required: '',
                              compid: ['Input_receiptsPrice_488443'],
                            },
                            line_number: 5,
                          },
                          {
                            type: 'sysSetVisible',
                            dataId: 169872005329774500,
                            options: {
                              compId: ['Input_receiptsPrice_488443'],
                              compName: 'page',
                              id: '2911955',
                              pageJsonId: '8430824',
                              visible: '',
                              compid: ['Input_receiptsPrice_488443'],
                            },
                            line_number: 6,
                          },
                        ],
                      },
                      {
                        type: 'setDataSource',
                        dataId: 169874999562624160,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '8858175',
                          pageJsonId: '8430824',
                          dataSourceId: 166452624216490180,
                          dataSourceName: 'feeInfo',
                          dataSourceRelType: 'custom',
                          dataSourceSetValue: [
                            {
                              code: 'recoverNetCost',
                              name: '可收回网络成本（月)',
                              type: 'string',
                              attrId: '8571626',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['recoverNetCost'],
                              _idpath: ['8571626'],
                            },
                            {
                              code: 'infoIncomeYear',
                              name: '年信息化收入',
                              type: 'string',
                              attrId: '121017',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['infoIncomeYear'],
                              _idpath: ['121017'],
                            },
                            {
                              code: 'lineFuncFee',
                              name: '专线功能费(元)',
                              type: 'string',
                              attrId: '14036',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['lineFuncFee'],
                              _idpath: ['14036'],
                            },
                            {
                              code: 'maintenanceCost',
                              name: '维护费(元/年)',
                              type: 'string',
                              attrId: '7039381',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['maintenanceCost'],
                              _idpath: ['7039381'],
                            },
                            {
                              code: 'oneInput',
                              name: '一次性投入(元)',
                              type: 'string',
                              attrId: '009453',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['oneInput'],
                              _idpath: ['009453'],
                            },
                            {
                              code: 'revenueShare',
                              name: '收入分成',
                              type: 'string',
                              attrId: '1462483',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['revenueShare'],
                              _idpath: ['1462483'],
                            },
                            {
                              code: 'toShare',
                              name: 'Z端分成',
                              type: 'string',
                              attrId: '099531',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['toShare'],
                              _idpath: ['099531'],
                            },
                            {
                              code: 'fromShare',
                              name: 'A端分成',
                              type: 'string',
                              attrId: '1095926',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['fromShare'],
                              _idpath: ['1095926'],
                            },
                            {
                              code: 'singedTime',
                              name: '签约时间',
                              type: 'string',
                              attrId: '0888886',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['singedTime'],
                              _idpath: ['0888886'],
                            },
                            {
                              code: 'receiptsPriceSum',
                              name: '总实收价',
                              type: 'string',
                              attrId: '0885963',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['receiptsPriceSum'],
                              _idpath: ['0885963'],
                            },
                            {
                              code: 'officePrice',
                              name: '总部管控价格',
                              type: 'string',
                              attrId: '892599',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['officePrice'],
                              _idpath: ['892599'],
                            },
                            {
                              code: 'lastDiscount',
                              name: '最终折扣',
                              type: 'string',
                              attrId: '836689',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['lastDiscount'],
                              _idpath: ['836689'],
                            },
                            {
                              code: 'receiptsPrice',
                              name: '实收价',
                              type: 'string',
                              attrId: '483326',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['receiptsPrice'],
                              _idpath: ['483326'],
                            },
                            {
                              code: 'standardPrice',
                              name: '省内标准价格',
                              type: 'string',
                              attrId: '411916',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['standardPrice'],
                              _idpath: ['411916'],
                            },
                            {
                              code: 'toProvince',
                              name: 'Z端省份',
                              type: 'string',
                              attrId: '719928',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['toProvince'],
                              _idpath: ['719928'],
                            },
                            {
                              code: 'toAddress',
                              name: 'Z端地址',
                              type: 'string',
                              attrId: '7259194',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['toAddress'],
                              _idpath: ['7259194'],
                            },
                            {
                              code: 'toCityText',
                              name: 'Z端地市',
                              type: 'string',
                              attrId: '6278025',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['toCityText'],
                              _idpath: ['6278025'],
                            },
                            {
                              code: 'fromCityText',
                              name: 'A端地市',
                              type: 'string',
                              attrId: '696137',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['fromCityText'],
                              _idpath: ['696137'],
                            },
                            {
                              code: 'fromCity',
                              name: 'A端地市',
                              type: 'string',
                              attrId: '734603',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['fromCity'],
                              _idpath: ['734603'],
                            },
                            {
                              code: 'fromProvince',
                              name: 'A端省份',
                              type: 'string',
                              attrId: '4746006',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['fromProvince'],
                              _idpath: ['4746006'],
                            },
                            {
                              code: 'fromAddress',
                              name: 'A端地址',
                              type: 'string',
                              attrId: '6264173',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['fromAddress'],
                              _idpath: ['6264173'],
                            },
                            {
                              code: 'toCity',
                              name: 'Z端地市',
                              type: 'string',
                              attrId: '904957',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['toCity'],
                              _idpath: ['904957'],
                            },
                            {
                              code: 'count',
                              name: '条数',
                              type: 'string',
                              attrId: '811781',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['count'],
                              _idpath: ['811781'],
                            },
                            {
                              code: 'bandwidth',
                              name: '带宽',
                              type: 'string',
                              attrId: '9558123',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['bandwidth'],
                              _idpath: ['9558123'],
                            },
                            {
                              code: 'busiType',
                              name: '业务类型',
                              type: 'string',
                              attrId: '435897',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['busiType'],
                              _idpath: ['435897'],
                            },
                            {
                              attrId: '4662965',
                              code: 'accessWay',
                              name: '接入方式',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['accessWay'],
                              _idpath: ['4662965'],
                            },
                            {
                              attrId: '437556',
                              code: 'lineType',
                              name: '专线类型',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['lineType'],
                              _idpath: ['437556'],
                            },
                            {
                              attrId: '6720962',
                              code: 'busiTypeName',
                              name: '业务类型名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['busiTypeName'],
                              _idpath: ['6720962'],
                            },
                            {
                              attrId: '904194',
                              code: 'bandwidthName',
                              name: '带宽名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidthName'],
                              _idpath: ['904194'],
                            },
                            {
                              attrId: '8290088',
                              code: 'flag',
                              name: '标识',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['flag'],
                              _idpath: ['8290088'],
                            },
                            {
                              attrId: '326716',
                              code: 'fromProvinceName',
                              name: 'A端省份名字',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              value: {
                                type: ['context', '$selectedData_14336[0]$'],
                                code: 'label',
                              },
                              _codePath: ['fromProvinceName'],
                              _idpath: ['326716'],
                            },
                            {
                              attrId: '326753',
                              code: 'toProvinceName',
                              name: 'Z端省份名字',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['toProvinceName'],
                              _idpath: ['326753'],
                            },
                            {
                              attrId: '312459',
                              code: 'revenueShareName',
                              name: '各收入分成',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['revenueShareName'],
                              _idpath: ['312459'],
                            },
                          ],
                          operateType: 1,
                          onlySetPatch: true,
                          otherObjectArrayOptions: {},
                          targetDataSourcePaths: [],
                        },
                        line_number: 11,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetSelectedData30.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData30,
                  { e },
                  'getSelectedData',
                  {
                    id: 'getSelectedData',
                    name: 'getSelectedData',
                    type: 'getSelectedData',
                    platform: 'pc',
                  },
                );
                const eventDatagetSelectedData31: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 169941355563896960,
                    options: {
                      compId: 'Input_standardPrice_89896',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Select',
                      id: '970641',
                    },
                    line_number: 12,
                    callback1: [
                      {
                        type: 'getSelectedData',
                        dataId: 169941355563861060,
                        options: {
                          compId: 'Select_8264436',
                          compLib: 'comm',
                          pageJsonId: '8430824',
                          compName: 'Select',
                          id: '176427',
                        },
                        line_number: 13,
                        callback1: [
                          {
                            type: 'ifelse',
                            condition: [
                              {
                                condId: '9681593',
                                options: {
                                  context: '$selectedData_176427[0]$',
                                  operate: 'notEmpty',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                              {
                                options: {
                                  context: '$selectedData_970641[0]$',
                                  operate: 'notEmpty',
                                },
                                condId: '3613044',
                                connector: '&&',
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 169941355563897340,
                            elseIfs: [],
                            line_number: 14,
                            callback1: [
                              {
                                type: 'customActionCode',
                                dataId: 169941355563846720,
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '998603',
                                  pageJsonId: '8430824',
                                  actionTitle: '设置分成——成功则都不为福建',
                                  code: 'function main(data,state,success,fail){var a=selectedData_970641[0];var z=selectedData_176427[0];if(a.label!="\\u798F\\u5EFA"&&z.label!="\\u798F\\u5EFA"){success()}else{fail()}};',
                                },
                                line_number: 15,
                                callback1: [
                                  {
                                    type: 'sysSetRequired',
                                    dataId: 169941355563839970,
                                    options: {
                                      compId: ['Input_449151'],
                                      compName: 'page',
                                      id: '601775',
                                      pageJsonId: '8430824',
                                      required: 'true',
                                      compid: ['Input_449151'],
                                    },
                                    line_number: 16,
                                  },
                                  {
                                    type: 'sysSetVisible',
                                    dataId: 169941355563861470,
                                    options: {
                                      compId: ['Input_449151'],
                                      compName: 'page',
                                      id: '809427',
                                      pageJsonId: '8430824',
                                      visible: 'true',
                                      compid: ['Input_449151'],
                                    },
                                    line_number: 17,
                                  },
                                  {
                                    type: 'sysSetVisible',
                                    dataId: 169941355563860960,
                                    options: {
                                      compId: ['Icon_2621727'],
                                      compName: 'page',
                                      id: '4016283',
                                      pageJsonId: '8430824',
                                      visible: '',
                                      compid: ['Icon_2621727'],
                                    },
                                    line_number: 18,
                                  },
                                ],
                                callback2: [
                                  {
                                    type: 'sysSetRequired',
                                    dataId: 169941355563880500,
                                    options: {
                                      compId: ['Input_449151'],
                                      compName: 'page',
                                      id: '464867',
                                      pageJsonId: '8430824',
                                      required: '',
                                      compid: ['Input_449151'],
                                    },
                                    line_number: 19,
                                  },
                                  {
                                    type: 'sysSetVisible',
                                    dataId: 169941355563876900,
                                    options: {
                                      compId: ['Input_449151'],
                                      compName: 'page',
                                      id: '1954756',
                                      pageJsonId: '8430824',
                                      visible: '',
                                      compid: ['Input_449151'],
                                    },
                                    line_number: 20,
                                  },
                                  {
                                    type: 'sysSetVisible',
                                    dataId: 169941355563874020,
                                    options: {
                                      compId: ['Icon_2621727'],
                                      compName: 'page',
                                      id: '650845',
                                      pageJsonId: '8430824',
                                      visible: 'true',
                                      compid: ['Icon_2621727'],
                                    },
                                    line_number: 21,
                                  },
                                ],
                              },
                              {
                                type: 'console',
                                dataId: 169941355563811300,
                                options: {
                                  compId: 'debug',
                                  compName: 'system',
                                  id: '54862',
                                  pageJsonId: '8430824',
                                  value: ['====设置福建分成显隐===='],
                                },
                                line_number: 22,
                              },
                            ],
                          },
                          {
                            type: 'console',
                            dataId: 169941368695874370,
                            options: {
                              compId: 'debug',
                              compName: 'system',
                              id: '300994',
                              pageJsonId: '8430824',
                              value: [
                                '=====A端===',
                                '$selectedData_970641[0]$',
                                '=====Z端===',
                                '$selectedData_176427[0]$',
                              ],
                            },
                            line_number: 23,
                          },
                        ],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetSelectedData31.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData31,
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
              ref={(r: any) => (refs['Input_standardPrice_89896'] = r)}
              {...injectData}
            />
            <Select
              name={'A端地市'}
              size={'default'}
              selfSpan={8}
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
              fieldName={'fromCity'}
              value={data?.feeInfo?.fromCity}
              formItemIndex={4}
              $$componentItem={{
                id: 'Input_2889604',
                uid: 'Input_2889604',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_2889604'] = r)}
              {...injectData}
            />
            <Input
              name={'A端地市'}
              size={'default'}
              selfSpan={8}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              fieldName={'fromCityText'}
              value={data?.feeInfo?.fromCityText}
              formItemIndex={5}
              regexp={[]}
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
                id: 'Input_receiptsPrice_488443',
                uid: 'Input_receiptsPrice_488443',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_receiptsPrice_488443'] = r)}
              {...injectData}
            />
            <Input
              name={'A端地址'}
              size={'default'}
              selfSpan={8}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              fieldName={'fromAddress'}
              value={data?.feeInfo?.fromAddress}
              formItemIndex={6}
              regexp={[]}
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
                id: 'Input_871811',
                uid: 'Input_871811',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_871811'] = r)}
              {...injectData}
            />
            <Select
              name={'Z端省份'}
              size={'default'}
              selfSpan={8}
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
              fieldName={'toProvince'}
              value={data?.feeInfo?.toProvince}
              formItemIndex={7}
              $$componentItem={{
                id: 'Select_8264436',
                uid: 'Select_8264436',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatagetSelectedData32: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 169872131180102900,
                    options: {
                      compId: 'Select_8264436',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Select',
                      id: '829394',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '70153496',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$selectedData_829394[0].label$',
                              operate: '==',
                              manualValue: '福建',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 169872131319338300,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 169872131319388260,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 169872131319362530,
                                children: [],
                                todoOptions: ['required', 'selectComp'],
                                options: {
                                  compId: ['Input_405627'],
                                  compName: 'page',
                                  id: '100221',
                                  pageJsonId: '8430824',
                                  required: 'true',
                                  compid: ['Input_405627'],
                                },
                                actionObjId: 'sysSetRequired',
                                actionObjName: 'page',
                                value: 'sysSetRequired',
                                line_number: 7,
                              },
                              {
                                dataName: 'action',
                                dataId: 169872131319329200,
                                children: [],
                                todoOptions: ['visible', 'selectComp'],
                                options: {
                                  compId: ['Input_405627'],
                                  compName: 'page',
                                  id: '944753',
                                  pageJsonId: '8430824',
                                  visible: 'true',
                                  compid: ['Input_405627'],
                                },
                                actionObjId: 'sysSetVisible',
                                actionObjName: 'page',
                                value: 'sysSetVisible',
                                line_number: 8,
                              },
                              {
                                dataName: 'action',
                                dataId: 169872131319349280,
                                children: [],
                                todoOptions: ['required', 'selectComp'],
                                options: {
                                  compId: ['Select_886724'],
                                  compName: 'page',
                                  id: '285397',
                                  pageJsonId: '8430824',
                                  required: '',
                                  compid: ['Select_886724'],
                                },
                                actionObjId: 'sysSetRequired',
                                actionObjName: 'page',
                                value: 'sysSetRequired',
                                line_number: 9,
                              },
                              {
                                dataName: 'action',
                                dataId: 169872131319380260,
                                children: [],
                                todoOptions: ['visible', 'selectComp'],
                                options: {
                                  compId: ['Select_886724'],
                                  compName: 'page',
                                  id: '4851822',
                                  pageJsonId: '8430824',
                                  visible: '',
                                  compid: ['Select_886724'],
                                },
                                actionObjId: 'sysSetVisible',
                                actionObjName: 'page',
                                value: 'sysSetVisible',
                                line_number: 10,
                              },
                            ],
                            condition: [],
                            value: 'elseIf',
                            callback: [
                              {
                                type: 'sysSetRequired',
                                dataId: 169872131319362530,
                                options: {
                                  compId: ['Input_405627'],
                                  compName: 'page',
                                  id: '100221',
                                  pageJsonId: '8430824',
                                  required: 'true',
                                  compid: ['Input_405627'],
                                },
                                line_number: 7,
                              },
                              {
                                type: 'sysSetVisible',
                                dataId: 169872131319329200,
                                options: {
                                  compId: ['Input_405627'],
                                  compName: 'page',
                                  id: '944753',
                                  pageJsonId: '8430824',
                                  visible: 'true',
                                  compid: ['Input_405627'],
                                },
                                line_number: 8,
                              },
                              {
                                type: 'sysSetRequired',
                                dataId: 169872131319349280,
                                options: {
                                  compId: ['Select_886724'],
                                  compName: 'page',
                                  id: '285397',
                                  pageJsonId: '8430824',
                                  required: '',
                                  compid: ['Select_886724'],
                                },
                                line_number: 9,
                              },
                              {
                                type: 'sysSetVisible',
                                dataId: 169872131319380260,
                                options: {
                                  compId: ['Select_886724'],
                                  compName: 'page',
                                  id: '4851822',
                                  pageJsonId: '8430824',
                                  visible: '',
                                  compid: ['Select_886724'],
                                },
                                line_number: 10,
                              },
                            ],
                          },
                        ],
                        line_number: 2,
                        callback1: [
                          {
                            type: 'sysSetRequired',
                            dataId: 169872131319372200,
                            options: {
                              compId: ['Select_886724'],
                              compName: 'page',
                              id: '462799',
                              pageJsonId: '8430824',
                              required: 'true',
                              compid: ['Select_886724'],
                            },
                            line_number: 3,
                          },
                          {
                            type: 'sysSetVisible',
                            dataId: 169872131319396160,
                            options: {
                              compId: ['Select_886724'],
                              compName: 'page',
                              id: '2608133',
                              pageJsonId: '8430824',
                              visible: 'true',
                              compid: ['Select_886724'],
                            },
                            line_number: 4,
                          },
                          {
                            type: 'sysSetRequired',
                            dataId: 169872131319390500,
                            options: {
                              compId: ['Input_405627'],
                              compName: 'page',
                              id: '7836094',
                              pageJsonId: '8430824',
                              required: '',
                              compid: ['Input_405627'],
                            },
                            line_number: 5,
                          },
                          {
                            type: 'sysSetVisible',
                            dataId: 169872131319367550,
                            options: {
                              compId: ['Input_405627'],
                              compName: 'page',
                              id: '564982',
                              pageJsonId: '8430824',
                              visible: '',
                              compid: ['Input_405627'],
                            },
                            line_number: 6,
                          },
                        ],
                      },
                      {
                        type: 'setDataSource',
                        dataId: 169875002723375460,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '844956',
                          pageJsonId: '8430824',
                          dataSourceId: 166452624216490180,
                          dataSourceName: 'feeInfo',
                          dataSourceRelType: 'custom',
                          dataSourceSetValue: [
                            {
                              code: 'recoverNetCost',
                              name: '可收回网络成本（月)',
                              type: 'string',
                              attrId: '8571626',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['recoverNetCost'],
                              _idpath: ['8571626'],
                            },
                            {
                              code: 'infoIncomeYear',
                              name: '年信息化收入',
                              type: 'string',
                              attrId: '121017',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['infoIncomeYear'],
                              _idpath: ['121017'],
                            },
                            {
                              code: 'lineFuncFee',
                              name: '专线功能费(元)',
                              type: 'string',
                              attrId: '14036',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['lineFuncFee'],
                              _idpath: ['14036'],
                            },
                            {
                              code: 'maintenanceCost',
                              name: '维护费(元/年)',
                              type: 'string',
                              attrId: '7039381',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['maintenanceCost'],
                              _idpath: ['7039381'],
                            },
                            {
                              code: 'oneInput',
                              name: '一次性投入(元)',
                              type: 'string',
                              attrId: '009453',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['oneInput'],
                              _idpath: ['009453'],
                            },
                            {
                              code: 'revenueShare',
                              name: '收入分成',
                              type: 'string',
                              attrId: '1462483',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['revenueShare'],
                              _idpath: ['1462483'],
                            },
                            {
                              code: 'toShare',
                              name: 'Z端分成',
                              type: 'string',
                              attrId: '099531',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['toShare'],
                              _idpath: ['099531'],
                            },
                            {
                              code: 'fromShare',
                              name: 'A端分成',
                              type: 'string',
                              attrId: '1095926',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['fromShare'],
                              _idpath: ['1095926'],
                            },
                            {
                              code: 'singedTime',
                              name: '签约时间',
                              type: 'string',
                              attrId: '0888886',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['singedTime'],
                              _idpath: ['0888886'],
                            },
                            {
                              code: 'receiptsPriceSum',
                              name: '总实收价',
                              type: 'string',
                              attrId: '0885963',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['receiptsPriceSum'],
                              _idpath: ['0885963'],
                            },
                            {
                              code: 'officePrice',
                              name: '总部管控价格',
                              type: 'string',
                              attrId: '892599',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['officePrice'],
                              _idpath: ['892599'],
                            },
                            {
                              code: 'lastDiscount',
                              name: '最终折扣',
                              type: 'string',
                              attrId: '836689',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['lastDiscount'],
                              _idpath: ['836689'],
                            },
                            {
                              code: 'receiptsPrice',
                              name: '实收价',
                              type: 'string',
                              attrId: '483326',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['receiptsPrice'],
                              _idpath: ['483326'],
                            },
                            {
                              code: 'standardPrice',
                              name: '省内标准价格',
                              type: 'string',
                              attrId: '411916',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['standardPrice'],
                              _idpath: ['411916'],
                            },
                            {
                              code: 'toProvince',
                              name: 'Z端省份',
                              type: 'string',
                              attrId: '719928',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['toProvince'],
                              _idpath: ['719928'],
                            },
                            {
                              code: 'toAddress',
                              name: 'Z端地址',
                              type: 'string',
                              attrId: '7259194',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['toAddress'],
                              _idpath: ['7259194'],
                            },
                            {
                              code: 'toCityText',
                              name: 'Z端地市',
                              type: 'string',
                              attrId: '6278025',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['toCityText'],
                              _idpath: ['6278025'],
                            },
                            {
                              code: 'fromCityText',
                              name: 'A端地市',
                              type: 'string',
                              attrId: '696137',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['fromCityText'],
                              _idpath: ['696137'],
                            },
                            {
                              code: 'fromCity',
                              name: 'A端地市',
                              type: 'string',
                              attrId: '734603',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['fromCity'],
                              _idpath: ['734603'],
                            },
                            {
                              code: 'fromProvince',
                              name: 'A端省份',
                              type: 'string',
                              attrId: '4746006',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['fromProvince'],
                              _idpath: ['4746006'],
                            },
                            {
                              code: 'fromAddress',
                              name: 'A端地址',
                              type: 'string',
                              attrId: '6264173',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['fromAddress'],
                              _idpath: ['6264173'],
                            },
                            {
                              code: 'toCity',
                              name: 'Z端地市',
                              type: 'string',
                              attrId: '904957',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['toCity'],
                              _idpath: ['904957'],
                            },
                            {
                              code: 'count',
                              name: '条数',
                              type: 'string',
                              attrId: '811781',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['count'],
                              _idpath: ['811781'],
                            },
                            {
                              code: 'bandwidth',
                              name: '带宽',
                              type: 'string',
                              attrId: '9558123',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['bandwidth'],
                              _idpath: ['9558123'],
                            },
                            {
                              code: 'busiType',
                              name: '业务类型',
                              type: 'string',
                              attrId: '435897',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['busiType'],
                              _idpath: ['435897'],
                            },
                            {
                              attrId: '4662965',
                              code: 'accessWay',
                              name: '接入方式',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['accessWay'],
                              _idpath: ['4662965'],
                            },
                            {
                              attrId: '437556',
                              code: 'lineType',
                              name: '专线类型',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['lineType'],
                              _idpath: ['437556'],
                            },
                            {
                              attrId: '6720962',
                              code: 'busiTypeName',
                              name: '业务类型名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['busiTypeName'],
                              _idpath: ['6720962'],
                            },
                            {
                              attrId: '904194',
                              code: 'bandwidthName',
                              name: '带宽名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['bandwidthName'],
                              _idpath: ['904194'],
                            },
                            {
                              attrId: '8290088',
                              code: 'flag',
                              name: '标识',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['flag'],
                              _idpath: ['8290088'],
                            },
                            {
                              attrId: '326716',
                              code: 'fromProvinceName',
                              name: 'A端省份名字',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['fromProvinceName'],
                              _idpath: ['326716'],
                            },
                            {
                              attrId: '326753',
                              code: 'toProvinceName',
                              name: 'Z端省份名字',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              value: {
                                type: ['context', '$selectedData_829394[0]$'],
                                code: 'label',
                              },
                              _codePath: ['toProvinceName'],
                              _idpath: ['326753'],
                            },
                            {
                              attrId: '312459',
                              code: 'revenueShareName',
                              name: '各收入分成',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['revenueShareName'],
                              _idpath: ['312459'],
                            },
                          ],
                          operateType: 1,
                          onlySetPatch: true,
                          otherObjectArrayOptions: {},
                          targetDataSourcePaths: [],
                        },
                        line_number: 11,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetSelectedData32.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData32,
                  { e },
                  'getSelectedData',
                  {
                    id: 'getSelectedData',
                    name: 'getSelectedData',
                    type: 'getSelectedData',
                    platform: 'pc',
                  },
                );
                const eventDatagetSelectedData33: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 169941356920202530,
                    options: {
                      compId: 'Input_standardPrice_89896',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Select',
                      id: '450453',
                    },
                    line_number: 12,
                    callback1: [
                      {
                        type: 'getSelectedData',
                        dataId: 169941356920251520,
                        options: {
                          compId: 'Select_8264436',
                          compLib: 'comm',
                          pageJsonId: '8430824',
                          compName: 'Select',
                          id: '480237',
                        },
                        line_number: 13,
                        callback1: [
                          {
                            type: 'ifelse',
                            condition: [
                              {
                                condId: '9681593',
                                options: {
                                  context: '$selectedData_480237[0]$',
                                  operate: 'notEmpty',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                              {
                                options: {
                                  context: '$selectedData_450453[0]$',
                                  operate: 'notEmpty',
                                },
                                condId: '3613044',
                                connector: '&&',
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 169941356920261900,
                            elseIfs: [],
                            line_number: 14,
                            callback1: [
                              {
                                type: 'customActionCode',
                                dataId: 169941356920264130,
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '145192',
                                  pageJsonId: '8430824',
                                  actionTitle: '设置分成——成功则都不为福建',
                                  code: 'function main(data,state,success,fail){var a=selectedData_450453[0];var z=selectedData_480237[0];if(a.label!="\\u798F\\u5EFA"&&z.label!="\\u798F\\u5EFA"){success()}else{fail()}};',
                                },
                                line_number: 15,
                                callback1: [
                                  {
                                    type: 'sysSetRequired',
                                    dataId: 169941356920276960,
                                    options: {
                                      compId: ['Input_449151'],
                                      compName: 'page',
                                      id: '22635',
                                      pageJsonId: '8430824',
                                      required: 'true',
                                      compid: ['Input_449151'],
                                    },
                                    line_number: 16,
                                  },
                                  {
                                    type: 'sysSetVisible',
                                    dataId: 169941356920296060,
                                    options: {
                                      compId: ['Input_449151'],
                                      compName: 'page',
                                      id: '9697956',
                                      pageJsonId: '8430824',
                                      visible: 'true',
                                      compid: ['Input_449151'],
                                    },
                                    line_number: 17,
                                  },
                                  {
                                    type: 'sysSetVisible',
                                    dataId: 169941356920299420,
                                    options: {
                                      compId: ['Icon_2621727'],
                                      compName: 'page',
                                      id: '177102',
                                      pageJsonId: '8430824',
                                      visible: '',
                                      compid: ['Icon_2621727'],
                                    },
                                    line_number: 18,
                                  },
                                ],
                                callback2: [
                                  {
                                    type: 'sysSetRequired',
                                    dataId: 169941356920213760,
                                    options: {
                                      compId: ['Input_449151'],
                                      compName: 'page',
                                      id: '0221376',
                                      pageJsonId: '8430824',
                                      required: '',
                                      compid: ['Input_449151'],
                                    },
                                    line_number: 19,
                                  },
                                  {
                                    type: 'sysSetVisible',
                                    dataId: 169941356920222660,
                                    options: {
                                      compId: ['Input_449151'],
                                      compName: 'page',
                                      id: '037081',
                                      pageJsonId: '8430824',
                                      visible: '',
                                      compid: ['Input_449151'],
                                    },
                                    line_number: 20,
                                  },
                                  {
                                    type: 'sysSetVisible',
                                    dataId: 169941356920295330,
                                    options: {
                                      compId: ['Icon_2621727'],
                                      compName: 'page',
                                      id: '738178',
                                      pageJsonId: '8430824',
                                      visible: 'true',
                                      compid: ['Icon_2621727'],
                                    },
                                    line_number: 21,
                                  },
                                ],
                              },
                              {
                                type: 'console',
                                dataId: 169941356920210660,
                                options: {
                                  compId: 'debug',
                                  compName: 'system',
                                  id: '982303',
                                  pageJsonId: '8430824',
                                  value: [
                                    '====数据源变化，设置福建分成显隐====',
                                  ],
                                },
                                line_number: 22,
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
                eventDatagetSelectedData33.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData33,
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
              ref={(r: any) => (refs['Select_8264436'] = r)}
              {...injectData}
            />
            <Select
              name={'Z端地市'}
              size={'default'}
              selfSpan={8}
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
              fieldName={'toCity'}
              value={data?.feeInfo?.toCity}
              formItemIndex={8}
              $$componentItem={{
                id: 'Select_886724',
                uid: 'Select_886724',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Select_886724'] = r)}
              {...injectData}
            />
            <Input
              name={'Z端地市'}
              size={'default'}
              selfSpan={8}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              fieldName={'toCityText'}
              value={data?.feeInfo?.toCityText}
              formItemIndex={9}
              regexp={[]}
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
                id: 'Input_405627',
                uid: 'Input_405627',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_405627'] = r)}
              {...injectData}
            />
            <Input
              name={'Z端地址'}
              size={'default'}
              selfSpan={8}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              fieldName={'toAddress'}
              value={data?.feeInfo?.toAddress}
              formItemIndex={10}
              regexp={[]}
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
                id: 'Input_667731',
                uid: 'Input_667731',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_667731'] = r)}
              {...injectData}
            />
            <Divider
              name={'分割线'}
              orientation={'center'}
              type={'horizontal'}
              dashed={false}
              showTitle={true}
              $$componentItem={{
                id: 'Divider_745314',
                uid: 'Divider_745314',
                type: 'Divider',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              schema={{
                compType: 1,
                props: {
                  formItemIndex: 11,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{ margin: '12px 0 12px 0', height: 'auto' }}
              ref={(r: any) => (refs['Divider_745314'] = r)}
              {...injectData}
            />
            <Divider
              name={'分割线'}
              orientation={'center'}
              type={'horizontal'}
              dashed={false}
              dividerText={'专线资费信息'}
              showTitle={true}
              $$componentItem={{
                id: 'Divider_71232',
                uid: 'Divider_71232',
                type: 'Divider',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              schema={{
                compType: 1,
                props: {
                  formItemIndex: 12,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{ margin: '12px 0 12px 0', height: 'auto' }}
              ref={(r: any) => (refs['Divider_71232'] = r)}
              {...injectData}
            />
            <Divider
              name={'分割线'}
              orientation={'center'}
              type={'horizontal'}
              dashed={false}
              showTitle={true}
              $$componentItem={{
                id: 'Divider_5810696',
                uid: 'Divider_5810696',
                type: 'Divider',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              schema={{
                compType: 1,
                props: {
                  formItemIndex: 13,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{ margin: '12px 0 12px 0', height: 'auto' }}
              ref={(r: any) => (refs['Divider_5810696'] = r)}
              {...injectData}
            />
            <Select
              name={'带宽'}
              size={'default'}
              selfSpan={''}
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
              fieldName={'bandwidth'}
              value={data?.feeInfo?.bandwidth}
              formItemIndex={14}
              $$componentItem={{
                id: 'Select_371996',
                uid: 'Select_371996',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatacallSelfFunc67: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 169900329570630080,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '359376',
                      pageJsonId: '8430824',
                      customFuncName: 'caluOfferPrice',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc67.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDatacallSelfFunc67, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
                const eventDatacallSelfFunc68: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 169900429550049150,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '634099',
                      pageJsonId: '8430824',
                      customFuncName: 'calculPrice',
                    },
                    line_number: 2,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc68.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDatacallSelfFunc68, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
                const eventDatagetSelectedData34: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 169923454195886720,
                    options: {
                      compId: 'Select_371996',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Select',
                      id: '293521',
                    },
                    line_number: 3,
                    callback1: [
                      {
                        type: 'setDataSource',
                        dataId: 169923454572603170,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '926442',
                          pageJsonId: '8430824',
                          dataSourceId: 166452624216490180,
                          dataSourceName: 'feeInfo',
                          dataSourceRelType: 'custom',
                          dataSourceSetValue: [
                            {
                              code: 'recoverNetCost',
                              name: '可收回网络成本（月)',
                              type: 'string',
                              attrId: '8571626',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['recoverNetCost'],
                              _idpath: ['8571626'],
                            },
                            {
                              code: 'infoIncomeYear',
                              name: '年信息化收入',
                              type: 'string',
                              attrId: '121017',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['infoIncomeYear'],
                              _idpath: ['121017'],
                            },
                            {
                              code: 'lineFuncFee',
                              name: '专线功能费(元)',
                              type: 'string',
                              attrId: '14036',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['lineFuncFee'],
                              _idpath: ['14036'],
                            },
                            {
                              code: 'maintenanceCost',
                              name: '维护费(元/年)',
                              type: 'string',
                              attrId: '7039381',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['maintenanceCost'],
                              _idpath: ['7039381'],
                            },
                            {
                              code: 'oneInput',
                              name: '一次性投入(元)',
                              type: 'string',
                              attrId: '009453',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['oneInput'],
                              _idpath: ['009453'],
                            },
                            {
                              code: 'revenueShare',
                              name: '收入分成',
                              type: 'string',
                              attrId: '1462483',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['revenueShare'],
                              _idpath: ['1462483'],
                            },
                            {
                              code: 'toShare',
                              name: 'Z端分成',
                              type: 'string',
                              attrId: '099531',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['toShare'],
                              _idpath: ['099531'],
                            },
                            {
                              code: 'fromShare',
                              name: 'A端分成',
                              type: 'string',
                              attrId: '1095926',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['fromShare'],
                              _idpath: ['1095926'],
                            },
                            {
                              code: 'singedTime',
                              name: '签约时间',
                              type: 'string',
                              attrId: '0888886',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['singedTime'],
                              _idpath: ['0888886'],
                            },
                            {
                              code: 'receiptsPriceSum',
                              name: '总实收价',
                              type: 'string',
                              attrId: '0885963',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['receiptsPriceSum'],
                              _idpath: ['0885963'],
                            },
                            {
                              code: 'officePrice',
                              name: '总部管控价格',
                              type: 'string',
                              attrId: '892599',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['officePrice'],
                              _idpath: ['892599'],
                            },
                            {
                              code: 'lastDiscount',
                              name: '最终折扣',
                              type: 'string',
                              attrId: '836689',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['lastDiscount'],
                              _idpath: ['836689'],
                            },
                            {
                              code: 'receiptsPrice',
                              name: '实收价',
                              type: 'string',
                              attrId: '483326',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['receiptsPrice'],
                              _idpath: ['483326'],
                            },
                            {
                              code: 'standardPrice',
                              name: '省内标准价格',
                              type: 'string',
                              attrId: '411916',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['standardPrice'],
                              _idpath: ['411916'],
                            },
                            {
                              code: 'toProvince',
                              name: 'Z端省份',
                              type: 'string',
                              attrId: '719928',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['toProvince'],
                              _idpath: ['719928'],
                            },
                            {
                              code: 'toAddress',
                              name: 'Z端地址',
                              type: 'string',
                              attrId: '7259194',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['toAddress'],
                              _idpath: ['7259194'],
                            },
                            {
                              code: 'toCityText',
                              name: 'Z端地市',
                              type: 'string',
                              attrId: '6278025',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['toCityText'],
                              _idpath: ['6278025'],
                            },
                            {
                              code: 'fromCityText',
                              name: 'A端地市',
                              type: 'string',
                              attrId: '696137',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['fromCityText'],
                              _idpath: ['696137'],
                            },
                            {
                              code: 'fromCity',
                              name: 'A端地市',
                              type: 'string',
                              attrId: '734603',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['fromCity'],
                              _idpath: ['734603'],
                            },
                            {
                              code: 'fromProvince',
                              name: 'A端省份',
                              type: 'string',
                              attrId: '4746006',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['fromProvince'],
                              _idpath: ['4746006'],
                            },
                            {
                              code: 'fromAddress',
                              name: 'A端地址',
                              type: 'string',
                              attrId: '6264173',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['fromAddress'],
                              _idpath: ['6264173'],
                            },
                            {
                              code: 'toCity',
                              name: 'Z端地市',
                              type: 'string',
                              attrId: '904957',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['toCity'],
                              _idpath: ['904957'],
                            },
                            {
                              code: 'count',
                              name: '条数',
                              type: 'string',
                              attrId: '811781',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['count'],
                              _idpath: ['811781'],
                            },
                            {
                              code: 'bandwidth',
                              name: '带宽',
                              type: 'string',
                              attrId: '9558123',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['bandwidth'],
                              _idpath: ['9558123'],
                            },
                            {
                              code: 'busiType',
                              name: '业务类型',
                              type: 'string',
                              attrId: '435897',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                              showInput: true,
                              _codePath: ['busiType'],
                              _idpath: ['435897'],
                            },
                            {
                              attrId: '4662965',
                              code: 'accessWay',
                              name: '接入方式',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['accessWay'],
                              _idpath: ['4662965'],
                            },
                            {
                              attrId: '437556',
                              code: 'lineType',
                              name: '专线类型',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['lineType'],
                              _idpath: ['437556'],
                            },
                            {
                              attrId: '6720962',
                              code: 'busiTypeName',
                              name: '业务类型名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['busiTypeName'],
                              _idpath: ['6720962'],
                            },
                            {
                              attrId: '904194',
                              code: 'bandwidthName',
                              name: '带宽名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              value: {
                                type: ['context', '$selectedData_293521[0]$'],
                                code: 'label',
                              },
                              _codePath: ['bandwidthName'],
                              _idpath: ['904194'],
                            },
                            {
                              attrId: '8290088',
                              code: 'flag',
                              name: '标识',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['flag'],
                              _idpath: ['8290088'],
                            },
                            {
                              attrId: '326716',
                              code: 'fromProvinceName',
                              name: 'A端省份名字',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['fromProvinceName'],
                              _idpath: ['326716'],
                            },
                            {
                              attrId: '326753',
                              code: 'toProvinceName',
                              name: 'Z端省份名字',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['toProvinceName'],
                              _idpath: ['326753'],
                            },
                            {
                              attrId: '312459',
                              code: 'revenueShareName',
                              name: '各收入分成',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['revenueShareName'],
                              _idpath: ['312459'],
                            },
                          ],
                          operateType: 1,
                          onlySetPatch: true,
                          otherObjectArrayOptions: {},
                          targetDataSourcePaths: [],
                        },
                        line_number: 4,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetSelectedData34.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData34,
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
              ref={(r: any) => (refs['Select_371996'] = r)}
              {...injectData}
            />
            <Input
              name={'单条实收价'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'元/月'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              fieldName={'receiptsPrice'}
              value={data?.feeInfo?.receiptsPrice}
              formItemIndex={15}
              regexp={[
                {
                  id: '844515',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入大于0且最多2位小数的数',
                  pattern:
                    '/^([1-9]\\d*(\\.\\d{0,2})?|([0](\\.([0][1-9]|[1-9]\\d{0,1}))))$/',
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
                id: 'Input_022401',
                uid: 'Input_022401',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatacallSelfFunc69: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 169900557712221400,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '71418',
                      pageJsonId: '8430824',
                      customFuncName: 'calculEndDiscount',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc69.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc69, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
                const eventDatacallSelfFunc70: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 169900590867939800,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '42493',
                      pageJsonId: '8430824',
                      customFuncName: 'calculReceiptsPriceSum',
                    },
                    line_number: 2,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc70.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc70, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Input_022401'] = r)}
              {...injectData}
            />
            <Input
              name={'条数'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'条'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              formItemIndex={16}
              fieldName={'count'}
              value={data?.feeInfo?.count}
              regexp={[
                {
                  id: '8555996',
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
                id: 'Input_7254833',
                uid: 'Input_7254833',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatacallSelfFunc71: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 169900589667235620,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '338158',
                      pageJsonId: '8430824',
                      customFuncName: 'calculReceiptsPriceSum',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc71.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc71, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Input_7254833'] = r)}
              {...injectData}
            />
            <Input
              name={'标准价格'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'元/月'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'自动计算'}
              fieldName={'standardPrice'}
              value={data?.feeInfo?.standardPrice}
              formItemIndex={17}
              allowClear={false}
              regexp={[
                {
                  id: '937275',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入大于0且最多2位小数的数',
                  pattern:
                    '/^([1-9]\\d*(\\.\\d{0,2})?|([0](\\.([0][1-9]|[1-9]\\d{0,1}))))$/',
                },
              ]}
              compType={null}
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
                id: 'Input_241407',
                uid: 'Input_241407',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatacallSelfFunc72: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 169900556430319140,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '4916408',
                      pageJsonId: '8430824',
                      customFuncName: 'calculEndDiscount',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc72.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc72, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Input_241407'] = r)}
              {...injectData}
            />
            <Input
              name={'管控价格'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'元/月'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'自动计算'}
              fieldName={'officePrice'}
              value={data?.feeInfo?.officePrice}
              formItemIndex={18}
              regexp={[
                {
                  id: '844515',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入大于0且最多2位小数的数',
                  pattern:
                    '/^([1-9]\\d*(\\.\\d{0,2})?|([0](\\.([0][1-9]|[1-9]\\d{0,1}))))$/',
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
                id: 'Input_4646994',
                uid: 'Input_4646994',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_4646994'] = r)}
              {...injectData}
            />
            <Input
              name={'最终折扣'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'折'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'自动计算'}
              fieldName={'lastDiscount'}
              value={data?.feeInfo?.lastDiscount}
              formItemIndex={19}
              regexp={[]}
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
                id: 'Input_468733',
                uid: 'Input_468733',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_468733'] = r)}
              {...injectData}
            />
            <Input
              name={'总实收价'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'元/月'}
              postfixIconPosition={'after'}
              required={true}
              placeholder={'自动计算'}
              formItemIndex={20}
              fieldName={'receiptsPriceSum'}
              value={data?.feeInfo?.receiptsPriceSum}
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
                id: 'Input_2861392',
                uid: 'Input_2861392',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_2861392'] = r)}
              {...injectData}
            />
            <Input
              name={'签约时间'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'月'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              fieldName={'singedTime'}
              value={data?.feeInfo?.singedTime}
              formItemIndex={21}
              regexp={[
                {
                  id: '844515',
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
                id: 'Input_513158',
                uid: 'Input_513158',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_513158'] = r)}
              {...injectData}
            />
            <Text
              name={'文本'}
              content={'　'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              labelCol={8}
              wrapperCol={16}
              $$componentItem={{
                id: 'Text_848861',
                uid: 'Text_848861',
                type: 'Text',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              schema={{
                compType: 1,
                props: {
                  formItemIndex: 22,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{
                textAlign: 'left',
                fontSize: '14px',
                lineHeight: '24px',
                color: '#1c242e',
                backgroundColor: 'rgba(255, 255, 255,0)',
              }}
              ref={(r: any) => (refs['Text_848861'] = r)}
              {...injectData}
            />
            <Divider
              name={'分割线'}
              orientation={'center'}
              type={'horizontal'}
              dashed={false}
              showTitle={true}
              $$componentItem={{
                id: 'Divider_301106',
                uid: 'Divider_301106',
                type: 'Divider',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              schema={{
                compType: 1,
                props: {
                  formItemIndex: 23,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{ margin: '12px 0 12px 0', height: 'auto' }}
              ref={(r: any) => (refs['Divider_301106'] = r)}
              {...injectData}
            />
            <Divider
              name={'分割线'}
              orientation={'center'}
              type={'horizontal'}
              dashed={false}
              dividerText={'效益评估'}
              showTitle={true}
              $$componentItem={{
                id: 'Divider_012361',
                uid: 'Divider_012361',
                type: 'Divider',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              schema={{
                compType: 1,
                props: {
                  formItemIndex: 24,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{ margin: '12px 0 12px 0', height: 'auto' }}
              ref={(r: any) => (refs['Divider_012361'] = r)}
              {...injectData}
            />
            <Divider
              name={'分割线'}
              orientation={'center'}
              type={'horizontal'}
              dashed={false}
              showTitle={true}
              $$componentItem={{
                id: 'Divider_52307875',
                uid: 'Divider_52307875',
                type: 'Divider',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              schema={{
                compType: 1,
                props: {
                  formItemIndex: 25,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{ margin: '12px 0 12px 0', height: 'auto' }}
              ref={(r: any) => (refs['Divider_52307875'] = r)}
              {...injectData}
            />
            <Input
              name={'一次性投入'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'元'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              fieldName={'oneInput'}
              value={data?.feeInfo?.oneInput}
              formItemIndex={26}
              regexp={[
                {
                  id: '844515',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入大于0且最多2位小数的数',
                  pattern:
                    '/^([1-9]\\d*(\\.\\d{0,2})?|([0](\\.([0][1-9]|[1-9]\\d{0,1}))))$/',
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
                id: 'Input_326617',
                uid: 'Input_326617',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatacallSelfFunc73: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 169941344957750200,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '268252',
                      pageJsonId: '8430824',
                      customFuncName: 'caluNet',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc73.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc73, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Input_326617'] = r)}
              {...injectData}
            />
            <Input
              name={'维护费'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'元/年'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              fieldName={'maintenanceCost'}
              value={data?.feeInfo?.maintenanceCost}
              formItemIndex={27}
              regexp={[
                {
                  id: '844515',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入大于0且最多2位小数的数',
                  pattern:
                    '/^([1-9]\\d*(\\.\\d{0,2})?|([0](\\.([0][1-9]|[1-9]\\d{0,1}))))$/',
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
                id: 'Input_279786',
                uid: 'Input_279786',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatacallSelfFunc74: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 169942553057039330,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '1075272',
                      pageJsonId: '8430824',
                      customFuncName: 'caluNet',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc74.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc74, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Input_279786'] = r)}
              {...injectData}
            />
            <Input
              name={'专线功能费'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'元/月'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              fieldName={'lineFuncFee'}
              value={data?.feeInfo?.lineFuncFee}
              formItemIndex={28}
              regexp={[
                {
                  id: '844515',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入大于0且最多2位小数的数',
                  pattern:
                    '/^([1-9]\\d*(\\.\\d{0,2})?|([0](\\.([0][1-9]|[1-9]\\d{0,1}))))$/',
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
                id: 'Input_6435406',
                uid: 'Input_6435406',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatacallSelfFunc75: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 169934054875079200,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '776949',
                      pageJsonId: '8430824',
                      customFuncName: 'caluYear',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc75.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc75, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
                const eventDatacallSelfFunc76: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 169941345389347550,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '627437',
                      pageJsonId: '8430824',
                      customFuncName: 'caluNet',
                    },
                    line_number: 2,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc76.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc76, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Input_6435406'] = r)}
              {...injectData}
            />
            <Input
              name={'年信息化收入'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'元'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'自动计算'}
              fieldName={'infoIncomeYear'}
              value={data?.feeInfo?.infoIncomeYear}
              formItemIndex={29}
              regexp={[
                {
                  id: '844515',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入大于0且最多2位小数的数',
                  pattern:
                    '/^([1-9]\\d*(\\.\\d{0,2})?|([0](\\.([0][1-9]|[1-9]\\d{0,1}))))$/',
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
                id: 'Input_137463',
                uid: 'Input_137463',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_137463'] = r)}
              {...injectData}
            />
            <Input
              name={'可收回网络成本'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'月'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'自动计算'}
              fieldName={'recoverNetCost'}
              value={data?.feeInfo?.recoverNetCost}
              formItemIndex={30}
              regexp={[]}
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
                id: 'Input_0484931',
                uid: 'Input_0484931',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_0484931'] = r)}
              {...injectData}
            />
            <Text
              name={'文本'}
              content={'　'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              labelCol={8}
              wrapperCol={16}
              $$componentItem={{
                id: 'Text_807819',
                uid: 'Text_807819',
                type: 'Text',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              schema={{
                compType: 1,
                props: {
                  formItemIndex: 31,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{
                textAlign: 'left',
                fontSize: '14px',
                lineHeight: '24px',
                color: '#1c242e',
                backgroundColor: 'rgba(255, 255, 255,0)',
              }}
              ref={(r: any) => (refs['Text_807819'] = r)}
              {...injectData}
            />
            <Divider
              name={'分割线'}
              orientation={'center'}
              type={'horizontal'}
              dashed={false}
              showTitle={true}
              $$componentItem={{
                id: 'Divider_8195814',
                uid: 'Divider_8195814',
                type: 'Divider',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              schema={{
                compType: 1,
                props: {
                  formItemIndex: 32,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{ margin: '12px 0 12px 0', height: 'auto' }}
              ref={(r: any) => (refs['Divider_8195814'] = r)}
              {...injectData}
            />
            <Divider
              name={'分割线'}
              orientation={'center'}
              type={'horizontal'}
              dashed={false}
              dividerText={'收入分成'}
              showTitle={true}
              $$componentItem={{
                id: 'Divider_9251086',
                uid: 'Divider_9251086',
                type: 'Divider',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              schema={{
                compType: 1,
                props: {
                  formItemIndex: 33,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{ margin: '12px 0 12px 0', height: 'auto' }}
              ref={(r: any) => (refs['Divider_9251086'] = r)}
              {...injectData}
            />
            <Divider
              name={'分割线'}
              orientation={'center'}
              type={'horizontal'}
              dashed={false}
              showTitle={true}
              $$componentItem={{
                id: 'Divider_052314',
                uid: 'Divider_052314',
                type: 'Divider',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              schema={{
                compType: 1,
                props: {
                  formItemIndex: 34,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{ margin: '12px 0 12px 0', height: 'auto' }}
              ref={(r: any) => (refs['Divider_052314'] = r)}
              {...injectData}
            />
            <Input
              name={'福建'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'%'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              fieldName={'revenueShare'}
              value={data?.feeInfo?.revenueShare}
              formItemIndex={35}
              regexp={[
                {
                  id: '844515',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入大于0且最多2位小数的数',
                  pattern:
                    '/^([1-9]\\d*(\\.\\d{0,2})?|([0](\\.([0][1-9]|[1-9]\\d{0,1}))))$/',
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
                id: 'Input_449151',
                uid: 'Input_449151',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_449151'] = r)}
              {...injectData}
            />
            <Input
              name={'A省份'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'%'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              fieldName={'fromShare'}
              value={data?.feeInfo?.fromShare}
              formItemIndex={36}
              regexp={[
                {
                  id: '844515',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入大于0且最多2位小数的数',
                  pattern:
                    '/^([1-9]\\d*(\\.\\d{0,2})?|([0](\\.([0][1-9]|[1-9]\\d{0,1}))))$/',
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
                id: 'Input_609179',
                uid: 'Input_609179',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_609179'] = r)}
              {...injectData}
            />
            <Input
              name={'Z省份'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'%'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              fieldName={'toShare'}
              value={data?.feeInfo?.toShare}
              formItemIndex={37}
              regexp={[
                {
                  id: '844515',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入大于0且最多2位小数的数',
                  pattern:
                    '/^([1-9]\\d*(\\.\\d{0,2})?|([0](\\.([0][1-9]|[1-9]\\d{0,1}))))$/',
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
                id: 'Input_772106',
                uid: 'Input_772106',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_772106'] = r)}
              {...injectData}
            />
          </Form>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(NetworkAcrossProvince$$Modal, {
  pageId: '1036116888616538112',
  hasLogin: false,
  dataSource,
  defaultState: {
    bizId: '',
    sceneCode: '',
    popType: '',
    feeInfo: '',
    catalogCode: '',
    isDetails: '',
  },
});
