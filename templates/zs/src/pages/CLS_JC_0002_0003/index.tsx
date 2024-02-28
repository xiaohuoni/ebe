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
  StdUpload,
  Button,
  Table,
  TextArea,
  Row,
  Select,
} from '@/components/factory';

import BusiComp0521965 from '@/components/BusiComp0521965';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '1024496471728422912';
const ClsJc_0002_0003$$Page: React.FC<PageProps> = ({
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
  const fileUpload = (options_263015: any) => {
    const eventDatacustomActionCode131: any = [
      {
        type: 'customActionCode',
        dataId: 167282099511652930,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '98874',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=options_263015;success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'callParentCustomFunc',
            dataId: 167282102130123700,
            options: {
              compId: 'callParentCustomFunc',
              compName: 'system',
              id: '343456',
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
    eventDatacustomActionCode131.params =
      [
        {
          title: '事件入参',
          name: 'options_263015',
          value: '$options_263015$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode131,
      { options_263015 },
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
    const eventDataapiRequest389: any = [
      {
        type: 'apiRequest',
        dataId: 166977359252100830,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '297058',
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
            dataId: 166977359465177800,
            options: {
              compId: 'Input_690228_5400337_280051_232429_7501497',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '087468',
              labelKey: 'attrValueName',
              data: '$reply_297058?.resultData$',
              valueKey: 'attrValue',
            },
            line_number: 2,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest389.params = [] || [];
    CMDGenerator(eventDataapiRequest389, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest390: any = [
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
                  showInput: true,
                  _codePath: ['catalogCode'],
                  _idpath: ['154379'],
                },
                {
                  attrId: '4562264',
                  code: 'approveGrade',
                  name: '审批等级',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: { type: [], code: 'approveGrade' },
                  showInput: true,
                  _codePath: ['approveGrade'],
                  _idpath: ['4562264'],
                },
                {
                  attrId: '63768',
                  code: 'attrList',
                  name: '要素',
                  type: 'objectArray',
                  initialData: { type: 'static' },
                  value: { type: [], code: 'attrList' },
                  showInput: true,
                  _codePath: ['attrList'],
                  _idpath: ['63768'],
                },
                {
                  attrId: '919265',
                  code: 'fileInfo',
                  name: '附件',
                  type: 'objectArray',
                  initialData: { type: 'static' },
                  children: [],
                  value: { type: [], code: 'fileInfo' },
                  showInput: true,
                  _codePath: ['fileInfo'],
                  _idpath: ['919265'],
                },
                {
                  attrId: '360171',
                  code: 'catalogItemCode',
                  name: '类目项编码',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: { type: [], code: 'catalogItemCode' },
                  showInput: true,
                  _codePath: ['catalogItemCode'],
                  _idpath: ['360171'],
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
                  showInput: true,
                  _codePath: ['catalogItemSubType'],
                  _idpath: ['420623'],
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
                  showInput: true,
                  _codePath: ['childCatalogCode'],
                  _idpath: ['375466'],
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
                  showInput: true,
                  _codePath: ['parentCatalogCode'],
                  _idpath: ['9257773'],
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
                  showInput: true,
                  _codePath: ['parentCatalogItemCode'],
                  _idpath: ['5733013'],
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
                  showInput: true,
                  _codePath: ['childCatalogDesc'],
                  _idpath: ['440627'],
                },
                {
                  attrId: '177104',
                  code: 'approveGradeName',
                  name: '审批等级名称',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['approveGradeName'],
                  _idpath: ['177104'],
                },
                {
                  attrId: '13154521',
                  code: 'custMemberList',
                  name: '成员信息',
                  type: 'objectArray',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['custMemberList'],
                  _idpath: ['13154521'],
                },
                {
                  attrId: '1349543',
                  code: 'instList',
                  name: '实例信息',
                  type: 'objectArray',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['instList'],
                  _idpath: ['1349543'],
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
                dataId: 166444014329123680,
                options: {
                  compId: 'callParentCustomFunc',
                  compName: 'system',
                  id: '0768954',
                  pageJsonId: '537892',
                  pathname: '/auditOrderPrepare',
                  pageId: '884045146848604160',
                  customFuncName: 'getFactor',
                  customFuncParams: '$data.sceneSubmit$',
                  modalPath: '/auditOrderPrepare',
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
    eventDataapiRequest390.params = [] || [];
    CMDGenerator(eventDataapiRequest390, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse205: any = [
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
              code: 'function main(data,state,success,fail){console.log("itemList = ",state.itemList);var item=JSON.parse(JSON.stringify(state.itemList));data.sceneSubmit=JSON.parse(JSON.stringify(item));var instList=item.instList;var attrList=item.attrList;var factorForm={};var governList=[];if(!!attrList&&attrList.length>0){for(var i=0;i<attrList.length;i++){factorForm[attrList[i].attrCode]=attrList[i].attrValue}}if(!!instList&&instList.length>0){for(var _i=0;_i<instList.length;_i++){var instAttrList=instList[_i]["instAttrList"];var obj={};for(var j=0;j<instAttrList.length;j++){var attrObj=instAttrList[j];obj[attrObj["attrCode"]]=attrObj["attrValue"]}obj["rowId"]=instList[_i]["instCode"];governList.push(obj)}}data.sceneSubmit.approveGrade=item.approveGrade;data.sceneSubmit.approveGradeName=item.approveGradeName;console.log("factorForm = ",factorForm);console.log("governList = ",governList);success({factorForm:factorForm,governList:governList})};',
              actionTitle: '设置界面初始化值',
            },
            line_number: 7,
            callback1: [
              {
                type: 'setValue',
                dataId: 166392726700298140,
                options: {
                  compId: 'Input_361479_887285_2150708_936504_923334_755169',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '613165',
                  value: '$state.itemList.approveGradeName$',
                  valueList: {
                    Input_361479_887285_2150708_936504_923334_755169:
                      '$state.itemList.approveGradeName$',
                  },
                },
                line_number: 8,
                callback1: [],
              },
              {
                type: 'setDataSource',
                dataId: 169587073223506880,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '85538',
                  pageJsonId: '537892',
                  dataSourceId: 167049030475764160,
                  dataSourceName: 'factorForm',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      attrId: '044111',
                      code: 'reason',
                      name: '申请原因',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['context', '$data_9981685$'],
                        code: 'factorForm.reason',
                      },
                    },
                    {
                      attrId: '378379',
                      code: 'requirementState',
                      name: '需求说明',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['context', '$data_9981685$'],
                        code: 'factorForm.requirementState',
                      },
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  targetDataSourcePaths: [],
                },
                line_number: 9,
                callback1: [],
                callback2: [],
              },
              {
                type: 'setDataSource',
                dataId: 169587090138548900,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '8922442',
                  pageJsonId: '537892',
                  dataSourceId: 169586968478478050,
                  dataSourceName: 'governList',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      attrId: '847189',
                      code: 'city',
                      name: '地市',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['city'],
                      _idpath: ['847189'],
                    },
                    {
                      attrId: '9597404',
                      code: 'area',
                      name: '区县',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['area'],
                      _idpath: ['9597404'],
                    },
                    {
                      attrId: '559311',
                      code: 'msisdn',
                      name: '号码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['msisdn'],
                      _idpath: ['559311'],
                    },
                    {
                      attrId: '1304769',
                      code: 'groupId',
                      name: '集团编号',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['groupId'],
                      _idpath: ['1304769'],
                    },
                    {
                      attrId: '324973',
                      code: 'groupName',
                      name: '集团名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['groupName'],
                      _idpath: ['324973'],
                    },
                    {
                      attrId: '046158',
                      code: 'tradeclassTop',
                      name: '行业类型',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['tradeclassTop'],
                      _idpath: ['046158'],
                    },
                    {
                      attrId: '356797',
                      code: 'customerType',
                      name: '客户类型',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['customerType'],
                      _idpath: ['356797'],
                    },
                    {
                      attrId: '228194',
                      code: 'recommendEnsuredType',
                      name: '建议保障类型',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['recommendEnsuredType'],
                      _idpath: ['228194'],
                    },
                    {
                      attrId: '0882523',
                      code: 'expiredTime',
                      name: '到期时间',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['expiredTime'],
                      _idpath: ['0882523'],
                    },
                    {
                      attrId: '281531',
                      code: 'customerTypeName',
                      name: '客户类型名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['customerTypeName'],
                      _idpath: ['281531'],
                    },
                    {
                      attrId: '337453',
                      code: 'cityName',
                      name: '地市名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['cityName'],
                      _idpath: ['337453'],
                    },
                    {
                      attrId: '522236',
                      code: 'areaName',
                      name: '区县名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['areaName'],
                      _idpath: ['522236'],
                    },
                    {
                      attrId: '878582',
                      code: 'recommendEnsuredTypeName',
                      name: '建议保障类型名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['recommendEnsuredTypeName'],
                      _idpath: ['878582'],
                    },
                    {
                      attrId: '6850353',
                      code: 'tradeclassTopName',
                      name: '行业类型名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['tradeclassTopName'],
                      _idpath: ['6850353'],
                    },
                  ],
                  newData: '$data_9981685.governList$',
                  operateType: 3,
                  onlySetPatch: false,
                  otherObjectArrayOptions: {},
                  targetDataSourcePaths: [],
                },
                line_number: 10,
                callback1: [],
                callback2: [],
              },
              {
                type: 'console',
                dataId: 169681788049768930,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '801431',
                  pageJsonId: '537892',
                  value: ['$data_9981685$', '1111'],
                },
                line_number: 11,
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
              code: 'function main(data,state,success,fail){var item=state.itemList;success(item.fileInfo)};',
            },
            line_number: 12,
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
                line_number: 13,
                callback1: [],
                callback2: [],
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '800487',
                    options: { context: '$data_859603$', operate: 'empty' },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166746009035238530,
                elseIfs: [],
                line_number: 14,
                callback1: [
                  {
                    type: 'setVisible',
                    dataId: 166746010413491800,
                    options: {
                      compId: 'Table_5369494',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Table',
                      id: '84579146',
                      visible: '',
                    },
                    line_number: 15,
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
            line_number: 16,
            callback1: [
              {
                type: 'setVisible',
                dataId: 166392734796303840,
                options: {
                  compId: [
                    'Input_361479_887285_2150708_936504_923334_755169',
                    'Table_8700198_829382',
                    'Table_6226137',
                  ],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '510887',
                  visible: 'true',
                  compid: [
                    'Input_361479_887285_2150708_936504_923334_755169',
                    'Table_8700198_829382',
                    'Table_6226137',
                  ],
                },
                line_number: 17,
              },
              {
                type: 'sysSetVisible',
                dataId: 167592869837733200,
                options: {
                  compId: [
                    'Row_851124',
                    'Button_683498',
                    'Button_026256',
                    'StdUpload_4835215',
                    'Button_050256',
                  ],
                  compName: 'page',
                  id: '142487',
                  pageJsonId: '537892',
                  visible: '',
                  compid: [
                    'Row_851124',
                    'Button_683498',
                    'Button_026256',
                    'StdUpload_4835215',
                    'Button_050256',
                  ],
                },
                line_number: 18,
              },
              {
                type: 'setVisible',
                dataId: 167592837832486370,
                shielding: true,
                options: {
                  compId: ['Table_8700198_829382'],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Table',
                  id: '755512',
                  visible: 'true',
                  compid: ['Table_8700198_829382'],
                },
                line_number: 19,
              },
              {
                type: 'setDisable',
                dataId: 166392738103528860,
                options: {
                  compId: [
                    'Input_361479_887285_2150708_936504_923334_755169',
                    'Form_345819',
                  ],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '075526',
                  disabled: 'true',
                  compid: [
                    'Input_361479_887285_2150708_936504_923334_755169',
                    'Form_345819',
                  ],
                },
                line_number: 20,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse205.params = [] || [];
    CMDGenerator(eventDataifelse205, {}, 'ifelse', {
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
          dividerText={'骚扰治理保障名单审批单'}
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
          ref={(r: any) => refs.setComponentRef(r, 'Divider_52558')}
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
            overflowY: 'hidden',
            height: 'fit-content',
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
              height: 'fit-content',
              overflowY: 'hidden',
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
                height: 'fit-content',
                overflowY: 'hidden',
                margin: '0px 0px 0px 0px',
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
                  id: 'Form_4311097_9385662_8411515_9167293_4337769',
                  uid: 'Form_4311097_9385662_8411515_9167293_4337769',
                  type: 'Form',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) =>
                  refs.setComponentRef(
                    r,
                    'Form_4311097_9385662_8411515_9167293_4337769',
                  )
                }
                {...injectData}
              >
                <Checkbox
                  name={'审批场景'}
                  titleTip={'text'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  text={'骚扰治理保障名单审批单'}
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
                    id: 'Checkbox_882584_5289015_934499_355644_646764_5265724',
                    uid: 'Checkbox_882584_5289015_934499_355644_646764_5265724',
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
                      'Checkbox_882584_5289015_934499_355644_646764_5265724',
                    )
                  }
                  {...injectData}
                />
                <View
                  className="View_View_6319234"
                  name={'布局容器'}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_6319234',
                    uid: 'View_6319234',
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
                  ref={(r: any) => refs.setComponentRef(r, 'View_6319234')}
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
                    id: 'Input_361479_887285_2150708_936504_923334_755169',
                    uid: 'Input_361479_887285_2150708_936504_923334_755169',
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
                      'Input_361479_887285_2150708_936504_923334_755169',
                    )
                  }
                  {...injectData}
                />
              </Form>
            </View>
          </HorizontalView>
          <View
            className="View_View_278839"
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_278839',
              uid: 'View_278839',
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
              width: 'auto',
              margin: 'px px px px',
              textAlign: 'left',
              justifyContent: 'flex-end',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_278839')}
            {...injectData}
          >
            <StdUpload
              name={'文件上传'}
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
              uploadText={'文件上传'}
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
              icon={{
                type: undefined,
                theme: 'outlined',
                fontAddress: '',
                isIconFont: false,
                iconFileInfo: {},
              }}
              $$componentItem={{
                id: 'StdUpload_4835215',
                uid: 'StdUpload_4835215',
                type: 'StdUpload',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ margin: '0px 0px 0px 0px', flex: '' }}
              onFinishUpload={(
                file: any,
                fileList: any,
                fileResponseList: any,
                fileId: any,
                fileSize: any,
                fileName: any,
                fileResponse: any,
              ) => {
                const eventDatasetLoading190: any = [
                  {
                    type: 'setLoading',
                    dataId: 167698813394378880,
                    options: {
                      compId: 'Table_8700198',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Table',
                      id: '446395',
                      loading: true,
                    },
                    line_number: 1,
                  },
                ];
                eventDatasetLoading190.params =
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
                  eventDatasetLoading190,
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
                const eventDataapiRequest748: any = [
                  {
                    type: 'apiRequest',
                    dataId: 167325544278456860,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '144156',
                      pageJsonId: '537892',
                      sync: false,
                      actionTitle: '',
                      method: 'post',
                      url: '/app/rhin/gateway/callRhinEngine',
                      _capabilityCode: 'analyzeExcelWithEasyExcel',
                      _apiCode: 'analyzeExcelWithEasyExcel',
                      _source: 'rhin',
                      _serviceId: '1037239170199089152',
                      _serviceTitle:
                        '使用EasyExcel解析Excel-hyj: analyzeExcelWithEasyExcel',
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
                              parentType: 'object',
                              parentKey: '0',
                              key: '0-0',
                              id: 'root.header',
                              dataKey: '144156_root.header',
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
                              dataKey: '144156_root.path',
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
                              dataKey: '144156_root.query',
                            },
                            {
                              code: 'body',
                              name: '请求体',
                              attrType: 'object',
                              children: [
                                {
                                  code: 'fileCode',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'root.body.fileCode',
                                  compType: 'Input',
                                  name: 'fileCode',
                                  parents: ['root', 'body'],
                                  parentType: 'object',
                                  parentKey: '0-3',
                                  key: '0-3-0',
                                  id: 'root.body.fileCode',
                                  dataKey: '144156_root.body.fileCode',
                                  value: {
                                    type: [
                                      'context',
                                      '$file?.response?.resultObject?.fileId$',
                                    ],
                                    code: '',
                                  },
                                },
                                {
                                  code: 'sceneCode',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'root.body.sceneCode',
                                  compType: 'Input',
                                  name: 'sceneCode',
                                  parents: ['root', 'body'],
                                  parentType: 'object',
                                  parentKey: '0-3',
                                  key: '0-3-1',
                                  id: 'root.body.sceneCode',
                                  dataKey: '144156_root.body.sceneCode',
                                  value: {
                                    type: ['customize'],
                                    code: 'CLS_JC_0002_0003',
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
                              dataKey: '144156_root.body',
                            },
                          ],
                          _id: 'root',
                          compType: 'Input',
                          isRoot: true,
                          parents: [],
                          key: '0',
                          id: 'root',
                          dataKey: '144156_root',
                        },
                      ],
                      _sourceName: '使用EasyExcel解析Excel-hyj',
                      valueType: 'object',
                      _requestType: 'object',
                    },
                    line_number: 2,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '760526',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$reply_144156.resultCode$',
                              operate: '==',
                              manualValue: '0',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                          {
                            options: {
                              context: '$reply_144156?.resultMsg$',
                              operate: 'notEmpty',
                            },
                            condId: '207649',
                            connector: '&&',
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                          {
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$reply_144156?.resultMsg$',
                              operate: '!=',
                              manualValue: 'SUCCESS',
                            },
                            condId: '93763',
                            connector: '&&',
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 167642816245442270,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 167642819835868160,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 169684012766310700,
                                children: [
                                  {
                                    dataName: 'callback',
                                    dataId: 169684012766357060,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 169684019072139600,
                                        children: [
                                          {
                                            dataName: 'callback',
                                            dataId: 169684019072175970,
                                            children: [
                                              {
                                                dataName: 'action',
                                                dataId: 169684019072164450,
                                                children: [
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 169684019072170430,
                                                    children: [],
                                                    value: 'callback1',
                                                    params: [],
                                                  },
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 169684019072155420,
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
                                                  id: '6307605',
                                                  pageJsonId: '537892',
                                                  dataSourceId: 169586968478478050,
                                                  dataSourceName: 'governList',
                                                  dataSourceRelType: 'custom',
                                                  dataSourceSetValue: [
                                                    {
                                                      attrId: '847189',
                                                      code: 'city',
                                                      name: '地市',
                                                      type: 'string',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      showInput: false,
                                                    },
                                                    {
                                                      attrId: '9597404',
                                                      code: 'area',
                                                      name: '区县',
                                                      type: 'string',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      showInput: false,
                                                    },
                                                    {
                                                      attrId: '559311',
                                                      code: 'num',
                                                      name: '号码',
                                                      type: 'string',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      showInput: false,
                                                    },
                                                    {
                                                      attrId: '1304769',
                                                      code: 'groupId',
                                                      name: '集团编号',
                                                      type: 'string',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      showInput: false,
                                                    },
                                                    {
                                                      attrId: '324973',
                                                      code: 'groupName',
                                                      name: '集团名称',
                                                      type: 'string',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      showInput: false,
                                                    },
                                                    {
                                                      attrId: '046158',
                                                      code: 'industryType',
                                                      name: '行业类型',
                                                      type: 'string',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      showInput: false,
                                                    },
                                                    {
                                                      attrId: '356797',
                                                      code: 'customerType',
                                                      name: '客户类型',
                                                      type: 'string',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      showInput: false,
                                                    },
                                                    {
                                                      attrId: '228194',
                                                      code: 'recommendEnsuredType',
                                                      name: '建议保障类型',
                                                      type: 'string',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      showInput: false,
                                                    },
                                                    {
                                                      attrId: '0882523',
                                                      code: 'expiredTime',
                                                      name: '到期时间',
                                                      type: 'string',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      showInput: false,
                                                    },
                                                  ],
                                                  newData: '$data_469841$',
                                                  operateType: 3,
                                                  onlySetPatch: true,
                                                  otherObjectArrayOptions: {},
                                                  targetDataSourcePaths: [],
                                                },
                                                actionObjId: 'setDataSource',
                                                actionObjName: 'page',
                                                value: 'setDataSource',
                                                line_number: 9,
                                              },
                                              {
                                                dataName: 'action',
                                                dataId: 169684019072141980,
                                                children: [
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 169684019072151360,
                                                    children: [
                                                      {
                                                        dataName: 'action',
                                                        dataId: 169684019072151940,
                                                        children: [
                                                          {
                                                            dataName:
                                                              'callback',
                                                            dataId: 169684019072169950,
                                                            children: [
                                                              {
                                                                dataName:
                                                                  'action',
                                                                dataId: 169684019072119000,
                                                                children: [],
                                                                todoOptions: [
                                                                  'msgType',
                                                                  'value',
                                                                  'duration',
                                                                ],
                                                                options: {
                                                                  compId:
                                                                    'showMessage',
                                                                  compName:
                                                                    'system',
                                                                  id: '898494',
                                                                  pageJsonId:
                                                                    '537892',
                                                                  type: 'success',
                                                                  value:
                                                                    '上传成功！',
                                                                },
                                                                actionObjId:
                                                                  'showMessage',
                                                                actionObjName:
                                                                  'system',
                                                                value:
                                                                  'showMessage',
                                                                tips: '注意：当加载时长为0时，表示一直显示加载中。当加载时长大于0时，表示按照设置时间显示加载中。',
                                                                line_number: 12,
                                                              },
                                                            ],
                                                            value: 'callback1',
                                                            params: [],
                                                          },
                                                          {
                                                            dataName:
                                                              'callback',
                                                            dataId: 169684019072180220,
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
                                                          id: '899181',
                                                          pageJsonId: '537892',
                                                          pathname:
                                                            '/auditOrderPrepare',
                                                          pageId:
                                                            '884045146848604160',
                                                          modalPath:
                                                            '/auditOrderPrepare',
                                                          customFuncName:
                                                            'getFactor',
                                                          customFuncParams:
                                                            '$data.sceneSubmit$',
                                                        },
                                                        actionObjId:
                                                          'callParentCustomFunc',
                                                        actionObjName: 'system',
                                                        value:
                                                          'callParentCustomFunc',
                                                        line_number: 11,
                                                      },
                                                    ],
                                                    value: 'callback1',
                                                    params: [],
                                                  },
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 169684019072132220,
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
                                                  id: '889629',
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
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      showInput: true,
                                                    },
                                                    {
                                                      attrId: '4562264',
                                                      code: 'approveGrade',
                                                      name: '审批等级',
                                                      type: 'string',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      showInput: true,
                                                    },
                                                    {
                                                      attrId: '63768',
                                                      code: 'attrList',
                                                      name: '要素',
                                                      type: 'objectArray',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      showInput: true,
                                                      value: {
                                                        type: [
                                                          'context',
                                                          '$data_98415$',
                                                        ],
                                                        code: 'attrList',
                                                      },
                                                    },
                                                    {
                                                      attrId: '919265',
                                                      code: 'fileInfo',
                                                      name: '附件',
                                                      type: 'objectArray',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      children: [],
                                                      showInput: true,
                                                    },
                                                    {
                                                      attrId: '360171',
                                                      code: 'catalogItemCode',
                                                      name: '类目项编码',
                                                      type: 'string',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      showInput: true,
                                                    },
                                                    {
                                                      attrId: '420623',
                                                      code: 'catalogItemSubType',
                                                      name: '类目项子类型',
                                                      type: 'string',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      showInput: true,
                                                    },
                                                    {
                                                      attrId: '375466',
                                                      code: 'childCatalogCode',
                                                      name: '子类目项编码',
                                                      type: 'string',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      showInput: true,
                                                    },
                                                    {
                                                      attrId: '9257773',
                                                      code: 'parentCatalogCode',
                                                      name: '上级类目编码',
                                                      type: 'string',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      showInput: true,
                                                    },
                                                    {
                                                      attrId: '5733013',
                                                      code: 'parentCatalogItemCode',
                                                      name: '上级类目项编码',
                                                      type: 'string',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      showInput: true,
                                                    },
                                                    {
                                                      attrId: '440627',
                                                      code: 'childCatalogDesc',
                                                      name: '子类目项描述',
                                                      type: 'string',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      showInput: true,
                                                    },
                                                    {
                                                      attrId: '177104',
                                                      code: 'approveGradeName',
                                                      name: '审批等级名称',
                                                      type: 'string',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      showInput: true,
                                                    },
                                                    {
                                                      attrId: '13154521',
                                                      code: 'custMemberList',
                                                      name: '成员信息',
                                                      type: 'objectArray',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      showInput: true,
                                                    },
                                                    {
                                                      attrId: '1349543',
                                                      code: 'instList',
                                                      name: '实例信息',
                                                      type: 'objectArray',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                      showInput: true,
                                                      value: {
                                                        type: [
                                                          'context',
                                                          '$data_98415$',
                                                        ],
                                                        code: 'instList',
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
                                                line_number: 10,
                                              },
                                            ],
                                            value: 'callback1',
                                            params: [],
                                          },
                                          {
                                            dataName: 'callback',
                                            dataId: 169684019072181120,
                                            children: [
                                              {
                                                dataName: 'action',
                                                dataId: 169684019072187230,
                                                children: [],
                                                todoOptions: [
                                                  'msgType',
                                                  'value',
                                                  'duration',
                                                ],
                                                options: {
                                                  compId: 'showMessage',
                                                  compName: 'system',
                                                  id: '061989',
                                                  pageJsonId: '537892',
                                                  type: 'error',
                                                  value: '$fail_98415$',
                                                },
                                                actionObjId: 'showMessage',
                                                actionObjName: 'system',
                                                value: 'showMessage',
                                                tips: '注意：当加载时长为0时，表示一直显示加载中。当加载时长大于0时，表示按照设置时间显示加载中。',
                                                line_number: 13,
                                              },
                                            ],
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
                                          id: '98415',
                                          pageJsonId: '537892',
                                          code: 'function main(data,state,success,fail){var governList=data_469841||[];var instList=[];for(var i=0;i<governList.length;i++){var obj=governList[i];var instAttrList=[];for(var key in obj){instAttrList.push({"attrCode":key,"attrValue":obj[key]})}var instCode=obj["rowId"];instList.push({instCode:instCode,instAttrList:instAttrList})}var factorForm=data.factorForm||{};var attrList=[];for(var _key in factorForm){attrList.push({"attrCode":_key,"attrValue":factorForm[_key]})}data.sceneSubmit.attrList=attrList;data.sceneSubmit.instList=instList;console.log("attrList = ",attrList);console.log("instList = ",instList);success(data.sceneSubmit)};',
                                        },
                                        actionObjId: 'customActionCode',
                                        actionObjName: 'page',
                                        value: 'customActionCode',
                                        tips: '注意：如果需要配合退出事件，请在代码块中增加return true',
                                        line_number: 8,
                                      },
                                    ],
                                    value: 'callback1',
                                    params: [],
                                  },
                                  {
                                    dataName: 'callback',
                                    dataId: 169684012766352030,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 169684447342283200,
                                        children: [],
                                        todoOptions: ['valueArray'],
                                        options: {
                                          compId: 'debug',
                                          compName: 'system',
                                          id: '499506',
                                          pageJsonId: '537892',
                                          value: ['$fail_469841$'],
                                        },
                                        actionObjId: 'debug',
                                        actionObjName: 'system',
                                        value: 'console',
                                        line_number: 14,
                                      },
                                      {
                                        dataName: 'action',
                                        dataId: 169684473822507900,
                                        children: [],
                                        todoOptions: [
                                          'msgType',
                                          'value',
                                          'duration',
                                        ],
                                        options: {
                                          compId: 'showMessage',
                                          compName: 'system',
                                          id: '879764',
                                          pageJsonId: '537892',
                                          type: 'warn',
                                          value: '$fail_469841$',
                                          duration: 1,
                                        },
                                        actionObjId: 'showMessage',
                                        actionObjName: 'system',
                                        value: 'showMessage',
                                        tips: '注意：当加载时长为0时，表示一直显示加载中。当加载时长大于0时，表示按照设置时间显示加载中。',
                                        line_number: 15,
                                      },
                                    ],
                                    value: 'callback2',
                                    params: [],
                                  },
                                ],
                                todoOptions: ['actionTitle', 'editorCode'],
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '469841',
                                  pageJsonId: '537892',
                                  code: 'function main(data,state,success,fail){var governList=JSON.parse(reply_144156.resultData||"[]");console.log("====\\u6587\\u4EF6\\u89E3\\u6790\\u8FD4\\u56DE\\u6570\\u636E:",governList);success(governList)};',
                                },
                                actionObjId: 'customActionCode',
                                actionObjName: 'page',
                                value: 'customActionCode',
                                line_number: 7,
                              },
                            ],
                            condition: [
                              {
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context: '$reply_144156.resultCode$',
                                  operate: '==',
                                  manualValue: '0',
                                },
                                condId: '7012666',
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            callback: [
                              {
                                type: 'customActionCode',
                                dataId: 169684012766310700,
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '469841',
                                  pageJsonId: '537892',
                                  code: 'function main(data,state,success,fail){var governList=JSON.parse(reply_144156.resultData||"[]");console.log("====\\u6587\\u4EF6\\u89E3\\u6790\\u8FD4\\u56DE\\u6570\\u636E:",governList);success(governList)};',
                                },
                                line_number: 7,
                                callback1: [
                                  {
                                    type: 'customActionCode',
                                    dataId: 169684019072139600,
                                    options: {
                                      compId: 'customActionCode',
                                      compName: 'page',
                                      id: '98415',
                                      pageJsonId: '537892',
                                      code: 'function main(data,state,success,fail){var governList=data_469841||[];var instList=[];for(var i=0;i<governList.length;i++){var obj=governList[i];var instAttrList=[];for(var key in obj){instAttrList.push({"attrCode":key,"attrValue":obj[key]})}var instCode=obj["rowId"];instList.push({instCode:instCode,instAttrList:instAttrList})}var factorForm=data.factorForm||{};var attrList=[];for(var _key in factorForm){attrList.push({"attrCode":_key,"attrValue":factorForm[_key]})}data.sceneSubmit.attrList=attrList;data.sceneSubmit.instList=instList;console.log("attrList = ",attrList);console.log("instList = ",instList);success(data.sceneSubmit)};',
                                    },
                                    line_number: 8,
                                    callback1: [
                                      {
                                        type: 'setDataSource',
                                        dataId: 169684019072164450,
                                        options: {
                                          compId: 'setDataSource',
                                          compName: 'page',
                                          id: '6307605',
                                          pageJsonId: '537892',
                                          dataSourceId: 169586968478478050,
                                          dataSourceName: 'governList',
                                          dataSourceRelType: 'custom',
                                          dataSourceSetValue: [
                                            {
                                              attrId: '847189',
                                              code: 'city',
                                              name: '地市',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: false,
                                            },
                                            {
                                              attrId: '9597404',
                                              code: 'area',
                                              name: '区县',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: false,
                                            },
                                            {
                                              attrId: '559311',
                                              code: 'num',
                                              name: '号码',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: false,
                                            },
                                            {
                                              attrId: '1304769',
                                              code: 'groupId',
                                              name: '集团编号',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: false,
                                            },
                                            {
                                              attrId: '324973',
                                              code: 'groupName',
                                              name: '集团名称',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: false,
                                            },
                                            {
                                              attrId: '046158',
                                              code: 'industryType',
                                              name: '行业类型',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: false,
                                            },
                                            {
                                              attrId: '356797',
                                              code: 'customerType',
                                              name: '客户类型',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: false,
                                            },
                                            {
                                              attrId: '228194',
                                              code: 'recommendEnsuredType',
                                              name: '建议保障类型',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: false,
                                            },
                                            {
                                              attrId: '0882523',
                                              code: 'expiredTime',
                                              name: '到期时间',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: false,
                                            },
                                          ],
                                          newData: '$data_469841$',
                                          operateType: 3,
                                          onlySetPatch: true,
                                          otherObjectArrayOptions: {},
                                          targetDataSourcePaths: [],
                                        },
                                        line_number: 9,
                                        callback1: [],
                                        callback2: [],
                                      },
                                      {
                                        type: 'setDataSource',
                                        dataId: 169684019072141980,
                                        options: {
                                          compId: 'setDataSource',
                                          compName: 'page',
                                          id: '889629',
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
                                              showInput: true,
                                            },
                                            {
                                              attrId: '4562264',
                                              code: 'approveGrade',
                                              name: '审批等级',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: true,
                                            },
                                            {
                                              attrId: '63768',
                                              code: 'attrList',
                                              name: '要素',
                                              type: 'objectArray',
                                              initialData: { type: 'static' },
                                              showInput: true,
                                              value: {
                                                type: [
                                                  'context',
                                                  '$data_98415$',
                                                ],
                                                code: 'attrList',
                                              },
                                            },
                                            {
                                              attrId: '919265',
                                              code: 'fileInfo',
                                              name: '附件',
                                              type: 'objectArray',
                                              initialData: { type: 'static' },
                                              children: [],
                                              showInput: true,
                                            },
                                            {
                                              attrId: '360171',
                                              code: 'catalogItemCode',
                                              name: '类目项编码',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: true,
                                            },
                                            {
                                              attrId: '420623',
                                              code: 'catalogItemSubType',
                                              name: '类目项子类型',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: true,
                                            },
                                            {
                                              attrId: '375466',
                                              code: 'childCatalogCode',
                                              name: '子类目项编码',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: true,
                                            },
                                            {
                                              attrId: '9257773',
                                              code: 'parentCatalogCode',
                                              name: '上级类目编码',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: true,
                                            },
                                            {
                                              attrId: '5733013',
                                              code: 'parentCatalogItemCode',
                                              name: '上级类目项编码',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: true,
                                            },
                                            {
                                              attrId: '440627',
                                              code: 'childCatalogDesc',
                                              name: '子类目项描述',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: true,
                                            },
                                            {
                                              attrId: '177104',
                                              code: 'approveGradeName',
                                              name: '审批等级名称',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: true,
                                            },
                                            {
                                              attrId: '13154521',
                                              code: 'custMemberList',
                                              name: '成员信息',
                                              type: 'objectArray',
                                              initialData: { type: 'static' },
                                              showInput: true,
                                            },
                                            {
                                              attrId: '1349543',
                                              code: 'instList',
                                              name: '实例信息',
                                              type: 'objectArray',
                                              initialData: { type: 'static' },
                                              showInput: true,
                                              value: {
                                                type: [
                                                  'context',
                                                  '$data_98415$',
                                                ],
                                                code: 'instList',
                                              },
                                            },
                                          ],
                                          operateType: 1,
                                          onlySetPatch: true,
                                          otherObjectArrayOptions: {},
                                          targetDataSourcePaths: [],
                                        },
                                        line_number: 10,
                                        callback1: [
                                          {
                                            type: 'callParentCustomFunc',
                                            dataId: 169684019072151940,
                                            options: {
                                              compId: 'callParentCustomFunc',
                                              compName: 'system',
                                              id: '899181',
                                              pageJsonId: '537892',
                                              pathname: '/auditOrderPrepare',
                                              pageId: '884045146848604160',
                                              modalPath: '/auditOrderPrepare',
                                              customFuncName: 'getFactor',
                                              customFuncParams:
                                                '$data.sceneSubmit$',
                                            },
                                            line_number: 11,
                                            callback1: [
                                              {
                                                type: 'showMessage',
                                                dataId: 169684019072119000,
                                                options: {
                                                  compId: 'showMessage',
                                                  compName: 'system',
                                                  id: '898494',
                                                  pageJsonId: '537892',
                                                  type: 'success',
                                                  value: '上传成功！',
                                                },
                                                line_number: 12,
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
                                        dataId: 169684019072187230,
                                        options: {
                                          compId: 'showMessage',
                                          compName: 'system',
                                          id: '061989',
                                          pageJsonId: '537892',
                                          type: 'error',
                                          value: '$fail_98415$',
                                        },
                                        line_number: 13,
                                      },
                                    ],
                                  },
                                ],
                                callback2: [
                                  {
                                    type: 'console',
                                    dataId: 169684447342283200,
                                    options: {
                                      compId: 'debug',
                                      compName: 'system',
                                      id: '499506',
                                      pageJsonId: '537892',
                                      value: ['$fail_469841$'],
                                    },
                                    line_number: 14,
                                  },
                                  {
                                    type: 'showMessage',
                                    dataId: 169684473822507900,
                                    options: {
                                      compId: 'showMessage',
                                      compName: 'system',
                                      id: '879764',
                                      pageJsonId: '537892',
                                      type: 'warn',
                                      value: '$fail_469841$',
                                      duration: 1,
                                    },
                                    line_number: 15,
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                        line_number: 3,
                        callback1: [
                          {
                            type: 'customActionCode',
                            dataId: 169897908508031970,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '041851',
                              pageJsonId: '537892',
                              code: 'function main(data,state,success,fail){var _reply_;var errorList=JSON.parse(((_reply_=reply_144156)===null||_reply_===void 0?void 0:_reply_.resultMsg)||"[]");var finalList=[];for(var i=0;i<errorList.length;i++){finalList.push({"errorMsg":errorList[i],"rowId":i+1})}success(finalList)};',
                            },
                            line_number: 4,
                            callback1: [
                              {
                                type: 'console',
                                dataId: 169897948689498660,
                                options: {
                                  compId: 'debug',
                                  compName: 'system',
                                  id: '9566143',
                                  pageJsonId: '537892',
                                  value: ['finalList = ', '$data_041851$'],
                                },
                                line_number: 5,
                              },
                              {
                                type: 'showCustomModal',
                                dataId: 169897922241020580,
                                options: {
                                  compId: 'showCustomModal',
                                  compName: 'page',
                                  id: '376063774',
                                  pageJsonId: '537892',
                                  modalname: '/cuowuxinxi0064',
                                  pageId: '1037555797777207296',
                                  modalPath: '/cuowuxinxi0064',
                                  paramsObj: { errorList: '$data_041851$' },
                                  paramsObjKeyValueMap: {
                                    errorList: '$data_041851$',
                                  },
                                },
                                line_number: 6,
                                callback1: [],
                                callback2: [],
                              },
                            ],
                            callback2: [],
                          },
                        ],
                      },
                      {
                        type: 'setLoading',
                        dataId: 167698814226621540,
                        options: {
                          compId: 'Table_8700198',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Table',
                          id: '4908711',
                          loading: false,
                        },
                        line_number: 16,
                      },
                    ],
                    callback2: [
                      {
                        type: 'setLoading',
                        dataId: 167817590090844800,
                        options: {
                          compId: 'Table_8700198',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Table',
                          id: '30557554',
                          loading: false,
                        },
                        line_number: 17,
                      },
                    ],
                  },
                ];
                eventDataapiRequest748.params =
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
                  eventDataapiRequest748,
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
                const eventDatacustomActionCode632: any = [
                  {
                    type: 'customActionCode',
                    dataId: 167325632512652740,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '759942',
                      pageJsonId: '537892',
                      code: 'function main(data,state,success,fail){document.querySelectorAll(".pcfactory-upload-list-text").forEach(function(v){v.style.display="none"})};',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacustomActionCode632.params =
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
                  eventDatacustomActionCode632,
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
              ref={(r: any) => refs.setComponentRef(r, 'StdUpload_4835215')}
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
                id: 'Button_050256',
                uid: 'Button_050256',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ width: 'fit-content', margin: '0px 8px 0px 8px' }}
              onClick={(e: any) => {
                const eventDatasetLoading191: any = [
                  {
                    type: 'setLoading',
                    dataId: 169588132276288740,
                    options: {
                      compId: 'Button_050256',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Button',
                      id: '64165',
                      loading: true,
                    },
                    line_number: 1,
                  },
                ];
                eventDatasetLoading191.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatasetLoading191, { e }, 'setLoading', {
                  id: 'setLoading',
                  name: 'setLoading',
                  type: 'setLoading',
                  platform: 'pc',
                });
                const eventDataapiRequest749: any = [
                  {
                    type: 'apiRequest',
                    dataId: 167357636740510600,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '263949',
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
                              dataKey: '263949_root.header',
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
                              dataKey: '263949_root.path',
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
                              dataKey: '263949_root.query',
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
                                  dataKey: '263949_root.body.sceneCode',
                                  value: {
                                    type: ['customize'],
                                    code: 'CLS_JC_0002_0003',
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
                                  dataKey: '263949_root.body.fileTemplateName',
                                  value: {
                                    type: ['customize'],
                                    code: '骚扰治理保障名单审批流程中的名单模板.xlsx',
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
                              dataKey: '263949_root.body',
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
                          dataKey: '263949_root',
                        },
                      ],
                      _sourceName: '根据请求对象查询文件对象模板-tsm',
                    },
                    line_number: 2,
                    callback1: [
                      {
                        type: 'downloadByFileId',
                        dataId: 167357642142749150,
                        options: {
                          compId: 'downloadByFileId',
                          compName: 'system',
                          id: '065914',
                          pageJsonId: '537892',
                          data: '$reply_263949?.resultData.fileId$',
                        },
                        line_number: 3,
                      },
                      {
                        type: 'console',
                        dataId: 169586844666066900,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '2840125',
                          pageJsonId: '537892',
                          value: ['$reply_263949$'],
                        },
                        line_number: 4,
                      },
                      {
                        type: 'setLoading',
                        dataId: 169588132915534340,
                        options: {
                          compId: 'Button_050256',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Button',
                          id: '660395',
                          loading: false,
                        },
                        line_number: 5,
                      },
                    ],
                    callback2: [
                      {
                        type: 'setLoading',
                        dataId: 169588133351995230,
                        options: {
                          compId: 'Button_050256',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Button',
                          id: '989516',
                          loading: false,
                        },
                        line_number: 6,
                      },
                    ],
                  },
                ];
                eventDataapiRequest749.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDataapiRequest749, { e }, 'apiRequest', {
                  id: 'apiRequest',
                  name: 'apiRequest',
                  type: 'apiRequest',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Button_050256')}
              {...injectData}
            />
          </View>
          <Table
            name={'名单表格'}
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
                title: '地市',
                key: 'city',
                dataIndex: 'cityName',
                className: '',
                id: '938309',
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
                title: '区县',
                key: 'area',
                dataIndex: 'areaName',
                className: 'divider',
                id: '291428',
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
                title: '号码',
                key: 'num',
                dataIndex: 'msisdn',
                className: 'divider',
                id: '2827336',
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
                title: '集团编码',
                key: 'groupId',
                dataIndex: 'groupId',
                edittype: 'string',
                id: '420952',
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
                title: '集团名称',
                key: 'groupName',
                dataIndex: 'groupName',
                edittype: 'string',
                id: '2777518',
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
                key: 'industryType',
                dataIndex: 'tradeclassTopName',
                className: 'divider',
                id: '278109',
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
                title: '客户类型',
                key: 'customerType',
                dataIndex: 'customerTypeName',
                className: 'divider',
                id: '91638555',
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
                title: '建议保障类型',
                key: 'recommendEnsuredType',
                dataIndex: 'recommendEnsuredTypeName',
                className: 'divider',
                id: '524155',
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
                title: '到期时间',
                key: 'expiredTime',
                dataIndex: 'expiredTime',
                className: 'divider',
                id: '623884',
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
            showQuickJumper={true}
            pageSizeOptions={'[5,10,20]'}
            dataSource={data?.governList}
            fieldName={'data.MemberInfo.length'}
            total={data?.governList?.length}
            hiddenAction={false}
            rowKey={'rowId'}
            rowActions={[]}
            extend={[]}
            dataSourceFromDataSourceConfig={'data.governList'}
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
              const eventDatashowCustomModal181: any = [
                {
                  type: 'showCustomModal',
                  dataId: 169684732479238400,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '293813',
                    pageJsonId: '537892',
                    modalname:
                      '/jianshesaoraozhilibaozhangmingdanshenpidantanchuang1964',
                    pageId: '1028611675218784256',
                    modalPath:
                      '/jianshesaoraozhilibaozhangmingdanshenpidantanchuang1964',
                    paramsObj: { governInfo: '$row$' },
                    paramsObjKeyValueMap: { governInfo: '$row$' },
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'console',
                      dataId: 169690112229516580,
                      options: {
                        compId: 'debug',
                        compName: 'system',
                        id: '8255465',
                        pageJsonId: '537892',
                        value: ['行对象', '$row$'],
                      },
                      line_number: 2,
                    },
                    {
                      type: 'console',
                      dataId: 169690113346547400,
                      options: {
                        compId: 'debug',
                        compName: 'system',
                        id: '0371143',
                        pageJsonId: '537892',
                        value: ['弹窗回调参数', '$okData_293813$'],
                      },
                      line_number: 3,
                    },
                    {
                      type: 'customActionCode',
                      dataId: 169684735543630430,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '44344',
                        pageJsonId: '537892',
                        code: 'function main(data,state,success,fail){var info=okData_293813;data.governList=data.governList.filter(function(item){return item.rowId!=info.rowId});data.governList.push(info);success(data.governList)};',
                      },
                      line_number: 4,
                      callback1: [
                        {
                          type: 'setDataSource',
                          dataId: 169684745889604770,
                          options: {
                            compId: 'setDataSource',
                            compName: 'page',
                            id: '4382843',
                            pageJsonId: '537892',
                            dataSourceId: 169586968478478050,
                            dataSourceName: 'governList',
                            dataSourceRelType: 'custom',
                            dataSourceSetValue: [
                              {
                                attrId: '847189',
                                code: 'city',
                                name: '地市',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                              },
                              {
                                attrId: '9597404',
                                code: 'area',
                                name: '区县',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                              },
                              {
                                attrId: '559311',
                                code: 'msisdn',
                                name: '号码',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                              },
                              {
                                attrId: '1304769',
                                code: 'groupId',
                                name: '集团编号',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                              },
                              {
                                attrId: '324973',
                                code: 'groupName',
                                name: '集团名称',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                              },
                              {
                                attrId: '046158',
                                code: 'tradeclassTop',
                                name: '行业类型',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                              },
                              {
                                attrId: '356797',
                                code: 'customerType',
                                name: '客户类型',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                              },
                              {
                                attrId: '228194',
                                code: 'recommendEnsuredType',
                                name: '建议保障类型',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                              },
                              {
                                attrId: '0882523',
                                code: 'expiredTime',
                                name: '到期时间',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                              },
                              {
                                attrId: '337453',
                                code: 'cityName',
                                name: '地市名称',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                              },
                              {
                                attrId: '522236',
                                code: 'areaName',
                                name: '区县名称',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                              },
                              {
                                attrId: '6850353',
                                code: 'tradeclassTopName',
                                name: '行业类型名称',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                              },
                              {
                                attrId: '281531',
                                code: 'customerTypeName',
                                name: '客户类型名称',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                              },
                              {
                                attrId: '878582',
                                code: 'recommendEnsuredTypeName',
                                name: '建议保障类型名称',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                              },
                            ],
                            operateType: 1,
                            onlySetPatch: true,
                            otherObjectArrayOptions: {},
                            targetDataSourcePaths: [],
                          },
                          line_number: 5,
                          callback1: [
                            {
                              type: 'customActionCode',
                              dataId: 169690407380711140,
                              options: {
                                compId: 'customActionCode',
                                compName: 'page',
                                id: '238491',
                                pageJsonId: '537892',
                                code: 'function main(data,state,success,fail){var governList=data_44344||[];var instList=[];for(var i=0;i<governList.length;i++){var obj=governList[i];var instAttrList=[];for(var key in obj){instAttrList.push({"attrCode":key,"attrValue":obj[key]})}var instCode=obj["rowId"];instList.push({instCode:instCode,instAttrList:instAttrList})}var factorForm=data.factorForm||{};var attrList=[];for(var _key in factorForm){attrList.push({"attrCode":_key,"attrValue":factorForm[_key]})}data.sceneSubmit.attrList=attrList;data.sceneSubmit.instList=instList;console.log("attrList = ",attrList);console.log("instList = ",instList);success(data.sceneSubmit)};',
                              },
                              line_number: 6,
                              callback1: [
                                {
                                  type: 'setDataSource',
                                  dataId: 169690407380728220,
                                  options: {
                                    compId: 'setDataSource',
                                    compName: 'page',
                                    id: '740834',
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
                                        showInput: true,
                                      },
                                      {
                                        attrId: '4562264',
                                        code: 'approveGrade',
                                        name: '审批等级',
                                        type: 'string',
                                        initialData: { type: 'static' },
                                        showInput: true,
                                      },
                                      {
                                        attrId: '63768',
                                        code: 'attrList',
                                        name: '要素',
                                        type: 'objectArray',
                                        initialData: { type: 'static' },
                                        showInput: true,
                                        value: {
                                          type: ['context', '$data_238491$'],
                                          code: 'attrList',
                                        },
                                      },
                                      {
                                        attrId: '919265',
                                        code: 'fileInfo',
                                        name: '附件',
                                        type: 'objectArray',
                                        initialData: { type: 'static' },
                                        children: [],
                                        showInput: true,
                                      },
                                      {
                                        attrId: '360171',
                                        code: 'catalogItemCode',
                                        name: '类目项编码',
                                        type: 'string',
                                        initialData: { type: 'static' },
                                        showInput: true,
                                      },
                                      {
                                        attrId: '420623',
                                        code: 'catalogItemSubType',
                                        name: '类目项子类型',
                                        type: 'string',
                                        initialData: { type: 'static' },
                                        showInput: true,
                                      },
                                      {
                                        attrId: '375466',
                                        code: 'childCatalogCode',
                                        name: '子类目项编码',
                                        type: 'string',
                                        initialData: { type: 'static' },
                                        showInput: true,
                                      },
                                      {
                                        attrId: '9257773',
                                        code: 'parentCatalogCode',
                                        name: '上级类目编码',
                                        type: 'string',
                                        initialData: { type: 'static' },
                                        showInput: true,
                                      },
                                      {
                                        attrId: '5733013',
                                        code: 'parentCatalogItemCode',
                                        name: '上级类目项编码',
                                        type: 'string',
                                        initialData: { type: 'static' },
                                        showInput: true,
                                      },
                                      {
                                        attrId: '440627',
                                        code: 'childCatalogDesc',
                                        name: '子类目项描述',
                                        type: 'string',
                                        initialData: { type: 'static' },
                                        showInput: true,
                                      },
                                      {
                                        attrId: '177104',
                                        code: 'approveGradeName',
                                        name: '审批等级名称',
                                        type: 'string',
                                        initialData: { type: 'static' },
                                        showInput: true,
                                      },
                                      {
                                        attrId: '13154521',
                                        code: 'custMemberList',
                                        name: '成员信息',
                                        type: 'objectArray',
                                        initialData: { type: 'static' },
                                        showInput: true,
                                      },
                                      {
                                        attrId: '1349543',
                                        code: 'instList',
                                        name: '实例信息',
                                        type: 'objectArray',
                                        initialData: { type: 'static' },
                                        showInput: true,
                                        value: {
                                          type: ['context', '$data_238491$'],
                                          code: 'instList',
                                        },
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
                                      type: 'callParentCustomFunc',
                                      dataId: 169690407380764220,
                                      options: {
                                        compId: 'callParentCustomFunc',
                                        compName: 'system',
                                        id: '438132',
                                        pageJsonId: '537892',
                                        pathname: '/auditOrderPrepare',
                                        pageId: '884045146848604160',
                                        modalPath: '/auditOrderPrepare',
                                        customFuncName: 'getFactor',
                                        customFuncParams: '$data.sceneSubmit$',
                                      },
                                      line_number: 8,
                                      callback1: [
                                        {
                                          type: 'showMessage',
                                          dataId: 169690407380791500,
                                          options: {
                                            compId: 'showMessage',
                                            compName: 'system',
                                            id: '24602133',
                                            pageJsonId: '537892',
                                            type: 'success',
                                            value: '修改成功！',
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
                              callback2: [
                                {
                                  type: 'showMessage',
                                  dataId: 169690407380750900,
                                  options: {
                                    compId: 'showMessage',
                                    compName: 'system',
                                    id: '375123',
                                    pageJsonId: '537892',
                                    type: 'error',
                                    value: '$fail_238491$',
                                  },
                                  line_number: 10,
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
              eventDatashowCustomModal181.params =
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
                eventDatashowCustomModal181,
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
            ref={(r: any) => refs.setComponentRef(r, 'Table_8700198')}
            {...injectData}
          />
          <Form
            name={'要素表单'}
            colSpan={8}
            labelCol={'2'}
            wrapperCol={22}
            colon={true}
            layout={'horizontal'}
            labelAlign={'right'}
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_345819'}
            genRuleType={'key'}
            formType={'normal'}
            relationDataSource={data?.factorForm}
            busiObjectId={''}
            $$componentItem={{
              id: 'Form_345819',
              uid: 'Form_345819',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            onValuesChange={(changedFieldName: any, changedValue: any) => {
              const eventDatasetDataSource166: any = [
                {
                  type: 'setDataSource',
                  dataId: 169588616709267600,
                  options: {
                    compId: 'page',
                    compName: 'page',
                    id: '995364',
                    pageJsonId: '537892',
                    dataSourceId: 167049030475764160,
                    dataSourceName: 'factorForm',
                    dataSourceRelType: 'custom',
                    dataSourceReloadFilter: [],
                    dataSourceSetValue: [
                      {
                        attrId: '044111',
                        code: 'reason',
                        name: '申请原因',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_345819', 'getFieldsValue'],
                          code: 'reason',
                        },
                      },
                      {
                        attrId: '378379',
                        code: 'requirementState',
                        name: '需求说明',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_345819', 'getFieldsValue'],
                          code: 'requirementState',
                        },
                      },
                    ],
                    onlySetPatch: true,
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'customActionCode',
                      dataId: 169588630107503140,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '207655',
                        pageJsonId: '537892',
                        code: 'function main(data,state,success,fail){console.log("changedValue = ",changedValue);console.log("data.governList = ",data.governList);console.log("data.factorForm = ",data.factorForm);var governList=data.governList||[];var instList=[];for(var i=0;i<governList.length;i++){var obj=governList[i];var instAttrList=[];for(var key in obj){instAttrList.push({"attrCode":key,"attrValue":obj[key]})}var instCode=obj["rowId"];instList.push({instCode:instCode,instAttrList:instAttrList})}var factorForm=data.factorForm;var attrList=[];for(var _key in factorForm){attrList.push({"attrCode":_key,"attrValue":factorForm[_key]})}data.sceneSubmit.attrList=attrList;data.sceneSubmit.instList=instList;console.log("attrList = ",attrList);console.log("instList = ",instList);success(data.sceneSubmit)};',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'callParentCustomFunc',
                          dataId: 169588630107572350,
                          options: {
                            compId: 'callParentCustomFunc',
                            compName: 'system',
                            id: '0479786',
                            pageJsonId: '537892',
                            pathname: '/auditOrderPrepare',
                            pageId: '884045146848604160',
                            modalPath: '/auditOrderPrepare',
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
              eventDatasetDataSource166.params =
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
                eventDatasetDataSource166,
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
            ref={(r: any) => refs.setComponentRef(r, 'Form_345819')}
            {...injectData}
          >
            <TextArea
              name={'需求说明'}
              selfSpan={24}
              labelCol={'2'}
              wrapperCol={22}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              placeholder={'请输入'}
              formItemIndex={0}
              fieldName={'requirementState'}
              value={data?.factorForm?.requirementState}
              $$componentItem={{
                id: 'TextArea_18107',
                uid: 'TextArea_18107',
                type: 'TextArea',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'TextArea_18107')}
              {...injectData}
            />
            <TextArea
              name={'申请原因'}
              selfSpan={24}
              labelCol={'2'}
              wrapperCol={22}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={1}
              fieldName={'reason'}
              value={data?.factorForm?.reason}
              $$componentItem={{
                id: 'TextArea_886755',
                uid: 'TextArea_886755',
                type: 'TextArea',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'TextArea_886755')}
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
                id: 'Form_395851_1727917_9692158_9612234_1000722',
                uid: 'Form_395851_1727917_9692158_9612234_1000722',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ padding: '0px 0px 0px 0px', margin: '10px 0px 0px 0px' }}
              ref={(r: any) =>
                refs.setComponentRef(
                  r,
                  'Form_395851_1727917_9692158_9612234_1000722',
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
                  id: 'Input_690228_5400337_280051_232429_7501497',
                  uid: 'Input_690228_5400337_280051_232429_7501497',
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
                    'Input_690228_5400337_280051_232429_7501497',
                  )
                }
                {...injectData}
              />
              <View
                className="View_View_22346374_875512_926873_4359147_729981"
                name={'布局容器'}
                labelCol={8}
                wrapperCol={16}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_22346374_875512_926873_4359147_729981',
                  uid: 'View_22346374_875512_926873_4359147_729981',
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
                  refs.setComponentRef(
                    r,
                    'View_22346374_875512_926873_4359147_729981',
                  )
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
                    id: 'StdUpload_6230546_867413_538179_36057857_3505279',
                    uid: 'StdUpload_6230546_867413_538179_36057857_3505279',
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
                    const eventDatagetSelectedData339: any = [
                      {
                        type: 'getSelectedData',
                        dataId: 166521847771133400,
                        options: {
                          compId: 'Input_690228_5400337_280051_232429_7501497',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Select',
                          id: '723236',
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'setDataSource',
                            dataId: 166521848153409470,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '3978006',
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
                                    code: '$selectedData_723236[0].value$',
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
                                    code: '$selectedData_723236[0].label$',
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
                                dataId: 166521848153432260,
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '469213',
                                  pageJsonId: '537892',
                                  code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=data.fileInfoList;success(data.sceneSubmit)};',
                                },
                                line_number: 3,
                                callback1: [
                                  {
                                    type: 'console',
                                    dataId: 166521848153483550,
                                    options: {
                                      compId: 'debug',
                                      compName: 'system',
                                      id: '8140861',
                                      pageJsonId: '537892',
                                      value: ['$data_469213$'],
                                    },
                                    line_number: 4,
                                  },
                                  {
                                    type: 'callParentCustomFunc',
                                    dataId: 166521848153489440,
                                    options: {
                                      compId: 'callParentCustomFunc',
                                      compName: 'system',
                                      id: '2711304',
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
                            dataId: 166521848639856160,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '062205',
                              pageJsonId: '537892',
                              type: 'error',
                              value: '请选择附件类型',
                            },
                            line_number: 6,
                          },
                        ],
                      },
                    ];
                    eventDatagetSelectedData339.params =
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
                      eventDatagetSelectedData339,
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
                    const eventDatacustomActionCode634: any = [
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
                    eventDatacustomActionCode634.params =
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
                      eventDatacustomActionCode634,
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
                      'StdUpload_6230546_867413_538179_36057857_3505279',
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
              const eventDatacustomActionCode635: any = [
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
              eventDatacustomActionCode635.params =
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
                eventDatacustomActionCode635,
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
              const eventDatadownloadByFileId64: any = [
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
              eventDatadownloadByFileId64.params =
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
                eventDatadownloadByFileId64,
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
        ref={(r: any) => refs.setComponentRef(r, 'BOFramer_231933')}
        {...injectData}
      />
    </div>
  );
};

export default withPageHOC(ClsJc_0002_0003$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
