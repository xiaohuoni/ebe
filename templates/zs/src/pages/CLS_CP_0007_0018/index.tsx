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

const ClsCp_0007_0018$$Page: React.FC<PageProps> = ({
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
    const eventDatacustomActionCode51: any = [
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
    eventDatacustomActionCode51.params =
      [
        {
          title: '事件入参',
          name: 'options_1964167',
          value: '$options_1964167$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode51,
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
    const eventDataapiRequest184: any = [
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
    eventDataapiRequest184.params = [] || [];
    CMDGenerator(eventDataapiRequest184, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest185: any = [
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
    eventDataapiRequest185.params = [] || [];
    CMDGenerator(eventDataapiRequest185, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse108: any = [
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
              code: 'function main(data,state,success,fail){var item=state.itemList;var factorForm={};var attrList=item.attrList;if(attrList!=undefined&&attrList.length>0){for(var i=0;i<attrList.length;i++){factorForm[attrList[i].attrCode]=attrList[i].attrValue}}data.factorForm=factorForm;data.sceneSubmit.approveGrade=item.approveGrade;data.sceneSubmit.approveGradeName=item.approveGradeName;data.sceneSubmit.instList=item.instList;data.sceneSubmit.attrList=item.attrList;var feeInfoList=[];item.instList.forEach(function(v){var feeObj={};var instList=v.instAttrList;if(instList!=undefined&&instList.length>0){for(var i=0;i<instList.length;i++){feeObj[instList[i].attrCode]=instList[i].attrValue}feeObj.rowId=v.instCode;feeInfoList.push(feeObj)}});success(feeInfoList)};',
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
                      code: 'toShare',
                      name: 'Z端分成',
                      type: 'string',
                      attrId: '134042',
                      initialData: { type: 'static', value: 'Z端分成' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['toShare'],
                      _idpath: ['134042'],
                    },
                    {
                      code: 'receiptsPriceSum',
                      name: '总实收价',
                      type: 'string',
                      attrId: '267265',
                      initialData: { type: 'static', value: '总实收价' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['receiptsPriceSum'],
                      _idpath: ['267265'],
                    },
                    {
                      code: 'toCity',
                      name: 'Z端地市',
                      type: 'string',
                      attrId: '270855',
                      initialData: { type: 'static', value: 'Z端地市' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['toCity'],
                      _idpath: ['270855'],
                    },
                    {
                      code: 'lineFuncFee',
                      name: '专线功能费(元)',
                      type: 'string',
                      attrId: '305445',
                      initialData: { type: 'static', value: '专线功能费(元)' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['lineFuncFee'],
                      _idpath: ['305445'],
                    },
                    {
                      code: 'fromCity',
                      name: 'A端地市',
                      type: 'string',
                      attrId: '323454',
                      initialData: { type: 'static', value: 'A端地市' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['fromCity'],
                      _idpath: ['323454'],
                    },
                    {
                      code: 'toCityText',
                      name: 'Z端地市',
                      type: 'string',
                      attrId: '368536',
                      initialData: { type: 'static', value: 'Z端地市' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['toCityText'],
                      _idpath: ['368536'],
                    },
                    {
                      code: 'singedTime',
                      name: '签约时间',
                      type: 'string',
                      attrId: '407854',
                      initialData: { type: 'static', value: '签约时间' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['singedTime'],
                      _idpath: ['407854'],
                    },
                    {
                      code: 'toAddress',
                      name: 'Z端地址',
                      type: 'string',
                      attrId: '425061',
                      initialData: { type: 'static', value: 'Z端地址' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['toAddress'],
                      _idpath: ['425061'],
                    },
                    {
                      code: 'revenueShare',
                      name: '收入分成',
                      type: 'string',
                      attrId: '446108',
                      initialData: { type: 'static', value: '收入分成' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['revenueShare'],
                      _idpath: ['446108'],
                    },
                    {
                      code: 'lastDiscount',
                      name: '最终折扣',
                      type: 'string',
                      attrId: '524252',
                      initialData: { type: 'static', value: '最终折扣' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['lastDiscount'],
                      _idpath: ['524252'],
                    },
                    {
                      code: 'receiptsPrice',
                      name: '实收价',
                      type: 'string',
                      attrId: '611889',
                      initialData: { type: 'static', value: '实收价' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['receiptsPrice'],
                      _idpath: ['611889'],
                    },
                    {
                      code: 'maintenanceCost',
                      name: '维护费(元/年)',
                      type: 'string',
                      attrId: '653623',
                      initialData: { type: 'static', value: '维护费(元/年)' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['maintenanceCost'],
                      _idpath: ['653623'],
                    },
                    {
                      code: 'standardPrice',
                      name: '省内标准价格',
                      type: 'string',
                      attrId: '683125',
                      initialData: { type: 'static', value: '省内标准价格' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['standardPrice'],
                      _idpath: ['683125'],
                    },
                    {
                      code: 'count',
                      name: '条数',
                      type: 'string',
                      attrId: '713846',
                      initialData: { type: 'static', value: '条数' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['count'],
                      _idpath: ['713846'],
                    },
                    {
                      code: 'infoIncomeYear',
                      name: '年信息化收入',
                      type: 'string',
                      attrId: '739395',
                      initialData: { type: 'static', value: '年信息化收入' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['infoIncomeYear'],
                      _idpath: ['739395'],
                    },
                    {
                      code: 'fromAddress',
                      name: 'A端地址',
                      type: 'string',
                      attrId: '845936',
                      initialData: { type: 'static', value: 'A端地址' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['fromAddress'],
                      _idpath: ['845936'],
                    },
                    {
                      code: 'fromProvince',
                      name: 'A端省份',
                      type: 'string',
                      attrId: '859533',
                      initialData: { type: 'static', value: 'A端省份' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['fromProvince'],
                      _idpath: ['859533'],
                    },
                    {
                      code: 'toProvince',
                      name: 'Z端省份',
                      type: 'string',
                      attrId: '882361',
                      initialData: { type: 'static', value: 'Z端省份' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['toProvince'],
                      _idpath: ['882361'],
                    },
                    {
                      code: 'fromCityText',
                      name: 'A端地市',
                      type: 'string',
                      attrId: '4333943',
                      initialData: { type: 'static', value: 'A端地市' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['fromCityText'],
                      _idpath: ['4333943'],
                    },
                    {
                      code: 'fromShare',
                      name: 'A端分成',
                      type: 'string',
                      attrId: '4575007',
                      initialData: { type: 'static', value: 'A端分成' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['fromShare'],
                      _idpath: ['4575007'],
                    },
                    {
                      code: 'recoverNetCost',
                      name: '可收回网络成本（月)',
                      type: 'string',
                      attrId: '6646057',
                      initialData: {
                        type: 'static',
                        value: '可收回网络成本（月)',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['recoverNetCost'],
                      _idpath: ['6646057'],
                    },
                    {
                      code: 'oneInput',
                      name: '一次性投入(元)',
                      type: 'string',
                      attrId: '7120776',
                      initialData: { type: 'static', value: '一次性投入(元)' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['oneInput'],
                      _idpath: ['7120776'],
                    },
                    {
                      code: 'busiType',
                      name: '业务类型',
                      type: 'string',
                      attrId: '71564078',
                      initialData: { type: 'static', value: '业务类型' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['busiType'],
                      _idpath: ['71564078'],
                    },
                    {
                      code: 'officePrice',
                      name: '总部管控价格',
                      type: 'string',
                      attrId: '081542',
                      initialData: { type: 'static', value: '总部管控价格' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['officePrice'],
                      _idpath: ['081542'],
                    },
                    {
                      code: 'bandwidth',
                      name: '带宽',
                      type: 'string',
                      attrId: '034647',
                      initialData: { type: 'static', value: '带宽' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: false,
                      _codePath: ['bandwidth'],
                      _idpath: ['034647'],
                    },
                    {
                      attrId: '637333',
                      code: 'accessWay',
                      name: '接入方式',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['accessWay'],
                      _idpath: ['637333'],
                    },
                    {
                      attrId: '88947924',
                      code: 'lineType',
                      name: '专线类型',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['lineType'],
                      _idpath: ['88947924'],
                    },
                    {
                      attrId: '623697',
                      code: 'bandwidthName',
                      name: '带宽名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['bandwidthName'],
                      _idpath: ['623697'],
                    },
                    {
                      attrId: '079197',
                      code: 'busiTypeName',
                      name: '业务类型名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['busiTypeName'],
                      _idpath: ['079197'],
                    },
                    {
                      attrId: '678613',
                      code: 'toProvinceName',
                      name: 'Z端省份名字',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['toProvinceName'],
                      _idpath: ['678613'],
                    },
                    {
                      attrId: '18153896',
                      code: 'fromProvinceName',
                      name: 'A端省份名字',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['fromProvinceName'],
                      _idpath: ['18153896'],
                    },
                    {
                      attrId: '3383503',
                      code: 'revenueShareName',
                      name: '各收入分成',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['revenueShareName'],
                      _idpath: ['3383503'],
                    },
                    {
                      attrId: '747415',
                      code: 'flag',
                      name: '标识',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['flag'],
                      _idpath: ['747415'],
                    },
                    {
                      attrId: '396473',
                      code: 'specialLine',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['specialLine'],
                      _idpath: ['396473'],
                    },
                  ],
                  operateType: 3,
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
                line_number: 12,
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
                line_number: 15,
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
                line_number: 16,
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
                line_number: 17,
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
                line_number: 18,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse108.params = [] || [];
    CMDGenerator(eventDataifelse108, {}, 'ifelse', {
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
          dividerText={'广域网跨省专线资费'}
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
                  text={'广域网跨省专线资费'}
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
              const eventDatasetDataSource93: any = [
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
              eventDatasetDataSource93.params =
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
                eventDatasetDataSource93,
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
                  const eventDatashowCustomModal62: any = [
                    {
                      type: 'showCustomModal',
                      dataId: 166314610874318850,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '611628',
                        pageJsonId: '537892',
                        modalname: '/networkAcrossProvince',
                        pageId: '1036116888616538112',
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
                        modalPath: '/networkAcrossProvince',
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
                                    code: 'toShare',
                                    name: 'Z端分成',
                                    type: 'string',
                                    attrId: '134042',
                                    initialData: {
                                      type: 'static',
                                      value: 'Z端分成',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['toShare'],
                                    _idpath: ['134042'],
                                  },
                                  {
                                    code: 'receiptsPriceSum',
                                    name: '总实收价',
                                    type: 'string',
                                    attrId: '267265',
                                    initialData: {
                                      type: 'static',
                                      value: '总实收价',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['receiptsPriceSum'],
                                    _idpath: ['267265'],
                                  },
                                  {
                                    code: 'toCity',
                                    name: 'Z端地市',
                                    type: 'string',
                                    attrId: '270855',
                                    initialData: {
                                      type: 'static',
                                      value: 'Z端地市',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['toCity'],
                                    _idpath: ['270855'],
                                  },
                                  {
                                    code: 'lineFuncFee',
                                    name: '专线功能费(元)',
                                    type: 'string',
                                    attrId: '305445',
                                    initialData: {
                                      type: 'static',
                                      value: '专线功能费(元)',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['lineFuncFee'],
                                    _idpath: ['305445'],
                                  },
                                  {
                                    code: 'fromCity',
                                    name: 'A端地市',
                                    type: 'string',
                                    attrId: '323454',
                                    initialData: {
                                      type: 'static',
                                      value: 'A端地市',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['fromCity'],
                                    _idpath: ['323454'],
                                  },
                                  {
                                    code: 'toCityText',
                                    name: 'Z端地市',
                                    type: 'string',
                                    attrId: '368536',
                                    initialData: {
                                      type: 'static',
                                      value: 'Z端地市',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['toCityText'],
                                    _idpath: ['368536'],
                                  },
                                  {
                                    code: 'singedTime',
                                    name: '签约时间',
                                    type: 'string',
                                    attrId: '407854',
                                    initialData: {
                                      type: 'static',
                                      value: '签约时间',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['singedTime'],
                                    _idpath: ['407854'],
                                  },
                                  {
                                    code: 'toAddress',
                                    name: 'Z端地址',
                                    type: 'string',
                                    attrId: '425061',
                                    initialData: {
                                      type: 'static',
                                      value: 'Z端地址',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['toAddress'],
                                    _idpath: ['425061'],
                                  },
                                  {
                                    code: 'revenueShare',
                                    name: '收入分成',
                                    type: 'string',
                                    attrId: '446108',
                                    initialData: {
                                      type: 'static',
                                      value: '收入分成',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['revenueShare'],
                                    _idpath: ['446108'],
                                  },
                                  {
                                    code: 'lastDiscount',
                                    name: '最终折扣',
                                    type: 'string',
                                    attrId: '524252',
                                    initialData: {
                                      type: 'static',
                                      value: '最终折扣',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['lastDiscount'],
                                    _idpath: ['524252'],
                                  },
                                  {
                                    code: 'receiptsPrice',
                                    name: '实收价',
                                    type: 'string',
                                    attrId: '611889',
                                    initialData: {
                                      type: 'static',
                                      value: '实收价',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['receiptsPrice'],
                                    _idpath: ['611889'],
                                  },
                                  {
                                    code: 'maintenanceCost',
                                    name: '维护费(元/年)',
                                    type: 'string',
                                    attrId: '653623',
                                    initialData: {
                                      type: 'static',
                                      value: '维护费(元/年)',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['maintenanceCost'],
                                    _idpath: ['653623'],
                                  },
                                  {
                                    code: 'standardPrice',
                                    name: '省内标准价格',
                                    type: 'string',
                                    attrId: '683125',
                                    initialData: {
                                      type: 'static',
                                      value: '省内标准价格',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['standardPrice'],
                                    _idpath: ['683125'],
                                  },
                                  {
                                    code: 'count',
                                    name: '条数',
                                    type: 'string',
                                    attrId: '713846',
                                    initialData: {
                                      type: 'static',
                                      value: '条数',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['count'],
                                    _idpath: ['713846'],
                                  },
                                  {
                                    code: 'infoIncomeYear',
                                    name: '年信息化收入',
                                    type: 'string',
                                    attrId: '739395',
                                    initialData: {
                                      type: 'static',
                                      value: '年信息化收入',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['infoIncomeYear'],
                                    _idpath: ['739395'],
                                  },
                                  {
                                    code: 'fromAddress',
                                    name: 'A端地址',
                                    type: 'string',
                                    attrId: '845936',
                                    initialData: {
                                      type: 'static',
                                      value: 'A端地址',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['fromAddress'],
                                    _idpath: ['845936'],
                                  },
                                  {
                                    code: 'fromProvince',
                                    name: 'A端省份',
                                    type: 'string',
                                    attrId: '859533',
                                    initialData: {
                                      type: 'static',
                                      value: 'A端省份',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['fromProvince'],
                                    _idpath: ['859533'],
                                  },
                                  {
                                    code: 'toProvince',
                                    name: 'Z端省份',
                                    type: 'string',
                                    attrId: '882361',
                                    initialData: {
                                      type: 'static',
                                      value: 'Z端省份',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['toProvince'],
                                    _idpath: ['882361'],
                                  },
                                  {
                                    code: 'fromCityText',
                                    name: 'A端地市',
                                    type: 'string',
                                    attrId: '4333943',
                                    initialData: {
                                      type: 'static',
                                      value: 'A端地市',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['fromCityText'],
                                    _idpath: ['4333943'],
                                  },
                                  {
                                    code: 'fromShare',
                                    name: 'A端分成',
                                    type: 'string',
                                    attrId: '4575007',
                                    initialData: {
                                      type: 'static',
                                      value: 'A端分成',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['fromShare'],
                                    _idpath: ['4575007'],
                                  },
                                  {
                                    code: 'recoverNetCost',
                                    name: '可收回网络成本（月)',
                                    type: 'string',
                                    attrId: '6646057',
                                    initialData: {
                                      type: 'static',
                                      value: '可收回网络成本（月)',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['recoverNetCost'],
                                    _idpath: ['6646057'],
                                  },
                                  {
                                    code: 'oneInput',
                                    name: '一次性投入(元)',
                                    type: 'string',
                                    attrId: '7120776',
                                    initialData: {
                                      type: 'static',
                                      value: '一次性投入(元)',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['oneInput'],
                                    _idpath: ['7120776'],
                                  },
                                  {
                                    code: 'busiType',
                                    name: '业务类型',
                                    type: 'string',
                                    attrId: '71564078',
                                    initialData: {
                                      type: 'static',
                                      value: '业务类型',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['busiType'],
                                    _idpath: ['71564078'],
                                  },
                                  {
                                    code: 'officePrice',
                                    name: '总部管控价格',
                                    type: 'string',
                                    attrId: '081542',
                                    initialData: {
                                      type: 'static',
                                      value: '总部管控价格',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['officePrice'],
                                    _idpath: ['081542'],
                                  },
                                  {
                                    code: 'bandwidth',
                                    name: '带宽',
                                    type: 'string',
                                    attrId: '034647',
                                    initialData: {
                                      type: 'static',
                                      value: '带宽',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['bandwidth'],
                                    _idpath: ['034647'],
                                  },
                                  {
                                    attrId: '637333',
                                    code: 'accessWay',
                                    name: '接入方式',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['accessWay'],
                                    _idpath: ['637333'],
                                  },
                                  {
                                    attrId: '88947924',
                                    code: 'lineType',
                                    name: '专线类型',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['lineType'],
                                    _idpath: ['88947924'],
                                  },
                                  {
                                    attrId: '623697',
                                    code: 'bandwidthName',
                                    name: '带宽名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['bandwidthName'],
                                    _idpath: ['623697'],
                                  },
                                  {
                                    attrId: '079197',
                                    code: 'busiTypeName',
                                    name: '业务类型名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['busiTypeName'],
                                    _idpath: ['079197'],
                                  },
                                  {
                                    attrId: '678613',
                                    code: 'toProvinceName',
                                    name: 'Z端省份名字',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['toProvinceName'],
                                    _idpath: ['678613'],
                                  },
                                  {
                                    attrId: '18153896',
                                    code: 'fromProvinceName',
                                    name: 'A端省份名字',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['fromProvinceName'],
                                    _idpath: ['18153896'],
                                  },
                                  {
                                    attrId: '3383503',
                                    code: 'revenueShareName',
                                    name: '各收入分成',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['revenueShareName'],
                                    _idpath: ['3383503'],
                                  },
                                  {
                                    attrId: '747415',
                                    code: 'flag',
                                    name: '标识',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['flag'],
                                    _idpath: ['747415'],
                                  },
                                  {
                                    attrId: '396473',
                                    code: 'specialLine',
                                    name: '属性',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['specialLine'],
                                    _idpath: ['396473'],
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
                  eventDatashowCustomModal62.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatashowCustomModal62,
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
                  const eventDatagetTableSelectedKey34: any = [
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
                                    code: 'toShare',
                                    name: 'Z端分成',
                                    type: 'string',
                                    attrId: '134042',
                                    initialData: {
                                      type: 'static',
                                      value: 'Z端分成',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['toShare'],
                                    _idpath: ['134042'],
                                  },
                                  {
                                    code: 'receiptsPriceSum',
                                    name: '总实收价',
                                    type: 'string',
                                    attrId: '267265',
                                    initialData: {
                                      type: 'static',
                                      value: '总实收价',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['receiptsPriceSum'],
                                    _idpath: ['267265'],
                                  },
                                  {
                                    code: 'toCity',
                                    name: 'Z端地市',
                                    type: 'string',
                                    attrId: '270855',
                                    initialData: {
                                      type: 'static',
                                      value: 'Z端地市',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['toCity'],
                                    _idpath: ['270855'],
                                  },
                                  {
                                    code: 'lineFuncFee',
                                    name: '专线功能费(元)',
                                    type: 'string',
                                    attrId: '305445',
                                    initialData: {
                                      type: 'static',
                                      value: '专线功能费(元)',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['lineFuncFee'],
                                    _idpath: ['305445'],
                                  },
                                  {
                                    code: 'fromCity',
                                    name: 'A端地市',
                                    type: 'string',
                                    attrId: '323454',
                                    initialData: {
                                      type: 'static',
                                      value: 'A端地市',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['fromCity'],
                                    _idpath: ['323454'],
                                  },
                                  {
                                    code: 'toCityText',
                                    name: 'Z端地市',
                                    type: 'string',
                                    attrId: '368536',
                                    initialData: {
                                      type: 'static',
                                      value: 'Z端地市',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['toCityText'],
                                    _idpath: ['368536'],
                                  },
                                  {
                                    code: 'singedTime',
                                    name: '签约时间',
                                    type: 'string',
                                    attrId: '407854',
                                    initialData: {
                                      type: 'static',
                                      value: '签约时间',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['singedTime'],
                                    _idpath: ['407854'],
                                  },
                                  {
                                    code: 'toAddress',
                                    name: 'Z端地址',
                                    type: 'string',
                                    attrId: '425061',
                                    initialData: {
                                      type: 'static',
                                      value: 'Z端地址',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['toAddress'],
                                    _idpath: ['425061'],
                                  },
                                  {
                                    code: 'revenueShare',
                                    name: '收入分成',
                                    type: 'string',
                                    attrId: '446108',
                                    initialData: {
                                      type: 'static',
                                      value: '收入分成',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['revenueShare'],
                                    _idpath: ['446108'],
                                  },
                                  {
                                    code: 'lastDiscount',
                                    name: '最终折扣',
                                    type: 'string',
                                    attrId: '524252',
                                    initialData: {
                                      type: 'static',
                                      value: '最终折扣',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['lastDiscount'],
                                    _idpath: ['524252'],
                                  },
                                  {
                                    code: 'receiptsPrice',
                                    name: '实收价',
                                    type: 'string',
                                    attrId: '611889',
                                    initialData: {
                                      type: 'static',
                                      value: '实收价',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['receiptsPrice'],
                                    _idpath: ['611889'],
                                  },
                                  {
                                    code: 'maintenanceCost',
                                    name: '维护费(元/年)',
                                    type: 'string',
                                    attrId: '653623',
                                    initialData: {
                                      type: 'static',
                                      value: '维护费(元/年)',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['maintenanceCost'],
                                    _idpath: ['653623'],
                                  },
                                  {
                                    code: 'standardPrice',
                                    name: '省内标准价格',
                                    type: 'string',
                                    attrId: '683125',
                                    initialData: {
                                      type: 'static',
                                      value: '省内标准价格',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['standardPrice'],
                                    _idpath: ['683125'],
                                  },
                                  {
                                    code: 'count',
                                    name: '条数',
                                    type: 'string',
                                    attrId: '713846',
                                    initialData: {
                                      type: 'static',
                                      value: '条数',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['count'],
                                    _idpath: ['713846'],
                                  },
                                  {
                                    code: 'infoIncomeYear',
                                    name: '年信息化收入',
                                    type: 'string',
                                    attrId: '739395',
                                    initialData: {
                                      type: 'static',
                                      value: '年信息化收入',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['infoIncomeYear'],
                                    _idpath: ['739395'],
                                  },
                                  {
                                    code: 'fromAddress',
                                    name: 'A端地址',
                                    type: 'string',
                                    attrId: '845936',
                                    initialData: {
                                      type: 'static',
                                      value: 'A端地址',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['fromAddress'],
                                    _idpath: ['845936'],
                                  },
                                  {
                                    code: 'fromProvince',
                                    name: 'A端省份',
                                    type: 'string',
                                    attrId: '859533',
                                    initialData: {
                                      type: 'static',
                                      value: 'A端省份',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['fromProvince'],
                                    _idpath: ['859533'],
                                  },
                                  {
                                    code: 'toProvince',
                                    name: 'Z端省份',
                                    type: 'string',
                                    attrId: '882361',
                                    initialData: {
                                      type: 'static',
                                      value: 'Z端省份',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['toProvince'],
                                    _idpath: ['882361'],
                                  },
                                  {
                                    code: 'fromCityText',
                                    name: 'A端地市',
                                    type: 'string',
                                    attrId: '4333943',
                                    initialData: {
                                      type: 'static',
                                      value: 'A端地市',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['fromCityText'],
                                    _idpath: ['4333943'],
                                  },
                                  {
                                    code: 'fromShare',
                                    name: 'A端分成',
                                    type: 'string',
                                    attrId: '4575007',
                                    initialData: {
                                      type: 'static',
                                      value: 'A端分成',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['fromShare'],
                                    _idpath: ['4575007'],
                                  },
                                  {
                                    code: 'recoverNetCost',
                                    name: '可收回网络成本（月)',
                                    type: 'string',
                                    attrId: '6646057',
                                    initialData: {
                                      type: 'static',
                                      value: '可收回网络成本（月)',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['recoverNetCost'],
                                    _idpath: ['6646057'],
                                  },
                                  {
                                    code: 'oneInput',
                                    name: '一次性投入(元)',
                                    type: 'string',
                                    attrId: '7120776',
                                    initialData: {
                                      type: 'static',
                                      value: '一次性投入(元)',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['oneInput'],
                                    _idpath: ['7120776'],
                                  },
                                  {
                                    code: 'busiType',
                                    name: '业务类型',
                                    type: 'string',
                                    attrId: '71564078',
                                    initialData: {
                                      type: 'static',
                                      value: '业务类型',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['busiType'],
                                    _idpath: ['71564078'],
                                  },
                                  {
                                    code: 'officePrice',
                                    name: '总部管控价格',
                                    type: 'string',
                                    attrId: '081542',
                                    initialData: {
                                      type: 'static',
                                      value: '总部管控价格',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['officePrice'],
                                    _idpath: ['081542'],
                                  },
                                  {
                                    code: 'bandwidth',
                                    name: '带宽',
                                    type: 'string',
                                    attrId: '034647',
                                    initialData: {
                                      type: 'static',
                                      value: '带宽',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['bandwidth'],
                                    _idpath: ['034647'],
                                  },
                                  {
                                    attrId: '637333',
                                    code: 'accessWay',
                                    name: '接入方式',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['accessWay'],
                                    _idpath: ['637333'],
                                  },
                                  {
                                    attrId: '88947924',
                                    code: 'lineType',
                                    name: '专线类型',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['lineType'],
                                    _idpath: ['88947924'],
                                  },
                                  {
                                    attrId: '623697',
                                    code: 'bandwidthName',
                                    name: '带宽名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['bandwidthName'],
                                    _idpath: ['623697'],
                                  },
                                  {
                                    attrId: '079197',
                                    code: 'busiTypeName',
                                    name: '业务类型名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['busiTypeName'],
                                    _idpath: ['079197'],
                                  },
                                  {
                                    attrId: '678613',
                                    code: 'toProvinceName',
                                    name: 'Z端省份名字',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['toProvinceName'],
                                    _idpath: ['678613'],
                                  },
                                  {
                                    attrId: '18153896',
                                    code: 'fromProvinceName',
                                    name: 'A端省份名字',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['fromProvinceName'],
                                    _idpath: ['18153896'],
                                  },
                                  {
                                    attrId: '3383503',
                                    code: 'revenueShareName',
                                    name: '各收入分成',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['revenueShareName'],
                                    _idpath: ['3383503'],
                                  },
                                  {
                                    attrId: '747415',
                                    code: 'flag',
                                    name: '标识',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['flag'],
                                    _idpath: ['747415'],
                                  },
                                  {
                                    attrId: '396473',
                                    code: 'specialLine',
                                    name: '属性',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['specialLine'],
                                    _idpath: ['396473'],
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
                  eventDatagetTableSelectedKey34.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatagetTableSelectedKey34,
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
                  const eventDataifelse403: any = [
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
                                    code: 'toShare',
                                    name: 'Z端分成',
                                    type: 'string',
                                    attrId: '134042',
                                    initialData: {
                                      type: 'static',
                                      value: 'Z端分成',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['toShare'],
                                    _idpath: ['134042'],
                                  },
                                  {
                                    code: 'receiptsPriceSum',
                                    name: '总实收价',
                                    type: 'string',
                                    attrId: '267265',
                                    initialData: {
                                      type: 'static',
                                      value: '总实收价',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['receiptsPriceSum'],
                                    _idpath: ['267265'],
                                  },
                                  {
                                    code: 'toCity',
                                    name: 'Z端地市',
                                    type: 'string',
                                    attrId: '270855',
                                    initialData: {
                                      type: 'static',
                                      value: 'Z端地市',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['toCity'],
                                    _idpath: ['270855'],
                                  },
                                  {
                                    code: 'lineFuncFee',
                                    name: '专线功能费(元)',
                                    type: 'string',
                                    attrId: '305445',
                                    initialData: {
                                      type: 'static',
                                      value: '专线功能费(元)',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['lineFuncFee'],
                                    _idpath: ['305445'],
                                  },
                                  {
                                    code: 'fromCity',
                                    name: 'A端地市',
                                    type: 'string',
                                    attrId: '323454',
                                    initialData: {
                                      type: 'static',
                                      value: 'A端地市',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['fromCity'],
                                    _idpath: ['323454'],
                                  },
                                  {
                                    code: 'toCityText',
                                    name: 'Z端地市',
                                    type: 'string',
                                    attrId: '368536',
                                    initialData: {
                                      type: 'static',
                                      value: 'Z端地市',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['toCityText'],
                                    _idpath: ['368536'],
                                  },
                                  {
                                    code: 'singedTime',
                                    name: '签约时间',
                                    type: 'string',
                                    attrId: '407854',
                                    initialData: {
                                      type: 'static',
                                      value: '签约时间',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['singedTime'],
                                    _idpath: ['407854'],
                                  },
                                  {
                                    code: 'toAddress',
                                    name: 'Z端地址',
                                    type: 'string',
                                    attrId: '425061',
                                    initialData: {
                                      type: 'static',
                                      value: 'Z端地址',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['toAddress'],
                                    _idpath: ['425061'],
                                  },
                                  {
                                    code: 'revenueShare',
                                    name: '收入分成',
                                    type: 'string',
                                    attrId: '446108',
                                    initialData: {
                                      type: 'static',
                                      value: '收入分成',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['revenueShare'],
                                    _idpath: ['446108'],
                                  },
                                  {
                                    code: 'lastDiscount',
                                    name: '最终折扣',
                                    type: 'string',
                                    attrId: '524252',
                                    initialData: {
                                      type: 'static',
                                      value: '最终折扣',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['lastDiscount'],
                                    _idpath: ['524252'],
                                  },
                                  {
                                    code: 'receiptsPrice',
                                    name: '实收价',
                                    type: 'string',
                                    attrId: '611889',
                                    initialData: {
                                      type: 'static',
                                      value: '实收价',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['receiptsPrice'],
                                    _idpath: ['611889'],
                                  },
                                  {
                                    code: 'maintenanceCost',
                                    name: '维护费(元/年)',
                                    type: 'string',
                                    attrId: '653623',
                                    initialData: {
                                      type: 'static',
                                      value: '维护费(元/年)',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['maintenanceCost'],
                                    _idpath: ['653623'],
                                  },
                                  {
                                    code: 'standardPrice',
                                    name: '省内标准价格',
                                    type: 'string',
                                    attrId: '683125',
                                    initialData: {
                                      type: 'static',
                                      value: '省内标准价格',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['standardPrice'],
                                    _idpath: ['683125'],
                                  },
                                  {
                                    code: 'count',
                                    name: '条数',
                                    type: 'string',
                                    attrId: '713846',
                                    initialData: {
                                      type: 'static',
                                      value: '条数',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['count'],
                                    _idpath: ['713846'],
                                  },
                                  {
                                    code: 'infoIncomeYear',
                                    name: '年信息化收入',
                                    type: 'string',
                                    attrId: '739395',
                                    initialData: {
                                      type: 'static',
                                      value: '年信息化收入',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['infoIncomeYear'],
                                    _idpath: ['739395'],
                                  },
                                  {
                                    code: 'fromAddress',
                                    name: 'A端地址',
                                    type: 'string',
                                    attrId: '845936',
                                    initialData: {
                                      type: 'static',
                                      value: 'A端地址',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['fromAddress'],
                                    _idpath: ['845936'],
                                  },
                                  {
                                    code: 'fromProvince',
                                    name: 'A端省份',
                                    type: 'string',
                                    attrId: '859533',
                                    initialData: {
                                      type: 'static',
                                      value: 'A端省份',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['fromProvince'],
                                    _idpath: ['859533'],
                                  },
                                  {
                                    code: 'toProvince',
                                    name: 'Z端省份',
                                    type: 'string',
                                    attrId: '882361',
                                    initialData: {
                                      type: 'static',
                                      value: 'Z端省份',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['toProvince'],
                                    _idpath: ['882361'],
                                  },
                                  {
                                    code: 'fromCityText',
                                    name: 'A端地市',
                                    type: 'string',
                                    attrId: '4333943',
                                    initialData: {
                                      type: 'static',
                                      value: 'A端地市',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['fromCityText'],
                                    _idpath: ['4333943'],
                                  },
                                  {
                                    code: 'fromShare',
                                    name: 'A端分成',
                                    type: 'string',
                                    attrId: '4575007',
                                    initialData: {
                                      type: 'static',
                                      value: 'A端分成',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['fromShare'],
                                    _idpath: ['4575007'],
                                  },
                                  {
                                    code: 'recoverNetCost',
                                    name: '可收回网络成本（月)',
                                    type: 'string',
                                    attrId: '6646057',
                                    initialData: {
                                      type: 'static',
                                      value: '可收回网络成本（月)',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['recoverNetCost'],
                                    _idpath: ['6646057'],
                                  },
                                  {
                                    code: 'oneInput',
                                    name: '一次性投入(元)',
                                    type: 'string',
                                    attrId: '7120776',
                                    initialData: {
                                      type: 'static',
                                      value: '一次性投入(元)',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['oneInput'],
                                    _idpath: ['7120776'],
                                  },
                                  {
                                    code: 'busiType',
                                    name: '业务类型',
                                    type: 'string',
                                    attrId: '71564078',
                                    initialData: {
                                      type: 'static',
                                      value: '业务类型',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['busiType'],
                                    _idpath: ['71564078'],
                                  },
                                  {
                                    code: 'officePrice',
                                    name: '总部管控价格',
                                    type: 'string',
                                    attrId: '081542',
                                    initialData: {
                                      type: 'static',
                                      value: '总部管控价格',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['officePrice'],
                                    _idpath: ['081542'],
                                  },
                                  {
                                    code: 'bandwidth',
                                    name: '带宽',
                                    type: 'string',
                                    attrId: '034647',
                                    initialData: {
                                      type: 'static',
                                      value: '带宽',
                                    },
                                    parentKey: '1',
                                    parentType: 'object',
                                    showInput: false,
                                    _codePath: ['bandwidth'],
                                    _idpath: ['034647'],
                                  },
                                  {
                                    attrId: '637333',
                                    code: 'accessWay',
                                    name: '接入方式',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['accessWay'],
                                    _idpath: ['637333'],
                                  },
                                  {
                                    attrId: '88947924',
                                    code: 'lineType',
                                    name: '专线类型',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['lineType'],
                                    _idpath: ['88947924'],
                                  },
                                  {
                                    attrId: '623697',
                                    code: 'bandwidthName',
                                    name: '带宽名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['bandwidthName'],
                                    _idpath: ['623697'],
                                  },
                                  {
                                    attrId: '079197',
                                    code: 'busiTypeName',
                                    name: '业务类型名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['busiTypeName'],
                                    _idpath: ['079197'],
                                  },
                                  {
                                    attrId: '678613',
                                    code: 'toProvinceName',
                                    name: 'Z端省份名字',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['toProvinceName'],
                                    _idpath: ['678613'],
                                  },
                                  {
                                    attrId: '18153896',
                                    code: 'fromProvinceName',
                                    name: 'A端省份名字',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['fromProvinceName'],
                                    _idpath: ['18153896'],
                                  },
                                  {
                                    attrId: '3383503',
                                    code: 'revenueShareName',
                                    name: '各收入分成',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['revenueShareName'],
                                    _idpath: ['3383503'],
                                  },
                                  {
                                    attrId: '747415',
                                    code: 'flag',
                                    name: '标识',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['flag'],
                                    _idpath: ['747415'],
                                  },
                                  {
                                    attrId: '396473',
                                    code: 'specialLine',
                                    name: '属性',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['specialLine'],
                                    _idpath: ['396473'],
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
                  eventDataifelse403.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDataifelse403, { e }, 'ifelse', {
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
                  const eventDatasetLoading150: any = [
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
                  eventDatasetLoading150.params =
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
                    eventDatasetLoading150,
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
                  const eventDataapiRequest699: any = [
                    {
                      type: 'apiRequest',
                      dataId: 167636869656829060,
                      options: {
                        compId: 'apiRequest',
                        compName: 'system',
                        id: '9706607',
                        pageJsonId: '537892',
                        sync: false,
                        actionTitle: '',
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
                                  dataId: 167647363168551870,
                                  children: [
                                    {
                                      dataName: 'callback',
                                      dataId: 167647363168582080,
                                      children: [
                                        {
                                          dataName: 'action',
                                          dataId: 167647363168552700,
                                          children: [
                                            {
                                              dataName: 'callback',
                                              dataId: 167647363168509000,
                                              children: [
                                                {
                                                  dataName: 'action',
                                                  dataId: 16764736316852324,
                                                  children: [
                                                    {
                                                      dataName: 'callback',
                                                      dataId: 167647363168508500,
                                                      children: [
                                                        {
                                                          dataName: 'action',
                                                          dataId: 167647363168562780,
                                                          children: [
                                                            {
                                                              dataName:
                                                                'callback',
                                                              dataId: 167647363168573150,
                                                              children: [],
                                                              value:
                                                                'callback1',
                                                              params: [],
                                                              shielding: true,
                                                            },
                                                            {
                                                              dataName:
                                                                'callback',
                                                              dataId: 167647363168504000,
                                                              children: [],
                                                              value:
                                                                'callback2',
                                                              params: [],
                                                              shielding: true,
                                                            },
                                                          ],
                                                          todoOptions: [
                                                            'customFuncName',
                                                            'customFuncParams',
                                                          ],
                                                          options: {
                                                            compId:
                                                              'callSelfFunc',
                                                            compName: 'system',
                                                            id: '860538',
                                                            pageJsonId:
                                                              '537892',
                                                            customFuncName:
                                                              'updateTitle',
                                                          },
                                                          actionObjId:
                                                            'callSelfFunc',
                                                          actionObjName:
                                                            'system',
                                                          value: 'callSelfFunc',
                                                          shielding: true,
                                                          line_number: 8,
                                                        },
                                                      ],
                                                      value: 'callback1',
                                                      params: [],
                                                      shielding: true,
                                                    },
                                                    {
                                                      dataName: 'callback',
                                                      dataId: 167647363168502940,
                                                      children: [],
                                                      value: 'callback2',
                                                      params: [],
                                                      shielding: true,
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
                                                    id: '152046',
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
                                                    operateType: 1,
                                                    onlySetPatch: true,
                                                    otherObjectArrayOptions: {},
                                                  },
                                                  actionObjId: 'setDataSource',
                                                  actionObjName: 'page',
                                                  value: 'setDataSource',
                                                  shielding: true,
                                                  line_number: 7,
                                                },
                                              ],
                                              value: 'callback1',
                                              params: [],
                                              shielding: true,
                                            },
                                            {
                                              dataName: 'callback',
                                              dataId: 167647363168548830,
                                              children: [],
                                              value: 'callback2',
                                              params: [],
                                              shielding: true,
                                            },
                                          ],
                                          todoOptions: [
                                            'pathname',
                                            'customFuncName',
                                            'customFuncParams',
                                          ],
                                          options: {
                                            compId: 'callParentCustomFunc',
                                            compName: 'system',
                                            id: '442054',
                                            pageJsonId: '537892',
                                            pathname: '/auditOrderPrepare',
                                            pageId: '884045146848604160',
                                            customFuncName: 'getFactor',
                                            customFuncParams: '$data_0024625$',
                                            modalPath: '/auditOrderPrepare',
                                          },
                                          actionObjId: 'callParentCustomFunc',
                                          actionObjName: 'system',
                                          value: 'callParentCustomFunc',
                                          shielding: true,
                                          line_number: 6,
                                        },
                                      ],
                                      value: 'callback1',
                                      params: [],
                                      shielding: true,
                                    },
                                    {
                                      dataName: 'callback',
                                      dataId: 167647363168578200,
                                      children: [],
                                      value: 'callback2',
                                      params: [],
                                      shielding: true,
                                    },
                                  ],
                                  todoOptions: ['actionTitle', 'editorCode'],
                                  options: {
                                    compId: 'customActionCode',
                                    compName: 'page',
                                    id: '0024625',
                                    pageJsonId: '537892',
                                    code: 'function main(data,state,success,fail){var infoList=reply_9706607.resultData;var instList=data.sceneSubmit.instList||[];for(var i=0;i<infoList.length;i++){if(infoList[i].marketList!=null&&infoList[i].marketList!=undefined){infoList[i].marketList=JSON.parse(infoList[i].marketList)}var list=[];for(var key in infoList[i]){if(key!="rowId"&&key!="marketList"){list.push({"attrCode":key,"attrName":"","attrValue":infoList[i][key]})}if(key=="marketList"){list.push({"attrCode":key,"attrName":"","attrValue":JSON.stringify(infoList[i][key])})}}var instObj={"instCode":infoList[i].rowId,"instAttrList":list};instList.push(instObj)}data.sceneSubmit.instList=instList;console.log("====\\u8BA2\\u5355\\u63D0\\u4EA4===",data.sceneSubmit);success(data.sceneSubmit)};',
                                  },
                                  actionObjId: 'customActionCode',
                                  actionObjName: 'page',
                                  value: 'customActionCode',
                                  shielding: true,
                                  line_number: 5,
                                },
                                {
                                  dataName: 'action',
                                  dataId: 168655633275746600,
                                  children: [
                                    {
                                      dataName: 'callback',
                                      dataId: 168655633275746500,
                                      children: [
                                        {
                                          dataName: 'action',
                                          dataId: 168655633275792860,
                                          children: [
                                            {
                                              dataName: 'callback',
                                              dataId: 168655633275703260,
                                              children: [],
                                              value: 'callback1',
                                              params: [],
                                              shielding: true,
                                            },
                                            {
                                              dataName: 'callback',
                                              dataId: 168655633275785920,
                                              children: [],
                                              value: 'callback2',
                                              params: [],
                                              shielding: true,
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
                                            id: '391974',
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
                                                attrId: '197527',
                                                code: 'ipv4BeyondNum',
                                                name: 'IPv4超出个数',
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
                                                attrId: '3700349',
                                                code: 'areaType',
                                                name: '区域类型',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '7190864',
                                                code: 'joinWay',
                                                name: '接入方式',
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
                                              {
                                                attrId: '5486426',
                                                code: 'bandwidthName',
                                                name: '带宽名称',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '758304',
                                                code: 'rowId',
                                                name: '行id',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '2798624',
                                                code: 'ipv4BeyondCost',
                                                name: 'IPv4超出费用',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '8081859',
                                                code: 'exceedPrice\t',
                                                name: 'IPV4超出单价',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '7656485',
                                                code: 'row',
                                                name: '条数',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '756202',
                                                code: 'receiptsPriceSum',
                                                name: '总实收价（元）',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '7564814',
                                                code: 'marketName',
                                                name: '营销案名称',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                              },
                                            ],
                                            newData: '$data_1783626$',
                                            operateType: 3,
                                            onlySetPatch: true,
                                            otherObjectArrayOptions: {},
                                            targetDataSourcePaths: [],
                                          },
                                          actionObjId: 'setDataSource',
                                          actionObjName: 'page',
                                          value: 'setDataSource',
                                          shielding: true,
                                          line_number: 10,
                                        },
                                      ],
                                      value: 'callback1',
                                      params: [],
                                      shielding: true,
                                    },
                                    {
                                      dataName: 'callback',
                                      dataId: 168655633275720300,
                                      children: [],
                                      value: 'callback2',
                                      params: [],
                                      shielding: true,
                                    },
                                  ],
                                  todoOptions: ['actionTitle', 'editorCode'],
                                  options: {
                                    compId: 'customActionCode',
                                    compName: 'page',
                                    id: '1783626',
                                    pageJsonId: '537892',
                                    code: 'function main(data,state,success,fail){var infoList=reply_9706607.resultData;var feeInfoList=data.feeInfo||[];if(!infoList||infoList.length>0){feeInfoList=feeInfoList.concat(infoList)}for(var i=0;i<feeInfoList.length;i++){var feeInfo=feeInfoList[i];console.log("feeInfo:"+i,feeInfo)}success(feeInfoList)};',
                                  },
                                  actionObjId: 'customActionCode',
                                  actionObjName: 'page',
                                  value: 'customActionCode',
                                  tips: '注意：如果需要配合退出事件，请在代码块中增加return true',
                                  shielding: true,
                                  line_number: 9,
                                },
                                {
                                  dataName: 'action',
                                  dataId: 169943031297610180,
                                  children: [
                                    {
                                      dataName: 'callback',
                                      dataId: 169943031297665540,
                                      children: [
                                        {
                                          dataName: 'action',
                                          dataId: 169943031977935940,
                                          children: [
                                            {
                                              dataName: 'callback',
                                              dataId: 169943031977957400,
                                              children: [
                                                {
                                                  dataName: 'action',
                                                  dataId: 169943034308739600,
                                                  children: [
                                                    {
                                                      dataName: 'callback',
                                                      dataId: 169943034308706500,
                                                      children: [
                                                        {
                                                          dataName: 'action',
                                                          dataId: 169943034308789400,
                                                          children: [
                                                            {
                                                              dataName:
                                                                'callback',
                                                              dataId: 169943034308796300,
                                                              children: [],
                                                              value:
                                                                'callback1',
                                                              params: [],
                                                              shielding: true,
                                                            },
                                                            {
                                                              dataName:
                                                                'callback',
                                                              dataId: 169943034308785860,
                                                              children: [],
                                                              value:
                                                                'callback2',
                                                              params: [],
                                                              shielding: true,
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
                                                            compName: 'page',
                                                            id: '620731',
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
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                },
                                                                {
                                                                  attrId:
                                                                    '252243',
                                                                  code: 'standardPrice',
                                                                  name: '标准价格',
                                                                  type: 'string',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                },
                                                                {
                                                                  attrId:
                                                                    '137802',
                                                                  code: 'receiptsPrice',
                                                                  name: '实收价',
                                                                  type: 'string',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                },
                                                                {
                                                                  attrId:
                                                                    '963826',
                                                                  code: 'bandwidth',
                                                                  name: '带宽',
                                                                  type: 'string',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                },
                                                                {
                                                                  attrId:
                                                                    '5031659',
                                                                  code: 'ipv6GiveNum',
                                                                  name: 'IPv6赠送数',
                                                                  type: 'string',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                },
                                                                {
                                                                  attrId:
                                                                    '6377456',
                                                                  code: 'ipv4GiveNum',
                                                                  name: 'IPv4赠送数',
                                                                  type: 'string',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                },
                                                                {
                                                                  attrId:
                                                                    '665968',
                                                                  code: 'ipv6DemandNum',
                                                                  name: 'IPv6需求数',
                                                                  type: 'string',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                },
                                                                {
                                                                  attrId:
                                                                    '754893',
                                                                  code: 'ipv4DemandNum',
                                                                  name: 'IPv4需求数',
                                                                  type: 'string',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                },
                                                                {
                                                                  attrId:
                                                                    '197527',
                                                                  code: 'ipv4BeyondNum',
                                                                  name: 'IPv4超出个数',
                                                                  type: 'string',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                },
                                                                {
                                                                  attrId:
                                                                    '017672',
                                                                  code: 'ipv4BeyondCount',
                                                                  name: 'IPv4元/月/个',
                                                                  type: 'string',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                },
                                                                {
                                                                  attrId:
                                                                    '26139435',
                                                                  code: 'unitPrice',
                                                                  name: '单价（元/G）',
                                                                  type: 'string',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                },
                                                                {
                                                                  attrId:
                                                                    '62643',
                                                                  code: 'lastDiscount',
                                                                  name: '最终折扣',
                                                                  type: 'string',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                },
                                                                {
                                                                  attrId:
                                                                    '9425584',
                                                                  code: 'market',
                                                                  name: '营销案',
                                                                  type: 'string',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                },
                                                                {
                                                                  attrId:
                                                                    '442519',
                                                                  code: 'busiTypeName',
                                                                  name: '业务类型名称',
                                                                  type: 'string',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                },
                                                                {
                                                                  attrId:
                                                                    '3700349',
                                                                  code: 'areaType',
                                                                  name: '区域类型',
                                                                  type: 'string',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                },
                                                                {
                                                                  attrId:
                                                                    '7190864',
                                                                  code: 'joinWay',
                                                                  name: '接入方式',
                                                                  type: 'string',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                },
                                                                {
                                                                  attrId:
                                                                    '026113',
                                                                  code: 'bandwidthUp',
                                                                  name: '上行宽带',
                                                                  type: 'string',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                },
                                                                {
                                                                  attrId:
                                                                    '9865009',
                                                                  code: 'bandwidthDown',
                                                                  name: '下行宽带',
                                                                  type: 'string',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                },
                                                                {
                                                                  attrId:
                                                                    '262314',
                                                                  code: 'bandwidthPort',
                                                                  name: 'SDWAN端口带宽',
                                                                  type: 'string',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                },
                                                                {
                                                                  attrId:
                                                                    '4672304',
                                                                  code: 'singleUseFee',
                                                                  name: '一次性费用',
                                                                  type: 'string',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                },
                                                                {
                                                                  attrId:
                                                                    '567251',
                                                                  code: 'portFee',
                                                                  name: '端口费',
                                                                  type: 'string',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                },
                                                                {
                                                                  attrId:
                                                                    '9620426',
                                                                  code: 'ipv6BeyondNum',
                                                                  name: 'IPv6超出个数',
                                                                  type: 'string',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                },
                                                                {
                                                                  attrId:
                                                                    '1137346',
                                                                  code: 'ipv6BeyondCount',
                                                                  name: 'IPv6元/月/个',
                                                                  type: 'string',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                },
                                                                {
                                                                  attrId:
                                                                    '467282',
                                                                  code: 'standardPriceSdWan',
                                                                  name: 'SDWAN标准价格',
                                                                  type: 'string',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                },
                                                                {
                                                                  attrId:
                                                                    '801439',
                                                                  code: 'receiptsPriceSdWan',
                                                                  name: 'SDWAN实收价格',
                                                                  type: 'string',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                },
                                                                {
                                                                  attrId:
                                                                    '5486426',
                                                                  code: 'bandwidthName',
                                                                  name: '带宽名称',
                                                                  type: 'string',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                },
                                                                {
                                                                  attrId:
                                                                    '758304',
                                                                  code: 'rowId',
                                                                  name: '行id',
                                                                  type: 'string',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                },
                                                                {
                                                                  attrId:
                                                                    '2798624',
                                                                  code: 'ipv4BeyondCost',
                                                                  name: 'IPv4超出费用',
                                                                  type: 'string',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                },
                                                                {
                                                                  attrId:
                                                                    '8081859',
                                                                  code: 'exceedPrice\t',
                                                                  name: 'IPV4超出单价',
                                                                  type: 'string',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                },
                                                                {
                                                                  attrId:
                                                                    '7656485',
                                                                  code: 'row',
                                                                  name: '条数',
                                                                  type: 'string',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                },
                                                                {
                                                                  attrId:
                                                                    '756202',
                                                                  code: 'receiptsPriceSum',
                                                                  name: '总实收价（元）',
                                                                  type: 'string',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                },
                                                                {
                                                                  attrId:
                                                                    '7564814',
                                                                  code: 'marketName',
                                                                  name: '营销案名称',
                                                                  type: 'string',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                },
                                                              ],
                                                            newData:
                                                              '$data_558957$',
                                                            operateType: 3,
                                                            onlySetPatch: true,
                                                            otherObjectArrayOptions:
                                                              {},
                                                            targetDataSourcePaths:
                                                              [],
                                                          },
                                                          actionObjId:
                                                            'setDataSource',
                                                          actionObjName: 'page',
                                                          value:
                                                            'setDataSource',
                                                          shielding: true,
                                                          line_number: 14,
                                                        },
                                                      ],
                                                      value: 'callback1',
                                                      params: [],
                                                      shielding: true,
                                                    },
                                                    {
                                                      dataName: 'callback',
                                                      dataId: 169943034308754560,
                                                      children: [],
                                                      value: 'callback2',
                                                      params: [],
                                                      shielding: true,
                                                    },
                                                  ],
                                                  todoOptions: [
                                                    'actionTitle',
                                                    'editorCode',
                                                  ],
                                                  options: {
                                                    compId: 'customActionCode',
                                                    compName: 'page',
                                                    id: '558957',
                                                    pageJsonId: '537892',
                                                    code: 'function main(data,state,success,fail){var _reply_,_reply_2;var infoList=reply_9706607.resultData;var feeInfoList=data.feeInfo||[];if(!infoList||infoList.length>0){feeInfoList=feeInfoList.concat(infoList)}var provinceList=(_reply_=reply_0908647)===null||_reply_===void 0?void 0:_reply_.resultData;var cityList=(_reply_2=reply_56874)===null||_reply_2===void 0?void 0:_reply_2.resultData;for(var i=0;i<feeInfoList.length;i++){var feeInfo=feeInfoList[i];var as=feeInfo.fromProvinceName;var zs=feeInfo.toProvinceName;var aCity=feeInfo.fromCityName;var zCity=feeInfo.toCityName;var f=feeInfo.revenueShare;var a=feeInfo.fromShare;var z=feeInfo.toShare;var ap=provinceList.filter(function(province){return province.attrValueName==as});if(ap.length>0){feeInfo.fromProvince=ap[0].attrValue}var zp=provinceList.filter(function(province){return province.attrValueName==zs});if(zp.length>0){feeInfo.toProvince=zp[0].attrValue}var ac=cityList.filter(function(city){return city.attrValueName==aCity});if(ac.length>0){console.log("city:",ac);feeInfo.fromCity=ac[0].attrValue}var zc=cityList.filter(function(city){return city.attrValueName==zCity});if(zc.length>0){feeInfo.toCity=zc[0].attrValue}var result="";if(as!="\\u798F\\u5EFA"&&zs!="\\u798F\\u5EFA"){console.log("\\u90FD\\u4E0D\\u4E3A\\u798F\\u5EFA");result="\\u798F\\u5EFA:"+f+"%,"+"A\\u7701\\u4EFD"+a+"%,"+"Z\\u7701\\u4EFD:"+z+"%";if(parseFloat(f)+parseFloat(a)+parseFloat(z)!=100){fail()}else{success()}}else{console.log("\\u6709\\u4E00\\u4E2A\\u4E3A\\u798F\\u5EFA");data.feeInfo.revenueShare="";result="A\\u7701\\u4EFD"+a+"%,"+"Z\\u7701\\u4EFD:"+z+"%";if(parseFloat(a)+parseFloat(z)!=100){fail()}else{success()}}feeInfo.revenueShareName=result;var officePrice=feeInfo.officePrice;var onePrice=feeInfo.receiptsPrice;if(onePrice<officePrice){feeInfo.flag="1"}else{feeInfo.flag="2"}console.log("feeInfo:"+i,feeInfo)}success(feeInfoList)};',
                                                  },
                                                  actionObjId:
                                                    'customActionCode',
                                                  actionObjName: 'page',
                                                  value: 'customActionCode',
                                                  tips: '注意：如果需要配合退出事件，请在代码块中增加return true',
                                                  shielding: true,
                                                  line_number: 13,
                                                },
                                              ],
                                              value: 'callback1',
                                              params: [],
                                              shielding: true,
                                            },
                                            {
                                              dataName: 'callback',
                                              dataId: 169943031977959780,
                                              children: [],
                                              value: 'callback2',
                                              params: [],
                                              shielding: true,
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
                                            id: '56874',
                                            pageJsonId: '8430824',
                                            sync: false,
                                            method: 'post',
                                            url: '/app/rhin/gateway/callRhinEngine',
                                            _capabilityCode:
                                              'qryCatalogAttrValueList',
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
                                                        parents: [
                                                          'root',
                                                          'body',
                                                        ],
                                                        id: 'root.body.catalogCode',
                                                        dataKey:
                                                          '6607149_root.body.catalogCode',
                                                        value: {
                                                          type: [
                                                            'context',
                                                            '$state.catalogCode$',
                                                          ],
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
                                                        parents: [
                                                          'root',
                                                          'body',
                                                        ],
                                                        id: 'root.body.attrCode',
                                                        dataKey:
                                                          '6607149_root.body.attrCode',
                                                        value: {
                                                          type: ['customize'],
                                                          code: 'fromCity',
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
                                                    dataKey:
                                                      '6607149_root.body',
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
                                          actionObjId: 'apiRequest',
                                          actionObjName: 'system',
                                          value: 'apiRequest',
                                          shielding: true,
                                          line_number: 12,
                                        },
                                        {
                                          dataName: 'action',
                                          dataId: 169943037151330020,
                                          children: [],
                                          todoOptions: ['valueArray'],
                                          options: {
                                            compId: 'debug',
                                            compName: 'system',
                                            id: '40449',
                                            pageJsonId: '537892',
                                            value: [
                                              '$reply_0908647?.resultData$',
                                            ],
                                          },
                                          actionObjId: 'debug',
                                          actionObjName: 'system',
                                          value: 'console',
                                          shielding: true,
                                          line_number: 15,
                                        },
                                      ],
                                      value: 'callback1',
                                      params: [],
                                      shielding: true,
                                    },
                                    {
                                      dataName: 'callback',
                                      dataId: 169943031297607330,
                                      children: [],
                                      value: 'callback2',
                                      params: [],
                                      shielding: true,
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
                                    id: '0908647',
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
                                                dataKey:
                                                  '0908647_root.body.catalogCode',
                                                value: {
                                                  type: [
                                                    'context',
                                                    '$state.catalogCode$',
                                                  ],
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
                                                dataKey:
                                                  '0908647_root.body.attrCode',
                                                value: {
                                                  type: ['customize'],
                                                  code: 'fromProvince',
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
                                            dataKey: '0908647_root.body',
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
                                            dataKey: '0908647_root.header',
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
                                            dataKey: '0908647_root.path',
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
                                            dataKey: '0908647_root.query',
                                          },
                                        ],
                                        _id: 'root',
                                        compType: 'Input',
                                        isRoot: true,
                                        parents: [],
                                        key: '0',
                                        id: 'root',
                                        dataKey: '0908647_root',
                                      },
                                    ],
                                  },
                                  actionObjId: 'apiRequest',
                                  actionObjName: 'system',
                                  value: 'apiRequest',
                                  shielding: true,
                                  line_number: 11,
                                },
                                {
                                  dataName: 'action',
                                  dataId: 169943547913904350,
                                  children: [
                                    {
                                      dataName: 'callback',
                                      dataId: 169943547913919580,
                                      children: [
                                        {
                                          dataName: 'action',
                                          dataId: 169943547913928420,
                                          children: [
                                            {
                                              dataName: 'callback',
                                              dataId: 169943547913946400,
                                              children: [
                                                {
                                                  dataName: 'action',
                                                  dataId: 169951644246296930,
                                                  children: [
                                                    {
                                                      dataName: 'callback',
                                                      dataId: 169951644246287140,
                                                      children: [
                                                        {
                                                          dataName: 'action',
                                                          dataId: 169951646426443600,
                                                          children: [
                                                            {
                                                              dataName:
                                                                'callback',
                                                              dataId: 169951646426437760,
                                                              children: [
                                                                {
                                                                  dataName:
                                                                    'action',
                                                                  dataId: 169951647938095840,
                                                                  children: [
                                                                    {
                                                                      dataName:
                                                                        'callback',
                                                                      dataId: 169951647938066900,
                                                                      children:
                                                                        [
                                                                          {
                                                                            dataName:
                                                                              'action',
                                                                            dataId: 169951647938026430,
                                                                            children:
                                                                              [
                                                                                {
                                                                                  dataName:
                                                                                    'callback',
                                                                                  dataId: 169951647938085400,
                                                                                  children:
                                                                                    [
                                                                                      {
                                                                                        dataName:
                                                                                          'action',
                                                                                        dataId: 169951647938087700,
                                                                                        children:
                                                                                          [
                                                                                            {
                                                                                              dataName:
                                                                                                'callback',
                                                                                              dataId: 169951647938072700,
                                                                                              children:
                                                                                                [
                                                                                                  {
                                                                                                    dataName:
                                                                                                      'action',
                                                                                                    dataId: 169951647938056580,
                                                                                                    children:
                                                                                                      [
                                                                                                        {
                                                                                                          dataName:
                                                                                                            'callback',
                                                                                                          dataId: 169951647938062100,
                                                                                                          children:
                                                                                                            [
                                                                                                              {
                                                                                                                dataName:
                                                                                                                  'action',
                                                                                                                dataId: 169951647938009920,
                                                                                                                children:
                                                                                                                  [
                                                                                                                    {
                                                                                                                      dataName:
                                                                                                                        'callback',
                                                                                                                      dataId: 169951647938058900,
                                                                                                                      children:
                                                                                                                        [
                                                                                                                          {
                                                                                                                            dataName:
                                                                                                                              'action',
                                                                                                                            dataId: 169951647938071070,
                                                                                                                            children:
                                                                                                                              [
                                                                                                                                {
                                                                                                                                  dataName:
                                                                                                                                    'callback',
                                                                                                                                  dataId: 169951647938093440,
                                                                                                                                  children:
                                                                                                                                    [],
                                                                                                                                  value:
                                                                                                                                    'callback1',
                                                                                                                                  params:
                                                                                                                                    [],
                                                                                                                                  shielding:
                                                                                                                                    true,
                                                                                                                                },
                                                                                                                                {
                                                                                                                                  dataName:
                                                                                                                                    'callback',
                                                                                                                                  dataId: 169951647938034600,
                                                                                                                                  children:
                                                                                                                                    [],
                                                                                                                                  value:
                                                                                                                                    'callback2',
                                                                                                                                  params:
                                                                                                                                    [],
                                                                                                                                  shielding:
                                                                                                                                    true,
                                                                                                                                },
                                                                                                                              ],
                                                                                                                            todoOptions:
                                                                                                                              [
                                                                                                                                'customFuncName',
                                                                                                                                'customFuncParams',
                                                                                                                              ],
                                                                                                                            options:
                                                                                                                              {
                                                                                                                                compId:
                                                                                                                                  'callSelfFunc',
                                                                                                                                compName:
                                                                                                                                  'system',
                                                                                                                                id: '180248',
                                                                                                                                pageJsonId:
                                                                                                                                  '537892',
                                                                                                                                customFuncName:
                                                                                                                                  'updateTitle',
                                                                                                                              },
                                                                                                                            actionObjId:
                                                                                                                              'callSelfFunc',
                                                                                                                            actionObjName:
                                                                                                                              'system',
                                                                                                                            value:
                                                                                                                              'callSelfFunc',
                                                                                                                            shielding:
                                                                                                                              true,
                                                                                                                            line_number: 25,
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
                                                                                                                      dataId: 169951647938012130,
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
                                                                                                                    id: '153902',
                                                                                                                    pageJsonId:
                                                                                                                      '537892',
                                                                                                                    dataSourceId: 166519807387797900,
                                                                                                                    dataSourceName:
                                                                                                                      'feeInfo',
                                                                                                                    dataSourceRelType:
                                                                                                                      'custom',
                                                                                                                    dataSourceReloadFilter:
                                                                                                                      [],
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
                                                                                                                            '6429123',
                                                                                                                          code: 'ipv6BeyondSel',
                                                                                                                          name: 'IPv6超出选择',
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
                                                                                                                            '2152803',
                                                                                                                          code: 'ipv6BeyondCost',
                                                                                                                          name: 'IPv6超出费用',
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
                                                                                                                    operateType: 1,
                                                                                                                    onlySetPatch:
                                                                                                                      true,
                                                                                                                    otherObjectArrayOptions:
                                                                                                                      {},
                                                                                                                  },
                                                                                                                actionObjId:
                                                                                                                  'setDataSource',
                                                                                                                actionObjName:
                                                                                                                  'page',
                                                                                                                value:
                                                                                                                  'setDataSource',
                                                                                                                line_number: 24,
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
                                                                                                          dataId: 169951647938090400,
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
                                                                                                        'pathname',
                                                                                                        'customFuncName',
                                                                                                        'customFuncParams',
                                                                                                      ],
                                                                                                    options:
                                                                                                      {
                                                                                                        compId:
                                                                                                          'callParentCustomFunc',
                                                                                                        compName:
                                                                                                          'system',
                                                                                                        id: '433487',
                                                                                                        pageJsonId:
                                                                                                          '537892',
                                                                                                        pathname:
                                                                                                          '/auditOrderPrepare',
                                                                                                        pageId:
                                                                                                          '884045146848604160',
                                                                                                        customFuncName:
                                                                                                          'getFactor',
                                                                                                        customFuncParams:
                                                                                                          '$data_688556$',
                                                                                                        modalPath:
                                                                                                          '/auditOrderPrepare',
                                                                                                      },
                                                                                                    actionObjId:
                                                                                                      'callParentCustomFunc',
                                                                                                    actionObjName:
                                                                                                      'system',
                                                                                                    value:
                                                                                                      'callParentCustomFunc',
                                                                                                    line_number: 23,
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
                                                                                              dataId: 169951647938041200,
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
                                                                                            'actionTitle',
                                                                                            'editorCode',
                                                                                          ],
                                                                                        options:
                                                                                          {
                                                                                            compId:
                                                                                              'customActionCode',
                                                                                            compName:
                                                                                              'page',
                                                                                            id: '688556',
                                                                                            pageJsonId:
                                                                                              '537892',
                                                                                            code: 'function main(data,state,success,fail){var infoList=data_608728.feeInfoList;var instList=data.sceneSubmit.instList||[];for(var i=0;i<infoList.length;i++){if(infoList[i].marketList!=null&&infoList[i].marketList!=undefined){infoList[i].marketList=JSON.parse(infoList[i].marketList)}var list=[];for(var key in infoList[i]){if(key!="rowId"&&key!="marketList"){list.push({"attrCode":key,"attrName":"","attrValue":infoList[i][key]})}if(key=="marketList"){list.push({"attrCode":key,"attrName":"","attrValue":JSON.stringify(infoList[i][key])})}}var instObj={"instCode":infoList[i].rowId,"instAttrList":list};instList.push(instObj)}data.sceneSubmit.instList=instList;console.log("====\\u8BA2\\u5355\\u63D0\\u4EA4===",data.sceneSubmit);success(data.sceneSubmit)};',
                                                                                          },
                                                                                        actionObjId:
                                                                                          'customActionCode',
                                                                                        actionObjName:
                                                                                          'page',
                                                                                        value:
                                                                                          'customActionCode',
                                                                                        line_number: 22,
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
                                                                                  dataId: 169951647938019740,
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
                                                                                id: '862242',
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
                                                                                  '$data_608728.feeInfoList$',
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
                                                                            line_number: 21,
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
                                                                      dataId: 169951647938022820,
                                                                      children:
                                                                        [],
                                                                      value:
                                                                        'callback2',
                                                                      params:
                                                                        [],
                                                                    },
                                                                  ],
                                                                  todoOptions: [
                                                                    'actionTitle',
                                                                    'editorCode',
                                                                  ],
                                                                  options: {
                                                                    compId:
                                                                      'customActionCode',
                                                                    compName:
                                                                      'page',
                                                                    id: '608728',
                                                                    pageJsonId:
                                                                      '537892',
                                                                    code: 'function main(data,state,success,fail){var _reply_,_reply_2,_reply_3,_reply_4;var infoList=reply_9706607.resultData;var feeInfoList=data.feeInfo||[];var provinceList=(_reply_=reply_8324253)===null||_reply_===void 0?void 0:_reply_.resultData;var cityList=(_reply_2=reply_471265)===null||_reply_2===void 0?void 0:_reply_2.resultData;var accessWays=(_reply_3=reply_114474)===null||_reply_3===void 0?void 0:_reply_3.resultData;var lintTypes=(_reply_4=reply_2501709)===null||_reply_4===void 0?void 0:_reply_4.resultData;console.log("\\u63A5\\u5165\\u65B9\\u5F0F:",accessWays);console.log("\\u4E13\\u7EBF\\u7C7B\\u578B:",lintTypes);for(var i=0;i<infoList.length;i++){var feeInfo=infoList[i];var as=feeInfo.fromProvinceName;var zs=feeInfo.toProvinceName;var aCity=feeInfo.fromCityName;var zCity=feeInfo.toCityName;var f=feeInfo.revenueShare;var a=feeInfo.fromShare;var z=feeInfo.toShare;var accessWay=feeInfo.accessWay;var lineType=feeInfo.lineType;var ap=provinceList.filter(function(province){return province.attrValueName==as});if(ap.length>0){feeInfo.fromProvince=ap[0].attrValue}var zp=provinceList.filter(function(province){return province.attrValueName==zs});if(zp.length>0){feeInfo.toProvince=zp[0].attrValue}var ac=cityList.filter(function(city){return city.attrValueName==aCity});if(ac.length>0){console.log("city:",ac);feeInfo.fromCity=ac[0].attrValue}var zc=cityList.filter(function(city){return city.attrValueName==zCity});if(zc.length>0){feeInfo.toCity=zc[0].attrValue}var aw=accessWays.filter(function(a){return a.attrValueName==accessWay});if(aw.length>0){feeInfo.accessWay=aw[0].attrValue}var lt=lintTypes.filter(function(l){return l.attrValueName==lineType});if(lt.length>0){feeInfo.lineType=lt[0].attrValue}var result="";if(as!="\\u798F\\u5EFA"&&zs!="\\u798F\\u5EFA"){console.log("\\u90FD\\u4E0D\\u4E3A\\u798F\\u5EFA");result="\\u798F\\u5EFA:"+f+"%,"+"A\\u7701\\u4EFD"+a+"%,"+"Z\\u7701\\u4EFD:"+z+"%";if(parseFloat(f)+parseFloat(a)+parseFloat(z)!=100){fail()}else{success()}}else{console.log("\\u6709\\u4E00\\u4E2A\\u4E3A\\u798F\\u5EFA");feeInfo.revenueShare="";result="A\\u7701\\u4EFD"+a+"%,"+"Z\\u7701\\u4EFD:"+z+"%";if(parseFloat(a)+parseFloat(z)!=100){fail()}else{success()}}feeInfo.revenueShareName=result;var officePrice=feeInfo.officePrice;var onePrice=feeInfo.receiptsPrice;if(onePrice<officePrice){feeInfo.flag="1"}else{feeInfo.flag="2"}console.log("feeInfo:"+i,feeInfo)}if(infoList.length>0){feeInfoList=feeInfoList.concat(infoList)}success({feeInfoList:feeInfoList,infoList:infoList})};',
                                                                    actionTitle:
                                                                      '设置表单值和矩阵',
                                                                  },
                                                                  actionObjId:
                                                                    'customActionCode',
                                                                  actionObjName:
                                                                    'page',
                                                                  value:
                                                                    'customActionCode',
                                                                  tips: '注意：如果需要配合退出事件，请在代码块中增加return true',
                                                                  line_number: 20,
                                                                },
                                                              ],
                                                              value:
                                                                'callback1',
                                                              params: [],
                                                            },
                                                            {
                                                              dataName:
                                                                'callback',
                                                              dataId: 169951646426411070,
                                                              children: [],
                                                              value:
                                                                'callback2',
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
                                                            compId:
                                                              'apiRequest',
                                                            compName: 'system',
                                                            id: '2501709',
                                                            pageJsonId:
                                                              '8430824',
                                                            sync: false,
                                                            method: 'post',
                                                            url: '/app/rhin/gateway/callRhinEngine',
                                                            _capabilityCode:
                                                              'qryCatalogAttrValueList',
                                                            _apiCode:
                                                              'qryCatalogAttrValueList',
                                                            _source: 'rhin',
                                                            _serviceId:
                                                              '889391610000404480',
                                                            _serviceTitle:
                                                              '查询场景规格属性值列表: qryCatalogAttrValueList',
                                                            params: 'object',
                                                            apiRequestSetParams:
                                                              [
                                                                {
                                                                  code: 'root',
                                                                  name: '根节点',
                                                                  attrType:
                                                                    'object',
                                                                  children: [
                                                                    {
                                                                      code: 'body',
                                                                      name: '请求体',
                                                                      attrType:
                                                                        'object',
                                                                      children:
                                                                        [
                                                                          {
                                                                            code: 'catalogCode',
                                                                            attrType:
                                                                              'field',
                                                                            type: 'string',
                                                                            mustFlag:
                                                                              'F',
                                                                            _id: 'root.body.catalogCode',
                                                                            compType:
                                                                              'Input',
                                                                            name: 'catalogCode',
                                                                            parents:
                                                                              [
                                                                                'root',
                                                                                'body',
                                                                              ],
                                                                            id: 'root.body.catalogCode',
                                                                            dataKey:
                                                                              '5872027_root.body.catalogCode',
                                                                            value:
                                                                              {
                                                                                type: [
                                                                                  'context',
                                                                                  '$state.catalogCode$',
                                                                                ],
                                                                                code: '',
                                                                              },
                                                                            parentType:
                                                                              'object',
                                                                            parentKey:
                                                                              '0-3',
                                                                            key: '0-3-0',
                                                                            _deletable:
                                                                              true,
                                                                          },
                                                                          {
                                                                            code: 'attrCode',
                                                                            attrType:
                                                                              'field',
                                                                            type: 'string',
                                                                            mustFlag:
                                                                              'F',
                                                                            _id: 'root.body.attrCode',
                                                                            compType:
                                                                              'Input',
                                                                            name: 'attrCode',
                                                                            parents:
                                                                              [
                                                                                'root',
                                                                                'body',
                                                                              ],
                                                                            id: 'root.body.attrCode',
                                                                            dataKey:
                                                                              '5872027_root.body.attrCode',
                                                                            value:
                                                                              {
                                                                                type: [
                                                                                  'customize',
                                                                                ],
                                                                                code: 'lineType',
                                                                              },
                                                                            parentType:
                                                                              'object',
                                                                            parentKey:
                                                                              '0-3',
                                                                            key: '0-3-1',
                                                                            _deletable:
                                                                              true,
                                                                          },
                                                                        ],
                                                                      _id: 'root.body',
                                                                      compType:
                                                                        'Input',
                                                                      parents: [
                                                                        'root',
                                                                      ],
                                                                      id: 'root.body',
                                                                      dataKey:
                                                                        '5872027_root.body',
                                                                      key: '0-3',
                                                                      parentType:
                                                                        'object',
                                                                      parentKey:
                                                                        '0',
                                                                      _deletable:
                                                                        true,
                                                                    },
                                                                  ],
                                                                  _id: 'root',
                                                                  compType:
                                                                    'Input',
                                                                  isRoot: true,
                                                                  parents: [],
                                                                  key: '0',
                                                                  id: 'root',
                                                                  dataKey:
                                                                    '5872027_root',
                                                                  _deletable:
                                                                    true,
                                                                },
                                                                {
                                                                  code: 'header',
                                                                  name: '请求头参数',
                                                                  attrType:
                                                                    'object',
                                                                  _id: 'header',
                                                                  compType:
                                                                    'Input',
                                                                  parents: [],
                                                                  key: '0',
                                                                },
                                                                {
                                                                  code: 'path',
                                                                  name: '请求路径参数',
                                                                  attrType:
                                                                    'object',
                                                                  _id: 'path',
                                                                  compType:
                                                                    'Input',
                                                                  parents: [],
                                                                  key: '1',
                                                                },
                                                                {
                                                                  code: 'query',
                                                                  name: 'URL 参数',
                                                                  attrType:
                                                                    'object',
                                                                  _id: 'query',
                                                                  compType:
                                                                    'Input',
                                                                  parents: [],
                                                                  key: '2',
                                                                },
                                                                {
                                                                  code: 'body',
                                                                  name: '请求体',
                                                                  attrType:
                                                                    'object',
                                                                  children: [
                                                                    {
                                                                      code: 'catalogCode',
                                                                      attrType:
                                                                        'field',
                                                                      type: 'string',
                                                                      mustFlag:
                                                                        'F',
                                                                      _id: 'body.catalogCode',
                                                                      compType:
                                                                        'Input',
                                                                      name: 'catalogCode',
                                                                      parents: [
                                                                        'body',
                                                                      ],
                                                                      parentType:
                                                                        'object',
                                                                      parentKey:
                                                                        '3',
                                                                      key: '3-0',
                                                                    },
                                                                    {
                                                                      code: 'attrCode',
                                                                      attrType:
                                                                        'field',
                                                                      type: 'string',
                                                                      mustFlag:
                                                                        'F',
                                                                      _id: 'body.attrCode',
                                                                      compType:
                                                                        'Input',
                                                                      name: 'attrCode',
                                                                      parents: [
                                                                        'body',
                                                                      ],
                                                                      parentType:
                                                                        'object',
                                                                      parentKey:
                                                                        '3',
                                                                      key: '3-1',
                                                                    },
                                                                  ],
                                                                  _id: 'body',
                                                                  compType:
                                                                    'Input',
                                                                  parents: [],
                                                                  key: '3',
                                                                },
                                                              ],
                                                          },
                                                          actionObjId:
                                                            'apiRequest',
                                                          actionObjName:
                                                            'system',
                                                          value: 'apiRequest',
                                                          line_number: 19,
                                                        },
                                                      ],
                                                      value: 'callback1',
                                                      params: [],
                                                    },
                                                    {
                                                      dataName: 'callback',
                                                      dataId: 169951644246386180,
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
                                                    id: '114474',
                                                    pageJsonId: '8430824',
                                                    sync: false,
                                                    method: 'post',
                                                    url: '/app/rhin/gateway/callRhinEngine',
                                                    _capabilityCode:
                                                      'qryCatalogAttrValueList',
                                                    _apiCode:
                                                      'qryCatalogAttrValueList',
                                                    _source: 'rhin',
                                                    _serviceId:
                                                      '889391610000404480',
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
                                                                attrType:
                                                                  'field',
                                                                type: 'string',
                                                                mustFlag: 'F',
                                                                _id: 'root.body.catalogCode',
                                                                compType:
                                                                  'Input',
                                                                name: 'catalogCode',
                                                                parents: [
                                                                  'root',
                                                                  'body',
                                                                ],
                                                                id: 'root.body.catalogCode',
                                                                dataKey:
                                                                  '847654_root.body.catalogCode',
                                                                value: {
                                                                  type: [
                                                                    'context',
                                                                    '$state.catalogCode$',
                                                                  ],
                                                                  code: '',
                                                                },
                                                                parentType:
                                                                  'object',
                                                                parentKey:
                                                                  '0-3',
                                                                key: '0-3-0',
                                                                _deletable:
                                                                  true,
                                                              },
                                                              {
                                                                code: 'attrCode',
                                                                attrType:
                                                                  'field',
                                                                type: 'string',
                                                                mustFlag: 'F',
                                                                _id: 'root.body.attrCode',
                                                                compType:
                                                                  'Input',
                                                                name: 'attrCode',
                                                                parents: [
                                                                  'root',
                                                                  'body',
                                                                ],
                                                                id: 'root.body.attrCode',
                                                                dataKey:
                                                                  '847654_root.body.attrCode',
                                                                value: {
                                                                  type: [
                                                                    'customize',
                                                                  ],
                                                                  code: 'accessWay',
                                                                },
                                                                parentType:
                                                                  'object',
                                                                parentKey:
                                                                  '0-3',
                                                                key: '0-3-1',
                                                                _deletable:
                                                                  true,
                                                              },
                                                            ],
                                                            _id: 'root.body',
                                                            compType: 'Input',
                                                            parents: ['root'],
                                                            id: 'root.body',
                                                            dataKey:
                                                              '847654_root.body',
                                                            parentType:
                                                              'object',
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
                                                            parentType:
                                                              'object',
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
                                                            parentType:
                                                              'object',
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
                                                  actionObjId: 'apiRequest',
                                                  actionObjName: 'system',
                                                  value: 'apiRequest',
                                                  line_number: 18,
                                                },
                                              ],
                                              value: 'callback1',
                                              params: [],
                                            },
                                            {
                                              dataName: 'callback',
                                              dataId: 169943547913903140,
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
                                            id: '471265',
                                            pageJsonId: '8430824',
                                            sync: false,
                                            method: 'post',
                                            url: '/app/rhin/gateway/callRhinEngine',
                                            _capabilityCode:
                                              'qryCatalogAttrValueList',
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
                                                        parents: [
                                                          'root',
                                                          'body',
                                                        ],
                                                        id: 'root.body.catalogCode',
                                                        dataKey:
                                                          '6607149_root.body.catalogCode',
                                                        value: {
                                                          type: [
                                                            'context',
                                                            '$state.catalogCode$',
                                                          ],
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
                                                        parents: [
                                                          'root',
                                                          'body',
                                                        ],
                                                        id: 'root.body.attrCode',
                                                        dataKey:
                                                          '6607149_root.body.attrCode',
                                                        value: {
                                                          type: ['customize'],
                                                          code: 'fromCity',
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
                                                    dataKey:
                                                      '6607149_root.body',
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
                                          actionObjId: 'apiRequest',
                                          actionObjName: 'system',
                                          value: 'apiRequest',
                                          line_number: 17,
                                        },
                                        {
                                          dataName: 'action',
                                          dataId: 169943547913948930,
                                          children: [],
                                          todoOptions: ['valueArray'],
                                          options: {
                                            compId: 'debug',
                                            compName: 'system',
                                            id: '965085',
                                            pageJsonId: '537892',
                                            value: [
                                              '$reply_8324253?.resultData$',
                                            ],
                                          },
                                          actionObjId: 'debug',
                                          actionObjName: 'system',
                                          value: 'console',
                                          line_number: 26,
                                        },
                                      ],
                                      value: 'callback1',
                                      params: [],
                                    },
                                    {
                                      dataName: 'callback',
                                      dataId: 169943547913960420,
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
                                    id: '8324253',
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
                                                dataKey:
                                                  '0908647_root.body.catalogCode',
                                                value: {
                                                  type: [
                                                    'context',
                                                    '$state.catalogCode$',
                                                  ],
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
                                                dataKey:
                                                  '0908647_root.body.attrCode',
                                                value: {
                                                  type: ['customize'],
                                                  code: 'fromProvince',
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
                                            dataKey: '0908647_root.body',
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
                                            dataKey: '0908647_root.header',
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
                                            dataKey: '0908647_root.path',
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
                                            dataKey: '0908647_root.query',
                                          },
                                        ],
                                        _id: 'root',
                                        compType: 'Input',
                                        isRoot: true,
                                        parents: [],
                                        key: '0',
                                        id: 'root',
                                        dataKey: '0908647_root',
                                      },
                                    ],
                                  },
                                  actionObjId: 'apiRequest',
                                  actionObjName: 'system',
                                  value: 'apiRequest',
                                  line_number: 16,
                                },
                              ],
                              condition: [],
                              callback: [
                                {
                                  type: 'customActionCode',
                                  dataId: 167647363168551870,
                                  shielding: true,
                                  options: {
                                    compId: 'customActionCode',
                                    compName: 'page',
                                    id: '0024625',
                                    pageJsonId: '537892',
                                    code: 'function main(data,state,success,fail){var infoList=reply_9706607.resultData;var instList=data.sceneSubmit.instList||[];for(var i=0;i<infoList.length;i++){if(infoList[i].marketList!=null&&infoList[i].marketList!=undefined){infoList[i].marketList=JSON.parse(infoList[i].marketList)}var list=[];for(var key in infoList[i]){if(key!="rowId"&&key!="marketList"){list.push({"attrCode":key,"attrName":"","attrValue":infoList[i][key]})}if(key=="marketList"){list.push({"attrCode":key,"attrName":"","attrValue":JSON.stringify(infoList[i][key])})}}var instObj={"instCode":infoList[i].rowId,"instAttrList":list};instList.push(instObj)}data.sceneSubmit.instList=instList;console.log("====\\u8BA2\\u5355\\u63D0\\u4EA4===",data.sceneSubmit);success(data.sceneSubmit)};',
                                  },
                                  line_number: 5,
                                  callback1: [
                                    {
                                      type: 'callParentCustomFunc',
                                      dataId: 167647363168552700,
                                      shielding: true,
                                      options: {
                                        compId: 'callParentCustomFunc',
                                        compName: 'system',
                                        id: '442054',
                                        pageJsonId: '537892',
                                        pathname: '/auditOrderPrepare',
                                        pageId: '884045146848604160',
                                        customFuncName: 'getFactor',
                                        customFuncParams: '$data_0024625$',
                                        modalPath: '/auditOrderPrepare',
                                      },
                                      line_number: 6,
                                      callback1: [
                                        {
                                          type: 'setDataSource',
                                          dataId: 16764736316852324,
                                          shielding: true,
                                          options: {
                                            compId: 'setDataSource',
                                            compName: 'page',
                                            id: '152046',
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
                                                attrId: '3700349',
                                                code: 'areaType',
                                                name: '区域类型',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '7190864',
                                                code: 'joinWay',
                                                name: '接入方式',
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
                                              {
                                                attrId: '5486426',
                                                code: 'bandwidthName',
                                                name: '带宽名称',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '758304',
                                                code: 'rowId',
                                                name: '行id',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '2798624',
                                                code: 'ipv4BeyondCost',
                                                name: 'IPv4超出费用',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '8081859',
                                                code: 'exceedPrice\t',
                                                name: 'IPV4超出单价',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '7656485',
                                                code: 'row',
                                                name: '条数',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '756202',
                                                code: 'receiptsPriceSum',
                                                name: '总实收价（元）',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                              },
                                              {
                                                attrId: '7564814',
                                                code: 'marketName',
                                                name: '营销案名称',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                              },
                                            ],
                                            operateType: 1,
                                            onlySetPatch: true,
                                            otherObjectArrayOptions: {},
                                          },
                                          line_number: 7,
                                          callback1: [
                                            {
                                              type: 'callSelfFunc',
                                              dataId: 167647363168562780,
                                              shielding: true,
                                              options: {
                                                compId: 'callSelfFunc',
                                                compName: 'system',
                                                id: '860538',
                                                pageJsonId: '537892',
                                                customFuncName: 'updateTitle',
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
                                  callback2: [],
                                },
                                {
                                  type: 'customActionCode',
                                  dataId: 168655633275746600,
                                  shielding: true,
                                  options: {
                                    compId: 'customActionCode',
                                    compName: 'page',
                                    id: '1783626',
                                    pageJsonId: '537892',
                                    code: 'function main(data,state,success,fail){var infoList=reply_9706607.resultData;var feeInfoList=data.feeInfo||[];if(!infoList||infoList.length>0){feeInfoList=feeInfoList.concat(infoList)}for(var i=0;i<feeInfoList.length;i++){var feeInfo=feeInfoList[i];console.log("feeInfo:"+i,feeInfo)}success(feeInfoList)};',
                                  },
                                  line_number: 9,
                                  callback1: [
                                    {
                                      type: 'setDataSource',
                                      dataId: 168655633275792860,
                                      shielding: true,
                                      options: {
                                        compId: 'setDataSource',
                                        compName: 'page',
                                        id: '391974',
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
                                            attrId: '197527',
                                            code: 'ipv4BeyondNum',
                                            name: 'IPv4超出个数',
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
                                            attrId: '3700349',
                                            code: 'areaType',
                                            name: '区域类型',
                                            type: 'string',
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '7190864',
                                            code: 'joinWay',
                                            name: '接入方式',
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
                                          {
                                            attrId: '5486426',
                                            code: 'bandwidthName',
                                            name: '带宽名称',
                                            type: 'string',
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '758304',
                                            code: 'rowId',
                                            name: '行id',
                                            type: 'string',
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '2798624',
                                            code: 'ipv4BeyondCost',
                                            name: 'IPv4超出费用',
                                            type: 'string',
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '8081859',
                                            code: 'exceedPrice\t',
                                            name: 'IPV4超出单价',
                                            type: 'string',
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '7656485',
                                            code: 'row',
                                            name: '条数',
                                            type: 'string',
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '756202',
                                            code: 'receiptsPriceSum',
                                            name: '总实收价（元）',
                                            type: 'string',
                                            initialData: { type: 'static' },
                                          },
                                          {
                                            attrId: '7564814',
                                            code: 'marketName',
                                            name: '营销案名称',
                                            type: 'string',
                                            initialData: { type: 'static' },
                                          },
                                        ],
                                        newData: '$data_1783626$',
                                        operateType: 3,
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
                                {
                                  type: 'apiRequest',
                                  dataId: 169943031297610180,
                                  shielding: true,
                                  options: {
                                    compId: 'apiRequest',
                                    compName: 'system',
                                    id: '0908647',
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
                                                dataKey:
                                                  '0908647_root.body.catalogCode',
                                                value: {
                                                  type: [
                                                    'context',
                                                    '$state.catalogCode$',
                                                  ],
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
                                                dataKey:
                                                  '0908647_root.body.attrCode',
                                                value: {
                                                  type: ['customize'],
                                                  code: 'fromProvince',
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
                                            dataKey: '0908647_root.body',
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
                                            dataKey: '0908647_root.header',
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
                                            dataKey: '0908647_root.path',
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
                                            dataKey: '0908647_root.query',
                                          },
                                        ],
                                        _id: 'root',
                                        compType: 'Input',
                                        isRoot: true,
                                        parents: [],
                                        key: '0',
                                        id: 'root',
                                        dataKey: '0908647_root',
                                      },
                                    ],
                                  },
                                  line_number: 11,
                                  callback1: [
                                    {
                                      type: 'apiRequest',
                                      dataId: 169943031977935940,
                                      shielding: true,
                                      options: {
                                        compId: 'apiRequest',
                                        compName: 'system',
                                        id: '56874',
                                        pageJsonId: '8430824',
                                        sync: false,
                                        method: 'post',
                                        url: '/app/rhin/gateway/callRhinEngine',
                                        _capabilityCode:
                                          'qryCatalogAttrValueList',
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
                                                    dataKey:
                                                      '6607149_root.body.catalogCode',
                                                    value: {
                                                      type: [
                                                        'context',
                                                        '$state.catalogCode$',
                                                      ],
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
                                                    dataKey:
                                                      '6607149_root.body.attrCode',
                                                    value: {
                                                      type: ['customize'],
                                                      code: 'fromCity',
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
                                      line_number: 12,
                                      callback1: [
                                        {
                                          type: 'customActionCode',
                                          dataId: 169943034308739600,
                                          shielding: true,
                                          options: {
                                            compId: 'customActionCode',
                                            compName: 'page',
                                            id: '558957',
                                            pageJsonId: '537892',
                                            code: 'function main(data,state,success,fail){var _reply_,_reply_2;var infoList=reply_9706607.resultData;var feeInfoList=data.feeInfo||[];if(!infoList||infoList.length>0){feeInfoList=feeInfoList.concat(infoList)}var provinceList=(_reply_=reply_0908647)===null||_reply_===void 0?void 0:_reply_.resultData;var cityList=(_reply_2=reply_56874)===null||_reply_2===void 0?void 0:_reply_2.resultData;for(var i=0;i<feeInfoList.length;i++){var feeInfo=feeInfoList[i];var as=feeInfo.fromProvinceName;var zs=feeInfo.toProvinceName;var aCity=feeInfo.fromCityName;var zCity=feeInfo.toCityName;var f=feeInfo.revenueShare;var a=feeInfo.fromShare;var z=feeInfo.toShare;var ap=provinceList.filter(function(province){return province.attrValueName==as});if(ap.length>0){feeInfo.fromProvince=ap[0].attrValue}var zp=provinceList.filter(function(province){return province.attrValueName==zs});if(zp.length>0){feeInfo.toProvince=zp[0].attrValue}var ac=cityList.filter(function(city){return city.attrValueName==aCity});if(ac.length>0){console.log("city:",ac);feeInfo.fromCity=ac[0].attrValue}var zc=cityList.filter(function(city){return city.attrValueName==zCity});if(zc.length>0){feeInfo.toCity=zc[0].attrValue}var result="";if(as!="\\u798F\\u5EFA"&&zs!="\\u798F\\u5EFA"){console.log("\\u90FD\\u4E0D\\u4E3A\\u798F\\u5EFA");result="\\u798F\\u5EFA:"+f+"%,"+"A\\u7701\\u4EFD"+a+"%,"+"Z\\u7701\\u4EFD:"+z+"%";if(parseFloat(f)+parseFloat(a)+parseFloat(z)!=100){fail()}else{success()}}else{console.log("\\u6709\\u4E00\\u4E2A\\u4E3A\\u798F\\u5EFA");data.feeInfo.revenueShare="";result="A\\u7701\\u4EFD"+a+"%,"+"Z\\u7701\\u4EFD:"+z+"%";if(parseFloat(a)+parseFloat(z)!=100){fail()}else{success()}}feeInfo.revenueShareName=result;var officePrice=feeInfo.officePrice;var onePrice=feeInfo.receiptsPrice;if(onePrice<officePrice){feeInfo.flag="1"}else{feeInfo.flag="2"}console.log("feeInfo:"+i,feeInfo)}success(feeInfoList)};',
                                          },
                                          line_number: 13,
                                          callback1: [
                                            {
                                              type: 'setDataSource',
                                              dataId: 169943034308789400,
                                              shielding: true,
                                              options: {
                                                compId: 'setDataSource',
                                                compName: 'page',
                                                id: '620731',
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
                                                newData: '$data_558957$',
                                                operateType: 3,
                                                onlySetPatch: true,
                                                otherObjectArrayOptions: {},
                                                targetDataSourcePaths: [],
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
                                    {
                                      type: 'console',
                                      dataId: 169943037151330020,
                                      shielding: true,
                                      options: {
                                        compId: 'debug',
                                        compName: 'system',
                                        id: '40449',
                                        pageJsonId: '537892',
                                        value: ['$reply_0908647?.resultData$'],
                                      },
                                      line_number: 15,
                                    },
                                  ],
                                  callback2: [],
                                },
                                {
                                  type: 'apiRequest',
                                  dataId: 169943547913904350,
                                  options: {
                                    compId: 'apiRequest',
                                    compName: 'system',
                                    id: '8324253',
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
                                                dataKey:
                                                  '0908647_root.body.catalogCode',
                                                value: {
                                                  type: [
                                                    'context',
                                                    '$state.catalogCode$',
                                                  ],
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
                                                dataKey:
                                                  '0908647_root.body.attrCode',
                                                value: {
                                                  type: ['customize'],
                                                  code: 'fromProvince',
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
                                            dataKey: '0908647_root.body',
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
                                            dataKey: '0908647_root.header',
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
                                            dataKey: '0908647_root.path',
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
                                            dataKey: '0908647_root.query',
                                          },
                                        ],
                                        _id: 'root',
                                        compType: 'Input',
                                        isRoot: true,
                                        parents: [],
                                        key: '0',
                                        id: 'root',
                                        dataKey: '0908647_root',
                                      },
                                    ],
                                  },
                                  line_number: 16,
                                  callback1: [
                                    {
                                      type: 'apiRequest',
                                      dataId: 169943547913928420,
                                      options: {
                                        compId: 'apiRequest',
                                        compName: 'system',
                                        id: '471265',
                                        pageJsonId: '8430824',
                                        sync: false,
                                        method: 'post',
                                        url: '/app/rhin/gateway/callRhinEngine',
                                        _capabilityCode:
                                          'qryCatalogAttrValueList',
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
                                                    dataKey:
                                                      '6607149_root.body.catalogCode',
                                                    value: {
                                                      type: [
                                                        'context',
                                                        '$state.catalogCode$',
                                                      ],
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
                                                    dataKey:
                                                      '6607149_root.body.attrCode',
                                                    value: {
                                                      type: ['customize'],
                                                      code: 'fromCity',
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
                                      line_number: 17,
                                      callback1: [
                                        {
                                          type: 'apiRequest',
                                          dataId: 169951644246296930,
                                          options: {
                                            compId: 'apiRequest',
                                            compName: 'system',
                                            id: '114474',
                                            pageJsonId: '8430824',
                                            sync: false,
                                            method: 'post',
                                            url: '/app/rhin/gateway/callRhinEngine',
                                            _capabilityCode:
                                              'qryCatalogAttrValueList',
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
                                                        parents: [
                                                          'root',
                                                          'body',
                                                        ],
                                                        id: 'root.body.catalogCode',
                                                        dataKey:
                                                          '847654_root.body.catalogCode',
                                                        value: {
                                                          type: [
                                                            'context',
                                                            '$state.catalogCode$',
                                                          ],
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
                                                        parents: [
                                                          'root',
                                                          'body',
                                                        ],
                                                        id: 'root.body.attrCode',
                                                        dataKey:
                                                          '847654_root.body.attrCode',
                                                        value: {
                                                          type: ['customize'],
                                                          code: 'accessWay',
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
                                          line_number: 18,
                                          callback1: [
                                            {
                                              type: 'apiRequest',
                                              dataId: 169951646426443600,
                                              options: {
                                                compId: 'apiRequest',
                                                compName: 'system',
                                                id: '2501709',
                                                pageJsonId: '8430824',
                                                sync: false,
                                                method: 'post',
                                                url: '/app/rhin/gateway/callRhinEngine',
                                                _capabilityCode:
                                                  'qryCatalogAttrValueList',
                                                _apiCode:
                                                  'qryCatalogAttrValueList',
                                                _source: 'rhin',
                                                _serviceId:
                                                  '889391610000404480',
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
                                                            parents: [
                                                              'root',
                                                              'body',
                                                            ],
                                                            id: 'root.body.catalogCode',
                                                            dataKey:
                                                              '5872027_root.body.catalogCode',
                                                            value: {
                                                              type: [
                                                                'context',
                                                                '$state.catalogCode$',
                                                              ],
                                                              code: '',
                                                            },
                                                            parentType:
                                                              'object',
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
                                                            parents: [
                                                              'root',
                                                              'body',
                                                            ],
                                                            id: 'root.body.attrCode',
                                                            dataKey:
                                                              '5872027_root.body.attrCode',
                                                            value: {
                                                              type: [
                                                                'customize',
                                                              ],
                                                              code: 'lineType',
                                                            },
                                                            parentType:
                                                              'object',
                                                            parentKey: '0-3',
                                                            key: '0-3-1',
                                                            _deletable: true,
                                                          },
                                                        ],
                                                        _id: 'root.body',
                                                        compType: 'Input',
                                                        parents: ['root'],
                                                        id: 'root.body',
                                                        dataKey:
                                                          '5872027_root.body',
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
                                              line_number: 19,
                                              callback1: [
                                                {
                                                  type: 'customActionCode',
                                                  dataId: 169951647938095840,
                                                  options: {
                                                    compId: 'customActionCode',
                                                    compName: 'page',
                                                    id: '608728',
                                                    pageJsonId: '537892',
                                                    code: 'function main(data,state,success,fail){var _reply_,_reply_2,_reply_3,_reply_4;var infoList=reply_9706607.resultData;var feeInfoList=data.feeInfo||[];var provinceList=(_reply_=reply_8324253)===null||_reply_===void 0?void 0:_reply_.resultData;var cityList=(_reply_2=reply_471265)===null||_reply_2===void 0?void 0:_reply_2.resultData;var accessWays=(_reply_3=reply_114474)===null||_reply_3===void 0?void 0:_reply_3.resultData;var lintTypes=(_reply_4=reply_2501709)===null||_reply_4===void 0?void 0:_reply_4.resultData;console.log("\\u63A5\\u5165\\u65B9\\u5F0F:",accessWays);console.log("\\u4E13\\u7EBF\\u7C7B\\u578B:",lintTypes);for(var i=0;i<infoList.length;i++){var feeInfo=infoList[i];var as=feeInfo.fromProvinceName;var zs=feeInfo.toProvinceName;var aCity=feeInfo.fromCityName;var zCity=feeInfo.toCityName;var f=feeInfo.revenueShare;var a=feeInfo.fromShare;var z=feeInfo.toShare;var accessWay=feeInfo.accessWay;var lineType=feeInfo.lineType;var ap=provinceList.filter(function(province){return province.attrValueName==as});if(ap.length>0){feeInfo.fromProvince=ap[0].attrValue}var zp=provinceList.filter(function(province){return province.attrValueName==zs});if(zp.length>0){feeInfo.toProvince=zp[0].attrValue}var ac=cityList.filter(function(city){return city.attrValueName==aCity});if(ac.length>0){console.log("city:",ac);feeInfo.fromCity=ac[0].attrValue}var zc=cityList.filter(function(city){return city.attrValueName==zCity});if(zc.length>0){feeInfo.toCity=zc[0].attrValue}var aw=accessWays.filter(function(a){return a.attrValueName==accessWay});if(aw.length>0){feeInfo.accessWay=aw[0].attrValue}var lt=lintTypes.filter(function(l){return l.attrValueName==lineType});if(lt.length>0){feeInfo.lineType=lt[0].attrValue}var result="";if(as!="\\u798F\\u5EFA"&&zs!="\\u798F\\u5EFA"){console.log("\\u90FD\\u4E0D\\u4E3A\\u798F\\u5EFA");result="\\u798F\\u5EFA:"+f+"%,"+"A\\u7701\\u4EFD"+a+"%,"+"Z\\u7701\\u4EFD:"+z+"%";if(parseFloat(f)+parseFloat(a)+parseFloat(z)!=100){fail()}else{success()}}else{console.log("\\u6709\\u4E00\\u4E2A\\u4E3A\\u798F\\u5EFA");feeInfo.revenueShare="";result="A\\u7701\\u4EFD"+a+"%,"+"Z\\u7701\\u4EFD:"+z+"%";if(parseFloat(a)+parseFloat(z)!=100){fail()}else{success()}}feeInfo.revenueShareName=result;var officePrice=feeInfo.officePrice;var onePrice=feeInfo.receiptsPrice;if(onePrice<officePrice){feeInfo.flag="1"}else{feeInfo.flag="2"}console.log("feeInfo:"+i,feeInfo)}if(infoList.length>0){feeInfoList=feeInfoList.concat(infoList)}success({feeInfoList:feeInfoList,infoList:infoList})};',
                                                    actionTitle:
                                                      '设置表单值和矩阵',
                                                  },
                                                  line_number: 20,
                                                  callback1: [
                                                    {
                                                      type: 'setDataSource',
                                                      dataId: 169951647938026430,
                                                      options: {
                                                        compId: 'setDataSource',
                                                        compName: 'page',
                                                        id: '862242',
                                                        pageJsonId: '537892',
                                                        dataSourceId: 166519807387797900,
                                                        dataSourceName:
                                                          'feeInfo',
                                                        dataSourceRelType:
                                                          'custom',
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
                                                        newData:
                                                          '$data_608728.feeInfoList$',
                                                        operateType: 3,
                                                        onlySetPatch: true,
                                                        otherObjectArrayOptions:
                                                          {},
                                                        targetDataSourcePaths:
                                                          [],
                                                      },
                                                      line_number: 21,
                                                      callback1: [
                                                        {
                                                          type: 'customActionCode',
                                                          dataId: 169951647938087700,
                                                          options: {
                                                            compId:
                                                              'customActionCode',
                                                            compName: 'page',
                                                            id: '688556',
                                                            pageJsonId:
                                                              '537892',
                                                            code: 'function main(data,state,success,fail){var infoList=data_608728.feeInfoList;var instList=data.sceneSubmit.instList||[];for(var i=0;i<infoList.length;i++){if(infoList[i].marketList!=null&&infoList[i].marketList!=undefined){infoList[i].marketList=JSON.parse(infoList[i].marketList)}var list=[];for(var key in infoList[i]){if(key!="rowId"&&key!="marketList"){list.push({"attrCode":key,"attrName":"","attrValue":infoList[i][key]})}if(key=="marketList"){list.push({"attrCode":key,"attrName":"","attrValue":JSON.stringify(infoList[i][key])})}}var instObj={"instCode":infoList[i].rowId,"instAttrList":list};instList.push(instObj)}data.sceneSubmit.instList=instList;console.log("====\\u8BA2\\u5355\\u63D0\\u4EA4===",data.sceneSubmit);success(data.sceneSubmit)};',
                                                          },
                                                          line_number: 22,
                                                          callback1: [
                                                            {
                                                              type: 'callParentCustomFunc',
                                                              dataId: 169951647938056580,
                                                              options: {
                                                                compId:
                                                                  'callParentCustomFunc',
                                                                compName:
                                                                  'system',
                                                                id: '433487',
                                                                pageJsonId:
                                                                  '537892',
                                                                pathname:
                                                                  '/auditOrderPrepare',
                                                                pageId:
                                                                  '884045146848604160',
                                                                customFuncName:
                                                                  'getFactor',
                                                                customFuncParams:
                                                                  '$data_688556$',
                                                                modalPath:
                                                                  '/auditOrderPrepare',
                                                              },
                                                              line_number: 23,
                                                              callback1: [
                                                                {
                                                                  type: 'setDataSource',
                                                                  dataId: 169951647938009920,
                                                                  options: {
                                                                    compId:
                                                                      'setDataSource',
                                                                    compName:
                                                                      'page',
                                                                    id: '153902',
                                                                    pageJsonId:
                                                                      '537892',
                                                                    dataSourceId: 166519807387797900,
                                                                    dataSourceName:
                                                                      'feeInfo',
                                                                    dataSourceRelType:
                                                                      'custom',
                                                                    dataSourceReloadFilter:
                                                                      [],
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
                                                                            '6429123',
                                                                          code: 'ipv6BeyondSel',
                                                                          name: 'IPv6超出选择',
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
                                                                            '2152803',
                                                                          code: 'ipv6BeyondCost',
                                                                          name: 'IPv6超出费用',
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
                                                                    operateType: 1,
                                                                    onlySetPatch:
                                                                      true,
                                                                    otherObjectArrayOptions:
                                                                      {},
                                                                  },
                                                                  line_number: 24,
                                                                  callback1: [
                                                                    {
                                                                      type: 'callSelfFunc',
                                                                      dataId: 169951647938071070,
                                                                      shielding:
                                                                        true,
                                                                      options: {
                                                                        compId:
                                                                          'callSelfFunc',
                                                                        compName:
                                                                          'system',
                                                                        id: '180248',
                                                                        pageJsonId:
                                                                          '537892',
                                                                        customFuncName:
                                                                          'updateTitle',
                                                                      },
                                                                      line_number: 25,
                                                                      callback1:
                                                                        [],
                                                                      callback2:
                                                                        [],
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
                                      ],
                                      callback2: [],
                                    },
                                    {
                                      type: 'console',
                                      dataId: 169943547913948930,
                                      options: {
                                        compId: 'debug',
                                        compName: 'system',
                                        id: '965085',
                                        pageJsonId: '537892',
                                        value: ['$reply_8324253?.resultData$'],
                                      },
                                      line_number: 26,
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
                          line_number: 27,
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
                          line_number: 28,
                        },
                      ],
                    },
                  ];
                  eventDataapiRequest699.params =
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
                    eventDataapiRequest699,
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
                  const eventDatacustomActionCode445: any = [
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
                  eventDatacustomActionCode445.params =
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
                    eventDatacustomActionCode445,
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
                  const eventDataapiRequest700: any = [
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
                                      code: 'CLS_CP_0007_0018',
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
                                      code: '广域网跨省专线资费导入模板.xlsx',
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
                  eventDataapiRequest700.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDataapiRequest700, { e }, 'apiRequest', {
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
                  const eventDatagetTableSelected22: any = [
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
                  eventDatagetTableSelected22.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatagetTableSelected22,
                    { e },
                    'getTableSelected',
                    {
                      id: 'getTableSelected',
                      name: 'getTableSelected',
                      type: 'getTableSelected',
                      platform: 'pc',
                    },
                  );
                  const eventDatacustomActionCode446: any = [
                    {
                      type: 'customActionCode',
                      dataId: 167706806820034340,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '7076346',
                        pageJsonId: '537892',
                        code: 'function main(data,state,success,fail){var arr1=[];var arr2=[];var feeInfo=data.feeInfo;for(var i=0;i<feeInfo.length;i++){var info=feeInfo[i];{arr2.push({"name":"\\u4E1A\\u52A1\\u7C7B\\u578B","value":info.busiTypeName});arr2.push({"name":"\\u533A\\u57DF\\u7C7B\\u578B","value":info.crmAreaTypeName});arr2.push({"name":"\\u5E26\\u5BBD","value":info.bandwidthName});arr2.push({"name":"\\u6807\\u51C6\\u4EF7\\u683C\\uFF08\\u5143/\\u6708\\uFF09","value":info.standardPrice});arr2.push({"name":"\\u5355\\u6761\\u5B9E\\u6536\\u4EF7\\uFF08\\u5143/\\u6708\\uFF09","value":info.receiptsPrice});arr2.push({"name":"\\u6761\\u6570","value":info.row});arr2.push({"name":"\\u603B\\u5B9E\\u6536\\u4EF7\\uFF08\\u5143/\\u6708\\uFF09","value":info.receiptsPriceSum});arr2.push({"name":"\\u6700\\u7EC8\\u6298\\u6263(\\u6298)","value":info.lastDiscount})}arr1.push(arr2);arr2=[]}if(arr1.length>0){success(JSON.stringify(arr1))}else{fail()}};',
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
                  eventDatacustomActionCode446.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatacustomActionCode446,
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
                title: '业务类型',
                key: 'busiType',
                dataIndex: 'busiTypeName',
                className: '',
                id: '492889',
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
                title: '带宽',
                key: 'bandwidth',
                dataIndex: 'bandwidthName',
                className: 'divider',
                id: '2595006',
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
                title: '条数',
                key: 'receiptsPriceSum',
                dataIndex: 'count',
                id: '615058',
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
                title: '总实收价',
                key: 'lastDiscount',
                dataIndex: 'receiptsPriceSum',
                className: 'divider',
                id: '322947',
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
                title: '管控价',
                key: 'infoIncomeYear',
                dataIndex: 'officePrice',
                className: 'divider',
                id: '2952388',
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
                key: 'singedTime',
                dataIndex: 'lastDiscount',
                className: 'divider',
                id: '1597504',
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
                title: '签约时间',
                key: 'toProvince',
                dataIndex: 'singedTime',
                className: 'divider',
                id: '913435',
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
                title: 'A端',
                key: 'fromProvince',
                dataIndex: 'fromProvinceName',
                className: 'divider',
                id: '456306',
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
                title: 'Z端',
                key: 'count',
                dataIndex: 'toProvinceName',
                className: 'divider',
                id: '463725',
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
                id: '0589705',
                dataIndex: 'revenueShareName',
                title: '收入分成',
                key: '0589705',
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
                type: 'staticCol',
                id: '656936',
                title: '年信息化收入',
                dataIndex: 'infoIncomeYear',
                key: '656936',
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
              const eventDatashowCustomModal63: any = [
                {
                  type: 'showCustomModal',
                  dataId: 166539679318667200,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '951698',
                    pageJsonId: '537892',
                    modalname: '/networkAcrossProvince',
                    pageId: '1036116888616538112',
                    modalPath: '/networkAcrossProvince',
                    paramsObj: {
                      feeInfo: '$row$',
                      catalogCode: '$state.catalogCode$',
                      isDetails: 'false',
                    },
                    paramsObjKeyValueMap: {
                      feeInfo: '$row$',
                      catalogCode: '$state.catalogCode$',
                      isDetails: 'false',
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
                                code: 'toShare',
                                name: 'Z端分成',
                                type: 'string',
                                attrId: '134042',
                                initialData: {
                                  type: 'static',
                                  value: 'Z端分成',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['toShare'],
                                _idpath: ['134042'],
                              },
                              {
                                code: 'receiptsPriceSum',
                                name: '总实收价',
                                type: 'string',
                                attrId: '267265',
                                initialData: {
                                  type: 'static',
                                  value: '总实收价',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['receiptsPriceSum'],
                                _idpath: ['267265'],
                              },
                              {
                                code: 'toCity',
                                name: 'Z端地市',
                                type: 'string',
                                attrId: '270855',
                                initialData: {
                                  type: 'static',
                                  value: 'Z端地市',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['toCity'],
                                _idpath: ['270855'],
                              },
                              {
                                code: 'lineFuncFee',
                                name: '专线功能费(元)',
                                type: 'string',
                                attrId: '305445',
                                initialData: {
                                  type: 'static',
                                  value: '专线功能费(元)',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['lineFuncFee'],
                                _idpath: ['305445'],
                              },
                              {
                                code: 'fromCity',
                                name: 'A端地市',
                                type: 'string',
                                attrId: '323454',
                                initialData: {
                                  type: 'static',
                                  value: 'A端地市',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['fromCity'],
                                _idpath: ['323454'],
                              },
                              {
                                code: 'toCityText',
                                name: 'Z端地市',
                                type: 'string',
                                attrId: '368536',
                                initialData: {
                                  type: 'static',
                                  value: 'Z端地市',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['toCityText'],
                                _idpath: ['368536'],
                              },
                              {
                                code: 'singedTime',
                                name: '签约时间',
                                type: 'string',
                                attrId: '407854',
                                initialData: {
                                  type: 'static',
                                  value: '签约时间',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['singedTime'],
                                _idpath: ['407854'],
                              },
                              {
                                code: 'toAddress',
                                name: 'Z端地址',
                                type: 'string',
                                attrId: '425061',
                                initialData: {
                                  type: 'static',
                                  value: 'Z端地址',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['toAddress'],
                                _idpath: ['425061'],
                              },
                              {
                                code: 'revenueShare',
                                name: '收入分成',
                                type: 'string',
                                attrId: '446108',
                                initialData: {
                                  type: 'static',
                                  value: '收入分成',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['revenueShare'],
                                _idpath: ['446108'],
                              },
                              {
                                code: 'lastDiscount',
                                name: '最终折扣',
                                type: 'string',
                                attrId: '524252',
                                initialData: {
                                  type: 'static',
                                  value: '最终折扣',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['lastDiscount'],
                                _idpath: ['524252'],
                              },
                              {
                                code: 'receiptsPrice',
                                name: '实收价',
                                type: 'string',
                                attrId: '611889',
                                initialData: {
                                  type: 'static',
                                  value: '实收价',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['receiptsPrice'],
                                _idpath: ['611889'],
                              },
                              {
                                code: 'maintenanceCost',
                                name: '维护费(元/年)',
                                type: 'string',
                                attrId: '653623',
                                initialData: {
                                  type: 'static',
                                  value: '维护费(元/年)',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['maintenanceCost'],
                                _idpath: ['653623'],
                              },
                              {
                                code: 'standardPrice',
                                name: '省内标准价格',
                                type: 'string',
                                attrId: '683125',
                                initialData: {
                                  type: 'static',
                                  value: '省内标准价格',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['standardPrice'],
                                _idpath: ['683125'],
                              },
                              {
                                code: 'count',
                                name: '条数',
                                type: 'string',
                                attrId: '713846',
                                initialData: { type: 'static', value: '条数' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['count'],
                                _idpath: ['713846'],
                              },
                              {
                                code: 'infoIncomeYear',
                                name: '年信息化收入',
                                type: 'string',
                                attrId: '739395',
                                initialData: {
                                  type: 'static',
                                  value: '年信息化收入',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['infoIncomeYear'],
                                _idpath: ['739395'],
                              },
                              {
                                code: 'fromAddress',
                                name: 'A端地址',
                                type: 'string',
                                attrId: '845936',
                                initialData: {
                                  type: 'static',
                                  value: 'A端地址',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['fromAddress'],
                                _idpath: ['845936'],
                              },
                              {
                                code: 'fromProvince',
                                name: 'A端省份',
                                type: 'string',
                                attrId: '859533',
                                initialData: {
                                  type: 'static',
                                  value: 'A端省份',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['fromProvince'],
                                _idpath: ['859533'],
                              },
                              {
                                code: 'toProvince',
                                name: 'Z端省份',
                                type: 'string',
                                attrId: '882361',
                                initialData: {
                                  type: 'static',
                                  value: 'Z端省份',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['toProvince'],
                                _idpath: ['882361'],
                              },
                              {
                                code: 'fromCityText',
                                name: 'A端地市',
                                type: 'string',
                                attrId: '4333943',
                                initialData: {
                                  type: 'static',
                                  value: 'A端地市',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['fromCityText'],
                                _idpath: ['4333943'],
                              },
                              {
                                code: 'fromShare',
                                name: 'A端分成',
                                type: 'string',
                                attrId: '4575007',
                                initialData: {
                                  type: 'static',
                                  value: 'A端分成',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['fromShare'],
                                _idpath: ['4575007'],
                              },
                              {
                                code: 'recoverNetCost',
                                name: '可收回网络成本（月)',
                                type: 'string',
                                attrId: '6646057',
                                initialData: {
                                  type: 'static',
                                  value: '可收回网络成本（月)',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['recoverNetCost'],
                                _idpath: ['6646057'],
                              },
                              {
                                code: 'oneInput',
                                name: '一次性投入(元)',
                                type: 'string',
                                attrId: '7120776',
                                initialData: {
                                  type: 'static',
                                  value: '一次性投入(元)',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['oneInput'],
                                _idpath: ['7120776'],
                              },
                              {
                                code: 'busiType',
                                name: '业务类型',
                                type: 'string',
                                attrId: '71564078',
                                initialData: {
                                  type: 'static',
                                  value: '业务类型',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['busiType'],
                                _idpath: ['71564078'],
                              },
                              {
                                code: 'officePrice',
                                name: '总部管控价格',
                                type: 'string',
                                attrId: '081542',
                                initialData: {
                                  type: 'static',
                                  value: '总部管控价格',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['officePrice'],
                                _idpath: ['081542'],
                              },
                              {
                                code: 'bandwidth',
                                name: '带宽',
                                type: 'string',
                                attrId: '034647',
                                initialData: { type: 'static', value: '带宽' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['bandwidth'],
                                _idpath: ['034647'],
                              },
                              {
                                attrId: '637333',
                                code: 'accessWay',
                                name: '接入方式',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['accessWay'],
                                _idpath: ['637333'],
                              },
                              {
                                attrId: '88947924',
                                code: 'lineType',
                                name: '专线类型',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['lineType'],
                                _idpath: ['88947924'],
                              },
                              {
                                attrId: '623697',
                                code: 'bandwidthName',
                                name: '带宽名称',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['bandwidthName'],
                                _idpath: ['623697'],
                              },
                              {
                                attrId: '079197',
                                code: 'busiTypeName',
                                name: '业务类型名称',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['busiTypeName'],
                                _idpath: ['079197'],
                              },
                              {
                                attrId: '678613',
                                code: 'toProvinceName',
                                name: 'Z端省份名字',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['toProvinceName'],
                                _idpath: ['678613'],
                              },
                              {
                                attrId: '18153896',
                                code: 'fromProvinceName',
                                name: 'A端省份名字',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['fromProvinceName'],
                                _idpath: ['18153896'],
                              },
                              {
                                attrId: '3383503',
                                code: 'revenueShareName',
                                name: '各收入分成',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['revenueShareName'],
                                _idpath: ['3383503'],
                              },
                              {
                                attrId: '747415',
                                code: 'flag',
                                name: '标识',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['flag'],
                                _idpath: ['747415'],
                              },
                              {
                                attrId: '396473',
                                code: 'specialLine',
                                name: '属性',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['specialLine'],
                                _idpath: ['396473'],
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
              eventDatashowCustomModal63.params =
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
                eventDatashowCustomModal63,
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
                title: '业务类型',
                key: 'busiTypeName',
                dataIndex: 'busiTypeName',
                id: '939446',
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
                title: '带宽',
                key: 'areaTypeName',
                dataIndex: 'bandwidthName',
                className: 'divider',
                id: '4458297',
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
                title: '条数',
                key: 'bandwidthName',
                dataIndex: 'count',
                id: '0398142',
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
                title: '总实收价(元/月)',
                key: 'standardPrice',
                dataIndex: 'receiptsPriceSum',
                id: '894124',
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
                title: '管控价',
                key: 'receiptsPrice',
                dataIndex: 'officePrice',
                className: 'divider',
                id: '107778',
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
                className: 'divider',
                id: '322947',
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
                id: '608636',
                title: '签约时间',
                dataIndex: 'singedTime',
                key: '608636',
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
                type: 'staticCol',
                id: '303803',
                title: 'A端',
                dataIndex: 'fromProvinceName',
                key: '303803',
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
                type: 'staticCol',
                id: '3826017',
                title: 'Z端',
                dataIndex: 'toProvinceName',
                key: '3826017',
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
                type: 'staticCol',
                id: '349613',
                title: '收入分成',
                dataIndex: 'revenueShareName',
                key: '349613',
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
                type: 'staticCol',
                id: '65574',
                title: '年信息化收入',
                dataIndex: 'infoIncomeYear',
                key: '65574',
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
                id: '1681653',
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
              const eventDatashowCustomModal64: any = [
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
                                code: 'toShare',
                                name: 'Z端分成',
                                type: 'string',
                                attrId: '134042',
                                initialData: {
                                  type: 'static',
                                  value: 'Z端分成',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['toShare'],
                                _idpath: ['134042'],
                              },
                              {
                                code: 'receiptsPriceSum',
                                name: '总实收价',
                                type: 'string',
                                attrId: '267265',
                                initialData: {
                                  type: 'static',
                                  value: '总实收价',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['receiptsPriceSum'],
                                _idpath: ['267265'],
                              },
                              {
                                code: 'toCity',
                                name: 'Z端地市',
                                type: 'string',
                                attrId: '270855',
                                initialData: {
                                  type: 'static',
                                  value: 'Z端地市',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['toCity'],
                                _idpath: ['270855'],
                              },
                              {
                                code: 'lineFuncFee',
                                name: '专线功能费(元)',
                                type: 'string',
                                attrId: '305445',
                                initialData: {
                                  type: 'static',
                                  value: '专线功能费(元)',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['lineFuncFee'],
                                _idpath: ['305445'],
                              },
                              {
                                code: 'fromCity',
                                name: 'A端地市',
                                type: 'string',
                                attrId: '323454',
                                initialData: {
                                  type: 'static',
                                  value: 'A端地市',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['fromCity'],
                                _idpath: ['323454'],
                              },
                              {
                                code: 'toCityText',
                                name: 'Z端地市',
                                type: 'string',
                                attrId: '368536',
                                initialData: {
                                  type: 'static',
                                  value: 'Z端地市',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['toCityText'],
                                _idpath: ['368536'],
                              },
                              {
                                code: 'singedTime',
                                name: '签约时间',
                                type: 'string',
                                attrId: '407854',
                                initialData: {
                                  type: 'static',
                                  value: '签约时间',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['singedTime'],
                                _idpath: ['407854'],
                              },
                              {
                                code: 'toAddress',
                                name: 'Z端地址',
                                type: 'string',
                                attrId: '425061',
                                initialData: {
                                  type: 'static',
                                  value: 'Z端地址',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['toAddress'],
                                _idpath: ['425061'],
                              },
                              {
                                code: 'revenueShare',
                                name: '收入分成',
                                type: 'string',
                                attrId: '446108',
                                initialData: {
                                  type: 'static',
                                  value: '收入分成',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['revenueShare'],
                                _idpath: ['446108'],
                              },
                              {
                                code: 'lastDiscount',
                                name: '最终折扣',
                                type: 'string',
                                attrId: '524252',
                                initialData: {
                                  type: 'static',
                                  value: '最终折扣',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['lastDiscount'],
                                _idpath: ['524252'],
                              },
                              {
                                code: 'receiptsPrice',
                                name: '实收价',
                                type: 'string',
                                attrId: '611889',
                                initialData: {
                                  type: 'static',
                                  value: '实收价',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['receiptsPrice'],
                                _idpath: ['611889'],
                              },
                              {
                                code: 'maintenanceCost',
                                name: '维护费(元/年)',
                                type: 'string',
                                attrId: '653623',
                                initialData: {
                                  type: 'static',
                                  value: '维护费(元/年)',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['maintenanceCost'],
                                _idpath: ['653623'],
                              },
                              {
                                code: 'standardPrice',
                                name: '省内标准价格',
                                type: 'string',
                                attrId: '683125',
                                initialData: {
                                  type: 'static',
                                  value: '省内标准价格',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['standardPrice'],
                                _idpath: ['683125'],
                              },
                              {
                                code: 'count',
                                name: '条数',
                                type: 'string',
                                attrId: '713846',
                                initialData: { type: 'static', value: '条数' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['count'],
                                _idpath: ['713846'],
                              },
                              {
                                code: 'infoIncomeYear',
                                name: '年信息化收入',
                                type: 'string',
                                attrId: '739395',
                                initialData: {
                                  type: 'static',
                                  value: '年信息化收入',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['infoIncomeYear'],
                                _idpath: ['739395'],
                              },
                              {
                                code: 'fromAddress',
                                name: 'A端地址',
                                type: 'string',
                                attrId: '845936',
                                initialData: {
                                  type: 'static',
                                  value: 'A端地址',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['fromAddress'],
                                _idpath: ['845936'],
                              },
                              {
                                code: 'fromProvince',
                                name: 'A端省份',
                                type: 'string',
                                attrId: '859533',
                                initialData: {
                                  type: 'static',
                                  value: 'A端省份',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['fromProvince'],
                                _idpath: ['859533'],
                              },
                              {
                                code: 'toProvince',
                                name: 'Z端省份',
                                type: 'string',
                                attrId: '882361',
                                initialData: {
                                  type: 'static',
                                  value: 'Z端省份',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['toProvince'],
                                _idpath: ['882361'],
                              },
                              {
                                code: 'fromCityText',
                                name: 'A端地市',
                                type: 'string',
                                attrId: '4333943',
                                initialData: {
                                  type: 'static',
                                  value: 'A端地市',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['fromCityText'],
                                _idpath: ['4333943'],
                              },
                              {
                                code: 'fromShare',
                                name: 'A端分成',
                                type: 'string',
                                attrId: '4575007',
                                initialData: {
                                  type: 'static',
                                  value: 'A端分成',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['fromShare'],
                                _idpath: ['4575007'],
                              },
                              {
                                code: 'recoverNetCost',
                                name: '可收回网络成本（月)',
                                type: 'string',
                                attrId: '6646057',
                                initialData: {
                                  type: 'static',
                                  value: '可收回网络成本（月)',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['recoverNetCost'],
                                _idpath: ['6646057'],
                              },
                              {
                                code: 'oneInput',
                                name: '一次性投入(元)',
                                type: 'string',
                                attrId: '7120776',
                                initialData: {
                                  type: 'static',
                                  value: '一次性投入(元)',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['oneInput'],
                                _idpath: ['7120776'],
                              },
                              {
                                code: 'busiType',
                                name: '业务类型',
                                type: 'string',
                                attrId: '71564078',
                                initialData: {
                                  type: 'static',
                                  value: '业务类型',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['busiType'],
                                _idpath: ['71564078'],
                              },
                              {
                                code: 'officePrice',
                                name: '总部管控价格',
                                type: 'string',
                                attrId: '081542',
                                initialData: {
                                  type: 'static',
                                  value: '总部管控价格',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['officePrice'],
                                _idpath: ['081542'],
                              },
                              {
                                code: 'bandwidth',
                                name: '带宽',
                                type: 'string',
                                attrId: '034647',
                                initialData: { type: 'static', value: '带宽' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['bandwidth'],
                                _idpath: ['034647'],
                              },
                              {
                                attrId: '637333',
                                code: 'accessWay',
                                name: '接入方式',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['accessWay'],
                                _idpath: ['637333'],
                              },
                              {
                                attrId: '88947924',
                                code: 'lineType',
                                name: '专线类型',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['lineType'],
                                _idpath: ['88947924'],
                              },
                              {
                                attrId: '623697',
                                code: 'bandwidthName',
                                name: '带宽名称',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['bandwidthName'],
                                _idpath: ['623697'],
                              },
                              {
                                attrId: '079197',
                                code: 'busiTypeName',
                                name: '业务类型名称',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['busiTypeName'],
                                _idpath: ['079197'],
                              },
                              {
                                attrId: '678613',
                                code: 'toProvinceName',
                                name: 'Z端省份名字',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['toProvinceName'],
                                _idpath: ['678613'],
                              },
                              {
                                attrId: '18153896',
                                code: 'fromProvinceName',
                                name: 'A端省份名字',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['fromProvinceName'],
                                _idpath: ['18153896'],
                              },
                              {
                                attrId: '3383503',
                                code: 'revenueShareName',
                                name: '各收入分成',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['revenueShareName'],
                                _idpath: ['3383503'],
                              },
                              {
                                attrId: '747415',
                                code: 'flag',
                                name: '标识',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['flag'],
                                _idpath: ['747415'],
                              },
                              {
                                attrId: '396473',
                                code: 'specialLine',
                                name: '属性',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['specialLine'],
                                _idpath: ['396473'],
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
              eventDatashowCustomModal64.params =
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
                eventDatashowCustomModal64,
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
              const eventDatashowCustomModal65: any = [
                {
                  type: 'showCustomModal',
                  dataId: 169923866964947840,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '2983144',
                    pageJsonId: '537892',
                    modalname: '/networkAcrossProvince',
                    pageId: '1036116888616538112',
                    modalPath: '/networkAcrossProvince',
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
                      dataId: 169923866964955200,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '537343',
                        pageJsonId: '537892',
                        code: 'function main(data,state,success,fail){data.feeInfo=data.feeInfo.filter(function(v){return v.rowId!=okData_2983144.rowId});data.feeInfo.push(okData_2983144);var instList=[];for(var key in okData_2983144){if(key!="rowId"&&key!="marketList"){instList.push({"attrCode":key,"attrName":"","attrValue":okData_2983144[key]})}if(key=="marketList"){instList.push({"attrCode":key,"attrName":"","attrValue":JSON.stringify(okData_2983144[key])})}}var instObj={"instCode":okData_2983144.rowId,"instAttrList":instList};data.sceneSubmit.instList=data.sceneSubmit.instList.filter(function(v){return v.instCode!=okData_2983144.rowId});data.sceneSubmit.instList.push(instObj);success()};',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'setDataSource',
                          dataId: 169923866964995420,
                          options: {
                            compId: 'setDataSource',
                            compName: 'page',
                            id: '6408473',
                            pageJsonId: '537892',
                            dataSourceId: 166519807387797900,
                            dataSourceName: 'feeInfo',
                            dataSourceRelType: 'custom',
                            dataSourceReloadFilter: [],
                            dataSourceSetValue: [
                              {
                                code: 'toShare',
                                name: 'Z端分成',
                                type: 'string',
                                attrId: '134042',
                                initialData: {
                                  type: 'static',
                                  value: 'Z端分成',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['toShare'],
                                _idpath: ['134042'],
                              },
                              {
                                code: 'receiptsPriceSum',
                                name: '总实收价',
                                type: 'string',
                                attrId: '267265',
                                initialData: {
                                  type: 'static',
                                  value: '总实收价',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['receiptsPriceSum'],
                                _idpath: ['267265'],
                              },
                              {
                                code: 'toCity',
                                name: 'Z端地市',
                                type: 'string',
                                attrId: '270855',
                                initialData: {
                                  type: 'static',
                                  value: 'Z端地市',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['toCity'],
                                _idpath: ['270855'],
                              },
                              {
                                code: 'lineFuncFee',
                                name: '专线功能费(元)',
                                type: 'string',
                                attrId: '305445',
                                initialData: {
                                  type: 'static',
                                  value: '专线功能费(元)',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['lineFuncFee'],
                                _idpath: ['305445'],
                              },
                              {
                                code: 'fromCity',
                                name: 'A端地市',
                                type: 'string',
                                attrId: '323454',
                                initialData: {
                                  type: 'static',
                                  value: 'A端地市',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['fromCity'],
                                _idpath: ['323454'],
                              },
                              {
                                code: 'toCityText',
                                name: 'Z端地市',
                                type: 'string',
                                attrId: '368536',
                                initialData: {
                                  type: 'static',
                                  value: 'Z端地市',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['toCityText'],
                                _idpath: ['368536'],
                              },
                              {
                                code: 'singedTime',
                                name: '签约时间',
                                type: 'string',
                                attrId: '407854',
                                initialData: {
                                  type: 'static',
                                  value: '签约时间',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['singedTime'],
                                _idpath: ['407854'],
                              },
                              {
                                code: 'toAddress',
                                name: 'Z端地址',
                                type: 'string',
                                attrId: '425061',
                                initialData: {
                                  type: 'static',
                                  value: 'Z端地址',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['toAddress'],
                                _idpath: ['425061'],
                              },
                              {
                                code: 'revenueShare',
                                name: '收入分成',
                                type: 'string',
                                attrId: '446108',
                                initialData: {
                                  type: 'static',
                                  value: '收入分成',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['revenueShare'],
                                _idpath: ['446108'],
                              },
                              {
                                code: 'lastDiscount',
                                name: '最终折扣',
                                type: 'string',
                                attrId: '524252',
                                initialData: {
                                  type: 'static',
                                  value: '最终折扣',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['lastDiscount'],
                                _idpath: ['524252'],
                              },
                              {
                                code: 'receiptsPrice',
                                name: '实收价',
                                type: 'string',
                                attrId: '611889',
                                initialData: {
                                  type: 'static',
                                  value: '实收价',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['receiptsPrice'],
                                _idpath: ['611889'],
                              },
                              {
                                code: 'maintenanceCost',
                                name: '维护费(元/年)',
                                type: 'string',
                                attrId: '653623',
                                initialData: {
                                  type: 'static',
                                  value: '维护费(元/年)',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['maintenanceCost'],
                                _idpath: ['653623'],
                              },
                              {
                                code: 'standardPrice',
                                name: '省内标准价格',
                                type: 'string',
                                attrId: '683125',
                                initialData: {
                                  type: 'static',
                                  value: '省内标准价格',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['standardPrice'],
                                _idpath: ['683125'],
                              },
                              {
                                code: 'count',
                                name: '条数',
                                type: 'string',
                                attrId: '713846',
                                initialData: { type: 'static', value: '条数' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['count'],
                                _idpath: ['713846'],
                              },
                              {
                                code: 'infoIncomeYear',
                                name: '年信息化收入',
                                type: 'string',
                                attrId: '739395',
                                initialData: {
                                  type: 'static',
                                  value: '年信息化收入',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['infoIncomeYear'],
                                _idpath: ['739395'],
                              },
                              {
                                code: 'fromAddress',
                                name: 'A端地址',
                                type: 'string',
                                attrId: '845936',
                                initialData: {
                                  type: 'static',
                                  value: 'A端地址',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['fromAddress'],
                                _idpath: ['845936'],
                              },
                              {
                                code: 'fromProvince',
                                name: 'A端省份',
                                type: 'string',
                                attrId: '859533',
                                initialData: {
                                  type: 'static',
                                  value: 'A端省份',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['fromProvince'],
                                _idpath: ['859533'],
                              },
                              {
                                code: 'toProvince',
                                name: 'Z端省份',
                                type: 'string',
                                attrId: '882361',
                                initialData: {
                                  type: 'static',
                                  value: 'Z端省份',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['toProvince'],
                                _idpath: ['882361'],
                              },
                              {
                                code: 'fromCityText',
                                name: 'A端地市',
                                type: 'string',
                                attrId: '4333943',
                                initialData: {
                                  type: 'static',
                                  value: 'A端地市',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['fromCityText'],
                                _idpath: ['4333943'],
                              },
                              {
                                code: 'fromShare',
                                name: 'A端分成',
                                type: 'string',
                                attrId: '4575007',
                                initialData: {
                                  type: 'static',
                                  value: 'A端分成',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['fromShare'],
                                _idpath: ['4575007'],
                              },
                              {
                                code: 'recoverNetCost',
                                name: '可收回网络成本（月)',
                                type: 'string',
                                attrId: '6646057',
                                initialData: {
                                  type: 'static',
                                  value: '可收回网络成本（月)',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['recoverNetCost'],
                                _idpath: ['6646057'],
                              },
                              {
                                code: 'oneInput',
                                name: '一次性投入(元)',
                                type: 'string',
                                attrId: '7120776',
                                initialData: {
                                  type: 'static',
                                  value: '一次性投入(元)',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['oneInput'],
                                _idpath: ['7120776'],
                              },
                              {
                                code: 'busiType',
                                name: '业务类型',
                                type: 'string',
                                attrId: '71564078',
                                initialData: {
                                  type: 'static',
                                  value: '业务类型',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['busiType'],
                                _idpath: ['71564078'],
                              },
                              {
                                code: 'officePrice',
                                name: '总部管控价格',
                                type: 'string',
                                attrId: '081542',
                                initialData: {
                                  type: 'static',
                                  value: '总部管控价格',
                                },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['officePrice'],
                                _idpath: ['081542'],
                              },
                              {
                                code: 'bandwidth',
                                name: '带宽',
                                type: 'string',
                                attrId: '034647',
                                initialData: { type: 'static', value: '带宽' },
                                parentKey: '1',
                                parentType: 'object',
                                showInput: false,
                                _codePath: ['bandwidth'],
                                _idpath: ['034647'],
                              },
                              {
                                attrId: '637333',
                                code: 'accessWay',
                                name: '接入方式',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['accessWay'],
                                _idpath: ['637333'],
                              },
                              {
                                attrId: '88947924',
                                code: 'lineType',
                                name: '专线类型',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['lineType'],
                                _idpath: ['88947924'],
                              },
                              {
                                attrId: '623697',
                                code: 'bandwidthName',
                                name: '带宽名称',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['bandwidthName'],
                                _idpath: ['623697'],
                              },
                              {
                                attrId: '079197',
                                code: 'busiTypeName',
                                name: '业务类型名称',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['busiTypeName'],
                                _idpath: ['079197'],
                              },
                              {
                                attrId: '678613',
                                code: 'toProvinceName',
                                name: 'Z端省份名字',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['toProvinceName'],
                                _idpath: ['678613'],
                              },
                              {
                                attrId: '18153896',
                                code: 'fromProvinceName',
                                name: 'A端省份名字',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['fromProvinceName'],
                                _idpath: ['18153896'],
                              },
                              {
                                attrId: '3383503',
                                code: 'revenueShareName',
                                name: '各收入分成',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['revenueShareName'],
                                _idpath: ['3383503'],
                              },
                              {
                                attrId: '747415',
                                code: 'flag',
                                name: '标识',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['flag'],
                                _idpath: ['747415'],
                              },
                              {
                                attrId: '396473',
                                code: 'specialLine',
                                name: '属性',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['specialLine'],
                                _idpath: ['396473'],
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
                          dataId: 169923866964944900,
                          options: {
                            compId: 'callParentCustomFunc',
                            compName: 'system',
                            id: '87712',
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
              eventDatashowCustomModal65.params =
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
                eventDatashowCustomModal65,
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
                    const eventDatagetSelectedData154: any = [
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
                    eventDatagetSelectedData154.params =
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
                      eventDatagetSelectedData154,
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
                    const eventDatagetSelectedData155: any = [
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
                    eventDatagetSelectedData155.params =
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
                      eventDatagetSelectedData155,
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
                    const eventDatacustomActionCode448: any = [
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
                    eventDatacustomActionCode448.params =
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
                      eventDatacustomActionCode448,
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
              const eventDatacustomActionCode449: any = [
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
              eventDatacustomActionCode449.params =
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
                eventDatacustomActionCode449,
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
              const eventDatadownloadByFileId27: any = [
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
              eventDatadownloadByFileId27.params =
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
                eventDatadownloadByFileId27,
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

export default withPageHOC(ClsCp_0007_0018$$Page, {
  pageId: '1036116518238523392',
  hasLogin: false,
  dataSource,
  defaultState: {},
});
