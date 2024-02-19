// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import {
  Button,
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

const ClsJc_0007_0006$$Page: React.FC<PageProps> = ({
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
  const fileUpload = (options_1964167: any) => {
    const eventDatacustomActionCode91: any = [
      {
        type: 'customActionCode',
        dataId: 167282598295127330,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '478997',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=options_1964167;success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'callParentCustomFunc',
            dataId: 167282599351063650,
            options: {
              compId: 'callParentCustomFunc',
              compName: 'system',
              id: '2334123',
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
    eventDatacustomActionCode91.params =
      [
        {
          title: '事件入参',
          name: 'options_1964167',
          value: '$options_1964167$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode91,
      { options_1964167 },
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
  }));

  useEffect(() => {
    const eventDataapiRequest259: any = [
      {
        type: 'apiRequest',
        dataId: 166972760345558400,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '85671',
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
            dataId: 166972760610958980,
            options: {
              compId:
                'Input_690228_5400337_280051_232429_7501497_288005_8195412_48663836_335482',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '485642',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
              data: '$reply_85671?.resultData$',
            },
            line_number: 2,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest259.params = [] || [];
    CMDGenerator(eventDataapiRequest259, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest260: any = [
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
          _sourceName: '根据类目编码获取类目层级信息-hdb',
        },
        line_number: 3,
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
                {
                  attrId: '13154521',
                  code: 'custMemberList',
                  name: '成员信息',
                  type: 'objectArray',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '5397914',
                  code: 'instList',
                  name: '多实例',
                  type: 'objectArray',
                  initialData: { type: 'static' },
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
            },
            line_number: 4,
            callback1: [
              {
                type: 'callParentCustomFunc',
                dataId: 166444018774646720,
                options: {
                  compId: 'callParentCustomFunc',
                  compName: 'system',
                  id: '343439',
                  pageJsonId: '537892',
                  pathname: '/auditOrderPrepare',
                  pageId: '884045146848604160',
                  customFuncName: 'getFactor',
                  customFuncParams: '$data.sceneSubmit$',
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
    ];
    eventDataapiRequest260.params = [] || [];
    CMDGenerator(eventDataapiRequest260, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse146: any = [
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
        line_number: 6,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 166132449559169250,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '9981685',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var item=state.itemList;var factorForm={};var attrList=item.attrList;if(attrList!=undefined&&attrList.length>0){for(var i=0;i<attrList.length;i++){factorForm[attrList[i].attrCode]=attrList[i].attrValue}}data.factorForm=factorForm;data.sceneSubmit.approveGrade=item.approveGrade;data.sceneSubmit.approveGradeName=item.approveGradeName;data.sceneSubmit.instList=item.instList;data.sceneSubmit.attrList=item.attrList;var feeInfoList=[];item.instList.forEach(function(v){var feeObj={};var instList=v.instAttrList;if(instList!=undefined&&instList.length>0){for(var i=0;i<instList.length;i++){feeObj[instList[i].attrCode]=instList[i].attrValue}feeObj.rowId=v.instCode;feeInfoList.push(feeObj)}});data.feeInfo=feeInfoList;success(feeInfoList)};',
              actionTitle: '设置界面初始化值',
            },
            line_number: 7,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 166305500105467000,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '013094',
                  pageJsonId: '537892',
                  dataSourceId: 166519807387797900,
                  dataSourceName: 'feeInfo',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      code: 'valueLevelName',
                      name: '属性',
                      type: 'string',
                      attrId: '16284',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['valueLevelName'],
                      _idpath: ['16284'],
                    },
                    {
                      code: 'tradeclassTopName',
                      name: '属性',
                      type: 'string',
                      attrId: '50189',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['tradeclassTopName'],
                      _idpath: ['50189'],
                    },
                    {
                      code: 'totalUser',
                      name: '属性',
                      type: 'string',
                      attrId: '106104',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['totalUser'],
                      _idpath: ['106104'],
                    },
                    {
                      code: 'brokerTel',
                      name: '属性',
                      type: 'string',
                      attrId: '141501',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['brokerTel'],
                      _idpath: ['141501'],
                    },
                    {
                      code: 'statusName',
                      name: '属性',
                      type: 'string',
                      attrId: '266881',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['statusName'],
                      _idpath: ['266881'],
                    },
                    {
                      code: 'homeCityName',
                      name: '属性',
                      type: 'string',
                      attrId: '345561',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['homeCityName'],
                      _idpath: ['345561'],
                    },
                    {
                      code: 'enterpriseKindName',
                      name: '属性',
                      type: 'string',
                      attrId: '479396',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['enterpriseKindName'],
                      _idpath: ['479396'],
                    },
                    {
                      code: 'orgTypeName',
                      name: '属性',
                      type: 'string',
                      attrId: '543035',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['orgTypeName'],
                      _idpath: ['543035'],
                    },
                    {
                      code: 'gridId',
                      name: '属性',
                      type: 'string',
                      attrId: '643713',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['gridId'],
                      _idpath: ['643713'],
                    },
                    {
                      code: 'brokerId',
                      name: '属性',
                      type: 'string',
                      attrId: '704364',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['brokerId'],
                      _idpath: ['704364'],
                    },
                    {
                      code: 'createTime',
                      name: '属性',
                      type: 'string',
                      attrId: '938579',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['createTime'],
                      _idpath: ['938579'],
                    },
                    {
                      code: 'groupName',
                      name: '属性',
                      type: 'string',
                      attrId: '941438',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['groupName'],
                      _idpath: ['941438'],
                    },
                    {
                      code: 'homeCountyName',
                      name: '属性',
                      type: 'string',
                      attrId: '5195405',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['homeCountyName'],
                      _idpath: ['5195405'],
                    },
                    {
                      code: 'gridName',
                      name: '属性',
                      type: 'string',
                      attrId: '5313266',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['gridName'],
                      _idpath: ['5313266'],
                    },
                    {
                      code: 'brokerName',
                      name: '属性',
                      type: 'string',
                      attrId: '5926803',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['brokerName'],
                      _idpath: ['5926803'],
                    },
                    {
                      code: 'tradeclassName',
                      name: '属性',
                      type: 'string',
                      attrId: '8836505',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['tradeclassName'],
                      _idpath: ['8836505'],
                    },
                    {
                      code: 'planValueLevelName',
                      name: '属性',
                      type: 'string',
                      attrId: '9946835',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['planValueLevelName'],
                      _idpath: ['9946835'],
                    },
                    {
                      code: 'groupId',
                      name: '属性',
                      type: 'string',
                      attrId: '013228',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['groupId'],
                      _idpath: ['013228'],
                    },
                    {
                      code: 'otherReason',
                      name: '属性',
                      type: 'string',
                      attrId: '0264065',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['otherReason'],
                      _idpath: ['0264065'],
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  newData: '$data_9981685$',
                },
                line_number: 8,
                callback1: [],
                callback2: [],
              },
              {
                type: 'setValue',
                dataId: 166546751813763400,
                options: {
                  compId:
                    'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_3906775',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '6848837',
                  value: '$state.itemList.approveGradeName$',
                  valueList: {
                    Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_3906775:
                      '$state.itemList.approveGradeName$',
                  },
                },
                line_number: 9,
                callback1: [],
              },
              {
                type: 'console',
                dataId: 169884928147754100,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '032262',
                  pageJsonId: '537892',
                  value: ['====赋值完成后===', '$data$', '$state$'],
                },
                line_number: 10,
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
            line_number: 11,
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
                line_number: 12,
                callback1: [],
                callback2: [],
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '6374507',
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
                    condId: '851674',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166746195861398080,
                elseIfs: [],
                line_number: 13,
                callback1: [
                  {
                    type: 'setVisible',
                    dataId: 166746197045599650,
                    options: {
                      compId: 'Table_5369494',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Table',
                      id: '377649',
                    },
                    line_number: 14,
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
            line_number: 15,
            callback1: [
              {
                type: 'setVisible',
                dataId: 166546756013795970,
                options: {
                  compId:
                    'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_3906775',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '94079282',
                  visible: 'true',
                },
                line_number: 16,
              },
              {
                type: 'sysSetVisible',
                dataId: 166244953733999170,
                options: {
                  compId: [
                    'Row_851124',
                    'Table_8700198',
                    'Button_683498',
                    'Button_026256',
                    'StdUpload_304342_6986628_433547',
                    'Button_061196_858258',
                    'Button_5473437',
                  ],
                  compName: 'page',
                  id: '675663',
                  pageJsonId: '537892',
                  compid: [
                    'Row_851124',
                    'Table_8700198',
                    'Button_683498',
                    'Button_026256',
                    'StdUpload_304342_6986628_433547',
                    'Button_061196_858258',
                    'Button_5473437',
                  ],
                  visible: '',
                },
                line_number: 17,
              },
              {
                type: 'setVisible',
                dataId: 166557516797863070,
                options: {
                  compId: 'Table_8700198_3717786',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Table',
                  id: '1487314',
                  visible: 'true',
                },
                line_number: 18,
              },
              {
                type: 'setDisable',
                dataId: 166546757565618340,
                options: {
                  compId: [
                    'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_3906775',
                    'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812',
                  ],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '491958',
                  disabled: 'true',
                  compid: [
                    'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_3906775',
                    'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812',
                  ],
                },
                line_number: 19,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse146.params = [] || [];
    CMDGenerator(eventDataifelse146, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    }); // console 169884831690823580
    console.log('====data', data, state);

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
          dividerText={'集团价值等级审批'}
          showTitle={true}
          $$componentItem={{
            id: 'Divider_52558',
            uid: 'Divider_52558',
            type: 'Divider',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ margin: '12px 0 12px 0', height: 'auto' }}
          ref={(r: any) => (refs['Divider_52558'] = r)}
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
                  id: 'Form_4311097_9385662_8411515_9167293_4337769_708507_903502_3391966_7284254',
                  uid: 'Form_4311097_9385662_8411515_9167293_4337769_708507_903502_3391966_7284254',
                  type: 'Form',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) =>
                  (refs[
                    'Form_4311097_9385662_8411515_9167293_4337769_708507_903502_3391966_7284254'
                  ] = r)
                }
                {...injectData}
              >
                <Checkbox
                  name={'审批场景'}
                  titleTip={'text'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  text={'集团价值等级审批'}
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
                    id: 'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_855402',
                    uid: 'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_855402',
                    type: 'Checkbox',
                    ...componentItem,
                  }}
                  disabled={true}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    (refs[
                      'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_855402'
                    ] = r)
                  }
                  {...injectData}
                />
                <View
                  name={'布局容器'}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_6319234_3569864_15467365_781748_241037',
                    uid: 'View_6319234_3569864_15467365_781748_241037',
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
                    (refs['View_6319234_3569864_15467365_781748_241037'] = r)
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
                    id: 'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_3906775',
                    uid: 'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_3906775',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={false}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    (refs[
                      'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_3906775'
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
              id: 'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812',
              uid: 'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px', margin: '0px 0px 0px 0px' }}
            onValuesChange={(changedFieldName: any, changedValue: any) => {
              const eventDatasetDataSource125: any = [
                {
                  type: 'setDataSource',
                  dataId: 167051118069269700,
                  options: {
                    compId: 'page',
                    compName: 'page',
                    id: '240043',
                    pageJsonId: '537892',
                    dataSourceId: 167051116912078750,
                    dataSourceName: 'factorForm',
                    dataSourceRelType: 'custom',
                    dataSourceReloadFilter: [],
                    dataSourceSetValue: [
                      {
                        attrId: '371174',
                        code: 'reason',
                        name: '申请原因',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812',
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
                      dataId: 167051126083817120,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '295751',
                        pageJsonId: '537892',
                        actionTitle: '',
                        code: 'function main(data,state,success,fail){var attrList=[];var obj=data.factorForm;for(var key in obj){attrList.push({"attrCode":key,"attrName":"","attrValue":obj[key]})}data.sceneSubmit.attrList=attrList;console.log("\\u5E7F\\u57DF\\u7F51data.sceneSubmit.attrList",data.sceneSubmit.attrList);success(attrList)};',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'callParentCustomFunc',
                          dataId: 167051126083824420,
                          options: {
                            compId: 'callParentCustomFunc',
                            compName: 'system',
                            id: '6032214',
                            pageJsonId: '537892',
                            pathname: '/commonAuditOrder',
                            pageId: '872682457815691264',
                            customFuncName: 'getFactor',
                            customFuncParams: '$data.sceneSubmit$',
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
              eventDatasetDataSource125.params =
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
                eventDatasetDataSource125,
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
              (refs[
                'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812'
              ] = r)
            }
            {...injectData}
          >
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
              formItemIndex={0}
              tipIcon={{
                theme: 'outlined',
                type: 'question-circle',
                isIconFont: false,
              }}
              tipContent={
                '该集团主要为XX（集团简单介绍），原已合作XX业务。现阶段有意向与我司合作广域网专线业务，合作期XX年。鉴于XX，拟申请按以下资费合作'
              }
              $$componentItem={{
                id: 'Input_7242206_974846_973427',
                uid: 'Input_7242206_974846_973427',
                type: 'TextArea',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_7242206_974846_973427'] = r)}
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
              id: 'Row_851',
              uid: 'Row_851',
              type: 'Row',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ margin: '10px 0px 0px 0px' }}
            ref={(r: any) => (refs['Row_851'] = r)}
            {...injectData}
          >
            <View
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_859813',
                uid: 'View_859813',
                type: 'View',
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
                justifyContent: 'flex-end',
              }}
              ref={(r: any) => (refs['View_859813'] = r)}
              {...injectData}
            >
              <Button
                name={'新增'}
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
                  id: 'Button_683498',
                  uid: 'Button_683498',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ width: 'fit-content' }}
                onClick={(e: any) => {
                  const eventDatashowCustomModal125: any = [
                    {
                      type: 'showCustomModal',
                      dataId: 166314610874318850,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '611628',
                        pageJsonId: '537892',
                        modalname: '/networkAcrossProvincecopycopy',
                        pageId: '1046254072908066816',
                        paramsObj: {
                          phone: '$value_24586657$',
                          lanId: '$state.lanId$',
                          catalogCode: '$state.catalogCode$',
                          isCoreFlag: '1',
                        },
                        paramsObjKeyValueMap: {
                          phone: '$value_24586657$',
                          lanId: '$state.lanId$',
                          catalogCode: '$state.catalogCode$',
                          isCoreFlag: '1',
                        },
                        modalPath: '/networkAcrossProvincecopycopy',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'customActionCode',
                          dataId: 166314610874334820,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '195951',
                            pageJsonId: '537892',
                            code: 'function main(data,state,success,fail){data.feeInfo.push(okData_611628);var instList=[];for(var key in okData_611628){if(key!="rowId"&&key!="marketList"){instList.push({"attrCode":key,"attrName":"","attrValue":okData_611628[key]})}if(key=="marketList"){instList.push({"attrCode":key,"attrName":"","attrValue":JSON.stringify(okData_611628[key])})}}var instObj={"instCode":okData_611628.rowId,"instAttrList":instList};if(data.sceneSubmit.instList!=undefined&&data.sceneSubmit.instList.length>0){data.sceneSubmit.instList.push(instObj)}else{var instList=[];instList.push(instObj);data.sceneSubmit.instList=instList}for(var i=0;i<data.sceneSubmit.instList.length;++i){var instTemp=data.sceneSubmit.instList[i];for(var j=0;j<instTemp.instAttrList.length;++j){var instAttrTemp=instTemp.instAttrList[j];if(instAttrTemp.attrCode=="bandwidth"){for(var k=0;k<instTemp.instAttrList.length;++k){if(instTemp.instAttrList[k].attrCode=="bandwidthName"){instTemp.instAttrList[j].attrName=instTemp.instAttrList[k].attrValue}}}}}success()};',
                          },
                          line_number: 2,
                          callback1: [
                            {
                              type: 'setDataSource',
                              dataId: 166314610874380700,
                              options: {
                                compId: 'setDataSource',
                                compName: 'page',
                                id: '6286842',
                                pageJsonId: '537892',
                                dataSourceId: 166519807387797900,
                                dataSourceName: 'feeInfo',
                                dataSourceRelType: 'custom',
                                dataSourceReloadFilter: [],
                                dataSourceSetValue: [
                                  {
                                    code: 'valueLevelName',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '16284',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['valueLevelName'],
                                    _idpath: ['16284'],
                                  },
                                  {
                                    code: 'tradeclassTopName',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '50189',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['tradeclassTopName'],
                                    _idpath: ['50189'],
                                  },
                                  {
                                    code: 'totalUser',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '106104',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['totalUser'],
                                    _idpath: ['106104'],
                                  },
                                  {
                                    code: 'brokerTel',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '141501',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['brokerTel'],
                                    _idpath: ['141501'],
                                  },
                                  {
                                    code: 'statusName',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '266881',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['statusName'],
                                    _idpath: ['266881'],
                                  },
                                  {
                                    code: 'homeCityName',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '345561',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['homeCityName'],
                                    _idpath: ['345561'],
                                  },
                                  {
                                    code: 'enterpriseKindName',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '479396',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['enterpriseKindName'],
                                    _idpath: ['479396'],
                                  },
                                  {
                                    code: 'orgTypeName',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '543035',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['orgTypeName'],
                                    _idpath: ['543035'],
                                  },
                                  {
                                    code: 'gridId',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '643713',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['gridId'],
                                    _idpath: ['643713'],
                                  },
                                  {
                                    code: 'brokerId',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '704364',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['brokerId'],
                                    _idpath: ['704364'],
                                  },
                                  {
                                    code: 'createTime',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '938579',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['createTime'],
                                    _idpath: ['938579'],
                                  },
                                  {
                                    code: 'groupName',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '941438',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['groupName'],
                                    _idpath: ['941438'],
                                  },
                                  {
                                    code: 'homeCountyName',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '5195405',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['homeCountyName'],
                                    _idpath: ['5195405'],
                                  },
                                  {
                                    code: 'gridName',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '5313266',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['gridName'],
                                    _idpath: ['5313266'],
                                  },
                                  {
                                    code: 'brokerName',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '5926803',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['brokerName'],
                                    _idpath: ['5926803'],
                                  },
                                  {
                                    code: 'tradeclassName',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '8836505',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['tradeclassName'],
                                    _idpath: ['8836505'],
                                  },
                                  {
                                    code: 'planValueLevelName',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '9946835',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['planValueLevelName'],
                                    _idpath: ['9946835'],
                                  },
                                  {
                                    code: 'groupId',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '013228',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['groupId'],
                                    _idpath: ['013228'],
                                  },
                                  {
                                    code: 'otherReason',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '0264065',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['otherReason'],
                                    _idpath: ['0264065'],
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
                            {
                              type: 'callParentCustomFunc',
                              dataId: 166320792556447230,
                              options: {
                                compId: 'callParentCustomFunc',
                                compName: 'system',
                                id: '408505',
                                pageJsonId: '537892',
                                pathname: '/auditOrderPrepare',
                                pageId: '884045146848604160',
                                customFuncName: 'getFactor',
                                customFuncParams: '$data.sceneSubmit$',
                                modalPath: '/auditOrderPrepare',
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
                  ];
                  eventDatashowCustomModal125.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatashowCustomModal125,
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
                ref={(r: any) => (refs['Button_683498'] = r)}
                {...injectData}
              />
              <Button
                name={'删除'}
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
                  id: 'Button_026256',
                  uid: 'Button_026256',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ width: 'fit-content', margin: '0px 8px 0px 8px' }}
                onClick={(e: any) => {
                  const eventDatagetTableSelectedKey50: any = [
                    {
                      type: 'getTableSelectedKey',
                      dataId: 166538785844549920,
                      options: {
                        compId: 'Table_8700198',
                        compLib: 'comm',
                        pageJsonId: '537892',
                        compName: 'Table',
                        id: '18302646',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'customActionCode',
                          dataId: 166538786472019460,
                          shielding: true,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '9636193',
                            pageJsonId: '537892',
                            code: 'function main(data,state,success,fail){var feeInfo=data.feeInfo;var sel=selectedRowKeys_18302646;var res=[];var instList=[];if(sel!=undefined&&sel.length>0){feeInfo.forEach(function(v){var exit=sel.findIndex(function(item){return item===v.rowId});console.log(exit);if(exit===-1){res.push(v)}});data.feeInfo=res;data.sceneSubmit.instList.forEach(function(v){var exit=sel.findIndex(function(item){return item===v.instCode});if(exit===-1){instList.push(v)}});data.sceneSubmit.instList=instList}success()};',
                          },
                          line_number: 2,
                          callback1: [
                            {
                              type: 'setDataSource',
                              dataId: 166538786472011970,
                              shielding: true,
                              options: {
                                compId: 'setDataSource',
                                compName: 'page',
                                id: '5126556',
                                pageJsonId: '537892',
                                dataSourceId: 166519807387797900,
                                dataSourceName: 'feeInfo',
                                dataSourceRelType: 'custom',
                                dataSourceReloadFilter: [],
                                dataSourceSetValue: [
                                  {
                                    code: 'valueLevelName',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '16284',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['valueLevelName'],
                                    _idpath: ['16284'],
                                  },
                                  {
                                    code: 'tradeclassTopName',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '50189',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['tradeclassTopName'],
                                    _idpath: ['50189'],
                                  },
                                  {
                                    code: 'totalUser',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '106104',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['totalUser'],
                                    _idpath: ['106104'],
                                  },
                                  {
                                    code: 'brokerTel',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '141501',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['brokerTel'],
                                    _idpath: ['141501'],
                                  },
                                  {
                                    code: 'statusName',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '266881',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['statusName'],
                                    _idpath: ['266881'],
                                  },
                                  {
                                    code: 'homeCityName',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '345561',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['homeCityName'],
                                    _idpath: ['345561'],
                                  },
                                  {
                                    code: 'enterpriseKindName',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '479396',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['enterpriseKindName'],
                                    _idpath: ['479396'],
                                  },
                                  {
                                    code: 'orgTypeName',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '543035',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['orgTypeName'],
                                    _idpath: ['543035'],
                                  },
                                  {
                                    code: 'gridId',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '643713',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['gridId'],
                                    _idpath: ['643713'],
                                  },
                                  {
                                    code: 'brokerId',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '704364',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['brokerId'],
                                    _idpath: ['704364'],
                                  },
                                  {
                                    code: 'createTime',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '938579',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['createTime'],
                                    _idpath: ['938579'],
                                  },
                                  {
                                    code: 'groupName',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '941438',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['groupName'],
                                    _idpath: ['941438'],
                                  },
                                  {
                                    code: 'homeCountyName',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '5195405',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['homeCountyName'],
                                    _idpath: ['5195405'],
                                  },
                                  {
                                    code: 'gridName',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '5313266',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['gridName'],
                                    _idpath: ['5313266'],
                                  },
                                  {
                                    code: 'brokerName',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '5926803',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['brokerName'],
                                    _idpath: ['5926803'],
                                  },
                                  {
                                    code: 'tradeclassName',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '8836505',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['tradeclassName'],
                                    _idpath: ['8836505'],
                                  },
                                  {
                                    code: 'planValueLevelName',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '9946835',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['planValueLevelName'],
                                    _idpath: ['9946835'],
                                  },
                                  {
                                    code: 'groupId',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '013228',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['groupId'],
                                    _idpath: ['013228'],
                                  },
                                  {
                                    code: 'otherReason',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '0264065',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['otherReason'],
                                    _idpath: ['0264065'],
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
                            {
                              type: 'callParentCustomFunc',
                              dataId: 166538786472054340,
                              shielding: true,
                              options: {
                                compId: 'callParentCustomFunc',
                                compName: 'system',
                                id: '946334',
                                pageJsonId: '537892',
                                pathname: '/auditOrderPrepare',
                                pageId: '884045146848604160',
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
                        {
                          type: 'ifelse',
                          condition: [
                            {
                              condId: '9152338',
                              options: {
                                context: '$selectedRowKeys_18302646$',
                                operate: 'empty',
                              },
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                            {
                              condId: '6181125',
                              condition: [
                                {
                                  options: {
                                    context: '$selectedRowKeys_18302646$',
                                    operate: 'notEmpty',
                                  },
                                  condId: '0586874',
                                  conditionType: 'checkContextValue',
                                  objType: 'system',
                                  objId: 'sys',
                                },
                                {
                                  options: {
                                    useManual: true,
                                    useObject: false,
                                    context:
                                      '$selectedRowKeys_18302646.length$',
                                    operate: '==',
                                    manualValue: '0',
                                  },
                                  condId: '771025',
                                  connector: '&&',
                                  conditionType: 'checkContextValue',
                                  objType: 'system',
                                  objId: 'sys',
                                },
                              ],
                              connector: '||',
                            },
                          ],
                          dataId: 168655602145107260,
                          elseIfs: [
                            {
                              dataName: 'elseIf',
                              dataId: 168655602145109150,
                              children: [
                                {
                                  dataName: 'action',
                                  dataId: 168655602145186000,
                                  children: [
                                    {
                                      dataName: 'callback',
                                      dataId: 168655602145109100,
                                      children: [
                                        {
                                          dataName: 'action',
                                          dataId: 168655607469667260,
                                          children: [
                                            {
                                              dataName: 'callback',
                                              dataId: 168655607469658000,
                                              children: [
                                                {
                                                  dataName: 'action',
                                                  dataId: 168655607469649700,
                                                  children: [
                                                    {
                                                      dataName: 'callback',
                                                      dataId: 168655607469612670,
                                                      children: [],
                                                      value: 'callback1',
                                                      params: [],
                                                    },
                                                    {
                                                      dataName: 'callback',
                                                      dataId: 168655607469619680,
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
                                                    id: '8792617',
                                                    pageJsonId: '537892',
                                                    dataSourceId: 166519807387797900,
                                                    dataSourceName: 'feeInfo',
                                                    dataSourceRelType: 'custom',
                                                    dataSourceReloadFilter: [],
                                                    dataSourceSetValue: [
                                                      {
                                                        attrId: '739205',
                                                        code: 'busiType',
                                                        name: '业务类型',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '252243',
                                                        code: 'standardPrice',
                                                        name: '标准价格',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '137802',
                                                        code: 'receiptsPrice',
                                                        name: '实收价',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '963826',
                                                        code: 'bandwidth',
                                                        name: '带宽',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '5031659',
                                                        code: 'ipv6GiveNum',
                                                        name: 'IPv6赠送数',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '6377456',
                                                        code: 'ipv4GiveNum',
                                                        name: 'IPv4赠送数',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '665968',
                                                        code: 'ipv6DemandNum',
                                                        name: 'IPv6需求数',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '754893',
                                                        code: 'ipv4DemandNum',
                                                        name: 'IPv4需求数',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '6429123',
                                                        code: 'ipv6BeyondSel',
                                                        name: 'IPv6超出选择',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '197527',
                                                        code: 'ipv4BeyondNum',
                                                        name: 'IPv4超出个数',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '2152803',
                                                        code: 'ipv6BeyondCost',
                                                        name: 'IPv6超出费用',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '017672',
                                                        code: 'ipv4BeyondCount',
                                                        name: 'IPv4元/月/个',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '26139435',
                                                        code: 'unitPrice',
                                                        name: '单价（元/G）',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '62643',
                                                        code: 'lastDiscount',
                                                        name: '最终折扣',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '9425584',
                                                        code: 'market',
                                                        name: '营销案',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '442519',
                                                        code: 'busiTypeName',
                                                        name: '业务类型名称',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '026113',
                                                        code: 'bandwidthUp',
                                                        name: '上行宽带',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '9865009',
                                                        code: 'bandwidthDown',
                                                        name: '下行宽带',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '262314',
                                                        code: 'bandwidthPort',
                                                        name: 'SDWAN端口带宽',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '4672304',
                                                        code: 'singleUseFee',
                                                        name: '一次性费用',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '567251',
                                                        code: 'portFee',
                                                        name: '端口费',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '9620426',
                                                        code: 'ipv6BeyondNum',
                                                        name: 'IPv6超出个数',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '1137346',
                                                        code: 'ipv6BeyondCount',
                                                        name: 'IPv6元/月/个',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '467282',
                                                        code: 'standardPriceSdWan',
                                                        name: 'SDWAN标准价格',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '801439',
                                                        code: 'receiptsPriceSdWan',
                                                        name: 'SDWAN实收价格',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
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
                                                  line_number: 9,
                                                },
                                                {
                                                  dataName: 'action',
                                                  dataId: 168655607469688420,
                                                  children: [
                                                    {
                                                      dataName: 'callback',
                                                      dataId: 168655607469693980,
                                                      children: [],
                                                      value: 'callback1',
                                                      params: [],
                                                    },
                                                    {
                                                      dataName: 'callback',
                                                      dataId: 168655607469652830,
                                                      children: [],
                                                      value: 'callback2',
                                                      params: [],
                                                    },
                                                  ],
                                                  todoOptions: [
                                                    'pathname',
                                                    'customFuncName',
                                                    'customFuncParams',
                                                  ],
                                                  options: {
                                                    compId:
                                                      'callParentCustomFunc',
                                                    compName: 'system',
                                                    id: '8349372',
                                                    pageJsonId: '537892',
                                                    pathname:
                                                      '/auditOrderPrepare',
                                                    pageId:
                                                      '884045146848604160',
                                                    customFuncName: 'getFactor',
                                                    customFuncParams:
                                                      '$data.sceneSubmit$',
                                                    modalPath:
                                                      '/auditOrderPrepare',
                                                  },
                                                  actionObjId:
                                                    'callParentCustomFunc',
                                                  actionObjName: 'system',
                                                  value: 'callParentCustomFunc',
                                                  line_number: 10,
                                                },
                                              ],
                                              value: 'callback1',
                                              params: [],
                                            },
                                            {
                                              dataName: 'callback',
                                              dataId: 168655607469653820,
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
                                            id: '49974',
                                            pageJsonId: '537892',
                                            code: 'function main(data,state,success,fail){var feeInfo=data.feeInfo;var sel=selectedRowKeys_18302646;var res=[];var instList=[];if(sel!=undefined&&sel.length>0){feeInfo.forEach(function(v){var exit=sel.findIndex(function(item){return item===v.rowId});console.log(exit);if(exit===-1){res.push(v)}});data.feeInfo=res;data.sceneSubmit.instList.forEach(function(v){var exit=sel.findIndex(function(item){return item===v.instCode});if(exit===-1){instList.push(v)}});data.sceneSubmit.instList=instList}success()};',
                                          },
                                          actionObjId: 'customActionCode',
                                          actionObjName: 'page',
                                          value: 'customActionCode',
                                          line_number: 8,
                                        },
                                      ],
                                      value: 'callback1',
                                      params: [],
                                    },
                                    {
                                      dataName: 'callback',
                                      dataId: 168655602145120830,
                                      children: [],
                                      value: 'callback2',
                                      params: [],
                                    },
                                  ],
                                  todoOptions: [
                                    'modalType',
                                    'title',
                                    'content',
                                    'okText',
                                    'cancelText',
                                  ],
                                  options: {
                                    compId: 'showModal',
                                    compName: 'page',
                                    id: '598154',
                                    pageJsonId: '537892',
                                    type: 'confirm',
                                    title: '温馨提示',
                                    content: '您确定要删除吗?',
                                    okText: '确认',
                                  },
                                  actionObjId: 'showModal',
                                  actionObjName: 'page',
                                  value: 'showModal',
                                  line_number: 7,
                                },
                              ],
                              condition: [],
                              value: 'elseIf',
                              callback: [
                                {
                                  type: 'showModal',
                                  dataId: 168655602145186000,
                                  options: {
                                    compId: 'showModal',
                                    compName: 'page',
                                    id: '598154',
                                    pageJsonId: '537892',
                                    type: 'confirm',
                                    title: '温馨提示',
                                    content: '您确定要删除吗?',
                                    okText: '确认',
                                  },
                                  line_number: 7,
                                  callback1: [
                                    {
                                      type: 'customActionCode',
                                      dataId: 168655607469667260,
                                      options: {
                                        compId: 'customActionCode',
                                        compName: 'page',
                                        id: '49974',
                                        pageJsonId: '537892',
                                        code: 'function main(data,state,success,fail){var feeInfo=data.feeInfo;var sel=selectedRowKeys_18302646;var res=[];var instList=[];if(sel!=undefined&&sel.length>0){feeInfo.forEach(function(v){var exit=sel.findIndex(function(item){return item===v.rowId});console.log(exit);if(exit===-1){res.push(v)}});data.feeInfo=res;data.sceneSubmit.instList.forEach(function(v){var exit=sel.findIndex(function(item){return item===v.instCode});if(exit===-1){instList.push(v)}});data.sceneSubmit.instList=instList}success()};',
                                      },
                                      line_number: 8,
                                      callback1: [
                                        {
                                          type: 'setDataSource',
                                          dataId: 168655607469649700,
                                          options: {
                                            compId: 'setDataSource',
                                            compName: 'page',
                                            id: '8792617',
                                            pageJsonId: '537892',
                                            dataSourceId: 166519807387797900,
                                            dataSourceName: 'feeInfo',
                                            dataSourceRelType: 'custom',
                                            dataSourceReloadFilter: [],
                                            dataSourceSetValue: [
                                              {
                                                attrId: '739205',
                                                code: 'busiType',
                                                name: '业务类型',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '252243',
                                                code: 'standardPrice',
                                                name: '标准价格',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '137802',
                                                code: 'receiptsPrice',
                                                name: '实收价',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '963826',
                                                code: 'bandwidth',
                                                name: '带宽',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '5031659',
                                                code: 'ipv6GiveNum',
                                                name: 'IPv6赠送数',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '6377456',
                                                code: 'ipv4GiveNum',
                                                name: 'IPv4赠送数',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '665968',
                                                code: 'ipv6DemandNum',
                                                name: 'IPv6需求数',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '754893',
                                                code: 'ipv4DemandNum',
                                                name: 'IPv4需求数',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '6429123',
                                                code: 'ipv6BeyondSel',
                                                name: 'IPv6超出选择',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '197527',
                                                code: 'ipv4BeyondNum',
                                                name: 'IPv4超出个数',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '2152803',
                                                code: 'ipv6BeyondCost',
                                                name: 'IPv6超出费用',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '017672',
                                                code: 'ipv4BeyondCount',
                                                name: 'IPv4元/月/个',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '26139435',
                                                code: 'unitPrice',
                                                name: '单价（元/G）',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '62643',
                                                code: 'lastDiscount',
                                                name: '最终折扣',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '9425584',
                                                code: 'market',
                                                name: '营销案',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '442519',
                                                code: 'busiTypeName',
                                                name: '业务类型名称',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '026113',
                                                code: 'bandwidthUp',
                                                name: '上行宽带',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '9865009',
                                                code: 'bandwidthDown',
                                                name: '下行宽带',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '262314',
                                                code: 'bandwidthPort',
                                                name: 'SDWAN端口带宽',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '4672304',
                                                code: 'singleUseFee',
                                                name: '一次性费用',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '567251',
                                                code: 'portFee',
                                                name: '端口费',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '9620426',
                                                code: 'ipv6BeyondNum',
                                                name: 'IPv6超出个数',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '1137346',
                                                code: 'ipv6BeyondCount',
                                                name: 'IPv6元/月/个',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '467282',
                                                code: 'standardPriceSdWan',
                                                name: 'SDWAN标准价格',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '801439',
                                                code: 'receiptsPriceSdWan',
                                                name: 'SDWAN实收价格',
                                                type: 'string',
                                                initialData: { type: 'static' },
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
                                          type: 'callParentCustomFunc',
                                          dataId: 168655607469688420,
                                          options: {
                                            compId: 'callParentCustomFunc',
                                            compName: 'system',
                                            id: '8349372',
                                            pageJsonId: '537892',
                                            pathname: '/auditOrderPrepare',
                                            pageId: '884045146848604160',
                                            customFuncName: 'getFactor',
                                            customFuncParams:
                                              '$data.sceneSubmit$',
                                            modalPath: '/auditOrderPrepare',
                                          },
                                          line_number: 10,
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
                          line_number: 5,
                          callback1: [
                            {
                              type: 'showMessage',
                              dataId: 168655602145191550,
                              options: {
                                compId: 'showMessage',
                                compName: 'system',
                                id: '672118',
                                pageJsonId: '537892',
                                type: 'info',
                                value: '请先选择数据！',
                              },
                              line_number: 6,
                            },
                          ],
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatagetTableSelectedKey50.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatagetTableSelectedKey50,
                    { e },
                    'getTableSelectedKey',
                    {
                      id: 'getTableSelectedKey',
                      name: 'getTableSelectedKey',
                      type: 'getTableSelectedKey',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) => (refs['Button_026256'] = r)}
                {...injectData}
              />
              <Button
                name={'清空'}
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
                  id: 'Button_5473437',
                  uid: 'Button_5473437',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ width: 'fit-content', margin: '0px 10px 0px 0px' }}
                onClick={(e: any) => {
                  const eventDataifelse445: any = [
                    {
                      type: 'ifelse',
                      condition: [
                        {
                          condId: '913482',
                          options: {
                            context: '$data.feeInfo$',
                            operate: 'notEmpty',
                          },
                          conditionType: 'checkContextValue',
                          objType: 'system',
                          objId: 'sys',
                        },
                        {
                          options: {
                            useManual: true,
                            useObject: false,
                            context: '$data.feeInfo.length$',
                            operate: '>',
                            manualValue: '0',
                          },
                          condId: '225057',
                          connector: '&&',
                          conditionType: 'checkContextValue',
                          objType: 'system',
                          objId: 'sys',
                        },
                      ],
                      dataId: 168654928547086080,
                      elseIfs: [
                        {
                          dataName: 'elseIf',
                          dataId: 168654933664453340,
                          children: [
                            {
                              dataName: 'action',
                              dataId: 168654934060454430,
                              children: [],
                              todoOptions: ['msgType', 'value', 'duration'],
                              options: {
                                compId: 'showMessage',
                                compName: 'system',
                                id: '3807376',
                                pageJsonId: '537892',
                                type: 'info',
                                value: '暂无数据！',
                              },
                              actionObjId: 'showMessage',
                              actionObjName: 'system',
                              value: 'showMessage',
                              tips: '注意：当加载时长为0时，表示一直显示加载中。当加载时长大于0时，表示按照设置时间显示加载中。',
                              line_number: 6,
                            },
                          ],
                          condition: [],
                          value: 'elseIf',
                          callback: [
                            {
                              type: 'showMessage',
                              dataId: 168654934060454430,
                              options: {
                                compId: 'showMessage',
                                compName: 'system',
                                id: '3807376',
                                pageJsonId: '537892',
                                type: 'info',
                                value: '暂无数据！',
                              },
                              line_number: 6,
                            },
                          ],
                        },
                      ],
                      line_number: 1,
                      callback1: [
                        {
                          type: 'showModal',
                          dataId: 168654933030972830,
                          options: {
                            compId: 'showModal',
                            compName: 'page',
                            id: '465026',
                            pageJsonId: '537892',
                            type: 'confirm',
                            title: '温馨提示',
                            content: '您确定要清空全部数据吗?',
                          },
                          line_number: 2,
                          callback1: [
                            {
                              type: 'setDataSource',
                              dataId: 168654933030923420,
                              options: {
                                compId: 'setDataSource',
                                compName: 'page',
                                id: '543478',
                                pageJsonId: '537892',
                                dataSourceId: 166096152690913730,
                                dataSourceName: 'sceneSubmit',
                                dataSourceRelType: 'custom',
                                dataSourceSetValue: [
                                  {
                                    attrId: '154379',
                                    code: 'catalogCode',
                                    name: '类目编码',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '4562264',
                                    code: 'approveGrade',
                                    name: '审批等级',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '63768',
                                    code: 'attrList',
                                    name: '要素',
                                    type: 'objectArray',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '919265',
                                    code: 'fileInfo',
                                    name: '附件',
                                    type: 'objectArray',
                                    initialData: { type: 'static' },
                                    children: [],
                                  },
                                  {
                                    attrId: '360171',
                                    code: 'catalogItemCode',
                                    name: '类目项编码',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '420623',
                                    code: 'catalogItemSubType',
                                    name: '类目项子类型',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '375466',
                                    code: 'childCatalogCode',
                                    name: '子类目项编码',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '9257773',
                                    code: 'parentCatalogCode',
                                    name: '上级类目编码',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '5733013',
                                    code: 'parentCatalogItemCode',
                                    name: '上级类目项编码',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '440627',
                                    code: 'childCatalogDesc',
                                    name: '子类目项描述',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '177104',
                                    code: 'approveGradeName',
                                    name: '审批等级名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '13154521',
                                    code: 'custMemberList',
                                    name: '成员信息',
                                    type: 'objectArray',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '5397914',
                                    code: 'instList',
                                    name: '多实例',
                                    type: 'objectArray',
                                    initialData: { type: 'static' },
                                    value: {
                                      type: ['EMPTY_DATA', 'array'],
                                      hideAttr: true,
                                      code: '$EMPTY_DATA.array$',
                                    },
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
                                  type: 'callParentCustomFunc',
                                  dataId: 168654933030954900,
                                  options: {
                                    compId: 'callParentCustomFunc',
                                    compName: 'system',
                                    id: '115292',
                                    pageJsonId: '537892',
                                    pathname: '/auditOrderPrepare',
                                    pageId: '884045146848604160',
                                    customFuncName: 'getFactor',
                                    customFuncParams: '$data.sceneSubmit$',
                                    modalPath: '/auditOrderPrepare',
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
                              dataId: 168655582339309540,
                              options: {
                                compId: 'setDataSource',
                                compName: 'page',
                                id: '429442',
                                pageJsonId: '537892',
                                dataSourceId: 166519807387797900,
                                dataSourceName: 'feeInfo',
                                dataSourceRelType: 'custom',
                                dataSourceSetValue: [
                                  {
                                    code: 'valueLevelName',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '16284',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['valueLevelName'],
                                    _idpath: ['16284'],
                                  },
                                  {
                                    code: 'tradeclassTopName',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '50189',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['tradeclassTopName'],
                                    _idpath: ['50189'],
                                  },
                                  {
                                    code: 'totalUser',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '106104',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['totalUser'],
                                    _idpath: ['106104'],
                                  },
                                  {
                                    code: 'brokerTel',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '141501',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['brokerTel'],
                                    _idpath: ['141501'],
                                  },
                                  {
                                    code: 'statusName',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '266881',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['statusName'],
                                    _idpath: ['266881'],
                                  },
                                  {
                                    code: 'homeCityName',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '345561',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['homeCityName'],
                                    _idpath: ['345561'],
                                  },
                                  {
                                    code: 'enterpriseKindName',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '479396',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['enterpriseKindName'],
                                    _idpath: ['479396'],
                                  },
                                  {
                                    code: 'orgTypeName',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '543035',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['orgTypeName'],
                                    _idpath: ['543035'],
                                  },
                                  {
                                    code: 'gridId',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '643713',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['gridId'],
                                    _idpath: ['643713'],
                                  },
                                  {
                                    code: 'brokerId',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '704364',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['brokerId'],
                                    _idpath: ['704364'],
                                  },
                                  {
                                    code: 'createTime',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '938579',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['createTime'],
                                    _idpath: ['938579'],
                                  },
                                  {
                                    code: 'groupName',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '941438',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['groupName'],
                                    _idpath: ['941438'],
                                  },
                                  {
                                    code: 'homeCountyName',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '5195405',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['homeCountyName'],
                                    _idpath: ['5195405'],
                                  },
                                  {
                                    code: 'gridName',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '5313266',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['gridName'],
                                    _idpath: ['5313266'],
                                  },
                                  {
                                    code: 'brokerName',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '5926803',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['brokerName'],
                                    _idpath: ['5926803'],
                                  },
                                  {
                                    code: 'tradeclassName',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '8836505',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['tradeclassName'],
                                    _idpath: ['8836505'],
                                  },
                                  {
                                    code: 'planValueLevelName',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '9946835',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['planValueLevelName'],
                                    _idpath: ['9946835'],
                                  },
                                  {
                                    code: 'groupId',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '013228',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['groupId'],
                                    _idpath: ['013228'],
                                  },
                                  {
                                    code: 'otherReason',
                                    name: '属性',
                                    type: 'string',
                                    attrId: '0264065',
                                    initialData: { type: 'static', value: '' },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['otherReason'],
                                    _idpath: ['0264065'],
                                  },
                                ],
                                operateType: 3,
                                onlySetPatch: true,
                                otherObjectArrayOptions: {},
                                targetDataSourcePaths: [],
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
                  eventDataifelse445.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDataifelse445, { e }, 'ifelse', {
                    id: 'ifelse',
                    name: 'ifelse',
                    type: 'ifelse',
                    platform: 'pc',
                  });
                }}
                ref={(r: any) => (refs['Button_5473437'] = r)}
                {...injectData}
              />
              <StdUpload
                name={'导入'}
                uploadStyle={'click'}
                listType={'text'}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                fileNameEncode={false}
                isWatermark={false}
                optionalFile={false}
                fileName={'file'}
                selfSpan={''}
                labelCol={8}
                wrapperCol={16}
                acceptType={[]}
                withCredentials={true}
                numberLimit={99}
                singleFileMaxSize={50}
                uploadText={'导入'}
                uploadTimeout={30000}
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
                fieldName={'toLead'}
                className={
                  '.ued-stdupload-wrap .pcfactory-upload.pcfactory-upload-select.pcfactory-upload-select-text button {   border-radius: 4px; }'
                }
                icon={{
                  type: undefined,
                  theme: 'outlined',
                  fontAddress: '',
                  isIconFont: false,
                  iconFileInfo: {},
                }}
                $$componentItem={{
                  id: 'StdUpload_304342_6986628_433547',
                  uid: 'StdUpload_304342_6986628_433547',
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
                  fileResponseList: any,
                  fileId: any,
                  fileSize: any,
                  fileName: any,
                  fileResponse: any,
                ) => {
                  const eventDatasetLoading161: any = [
                    {
                      type: 'setLoading',
                      dataId: 167698774505989200,
                      options: {
                        compId: 'Table_8700198',
                        compLib: 'comm',
                        pageJsonId: '537892',
                        compName: 'Table',
                        id: '864793',
                        loading: true,
                      },
                      line_number: 1,
                    },
                  ];
                  eventDatasetLoading161.params =
                    [
                      {
                        title: '文件对象',
                        name: 'file',
                        value: '$file$',
                        attrType: 'object',
                      },
                      {
                        title: '上传信息列表',
                        name: 'fileList',
                        value: '$fileList$',
                      },
                      {
                        title: '文件列表',
                        name: 'fileResponseList',
                        value: '$fileResponseList$',
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
                        attrType: 'object',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatasetLoading161,
                    {
                      file,
                      fileList,
                      fileResponseList,
                      fileId,
                      fileSize,
                      fileName,
                      fileResponse,
                    },
                    'setLoading',
                    {
                      id: 'setLoading',
                      name: 'setLoading',
                      type: 'setLoading',
                      platform: 'pc',
                    },
                  );
                  const eventDataapiRequest722: any = [
                    {
                      type: 'apiRequest',
                      dataId: 167636869656829060,
                      options: {
                        compId: 'apiRequest',
                        compName: 'system',
                        id: '9706607',
                        pageJsonId: '537892',
                        sync: false,
                        actionTitle: 'excel',
                        method: 'post',
                        url: '/app/rhin/gateway/callRhinEngine',
                        _capabilityCode: 'fileDownloadAnalysis',
                        _apiCode: 'fileDownloadAnalysis',
                        _source: 'rhin',
                        _serviceId: '929658389365272576',
                        _serviceTitle:
                          '下载Excle文件并解析-hdb: fileDownloadAnalysis',
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
                                dataKey: '9706607_root.header',
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
                                dataKey: '9706607_root.path',
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
                                dataKey: '9706607_root.query',
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
                                    code: 'fileCode',
                                    name: '新增节点',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    defaultValue: '',
                                    _id: 'root.body.fileCode',
                                    compType: 'Input',
                                    parents: ['root', 'body'],
                                    id: 'root.body.fileCode',
                                    dataKey: '9706607_root.body.fileCode',
                                    value: {
                                      type: [
                                        'context',
                                        '$file?.response?.resultObject?.fileId$',
                                      ],
                                      code: '',
                                    },
                                    parentType: 'object',
                                    parentKey: '0-3',
                                    key: '0-3-0',
                                  },
                                  {
                                    code: 'sceneCode',
                                    name: '新增节点',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    defaultValue: '',
                                    _id: 'root.body.sceneCode',
                                    compType: 'Input',
                                    parents: ['root', 'body'],
                                    id: 'root.body.sceneCode',
                                    dataKey: '9706607_root.body.sceneCode',
                                    value: {
                                      type: ['customize'],
                                      code: 'CLS_CP_0007_0008',
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
                                dataKey: '9706607_root.body',
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
                            dataKey: '9706607_root',
                          },
                        ],
                        _sourceName: '下载Excle文件并解析-hdb',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'ifelse',
                          condition: [
                            {
                              condId: '045247',
                              options: {
                                useManual: true,
                                useObject: false,
                                context: '$reply_9706607.resultCode$',
                                operate: '==',
                                manualValue: '-1',
                              },
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          dataId: 167642856809327300,
                          elseIfs: [
                            {
                              dataName: 'elseIf',
                              dataId: 167642918061167940,
                              children: [
                                {
                                  dataName: 'action',
                                  dataId: 170107736659150300,
                                  children: [
                                    {
                                      dataName: 'callback',
                                      dataId: 170107736659183500,
                                      children: [
                                        {
                                          dataName: 'action',
                                          dataId: 170323077040293300,
                                          children: [],
                                          todoOptions: ['loading'],
                                          options: {
                                            compId: 'View_537892_1',
                                            compLib: 'custom',
                                            pageJsonId: '537892',
                                            compName: 'View',
                                            id: '368185',
                                            loading: true,
                                          },
                                          actionObjId: 'View_537892_1',
                                          actionObjName: 'View',
                                          value: 'setLoading',
                                          compLib: 'custom',
                                          line_number: 6,
                                        },
                                        {
                                          dataName: 'action',
                                          dataId: 170107741361909120,
                                          children: [
                                            {
                                              dataName: 'callback',
                                              dataId: 170107741361944540,
                                              children: [
                                                {
                                                  dataName: 'action',
                                                  dataId: 170107746686018180,
                                                  children: [
                                                    {
                                                      dataName: 'callback',
                                                      dataId: 170107746686045660,
                                                      children: [
                                                        {
                                                          dataName: 'action',
                                                          dataId: 170115488833318080,
                                                          children: [
                                                            {
                                                              dataName:
                                                                'callback',
                                                              dataId: 170115488833345200,
                                                              children: [
                                                                {
                                                                  dataName:
                                                                    'action',
                                                                  dataId: 170115497552070430,
                                                                  children: [
                                                                    {
                                                                      dataName:
                                                                        'callback',
                                                                      dataId: 170115497552028060,
                                                                      children:
                                                                        [
                                                                          {
                                                                            dataName:
                                                                              'action',
                                                                            dataId: 170115992758240900,
                                                                            children:
                                                                              [
                                                                                {
                                                                                  dataName:
                                                                                    'callback',
                                                                                  dataId: 170115992758296030,
                                                                                  children:
                                                                                    [
                                                                                      {
                                                                                        dataName:
                                                                                          'action',
                                                                                        dataId: 170323078657953400,
                                                                                        children:
                                                                                          [],
                                                                                        todoOptions:
                                                                                          [
                                                                                            'loading',
                                                                                          ],
                                                                                        options:
                                                                                          {
                                                                                            compId:
                                                                                              'View_537892_1',
                                                                                            compLib:
                                                                                              'custom',
                                                                                            pageJsonId:
                                                                                              '537892',
                                                                                            compName:
                                                                                              'View',
                                                                                            id: '82161426',
                                                                                            loading:
                                                                                              false,
                                                                                          },
                                                                                        actionObjId:
                                                                                          'View_537892_1',
                                                                                        actionObjName:
                                                                                          'View',
                                                                                        value:
                                                                                          'setLoading',
                                                                                        compLib:
                                                                                          'custom',
                                                                                        line_number: 12,
                                                                                      },
                                                                                    ],
                                                                                  value:
                                                                                    'callback1',
                                                                                  params:
                                                                                    [],
                                                                                },
                                                                                {
                                                                                  dataName:
                                                                                    'callback',
                                                                                  dataId: 170115992758206850,
                                                                                  children:
                                                                                    [],
                                                                                  value:
                                                                                    'callback2',
                                                                                  params:
                                                                                    [],
                                                                                },
                                                                              ],
                                                                            todoOptions:
                                                                              [
                                                                                'selectAllDataSource',
                                                                                'dataSourceSetValue',
                                                                                'onlySetPatch',
                                                                              ],
                                                                            options:
                                                                              {
                                                                                compId:
                                                                                  'setDataSource',
                                                                                compName:
                                                                                  'page',
                                                                                id: '9052977',
                                                                                pageJsonId:
                                                                                  '537892',
                                                                                dataSourceId: 166519807387797900,
                                                                                dataSourceName:
                                                                                  'feeInfo',
                                                                                dataSourceRelType:
                                                                                  'custom',
                                                                                dataSourceSetValue:
                                                                                  [
                                                                                    {
                                                                                      code: 'groupId',
                                                                                      name: '属性',
                                                                                      type: 'string',
                                                                                      attrId:
                                                                                        '013228',
                                                                                      initialData:
                                                                                        {
                                                                                          type: 'static',
                                                                                          value:
                                                                                            '',
                                                                                        },
                                                                                      parentKey:
                                                                                        '1',
                                                                                      parentType:
                                                                                        'object',
                                                                                      showInput:
                                                                                        false,
                                                                                    },
                                                                                    {
                                                                                      code: 'homeCityName',
                                                                                      name: '属性',
                                                                                      type: 'string',
                                                                                      attrId:
                                                                                        '345561',
                                                                                      initialData:
                                                                                        {
                                                                                          type: 'static',
                                                                                          value:
                                                                                            '',
                                                                                        },
                                                                                      parentKey:
                                                                                        '1',
                                                                                      parentType:
                                                                                        'object',
                                                                                      showInput:
                                                                                        false,
                                                                                    },
                                                                                    {
                                                                                      code: 'homeCountyName',
                                                                                      name: '属性',
                                                                                      type: 'string',
                                                                                      attrId:
                                                                                        '5195405',
                                                                                      initialData:
                                                                                        {
                                                                                          type: 'static',
                                                                                          value:
                                                                                            '',
                                                                                        },
                                                                                      parentKey:
                                                                                        '1',
                                                                                      parentType:
                                                                                        'object',
                                                                                      showInput:
                                                                                        false,
                                                                                    },
                                                                                    {
                                                                                      code: 'groupName',
                                                                                      name: '属性',
                                                                                      type: 'string',
                                                                                      attrId:
                                                                                        '941438',
                                                                                      initialData:
                                                                                        {
                                                                                          type: 'static',
                                                                                          value:
                                                                                            '',
                                                                                        },
                                                                                      parentKey:
                                                                                        '1',
                                                                                      parentType:
                                                                                        'object',
                                                                                      showInput:
                                                                                        false,
                                                                                    },
                                                                                    {
                                                                                      code: 'statusName',
                                                                                      name: '属性',
                                                                                      type: 'string',
                                                                                      attrId:
                                                                                        '266881',
                                                                                      initialData:
                                                                                        {
                                                                                          type: 'static',
                                                                                          value:
                                                                                            '',
                                                                                        },
                                                                                      parentKey:
                                                                                        '1',
                                                                                      parentType:
                                                                                        'object',
                                                                                      showInput:
                                                                                        false,
                                                                                    },
                                                                                    {
                                                                                      code: 'createTime',
                                                                                      name: '属性',
                                                                                      type: 'string',
                                                                                      attrId:
                                                                                        '938579',
                                                                                      initialData:
                                                                                        {
                                                                                          type: 'static',
                                                                                          value:
                                                                                            '',
                                                                                        },
                                                                                      parentKey:
                                                                                        '1',
                                                                                      parentType:
                                                                                        'object',
                                                                                      showInput:
                                                                                        false,
                                                                                    },
                                                                                    {
                                                                                      code: 'tradeclassTopName',
                                                                                      name: '属性',
                                                                                      type: 'string',
                                                                                      attrId:
                                                                                        '50189',
                                                                                      initialData:
                                                                                        {
                                                                                          type: 'static',
                                                                                          value:
                                                                                            '',
                                                                                        },
                                                                                      parentKey:
                                                                                        '1',
                                                                                      parentType:
                                                                                        'object',
                                                                                      showInput:
                                                                                        false,
                                                                                    },
                                                                                    {
                                                                                      code: 'tradeclassName',
                                                                                      name: '属性',
                                                                                      type: 'string',
                                                                                      attrId:
                                                                                        '8836505',
                                                                                      initialData:
                                                                                        {
                                                                                          type: 'static',
                                                                                          value:
                                                                                            '',
                                                                                        },
                                                                                      parentKey:
                                                                                        '1',
                                                                                      parentType:
                                                                                        'object',
                                                                                      showInput:
                                                                                        false,
                                                                                    },
                                                                                    {
                                                                                      code: 'orgTypeName',
                                                                                      name: '属性',
                                                                                      type: 'string',
                                                                                      attrId:
                                                                                        '543035',
                                                                                      initialData:
                                                                                        {
                                                                                          type: 'static',
                                                                                          value:
                                                                                            '',
                                                                                        },
                                                                                      parentKey:
                                                                                        '1',
                                                                                      parentType:
                                                                                        'object',
                                                                                      showInput:
                                                                                        false,
                                                                                    },
                                                                                    {
                                                                                      code: 'gridName',
                                                                                      name: '属性',
                                                                                      type: 'string',
                                                                                      attrId:
                                                                                        '5313266',
                                                                                      initialData:
                                                                                        {
                                                                                          type: 'static',
                                                                                          value:
                                                                                            '',
                                                                                        },
                                                                                      parentKey:
                                                                                        '1',
                                                                                      parentType:
                                                                                        'object',
                                                                                      showInput:
                                                                                        false,
                                                                                    },
                                                                                    {
                                                                                      code: 'gridId',
                                                                                      name: '属性',
                                                                                      type: 'string',
                                                                                      attrId:
                                                                                        '643713',
                                                                                      initialData:
                                                                                        {
                                                                                          type: 'static',
                                                                                          value:
                                                                                            '',
                                                                                        },
                                                                                      parentKey:
                                                                                        '1',
                                                                                      parentType:
                                                                                        'object',
                                                                                      showInput:
                                                                                        false,
                                                                                    },
                                                                                    {
                                                                                      code: 'brokerId',
                                                                                      name: '属性',
                                                                                      type: 'string',
                                                                                      attrId:
                                                                                        '704364',
                                                                                      initialData:
                                                                                        {
                                                                                          type: 'static',
                                                                                          value:
                                                                                            '',
                                                                                        },
                                                                                      parentKey:
                                                                                        '1',
                                                                                      parentType:
                                                                                        'object',
                                                                                      showInput:
                                                                                        false,
                                                                                    },
                                                                                    {
                                                                                      code: 'brokerTel',
                                                                                      name: '属性',
                                                                                      type: 'string',
                                                                                      attrId:
                                                                                        '141501',
                                                                                      initialData:
                                                                                        {
                                                                                          type: 'static',
                                                                                          value:
                                                                                            '',
                                                                                        },
                                                                                      parentKey:
                                                                                        '1',
                                                                                      parentType:
                                                                                        'object',
                                                                                      showInput:
                                                                                        false,
                                                                                    },
                                                                                    {
                                                                                      code: 'brokerName',
                                                                                      name: '属性',
                                                                                      type: 'string',
                                                                                      attrId:
                                                                                        '5926803',
                                                                                      initialData:
                                                                                        {
                                                                                          type: 'static',
                                                                                          value:
                                                                                            '',
                                                                                        },
                                                                                      parentKey:
                                                                                        '1',
                                                                                      parentType:
                                                                                        'object',
                                                                                      showInput:
                                                                                        false,
                                                                                    },
                                                                                    {
                                                                                      code: 'valueLevelName',
                                                                                      name: '属性',
                                                                                      type: 'string',
                                                                                      attrId:
                                                                                        '16284',
                                                                                      initialData:
                                                                                        {
                                                                                          type: 'static',
                                                                                          value:
                                                                                            '',
                                                                                        },
                                                                                      parentKey:
                                                                                        '1',
                                                                                      parentType:
                                                                                        'object',
                                                                                      showInput:
                                                                                        false,
                                                                                    },
                                                                                    {
                                                                                      code: 'planValueLevelName',
                                                                                      name: '属性',
                                                                                      type: 'string',
                                                                                      attrId:
                                                                                        '9946835',
                                                                                      initialData:
                                                                                        {
                                                                                          type: 'static',
                                                                                          value:
                                                                                            '',
                                                                                        },
                                                                                      parentKey:
                                                                                        '1',
                                                                                      parentType:
                                                                                        'object',
                                                                                      showInput:
                                                                                        false,
                                                                                    },
                                                                                    {
                                                                                      code: 'enterpriseKindName',
                                                                                      name: '属性',
                                                                                      type: 'string',
                                                                                      attrId:
                                                                                        '479396',
                                                                                      initialData:
                                                                                        {
                                                                                          type: 'static',
                                                                                          value:
                                                                                            '',
                                                                                        },
                                                                                      parentKey:
                                                                                        '1',
                                                                                      parentType:
                                                                                        'object',
                                                                                      showInput:
                                                                                        false,
                                                                                    },
                                                                                    {
                                                                                      code: 'totalUser',
                                                                                      name: '属性',
                                                                                      type: 'string',
                                                                                      attrId:
                                                                                        '106104',
                                                                                      initialData:
                                                                                        {
                                                                                          type: 'static',
                                                                                          value:
                                                                                            '',
                                                                                        },
                                                                                      parentKey:
                                                                                        '1',
                                                                                      parentType:
                                                                                        'object',
                                                                                      showInput:
                                                                                        false,
                                                                                    },
                                                                                    {
                                                                                      code: 'otherReason',
                                                                                      name: '属性',
                                                                                      type: 'string',
                                                                                      attrId:
                                                                                        '0264065',
                                                                                      initialData:
                                                                                        {
                                                                                          type: 'static',
                                                                                          value:
                                                                                            '',
                                                                                        },
                                                                                      parentKey:
                                                                                        '1',
                                                                                      parentType:
                                                                                        'object',
                                                                                      showInput:
                                                                                        false,
                                                                                    },
                                                                                  ],
                                                                                operateType: 1,
                                                                                onlySetPatch:
                                                                                  true,
                                                                                otherObjectArrayOptions:
                                                                                  {},
                                                                                targetDataSourcePaths:
                                                                                  [],
                                                                              },
                                                                            actionObjId:
                                                                              'setDataSource',
                                                                            actionObjName:
                                                                              'page',
                                                                            value:
                                                                              'setDataSource',
                                                                            line_number: 11,
                                                                          },
                                                                        ],
                                                                      value:
                                                                        'callback1',
                                                                      params:
                                                                        [],
                                                                    },
                                                                    {
                                                                      dataName:
                                                                        'callback',
                                                                      dataId: 170115497552053570,
                                                                      children:
                                                                        [],
                                                                      value:
                                                                        'callback2',
                                                                      params:
                                                                        [],
                                                                    },
                                                                  ],
                                                                  todoOptions: [
                                                                    'pathname',
                                                                    'customFuncName',
                                                                    'customFuncParams',
                                                                  ],
                                                                  options: {
                                                                    compId:
                                                                      'callParentCustomFunc',
                                                                    compName:
                                                                      'system',
                                                                    id: '318209',
                                                                    pageJsonId:
                                                                      '537892',
                                                                    pathname:
                                                                      '/auditOrderPrepare',
                                                                    pageId:
                                                                      '884045146848604160',
                                                                    customFuncName:
                                                                      'getFactor',
                                                                    customFuncParams:
                                                                      '$data_864486$',
                                                                    modalPath:
                                                                      '/auditOrderPrepare',
                                                                  },
                                                                  actionObjId:
                                                                    'callParentCustomFunc',
                                                                  actionObjName:
                                                                    'system',
                                                                  value:
                                                                    'callParentCustomFunc',
                                                                  line_number: 10,
                                                                },
                                                                {
                                                                  dataName:
                                                                    'action',
                                                                  dataId: 170122782997719650,
                                                                  children: [],
                                                                  todoOptions: [
                                                                    'valueArray',
                                                                  ],
                                                                  options: {
                                                                    compId:
                                                                      'debug',
                                                                    compName:
                                                                      'system',
                                                                    id: '208786',
                                                                    pageJsonId:
                                                                      '537892',
                                                                    value: [
                                                                      '$data_864486$',
                                                                    ],
                                                                  },
                                                                  actionObjId:
                                                                    'debug',
                                                                  actionObjName:
                                                                    'system',
                                                                  value:
                                                                    'console',
                                                                  line_number: 13,
                                                                },
                                                              ],
                                                              value:
                                                                'callback1',
                                                              params: [],
                                                            },
                                                            {
                                                              dataName:
                                                                'callback',
                                                              dataId: 170115488833323400,
                                                              children: [],
                                                              value:
                                                                'callback2',
                                                              params: [],
                                                            },
                                                          ],
                                                          todoOptions: [
                                                            'actionTitle',
                                                            'editorCode',
                                                          ],
                                                          options: {
                                                            compId:
                                                              'customActionCode',
                                                            compName: 'page',
                                                            id: '864486',
                                                            pageJsonId:
                                                              '537892',
                                                            actionTitle:
                                                              '拼接集团信息',
                                                            code: 'function main(data,state,success,fail){var instList=data_865867;var qry=reply_286935.resultData;qry=qry.map(function(_ref){var groupId=_ref.groupId,homeCityName=_ref.homeCityName,homeCountyName=_ref.homeCountyName,groupName=_ref.groupName,statusName=_ref.statusName,createTime=_ref.createTime,tradeclassTopName=_ref.tradeclassTopName,tradeclassName=_ref.tradeclassName,orgTypeName=_ref.orgTypeName,gridName=_ref.gridName,gridId=_ref.gridId,brokerId=_ref.brokerId,brokerTel=_ref.brokerTel,brokerName=_ref.brokerName,valueLevelName=_ref.valueLevelName,enterpriseKindName=_ref.enterpriseKindName;return{groupId:groupId,homeCityName:homeCityName,homeCountyName:homeCountyName,groupName:groupName,statusName:statusName,createTime:createTime,tradeclassTopName:tradeclassTopName,tradeclassName:tradeclassName,orgTypeName:orgTypeName,gridName:gridName,gridId:gridId,brokerId:brokerId,brokerTel:brokerTel,brokerName:brokerName,valueLevelName:valueLevelName,enterpriseKindName:enterpriseKindName}});qry.forEach(function(qryItem){var matchingInst=instList.find(function(instItem){return instItem.instAttrList.some(function(attr){return attr.attrCode==="groupId"&&attr.attrValue===qryItem.groupId})});if(matchingInst){Object.keys(qryItem).forEach(function(key){if(key!=="groupId"){matchingInst.instAttrList.push({attrCode:key,attrName:"",attrValue:qryItem[key]})}})}});console.log("=====instList=====",instList);data.sceneSubmit.instList=instList;console.log("====\\u8BA2\\u5355\\u63D0\\u4EA4===",data.sceneSubmit);success(data.sceneSubmit)};',
                                                          },
                                                          actionObjId:
                                                            'customActionCode',
                                                          actionObjName: 'page',
                                                          value:
                                                            'customActionCode',
                                                          tips: '注意：如果需要配合退出事件，请在代码块中增加return true',
                                                          line_number: 9,
                                                        },
                                                        {
                                                          dataName: 'action',
                                                          dataId: 170131095368347170,
                                                          children: [
                                                            {
                                                              dataName:
                                                                'callback',
                                                              dataId: 170131095368344900,
                                                              children: [
                                                                {
                                                                  dataName:
                                                                    'action',
                                                                  dataId: 170131095368373250,
                                                                  children: [
                                                                    {
                                                                      dataName:
                                                                        'callback',
                                                                      dataId: 170131095368353380,
                                                                      children:
                                                                        [],
                                                                      value:
                                                                        'callback1',
                                                                      params:
                                                                        [],
                                                                    },
                                                                    {
                                                                      dataName:
                                                                        'callback',
                                                                      dataId: 170131095368353400,
                                                                      children:
                                                                        [],
                                                                      value:
                                                                        'callback2',
                                                                      params:
                                                                        [],
                                                                    },
                                                                  ],
                                                                  todoOptions: [
                                                                    'selectAllDataSource',
                                                                    'dataSourceSetValue',
                                                                    'onlySetPatch',
                                                                  ],
                                                                  options: {
                                                                    compId:
                                                                      'setDataSource',
                                                                    compName:
                                                                      'page',
                                                                    id: '74405',
                                                                    pageJsonId:
                                                                      '537892',
                                                                    dataSourceId: 166519807387797900,
                                                                    dataSourceName:
                                                                      'feeInfo',
                                                                    dataSourceRelType:
                                                                      'custom',
                                                                    dataSourceSetValue:
                                                                      [
                                                                        {
                                                                          attrId:
                                                                            '739205',
                                                                          code: 'busiType',
                                                                          name: '业务类型',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '252243',
                                                                          code: 'standardPrice',
                                                                          name: '标准价格',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '137802',
                                                                          code: 'receiptsPrice',
                                                                          name: '实收价',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '963826',
                                                                          code: 'bandwidth',
                                                                          name: '带宽',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '5031659',
                                                                          code: 'ipv6GiveNum',
                                                                          name: 'IPv6赠送数',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '6377456',
                                                                          code: 'ipv4GiveNum',
                                                                          name: 'IPv4赠送数',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '665968',
                                                                          code: 'ipv6DemandNum',
                                                                          name: 'IPv6需求数',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '754893',
                                                                          code: 'ipv4DemandNum',
                                                                          name: 'IPv4需求数',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '197527',
                                                                          code: 'ipv4BeyondNum',
                                                                          name: 'IPv4超出个数',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '017672',
                                                                          code: 'ipv4BeyondCount',
                                                                          name: 'IPv4元/月/个',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '26139435',
                                                                          code: 'unitPrice',
                                                                          name: '单价（元/G）',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '62643',
                                                                          code: 'lastDiscount',
                                                                          name: '最终折扣',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '9425584',
                                                                          code: 'market',
                                                                          name: '营销案',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '442519',
                                                                          code: 'busiTypeName',
                                                                          name: '业务类型名称',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '3700349',
                                                                          code: 'areaType',
                                                                          name: '区域类型',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '7190864',
                                                                          code: 'joinWay',
                                                                          name: '接入方式',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '026113',
                                                                          code: 'bandwidthUp',
                                                                          name: '上行宽带',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '9865009',
                                                                          code: 'bandwidthDown',
                                                                          name: '下行宽带',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '262314',
                                                                          code: 'bandwidthPort',
                                                                          name: 'SDWAN端口带宽',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '4672304',
                                                                          code: 'singleUseFee',
                                                                          name: '一次性费用',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '567251',
                                                                          code: 'portFee',
                                                                          name: '端口费',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '9620426',
                                                                          code: 'ipv6BeyondNum',
                                                                          name: 'IPv6超出个数',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '1137346',
                                                                          code: 'ipv6BeyondCount',
                                                                          name: 'IPv6元/月/个',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '467282',
                                                                          code: 'standardPriceSdWan',
                                                                          name: 'SDWAN标准价格',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '801439',
                                                                          code: 'receiptsPriceSdWan',
                                                                          name: 'SDWAN实收价格',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '5486426',
                                                                          code: 'bandwidthName',
                                                                          name: '带宽名称',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '758304',
                                                                          code: 'rowId',
                                                                          name: '行id',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '2798624',
                                                                          code: 'ipv4BeyondCost',
                                                                          name: 'IPv4超出费用',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '8081859',
                                                                          code: 'exceedPrice\t',
                                                                          name: 'IPV4超出单价',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '7656485',
                                                                          code: 'row',
                                                                          name: '条数',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '756202',
                                                                          code: 'receiptsPriceSum',
                                                                          name: '总实收价（元）',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                        },
                                                                        {
                                                                          attrId:
                                                                            '7564814',
                                                                          code: 'marketName',
                                                                          name: '营销案名称',
                                                                          type: 'string',
                                                                          initialData:
                                                                            {
                                                                              type: 'static',
                                                                            },
                                                                        },
                                                                      ],
                                                                    newData:
                                                                      '$data_258314$',
                                                                    operateType: 3,
                                                                    onlySetPatch:
                                                                      true,
                                                                    otherObjectArrayOptions:
                                                                      {},
                                                                    targetDataSourcePaths:
                                                                      [],
                                                                  },
                                                                  actionObjId:
                                                                    'setDataSource',
                                                                  actionObjName:
                                                                    'page',
                                                                  value:
                                                                    'setDataSource',
                                                                  line_number: 15,
                                                                },
                                                                {
                                                                  dataName:
                                                                    'action',
                                                                  dataId: 170131095368316740,
                                                                  children: [],
                                                                  todoOptions: [
                                                                    'valueArray',
                                                                  ],
                                                                  options: {
                                                                    compId:
                                                                      'debug',
                                                                    compName:
                                                                      'system',
                                                                    id: '4776873',
                                                                    pageJsonId:
                                                                      '537892',
                                                                    value: [
                                                                      '===feeInfo',
                                                                      '$data_258314$',
                                                                    ],
                                                                  },
                                                                  actionObjId:
                                                                    'debug',
                                                                  actionObjName:
                                                                    'system',
                                                                  value:
                                                                    'console',
                                                                  line_number: 16,
                                                                },
                                                              ],
                                                              value:
                                                                'callback1',
                                                              params: [],
                                                            },
                                                            {
                                                              dataName:
                                                                'callback',
                                                              dataId: 170131095368352100,
                                                              children: [],
                                                              value:
                                                                'callback2',
                                                              params: [],
                                                            },
                                                          ],
                                                          todoOptions: [
                                                            'actionTitle',
                                                            'editorCode',
                                                          ],
                                                          options: {
                                                            compId:
                                                              'customActionCode',
                                                            compName: 'page',
                                                            id: '258314',
                                                            pageJsonId:
                                                              '537892',
                                                            code: 'function main(data,state,success,fail){var infoList=reply_9706607.resultData;var groupInfo=reply_286935.resultData;groupInfo=groupInfo.map(function(_ref){var groupId=_ref.groupId,homeCityName=_ref.homeCityName,homeCountyName=_ref.homeCountyName,groupName=_ref.groupName,statusName=_ref.statusName,createTime=_ref.createTime,tradeclassTopName=_ref.tradeclassTopName,tradeclassName=_ref.tradeclassName,orgTypeName=_ref.orgTypeName,gridName=_ref.gridName,gridId=_ref.gridId,brokerId=_ref.brokerId,brokerTel=_ref.brokerTel,brokerName=_ref.brokerName,valueLevelName=_ref.valueLevelName,enterpriseKindName=_ref.enterpriseKindName;return{groupId:groupId,homeCityName:homeCityName,homeCountyName:homeCountyName,groupName:groupName,statusName:statusName,createTime:createTime,tradeclassTopName:tradeclassTopName,tradeclassName:tradeclassName,orgTypeName:orgTypeName,gridName:gridName,gridId:gridId,brokerId:brokerId,brokerTel:brokerTel,brokerName:brokerName,valueLevelName:valueLevelName,enterpriseKindName:enterpriseKindName}});console.log("====groupInfo==",groupInfo);console.log("====infoList===",infoList);var infoListCopy=Object.assign([],infoList);infoListCopy.forEach(function(item){var info=groupInfo.filter(function(g){return g.groupId==item.groupId})[0];console.log("-=info",info,item);item=Object.assign(item,info)});var feeInfoList=data.feeInfo||[];if(!infoListCopy||infoListCopy.length>0){feeInfoList=feeInfoList.concat(infoListCopy)}success(feeInfoList)};',
                                                            actionTitle:
                                                              '设置data',
                                                          },
                                                          actionObjId:
                                                            'customActionCode',
                                                          actionObjName: 'page',
                                                          value:
                                                            'customActionCode',
                                                          tips: '注意：如果需要配合退出事件，请在代码块中增加return true',
                                                          line_number: 14,
                                                        },
                                                      ],
                                                      value: 'callback1',
                                                      params: [],
                                                    },
                                                    {
                                                      dataName: 'callback',
                                                      dataId: 170107746686096100,
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
                                                    id: '865867',
                                                    pageJsonId: '537892',
                                                    code: 'function main(data,state,success,fail){var infoList=reply_9706607.resultData;console.log("====excel\\u89E3\\u6790\\u8FD4\\u56DE====",infoList);var instList=data.sceneSubmit.instList||[];for(var i=0;i<infoList.length;i++){var list=[];for(var key in infoList[i]){if(key!="rowId"&&key!="marketList"){list.push({"attrCode":key,"attrName":"","attrValue":infoList[i][key]})}}var instObj={"instCode":infoList[i].rowId,"instAttrList":list};instList.push(instObj)}success(instList)};',
                                                    actionTitle: '基本集团信息',
                                                  },
                                                  actionObjId:
                                                    'customActionCode',
                                                  actionObjName: 'page',
                                                  value: 'customActionCode',
                                                  line_number: 8,
                                                },
                                                {
                                                  dataName: 'action',
                                                  dataId: 170107854108800830,
                                                  children: [],
                                                  todoOptions: ['valueArray'],
                                                  options: {
                                                    compId: 'debug',
                                                    compName: 'system',
                                                    id: '480489',
                                                    pageJsonId: '537892',
                                                    value: [
                                                      '===查询集团信息返回====',
                                                      '$reply_286935$',
                                                    ],
                                                  },
                                                  actionObjId: 'debug',
                                                  actionObjName: 'system',
                                                  value: 'console',
                                                  line_number: 17,
                                                },
                                              ],
                                              value: 'callback1',
                                              params: [],
                                            },
                                            {
                                              dataName: 'callback',
                                              dataId: 170107741361987940,
                                              children: [],
                                              value: 'callback2',
                                              params: [],
                                            },
                                          ],
                                          todoOptions: [
                                            'actionTitle',
                                            'sync',
                                            'url',
                                            'params',
                                          ],
                                          options: {
                                            compId: 'apiRequest',
                                            compName: 'system',
                                            id: '286935',
                                            pageJsonId: '537892',
                                            sync: true,
                                            actionTitle: '查询集团信息',
                                            method: 'post',
                                            url: '/app/rhin/gateway/callRhinEngine',
                                            _capabilityCode:
                                              'groupCustomerInfo',
                                            _apiCode: 'groupCustomerInfo',
                                            _source: 'rhin',
                                            _sourceName: '查询集团详情-hdb',
                                            _serviceId: '915442281117552640',
                                            _serviceTitle:
                                              '查询集团详情-hdb: groupCustomerInfo',
                                            valueType: 'object',
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
                                                    dataKey:
                                                      '286935_root.header',
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
                                                    dataKey: '286935_root.path',
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
                                                    dataKey:
                                                      '286935_root.query',
                                                  },
                                                  {
                                                    code: 'body',
                                                    name: '请求体',
                                                    attrType: 'object',
                                                    children: [
                                                      {
                                                        code: 'objType',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        mustFlag: 'F',
                                                        _id: 'root.body.objType',
                                                        compType: 'Input',
                                                        name: 'objType',
                                                        parents: [
                                                          'root',
                                                          'body',
                                                        ],
                                                        parentType: 'object',
                                                        parentKey: '0-3',
                                                        key: '0-3-0',
                                                        id: 'root.body.objType',
                                                        dataKey:
                                                          '286935_root.body.objType',
                                                      },
                                                      {
                                                        code: 'orderNbr',
                                                        name: '新增节点',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        mustFlag: 'F',
                                                        defaultValue: '',
                                                        _id: 'root.body.orderNbr',
                                                        compType: 'Input',
                                                        parents: [
                                                          'root',
                                                          'body',
                                                        ],
                                                        parentType: 'object',
                                                        parentKey: '0-3',
                                                        key: '0-3-1',
                                                        id: 'root.body.orderNbr',
                                                        dataKey:
                                                          '286935_root.body.orderNbr',
                                                      },
                                                      {
                                                        code: 'objId',
                                                        attrType: 'field',
                                                        type: 'string',
                                                        mustFlag: 'F',
                                                        _id: 'root.body.objId',
                                                        compType: 'Input',
                                                        name: 'objId',
                                                        parents: [
                                                          'root',
                                                          'body',
                                                        ],
                                                        parentType: 'object',
                                                        parentKey: '0-3',
                                                        key: '0-3-2',
                                                        id: 'root.body.objId',
                                                        dataKey:
                                                          '286935_root.body.objId',
                                                      },
                                                      {
                                                        code: 'instanceList',
                                                        name: '新增节点',
                                                        attrType: 'objectArray',
                                                        _id: 'root.body.instanceList',
                                                        compType: 'Input',
                                                        parents: [
                                                          'root',
                                                          'body',
                                                        ],
                                                        parentType: 'object',
                                                        parentKey: '0-3',
                                                        key: '0-3-3',
                                                        id: 'root.body.instanceList',
                                                        dataKey:
                                                          '286935_root.body.instanceList',
                                                        value: {
                                                          type: [
                                                            'context',
                                                            '$data_4711988$',
                                                          ],
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
                                                    dataKey: '286935_root.body',
                                                  },
                                                ],
                                                _id: 'root',
                                                compType: 'Input',
                                                isRoot: true,
                                                parents: [],
                                                key: '0',
                                                id: 'root',
                                                dataKey: '286935_root',
                                              },
                                            ],
                                            params: 'object',
                                          },
                                          actionObjId: 'apiRequest',
                                          actionObjName: 'system',
                                          value: 'apiRequest',
                                          line_number: 7,
                                        },
                                      ],
                                      value: 'callback1',
                                      params: [],
                                    },
                                    {
                                      dataName: 'callback',
                                      dataId: 170107736659156350,
                                      children: [],
                                      value: 'callback2',
                                      params: [],
                                    },
                                  ],
                                  todoOptions: ['actionTitle', 'editorCode'],
                                  options: {
                                    compId: 'customActionCode',
                                    compName: 'page',
                                    id: '4711988',
                                    pageJsonId: '537892',
                                    actionTitle: '查询集团信息',
                                    code: 'function main(data,state,success,fail){var resp=reply_9706607.resultData;var groupList=resp.map(function(item){return{"groupId":item.groupId}});console.log("===groupList===",groupList);success(groupList)};',
                                  },
                                  actionObjId: 'customActionCode',
                                  actionObjName: 'page',
                                  value: 'customActionCode',
                                  tips: '注意：如果需要配合退出事件，请在代码块中增加return true',
                                  line_number: 5,
                                },
                              ],
                              condition: [],
                              callback: [
                                {
                                  type: 'customActionCode',
                                  dataId: 170107736659150300,
                                  options: {
                                    compId: 'customActionCode',
                                    compName: 'page',
                                    id: '4711988',
                                    pageJsonId: '537892',
                                    actionTitle: '查询集团信息',
                                    code: 'function main(data,state,success,fail){var resp=reply_9706607.resultData;var groupList=resp.map(function(item){return{"groupId":item.groupId}});console.log("===groupList===",groupList);success(groupList)};',
                                  },
                                  line_number: 5,
                                  callback1: [
                                    {
                                      type: 'setLoading',
                                      dataId: 170323077040293300,
                                      options: {
                                        compId: 'View_537892_1',
                                        compLib: 'custom',
                                        pageJsonId: '537892',
                                        compName: 'View',
                                        id: '368185',
                                        loading: true,
                                      },
                                      line_number: 6,
                                    },
                                    {
                                      type: 'apiRequest',
                                      dataId: 170107741361909120,
                                      options: {
                                        compId: 'apiRequest',
                                        compName: 'system',
                                        id: '286935',
                                        pageJsonId: '537892',
                                        sync: true,
                                        actionTitle: '查询集团信息',
                                        method: 'post',
                                        url: '/app/rhin/gateway/callRhinEngine',
                                        _capabilityCode: 'groupCustomerInfo',
                                        _apiCode: 'groupCustomerInfo',
                                        _source: 'rhin',
                                        _sourceName: '查询集团详情-hdb',
                                        _serviceId: '915442281117552640',
                                        _serviceTitle:
                                          '查询集团详情-hdb: groupCustomerInfo',
                                        valueType: 'object',
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
                                                dataKey: '286935_root.header',
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
                                                dataKey: '286935_root.path',
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
                                                dataKey: '286935_root.query',
                                              },
                                              {
                                                code: 'body',
                                                name: '请求体',
                                                attrType: 'object',
                                                children: [
                                                  {
                                                    code: 'objType',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.objType',
                                                    compType: 'Input',
                                                    name: 'objType',
                                                    parents: ['root', 'body'],
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-0',
                                                    id: 'root.body.objType',
                                                    dataKey:
                                                      '286935_root.body.objType',
                                                  },
                                                  {
                                                    code: 'orderNbr',
                                                    name: '新增节点',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    defaultValue: '',
                                                    _id: 'root.body.orderNbr',
                                                    compType: 'Input',
                                                    parents: ['root', 'body'],
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-1',
                                                    id: 'root.body.orderNbr',
                                                    dataKey:
                                                      '286935_root.body.orderNbr',
                                                  },
                                                  {
                                                    code: 'objId',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.objId',
                                                    compType: 'Input',
                                                    name: 'objId',
                                                    parents: ['root', 'body'],
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-2',
                                                    id: 'root.body.objId',
                                                    dataKey:
                                                      '286935_root.body.objId',
                                                  },
                                                  {
                                                    code: 'instanceList',
                                                    name: '新增节点',
                                                    attrType: 'objectArray',
                                                    _id: 'root.body.instanceList',
                                                    compType: 'Input',
                                                    parents: ['root', 'body'],
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-3',
                                                    id: 'root.body.instanceList',
                                                    dataKey:
                                                      '286935_root.body.instanceList',
                                                    value: {
                                                      type: [
                                                        'context',
                                                        '$data_4711988$',
                                                      ],
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
                                                dataKey: '286935_root.body',
                                              },
                                            ],
                                            _id: 'root',
                                            compType: 'Input',
                                            isRoot: true,
                                            parents: [],
                                            key: '0',
                                            id: 'root',
                                            dataKey: '286935_root',
                                          },
                                        ],
                                        params: 'object',
                                      },
                                      line_number: 7,
                                      callback1: [
                                        {
                                          type: 'customActionCode',
                                          dataId: 170107746686018180,
                                          options: {
                                            compId: 'customActionCode',
                                            compName: 'page',
                                            id: '865867',
                                            pageJsonId: '537892',
                                            code: 'function main(data,state,success,fail){var infoList=reply_9706607.resultData;console.log("====excel\\u89E3\\u6790\\u8FD4\\u56DE====",infoList);var instList=data.sceneSubmit.instList||[];for(var i=0;i<infoList.length;i++){var list=[];for(var key in infoList[i]){if(key!="rowId"&&key!="marketList"){list.push({"attrCode":key,"attrName":"","attrValue":infoList[i][key]})}}var instObj={"instCode":infoList[i].rowId,"instAttrList":list};instList.push(instObj)}success(instList)};',
                                            actionTitle: '基本集团信息',
                                          },
                                          line_number: 8,
                                          callback1: [
                                            {
                                              type: 'customActionCode',
                                              dataId: 170115488833318080,
                                              options: {
                                                compId: 'customActionCode',
                                                compName: 'page',
                                                id: '864486',
                                                pageJsonId: '537892',
                                                actionTitle: '拼接集团信息',
                                                code: 'function main(data,state,success,fail){var instList=data_865867;var qry=reply_286935.resultData;qry=qry.map(function(_ref){var groupId=_ref.groupId,homeCityName=_ref.homeCityName,homeCountyName=_ref.homeCountyName,groupName=_ref.groupName,statusName=_ref.statusName,createTime=_ref.createTime,tradeclassTopName=_ref.tradeclassTopName,tradeclassName=_ref.tradeclassName,orgTypeName=_ref.orgTypeName,gridName=_ref.gridName,gridId=_ref.gridId,brokerId=_ref.brokerId,brokerTel=_ref.brokerTel,brokerName=_ref.brokerName,valueLevelName=_ref.valueLevelName,enterpriseKindName=_ref.enterpriseKindName;return{groupId:groupId,homeCityName:homeCityName,homeCountyName:homeCountyName,groupName:groupName,statusName:statusName,createTime:createTime,tradeclassTopName:tradeclassTopName,tradeclassName:tradeclassName,orgTypeName:orgTypeName,gridName:gridName,gridId:gridId,brokerId:brokerId,brokerTel:brokerTel,brokerName:brokerName,valueLevelName:valueLevelName,enterpriseKindName:enterpriseKindName}});qry.forEach(function(qryItem){var matchingInst=instList.find(function(instItem){return instItem.instAttrList.some(function(attr){return attr.attrCode==="groupId"&&attr.attrValue===qryItem.groupId})});if(matchingInst){Object.keys(qryItem).forEach(function(key){if(key!=="groupId"){matchingInst.instAttrList.push({attrCode:key,attrName:"",attrValue:qryItem[key]})}})}});console.log("=====instList=====",instList);data.sceneSubmit.instList=instList;console.log("====\\u8BA2\\u5355\\u63D0\\u4EA4===",data.sceneSubmit);success(data.sceneSubmit)};',
                                              },
                                              line_number: 9,
                                              callback1: [
                                                {
                                                  type: 'callParentCustomFunc',
                                                  dataId: 170115497552070430,
                                                  options: {
                                                    compId:
                                                      'callParentCustomFunc',
                                                    compName: 'system',
                                                    id: '318209',
                                                    pageJsonId: '537892',
                                                    pathname:
                                                      '/auditOrderPrepare',
                                                    pageId:
                                                      '884045146848604160',
                                                    customFuncName: 'getFactor',
                                                    customFuncParams:
                                                      '$data_864486$',
                                                    modalPath:
                                                      '/auditOrderPrepare',
                                                  },
                                                  line_number: 10,
                                                  callback1: [
                                                    {
                                                      type: 'setDataSource',
                                                      dataId: 170115992758240900,
                                                      options: {
                                                        compId: 'setDataSource',
                                                        compName: 'page',
                                                        id: '9052977',
                                                        pageJsonId: '537892',
                                                        dataSourceId: 166519807387797900,
                                                        dataSourceName:
                                                          'feeInfo',
                                                        dataSourceRelType:
                                                          'custom',
                                                        dataSourceSetValue: [
                                                          {
                                                            code: 'groupId',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '013228',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '',
                                                            },
                                                            parentKey: '1',
                                                            parentType:
                                                              'object',
                                                            showInput: false,
                                                          },
                                                          {
                                                            code: 'homeCityName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '345561',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '',
                                                            },
                                                            parentKey: '1',
                                                            parentType:
                                                              'object',
                                                            showInput: false,
                                                          },
                                                          {
                                                            code: 'homeCountyName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '5195405',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '',
                                                            },
                                                            parentKey: '1',
                                                            parentType:
                                                              'object',
                                                            showInput: false,
                                                          },
                                                          {
                                                            code: 'groupName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '941438',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '',
                                                            },
                                                            parentKey: '1',
                                                            parentType:
                                                              'object',
                                                            showInput: false,
                                                          },
                                                          {
                                                            code: 'statusName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '266881',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '',
                                                            },
                                                            parentKey: '1',
                                                            parentType:
                                                              'object',
                                                            showInput: false,
                                                          },
                                                          {
                                                            code: 'createTime',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '938579',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '',
                                                            },
                                                            parentKey: '1',
                                                            parentType:
                                                              'object',
                                                            showInput: false,
                                                          },
                                                          {
                                                            code: 'tradeclassTopName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '50189',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '',
                                                            },
                                                            parentKey: '1',
                                                            parentType:
                                                              'object',
                                                            showInput: false,
                                                          },
                                                          {
                                                            code: 'tradeclassName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '8836505',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '',
                                                            },
                                                            parentKey: '1',
                                                            parentType:
                                                              'object',
                                                            showInput: false,
                                                          },
                                                          {
                                                            code: 'orgTypeName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '543035',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '',
                                                            },
                                                            parentKey: '1',
                                                            parentType:
                                                              'object',
                                                            showInput: false,
                                                          },
                                                          {
                                                            code: 'gridName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '5313266',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '',
                                                            },
                                                            parentKey: '1',
                                                            parentType:
                                                              'object',
                                                            showInput: false,
                                                          },
                                                          {
                                                            code: 'gridId',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '643713',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '',
                                                            },
                                                            parentKey: '1',
                                                            parentType:
                                                              'object',
                                                            showInput: false,
                                                          },
                                                          {
                                                            code: 'brokerId',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '704364',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '',
                                                            },
                                                            parentKey: '1',
                                                            parentType:
                                                              'object',
                                                            showInput: false,
                                                          },
                                                          {
                                                            code: 'brokerTel',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '141501',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '',
                                                            },
                                                            parentKey: '1',
                                                            parentType:
                                                              'object',
                                                            showInput: false,
                                                          },
                                                          {
                                                            code: 'brokerName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '5926803',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '',
                                                            },
                                                            parentKey: '1',
                                                            parentType:
                                                              'object',
                                                            showInput: false,
                                                          },
                                                          {
                                                            code: 'valueLevelName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '16284',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '',
                                                            },
                                                            parentKey: '1',
                                                            parentType:
                                                              'object',
                                                            showInput: false,
                                                          },
                                                          {
                                                            code: 'planValueLevelName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '9946835',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '',
                                                            },
                                                            parentKey: '1',
                                                            parentType:
                                                              'object',
                                                            showInput: false,
                                                          },
                                                          {
                                                            code: 'enterpriseKindName',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '479396',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '',
                                                            },
                                                            parentKey: '1',
                                                            parentType:
                                                              'object',
                                                            showInput: false,
                                                          },
                                                          {
                                                            code: 'totalUser',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '106104',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '',
                                                            },
                                                            parentKey: '1',
                                                            parentType:
                                                              'object',
                                                            showInput: false,
                                                          },
                                                          {
                                                            code: 'otherReason',
                                                            name: '属性',
                                                            type: 'string',
                                                            attrId: '0264065',
                                                            initialData: {
                                                              type: 'static',
                                                              value: '',
                                                            },
                                                            parentKey: '1',
                                                            parentType:
                                                              'object',
                                                            showInput: false,
                                                          },
                                                        ],
                                                        operateType: 1,
                                                        onlySetPatch: true,
                                                        otherObjectArrayOptions:
                                                          {},
                                                        targetDataSourcePaths:
                                                          [],
                                                      },
                                                      line_number: 11,
                                                      callback1: [
                                                        {
                                                          type: 'setLoading',
                                                          dataId: 170323078657953400,
                                                          options: {
                                                            compId:
                                                              'View_537892_1',
                                                            compLib: 'custom',
                                                            pageJsonId:
                                                              '537892',
                                                            compName: 'View',
                                                            id: '82161426',
                                                            loading: false,
                                                          },
                                                          line_number: 12,
                                                        },
                                                      ],
                                                      callback2: [],
                                                    },
                                                  ],
                                                  callback2: [],
                                                },
                                                {
                                                  type: 'console',
                                                  dataId: 170122782997719650,
                                                  options: {
                                                    compId: 'debug',
                                                    compName: 'system',
                                                    id: '208786',
                                                    pageJsonId: '537892',
                                                    value: ['$data_864486$'],
                                                  },
                                                  line_number: 13,
                                                },
                                              ],
                                              callback2: [],
                                            },
                                            {
                                              type: 'customActionCode',
                                              dataId: 170131095368347170,
                                              options: {
                                                compId: 'customActionCode',
                                                compName: 'page',
                                                id: '258314',
                                                pageJsonId: '537892',
                                                code: 'function main(data,state,success,fail){var infoList=reply_9706607.resultData;var groupInfo=reply_286935.resultData;groupInfo=groupInfo.map(function(_ref){var groupId=_ref.groupId,homeCityName=_ref.homeCityName,homeCountyName=_ref.homeCountyName,groupName=_ref.groupName,statusName=_ref.statusName,createTime=_ref.createTime,tradeclassTopName=_ref.tradeclassTopName,tradeclassName=_ref.tradeclassName,orgTypeName=_ref.orgTypeName,gridName=_ref.gridName,gridId=_ref.gridId,brokerId=_ref.brokerId,brokerTel=_ref.brokerTel,brokerName=_ref.brokerName,valueLevelName=_ref.valueLevelName,enterpriseKindName=_ref.enterpriseKindName;return{groupId:groupId,homeCityName:homeCityName,homeCountyName:homeCountyName,groupName:groupName,statusName:statusName,createTime:createTime,tradeclassTopName:tradeclassTopName,tradeclassName:tradeclassName,orgTypeName:orgTypeName,gridName:gridName,gridId:gridId,brokerId:brokerId,brokerTel:brokerTel,brokerName:brokerName,valueLevelName:valueLevelName,enterpriseKindName:enterpriseKindName}});console.log("====groupInfo==",groupInfo);console.log("====infoList===",infoList);var infoListCopy=Object.assign([],infoList);infoListCopy.forEach(function(item){var info=groupInfo.filter(function(g){return g.groupId==item.groupId})[0];console.log("-=info",info,item);item=Object.assign(item,info)});var feeInfoList=data.feeInfo||[];if(!infoListCopy||infoListCopy.length>0){feeInfoList=feeInfoList.concat(infoListCopy)}success(feeInfoList)};',
                                                actionTitle: '设置data',
                                              },
                                              line_number: 14,
                                              callback1: [
                                                {
                                                  type: 'setDataSource',
                                                  dataId: 170131095368373250,
                                                  options: {
                                                    compId: 'setDataSource',
                                                    compName: 'page',
                                                    id: '74405',
                                                    pageJsonId: '537892',
                                                    dataSourceId: 166519807387797900,
                                                    dataSourceName: 'feeInfo',
                                                    dataSourceRelType: 'custom',
                                                    dataSourceSetValue: [
                                                      {
                                                        attrId: '739205',
                                                        code: 'busiType',
                                                        name: '业务类型',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '252243',
                                                        code: 'standardPrice',
                                                        name: '标准价格',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '137802',
                                                        code: 'receiptsPrice',
                                                        name: '实收价',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '963826',
                                                        code: 'bandwidth',
                                                        name: '带宽',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '5031659',
                                                        code: 'ipv6GiveNum',
                                                        name: 'IPv6赠送数',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '6377456',
                                                        code: 'ipv4GiveNum',
                                                        name: 'IPv4赠送数',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '665968',
                                                        code: 'ipv6DemandNum',
                                                        name: 'IPv6需求数',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '754893',
                                                        code: 'ipv4DemandNum',
                                                        name: 'IPv4需求数',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '197527',
                                                        code: 'ipv4BeyondNum',
                                                        name: 'IPv4超出个数',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '017672',
                                                        code: 'ipv4BeyondCount',
                                                        name: 'IPv4元/月/个',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '26139435',
                                                        code: 'unitPrice',
                                                        name: '单价（元/G）',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '62643',
                                                        code: 'lastDiscount',
                                                        name: '最终折扣',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '9425584',
                                                        code: 'market',
                                                        name: '营销案',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '442519',
                                                        code: 'busiTypeName',
                                                        name: '业务类型名称',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '3700349',
                                                        code: 'areaType',
                                                        name: '区域类型',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '7190864',
                                                        code: 'joinWay',
                                                        name: '接入方式',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '026113',
                                                        code: 'bandwidthUp',
                                                        name: '上行宽带',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '9865009',
                                                        code: 'bandwidthDown',
                                                        name: '下行宽带',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '262314',
                                                        code: 'bandwidthPort',
                                                        name: 'SDWAN端口带宽',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '4672304',
                                                        code: 'singleUseFee',
                                                        name: '一次性费用',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '567251',
                                                        code: 'portFee',
                                                        name: '端口费',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '9620426',
                                                        code: 'ipv6BeyondNum',
                                                        name: 'IPv6超出个数',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '1137346',
                                                        code: 'ipv6BeyondCount',
                                                        name: 'IPv6元/月/个',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '467282',
                                                        code: 'standardPriceSdWan',
                                                        name: 'SDWAN标准价格',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '801439',
                                                        code: 'receiptsPriceSdWan',
                                                        name: 'SDWAN实收价格',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '5486426',
                                                        code: 'bandwidthName',
                                                        name: '带宽名称',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '758304',
                                                        code: 'rowId',
                                                        name: '行id',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '2798624',
                                                        code: 'ipv4BeyondCost',
                                                        name: 'IPv4超出费用',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '8081859',
                                                        code: 'exceedPrice\t',
                                                        name: 'IPV4超出单价',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '7656485',
                                                        code: 'row',
                                                        name: '条数',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '756202',
                                                        code: 'receiptsPriceSum',
                                                        name: '总实收价（元）',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                      {
                                                        attrId: '7564814',
                                                        code: 'marketName',
                                                        name: '营销案名称',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                      },
                                                    ],
                                                    newData: '$data_258314$',
                                                    operateType: 3,
                                                    onlySetPatch: true,
                                                    otherObjectArrayOptions: {},
                                                    targetDataSourcePaths: [],
                                                  },
                                                  line_number: 15,
                                                  callback1: [],
                                                  callback2: [],
                                                },
                                                {
                                                  type: 'console',
                                                  dataId: 170131095368316740,
                                                  options: {
                                                    compId: 'debug',
                                                    compName: 'system',
                                                    id: '4776873',
                                                    pageJsonId: '537892',
                                                    value: [
                                                      '===feeInfo',
                                                      '$data_258314$',
                                                    ],
                                                  },
                                                  line_number: 16,
                                                },
                                              ],
                                              callback2: [],
                                            },
                                          ],
                                          callback2: [],
                                        },
                                        {
                                          type: 'console',
                                          dataId: 170107854108800830,
                                          options: {
                                            compId: 'debug',
                                            compName: 'system',
                                            id: '480489',
                                            pageJsonId: '537892',
                                            value: [
                                              '===查询集团信息返回====',
                                              '$reply_286935$',
                                            ],
                                          },
                                          line_number: 17,
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
                          line_number: 3,
                          callback1: [
                            {
                              type: 'showMessage',
                              dataId: 167642918542688420,
                              options: {
                                compId: 'showMessage',
                                compName: 'system',
                                id: '0860013',
                                pageJsonId: '537892',
                                type: 'error',
                                value: '$reply_9706607.resultMsg$',
                              },
                              line_number: 4,
                            },
                          ],
                        },
                        {
                          type: 'setLoading',
                          dataId: 167698775997439000,
                          options: {
                            compId: 'Table_8700198',
                            compLib: 'comm',
                            pageJsonId: '537892',
                            compName: 'Table',
                            id: '6548745',
                            loading: false,
                          },
                          line_number: 18,
                        },
                        {
                          type: 'console',
                          dataId: 170107765492497920,
                          options: {
                            compId: 'debug',
                            compName: 'system',
                            id: '719864',
                            pageJsonId: '537892',
                            value: ['=====解析返回===', '$reply_9706607$'],
                          },
                          line_number: 19,
                        },
                      ],
                      callback2: [
                        {
                          type: 'setLoading',
                          dataId: 167818261602777800,
                          options: {
                            compId: 'Table_8700198',
                            compLib: 'comm',
                            pageJsonId: '537892',
                            compName: 'Table',
                            id: '853396',
                            loading: false,
                          },
                          line_number: 20,
                        },
                      ],
                    },
                  ];
                  eventDataapiRequest722.params =
                    [
                      {
                        title: '文件对象',
                        name: 'file',
                        value: '$file$',
                        attrType: 'object',
                      },
                      {
                        title: '上传信息列表',
                        name: 'fileList',
                        value: '$fileList$',
                      },
                      {
                        title: '文件列表',
                        name: 'fileResponseList',
                        value: '$fileResponseList$',
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
                        attrType: 'object',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDataapiRequest722,
                    {
                      file,
                      fileList,
                      fileResponseList,
                      fileId,
                      fileSize,
                      fileName,
                      fileResponse,
                    },
                    'apiRequest',
                    {
                      id: 'apiRequest',
                      name: 'apiRequest',
                      type: 'apiRequest',
                      platform: 'pc',
                    },
                  );
                }}
                onListenUploading={(
                  file: any,
                  fileList: any,
                  fileResponseList: any,
                  fileId: any,
                  fileSize: any,
                  fileName: any,
                  fileResponse: any,
                ) => {
                  const eventDatacustomActionCode508: any = [
                    {
                      type: 'customActionCode',
                      dataId: 167636892586284600,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '450905',
                        pageJsonId: '537892',
                        code: 'function main(data,state,success,fail){document.querySelectorAll(".pcfactory-upload-list-text").forEach(function(v){v.style.display="none"})};',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacustomActionCode508.params =
                    [
                      {
                        title: '文件对象',
                        name: 'file',
                        value: '$file$',
                        attrType: 'object',
                      },
                      {
                        title: '上传信息列表',
                        name: 'fileList',
                        value: '$fileList$',
                      },
                      {
                        title: '文件列表',
                        name: 'fileResponseList',
                        value: '$fileResponseList$',
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
                        attrType: 'object',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatacustomActionCode508,
                    {
                      file,
                      fileList,
                      fileResponseList,
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
                ref={(r: any) => (refs['StdUpload_304342_6986628_433547'] = r)}
                {...injectData}
              />
              <Button
                name={'模板下载'}
                shape={null}
                classification={'default'}
                autoProcessFlow={false}
                flowProcessResult={'common'}
                iconPosition={'left'}
                ghost={false}
                block={false}
                size={'default'}
                type={'default'}
                icon={{
                  type: 'download',
                  theme: 'outlined',
                  fontAddress: '',
                  isIconFont: false,
                  iconFileInfo: {},
                }}
                iconType={'download'}
                hasIcon={true}
                $$componentItem={{
                  id: 'Button_061196_858258',
                  uid: 'Button_061196_858258',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ width: 'fit-content', margin: '0px 0px 0px 8px' }}
                onClick={(e: any) => {
                  const eventDataapiRequest723: any = [
                    {
                      type: 'apiRequest',
                      dataId: 167642548880241340,
                      options: {
                        compId: 'apiRequest',
                        compName: 'system',
                        id: '5659575',
                        pageJsonId: '537892',
                        sync: false,
                        method: 'post',
                        url: '/app/rhin/gateway/callRhinEngine',
                        _capabilityCode: 'getDcFileTemplateByReq',
                        _apiCode: 'getDcFileTemplateByReq',
                        _source: 'rhin',
                        _serviceId: '930753687104397312',
                        _serviceTitle:
                          '根据请求对象查询文件对象模板-tsm: getDcFileTemplateByReq',
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
                                dataKey: '5659575_root.header',
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
                                dataKey: '5659575_root.path',
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
                                dataKey: '5659575_root.query',
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
                                    code: 'sceneCode',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'root.body.sceneCode',
                                    compType: 'Input',
                                    name: 'sceneCode',
                                    parents: ['root', 'body'],
                                    id: 'root.body.sceneCode',
                                    dataKey: '5659575_root.body.sceneCode',
                                    value: {
                                      type: ['customize'],
                                      code: 'CLS_JC_0007_0006',
                                    },
                                    parentType: 'object',
                                    parentKey: '0-3',
                                    key: '0-3-0',
                                  },
                                  {
                                    code: 'fileTemplateName',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'root.body.fileTemplateName',
                                    compType: 'Input',
                                    name: 'fileTemplateName',
                                    parents: ['root', 'body'],
                                    id: 'root.body.fileTemplateName',
                                    dataKey:
                                      '5659575_root.body.fileTemplateName',
                                    value: {
                                      type: ['customize'],
                                      code: '集团价值等级审批导入模板.xlsx',
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
                                dataKey: '5659575_root.body',
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
                            dataKey: '5659575_root',
                          },
                        ],
                        _sourceName: '根据请求对象查询文件对象模板-tsm',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'downloadByFileId',
                          dataId: 167642548880221660,
                          options: {
                            compId: 'downloadByFileId',
                            compName: 'system',
                            id: '374216',
                            pageJsonId: '537892',
                            data: '$reply_5659575.resultData.fileId$',
                          },
                          line_number: 2,
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDataapiRequest723.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDataapiRequest723, { e }, 'apiRequest', {
                    id: 'apiRequest',
                    name: 'apiRequest',
                    type: 'apiRequest',
                    platform: 'pc',
                  });
                }}
                ref={(r: any) => (refs['Button_061196_858258'] = r)}
                {...injectData}
              />
              <Button
                name={'导出'}
                shape={null}
                classification={'default'}
                autoProcessFlow={false}
                flowProcessResult={'common'}
                iconPosition={'left'}
                ghost={false}
                block={false}
                size={'default'}
                type={'default'}
                icon={{
                  type: 'file-excel',
                  theme: 'outlined',
                  fontAddress: '',
                  isIconFont: false,
                  iconFileInfo: {},
                }}
                iconType={'file-excel'}
                hasIcon={true}
                $$componentItem={{
                  id: 'Button_050256_034475_700844_765858',
                  uid: 'Button_050256_034475_700844_765858',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ width: 'fit-content', margin: '0px 0px 0px 8px' }}
                onClick={(e: any) => {
                  const eventDatagetTableSelected49: any = [
                    {
                      type: 'getTableSelected',
                      dataId: 167699477614686880,
                      shielding: true,
                      options: {
                        compId: 'Table_8700198',
                        compLib: 'comm',
                        pageJsonId: '537892',
                        compName: 'Table',
                        id: '333637',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'ifelse',
                          shielding: true,
                          condition: [
                            {
                              condId: '71573',
                              options: {
                                context: '$selectedRows_333637$',
                                operate: 'notEmpty',
                              },
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          dataId: 167699483936210600,
                          elseIfs: [
                            {
                              dataName: 'elseIf',
                              dataId: 167699485103474080,
                              children: [
                                {
                                  dataName: 'action',
                                  dataId: 167699485241551800,
                                  children: [],
                                  todoOptions: ['msgType', 'value'],
                                  options: {
                                    compId: 'showMessage',
                                    compName: 'system',
                                    id: '0405291',
                                    pageJsonId: '537892',
                                    type: 'info',
                                    value: '请先选择需要导出的数据！',
                                  },
                                  actionObjId: 'showMessage',
                                  actionObjName: 'system',
                                  value: 'showMessage',
                                  shielding: true,
                                  line_number: 7,
                                },
                              ],
                              condition: [],
                              shielding: true,
                              callback: [
                                {
                                  type: 'showMessage',
                                  dataId: 167699485241551800,
                                  shielding: true,
                                  options: {
                                    compId: 'showMessage',
                                    compName: 'system',
                                    id: '0405291',
                                    pageJsonId: '537892',
                                    type: 'info',
                                    value: '请先选择需要导出的数据！',
                                  },
                                  line_number: 7,
                                },
                              ],
                            },
                          ],
                          line_number: 2,
                          callback1: [
                            {
                              type: 'customActionCode',
                              dataId: 167699485651052400,
                              shielding: true,
                              options: {
                                compId: 'customActionCode',
                                compName: 'page',
                                id: '533777',
                                pageJsonId: '537892',
                                code: 'function main(data,state,success,fail){var arr1=[];var arr2=[];var feeInfo=selectedRows_333637;for(var i=0;i<feeInfo.length;i++){var info=feeInfo[i];{arr2.push({"name":"\\u4E1A\\u52A1\\u7C7B\\u578B","value":info.busiTypeName});arr2.push({"name":"\\u533A\\u57DF\\u7C7B\\u578B","value":info.areaTypeName});arr2.push({"name":"\\u63A5\\u5165\\u65B9\\u5F0F","value":info.joinWayName});arr2.push({"name":"\\u5E26\\u5BBD","value":info.bandwidthName});arr2.push({"name":"\\u6807\\u51C6\\u4EF7\\u683C","value":info.standardPrice});arr2.push({"name":"\\u5355\\u6761\\u5B9E\\u6536\\u4EF7","value":info.receiptsPrice});arr2.push({"name":"\\u6761\\u6570","value":info.row});arr2.push({"name":"\\u603B\\u5B9E\\u6536\\u4EF7\\uFF08\\u5143\\uFF09","value":info.receiptsPriceSum});arr2.push({"name":"\\u8425\\u9500\\u6848","value":info.market});arr2.push({"name":"\\u6700\\u7EC8\\u6298\\u6263(\\u6298)","value":info.lastDiscount})}arr1.push(arr2);arr2=[]}success(JSON.stringify(arr1))};',
                              },
                              line_number: 3,
                              callback1: [
                                {
                                  type: 'apiRequest',
                                  dataId: 167699485651066400,
                                  shielding: true,
                                  options: {
                                    compId: 'apiRequest',
                                    compName: 'system',
                                    id: '919373',
                                    pageJsonId: '537892',
                                    sync: false,
                                    method: 'post',
                                    url: '/app/rhin/gateway/callRhinEngine',
                                    _capabilityCode: 'fileExport',
                                    _apiCode: 'fileExport',
                                    _source: 'rhin',
                                    _serviceId: '942689536114409472',
                                    _serviceTitle: '文件导出-hyj: fileExport',
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
                                        dataKey: '0029392_header',
                                      },
                                      {
                                        code: 'path',
                                        name: '请求路径参数',
                                        attrType: 'object',
                                        _id: 'path',
                                        compType: 'Input',
                                        parents: [],
                                        id: 'path',
                                        dataKey: '0029392_path',
                                      },
                                      {
                                        code: 'query',
                                        name: 'URL 参数',
                                        attrType: 'object',
                                        _id: 'query',
                                        compType: 'Input',
                                        parents: [],
                                        id: 'query',
                                        dataKey: '0029392_query',
                                      },
                                      {
                                        code: 'body',
                                        name: '请求体',
                                        attrType: 'object',
                                        children: [
                                          {
                                            code: 'data',
                                            name: '数据',
                                            attrType: 'field',
                                            type: 'string',
                                            mustFlag: 'F',
                                            defaultValue: '',
                                            _id: 'body.data',
                                            compType: 'Input',
                                            parents: ['body'],
                                            id: 'body.data',
                                            dataKey: '0029392_body.data',
                                            value: {
                                              type: [
                                                'context',
                                                '$data_533777$',
                                              ],
                                              code: '',
                                            },
                                          },
                                        ],
                                        _id: 'body',
                                        compType: 'Input',
                                        parents: [],
                                        id: 'body',
                                        dataKey: '0029392_body',
                                      },
                                    ],
                                  },
                                  line_number: 4,
                                  callback1: [
                                    {
                                      type: 'downloadByFileId',
                                      dataId: 167699485651062800,
                                      shielding: true,
                                      options: {
                                        compId: 'downloadByFileId',
                                        compName: 'system',
                                        id: '7630564',
                                        pageJsonId: '537892',
                                        data: '$reply_919373.resultData.fileId$',
                                      },
                                      line_number: 5,
                                    },
                                    {
                                      type: 'console',
                                      dataId: 167699485651059040,
                                      shielding: true,
                                      options: {
                                        compId: 'debug',
                                        compName: 'system',
                                        id: '956005',
                                        pageJsonId: '537892',
                                        value: [
                                          '文件导出成功回调值：',
                                          '$reply_919373$',
                                        ],
                                      },
                                      line_number: 6,
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
                  eventDatagetTableSelected49.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatagetTableSelected49,
                    { e },
                    'getTableSelected',
                    {
                      id: 'getTableSelected',
                      name: 'getTableSelected',
                      type: 'getTableSelected',
                      platform: 'pc',
                    },
                  );
                  const eventDatacustomActionCode509: any = [
                    {
                      type: 'customActionCode',
                      dataId: 167706806820034340,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '7076346',
                        pageJsonId: '537892',
                        code: 'function main(data,state,success,fail){var arr1=[];var arr2=[];var feeInfo=data.feeInfo;for(var i=0;i<feeInfo.length;i++){var info=feeInfo[i];{arr2.push({"name":"\\u96C6\\u56E2\\u7F16\\u53F7","value":info.groupId});arr2.push({"name":"\\u5730\\u5E02","value":info.homeCityName});arr2.push({"name":"\\u533A\\u53BF","value":info.homeCountyName});arr2.push({"name":"\\u96C6\\u56E2\\u540D\\u79F0","value":info.groupName});arr2.push({"name":"\\u96C6\\u56E2\\u72B6\\u6001","value":info.statusName});arr2.push({"name":"\\u5EFA\\u6863\\u65F6\\u95F4","value":info.createTime});arr2.push({"name":"\\u884C\\u4E1A\\u5927\\u7C7B","value":info.tradeclassTopName});arr2.push({"name":"\\u884C\\u4E1A\\u5C0F\\u7C7B","value":info.tradeclassName});arr2.push({"name":"\\u673A\\u6784\\u7C7B\\u578B","value":info.orgTypeName});arr2.push({"name":"\\u5F52\\u5C5E\\u7F51\\u683C\\u540D\\u79F0","value":info.gridName});arr2.push({"name":"\\u5F52\\u5C5E\\u7F51\\u683C\\u7F16\\u53F7","value":info.gridId});arr2.push({"name":"\\u770B\\u7BA1\\u4EBA\\u5458\\u5DE5\\u53F7","value":info.brokerId});arr2.push({"name":"\\u770B\\u7BA1\\u4EBA\\u5458\\u624B\\u673A\\u53F7","value":info.brokerTel});arr2.push({"name":"\\u770B\\u7BA1\\u4EBA\\u5458\\u59D3\\u540D","value":info.brokerName});arr2.push({"name":"\\u5F53\\u524D\\u4EF7\\u503C\\u7B49\\u7EA7","value":info.valueLevelName});arr2.push({"name":"\\u62DF\\u8C03\\u5165\\u4EF7\\u503C\\u7B49\\u7EA7","value":info.planValueLevelName});arr2.push({"name":"\\u4F01\\u4E1A\\u7C7B\\u578B","value":info.enterpriseKindName});arr2.push({"name":"\\u5355\\u4F4D\\u5458\\u5DE5\\u6570","value":info.totalUser});arr2.push({"name":"\\u5176\\u4ED6\\u8C03\\u6574\\u7406\\u7531","value":info.otherReason})}arr1.push(arr2);arr2=[]}if(arr1.length>0){success(JSON.stringify(arr1))}else{fail()}};',
                      },
                      line_number: 8,
                      callback1: [
                        {
                          type: 'apiRequest',
                          dataId: 167706806820031870,
                          options: {
                            compId: 'apiRequest',
                            compName: 'system',
                            id: '645977',
                            pageJsonId: '537892',
                            sync: false,
                            method: 'post',
                            url: '/app/rhin/gateway/callRhinEngine',
                            _capabilityCode: 'fileExport',
                            _apiCode: 'fileExport',
                            _source: 'rhin',
                            _serviceId: '942689536114409472',
                            _serviceTitle: '文件导出-hyj: fileExport',
                            params: 'object',
                            apiRequestSetParams: [
                              {
                                code: 'header',
                                name: '请求头参数',
                                attrType: 'object',
                                _id: 'header',
                                compType: 'Input',
                                parents: ['root'],
                                id: 'header',
                                dataKey: '0029392_header',
                                parentType: 'object',
                                parentKey: '0',
                                key: '0-0',
                              },
                              {
                                code: 'path',
                                name: '请求路径参数',
                                attrType: 'object',
                                _id: 'path',
                                compType: 'Input',
                                parents: ['root'],
                                id: 'path',
                                dataKey: '0029392_path',
                                parentType: 'object',
                                parentKey: '0',
                                key: '0-1',
                              },
                              {
                                code: 'query',
                                name: 'URL 参数',
                                attrType: 'object',
                                _id: 'query',
                                compType: 'Input',
                                parents: ['root'],
                                id: 'query',
                                dataKey: '0029392_query',
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
                                    code: 'data',
                                    name: '数据',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    defaultValue: '',
                                    _id: 'body.data',
                                    compType: 'Input',
                                    parents: ['root', 'body'],
                                    id: 'body.data',
                                    dataKey: '0029392_body.data',
                                    value: {
                                      type: ['context', '$data_7076346$'],
                                      code: '',
                                    },
                                    parentType: 'object',
                                    parentKey: '0-3',
                                    key: '0-3-0',
                                  },
                                ],
                                _id: 'body',
                                compType: 'Input',
                                parents: ['root'],
                                id: 'body',
                                dataKey: '0029392_body',
                                parentType: 'object',
                                parentKey: '0',
                                key: '0-3',
                              },
                            ],
                            _sourceName: '文件导出-hyj',
                          },
                          line_number: 9,
                          callback1: [
                            {
                              type: 'downloadByFileId',
                              dataId: 167706806820044480,
                              options: {
                                compId: 'downloadByFileId',
                                compName: 'system',
                                id: '2172962',
                                pageJsonId: '537892',
                                data: '$reply_645977.resultData.fileId$',
                              },
                              line_number: 10,
                            },
                            {
                              type: 'console',
                              dataId: 167706806820083680,
                              options: {
                                compId: 'debug',
                                compName: 'system',
                                id: '68401',
                                pageJsonId: '537892',
                                value: [
                                  '文件导出成功回调值：',
                                  '$reply_645977$',
                                ],
                              },
                              line_number: 11,
                            },
                          ],
                          callback2: [],
                        },
                      ],
                      callback2: [
                        {
                          type: 'showMessage',
                          dataId: 167713861381614400,
                          options: {
                            compId: 'showMessage',
                            compName: 'system',
                            id: '4435313',
                            pageJsonId: '537892',
                            type: 'info',
                            value: '导出数据不能为空！',
                          },
                          line_number: 12,
                        },
                      ],
                    },
                  ];
                  eventDatacustomActionCode509.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatacustomActionCode509,
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
                  (refs['Button_050256_034475_700844_765858'] = r)
                }
                {...injectData}
              />
            </View>
          </Row>
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
                title: '集团编号',
                key: 'busiType',
                dataIndex: 'groupId',
                className: '',
                id: '7632392',
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
                title: '单位员工数',
                key: 'accessLocation',
                dataIndex: 'totalUser',
                className: 'divider',
                id: '740624',
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
                title: '集团名称',
                key: 'setMealName',
                dataIndex: 'groupName',
                className: 'divider',
                id: '776625',
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
                title: '当前价值等级',
                key: 'handingFeeMonth',
                dataIndex: 'valueLevelName',
                className: 'divider',
                id: '8135192',
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
                id: '698082',
                title: '拟调入价值等级',
                dataIndex: 'planValueLevelName',
                key: '698082',
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
            page={true}
            rowKeyType={'specified'}
            editMode={'single'}
            selectType={'checkbox'}
            bordered={'segmentation'}
            size={'middle'}
            fixedAction={false}
            rowSelection={{ type: 'checkbox' }}
            showHead={false}
            showTotal={true}
            showSizeChanger={true}
            showQuickJumper={false}
            pageSizeOptions={'[5,10,20]'}
            dataSource={data?.feeInfo}
            fieldName={'data.MemberInfo.length'}
            total={data?.MemberInfo?.length}
            hiddenAction={false}
            rowKey={'rowId'}
            rowActions={[
              {
                title: '修改',
                iconPos: 'left',
                icon: { theme: 'outlined', type: 'edit' },
                type: 'edit',
                id: '85229',
                checked: true,
              },
            ]}
            extend={[]}
            dataSourceFromDataSourceConfig={'data.feeInfo'}
            $$componentItem={{
              id: 'Table_8700198',
              uid: 'Table_8700198',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ margin: '10px 0px 10px 0px' }}
            onRowEdit={(rowId: any, row: any, index: any) => {
              const eventDatashowCustomModal126: any = [
                {
                  type: 'showCustomModal',
                  dataId: 166539679318667200,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '951698',
                    pageJsonId: '537892',
                    modalname: '/networkAcrossProvincecopycopy',
                    pageId: '1046254072908066816',
                    modalPath: '/networkAcrossProvincecopycopy',
                    paramsObj: {
                      feeInfo: '$row$',
                      catalogCode: '$state.catalogCode$',
                    },
                    paramsObjKeyValueMap: {
                      feeInfo: '$row$',
                      catalogCode: '$state.catalogCode$',
                    },
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'customActionCode',
                      dataId: 166540314414141150,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '0855155',
                        pageJsonId: '537892',
                        code: 'function main(data,state,success,fail){data.feeInfo=data.feeInfo.filter(function(v){return v.rowId!=okData_951698.rowId});data.feeInfo.push(okData_951698);var instList=[];for(var key in okData_951698){if(key!="rowId"&&key!="marketList"){instList.push({"attrCode":key,"attrName":"","attrValue":okData_951698[key]})}if(key=="marketList"){instList.push({"attrCode":key,"attrName":"","attrValue":JSON.stringify(okData_951698[key])})}}var instObj={"instCode":okData_951698.rowId,"instAttrList":instList};data.sceneSubmit.instList=data.sceneSubmit.instList.filter(function(v){return v.instCode!=okData_951698.rowId});data.sceneSubmit.instList.push(instObj);success()};',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'setDataSource',
                          dataId: 166540314414131400,
                          options: {
                            compId: 'setDataSource',
                            compName: 'page',
                            id: '539537',
                            pageJsonId: '537892',
                            dataSourceId: 166519807387797900,
                            dataSourceName: 'feeInfo',
                            dataSourceRelType: 'custom',
                            dataSourceReloadFilter: [],
                            dataSourceSetValue: [
                              {
                                code: 'valueLevelName',
                                name: '属性',
                                type: 'string',
                                attrId: '16284',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['valueLevelName'],
                                _idpath: ['16284'],
                              },
                              {
                                code: 'tradeclassTopName',
                                name: '属性',
                                type: 'string',
                                attrId: '50189',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['tradeclassTopName'],
                                _idpath: ['50189'],
                              },
                              {
                                code: 'totalUser',
                                name: '属性',
                                type: 'string',
                                attrId: '106104',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['totalUser'],
                                _idpath: ['106104'],
                              },
                              {
                                code: 'brokerTel',
                                name: '属性',
                                type: 'string',
                                attrId: '141501',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['brokerTel'],
                                _idpath: ['141501'],
                              },
                              {
                                code: 'statusName',
                                name: '属性',
                                type: 'string',
                                attrId: '266881',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['statusName'],
                                _idpath: ['266881'],
                              },
                              {
                                code: 'homeCityName',
                                name: '属性',
                                type: 'string',
                                attrId: '345561',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['homeCityName'],
                                _idpath: ['345561'],
                              },
                              {
                                code: 'enterpriseKindName',
                                name: '属性',
                                type: 'string',
                                attrId: '479396',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['enterpriseKindName'],
                                _idpath: ['479396'],
                              },
                              {
                                code: 'orgTypeName',
                                name: '属性',
                                type: 'string',
                                attrId: '543035',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['orgTypeName'],
                                _idpath: ['543035'],
                              },
                              {
                                code: 'gridId',
                                name: '属性',
                                type: 'string',
                                attrId: '643713',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['gridId'],
                                _idpath: ['643713'],
                              },
                              {
                                code: 'brokerId',
                                name: '属性',
                                type: 'string',
                                attrId: '704364',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['brokerId'],
                                _idpath: ['704364'],
                              },
                              {
                                code: 'createTime',
                                name: '属性',
                                type: 'string',
                                attrId: '938579',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['createTime'],
                                _idpath: ['938579'],
                              },
                              {
                                code: 'groupName',
                                name: '属性',
                                type: 'string',
                                attrId: '941438',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['groupName'],
                                _idpath: ['941438'],
                              },
                              {
                                code: 'homeCountyName',
                                name: '属性',
                                type: 'string',
                                attrId: '5195405',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['homeCountyName'],
                                _idpath: ['5195405'],
                              },
                              {
                                code: 'gridName',
                                name: '属性',
                                type: 'string',
                                attrId: '5313266',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['gridName'],
                                _idpath: ['5313266'],
                              },
                              {
                                code: 'brokerName',
                                name: '属性',
                                type: 'string',
                                attrId: '5926803',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['brokerName'],
                                _idpath: ['5926803'],
                              },
                              {
                                code: 'tradeclassName',
                                name: '属性',
                                type: 'string',
                                attrId: '8836505',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['tradeclassName'],
                                _idpath: ['8836505'],
                              },
                              {
                                code: 'planValueLevelName',
                                name: '属性',
                                type: 'string',
                                attrId: '9946835',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['planValueLevelName'],
                                _idpath: ['9946835'],
                              },
                              {
                                code: 'groupId',
                                name: '属性',
                                type: 'string',
                                attrId: '013228',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['groupId'],
                                _idpath: ['013228'],
                              },
                              {
                                code: 'otherReason',
                                name: '属性',
                                type: 'string',
                                attrId: '0264065',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['otherReason'],
                                _idpath: ['0264065'],
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
                        {
                          type: 'callParentCustomFunc',
                          dataId: 166540314414147520,
                          options: {
                            compId: 'callParentCustomFunc',
                            compName: 'system',
                            id: '7453836',
                            pageJsonId: '537892',
                            pathname: '/auditOrderPrepare',
                            pageId: '884045146848604160',
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
              ];
              eventDatashowCustomModal126.params =
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
                eventDatashowCustomModal126,
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
            ref={(r: any) => (refs['Table_8700198'] = r)}
            {...injectData}
          />
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
                title: '集团编号',
                key: 'busiType',
                dataIndex: 'groupId',
                className: '',
                id: '15314',
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
                title: '单位员工数',
                key: 'accessLocation',
                dataIndex: 'totalUser',
                className: 'divider',
                id: '7372186',
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
                title: '集团名称',
                key: 'setMealName',
                dataIndex: 'groupName',
                className: 'divider',
                id: '3470104',
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
                title: '当前价值等级',
                key: 'handingFeeMonth',
                dataIndex: 'valueLevelName',
                className: 'divider',
                id: '061983',
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
                id: '674162',
                dataIndex: 'planValueLevelName',
                title: '拟调入价值等级',
                key: '674162',
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
            page={true}
            rowKeyType={'specified'}
            editMode={'single'}
            selectType={'checkbox'}
            bordered={'segmentation'}
            size={'middle'}
            fixedAction={false}
            rowSelection={undefined}
            showHead={false}
            showTotal={true}
            showSizeChanger={true}
            showQuickJumper={false}
            pageSizeOptions={'[5,10,20]'}
            dataSource={data?.feeInfo}
            fieldName={'data.MemberInfo.length'}
            total={data?.MemberInfo?.length}
            hiddenAction={false}
            rowKey={'rowId'}
            rowActions={[
              {
                title: '详情',
                iconPos: 'left',
                icon: { theme: 'outlined', type: 'file-search' },
                type: 'detail',
                id: '016306',
                checked: true,
              },
            ]}
            extend={[]}
            dataSourceFromDataSourceConfig={'data.feeInfo'}
            $$componentItem={{
              id: 'Table_8700198_3717786',
              uid: 'Table_8700198_3717786',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={false}
            readOnly={false}
            style={{ margin: '10px 0px 10px 0px' }}
            onRowEdit={(rowId: any, row: any, index: any) => {
              const eventDatashowCustomModal127: any = [
                {
                  type: 'showCustomModal',
                  dataId: 166539679318667200,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '951698',
                    pageJsonId: '537892',
                    modalname: '/networkFeeAudit',
                    pageId: '897009883231784960',
                    modalPath: '/networkFeeAudit',
                    paramsObj: {
                      feeInfo: '$row$',
                      catalogCode: '$state.catalogCode$',
                    },
                    paramsObjKeyValueMap: {
                      feeInfo: '$row$',
                      catalogCode: '$state.catalogCode$',
                    },
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'customActionCode',
                      dataId: 166540314414141150,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '0855155',
                        pageJsonId: '537892',
                        code: 'function main(data,state,success,fail){data.feeInfo=data.feeInfo.filter(function(v){return v.rowId!=okData_951698.rowId});data.feeInfo.push(okData_951698);var instList=[];for(var key in okData_951698){if(key!="rowId"){instList.push({"attrCode":key,"attrName":"","attrValue":okData_951698[key]})}}var instObj={"instCode":okData_951698.rowId,"instAttrList":instList};data.sceneSubmit.instList=data.sceneSubmit.instList.filter(function(v){return v.rowId!=okData_951698.rowId});data.sceneSubmit.instList.push(instObj);success()};',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'setDataSource',
                          dataId: 166540314414131400,
                          options: {
                            compId: 'setDataSource',
                            compName: 'page',
                            id: '539537',
                            pageJsonId: '537892',
                            dataSourceId: 166519807387797900,
                            dataSourceName: 'feeInfo',
                            dataSourceRelType: 'custom',
                            dataSourceReloadFilter: [],
                            dataSourceSetValue: [
                              {
                                code: 'valueLevelName',
                                name: '属性',
                                type: 'string',
                                attrId: '16284',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['valueLevelName'],
                                _idpath: ['16284'],
                              },
                              {
                                code: 'tradeclassTopName',
                                name: '属性',
                                type: 'string',
                                attrId: '50189',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['tradeclassTopName'],
                                _idpath: ['50189'],
                              },
                              {
                                code: 'totalUser',
                                name: '属性',
                                type: 'string',
                                attrId: '106104',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['totalUser'],
                                _idpath: ['106104'],
                              },
                              {
                                code: 'brokerTel',
                                name: '属性',
                                type: 'string',
                                attrId: '141501',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['brokerTel'],
                                _idpath: ['141501'],
                              },
                              {
                                code: 'statusName',
                                name: '属性',
                                type: 'string',
                                attrId: '266881',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['statusName'],
                                _idpath: ['266881'],
                              },
                              {
                                code: 'homeCityName',
                                name: '属性',
                                type: 'string',
                                attrId: '345561',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['homeCityName'],
                                _idpath: ['345561'],
                              },
                              {
                                code: 'enterpriseKindName',
                                name: '属性',
                                type: 'string',
                                attrId: '479396',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['enterpriseKindName'],
                                _idpath: ['479396'],
                              },
                              {
                                code: 'orgTypeName',
                                name: '属性',
                                type: 'string',
                                attrId: '543035',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['orgTypeName'],
                                _idpath: ['543035'],
                              },
                              {
                                code: 'gridId',
                                name: '属性',
                                type: 'string',
                                attrId: '643713',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['gridId'],
                                _idpath: ['643713'],
                              },
                              {
                                code: 'brokerId',
                                name: '属性',
                                type: 'string',
                                attrId: '704364',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['brokerId'],
                                _idpath: ['704364'],
                              },
                              {
                                code: 'createTime',
                                name: '属性',
                                type: 'string',
                                attrId: '938579',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['createTime'],
                                _idpath: ['938579'],
                              },
                              {
                                code: 'groupName',
                                name: '属性',
                                type: 'string',
                                attrId: '941438',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['groupName'],
                                _idpath: ['941438'],
                              },
                              {
                                code: 'homeCountyName',
                                name: '属性',
                                type: 'string',
                                attrId: '5195405',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['homeCountyName'],
                                _idpath: ['5195405'],
                              },
                              {
                                code: 'gridName',
                                name: '属性',
                                type: 'string',
                                attrId: '5313266',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['gridName'],
                                _idpath: ['5313266'],
                              },
                              {
                                code: 'brokerName',
                                name: '属性',
                                type: 'string',
                                attrId: '5926803',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['brokerName'],
                                _idpath: ['5926803'],
                              },
                              {
                                code: 'tradeclassName',
                                name: '属性',
                                type: 'string',
                                attrId: '8836505',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['tradeclassName'],
                                _idpath: ['8836505'],
                              },
                              {
                                code: 'planValueLevelName',
                                name: '属性',
                                type: 'string',
                                attrId: '9946835',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['planValueLevelName'],
                                _idpath: ['9946835'],
                              },
                              {
                                code: 'groupId',
                                name: '属性',
                                type: 'string',
                                attrId: '013228',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['groupId'],
                                _idpath: ['013228'],
                              },
                              {
                                code: 'otherReason',
                                name: '属性',
                                type: 'string',
                                attrId: '0264065',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['otherReason'],
                                _idpath: ['0264065'],
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
                        {
                          type: 'callParentCustomFunc',
                          dataId: 166540314414147520,
                          options: {
                            compId: 'callParentCustomFunc',
                            compName: 'system',
                            id: '7453836',
                            pageJsonId: '537892',
                            pathname: '/auditOrderPrepare',
                            pageId: '884045146848604160',
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
              ];
              eventDatashowCustomModal127.params =
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
                eventDatashowCustomModal127,
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
            onRowDetail={(rowId: any, row: any, index: any) => {
              const eventDatashowCustomModal128: any = [
                {
                  type: 'showCustomModal',
                  dataId: 170107673698396930,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '4647356',
                    pageJsonId: '537892',
                    modalname: '/networkAcrossProvincecopycopy',
                    pageId: '1046254072908066816',
                    modalPath: '/networkAcrossProvincecopycopy',
                    paramsObj: {
                      feeInfo: '$row$',
                      catalogCode: '$state.catalogCode$',
                      isDetails: 'true',
                    },
                    paramsObjKeyValueMap: {
                      feeInfo: '$row$',
                      catalogCode: '$state.catalogCode$',
                      isDetails: 'true',
                    },
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'customActionCode',
                      dataId: 170107673698329800,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '41245',
                        pageJsonId: '537892',
                        code: 'function main(data,state,success,fail){data.feeInfo=data.feeInfo.filter(function(v){return v.rowId!=okData_4647356.rowId});data.feeInfo.push(okData_4647356);var instList=[];for(var key in okData_4647356){if(key!="rowId"&&key!="marketList"){instList.push({"attrCode":key,"attrName":"","attrValue":okData_4647356[key]})}if(key=="marketList"){instList.push({"attrCode":key,"attrName":"","attrValue":JSON.stringify(okData_4647356[key])})}}var instObj={"instCode":okData_4647356.rowId,"instAttrList":instList};data.sceneSubmit.instList=data.sceneSubmit.instList.filter(function(v){return v.instCode!=okData_4647356.rowId});data.sceneSubmit.instList.push(instObj);success()};',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'setDataSource',
                          dataId: 170107673698380350,
                          options: {
                            compId: 'setDataSource',
                            compName: 'page',
                            id: '583523',
                            pageJsonId: '537892',
                            dataSourceId: 166519807387797900,
                            dataSourceName: 'feeInfo',
                            dataSourceRelType: 'custom',
                            dataSourceSetValue: [
                              {
                                code: 'groupId',
                                name: '属性',
                                type: 'string',
                                attrId: '013228',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                              },
                              {
                                code: 'homeCityName',
                                name: '属性',
                                type: 'string',
                                attrId: '345561',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                              },
                              {
                                code: 'homeCountyName',
                                name: '属性',
                                type: 'string',
                                attrId: '5195405',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                              },
                              {
                                code: 'groupName',
                                name: '属性',
                                type: 'string',
                                attrId: '941438',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                              },
                              {
                                code: 'statusName',
                                name: '属性',
                                type: 'string',
                                attrId: '266881',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                              },
                              {
                                code: 'createTime',
                                name: '属性',
                                type: 'string',
                                attrId: '938579',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                              },
                              {
                                code: 'tradeclassTopName',
                                name: '属性',
                                type: 'string',
                                attrId: '50189',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                              },
                              {
                                code: 'tradeclassName',
                                name: '属性',
                                type: 'string',
                                attrId: '8836505',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                              },
                              {
                                code: 'orgTypeName',
                                name: '属性',
                                type: 'string',
                                attrId: '543035',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                              },
                              {
                                code: 'gridName',
                                name: '属性',
                                type: 'string',
                                attrId: '5313266',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                              },
                              {
                                code: 'gridId',
                                name: '属性',
                                type: 'string',
                                attrId: '643713',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                              },
                              {
                                code: 'brokerId',
                                name: '属性',
                                type: 'string',
                                attrId: '704364',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                              },
                              {
                                code: 'brokerTel',
                                name: '属性',
                                type: 'string',
                                attrId: '141501',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                              },
                              {
                                code: 'brokerName',
                                name: '属性',
                                type: 'string',
                                attrId: '5926803',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                              },
                              {
                                code: 'valueLevelName',
                                name: '属性',
                                type: 'string',
                                attrId: '16284',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                              },
                              {
                                code: 'planValueLevelName',
                                name: '属性',
                                type: 'string',
                                attrId: '9946835',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                              },
                              {
                                code: 'enterpriseKindName',
                                name: '属性',
                                type: 'string',
                                attrId: '479396',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                              },
                              {
                                code: 'totalUser',
                                name: '属性',
                                type: 'string',
                                attrId: '106104',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                              },
                              {
                                code: 'otherReason',
                                name: '属性',
                                type: 'string',
                                attrId: '0264065',
                                initialData: { type: 'static', value: '' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
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
                        {
                          type: 'callParentCustomFunc',
                          dataId: 170107673698399780,
                          options: {
                            compId: 'callParentCustomFunc',
                            compName: 'system',
                            id: '833268',
                            pageJsonId: '537892',
                            pathname: '/auditOrderPrepare',
                            pageId: '884045146848604160',
                            customFuncName: 'getFactor',
                            customFuncParams: '$data.sceneSubmit$',
                            modalPath: '/auditOrderPrepare',
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
              ];
              eventDatashowCustomModal128.params =
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
                eventDatashowCustomModal128,
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
            ref={(r: any) => (refs['Table_8700198_3717786'] = r)}
            {...injectData}
          />
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
                id: 'Form_395851_1727917_9692158_9612234_1000722_434628_511208_810317_526148',
                uid: 'Form_395851_1727917_9692158_9612234_1000722_434628_511208_810317_526148',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ padding: '0px 0px 0px 0px', margin: '10px 0px 0px 0px' }}
              ref={(r: any) =>
                (refs[
                  'Form_395851_1727917_9692158_9612234_1000722_434628_511208_810317_526148'
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
                  id: 'Input_690228_5400337_280051_232429_7501497_288005_8195412_48663836_335482',
                  uid: 'Input_690228_5400337_280051_232429_7501497_288005_8195412_48663836_335482',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  (refs[
                    'Input_690228_5400337_280051_232429_7501497_288005_8195412_48663836_335482'
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
                  id: 'View_22346374_875512_926873_4359147_729981_339083_0134945_145611_42193717',
                  uid: 'View_22346374_875512_926873_4359147_729981_339083_0134945_145611_42193717',
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
                    'View_22346374_875512_926873_4359147_729981_339083_0134945_145611_42193717'
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
                    id: 'StdUpload_6230546_867413_538179_36057857_3505279_0434_242878_424019_1466135',
                    uid: 'StdUpload_6230546_867413_538179_36057857_3505279_0434_242878_424019_1466135',
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
                    const eventDatagetSelectedData206: any = [
                      {
                        type: 'getSelectedData',
                        dataId: 166546772996178620,
                        options: {
                          compId:
                            'Input_690228_5400337_280051_232429_7501497_288005_8195412_48663836_335482',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Select',
                          id: '5357367',
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'setDataSource',
                            dataId: 166546773727227360,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '343864',
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
                                    code: '$selectedData_5357367[0].value$',
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
                                    code: '$selectedData_5357367[0].label$',
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
                                dataId: 166546773727208860,
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '899861',
                                  pageJsonId: '537892',
                                  code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=data.fileInfoList;success(data.sceneSubmit)};',
                                },
                                line_number: 3,
                                callback1: [
                                  {
                                    type: 'console',
                                    dataId: 166546773727203330,
                                    options: {
                                      compId: 'debug',
                                      compName: 'system',
                                      id: '330851',
                                      pageJsonId: '537892',
                                      value: ['$data_899861$'],
                                    },
                                    line_number: 4,
                                  },
                                  {
                                    type: 'callParentCustomFunc',
                                    dataId: 166546773727215300,
                                    options: {
                                      compId: 'callParentCustomFunc',
                                      compName: 'system',
                                      id: '194985',
                                      pageJsonId: '537892',
                                      pathname: '/commonAuditOrder',
                                      pageId: '872682457815691264',
                                      customFuncName: 'getFactor',
                                      customFuncParams: '$data.sceneSubmit$',
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
                        callback2: [
                          {
                            type: 'showMessage',
                            dataId: 166546774112933150,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '95971',
                              pageJsonId: '537892',
                              type: 'error',
                              value: '请选择附件类型',
                            },
                            line_number: 6,
                          },
                        ],
                      },
                    ];
                    eventDatagetSelectedData206.params =
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
                      eventDatagetSelectedData206,
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
                    const eventDatagetSelectedData207: any = [
                      {
                        type: 'getSelectedData',
                        dataId: 166987684807129660,
                        options: {
                          compId:
                            'Input_690228_5400337_280051_232429_7501497_288005_8195412_48663836_335482',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Select',
                          id: '478735',
                        },
                        line_number: 7,
                        callback1: [
                          {
                            type: 'console',
                            dataId: 166987685475013340,
                            options: {
                              compId: 'debug',
                              compName: 'system',
                              id: '270798',
                              pageJsonId: '537892',
                              value: ['11111'],
                            },
                            line_number: 8,
                          },
                        ],
                        callback2: [
                          {
                            type: 'console',
                            dataId: 166987686467074460,
                            options: {
                              compId: 'debug',
                              compName: 'system',
                              id: '116647',
                              pageJsonId: '537892',
                              value: ['22222'],
                            },
                            line_number: 9,
                          },
                        ],
                      },
                    ];
                    eventDatagetSelectedData207.params =
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
                      eventDatagetSelectedData207,
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
                    const eventDatacustomActionCode511: any = [
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
                    eventDatacustomActionCode511.params =
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
                      eventDatacustomActionCode511,
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
                      'StdUpload_6230546_867413_538179_36057857_3505279_0434_242878_424019_1466135'
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
              const eventDatacustomActionCode512: any = [
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
              eventDatacustomActionCode512.params =
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
                eventDatacustomActionCode512,
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
              const eventDatadownloadByFileId40: any = [
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
              eventDatadownloadByFileId40.params =
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
                eventDatadownloadByFileId40,
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
          ref={(r: any) => (refs['BOFramer_613401'] = r)}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(ClsJc_0007_0006$$Page, {
  pageId: '1045183776599945216',
  hasLogin: false,
  dataSource,
  defaultState: {},
});
