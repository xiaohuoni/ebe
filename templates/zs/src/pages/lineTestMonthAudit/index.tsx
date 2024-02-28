// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, Select, Input } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '945499173205458944';
const LineTestMonthAudit$$Modal: React.FC<PageProps> = ({
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
    const eventDatavalidateCurrentForm54: any = [
      {
        type: 'validateCurrentForm',
        dataId: 167711546969040860,
        options: {
          compId: 'Form_981467_101628',
          compLib: 'comm',
          pageJsonId: '331315',
          compName: 'Form',
          id: '982556',
        },
        line_number: 1,
        callback1: [
          {
            type: 'getSelectedData',
            dataId: 167711579372145340,
            options: {
              compId: 'Input_busiType_956176_60737',
              compLib: 'comm',
              pageJsonId: '331315',
              compName: 'Select',
              id: '370906',
            },
            line_number: 2,
            callback1: [
              {
                type: 'getSelectedData',
                dataId: 167711580268052160,
                options: {
                  compId: 'Input_busiType_956176_744788',
                  compLib: 'comm',
                  pageJsonId: '331315',
                  compName: 'Select',
                  id: '9887344',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'getSelectedData',
                    dataId: 167711580557913380,
                    options: {
                      compId: 'Select_678262',
                      compLib: 'comm',
                      pageJsonId: '331315',
                      compName: 'Select',
                      id: '145837',
                    },
                    line_number: 4,
                    callback1: [
                      {
                        type: 'getSelectedData',
                        dataId: 167711580813403940,
                        options: {
                          compId: 'Select_185407',
                          compLib: 'comm',
                          pageJsonId: '331315',
                          compName: 'Select',
                          id: '546709',
                        },
                        line_number: 5,
                        callback1: [
                          {
                            type: 'customActionCode',
                            dataId: 167711581880904600,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '7306877',
                              pageJsonId: '331315',
                              code: 'function main(data,state,success,fail){if(state.feeInfo==undefined||state.feeInfo==null){var min=0;var max=10000;var rowId=Math.round(Math.random()*(max-min))+min;data.feeInfo.rowId=rowId}else{data.feeInfo.rowId=state.feeInfo.rowId}data.feeInfo.testMonthName=selectedData_546709[0].label;data.feeInfo.testMonth=selectedData_546709[0].value;data.feeInfo.bandWidth=selectedData_145837[0].value;data.feeInfo.bandWidthName=selectedData_145837[0].label;data.feeInfo.busiType=selectedData_9887344[0].value;data.feeInfo.busiTypeName=selectedData_9887344[0].label;data.feeInfo.orderType=selectedData_370906[0].value;data.feeInfo.orderTypeName=selectedData_370906[0].label;data.feeInfo.total=Form_981467_101628.total;success()};',
                            },
                            line_number: 6,
                            callback1: [
                              {
                                type: 'okCallbackData',
                                dataId: 167711614418232930,
                                options: {
                                  compId: 'okCallbackData',
                                  compName: 'page',
                                  id: '8097986',
                                  pageJsonId: '331315',
                                  params: '$data.feeInfo$',
                                },
                                line_number: 7,
                              },
                              {
                                type: 'closeModal',
                                dataId: 167711615899585470,
                                options: {
                                  compId: 'closeModal',
                                  compName: 'page',
                                  id: '7788765',
                                  pageJsonId: '331315',
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
            ],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatavalidateCurrentForm54.params = [] || [];
    CMDGenerator(eventDatavalidateCurrentForm54, {}, 'validateCurrentForm', {
      id: 'validateCurrentForm',
      name: 'validateCurrentForm',
      type: 'validateCurrentForm',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal67: any = [
      {
        type: 'closeModal',
        dataId: '09753944_1',
        options: { compId: 'page', compName: 'page', id: '254262' },
        line_number: 1,
      },
    ];
    eventDatacloseModal67.params = [] || [];
    CMDGenerator(eventDatacloseModal67, {}, 'closeModal', {
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
    const eventDataapiRequest449: any = [
      {
        type: 'apiRequest',
        dataId: 167704765911385440,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '9969086',
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
              dataKey: '9969086_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '9969086_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '9969086_query',
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
                  dataKey: '9969086_body.catalogCode',
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
                  dataKey: '9969086_body.attrCode',
                  value: { type: ['customize'], code: 'busiType' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '9969086_body',
            },
          ],
          actionTitle: '类型',
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 167704767725095780,
            options: {
              compId: 'Input_busiType_956176_744788',
              compLib: 'comm',
              pageJsonId: '331315',
              compName: 'Select',
              id: '9620013',
              data: '$reply_9969086?.resultData$',
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
    eventDataapiRequest449.params = [] || [];
    CMDGenerator(eventDataapiRequest449, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest450: any = [
      {
        type: 'apiRequest',
        dataId: 167704771351336200,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '7838552',
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
              dataKey: '7838552_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '7838552_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '7838552_query',
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
                  dataKey: '7838552_body.catalogCode',
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
                  dataKey: '7838552_body.attrCode',
                  value: { type: ['customize'], code: 'orderType' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '7838552_body',
            },
          ],
          actionTitle: '业务类型',
        },
        line_number: 3,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 167704774390346050,
            options: {
              compId: 'Input_busiType_956176_60737',
              compLib: 'comm',
              pageJsonId: '331315',
              compName: 'Select',
              id: '310301',
              data: '$reply_7838552?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 4,
            callback1: [
              {
                type: 'setValue',
                dataId: 167711656824104320,
                options: {
                  compId: 'Input_busiType_956176_744788',
                  compLib: 'comm',
                  pageJsonId: '331315',
                  compName: 'Select',
                  id: '206495',
                  valueList: { Input_busiType_956176_744788: '3' },
                },
                line_number: 5,
                callback1: [],
              },
            ],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest450.params = [] || [];
    CMDGenerator(eventDataapiRequest450, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest451: any = [
      {
        type: 'apiRequest',
        dataId: 167704776392326560,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '773584',
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
              dataKey: '773584_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '773584_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '773584_query',
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
                  dataKey: '773584_body.catalogCode',
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
                  dataKey: '773584_body.attrCode',
                  value: { type: ['customize'], code: 'testMonth' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '773584_body',
            },
          ],
          actionTitle: '测试月数',
        },
        line_number: 6,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 167704790232526700,
            options: {
              compId: 'Select_185407',
              compLib: 'comm',
              pageJsonId: '331315',
              compName: 'Select',
              id: '8465275',
              data: '$reply_773584?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 7,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest451.params = [] || [];
    CMDGenerator(eventDataapiRequest451, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest452: any = [
      {
        type: 'apiRequest',
        dataId: 167704821758456700,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '73817517',
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
              dataKey: '0925_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '0925_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '0925_query',
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
                  dataKey: '0925_body.bandWidth',
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
                  dataKey: '0925_body.lineType',
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
                  dataKey: '0925_body.productId',
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
                  dataKey: '0925_body.status',
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
                  dataKey: '0925_body.transferMode',
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
                  dataKey: '0925_body.catalogCode',
                  value: { type: ['context', '$state.catalogCode$'], code: '' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '0925_body',
            },
          ],
        },
        line_number: 8,
        callback1: [
          {
            type: 'ifelse',
            condition: [
              {
                condId: '487137',
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$reply_73817517.resultCode$',
                  operate: '==',
                  manualValue: '0',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
              {
                options: {
                  context: '$reply_73817517?.resultData?.groupLineRateInfo$',
                  operate: 'notEmpty',
                },
                condId: '202022',
                connector: '&&',
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 167704821758461500,
            elseIfs: [],
            line_number: 9,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 167704821758452540,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '6209583',
                  pageJsonId: '8430824',
                  actionTitle: '筛选数据',
                  code: 'function main(data,state,success,fail){var groupLineRateInfos=reply_73817517.resultData.groupLineRateInfo;var returnList=[];var bandWidthList=[];for(var i=0;i<groupLineRateInfos.length;++i){var groupLineRateInfo=groupLineRateInfos[i];if(groupLineRateInfo.productId!="3512"||returnList.indexOf(groupLineRateInfo.bandWidth)!=-1){continue}returnList.push(groupLineRateInfo.bandWidth);bandWidthList.push(groupLineRateInfo)}console.log("\\u7B5B\\u9009\\u540E\\u6570\\u636E",bandWidthList);for(var _i=0;_i<bandWidthList.length;++_i){for(var j=_i+1;j<bandWidthList.length;++j){var bandWidthCompara=-1;if(bandWidthList[j].bandWidthName.indexOf("M")!=-1){bandWidthCompara=parseFloat(bandWidthList[j].bandWidthName.split("M")[0])}else if(bandWidthList[j].bandWidthName.indexOf("G")!=-1){bandWidthCompara=parseFloat(bandWidthList[j].bandWidthName.split("G")[0])*1024}var bandWidth=-1;if(bandWidthList[_i].bandWidthName.indexOf("M")!=-1){bandWidth=parseFloat(bandWidthList[_i].bandWidthName.split("M")[0])}else if(bandWidthList[_i].bandWidthName.indexOf("G")!=-1){bandWidth=parseFloat(bandWidthList[_i].bandWidthName.split("G")[0])*1024}if(bandWidth>bandWidthCompara){var temp=bandWidthList[_i];bandWidthList[_i]=bandWidthList[j];bandWidthList[j]=temp}}}console.log("\\u6392\\u5E8F\\u540E\\u6570\\u636E",bandWidthList);success(bandWidthList)};',
                },
                line_number: 10,
                callback1: [
                  {
                    type: 'setDataSource',
                    dataId: 167704821758416160,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '414665',
                      pageJsonId: '8430824',
                      dataSourceId: 167342758264388260,
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
                              exampleValue: '37',
                              defaultValue: '',
                              name: '属性',
                              attrId: '882157',
                              initialData: { type: 'static', value: '37' },
                              parentKey: 'groupLineRateInfo',
                              parentType: 'objectArray',
                              parentCode: 'groupLineRateInfo',
                            },
                            {
                              code: 'configTime',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '20160504085323',
                              defaultValue: '',
                              name: '属性',
                              attrId: '743968',
                              initialData: {
                                type: 'static',
                                value: '20160504085323',
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
                              attrId: '9359215',
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
                              exampleValue: '3512',
                              defaultValue: '',
                              name: '属性',
                              attrId: '526199',
                              initialData: { type: 'static', value: '3512' },
                              parentKey: 'groupLineRateInfo',
                              parentType: 'objectArray',
                              parentCode: 'groupLineRateInfo',
                            },
                            {
                              code: 'linePrice',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '3350000',
                              defaultValue: '',
                              name: '属性',
                              attrId: '773332',
                              initialData: { type: 'static', value: '3350000' },
                              parentKey: 'groupLineRateInfo',
                              parentType: 'objectArray',
                              parentCode: 'groupLineRateInfo',
                            },
                            {
                              code: 'ipAmount',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '2',
                              defaultValue: '',
                              name: '属性',
                              attrId: '546556',
                              initialData: { type: 'static', value: '2' },
                              parentKey: 'groupLineRateInfo',
                              parentType: 'objectArray',
                              parentCode: 'groupLineRateInfo',
                            },
                            {
                              code: 'ipPrice',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '50000',
                              defaultValue: '',
                              name: '属性',
                              attrId: '65107',
                              initialData: { type: 'static', value: '50000' },
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
                              attrId: '231987',
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
                              exampleValue: '20',
                              defaultValue: '',
                              name: '属性',
                              attrId: '113902',
                              initialData: { type: 'static', value: '20' },
                              parentKey: 'groupLineRateInfo',
                              parentType: 'objectArray',
                              parentCode: 'groupLineRateInfo',
                            },
                            {
                              code: 'configOperator',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '9990967',
                              defaultValue: '',
                              name: '属性',
                              attrId: '222171',
                              initialData: { type: 'static', value: '9990967' },
                              parentKey: 'groupLineRateInfo',
                              parentType: 'objectArray',
                              parentCode: 'groupLineRateInfo',
                            },
                            {
                              code: 'transferModeName',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: 'PTN',
                              defaultValue: '',
                              name: '属性',
                              attrId: '0574043',
                              initialData: { type: 'static', value: 'PTN' },
                              parentKey: 'groupLineRateInfo',
                              parentType: 'objectArray',
                              parentCode: 'groupLineRateInfo',
                            },
                            {
                              code: 'bandWidthName',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '16M',
                              defaultValue: '',
                              name: '属性',
                              attrId: '6576144',
                              initialData: { type: 'static', value: '16M' },
                              parentKey: 'groupLineRateInfo',
                              parentType: 'objectArray',
                              parentCode: 'groupLineRateInfo',
                            },
                            {
                              code: 'ipv6Price',
                              attrType: 'field',
                              type: 'object',
                              mustFlag: 'F',
                              defaultValue: '',
                              name: '属性',
                              attrId: '224912',
                              initialData: { type: 'static' },
                              parentKey: 'groupLineRateInfo',
                              parentType: 'objectArray',
                              parentCode: 'groupLineRateInfo',
                            },
                            {
                              code: 'ipv6Amount',
                              attrType: 'field',
                              type: 'object',
                              mustFlag: 'F',
                              defaultValue: '',
                              name: '属性',
                              attrId: '088653',
                              initialData: { type: 'static' },
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
                              attrId: '1538245',
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
                              exampleValue: '6',
                              defaultValue: '',
                              name: '属性',
                              attrId: '3844003',
                              initialData: { type: 'static', value: '6' },
                              parentKey: 'groupLineRateInfo',
                              parentType: 'objectArray',
                              parentCode: 'groupLineRateInfo',
                            },
                            {
                              code: 'name',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '集团互联网专线',
                              defaultValue: '',
                              name: '属性',
                              attrId: '8175264',
                              initialData: {
                                type: 'static',
                                value: '集团互联网专线',
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
                              attrId: '918615',
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
                              attrId: '57685085',
                              initialData: { type: 'static', value: '0' },
                              parentKey: 'groupLineRateInfo',
                              parentType: 'objectArray',
                              parentCode: 'groupLineRateInfo',
                            },
                          ],
                          name: '',
                          type: 'objectArray',
                          attrId: '8399509',
                          initialData: { type: 'static' },
                          parentKey: '1',
                          parentType: 'object',
                          value: {
                            type: ['context', '$data_6209583$'],
                            code: '',
                          },
                        },
                      ],
                      operateType: 1,
                      onlySetPatch: true,
                      otherObjectArrayOptions: {},
                    },
                    line_number: 11,
                    callback1: [],
                    callback2: [],
                  },
                  {
                    type: 'reloadSelectData',
                    dataId: 167704912876774080,
                    options: {
                      compId: 'Select_678262',
                      compLib: 'comm',
                      pageJsonId: '331315',
                      compName: 'Select',
                      id: '8840067',
                      labelKey: 'bandWidthName',
                      data: '$data_6209583$',
                      valueKey: 'bandWidth',
                    },
                    line_number: 12,
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
    eventDataapiRequest452.params = [] || [];
    CMDGenerator(eventDataapiRequest452, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse239: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '778263',
            options: { context: '$state.feeInfo$', operate: 'notEmpty' },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 167711736493383100,
        elseIfs: [],
        line_number: 13,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 167711737866207900,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '881228',
              pageJsonId: '331315',
              dataSourceId: 167704743785219200,
              dataSourceName: 'feeInfo',
              dataSourceRelType: 'custom',
              dataSourceReloadFilter: [],
              dataSourceSetValue: [
                {
                  attrId: '340834',
                  code: 'orderType',
                  name: '类型',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'orderType',
                  },
                },
                {
                  attrId: '7104156',
                  code: 'orderTypeName',
                  name: '类型',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'orderTypeName',
                  },
                },
                {
                  attrId: '63463',
                  code: 'busiType',
                  name: '业务类型',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'busiType',
                  },
                },
                {
                  attrId: '476451',
                  code: 'busiTypeName',
                  name: '业务类型',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'busiTypeName',
                  },
                },
                {
                  attrId: '232827',
                  code: 'bandWidth',
                  name: '带宽',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'bandWidth',
                  },
                },
                {
                  attrId: '0368124',
                  code: 'bandWidthName',
                  name: '带宽',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'bandWidthName',
                  },
                },
                {
                  attrId: '314801',
                  code: 'testMonth',
                  name: '测试月数',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'testMonth',
                  },
                },
                {
                  attrId: '076694',
                  code: 'testMonthName',
                  name: '测试月数',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'testMonthName',
                  },
                },
                {
                  attrId: '796214',
                  code: 'total',
                  name: '条数',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'total',
                  },
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
            },
            line_number: 14,
            callback1: [],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse239.params = [] || [];
    CMDGenerator(eventDataifelse239, {}, 'ifelse', {
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
      className="__CustomClass_331315__"
    >
      <View
        className="View_View_331315_1"
        name={'页面'}
        $$componentItem={{
          id: 'View_331315_1',
          uid: 'View_331315_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_331315_1')}
        {...injectData}
      >
        <View
          className="View_View_917911_4397725"
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_917911_4397725',
            uid: 'View_917911_4397725',
            type: 'View',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '12px 12px 12px 12px',
            width: '100%',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_917911_4397725')}
          {...injectData}
        >
          <Form
            name={'互联网专线业务测试月数'}
            colSpan={12}
            labelCol={'6'}
            wrapperCol={'18'}
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
              id: 'Form_981467_101628',
              uid: 'Form_981467_101628',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '12px 12px 12px 12px' }}
            onValuesChange={() => {
              const eventDatasetDataSource198: any = [
                {
                  type: 'setDataSource',
                  dataId: 167704755021107420,
                  options: {
                    compId: 'page',
                    compName: 'page',
                    id: '9971625',
                    pageJsonId: '331315',
                    dataSourceId: 167704743785219200,
                    dataSourceName: 'feeInfo',
                    dataSourceRelType: 'custom',
                    dataSourceReloadFilter: [],
                    dataSourceSetValue: [
                      {
                        attrId: '340834',
                        code: 'orderType',
                        name: '类型',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '7104156',
                        code: 'orderTypeName',
                        name: '类型',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '63463',
                        code: 'busiType',
                        name: '业务类型',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '476451',
                        code: 'busiTypeName',
                        name: '业务类型',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '232827',
                        code: 'bandWidth',
                        name: '带宽',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '0368124',
                        code: 'bandWidthName',
                        name: '带宽',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '314801',
                        code: 'testMonth',
                        name: '测试月数',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '076694',
                        code: 'testMonthName',
                        name: '测试月数',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                    ],
                    onlySetPatch: true,
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatasetDataSource198.params = [] || [];
              CMDGenerator(eventDatasetDataSource198, {}, 'setDataSource', {
                id: 'setDataSource',
                name: 'setDataSource',
                type: 'setDataSource',
                platform: 'pc',
              });
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_981467_101628')}
            {...injectData}
          >
            <Select
              name={'类型'}
              size={'default'}
              selfSpan={12}
              labelCol={6}
              wrapperCol={18}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              filter={'none'}
              classification={'default'}
              attr={{}}
              placeholder={'请选择'}
              fieldName={'orderType'}
              value={data?.feeInfo?.orderType}
              formItemIndex={0}
              $$componentItem={{
                id: 'Input_busiType_956176_60737',
                uid: 'Input_busiType_956176_60737',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              style={{ flex: 0 }}
              onChange={(e: any) => {}}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_busiType_956176_60737')
              }
              {...injectData}
            />
            <Select
              name={'带宽'}
              size={'default'}
              selfSpan={12}
              labelCol={6}
              wrapperCol={18}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              filter={'none'}
              classification={'default'}
              attr={{}}
              placeholder={'请选择'}
              formItemIndex={1}
              fieldName={'bandWidth'}
              value={data?.feeInfo?.bandWidth}
              $$componentItem={{
                id: 'Select_678262',
                uid: 'Select_678262',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Select_678262')}
              {...injectData}
            />
            <Select
              name={'流程类型'}
              size={'default'}
              selfSpan={12}
              labelCol={6}
              wrapperCol={18}
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
              formItemIndex={2}
              $$componentItem={{
                id: 'Input_busiType_956176_744788',
                uid: 'Input_busiType_956176_744788',
                type: 'Select',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {}}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_busiType_956176_744788')
              }
              {...injectData}
            />
            <Select
              name={'测试月数'}
              size={'default'}
              selfSpan={12}
              labelCol={6}
              wrapperCol={18}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              filter={'none'}
              classification={'default'}
              attr={{}}
              placeholder={'请选择'}
              formItemIndex={3}
              fieldName={'testMonth'}
              value={data?.feeInfo?.testMonth}
              $$componentItem={{
                id: 'Select_185407',
                uid: 'Select_185407',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Select_185407')}
              {...injectData}
            />
            <Input
              name={'条数'}
              size={'default'}
              selfSpan={12}
              labelCol={6}
              wrapperCol={18}
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
              fieldName={'total'}
              value={data?.feeInfo?.total}
              regexp={[
                {
                  id: '508082',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 1,
                  message: '请输入整数格式',
                  pattern: '/^[-+]?\\d*$/',
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
                id: 'Input_253028',
                uid: 'Input_253028',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_253028')}
              {...injectData}
            />
          </Form>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(LineTestMonthAudit$$Modal, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {
    bizId: '',
    sceneCode: '',
    popType: '',
    feeInfo: '',
    catalogCode: '',
  },
});
