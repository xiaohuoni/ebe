// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import {
  Button,
  Checkbox,
  DatePicker,
  Divider,
  Form,
  HorizontalView,
  Input,
  Row,
  Select,
  StdUpload,
  Table,
  Text,
  TextArea,
  View,
} from '@/components/factory';

import BusiComp0521965 from '@/components/BusiComp0521965';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const ClsCp_0011_0001$$Page: React.FC<PageProps> = ({
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
}) => {
  const fileUpload = (options_6628063: any) => {
    const eventDatacustomActionCode145: any = [
      {
        type: 'customActionCode',
        dataId: 167288452449889800,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '697295',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=options_6628063;success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'callParentCustomFunc',
            dataId: 167288453527458050,
            options: {
              compId: 'callParentCustomFunc',
              compName: 'system',
              id: '593748',
              pageJsonId: '537892',
              pathname: '/commonAuditOrder',
              pageId: '872682457815691264',
              customFuncName: 'getFactor',
              customFuncParams: '$data.sceneSubmit$',
            },
            line_number: 2,
            callback1: [],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode145.params =
      [
        {
          title: '事件入参',
          name: 'options_6628063',
          value: '$options_6628063$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode145,
      { options_6628063 },
      'customActionCode',
      {
        id: 'customActionCode',
        name: 'customActionCode',
        type: 'customActionCode',
        platform: 'undefined',
      },
    );
  };
  const calFirstDiscount = (options_624553: any) => {
    const eventDatagetValue81: any = [
      {
        type: 'getValue',
        dataId: 167342610403220350,
        options: {
          compId: 'Input_functionFee_084104',
          compLib: 'comm',
          pageJsonId: '537892',
          compName: 'Input',
          id: '778621',
        },
        line_number: 1,
        callback1: [
          {
            type: 'getValue',
            dataId: 167342610812025000,
            options: {
              compId: 'Input_firstDiscountFunctionFee_006047',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Input',
              id: '432697',
            },
            line_number: 2,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '479991',
                    options: { context: '$value_432697$', operate: 'notEmpty' },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                  {
                    options: { context: '$value_778621$', operate: 'notEmpty' },
                    condId: '355622',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 167342611031526500,
                elseIfs: [],
                line_number: 3,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 167342614406237470,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '178512',
                      pageJsonId: '537892',
                      code: 'function main(data,state,success,fail){var toFixed=function toFixed(number,n){if(n>20||n<0){throw new RangeError("toFixed() digits argument must be between 0 and 20")}if(isNaN(number)||number>=Math.pow(10,21)){return number.toString()}if(typeof n=="undefined"||n==0){return Math.round(number).toString()}var result=number.toString();var arr=result.split(".");if(arr.length<2){result+=".";for(var i=0;i<n;i+=1){result+="0"}return result}var integer=arr[0];var decimal=arr[1];if(decimal.length==n){return result}if(decimal.length<n){for(var _i=0;_i<n-decimal.length;_i+=1){result+="0"}return result}result=integer+"."+decimal.substr(0,n);var last=decimal.substr(n,1);if(parseInt(last,10)>=5){var x=Math.pow(10,n);result=(Math.round(parseFloat(result)*x)+1)/x;result=result.toFixed(n)}return result};var firstDiscount=toFixed(value_432697/value_778621,3);success(firstDiscount)};',
                    },
                    line_number: 4,
                    callback1: [
                      {
                        type: 'sysSetValue',
                        dataId: 167342629597516480,
                        options: {
                          compId: ['Input_firstDiscount_302737'],
                          compName: 'page',
                          id: '813819',
                          pageJsonId: '537892',
                          compid: ['Input_firstDiscount_302737'],
                          valueList: {
                            Input_firstDiscount_302737: '$data_178512$',
                          },
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
    eventDatagetValue81.params =
      [
        {
          title: '事件入参',
          name: 'options_624553',
          value: '$options_624553$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue81, { options_624553 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };
  const checkData = (options_6365894: any) => {
    const eventDatacustomActionCode146: any = [
      {
        type: 'customActionCode',
        dataId: 168722557505055400,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '645408',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){console.log("asd",data.factorForm);var dirPrice=parseFloat(data.factorForm.dirPrice);if(data.factorForm.firstReducePrice!=undefined&&data.factorForm.secondReducedPrice!=undefined){console.log("\\u4E24\\u6B21\\u90FD\\u5B58\\u5728");var firstReducePrice=parseFloat(data.factorForm.firstReducePrice);var secondReducedPrice=parseFloat(data.factorForm.secondReducedPrice);if(firstReducePrice>dirPrice||firstReducePrice<secondReducedPrice||secondReducedPrice>dirPrice){return fail(1)}}if(data.factorForm.firstReducePrice!=undefined&&data.factorForm.secondReducedPrice==undefined){console.log("\\u7B2C\\u4E00\\u6B21\\u5B58\\u5728",firstReducePrice>dirPrice);var firstReducePrice=parseFloat(data.factorForm.firstReducePrice);if(firstReducePrice>dirPrice){return fail(1)}}if(data.factorForm.firstReducePrice==undefined&&data.factorForm.secondReducedPrice!=undefined){console.log("\\u7B2C\\u4E8C\\u6B21\\u5B58\\u5728");var secondReducedPrice=parseFloat(data.factorForm.secondReducedPrice);if(secondReducedPrice>dirPrice){return fail(1)}}success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 168722874910969400,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '915817',
              pageJsonId: '537892',
              dataSourceId: 168690497322361800,
              dataSourceName: 'pageData',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  attrId: '1999901',
                  code: 'isLongTerm',
                  name: '是否长期',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                },
                {
                  attrId: '930958',
                  code: 'checkLable',
                  name: '功能费校验标识',
                  type: 'string',
                  initialData: { type: 'static', value: '1' },
                  showInput: true,
                  value: { type: ['customize'], code: '1' },
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
        callback2: [
          {
            type: 'setDataSource',
            dataId: 168722859758911300,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '213209',
              pageJsonId: '537892',
              dataSourceId: 168690497322361800,
              dataSourceName: 'pageData',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  attrId: '1999901',
                  code: 'isLongTerm',
                  name: '是否长期',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                },
                {
                  attrId: '930958',
                  code: 'checkLable',
                  name: '功能费校验标识',
                  type: 'string',
                  initialData: { type: 'static', value: '1' },
                  showInput: true,
                  value: { type: ['customize'], code: '0' },
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
              targetDataSourcePaths: [],
            },
            line_number: 3,
            callback1: [],
            callback2: [],
          },
        ],
      },
    ];
    eventDatacustomActionCode146.params =
      [
        {
          title: '事件入参',
          name: 'options_6365894',
          value: '$options_6365894$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode146,
      { options_6365894 },
      'customActionCode',
      {
        id: 'customActionCode',
        name: 'customActionCode',
        type: 'customActionCode',
        platform: 'undefined',
      },
    );
  };
  const calculateDiscount = (options_627465: any) => {
    const eventDataifelse50: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '712016',
            options: {
              useManual: true,
              useObject: false,
              context: '$options_627465.type$',
              operate: '==',
              manualValue: '1',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 168723023250520350,
        elseIfs: [],
        line_number: 1,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 168723025295815460,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '473289',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var money=parseFloat(data.factorForm.firstReducePrice);var dirPrice=parseFloat(data.factorForm.dirPrice);var res=money/dirPrice;success(res.toFixed(3)*10)};',
            },
            line_number: 2,
            callback1: [
              {
                type: 'sysSetValue',
                dataId: 168723029109831840,
                options: {
                  compId: ['Select_0018499'],
                  compName: 'page',
                  id: '8034214',
                  pageJsonId: '537892',
                  compid: ['Select_0018499'],
                  valueList: { Select_0018499: '$data_473289$' },
                },
                line_number: 3,
                callback1: [],
              },
              {
                type: 'console',
                dataId: 168723052744880320,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '377067',
                  pageJsonId: '537892',
                  value: ['$data_473289$', '02020202'],
                },
                line_number: 4,
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse50.params =
      [
        {
          title: '事件入参',
          name: 'options_627465',
          value: '$options_627465$',
        },
      ] || [];
    CMDGenerator(eventDataifelse50, { options_627465 }, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDataifelse51: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '712016',
            options: {
              useManual: true,
              useObject: false,
              context: '$options_627465.type$',
              operate: '==',
              manualValue: '2',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 168723033434453100,
        elseIfs: [],
        line_number: 5,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 168723033434462000,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '161519',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var money=parseFloat(data.factorForm.secondReducedPrice);var dirPrice=parseFloat(data.factorForm.dirPrice);var res=money/dirPrice;success(res.toFixed(3)*10)};',
            },
            line_number: 6,
            callback1: [
              {
                type: 'sysSetValue',
                dataId: 168723033434487300,
                options: {
                  compId: ['Input_90081'],
                  compName: 'page',
                  id: '719362',
                  pageJsonId: '537892',
                  compid: ['Input_90081'],
                  valueList: { Input_90081: '$data_161519$' },
                },
                line_number: 7,
                callback1: [],
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse51.params =
      [
        {
          title: '事件入参',
          name: 'options_627465',
          value: '$options_627465$',
        },
      ] || [];
    CMDGenerator(eventDataifelse51, { options_627465 }, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    }); // console 168723046950262100
    console.log(options_627465, '1561516');
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    fileUpload,
    calFirstDiscount,
    checkData,
    calculateDiscount,
  }));

  useEffect(() => {
    const eventDatasetDisable59: any = [
      {
        type: 'setDisable',
        dataId: 167385153600302820,
        options: {
          compId: 'Form_4311097_9385662_302551_716304_5234815_85629_77945',
          compLib: 'comm',
          pageJsonId: '537892',
          compName: 'Form',
          id: '372333',
          disabled: 'true',
        },
        line_number: 1,
      },
    ];
    eventDatasetDisable59.params = [] || [];
    CMDGenerator(eventDatasetDisable59, {}, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDataapiRequest416: any = [
      {
        type: 'apiRequest',
        dataId: 166972679330949760,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '625824',
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
              code: 'header',
              name: '请求头参数',
              attrType: 'object',
              _id: 'header',
              compType: 'Input',
              parents: [],
              id: 'header',
              dataKey: '088178_header',
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
              dataKey: '088178_path',
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
              dataKey: '088178_query',
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
                  dataKey: '088178_body.catalogCode',
                  value: { type: ['customize'], code: '$state.catalogCode$' },
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
                  dataKey: '088178_body.attrCode',
                  value: { type: ['customize'], code: 'attachmentType' },
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-1',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '088178_body',
              key: '3',
            },
          ],
        },
        line_number: 2,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 167385078969082300,
            options: {
              compId:
                'Input_690228_5400337_280164_0694544_38738_7545196_9280921',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '7012046',
              data: '$reply_625824?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 3,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest416.params = [] || [];
    CMDGenerator(eventDataapiRequest416, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    }); // console 168673375461567100
    console.log(state?.catalogCode);
    const eventDataapiRequest417: any = [
      {
        type: 'apiRequest',
        dataId: 167350529072084260,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '4165923',
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
                      dataKey: '4165923_root.body.catalogCode',
                      value: {
                        type: ['customize'],
                        code: '$state.catalogCode$',
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
                      dataKey: '4165923_root.body.attrCode',
                      value: { type: ['customize'], code: 'setMealPackage' },
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
                  dataKey: '4165923_root.body',
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
              dataKey: '4165923_root',
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
            dataId: 167385086638162080,
            options: {
              compId: 'Input_product_7830006',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '82202',
              data: '$reply_4165923?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 6,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest417.params = [] || [];
    CMDGenerator(eventDataapiRequest417, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest418: any = [
      {
        type: 'apiRequest',
        dataId: 167350622547878900,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '443294',
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
                      dataKey: '443294_root.body.catalogCode',
                      value: {
                        type: ['customize'],
                        code: '$state.catalogCode$',
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
                      dataKey: '443294_root.body.attrCode',
                      value: {
                        type: ['customize'],
                        code: 'setMealPackageType',
                      },
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
                  dataKey: '443294_root.body',
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
              dataKey: '443294_root',
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
            dataId: 167385090568805470,
            options: {
              compId: 'Input_handleExperiencePackage_539362',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '8368618',
              data: '$reply_443294?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 8,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest418.params = [] || [];
    CMDGenerator(eventDataapiRequest418, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest419: any = [
      {
        type: 'apiRequest',
        dataId: 168715638813418140,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '896152',
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
                      dataKey: '896152_root.body.catalogCode',
                      value: {
                        type: ['customize'],
                        code: '$state.catalogCode$',
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
                      dataKey: '896152_root.body.attrCode',
                      value: { type: ['customize'], code: 'probation' },
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
                  dataKey: '896152_root.body',
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
              dataKey: '896152_root',
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
        line_number: 9,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 168715641459675840,
            options: {
              compId: 'Select_60666',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '534408',
              data: '$reply_896152?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 10,
            callback1: [
              {
                type: 'setValue',
                dataId: 169699346403703330,
                options: {
                  compId: 'Select_60666',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Select',
                  id: '024752',
                  valueList: { Select_60666: '1004' },
                },
                line_number: 11,
                callback1: [],
              },
            ],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest419.params = [] || [];
    CMDGenerator(eventDataapiRequest419, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest420: any = [
      {
        type: 'apiRequest',
        dataId: 166125298599862820,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '9817429',
          pageJsonId: '537892',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'selectCataLogTierByCode',
          _apiCode: 'selectCataLogTierByCode',
          _source: 'rhin',
          _serviceId: '879306380283035648',
          _serviceTitle:
            '根据类目编码获取类目层级信息-hdb: selectCataLogTierByCode',
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
              dataKey: '9817429_header',
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
              dataKey: '9817429_path',
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
              dataKey: '9817429_query',
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
                  dataKey: '9817429_body.catalogCode',
                  value: { type: ['customize'], code: '$state.catalogCode$' },
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-0',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '9817429_body',
              key: '3',
            },
          ],
          _sourceName: '根据类目编码获取类目层级信息-hdb',
        },
        line_number: 12,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 166139448631288800,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '6454073',
              pageJsonId: '537892',
              dataSourceId: 166096152690913730,
              dataSourceName: 'sceneSubmit',
              dataSourceRelType: 'custom',
              dataSourceReloadFilter: [],
              dataSourceSetValue: [
                {
                  attrId: '154379',
                  code: 'catalogCode',
                  name: '类目编码',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: [
                      'context',
                      '$reply_9817429?.resultData.catalogCode$',
                    ],
                    hideAttr: true,
                    code: '',
                  },
                },
                {
                  attrId: '4562264',
                  code: 'approveGrade',
                  name: '审批等级',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: { type: [], code: 'approveGrade' },
                },
                {
                  attrId: '63768',
                  code: 'attrList',
                  name: '要素',
                  type: 'objectArray',
                  initialData: { type: 'static' },
                  value: { type: [], code: 'attrList' },
                },
                {
                  attrId: '919265',
                  code: 'fileInfo',
                  name: '附件',
                  type: 'objectArray',
                  initialData: { type: 'static' },
                  children: [],
                  value: { type: [], code: 'fileInfo' },
                },
                {
                  attrId: '360171',
                  code: 'catalogItemCode',
                  name: '类目项编码',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: { type: [], code: 'catalogItemCode' },
                },
                {
                  attrId: '420623',
                  code: 'catalogItemSubType',
                  name: '类目项子类型',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: [
                      'context',
                      '$reply_9817429?.resultData.catalogItemSubType$',
                    ],
                    hideAttr: true,
                    code: '',
                  },
                },
                {
                  attrId: '375466',
                  code: 'childCatalogCode',
                  name: '子类目项编码',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: [
                      'context',
                      '$reply_9817429?.resultData.childCatalogCode$',
                    ],
                    hideAttr: true,
                    code: '',
                  },
                },
                {
                  attrId: '9257773',
                  code: 'parentCatalogCode',
                  name: '上级类目编码',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: [
                      'context',
                      '$reply_9817429?.resultData.parentCatalogCode$',
                    ],
                    hideAttr: true,
                    code: '',
                  },
                },
                {
                  attrId: '5733013',
                  code: 'parentCatalogItemCode',
                  name: '上级类目项编码',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: [
                      'context',
                      '$reply_9817429?.resultData.parentCatalogItemCode$',
                    ],
                    hideAttr: true,
                    code: '',
                  },
                },
                {
                  attrId: '440627',
                  code: 'childCatalogDesc',
                  name: '子类目项描述',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: [
                      'context',
                      '$reply_9817429?.resultData.childCatalogDesc$',
                    ],
                    hideAttr: true,
                    code: '',
                  },
                },
                {
                  attrId: '177104',
                  code: 'approveGradeName',
                  name: '审批等级名称',
                  type: 'string',
                  initialData: { type: 'static' },
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
            },
            line_number: 13,
            callback1: [
              {
                type: 'callParentCustomFunc',
                dataId: 166444103297703600,
                options: {
                  compId: 'callParentCustomFunc',
                  compName: 'system',
                  id: '618033',
                  pageJsonId: '537892',
                  pathname: '/auditOrderPrepare',
                  pageId: '884045146848604160',
                  customFuncName: 'getFactor',
                  customFuncParams: '$data.sceneSubmit$',
                },
                line_number: 14,
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
    eventDataapiRequest420.params = [] || [];
    CMDGenerator(eventDataapiRequest420, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse224: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '56263',
            options: { context: '$state.itemList$', operate: 'notEmpty' },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 166132402524071650,
        elseIfs: [],
        line_number: 15,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 166132449559169250,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '9981685',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var item=state.itemList;data.sceneSubmit=item;var factorForm={};var attrList=item.attrList;if(attrList!=undefined&&attrList.length>0){for(var i=0;i<attrList.length;i++){factorForm[attrList[i].attrCode]=attrList[i].attrValue}}data.factorForm=factorForm;data.sceneSubmit.approveGrade=item.approveGrade;data.sceneSubmit.approveGradeName=item.approveGradeName;success(factorForm)};',
              actionTitle: '设置界面初始化值',
            },
            line_number: 16,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 166132641356637300,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '172885',
                  pageJsonId: '537892',
                  dataSourceId: 166124254360037760,
                  dataSourceName: 'factorForm',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '998092',
                      code: 'reason',
                      name: '申请原因',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['reason'],
                      _idpath: ['998092'],
                    },
                    {
                      attrId: '08707745',
                      code: 'setMealPackage',
                      name: '套餐',
                      type: 'string',
                      initialData: { type: 'static', value: '1007' },
                      showInput: true,
                      _codePath: ['setMealPackage'],
                      _idpath: ['08707745'],
                    },
                    {
                      attrId: '7508345',
                      code: 'setMealPackageType',
                      name: '套餐包类型',
                      type: 'string',
                      initialData: { type: 'static', value: '1013' },
                      showInput: true,
                      _codePath: ['setMealPackageType'],
                      _idpath: ['7508345'],
                    },
                    {
                      attrId: '445345',
                      code: 'firstReducePrice',
                      name: '一次优惠后功能费',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['firstReducePrice'],
                      _idpath: ['445345'],
                    },
                    {
                      attrId: '735607',
                      code: 'dirPrice',
                      name: '功能目录价',
                      type: 'string',
                      initialData: { type: 'static', value: '0' },
                      showInput: true,
                      _codePath: ['dirPrice'],
                      _idpath: ['735607'],
                    },
                    {
                      attrId: '3324724',
                      code: 'secondReducedPrice',
                      name: '二次优惠功能费',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['secondReducedPrice'],
                      _idpath: ['3324724'],
                    },
                    {
                      attrId: '5323545',
                      code: 'sencondReduceDiscount',
                      name: '二次优惠折扣(折)',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['sencondReduceDiscount'],
                      _idpath: ['5323545'],
                    },
                    {
                      attrId: '9541936',
                      code: 'firstReduceDiscount',
                      name: '一次优惠折扣(折)',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['firstReduceDiscount'],
                      _idpath: ['9541936'],
                    },
                    {
                      attrId: '748853',
                      code: 'probation',
                      name: '试用期',
                      type: 'string',
                      initialData: { type: 'static', value: '' },
                      showInput: true,
                      _codePath: ['probation'],
                      _idpath: ['748853'],
                    },
                    {
                      attrId: '143695',
                      code: 'busyDeadlineEnd',
                      name: '业务期限(止)',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['busyDeadlineEnd'],
                      _idpath: ['143695'],
                    },
                    {
                      attrId: '22437699',
                      code: 'busyDeadlineBegin',
                      name: '业务期限(起)',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['busyDeadlineBegin'],
                      _idpath: ['22437699'],
                    },
                    {
                      attrId: '20499836',
                      code: 'busyDeadline',
                      name: '业务期限',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['busyDeadline'],
                      _idpath: ['20499836'],
                    },
                    {
                      attrId: '9654028',
                      code: 'marketName',
                      name: '营销案名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['marketName'],
                      _idpath: ['9654028'],
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 17,
                callback1: [],
                callback2: [],
              },
              {
                type: 'setValue',
                dataId: 167385104865508200,
                options: {
                  compId: [
                    'Input_361479_887285_2150708_7460276_97629287_177208_0881564_5522515',
                    'Input_249832',
                    'DatePicker_913266',
                  ],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '573144',
                  valueList: {
                    Input_361479_887285_2150708_7460276_97629287_177208_0881564_5522515:
                      '$state.itemList.approveGradeName$',
                    Input_249832: '$data_9981685.busyDeadlineBegin$',
                    DatePicker_913266: '$data_9981685.busyDeadlineEnd$',
                  },
                  compid: [
                    'Input_361479_887285_2150708_7460276_97629287_177208_0881564_5522515',
                    'Input_249832',
                    'DatePicker_913266',
                  ],
                },
                line_number: 18,
                callback1: [],
              },
            ],
            callback2: [],
          },
          {
            type: 'customActionCode',
            dataId: 166132820169451970,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '859603',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var item=state.itemList;data.sceneSubmit=item;success(item.fileInfo)};',
            },
            line_number: 19,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 166132828894265800,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '391128',
                  pageJsonId: '537892',
                  dataSourceId: 166192841018643170,
                  dataSourceName: 'fileInfoList',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      code: 'fileName',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '附件名称',
                      defaultValue: '',
                      name: '附件名称',
                      attrId: '458544',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                    },
                    {
                      code: 'filePath',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '附件文件路径',
                      defaultValue: '',
                      name: '附件文件路径',
                      attrId: '6354087',
                      initialData: { type: 'static', value: '附件文件路径' },
                      parentKey: '1',
                      parentType: 'object',
                    },
                    {
                      code: 'fileServerType',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '附件文件服务器类型',
                      defaultValue: '',
                      name: '附件文件服务器类型',
                      attrId: '184934',
                      initialData: {
                        type: 'static',
                        value: '附件文件服务器类型',
                      },
                      parentKey: '1',
                      parentType: 'object',
                    },
                    {
                      code: 'fileSubType',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '附件分类-细类',
                      defaultValue: '',
                      name: '属性',
                      attrId: '551676',
                      initialData: { type: 'static', value: '附件分类-细类' },
                      parentKey: '1',
                      parentType: 'object',
                    },
                    {
                      code: 'fileType',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '附件分类-大类',
                      defaultValue: '',
                      name: '附件分类-大类',
                      attrId: '383524',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                    },
                    {
                      code: 'fileUrl',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '附件url地址',
                      defaultValue: '',
                      name: '附件url地址',
                      attrId: '726875',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                    },
                    {
                      code: 'tacheCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '环节编码',
                      defaultValue: '',
                      name: '环节编码',
                      attrId: '865444',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                    },
                    {
                      attrId: '7419638',
                      code: 'fileCode',
                      name: '文件编码',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '097484',
                      code: 'createTime',
                      name: '创建时间',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '604675',
                      code: 'createStaff',
                      name: '创建人',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '729925',
                      code: 'fileTypeName',
                      name: '附件类型',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                  ],
                  newData: '$data_859603$',
                  operateType: 3,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 20,
                callback1: [],
                callback2: [],
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '811202',
                    options: { context: '$data_859603$', operate: 'empty' },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                  {
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$state.scene$',
                      operate: '==',
                      manualValue: 'V',
                    },
                    condId: '882317',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166746087697143550,
                elseIfs: [],
                line_number: 21,
                callback1: [
                  {
                    type: 'sysSetVisible',
                    dataId: 167342278363835300,
                    options: {
                      compId: [
                        'Table_5369494_494011',
                        'Table_5369494_494011_506325',
                      ],
                      compName: 'page',
                      id: '578829',
                      pageJsonId: '537892',
                      visible: '',
                      compid: [
                        'Table_5369494_494011',
                        'Table_5369494_494011_506325',
                      ],
                    },
                    line_number: 22,
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
                condId: '626343',
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$state.scene$',
                  operate: '==',
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
                  context: '$state.scene$',
                  operate: '==',
                  manualValue: 'P',
                },
                condId: '7546792',
                connector: '||',
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 166176038635760700,
            elseIfs: [],
            line_number: 23,
            callback1: [
              {
                type: 'sysSetVisible',
                dataId: 167342281795236400,
                options: {
                  compId: [
                    'Input_361479_887285_2150708_7460276_97629287_177208_0881564',
                    'Input_361479_887285_2150708_7460276_97629287_177208_0881564_5522515',
                  ],
                  compName: 'page',
                  id: '391765',
                  pageJsonId: '537892',
                  visible: 'true',
                  compid: [
                    'Input_361479_887285_2150708_7460276_97629287_177208_0881564',
                    'Input_361479_887285_2150708_7460276_97629287_177208_0881564_5522515',
                  ],
                },
                line_number: 24,
              },
              {
                type: 'sysSetVisible',
                dataId: 167342284248845920,
                options: {
                  compId: [
                    'Row_851124_14685846',
                    'Row_851124_14685846_4179477',
                  ],
                  compName: 'page',
                  id: '974426',
                  pageJsonId: '537892',
                  visible: '',
                  compid: [
                    'Row_851124_14685846',
                    'Row_851124_14685846_4179477',
                  ],
                },
                line_number: 25,
              },
              {
                type: 'setDisable',
                dataId: 166372674624233300,
                options: {
                  compId: [
                    'Input_361479_887285_2150708_7460276_97629287_177208',
                    'Form_449441_1900385_965292_804694',
                    'Input_361479_887285_2150708_7460276_97629287_177208_0881564',
                    'Form_449441_1900385_965292_804694_950772',
                    'Input_361479_887285_2150708_7460276_97629287_177208_0881564_5522515',
                    'Input_product_7830006',
                    'Input_handleExperiencePackage_539362',
                    'Select_7117656',
                    'Select_2570406',
                    'Select_0018499',
                    'Select_525225',
                    'Input_018097',
                    'Input_90081',
                    'Form_449441_1900385_965292_804694_950772_8396112',
                  ],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '947932',
                  disabled: 'true',
                  compid: [
                    'Input_361479_887285_2150708_7460276_97629287_177208',
                    'Form_449441_1900385_965292_804694',
                    'Input_361479_887285_2150708_7460276_97629287_177208_0881564',
                    'Form_449441_1900385_965292_804694_950772',
                    'Input_361479_887285_2150708_7460276_97629287_177208_0881564_5522515',
                    'Input_product_7830006',
                    'Input_handleExperiencePackage_539362',
                    'Select_7117656',
                    'Select_2570406',
                    'Select_0018499',
                    'Select_525225',
                    'Input_018097',
                    'Input_90081',
                    'Form_449441_1900385_965292_804694_950772_8396112',
                  ],
                },
                line_number: 26,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse224.params = [] || [];
    CMDGenerator(eventDataifelse224, {}, 'ifelse', {
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
      className="__CustomClass_537892__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_537892_1_939141_5834264',
          uid: 'View_537892_1_939141_5834264',
          type: 'View',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
        style={{
          minHeight: '100%',
          display: 'block',
          padding: '0px 0px 0px 20px',
          overflowY: 'visible',
          width: '98%',
        }}
        ref={(r: any) => (refs['View_537892_1_939141_5834264'] = r)}
        {...injectData}
      >
        <Divider
          name={'分割线'}
          orientation={'center'}
          type={'horizontal'}
          dashed={false}
          dividerText={'企业彩印'}
          showTitle={true}
          $$componentItem={{
            id: 'Divider_27607_9559912_000188',
            uid: 'Divider_27607_9559912_000188',
            type: 'Divider',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ margin: '12px 0 12px 0', height: 'auto' }}
          ref={(r: any) => (refs['Divider_27607_9559912_000188'] = r)}
          {...injectData}
        />
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_6806553_683494_134972',
            uid: 'View_6806553_683494_134972',
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
          ref={(r: any) => (refs['View_6806553_683494_134972'] = r)}
          {...injectData}
        >
          <HorizontalView
            name={'左右布局'}
            formItemIndex={0}
            $$componentItem={{
              id: 'HorizontalView_004602_8085894_7286746',
              uid: 'HorizontalView_004602_8085894_7286746',
              type: 'HorizontalView',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              display: 'flex',
              flexDirection: 'row',
              padding: '0px 0px 0px 0px',
              width: '100%',
              height: '100%',
              overflowY: 'auto',
              margin: '0px 0px 12px 0px',
            }}
            ref={(r: any) =>
              (refs['HorizontalView_004602_8085894_7286746'] = r)
            }
            {...injectData}
          >
            <View
              name={'布局容器'}
              $$componentItem={{
                id: 'View_339406_641214_76290034',
                uid: 'View_339406_641214_76290034',
                type: 'View',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
                height: '100%',
                overflowY: 'auto',
                margin: '15px 0px 5px 0px',
              }}
              ref={(r: any) => (refs['View_339406_641214_76290034'] = r)}
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
                formCode={'Form_4311097'}
                className={'beforeStyle'}
                $$componentItem={{
                  id: 'Form_4311097_9385662_302551_716304_5234815_85629_77945',
                  uid: 'Form_4311097_9385662_302551_716304_5234815_85629_77945',
                  type: 'Form',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) =>
                  (refs[
                    'Form_4311097_9385662_302551_716304_5234815_85629_77945'
                  ] = r)
                }
                {...injectData}
              >
                <Checkbox
                  name={'审批场景'}
                  titleTip={'text'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  text={'企业彩印'}
                  selfSpan={8}
                  labelCol={8}
                  wrapperCol={16}
                  formItemIndex={0}
                  fieldName={'aduitClass'}
                  defaultChecked={true}
                  tipIcon={{
                    theme: 'outlined',
                    type: 'question-circle',
                    isIconFont: false,
                  }}
                  tipContent={data?.sceneSubmit?.childCatalogDesc}
                  $$componentItem={{
                    id: 'Checkbox_882584_5289015_934499_292792_78633593_084225_440485_391658',
                    uid: 'Checkbox_882584_5289015_934499_292792_78633593_084225_440485_391658',
                    type: 'Checkbox',
                    ...componentItem,
                  }}
                  disabled={true}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    (refs[
                      'Checkbox_882584_5289015_934499_292792_78633593_084225_440485_391658'
                    ] = r)
                  }
                  {...injectData}
                />
                <View
                  name={'布局容器'}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_855319_4239901_706172',
                    uid: 'View_855319_4239901_706172',
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
                      formItemIndex: 1,
                      style: undefined,
                      selfSpan: undefined,
                    },
                  }}
                  style={{
                    display: 'block',
                    flexDirection: 'column',
                    padding: '0px 0px 0px 0px',
                    width: '100%',
                  }}
                  ref={(r: any) => (refs['View_855319_4239901_706172'] = r)}
                  {...injectData}
                />
                <Input
                  name={'审批级别'}
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
                  fieldName={'auditClass'}
                  formItemIndex={2}
                  className={'fixed-form-item-label-width-150'}
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
                    id: 'Input_361479_887285_2150708_7460276_97629287_177208_0881564_5522515',
                    uid: 'Input_361479_887285_2150708_7460276_97629287_177208_0881564_5522515',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={false}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    (refs[
                      'Input_361479_887285_2150708_7460276_97629287_177208_0881564_5522515'
                    ] = r)
                  }
                  {...injectData}
                />
              </Form>
            </View>
          </HorizontalView>
          <Form
            name={'要素'}
            colSpan={8}
            labelCol={'8'}
            wrapperCol={'16'}
            colon={true}
            layout={'horizontal'}
            labelAlign={'left'}
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_449441'}
            genRuleType={'key'}
            formType={'normal'}
            relationDataSource={data?.factorForm}
            busiObjectId={''}
            formColumns={[
              {
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '动作',
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
                  fieldName: 'action',
                  value: data?.factorForm?.action,
                  formItemIndex: 8,
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
                busiObjectId: '',
                isLabelDropBoxChild: false,
                id: 'Input_action_124461',
              },
              {
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '代理商名称',
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
                  fieldName: 'agentName',
                  value: data?.factorForm?.agentName,
                  formItemIndex: 9,
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
                busiObjectId: '',
                isLabelDropBoxChild: false,
                id: 'Input_agentName_3011749',
              },
              {
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '法人代表',
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
                  fieldName: 'legalRep',
                  value: data?.factorForm?.legalRep,
                  formItemIndex: 10,
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
                busiObjectId: '',
                isLabelDropBoxChild: false,
                id: 'Input_legalRep_4905766',
              },
              {
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '续签合约日期',
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
                  fieldName: 'contractTime',
                  value: data?.factorForm?.contractTime,
                  formItemIndex: 11,
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
                busiObjectId: '',
                isLabelDropBoxChild: false,
                id: 'Input_contractTime_637706',
              },
              {
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '电话',
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
                  fieldName: 'phone',
                  value: data?.factorForm?.phone,
                  formItemIndex: 12,
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
                busiObjectId: '',
                isLabelDropBoxChild: false,
                id: 'Input_phone_089928',
              },
              {
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '代理业务范围',
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
                  fieldName: 'busiScope',
                  value: data?.factorForm?.busiScope,
                  formItemIndex: 13,
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
                busiObjectId: '',
                isLabelDropBoxChild: false,
                id: 'Input_busiScope_198144',
              },
              {
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '业绩评估',
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
                  fieldName: 'performance',
                  value: data?.factorForm?.performance,
                  formItemIndex: 14,
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
                busiObjectId: '',
                isLabelDropBoxChild: false,
                id: 'Input_performance_8186807',
              },
              {
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '申请原因',
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
                  fieldName: 'reason',
                  value: data?.factorForm?.reason,
                  formItemIndex: 15,
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
                busiObjectId: '',
                isLabelDropBoxChild: false,
                id: 'Input_reason_4525674',
              },
            ]}
            formItemIndex={12}
            $$componentItem={{
              id: 'Form_449441_1900385_965292_804694_950772_8396112',
              uid: 'Form_449441_1900385_965292_804694_950772_8396112',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px', margin: '0px 0px 0px 0px' }}
            onValuesChange={(changedFieldName: any, changedValue: any) => {
              const eventDatasetDataSource180: any = [
                {
                  type: 'setDataSource',
                  dataId: 166124391997578100,
                  options: {
                    compId: 'page',
                    compName: 'page',
                    id: '3788211',
                    pageJsonId: '537892',
                    dataSourceId: 166124254360037760,
                    dataSourceName: 'factorForm',
                    dataSourceRelType: 'custom',
                    dataSourceReloadFilter: [],
                    dataSourceSetValue: [
                      {
                        attrId: '08707745',
                        code: 'setMealPackage',
                        name: '套餐',
                        type: 'string',
                        initialData: { type: 'static', value: '1007' },
                        showInput: true,
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694_950772_8396112',
                            'getFieldsValue',
                          ],
                          code: 'setMealPackage',
                        },
                      },
                      {
                        attrId: '7508345',
                        code: 'setMealPackageType',
                        name: '套餐包类型',
                        type: 'string',
                        initialData: { type: 'static', value: '1013' },
                        showInput: true,
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694_950772_8396112',
                            'getFieldsValue',
                          ],
                          code: 'setMealPackageType',
                        },
                      },
                      {
                        attrId: '998092',
                        code: 'reason',
                        name: '申请原因',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694_950772_8396112',
                            'getFieldsValue',
                          ],
                          code: 'reason',
                        },
                      },
                      {
                        attrId: '735607',
                        code: 'dirPrice',
                        name: '功能目录价',
                        type: 'string',
                        initialData: { type: 'static', value: '0' },
                        showInput: true,
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694_950772_8396112',
                            'getFieldsValue',
                          ],
                          code: 'dirPrice',
                        },
                      },
                      {
                        attrId: '445345',
                        code: 'firstReducePrice',
                        name: '一次优惠后功能费',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694_950772_8396112',
                            'getFieldsValue',
                          ],
                          code: 'firstReducePrice',
                        },
                      },
                      {
                        attrId: '9541936',
                        code: 'firstReduceDiscount',
                        name: '一次优惠折扣(折)',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694_950772_8396112',
                            'getFieldsValue',
                          ],
                          code: 'firstReduceDiscount',
                        },
                      },
                      {
                        attrId: '3324724',
                        code: 'secondReducedPrice',
                        name: '二次优惠功能费',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694_950772_8396112',
                            'getFieldsValue',
                          ],
                          code: 'secondReducedPrice',
                        },
                      },
                      {
                        attrId: '5323545',
                        code: 'sencondReduceDiscount',
                        name: '二次优惠折扣(折)',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694_950772_8396112',
                            'getFieldsValue',
                          ],
                          code: 'sencondReduceDiscount',
                        },
                      },
                      {
                        attrId: '748853',
                        code: 'probation',
                        name: '试用期',
                        type: 'string',
                        initialData: { type: 'static', value: '' },
                        showInput: true,
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694_950772_8396112',
                            'getFieldsValue',
                          ],
                          code: 'probation',
                        },
                      },
                      {
                        attrId: '22437699',
                        code: 'busyDeadlineBegin',
                        name: '业务期限(起)',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694_950772_8396112',
                            'getFieldsValue',
                          ],
                          code: 'busyDeadlineBegin',
                        },
                      },
                      {
                        attrId: '143695',
                        code: 'busyDeadlineEnd',
                        name: '业务期限(止)',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694_950772_8396112',
                            'getFieldsValue',
                          ],
                          code: 'busyDeadlineEnd',
                        },
                      },
                      {
                        attrId: '20499836',
                        code: 'busyDeadline',
                        name: '业务期限',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                      },
                      {
                        attrId: '9654028',
                        code: 'marketName',
                        name: '营销案名称',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694_950772_8396112',
                            'getFieldsValue',
                          ],
                          code: 'marketName',
                        },
                      },
                    ],
                    onlySetPatch: true,
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'customActionCode',
                      dataId: 166366244013133920,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '395614',
                        pageJsonId: '537892',
                        actionTitle: '',
                        code: 'function main(data,state,success,fail){var attrList=[];var obj=data.factorForm;obj["discount"]=10;for(var key in obj){attrList.push({"attrCode":key,"attrName":"","attrValue":obj[key]})}data.sceneSubmit.attrList=attrList;success(attrList)};',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'callParentCustomFunc',
                          dataId: 166366244013131500,
                          options: {
                            compId: 'callParentCustomFunc',
                            compName: 'system',
                            id: '384369',
                            pageJsonId: '537892',
                            pathname: '/commonAuditOrder',
                            pageId: '872682457815691264',
                            customFuncName: 'getFactor',
                            customFuncParams: '$data.sceneSubmit$',
                            modalPath: '/commonAuditOrder',
                          },
                          line_number: 3,
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
              eventDatasetDataSource180.params =
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
                eventDatasetDataSource180,
                { changedFieldName, changedValue },
                'setDataSource',
                {
                  id: 'setDataSource',
                  name: 'setDataSource',
                  type: 'setDataSource',
                  platform: 'pc',
                },
              );
            }}
            ref={(r: any) =>
              (refs['Form_449441_1900385_965292_804694_950772_8396112'] = r)
            }
            {...injectData}
          >
            <Select
              name={'功能套餐'}
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
              fieldName={'setMealPackage'}
              value={data?.factorForm?.setMealPackage}
              formItemIndex={0}
              defaultValue={'热线彩印'}
              $$componentItem={{
                id: 'Input_product_7830006',
                uid: 'Input_product_7830006',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatasysSetValue6: any = [
                  {
                    type: 'sysSetValue',
                    dataId: 168690721894855230,
                    options: {
                      compId: [
                        'Input_handleExperiencePackage_539362',
                        'Select_2570406',
                        'Select_0018499',
                        'Input_90081',
                        'Input_018097',
                      ],
                      compName: 'page',
                      id: '30055',
                      pageJsonId: '537892',
                      compid: [
                        'Input_handleExperiencePackage_539362',
                        'Select_2570406',
                        'Select_0018499',
                        'Input_90081',
                        'Input_018097',
                      ],
                      valueList: {
                        Input_handleExperiencePackage_539362: '1013',
                        Select_2570406: '',
                        Select_0018499: '',
                        Input_018097: '',
                        Input_90081: '',
                      },
                    },
                    line_number: 1,
                    callback1: [],
                  },
                ];
                eventDatasysSetValue6.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDatasysSetValue6, { e }, 'sysSetValue', {
                  id: 'sysSetValue',
                  name: 'sysSetValue',
                  type: 'sysSetValue',
                  platform: 'pc',
                });
                const eventDatasysSetDisable7: any = [
                  {
                    type: 'sysSetDisable',
                    dataId: 168716135571642000,
                    options: {
                      compId: ['Select_2570406', 'Input_018097'],
                      compName: 'page',
                      id: '359142',
                      pageJsonId: '537892',
                      disabled: 'true',
                      compid: ['Select_2570406', 'Input_018097'],
                    },
                    line_number: 2,
                  },
                ];
                eventDatasysSetDisable7.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDatasysSetDisable7, { e }, 'sysSetDisable', {
                  id: 'sysSetDisable',
                  name: 'sysSetDisable',
                  type: 'sysSetDisable',
                  platform: 'pc',
                });
                const eventDatasysSetRequired1: any = [
                  {
                    type: 'sysSetRequired',
                    dataId: 168724593799373860,
                    options: {
                      compId: ['Select_2570406', 'Input_018097'],
                      compName: 'page',
                      id: '220092',
                      pageJsonId: '537892',
                      required: '',
                      compid: ['Select_2570406', 'Input_018097'],
                    },
                    line_number: 3,
                  },
                ];
                eventDatasysSetRequired1.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatasysSetRequired1,
                  { e },
                  'sysSetRequired',
                  {
                    id: 'sysSetRequired',
                    name: 'sysSetRequired',
                    type: 'sysSetRequired',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => (refs['Input_product_7830006'] = r)}
              {...injectData}
            />
            <Select
              name={'套餐包类型'}
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
              fieldName={'setMealPackageType'}
              value={data?.factorForm?.setMealPackageType}
              formItemIndex={1}
              defaultValue={'体验套餐'}
              $$componentItem={{
                id: 'Input_handleExperiencePackage_539362',
                uid: 'Input_handleExperiencePackage_539362',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDataifelse495: any = [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        options: {
                          useManual: true,
                          useObject: false,
                          operate: '!=',
                          manualValue: '1013',
                        },
                        condId: '8030174',
                        conditionType: 'checkValue',
                        objType: 'Select',
                        objId: 'Input_handleExperiencePackage_539362',
                      },
                    ],
                    dataId: 168688235734067460,
                    elseIfs: [],
                    line_number: 1,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '3833216',
                            options: {
                              useManual: true,
                              useObject: false,
                              operate: '==',
                              manualValue: '1007',
                            },
                            conditionType: 'checkValue',
                            objType: 'Select',
                            objId: 'Input_product_7830006',
                          },
                        ],
                        dataId: 168690642771883260,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 168690655832171100,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 168716146612708220,
                                children: [],
                                todoOptions: ['disabled', 'selectComp'],
                                options: {
                                  compId: ['Select_2570406', 'Input_018097'],
                                  compName: 'page',
                                  id: '509285',
                                  pageJsonId: '537892',
                                  disabled: '',
                                  compid: ['Select_2570406', 'Input_018097'],
                                },
                                actionObjId: 'sysSetDisable',
                                actionObjName: 'page',
                                value: 'sysSetDisable',
                                line_number: 6,
                              },
                              {
                                dataName: 'action',
                                dataId: 168722340980414660,
                                children: [],
                                todoOptions: ['required', 'selectComp'],
                                options: {
                                  compId: ['Select_2570406', 'Input_018097'],
                                  compName: 'page',
                                  id: '4014394',
                                  pageJsonId: '537892',
                                  required: 'true',
                                  compid: ['Select_2570406', 'Input_018097'],
                                },
                                actionObjId: 'sysSetRequired',
                                actionObjName: 'page',
                                value: 'sysSetRequired',
                                line_number: 7,
                              },
                              {
                                dataName: 'action',
                                dataId: 168722358372189440,
                                children: [
                                  {
                                    dataName: 'callback',
                                    dataId: 168722358372112740,
                                    children: [],
                                    value: 'callback1',
                                    params: [],
                                  },
                                  {
                                    dataName: 'callback',
                                    dataId: 168722358372162240,
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
                                  id: '4893409',
                                  pageJsonId: '537892',
                                  dataSourceId: 166124254360037760,
                                  dataSourceName: 'factorForm',
                                  dataSourceRelType: 'custom',
                                  dataSourceSetValue: [
                                    {
                                      attrId: '08707745',
                                      code: 'setMealPackage',
                                      name: '套餐',
                                      type: 'string',
                                      initialData: {
                                        type: 'static',
                                        value: '1007',
                                      },
                                      showInput: true,
                                    },
                                    {
                                      attrId: '7508345',
                                      code: 'setMealPackageType',
                                      name: '套餐包类型',
                                      type: 'string',
                                      initialData: {
                                        type: 'static',
                                        value: '1013',
                                      },
                                      showInput: true,
                                    },
                                    {
                                      attrId: '998092',
                                      code: 'reason',
                                      name: '申请原因',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: true,
                                    },
                                    {
                                      attrId: '735607',
                                      code: 'dirPrice',
                                      name: '功能目录价',
                                      type: 'string',
                                      initialData: {
                                        type: 'static',
                                        value: '0',
                                      },
                                      showInput: true,
                                      value: {
                                        type: ['customize'],
                                        code: '80',
                                      },
                                    },
                                    {
                                      attrId: '445345',
                                      code: 'firstReducePrice',
                                      name: '一次优惠后功能费',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: true,
                                    },
                                    {
                                      attrId: '9541936',
                                      code: 'firstReduceDiscount',
                                      name: '一次优惠折扣(折)',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: true,
                                    },
                                    {
                                      attrId: '3324724',
                                      code: 'secondReducedPrice',
                                      name: '二次优惠功能费',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: true,
                                    },
                                    {
                                      attrId: '5323545',
                                      code: 'sencondReduceDiscount',
                                      name: '二次优惠折扣(折)',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: true,
                                    },
                                    {
                                      attrId: '748853',
                                      code: 'probation',
                                      name: '试用期',
                                      type: 'string',
                                      initialData: {
                                        type: 'static',
                                        value: '',
                                      },
                                      showInput: true,
                                    },
                                    {
                                      attrId: '22437699',
                                      code: 'busyDeadlineBegin',
                                      name: '业务期限(起)',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: true,
                                    },
                                    {
                                      attrId: '143695',
                                      code: 'busyDeadlineEnd',
                                      name: '业务期限(止)',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: true,
                                    },
                                    {
                                      attrId: '20499836',
                                      code: 'busyDeadline',
                                      name: '业务期限',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: true,
                                    },
                                    {
                                      attrId: '9654028',
                                      code: 'marketName',
                                      name: '营销案名称',
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
                                actionObjId: 'setDataSource',
                                actionObjName: 'page',
                                value: 'setDataSource',
                                line_number: 8,
                              },
                            ],
                            condition: [],
                            value: 'elseIf',
                            callback: [
                              {
                                type: 'sysSetDisable',
                                dataId: 168716146612708220,
                                options: {
                                  compId: ['Select_2570406', 'Input_018097'],
                                  compName: 'page',
                                  id: '509285',
                                  pageJsonId: '537892',
                                  disabled: '',
                                  compid: ['Select_2570406', 'Input_018097'],
                                },
                                line_number: 6,
                              },
                              {
                                type: 'sysSetRequired',
                                dataId: 168722340980414660,
                                options: {
                                  compId: ['Select_2570406', 'Input_018097'],
                                  compName: 'page',
                                  id: '4014394',
                                  pageJsonId: '537892',
                                  required: 'true',
                                  compid: ['Select_2570406', 'Input_018097'],
                                },
                                line_number: 7,
                              },
                              {
                                type: 'setDataSource',
                                dataId: 168722358372189440,
                                options: {
                                  compId: 'setDataSource',
                                  compName: 'page',
                                  id: '4893409',
                                  pageJsonId: '537892',
                                  dataSourceId: 166124254360037760,
                                  dataSourceName: 'factorForm',
                                  dataSourceRelType: 'custom',
                                  dataSourceSetValue: [
                                    {
                                      attrId: '08707745',
                                      code: 'setMealPackage',
                                      name: '套餐',
                                      type: 'string',
                                      initialData: {
                                        type: 'static',
                                        value: '1007',
                                      },
                                      showInput: true,
                                    },
                                    {
                                      attrId: '7508345',
                                      code: 'setMealPackageType',
                                      name: '套餐包类型',
                                      type: 'string',
                                      initialData: {
                                        type: 'static',
                                        value: '1013',
                                      },
                                      showInput: true,
                                    },
                                    {
                                      attrId: '998092',
                                      code: 'reason',
                                      name: '申请原因',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: true,
                                    },
                                    {
                                      attrId: '735607',
                                      code: 'dirPrice',
                                      name: '功能目录价',
                                      type: 'string',
                                      initialData: {
                                        type: 'static',
                                        value: '0',
                                      },
                                      showInput: true,
                                      value: {
                                        type: ['customize'],
                                        code: '80',
                                      },
                                    },
                                    {
                                      attrId: '445345',
                                      code: 'firstReducePrice',
                                      name: '一次优惠后功能费',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: true,
                                    },
                                    {
                                      attrId: '9541936',
                                      code: 'firstReduceDiscount',
                                      name: '一次优惠折扣(折)',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: true,
                                    },
                                    {
                                      attrId: '3324724',
                                      code: 'secondReducedPrice',
                                      name: '二次优惠功能费',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: true,
                                    },
                                    {
                                      attrId: '5323545',
                                      code: 'sencondReduceDiscount',
                                      name: '二次优惠折扣(折)',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: true,
                                    },
                                    {
                                      attrId: '748853',
                                      code: 'probation',
                                      name: '试用期',
                                      type: 'string',
                                      initialData: {
                                        type: 'static',
                                        value: '',
                                      },
                                      showInput: true,
                                    },
                                    {
                                      attrId: '22437699',
                                      code: 'busyDeadlineBegin',
                                      name: '业务期限(起)',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: true,
                                    },
                                    {
                                      attrId: '143695',
                                      code: 'busyDeadlineEnd',
                                      name: '业务期限(止)',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: true,
                                    },
                                    {
                                      attrId: '20499836',
                                      code: 'busyDeadline',
                                      name: '业务期限',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: true,
                                    },
                                    {
                                      attrId: '9654028',
                                      code: 'marketName',
                                      name: '营销案名称',
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
                                line_number: 8,
                                callback1: [],
                                callback2: [],
                              },
                            ],
                          },
                        ],
                        line_number: 2,
                        callback1: [
                          {
                            type: 'showMessage',
                            dataId: 168690694441768420,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '080592',
                              pageJsonId: '537892',
                              type: 'info',
                              value: '正式套餐不可选',
                            },
                            line_number: 3,
                          },
                          {
                            type: 'sysSetDisable',
                            dataId: 168718314938837950,
                            options: {
                              compId: ['Select_2570406', 'Input_018097'],
                              compName: 'page',
                              id: '355704',
                              pageJsonId: '537892',
                              disabled: 'true',
                              compid: ['Select_2570406', 'Input_018097'],
                            },
                            line_number: 4,
                          },
                          {
                            type: 'sysSetValue',
                            dataId: 168690706036925340,
                            options: {
                              compId: ['Input_handleExperiencePackage_539362'],
                              compName: 'page',
                              id: '1114743',
                              pageJsonId: '537892',
                              compid: ['Input_handleExperiencePackage_539362'],
                              valueList: {
                                Input_handleExperiencePackage_539362: '1013',
                              },
                            },
                            line_number: 5,
                            callback1: [],
                          },
                        ],
                      },
                    ],
                  },
                ];
                eventDataifelse495.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDataifelse495, { e }, 'ifelse', {
                  id: 'ifelse',
                  name: 'ifelse',
                  type: 'ifelse',
                  platform: 'pc',
                });
                const eventDataifelse496: any = [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '3341748',
                        options: {
                          useManual: true,
                          useObject: false,
                          operate: '==',
                          manualValue: '1013',
                        },
                        conditionType: 'checkValue',
                        objType: 'Select',
                        objId: 'Input_handleExperiencePackage_539362',
                      },
                    ],
                    dataId: 168690286791859800,
                    elseIfs: [],
                    line_number: 9,
                    callback1: [
                      {
                        type: 'sysSetDisable',
                        dataId: 168716151161332300,
                        options: {
                          compId: ['Select_2570406', 'Input_018097'],
                          compName: 'page',
                          id: '2283576',
                          pageJsonId: '537892',
                          disabled: 'true',
                          compid: ['Select_2570406', 'Input_018097'],
                        },
                        line_number: 10,
                      },
                      {
                        type: 'sysSetValue',
                        dataId: 168690305740067620,
                        options: {
                          compId: [
                            'Select_2570406',
                            'Input_018097',
                            'Select_7117656',
                          ],
                          compName: 'page',
                          id: '9645583',
                          pageJsonId: '537892',
                          compid: [
                            'Select_2570406',
                            'Input_018097',
                            'Select_7117656',
                          ],
                          valueList: {
                            Select_2570406: '',
                            Input_018097: '',
                            Select_7117656: '0',
                          },
                        },
                        line_number: 11,
                        callback1: [],
                      },
                      {
                        type: 'sysSetRequired',
                        dataId: 168723084587597730,
                        options: {
                          compId: ['Select_2570406', 'Input_018097'],
                          compName: 'page',
                          id: '72042',
                          pageJsonId: '537892',
                          required: '',
                          compid: ['Select_2570406', 'Input_018097'],
                        },
                        line_number: 12,
                      },
                    ],
                  },
                ];
                eventDataifelse496.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDataifelse496, { e }, 'ifelse', {
                  id: 'ifelse',
                  name: 'ifelse',
                  type: 'ifelse',
                  platform: 'pc',
                });
                const eventDatasysSetValue7: any = [
                  {
                    type: 'sysSetValue',
                    dataId: 168723100800789440,
                    options: {
                      compId: [
                        'Select_2570406',
                        'Select_0018499',
                        'Input_018097',
                        'Input_90081',
                      ],
                      compName: 'page',
                      id: '2333437',
                      pageJsonId: '537892',
                      compid: [
                        'Select_2570406',
                        'Select_0018499',
                        'Input_018097',
                        'Input_90081',
                      ],
                      valueList: {
                        Select_2570406: '',
                        Select_0018499: '',
                        Input_018097: '',
                        Input_90081: '',
                      },
                    },
                    line_number: 13,
                    callback1: [],
                  },
                ];
                eventDatasysSetValue7.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDatasysSetValue7, { e }, 'sysSetValue', {
                  id: 'sysSetValue',
                  name: 'sysSetValue',
                  type: 'sysSetValue',
                  platform: 'pc',
                });
              }}
              ref={(r: any) =>
                (refs['Input_handleExperiencePackage_539362'] = r)
              }
              {...injectData}
            />
            <Input
              name={'功能费类目价(元/月)'}
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
              fieldName={'dirPrice'}
              value={data?.factorForm?.dirPrice}
              formItemIndex={2}
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
                id: 'Select_7117656',
                uid: 'Select_7117656',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Select_7117656'] = r)}
              {...injectData}
            />
            <Input
              name={'一次优惠后功能费(元/成员)'}
              size={'default'}
              selfSpan={8}
              labelCol={'8'}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={false}
              fieldName={'firstReducePrice'}
              formItemIndex={3}
              value={data?.factorForm?.firstReducePrice}
              regexp={[
                {
                  id: '812117',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '最多2位小数',
                  pattern: '/^\\d+(\\.\\d{1,2})?$/',
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
                id: 'Select_2570406',
                uid: 'Select_2570406',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onBlur={(e: any) => {
                const eventDatacallSelfFunc483: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 168722532912858140,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '266516',
                      pageJsonId: '537892',
                      customFuncName: 'checkData',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '681201',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$data.pageData.checkLable$',
                              operate: '==',
                              manualValue: '0',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 168722862981294400,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 168722932102835680,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 168722932661839460,
                                children: [
                                  {
                                    dataName: 'callback',
                                    dataId: 168722932661899840,
                                    children: [],
                                    value: 'callback1',
                                    params: [],
                                  },
                                  {
                                    dataName: 'callback',
                                    dataId: 168722932661850340,
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
                                  id: '53371125',
                                  pageJsonId: '537892',
                                  customFuncName: 'calculateDiscount',
                                  customFuncParams: 'object',
                                  paramsObj: { type: '1' },
                                  paramsObjKeyValueMap: { type: '1' },
                                },
                                actionObjId: 'callSelfFunc',
                                actionObjName: 'system',
                                value: 'callSelfFunc',
                                line_number: 5,
                              },
                            ],
                            condition: [],
                            value: 'elseIf',
                            callback: [
                              {
                                type: 'callSelfFunc',
                                dataId: 168722932661839460,
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '53371125',
                                  pageJsonId: '537892',
                                  customFuncName: 'calculateDiscount',
                                  customFuncParams: 'object',
                                  paramsObj: { type: '1' },
                                  paramsObjKeyValueMap: { type: '1' },
                                },
                                line_number: 5,
                                callback1: [],
                                callback2: [],
                              },
                            ],
                          },
                        ],
                        line_number: 2,
                        callback1: [
                          {
                            type: 'validateMsg',
                            dataId: 168722878872178080,
                            options: {
                              compId: 'Select_2570406',
                              compLib: 'comm',
                              pageJsonId: '537892',
                              compName: 'Input',
                              id: '81070124',
                              validateStatus: 'error',
                              help: '必须小于目录价大于第二次优惠价格',
                            },
                            line_number: 3,
                          },
                          {
                            type: 'clearValue',
                            dataId: 168722877684293920,
                            options: {
                              compId: 'Select_2570406',
                              compLib: 'comm',
                              pageJsonId: '537892',
                              compName: 'Input',
                              id: '317465',
                            },
                            line_number: 4,
                          },
                        ],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc483.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc483, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Select_2570406'] = r)}
              {...injectData}
            />
            <Input
              name={'一次折扣(折)'}
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
              fieldName={'firstReduceDiscount'}
              formItemIndex={4}
              value={data?.factorForm?.firstReduceDiscount}
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
                id: 'Select_0018499',
                uid: 'Select_0018499',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Select_0018499'] = r)}
              {...injectData}
            />
            <Input
              name={'营销活动名称'}
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
              formItemIndex={5}
              value={data?.factorForm?.marketName}
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
                id: 'Select_525225',
                uid: 'Select_525225',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Select_525225'] = r)}
              {...injectData}
            />
            <Input
              name={'二次优惠后功能费(元/成员)'}
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
              formItemIndex={6}
              fieldName={'secondReducedPrice'}
              value={data?.factorForm?.secondReducedPrice}
              regexp={[
                {
                  id: '143611',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '最多2位小数',
                  pattern: '/^\\d+(\\.\\d{1,2})?$/',
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
                id: 'Input_018097',
                uid: 'Input_018097',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onBlur={(e: any) => {
                const eventDatacallSelfFunc484: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 168722564031872740,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '623303',
                      pageJsonId: '537892',
                      customFuncName: 'checkData',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '681201',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$data.pageData.checkLable$',
                              operate: '==',
                              manualValue: '0',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 168722881805602980,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 168723039374465100,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 168723039727857570,
                                children: [
                                  {
                                    dataName: 'callback',
                                    dataId: 168723039727854240,
                                    children: [],
                                    value: 'callback1',
                                    params: [],
                                  },
                                  {
                                    dataName: 'callback',
                                    dataId: 168723039727873340,
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
                                  id: '762317',
                                  pageJsonId: '537892',
                                  customFuncName: 'calculateDiscount',
                                  customFuncParams: 'object',
                                  paramsObj: { type: '2' },
                                  paramsObjKeyValueMap: { type: '2' },
                                },
                                actionObjId: 'callSelfFunc',
                                actionObjName: 'system',
                                value: 'callSelfFunc',
                                line_number: 5,
                              },
                            ],
                            condition: [],
                            value: 'elseIf',
                            callback: [
                              {
                                type: 'callSelfFunc',
                                dataId: 168723039727857570,
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '762317',
                                  pageJsonId: '537892',
                                  customFuncName: 'calculateDiscount',
                                  customFuncParams: 'object',
                                  paramsObj: { type: '2' },
                                  paramsObjKeyValueMap: { type: '2' },
                                },
                                line_number: 5,
                                callback1: [],
                                callback2: [],
                              },
                            ],
                          },
                        ],
                        line_number: 2,
                        callback1: [
                          {
                            type: 'clearValue',
                            dataId: 168722885903395700,
                            options: {
                              compId: 'Input_018097',
                              compLib: 'comm',
                              pageJsonId: '537892',
                              compName: 'Input',
                              id: '3594036',
                            },
                            line_number: 3,
                          },
                          {
                            type: 'validateMsg',
                            dataId: 168722886833285660,
                            options: {
                              compId: 'Input_018097',
                              compLib: 'comm',
                              pageJsonId: '537892',
                              compName: 'Input',
                              id: '11821774',
                              validateStatus: 'error',
                              help: '必须小于目录价和第一次优惠价格',
                            },
                            line_number: 4,
                          },
                        ],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc484.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc484, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Input_018097'] = r)}
              {...injectData}
            />
            <Input
              name={'二次优惠折扣(折)'}
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
              formItemIndex={7}
              fieldName={'sencondReduceDiscount'}
              value={data?.factorForm?.sencondReduceDiscount}
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
                id: 'Input_90081',
                uid: 'Input_90081',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_90081'] = r)}
              {...injectData}
            />
            <View
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_0219024',
                uid: 'View_0219024',
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
                display: 'flex',
                flexDirection: 'row',
                padding: '0px 0px 0px 0px',
                width: '100%',
              }}
              ref={(r: any) => (refs['View_0219024'] = r)}
              {...injectData}
            >
              <Text
                name={'业务期限'}
                content={'业务期限：'}
                textType={'span'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_6759671',
                  uid: 'Text_6759671',
                  type: 'Text',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'left',
                  fontSize: '14px',
                  lineHeight: '24px',
                  color: '#1c242e',
                  backgroundColor: 'rgba(255, 255, 255,0)',
                  width: '0F',
                  flex: 3.1,
                }}
                ref={(r: any) => (refs['Text_6759671'] = r)}
                {...injectData}
              />
              <View
                name={'布局容器'}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_188972',
                  uid: 'View_188972',
                  type: 'View',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'row',
                  padding: '0px 0px 0px 0px',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 10,
                }}
                ref={(r: any) => (refs['View_188972'] = r)}
                {...injectData}
              >
                <View
                  name={'布局容器'}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_4653317',
                    uid: 'View_4653317',
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
                    flex: 3,
                  }}
                  ref={(r: any) => (refs['View_4653317'] = r)}
                  {...injectData}
                >
                  <Input
                    name={'输入框'}
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
                    value={data?.factorForm?.busyDeadlineBegin}
                    fieldName={'busyDeadlineBegin'}
                    defaultValue={'2023-01-01'}
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
                      id: 'Input_249832',
                      uid: 'Input_249832',
                      type: 'Input',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    onBlur={(e: any) => {
                      const eventDatagetValue227: any = [
                        {
                          type: 'getValue',
                          dataId: 168716518273192100,
                          options: {
                            compId: 'Input_249832',
                            compLib: 'comm',
                            pageJsonId: '537892',
                            compName: 'Input',
                            id: '402058',
                          },
                          line_number: 1,
                          callback1: [
                            {
                              type: 'customActionCode',
                              dataId: 168716520982972320,
                              options: {
                                compId: 'customActionCode',
                                compName: 'page',
                                id: '004156',
                                pageJsonId: '537892',
                                code: 'function main(data,state,success,fail){console.log(e.target.value);var text=e.target.value;var dateFormat=/^(\\d{4})-(\\d{2})-(\\d{2})$/;if(dateFormat.test(text)){success()}else{fail()}};',
                              },
                              line_number: 2,
                              callback1: [
                                {
                                  type: 'ifelse',
                                  condition: [
                                    {
                                      condId: '599958',
                                      options: { operate: 'notEmpty' },
                                      conditionType: 'checkValue',
                                      objType: 'DatePicker',
                                      objId: 'DatePicker_913266',
                                    },
                                  ],
                                  dataId: 168723963821191230,
                                  elseIfs: [],
                                  line_number: 3,
                                  callback1: [
                                    {
                                      type: 'getValue',
                                      dataId: 168723966594842460,
                                      options: {
                                        compId: 'DatePicker_913266',
                                        compLib: 'comm',
                                        pageJsonId: '537892',
                                        compName: 'DatePicker',
                                        id: '5183661',
                                      },
                                      line_number: 4,
                                      callback1: [
                                        {
                                          type: 'customActionCode',
                                          dataId: 168723966594855970,
                                          options: {
                                            compId: 'customActionCode',
                                            compName: 'page',
                                            id: '160601',
                                            pageJsonId: '537892',
                                            code: 'function main(data,state,success,fail){var dateB=e.target.value;var dateE=value_5183661;var date1=new Date(dateB);var date2=new Date(dateE);if(date1.getTime()<date2.getTime()){success()}else{fail()}};',
                                          },
                                          line_number: 5,
                                          callback1: [],
                                          callback2: [
                                            {
                                              type: 'showMessage',
                                              dataId: 168723966594859230,
                                              options: {
                                                compId: 'showMessage',
                                                compName: 'system',
                                                id: '99273086',
                                                pageJsonId: '537892',
                                                type: 'error',
                                                value:
                                                  '起始时间必须小于截止时间',
                                              },
                                              line_number: 6,
                                            },
                                            {
                                              type: 'clearValue',
                                              dataId: 168723966594835230,
                                              options: {
                                                compId: 'Input_249832',
                                                compLib: 'comm',
                                                pageJsonId: '537892',
                                                compName: 'Input',
                                                id: '5526248',
                                              },
                                              line_number: 7,
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                              callback2: [
                                {
                                  type: 'showMessage',
                                  dataId: 168716534383846140,
                                  options: {
                                    compId: 'showMessage',
                                    compName: 'system',
                                    id: '80963746',
                                    pageJsonId: '537892',
                                    type: 'error',
                                    value: '请输入正确的日期格式',
                                  },
                                  line_number: 8,
                                },
                                {
                                  type: 'clearValue',
                                  dataId: 168716561790976200,
                                  options: {
                                    compId: 'Input_249832',
                                    compLib: 'comm',
                                    pageJsonId: '537892',
                                    compName: 'Input',
                                    id: '275312',
                                  },
                                  line_number: 9,
                                },
                              ],
                            },
                          ],
                        },
                      ];
                      eventDatagetValue227.params =
                        [
                          {
                            title: '输入框取值',
                            name: 'e',
                            value: '$e.target.value$',
                          },
                        ] || [];
                      CMDGenerator(eventDatagetValue227, { e }, 'getValue', {
                        id: 'getValue',
                        name: 'getValue',
                        type: 'getValue',
                        platform: 'pc',
                      });
                    }}
                    ref={(r: any) => (refs['Input_249832'] = r)}
                    {...injectData}
                  />
                </View>
                <View
                  name={'布局容器'}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_243123',
                    uid: 'View_243123',
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
                    flex: 0.5,
                  }}
                  ref={(r: any) => (refs['View_243123'] = r)}
                  {...injectData}
                >
                  <Input
                    size={'default'}
                    selfSpan={''}
                    labelCol={'8'}
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
                    fieldName={'0'}
                    defaultValue={'——'}
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
                      id: 'Input_9310116',
                      uid: 'Input_9310116',
                      type: 'Input',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={true}
                    ref={(r: any) => (refs['Input_9310116'] = r)}
                    {...injectData}
                  />
                </View>
                <View
                  name={'布局容器'}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_9055732',
                    uid: 'View_9055732',
                    type: 'View',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{
                    textAlign: 'left',
                    display: 'block',
                    padding: '0px 0px 0px 0px',
                    width: '100px',
                    flex: 3,
                  }}
                  ref={(r: any) => (refs['View_9055732'] = r)}
                  {...injectData}
                >
                  <DatePicker
                    name={'日期选择'}
                    timeMode={'date'}
                    format={'YYYY-MM-DD'}
                    size={'default'}
                    selfSpan={''}
                    labelCol={8}
                    wrapperCol={16}
                    titleTip={'notext'}
                    tipLocation={'after'}
                    tipPlacement={'top'}
                    required={true}
                    limitRange={'no'}
                    startTime={''}
                    endTime={''}
                    placeholder={'请选择日期'}
                    pickerType={'DatePicker'}
                    customTip={''}
                    value={data?.factorForm?.busyDeadlineEnd}
                    fieldName={'busyDeadlineEnd'}
                    allowClear={true}
                    $$componentItem={{
                      id: 'DatePicker_913266',
                      uid: 'DatePicker_913266',
                      type: 'DatePicker',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    defaultValue={undefined}
                    onChange={(e: any) => {
                      const eventDatagetValue228: any = [
                        {
                          type: 'getValue',
                          dataId: 168716612568994180,
                          options: {
                            compId: 'Input_249832',
                            compLib: 'comm',
                            pageJsonId: '537892',
                            compName: 'Input',
                            id: '868689',
                          },
                          line_number: 1,
                          callback1: [
                            {
                              type: 'ifelse',
                              condition: [
                                {
                                  condId: '959558',
                                  options: { operate: 'notEmpty' },
                                  conditionType: 'checkValue',
                                  objType: 'Input',
                                  objId: 'Input_249832',
                                },
                              ],
                              dataId: 168716615502663260,
                              elseIfs: [
                                {
                                  dataName: 'elseIf',
                                  dataId: 168716625625307500,
                                  children: [
                                    {
                                      dataName: 'action',
                                      dataId: 168716627524650140,
                                      children: [],
                                      todoOptions: [
                                        'msgType',
                                        'value',
                                        'duration',
                                      ],
                                      options: {
                                        compId: 'showMessage',
                                        compName: 'system',
                                        id: '968621',
                                        pageJsonId: '537892',
                                        type: 'info',
                                        value: '请输入起始日期',
                                      },
                                      actionObjId: 'showMessage',
                                      actionObjName: 'system',
                                      value: 'showMessage',
                                      tips: '注意：当加载时长为0时，表示一直显示加载中。当加载时长大于0时，表示按照设置时间显示加载中。',
                                      line_number: 6,
                                    },
                                    {
                                      dataName: 'action',
                                      dataId: 168716674835726800,
                                      children: [],
                                      todoOptions: [],
                                      options: {
                                        compId: 'DatePicker_913266',
                                        compLib: 'comm',
                                        pageJsonId: '537892',
                                        compName: 'DatePicker',
                                        id: '3468817',
                                      },
                                      actionObjId: 'DatePicker_913266',
                                      actionObjName: 'DatePicker',
                                      value: 'clearValue',
                                      compLib: 'comm',
                                      shielding: true,
                                      line_number: 7,
                                    },
                                    {
                                      dataName: 'action',
                                      dataId: 168716742285797700,
                                      children: [
                                        {
                                          dataName: 'callback',
                                          dataId: 168716742285705380,
                                          children: [],
                                          value: 'callback1',
                                          params: [],
                                        },
                                      ],
                                      todoOptions: ['compId', 'valueList'],
                                      options: {
                                        compId: 'DatePicker_913266',
                                        compLib: 'comm',
                                        pageJsonId: '537892',
                                        compName: 'DatePicker',
                                        id: '460714',
                                        valueList: { DatePicker_913266: '' },
                                      },
                                      actionObjId: 'DatePicker_913266',
                                      actionObjName: 'DatePicker',
                                      value: 'setValue',
                                      compLib: 'comm',
                                      line_number: 8,
                                    },
                                  ],
                                  condition: [],
                                  value: 'elseIf',
                                  callback: [
                                    {
                                      type: 'showMessage',
                                      dataId: 168716627524650140,
                                      options: {
                                        compId: 'showMessage',
                                        compName: 'system',
                                        id: '968621',
                                        pageJsonId: '537892',
                                        type: 'info',
                                        value: '请输入起始日期',
                                      },
                                      line_number: 6,
                                    },
                                    {
                                      type: 'clearValue',
                                      dataId: 168716674835726800,
                                      shielding: true,
                                      options: {
                                        compId: 'DatePicker_913266',
                                        compLib: 'comm',
                                        pageJsonId: '537892',
                                        compName: 'DatePicker',
                                        id: '3468817',
                                      },
                                      line_number: 7,
                                    },
                                    {
                                      type: 'setValue',
                                      dataId: 168716742285797700,
                                      options: {
                                        compId: 'DatePicker_913266',
                                        compLib: 'comm',
                                        pageJsonId: '537892',
                                        compName: 'DatePicker',
                                        id: '460714',
                                        valueList: { DatePicker_913266: '' },
                                      },
                                      line_number: 8,
                                      callback1: [],
                                    },
                                  ],
                                },
                              ],
                              line_number: 2,
                              callback1: [
                                {
                                  type: 'customActionCode',
                                  dataId: 168716620211817250,
                                  options: {
                                    compId: 'customActionCode',
                                    compName: 'page',
                                    id: '138537',
                                    pageJsonId: '537892',
                                    code: 'function main(data,state,success,fail){var dateB=value_868689;var dateE=e;var date1=new Date(dateB);var date2=new Date(dateE);if(date1.getTime()<date2.getTime()){success()}else{fail()}};',
                                  },
                                  line_number: 3,
                                  callback1: [],
                                  callback2: [
                                    {
                                      type: 'setValue',
                                      dataId: 168716724929542430,
                                      options: {
                                        compId: 'DatePicker_913266',
                                        compLib: 'comm',
                                        pageJsonId: '537892',
                                        compName: 'DatePicker',
                                        id: '3396714',
                                        valueList: { DatePicker_913266: '' },
                                      },
                                      line_number: 4,
                                      callback1: [],
                                    },
                                    {
                                      type: 'showMessage',
                                      dataId: 168716736983201760,
                                      options: {
                                        compId: 'showMessage',
                                        compName: 'system',
                                        id: '664083',
                                        pageJsonId: '537892',
                                        type: 'error',
                                        value: '结束日期必须大于起始日期',
                                      },
                                      line_number: 5,
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ];
                      eventDatagetValue228.params =
                        [
                          { title: '日期选择框取值', name: 'e', value: '$e$' },
                        ] || [];
                      CMDGenerator(eventDatagetValue228, { e }, 'getValue', {
                        id: 'getValue',
                        name: 'getValue',
                        type: 'getValue',
                        platform: 'pc',
                      });
                    }}
                    ref={(r: any) => (refs['DatePicker_913266'] = r)}
                    {...injectData}
                  />
                </View>
                <View
                  name={'布局容器'}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_504283',
                    uid: 'View_504283',
                    type: 'View',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{
                    textAlign: 'left',
                    display: 'block',
                    padding: '0px 0px 0px 0px',
                    width: '100px',
                    flex: 1,
                  }}
                  ref={(r: any) => (refs['View_504283'] = r)}
                  {...injectData}
                >
                  <Button
                    name={'长期'}
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
                      id: 'Button_5578867',
                      uid: 'Button_5578867',
                      type: 'Button',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{ width: 'fit-content' }}
                    onClick={(e: any) => {
                      const eventDataifelse497: any = [
                        {
                          type: 'ifelse',
                          condition: [
                            {
                              options: {
                                context: '$data.pageData.isLongTerm$',
                                operate: 'notEmpty',
                              },
                              condId: '083717',
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                            {
                              options: {
                                useManual: true,
                                useObject: false,
                                context: '$data.pageData.isLongTerm$',
                                operate: '==',
                                manualValue: 'true',
                              },
                              condId: '644294',
                              connector: '&&',
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          dataId: 168682198981238370,
                          elseIfs: [
                            {
                              dataName: 'elseIf',
                              dataId: 168682198981262880,
                              children: [
                                {
                                  dataName: 'action',
                                  dataId: 168682198981293380,
                                  children: [],
                                  todoOptions: ['disabled', 'selectComp'],
                                  options: {
                                    compId: [
                                      'RangePicker_1469',
                                      'Input_249832',
                                      'DatePicker_913266',
                                    ],
                                    compLib: 'comm',
                                    pageJsonId: '537892',
                                    compName: 'RangePicker',
                                    id: '406429',
                                    disabled: 'true',
                                    compid: [
                                      'RangePicker_1469',
                                      'Input_249832',
                                      'DatePicker_913266',
                                    ],
                                  },
                                  actionObjId: 'RangePicker_1469',
                                  actionObjName: 'RangePicker',
                                  value: 'setDisable',
                                  compLib: 'comm',
                                  line_number: 7,
                                },
                                {
                                  dataName: 'action',
                                  dataId: 168682198981298300,
                                  children: [
                                    {
                                      dataName: 'callback',
                                      dataId: 168682198981234560,
                                      children: [
                                        {
                                          dataName: 'action',
                                          dataId: 168682198981264300,
                                          children: [
                                            {
                                              dataName: 'callback',
                                              dataId: 168682198981261950,
                                              children: [],
                                              value: 'callback1',
                                              params: [],
                                              shielding: true,
                                            },
                                          ],
                                          todoOptions: ['startVal', 'endVal'],
                                          options: {
                                            compId: 'RangePicker_1469',
                                            compLib: 'comm',
                                            pageJsonId: '537892',
                                            compName: 'RangePicker',
                                            id: '4693285',
                                            startVal: '2023-01-01',
                                            endVal: '2043-01-01',
                                          },
                                          actionObjId: 'RangePicker_1469',
                                          actionObjName: 'RangePicker',
                                          value: 'setRangeValue',
                                          compLib: 'comm',
                                          shielding: true,
                                          line_number: 9,
                                        },
                                        {
                                          dataName: 'action',
                                          dataId: 168716770179504420,
                                          children: [
                                            {
                                              dataName: 'callback',
                                              dataId: 168716770179514000,
                                              children: [],
                                              value: 'callback1',
                                              params: [],
                                            },
                                          ],
                                          todoOptions: ['compId', 'valueList'],
                                          options: {
                                            compId: [
                                              'Input_249832',
                                              'DatePicker_913266',
                                            ],
                                            compLib: 'comm',
                                            pageJsonId: '537892',
                                            compName: 'Input',
                                            id: '3931579',
                                            valueList: {
                                              Input_249832: '2023-01-01',
                                              DatePicker_913266: '2043-01-01',
                                            },
                                            compid: [
                                              'Input_249832',
                                              'DatePicker_913266',
                                            ],
                                          },
                                          actionObjId: 'Input_249832',
                                          actionObjName: 'Input',
                                          value: 'setValue',
                                          compLib: 'comm',
                                          line_number: 10,
                                        },
                                      ],
                                      value: 'callback1',
                                      params: [],
                                    },
                                    {
                                      dataName: 'callback',
                                      dataId: 168682198981294800,
                                      children: [],
                                      value: 'callback2',
                                      params: [],
                                    },
                                  ],
                                  todoOptions: ['actionTitle', 'editorCode'],
                                  options: {
                                    compId: 'customActionCode',
                                    compName: 'page',
                                    id: '627987',
                                    pageJsonId: '537892',
                                    actionTitle: '',
                                    code: 'function main(data,state,success,fail){var attrList=[];data.factorForm.busyDeadlineBegin="2023-01-01";data.factorForm.busyDeadlineEnd="2043-01-01";var obj=data.factorForm;for(var key in obj){attrList.push({"attrCode":key,"attrName":"","attrValue":obj[key]})}data.sceneSubmit.attrList=attrList;console.log("\\u573A\\u666F\\u63D0\\u4EA4\\u7684attrList: ",attrList);success(attrList)};',
                                  },
                                  actionObjId: 'customActionCode',
                                  actionObjName: 'page',
                                  value: 'customActionCode',
                                  line_number: 8,
                                },
                                {
                                  dataName: 'action',
                                  dataId: 168682198981283360,
                                  children: [],
                                  todoOptions: ['name', 'icon'],
                                  options: {
                                    compId: 'Button_5578867',
                                    compLib: 'comm',
                                    pageJsonId: '537892',
                                    compName: 'Button',
                                    id: '6526905',
                                    name: '取消',
                                  },
                                  actionObjId: 'Button_5578867',
                                  actionObjName: 'Button',
                                  value: 'changeContent',
                                  compLib: 'comm',
                                  line_number: 11,
                                },
                                {
                                  dataName: 'action',
                                  dataId: 168682198981205500,
                                  children: [
                                    {
                                      dataName: 'callback',
                                      dataId: 168682198981267300,
                                      children: [],
                                      value: 'callback1',
                                      params: [],
                                    },
                                    {
                                      dataName: 'callback',
                                      dataId: 168682198981202720,
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
                                    id: '987204',
                                    pageJsonId: '537892',
                                    dataSourceId: 168682024060707230,
                                    dataSourceName: 'pageData',
                                    dataSourceRelType: 'custom',
                                    dataSourceSetValue: [
                                      {
                                        attrId: '448085',
                                        code: 'isLongTerm',
                                        name: '是否长期',
                                        type: 'string',
                                        initialData: {
                                          type: 'static',
                                          value: 'false',
                                        },
                                        showInput: true,
                                        value: {
                                          type: ['customize'],
                                          code: 'true',
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
                                  line_number: 12,
                                },
                              ],
                              condition: [],
                              value: 'elseIf',
                              callback: [
                                {
                                  type: 'setDisable',
                                  dataId: 168682198981293380,
                                  options: {
                                    compId: [
                                      'RangePicker_1469',
                                      'Input_249832',
                                      'DatePicker_913266',
                                    ],
                                    compLib: 'comm',
                                    pageJsonId: '537892',
                                    compName: 'RangePicker',
                                    id: '406429',
                                    disabled: 'true',
                                    compid: [
                                      'RangePicker_1469',
                                      'Input_249832',
                                      'DatePicker_913266',
                                    ],
                                  },
                                  line_number: 7,
                                },
                                {
                                  type: 'customActionCode',
                                  dataId: 168682198981298300,
                                  options: {
                                    compId: 'customActionCode',
                                    compName: 'page',
                                    id: '627987',
                                    pageJsonId: '537892',
                                    actionTitle: '',
                                    code: 'function main(data,state,success,fail){var attrList=[];data.factorForm.busyDeadlineBegin="2023-01-01";data.factorForm.busyDeadlineEnd="2043-01-01";var obj=data.factorForm;for(var key in obj){attrList.push({"attrCode":key,"attrName":"","attrValue":obj[key]})}data.sceneSubmit.attrList=attrList;console.log("\\u573A\\u666F\\u63D0\\u4EA4\\u7684attrList: ",attrList);success(attrList)};',
                                  },
                                  line_number: 8,
                                  callback1: [
                                    {
                                      type: 'setRangeValue',
                                      dataId: 168682198981264300,
                                      shielding: true,
                                      options: {
                                        compId: 'RangePicker_1469',
                                        compLib: 'comm',
                                        pageJsonId: '537892',
                                        compName: 'RangePicker',
                                        id: '4693285',
                                        startVal: '2023-01-01',
                                        endVal: '2043-01-01',
                                      },
                                      line_number: 9,
                                      callback1: [],
                                    },
                                    {
                                      type: 'setValue',
                                      dataId: 168716770179504420,
                                      options: {
                                        compId: [
                                          'Input_249832',
                                          'DatePicker_913266',
                                        ],
                                        compLib: 'comm',
                                        pageJsonId: '537892',
                                        compName: 'Input',
                                        id: '3931579',
                                        valueList: {
                                          Input_249832: '2023-01-01',
                                          DatePicker_913266: '2043-01-01',
                                        },
                                        compid: [
                                          'Input_249832',
                                          'DatePicker_913266',
                                        ],
                                      },
                                      line_number: 10,
                                      callback1: [],
                                    },
                                  ],
                                  callback2: [],
                                },
                                {
                                  type: 'changeContent',
                                  dataId: 168682198981283360,
                                  options: {
                                    compId: 'Button_5578867',
                                    compLib: 'comm',
                                    pageJsonId: '537892',
                                    compName: 'Button',
                                    id: '6526905',
                                    name: '取消',
                                  },
                                  line_number: 11,
                                },
                                {
                                  type: 'setDataSource',
                                  dataId: 168682198981205500,
                                  options: {
                                    compId: 'setDataSource',
                                    compName: 'page',
                                    id: '987204',
                                    pageJsonId: '537892',
                                    dataSourceId: 168682024060707230,
                                    dataSourceName: 'pageData',
                                    dataSourceRelType: 'custom',
                                    dataSourceSetValue: [
                                      {
                                        attrId: '448085',
                                        code: 'isLongTerm',
                                        name: '是否长期',
                                        type: 'string',
                                        initialData: {
                                          type: 'static',
                                          value: 'false',
                                        },
                                        showInput: true,
                                        value: {
                                          type: ['customize'],
                                          code: 'true',
                                        },
                                      },
                                    ],
                                    operateType: 1,
                                    onlySetPatch: true,
                                    otherObjectArrayOptions: {},
                                    targetDataSourcePaths: [],
                                  },
                                  line_number: 12,
                                  callback1: [],
                                  callback2: [],
                                },
                              ],
                            },
                          ],
                          line_number: 1,
                          callback1: [
                            {
                              type: 'setDisable',
                              dataId: 168682198981238720,
                              options: {
                                compId: [
                                  'RangePicker_1469',
                                  'DatePicker_913266',
                                  'Input_249832',
                                ],
                                compLib: 'comm',
                                pageJsonId: '537892',
                                compName: 'RangePicker',
                                id: '2017385',
                                disabled: '',
                                compid: [
                                  'RangePicker_1469',
                                  'DatePicker_913266',
                                  'Input_249832',
                                ],
                              },
                              line_number: 2,
                            },
                            {
                              type: 'changeContent',
                              dataId: 168682198981264640,
                              options: {
                                compId: 'Button_5578867',
                                compLib: 'comm',
                                pageJsonId: '537892',
                                compName: 'Button',
                                id: '0272635',
                                name: '长期',
                              },
                              line_number: 3,
                            },
                            {
                              type: 'setDataSource',
                              dataId: 168682198981294980,
                              options: {
                                compId: 'setDataSource',
                                compName: 'page',
                                id: '539524',
                                pageJsonId: '537892',
                                dataSourceId: 168690497322361800,
                                dataSourceName: 'pageData',
                                dataSourceRelType: 'custom',
                                dataSourceSetValue: [
                                  {
                                    attrId: '1999901',
                                    code: 'isLongTerm',
                                    name: '是否长期',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: true,
                                    value: {
                                      type: ['customize'],
                                      code: 'false',
                                    },
                                    _codePath: ['isLongTerm'],
                                    _idpath: ['1999901'],
                                  },
                                  {
                                    attrId: '930958',
                                    code: 'checkLable',
                                    name: '功能费校验标识',
                                    type: 'string',
                                    initialData: { type: 'static', value: '1' },
                                    showInput: true,
                                    _codePath: ['checkLable'],
                                    _idpath: ['930958'],
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
                            {
                              type: 'setRangeValue',
                              dataId: 168682203353994700,
                              shielding: true,
                              options: {
                                compId: 'RangePicker_1469',
                                compLib: 'comm',
                                pageJsonId: '537892',
                                compName: 'RangePicker',
                                id: '616344',
                                startVal: '2023-01-01',
                              },
                              line_number: 5,
                              callback1: [],
                            },
                            {
                              type: 'setValue',
                              dataId: 16871675501488992,
                              options: {
                                compId: ['Input_249832'],
                                compLib: 'comm',
                                pageJsonId: '537892',
                                compName: 'Input',
                                id: '3243904',
                                valueList: { Input_249832: '2023-01-01' },
                                compid: ['Input_249832'],
                              },
                              line_number: 6,
                              callback1: [],
                            },
                          ],
                        },
                      ];
                      eventDataifelse497.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(eventDataifelse497, { e }, 'ifelse', {
                        id: 'ifelse',
                        name: 'ifelse',
                        type: 'ifelse',
                        platform: 'pc',
                      });
                    }}
                    ref={(r: any) => (refs['Button_5578867'] = r)}
                    {...injectData}
                  />
                </View>
              </View>
            </View>
            <Select
              name={'试用期'}
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
              fieldName={'probation'}
              value={data?.factorForm?.probation}
              formItemIndex={9}
              dataSource={[
                { id: '359411', label: '1个月', value: '1001' },
                { id: '174141', label: '2个月', value: '1002' },
                { id: '176009', label: '3个月', value: '1003' },
              ]}
              $$componentItem={{
                id: 'Select_60666',
                uid: 'Select_60666',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Select_60666'] = r)}
              {...injectData}
            />
            <View
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_0197953',
                uid: 'View_0197953',
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
                  formItemIndex: 10,
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
              ref={(r: any) => (refs['View_0197953'] = r)}
              {...injectData}
            />
            <TextArea
              name={'申请原因'}
              selfSpan={16}
              labelCol={'12%'}
              wrapperCol={'88%'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              placeholder={'请输入'}
              formItemIndex={11}
              tipIcon={{
                theme: 'outlined',
                type: 'question-circle',
                isIconFont: false,
              }}
              tipContent={
                '该集团主要为XX（集团简单介绍），原已合作XX业务。现阶段有意向与我司合作工地监控业务，合作期XX年。鉴于XX，拟申请按以下资费合作'
              }
              fieldName={'reason'}
              value={data?.factorForm?.reason}
              $$componentItem={{
                id: 'TextArea_908595_147348_2452545',
                uid: 'TextArea_908595_147348_2452545',
                type: 'TextArea',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['TextArea_908595_147348_2452545'] = r)}
              {...injectData}
            />
          </Form>
          <Row
            name={'行容器'}
            colSpan={24}
            gutterHorizontal={0}
            gutterVertical={0}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'Row_851124_14685846_4179477',
              uid: 'Row_851124_14685846_4179477',
              type: 'Row',
              ...componentItem,
            }}
            disabled={false}
            visible={false}
            readOnly={false}
            ref={(r: any) => (refs['Row_851124_14685846_4179477'] = r)}
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
              colSpace={12}
              rowSpace={16}
              formCode={'Form_395851'}
              $$componentItem={{
                id: 'Form_395851_1727917_661735_319855_152442_180382_912578',
                uid: 'Form_395851_1727917_661735_319855_152442_180382_912578',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ padding: '0px 0px 0px 0px', margin: '10px 0px 0px 0px' }}
              ref={(r: any) =>
                (refs[
                  'Form_395851_1727917_661735_319855_152442_180382_912578'
                ] = r)
              }
              {...injectData}
            >
              <Select
                name={'附件'}
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
                fieldName={'accessory'}
                formItemIndex={0}
                $$componentItem={{
                  id: 'Input_690228_5400337_280164_0694544_38738_7545196_9280921',
                  uid: 'Input_690228_5400337_280164_0694544_38738_7545196_9280921',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  (refs[
                    'Input_690228_5400337_280164_0694544_38738_7545196_9280921'
                  ] = r)
                }
                {...injectData}
              />
              <View
                name={'布局容器'}
                labelCol={8}
                wrapperCol={16}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_22346374_875512_9117364_899382_548798_637825_1233224',
                  uid: 'View_22346374_875512_9117364_899382_548798_637825_1233224',
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
                    formItemIndex: 1,
                    style: undefined,
                    selfSpan: undefined,
                  },
                }}
                style={{
                  display: 'block',
                  flexDirection: 'column',
                  padding: '0px 0px 0px 0px',
                  width: '100%',
                }}
                ref={(r: any) =>
                  (refs[
                    'View_22346374_875512_9117364_899382_548798_637825_1233224'
                  ] = r)
                }
                {...injectData}
              >
                <StdUpload
                  name={'附件上传'}
                  uploadStyle={'click'}
                  titleTip={'notext'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  fileNameEncode={false}
                  isWatermark={false}
                  optionalFile={false}
                  fileName={'file'}
                  selfSpan={''}
                  labelCol={'8'}
                  wrapperCol={16}
                  acceptType={[]}
                  withCredentials={true}
                  numberLimit={5}
                  singleFileMaxSize={50}
                  uploadText={'点击上传'}
                  deleteIcon={{
                    deleteIconTheme: 'outlined',
                    deleteIconType: 'delete',
                    deleteIconIsIconFont: false,
                    showRemoveIcon: false,
                  }}
                  downloadIcon={{
                    downloadIconTheme: 'outlined',
                    downloadIconType: 'download',
                    downloadIconIsIconFont: false,
                    showDownloadIcon: false,
                  }}
                  previewIcon={{
                    previewIconTheme: 'outlined',
                    previewIconType: 'eye',
                    previewIconIsIconFont: false,
                    showPreviewIcon: false,
                  }}
                  fieldName={'uploading'}
                  icon={{
                    type: undefined,
                    theme: 'outlined',
                    fontAddress: '',
                    isIconFont: false,
                    iconFileInfo: {},
                  }}
                  $$componentItem={{
                    id: 'StdUpload_6230546_867413_762296_170428_730988_094988_653018',
                    uid: 'StdUpload_6230546_867413_762296_170428_730988_094988_653018',
                    type: 'StdUpload',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ margin: '0px 0px 0px 0px' }}
                  onFinishUpload={(
                    file: any,
                    fileList: any,
                    fileId: any,
                    fileSize: any,
                    fileName: any,
                    fileResponse: any,
                  ) => {
                    const eventDatagetSelectedData361: any = [
                      {
                        type: 'getSelectedData',
                        dataId: 166372683775767040,
                        options: {
                          compId:
                            'Input_690228_5400337_280164_0694544_38738_7545196_9280921',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Select',
                          id: '424238',
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'setDataSource',
                            dataId: 166372684330134400,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '99325',
                              pageJsonId: '537892',
                              dataSourceId: 166192841018643170,
                              dataSourceName: 'fileInfoList',
                              dataSourceRelType: 'custom',
                              dataSourceReloadFilter: [],
                              dataSourceSetValue: [
                                {
                                  code: 'fileName',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  exampleValue: '附件名称',
                                  defaultValue: '',
                                  name: '附件名称',
                                  attrId: '458544',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1',
                                  parentType: 'object',
                                  value: {
                                    type: ['context', '$file?.name$'],
                                    code: '',
                                  },
                                },
                                {
                                  code: 'filePath',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  exampleValue: '附件文件路径',
                                  defaultValue: '',
                                  name: '附件文件路径',
                                  attrId: '6354087',
                                  initialData: {
                                    type: 'static',
                                    value: '附件文件路径',
                                  },
                                  parentKey: '1',
                                  parentType: 'object',
                                },
                                {
                                  code: 'fileServerType',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  exampleValue: '附件文件服务器类型',
                                  defaultValue: '',
                                  name: '附件文件服务器类型',
                                  attrId: '184934',
                                  initialData: {
                                    type: 'static',
                                    value: '附件文件服务器类型',
                                  },
                                  parentKey: '1',
                                  parentType: 'object',
                                },
                                {
                                  code: 'fileSubType',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  exampleValue: '附件分类-细类',
                                  defaultValue: '',
                                  name: '属性',
                                  attrId: '551676',
                                  initialData: {
                                    type: 'static',
                                    value: '附件分类-细类',
                                  },
                                  parentKey: '1',
                                  parentType: 'object',
                                },
                                {
                                  code: 'fileType',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  exampleValue: '附件分类-大类',
                                  defaultValue: '',
                                  name: '附件分类-大类',
                                  attrId: '383524',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1',
                                  parentType: 'object',
                                  value: {
                                    type: ['customize'],
                                    code: '$selectedData_424238[0].value$',
                                  },
                                },
                                {
                                  code: 'fileUrl',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  exampleValue: '附件url地址',
                                  defaultValue: '',
                                  name: '附件url地址',
                                  attrId: '726875',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1',
                                  parentType: 'object',
                                  value: {
                                    type: ['customize'],
                                    code: '$file?.response?.resultObject?.filePathInServer$',
                                  },
                                },
                                {
                                  code: 'tacheCode',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  exampleValue: '环节编码',
                                  defaultValue: '',
                                  name: '环节编码',
                                  attrId: '865444',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1',
                                  parentType: 'object',
                                  value: {
                                    type: ['customize'],
                                    code: '$state.tacheCode$',
                                  },
                                },
                                {
                                  attrId: '7419638',
                                  code: 'fileCode',
                                  name: '文件编码',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  value: {
                                    type: [
                                      'context',
                                      '$file?.response?.resultObject?.fileId$',
                                    ],
                                    code: '',
                                  },
                                },
                                {
                                  attrId: '097484',
                                  code: 'createTime',
                                  name: '创建时间',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  value: {
                                    type: ['customize'],
                                    code: '$file?.response?.resultObject?.statusDate$',
                                  },
                                },
                                {
                                  attrId: '604675',
                                  code: 'createStaff',
                                  name: '创建人',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  value: {
                                    type: ['customize'],
                                    code: '$state.createStaff$',
                                  },
                                },
                                {
                                  attrId: '729925',
                                  code: 'fileTypeName',
                                  name: '附件类型',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  value: {
                                    type: ['customize'],
                                    code: '$selectedData_424238[0].label$',
                                  },
                                },
                              ],
                              operateType: 0,
                              onlySetPatch: true,
                              otherObjectArrayOptions: {},
                            },
                            line_number: 2,
                            callback1: [
                              {
                                type: 'customActionCode',
                                dataId: 166372684330136800,
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '2501218',
                                  pageJsonId: '537892',
                                  code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=data.fileInfoList;success(data.sceneSubmit)};',
                                },
                                line_number: 3,
                                callback1: [
                                  {
                                    type: 'callParentCustomFunc',
                                    dataId: 166372684330169120,
                                    options: {
                                      compId: 'callParentCustomFunc',
                                      compName: 'system',
                                      id: '213682',
                                      pageJsonId: '537892',
                                      pathname: '/commonAuditOrder',
                                      pageId: '872682457815691264',
                                      customFuncName: 'getFactor',
                                      customFuncParams: '$data.sceneSubmit$',
                                    },
                                    line_number: 4,
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
                        callback2: [
                          {
                            type: 'showMessage',
                            dataId: 166372688410723070,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '306514',
                              pageJsonId: '537892',
                              type: 'error',
                              value: '请选择附件类型',
                            },
                            line_number: 5,
                          },
                        ],
                      },
                    ];
                    eventDatagetSelectedData361.params =
                      [
                        { title: '文件对象', name: 'file', value: '$file$' },
                        {
                          title: '文件列表',
                          name: 'fileList',
                          value: '$fileList$',
                        },
                        {
                          title: '文件ID',
                          name: 'fileId',
                          value: '$file?.response?.resultObject?.fileId$',
                        },
                        {
                          title: '文件大小',
                          name: 'fileSize',
                          value: '$file?.size$',
                        },
                        {
                          title: '文件名称',
                          name: 'fileName',
                          value: '$file?.name$',
                        },
                        {
                          title: '响应信息',
                          name: 'fileResponse',
                          value: '$file?.response$',
                        },
                      ] || [];
                    CMDGenerator(
                      eventDatagetSelectedData361,
                      {
                        file,
                        fileList,
                        fileId,
                        fileSize,
                        fileName,
                        fileResponse,
                      },
                      'getSelectedData',
                      {
                        id: 'getSelectedData',
                        name: 'getSelectedData',
                        type: 'getSelectedData',
                        platform: 'pc',
                      },
                    );
                  }}
                  onListenUploading={(
                    file: any,
                    fileList: any,
                    fileId: any,
                    fileSize: any,
                    fileName: any,
                    fileResponse: any,
                  ) => {
                    const eventDatacustomActionCode670: any = [
                      {
                        type: 'customActionCode',
                        dataId: 166192905624837500,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '5697634',
                          pageJsonId: '537892',
                          code: 'function main(data,state,success,fail){document.querySelectorAll(".pcfactory-upload-list-text").forEach(function(v){v.style.display="none"})};',
                        },
                        line_number: 1,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatacustomActionCode670.params =
                      [
                        { title: '文件对象', name: 'file', value: '$file$' },
                        {
                          title: '文件列表',
                          name: 'fileList',
                          value: '$fileList$',
                        },
                        {
                          title: '文件ID',
                          name: 'fileId',
                          value: '$file?.response?.resultObject?.fileId$',
                        },
                        {
                          title: '文件大小',
                          name: 'fileSize',
                          value: '$file?.size$',
                        },
                        {
                          title: '文件名称',
                          name: 'fileName',
                          value: '$file?.name$',
                        },
                        {
                          title: '响应信息',
                          name: 'fileResponse',
                          value: '$file?.response$',
                        },
                      ] || [];
                    CMDGenerator(
                      eventDatacustomActionCode670,
                      {
                        file,
                        fileList,
                        fileId,
                        fileSize,
                        fileName,
                        fileResponse,
                      },
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
                    (refs[
                      'StdUpload_6230546_867413_762296_170428_730988_094988_653018'
                    ] = r)
                  }
                  {...injectData}
                />
              </View>
            </Form>
          </Row>
        </View>
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_4949093_7915488_175811',
            uid: 'View_4949093_7915488_175811',
            type: 'View',
            ...componentItem,
          }}
          disabled={false}
          visible={false}
          readOnly={false}
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
          }}
          ref={(r: any) => (refs['View_4949093_7915488_175811'] = r)}
          {...injectData}
        >
          <Table
            name={'表格'}
            isFlexColumn={false}
            pageSize={10}
            current={1}
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
                title: '附件名称',
                key: 'fileName',
                dataIndex: 'fileName',
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
                title: '附件类型',
                key: 'fileTypeName',
                dataIndex: 'fileTypeName',
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
                title: '创建人',
                key: 'createStaff',
                dataIndex: 'createStaff',
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
                title: '创建时间',
                key: 'createTime',
                dataIndex: 'createTime',
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
            rowSelection={undefined}
            showHead={false}
            showTotal={false}
            showSizeChanger={false}
            showQuickJumper={false}
            pageSizeOptions={'[5,10,20]'}
            dataSource={data?.fileInfoList}
            rowActions={[
              {
                title: '删除',
                iconPos: 'left',
                icon: { theme: 'outlined', type: 'delete' },
                type: 'delete',
                id: '948989',
                rule: "state.scene === 'V'",
                checked: true,
              },
            ]}
            extend={[
              {
                id: '5476746',
                title: '下载',
                iconPos: 'left',
                icon: {
                  theme: 'outlined',
                  type: 'download',
                  isIconFont: false,
                },
                checked: true,
              },
            ]}
            rowKey={'fileCode'}
            dataSourceFromDataSourceConfig={'data.fileInfoList'}
            $$componentItem={{
              id: 'Table_5369494_494011_506325',
              uid: 'Table_5369494_494011_506325',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ margin: '10px 0px 0px 0px' }}
            onRowDelete={(rowId: any, row: any, index: any) => {
              const eventDatacustomActionCode671: any = [
                {
                  type: 'customActionCode',
                  dataId: 166192918606345900,
                  options: {
                    compId: 'customActionCode',
                    compName: 'page',
                    id: '8342055',
                    pageJsonId: '537892',
                    code: 'function main(data,state,success,fail){var newFileInfoList=[];for(var i=0;i<data.fileInfoList.length;i++){if(data.fileInfoList[i].fileCode!=rowId){newFileInfoList.push(data.fileInfoList[i])}}data.sceneSubmit.fileInfo=newFileInfoList;success(newFileInfoList)};',
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'setDataSource',
                      dataId: 166193290759619360,
                      options: {
                        compId: 'setDataSource',
                        compName: 'page',
                        id: '4133837',
                        pageJsonId: '537892',
                        dataSourceId: 166192841018643170,
                        dataSourceName: 'fileInfoList',
                        dataSourceRelType: 'custom',
                        dataSourceReloadFilter: [],
                        dataSourceSetValue: [
                          {
                            code: 'fileName',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '附件名称',
                            defaultValue: '',
                            name: '附件名称',
                            attrId: '458544',
                            initialData: { type: 'static', value: '' },
                            parentKey: '1',
                            parentType: 'object',
                          },
                          {
                            code: 'filePath',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '附件文件路径',
                            defaultValue: '',
                            name: '附件文件路径',
                            attrId: '6354087',
                            initialData: {
                              type: 'static',
                              value: '附件文件路径',
                            },
                            parentKey: '1',
                            parentType: 'object',
                          },
                          {
                            code: 'fileServerType',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '附件文件服务器类型',
                            defaultValue: '',
                            name: '附件文件服务器类型',
                            attrId: '184934',
                            initialData: {
                              type: 'static',
                              value: '附件文件服务器类型',
                            },
                            parentKey: '1',
                            parentType: 'object',
                          },
                          {
                            code: 'fileSubType',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '附件分类-细类',
                            defaultValue: '',
                            name: '属性',
                            attrId: '551676',
                            initialData: {
                              type: 'static',
                              value: '附件分类-细类',
                            },
                            parentKey: '1',
                            parentType: 'object',
                          },
                          {
                            code: 'fileType',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '附件分类-大类',
                            defaultValue: '',
                            name: '附件分类-大类',
                            attrId: '383524',
                            initialData: { type: 'static', value: '' },
                            parentKey: '1',
                            parentType: 'object',
                          },
                          {
                            code: 'fileUrl',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '附件url地址',
                            defaultValue: '',
                            name: '附件url地址',
                            attrId: '726875',
                            initialData: { type: 'static', value: '' },
                            parentKey: '1',
                            parentType: 'object',
                          },
                          {
                            code: 'tacheCode',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '环节编码',
                            defaultValue: '',
                            name: '环节编码',
                            attrId: '865444',
                            initialData: { type: 'static', value: '' },
                            parentKey: '1',
                            parentType: 'object',
                          },
                          {
                            attrId: '7419638',
                            code: 'fileCode',
                            name: '文件编码',
                            type: 'string',
                            initialData: { type: 'static' },
                          },
                          {
                            attrId: '097484',
                            code: 'createTime',
                            name: '创建时间',
                            type: 'string',
                            initialData: { type: 'static' },
                          },
                          {
                            attrId: '604675',
                            code: 'createStaff',
                            name: '创建人',
                            type: 'string',
                            initialData: { type: 'static' },
                          },
                          {
                            attrId: '729925',
                            code: 'fileTypeName',
                            name: '附件类型',
                            type: 'string',
                            initialData: { type: 'static' },
                          },
                        ],
                        newData: '$data_8342055$',
                        operateType: 3,
                        onlySetPatch: true,
                        otherObjectArrayOptions: {},
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'callParentCustomFunc',
                          dataId: 166193296648446750,
                          options: {
                            compId: 'callParentCustomFunc',
                            compName: 'system',
                            id: '773871',
                            pageJsonId: '537892',
                            pathname: '/commonAuditOrder',
                            pageId: '872682457815691264',
                            customFuncName: 'getFactor',
                            customFuncParams: '$data.sceneSubmit$',
                            modalPath: '/commonAuditOrder',
                          },
                          line_number: 3,
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
              eventDatacustomActionCode671.params =
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
                eventDatacustomActionCode671,
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
            onClickBtn1={(rowId: any, row: any, index: any) => {
              const eventDatadownloadByFileId72: any = [
                {
                  type: 'downloadByFileId',
                  dataId: 166193298494793600,
                  options: {
                    compId: 'downloadByFileId',
                    compName: 'system',
                    id: '698245',
                    pageJsonId: '537892',
                    data: '$rowId$',
                  },
                  line_number: 1,
                },
              ];
              eventDatadownloadByFileId72.params =
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
                eventDatadownloadByFileId72,
                { rowId, row, index },
                'downloadByFileId',
                {
                  id: 'downloadByFileId',
                  name: 'downloadByFileId',
                  type: 'downloadByFileId',
                  platform: 'pc',
                },
              );
            }}
            ref={(r: any) => (refs['Table_5369494_494011_506325'] = r)}
            {...injectData}
          />
        </View>
        <BusiComp0521965
          busiCompId={'922396081753948160'}
          name={'附件'}
          busiCompStates={{
            catalogCode: state?.catalogCode,
            scene: state?.scene,
            fileList: state?.itemList?.fileInfo,
          }}
          style={{ margin: '0 0 12px 0' }}
          ref={(r: any) => (refs['BOFramer_4149305_609402_3456665'] = r)}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(ClsCp_0011_0001$$Page, {
  pageId: '932159667155378176',
  hasLogin: false,
  dataSource,
  defaultState: {},
});
