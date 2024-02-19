// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import { Form, Input, Select, View } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const BusinessLineTestMonthAudit$$Modal: React.FC<PageProps> = ({
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
    const eventDatavalidateCurrentForm53: any = [
      {
        type: 'validateCurrentForm',
        dataId: 167713528959003900,
        options: {
          compId: 'Form_981467_101628_1892784',
          compLib: 'comm',
          pageJsonId: '331315',
          compName: 'Form',
          id: '065078',
        },
        line_number: 1,
        callback1: [
          {
            type: 'getSelectedData',
            dataId: 167713530160808260,
            options: {
              compId: 'Input_busiType_956176_60737_204849',
              compLib: 'comm',
              pageJsonId: '331315',
              compName: 'Select',
              id: '6448693',
            },
            line_number: 2,
            callback1: [
              {
                type: 'getSelectedData',
                dataId: 167713530498757220,
                options: {
                  compId: 'Input_busiType_956176_744788_490953',
                  compLib: 'comm',
                  pageJsonId: '331315',
                  compName: 'Select',
                  id: '2453872',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'getSelectedData',
                    dataId: 167713530729743000,
                    options: {
                      compId: 'Select_900112',
                      compLib: 'comm',
                      pageJsonId: '331315',
                      compName: 'Select',
                      id: '7467033',
                    },
                    line_number: 4,
                    callback1: [
                      {
                        type: 'getSelectedData',
                        dataId: 167713531005484860,
                        options: {
                          compId: 'Select_6151846',
                          compLib: 'comm',
                          pageJsonId: '331315',
                          compName: 'Select',
                          id: '9687233',
                        },
                        line_number: 5,
                        callback1: [
                          {
                            type: 'getSelectedData',
                            dataId: 167713531362325800,
                            options: {
                              compId: 'Select_185407_688294',
                              compLib: 'comm',
                              pageJsonId: '331315',
                              compName: 'Select',
                              id: '6542247',
                            },
                            line_number: 6,
                            callback1: [
                              {
                                type: 'customActionCode',
                                dataId: 167713531737711460,
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '721368',
                                  pageJsonId: '331315',
                                  code: 'function main(data,state,success,fail){if(state.feeInfo==undefined||state.feeInfo==null){var min=0;var max=10000;var rowId=Math.round(Math.random()*(max-min))+min;data.feeInfo.rowId=rowId}else{data.feeInfo.rowId=state.feeInfo.rowId}data.feeInfo.orderType=selectedData_6448693[0].value;data.feeInfo.orderTypeName=selectedData_6448693[0].label;data.feeInfo.busiType=selectedData_2453872[0].value;data.feeInfo.busiTypeName=selectedData_2453872[0].label;data.feeInfo.bandWidthUp=selectedData_7467033[0].value;data.feeInfo.bandWidthUpName=selectedData_7467033[0].label;data.feeInfo.testMonth=selectedData_6542247[0].value;data.feeInfo.testMonthName=selectedData_6542247[0].label;data.feeInfo.bandWidthDown=selectedData_9687233[0].value;data.feeInfo.bandWidthDownName=selectedData_9687233[0].label;data.feeInfo.total=Form_981467_101628_1892784.total;success()};',
                                },
                                line_number: 7,
                                callback1: [
                                  {
                                    type: 'okCallbackData',
                                    dataId: 167713546618144060,
                                    options: {
                                      compId: 'okCallbackData',
                                      compName: 'page',
                                      id: '7134946',
                                      pageJsonId: '331315',
                                      params: '$data.feeInfo$',
                                    },
                                    line_number: 8,
                                  },
                                  {
                                    type: 'closeModal',
                                    dataId: 167713548041783740,
                                    options: {
                                      compId: 'closeModal',
                                      compName: 'page',
                                      id: '08809564',
                                      pageJsonId: '331315',
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
    eventDatavalidateCurrentForm53.params = [] || [];
    CMDGenerator(eventDatavalidateCurrentForm53, {}, 'validateCurrentForm', {
      id: 'validateCurrentForm',
      name: 'validateCurrentForm',
      type: 'validateCurrentForm',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal66: any = [
      {
        type: 'closeModal',
        dataId: '09753944_1',
        options: { compId: 'page', compName: 'page', id: '254262' },
        line_number: 1,
      },
    ];
    eventDatacloseModal66.params = [] || [];
    CMDGenerator(eventDatacloseModal66, {}, 'closeModal', {
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
    const eventDataapiRequest445: any = [
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
          actionTitle: '业务类型',
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 167713500620105250,
            options: {
              compId: 'Input_busiType_956176_744788_490953',
              compLib: 'comm',
              pageJsonId: '331315',
              compName: 'Select',
              id: '602509',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
              data: '$reply_9969086?.resultData$',
            },
            line_number: 2,
            callback1: [
              {
                type: 'setValue',
                dataId: 167713502453937900,
                options: {
                  compId: 'Input_busiType_956176_744788_490953',
                  compLib: 'comm',
                  pageJsonId: '331315',
                  compName: 'Select',
                  id: '926692',
                  valueList: { Input_busiType_956176_744788_490953: '3' },
                },
                line_number: 3,
                callback1: [],
              },
            ],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest445.params = [] || [];
    CMDGenerator(eventDataapiRequest445, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest446: any = [
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
          actionTitle: '类型',
        },
        line_number: 4,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 167713501150252960,
            options: {
              compId: 'Input_busiType_956176_60737_204849',
              compLib: 'comm',
              pageJsonId: '331315',
              compName: 'Select',
              id: '786546',
              data: '$reply_7838552?.resultData$',
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
    eventDataapiRequest446.params = [] || [];
    CMDGenerator(eventDataapiRequest446, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest447: any = [
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
            dataId: 167713479416636200,
            options: {
              compId: 'Select_185407_688294',
              compLib: 'comm',
              pageJsonId: '331315',
              compName: 'Select',
              id: '544799',
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
    eventDataapiRequest447.params = [] || [];
    CMDGenerator(eventDataapiRequest447, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse238: any = [
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
        dataId: 167712504506682140,
        elseIfs: [],
        line_number: 8,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 167712504506617860,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '6515954',
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
                  code: 'bandWidthUp',
                  name: '上行带宽',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'bandWidthUp',
                  },
                },
                {
                  attrId: '0368124',
                  code: 'bandWidthUpName',
                  name: '上行带宽',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'bandWidthUpName',
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
                  attrId: '2326535',
                  code: 'bandWidthDown',
                  name: '下行带宽',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'bandWidthDown',
                  },
                },
                {
                  attrId: '698397',
                  code: 'bandWidthDownName',
                  name: '下行带宽',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$state.feeInfo$'],
                    code: 'bandWidthDownName',
                  },
                },
                {
                  attrId: '169678',
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
            line_number: 9,
            callback1: [],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse238.params = [] || [];
    CMDGenerator(eventDataifelse238, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDataapiRequest448: any = [
      {
        type: 'apiRequest',
        dataId: 167712504042010900,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '368436',
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
          actionTitle: '渲染上行带宽、保存上下行带宽数组',
        },
        line_number: 10,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 167712504042070400,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '4446353',
              pageJsonId: '8430824',
              actionTitle: '',
              code: 'function main(data,state,success,fail){var groupLineRateList=reply_368436.resultData.groupLineRateInfo;var bandWidthUpList=[];var bandWidthDownList=[];console.log("\\u4E13\\u7EBF\\u56DE\\u67E5",groupLineRateList);var _loop=function _loop(i){var groupLineRateInfo=groupLineRateList[i];if(groupLineRateInfo.productId!=3367){return"continue"}if(!bandWidthUpList.some(function(item){return item.bandWidth===groupLineRateInfo.bandWidth})){bandWidthUpList.push({bandWidth:groupLineRateInfo.bandWidth,bandWidthName:groupLineRateInfo.bandWidthName});var _loop2=function _loop2(_j2){if(groupLineRateList[_j2].bandWidth!==groupLineRateInfo.bandWidth){return"continue"}if(groupLineRateList[_j2].bandWidthDown&&!bandWidthDownList.some(function(item){return item.bandWidth===groupLineRateList[_j2].bandWidth&&item.bandWidthDown===groupLineRateList[_j2].bandWidthDown})){bandWidthDownList.push({bandWidth:groupLineRateList[_j2].bandWidth,bandWidthName:groupLineRateList[_j2].bandWidthName,bandWidthDown:groupLineRateList[_j2].bandWidthDown,bandWidthDownName:groupLineRateList[_j2].bandWidthDownName,lineRateInfo:groupLineRateList[_j2]})}};for(var _j2=0;_j2<groupLineRateList.length;++_j2){var _ret2=_loop2(_j2);if(_ret2==="continue")continue}}};for(var i=0;i<groupLineRateList.length;++i){var _ret=_loop(i);if(_ret==="continue")continue}for(var _i=0;_i<bandWidthUpList.length;++_i){for(var j=_i+1;j<bandWidthUpList.length;++j){var bandWidthCompara=-1;if(bandWidthUpList[j].bandWidthName.indexOf("M")!=-1){bandWidthCompara=parseFloat(bandWidthUpList[j].bandWidthName.split("M")[0])}else if(bandWidthUpList[j].bandWidthName.indexOf("G")!=-1){bandWidthCompara=parseFloat(bandWidthUpList[j].bandWidthName.split("G")[0])*1024}var bandWidth=-1;if(bandWidthUpList[_i].bandWidthName.indexOf("M")!=-1){bandWidth=parseFloat(bandWidthUpList[_i].bandWidthName.split("M")[0])}else if(bandWidthUpList[_i].bandWidthName.indexOf("G")!=-1){bandWidth=parseFloat(bandWidthUpList[_i].bandWidthName.split("G")[0])*1024}if(bandWidth>bandWidthCompara){var temp=bandWidthUpList[_i];bandWidthUpList[_i]=bandWidthUpList[j];bandWidthUpList[j]=temp}}}for(var _i2=0;_i2<bandWidthDownList.length;++_i2){for(var _j=_i2+1;_j<bandWidthDownList.length;++_j){var _bandWidthCompara=-1;if(bandWidthDownList[_j].bandWidthDownName.indexOf("M")!=-1){_bandWidthCompara=parseFloat(bandWidthDownList[_j].bandWidthDownName.split("M")[0])}else if(bandWidthDownList[_j].bandWidthDownName.indexOf("G")!=-1){_bandWidthCompara=parseFloat(bandWidthDownList[_j].bandWidthDownName.split("G")[0])*1024}var _bandWidth=-1;if(bandWidthDownList[_i2].bandWidthDownName.indexOf("M")!=-1){_bandWidth=parseFloat(bandWidthDownList[_i2].bandWidthDownName.split("M")[0])}else if(bandWidthDownList[_i2].bandWidthDownName.indexOf("G")!=-1){_bandWidth=parseFloat(bandWidthDownList[_i2].bandWidthDownName.split("G")[0])*1024}if(_bandWidth>_bandWidthCompara){var temp=bandWidthDownList[_i2];bandWidthDownList[_i2]=bandWidthDownList[_j];bandWidthDownList[_j]=temp}}}console.log("\\u7EC4\\u88C5\\u540E\\u7684\\u4E0A\\u884C\\u5E26\\u5BBD\\u6570\\u7EC4",bandWidthUpList);console.log("\\u7EC4\\u88C5\\u540E\\u7684\\u4E0B\\u884C\\u5E26\\u5BBD\\u6570\\u7EC4",bandWidthDownList);success({bandWidthUpList:bandWidthUpList,bandWidthDownList:bandWidthDownList})};',
            },
            line_number: 11,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 167712504042091600,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '9562046',
                  pageJsonId: '8430824',
                  dataSourceId: 167712489752115970,
                  dataSourceName: 'bandWidthUpList',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '3601735',
                      code: 'bandWidth',
                      name: '上行带宽值',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '948743',
                      code: 'bandWidthName',
                      name: '上行带宽名称',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                  ],
                  newData: '$data_4446353.bandWidthUpList$',
                  operateType: 3,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 12,
                callback1: [
                  {
                    type: 'reloadSelectData',
                    dataId: 167713400374622340,
                    options: {
                      compId: 'Select_900112',
                      compLib: 'comm',
                      pageJsonId: '331315',
                      compName: 'Select',
                      id: '091019',
                      data: '$data_4446353.bandWidthUpList$',
                      labelKey: 'bandWidthName',
                      valueKey: 'bandWidth',
                    },
                    line_number: 13,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '3488367',
                            options: {
                              context: '$state.feeInfo$',
                              operate: 'notEmpty',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 169018894790006850,
                        elseIfs: [],
                        line_number: 14,
                        callback1: [
                          {
                            type: 'customActionCode',
                            dataId: 169018894792767000,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '331809',
                              pageJsonId: '8430824',
                              code: 'function main(data,state,success,fail){var bandWidth=state.feeInfo.bandwidthUp;var bandWidthDownList=data.bandWidthDownList;var successData=[];for(var i=0;i<bandWidthDownList.length;++i){if(bandWidth===bandWidthDownList[i].bandWidth){successData.push(bandWidthDownList[i])}}success({bandWidthDownList:successData})};',
                            },
                            line_number: 15,
                            callback1: [
                              {
                                type: 'reloadSelectData',
                                dataId: 169018896692717250,
                                options: {
                                  compId: 'Select_6151846',
                                  compLib: 'comm',
                                  pageJsonId: '331315',
                                  compName: 'Select',
                                  id: '9676508',
                                  labelKey: 'bandWidthDownName',
                                  valueKey: 'bandWidthDown',
                                  data: '$data_4446353.bandWidthDownList$',
                                },
                                line_number: 16,
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
                callback2: [],
              },
              {
                type: 'setDataSource',
                dataId: 167712504042075300,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '429787',
                  pageJsonId: '8430824',
                  dataSourceId: 167712494557333000,
                  dataSourceName: 'bandWidthDownList',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '280991',
                      code: 'bandWidth',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '93804',
                      code: 'bandWidthName',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '689414',
                      code: 'lineRateInfo',
                      name: '属性',
                      type: 'object',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '414',
                      code: 'bandWidthDown',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '9605921',
                      code: 'bandWidthDownName',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                  ],
                  newData: '$data_4446353.bandWidthDownList$',
                  operateType: 3,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 17,
                callback1: [],
                callback2: [],
              },
            ],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest448.params = [] || [];
    CMDGenerator(eventDataapiRequest448, {}, 'apiRequest', {
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
      className="__CustomClass_331315__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_331315_1_933577',
          uid: 'View_331315_1_933577',
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
        ref={(r: any) => (refs['View_331315_1_933577'] = r)}
        {...injectData}
      >
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_917911_4397725_6306315',
            uid: 'View_917911_4397725_6306315',
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
          ref={(r: any) => (refs['View_917911_4397725_6306315'] = r)}
          {...injectData}
        >
          <Form
            name={'互联网专线业务测试月数'}
            colSpan={12}
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
              id: 'Form_981467_101628_1892784',
              uid: 'Form_981467_101628_1892784',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '12px 12px 12px 12px' }}
            onValuesChange={() => {
              const eventDatasetDataSource197: any = [
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
                        code: 'bandWidthUp',
                        name: '上行带宽',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '0368124',
                        code: 'bandWidthUpName',
                        name: '上行带宽',
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
                      {
                        attrId: '2326535',
                        code: 'bandWidthDown',
                        name: '下行带宽',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '698397',
                        code: 'bandWidthDownName',
                        name: '下行带宽',
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
              eventDatasetDataSource197.params = [] || [];
              CMDGenerator(eventDatasetDataSource197, {}, 'setDataSource', {
                id: 'setDataSource',
                name: 'setDataSource',
                type: 'setDataSource',
                platform: 'pc',
              });
            }}
            ref={(r: any) => (refs['Form_981467_101628_1892784'] = r)}
            {...injectData}
          >
            <Select
              name={'类型'}
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
              fieldName={'orderType'}
              value={data?.feeInfo?.orderType}
              formItemIndex={0}
              $$componentItem={{
                id: 'Input_busiType_956176_60737_204849',
                uid: 'Input_busiType_956176_60737_204849',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              style={{ flex: 0 }}
              onChange={(e: any) => {}}
              ref={(r: any) => (refs['Input_busiType_956176_60737_204849'] = r)}
              {...injectData}
            />
            <Select
              name={'流程类型'}
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
              fieldName={'busiType'}
              value={data?.feeInfo?.busiType}
              formItemIndex={1}
              $$componentItem={{
                id: 'Input_busiType_956176_744788_490953',
                uid: 'Input_busiType_956176_744788_490953',
                type: 'Select',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {}}
              ref={(r: any) =>
                (refs['Input_busiType_956176_744788_490953'] = r)
              }
              {...injectData}
            />
            <Select
              name={'上行带宽'}
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
              formItemIndex={2}
              fieldName={'bandWidthUp'}
              value={data?.feeInfo?.bandWidthUp}
              $$componentItem={{
                id: 'Select_900112',
                uid: 'Select_900112',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatagetSelectedData375: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 167713440504383520,
                    options: {
                      compId: 'Select_900112',
                      compLib: 'comm',
                      pageJsonId: '331315',
                      compName: 'Select',
                      id: '644412',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'setDataSource',
                        dataId: 167713441154559600,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '210398',
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
                              code: 'bandWidthUp',
                              name: '上行带宽',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['context', '$selectedData_644412[0]$'],
                                code: 'v',
                              },
                            },
                            {
                              attrId: '0368124',
                              code: 'bandWidthUpName',
                              name: '上行带宽',
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
                            {
                              attrId: '2326535',
                              code: 'bandWidthDown',
                              name: '下行带宽',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '698397',
                              code: 'bandWidthDownName',
                              name: '下行带宽',
                              type: 'string',
                              initialData: { type: 'static' },
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
                        type: 'console',
                        dataId: 167713443397489020,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '525644',
                          pageJsonId: '331315',
                          value: ['$selectedData_644412[0]$'],
                        },
                        line_number: 3,
                      },
                      {
                        type: 'customActionCode',
                        dataId: 167713514938453470,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '2637707',
                          pageJsonId: '331315',
                          code: 'function main(data,state,success,fail){var bandWidth=selectedData_644412[0].value;var bandWidthDownList=data.bandWidthDownList;var successData=[];for(var i=0;i<bandWidthDownList.length;++i){if(bandWidth===bandWidthDownList[i].bandWidth){successData.push(bandWidthDownList[i])}}success({bandWidthDownList:successData})};',
                        },
                        line_number: 4,
                        callback1: [
                          {
                            type: 'reloadSelectData',
                            dataId: 167713518814709060,
                            options: {
                              compId: 'Select_6151846',
                              compLib: 'comm',
                              pageJsonId: '331315',
                              compName: 'Select',
                              id: '410054',
                              data: '$data_2637707.bandWidthDownList$',
                              labelKey: 'bandWidthDownName',
                              valueKey: 'bandWidthDown',
                            },
                            line_number: 5,
                            callback1: [],
                          },
                        ],
                        callback2: [],
                      },
                      {
                        type: 'clearValue',
                        dataId: 167713524427917200,
                        options: {
                          compId: 'Select_6151846',
                          compLib: 'comm',
                          pageJsonId: '331315',
                          compName: 'Select',
                          id: '9013617',
                        },
                        line_number: 6,
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetSelectedData375.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData375,
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
              ref={(r: any) => (refs['Select_900112'] = r)}
              {...injectData}
            />
            <Select
              name={'下行带宽'}
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
              formItemIndex={3}
              fieldName={'bandWidthDown'}
              value={data?.feeInfo?.bandWidthDown}
              $$componentItem={{
                id: 'Select_6151846',
                uid: 'Select_6151846',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Select_6151846'] = r)}
              {...injectData}
            />
            <Select
              name={'测试月数'}
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
              formItemIndex={4}
              fieldName={'testMonth'}
              value={data?.feeInfo?.testMonth}
              $$componentItem={{
                id: 'Select_185407_688294',
                uid: 'Select_185407_688294',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Select_185407_688294'] = r)}
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
              postfix={''}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              formItemIndex={5}
              fieldName={'total'}
              value={data?.feeInfo?.total}
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
                id: 'Input_7174106',
                uid: 'Input_7174106',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_7174106'] = r)}
              {...injectData}
            />
          </Form>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(BusinessLineTestMonthAudit$$Modal, {
  pageId: '945891495037997056',
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
