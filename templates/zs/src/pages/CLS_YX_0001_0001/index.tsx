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
  Row,
  Button,
  Table,
  Select,
  StdUpload,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '899486380580642816';
const ClsYx_0001_0001$$Page: React.FC<PageProps> = ({
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
  useEffect(() => {
    const eventDataapiRequest620: any = [
      {
        type: 'apiRequest',
        dataId: 166977386147210200,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '365768',
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
            dataId: 16697738636852404,
            options: {
              compId:
                'Input_690228_5400337_280051_232429_7501497_288005_8195412_48663836_195013',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '7254018',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
              data: '$reply_365768?.resultData$',
            },
            line_number: 2,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest620.params = [] || [];
    CMDGenerator(eventDataapiRequest620, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest621: any = [
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
                {
                  attrId: '001358',
                  code: 'customObject',
                  name: '属性',
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
    eventDataapiRequest621.params = [] || [];
    CMDGenerator(eventDataapiRequest621, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse309: any = [
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
              code: 'function main(data,state,success,fail){var item=state.itemList;data.sceneSubmit.approveGrade=item.approveGrade;data.sceneSubmit.approveGradeName=item.approveGradeName;data.sceneSubmit.instList=item.instList;var marketList=[];item.instList.forEach(function(v){var marketObj={};var instList=v.instAttrList;if(instList!=undefined&&instList.length>0){for(var i=0;i<instList.length;i++){marketObj[instList[i].attrCode]=instList[i].attrValue}marketObj.rowId=v.instCode;marketList.push(marketObj)}});data.returnPop=item.customObject;success(marketList)};',
              actionTitle: '设置界面初始化值',
            },
            line_number: 7,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 166625014422057700,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '748504',
                  pageJsonId: '537892',
                  dataSourceId: 166519807387797900,
                  dataSourceName: 'marketList',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '739205',
                      code: 'groupId',
                      name: '集团编码',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '252243',
                      code: 'groupName',
                      name: '集团名称',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '137802',
                      code: 'valueLevelName',
                      name: '集团价值等级',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '963826',
                      code: 'tradeclassTopName',
                      name: '行业类型',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '5031659',
                      code: 'accountId',
                      name: '账户ID',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '6377456',
                      code: 'accountName',
                      name: '账户名称',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '665968',
                      code: 'income',
                      name: '收入（经分取近一年）',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '754893',
                      code: 'code',
                      name: '营销案档次编码',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '6429123',
                      code: 'name',
                      name: '营销案名称',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '197527',
                      code: 'marketStartTime',
                      name: '营销案生效日期',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '2152803',
                      code: 'marketEndTime',
                      name: '营销案失效日期',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '017672',
                      code: 'guarantee',
                      name: '预存保底优惠',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '26139435',
                      code: 'acceptMul',
                      name: '受理倍数',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '62643',
                      code: 'effectType',
                      name: '生效类型',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '9425584',
                      code: 'receiptsMoney',
                      name: '实收金额',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '442519',
                      code: 'lastDiscount',
                      name: '最终折扣',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '8324622',
                      code: 'rowId',
                      name: '行ID',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                  ],
                  newData: '$data_9981685$',
                  operateType: 3,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 8,
                callback1: [],
                callback2: [],
              },
              {
                type: 'setValue',
                dataId: 166625016933200260,
                options: {
                  compId:
                    'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_6513883',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '977695',
                  value: '$state.itemList.approveGradeName$',
                },
                line_number: 9,
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
            line_number: 10,
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
                line_number: 11,
                callback1: [],
                callback2: [],
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '871569',
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
                    condId: '3752073',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166746267296344930,
                elseIfs: [],
                line_number: 12,
                callback1: [
                  {
                    type: 'setVisible',
                    dataId: 166746268768532500,
                    options: {
                      compId: 'Table_5369494',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Table',
                      id: '2144937',
                    },
                    line_number: 13,
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
            line_number: 14,
            callback1: [
              {
                type: 'setVisible',
                dataId: 166625022614798850,
                options: {
                  compId:
                    'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_6513883',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '048575',
                  visible: 'true',
                },
                line_number: 15,
              },
              {
                type: 'sysSetVisible',
                dataId: 166244953733999170,
                options: {
                  compId: ['Row_851124', 'Row_851', 'Table_8700198'],
                  compName: 'page',
                  id: '675663',
                  pageJsonId: '537892',
                  compid: ['Row_851124', 'Row_851', 'Table_8700198'],
                  visible: '',
                },
                line_number: 16,
              },
              {
                type: 'setDisable',
                dataId: 166625026325981540,
                options: {
                  compId:
                    'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_6513883',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '4841216',
                  disabled: 'true',
                },
                line_number: 17,
              },
              {
                type: 'setVisible',
                dataId: 166625041027547940,
                options: {
                  compId: 'Table_8700198_818742',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Table',
                  id: '436135',
                  visible: 'true',
                },
                line_number: 18,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse309.params = [] || [];
    CMDGenerator(eventDataifelse309, {}, 'ifelse', {
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
        visible={true}
        $$componentItem={{
          id: 'View_537892_1',
          uid: 'View_537892_1',
          type: 'View',
          ...componentItem,
        }}
        style={{
          minHeight: '100%',
          display: 'block',
          padding: '0px 0px 0px 0px',
          width: 'auto',
          height: 'auto',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_537892_1')}
        {...injectData}
      >
        <Divider
          name={'分割线'}
          orientation={'center'}
          type={'horizontal'}
          visible={true}
          dashed={false}
          dividerText={'集团营销案'}
          $$componentItem={{
            id: 'Divider_52558',
            uid: 'Divider_52558',
            type: 'Divider',
            ...componentItem,
          }}
          style={{ margin: '12px 0 12px 0', height: 'auto' }}
          ref={(r: any) => refs.setComponentRef(r, 'Divider_52558')}
          {...injectData}
        />
        <View
          className="View_View_6806553"
          name={'布局容器'}
          visible={true}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_6806553',
            uid: 'View_6806553',
            type: 'View',
            ...componentItem,
          }}
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: 'auto',
            height: 'auto',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_6806553')}
          {...injectData}
        >
          <HorizontalView
            name={'左右布局'}
            visible={true}
            formItemIndex={0}
            $$componentItem={{
              id: 'HorizontalView_004602',
              uid: 'HorizontalView_004602',
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
              margin: '0px 0px 12px 0px',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'HorizontalView_004602')}
            {...injectData}
          >
            <View
              className="View_View_339406"
              name={'布局容器'}
              visible={true}
              $$componentItem={{
                id: 'View_339406',
                uid: 'View_339406',
                type: 'View',
                ...componentItem,
              }}
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
                visible={true}
                header={'标题'}
                colSpace={0}
                rowSpace={16}
                formCode={'Form_4311097'}
                className={'beforeStyle'}
                $$componentItem={{
                  id: 'Form_4311097_9385662_8411515_9167293_4337769_708507_903502_3391966_569281',
                  uid: 'Form_4311097_9385662_8411515_9167293_4337769_708507_903502_3391966_569281',
                  type: 'Form',
                  ...componentItem,
                }}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) =>
                  refs.setComponentRef(
                    r,
                    'Form_4311097_9385662_8411515_9167293_4337769_708507_903502_3391966_569281',
                  )
                }
                {...injectData}
              >
                <Checkbox
                  name={'审批场景'}
                  titleTip={'text'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  visible={true}
                  text={'集团营销案'}
                  selfSpan={8}
                  labelCol={8}
                  wrapperCol={16}
                  formItemIndex={0}
                  fieldName={'aduitClass'}
                  defaultChecked={true}
                  disabled={true}
                  tipIcon={{
                    theme: 'outlined',
                    type: 'question-circle',
                    isIconFont: false,
                  }}
                  tipContent={data?.sceneSubmit?.childCatalogDesc}
                  $$componentItem={{
                    id: 'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_5662653',
                    uid: 'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_5662653',
                    type: 'Checkbox',
                    ...componentItem,
                  }}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    refs.setComponentRef(
                      r,
                      'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_5662653',
                    )
                  }
                  {...injectData}
                />
                <View
                  className="View_View_6319234_3569864_15467365_781748_496899"
                  name={'布局容器'}
                  visible={true}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_6319234_3569864_15467365_781748_496899',
                    uid: 'View_6319234_3569864_15467365_781748_496899',
                    type: 'View',
                    ...componentItem,
                  }}
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
                    refs.setComponentRef(
                      r,
                      'View_6319234_3569864_15467365_781748_496899',
                    )
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
                  disabled={false}
                  formItemIndex={2}
                  visible={false}
                  readOnly={false}
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
                    id: 'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_6513883',
                    uid: 'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_6513883',
                    type: 'Input',
                    ...componentItem,
                  }}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    refs.setComponentRef(
                      r,
                      'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_6513883',
                    )
                  }
                  {...injectData}
                />
              </Form>
            </View>
          </HorizontalView>
          <Row
            name={'行容器'}
            visible={true}
            colSpan={4}
            gutterHorizontal={0}
            gutterVertical={0}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'Row_851',
              uid: 'Row_851',
              type: 'Row',
              ...componentItem,
            }}
            style={{ margin: '10px 0px 0px 0px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Row_851')}
            {...injectData}
          >
            <View
              className="View_View_919043"
              name={'布局容器'}
              visible={true}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_919043',
                uid: 'View_919043',
                type: 'View',
                ...componentItem,
              }}
              style={{
                display: 'block',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_919043')}
              {...injectData}
            />
            <View
              className="View_View_281081"
              name={'布局容器'}
              visible={true}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_281081',
                uid: 'View_281081',
                type: 'View',
                ...componentItem,
              }}
              style={{
                display: 'block',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_281081')}
              {...injectData}
            />
            <View
              className="View_View_9696145"
              name={'布局容器'}
              visible={true}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_9696145',
                uid: 'View_9696145',
                type: 'View',
                ...componentItem,
              }}
              style={{
                display: 'block',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_9696145')}
              {...injectData}
            />
            <View
              className="View_View_335931"
              name={'布局容器'}
              visible={true}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_335931',
                uid: 'View_335931',
                type: 'View',
                ...componentItem,
              }}
              style={{
                display: 'block',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_335931')}
              {...injectData}
            />
            <View
              className="View_View_006783"
              name={'布局容器'}
              visible={true}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_006783',
                uid: 'View_006783',
                type: 'View',
                ...componentItem,
              }}
              style={{
                display: 'block',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_006783')}
              {...injectData}
            />
            <View
              className="View_View_859813"
              name={'布局容器'}
              visible={true}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_859813',
                uid: 'View_859813',
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
              ref={(r: any) => refs.setComponentRef(r, 'View_859813')}
              {...injectData}
            >
              <Button
                name={'添加'}
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
                  id: 'Button_683498',
                  uid: 'Button_683498',
                  type: 'Button',
                  ...componentItem,
                }}
                style={{ width: 'fit-content' }}
                onClick={(e: any) => {
                  const eventDatashowCustomModal294: any = [
                    {
                      type: 'showCustomModal',
                      dataId: 166314610874318850,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '611628',
                        pageJsonId: '537892',
                        modalname: '/marketProdFee',
                        pageId: '899496798073884672',
                        paramsObj: {
                          phone: '$value_24586657$',
                          lanId: '$state.lanId$',
                          catalogCode: '$state.catalogCode$',
                          isCoreFlag: '1',
                          popType: '1',
                        },
                        paramsObjKeyValueMap: {
                          phone: '$value_24586657$',
                          lanId: '$state.lanId$',
                          catalogCode: '$state.catalogCode$',
                          isCoreFlag: '1',
                          popType: '1',
                        },
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
                            code: 'function main(data,state,success,fail){data.returnPop.push(okData_611628);var resObj={};var marketObj=okData_611628.marketObj;for(var key in marketObj){resObj[key]=marketObj[key]}var groupObj=okData_611628.groupObj;for(var key in groupObj){resObj[key]=groupObj[key]}var instList=[];for(var key in resObj){instList.push({"attrCode":key,"attrName":"","attrValue":resObj[key]})}var instObj={"instCode":okData_611628.rowId,"instAttrList":instList};if(data.sceneSubmit.instList!=undefined&&data.sceneSubmit.instList.length>0){data.sceneSubmit.instList.push(instObj);data.sceneSubmit.customObject.push(okData_611628)}else{var instList=[];instList.push(instObj);data.sceneSubmit.instList=instList;var customObject=[];customObject.push(okData_611628);data.sceneSubmit.customObject=customObject}resObj.rowId=okData_611628.rowId;data.marketList.push(resObj);success()};',
                          },
                          line_number: 2,
                          callback1: [
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
                              },
                              line_number: 3,
                              callback1: [],
                              callback2: [],
                            },
                            {
                              type: 'setDataSource',
                              dataId: 166616735771603330,
                              options: {
                                compId: 'setDataSource',
                                compName: 'page',
                                id: '6548254',
                                pageJsonId: '537892',
                                dataSourceId: 166519807387797900,
                                dataSourceName: 'marketList',
                                dataSourceRelType: 'custom',
                                dataSourceReloadFilter: [],
                                dataSourceSetValue: [
                                  {
                                    attrId: '252243',
                                    code: 'groupName',
                                    name: '集团名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '963826',
                                    code: 'tradeclassTopName',
                                    name: '行业类型',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '5031659',
                                    code: 'accountId',
                                    name: '账户ID',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '6377456',
                                    code: 'accountName',
                                    name: '账户名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '665968',
                                    code: 'income',
                                    name: '收入（经分取近一年）',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '754893',
                                    code: 'code',
                                    name: '营销案档次编码',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '6429123',
                                    code: 'name',
                                    name: '营销案名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '197527',
                                    code: 'marketStartTime',
                                    name: '营销案生效日期',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '2152803',
                                    code: 'marketEndTime',
                                    name: '营销案失效日期',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '017672',
                                    code: 'guarantee',
                                    name: '预存保底优惠',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '26139435',
                                    code: 'acceptMul',
                                    name: '受理倍数',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '62643',
                                    code: 'effectType',
                                    name: '生效类型',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '9425584',
                                    code: 'receiptsMoney',
                                    name: '实收金额',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '442519',
                                    code: 'lastDiscount',
                                    name: '最终折扣',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '8324622',
                                    code: 'rowId',
                                    name: '行ID',
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
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatashowCustomModal294.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatashowCustomModal294,
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
                ref={(r: any) => refs.setComponentRef(r, 'Button_683498')}
                {...injectData}
              />
              <Button
                name={'删除'}
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
                  id: 'Button_026256',
                  uid: 'Button_026256',
                  type: 'Button',
                  ...componentItem,
                }}
                style={{ width: 'fit-content', margin: '0px 0px 0px 10px' }}
                onClick={(e: any) => {
                  const eventDatagetTableSelectedKey95: any = [
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
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '9636193',
                            pageJsonId: '537892',
                            code: 'function main(data,state,success,fail){var marketList=data.marketList;var sel=selectedRowKeys_18302646;var res=[];var instList=[];if(sel!=undefined&&sel.length>0){marketList.forEach(function(v){var exit=sel.findIndex(function(item){console.log(item+"======"+v.rowId);return item===v.rowId});console.log(exit);if(exit===-1){res.push(v)}});data.marketList=res;data.sceneSubmit.instList.forEach(function(v){var exit=sel.findIndex(function(item){return item===v.instCode});if(exit===-1){instList.push(v)}});data.sceneSubmit.instList=instList;var customObject=[];data.sceneSubmit.customObject.forEach(function(v){var exit=sel.findIndex(function(item){return item===v.rowId});if(exit===-1){customObject.push(v)}});data.sceneSubmit.customObject=customObject;var returnPop=[];data.returnPop.forEach(function(v){var exit=sel.findIndex(function(item){return item===v.rowId});if(exit===-1){returnPop.push(v)}});data.returnPop=returnPop}console.log(res);success()};',
                          },
                          line_number: 2,
                          callback1: [
                            {
                              type: 'callParentCustomFunc',
                              dataId: 166538786472054340,
                              options: {
                                compId: 'callParentCustomFunc',
                                compName: 'system',
                                id: '946334',
                                pageJsonId: '537892',
                                pathname: '/auditOrderPrepare',
                                pageId: '884045146848604160',
                                customFuncName: 'getFactor',
                                customFuncParams: '$data.sceneSubmit$',
                                modalPath: '/auditOrderPrepare',
                              },
                              line_number: 3,
                              callback1: [],
                              callback2: [],
                            },
                            {
                              type: 'setDataSource',
                              dataId: 166616767498982270,
                              options: {
                                compId: 'setDataSource',
                                compName: 'page',
                                id: '139859',
                                pageJsonId: '537892',
                                dataSourceId: 166519807387797900,
                                dataSourceName: 'marketList',
                                dataSourceRelType: 'custom',
                                dataSourceReloadFilter: [],
                                dataSourceSetValue: [
                                  {
                                    attrId: '252243',
                                    code: 'groupName',
                                    name: '集团名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '963826',
                                    code: 'tradeclassTopName',
                                    name: '行业类型',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '5031659',
                                    code: 'accountId',
                                    name: '账户ID',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '6377456',
                                    code: 'accountName',
                                    name: '账户名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '665968',
                                    code: 'income',
                                    name: '收入（经分取近一年）',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '754893',
                                    code: 'code',
                                    name: '营销案档次编码',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '6429123',
                                    code: 'name',
                                    name: '营销案名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '197527',
                                    code: 'marketStartTime',
                                    name: '营销案生效日期',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '2152803',
                                    code: 'marketEndTime',
                                    name: '营销案失效日期',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '017672',
                                    code: 'guarantee',
                                    name: '预存保底优惠',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '26139435',
                                    code: 'acceptMul',
                                    name: '受理倍数',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '62643',
                                    code: 'effectType',
                                    name: '生效类型',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '9425584',
                                    code: 'receiptsMoney',
                                    name: '实收金额',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '442519',
                                    code: 'lastDiscount',
                                    name: '最终折扣',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '8324622',
                                    code: 'rowId',
                                    name: '行ID',
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
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatagetTableSelectedKey95.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatagetTableSelectedKey95,
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
                ref={(r: any) => refs.setComponentRef(r, 'Button_026256')}
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
                title: '集团编码',
                key: 'groupId',
                dataIndex: 'groupId',
                id: '079966',
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
                title: '集团名称',
                key: 'groupName',
                dataIndex: 'groupName',
                className: 'divider',
                id: '884181',
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
                title: '集团价值等级',
                key: 'valueLevelName',
                dataIndex: 'valueLevelName',
                id: '238684',
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
                title: '行业类型',
                key: 'tradeclassTopName',
                dataIndex: 'tradeclassTopName',
                className: 'divider',
                id: '943683',
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
                title: '账户ID',
                key: 'accountId',
                dataIndex: 'accountId',
                className: 'divider',
                id: '3859167',
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
                title: '账户名称',
                key: 'accountName',
                dataIndex: 'accountName',
                className: 'divider',
                id: '449161',
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
                title: '收入（经分取近一年）',
                key: 'income',
                dataIndex: 'income',
                className: 'divider',
                id: '7784953',
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
                title: '营销案档次编码',
                key: 'code',
                dataIndex: 'code',
                id: '557581',
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
                title: '营销案名称',
                key: 'name',
                dataIndex: 'name',
                id: '63393',
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
                title: '营销案生效日期',
                key: 'marketStartTime',
                dataIndex: 'marketStartTime',
                className: 'divider',
                id: '3378048',
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
                title: '营销案失效日期',
                key: 'marketEndTime',
                dataIndex: 'marketEndTime',
                className: 'divider',
                id: '173185',
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
                title: '预存保底优惠',
                key: 'guarantee',
                dataIndex: 'guarantee',
                className: 'divider',
                id: '313029',
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
                title: '受理倍数',
                key: 'acceptMul',
                dataIndex: 'acceptMul',
                className: 'divider',
                id: '682673',
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
                title: '生效类型',
                key: 'effectType',
                dataIndex: 'effectType',
                className: 'divider',
                id: '6716603',
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
                title: '实收金额',
                key: 'receiptsMoney',
                dataIndex: 'receiptsMoney',
                className: 'divider',
                id: '95726',
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
                title: '最终折扣',
                key: 'lastDiscount',
                dataIndex: 'lastDiscount',
                id: '58810931',
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
            visible={true}
            editMode={'single'}
            selectType={'checkbox'}
            bordered={'segmentation'}
            size={'middle'}
            fixedAction={false}
            rowSelection={{ type: 'checkbox' }}
            showHead={false}
            showTotal={false}
            showSizeChanger={true}
            showQuickJumper={false}
            pageSizeOptions={'[5,10,20]'}
            dataSource={data?.marketList}
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
                id: '4390025',
                checked: true,
              },
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
            className={'nowrap'}
            dataSourceFromDataSourceConfig={'data.marketList'}
            $$componentItem={{
              id: 'Table_8700198',
              uid: 'Table_8700198',
              type: 'Table',
              ...componentItem,
            }}
            style={{ margin: '10px 0px 10px 0px' }}
            onRowEdit={(rowId: any, row: any, index: any) => {
              const eventDatacustomActionCode882: any = [
                {
                  type: 'customActionCode',
                  dataId: 166616796448653570,
                  options: {
                    compId: 'customActionCode',
                    compName: 'page',
                    id: '5478203',
                    pageJsonId: '537892',
                    code: 'function main(data,state,success,fail){var res={};console.log("\\u6253\\u5F00\\u6570\\u636E\\u6E90======");console.log(data.returnPop);console.log(rowId);data.returnPop.forEach(function(v){console.log(v.rowId===rowId);if(v.rowId===rowId){res=v}});success(res)};',
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'showCustomModal',
                      dataId: 166616827583285280,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '473149',
                        pageJsonId: '537892',
                        modalname: '/marketProdFee',
                        pageId: '899496798073884672',
                        paramsObj: {
                          feeInfo: '$row$',
                          catalogCode: '$state.catalogCode$',
                          popType: '1',
                          returnPop: '$data_5478203$',
                          sceneCode: 'U',
                        },
                        paramsObjKeyValueMap: {
                          feeInfo: '$row$',
                          catalogCode: '$state.catalogCode$',
                          popType: '1',
                          returnPop: '$data_5478203$',
                          sceneCode: 'U',
                        },
                        modalPath: '/marketProdFee',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'customActionCode',
                          dataId: 166616827583246460,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '2238184',
                            pageJsonId: '537892',
                            code: 'function main(data,state,success,fail){data.returnPop=data.returnPop.filter(function(v){return v.rowId!=okData_473149.rowId});console.log(data.returnPop);data.returnPop.push(okData_473149);var resObj={};var marketObj=okData_473149.marketObj;for(var key in marketObj){resObj[key]=marketObj[key]}var groupObj=okData_473149.groupObj;for(var key in groupObj){resObj[key]=groupObj[key]}data.marketList=data.marketList.filter(function(v){return v.rowId!=okData_473149.rowId});var instList=[];for(var key in resObj){instList.push({"attrCode":key,"attrName":"","attrValue":resObj[key]})}var instObj={"instCode":okData_473149.rowId,"instAttrList":instList};data.sceneSubmit.instList=data.sceneSubmit.instList.filter(function(v){return v.instCode!=okData_473149.rowId});data.sceneSubmit.customObject=data.sceneSubmit.customObject.filter(function(v){return v.rowId!=okData_473149.rowId});resObj.rowId=okData_473149.rowId;data.marketList.push(resObj);data.sceneSubmit.instList.push(instObj);data.sceneSubmit.customObject.push(okData_473149);success()};',
                          },
                          line_number: 3,
                          callback1: [
                            {
                              type: 'callParentCustomFunc',
                              dataId: 166616827583245380,
                              options: {
                                compId: 'callParentCustomFunc',
                                compName: 'system',
                                id: '1562885',
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
                            {
                              type: 'setDataSource',
                              dataId: 166616923113560400,
                              options: {
                                compId: 'setDataSource',
                                compName: 'page',
                                id: '670661',
                                pageJsonId: '537892',
                                dataSourceId: 166519807387797900,
                                dataSourceName: 'marketList',
                                dataSourceRelType: 'custom',
                                dataSourceReloadFilter: [],
                                dataSourceSetValue: [
                                  {
                                    attrId: '252243',
                                    code: 'groupName',
                                    name: '集团名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '963826',
                                    code: 'tradeclassTopName',
                                    name: '行业类型',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '5031659',
                                    code: 'accountId',
                                    name: '账户ID',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '6377456',
                                    code: 'accountName',
                                    name: '账户名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '665968',
                                    code: 'income',
                                    name: '收入（经分取近一年）',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '754893',
                                    code: 'code',
                                    name: '营销案档次编码',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '6429123',
                                    code: 'name',
                                    name: '营销案名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '197527',
                                    code: 'marketStartTime',
                                    name: '营销案生效日期',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '2152803',
                                    code: 'marketEndTime',
                                    name: '营销案失效日期',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '017672',
                                    code: 'guarantee',
                                    name: '预存保底优惠',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '26139435',
                                    code: 'acceptMul',
                                    name: '受理倍数',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '62643',
                                    code: 'effectType',
                                    name: '生效类型',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '9425584',
                                    code: 'receiptsMoney',
                                    name: '实收金额',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '442519',
                                    code: 'lastDiscount',
                                    name: '最终折扣',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '8324622',
                                    code: 'rowId',
                                    name: '行ID',
                                    type: 'string',
                                    initialData: { type: 'static' },
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
                      callback2: [],
                    },
                  ],
                  callback2: [],
                },
              ];
              eventDatacustomActionCode882.params =
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
                eventDatacustomActionCode882,
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
            onRowDetail={(rowId: any, row: any, index: any) => {
              const eventDatacustomActionCode883: any = [
                {
                  type: 'customActionCode',
                  dataId: 166623423756552930,
                  options: {
                    compId: 'customActionCode',
                    compName: 'page',
                    id: '531453',
                    pageJsonId: '537892',
                    code: 'function main(data,state,success,fail){var res={};data.returnPop.forEach(function(v){console.log(v.rowId===rowId);if(v.rowId===rowId){res=v}});success(res)};',
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'showCustomModal',
                      dataId: 166623423756594850,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '74601',
                        pageJsonId: '537892',
                        modalname: '/marketProdFee',
                        pageId: '899496798073884672',
                        paramsObj: {
                          feeInfo: '$row$',
                          catalogCode: '$state.catalogCode$',
                          popType: '1',
                          returnPop: '$data_531453$',
                          sceneCode: 'V',
                        },
                        paramsObjKeyValueMap: {
                          feeInfo: '$row$',
                          catalogCode: '$state.catalogCode$',
                          popType: '1',
                          returnPop: '$data_531453$',
                          sceneCode: 'V',
                        },
                        modalPath: '/marketProdFee',
                      },
                      line_number: 2,
                      callback1: [],
                      callback2: [],
                    },
                  ],
                  callback2: [],
                },
              ];
              eventDatacustomActionCode883.params =
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
                eventDatacustomActionCode883,
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
            ref={(r: any) => refs.setComponentRef(r, 'Table_8700198')}
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
                title: '集团编码',
                key: 'groupId',
                dataIndex: 'groupId',
                id: '079966',
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
                title: '集团名称',
                key: 'groupName',
                dataIndex: 'groupName',
                className: 'divider',
                id: '884181',
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
                title: '集团价值等级',
                key: 'valueLevelName',
                dataIndex: 'valueLevelName',
                id: '238684',
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
                title: '行业类型',
                key: 'tradeclassTopName',
                dataIndex: 'tradeclassTopName',
                className: 'divider',
                id: '943683',
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
                title: '账户ID',
                key: 'accountId',
                dataIndex: 'accountId',
                className: 'divider',
                id: '3859167',
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
                title: '账户名称',
                key: 'accountName',
                dataIndex: 'accountName',
                className: 'divider',
                id: '449161',
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
                title: '收入（经分取近一年）',
                key: 'income',
                dataIndex: 'income',
                className: 'divider',
                id: '7784953',
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
                title: '营销案档次编码',
                key: 'code',
                dataIndex: 'code',
                id: '557581',
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
                title: '营销案名称',
                key: 'name',
                dataIndex: 'name',
                id: '63393',
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
                title: '营销案生效日期',
                key: 'marketStartTime',
                dataIndex: 'marketStartTime',
                className: 'divider',
                id: '3378048',
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
                title: '营销案失效日期',
                key: 'marketEndTime',
                dataIndex: 'marketEndTime',
                className: 'divider',
                id: '173185',
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
                title: '预存保底优惠',
                key: 'guarantee',
                dataIndex: 'guarantee',
                className: 'divider',
                id: '313029',
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
                title: '受理倍数',
                key: 'acceptMul',
                dataIndex: 'acceptMul',
                className: 'divider',
                id: '682673',
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
                title: '生效类型',
                key: 'effectType',
                dataIndex: 'effectType',
                className: 'divider',
                id: '6716603',
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
                title: '实收金额',
                key: 'receiptsMoney',
                dataIndex: 'receiptsMoney',
                className: 'divider',
                id: '95726',
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
                title: '最终折扣',
                key: 'lastDiscount',
                dataIndex: 'lastDiscount',
                id: '58810931',
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
            visible={false}
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
            dataSource={data?.marketList}
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
                id: '4390025',
                checked: true,
              },
            ]}
            extend={[]}
            className={'nowrap'}
            dataSourceFromDataSourceConfig={'data.marketList'}
            $$componentItem={{
              id: 'Table_8700198_818742',
              uid: 'Table_8700198_818742',
              type: 'Table',
              ...componentItem,
            }}
            style={{ margin: '10px 0px 10px 0px' }}
            onRowEdit={(rowId: any, row: any, index: any) => {
              const eventDatacustomActionCode884: any = [
                {
                  type: 'customActionCode',
                  dataId: 166616796448653570,
                  options: {
                    compId: 'customActionCode',
                    compName: 'page',
                    id: '5478203',
                    pageJsonId: '537892',
                    code: 'function main(data,state,success,fail){var res={};console.log("\\u6253\\u5F00\\u6570\\u636E\\u6E90======");console.log(data.returnPop);console.log(rowId);data.returnPop.forEach(function(v){console.log(v.rowId===rowId);if(v.rowId===rowId){res=v}});success(res)};',
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'showCustomModal',
                      dataId: 166616827583285280,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '473149',
                        pageJsonId: '537892',
                        modalname: '/marketProdFee',
                        pageId: '899496798073884672',
                        paramsObj: {
                          feeInfo: '$row$',
                          catalogCode: '$state.catalogCode$',
                          popType: '1',
                          returnPop: '$data_5478203$',
                          sceneCode: 'U',
                        },
                        paramsObjKeyValueMap: {
                          feeInfo: '$row$',
                          catalogCode: '$state.catalogCode$',
                          popType: '1',
                          returnPop: '$data_5478203$',
                          sceneCode: 'U',
                        },
                        modalPath: '/marketProdFee',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'customActionCode',
                          dataId: 166616827583246460,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '2238184',
                            pageJsonId: '537892',
                            code: 'function main(data,state,success,fail){data.returnPop=data.returnPop.filter(function(v){return v.rowId!=okData_473149.rowId});console.log(data.returnPop);data.returnPop.push(okData_473149);var resObj={};var marketObj=okData_473149.marketObj;for(var key in marketObj){resObj[key]=marketObj[key]}var groupObj=okData_473149.groupObj;for(var key in groupObj){resObj[key]=groupObj[key]}data.marketList=data.marketList.filter(function(v){return v.rowId!=okData_473149.rowId});var instList=[];for(var key in resObj){instList.push({"attrCode":key,"attrName":"","attrValue":resObj[key]})}var instObj={"instCode":okData_473149.rowId,"instAttrList":instList};data.sceneSubmit.instList=data.sceneSubmit.instList.filter(function(v){return v.instCode!=okData_473149.rowId});data.sceneSubmit.customObject=data.sceneSubmit.customObject.filter(function(v){return v.rowId!=okData_473149.rowId});resObj.rowId=okData_473149.rowId;data.marketList.push(resObj);data.sceneSubmit.instList.push(instObj);data.sceneSubmit.customObject.push(okData_473149);success()};',
                          },
                          line_number: 3,
                          callback1: [
                            {
                              type: 'callParentCustomFunc',
                              dataId: 166616827583245380,
                              options: {
                                compId: 'callParentCustomFunc',
                                compName: 'system',
                                id: '1562885',
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
                            {
                              type: 'setDataSource',
                              dataId: 166616923113560400,
                              options: {
                                compId: 'setDataSource',
                                compName: 'page',
                                id: '670661',
                                pageJsonId: '537892',
                                dataSourceId: 166519807387797900,
                                dataSourceName: 'marketList',
                                dataSourceRelType: 'custom',
                                dataSourceReloadFilter: [],
                                dataSourceSetValue: [
                                  {
                                    attrId: '252243',
                                    code: 'groupName',
                                    name: '集团名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '963826',
                                    code: 'tradeclassTopName',
                                    name: '行业类型',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '5031659',
                                    code: 'accountId',
                                    name: '账户ID',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '6377456',
                                    code: 'accountName',
                                    name: '账户名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '665968',
                                    code: 'income',
                                    name: '收入（经分取近一年）',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '754893',
                                    code: 'code',
                                    name: '营销案档次编码',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '6429123',
                                    code: 'name',
                                    name: '营销案名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '197527',
                                    code: 'marketStartTime',
                                    name: '营销案生效日期',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '2152803',
                                    code: 'marketEndTime',
                                    name: '营销案失效日期',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '017672',
                                    code: 'guarantee',
                                    name: '预存保底优惠',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '26139435',
                                    code: 'acceptMul',
                                    name: '受理倍数',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '62643',
                                    code: 'effectType',
                                    name: '生效类型',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '9425584',
                                    code: 'receiptsMoney',
                                    name: '实收金额',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '442519',
                                    code: 'lastDiscount',
                                    name: '最终折扣',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '8324622',
                                    code: 'rowId',
                                    name: '行ID',
                                    type: 'string',
                                    initialData: { type: 'static' },
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
                      callback2: [],
                    },
                  ],
                  callback2: [],
                },
              ];
              eventDatacustomActionCode884.params =
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
                eventDatacustomActionCode884,
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
            onRowDetail={(rowId: any, row: any, index: any) => {
              const eventDatacustomActionCode885: any = [
                {
                  type: 'customActionCode',
                  dataId: 166623423756552930,
                  options: {
                    compId: 'customActionCode',
                    compName: 'page',
                    id: '531453',
                    pageJsonId: '537892',
                    code: 'function main(data,state,success,fail){var res={};data.returnPop.forEach(function(v){console.log(v.rowId===rowId);if(v.rowId===rowId){res=v}});success(res)};',
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'showCustomModal',
                      dataId: 166623423756594850,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '74601',
                        pageJsonId: '537892',
                        modalname: '/marketProdFee',
                        pageId: '899496798073884672',
                        paramsObj: {
                          feeInfo: '$row$',
                          catalogCode: '$state.catalogCode$',
                          popType: '1',
                          returnPop: '$data_531453$',
                          sceneCode: 'V',
                        },
                        paramsObjKeyValueMap: {
                          feeInfo: '$row$',
                          catalogCode: '$state.catalogCode$',
                          popType: '1',
                          returnPop: '$data_531453$',
                          sceneCode: 'V',
                        },
                        modalPath: '/marketProdFee',
                      },
                      line_number: 2,
                      callback1: [],
                      callback2: [],
                    },
                  ],
                  callback2: [],
                },
              ];
              eventDatacustomActionCode885.params =
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
                eventDatacustomActionCode885,
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
            ref={(r: any) => refs.setComponentRef(r, 'Table_8700198_818742')}
            {...injectData}
          />
          <Row
            name={'行容器'}
            visible={true}
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
              visible={true}
              header={'标题'}
              colSpace={12}
              rowSpace={16}
              formCode={'Form_395851'}
              $$componentItem={{
                id: 'Form_395851_1727917_9692158_9612234_1000722_434628_511208_810317_831823',
                uid: 'Form_395851_1727917_9692158_9612234_1000722_434628_511208_810317_831823',
                type: 'Form',
                ...componentItem,
              }}
              style={{ padding: '0px 0px 0px 0px', margin: '10px 0px 0px 0px' }}
              ref={(r: any) =>
                refs.setComponentRef(
                  r,
                  'Form_395851_1727917_9692158_9612234_1000722_434628_511208_810317_831823',
                )
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
                defaultValue={'0'}
                $$componentItem={{
                  id: 'Input_690228_5400337_280051_232429_7501497_288005_8195412_48663836_195013',
                  uid: 'Input_690228_5400337_280051_232429_7501497_288005_8195412_48663836_195013',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(
                    r,
                    'Input_690228_5400337_280051_232429_7501497_288005_8195412_48663836_195013',
                  )
                }
                {...injectData}
              />
              <View
                className="View_View_22346374_875512_926873_4359147_729981_339083_0134945_145611_770031"
                name={'布局容器'}
                visible={true}
                labelCol={8}
                wrapperCol={16}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_22346374_875512_926873_4359147_729981_339083_0134945_145611_770031',
                  uid: 'View_22346374_875512_926873_4359147_729981_339083_0134945_145611_770031',
                  type: 'View',
                  ...componentItem,
                }}
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
                  refs.setComponentRef(
                    r,
                    'View_22346374_875512_926873_4359147_729981_339083_0134945_145611_770031',
                  )
                }
                {...injectData}
              >
                <StdUpload
                  name={'附件上传'}
                  visible={true}
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
                    id: 'StdUpload_6230546_867413_538179_36057857_3505279_0434_242878_424019_133501',
                    uid: 'StdUpload_6230546_867413_538179_36057857_3505279_0434_242878_424019_133501',
                    type: 'StdUpload',
                    ...componentItem,
                  }}
                  style={{ margin: '0px 0px 0px 0px' }}
                  onFinishUpload={(
                    file: any,
                    fileList: any,
                    fileId: any,
                    fileSize: any,
                    fileName: any,
                    fileResponse: any,
                  ) => {
                    const eventDatagetSelectedData469: any = [
                      {
                        type: 'getSelectedData',
                        dataId: 166519843675080320,
                        options: {
                          compId:
                            'Input_690228_5400337_280051_232429_7501497_288005_8195412_48663836',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Select',
                          id: '859611',
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'setDataSource',
                            dataId: 166519844121505820,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '037208',
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
                                    code: '$selectedData_859611[0].value$',
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
                                    code: '$selectedData_859611[0].label$',
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
                                dataId: 166519844121565220,
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '2274718',
                                  pageJsonId: '537892',
                                  code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=data.fileInfoList;success(data.sceneSubmit)};',
                                },
                                line_number: 3,
                                callback1: [
                                  {
                                    type: 'console',
                                    dataId: 166519844121590940,
                                    options: {
                                      compId: 'debug',
                                      compName: 'system',
                                      id: '896244',
                                      pageJsonId: '537892',
                                      value: ['$data_2274718$'],
                                    },
                                    line_number: 4,
                                  },
                                  {
                                    type: 'callParentCustomFunc',
                                    dataId: 166519844121514300,
                                    options: {
                                      compId: 'callParentCustomFunc',
                                      compName: 'system',
                                      id: '4213476',
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
                            dataId: 166519844481672480,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '5656894',
                              pageJsonId: '537892',
                              type: 'error',
                              value: '请选择附件类型',
                            },
                            line_number: 6,
                          },
                        ],
                      },
                    ];
                    eventDatagetSelectedData469.params =
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
                      eventDatagetSelectedData469,
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
                    const eventDatacustomActionCode887: any = [
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
                    eventDatacustomActionCode887.params =
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
                      eventDatacustomActionCode887,
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
                      'StdUpload_6230546_867413_538179_36057857_3505279_0434_242878_424019_133501',
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
          visible={true}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_4949093',
            uid: 'View_4949093',
            type: 'View',
            ...componentItem,
          }}
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
            visible={true}
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
            style={{ margin: '10px 0px 0px 0px' }}
            onRowDelete={(rowId: any, row: any, index: any) => {
              const eventDatacustomActionCode888: any = [
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
              eventDatacustomActionCode888.params =
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
                eventDatacustomActionCode888,
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
              const eventDatadownloadByFileId126: any = [
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
              eventDatadownloadByFileId126.params =
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
                eventDatadownloadByFileId126,
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
      </View>
    </div>
  );
};

export default withPageHOC(ClsYx_0001_0001$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
