// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  GridView,
  HorizontalView,
  Icon,
  Button,
  Form,
  Input,
  TimePicker,
  Select,
  TextArea,
} from '@/components/factory';

import BusiComp4158382 from '@/components/BusiComp4158382';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '899496798073884672';
const MarketProdFee$$Modal: React.FC<PageProps> = ({
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
  const calculV4Num = (options_8722644: any) => {
    const eventDatagetValue106: any = [
      {
        type: 'getValue',
        dataId: 166537135425869100,
        options: {
          compId: 'Input_ipv4GiveNum_383367',
          compLib: 'comm',
          pageJsonId: '8430824',
          compName: 'Input',
          id: '3901342',
        },
        line_number: 1,
        callback1: [
          {
            type: 'getValue',
            dataId: 166537137621704200,
            options: {
              compId: 'Input_ipv4DemandNum_1451523902',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Input',
              id: '339068',
            },
            line_number: 2,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '56996',
                    options: { context: '$value_339068$', operate: 'notEmpty' },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                  {
                    options: {
                      context: '$value_3901342$',
                      operate: 'notEmpty',
                    },
                    condId: '166062',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166537137895364160,
                elseIfs: [],
                line_number: 3,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 166537142696375580,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '326378',
                      pageJsonId: '8430824',
                      code: 'function main(data,state,success,fail){var exceed=value_339068-value_3901342;if(exceed<=0){exceed=0}success(exceed)};',
                      actionTitle: '计算超出个数',
                    },
                    line_number: 4,
                    callback1: [
                      {
                        type: 'setValue',
                        dataId: 166537152763438240,
                        options: {
                          compId: 'Input_ipv4BeyondNum_198033',
                          compLib: 'comm',
                          pageJsonId: '8430824',
                          compName: 'Input',
                          id: '9571777',
                          value: '$data_326378$',
                        },
                        line_number: 5,
                        callback1: [
                          {
                            type: 'customActionCode',
                            dataId: 166537167865809440,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '6125886',
                              pageJsonId: '8430824',
                              code: 'function main(data,state,success,fail){var price=data_326378*50;success(price)};',
                              actionTitle: '计算IPv4超出费用',
                            },
                            line_number: 6,
                            callback1: [
                              {
                                type: 'setValue',
                                dataId: 166537172789058720,
                                options: {
                                  compId: 'Input_ipv4BeyondCount_091324',
                                  compLib: 'comm',
                                  pageJsonId: '8430824',
                                  compName: 'Input',
                                  id: '467116',
                                  value: '$data_6125886$',
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
            ],
          },
        ],
      },
    ];
    eventDatagetValue106.params =
      [
        {
          title: '事件入参',
          name: 'options_8722644',
          value: '$options_8722644$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue106, { options_8722644 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };
  const calculV6Price = (options_302257: any) => {
    const eventDatagetSelectedData19: any = [
      {
        type: 'getSelectedData',
        dataId: 166538124975113020,
        options: {
          compId: 'Input_ipv6BeyondSel_1567996',
          compLib: 'comm',
          pageJsonId: '8430824',
          compName: 'Select',
          id: '640774',
        },
        line_number: 1,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 166538125668741800,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '524262',
              pageJsonId: '8430824',
              code: 'function main(data,state,success,fail){var price;var value=selectedData_640774[0].value;if(value==="64"){price=50}else if(value==="60"){price=800}else if(value==="56"){price=6400}success(price)};',
            },
            line_number: 2,
            callback1: [
              {
                type: 'setValue',
                dataId: 166538146415011620,
                options: {
                  compId: 'Input_ipv6BeyondCost_865764',
                  compLib: 'comm',
                  pageJsonId: '8430824',
                  compName: 'Input',
                  id: '709745',
                  value: '$data_524262$',
                },
                line_number: 3,
                callback1: [],
              },
              {
                type: 'console',
                dataId: 166538206931086560,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '2414',
                  pageJsonId: '8430824',
                  value: ['$data_524262$', '222'],
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
    eventDatagetSelectedData19.params =
      [
        {
          title: '事件入参',
          name: 'options_302257',
          value: '$options_302257$',
        },
      ] || [];
    CMDGenerator(
      eventDatagetSelectedData19,
      { options_302257 },
      'getSelectedData',
      {
        id: 'getSelectedData',
        name: 'getSelectedData',
        type: 'getSelectedData',
        platform: 'undefined',
      },
    );
    const eventDatagetValue107: any = [
      {
        type: 'getValue',
        dataId: 166538099256889920,
        shielding: true,
        options: {
          compId: 'Input_ipv6GiveNum_389494',
          compLib: 'comm',
          pageJsonId: '8430824',
          compName: 'Input',
          id: '0350302',
        },
        line_number: 5,
        callback1: [
          {
            type: 'getValue',
            dataId: 166538102174265630,
            shielding: true,
            options: {
              compId: 'Input_ipv6DemandNum_94541',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Input',
              id: '304901',
            },
            line_number: 6,
            callback1: [
              {
                type: 'getSelectedData',
                dataId: 166538103887917540,
                shielding: true,
                options: {
                  compId: 'Input_ipv6BeyondSel_1567996',
                  compLib: 'comm',
                  pageJsonId: '8430824',
                  compName: 'Select',
                  id: '41158216',
                },
                line_number: 7,
                callback1: [
                  {
                    type: 'ifelse',
                    shielding: true,
                    condition: [
                      {
                        condId: '799109',
                        options: {
                          context: '$value_304901$',
                          operate: 'notEmpty',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                      {
                        options: {
                          context: '$value_0350302$',
                          operate: 'notEmpty',
                        },
                        condId: '329755',
                        connector: '&&',
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                      {
                        options: {
                          context: '$selectedData_41158216[0].value$',
                          operate: 'notEmpty',
                        },
                        condId: '162866',
                        connector: '&&',
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 166538104252659900,
                    elseIfs: [],
                    line_number: 8,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 166538111689643300,
                        shielding: true,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '952458',
                          pageJsonId: '8430824',
                        },
                        line_number: 9,
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
        ],
      },
    ];
    eventDatagetValue107.params =
      [
        {
          title: '事件入参',
          name: 'options_302257',
          value: '$options_302257$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue107, { options_302257 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };
  const calculEndDiscount = (options_824845: any) => {
    const eventDatagetValue108: any = [
      {
        type: 'getValue',
        dataId: 166616143047742180,
        options: {
          compId: 'Input_receiptsMoney_65845',
          compLib: 'comm',
          pageJsonId: '8430824',
          compName: 'Input',
          id: '379898',
        },
        line_number: 1,
        callback1: [
          {
            type: 'ifelse',
            condition: [
              {
                condId: '4849993',
                options: { context: '$value_379898$', operate: 'notEmpty' },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
              {
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$data.prodList.length$',
                  operate: '>',
                  manualValue: '0',
                },
                condId: '760849',
                connector: '&&',
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 166616144542984060,
            elseIfs: [],
            line_number: 2,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 166616154034170530,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '575296',
                  pageJsonId: '8430824',
                  code: 'function main(data,state,success,fail){console.log("-----------------------------1111-------------------");var countDis=0;console.log(data.prodList);data.prodList.forEach(function(v){if(v.price!=undefined&&v.price!=null){countDis+=parseInt(v.price)}});console.log(countDis);var discount=0;if(countDis!=0){var price=value_379898*10/countDis;discount=price.toFixed(1)}console.log(discount);success(discount)};',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'setValue',
                    dataId: 166616216984732100,
                    options: {
                      compId: 'Input_lastDiscount_216509',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Input',
                      id: '097555',
                      value: '$data_575296$',
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
    eventDatagetValue108.params =
      [
        {
          title: '事件入参',
          name: 'options_824845',
          value: '$options_824845$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue108, { options_824845 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    calculV4Num,
    calculV6Price,
    calculEndDiscount,
  }));

  const onOk = () => {
    const eventDatavalidateForm: any = [
      {
        type: 'validateForm',
        dataId: 166617070853026400,
        options: {
          compId: 'BOFramer_6249292',
          compLib: '@/components',
          pageJsonId: '8430824',
          compName: 'BOFramer',
          id: '0565345',
        },
        line_number: 1,
        callback1: [
          {
            type: 'validateCurrentForm',
            dataId: 166617071691454200,
            options: {
              compId: 'Form_678195',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Form',
              id: '9453517',
            },
            line_number: 2,
            callback1: [
              {
                type: 'validateCurrentForm',
                dataId: 166617071691465300,
                options: {
                  compId: 'Form_7899824',
                  compLib: 'comm',
                  pageJsonId: '8430824',
                  compName: 'Form',
                  id: '370496',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 166617071691431680,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '970886697',
                      pageJsonId: '8430824',
                      code: 'function main(data,state,success,fail){var resObj={};resObj.marketObj=data.marketObj;resObj.prodList=data.prodList;resObj.groupObj=data.groupObj;if(data.pageParam.rowId!=undefined&&data.pageParam.rowId!=null){resObj.rowId=data.pageParam.rowId}else{var min=0;var max=10000;var rowId=Math.round(Math.random()*(max-min))+min;resObj.rowId=rowId}success(resObj)};',
                    },
                    line_number: 4,
                    callback1: [
                      {
                        type: 'okCallbackData',
                        dataId: 166617071691428930,
                        options: {
                          compId: 'okCallbackData',
                          compName: 'page',
                          id: '2482035',
                          pageJsonId: '8430824',
                          params: '$data_970886697$',
                        },
                        line_number: 5,
                      },
                      {
                        type: 'console',
                        dataId: 166779119427028100,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '145562',
                          pageJsonId: '8430824',
                          value: ['111111111'],
                        },
                        line_number: 6,
                      },
                      {
                        type: 'console',
                        dataId: 166779119955162880,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '800845',
                          pageJsonId: '8430824',
                          value: ['$data_970886697$'],
                        },
                        line_number: 7,
                      },
                      {
                        type: 'closeModal',
                        dataId: 166617071691418180,
                        options: {
                          compId: 'closeModal',
                          compName: 'page',
                          id: '5640822',
                          pageJsonId: '8430824',
                        },
                        line_number: 8,
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
    eventDatavalidateForm.params = [] || [];
    CMDGenerator(eventDatavalidateForm, {}, 'validateForm', {
      id: 'validateForm',
      name: 'validateForm',
      type: 'validateForm',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal115: any = [
      {
        type: 'closeModal',
        dataId: '3594441_1',
        options: { compId: 'page', compName: 'page', id: '7285676' },
        line_number: 1,
      },
    ];
    eventDatacloseModal115.params = [] || [];
    CMDGenerator(eventDatacloseModal115, {}, 'closeModal', {
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
    const eventDatasetDataSource23: any = [
      {
        type: 'setDataSource',
        dataId: 166607390936961470,
        options: {
          compId: 'setDataSource',
          compName: 'page',
          id: '602465',
          pageJsonId: '8430824',
          dataSourceId: 166607118396491400,
          dataSourceName: 'prodList',
          dataSourceRelType: 'custom',
          dataSourceReloadFilter: [],
          dataSourceSetValue: [
            {
              attrId: '0803738',
              code: 'package',
              name: '套餐',
              type: 'string',
              initialData: { type: 'static' },
            },
            {
              attrId: '1416388',
              code: 'prod',
              name: '产品选择',
              type: 'string',
              initialData: { type: 'static' },
            },
            {
              attrId: '821838',
              code: 'discount',
              name: '折扣',
              type: 'string',
              initialData: { type: 'static' },
            },
            {
              attrId: '5787402',
              code: 'price',
              name: '价格',
              type: 'string',
              initialData: { type: 'static' },
            },
            {
              attrId: '278491',
              code: 'id',
              name: '主键',
              type: 'string',
              initialData: { type: 'static' },
              value: { type: ['customize'], code: '$new Date().getTime()$' },
            },
            {
              attrId: '0007315',
              code: 'discountMoney',
              name: '属性',
              type: 'string',
              initialData: { type: 'static' },
              value: { type: ['customize'], code: '' },
            },
          ],
          operateType: 0,
          onlySetPatch: true,
          otherObjectArrayOptions: {},
        },
        line_number: 1,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatasetDataSource23.params = [] || [];
    CMDGenerator(eventDatasetDataSource23, {}, 'setDataSource', {
      id: 'setDataSource',
      name: 'setDataSource',
      type: 'setDataSource',
      platform: 'undefined',
    });
    const eventDataapiRequest639: any = [
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
                  value: { type: ['customize'], code: 'effectType' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '14766_body',
            },
          ],
        },
        line_number: 2,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166614429923373020,
            options: {
              compId: 'Input_effectType_582677',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '035774',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
              data: '$reply_14766?.resultData$',
            },
            line_number: 3,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest639.params = [] || [];
    CMDGenerator(eventDataapiRequest639, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest640: any = [
      {
        type: 'apiRequest',
        dataId: 166614798511725730,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '3710824',
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
              dataKey: '3710824_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '3710824_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '3710824_query',
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
                  dataKey: '3710824_body.catalogCode',
                  value: { type: ['context', '$state.catalogCode$'], code: '' },
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
                  dataKey: '3710824_body.attrCode',
                  value: { type: ['customize'], code: 'accountName' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '3710824_body',
            },
          ],
        },
        line_number: 4,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166614801459848160,
            options: {
              compId: 'Input_accountName_2958199',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '072135',
              data: '$reply_3710824?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 5,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest640.params = [] || [];
    CMDGenerator(eventDataapiRequest640, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse330: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '803424',
            options: { context: '$state.returnPop$', operate: 'notEmpty' },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 166617138959249000,
        elseIfs: [],
        line_number: 6,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 166617159180328960,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '6559183',
              pageJsonId: '8430824',
              actionTitle: '',
              code: 'function main(data,state,success,fail){data.marketObj=state.returnPop.marketObj;data.prodList=state.returnPop.prodList;data.groupObj=state.returnPop.groupObj;data.pageParam.rowId=state.returnPop.rowId;console.log("rowId========"+state.returnPop.rowId);success(state.returnPop.prodList)};',
            },
            line_number: 7,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 166617169208428830,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '85137908',
                  pageJsonId: '8430824',
                  dataSourceId: 166607118396491400,
                  dataSourceName: 'prodList',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '0803738',
                      code: 'package',
                      name: '套餐',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '1416388',
                      code: 'prod',
                      name: '产品选择',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '821838',
                      code: 'discount',
                      name: '折扣',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '5787402',
                      code: 'price',
                      name: '价格',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '278491',
                      code: 'id',
                      name: '主键',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '0007315',
                      code: 'discountMoney',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                  ],
                  operateType: 3,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  newData: '$data_6559183$',
                },
                line_number: 8,
                callback1: [],
                callback2: [],
              },
              {
                type: 'setDataSource',
                dataId: 166617170514634240,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '6011656',
                  pageJsonId: '8430824',
                  dataSourceId: 166608683889014430,
                  dataSourceName: 'groupObj',
                  dataSourceRelType: 'object',
                  dataSourceReloadFilter: [
                    {
                      attrId: '965692',
                      code: 'primaryValue',
                      name: '主键值',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                    },
                  ],
                  dataSourceSetValue: [
                    {
                      attrId: '5574983',
                      code: 'groupId',
                      name: '集团编码',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      value: {
                        type: ['customize'],
                        code: '$state.returnPop.groupObj.groupId$',
                      },
                    },
                    {
                      attrId: '975636',
                      code: 'groupName',
                      name: '集团名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      value: {
                        type: ['customize'],
                        code: '$state.returnPop.groupObj.groupName$',
                      },
                    },
                    {
                      attrId: '02459',
                      code: 'valueLevel',
                      name: '集团价值等级',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      value: {
                        type: ['customize'],
                        code: '$state.returnPop.groupObj.valueLevel$',
                      },
                    },
                    {
                      attrId: '426942',
                      code: 'orgType',
                      name: '机构类型',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      value: {
                        type: ['customize'],
                        code: '$state.returnPop.groupObj.orgType$',
                      },
                    },
                    {
                      attrId: '6359542',
                      code: 'managerName',
                      name: '客户经理姓名',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      value: {
                        type: ['customize'],
                        code: '$state.returnPop.groupObj.managerName$',
                      },
                    },
                    {
                      attrId: '524991',
                      code: 'managerContactTel',
                      name: '客户经理电话',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      value: {
                        type: ['customize'],
                        code: '$state.returnPop.groupObj.managerContactTel$',
                      },
                    },
                    {
                      attrId: '6745014',
                      code: 'homeCity',
                      name: '归属地市',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      value: {
                        type: ['customize'],
                        code: '$state.returnPop.groupObj.homeCity$',
                      },
                    },
                    {
                      attrId: '452194',
                      code: 'homeCounty',
                      name: '归属县市',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      value: {
                        type: ['customize'],
                        code: '$state.returnPop.groupObj.homeCounty$',
                      },
                    },
                    {
                      attrId: '167422',
                      code: 'tradeclassTop',
                      name: '行业类型(大类)',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      value: {
                        type: ['customize'],
                        code: '$state.returnPop.groupObj.tradeclassTop$',
                      },
                    },
                    {
                      attrId: '574926',
                      code: 'channelAgentName',
                      name: '代理商',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      value: {
                        type: ['customize'],
                        code: '$state.returnPop.groupObj.channelAgentName$',
                      },
                    },
                    {
                      attrId: '335588',
                      code: 'accountName',
                      name: '集团账户名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      value: {
                        type: ['customize'],
                        code: '$state.returnPop.groupObj.accountName$',
                      },
                    },
                    {
                      attrId: '8219294',
                      code: 'accountId',
                      name: '集团账户ID',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      value: {
                        type: ['customize'],
                        code: '$state.returnPop.groupObj.accountId$',
                      },
                    },
                    {
                      attrId: '3654504',
                      code: 'income',
                      name: '收入',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      value: {
                        type: ['customize'],
                        code: '$state.returnPop.groupObj.income$',
                      },
                    },
                    {
                      attrId: '208835',
                      code: 'valueLevelName',
                      name: '集团价值等级名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      value: {
                        type: ['customize'],
                        code: '$state.returnPop.groupObj.valueLevelName$',
                      },
                    },
                    {
                      attrId: '170446',
                      code: 'orgTypeName',
                      name: '机构类型名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      value: {
                        type: ['customize'],
                        code: '$state.returnPop.groupObj.orgTypeName$',
                      },
                    },
                    {
                      attrId: '065448',
                      code: 'homeCityName',
                      name: '归属地市名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      value: {
                        type: ['customize'],
                        code: '$state.returnPop.groupObj.homeCityName$',
                      },
                    },
                    {
                      attrId: '440609',
                      code: 'homeCountyName',
                      name: '归属区县名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      value: {
                        type: ['customize'],
                        code: '$state.returnPop.groupObj.homeCountyName$',
                      },
                    },
                    {
                      attrId: '808276',
                      code: 'tradeclassTopName',
                      name: '行业大类名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      value: {
                        type: ['customize'],
                        code: '$state.returnPop.groupObj.tradeclassTopName$',
                      },
                    },
                    {
                      attrId: '479374',
                      code: 'orgZone',
                      name: '归属区域',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      value: {
                        type: ['customize'],
                        code: '$state.returnPop.groupObj.orgZone$',
                      },
                    },
                    {
                      attrId: '7043895',
                      code: 'orgZoneName',
                      name: '归属区域名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      value: {
                        type: ['customize'],
                        code: '$state.returnPop.groupObj.orgZoneName$',
                      },
                    },
                    {
                      attrId: '404058',
                      code: 'managerId',
                      name: '客户经理工号',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '4554025',
                      code: 'enterpriseKind',
                      name: '企业类型',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '676972',
                      code: 'enterpriseKindName',
                      name: '企业类型名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '592549',
                      code: 'contactTel',
                      name: '联系人',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '194041',
                      code: 'enterpriseScope',
                      name: '企业类型',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '981678',
                      code: 'enterpriseScopeName',
                      name: '企业类型名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 9,
                callback1: [],
                callback2: [],
              },
              {
                type: 'setDataSource',
                dataId: 166623011606570700,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '561299',
                  pageJsonId: '8430824',
                  dataSourceId: 166452752557535940,
                  dataSourceName: 'marketObj',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '969052',
                      code: 'code',
                      name: '营销案档次编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['customize'],
                        code: '$state.returnPop.marketObj.code$',
                      },
                    },
                    {
                      attrId: '395448',
                      code: 'name',
                      name: '营销案名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['customize'],
                        code: '$state.returnPop.marketObj.name$',
                      },
                    },
                    {
                      attrId: '7610088',
                      code: 'area',
                      name: '归属区域',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['customize'],
                        code: '$state.returnPop.marketObj.area$',
                      },
                    },
                    {
                      attrId: '302396',
                      code: 'marketStartTime',
                      name: '营销案生效时间',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['customize'],
                        code: '$state.returnPop.marketObj.marketStartTime$',
                      },
                    },
                    {
                      attrId: '196276',
                      code: 'marketEndTime',
                      name: '营销案失效时间',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['customize'],
                        code: '$state.returnPop.marketObj.marketEndTime$',
                      },
                    },
                    {
                      attrId: '099846',
                      code: 'preMoney',
                      name: '预存金额',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['customize'],
                        code: '$state.returnPop.marketObj.preMoney$',
                      },
                    },
                    {
                      attrId: '411439',
                      code: 'guarMoney',
                      name: '保底金额',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['customize'],
                        code: '$state.returnPop.marketObj.guarMoney$',
                      },
                    },
                    {
                      attrId: '252455',
                      code: 'guarantee',
                      name: '优惠金额',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['customize'],
                        code: '$state.returnPop.marketObj.guarantee$',
                      },
                    },
                    {
                      attrId: '125048',
                      code: 'acceptMul',
                      name: '受理倍数',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['customize'],
                        code: '$state.returnPop.marketObj.acceptMul$',
                      },
                    },
                    {
                      attrId: '9599447',
                      code: 'effectType',
                      name: '生效类型',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['customize'],
                        code: '$state.returnPop.marketObj.effectType$',
                      },
                    },
                    {
                      attrId: '445363',
                      code: 'receiptsMoney',
                      name: '二次优惠总实收金额',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['customize'],
                        code: '$state.returnPop.marketObj.receiptsMoney$',
                      },
                    },
                    {
                      attrId: '758489',
                      code: 'lastDiscount',
                      name: '最终折扣',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['customize'],
                        code: '$state.returnPop.marketObj.lastDiscount$',
                      },
                    },
                    {
                      attrId: '709148',
                      code: 'desc',
                      name: '营销案描述',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['customize'],
                        code: '$state.returnPop.marketObj.desc$',
                      },
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 10,
                callback1: [],
                callback2: [],
              },
            ],
            callback2: [],
          },
          {
            type: 'ifelse',
            condition: [
              {
                condId: '463747',
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
            dataId: 166623430186321470,
            elseIfs: [],
            line_number: 11,
            callback1: [
              {
                type: 'sysSetVisible',
                dataId: 166623434301401020,
                options: {
                  compId: ['Icon_303872', 'View_977173'],
                  compName: 'page',
                  id: '878324',
                  pageJsonId: '8430824',
                  compid: ['Icon_303872', 'View_977173'],
                },
                line_number: 12,
              },
              {
                type: 'setDisable',
                dataId: 166623440052341000,
                options: {
                  compId: 'Form_678195',
                  compLib: 'comm',
                  pageJsonId: '8430824',
                  compName: 'Form',
                  id: '289255',
                  disabled: 'true',
                },
                line_number: 13,
              },
              {
                type: 'setDisable',
                dataId: 166623441202982270,
                options: {
                  compId: 'Form_7899824',
                  compLib: 'comm',
                  pageJsonId: '8430824',
                  compName: 'Form',
                  id: '0158154',
                  disabled: 'true',
                },
                line_number: 14,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse330.params = [] || [];
    CMDGenerator(eventDataifelse330, {}, 'ifelse', {
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
      className="__CustomClass_8430824__"
    >
      <View
        name={'页面'}
        visible={true}
        className={'fixed-form-item-label-width-150'}
        $$componentItem={{
          id: 'View_8430824_1',
          uid: 'View_8430824_1',
          type: 'View',
          ...componentItem,
        }}
        style={{
          minHeight: '100%',
          display: 'block',
          padding: 'px px px px',
          overflowY: 'auto',
          width: 'auto',
          overflow: 'hidden',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_8430824_1')}
        {...injectData}
      >
        <GridView
          name={'产品列表(prodList)'}
          itemKey={'item'}
          indexKey={'i'}
          pieceData={[]}
          defaultValue={[]}
          isChecked={false}
          isMultiple={false}
          columnNum={1}
          valueKey={'id'}
          span={24}
          vspace={16}
          hspace={16}
          isEditor={true}
          fieldName={'data.prodList'}
          gridData={data?.prodList}
          $$componentItem={{
            id: 'GridView_933784',
            uid: 'GridView_933784',
            type: 'GridView',
            ...componentItem,
          }}
          style={{ minHeight: 40 }}
          ref={(r: any) => refs.setComponentRef(r, 'GridView_933784')}
          {...injectData}
          getEngineApis={() => {
            return {
              ...injectData.getEngineApis(),
              MemoRenderer: {
                renderer: null,
                MemoLoopItem: (props: any) => {
                  const item = props[props.itemKey] ?? props?.item;
                  const i = props[props.indexKey] ?? props?.i;
                  return (
                    <>
                      <HorizontalView
                        name={'左右布局'}
                        visible={true}
                        $$componentItem={{
                          id: 'HorizontalView_784462',
                          uid: 'HorizontalView_784462',
                          type: 'HorizontalView',
                          ...componentItem,
                        }}
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          padding: '0px 0px 0px 0px',
                          width: '100%',
                          height: '100%',
                          overflowY: 'auto',
                          margin: 'px px px px',
                        }}
                        ref={(r: any) =>
                          refs.setComponentRef(r, 'HorizontalView_784462')
                        }
                        {...injectData}
                      >
                        <View
                          className="View_View_325572"
                          name={'布局容器'}
                          visible={true}
                          $$componentItem={{
                            id: 'View_325572',
                            uid: 'View_325572',
                            type: 'View',
                            ...componentItem,
                          }}
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '0px 0px 0px 0px',
                            width: '95%',
                            height: '100%',
                            overflowY: 'auto',
                          }}
                          ref={(r: any) =>
                            refs.setComponentRef(r, 'View_325572')
                          }
                          {...injectData}
                        >
                          <BusiComp4158382
                            pageId={pageId}
                            busiCompId={'887945485951266816'}
                            name={'动态添加表单'}
                            busiCompStates={{
                              item: item,
                              catalogCode: state?.catalogCode,
                              sceneCode: state?.sceneCode,
                            }}
                            style={{ margin: '0px 0px 0px 0px' }}
                            onValuesChange={(
                              changedValues: any,
                              allValues: any,
                            ) => {
                              const eventDatagetBlockSelectValues2: any = [
                                {
                                  type: 'getBlockSelectValues',
                                  dataId: 166607173130072580,
                                  options: {
                                    compId: 'GridView_933784',
                                    compLib: 'comm',
                                    pageJsonId: '8430824',
                                    compName: 'GridView',
                                    id: '8217364',
                                  },
                                  line_number: 1,
                                  callback1: [
                                    {
                                      type: 'customActionCode',
                                      dataId: 166607175235766720,
                                      options: {
                                        compId: 'customActionCode',
                                        compName: 'page',
                                        id: '5478498',
                                        pageJsonId: '8430824',
                                        code: 'function main(data,state,success,fail){var list=data.prodList;var resultObj={"value":null,"index":null};if(allValues.price!=undefined&&allValues.discount!=undefined){var price=parseInt(allValues.price)*(parseInt(allValues.discount)*0.1);allValues.discountMoney=price.toFixed()}list.map(function(v,index){if(v.id==vals_8217364){resultObj.index=index;resultObj.value=allValues;return allValues}});success(resultObj)};',
                                      },
                                      line_number: 2,
                                      callback1: [
                                        {
                                          type: 'setDataSource',
                                          dataId: 166607184981590400,
                                          options: {
                                            compId: 'setDataSource',
                                            compName: 'page',
                                            id: '640237',
                                            pageJsonId: '8430824',
                                            dataSourceId: 166607118396491400,
                                            dataSourceName: 'prodList',
                                            dataSourceRelType: 'custom',
                                            dataSourceReloadFilter: [],
                                            dataSourceSetValue: [
                                              {
                                                attrId: '0803738',
                                                code: 'package',
                                                name: '套餐',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                                value: {
                                                  type: ['customize'],
                                                  code: '$data_5478498.value.package$',
                                                },
                                              },
                                              {
                                                attrId: '1416388',
                                                code: 'prod',
                                                name: '产品选择',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                                value: {
                                                  type: ['customize'],
                                                  code: '$data_5478498.value.prod$',
                                                },
                                              },
                                              {
                                                attrId: '821838',
                                                code: 'discount',
                                                name: '折扣',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                                value: {
                                                  type: ['customize'],
                                                  code: '$data_5478498.value.discount$',
                                                },
                                              },
                                              {
                                                attrId: '5787402',
                                                code: 'price',
                                                name: '价格',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                                value: {
                                                  type: ['customize'],
                                                  code: '$data_5478498.value.price$',
                                                },
                                              },
                                              {
                                                attrId: '278491',
                                                code: 'id',
                                                name: '主键',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                                value: {
                                                  type: ['customize'],
                                                  code: '$data_5478498.value.id$',
                                                },
                                              },
                                              {
                                                attrId: '0007315',
                                                code: 'discountMoney',
                                                name: '属性',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                                value: {
                                                  type: ['customize'],
                                                  code: '$data_5478498.value.discountMoney$',
                                                },
                                              },
                                            ],
                                            itemIndex: '$data_5478498.index$',
                                            operateType: 1,
                                            onlySetPatch: true,
                                            otherObjectArrayOptions: {},
                                          },
                                          line_number: 3,
                                          callback1: [],
                                          callback2: [],
                                        },
                                      ],
                                      callback2: [],
                                    },
                                  ],
                                },
                              ];
                              eventDatagetBlockSelectValues2.params =
                                [
                                  {
                                    title: '表单变化值',
                                    name: 'changedValues',
                                    value: '$changedValues$',
                                  },
                                  {
                                    title: '表单所有值',
                                    name: 'allValues',
                                    value: '$allValues$',
                                  },
                                ] || [];
                              CMDGenerator(
                                eventDatagetBlockSelectValues2,
                                { changedValues, allValues, item, i },
                                'getBlockSelectValues',
                                {
                                  id: 'getBlockSelectValues',
                                  name: 'getBlockSelectValues',
                                  type: 'getBlockSelectValues',
                                  platform: 'pc',
                                },
                              );
                              const eventDatacallSelfFunc840: any = [
                                {
                                  type: 'callSelfFunc',
                                  dataId: 166616199671842240,
                                  options: {
                                    compId: 'callSelfFunc',
                                    compName: 'system',
                                    id: '672365',
                                    pageJsonId: '8430824',
                                    customFuncName: 'calculEndDiscount',
                                  },
                                  line_number: 4,
                                  callback1: [],
                                  callback2: [],
                                },
                              ];
                              eventDatacallSelfFunc840.params =
                                [
                                  {
                                    title: '表单变化值',
                                    name: 'changedValues',
                                    value: '$changedValues$',
                                  },
                                  {
                                    title: '表单所有值',
                                    name: 'allValues',
                                    value: '$allValues$',
                                  },
                                ] || [];
                              CMDGenerator(
                                eventDatacallSelfFunc840,
                                { changedValues, allValues, item, i },
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
                              refs.setComponentRef(r, 'BOFramer_6249292')
                            }
                            {...injectData}
                          />
                        </View>
                        <View
                          className="View_View_095062"
                          name={'布局容器'}
                          visible={true}
                          $$componentItem={{
                            id: 'View_095062',
                            uid: 'View_095062',
                            type: 'View',
                            ...componentItem,
                          }}
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '0px 0px 0px 0px',
                            width: '5%',
                            height: '100%',
                            overflowY: 'auto',
                          }}
                          ref={(r: any) =>
                            refs.setComponentRef(r, 'View_095062')
                          }
                          {...injectData}
                        >
                          <Icon
                            name={'图标'}
                            rotate={0}
                            visible={true}
                            icon={{
                              theme: 'outlined',
                              type: 'minus',
                              isIconFont: false,
                            }}
                            $$componentItem={{
                              id: 'Icon_303872',
                              uid: 'Icon_303872',
                              type: 'Icon',
                              ...componentItem,
                            }}
                            onClick={(e: any) => {
                              const eventDatagetBlockSelectValues3: any = [
                                {
                                  type: 'getBlockSelectValues',
                                  dataId: 166607196287724380,
                                  options: {
                                    compId: 'GridView_933784',
                                    compLib: 'comm',
                                    pageJsonId: '8430824',
                                    compName: 'GridView',
                                    id: '295255',
                                  },
                                  line_number: 1,
                                  callback1: [
                                    {
                                      type: 'customActionCode',
                                      dataId: 166607197159649860,
                                      options: {
                                        compId: 'customActionCode',
                                        compName: 'page',
                                        id: '047573',
                                        pageJsonId: '8430824',
                                        actionTitle: '',
                                        code: 'function main(data,state,success,fail){var resultObj={"index":null};data.prodList.map(function(v,index){if(v.id==vals_295255){resultObj.index=index}});success(resultObj)};',
                                      },
                                      line_number: 2,
                                      callback1: [
                                        {
                                          type: 'setDataSource',
                                          dataId: 166607200508454880,
                                          options: {
                                            compId: 'setDataSource',
                                            compName: 'page',
                                            id: '660026',
                                            pageJsonId: '8430824',
                                            dataSourceId: 166607118396491400,
                                            dataSourceName: 'prodList',
                                            dataSourceRelType: 'custom',
                                            dataSourceReloadFilter: [],
                                            dataSourceSetValue: [
                                              {
                                                attrId: '0803738',
                                                code: 'package',
                                                name: '套餐',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '1416388',
                                                code: 'prod',
                                                name: '产品选择',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '821838',
                                                code: 'discount',
                                                name: '折扣',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '5787402',
                                                code: 'price',
                                                name: '价格',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '278491',
                                                code: 'id',
                                                name: '主键',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                              },
                                            ],
                                            itemIndex: '$data_047573.index$',
                                            operateType: 2,
                                            onlySetPatch: true,
                                            otherObjectArrayOptions: {},
                                          },
                                          line_number: 3,
                                          callback1: [],
                                          callback2: [],
                                        },
                                      ],
                                      callback2: [],
                                    },
                                  ],
                                },
                              ];
                              eventDatagetBlockSelectValues3.params =
                                [
                                  {
                                    title: '事件对象',
                                    value: '$e$',
                                    name: 'e',
                                  },
                                ] || [];
                              CMDGenerator(
                                eventDatagetBlockSelectValues3,
                                { e, item, i },
                                'getBlockSelectValues',
                                {
                                  id: 'getBlockSelectValues',
                                  name: 'getBlockSelectValues',
                                  type: 'getBlockSelectValues',
                                  platform: 'pc',
                                },
                              );
                            }}
                            ref={(r: any) =>
                              refs.setComponentRef(r, 'Icon_303872')
                            }
                            {...injectData}
                          />
                        </View>
                      </HorizontalView>
                    </>
                  );
                },
              },
            };
          }}
        />
        <View
          className="View_View_977173"
          name={'布局容器'}
          visible={true}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_977173',
            uid: 'View_977173',
            type: 'View',
            ...componentItem,
          }}
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '0px 18px 0px 0px',
            width: '100%',
            textAlign: 'right',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_977173')}
          {...injectData}
        >
          <Icon
            name={'图标'}
            rotate={0}
            visible={true}
            icon={{ theme: 'outlined', type: 'plus', isIconFont: false }}
            $$componentItem={{
              id: 'Icon_2263201',
              uid: 'Icon_2263201',
              type: 'Icon',
              ...componentItem,
            }}
            onClick={(e: any) => {
              const eventDatasetDataSource305: any = [
                {
                  type: 'setDataSource',
                  dataId: 166607204068042400,
                  options: {
                    compId: 'setDataSource',
                    compName: 'page',
                    id: '3147353',
                    pageJsonId: '8430824',
                    dataSourceId: 166607118396491400,
                    dataSourceName: 'prodList',
                    dataSourceRelType: 'custom',
                    dataSourceReloadFilter: [],
                    dataSourceSetValue: [
                      {
                        attrId: '0803738',
                        code: 'package',
                        name: '套餐',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '1416388',
                        code: 'prod',
                        name: '产品选择',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '821838',
                        code: 'discount',
                        name: '折扣',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '5787402',
                        code: 'price',
                        name: '价格',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '278491',
                        code: 'id',
                        name: '主键',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['customize'],
                          code: '$new Date().getTime()$',
                        },
                      },
                    ],
                    operateType: 0,
                    onlySetPatch: true,
                    otherObjectArrayOptions: {},
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatasetDataSource305.params =
                [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
              CMDGenerator(eventDatasetDataSource305, { e }, 'setDataSource', {
                id: 'setDataSource',
                name: 'setDataSource',
                type: 'setDataSource',
                platform: 'pc',
              });
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Icon_2263201')}
            {...injectData}
          />
        </View>
        <View
          className="View_View_6145193"
          name={'布局容器'}
          visible={true}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_6145193',
            uid: 'View_6145193',
            type: 'View',
            ...componentItem,
          }}
          disabled={false}
          readOnly={false}
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
            textAlign: 'right',
            margin: '0px 10px 0px 0px',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_6145193')}
          {...injectData}
        >
          <Button
            name={'添加营销案'}
            shape={null}
            classification={'default'}
            autoProcessFlow={false}
            flowProcessResult={'common'}
            iconPosition={'left'}
            ghost={false}
            block={false}
            size={'default'}
            disabled={false}
            visible={true}
            type={'primary'}
            hasIcon={false}
            $$componentItem={{
              id: 'Button_3488654',
              uid: 'Button_3488654',
              type: 'Button',
              ...componentItem,
            }}
            readOnly={false}
            style={{ width: 'fit-content' }}
            onClick={(e: any) => {
              const eventDatashowCustomModal304: any = [
                {
                  type: 'showCustomModal',
                  dataId: 166798672824951100,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '11433097',
                    pageJsonId: '8430824',
                    modalname: '/marketSel',
                    pageId: '899632499889246208',
                    paramsObj: { multiple: '1' },
                    paramsObjKeyValueMap: { multiple: '1' },
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'setDataSource',
                      dataId: 166798674612196160,
                      options: {
                        compId: 'setDataSource',
                        compName: 'page',
                        id: '440567',
                        pageJsonId: '8430824',
                        dataSourceId: 166452752557535940,
                        dataSourceName: 'marketObj',
                        dataSourceRelType: 'custom',
                        dataSourceReloadFilter: [],
                        dataSourceSetValue: [
                          {
                            attrId: '969052',
                            code: 'code',
                            name: '营销案档次编码',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: {
                              type: ['customize'],
                              code: '$okData_11433097[0].dealId$',
                            },
                          },
                          {
                            attrId: '395448',
                            code: 'name',
                            name: '营销案名称',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: {
                              type: ['customize'],
                              code: '$okData_11433097[0].saleName$',
                            },
                          },
                          {
                            attrId: '7610088',
                            code: 'area',
                            name: '归属区域',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: {
                              type: ['customize'],
                              code: '$okData_11433097[0].area$',
                            },
                          },
                          {
                            attrId: '302396',
                            code: 'marketStartTime',
                            name: '营销案生效时间',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: {
                              type: ['customize'],
                              code: '$okData_11433097[0].inureTime$',
                            },
                          },
                          {
                            attrId: '196276',
                            code: 'marketEndTime',
                            name: '营销案失效时间',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: {
                              type: ['customize'],
                              code: '$okData_11433097[0].expireTime$',
                            },
                          },
                          {
                            attrId: '099846',
                            code: 'preMoney',
                            name: '预存金额',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: { type: [], code: 'preMoney' },
                          },
                          {
                            attrId: '411439',
                            code: 'guarMoney',
                            name: '保底金额',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: {
                              type: ['customize'],
                              code: '$okData_11433097[0].assumeAmount$',
                            },
                          },
                          {
                            attrId: '252455',
                            code: 'guarantee',
                            name: '优惠金额',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: { type: [], code: 'guarantee' },
                          },
                          {
                            attrId: '125048',
                            code: 'acceptMul',
                            name: '受理倍数',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: { type: [], code: 'acceptMul' },
                          },
                          {
                            attrId: '9599447',
                            code: 'effectType',
                            name: '生效类型',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: {
                              type: ['customize'],
                              code: '$okData_11433097[0].inureType$',
                            },
                          },
                          {
                            attrId: '445363',
                            code: 'receiptsMoney',
                            name: '二次优惠总实收金额',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: { type: [], code: 'receiptsMoney' },
                          },
                          {
                            attrId: '758489',
                            code: 'lastDiscount',
                            name: '最终折扣',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: { type: [], code: 'lastDiscount' },
                          },
                          {
                            attrId: '709148',
                            code: 'desc',
                            name: '营销案描述',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: {
                              type: ['customize'],
                              code: '$okData_11433097[0].saleDesc$',
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
                      type: 'reloadSelectData',
                      dataId: 166841427350200160,
                      options: {
                        compId: 'Input_preMoney_937179',
                        compLib: 'comm',
                        pageJsonId: '8430824',
                        compName: 'Select',
                        id: '414048',
                        data: '$okData_11433097[0].prestoreInfo$',
                        labelKey: 'prestoreAmount',
                        valueKey: 'prestoreAmount',
                      },
                      line_number: 3,
                      callback1: [],
                    },
                  ],
                  callback2: [],
                },
              ];
              eventDatashowCustomModal304.params =
                [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
              CMDGenerator(
                eventDatashowCustomModal304,
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
            ref={(r: any) => refs.setComponentRef(r, 'Button_3488654')}
            {...injectData}
          />
        </View>
        <View
          className="View_View_917911"
          name={'布局容器'}
          visible={true}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_917911',
            uid: 'View_917911',
            type: 'View',
            ...componentItem,
          }}
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
            name={'营销案'}
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
            formCode={'Form_678195'}
            formItemIndex={0}
            genRuleType={'key'}
            formType={'normal'}
            relationDataSource={data?.marketObj}
            busiObjectId={''}
            $$componentItem={{
              id: 'Form_678195',
              uid: 'Form_678195',
              type: 'Form',
              ...componentItem,
            }}
            style={{ padding: '0px 0px 0px 0px', margin: '10px 0px 0px 0px' }}
            onValuesChange={() => {
              const eventDatasetDataSource306: any = [
                {
                  type: 'setDataSource',
                  dataId: 166608491031538940,
                  options: {
                    compId: 'page',
                    compName: 'page',
                    id: '643519',
                    pageJsonId: '8430824',
                    dataSourceId: 166452752557535940,
                    dataSourceName: 'marketObj',
                    dataSourceRelType: 'custom',
                    dataSourceReloadFilter: [],
                    dataSourceSetValue: [
                      {
                        attrId: '969052',
                        code: 'code',
                        name: '营销案档次编码',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: { type: [], code: 'code' },
                      },
                      {
                        attrId: '395448',
                        code: 'name',
                        name: '营销案名称',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: { type: [], code: 'name' },
                      },
                      {
                        attrId: '7610088',
                        code: 'area',
                        name: '归属区域',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_678195', 'getFieldsValue'],
                          code: 'area',
                        },
                      },
                      {
                        attrId: '302396',
                        code: 'marketStartTime',
                        name: '营销案生效时间',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_678195', 'getFieldsValue'],
                          code: 'marketStartTime',
                        },
                      },
                      {
                        attrId: '196276',
                        code: 'marketEndTime',
                        name: '营销案失效时间',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_678195', 'getFieldsValue'],
                          code: 'marketEndTime',
                        },
                      },
                      {
                        attrId: '099846',
                        code: 'preMoney',
                        name: '预存金额',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_678195', 'getFieldsValue'],
                          code: 'preMoney',
                        },
                      },
                      {
                        attrId: '411439',
                        code: 'guarMoney',
                        name: '保底金额',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_678195', 'getFieldsValue'],
                          code: 'guarMoney',
                        },
                      },
                      {
                        attrId: '252455',
                        code: 'guarantee',
                        name: '优惠金额',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_678195', 'getFieldsValue'],
                          code: 'guarantee',
                        },
                      },
                      {
                        attrId: '125048',
                        code: 'acceptMul',
                        name: '受理倍数',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_678195', 'getFieldsValue'],
                          code: 'acceptMul',
                        },
                      },
                      {
                        attrId: '9599447',
                        code: 'effectType',
                        name: '生效类型',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_678195', 'getFieldsValue'],
                          code: 'effectType',
                        },
                      },
                      {
                        attrId: '445363',
                        code: 'receiptsMoney',
                        name: '二次优惠总实收金额',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_678195', 'getFieldsValue'],
                          code: 'receiptsMoney',
                        },
                      },
                      {
                        attrId: '758489',
                        code: 'lastDiscount',
                        name: '最终折扣',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_678195', 'getFieldsValue'],
                          code: 'lastDiscount',
                        },
                      },
                      {
                        attrId: '709148',
                        code: 'desc',
                        name: '营销案描述',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: { type: [], code: 'desc' },
                      },
                    ],
                    onlySetPatch: true,
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatasetDataSource306.params = [] || [];
              CMDGenerator(eventDatasetDataSource306, {}, 'setDataSource', {
                id: 'setDataSource',
                name: 'setDataSource',
                type: 'setDataSource',
                platform: 'pc',
              });
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_678195')}
            {...injectData}
          >
            <Input
              name={'营销案档次编码'}
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
              fieldName={'marketCode'}
              value={data?.marketObj?.code}
              formItemIndex={0}
              icon={{
                type: '',
                theme: '',
                fontAddress: '',
                isIconFont: false,
                iconFileInfo: {},
              }}
              tipIcon={{
                theme: 'outlined',
                type: 'question-circle',
                isIconFont: false,
              }}
              postfixStyle={'2'}
              disabled={true}
              visible={true}
              readOnly={false}
              prefixIcon={{
                type: undefined,
                theme: 'outlined',
                fontAddress: '',
                isIconFont: false,
                iconFileInfo: {},
              }}
              $$componentItem={{
                id: 'Input_marketCode_332199',
                uid: 'Input_marketCode_332199',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              onIconClick={() => {
                const eventDatagetValue265: any = [
                  {
                    type: 'getValue',
                    dataId: 166609431834291740,
                    options: {
                      compId: 'Input_marketCode_332199',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Input',
                      id: '040854',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'showCustomModal',
                        dataId: 166609552133535400,
                        options: {
                          compId: 'showCustomModal',
                          compName: 'page',
                          id: '715808',
                          pageJsonId: '8430824',
                          modalname: '/marketSel',
                          pageId: '899632499889246208',
                          paramsObj: { marketCode: '$value_040854$' },
                          paramsObjKeyValueMap: {
                            marketCode: '$value_040854$',
                          },
                        },
                        line_number: 2,
                        callback1: [
                          {
                            type: 'customActionCode',
                            dataId: 166609559826426600,
                            shielding: true,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '7166859',
                              pageJsonId: '8430824',
                              code: 'function main(data,state,success,fail){data.marketObj=okData_715808;success()};',
                              actionTitle: '',
                            },
                            line_number: 3,
                            callback1: [
                              {
                                type: 'setDataSource',
                                dataId: 166609564839870800,
                                shielding: true,
                                options: {
                                  compId: 'setDataSource',
                                  compName: 'page',
                                  id: '040191',
                                  pageJsonId: '8430824',
                                  dataSourceId: 166452752557535940,
                                  dataSourceName: 'marketObj',
                                  dataSourceRelType: 'custom',
                                  dataSourceReloadFilter: [],
                                  dataSourceSetValue: [
                                    {
                                      attrId: '969052',
                                      code: 'code',
                                      name: '营销案档次编码',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                    },
                                    {
                                      attrId: '395448',
                                      code: 'name',
                                      name: '营销案名称',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                    },
                                    {
                                      attrId: '7610088',
                                      code: 'area',
                                      name: '归属区域',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                    },
                                    {
                                      attrId: '302396',
                                      code: 'marketStartTime',
                                      name: '营销案生效时间',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                    },
                                    {
                                      attrId: '196276',
                                      code: 'marketEndTime',
                                      name: '营销案失效时间',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                    },
                                    {
                                      attrId: '099846',
                                      code: 'preMoney',
                                      name: '预存金额',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                    },
                                    {
                                      attrId: '411439',
                                      code: 'guarMoney',
                                      name: '保底金额',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                    },
                                    {
                                      attrId: '252455',
                                      code: 'guarantee',
                                      name: '优惠金额',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                    },
                                    {
                                      attrId: '125048',
                                      code: 'acceptMul',
                                      name: '受理倍数',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                    },
                                    {
                                      attrId: '9599447',
                                      code: 'effectType',
                                      name: '生效类型',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                    },
                                    {
                                      attrId: '445363',
                                      code: 'receiptsMoney',
                                      name: '二次优惠总实收金额',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                    },
                                    {
                                      attrId: '758489',
                                      code: 'lastDiscount',
                                      name: '最终折扣',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                    },
                                    {
                                      attrId: '709148',
                                      code: 'desc',
                                      name: '营销案描述',
                                      type: 'string',
                                      initialData: { type: 'static' },
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
                            ],
                            callback2: [],
                          },
                          {
                            type: 'setDataSource',
                            dataId: 166780032332074780,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '11078592',
                              pageJsonId: '8430824',
                              dataSourceId: 166452752557535940,
                              dataSourceName: 'marketObj',
                              dataSourceRelType: 'custom',
                              dataSourceReloadFilter: [],
                              dataSourceSetValue: [
                                {
                                  attrId: '969052',
                                  code: 'code',
                                  name: '营销案档次编码',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  value: {
                                    type: ['customize'],
                                    code: '$okData_715808.code$',
                                  },
                                },
                                {
                                  attrId: '395448',
                                  code: 'name',
                                  name: '营销案名称',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  value: {
                                    type: ['customize'],
                                    code: '$okData_715808.name$',
                                  },
                                },
                                {
                                  attrId: '7610088',
                                  code: 'area',
                                  name: '归属区域',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  value: {
                                    type: ['customize'],
                                    code: '$okData_715808.area$',
                                  },
                                },
                                {
                                  attrId: '302396',
                                  code: 'marketStartTime',
                                  name: '营销案生效时间',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  value: {
                                    type: ['customize'],
                                    code: '$okData_715808.marketStartTime$',
                                  },
                                },
                                {
                                  attrId: '196276',
                                  code: 'marketEndTime',
                                  name: '营销案失效时间',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  value: {
                                    type: ['customize'],
                                    code: '$okData_715808.marketEndTime$',
                                  },
                                },
                                {
                                  attrId: '099846',
                                  code: 'preMoney',
                                  name: '预存金额',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  value: {
                                    type: ['customize'],
                                    code: '$okData_715808.preMoney$',
                                  },
                                },
                                {
                                  attrId: '411439',
                                  code: 'guarMoney',
                                  name: '保底金额',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  value: {
                                    type: ['customize'],
                                    code: '$okData_715808.guarMoney$',
                                  },
                                },
                                {
                                  attrId: '252455',
                                  code: 'guarantee',
                                  name: '优惠金额',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  value: {
                                    type: ['customize'],
                                    code: '$okData_715808.guarantee$',
                                  },
                                },
                                {
                                  attrId: '125048',
                                  code: 'acceptMul',
                                  name: '受理倍数',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  value: {
                                    type: ['customize'],
                                    code: '$okData_715808.acceptMul$',
                                  },
                                },
                                {
                                  attrId: '9599447',
                                  code: 'effectType',
                                  name: '生效类型',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  value: {
                                    type: ['customize'],
                                    code: '$okData_715808.effectType$',
                                  },
                                },
                                {
                                  attrId: '445363',
                                  code: 'receiptsMoney',
                                  name: '二次优惠总实收金额',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  value: {
                                    type: ['customize'],
                                    code: '$okData_715808.receiptsMoney$',
                                  },
                                },
                                {
                                  attrId: '758489',
                                  code: 'lastDiscount',
                                  name: '最终折扣',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  value: {
                                    type: ['customize'],
                                    code: '$okData_715808.lastDiscount$',
                                  },
                                },
                                {
                                  attrId: '709148',
                                  code: 'desc',
                                  name: '营销案描述',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  value: {
                                    type: ['customize'],
                                    code: '$okData_715808.desc$',
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
                  },
                ];
                eventDatagetValue265.params = [] || [];
                CMDGenerator(eventDatagetValue265, {}, 'getValue', {
                  id: 'getValue',
                  name: 'getValue',
                  type: 'getValue',
                  platform: 'pc',
                });
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_marketCode_332199')
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
              fieldName={'marketName'}
              value={data?.marketObj?.name}
              formItemIndex={1}
              disabled={true}
              visible={true}
              readOnly={false}
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
                id: 'Input_marketName_081812',
                uid: 'Input_marketName_081812',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_marketName_081812')
              }
              {...injectData}
            />
            <Input
              name={'归属区域'}
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
              fieldName={'area'}
              value={data?.marketObj?.area}
              formItemIndex={2}
              disabled={true}
              visible={true}
              readOnly={false}
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
                id: 'Input_area_892025',
                uid: 'Input_area_892025',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_area_892025')}
              {...injectData}
            />
            <TimePicker
              name={'营销案生效时间'}
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
              fieldName={'marketStartTime'}
              value={data?.marketObj?.marketStartTime}
              formItemIndex={3}
              disabled={true}
              visible={true}
              readOnly={false}
              $$componentItem={{
                id: 'Input_marketStartTime_197299',
                uid: 'Input_marketStartTime_197299',
                type: 'TimePicker',
                ...componentItem,
              }}
              defaultValue={{}}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_marketStartTime_197299')
              }
              {...injectData}
            />
            <TimePicker
              name={'营销案失效时间'}
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
              fieldName={'marketEndTime'}
              value={data?.marketObj?.marketEndTime}
              formItemIndex={4}
              disabled={true}
              visible={true}
              readOnly={false}
              $$componentItem={{
                id: 'Input_marketEndTime_11954',
                uid: 'Input_marketEndTime_11954',
                type: 'TimePicker',
                ...componentItem,
              }}
              defaultValue={{}}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_marketEndTime_11954')
              }
              {...injectData}
            />
            <Select
              name={'预存金额'}
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
              attr={{}}
              placeholder={'请选择'}
              fieldName={'preMoney'}
              disabled={false}
              value={data?.marketObj?.preMoney}
              formItemIndex={5}
              visible={true}
              readOnly={false}
              $$componentItem={{
                id: 'Input_preMoney_937179',
                uid: 'Input_preMoney_937179',
                type: 'Select',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_preMoney_937179')}
              {...injectData}
            />
            <Input
              name={'保底金额'}
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
              fieldName={'guarMoney'}
              value={data?.marketObj?.guarMoney}
              formItemIndex={6}
              disabled={true}
              visible={true}
              readOnly={false}
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
                id: 'Input_guarMoney_868977',
                uid: 'Input_guarMoney_868977',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_guarMoney_868977')
              }
              {...injectData}
            />
            <Select
              name={'优惠金额'}
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
              attr={{}}
              placeholder={'请选择'}
              fieldName={'guarantee'}
              disabled={false}
              value={data?.marketObj?.guarantee}
              formItemIndex={7}
              visible={true}
              readOnly={false}
              $$componentItem={{
                id: 'Input_guarantee_698753',
                uid: 'Input_guarantee_698753',
                type: 'Select',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_guarantee_698753')
              }
              {...injectData}
            />
            <Input
              name={'受理倍数'}
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
              fieldName={'acceptMul'}
              value={data?.marketObj?.acceptMul}
              formItemIndex={8}
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
                id: 'Input_acceptMul_6374716',
                uid: 'Input_acceptMul_6374716',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_acceptMul_6374716')
              }
              {...injectData}
            />
            <Input
              name={'生效类型'}
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
              fieldName={'effectType'}
              disabled={true}
              value={data?.marketObj?.effectType}
              formItemIndex={9}
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
                id: 'Input_effectType_582677',
                uid: 'Input_effectType_582677',
                type: 'Input',
                ...componentItem,
              }}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_effectType_582677')
              }
              {...injectData}
            />
            <Input
              name={'二次优惠总实收金额'}
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
              placeholder={'二次优惠总实收金额'}
              fieldName={'receiptsMoney'}
              value={data?.marketObj?.receiptsMoney}
              formItemIndex={10}
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
                id: 'Input_receiptsMoney_65845',
                uid: 'Input_receiptsMoney_65845',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatacallSelfFunc842: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166616202419939740,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '417035',
                      pageJsonId: '8430824',
                      customFuncName: 'calculEndDiscount',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc842.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc842, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_receiptsMoney_65845')
              }
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
              postfix={''}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              fieldName={'lastDiscount'}
              value={data?.marketObj?.lastDiscount}
              formItemIndex={11}
              disabled={true}
              visible={true}
              readOnly={false}
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
                id: 'Input_lastDiscount_216509',
                uid: 'Input_lastDiscount_216509',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_lastDiscount_216509')
              }
              {...injectData}
            />
            <TextArea
              name={'营销案描述'}
              selfSpan={24}
              labelCol={'8'}
              wrapperCol={16}
              readOnly={false}
              visible={true}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={false}
              placeholder={'请输入'}
              fieldName={'marketDesc'}
              value={data?.marketObj?.desc}
              formItemIndex={12}
              disabled={true}
              $$componentItem={{
                id: 'Input_marketDesc_7971046',
                uid: 'Input_marketDesc_7971046',
                type: 'TextArea',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_marketDesc_7971046')
              }
              {...injectData}
            />
          </Form>
          <View
            className="View_View_784828025"
            name={'布局容器'}
            visible={true}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_784828025',
              uid: 'View_784828025',
              type: 'View',
              ...componentItem,
            }}
            style={{
              display: 'block',
              flexDirection: 'column',
              padding: '0px 0px 0px 0px',
              width: '100%',
              textAlign: 'right',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_784828025')}
            {...injectData}
          >
            <Button
              name={'添加集团'}
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
                id: 'Button_489283',
                uid: 'Button_489283',
                type: 'Button',
                ...componentItem,
              }}
              style={{ width: 'fit-content', margin: '10px 0px 0px 0px' }}
              onClick={(e: any) => {
                const eventDatashowCustomModal305: any = [
                  {
                    type: 'showCustomModal',
                    dataId: 166772351122528600,
                    options: {
                      compId: 'showCustomModal',
                      compName: 'page',
                      id: '291846',
                      pageJsonId: '8430824',
                      modalname: '/groupInfoSel',
                      pageId: '899848269504155648',
                      modalPath: '/groupInfoSel',
                      paramsObj: { groupCode: '1000' },
                      paramsObjKeyValueMap: { groupCode: '1000' },
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 166772351122547500,
                        shielding: true,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '204243',
                          pageJsonId: '8430824',
                          code: 'function main(data,state,success,fail){data.groupObj=okData_291846;success()};',
                        },
                        line_number: 2,
                        callback1: [
                          {
                            type: 'setDataSource',
                            dataId: 166772351122529600,
                            shielding: true,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '99828',
                              pageJsonId: '8430824',
                              dataSourceId: 166608683889014430,
                              dataSourceName: 'groupObj',
                              dataSourceRelType: 'object',
                              dataSourceReloadFilter: [
                                {
                                  attrId: '965692',
                                  code: 'primaryValue',
                                  name: '主键值',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                },
                              ],
                              dataSourceSetValue: [
                                {
                                  attrId: '5574983',
                                  code: 'groupId',
                                  name: '集团编码',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  value: {
                                    type: ['customize'],
                                    code: '$okData_291846.groupId$',
                                  },
                                },
                                {
                                  attrId: '975636',
                                  code: 'groupName',
                                  name: '集团名称',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  value: {
                                    type: ['customize'],
                                    code: '$okData_291846.groupName$',
                                  },
                                },
                                {
                                  attrId: '02459',
                                  code: 'valueLevel',
                                  name: '集团价值等级',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  value: {
                                    type: ['customize'],
                                    code: '$okData_291846.valueLevel$',
                                  },
                                },
                                {
                                  attrId: '426942',
                                  code: 'orgType',
                                  name: '机构类型',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  value: {
                                    type: ['customize'],
                                    code: '$okData_291846.orgType$',
                                  },
                                },
                                {
                                  attrId: '6359542',
                                  code: 'managerName',
                                  name: '客户经理姓名',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  value: {
                                    type: ['customize'],
                                    code: '$okData_291846.managerName$',
                                  },
                                },
                                {
                                  attrId: '524991',
                                  code: 'managerContactTel',
                                  name: '客户经理电话',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  value: {
                                    type: ['customize'],
                                    code: '$okData_291846.managerContactTel$',
                                  },
                                },
                                {
                                  attrId: '6745014',
                                  code: 'homeCity',
                                  name: '归属地市',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  value: {
                                    type: ['customize'],
                                    code: '$okData_291846.homeCity$',
                                  },
                                },
                                {
                                  attrId: '452194',
                                  code: 'homeCounty',
                                  name: '归属县市',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  value: {
                                    type: ['customize'],
                                    code: '$okData_291846.homeCounty$',
                                  },
                                },
                                {
                                  attrId: '167422',
                                  code: 'tradeclassTop',
                                  name: '行业类型(大类)',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  value: {
                                    type: ['customize'],
                                    code: '$okData_291846.tradeclassTop$',
                                  },
                                },
                                {
                                  attrId: '574926',
                                  code: 'channelAgentName',
                                  name: '代理商',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  value: {
                                    type: ['customize'],
                                    code: '$okData_291846.channelAgentName$',
                                  },
                                },
                                {
                                  attrId: '335588',
                                  code: 'accountName',
                                  name: '集团账户名称',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  value: {
                                    type: ['customize'],
                                    code: '$okData_291846.accountName$',
                                  },
                                },
                                {
                                  attrId: '8219294',
                                  code: 'accountId',
                                  name: '集团账户ID',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  value: {
                                    type: ['customize'],
                                    code: '$okData_291846.accountId$',
                                  },
                                },
                                {
                                  attrId: '3654504',
                                  code: 'income',
                                  name: '收入',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  value: {
                                    type: ['customize'],
                                    code: '$okData_291846.income$',
                                  },
                                },
                                {
                                  attrId: '208835',
                                  code: 'valueLevelName',
                                  name: '集团价值等级名称',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  value: {
                                    type: ['customize'],
                                    code: '$okData_291846.valueLevelName$',
                                  },
                                },
                                {
                                  attrId: '170446',
                                  code: 'orgTypeName',
                                  name: '机构类型名称',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  value: {
                                    type: ['customize'],
                                    code: '$okData_291846.orgTypeName$',
                                  },
                                },
                                {
                                  attrId: '065448',
                                  code: 'homeCityName',
                                  name: '归属地市名称',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  value: {
                                    type: ['customize'],
                                    code: '$okData_291846.homeCityName$',
                                  },
                                },
                                {
                                  attrId: '440609',
                                  code: 'homeCountyName',
                                  name: '归属区县名称',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  value: {
                                    type: ['customize'],
                                    code: '$okData_291846.homeCountyName$',
                                  },
                                },
                                {
                                  attrId: '808276',
                                  code: 'tradeclassTopName',
                                  name: '行业大类名称',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  value: {
                                    type: ['customize'],
                                    code: '$okData_291846.tradeclassTopName$',
                                  },
                                },
                                {
                                  attrId: '479374',
                                  code: 'orgZone',
                                  name: '归属区域',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  value: {
                                    type: ['customize'],
                                    code: '$okData_291846.orgZone$',
                                  },
                                },
                                {
                                  attrId: '7043895',
                                  code: 'orgZoneName',
                                  name: '归属区域名称',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  value: {
                                    type: ['customize'],
                                    code: '$okData_291846.orgZoneName$',
                                  },
                                },
                                {
                                  attrId: '404058',
                                  code: 'managerId',
                                  name: '客户经理工号',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  value: {
                                    type: ['customize'],
                                    code: '$okData_291846.managerId$',
                                  },
                                },
                                {
                                  attrId: '4554025',
                                  code: 'enterpriseKind',
                                  name: '企业类型',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  value: {
                                    type: ['customize'],
                                    code: '$okData_291846.enterpriseKind$',
                                  },
                                },
                                {
                                  attrId: '676972',
                                  code: 'enterpriseKindName',
                                  name: '企业类型名称',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  value: {
                                    type: ['customize'],
                                    code: '$okData_291846.enterpriseKindName$',
                                  },
                                },
                                {
                                  attrId: '592549',
                                  code: 'contactTel',
                                  name: '联系人',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  value: {
                                    type: ['customize'],
                                    code: '$okData_291846.contactTel$',
                                  },
                                },
                                {
                                  attrId: '194041',
                                  code: 'enterpriseScope',
                                  name: '企业类型',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  value: {
                                    type: ['customize'],
                                    code: '$okData_291846.enterpriseScope$',
                                  },
                                },
                                {
                                  attrId: '981678',
                                  code: 'enterpriseScopeName',
                                  name: '企业类型名称',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  value: {
                                    type: ['customize'],
                                    code: '$okData_291846.enterpriseScopeName$',
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
                        ],
                        callback2: [],
                      },
                      {
                        type: 'setDataSource',
                        dataId: 166772398746416450,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '131872',
                          pageJsonId: '8430824',
                          dataSourceId: 166608683889014430,
                          dataSourceName: 'groupObj',
                          dataSourceRelType: 'object',
                          dataSourceReloadFilter: [
                            {
                              attrId: '965692',
                              code: 'primaryValue',
                              name: '主键值',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '' },
                            },
                          ],
                          dataSourceSetValue: [
                            {
                              attrId: '5574983',
                              code: 'groupId',
                              name: '集团编码',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: ['customize'],
                                code: '$okData_291846[0].groupId$',
                              },
                            },
                            {
                              attrId: '975636',
                              code: 'groupName',
                              name: '集团名称',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: ['customize'],
                                code: '$okData_291846[0].groupName$',
                              },
                            },
                            {
                              attrId: '02459',
                              code: 'valueLevel',
                              name: '集团价值等级',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: ['customize'],
                                code: '$okData_291846[0].valueLevel$',
                              },
                            },
                            {
                              attrId: '426942',
                              code: 'orgType',
                              name: '机构类型',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: ['customize'],
                                code: '$okData_291846[0].orgType$',
                              },
                            },
                            {
                              attrId: '6359542',
                              code: 'managerName',
                              name: '客户经理姓名',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: ['customize'],
                                code: '$okData_291846[0].managerName$',
                              },
                            },
                            {
                              attrId: '524991',
                              code: 'managerContactTel',
                              name: '客户经理电话',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: ['customize'],
                                code: '$okData_291846[0].managerContactTel$',
                              },
                            },
                            {
                              attrId: '6745014',
                              code: 'homeCity',
                              name: '归属地市',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: ['customize'],
                                code: '$okData_291846[0].homeCity$',
                              },
                            },
                            {
                              attrId: '452194',
                              code: 'homeCounty',
                              name: '归属县市',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: ['customize'],
                                code: '$okData_291846[0].homeCounty$',
                              },
                            },
                            {
                              attrId: '167422',
                              code: 'tradeclassTop',
                              name: '行业类型(大类)',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: ['customize'],
                                code: '$okData_291846[0].tradeclassTop$',
                              },
                            },
                            {
                              attrId: '574926',
                              code: 'channelAgentName',
                              name: '代理商',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: ['customize'],
                                code: '$okData_291846[0].channelAgentName$',
                              },
                            },
                            {
                              attrId: '335588',
                              code: 'accountName',
                              name: '集团账户名称',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: ['customize'],
                                code: '$okData_291846[0].accountName$',
                              },
                            },
                            {
                              attrId: '8219294',
                              code: 'accountId',
                              name: '集团账户ID',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: ['customize'],
                                code: '$okData_291846[0].accountId$',
                              },
                            },
                            {
                              attrId: '3654504',
                              code: 'income',
                              name: '收入',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: ['customize'],
                                code: '$okData_291846[0].income$',
                              },
                            },
                            {
                              attrId: '208835',
                              code: 'valueLevelName',
                              name: '集团价值等级名称',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: ['customize'],
                                code: '$okData_291846[0].valueLevelName$',
                              },
                            },
                            {
                              attrId: '170446',
                              code: 'orgTypeName',
                              name: '机构类型名称',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: ['customize'],
                                code: '$okData_291846[0].orgTypeName$',
                              },
                            },
                            {
                              attrId: '065448',
                              code: 'homeCityName',
                              name: '归属地市名称',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: ['customize'],
                                code: '$okData_291846[0].homeCityName$',
                              },
                            },
                            {
                              attrId: '440609',
                              code: 'homeCountyName',
                              name: '归属区县名称',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: ['customize'],
                                code: '$okData_291846[0].homeCountyName$',
                              },
                            },
                            {
                              attrId: '808276',
                              code: 'tradeclassTopName',
                              name: '行业大类名称',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: ['customize'],
                                code: '$okData_291846[0].tradeclassTopName$',
                              },
                            },
                            {
                              attrId: '479374',
                              code: 'orgZone',
                              name: '归属区域',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: ['customize'],
                                code: '$okData_291846[0].orgZone$',
                              },
                            },
                            {
                              attrId: '7043895',
                              code: 'orgZoneName',
                              name: '归属区域名称',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: ['customize'],
                                code: '$okData_291846[0].orgZoneName$',
                              },
                            },
                            {
                              attrId: '404058',
                              code: 'managerId',
                              name: '客户经理工号',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: ['customize'],
                                code: '$okData_291846[0].managerId$',
                              },
                            },
                            {
                              attrId: '4554025',
                              code: 'enterpriseKind',
                              name: '企业类型',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: ['customize'],
                                code: '$okData_291846[0].enterpriseKind$',
                              },
                            },
                            {
                              attrId: '676972',
                              code: 'enterpriseKindName',
                              name: '企业类型名称',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: ['customize'],
                                code: '$okData_291846[0].enterpriseKindName$',
                              },
                            },
                            {
                              attrId: '592549',
                              code: 'contactTel',
                              name: '联系人',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: ['customize'],
                                code: '$okData_291846[0].contactTel$',
                              },
                            },
                            {
                              attrId: '194041',
                              code: 'enterpriseScope',
                              name: '企业类型',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: ['customize'],
                                code: '$okData_291846[0].enterpriseScope$',
                              },
                            },
                            {
                              attrId: '981678',
                              code: 'enterpriseScopeName',
                              name: '企业类型名称',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: ['customize'],
                                code: '$okData_291846[0].enterpriseScopeName$',
                              },
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
                      {
                        type: 'console',
                        dataId: 166772425585682750,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '9249504',
                          pageJsonId: '8430824',
                        },
                        line_number: 5,
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatashowCustomModal305.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatashowCustomModal305,
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
              ref={(r: any) => refs.setComponentRef(r, 'Button_489283')}
              {...injectData}
            />
          </View>
          <Form
            name={'集团'}
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
            formCode={'Form_7899824'}
            genRuleType={'key'}
            formType={'normal'}
            relationDataSource={data?.groupObj}
            busiObjectId={'899594856044400640'}
            $$componentItem={{
              id: 'Form_7899824',
              uid: 'Form_7899824',
              type: 'Form',
              ...componentItem,
            }}
            style={{ padding: '0px 0px 0px 0px', margin: '10px 0px 0px 0px' }}
            onValuesChange={() => {
              const eventDatasetDataSource307: any = [
                {
                  type: 'setDataSource',
                  dataId: 166608692407368540,
                  options: {
                    compId: 'page',
                    compName: 'page',
                    id: '9940635',
                    pageJsonId: '8430824',
                    dataSourceId: 166608683889014430,
                    dataSourceName: 'groupObj',
                    dataSourceRelType: 'object',
                    dataSourceReloadFilter: [],
                    dataSourceSetValue: [
                      {
                        attrId: '5574983',
                        code: 'groupId',
                        name: '集团编码',
                        type: 'string',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: null },
                        value: { type: [], code: 'groupId' },
                      },
                      {
                        attrId: '975636',
                        code: 'groupName',
                        name: '集团名称',
                        type: 'string',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: null },
                        value: { type: [], code: 'groupName' },
                      },
                      {
                        attrId: '02459',
                        code: 'valueLevel',
                        name: '集团价值等级',
                        type: 'string',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: null },
                      },
                      {
                        attrId: '426942',
                        code: 'orgType',
                        name: '机构类型',
                        type: 'string',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: null },
                      },
                      {
                        attrId: '6359542',
                        code: 'managerName',
                        name: '客户经理姓名',
                        type: 'string',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: null },
                      },
                      {
                        attrId: '524991',
                        code: 'managerContactTel',
                        name: '客户经理电话',
                        type: 'string',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: null },
                      },
                      {
                        attrId: '6745014',
                        code: 'homeCity',
                        name: '归属地市',
                        type: 'string',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: null },
                      },
                      {
                        attrId: '452194',
                        code: 'homeCounty',
                        name: '归属县市',
                        type: 'string',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: null },
                      },
                      {
                        attrId: '167422',
                        code: 'tradeclassTop',
                        name: '行业类型(大类)',
                        type: 'string',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: null },
                      },
                      {
                        attrId: '574926',
                        code: 'channelAgentName',
                        name: '代理商',
                        type: 'string',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: null },
                      },
                      {
                        attrId: '335588',
                        code: 'accountName',
                        name: '集团账户名称',
                        type: 'string',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: null },
                        value: { type: [], code: 'accountName' },
                      },
                      {
                        attrId: '8219294',
                        code: 'accountId',
                        name: '集团账户ID',
                        type: 'string',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: null },
                        value: { type: [], code: 'accountId' },
                      },
                      {
                        attrId: '3654504',
                        code: 'income',
                        name: '收入',
                        type: 'string',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: null },
                        value: {
                          type: ['form', 'Form_7899824', 'getFieldsValue'],
                          code: 'income',
                        },
                      },
                      {
                        attrId: '208835',
                        code: 'valueLevelName',
                        name: '集团价值等级名称',
                        type: 'string',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: null },
                        value: { type: [], code: 'valueLevelName' },
                      },
                      {
                        attrId: '170446',
                        code: 'orgTypeName',
                        name: '机构类型名称',
                        type: 'string',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: null },
                      },
                      {
                        attrId: '065448',
                        code: 'homeCityName',
                        name: '归属地市名称',
                        type: 'string',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: null },
                        value: { type: [], code: 'homeCityName' },
                      },
                      {
                        attrId: '440609',
                        code: 'homeCountyName',
                        name: '归属区县名称',
                        type: 'string',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: null },
                        value: { type: [], code: 'homeCountyName' },
                      },
                      {
                        attrId: '808276',
                        code: 'tradeclassTopName',
                        name: '行业大类名称',
                        type: 'string',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: null },
                        value: { type: [], code: 'tradeclassTopName' },
                      },
                      {
                        attrId: '479374',
                        code: 'orgZone',
                        name: '归属区域',
                        type: 'string',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: null },
                      },
                      {
                        attrId: '7043895',
                        code: 'orgZoneName',
                        name: '归属区域名称',
                        type: 'string',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: null },
                        value: { type: [], code: 'orgZoneName' },
                      },
                      {
                        attrId: '404058',
                        code: 'managerId',
                        name: '客户经理工号',
                        type: 'string',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: null },
                      },
                      {
                        attrId: '4554025',
                        code: 'enterpriseKind',
                        name: '企业类型',
                        type: 'string',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: null },
                      },
                      {
                        attrId: '676972',
                        code: 'enterpriseKindName',
                        name: '企业类型名称',
                        type: 'string',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: null },
                      },
                      {
                        attrId: '592549',
                        code: 'contactTel',
                        name: '联系人',
                        type: 'string',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: null },
                      },
                      {
                        attrId: '194041',
                        code: 'enterpriseScope',
                        name: '企业类型',
                        type: 'string',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: null },
                      },
                      {
                        attrId: '981678',
                        code: 'enterpriseScopeName',
                        name: '企业类型名称',
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
              eventDatasetDataSource307.params = [] || [];
              CMDGenerator(eventDatasetDataSource307, {}, 'setDataSource', {
                id: 'setDataSource',
                name: 'setDataSource',
                type: 'setDataSource',
                platform: 'pc',
              });
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_7899824')}
            {...injectData}
          >
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
              fieldName={'groupId'}
              hidden={false}
              readOnly={true}
              showMore={false}
              defaultValue={null}
              attr={{}}
              value={data?.groupObj?.groupId}
              formItemIndex={0}
              icon={{ type: '', theme: '', fontAddress: '', isIconFont: false }}
              disabled={false}
              visible={true}
              prefixIcon={{
                type: undefined,
                theme: 'outlined',
                fontAddress: '',
                isIconFont: false,
                iconFileInfo: {},
              }}
              $$componentItem={{
                id: 'Input_groupId_441193',
                uid: 'Input_groupId_441193',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              onIconClick={() => {
                const eventDatagetValue267: any = [
                  {
                    type: 'getValue',
                    dataId: 166614737955802240,
                    options: {
                      compId: 'Input_groupId_441193',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Input',
                      id: '480725',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '6528596',
                            options: {
                              context: '$value_480725$',
                              operate: 'notEmpty',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 166614739474086180,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 166614741471617950,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166614742231648580,
                                children: [],
                                todoOptions: ['msgType', 'value'],
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '38545',
                                  pageJsonId: '8430824',
                                  type: 'error',
                                  value: '请填写集团编码',
                                },
                                actionObjId: 'showMessage',
                                actionObjName: 'system',
                                value: 'showMessage',
                                elseIfs: [],
                                line_number: 9,
                              },
                            ],
                            condition: [],
                            desc: '',
                            elseIfs: [],
                            callback: [
                              {
                                type: 'showMessage',
                                dataId: 166614742231648580,
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '38545',
                                  pageJsonId: '8430824',
                                  type: 'error',
                                  value: '请填写集团编码',
                                },
                                line_number: 9,
                              },
                            ],
                          },
                        ],
                        line_number: 2,
                        callback1: [
                          {
                            type: 'showCustomModal',
                            dataId: 166614739754979600,
                            options: {
                              compId: 'showCustomModal',
                              compName: 'page',
                              id: '377938',
                              pageJsonId: '8430824',
                              modalname: '/groupInfoSel',
                              pageId: '899848269504155648',
                              modalPath: '/groupInfoSel',
                              paramsObj: { groupCode: '$value_480725$' },
                              paramsObjKeyValueMap: {
                                groupCode: '$value_480725$',
                              },
                            },
                            line_number: 3,
                            callback1: [
                              {
                                type: 'console',
                                dataId: 166623350021376220,
                                options: {
                                  compId: 'debug',
                                  compName: 'system',
                                  id: '161774',
                                  pageJsonId: '8430824',
                                  value: [
                                    '$okData_377938.groupId$',
                                    '弹窗确认----------',
                                  ],
                                },
                                line_number: 4,
                              },
                              {
                                type: 'customActionCode',
                                dataId: 166614745973307170,
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '8050977',
                                  pageJsonId: '8430824',
                                  code: 'function main(data,state,success,fail){data.groupObj=okData_377938;success()};',
                                },
                                line_number: 5,
                                callback1: [
                                  {
                                    type: 'console',
                                    dataId: 166623328233431580,
                                    options: {
                                      compId: 'debug',
                                      compName: 'system',
                                      id: '216373',
                                      pageJsonId: '8430824',
                                      value: ['$okData_377938$'],
                                    },
                                    line_number: 6,
                                  },
                                  {
                                    type: 'setValue',
                                    dataId: 166623315318714300,
                                    options: {
                                      compId: 'Input_groupId_441193',
                                      compLib: 'comm',
                                      pageJsonId: '8430824',
                                      compName: 'Input',
                                      id: '908121',
                                      value: '$okData_377938.groupId$',
                                    },
                                    line_number: 7,
                                    callback1: [],
                                  },
                                  {
                                    type: 'setDataSource',
                                    dataId: 166614779627067520,
                                    options: {
                                      compId: 'setDataSource',
                                      compName: 'page',
                                      id: '010988',
                                      pageJsonId: '8430824',
                                      dataSourceId: 166608683889014430,
                                      dataSourceName: 'groupObj',
                                      dataSourceRelType: 'object',
                                      dataSourceReloadFilter: [
                                        {
                                          attrId: '965692',
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
                                          attrId: '5574983',
                                          code: 'groupId',
                                          name: '集团编码',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: null,
                                          },
                                        },
                                        {
                                          attrId: '975636',
                                          code: 'groupName',
                                          name: '集团名称',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: null,
                                          },
                                        },
                                        {
                                          attrId: '02459',
                                          code: 'valueLevel',
                                          name: '集团价值等级',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: null,
                                          },
                                        },
                                        {
                                          attrId: '426942',
                                          code: 'orgType',
                                          name: '机构类型',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: null,
                                          },
                                        },
                                        {
                                          attrId: '6359542',
                                          code: 'managerName',
                                          name: '客户经理姓名',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: null,
                                          },
                                        },
                                        {
                                          attrId: '524991',
                                          code: 'managerContactTel',
                                          name: '客户经理电话',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: null,
                                          },
                                        },
                                        {
                                          attrId: '6745014',
                                          code: 'homeCity',
                                          name: '归属地市',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: null,
                                          },
                                        },
                                        {
                                          attrId: '452194',
                                          code: 'homeCounty',
                                          name: '归属县市',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: null,
                                          },
                                        },
                                        {
                                          attrId: '167422',
                                          code: 'tradeclassTop',
                                          name: '行业类型(大类)',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: null,
                                          },
                                        },
                                        {
                                          attrId: '574926',
                                          code: 'channelAgentName',
                                          name: '代理商',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: null,
                                          },
                                        },
                                        {
                                          attrId: '335588',
                                          code: 'accountName',
                                          name: '集团账户名称',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: null,
                                          },
                                        },
                                        {
                                          attrId: '8219294',
                                          code: 'accountId',
                                          name: '集团账户ID',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: null,
                                          },
                                        },
                                        {
                                          attrId: '3654504',
                                          code: 'income',
                                          name: '收入',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: null,
                                          },
                                        },
                                        {
                                          attrId: '208835',
                                          code: 'valueLevelName',
                                          name: '集团价值等级名称',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: null,
                                          },
                                        },
                                        {
                                          attrId: '170446',
                                          code: 'orgTypeName',
                                          name: '机构类型名称',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: null,
                                          },
                                        },
                                        {
                                          attrId: '065448',
                                          code: 'homeCityName',
                                          name: '归属地市名称',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: null,
                                          },
                                        },
                                        {
                                          attrId: '440609',
                                          code: 'homeCountyName',
                                          name: '归属区县名称',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: null,
                                          },
                                        },
                                        {
                                          attrId: '808276',
                                          code: 'tradeclassTopName',
                                          name: '行业大类名称',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: null,
                                          },
                                        },
                                        {
                                          attrId: '479374',
                                          code: 'orgZone',
                                          name: '归属区域',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: null,
                                          },
                                        },
                                        {
                                          attrId: '7043895',
                                          code: 'orgZoneName',
                                          name: '归属区域名称',
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
                                    line_number: 8,
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
                eventDatagetValue267.params = [] || [];
                CMDGenerator(eventDatagetValue267, {}, 'getValue', {
                  id: 'getValue',
                  name: 'getValue',
                  type: 'getValue',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_groupId_441193')}
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
              fieldName={'groupName'}
              hidden={false}
              readOnly={true}
              showMore={false}
              defaultValue={null}
              attr={{}}
              value={data?.groupObj?.groupName}
              formItemIndex={1}
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
                id: 'Input_groupName_449926',
                uid: 'Input_groupName_449926',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_groupName_449926')
              }
              {...injectData}
            />
            <Input
              name={'集团价值等级'}
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
              fieldName={'valueLevelName'}
              hidden={false}
              readOnly={true}
              showMore={false}
              defaultValue={null}
              attr={{}}
              value={data?.groupObj?.valueLevelName}
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
                id: 'Input_valueLevelName_2562986',
                uid: 'Input_valueLevelName_2562986',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_valueLevelName_2562986')
              }
              {...injectData}
            />
            <Input
              name={'行业类型'}
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
              fieldName={'tradeclassTopName'}
              hidden={false}
              readOnly={true}
              showMore={false}
              defaultValue={null}
              attr={{}}
              value={data?.groupObj?.tradeclassTopName}
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
                id: 'Input_tradeclassTopName_252891',
                uid: 'Input_tradeclassTopName_252891',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_tradeclassTopName_252891')
              }
              {...injectData}
            />
            <Select
              name={'集团账户名称'}
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
              attr={{}}
              placeholder={'请选择'}
              fieldName={'accountName'}
              value={data?.groupObj?.accountName}
              formItemIndex={4}
              $$componentItem={{
                id: 'Input_accountName_2958199',
                uid: 'Input_accountName_2958199',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatagetSelectedData471: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 166614805989473300,
                    options: {
                      compId: 'Input_accountName_2958199',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Select',
                      id: '6725474',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'setValue',
                        dataId: 166614806587881500,
                        options: {
                          compId: 'Input_accountId_831068',
                          compLib: 'comm',
                          pageJsonId: '8430824',
                          compName: 'Input',
                          id: '035455',
                          value: '$selectedData_6725474[0].value$',
                        },
                        line_number: 2,
                        callback1: [],
                      },
                      {
                        type: 'setDataSource',
                        dataId: 166772456377943800,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '85824036',
                          pageJsonId: '8430824',
                          dataSourceId: 166608683889014430,
                          dataSourceName: 'groupObj',
                          dataSourceRelType: 'object',
                          dataSourceReloadFilter: [
                            {
                              attrId: '965692',
                              code: 'primaryValue',
                              name: '主键值',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '' },
                            },
                          ],
                          dataSourceSetValue: [
                            {
                              attrId: '5574983',
                              code: 'groupId',
                              name: '集团编码',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                            },
                            {
                              attrId: '975636',
                              code: 'groupName',
                              name: '集团名称',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                            },
                            {
                              attrId: '02459',
                              code: 'valueLevel',
                              name: '集团价值等级',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                            },
                            {
                              attrId: '426942',
                              code: 'orgType',
                              name: '机构类型',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                            },
                            {
                              attrId: '6359542',
                              code: 'managerName',
                              name: '客户经理姓名',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                            },
                            {
                              attrId: '524991',
                              code: 'managerContactTel',
                              name: '客户经理电话',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                            },
                            {
                              attrId: '6745014',
                              code: 'homeCity',
                              name: '归属地市',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                            },
                            {
                              attrId: '452194',
                              code: 'homeCounty',
                              name: '归属县市',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                            },
                            {
                              attrId: '167422',
                              code: 'tradeclassTop',
                              name: '行业类型(大类)',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                            },
                            {
                              attrId: '574926',
                              code: 'channelAgentName',
                              name: '代理商',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                            },
                            {
                              attrId: '335588',
                              code: 'accountName',
                              name: '集团账户名称',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: ['customize'],
                                code: '$selectedData_6725474[0].label$',
                              },
                            },
                            {
                              attrId: '8219294',
                              code: 'accountId',
                              name: '集团账户ID',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                              value: {
                                type: ['customize'],
                                code: '$selectedData_6725474[0].value$',
                              },
                            },
                            {
                              attrId: '3654504',
                              code: 'income',
                              name: '收入',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                            },
                            {
                              attrId: '208835',
                              code: 'valueLevelName',
                              name: '集团价值等级名称',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                            },
                            {
                              attrId: '170446',
                              code: 'orgTypeName',
                              name: '机构类型名称',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                            },
                            {
                              attrId: '065448',
                              code: 'homeCityName',
                              name: '归属地市名称',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                            },
                            {
                              attrId: '440609',
                              code: 'homeCountyName',
                              name: '归属区县名称',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                            },
                            {
                              attrId: '808276',
                              code: 'tradeclassTopName',
                              name: '行业大类名称',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                            },
                            {
                              attrId: '479374',
                              code: 'orgZone',
                              name: '归属区域',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                            },
                            {
                              attrId: '7043895',
                              code: 'orgZoneName',
                              name: '归属区域名称',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                            },
                            {
                              attrId: '404058',
                              code: 'managerId',
                              name: '客户经理工号',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                            },
                            {
                              attrId: '4554025',
                              code: 'enterpriseKind',
                              name: '企业类型',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                            },
                            {
                              attrId: '676972',
                              code: 'enterpriseKindName',
                              name: '企业类型名称',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                            },
                            {
                              attrId: '592549',
                              code: 'contactTel',
                              name: '联系人',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                            },
                            {
                              attrId: '194041',
                              code: 'enterpriseScope',
                              name: '企业类型',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: null },
                            },
                            {
                              attrId: '981678',
                              code: 'enterpriseScopeName',
                              name: '企业类型名称',
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
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetSelectedData471.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData471,
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
                refs.setComponentRef(r, 'Input_accountName_2958199')
              }
              {...injectData}
            />
            <Input
              name={'集团账户ID'}
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
              fieldName={'accountId'}
              hidden={false}
              readOnly={false}
              showMore={false}
              defaultValue={null}
              attr={{}}
              value={data?.groupObj?.accountId}
              formItemIndex={5}
              disabled={true}
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
                id: 'Input_accountId_831068',
                uid: 'Input_accountId_831068',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_accountId_831068')
              }
              {...injectData}
            />
            <Input
              name={'归属地市'}
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
              fieldName={'homeCityName'}
              hidden={false}
              readOnly={false}
              showMore={false}
              defaultValue={null}
              attr={{}}
              value={data?.groupObj?.homeCityName}
              formItemIndex={6}
              disabled={true}
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
                id: 'Input_homeCityName_119262',
                uid: 'Input_homeCityName_119262',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_homeCityName_119262')
              }
              {...injectData}
            />
            <Input
              name={'归属区县'}
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
              fieldName={'homeCountyName'}
              hidden={false}
              readOnly={false}
              showMore={false}
              defaultValue={null}
              attr={{}}
              value={data?.groupObj?.homeCountyName}
              formItemIndex={7}
              disabled={true}
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
                id: 'Input_homeCountyName_573514',
                uid: 'Input_homeCountyName_573514',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_homeCountyName_573514')
              }
              {...injectData}
            />
            <Input
              name={'归属区域'}
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
              formItemIndex={8}
              fieldName={'orgZoneName'}
              value={data?.groupObj?.orgZoneName}
              disabled={true}
              visible={true}
              readOnly={false}
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
                id: 'Input_289884',
                uid: 'Input_289884',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_289884')}
              {...injectData}
            />
            <Input
              name={'收入'}
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
              fieldName={'income'}
              hidden={false}
              readOnly={false}
              showMore={false}
              defaultValue={null}
              attr={{}}
              value={data?.groupObj?.income}
              formItemIndex={9}
              disabled={true}
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
                id: 'Input_income_173855',
                uid: 'Input_income_173855',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_income_173855')}
              {...injectData}
            />
          </Form>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(MarketProdFee$$Modal, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', returnPop: '', catalogCode: '' },
});
