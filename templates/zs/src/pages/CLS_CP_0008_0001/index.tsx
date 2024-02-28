// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  Divider,
  HorizontalView,
  Form,
  Checkbox,
  Input,
  MultipleSelect,
  TextArea,
  Row,
  Select,
  StdUpload,
  Table,
} from '@/components/factory';

import BusiComp0521965 from '@/components/BusiComp0521965';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '897681314890354688';
const ClsCp_0008_0001$$Page: React.FC<PageProps> = ({
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
  const fileUpload = (options_169578: any) => {
    const eventDatacustomActionCode172: any = [
      {
        type: 'customActionCode',
        dataId: 167282472050434340,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '65925',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=options_169578;success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'callParentCustomFunc',
            dataId: 167282473100137920,
            options: {
              compId: 'callParentCustomFunc',
              compName: 'system',
              id: '167517',
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
    eventDatacustomActionCode172.params =
      [
        {
          title: '事件入参',
          name: 'options_169578',
          value: '$options_169578$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode172,
      { options_169578 },
      'customActionCode',
      {
        id: 'customActionCode',
        name: 'customActionCode',
        type: 'customActionCode',
        platform: 'undefined',
      },
    );
  };
  const calDiscount = (options_6706958: any) => {
    const eventDatacustomActionCode173: any = [
      {
        type: 'customActionCode',
        dataId: 168619230631193150,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '9767126',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){var toFixed=function toFixed(number,n){if(n>20||n<0){throw new RangeError("toFixed() digits argument must be between 0 and 20")}if(isNaN(number)||number>=Math.pow(10,21)){return number.toString()}if(typeof n==="undefined"||n==0){return Math.round(number).toString()}var result=number.toString();var arr=result.split(".");if(arr.length<2){result+=".";for(var i=0;i<n;i+=1){result+="0"}return result}var integer=arr[0];var decimal=arr[1];if(decimal.length==n){return result}if(decimal.length<n){for(var _i=0;_i<n-decimal.length;_i+=1){result+="0"}return result}result="".concat(integer,".").concat(decimal.substr(0,n));var last=decimal.substr(n,1);if(parseInt(last,10)>=5){var x=Math.pow(10,n);result=(Math.round(parseFloat(result)*x)+1)/x;result=result.toFixed(n)}return result};var info=options_6706958.info;var unRecordDirPrice=info.unRecordDirPrice;var unRecordRealPrice=info.unRecordRealPrice;var unRecordDiscount=0;if(!!unRecordRealPrice&&unRecordRealPrice>=0){unRecordDiscount=toFixed(parseFloat(unRecordRealPrice)*10/parseFloat(unRecordDirPrice),3)}var recordDirPrice=info.recordDirPrice;var recordRealPrice=info.recordRealPrice;var recordDiscount=0;if(!!recordRealPrice&&recordRealPrice>=0){recordDiscount=toFixed(parseFloat(recordRealPrice)*10/parseFloat(recordDirPrice),3)}if(!!data.factorForm.feeType&&data.factorForm.feeType.indexOf("1001")==-1){recordDiscount=null}if(!!data.factorForm.feeType&&data.factorForm.feeType.indexOf("1002")==-1){unRecordDiscount=null}data.factorForm.unRecordDiscount=unRecordDiscount;data.factorForm.recordDiscount=recordDiscount;success({unRecordDiscount:unRecordDiscount,recordDiscount:recordDiscount})};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 168619274909173820,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '817243',
              pageJsonId: '537892',
              dataSourceId: 166124254360037760,
              dataSourceName: 'factorForm',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  attrId: '9268469',
                  code: 'feeType',
                  name: '计费类型',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                },
                {
                  attrId: '011908',
                  code: 'unRecordDirPrice',
                  name: '非录音目录价（元/min）',
                  type: 'string',
                  initialData: { type: 'static', value: '0.02' },
                  showInput: true,
                  value: { type: [], code: '' },
                },
                {
                  attrId: '5150097',
                  code: 'unRecordRealPrice',
                  name: '非录音实收价',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                },
                {
                  attrId: '201538',
                  code: 'unRecordDiscount',
                  name: '非录音折扣（折）',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: ['context', '$data_9767126$'],
                    code: 'unRecordDiscount',
                  },
                },
                {
                  attrId: '709765',
                  code: 'recordDirPrice',
                  name: '录音目录价（元/min）',
                  type: 'string',
                  initialData: { type: 'static', value: '0.04' },
                  showInput: true,
                },
                {
                  attrId: '2021537',
                  code: 'recordRealPrice',
                  name: '录音实收价',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                },
                {
                  attrId: '296276',
                  code: 'recordDiscount',
                  name: '录音折扣（折）',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: ['context', '$data_9767126$'],
                    code: 'recordDiscount',
                  },
                },
                {
                  attrId: '528175',
                  code: 'reason',
                  name: '申请原因',
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
            line_number: 2,
            callback1: [],
            callback2: [],
          },
          {
            type: 'console',
            dataId: 168811021212500260,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '598046',
              pageJsonId: '537892',
              value: ['成功回调值：', '$data_9767126$'],
            },
            line_number: 3,
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode173.params =
      [
        {
          title: '事件入参',
          name: 'options_6706958',
          value: '$options_6706958$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode173,
      { options_6706958 },
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
    fileUpload,
    calDiscount,
  }));

  useEffect(() => {
    const eventDataapiRequest470: any = [
      {
        type: 'apiRequest',
        dataId: 166972769625875800,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '4233812514',
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
        line_number: 1,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166972769865921570,
            options: {
              compId: 'Input_690228_5400337_5332635_535834',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '9302348',
              data: '$reply_4233812514?.resultData$',
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
    eventDataapiRequest470.params = [] || [];
    CMDGenerator(eventDataapiRequest470, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest471: any = [
      {
        type: 'apiRequest',
        dataId: 168618679461130400,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '26337',
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
                      dataKey: '26337_root.body.catalogCode',
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
                      dataKey: '26337_root.body.attrCode',
                      value: { type: ['customize'], code: 'feeType' },
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
                  dataKey: '26337_root.body',
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
              dataKey: '26337_root',
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
        line_number: 3,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 168618682492057540,
            options: {
              compId: 'Select_5285916',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'MultipleSelect',
              id: '4140975',
              data: '$reply_26337?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 4,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest471.params = [] || [];
    CMDGenerator(eventDataapiRequest471, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest472: any = [
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
        line_number: 5,
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
            line_number: 6,
            callback1: [
              {
                type: 'callParentCustomFunc',
                dataId: 166444112756181340,
                options: {
                  compId: 'callParentCustomFunc',
                  compName: 'system',
                  id: '849838',
                  pageJsonId: '537892',
                  pathname: '/auditOrderPrepare',
                  pageId: '884045146848604160',
                  customFuncName: 'getFactor',
                  customFuncParams: '$data.sceneSubmit$',
                },
                line_number: 7,
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
    eventDataapiRequest472.params = [] || [];
    CMDGenerator(eventDataapiRequest472, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse247: any = [
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
        line_number: 8,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 166132449559169250,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '9981685',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var item=state.itemList;data.sceneSubmit=item;var factorForm={};var attrList=item.attrList;if(attrList!=undefined&&attrList.length>0){for(var i=0;i<attrList.length;i++){if(attrList[i].attrCode=="feeType"){attrList[i].attrValue=attrList[i].attrValue.split(",")}factorForm[attrList[i].attrCode]=attrList[i].attrValue}factorForm["unRecordDirPrice"]=0.02;factorForm["recordDirPrice"]=0.04}data.factorForm=factorForm;data.sceneSubmit.approveGrade=item.approveGrade;data.sceneSubmit.approveGradeName=item.approveGradeName;success(factorForm)};',
              actionTitle: '设置界面初始化值',
            },
            line_number: 9,
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
                      attrId: '9268469',
                      code: 'feeType',
                      name: '计费类型',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['feeType'],
                      _idpath: ['9268469'],
                    },
                    {
                      attrId: '011908',
                      code: 'unRecordDirPrice',
                      name: '非录音目录价（元/min）',
                      type: 'string',
                      initialData: { type: 'static', value: '0.02' },
                      showInput: true,
                      _codePath: ['unRecordDirPrice'],
                      _idpath: ['011908'],
                    },
                    {
                      attrId: '5150097',
                      code: 'unRecordRealPrice',
                      name: '非录音实收价',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['unRecordRealPrice'],
                      _idpath: ['5150097'],
                    },
                    {
                      attrId: '201538',
                      code: 'unRecordDiscount',
                      name: '非录音折扣（折）',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['unRecordDiscount'],
                      _idpath: ['201538'],
                    },
                    {
                      attrId: '709765',
                      code: 'recordDirPrice',
                      name: '录音目录价（元/min）',
                      type: 'string',
                      initialData: { type: 'static', value: '0.04' },
                      showInput: true,
                      _codePath: ['recordDirPrice'],
                      _idpath: ['709765'],
                    },
                    {
                      attrId: '296276',
                      code: 'recordDiscount',
                      name: '录音折扣（折）',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['recordDiscount'],
                      _idpath: ['296276'],
                    },
                    {
                      attrId: '2021537',
                      code: 'recordRealPrice',
                      name: '录音实收价',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['recordRealPrice'],
                      _idpath: ['2021537'],
                    },
                    {
                      attrId: '528175',
                      code: 'reason',
                      name: '申请原因',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['reason'],
                      _idpath: ['528175'],
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
              {
                type: 'setValue',
                dataId: 166562973955348130,
                options: {
                  compId: 'Input_361479_887285_2150708_923492_295508',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '5243167',
                  value: '$state.itemList.approveGradeName$',
                },
                line_number: 11,
                callback1: [],
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '0350276',
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$data_9981685.feeType$',
                      operate: 'notContains',
                      manualValue: '1001',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 168621257922725540,
                elseIfs: [],
                line_number: 12,
                callback1: [
                  {
                    type: 'setVisible',
                    dataId: 168621267566966050,
                    options: {
                      compId: [
                        'Input_recordingPrice_435663',
                        'Input_47185',
                        'Input_recordingDiscount_546785',
                      ],
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '960688',
                      visible: '',
                      compid: [
                        'Input_recordingPrice_435663',
                        'Input_47185',
                        'Input_recordingDiscount_546785',
                      ],
                    },
                    line_number: 13,
                  },
                  {
                    type: 'setDataSource',
                    dataId: 168621400795534500,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '625169',
                      pageJsonId: '537892',
                      dataSourceId: 166124254360037760,
                      dataSourceName: 'factorForm',
                      dataSourceRelType: 'custom',
                      dataSourceSetValue: [
                        {
                          attrId: '9268469',
                          code: 'feeType',
                          name: '计费类型',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '011908',
                          code: 'unRecordDirPrice',
                          name: '非录音目录价（元/min）',
                          type: 'string',
                          initialData: { type: 'static', value: '0.02' },
                          showInput: true,
                        },
                        {
                          attrId: '5150097',
                          code: 'unRecordRealPrice',
                          name: '非录音实收价',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '201538',
                          code: 'unRecordDiscount',
                          name: '非录音折扣（折）',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '709765',
                          code: 'recordDirPrice',
                          name: '录音目录价（元/min）',
                          type: 'string',
                          initialData: { type: 'static', value: '0.04' },
                          showInput: true,
                          value: {
                            type: ['EMPTY_DATA', 'string'],
                            hideAttr: true,
                            code: '$EMPTY_DATA.string$',
                          },
                        },
                        {
                          attrId: '2021537',
                          code: 'recordRealPrice',
                          name: '录音实收价',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '296276',
                          code: 'recordDiscount',
                          name: '录音折扣（折）',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '528175',
                          code: 'reason',
                          name: '申请原因',
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
                    line_number: 14,
                    callback1: [],
                    callback2: [],
                  },
                ],
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '88668955',
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$data_9981685.feeType$',
                      operate: 'notContains',
                      manualValue: '1002',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 168621268891809820,
                elseIfs: [],
                line_number: 15,
                callback1: [
                  {
                    type: 'setVisible',
                    dataId: 168621272199526370,
                    options: {
                      compId: [
                        'Input_monthlyRent_208615',
                        'Input_6176066',
                        'Input_monthlyRentDiscount_385819',
                      ],
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '691667',
                      visible: '',
                      compid: [
                        'Input_monthlyRent_208615',
                        'Input_6176066',
                        'Input_monthlyRentDiscount_385819',
                      ],
                    },
                    line_number: 16,
                  },
                  {
                    type: 'setDataSource',
                    dataId: 168621401681585820,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '1114336',
                      pageJsonId: '537892',
                      dataSourceId: 166124254360037760,
                      dataSourceName: 'factorForm',
                      dataSourceRelType: 'custom',
                      dataSourceSetValue: [
                        {
                          attrId: '9268469',
                          code: 'feeType',
                          name: '计费类型',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '011908',
                          code: 'unRecordDirPrice',
                          name: '非录音目录价（元/min）',
                          type: 'string',
                          initialData: { type: 'static', value: '0.02' },
                          showInput: true,
                          value: {
                            type: ['EMPTY_DATA', 'string'],
                            hideAttr: true,
                            code: '$EMPTY_DATA.string$',
                          },
                        },
                        {
                          attrId: '5150097',
                          code: 'unRecordRealPrice',
                          name: '非录音实收价',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '201538',
                          code: 'unRecordDiscount',
                          name: '非录音折扣（折）',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '709765',
                          code: 'recordDirPrice',
                          name: '录音目录价（元/min）',
                          type: 'string',
                          initialData: { type: 'static', value: '0.04' },
                          showInput: true,
                          value: { type: [], code: '' },
                        },
                        {
                          attrId: '2021537',
                          code: 'recordRealPrice',
                          name: '录音实收价',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '296276',
                          code: 'recordDiscount',
                          name: '录音折扣（折）',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '528175',
                          code: 'reason',
                          name: '申请原因',
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
                    line_number: 17,
                    callback1: [],
                    callback2: [],
                  },
                ],
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
            line_number: 18,
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
                line_number: 19,
                callback1: [],
                callback2: [],
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '75163',
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
                    condId: '714666',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166746105221225660,
                elseIfs: [],
                line_number: 20,
                callback1: [
                  {
                    type: 'setVisible',
                    dataId: 166746106554633860,
                    options: {
                      compId: 'Table_5369494',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Table',
                      id: '812343',
                    },
                    line_number: 21,
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
            line_number: 22,
            callback1: [
              {
                type: 'setVisible',
                dataId: 166563003189287300,
                options: {
                  compId: 'Input_361479_887285_2150708_923492_295508',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '784565',
                  visible: 'true',
                },
                line_number: 23,
              },
              {
                type: 'setDisable',
                dataId: 166563007374773440,
                options: {
                  compId: 'Form_449441_2604934_653436',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Form',
                  id: '5967345',
                  disabled: 'true',
                },
                line_number: 24,
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
                line_number: 25,
              },
              {
                type: 'setDisable',
                dataId: 166563004824264030,
                options: {
                  compId: 'Input_361479_887285_2150708_923492_295508',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '035949',
                  disabled: 'true',
                },
                line_number: 26,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse247.params = [] || [];
    CMDGenerator(eventDataifelse247, {}, 'ifelse', {
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
        className="View_View_537892_1"
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
        ref={(r: any) => refs.setComponentRef(r, 'View_537892_1')}
        {...injectData}
      >
        <Divider
          name={'分割线'}
          orientation={'center'}
          type={'horizontal'}
          dashed={false}
          dividerText={'中间号资费'}
          showTitle={true}
          $$componentItem={{
            id: 'Divider_6651058',
            uid: 'Divider_6651058',
            type: 'Divider',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ margin: '12px 0 12px 0', height: '0A' }}
          ref={(r: any) => refs.setComponentRef(r, 'Divider_6651058')}
          {...injectData}
        />
        <View
          className="View_View_6806553"
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
          ref={(r: any) => refs.setComponentRef(r, 'View_6806553')}
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
            ref={(r: any) => refs.setComponentRef(r, 'HorizontalView_004602')}
            {...injectData}
          >
            <View
              className="View_View_339406"
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
              ref={(r: any) => refs.setComponentRef(r, 'View_339406')}
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
                  id: 'Form_4311097_9385662_0413915_823067',
                  uid: 'Form_4311097_9385662_0413915_823067',
                  type: 'Form',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Form_4311097_9385662_0413915_823067')
                }
                {...injectData}
              >
                <Checkbox
                  name={'审批场景'}
                  titleTip={'text'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  text={'中间号资费'}
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
                    id: 'Checkbox_882584_5289015_934499_6069114_56006',
                    uid: 'Checkbox_882584_5289015_934499_6069114_56006',
                    type: 'Checkbox',
                    ...componentItem,
                  }}
                  disabled={true}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    refs.setComponentRef(
                      r,
                      'Checkbox_882584_5289015_934499_6069114_56006',
                    )
                  }
                  {...injectData}
                />
                <View
                  className="View_View_5097806_709083"
                  name={'布局容器'}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_5097806_709083',
                    uid: 'View_5097806_709083',
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
                    refs.setComponentRef(r, 'View_5097806_709083')
                  }
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
                    id: 'Input_361479_887285_2150708_923492_295508',
                    uid: 'Input_361479_887285_2150708_923492_295508',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={false}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    refs.setComponentRef(
                      r,
                      'Input_361479_887285_2150708_923492_295508',
                    )
                  }
                  {...injectData}
                />
              </Form>
            </View>
          </HorizontalView>
          <Form
            name={'要素表单'}
            colSpan={8}
            labelCol={8}
            wrapperCol={16}
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
                id: 'Input_monthlyRent_208615',
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '月租目录价',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: 8,
                  labelCol: 8,
                  wrapperCol: 16,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipContent: '',
                  tipPlacement: 'top',
                  prefixIconPosition: 'before',
                  postfix: '元',
                  postfixIconPosition: 'before',
                  required: true,
                  placeholder: '号码月租目录价（元/月）',
                  fieldName: 'monthlyRent',
                  value: data?.factorForm?.monthlyRent,
                  formItemIndex: 0,
                  regexp: [
                    {
                      id: '696864',
                      title: '按钮1',
                      iconPos: 'left',
                      regexpType: 2,
                      message: '请输入正数最多2位小数',
                      pattern: '/^(([1-9]{1}\\d*)|(0{1}))(\\.\\d{0,2})?$/',
                    },
                  ],
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
                components: [],
              },
              {
                id: 'Input_recordingPrice_435663',
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '录音目录价',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: 8,
                  labelCol: 8,
                  wrapperCol: 16,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipContent: '',
                  tipPlacement: 'top',
                  prefixIconPosition: 'before',
                  postfix: '元',
                  postfixIconPosition: 'before',
                  required: true,
                  placeholder: '录音目录价（元/min）',
                  fieldName: 'recordingPrice',
                  value: data?.factorForm?.recordingPrice,
                  formItemIndex: 1,
                  regexp: [
                    {
                      id: '760338',
                      title: '按钮1',
                      iconPos: 'left',
                      regexpType: 2,
                      message: '请输入正数最多2位小数',
                      pattern: '/^(([1-9]{1}\\d*)|(0{1}))(\\.\\d{0,2})?$/',
                    },
                  ],
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
                components: [],
              },
              {
                id: 'Input_monthlyRentDiscount_385819',
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '月租折扣',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: 8,
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
                  fieldName: 'monthlyRentDiscount',
                  value: data?.factorForm?.monthlyRentDiscount,
                  formItemIndex: 2,
                  regexp: [
                    {
                      id: '159353',
                      title: '按钮1',
                      iconPos: 'left',
                      regexpType: 2,
                      message: '请输入正数最多2位小数',
                      pattern: '/^(([1-9]{1}\\d*)|(0{1}))(\\.\\d{0,2})?$/',
                    },
                  ],
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
                components: [],
              },
              {
                id: 'Input_recordingDiscount_546785',
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '录音折扣',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: 8,
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
                  fieldName: 'recordingDiscount',
                  value: data?.factorForm?.recordingDiscount,
                  formItemIndex: 3,
                  regexp: [
                    {
                      id: '378015',
                      title: '按钮1',
                      iconPos: 'left',
                      regexpType: 2,
                      message: '请输入正数最多2位小数',
                      pattern: '/^(([1-9]{1}\\d*)|(0{1}))(\\.\\d{0,2})?$/',
                    },
                  ],
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
                components: [],
              },
              {
                label: '文本框',
                compName: 'TextArea',
                type: 'TextArea',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '申请原因',
                  selfSpan: 24,
                  labelCol: '3',
                  wrapperCol: 21,
                  basicStatus: 1,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipPlacement: 'top',
                  required: false,
                  placeholder: '请输入',
                  fieldName: 'reason',
                  formItemIndex: 4,
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
                alias: 'DformInput',
                setEvents: [],
                components: [],
                id: 'Input_580429',
              },
            ]}
            $$componentItem={{
              id: 'Form_449441_2604934_653436',
              uid: 'Form_449441_2604934_653436',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px', margin: '0px 150px 12px 0px' }}
            onValuesChange={(changedFieldName: any, changedValue: any) => {
              const eventDatasetDataSource209: any = [
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
                        attrId: '9268469',
                        code: 'feeType',
                        name: '计费类型',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_2604934_653436',
                            'getFieldsValue',
                          ],
                          code: 'feeType',
                        },
                        showInput: true,
                        _codePath: ['feeType'],
                        _idpath: ['9268469'],
                      },
                      {
                        attrId: '011908',
                        code: 'unRecordDirPrice',
                        name: '非录音目录价（元/min）',
                        type: 'string',
                        initialData: { type: 'static', value: '0.02' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_2604934_653436',
                            'getFieldsValue',
                          ],
                          code: 'unRecordDirPrice',
                        },
                        showInput: true,
                        _codePath: ['unRecordDirPrice'],
                        _idpath: ['011908'],
                      },
                      {
                        attrId: '5150097',
                        code: 'unRecordRealPrice',
                        name: '非录音实收价',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_2604934_653436',
                            'getFieldsValue',
                          ],
                          code: 'unRecordRealPrice',
                        },
                        showInput: true,
                        _codePath: ['unRecordRealPrice'],
                        _idpath: ['5150097'],
                      },
                      {
                        attrId: '201538',
                        code: 'unRecordDiscount',
                        name: '非录音折扣（折）',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_2604934_653436',
                            'getFieldsValue',
                          ],
                          code: 'unRecordDiscount',
                        },
                        showInput: true,
                        _codePath: ['unRecordDiscount'],
                        _idpath: ['201538'],
                      },
                      {
                        attrId: '709765',
                        code: 'recordDirPrice',
                        name: '录音目录价（元/min）',
                        type: 'string',
                        initialData: { type: 'static', value: '0.04' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_2604934_653436',
                            'getFieldsValue',
                          ],
                          code: 'recordDirPrice',
                        },
                        showInput: true,
                        _codePath: ['recordDirPrice'],
                        _idpath: ['709765'],
                      },
                      {
                        attrId: '296276',
                        code: 'recordDiscount',
                        name: '录音折扣（折）',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['recordDiscount'],
                        _idpath: ['296276'],
                        value: {
                          type: [
                            'form',
                            'Form_449441_2604934_653436',
                            'getFieldsValue',
                          ],
                          code: 'recordDiscount',
                        },
                      },
                      {
                        attrId: '2021537',
                        code: 'recordRealPrice',
                        name: '录音实收价',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['recordRealPrice'],
                        _idpath: ['2021537'],
                        value: {
                          type: [
                            'form',
                            'Form_449441_2604934_653436',
                            'getFieldsValue',
                          ],
                          code: 'recordRealPrice',
                        },
                      },
                      {
                        attrId: '528175',
                        code: 'reason',
                        name: '申请原因',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['reason'],
                        _idpath: ['528175'],
                        value: {
                          type: [
                            'form',
                            'Form_449441_2604934_653436',
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
                      dataId: 166366241025848900,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '5554038',
                        pageJsonId: '537892',
                        actionTitle: '',
                        code: 'function main(data,state,success,fail){var attrList=[];var obj=data.factorForm;for(var key in obj){var val=obj[key];if(key=="feeType"&&!!val&&typeof val!="string"){console.log("val",key,val);val=val.join(",")}attrList.push({"attrCode":key,"attrName":"","attrValue":val})}data.sceneSubmit.attrList=attrList;success(attrList)};',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'callParentCustomFunc',
                          dataId: 166366241025827650,
                          options: {
                            compId: 'callParentCustomFunc',
                            compName: 'system',
                            id: '6706125',
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
              eventDatasetDataSource209.params =
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
                eventDatasetDataSource209,
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
              refs.setComponentRef(r, 'Form_449441_2604934_653436')
            }
            {...injectData}
          >
            <MultipleSelect
              name={'计费类型'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              filter={'none'}
              attr={{}}
              placeholder={'请选择'}
              mode={'multiple'}
              fieldName={'feeType'}
              formItemIndex={0}
              allowClear={false}
              value={data?.factorForm?.feeType}
              $$componentItem={{
                id: 'Select_5285916',
                uid: 'Select_5285916',
                type: 'MultipleSelect',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDataifelse519: any = [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '531806',
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$e$',
                          operate: 'contains',
                          manualValue: '1001',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                      {
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$e$',
                          operate: 'contains',
                          manualValue: '1002',
                        },
                        condId: '112558',
                        connector: '&&',
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 168619124915017540,
                    elseIfs: [
                      {
                        dataName: 'elseIf',
                        dataId: 168619130155409950,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 168619133764614300,
                            children: [],
                            todoOptions: ['visible', 'selectComp'],
                            options: {
                              compId: [
                                'Input_recordingPrice_435663',
                                'Input_47185',
                                'Input_recordingDiscount_546785',
                              ],
                              compLib: 'comm',
                              pageJsonId: '537892',
                              compName: 'Input',
                              id: '525431',
                              visible: 'true',
                              compid: [
                                'Input_recordingPrice_435663',
                                'Input_47185',
                                'Input_recordingDiscount_546785',
                              ],
                            },
                            actionObjId: 'Input_monthlyRent_208615',
                            actionObjName: 'Input',
                            value: 'setVisible',
                            compLib: 'comm',
                            line_number: 5,
                          },
                          {
                            dataName: 'action',
                            dataId: 168619136296695600,
                            children: [],
                            todoOptions: ['visible', 'selectComp'],
                            options: {
                              compId: [
                                'Input_monthlyRentDiscount_385819',
                                'Input_6176066',
                                'Input_monthlyRent_208615',
                              ],
                              compLib: 'comm',
                              pageJsonId: '537892',
                              compName: 'Input',
                              id: '826871',
                              visible: '',
                              compid: [
                                'Input_monthlyRentDiscount_385819',
                                'Input_6176066',
                                'Input_monthlyRent_208615',
                              ],
                            },
                            actionObjId: 'Input_monthlyRent_208615',
                            actionObjName: 'Input',
                            value: 'setVisible',
                            compLib: 'comm',
                            line_number: 6,
                          },
                          {
                            dataName: 'action',
                            dataId: 168619391720002530,
                            children: [
                              {
                                dataName: 'callback',
                                dataId: 168619391720003900,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 168810998238729120,
                                    children: [
                                      {
                                        dataName: 'callback',
                                        dataId: 168810998238777440,
                                        children: [],
                                        value: 'callback1',
                                        params: [],
                                      },
                                      {
                                        dataName: 'callback',
                                        dataId: 168810998238740100,
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
                                      id: '063894',
                                      pageJsonId: '537892',
                                      customFuncName: 'calDiscount',
                                      customFuncParams: 'object',
                                      paramsObj: { info: '$data.factorForm$' },
                                      paramsObjKeyValueMap: {
                                        info: '$data.factorForm$',
                                      },
                                    },
                                    actionObjId: 'callSelfFunc',
                                    actionObjName: 'system',
                                    value: 'callSelfFunc',
                                    line_number: 8,
                                  },
                                ],
                                value: 'callback1',
                                params: [],
                              },
                              {
                                dataName: 'callback',
                                dataId: 168619391720079940,
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
                              id: '9782657',
                              pageJsonId: '537892',
                              dataSourceId: 166124254360037760,
                              dataSourceName: 'factorForm',
                              dataSourceRelType: 'custom',
                              dataSourceSetValue: [
                                {
                                  attrId: '9268469',
                                  code: 'feeType',
                                  name: '计费类型',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                },
                                {
                                  attrId: '011908',
                                  code: 'unRecordDirPrice',
                                  name: '非录音目录价（元/min）',
                                  type: 'string',
                                  initialData: {
                                    type: 'static',
                                    value: '0.02',
                                  },
                                  showInput: true,
                                  value: {
                                    type: ['EMPTY_DATA', 'string'],
                                    hideAttr: true,
                                    code: '$EMPTY_DATA.string$',
                                  },
                                },
                                {
                                  attrId: '5150097',
                                  code: 'unRecordRealPrice',
                                  name: '非录音实收价',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                  value: {
                                    type: ['EMPTY_DATA', 'string'],
                                    hideAttr: true,
                                    code: '$EMPTY_DATA.string$',
                                  },
                                },
                                {
                                  attrId: '201538',
                                  code: 'unRecordDiscount',
                                  name: '非录音折扣（折）',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                  value: {
                                    type: ['EMPTY_DATA', 'string'],
                                    hideAttr: true,
                                    code: '$EMPTY_DATA.string$',
                                  },
                                },
                                {
                                  attrId: '709765',
                                  code: 'recordDirPrice',
                                  name: '录音目录价（元/min）',
                                  type: 'string',
                                  initialData: {
                                    type: 'static',
                                    value: '0.04',
                                  },
                                  showInput: true,
                                  value: { type: ['customize'], code: '0.04' },
                                },
                                {
                                  attrId: '2021537',
                                  code: 'recordRealPrice',
                                  name: '录音实收价',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                },
                                {
                                  attrId: '296276',
                                  code: 'recordDiscount',
                                  name: '录音折扣（折）',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                },
                                {
                                  attrId: '528175',
                                  code: 'reason',
                                  name: '申请原因',
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
                            line_number: 7,
                          },
                        ],
                        condition: [
                          {
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$e$',
                              operate: 'contains',
                              manualValue: '1001',
                            },
                            condId: '057477',
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        value: 'elseIf',
                        desc: '如果只选择了录音',
                        callback: [
                          {
                            type: 'setVisible',
                            dataId: 168619133764614300,
                            options: {
                              compId: [
                                'Input_recordingPrice_435663',
                                'Input_47185',
                                'Input_recordingDiscount_546785',
                              ],
                              compLib: 'comm',
                              pageJsonId: '537892',
                              compName: 'Input',
                              id: '525431',
                              visible: 'true',
                              compid: [
                                'Input_recordingPrice_435663',
                                'Input_47185',
                                'Input_recordingDiscount_546785',
                              ],
                            },
                            line_number: 5,
                          },
                          {
                            type: 'setVisible',
                            dataId: 168619136296695600,
                            options: {
                              compId: [
                                'Input_monthlyRentDiscount_385819',
                                'Input_6176066',
                                'Input_monthlyRent_208615',
                              ],
                              compLib: 'comm',
                              pageJsonId: '537892',
                              compName: 'Input',
                              id: '826871',
                              visible: '',
                              compid: [
                                'Input_monthlyRentDiscount_385819',
                                'Input_6176066',
                                'Input_monthlyRent_208615',
                              ],
                            },
                            line_number: 6,
                          },
                          {
                            type: 'setDataSource',
                            dataId: 168619391720002530,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '9782657',
                              pageJsonId: '537892',
                              dataSourceId: 166124254360037760,
                              dataSourceName: 'factorForm',
                              dataSourceRelType: 'custom',
                              dataSourceSetValue: [
                                {
                                  attrId: '9268469',
                                  code: 'feeType',
                                  name: '计费类型',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                },
                                {
                                  attrId: '011908',
                                  code: 'unRecordDirPrice',
                                  name: '非录音目录价（元/min）',
                                  type: 'string',
                                  initialData: {
                                    type: 'static',
                                    value: '0.02',
                                  },
                                  showInput: true,
                                  value: {
                                    type: ['EMPTY_DATA', 'string'],
                                    hideAttr: true,
                                    code: '$EMPTY_DATA.string$',
                                  },
                                },
                                {
                                  attrId: '5150097',
                                  code: 'unRecordRealPrice',
                                  name: '非录音实收价',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                  value: {
                                    type: ['EMPTY_DATA', 'string'],
                                    hideAttr: true,
                                    code: '$EMPTY_DATA.string$',
                                  },
                                },
                                {
                                  attrId: '201538',
                                  code: 'unRecordDiscount',
                                  name: '非录音折扣（折）',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                  value: {
                                    type: ['EMPTY_DATA', 'string'],
                                    hideAttr: true,
                                    code: '$EMPTY_DATA.string$',
                                  },
                                },
                                {
                                  attrId: '709765',
                                  code: 'recordDirPrice',
                                  name: '录音目录价（元/min）',
                                  type: 'string',
                                  initialData: {
                                    type: 'static',
                                    value: '0.04',
                                  },
                                  showInput: true,
                                  value: { type: ['customize'], code: '0.04' },
                                },
                                {
                                  attrId: '2021537',
                                  code: 'recordRealPrice',
                                  name: '录音实收价',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                },
                                {
                                  attrId: '296276',
                                  code: 'recordDiscount',
                                  name: '录音折扣（折）',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                },
                                {
                                  attrId: '528175',
                                  code: 'reason',
                                  name: '申请原因',
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
                            line_number: 7,
                            callback1: [
                              {
                                type: 'callSelfFunc',
                                dataId: 168810998238729120,
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '063894',
                                  pageJsonId: '537892',
                                  customFuncName: 'calDiscount',
                                  customFuncParams: 'object',
                                  paramsObj: { info: '$data.factorForm$' },
                                  paramsObjKeyValueMap: {
                                    info: '$data.factorForm$',
                                  },
                                },
                                line_number: 8,
                                callback1: [],
                                callback2: [],
                              },
                            ],
                            callback2: [],
                          },
                        ],
                      },
                      {
                        dataName: 'elseIf',
                        dataId: 168619137789029340,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 168619140659997200,
                            children: [],
                            todoOptions: ['visible', 'selectComp'],
                            options: {
                              compId: [
                                'Input_recordingPrice_435663',
                                'Input_47185',
                                'Input_recordingDiscount_546785',
                              ],
                              compLib: 'comm',
                              pageJsonId: '537892',
                              compName: 'Input',
                              id: '7001736',
                              visible: '',
                              compid: [
                                'Input_recordingPrice_435663',
                                'Input_47185',
                                'Input_recordingDiscount_546785',
                              ],
                            },
                            actionObjId: 'Input_monthlyRent_208615',
                            actionObjName: 'Input',
                            value: 'setVisible',
                            compLib: 'comm',
                            line_number: 9,
                          },
                          {
                            dataName: 'action',
                            dataId: 168619141072918880,
                            children: [],
                            todoOptions: ['visible', 'selectComp'],
                            options: {
                              compId: [
                                'Input_monthlyRentDiscount_385819',
                                'Input_6176066',
                                'Input_monthlyRent_208615',
                              ],
                              compLib: 'comm',
                              pageJsonId: '537892',
                              compName: 'Input',
                              id: '3135992',
                              visible: 'true',
                              compid: [
                                'Input_monthlyRentDiscount_385819',
                                'Input_6176066',
                                'Input_monthlyRent_208615',
                              ],
                            },
                            actionObjId: 'Input_monthlyRent_208615',
                            actionObjName: 'Input',
                            value: 'setVisible',
                            compLib: 'comm',
                            line_number: 10,
                          },
                          {
                            dataName: 'action',
                            dataId: 168619394559643100,
                            children: [
                              {
                                dataName: 'callback',
                                dataId: 168619394559613000,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 168810998873302200,
                                    children: [
                                      {
                                        dataName: 'callback',
                                        dataId: 168810998873309100,
                                        children: [],
                                        value: 'callback1',
                                        params: [],
                                      },
                                      {
                                        dataName: 'callback',
                                        dataId: 168810998873310140,
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
                                      id: '462319',
                                      pageJsonId: '537892',
                                      customFuncName: 'calDiscount',
                                      customFuncParams: 'object',
                                      paramsObj: { info: '$data.factorForm$' },
                                      paramsObjKeyValueMap: {
                                        info: '$data.factorForm$',
                                      },
                                    },
                                    actionObjId: 'callSelfFunc',
                                    actionObjName: 'system',
                                    value: 'callSelfFunc',
                                    line_number: 12,
                                  },
                                ],
                                value: 'callback1',
                                params: [],
                              },
                              {
                                dataName: 'callback',
                                dataId: 168619394559680540,
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
                              id: '317762',
                              pageJsonId: '537892',
                              dataSourceId: 166124254360037760,
                              dataSourceName: 'factorForm',
                              dataSourceRelType: 'custom',
                              dataSourceSetValue: [
                                {
                                  attrId: '9268469',
                                  code: 'feeType',
                                  name: '计费类型',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                },
                                {
                                  attrId: '011908',
                                  code: 'unRecordDirPrice',
                                  name: '非录音目录价（元/min）',
                                  type: 'string',
                                  initialData: {
                                    type: 'static',
                                    value: '0.02',
                                  },
                                  showInput: true,
                                  value: { type: ['customize'], code: '0.02' },
                                },
                                {
                                  attrId: '5150097',
                                  code: 'unRecordRealPrice',
                                  name: '非录音实收价',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                  value: { type: [], code: '' },
                                },
                                {
                                  attrId: '201538',
                                  code: 'unRecordDiscount',
                                  name: '非录音折扣（折）',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                  value: { type: [], code: '' },
                                },
                                {
                                  attrId: '709765',
                                  code: 'recordDirPrice',
                                  name: '录音目录价（元/min）',
                                  type: 'string',
                                  initialData: {
                                    type: 'static',
                                    value: '0.04',
                                  },
                                  showInput: true,
                                  value: {
                                    type: ['EMPTY_DATA', 'string'],
                                    hideAttr: true,
                                    code: '$EMPTY_DATA.string$',
                                  },
                                },
                                {
                                  attrId: '2021537',
                                  code: 'recordRealPrice',
                                  name: '录音实收价',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                  value: {
                                    type: ['EMPTY_DATA', 'string'],
                                    hideAttr: true,
                                    code: '$EMPTY_DATA.string$',
                                  },
                                },
                                {
                                  attrId: '296276',
                                  code: 'recordDiscount',
                                  name: '录音折扣（折）',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                  value: {
                                    type: ['EMPTY_DATA', 'string'],
                                    hideAttr: true,
                                    code: '$EMPTY_DATA.string$',
                                  },
                                },
                                {
                                  attrId: '528175',
                                  code: 'reason',
                                  name: '申请原因',
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
                            line_number: 11,
                          },
                        ],
                        condition: [
                          {
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$e$',
                              operate: 'contains',
                              manualValue: '1002',
                            },
                            condId: '644976',
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        value: 'elseIf',
                        desc: '如果只选择非录音',
                        callback: [
                          {
                            type: 'setVisible',
                            dataId: 168619140659997200,
                            options: {
                              compId: [
                                'Input_recordingPrice_435663',
                                'Input_47185',
                                'Input_recordingDiscount_546785',
                              ],
                              compLib: 'comm',
                              pageJsonId: '537892',
                              compName: 'Input',
                              id: '7001736',
                              visible: '',
                              compid: [
                                'Input_recordingPrice_435663',
                                'Input_47185',
                                'Input_recordingDiscount_546785',
                              ],
                            },
                            line_number: 9,
                          },
                          {
                            type: 'setVisible',
                            dataId: 168619141072918880,
                            options: {
                              compId: [
                                'Input_monthlyRentDiscount_385819',
                                'Input_6176066',
                                'Input_monthlyRent_208615',
                              ],
                              compLib: 'comm',
                              pageJsonId: '537892',
                              compName: 'Input',
                              id: '3135992',
                              visible: 'true',
                              compid: [
                                'Input_monthlyRentDiscount_385819',
                                'Input_6176066',
                                'Input_monthlyRent_208615',
                              ],
                            },
                            line_number: 10,
                          },
                          {
                            type: 'setDataSource',
                            dataId: 168619394559643100,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '317762',
                              pageJsonId: '537892',
                              dataSourceId: 166124254360037760,
                              dataSourceName: 'factorForm',
                              dataSourceRelType: 'custom',
                              dataSourceSetValue: [
                                {
                                  attrId: '9268469',
                                  code: 'feeType',
                                  name: '计费类型',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                },
                                {
                                  attrId: '011908',
                                  code: 'unRecordDirPrice',
                                  name: '非录音目录价（元/min）',
                                  type: 'string',
                                  initialData: {
                                    type: 'static',
                                    value: '0.02',
                                  },
                                  showInput: true,
                                  value: { type: ['customize'], code: '0.02' },
                                },
                                {
                                  attrId: '5150097',
                                  code: 'unRecordRealPrice',
                                  name: '非录音实收价',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                  value: { type: [], code: '' },
                                },
                                {
                                  attrId: '201538',
                                  code: 'unRecordDiscount',
                                  name: '非录音折扣（折）',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                  value: { type: [], code: '' },
                                },
                                {
                                  attrId: '709765',
                                  code: 'recordDirPrice',
                                  name: '录音目录价（元/min）',
                                  type: 'string',
                                  initialData: {
                                    type: 'static',
                                    value: '0.04',
                                  },
                                  showInput: true,
                                  value: {
                                    type: ['EMPTY_DATA', 'string'],
                                    hideAttr: true,
                                    code: '$EMPTY_DATA.string$',
                                  },
                                },
                                {
                                  attrId: '2021537',
                                  code: 'recordRealPrice',
                                  name: '录音实收价',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                  value: {
                                    type: ['EMPTY_DATA', 'string'],
                                    hideAttr: true,
                                    code: '$EMPTY_DATA.string$',
                                  },
                                },
                                {
                                  attrId: '296276',
                                  code: 'recordDiscount',
                                  name: '录音折扣（折）',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                  value: {
                                    type: ['EMPTY_DATA', 'string'],
                                    hideAttr: true,
                                    code: '$EMPTY_DATA.string$',
                                  },
                                },
                                {
                                  attrId: '528175',
                                  code: 'reason',
                                  name: '申请原因',
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
                            line_number: 11,
                            callback1: [
                              {
                                type: 'callSelfFunc',
                                dataId: 168810998873302200,
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '462319',
                                  pageJsonId: '537892',
                                  customFuncName: 'calDiscount',
                                  customFuncParams: 'object',
                                  paramsObj: { info: '$data.factorForm$' },
                                  paramsObjKeyValueMap: {
                                    info: '$data.factorForm$',
                                  },
                                },
                                line_number: 12,
                                callback1: [],
                                callback2: [],
                              },
                            ],
                            callback2: [],
                          },
                        ],
                      },
                      {
                        dataName: 'elseIf',
                        dataId: 168619141923058500,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 168619143501240130,
                            children: [],
                            todoOptions: ['visible', 'selectComp'],
                            options: {
                              compId: [
                                'Input_monthlyRentDiscount_385819',
                                'Input_6176066',
                                'Input_monthlyRent_208615',
                                'Input_recordingPrice_435663',
                                'Input_47185',
                                'Input_recordingDiscount_546785',
                              ],
                              compLib: 'comm',
                              pageJsonId: '537892',
                              compName: 'Input',
                              id: '1509718',
                              visible: 'true',
                              compid: [
                                'Input_monthlyRentDiscount_385819',
                                'Input_6176066',
                                'Input_monthlyRent_208615',
                                'Input_recordingPrice_435663',
                                'Input_47185',
                                'Input_recordingDiscount_546785',
                              ],
                            },
                            actionObjId: 'Input_monthlyRent_208615',
                            actionObjName: 'Input',
                            value: 'setVisible',
                            compLib: 'comm',
                            line_number: 13,
                          },
                          {
                            dataName: 'action',
                            dataId: 168620692176432200,
                            children: [
                              {
                                dataName: 'callback',
                                dataId: 168620692176400500,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 168810999269079330,
                                    children: [
                                      {
                                        dataName: 'callback',
                                        dataId: 168810999269075870,
                                        children: [],
                                        value: 'callback1',
                                        params: [],
                                      },
                                      {
                                        dataName: 'callback',
                                        dataId: 168810999269035100,
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
                                      id: '237972',
                                      pageJsonId: '537892',
                                      customFuncName: 'calDiscount',
                                      customFuncParams: 'object',
                                      paramsObj: { info: '$data.factorForm$' },
                                      paramsObjKeyValueMap: {
                                        info: '$data.factorForm$',
                                      },
                                    },
                                    actionObjId: 'callSelfFunc',
                                    actionObjName: 'system',
                                    value: 'callSelfFunc',
                                    line_number: 15,
                                  },
                                ],
                                value: 'callback1',
                                params: [],
                              },
                              {
                                dataName: 'callback',
                                dataId: 168620692176416060,
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
                              id: '2557764',
                              pageJsonId: '537892',
                              dataSourceId: 166124254360037760,
                              dataSourceName: 'factorForm',
                              dataSourceRelType: 'custom',
                              dataSourceSetValue: [
                                {
                                  attrId: '9268469',
                                  code: 'feeType',
                                  name: '计费类型',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                },
                                {
                                  attrId: '011908',
                                  code: 'unRecordDirPrice',
                                  name: '非录音目录价（元/min）',
                                  type: 'string',
                                  initialData: {
                                    type: 'static',
                                    value: '0.02',
                                  },
                                  showInput: true,
                                  value: { type: ['customize'], code: '0.02' },
                                },
                                {
                                  attrId: '5150097',
                                  code: 'unRecordRealPrice',
                                  name: '非录音实收价',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                },
                                {
                                  attrId: '201538',
                                  code: 'unRecordDiscount',
                                  name: '非录音折扣（折）',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                },
                                {
                                  attrId: '709765',
                                  code: 'recordDirPrice',
                                  name: '录音目录价（元/min）',
                                  type: 'string',
                                  initialData: {
                                    type: 'static',
                                    value: '0.04',
                                  },
                                  showInput: true,
                                  value: { type: ['customize'], code: '0.04' },
                                },
                                {
                                  attrId: '2021537',
                                  code: 'recordRealPrice',
                                  name: '录音实收价',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                },
                                {
                                  attrId: '296276',
                                  code: 'recordDiscount',
                                  name: '录音折扣（折）',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                },
                                {
                                  attrId: '528175',
                                  code: 'reason',
                                  name: '申请原因',
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
                            line_number: 14,
                          },
                          {
                            dataName: 'action',
                            dataId: 168897033675534980,
                            children: [
                              {
                                dataName: 'callback',
                                dataId: 168897033675515070,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 168897034705211800,
                                    children: [
                                      {
                                        dataName: 'callback',
                                        dataId: 168897034705214750,
                                        children: [],
                                        value: 'callback1',
                                        params: [],
                                      },
                                    ],
                                    todoOptions: ['compId', 'valueList'],
                                    options: {
                                      compId: ['Select_5285916'],
                                      compName: 'page',
                                      id: '9824725',
                                      pageJsonId: '537892',
                                      compid: ['Select_5285916'],
                                      valueList: {
                                        Select_5285916: '$data_318733$',
                                      },
                                    },
                                    actionObjId: 'sysSetValue',
                                    actionObjName: 'page',
                                    value: 'sysSetValue',
                                    line_number: 17,
                                  },
                                ],
                                value: 'callback1',
                                params: [],
                              },
                              {
                                dataName: 'callback',
                                dataId: 168897033675514560,
                                children: [],
                                value: 'callback2',
                                params: [],
                              },
                            ],
                            todoOptions: ['actionTitle', 'editorCode'],
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '318733',
                              pageJsonId: '537892',
                              code: 'function main(data,state,success,fail){success(undefined)};',
                            },
                            actionObjId: 'customActionCode',
                            actionObjName: 'page',
                            value: 'customActionCode',
                            tips: '注意：如果需要配合退出事件，请在代码块中增加return true',
                            line_number: 16,
                          },
                        ],
                        condition: [],
                        value: 'elseIf',
                        desc: '如果两个都不选',
                        callback: [
                          {
                            type: 'setVisible',
                            dataId: 168619143501240130,
                            options: {
                              compId: [
                                'Input_monthlyRentDiscount_385819',
                                'Input_6176066',
                                'Input_monthlyRent_208615',
                                'Input_recordingPrice_435663',
                                'Input_47185',
                                'Input_recordingDiscount_546785',
                              ],
                              compLib: 'comm',
                              pageJsonId: '537892',
                              compName: 'Input',
                              id: '1509718',
                              visible: 'true',
                              compid: [
                                'Input_monthlyRentDiscount_385819',
                                'Input_6176066',
                                'Input_monthlyRent_208615',
                                'Input_recordingPrice_435663',
                                'Input_47185',
                                'Input_recordingDiscount_546785',
                              ],
                            },
                            line_number: 13,
                          },
                          {
                            type: 'setDataSource',
                            dataId: 168620692176432200,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '2557764',
                              pageJsonId: '537892',
                              dataSourceId: 166124254360037760,
                              dataSourceName: 'factorForm',
                              dataSourceRelType: 'custom',
                              dataSourceSetValue: [
                                {
                                  attrId: '9268469',
                                  code: 'feeType',
                                  name: '计费类型',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                },
                                {
                                  attrId: '011908',
                                  code: 'unRecordDirPrice',
                                  name: '非录音目录价（元/min）',
                                  type: 'string',
                                  initialData: {
                                    type: 'static',
                                    value: '0.02',
                                  },
                                  showInput: true,
                                  value: { type: ['customize'], code: '0.02' },
                                },
                                {
                                  attrId: '5150097',
                                  code: 'unRecordRealPrice',
                                  name: '非录音实收价',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                },
                                {
                                  attrId: '201538',
                                  code: 'unRecordDiscount',
                                  name: '非录音折扣（折）',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                },
                                {
                                  attrId: '709765',
                                  code: 'recordDirPrice',
                                  name: '录音目录价（元/min）',
                                  type: 'string',
                                  initialData: {
                                    type: 'static',
                                    value: '0.04',
                                  },
                                  showInput: true,
                                  value: { type: ['customize'], code: '0.04' },
                                },
                                {
                                  attrId: '2021537',
                                  code: 'recordRealPrice',
                                  name: '录音实收价',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                },
                                {
                                  attrId: '296276',
                                  code: 'recordDiscount',
                                  name: '录音折扣（折）',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                },
                                {
                                  attrId: '528175',
                                  code: 'reason',
                                  name: '申请原因',
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
                            line_number: 14,
                            callback1: [
                              {
                                type: 'callSelfFunc',
                                dataId: 168810999269079330,
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '237972',
                                  pageJsonId: '537892',
                                  customFuncName: 'calDiscount',
                                  customFuncParams: 'object',
                                  paramsObj: { info: '$data.factorForm$' },
                                  paramsObjKeyValueMap: {
                                    info: '$data.factorForm$',
                                  },
                                },
                                line_number: 15,
                                callback1: [],
                                callback2: [],
                              },
                            ],
                            callback2: [],
                          },
                          {
                            type: 'customActionCode',
                            dataId: 168897033675534980,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '318733',
                              pageJsonId: '537892',
                              code: 'function main(data,state,success,fail){success(undefined)};',
                            },
                            line_number: 16,
                            callback1: [
                              {
                                type: 'sysSetValue',
                                dataId: 168897034705211800,
                                options: {
                                  compId: ['Select_5285916'],
                                  compName: 'page',
                                  id: '9824725',
                                  pageJsonId: '537892',
                                  compid: ['Select_5285916'],
                                  valueList: {
                                    Select_5285916: '$data_318733$',
                                  },
                                },
                                line_number: 17,
                                callback1: [],
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
                        type: 'setVisible',
                        dataId: 168619128954436350,
                        options: {
                          compId: [
                            'Input_monthlyRent_208615',
                            'Input_6176066',
                            'Input_monthlyRentDiscount_385819',
                            'Input_recordingPrice_435663',
                            'Input_47185',
                            'Input_recordingDiscount_546785',
                          ],
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Input',
                          id: '885234',
                          visible: 'true',
                          compid: [
                            'Input_monthlyRent_208615',
                            'Input_6176066',
                            'Input_monthlyRentDiscount_385819',
                            'Input_recordingPrice_435663',
                            'Input_47185',
                            'Input_recordingDiscount_546785',
                          ],
                        },
                        line_number: 2,
                      },
                      {
                        type: 'setDataSource',
                        dataId: 168620686476621060,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '713517',
                          pageJsonId: '537892',
                          dataSourceId: 166124254360037760,
                          dataSourceName: 'factorForm',
                          dataSourceRelType: 'custom',
                          dataSourceSetValue: [
                            {
                              attrId: '9268469',
                              code: 'feeType',
                              name: '计费类型',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '011908',
                              code: 'unRecordDirPrice',
                              name: '非录音目录价（元/min）',
                              type: 'string',
                              initialData: { type: 'static', value: '0.02' },
                              showInput: true,
                              value: { type: ['customize'], code: '0.02' },
                            },
                            {
                              attrId: '5150097',
                              code: 'unRecordRealPrice',
                              name: '非录音实收价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '201538',
                              code: 'unRecordDiscount',
                              name: '非录音折扣（折）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '709765',
                              code: 'recordDirPrice',
                              name: '录音目录价（元/min）',
                              type: 'string',
                              initialData: { type: 'static', value: '0.04' },
                              showInput: true,
                              value: { type: ['customize'], code: '0.04' },
                            },
                            {
                              attrId: '2021537',
                              code: 'recordRealPrice',
                              name: '录音实收价',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '296276',
                              code: 'recordDiscount',
                              name: '录音折扣（折）',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '528175',
                              code: 'reason',
                              name: '申请原因',
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
                        line_number: 3,
                        callback1: [
                          {
                            type: 'callSelfFunc',
                            dataId: 168811004587195100,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '031281',
                              pageJsonId: '537892',
                              customFuncName: 'calDiscount',
                              customFuncParams: 'object',
                              paramsObj: { info: '$data.factorForm$' },
                              paramsObjKeyValueMap: {
                                info: '$data.factorForm$',
                              },
                            },
                            line_number: 4,
                            callback1: [],
                            callback2: [],
                          },
                        ],
                        callback2: [],
                      },
                    ],
                  },
                ];
                eventDataifelse519.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDataifelse519, { e }, 'ifelse', {
                  id: 'ifelse',
                  name: 'ifelse',
                  type: 'ifelse',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Select_5285916')}
              {...injectData}
            />
            <View
              className="View_View_57343"
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_57343',
                uid: 'View_57343',
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
                textAlign: 'left',
                display: 'block',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_57343')}
              {...injectData}
            />
            <View
              className="View_View_694806"
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_694806',
                uid: 'View_694806',
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
                  formItemIndex: 2,
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
              ref={(r: any) => refs.setComponentRef(r, 'View_694806')}
              {...injectData}
            />
            <Input
              name={'非录音目录价（元/min）'}
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
              fieldName={'unRecordDirPrice'}
              value={data?.factorForm?.unRecordDirPrice}
              formItemIndex={3}
              regexp={[
                {
                  id: '696864',
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
                id: 'Input_monthlyRent_208615',
                uid: 'Input_monthlyRent_208615',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_monthlyRent_208615')
              }
              {...injectData}
            />
            <Input
              name={'非录音实收价（元/min）'}
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
              formItemIndex={4}
              fieldName={'unRecordRealPrice'}
              value={data?.factorForm?.unRecordRealPrice}
              regexp={[
                {
                  id: '152532',
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
                id: 'Input_6176066',
                uid: 'Input_6176066',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatasetDataSource212: any = [
                  {
                    type: 'setDataSource',
                    dataId: 168619355932922500,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '000018',
                      pageJsonId: '537892',
                      dataSourceId: 166124254360037760,
                      dataSourceName: 'factorForm',
                      dataSourceRelType: 'custom',
                      dataSourceSetValue: [
                        {
                          attrId: '9268469',
                          code: 'feeType',
                          name: '计费类型',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '011908',
                          code: 'unRecordDirPrice',
                          name: '非录音目录价（元/min）',
                          type: 'string',
                          initialData: { type: 'static', value: '0.02' },
                          showInput: true,
                        },
                        {
                          attrId: '5150097',
                          code: 'unRecordRealPrice',
                          name: '非录音实收价',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          value: {
                            type: ['context', '$e.target.value$'],
                            code: '',
                          },
                        },
                        {
                          attrId: '201538',
                          code: 'unRecordDiscount',
                          name: '非录音折扣（折）',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '709765',
                          code: 'recordDirPrice',
                          name: '录音目录价（元/min）',
                          type: 'string',
                          initialData: { type: 'static', value: '0.04' },
                          showInput: true,
                        },
                        {
                          attrId: '2021537',
                          code: 'recordRealPrice',
                          name: '录音实收价',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '296276',
                          code: 'recordDiscount',
                          name: '录音折扣（折）',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '528175',
                          code: 'reason',
                          name: '申请原因',
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
                    line_number: 1,
                    callback1: [
                      {
                        type: 'callSelfFunc',
                        dataId: 168619362296096770,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '998051',
                          pageJsonId: '537892',
                          customFuncName: 'calDiscount',
                          customFuncParams: 'object',
                          paramsObj: { info: '$data.factorForm$' },
                          paramsObjKeyValueMap: { info: '$data.factorForm$' },
                        },
                        line_number: 2,
                        callback1: [
                          {
                            type: 'setDataSource',
                            dataId: 168619362296059870,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '520305',
                              pageJsonId: '537892',
                              dataSourceId: 166124254360037760,
                              dataSourceName: 'factorForm',
                              dataSourceRelType: 'custom',
                              dataSourceSetValue: [
                                {
                                  attrId: '9268469',
                                  code: 'feeType',
                                  name: '计费类型',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                },
                                {
                                  attrId: '011908',
                                  code: 'unRecordDirPrice',
                                  name: '非录音目录价（元/min）',
                                  type: 'string',
                                  initialData: {
                                    type: 'static',
                                    value: '0.02',
                                  },
                                  showInput: true,
                                },
                                {
                                  attrId: '5150097',
                                  code: 'unRecordRealPrice',
                                  name: '非录音实收价',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                },
                                {
                                  attrId: '201538',
                                  code: 'unRecordDiscount',
                                  name: '非录音折扣（折）',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                },
                                {
                                  attrId: '709765',
                                  code: 'recordDirPrice',
                                  name: '录音目录价（元/min）',
                                  type: 'string',
                                  initialData: {
                                    type: 'static',
                                    value: '0.04',
                                  },
                                  showInput: true,
                                },
                                {
                                  attrId: '2021537',
                                  code: 'recordRealPrice',
                                  name: '录音实收价',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                },
                                {
                                  attrId: '296276',
                                  code: 'recordDiscount',
                                  name: '录音折扣（折）',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                },
                                {
                                  attrId: '528175',
                                  code: 'reason',
                                  name: '申请原因',
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
                eventDatasetDataSource212.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(
                  eventDatasetDataSource212,
                  { e },
                  'setDataSource',
                  {
                    id: 'setDataSource',
                    name: 'setDataSource',
                    type: 'setDataSource',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_6176066')}
              {...injectData}
            />
            <Input
              name={'非录音折扣（折）'}
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
              required={true}
              placeholder={'自动计算'}
              fieldName={'unRecordDiscount'}
              value={data?.factorForm?.unRecordDiscount}
              formItemIndex={5}
              regexp={[
                {
                  id: '159353',
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
                id: 'Input_monthlyRentDiscount_385819',
                uid: 'Input_monthlyRentDiscount_385819',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_monthlyRentDiscount_385819')
              }
              {...injectData}
            />
            <Input
              name={'录音目录价（元/min）'}
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
              placeholder={'录音目录价（元/min）'}
              fieldName={'recordDirPrice'}
              value={data?.factorForm?.recordDirPrice}
              formItemIndex={6}
              regexp={[
                {
                  id: '760338',
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
                id: 'Input_recordingPrice_435663',
                uid: 'Input_recordingPrice_435663',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_recordingPrice_435663')
              }
              {...injectData}
            />
            <Input
              name={'录音实收价（元/min）'}
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
              formItemIndex={7}
              fieldName={'recordRealPrice'}
              value={data?.factorForm?.recordRealPrice}
              regexp={[
                {
                  id: '476888',
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
                id: 'Input_47185',
                uid: 'Input_47185',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatasetDataSource213: any = [
                  {
                    type: 'setDataSource',
                    dataId: 168619363844090460,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '360324',
                      pageJsonId: '537892',
                      dataSourceId: 166124254360037760,
                      dataSourceName: 'factorForm',
                      dataSourceRelType: 'custom',
                      dataSourceSetValue: [
                        {
                          attrId: '9268469',
                          code: 'feeType',
                          name: '计费类型',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '011908',
                          code: 'unRecordDirPrice',
                          name: '非录音目录价（元/min）',
                          type: 'string',
                          initialData: { type: 'static', value: '0.02' },
                          showInput: true,
                        },
                        {
                          attrId: '5150097',
                          code: 'unRecordRealPrice',
                          name: '非录音实收价',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '201538',
                          code: 'unRecordDiscount',
                          name: '非录音折扣（折）',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '709765',
                          code: 'recordDirPrice',
                          name: '录音目录价（元/min）',
                          type: 'string',
                          initialData: { type: 'static', value: '0.04' },
                          showInput: true,
                        },
                        {
                          attrId: '2021537',
                          code: 'recordRealPrice',
                          name: '录音实收价',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          value: {
                            type: ['context', '$e.target.value$'],
                            code: '',
                          },
                        },
                        {
                          attrId: '296276',
                          code: 'recordDiscount',
                          name: '录音折扣（折）',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '528175',
                          code: 'reason',
                          name: '申请原因',
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
                    line_number: 1,
                    callback1: [
                      {
                        type: 'callSelfFunc',
                        dataId: 168619364865644060,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '2010593',
                          pageJsonId: '537892',
                          customFuncName: 'calDiscount',
                          customFuncParams: 'object',
                          paramsObj: { info: '$data.factorForm$' },
                          paramsObjKeyValueMap: { info: '$data.factorForm$' },
                        },
                        line_number: 2,
                        callback1: [
                          {
                            type: 'setDataSource',
                            dataId: 168619364865606660,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '873513',
                              pageJsonId: '537892',
                              dataSourceId: 166124254360037760,
                              dataSourceName: 'factorForm',
                              dataSourceRelType: 'custom',
                              dataSourceSetValue: [
                                {
                                  attrId: '9268469',
                                  code: 'feeType',
                                  name: '计费类型',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                },
                                {
                                  attrId: '011908',
                                  code: 'unRecordDirPrice',
                                  name: '非录音目录价（元/min）',
                                  type: 'string',
                                  initialData: {
                                    type: 'static',
                                    value: '0.02',
                                  },
                                  showInput: true,
                                },
                                {
                                  attrId: '5150097',
                                  code: 'unRecordRealPrice',
                                  name: '非录音实收价',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                },
                                {
                                  attrId: '201538',
                                  code: 'unRecordDiscount',
                                  name: '非录音折扣（折）',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                },
                                {
                                  attrId: '709765',
                                  code: 'recordDirPrice',
                                  name: '录音目录价（元/min）',
                                  type: 'string',
                                  initialData: {
                                    type: 'static',
                                    value: '0.04',
                                  },
                                  showInput: true,
                                },
                                {
                                  attrId: '2021537',
                                  code: 'recordRealPrice',
                                  name: '录音实收价',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                },
                                {
                                  attrId: '296276',
                                  code: 'recordDiscount',
                                  name: '录音折扣（折）',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                },
                                {
                                  attrId: '528175',
                                  code: 'reason',
                                  name: '申请原因',
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
                eventDatasetDataSource213.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(
                  eventDatasetDataSource213,
                  { e },
                  'setDataSource',
                  {
                    id: 'setDataSource',
                    name: 'setDataSource',
                    type: 'setDataSource',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_47185')}
              {...injectData}
            />
            <Input
              name={'录音折扣（折）'}
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
              required={true}
              placeholder={'自动计算'}
              fieldName={'recordDiscount'}
              value={data?.factorForm?.recordDiscount}
              formItemIndex={8}
              regexp={[
                {
                  id: '378015',
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
                id: 'Input_recordingDiscount_546785',
                uid: 'Input_recordingDiscount_546785',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_recordingDiscount_546785')
              }
              {...injectData}
            />
            <TextArea
              name={'申请原因'}
              selfSpan={24}
              labelCol={'8'}
              wrapperCol={16}
              titleTip={'text'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              placeholder={'请输入'}
              fieldName={'reason'}
              value={data?.factorForm?.reason}
              formItemIndex={9}
              allowClear={true}
              tipIcon={{
                theme: 'outlined',
                type: 'question-circle',
                isIconFont: false,
              }}
              tipContent={
                '该集团主要为XX（集团简单介绍），原已合作XX业务。现阶段有意向与我司合作中间号业务，合作期XX年。鉴于XX，拟申请按以下资费合作'
              }
              $$componentItem={{
                id: 'Input_580429',
                uid: 'Input_580429',
                type: 'TextArea',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_580429')}
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
            ref={(r: any) => refs.setComponentRef(r, 'Row_851124')}
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
                id: 'Form_395851_1727917_005435_498451',
                uid: 'Form_395851_1727917_005435_498451',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ padding: '0px 0px 0px 0px', margin: '10px 0px 0px 0px' }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Form_395851_1727917_005435_498451')
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
                  id: 'Input_690228_5400337_5332635_535834',
                  uid: 'Input_690228_5400337_5332635_535834',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_690228_5400337_5332635_535834')
                }
                {...injectData}
              />
              <View
                className="View_View_22346374_875512_807573_14646"
                name={'布局容器'}
                labelCol={8}
                wrapperCol={16}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_22346374_875512_807573_14646',
                  uid: 'View_22346374_875512_807573_14646',
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
                  refs.setComponentRef(r, 'View_22346374_875512_807573_14646')
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
                    id: 'StdUpload_6230546_867413_48478_058331',
                    uid: 'StdUpload_6230546_867413_48478_058331',
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
                    const eventDatagetSelectedData387: any = [
                      {
                        type: 'getSelectedData',
                        dataId: 166563017120345120,
                        options: {
                          compId: 'Input_690228_5400337_5332635_535834',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Select',
                          id: '3896543',
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'setDataSource',
                            dataId: 166563017709427330,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '4200242',
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
                                    code: '$selectedData_3896543[0].value$',
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
                                    code: '$selectedData_3896543[0].label$',
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
                                dataId: 166563017709421500,
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '933159',
                                  pageJsonId: '537892',
                                  code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=data.fileInfoList;success(data.sceneSubmit)};',
                                },
                                line_number: 3,
                                callback1: [
                                  {
                                    type: 'console',
                                    dataId: 166563017709478820,
                                    options: {
                                      compId: 'debug',
                                      compName: 'system',
                                      id: '573915',
                                      pageJsonId: '537892',
                                      value: ['$data_933159$'],
                                    },
                                    line_number: 4,
                                  },
                                  {
                                    type: 'callParentCustomFunc',
                                    dataId: 166563017709446140,
                                    options: {
                                      compId: 'callParentCustomFunc',
                                      compName: 'system',
                                      id: '535524',
                                      pageJsonId: '537892',
                                      pathname: '/commonAuditOrder',
                                      pageId: '872682457815691264',
                                      customFuncName: 'getFactor',
                                      customFuncParams: '$data.sceneSubmit$',
                                      modalPath: '/commonAuditOrder',
                                    },
                                    line_number: 5,
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
                        callback2: [],
                      },
                    ];
                    eventDatagetSelectedData387.params =
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
                      eventDatagetSelectedData387,
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
                    const eventDatacustomActionCode720: any = [
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
                    eventDatacustomActionCode720.params =
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
                      eventDatacustomActionCode720,
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
                    refs.setComponentRef(
                      r,
                      'StdUpload_6230546_867413_48478_058331',
                    )
                  }
                  {...injectData}
                />
              </View>
            </Form>
          </Row>
        </View>
        <View
          className="View_View_4949093"
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
          ref={(r: any) => refs.setComponentRef(r, 'View_4949093')}
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
              const eventDatacustomActionCode721: any = [
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
              eventDatacustomActionCode721.params =
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
                eventDatacustomActionCode721,
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
              const eventDatadownloadByFileId82: any = [
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
              eventDatadownloadByFileId82.params =
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
                eventDatadownloadByFileId82,
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
            ref={(r: any) => refs.setComponentRef(r, 'Table_5369494')}
            {...injectData}
          />
        </View>
        <BusiComp0521965
          pageId={pageId}
          busiCompId={'922396081753948160'}
          name={'附件'}
          busiCompStates={{
            catalogCode: state?.catalogCode,
            scene: state?.scene,
            fileList: state?.itemList?.fileInfo,
          }}
          style={{ margin: '0 0 12px 0' }}
          ref={(r: any) => refs.setComponentRef(r, 'BOFramer_2530231')}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(ClsCp_0008_0001$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
