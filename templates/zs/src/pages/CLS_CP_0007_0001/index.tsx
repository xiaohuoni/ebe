// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import {
  Checkbox,
  Divider,
  Form,
  HorizontalView,
  Input,
  Row,
  Select,
  StdUpload,
  Table,
  TextArea,
  View,
} from '@/components/factory';

import BusiComp0521965 from '@/components/BusiComp0521965';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const ClsCp_0007_0001$$Page: React.FC<PageProps> = ({
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
  const updatecostSum = (options_1553746: any) => {
    const eventDatagetCurrentFormValues10: any = [
      {
        type: 'getCurrentFormValues',
        dataId: 166977360130592350,
        options: {
          compId: 'Form_449441_1900385_965292_804694',
          compLib: 'comm',
          pageJsonId: '537892',
          compName: 'Form',
          id: '711993',
        },
        line_number: 1,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 166977360664644700,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '400114',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var accAdd=function accAdd(num1,num2){var r1,r2,m,c;try{r1=num1.toString().split(".")[1].length}catch(e){r1=0}try{r2=num2.toString().split(".")[1].length}catch(e){r2=0}c=Math.abs(r1-r2);m=Math.pow(10,Math.max(r1,r2));if(c>0){var cm=Math.pow(10,c);if(r1>r2){num1=Number(num1.toString().replace(".",""));num2=Number(num2.toString().replace(".",""))*cm}else{num1=Number(num1.toString().replace(".",""))*cm;num2=Number(num2.toString().replace(".",""))}}else{num1=Number(num1.toString().replace(".",""));num2=Number(num2.toString().replace(".",""))}return(num1+num2)/m};var toFixed=function toFixed(number,n){if(n>20||n<0){throw new RangeError("toFixed() digits argument must be between 0 and 20")}if(isNaN(number)||number>=Math.pow(10,21)){return number.toString()}if(typeof n=="undefined"||n==0){return Math.round(number).toString()}var result=number.toString();var arr=result.split(".");if(arr.length<2){result+=".";for(var i=0;i<n;i+=1){result+="0"}return result}var integer=arr[0];var decimal=arr[1];if(decimal.length==n){return result}if(decimal.length<n){for(var _i=0;_i<n-decimal.length;_i+=1){result+="0"}return result}result=integer+"."+decimal.substr(0,n);var last=decimal.substr(n,1);if(parseInt(last,10)>=5){var x=Math.pow(10,n);result=(Math.round(parseFloat(result)*x)+1)/x;result=result.toFixed(n)}return result};var cost=Form_449441_1900385_965292_804694.cost;var agentRemun=Form_449441_1900385_965292_804694.agentRemun;var agentDev=Form_449441_1900385_965292_804694.agentDev;if(agentDev=="1"){if(cost>0&&agentRemun>0){success(toFixed(accAdd(cost,agentRemun),2))}else if(cost>0){success(toFixed(cost,2))}else if(agentRemun>0){success(toFixed(agentRemun,2))}else{success("")}}else{if(cost>0){success(toFixed(cost,2))}else{success("")}}};',
            },
            line_number: 2,
            callback1: [
              {
                type: 'setValue',
                dataId: 166977360664605100,
                options: {
                  compId: 'Input_costSum_262092_698514',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '515079',
                  valueList: { Input_costSum_262092_698514: '$data_400114$' },
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'callSelfFunc',
                    dataId: 166977550254248640,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '2905673',
                      pageJsonId: '537892',
                      customFuncName: 'countBenefitProp',
                    },
                    line_number: 4,
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
    ];
    eventDatagetCurrentFormValues10.params =
      [
        {
          title: '事件入参',
          name: 'options_1553746',
          value: '$options_1553746$',
        },
      ] || [];
    CMDGenerator(
      eventDatagetCurrentFormValues10,
      { options_1553746 },
      'getCurrentFormValues',
      {
        id: 'getCurrentFormValues',
        name: 'getCurrentFormValues',
        type: 'getCurrentFormValues',
        platform: 'undefined',
      },
    );
  };
  const countBenefitProp = (options_150958: any) => {
    const eventDatagetCurrentFormValues11: any = [
      {
        type: 'getCurrentFormValues',
        dataId: 166977509004054880,
        options: {
          compId: 'Form_449441_1900385_965292_804694',
          compLib: 'comm',
          pageJsonId: '537892',
          compName: 'Form',
          id: '805913',
        },
        line_number: 1,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 166977510370656100,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '178709',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var toFixed=function toFixed(number,n){if(n>20||n<0){throw new RangeError("toFixed() digits argument must be between 0 and 20")}if(isNaN(number)||number>=Math.pow(10,21)){return number.toString()}if(typeof n=="undefined"||n==0){return Math.round(number).toString()}var result=number.toString();var arr=result.split(".");if(arr.length<2){result+=".";for(var i=0;i<n;i+=1){result+="0"}return result}var integer=arr[0];var decimal=arr[1];if(decimal.length==n){return result}if(decimal.length<n){for(var _i=0;_i<n-decimal.length;_i+=1){result+="0"}return result}result=integer+"."+decimal.substr(0,n);var last=decimal.substr(n,1);if(parseInt(last,10)>=5){var x=Math.pow(10,n);result=(Math.round(parseFloat(result)*x)+1)/x;result=result.toFixed(n)}return result};var wholeIncome=Form_449441_1900385_965292_804694.wholeIncome;var costSum=Form_449441_1900385_965292_804694.costSum;if(wholeIncome>=0&&costSum>0){console.log("wholeIncome&costSum",wholeIncome,costSum);var _result=wholeIncome/costSum;try{success(toFixed(_result.toLocaleString("fullwide",{useGrouping:false}),3))}catch(_unused){success(toFixed(_result,3))}}else{success("")}};',
            },
            line_number: 2,
            callback1: [
              {
                type: 'setValue',
                dataId: 166977548123859800,
                options: {
                  compId: 'Input_benefitProp_860043_952178',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '017145',
                  valueList: {
                    Input_benefitProp_860043_952178: '$data_178709$',
                  },
                },
                line_number: 3,
                callback1: [],
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDatagetCurrentFormValues11.params =
      [
        {
          title: '事件入参',
          name: 'options_150958',
          value: '$options_150958$',
        },
      ] || [];
    CMDGenerator(
      eventDatagetCurrentFormValues11,
      { options_150958 },
      'getCurrentFormValues',
      {
        id: 'getCurrentFormValues',
        name: 'getCurrentFormValues',
        type: 'getCurrentFormValues',
        platform: 'undefined',
      },
    );
  };
  const agentDevChange = (options_7474: any) => {
    const eventDatagetValue101: any = [
      {
        type: 'getValue',
        dataId: 167082551022509570,
        options: {
          compId: 'Input_agentDev_0668305_0628429',
          compLib: 'comm',
          pageJsonId: '537892',
          compName: 'Select',
          id: '3966495',
        },
        line_number: 1,
        callback1: [
          {
            type: 'ifelse',
            condition: [
              {
                condId: '2902572',
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$value_3966495$',
                  operate: '==',
                  manualValue: '1',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 167082551353914050,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 167082551353932860,
                children: [
                  {
                    dataName: 'action',
                    dataId: 168231719595720930,
                    children: [],
                    todoOptions: ['validateType', 'validateMsg'],
                    options: {
                      compId: 'Input_agentName_399394_68462585',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '156025',
                      validateStatus: '',
                    },
                    actionObjId: 'Input_agentName_399394_68462585',
                    actionObjName: 'Input',
                    value: 'validateMsg',
                    compLib: 'comm',
                    line_number: 5,
                  },
                  {
                    dataName: 'action',
                    dataId: 168231720739311400,
                    children: [],
                    todoOptions: ['validateType', 'validateMsg'],
                    options: {
                      compId: 'Input_agentRemun_014178_6898018',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '632892',
                      validateStatus: '',
                    },
                    actionObjId: 'Input_agentRemun_014178_6898018',
                    actionObjName: 'Input',
                    value: 'validateMsg',
                    compLib: 'comm',
                    line_number: 6,
                  },
                  {
                    dataName: 'action',
                    dataId: 168231727275570900,
                    children: [],
                    todoOptions: ['disabled', 'selectComp'],
                    options: {
                      compId: [
                        'Input_agentRemun_014178_6898018',
                        'Input_agentName_399394_68462585',
                      ],
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '1689196',
                      disabled: 'true',
                      compid: [
                        'Input_agentRemun_014178_6898018',
                        'Input_agentName_399394_68462585',
                      ],
                    },
                    actionObjId: 'Input_agentRemun_014178_6898018',
                    actionObjName: 'Input',
                    value: 'setDisable',
                    compLib: 'comm',
                    line_number: 7,
                  },
                  {
                    dataName: 'action',
                    dataId: 168231728077084960,
                    children: [],
                    todoOptions: ['required', 'selectComp'],
                    options: {
                      compId: [
                        'Input_agentRemun_014178_6898018',
                        'Input_agentName_399394_68462585',
                      ],
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '113096',
                      required: '',
                      compid: [
                        'Input_agentRemun_014178_6898018',
                        'Input_agentName_399394_68462585',
                      ],
                    },
                    actionObjId: 'Input_agentRemun_014178_6898018',
                    actionObjName: 'Input',
                    value: 'setRequired',
                    compLib: 'comm',
                    line_number: 8,
                  },
                  {
                    dataName: 'action',
                    dataId: 168250023362199780,
                    children: [],
                    todoOptions: [],
                    options: {
                      compId: 'Input_agentName_399394_68462585',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '170818',
                    },
                    actionObjId: 'Input_agentName_399394_68462585',
                    actionObjName: 'Input',
                    value: 'clearValue',
                    compLib: 'comm',
                    line_number: 9,
                  },
                  {
                    dataName: 'action',
                    dataId: 168250024168269630,
                    children: [],
                    todoOptions: [],
                    options: {
                      compId: 'Input_agentRemun_014178_6898018',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '845042',
                    },
                    actionObjId: 'Input_agentRemun_014178_6898018',
                    actionObjName: 'Input',
                    value: 'clearValue',
                    compLib: 'comm',
                    line_number: 10,
                  },
                ],
                condition: [],
                callback: [
                  {
                    type: 'validateMsg',
                    dataId: 168231719595720930,
                    options: {
                      compId: 'Input_agentName_399394_68462585',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '156025',
                      validateStatus: '',
                    },
                    line_number: 5,
                  },
                  {
                    type: 'validateMsg',
                    dataId: 168231720739311400,
                    options: {
                      compId: 'Input_agentRemun_014178_6898018',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '632892',
                      validateStatus: '',
                    },
                    line_number: 6,
                  },
                  {
                    type: 'setDisable',
                    dataId: 168231727275570900,
                    options: {
                      compId: [
                        'Input_agentRemun_014178_6898018',
                        'Input_agentName_399394_68462585',
                      ],
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '1689196',
                      disabled: 'true',
                      compid: [
                        'Input_agentRemun_014178_6898018',
                        'Input_agentName_399394_68462585',
                      ],
                    },
                    line_number: 7,
                  },
                  {
                    type: 'setRequired',
                    dataId: 168231728077084960,
                    options: {
                      compId: [
                        'Input_agentRemun_014178_6898018',
                        'Input_agentName_399394_68462585',
                      ],
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '113096',
                      required: '',
                      compid: [
                        'Input_agentRemun_014178_6898018',
                        'Input_agentName_399394_68462585',
                      ],
                    },
                    line_number: 8,
                  },
                  {
                    type: 'clearValue',
                    dataId: 168250023362199780,
                    options: {
                      compId: 'Input_agentName_399394_68462585',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '170818',
                    },
                    line_number: 9,
                  },
                  {
                    type: 'clearValue',
                    dataId: 168250024168269630,
                    options: {
                      compId: 'Input_agentRemun_014178_6898018',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '845042',
                    },
                    line_number: 10,
                  },
                ],
              },
            ],
            line_number: 2,
            callback1: [
              {
                type: 'setRequired',
                dataId: 167082551353927900,
                options: {
                  compId: [
                    'Input_agentRemun_014178_6898018',
                    'Input_agentName_399394_68462585',
                  ],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '857127',
                  required: 'true',
                  compid: [
                    'Input_agentRemun_014178_6898018',
                    'Input_agentName_399394_68462585',
                  ],
                },
                line_number: 3,
              },
              {
                type: 'setDisable',
                dataId: 167082551353931650,
                options: {
                  compId: [
                    'Input_agentRemun_014178_6898018',
                    'Input_agentName_399394_68462585',
                  ],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '4463537',
                  disabled: '',
                  compid: [
                    'Input_agentRemun_014178_6898018',
                    'Input_agentName_399394_68462585',
                  ],
                },
                line_number: 4,
              },
            ],
          },
        ],
      },
    ];
    eventDatagetValue101.params =
      [{ title: '事件入参', name: 'options_7474', value: '$options_7474$' }] ||
      [];
    CMDGenerator(eventDatagetValue101, { options_7474 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };
  const fileUpload = (options_6628063: any) => {
    const eventDatacustomActionCode197: any = [
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
    eventDatacustomActionCode197.params =
      [
        {
          title: '事件入参',
          name: 'options_6628063',
          value: '$options_6628063$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode197,
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

  React.useImperativeHandle(customActionMapRef, () => ({
    updatecostSum,
    countBenefitProp,
    agentDevChange,
    fileUpload,
  }));

  useEffect(() => {
    const eventDataapiRequest527: any = [
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
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '088178_body',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166972680240790460,
            options: {
              compId: 'Input_690228_5400337_280164_0694544_38738',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '6754685',
              data: '$reply_625824?.resultData$',
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
    eventDataapiRequest527.params = [] || [];
    CMDGenerator(eventDataapiRequest527, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest528: any = [
      {
        type: 'apiRequest',
        dataId: 167024474100253340,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '339751',
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
              dataKey: '339751_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '339751_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '339751_query',
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
                  dataKey: '339751_body.catalogCode',
                  value: { type: ['customize'], code: '$state.catalogCode$' },
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
                  dataKey: '339751_body.attrCode',
                  value: { type: ['customize'], code: 'isLessDiscount' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '339751_body',
            },
          ],
        },
        line_number: 3,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 167024477092082940,
            options: {
              compId: 'Input_787196',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '473727',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
              data: '$reply_339751?.resultData$',
            },
            line_number: 4,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest528.params = [] || [];
    CMDGenerator(eventDataapiRequest528, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest529: any = [
      {
        type: 'apiRequest',
        dataId: 166374328477269570,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '693036',
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
              dataKey: '693036_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '693036_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '693036_query',
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
                  dataKey: '693036_body.catalogCode',
                  value: { type: ['customize'], code: '$state.catalogCode$' },
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
                  dataKey: '693036_body.attrCode',
                  value: { type: ['customize'], code: 'agentDev' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '693036_body',
            },
          ],
        },
        line_number: 5,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166374333541305020,
            options: {
              compId: 'Input_agentDev_0668305_0628429',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '550258',
              data: '$reply_693036?.resultData$',
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
    eventDataapiRequest529.params = [] || [];
    CMDGenerator(eventDataapiRequest529, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest530: any = [
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
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '9817429_body',
            },
          ],
        },
        line_number: 7,
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
            line_number: 8,
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
                line_number: 9,
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
    eventDataapiRequest530.params = [] || [];
    CMDGenerator(eventDataapiRequest530, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse272: any = [
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
        line_number: 10,
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
            line_number: 11,
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
                      attrId: '7508345',
                      code: 'cost',
                      name: '成本',
                      type: 'number',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '0458083',
                      code: 'benefitProp',
                      name: '效益比',
                      type: 'number',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '99675377',
                      code: 'agentDev',
                      name: '是否代理商发展',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '9916',
                      code: 'agentName',
                      name: '代理商名称',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '446449',
                      code: 'agentRemun',
                      name: '代理商酬金',
                      type: 'number',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '756366',
                      code: 'costSum',
                      name: '总成本',
                      type: 'number',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '7260526',
                      code: 'isLessDiscount',
                      name: '是否低于7折',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '08707745',
                      code: 'wholeIncome',
                      name: '整体收入',
                      type: 'number',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '166597',
                      code: 'reason',
                      name: '申请原因',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 12,
                callback1: [
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
                    dataId: 167524299264381980,
                    elseIfs: [
                      {
                        dataName: 'elseIf',
                        dataId: 167524301317155650,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 167524302061158200,
                            children: [
                              {
                                dataName: 'callback',
                                dataId: 167524302061162500,
                                children: [],
                                value: 'callback1',
                                params: [],
                                elseIfs: [],
                              },
                              {
                                dataName: 'callback',
                                dataId: 167524302061122400,
                                children: [],
                                value: 'callback2',
                                params: [],
                                elseIfs: [],
                              },
                            ],
                            todoOptions: ['customFuncName', 'customFuncParams'],
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '7885984',
                              pageJsonId: '537892',
                              customFuncName: 'agentDevChange',
                            },
                            actionObjId: 'callSelfFunc',
                            actionObjName: 'system',
                            value: 'callSelfFunc',
                            elseIfs: [],
                            line_number: 14,
                          },
                        ],
                        condition: [],
                        elseIfs: [],
                        callback: [
                          {
                            type: 'callSelfFunc',
                            dataId: 167524302061158200,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '7885984',
                              pageJsonId: '537892',
                              customFuncName: 'agentDevChange',
                            },
                            line_number: 14,
                            callback1: [],
                            callback2: [],
                          },
                        ],
                      },
                    ],
                    line_number: 13,
                  },
                ],
                callback2: [],
              },
              {
                type: 'setValue',
                dataId: 166372671277159140,
                options: {
                  compId: 'Input_361479_887285_2150708_7460276_97629287_177208',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '1082857',
                  value: '$state.itemList.approveGradeName$',
                  valueList: {
                    Input_361479_887285_2150708_7460276_97629287_177208:
                      '$state.itemList.approveGradeName$',
                  },
                },
                line_number: 15,
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
            line_number: 16,
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
                line_number: 17,
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
                line_number: 18,
                callback1: [
                  {
                    type: 'setVisible',
                    dataId: 166746089064402880,
                    options: {
                      compId: 'Table_5369494',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Table',
                      id: '449725',
                    },
                    line_number: 19,
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
            line_number: 20,
            callback1: [
              {
                type: 'setVisible',
                dataId: 166372672789844300,
                options: {
                  compId: 'Input_361479_887285_2150708_7460276_97629287_177208',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '41253',
                  visible: 'true',
                },
                line_number: 21,
              },
              {
                type: 'sysSetVisible',
                dataId: 166244953733999170,
                options: {
                  compId: ['Row_851124'],
                  compName: 'page',
                  id: '675663',
                  pageJsonId: '537892',
                  compid: ['Row_851124'],
                  visible: '',
                },
                line_number: 22,
              },
              {
                type: 'setDisable',
                dataId: 166372674624233300,
                options: {
                  compId: [
                    'Input_361479_887285_2150708_7460276_97629287_177208',
                    'Form_449441_1900385_965292_804694',
                  ],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '947932',
                  disabled: 'true',
                  compid: [
                    'Input_361479_887285_2150708_7460276_97629287_177208',
                    'Form_449441_1900385_965292_804694',
                  ],
                },
                line_number: 23,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse272.params = [] || [];
    CMDGenerator(eventDataifelse272, {}, 'ifelse', {
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
          id: 'View_537892_1',
          uid: 'View_537892_1',
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
        ref={(r: any) => (refs['View_537892_1'] = r)}
        {...injectData}
      >
        <Divider
          name={'分割线'}
          orientation={'center'}
          type={'horizontal'}
          dashed={false}
          dividerText={'建筑监管云资费'}
          showTitle={true}
          $$componentItem={{
            id: 'Divider_27607',
            uid: 'Divider_27607',
            type: 'Divider',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ margin: '12px 0 12px 0', height: 'auto' }}
          ref={(r: any) => (refs['Divider_27607'] = r)}
          {...injectData}
        />
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_6806553',
            uid: 'View_6806553',
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
          ref={(r: any) => (refs['View_6806553'] = r)}
          {...injectData}
        >
          <HorizontalView
            name={'左右布局'}
            formItemIndex={0}
            $$componentItem={{
              id: 'HorizontalView_004602',
              uid: 'HorizontalView_004602',
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
            ref={(r: any) => (refs['HorizontalView_004602'] = r)}
            {...injectData}
          >
            <View
              name={'布局容器'}
              $$componentItem={{
                id: 'View_339406',
                uid: 'View_339406',
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
              ref={(r: any) => (refs['View_339406'] = r)}
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
                  id: 'Form_4311097_9385662_302551_716304_5234815',
                  uid: 'Form_4311097_9385662_302551_716304_5234815',
                  type: 'Form',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) =>
                  (refs['Form_4311097_9385662_302551_716304_5234815'] = r)
                }
                {...injectData}
              >
                <Checkbox
                  name={'审批场景'}
                  titleTip={'text'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  text={'建筑监管云资费'}
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
                    id: 'Checkbox_882584_5289015_934499_292792_78633593_084225',
                    uid: 'Checkbox_882584_5289015_934499_292792_78633593_084225',
                    type: 'Checkbox',
                    ...componentItem,
                  }}
                  disabled={true}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    (refs[
                      'Checkbox_882584_5289015_934499_292792_78633593_084225'
                    ] = r)
                  }
                  {...injectData}
                />
                <View
                  name={'布局容器'}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_855319',
                    uid: 'View_855319',
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
                  ref={(r: any) => (refs['View_855319'] = r)}
                  {...injectData}
                />
                <Input
                  name={'场景最高审批等级'}
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
                    id: 'Input_361479_887285_2150708_7460276_97629287_177208',
                    uid: 'Input_361479_887285_2150708_7460276_97629287_177208',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={false}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    (refs[
                      'Input_361479_887285_2150708_7460276_97629287_177208'
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
            labelAlign={'right'}
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
            formItemIndex={1}
            $$componentItem={{
              id: 'Form_449441_1900385_965292_804694',
              uid: 'Form_449441_1900385_965292_804694',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px', margin: '0px 0px 0px 0px' }}
            onValuesChange={(changedFieldName: any, changedValue: any) => {
              const eventDatasetDataSource241: any = [
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
                        code: 'wholeIncome',
                        name: '整体收入',
                        type: 'number',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694',
                            'getFieldsValue',
                          ],
                          code: 'wholeIncome',
                        },
                      },
                      {
                        attrId: '7508345',
                        code: 'cost',
                        name: '成本',
                        type: 'number',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694',
                            'getFieldsValue',
                          ],
                          code: 'cost',
                        },
                      },
                      {
                        attrId: '99675377',
                        code: 'agentDev',
                        name: '是否代理商发展',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694',
                            'getFieldsValue',
                          ],
                          code: 'agentDev',
                        },
                      },
                      {
                        attrId: '9916',
                        code: 'agentName',
                        name: '代理商名称',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694',
                            'getFieldsValue',
                          ],
                          code: 'agentName',
                        },
                      },
                      {
                        attrId: '446449',
                        code: 'agentRemun',
                        name: '代理商酬金',
                        type: 'number',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694',
                            'getFieldsValue',
                          ],
                          code: 'agentRemun',
                        },
                      },
                      {
                        attrId: '756366',
                        code: 'costSum',
                        name: '总成本',
                        type: 'number',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694',
                            'getFieldsValue',
                          ],
                          code: 'costSum',
                        },
                      },
                      {
                        attrId: '0458083',
                        code: 'benefitProp',
                        name: '效益比',
                        type: 'number',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694',
                            'getFieldsValue',
                          ],
                          code: 'benefitProp',
                        },
                      },
                      {
                        attrId: '7260526',
                        code: 'isLessDiscount',
                        name: '是否低于7折',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694',
                            'getFieldsValue',
                          ],
                          code: 'isLessDiscount',
                        },
                      },
                      {
                        attrId: '166597',
                        code: 'reason',
                        name: '申请原因',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694',
                            'getFieldsValue',
                          ],
                          code: 'reason',
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
                        code: 'function main(data,state,success,fail){var attrList=[];var obj=data.factorForm;for(var key in obj){attrList.push({"attrCode":key,"attrName":"","attrValue":obj[key]})}data.sceneSubmit.attrList=attrList;success(attrList)};',
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
              eventDatasetDataSource241.params =
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
                eventDatasetDataSource241,
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
            ref={(r: any) => (refs['Form_449441_1900385_965292_804694'] = r)}
            {...injectData}
          >
            <Input
              name={'整体收入'}
              size={'default'}
              selfSpan={8}
              labelCol={'8'}
              wrapperCol={'16'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'元'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              fieldName={'wholeIncome'}
              value={data?.factorForm?.wholeIncome}
              formItemIndex={0}
              regexp={[
                {
                  id: '4493261',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入正数最多2位小数',
                  pattern: '/^(([1-9]{1}\\d*)|(0{1}))(\\.\\d{0,2})?$/',
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
                id: 'Input_discount_419327_355998',
                uid: 'Input_discount_419327_355998',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onBlur={(e: any) => {
                const eventDatagetValue249: any = [
                  {
                    type: 'getValue',
                    dataId: 166374369037264800,
                    shielding: true,
                    options: {
                      compId: 'Input_cost_700244_4053166',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '966711',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'ifelse',
                        shielding: true,
                        condition: [
                          {
                            condId: '570441',
                            options: {
                              context: '$value_966711$',
                              operate: 'notEmpty',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 166374369037299170,
                        elseIfs: [],
                        line_number: 2,
                        callback1: [
                          {
                            type: 'getValue',
                            dataId: 166374369037237100,
                            shielding: true,
                            options: {
                              compId: 'Input_agentRemun_014178_6898018',
                              compLib: 'comm',
                              pageJsonId: '537892',
                              compName: 'Input',
                              id: '76504573',
                            },
                            line_number: 3,
                            callback1: [
                              {
                                type: 'ifelse',
                                shielding: true,
                                condition: [
                                  {
                                    condId: '940789',
                                    options: {
                                      context: '$value_76504573$',
                                      operate: 'notEmpty',
                                    },
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                                dataId: 166374369037269120,
                                elseIfs: [],
                                line_number: 4,
                                callback1: [
                                  {
                                    type: 'getValue',
                                    dataId: 166374371798783580,
                                    shielding: true,
                                    options: {
                                      compId: 'Input_discount_419327_355998',
                                      compLib: 'comm',
                                      pageJsonId: '537892',
                                      compName: 'Input',
                                      id: '87814554',
                                    },
                                    line_number: 5,
                                    callback1: [
                                      {
                                        type: 'ifelse',
                                        shielding: true,
                                        condition: [
                                          {
                                            condId: '1440356',
                                            options: {
                                              context: '$value_87814554$',
                                              operate: 'notEmpty',
                                            },
                                            conditionType: 'checkContextValue',
                                            objType: 'system',
                                            objId: 'sys',
                                          },
                                        ],
                                        dataId: 166374371798715200,
                                        elseIfs: [],
                                        line_number: 6,
                                        callback1: [
                                          {
                                            type: 'customActionCode',
                                            dataId: 166374497976545500,
                                            shielding: true,
                                            options: {
                                              compId: 'customActionCode',
                                              compName: 'page',
                                              id: '0659865',
                                              pageJsonId: '537892',
                                              code: 'function main(data,state,success,fail){var sum=parseInt(value_87814554)/(parseInt(value_76504573)+parseInt(value_966711));success(sum)};',
                                            },
                                            line_number: 7,
                                            callback1: [
                                              {
                                                type: 'setValue',
                                                dataId: 166374497976545470,
                                                shielding: true,
                                                options: {
                                                  compId:
                                                    'Input_benefitProp_860043_952178',
                                                  compLib: 'comm',
                                                  pageJsonId: '537892',
                                                  compName: 'Input',
                                                  id: '197809',
                                                  value: '$data_0659865$',
                                                },
                                                line_number: 8,
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
                        ],
                      },
                    ],
                  },
                ];
                eventDatagetValue249.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatagetValue249, { e }, 'getValue', {
                  id: 'getValue',
                  name: 'getValue',
                  type: 'getValue',
                  platform: 'pc',
                });
              }}
              onChange={(e: any) => {
                const eventDatacallSelfFunc672: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166977551563592100,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '6761325',
                      pageJsonId: '537892',
                      customFuncName: 'countBenefitProp',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc672.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc672, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Input_discount_419327_355998'] = r)}
              {...injectData}
            />
            <Input
              name={'成本'}
              size={'default'}
              selfSpan={8}
              labelCol={'8'}
              wrapperCol={'16'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'元'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              fieldName={'cost'}
              value={data?.factorForm?.cost}
              formItemIndex={1}
              regexp={[
                {
                  id: '176932',
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
                id: 'Input_cost_700244_4053166',
                uid: 'Input_cost_700244_4053166',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onBlur={(e: any) => {
                const eventDatagetValue250: any = [
                  {
                    type: 'getValue',
                    dataId: 166374350275566180,
                    shielding: true,
                    options: {
                      compId: 'Input_cost_700244_4053166',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '027702',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'ifelse',
                        shielding: true,
                        condition: [
                          {
                            condId: '570441',
                            options: {
                              context: '$value_027702$',
                              operate: 'notEmpty',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 166374350275585820,
                        elseIfs: [],
                        line_number: 2,
                        callback1: [
                          {
                            type: 'getValue',
                            dataId: 166374350275574900,
                            shielding: true,
                            options: {
                              compId: 'Input_agentRemun_014178_6898018',
                              compLib: 'comm',
                              pageJsonId: '537892',
                              compName: 'Input',
                              id: '7915238',
                            },
                            line_number: 3,
                            callback1: [
                              {
                                type: 'ifelse',
                                shielding: true,
                                condition: [
                                  {
                                    condId: '940789',
                                    options: {
                                      context: '$value_7915238$',
                                      operate: 'notEmpty',
                                    },
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                                dataId: 166374350275537570,
                                elseIfs: [],
                                line_number: 4,
                                callback1: [
                                  {
                                    type: 'customActionCode',
                                    dataId: 166374438061299500,
                                    shielding: true,
                                    options: {
                                      compId: 'customActionCode',
                                      compName: 'page',
                                      id: '13408',
                                      pageJsonId: '537892',
                                      code: 'function main(data,state,success,fail){var sum=parseInt(value_7915238)+parseInt(value_027702);success(sum)};',
                                    },
                                    line_number: 5,
                                    callback1: [
                                      {
                                        type: 'setValue',
                                        dataId: 166374448098199970,
                                        shielding: true,
                                        options: {
                                          compId: 'Input_costSum_262092_698514',
                                          compLib: 'comm',
                                          pageJsonId: '537892',
                                          compName: 'Input',
                                          id: '671261',
                                          value: '$data_13408$',
                                          valueList: {
                                            Input_costSum_262092_698514:
                                              '$data_13408$',
                                          },
                                        },
                                        line_number: 6,
                                        callback1: [],
                                      },
                                    ],
                                    callback2: [],
                                  },
                                  {
                                    type: 'getValue',
                                    dataId: 166374377399527000,
                                    shielding: true,
                                    options: {
                                      compId: 'Input_discount_419327_355998',
                                      compLib: 'comm',
                                      pageJsonId: '537892',
                                      compName: 'Input',
                                      id: '313187',
                                    },
                                    line_number: 7,
                                    callback1: [
                                      {
                                        type: 'ifelse',
                                        shielding: true,
                                        condition: [
                                          {
                                            condId: '1440356',
                                            options: {
                                              context: '$value_313187$',
                                              operate: 'notEmpty',
                                            },
                                            conditionType: 'checkContextValue',
                                            objType: 'system',
                                            objId: 'sys',
                                          },
                                        ],
                                        dataId: 166374377399539600,
                                        elseIfs: [],
                                        line_number: 8,
                                        callback1: [
                                          {
                                            type: 'customActionCode',
                                            dataId: 166374485990061300,
                                            shielding: true,
                                            options: {
                                              compId: 'customActionCode',
                                              compName: 'page',
                                              id: '7320695',
                                              pageJsonId: '537892',
                                              code: 'function main(data,state,success,fail){var sum=parseInt(value_313187)/(parseInt(value_7915238)+parseInt(value_027702));success(sum)};',
                                            },
                                            line_number: 9,
                                            callback1: [
                                              {
                                                type: 'setValue',
                                                dataId: 166374492570004830,
                                                shielding: true,
                                                options: {
                                                  compId:
                                                    'Input_benefitProp_860043_952178',
                                                  compLib: 'comm',
                                                  pageJsonId: '537892',
                                                  compName: 'Input',
                                                  id: '634873',
                                                  value: '$data_7320695$',
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
                eventDatagetValue250.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatagetValue250, { e }, 'getValue', {
                  id: 'getValue',
                  name: 'getValue',
                  type: 'getValue',
                  platform: 'pc',
                });
              }}
              onChange={(e: any) => {
                const eventDatacallSelfFunc673: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166977553671672900,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '614282',
                      pageJsonId: '537892',
                      customFuncName: 'updatecostSum',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc673.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc673, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Input_cost_700244_4053166'] = r)}
              {...injectData}
            />
            <Select
              name={'是否低于7折'}
              size={'default'}
              selfSpan={''}
              labelCol={'8'}
              wrapperCol={'16'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              filter={'none'}
              classification={'default'}
              attr={{}}
              placeholder={'请选择'}
              fieldName={'isLessDiscount'}
              value={data?.factorForm?.isLessDiscount}
              formItemIndex={2}
              defaultValue={'1'}
              $$componentItem={{
                id: 'Input_787196',
                uid: 'Input_787196',
                type: 'Select',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_787196'] = r)}
              {...injectData}
            />
            <Select
              name={'是否代理商发展'}
              size={'default'}
              selfSpan={8}
              labelCol={'8'}
              wrapperCol={'16'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              filter={'none'}
              classification={'default'}
              attr={{}}
              placeholder={'是否代理商发展'}
              fieldName={'agentDev'}
              value={data?.factorForm?.agentDev}
              formItemIndex={3}
              $$componentItem={{
                id: 'Input_agentDev_0668305_0628429',
                uid: 'Input_agentDev_0668305_0628429',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatacallSelfFunc674: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 167082558633098750,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '3640704',
                      pageJsonId: '537892',
                      customFuncName: 'updatecostSum',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'callSelfFunc',
                        dataId: 167082559310498900,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '709419',
                          pageJsonId: '537892',
                          customFuncName: 'agentDevChange',
                        },
                        line_number: 2,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc674.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDatacallSelfFunc674, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Input_agentDev_0668305_0628429'] = r)}
              {...injectData}
            />
            <Input
              name={'代理商名称'}
              size={'default'}
              selfSpan={8}
              labelCol={'8'}
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
              fieldName={'agentName'}
              value={data?.factorForm?.agentName}
              formItemIndex={4}
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
                id: 'Input_agentName_399394_68462585',
                uid: 'Input_agentName_399394_68462585',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_agentName_399394_68462585'] = r)}
              {...injectData}
            />
            <Input
              name={'代理商酬金'}
              size={'default'}
              selfSpan={8}
              labelCol={'8'}
              wrapperCol={'16'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'元'}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              fieldName={'agentRemun'}
              value={data?.factorForm?.agentRemun}
              formItemIndex={5}
              regexp={[
                {
                  id: '104707',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入正数最多2位小数',
                  pattern: '/^(([1-9]{1}\\d*)|(0{1}))(\\.\\d{0,2})?$/',
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
                id: 'Input_agentRemun_014178_6898018',
                uid: 'Input_agentRemun_014178_6898018',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onBlur={(e: any) => {
                const eventDatagetValue251: any = [
                  {
                    type: 'getValue',
                    dataId: 166374197178134140,
                    shielding: true,
                    options: {
                      compId: 'Input_cost_700244_4053166',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '627565',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'ifelse',
                        shielding: true,
                        condition: [
                          {
                            condId: '570441',
                            options: {
                              context: '$value_627565$',
                              operate: 'notEmpty',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 166374197178108670,
                        elseIfs: [],
                        line_number: 2,
                        callback1: [
                          {
                            type: 'getValue',
                            dataId: 166374197178175360,
                            shielding: true,
                            options: {
                              compId: 'Input_agentRemun_014178_6898018',
                              compLib: 'comm',
                              pageJsonId: '537892',
                              compName: 'Input',
                              id: '1419824',
                            },
                            line_number: 3,
                            callback1: [
                              {
                                type: 'ifelse',
                                shielding: true,
                                condition: [
                                  {
                                    condId: '940789',
                                    options: {
                                      context: '$value_1419824$',
                                      operate: 'notEmpty',
                                    },
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                                dataId: 166374197178147900,
                                elseIfs: [],
                                line_number: 4,
                                callback1: [
                                  {
                                    type: 'customActionCode',
                                    dataId: 166374475303765600,
                                    shielding: true,
                                    options: {
                                      compId: 'customActionCode',
                                      compName: 'page',
                                      id: '367345',
                                      pageJsonId: '537892',
                                      code: 'function main(data,state,success,fail){var sum=parseInt(value_1419824)+parseInt(value_627565);success(sum)};',
                                    },
                                    line_number: 5,
                                    callback1: [
                                      {
                                        type: 'setValue',
                                        dataId: 166374479539588580,
                                        shielding: true,
                                        options: {
                                          compId: 'Input_costSum_262092_698514',
                                          compLib: 'comm',
                                          pageJsonId: '537892',
                                          compName: 'Input',
                                          id: '678039',
                                          value: '$data_367345$',
                                          valueList: {
                                            Input_costSum_262092_698514:
                                              '$data_367345$',
                                          },
                                        },
                                        line_number: 6,
                                        callback1: [],
                                      },
                                    ],
                                    callback2: [],
                                  },
                                  {
                                    type: 'getValue',
                                    dataId: 166374514537113100,
                                    shielding: true,
                                    options: {
                                      compId: 'Input_discount_419327_355998',
                                      compLib: 'comm',
                                      pageJsonId: '537892',
                                      compName: 'Input',
                                      id: '997401',
                                    },
                                    line_number: 7,
                                    callback1: [
                                      {
                                        type: 'ifelse',
                                        shielding: true,
                                        condition: [
                                          {
                                            condId: '1440356',
                                            options: {
                                              context: '$value_997401$',
                                              operate: 'notEmpty',
                                            },
                                            conditionType: 'checkContextValue',
                                            objType: 'system',
                                            objId: 'sys',
                                          },
                                        ],
                                        dataId: 166374514537156450,
                                        elseIfs: [],
                                        line_number: 8,
                                        callback1: [
                                          {
                                            type: 'customActionCode',
                                            dataId: 166374514537133250,
                                            shielding: true,
                                            options: {
                                              compId: 'customActionCode',
                                              compName: 'page',
                                              id: '584195',
                                              pageJsonId: '537892',
                                              code: 'function main(data,state,success,fail){var sum=parseInt(value_997401)/(parseInt(value_1419824)+parseInt(value_627565));success(sum)};',
                                            },
                                            line_number: 9,
                                            callback1: [
                                              {
                                                type: 'setValue',
                                                dataId: 166374514537148900,
                                                shielding: true,
                                                options: {
                                                  compId:
                                                    'Input_benefitProp_860043_952178',
                                                  compLib: 'comm',
                                                  pageJsonId: '537892',
                                                  compName: 'Input',
                                                  id: '3302863',
                                                  value: '$data_584195$',
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
                eventDatagetValue251.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatagetValue251, { e }, 'getValue', {
                  id: 'getValue',
                  name: 'getValue',
                  type: 'getValue',
                  platform: 'pc',
                });
              }}
              onChange={(e: any) => {
                const eventDatacallSelfFunc675: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166977556125746620,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '667944',
                      pageJsonId: '537892',
                      customFuncName: 'updatecostSum',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc675.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc675, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Input_agentRemun_014178_6898018'] = r)}
              {...injectData}
            />
            <Input
              name={'总成本'}
              size={'default'}
              selfSpan={8}
              labelCol={'8'}
              wrapperCol={'16'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'元'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              fieldName={'costSum'}
              value={data?.factorForm?.costSum}
              formItemIndex={6}
              regexp={[
                {
                  id: '0128607',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入正数最多2位小数',
                  pattern: '/^(([1-9]{1}\\d*)|(0{1}))(\\.\\d{0,2})?$/',
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
                id: 'Input_costSum_262092_698514',
                uid: 'Input_costSum_262092_698514',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_costSum_262092_698514'] = r)}
              {...injectData}
            />
            <Input
              name={'效益比'}
              size={'default'}
              selfSpan={8}
              labelCol={'8'}
              wrapperCol={'16'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              fieldName={'benefitProp'}
              value={data?.factorForm?.benefitProp}
              formItemIndex={7}
              regexp={[
                {
                  id: '5232093',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入正数最多3位小数',
                  pattern: '/^(([1-9]{1}\\d*)|(0{1}))(\\.\\d{0,3})?$/',
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
                id: 'Input_benefitProp_860043_952178',
                uid: 'Input_benefitProp_860043_952178',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_benefitProp_860043_952178'] = r)}
              {...injectData}
            />
            <TextArea
              name={'申请原因'}
              selfSpan={24}
              labelCol={'3'}
              wrapperCol={'21'}
              titleTip={'text'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              placeholder={'请输入'}
              formItemIndex={8}
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
                id: 'TextArea_908595',
                uid: 'TextArea_908595',
                type: 'TextArea',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['TextArea_908595'] = r)}
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
              id: 'Row_851124',
              uid: 'Row_851124',
              type: 'Row',
              ...componentItem,
            }}
            disabled={false}
            visible={false}
            readOnly={false}
            ref={(r: any) => (refs['Row_851124'] = r)}
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
                id: 'Form_395851_1727917_661735_319855_152442',
                uid: 'Form_395851_1727917_661735_319855_152442',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ padding: '0px 0px 0px 0px', margin: '10px 0px 0px 0px' }}
              ref={(r: any) =>
                (refs['Form_395851_1727917_661735_319855_152442'] = r)
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
                  id: 'Input_690228_5400337_280164_0694544_38738',
                  uid: 'Input_690228_5400337_280164_0694544_38738',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  (refs['Input_690228_5400337_280164_0694544_38738'] = r)
                }
                {...injectData}
              />
              <View
                name={'布局容器'}
                labelCol={8}
                wrapperCol={16}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_22346374_875512_9117364_899382_548798',
                  uid: 'View_22346374_875512_9117364_899382_548798',
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
                  (refs['View_22346374_875512_9117364_899382_548798'] = r)
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
                    id: 'StdUpload_6230546_867413_762296_170428_730988',
                    uid: 'StdUpload_6230546_867413_762296_170428_730988',
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
                    const eventDatagetSelectedData417: any = [
                      {
                        type: 'getSelectedData',
                        dataId: 166372683775767040,
                        options: {
                          compId: 'Input_690228_5400337_280164_0694544_38738',
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
                    eventDatagetSelectedData417.params =
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
                      eventDatagetSelectedData417,
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
                    const eventDatacustomActionCode779: any = [
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
                    eventDatacustomActionCode779.params =
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
                      eventDatacustomActionCode779,
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
                    (refs['StdUpload_6230546_867413_762296_170428_730988'] = r)
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
            id: 'View_4949093',
            uid: 'View_4949093',
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
          ref={(r: any) => (refs['View_4949093'] = r)}
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
              id: 'Table_5369494',
              uid: 'Table_5369494',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ margin: '10px 0px 0px 0px' }}
            onRowDelete={(rowId: any, row: any, index: any) => {
              const eventDatacustomActionCode780: any = [
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
              eventDatacustomActionCode780.params =
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
                eventDatacustomActionCode780,
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
              const eventDatadownloadByFileId100: any = [
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
              eventDatadownloadByFileId100.params =
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
                eventDatadownloadByFileId100,
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
            ref={(r: any) => (refs['Table_5369494'] = r)}
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
          ref={(r: any) => (refs['BOFramer_4149305'] = r)}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(ClsCp_0007_0001$$Page, {
  pageId: '889491771150135296',
  hasLogin: false,
  dataSource,
  defaultState: {},
});
