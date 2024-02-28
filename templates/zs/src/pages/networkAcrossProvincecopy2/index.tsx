// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Divider, Form, Select, Input, Text } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '1038995325064638464';
const NetworkAcrossProvincecopy2$$Modal: React.FC<PageProps> = ({
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
  const calculEndDiscount = (options_152622: any) => {
    const eventDatagetValue62: any = [
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
    eventDatagetValue62.params =
      [
        {
          title: '事件入参',
          name: 'options_152622',
          value: '$options_152622$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue62, { options_152622 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };
  const calculPrice = (options_4731497: any) => {
    const eventDatagetSelectedData15: any = [
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
            type: 'ifelse',
            condition: [
              {
                options: {
                  context: '$selectedData_306467[0]$',
                  operate: 'notEmpty',
                },
                condId: '297847',
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 169932441040754850,
            elseIfs: [],
            line_number: 2,
            callback1: [
              {
                type: 'apiRequest',
                dataId: 169932441955494850,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '1115973',
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
                              dataKey: '1115973_root.body.catalogCode',
                              value: {
                                type: ['context', '$state.catalogCode$'],
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
                              dataKey: '1115973_root.body.attrCode',
                              value: {
                                type: ['customize'],
                                code: 'mvTransElePrice',
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
                          dataKey: '1115973_root.body',
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
                          dataKey: '1115973_root.header',
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
                          dataKey: '1115973_root.path',
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
                          dataKey: '1115973_root.query',
                        },
                      ],
                      _id: 'root',
                      compType: 'Input',
                      isRoot: true,
                      parents: [],
                      key: '0',
                      id: 'root',
                      dataKey: '1115973_root',
                    },
                  ],
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 169932441955447360,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '599071',
                      pageJsonId: '8430824',
                      code: 'function main(data,state,success,fail){var _reply_;var bandwidth=selectedData_306467[0].label;console.log("\\u5E26\\u5BBD\\uFF1A",bandwidth);var result=(_reply_=reply_1115973)===null||_reply_===void 0?void 0:_reply_.resultData;var f=result.filter(function(item){return item.attrValueDesc==bandwidth});console.log("\\u8FC7\\u6EE4\\u503C\\uFF1A",f);data.feeInfo.standardPrice=f[0].attrValue;success(f[0].attrValue)};',
                    },
                    line_number: 4,
                    callback1: [
                      {
                        type: 'setValue',
                        dataId: 169932441955426560,
                        options: {
                          compId: ['Input_241407'],
                          compLib: 'comm',
                          pageJsonId: '8430824',
                          compName: 'Input',
                          id: '990639',
                          valueList: { Input_241407: '$data_599071$' },
                          compid: ['Input_241407'],
                        },
                        line_number: 5,
                        callback1: [
                          {
                            type: 'callSelfFunc',
                            dataId: 169932441955474660,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '58835',
                              pageJsonId: '8430824',
                              customFuncName: 'calculEndDiscount',
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
          },
        ],
        callback2: [],
      },
    ];
    eventDatagetSelectedData15.params =
      [
        {
          title: '事件入参',
          name: 'options_4731497',
          value: '$options_4731497$',
        },
      ] || [];
    CMDGenerator(
      eventDatagetSelectedData15,
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
    const eventDatagetValue63: any = [
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
    eventDatagetValue63.params =
      [
        { title: '事件入参', name: 'options_57729', value: '$options_57729$' },
      ] || [];
    CMDGenerator(eventDatagetValue63, { options_57729 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };
  const caluOfferPrice = (options_4325873: any) => {
    const eventDatagetSelectedData16: any = [
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
            type: 'ifelse',
            condition: [
              {
                condId: '7802818',
                options: {
                  context: '$selectedData_7812103[0]$',
                  operate: 'notEmpty',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 169932428473914430,
            elseIfs: [],
            line_number: 2,
            callback1: [
              {
                type: 'apiRequest',
                dataId: 169932429160983680,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '814726',
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
                              dataKey: '814726_root.body.catalogCode',
                              value: {
                                type: ['context', '$state.catalogCode$'],
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
                              dataKey: '814726_root.body.attrCode',
                              value: {
                                type: ['customize'],
                                code: 'mvTransEleOffer',
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
                          dataKey: '814726_root.body',
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
                          dataKey: '814726_root.header',
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
                          dataKey: '814726_root.path',
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
                          dataKey: '814726_root.query',
                        },
                      ],
                      _id: 'root',
                      compType: 'Input',
                      isRoot: true,
                      parents: [],
                      key: '0',
                      id: 'root',
                      dataKey: '814726_root',
                    },
                  ],
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 169932429160904580,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '096396',
                      pageJsonId: '8430824',
                      code: 'function main(data,state,success,fail){var _reply_;var bandwidth=selectedData_7812103[0].label;console.log("\\u5E26\\u5BBD\\uFF1A",bandwidth);var result=(_reply_=reply_814726)===null||_reply_===void 0?void 0:_reply_.resultData;var f=result.filter(function(item){return item.attrValueDesc==bandwidth});console.log("\\u8FC7\\u6EE4\\u503C\\uFF1A",f);data.feeInfo.officePrice=f[0].attrValue;success(f[0].attrValue)};',
                    },
                    line_number: 4,
                    callback1: [
                      {
                        type: 'setValue',
                        dataId: 169932429160927870,
                        options: {
                          compId: 'Input_4646994',
                          compLib: 'comm',
                          pageJsonId: '8430824',
                          compName: 'Input',
                          id: '47952616',
                          valueList: { Input_4646994: '$data_096396$' },
                        },
                        line_number: 5,
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
        callback2: [],
      },
    ];
    eventDatagetSelectedData16.params =
      [
        {
          title: '事件入参',
          name: 'options_4325873',
          value: '$options_4325873$',
        },
      ] || [];
    CMDGenerator(
      eventDatagetSelectedData16,
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
    const eventDatagetSelectedData17: any = [
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
    eventDatagetSelectedData17.params =
      [
        {
          title: '事件入参',
          name: 'options_638773',
          value: '$options_638773$',
        },
      ] || [];
    CMDGenerator(
      eventDatagetSelectedData17,
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
  const luYear = (options_919936: any) => {
    const eventDatagetValue64: any = [
      {
        type: 'getValue',
        dataId: 169934147704685220,
        options: {
          compId: 'Input_326617',
          compLib: 'comm',
          pageJsonId: '8430824',
          compName: 'Input',
          id: '313603',
        },
        line_number: 1,
        callback1: [
          {
            type: 'getValue',
            dataId: 169934147704601340,
            options: {
              compId: 'Input_6435406',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Input',
              id: '612701',
            },
            line_number: 2,
            callback1: [
              {
                type: 'getValue',
                dataId: 169934147704614500,
                options: {
                  compId: 'Input_279786',
                  compLib: 'comm',
                  pageJsonId: '8430824',
                  compName: 'Input',
                  id: '306743',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '4766997',
                        options: {
                          context: '$value_306743$',
                          operate: 'notEmpty',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                      {
                        options: {
                          context: '$value_612701$',
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
                          context: '$value_313603$',
                          operate: 'notEmpty',
                        },
                        condId: '035543',
                        connector: '&&',
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 169934147704679800,
                    elseIfs: [],
                    line_number: 4,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 169934147704630750,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '161845',
                          pageJsonId: '8430824',
                          code: 'function main(data,state,success,fail){var w=parseFloat(value_306743);var z=parseFloat(value_612701);var one=parseFloat(value_313603);var result=Math.ceil(one/(z-w/12));data.feeInfo.recoverNetCost=result;success(result)};',
                        },
                        line_number: 5,
                        callback1: [
                          {
                            type: 'setValue',
                            dataId: 169934147704665300,
                            options: {
                              compId: 'Input_0484931',
                              compLib: 'comm',
                              pageJsonId: '8430824',
                              compName: 'Input',
                              id: '756082',
                              valueList: { Input_0484931: '$data_161845$' },
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
    eventDatagetValue64.params =
      [
        {
          title: '事件入参',
          name: 'options_919936',
          value: '$options_919936$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue64, { options_919936 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };
  const caluYear = (options_863531: any) => {
    const eventDatagetValue65: any = [
      {
        type: 'getValue',
        dataId: 169934152757886400,
        options: {
          compId: 'Input_6435406',
          compLib: 'comm',
          pageJsonId: '8430824',
          compName: 'Input',
          id: '312445',
        },
        line_number: 1,
        callback1: [
          {
            type: 'ifelse',
            condition: [
              {
                condId: '81524444',
                options: { context: '$value_312445$', operate: 'notEmpty' },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 169934152757804450,
            elseIfs: [],
            line_number: 2,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 169934152757886980,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '8144864',
                  pageJsonId: '8430824',
                  code: 'function main(data,state,success,fail){var result=(parseFloat(value_312445)*12).toFixed(0);data.feeInfo.infoIncomeYear=result;success(result)};',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'sysSetValue',
                    dataId: 169934152757857180,
                    options: {
                      compId: ['Input_137463'],
                      compName: 'page',
                      id: '7792869',
                      pageJsonId: '8430824',
                      compid: ['Input_137463'],
                      valueList: { Input_137463: '$data_8144864$' },
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
    eventDatagetValue65.params =
      [
        {
          title: '事件入参',
          name: 'options_863531',
          value: '$options_863531$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue65, { options_863531 }, 'getValue', {
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
    luYear,
    caluYear,
  }));

  const onOk = () => {
    const eventDatavalidateCurrentForm35: any = [
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
        line_number: 1,
        callback1: [
          {
            type: 'getSelectedData',
            dataId: 169923828373991520,
            shielding: true,
            options: {
              compId: 'Input_standardPrice_89896',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '477201',
            },
            line_number: 2,
            callback1: [
              {
                type: 'getSelectedData',
                dataId: 169923828373968670,
                shielding: true,
                options: {
                  compId: 'Select_8264436',
                  compLib: 'comm',
                  pageJsonId: '8430824',
                  compName: 'Select',
                  id: '453461',
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
                    line_number: 4,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 169923828373978140,
                        shielding: true,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '7223374',
                          pageJsonId: '8430824',
                          actionTitle: '设置分成——成功则都不为福建',
                          code: 'function main(data,state,success,fail){var as=selectedData_477201[0];var zs=selectedData_453461[0];var f=data.feeInfo.revenueShare;var a=data.feeInfo.fromShare;var z=data.feeInfo.toShare;var result="";if(as.label!="\\u798F\\u5EFA"&&zs.label!="\\u798F\\u5EFA"){result="\\u798F\\u5EFA:"+f+"%,"+"A\\u7701\\u4EFD"+a+"%,"+"Z\\u7701\\u4EFD:"+z+"%";if(parseFloat(f)+parseFloat(a)+parseFloat(z)>100){fail()}else{success()}}else{data.feeInfo.revenueShare="";result="A\\u7701\\u4EFD"+a+"%,"+"Z\\u7701\\u4EFD:"+z+"%";if(parseFloat(a)+parseFloat(z)>100){fail()}else{success()}}data.feeInfo.revenueShareName=result};',
                        },
                        line_number: 5,
                        callback1: [
                          {
                            type: 'setDataSource',
                            dataId: 169923828373922430,
                            shielding: true,
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
                                {
                                  attrId: '291675',
                                  code: 'mvTransEleOffer',
                                  name: 'mv跨省电路管控价',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                  _codePath: ['mvTransEleOffer'],
                                  _idpath: ['291675'],
                                },
                                {
                                  attrId: '5249834',
                                  code: 'mvTransElePrice',
                                  name: 'mv跨省电路目录价',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                  _codePath: ['mvTransElePrice'],
                                  _idpath: ['5249834'],
                                },
                              ],
                              operateType: 1,
                              onlySetPatch: true,
                              otherObjectArrayOptions: {},
                              targetDataSourcePaths: [],
                            },
                            line_number: 6,
                            callback1: [
                              {
                                type: 'getValue',
                                dataId: 169923828373954300,
                                shielding: true,
                                options: {
                                  compId: 'Input_4646994',
                                  compLib: 'comm',
                                  pageJsonId: '8430824',
                                  compName: 'Input',
                                  id: '9166354',
                                },
                                line_number: 7,
                                callback1: [
                                  {
                                    type: 'getValue',
                                    dataId: 169923828373950530,
                                    shielding: true,
                                    options: {
                                      compId: 'Input_022401',
                                      compLib: 'comm',
                                      pageJsonId: '8430824',
                                      compName: 'Input',
                                      id: '6976495',
                                    },
                                    line_number: 8,
                                    callback1: [
                                      {
                                        type: 'customActionCode',
                                        dataId: 169923828373934980,
                                        shielding: true,
                                        options: {
                                          compId: 'customActionCode',
                                          compName: 'page',
                                          id: '252167',
                                          pageJsonId: '8430824',
                                          actionTitle: '',
                                          code: 'function main(data,state,success,fail){var oldRowId=data.feeInfo.rowId;if(state.feeInfo==undefined||state.feeInfo==null){var min=0;var max=10000;var rowId=Math.round(Math.random()*(max-min))+min;data.feeInfo.rowId=rowId}else{data.feeInfo.rowId=oldRowId}var officePrice=parseFloat(value_9166354);var onePrice=parseFloat(value_6976495);if(onePrice<officePrice){data.feeInfo.flag=1}else{data.feeInfo.flag=2}success(data.feeInfo)};',
                                        },
                                        line_number: 9,
                                        callback1: [
                                          {
                                            type: 'okCallbackData',
                                            dataId: 169923828373900220,
                                            shielding: true,
                                            options: {
                                              compId: 'okCallbackData',
                                              compName: 'page',
                                              id: '976338',
                                              pageJsonId: '8430824',
                                              params: '$data_252167$',
                                            },
                                            line_number: 10,
                                          },
                                          {
                                            type: 'closeModal',
                                            dataId: 169923828373994050,
                                            shielding: true,
                                            options: {
                                              compId: 'closeModal',
                                              compName: 'page',
                                              id: '128187',
                                              pageJsonId: '8430824',
                                            },
                                            line_number: 11,
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
                            shielding: true,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '198816',
                              pageJsonId: '8430824',
                              type: 'info',
                              value: '收入分成相加不应大于100%',
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
            ],
            callback2: [],
          },
          {
            type: 'getSelectedData',
            dataId: 16993493810855574,
            options: {
              compId: 'Input_standardPrice_89896',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '055183',
            },
            line_number: 13,
            callback1: [
              {
                type: 'getSelectedData',
                dataId: 169934938108509060,
                options: {
                  compId: 'Select_8264436',
                  compLib: 'comm',
                  pageJsonId: '8430824',
                  compName: 'Select',
                  id: '416971',
                },
                line_number: 14,
                callback1: [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '9681593',
                        options: {
                          context: '$selectedData_416971[0]$',
                          operate: 'notEmpty',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                      {
                        options: {
                          context: '$selectedData_055183[0]$',
                          operate: 'notEmpty',
                        },
                        condId: '3613044',
                        connector: '&&',
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 169934938108518900,
                    elseIfs: [],
                    line_number: 15,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 169934938108569380,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '827398',
                          pageJsonId: '8430824',
                          actionTitle: '设置分成——成功则都不为福建',
                          code: 'function main(data,state,success,fail){var as=selectedData_055183[0];var zs=selectedData_416971[0];var f=data.feeInfo.revenueShare;var a=data.feeInfo.fromShare;var z=data.feeInfo.toShare;var result="";if(as.label!="\\u798F\\u5EFA"&&zs.label!="\\u798F\\u5EFA"){console.log("\\u90FD\\u4E0D\\u4E3A\\u798F\\u5EFA");result="\\u798F\\u5EFA\\uFF1A"+f+"\\uFF05\\uFF0C"+"A\\u7701\\u4EFD\\uFF1A"+a+"\\uFF05\\uFF0C"+"Z\\u7701\\u4EFD\\uFF1A"+z+"\\uFF05";if(parseFloat(f)+parseFloat(a)+parseFloat(z)!=100){fail()}else{success()}}else{console.log("\\u6709\\u4E00\\u4E2A\\u4E3A\\u798F\\u5EFA");data.feeInfo.revenueShare="";result="A\\u7701\\u4EFD\\uFF1A"+a+"\\uFF05\\uFF0C"+"Z\\u7701\\u4EFD\\uFF1A"+z+"\\uFF05";if(parseFloat(a)+parseFloat(z)!=100){fail()}else{success()}}data.feeInfo.revenueShareName=result};',
                        },
                        line_number: 16,
                        callback1: [
                          {
                            type: 'setDataSource',
                            dataId: 169934938108578100,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '111985',
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
                            line_number: 17,
                            callback1: [
                              {
                                type: 'getValue',
                                dataId: 169934938108529500,
                                options: {
                                  compId: 'Input_4646994',
                                  compLib: 'comm',
                                  pageJsonId: '8430824',
                                  compName: 'Input',
                                  id: '931319',
                                },
                                line_number: 18,
                                callback1: [
                                  {
                                    type: 'getValue',
                                    dataId: 169934938108532500,
                                    options: {
                                      compId: 'Input_022401',
                                      compLib: 'comm',
                                      pageJsonId: '8430824',
                                      compName: 'Input',
                                      id: '1229637',
                                    },
                                    line_number: 19,
                                    callback1: [
                                      {
                                        type: 'customActionCode',
                                        dataId: 169934938108591170,
                                        options: {
                                          compId: 'customActionCode',
                                          compName: 'page',
                                          id: '9506142',
                                          pageJsonId: '8430824',
                                          actionTitle: '',
                                          code: 'function main(data,state,success,fail){var oldRowId=data.feeInfo.rowId;if(state.feeInfo==undefined||state.feeInfo==null){var min=0;var max=10000;var rowId=Math.round(Math.random()*(max-min))+min;data.feeInfo.rowId=rowId}else{data.feeInfo.rowId=oldRowId}var officePrice=parseFloat(value_931319);var onePrice=parseFloat(value_1229637);if(onePrice<officePrice){data.feeInfo.flag=1}else{data.feeInfo.flag=2}success(data.feeInfo)};',
                                        },
                                        line_number: 20,
                                        callback1: [
                                          {
                                            type: 'okCallbackData',
                                            dataId: 169934938108512500,
                                            options: {
                                              compId: 'okCallbackData',
                                              compName: 'page',
                                              id: '9838643',
                                              pageJsonId: '8430824',
                                              params: '$data_9506142$',
                                            },
                                            line_number: 21,
                                          },
                                          {
                                            type: 'closeModal',
                                            dataId: 169934938108571620,
                                            options: {
                                              compId: 'closeModal',
                                              compName: 'page',
                                              id: '6745636',
                                              pageJsonId: '8430824',
                                            },
                                            line_number: 22,
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
                            dataId: 169934938108572500,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '844477',
                              pageJsonId: '8430824',
                              type: 'info',
                              value: '收入分成相加应等于100%',
                            },
                            line_number: 23,
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
    eventDatavalidateCurrentForm35.params = [] || [];
    CMDGenerator(eventDatavalidateCurrentForm35, {}, 'validateCurrentForm', {
      id: 'validateCurrentForm',
      name: 'validateCurrentForm',
      type: 'validateCurrentForm',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal31: any = [
      {
        type: 'closeModal',
        dataId: '3594441_1',
        options: { compId: 'page', compName: 'page', id: '7285676' },
        line_number: 1,
      },
    ];
    eventDatacloseModal31.params = [] || [];
    CMDGenerator(eventDatacloseModal31, {}, 'closeModal', {
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
    const eventDataapiRequest276: any = [
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
    eventDataapiRequest276.params = [] || [];
    CMDGenerator(eventDataapiRequest276, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest277: any = [
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
    eventDataapiRequest277.params = [] || [];
    CMDGenerator(eventDataapiRequest277, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest278: any = [
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
    eventDataapiRequest278.params = [] || [];
    CMDGenerator(eventDataapiRequest278, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest279: any = [
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
                dataId: 169937787255861060,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '062892',
                  pageJsonId: '8430824',
                  code: 'function main(data,state,success,fail){console.log("===\\u8BBE\\u7F6E\\u9ED8\\u8BA4\\u503C====");console.log(data);if(data.feeInfo.fromProvince==undefined||data.feeInfo.fromProvince==""){data.feeInfo.fromProvince="9";data.feeInfo.fromProvinceName="\\u798F\\u5EFA";console.log("===\\u8BBE\\u7F6E\\u6570\\u636E\\u6E90\\u503C",data);success()}};',
                  actionTitle: '设置默认值福建',
                },
                line_number: 9,
                callback1: [
                  {
                    type: 'setDataSource',
                    dataId: 169937913791806300,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '28425',
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
                        {
                          attrId: '5249834',
                          code: 'mvTransElePrice',
                          name: 'mv跨省电路目录价',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '291675',
                          code: 'mvTransEleOffer',
                          name: 'mv跨省电路管控价',
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
                dataId: 169937875218555620,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '901379',
                  pageJsonId: '8430824',
                  code: 'function main(data,state,success,fail){console.log("===\\u8BBE\\u7F6E\\u9ED8\\u8BA4\\u503C====");console.log(data);if(data.feeInfo.toProvince==undefined||data.feeInfo.toProvince==""){data.feeInfo.toProvince="9";data.feeInfo.toProvinceName="\\u798F\\u5EFA";console.log("===\\u8BBE\\u7F6E\\u6570\\u636E\\u6E90\\u503C",data);success()}};',
                  actionTitle: '设置默认值福建',
                },
                line_number: 12,
                callback1: [
                  {
                    type: 'setDataSource',
                    dataId: 169937914530829800,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '428712',
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
                        {
                          attrId: '5249834',
                          code: 'mvTransElePrice',
                          name: 'mv跨省电路目录价',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '291675',
                          code: 'mvTransEleOffer',
                          name: 'mv跨省电路管控价',
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
    eventDataapiRequest279.params = [] || [];
    CMDGenerator(eventDataapiRequest279, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest280: any = [
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
    eventDataapiRequest280.params = [] || [];
    CMDGenerator(eventDataapiRequest280, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest281: any = [
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
    eventDataapiRequest281.params = [] || [];
    CMDGenerator(eventDataapiRequest281, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest282: any = [
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
    eventDataapiRequest282.params = [] || [];
    CMDGenerator(eventDataapiRequest282, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest283: any = [
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
    eventDataapiRequest283.params = [] || [];
    CMDGenerator(eventDataapiRequest283, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse153: any = [
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
            type: 'setDataSource',
            dataId: 167386144145163700,
            shielding: true,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '427075',
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
                    type: ['datasource', 'feeInfo', 'data'],
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
                    type: ['datasource', 'feeInfo', 'data'],
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
                    type: ['datasource', 'feeInfo', 'data'],
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
                    type: ['datasource', 'feeInfo', 'data'],
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
                    type: ['datasource', 'feeInfo', 'data'],
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
                    type: ['datasource', 'feeInfo', 'data'],
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
                    type: ['datasource', 'feeInfo', 'data'],
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
                    type: ['datasource', 'feeInfo', 'data'],
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
                    type: ['datasource', 'feeInfo', 'data'],
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
                    type: ['datasource', 'feeInfo', 'data'],
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
                    type: ['datasource', 'feeInfo', 'data'],
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
                    type: ['datasource', 'feeInfo', 'data'],
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
                    type: ['datasource', 'feeInfo', 'data'],
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
                    type: ['datasource', 'feeInfo', 'data'],
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
                    type: ['datasource', 'feeInfo', 'data'],
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
                    type: ['datasource', 'feeInfo', 'data'],
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
                    type: ['datasource', 'feeInfo', 'data'],
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
                    type: ['datasource', 'feeInfo', 'data'],
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
                    type: ['datasource', 'feeInfo', 'data'],
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
                    type: ['datasource', 'feeInfo', 'data'],
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
                    type: ['datasource', 'feeInfo', 'data'],
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
                    type: ['datasource', 'feeInfo', 'data'],
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
                    type: ['datasource', 'feeInfo', 'data'],
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
                    type: ['datasource', 'feeInfo', 'data'],
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
                    type: ['datasource', 'feeInfo', 'data'],
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
                    type: ['datasource', 'feeInfo', 'data'],
                    code: 'crmJoinWay',
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
                    type: ['datasource', 'feeInfo', 'data'],
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
                  value: {
                    type: ['datasource', 'feeInfo', 'data'],
                    code: 'busiTypeName',
                  },
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
                    type: ['datasource', 'feeInfo', 'data'],
                    code: 'bandwidthName',
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
                {
                  attrId: '291675',
                  code: 'mvTransEleOffer',
                  name: 'mv跨省电路管控价',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['mvTransEleOffer'],
                  _idpath: ['291675'],
                },
                {
                  attrId: '5249834',
                  code: 'mvTransElePrice',
                  name: 'mv跨省电路目录价',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['mvTransElePrice'],
                  _idpath: ['5249834'],
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
              targetDataSourcePaths: [],
            },
            line_number: 31,
            callback1: [
              {
                type: 'console',
                dataId: 169874426501652540,
                shielding: true,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '5211855',
                  pageJsonId: '8430824',
                  value: ['====feeInfo====', '$state.feeInfo$'],
                },
                line_number: 32,
              },
            ],
            callback2: [],
          },
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
            line_number: 33,
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
                line_number: 34,
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
                            line_number: 41,
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
                            line_number: 42,
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
                            line_number: 43,
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
                            line_number: 44,
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
                            line_number: 41,
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
                            line_number: 42,
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
                            line_number: 43,
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
                            line_number: 44,
                          },
                        ],
                      },
                    ],
                    line_number: 35,
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
                        line_number: 36,
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
                        line_number: 37,
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
                        line_number: 38,
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
                        line_number: 39,
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
                        line_number: 40,
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
                            line_number: 51,
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
                            line_number: 52,
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
                            line_number: 53,
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
                            line_number: 54,
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
                            line_number: 51,
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
                            line_number: 52,
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
                            line_number: 53,
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
                            line_number: 54,
                          },
                        ],
                      },
                    ],
                    line_number: 45,
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
                        line_number: 46,
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
                        line_number: 47,
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
                        line_number: 48,
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
                        line_number: 49,
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
                        line_number: 50,
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
                    line_number: 55,
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
            dataId: 169934962822190980,
            elseIfs: [],
            line_number: 56,
            callback1: [
              {
                type: 'sysSetDisable',
                dataId: 169934962822120320,
                options: {
                  compId: ['Form_981467'],
                  compName: 'page',
                  id: '854506',
                  pageJsonId: '8430824',
                  disabled: 'true',
                  compid: ['Form_981467'],
                },
                line_number: 57,
              },
            ],
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
            dataId: 169937732449360740,
            elseIfs: [],
            line_number: 58,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 169937732449321700,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '31757897',
                  pageJsonId: '8430824',
                  code: 'function main(data,state,success,fail){var a=data.feeInfo.fromProvince;var z=data.feeInfo.toProvince;console.log("a\\u7AEF",a);console.log("z\\u7AEF",z);if(a!="9"&&z!="9"){success()}else{fail()}};',
                },
                line_number: 59,
                callback1: [
                  {
                    type: 'sysSetVisible',
                    dataId: 169937732449364500,
                    options: {
                      compId: ['Input_449151'],
                      compName: 'page',
                      id: '902623',
                      pageJsonId: '8430824',
                      visible: 'true',
                      compid: ['Input_449151'],
                    },
                    line_number: 60,
                  },
                  {
                    type: 'sysSetRequired',
                    dataId: 169937732449386050,
                    options: {
                      compId: ['Input_449151'],
                      compName: 'page',
                      id: '7597498',
                      pageJsonId: '8430824',
                      required: 'true',
                      compid: ['Input_449151'],
                    },
                    line_number: 61,
                  },
                ],
                callback2: [
                  {
                    type: 'sysSetVisible',
                    dataId: 169937732449355040,
                    options: {
                      compId: ['Input_449151'],
                      compName: 'page',
                      id: '173558',
                      pageJsonId: '8430824',
                      visible: '',
                      compid: ['Input_449151'],
                    },
                    line_number: 62,
                  },
                  {
                    type: 'sysSetRequired',
                    dataId: 169937732449366820,
                    options: {
                      compId: ['Input_449151'],
                      compName: 'page',
                      id: '0681903',
                      pageJsonId: '8430824',
                      required: '',
                      compid: ['Input_449151'],
                    },
                    line_number: 63,
                  },
                ],
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse153.params = [] || [];
    CMDGenerator(eventDataifelse153, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    }); // console 169874609006342900
    console.log(state?.feeInfo);

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_8430824__"
    >
      <View
        className="View_View_8430824_1"
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
        ref={(r: any) => refs.setComponentRef(r, 'View_8430824_1')}
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
          ref={(r: any) => refs.setComponentRef(r, 'Divider_9073224')}
          {...injectData}
        />
        <View
          className="View_View_917911"
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
          ref={(r: any) => refs.setComponentRef(r, 'View_917911')}
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
              const eventDatasetDataSource130: any = [
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
                        value: {
                          type: ['form', 'Form_981467', 'getFieldsValue'],
                          code: 'recoverNetCost',
                        },
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
                      {
                        attrId: '5249834',
                        code: 'mvTransElePrice',
                        name: 'mv跨省电路目录价',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                      },
                      {
                        attrId: '291675',
                        code: 'mvTransEleOffer',
                        name: 'mv跨省电路管控价',
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
              eventDatasetDataSource130.params = [] || [];
              CMDGenerator(eventDatasetDataSource130, {}, 'setDataSource', {
                id: 'setDataSource',
                name: 'setDataSource',
                type: 'setDataSource',
                platform: 'pc',
              });
              const eventDatagetSelectedData216: any = [
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
                                  dataId: 169932774602647100,
                                  shielding: true,
                                  options: {
                                    compId: ['Icon_2621727'],
                                    compName: 'page',
                                    id: '9642044',
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
                                    compId: ['Icon_2621727'],
                                    compName: 'page',
                                    id: '049108',
                                    pageJsonId: '8430824',
                                    visible: '',
                                    compid: ['Icon_2621727'],
                                  },
                                  line_number: 10,
                                },
                                {
                                  type: 'sysSetVisible',
                                  dataId: 169932775536531200,
                                  shielding: true,
                                  options: {
                                    compId: ['Input_449151'],
                                    compName: 'page',
                                    id: '120287',
                                    pageJsonId: '8430824',
                                    visible: '',
                                    compid: ['Input_449151'],
                                  },
                                  line_number: 11,
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
              eventDatagetSelectedData216.params = [] || [];
              CMDGenerator(eventDatagetSelectedData216, {}, 'getSelectedData', {
                id: 'getSelectedData',
                name: 'getSelectedData',
                type: 'getSelectedData',
                platform: 'pc',
              });
              const eventDatacallSelfFunc405: any = [
                {
                  type: 'callSelfFunc',
                  dataId: 169934149049188480,
                  shielding: true,
                  options: {
                    compId: 'callSelfFunc',
                    compName: 'system',
                    id: '679593',
                    pageJsonId: '8430824',
                    customFuncName: 'luYear',
                  },
                  line_number: 12,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatacallSelfFunc405.params = [] || [];
              CMDGenerator(eventDatacallSelfFunc405, {}, 'callSelfFunc', {
                id: 'callSelfFunc',
                name: 'callSelfFunc',
                type: 'callSelfFunc',
                platform: 'pc',
              });
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_981467')}
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
                const eventDatagetSelectedData223: any = [
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
                            {
                              attrId: '291675',
                              code: 'mvTransEleOffer',
                              name: 'mv跨省电路管控价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['mvTransEleOffer'],
                              _idpath: ['291675'],
                            },
                            {
                              attrId: '5249834',
                              code: 'mvTransElePrice',
                              name: 'mv跨省电路目录价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['mvTransElePrice'],
                              _idpath: ['5249834'],
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
                eventDatagetSelectedData223.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData223,
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
              ref={(r: any) => refs.setComponentRef(r, 'Input_busiType_956176')}
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
              formItemIndex={1}
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
                const eventDatacallSelfFunc417: any = [
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
                eventDatacallSelfFunc417.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDatacallSelfFunc417, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
                const eventDatacallSelfFunc418: any = [
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
                eventDatacallSelfFunc418.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDatacallSelfFunc418, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
                const eventDatagetSelectedData224: any = [
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
                            {
                              attrId: '291675',
                              code: 'mvTransEleOffer',
                              name: 'mv跨省电路管控价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['mvTransEleOffer'],
                              _idpath: ['291675'],
                            },
                            {
                              attrId: '5249834',
                              code: 'mvTransElePrice',
                              name: 'mv跨省电路目录价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['mvTransElePrice'],
                              _idpath: ['5249834'],
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
                eventDatagetSelectedData224.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData224,
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
              ref={(r: any) => refs.setComponentRef(r, 'Select_371996')}
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
              formItemIndex={2}
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
                const eventDatacallSelfFunc419: any = [
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
                eventDatacallSelfFunc419.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc419, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_7254833')}
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
              required={false}
              filter={'none'}
              classification={'default'}
              attr={{}}
              placeholder={'请选择'}
              fieldName={'accessWay'}
              value={data?.feeInfo?.accessWay}
              formItemIndex={3}
              $$componentItem={{
                id: 'Input_areaType_945066',
                uid: 'Input_areaType_945066',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_areaType_945066')}
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
              required={false}
              filter={'none'}
              classification={'default'}
              attr={{}}
              placeholder={'请选择'}
              fieldName={'lineType'}
              value={data?.feeInfo?.lineType}
              formItemIndex={4}
              $$componentItem={{
                id: 'Input_719179',
                uid: 'Input_719179',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatacallSelfFunc420: any = [
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
                eventDatacallSelfFunc420.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDatacallSelfFunc420, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_719179')}
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
              formItemIndex={5}
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
                const eventDatagetSelectedData225: any = [
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
                            {
                              attrId: '291675',
                              code: 'mvTransEleOffer',
                              name: 'mv跨省电路管控价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['mvTransEleOffer'],
                              _idpath: ['291675'],
                            },
                            {
                              attrId: '5249834',
                              code: 'mvTransElePrice',
                              name: 'mv跨省电路目录价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['mvTransElePrice'],
                              _idpath: ['5249834'],
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
                eventDatagetSelectedData225.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData225,
                  { e },
                  'getSelectedData',
                  {
                    id: 'getSelectedData',
                    name: 'getSelectedData',
                    type: 'getSelectedData',
                    platform: 'pc',
                  },
                );
                const eventDatagetSelectedData226: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 169942545823291680,
                    options: {
                      compId: 'Input_standardPrice_89896',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Select',
                      id: '173344',
                    },
                    line_number: 12,
                    callback1: [
                      {
                        type: 'getSelectedData',
                        dataId: 169942545823276930,
                        options: {
                          compId: 'Select_8264436',
                          compLib: 'comm',
                          pageJsonId: '8430824',
                          compName: 'Select',
                          id: '981728',
                        },
                        line_number: 13,
                        callback1: [
                          {
                            type: 'ifelse',
                            condition: [
                              {
                                condId: '9681593',
                                options: {
                                  context: '$selectedData_981728[0]$',
                                  operate: 'notEmpty',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                              {
                                options: {
                                  context: '$selectedData_173344[0]$',
                                  operate: 'notEmpty',
                                },
                                condId: '3613044',
                                connector: '&&',
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 169942545823275500,
                            elseIfs: [],
                            line_number: 14,
                            callback1: [
                              {
                                type: 'customActionCode',
                                dataId: 169942545823284640,
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '95931336',
                                  pageJsonId: '8430824',
                                  actionTitle: '设置分成——成功则都不为福建',
                                  code: 'function main(data,state,success,fail){var a=selectedData_173344[0];var z=selectedData_981728[0];if(a.label!="\\u798F\\u5EFA"&&z.label!="\\u798F\\u5EFA"){success()}else{fail()}};',
                                },
                                line_number: 15,
                                callback1: [
                                  {
                                    type: 'sysSetRequired',
                                    dataId: 169942545823225150,
                                    options: {
                                      compId: ['Input_449151'],
                                      compName: 'page',
                                      id: '490829',
                                      pageJsonId: '8430824',
                                      required: 'true',
                                      compid: ['Input_449151'],
                                    },
                                    line_number: 16,
                                  },
                                  {
                                    type: 'sysSetVisible',
                                    dataId: 169942545823240060,
                                    options: {
                                      compId: ['Input_449151'],
                                      compName: 'page',
                                      id: '115637',
                                      pageJsonId: '8430824',
                                      visible: 'true',
                                      compid: ['Input_449151'],
                                    },
                                    line_number: 17,
                                  },
                                  {
                                    type: 'sysSetVisible',
                                    dataId: 169942545823220600,
                                    options: {
                                      compId: ['Icon_2621727'],
                                      compName: 'page',
                                      id: '738546',
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
                                    dataId: 169942545823262800,
                                    options: {
                                      compId: ['Input_449151'],
                                      compName: 'page',
                                      id: '587256',
                                      pageJsonId: '8430824',
                                      required: '',
                                      compid: ['Input_449151'],
                                    },
                                    line_number: 19,
                                  },
                                  {
                                    type: 'sysSetVisible',
                                    dataId: 169942545823239970,
                                    options: {
                                      compId: ['Icon_2621727'],
                                      compName: 'page',
                                      id: '9569473',
                                      pageJsonId: '8430824',
                                      visible: '',
                                      compid: ['Icon_2621727'],
                                    },
                                    line_number: 20,
                                  },
                                  {
                                    type: 'sysSetVisible',
                                    dataId: 169942545823277340,
                                    options: {
                                      compId: ['Input_449151'],
                                      compName: 'page',
                                      id: '5202964',
                                      pageJsonId: '8430824',
                                      visible: '',
                                      compid: ['Input_449151'],
                                    },
                                    line_number: 21,
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
                eventDatagetSelectedData226.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData226,
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
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_standardPrice_89896')
              }
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
              formItemIndex={6}
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
              ref={(r: any) => refs.setComponentRef(r, 'Input_2889604')}
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
              formItemIndex={7}
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
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_receiptsPrice_488443')
              }
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
              formItemIndex={8}
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
              ref={(r: any) => refs.setComponentRef(r, 'Input_871811')}
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
              formItemIndex={9}
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
                const eventDatagetSelectedData227: any = [
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
                            {
                              attrId: '291675',
                              code: 'mvTransEleOffer',
                              name: 'mv跨省电路管控价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['mvTransEleOffer'],
                              _idpath: ['291675'],
                            },
                            {
                              attrId: '5249834',
                              code: 'mvTransElePrice',
                              name: 'mv跨省电路目录价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['mvTransElePrice'],
                              _idpath: ['5249834'],
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
                eventDatagetSelectedData227.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData227,
                  { e },
                  'getSelectedData',
                  {
                    id: 'getSelectedData',
                    name: 'getSelectedData',
                    type: 'getSelectedData',
                    platform: 'pc',
                  },
                );
                const eventDatagetSelectedData228: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 169942546545406720,
                    options: {
                      compId: 'Input_standardPrice_89896',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Select',
                      id: '82651',
                    },
                    line_number: 12,
                    callback1: [
                      {
                        type: 'getSelectedData',
                        dataId: 169942546545429120,
                        options: {
                          compId: 'Select_8264436',
                          compLib: 'comm',
                          pageJsonId: '8430824',
                          compName: 'Select',
                          id: '493774',
                        },
                        line_number: 13,
                        callback1: [
                          {
                            type: 'ifelse',
                            condition: [
                              {
                                condId: '9681593',
                                options: {
                                  context: '$selectedData_493774[0]$',
                                  operate: 'notEmpty',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                              {
                                options: {
                                  context: '$selectedData_82651[0]$',
                                  operate: 'notEmpty',
                                },
                                condId: '3613044',
                                connector: '&&',
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 169942546545469380,
                            elseIfs: [],
                            line_number: 14,
                            callback1: [
                              {
                                type: 'customActionCode',
                                dataId: 169942546545423580,
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '061388',
                                  pageJsonId: '8430824',
                                  actionTitle: '设置分成——成功则都不为福建',
                                  code: 'function main(data,state,success,fail){var a=selectedData_82651[0];var z=selectedData_493774[0];if(a.label!="\\u798F\\u5EFA"&&z.label!="\\u798F\\u5EFA"){success()}else{fail()}};',
                                },
                                line_number: 15,
                                callback1: [
                                  {
                                    type: 'sysSetRequired',
                                    dataId: 169942546545486270,
                                    options: {
                                      compId: ['Input_449151'],
                                      compName: 'page',
                                      id: '6401864',
                                      pageJsonId: '8430824',
                                      required: 'true',
                                      compid: ['Input_449151'],
                                    },
                                    line_number: 16,
                                  },
                                  {
                                    type: 'sysSetVisible',
                                    dataId: 169942546545404300,
                                    options: {
                                      compId: ['Input_449151'],
                                      compName: 'page',
                                      id: '233949',
                                      pageJsonId: '8430824',
                                      visible: 'true',
                                      compid: ['Input_449151'],
                                    },
                                    line_number: 17,
                                  },
                                  {
                                    type: 'sysSetVisible',
                                    dataId: 169942546545414370,
                                    options: {
                                      compId: ['Icon_2621727'],
                                      compName: 'page',
                                      id: '208966',
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
                                    dataId: 169942546545440220,
                                    options: {
                                      compId: ['Input_449151'],
                                      compName: 'page',
                                      id: '077907',
                                      pageJsonId: '8430824',
                                      required: '',
                                      compid: ['Input_449151'],
                                    },
                                    line_number: 19,
                                  },
                                  {
                                    type: 'sysSetVisible',
                                    dataId: 169942546545459100,
                                    options: {
                                      compId: ['Icon_2621727'],
                                      compName: 'page',
                                      id: '3205145',
                                      pageJsonId: '8430824',
                                      visible: '',
                                      compid: ['Icon_2621727'],
                                    },
                                    line_number: 20,
                                  },
                                  {
                                    type: 'sysSetVisible',
                                    dataId: 169942546545481730,
                                    options: {
                                      compId: ['Input_449151'],
                                      compName: 'page',
                                      id: '698663',
                                      pageJsonId: '8430824',
                                      visible: '',
                                      compid: ['Input_449151'],
                                    },
                                    line_number: 21,
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
                eventDatagetSelectedData228.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData228,
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
              ref={(r: any) => refs.setComponentRef(r, 'Select_8264436')}
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
              formItemIndex={10}
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
              ref={(r: any) => refs.setComponentRef(r, 'Select_886724')}
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
              formItemIndex={11}
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
              ref={(r: any) => refs.setComponentRef(r, 'Input_405627')}
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
              formItemIndex={12}
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
              ref={(r: any) => refs.setComponentRef(r, 'Input_667731')}
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
                  formItemIndex: 13,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{ margin: '12px 0 12px 0', height: 'auto' }}
              ref={(r: any) => refs.setComponentRef(r, 'Divider_745314')}
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
                  formItemIndex: 14,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{ margin: '12px 0 12px 0', height: 'auto' }}
              ref={(r: any) => refs.setComponentRef(r, 'Divider_71232')}
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
                  formItemIndex: 15,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{ margin: '12px 0 12px 0', height: 'auto' }}
              ref={(r: any) => refs.setComponentRef(r, 'Divider_5810696')}
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
              placeholder={'系统带出'}
              fieldName={'standardPrice'}
              value={data?.feeInfo?.standardPrice}
              formItemIndex={16}
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
                const eventDatacallSelfFunc421: any = [
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
                eventDatacallSelfFunc421.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc421, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_241407')}
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
              formItemIndex={17}
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
                const eventDatacallSelfFunc422: any = [
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
                eventDatacallSelfFunc422.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc422, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
                const eventDatacallSelfFunc423: any = [
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
                eventDatacallSelfFunc423.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc423, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_022401')}
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
              placeholder={'请输入'}
              fieldName={'lastDiscount'}
              value={data?.feeInfo?.lastDiscount}
              formItemIndex={18}
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
              ref={(r: any) => refs.setComponentRef(r, 'Input_468733')}
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
              placeholder={'系统带出'}
              fieldName={'officePrice'}
              value={data?.feeInfo?.officePrice}
              formItemIndex={19}
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
              ref={(r: any) => refs.setComponentRef(r, 'Input_4646994')}
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
              placeholder={'请输入'}
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
              ref={(r: any) => refs.setComponentRef(r, 'Input_2861392')}
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
              ref={(r: any) => refs.setComponentRef(r, 'Input_513158')}
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
                  formItemIndex: 22,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{ margin: '12px 0 12px 0', height: 'auto' }}
              ref={(r: any) => refs.setComponentRef(r, 'Divider_301106')}
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
                  formItemIndex: 23,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{ margin: '12px 0 12px 0', height: 'auto' }}
              ref={(r: any) => refs.setComponentRef(r, 'Divider_012361')}
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
                  formItemIndex: 24,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{ margin: '12px 0 12px 0', height: 'auto' }}
              ref={(r: any) => refs.setComponentRef(r, 'Divider_52307875')}
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
              formItemIndex={25}
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
                const eventDatacallSelfFunc424: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 169942549873178560,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '77851742',
                      pageJsonId: '8430824',
                      customFuncName: 'luYear',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc424.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc424, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_326617')}
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
                const eventDatacallSelfFunc425: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 169942550326998300,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '393115',
                      pageJsonId: '8430824',
                      customFuncName: 'luYear',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc425.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc425, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_279786')}
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
                const eventDatacallSelfFunc426: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 169934153991425950,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '554929',
                      pageJsonId: '8430824',
                      customFuncName: 'caluYear',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc426.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc426, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
                const eventDatacallSelfFunc427: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 169942550780675170,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '439117',
                      pageJsonId: '8430824',
                      customFuncName: 'luYear',
                    },
                    line_number: 2,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc427.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc427, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_6435406')}
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
              placeholder={'请输入'}
              fieldName={'infoIncomeYear'}
              value={data?.feeInfo?.infoIncomeYear}
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
                id: 'Input_137463',
                uid: 'Input_137463',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_137463')}
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
              placeholder={'请输入'}
              fieldName={'recoverNetCost'}
              value={data?.feeInfo?.recoverNetCost}
              formItemIndex={29}
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
              ref={(r: any) => refs.setComponentRef(r, 'Input_0484931')}
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
                id: 'Text_944658',
                uid: 'Text_944658',
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
                  formItemIndex: 30,
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
              ref={(r: any) => refs.setComponentRef(r, 'Text_944658')}
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
                  formItemIndex: 31,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{ margin: '12px 0 12px 0', height: 'auto' }}
              ref={(r: any) => refs.setComponentRef(r, 'Divider_052314')}
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
                  formItemIndex: 32,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{ margin: '12px 0 12px 0', height: 'auto' }}
              ref={(r: any) => refs.setComponentRef(r, 'Divider_9251086')}
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
                  formItemIndex: 33,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{ margin: '12px 0 12px 0', height: 'auto' }}
              ref={(r: any) => refs.setComponentRef(r, 'Divider_8195814')}
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
              formItemIndex={34}
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
              ref={(r: any) => refs.setComponentRef(r, 'Input_449151')}
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
                id: 'Input_609179',
                uid: 'Input_609179',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_609179')}
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
                id: 'Input_772106',
                uid: 'Input_772106',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_772106')}
              {...injectData}
            />
          </Form>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(NetworkAcrossProvincecopy2$$Modal, {
  pageId,
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
