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

const ClsCp_0007_0012$$Page: React.FC<PageProps> = ({
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
  const fileUpload = (options_46757335: any) => {
    const eventDatacustomActionCode133: any = [
      {
        type: 'customActionCode',
        dataId: 167282579359530400,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '6821905',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=options_46757335;success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'callParentCustomFunc',
            dataId: 167282580646560540,
            options: {
              compId: 'callParentCustomFunc',
              compName: 'system',
              id: '684575',
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
    eventDatacustomActionCode133.params =
      [
        {
          title: '事件入参',
          name: 'options_46757335',
          value: '$options_46757335$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode133,
      { options_46757335 },
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
    const eventDataapiRequest396: any = [
      {
        type: 'apiRequest',
        dataId: 166972753327637150,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '845285',
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
            dataId: 166972753594855550,
            options: {
              compId:
                'Input_690228_5400337_280051_232429_7501497_288005_8195412_48663836_335482_595308_390707_814418',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '0219013',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
              data: '$reply_845285?.resultData$',
            },
            line_number: 2,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest396.params = [] || [];
    CMDGenerator(eventDataapiRequest396, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest397: any = [
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
            type: 'console',
            dataId: 167514497509734340,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '673584',
              pageJsonId: '537892',
              value: ['===成功回调值===：', '$reply_9817429?.resultData$'],
            },
            line_number: 4,
          },
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
            line_number: 5,
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
                  modalPath: '/auditOrderPrepare',
                },
                line_number: 6,
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
    eventDataapiRequest397.params = [] || [];
    CMDGenerator(eventDataapiRequest397, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse211: any = [
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
        line_number: 7,
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
            line_number: 8,
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
                      attrId: '739205',
                      code: 'busiType',
                      name: '业务类型',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['busiType'],
                      _idpath: ['739205'],
                    },
                    {
                      attrId: '137802',
                      code: 'receiptsPrice',
                      name: '实收价',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['receiptsPrice'],
                      _idpath: ['137802'],
                    },
                    {
                      attrId: '963826',
                      code: 'bandwidth',
                      name: '带宽',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['bandwidth'],
                      _idpath: ['963826'],
                    },
                    {
                      attrId: '5031659',
                      code: 'ipv6GiveNum',
                      name: 'IPv6赠送数',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['ipv6GiveNum'],
                      _idpath: ['5031659'],
                    },
                    {
                      attrId: '6377456',
                      code: 'ipv4GiveNum',
                      name: 'IPv4赠送数',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['ipv4GiveNum'],
                      _idpath: ['6377456'],
                    },
                    {
                      attrId: '665968',
                      code: 'ipv6DemandNum',
                      name: 'IPv6需求数',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['ipv6DemandNum'],
                      _idpath: ['665968'],
                    },
                    {
                      attrId: '754893',
                      code: 'ipv4DemandNum',
                      name: 'IPv4需求数',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['ipv4DemandNum'],
                      _idpath: ['754893'],
                    },
                    {
                      attrId: '6429123',
                      code: 'ipv6BeyondSel',
                      name: 'IPv6超出选择',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['ipv6BeyondSel'],
                      _idpath: ['6429123'],
                    },
                    {
                      attrId: '197527',
                      code: 'ipv4BeyondNum',
                      name: 'IPv4超出个数',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['ipv4BeyondNum'],
                      _idpath: ['197527'],
                    },
                    {
                      attrId: '2152803',
                      code: 'ipv6BeyondCost',
                      name: 'IPv6超出费用',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['ipv6BeyondCost'],
                      _idpath: ['2152803'],
                    },
                    {
                      attrId: '017672',
                      code: 'ipv4BeyondCount',
                      name: 'IPv4元/月/个',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['ipv4BeyondCount'],
                      _idpath: ['017672'],
                    },
                    {
                      attrId: '26139435',
                      code: 'unitPrice',
                      name: '单价（元/G）',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['unitPrice'],
                      _idpath: ['26139435'],
                    },
                    {
                      attrId: '62643',
                      code: 'lastDiscount',
                      name: '最终折扣',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['lastDiscount'],
                      _idpath: ['62643'],
                    },
                    {
                      attrId: '9425584',
                      code: 'market',
                      name: '营销案',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['market'],
                      _idpath: ['9425584'],
                    },
                    {
                      attrId: '442519',
                      code: 'busiTypeName',
                      name: '业务类型名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['busiTypeName'],
                      _idpath: ['442519'],
                    },
                    {
                      attrId: '3700349',
                      code: 'areaType',
                      name: '区域类型',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['areaType'],
                      _idpath: ['3700349'],
                    },
                    {
                      attrId: '7190864',
                      code: 'joinWay',
                      name: '接入方式',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['joinWay'],
                      _idpath: ['7190864'],
                    },
                    {
                      attrId: '026113',
                      code: 'bandwidthUp',
                      name: '上行宽带',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['bandwidthUp'],
                      _idpath: ['026113'],
                    },
                    {
                      attrId: '9865009',
                      code: 'bandwidthDown',
                      name: '下行宽带',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['bandwidthDown'],
                      _idpath: ['9865009'],
                    },
                    {
                      attrId: '262314',
                      code: 'bandwidthPort',
                      name: 'SDWAN端口带宽',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['bandwidthPort'],
                      _idpath: ['262314'],
                    },
                    {
                      attrId: '4672304',
                      code: 'singleUseFee',
                      name: '一次性费用',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['singleUseFee'],
                      _idpath: ['4672304'],
                    },
                    {
                      attrId: '567251',
                      code: 'portFee',
                      name: '端口费',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['portFee'],
                      _idpath: ['567251'],
                    },
                    {
                      attrId: '9620426',
                      code: 'ipv6BeyondNum',
                      name: 'IPv6超出个数',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['ipv6BeyondNum'],
                      _idpath: ['9620426'],
                    },
                    {
                      attrId: '1137346',
                      code: 'ipv6BeyondCount',
                      name: 'IPv6元/月/个',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['ipv6BeyondCount'],
                      _idpath: ['1137346'],
                    },
                    {
                      attrId: '467282',
                      code: 'standardPriceSdWan',
                      name: 'SDWAN标准价格',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['standardPriceSdWan'],
                      _idpath: ['467282'],
                    },
                    {
                      attrId: '801439',
                      code: 'receiptsPriceSdWan',
                      name: 'SDWAN实收价格',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['receiptsPriceSdWan'],
                      _idpath: ['801439'],
                    },
                    {
                      attrId: '252243',
                      code: 'standardPrice',
                      name: '标准价格',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['standardPrice'],
                      _idpath: ['252243'],
                    },
                    {
                      attrId: '5486426',
                      code: 'bandwidthName',
                      name: '带宽名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['bandwidthName'],
                      _idpath: ['5486426'],
                    },
                    {
                      attrId: '758304',
                      code: 'rowId',
                      name: '行id',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['rowId'],
                      _idpath: ['758304'],
                    },
                    {
                      attrId: '335167',
                      code: 'areaTypeName',
                      name: '区域类型名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['areaTypeName'],
                      _idpath: ['335167'],
                    },
                    {
                      attrId: '203369',
                      code: 'joinWayName',
                      name: '接入方式名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['joinWayName'],
                      _idpath: ['203369'],
                    },
                    {
                      attrId: '001846',
                      code: 'bandwidthUpName',
                      name: '上行宽带名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['bandwidthUpName'],
                      _idpath: ['001846'],
                    },
                    {
                      attrId: '083862',
                      code: 'bandwidthDownName',
                      name: '下行宽带名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['bandwidthDownName'],
                      _idpath: ['083862'],
                    },
                    {
                      attrId: '4269325',
                      code: 'ipv4BeyondCost',
                      name: 'IPv4超出费用',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['ipv4BeyondCost'],
                      _idpath: ['4269325'],
                    },
                    {
                      attrId: '76201',
                      code: 'singleUseFeeName',
                      name: '一次性费用名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['singleUseFeeName'],
                      _idpath: ['76201'],
                    },
                    {
                      attrId: '4829836',
                      code: 'row',
                      name: '条数',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['row'],
                      _idpath: ['4829836'],
                    },
                    {
                      attrId: '40523',
                      code: 'receiptsPriceSum',
                      name: '总实收价（元）',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['receiptsPriceSum'],
                      _idpath: ['40523'],
                    },
                    {
                      attrId: '8937669',
                      code: 'marketName',
                      name: '营销案名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['marketName'],
                      _idpath: ['8937669'],
                    },
                    {
                      attrId: '343475',
                      code: 'portStandardFee',
                      name: '端口月租费(元/月)',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['portStandardFee'],
                      _idpath: ['343475'],
                    },
                    {
                      attrId: '32349',
                      code: 'portFeeMonth',
                      name: '端口月租费（元/月）',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['portFeeMonth'],
                      _idpath: ['32349'],
                    },
                    {
                      attrId: '95735',
                      code: 'groupCity',
                      name: '集团归属地市',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['groupCity'],
                      _idpath: ['95735'],
                    },
                    {
                      attrId: '935972',
                      code: 'aimCity',
                      name: '集团接入地市',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['aimCity'],
                      _idpath: ['935972'],
                    },
                    {
                      attrId: '1150935',
                      code: 'portDiscount',
                      name: '端口折扣',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['portDiscount'],
                      _idpath: ['1150935'],
                    },
                    {
                      attrId: '2587274',
                      code: 'portStandardPrice',
                      name: '端口标准价格（元/月）',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['portStandardPrice'],
                      _idpath: ['2587274'],
                    },
                    {
                      attrId: '3825956',
                      code: 'eleFeeMonth',
                      name: '电路月租费（元/月）',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['eleFeeMonth'],
                      _idpath: ['3825956'],
                    },
                    {
                      attrId: '0663327',
                      code: 'eleDiscount',
                      name: '电路接入折扣',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['eleDiscount'],
                      _idpath: ['0663327'],
                    },
                    {
                      attrId: '8750128',
                      code: 'crmAreaType',
                      name: '区域类型',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['crmAreaType'],
                      _idpath: ['8750128'],
                    },
                    {
                      attrId: '645805',
                      code: 'crmAreaTypeName',
                      name: '区域类型名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['crmAreaTypeName'],
                      _idpath: ['645805'],
                    },
                  ],
                  operateType: 3,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  newData: '$data_9981685$',
                },
                line_number: 9,
                callback1: [],
                callback2: [],
              },
              {
                type: 'setValue',
                dataId: 166599064298599500,
                options: {
                  compId:
                    'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_3906775_793797_061625_486386',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '581391',
                  value: '$state.itemList.approveGradeName$',
                  valueList: {
                    Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_3906775_793797_061625_486386:
                      '$state.itemList.approveGradeName$',
                  },
                },
                line_number: 10,
                callback1: [],
              },
              {
                type: 'console',
                dataId: 169822275528665860,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '08606',
                  pageJsonId: '537892',
                  value: ['=====回填列表数据===', '$data_9981685$'],
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
              code: 'function main(data,state,success,fail){var item=state.itemList;data.sceneSubmit=item;success(item.fileInfo)};',
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
                    condId: '16726',
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
                    condId: '746656',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166746172131778800,
                elseIfs: [],
                line_number: 14,
                callback1: [
                  {
                    type: 'setVisible',
                    dataId: 166746173424768740,
                    options: {
                      compId: 'Table_5369494',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Table',
                      id: '508399',
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
                dataId: 166599065519323230,
                options: {
                  compId:
                    'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_3906775_793797_061625_486386',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '3516',
                  visible: 'true',
                },
                line_number: 17,
              },
              {
                type: 'sysSetVisible',
                dataId: 166244953733999170,
                options: {
                  compId: [
                    'Row_851124',
                    'Table_8700198_43013',
                    'Button_683498',
                    'Button_026256',
                    'StdUpload_304342_6986628',
                    'Button_061196_31367',
                    'Button_227466',
                  ],
                  compName: 'page',
                  id: '675663',
                  pageJsonId: '537892',
                  compid: [
                    'Row_851124',
                    'Table_8700198_43013',
                    'Button_683498',
                    'Button_026256',
                    'StdUpload_304342_6986628',
                    'Button_061196_31367',
                    'Button_227466',
                  ],
                  visible: '',
                },
                line_number: 18,
              },
              {
                type: 'setDisable',
                dataId: 166599066752289570,
                options: {
                  compId: [
                    'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_3906775_793797_061625_486386',
                    'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812_069237',
                  ],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '176705',
                  disabled: 'true',
                  compid: [
                    'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_3906775_793797_061625_486386',
                    'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812_069237',
                  ],
                },
                line_number: 19,
              },
              {
                type: 'setVisible',
                dataId: 166599067878586370,
                options: {
                  compId: 'Table_8700198_43013_22115',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Table',
                  id: '7837227',
                  visible: 'true',
                },
                line_number: 20,
              },
            ],
          },
          {
            type: 'console',
            dataId: 169822296580497100,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '1893105',
              pageJsonId: '537892',
              value: ['===itemList===', '$state.itemList$'],
            },
            line_number: 21,
          },
        ],
      },
    ];
    eventDataifelse211.params = [] || [];
    CMDGenerator(eventDataifelse211, {}, 'ifelse', {
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
          dividerText={'集团MPLS-VPN专线资费'}
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
                  id: 'Form_4311097_9385662_8411515_9167293_4337769_708507_903502_3391966_7284254_67343096_674023_472119',
                  uid: 'Form_4311097_9385662_8411515_9167293_4337769_708507_903502_3391966_7284254_67343096_674023_472119',
                  type: 'Form',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) =>
                  (refs[
                    'Form_4311097_9385662_8411515_9167293_4337769_708507_903502_3391966_7284254_67343096_674023_472119'
                  ] = r)
                }
                {...injectData}
              >
                <Checkbox
                  name={'审批场景'}
                  titleTip={'text'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  text={'集团MPLS-VPN专线资费'}
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
                    id: 'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_855402_518092_522155_5456225',
                    uid: 'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_855402_518092_522155_5456225',
                    type: 'Checkbox',
                    ...componentItem,
                  }}
                  disabled={true}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    (refs[
                      'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_855402_518092_522155_5456225'
                    ] = r)
                  }
                  {...injectData}
                />
                <View
                  name={'布局容器'}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_6319234_3569864_15467365_781748_241037_2908738_650712_125622',
                    uid: 'View_6319234_3569864_15467365_781748_241037_2908738_650712_125622',
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
                      'View_6319234_3569864_15467365_781748_241037_2908738_650712_125622'
                    ] = r)
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
                    id: 'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_3906775_793797_061625_486386',
                    uid: 'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_3906775_793797_061625_486386',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={false}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    (refs[
                      'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_3906775_793797_061625_486386'
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
              id: 'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812_069237',
              uid: 'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812_069237',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px', margin: '0px 0px 0px 0px' }}
            onValuesChange={(changedFieldName: any, changedValue: any) => {
              const eventDatasetDataSource169: any = [
                {
                  type: 'setDataSource',
                  dataId: 167051267382181400,
                  options: {
                    compId: 'page',
                    compName: 'page',
                    id: '051892',
                    pageJsonId: '537892',
                    dataSourceId: 167051266499875970,
                    dataSourceName: 'factorForm',
                    dataSourceRelType: 'custom',
                    dataSourceReloadFilter: [],
                    dataSourceSetValue: [
                      {
                        attrId: '091181',
                        code: 'reason',
                        name: '申请原因',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812_069237',
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
                      dataId: 167051272609527600,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '076063',
                        pageJsonId: '537892',
                        actionTitle: '',
                        code: 'function main(data,state,success,fail){var attrList=[];var obj=data.factorForm;for(var key in obj){attrList.push({"attrCode":key,"attrName":"","attrValue":obj[key]})}data.sceneSubmit.attrList=attrList;success(attrList)};',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'callParentCustomFunc',
                          dataId: 167051272609561630,
                          options: {
                            compId: 'callParentCustomFunc',
                            compName: 'system',
                            id: '6891993',
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
              eventDatasetDataSource169.params =
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
                eventDatasetDataSource169,
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
                'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812_069237'
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
                '该集团主要为XX（集团简单介绍），原已合作XX业务。现阶段有意向与我司合作MPLS-VPN专线业务，合作期XX年。鉴于XX，拟申请按以下资费合作'
              }
              $$componentItem={{
                id: 'Input_7242206_974846_973427_271953',
                uid: 'Input_7242206_974846_973427_271953',
                type: 'TextArea',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_7242206_974846_973427_271953'] = r)}
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
                  const eventDatashowCustomModal188: any = [
                    {
                      type: 'showCustomModal',
                      dataId: 166314610874318850,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '611628',
                        pageJsonId: '537892',
                        modalname: '/mvFeeAudit',
                        pageId: '899188357497327616',
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
                            code: 'function main(data,state,success,fail){data.feeInfo.push(okData_611628);var instList=[];for(var key in okData_611628){if(key!="rowId"&&key!="marketList"){instList.push({"attrCode":key,"attrName":"","attrValue":okData_611628[key]})}if(key=="marketList"){instList.push({"attrCode":key,"attrName":"","attrValue":JSON.stringify(okData_611628[key])})}}var instObj={"instCode":okData_611628.rowId,"instAttrList":instList};if(data.sceneSubmit.instList!=undefined&&data.sceneSubmit.instList.length>0){data.sceneSubmit.instList.push(instObj)}else{var instList=[];instList.push(instObj);data.sceneSubmit.instList=instList}success()};',
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
                                    attrId: '739205',
                                    code: 'busiType',
                                    name: '业务类型',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['busiType'],
                                    _idpath: ['739205'],
                                  },
                                  {
                                    attrId: '252243',
                                    code: 'standardPrice',
                                    name: '标准价格',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['standardPrice'],
                                    _idpath: ['252243'],
                                  },
                                  {
                                    attrId: '137802',
                                    code: 'receiptsPrice',
                                    name: '实收价',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['receiptsPrice'],
                                    _idpath: ['137802'],
                                  },
                                  {
                                    attrId: '963826',
                                    code: 'bandwidth',
                                    name: '带宽',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['bandwidth'],
                                    _idpath: ['963826'],
                                  },
                                  {
                                    attrId: '5031659',
                                    code: 'ipv6GiveNum',
                                    name: 'IPv6赠送数',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['ipv6GiveNum'],
                                    _idpath: ['5031659'],
                                  },
                                  {
                                    attrId: '6377456',
                                    code: 'ipv4GiveNum',
                                    name: 'IPv4赠送数',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['ipv4GiveNum'],
                                    _idpath: ['6377456'],
                                  },
                                  {
                                    attrId: '665968',
                                    code: 'ipv6DemandNum',
                                    name: 'IPv6需求数',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['ipv6DemandNum'],
                                    _idpath: ['665968'],
                                  },
                                  {
                                    attrId: '754893',
                                    code: 'ipv4DemandNum',
                                    name: 'IPv4需求数',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['ipv4DemandNum'],
                                    _idpath: ['754893'],
                                  },
                                  {
                                    attrId: '6429123',
                                    code: 'ipv6BeyondSel',
                                    name: 'IPv6超出选择',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['ipv6BeyondSel'],
                                    _idpath: ['6429123'],
                                  },
                                  {
                                    attrId: '197527',
                                    code: 'ipv4BeyondNum',
                                    name: 'IPv4超出个数',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['ipv4BeyondNum'],
                                    _idpath: ['197527'],
                                  },
                                  {
                                    attrId: '2152803',
                                    code: 'ipv6BeyondCost',
                                    name: 'IPv6超出费用',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['ipv6BeyondCost'],
                                    _idpath: ['2152803'],
                                  },
                                  {
                                    attrId: '017672',
                                    code: 'ipv4BeyondCount',
                                    name: 'IPv4元/月/个',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['ipv4BeyondCount'],
                                    _idpath: ['017672'],
                                  },
                                  {
                                    attrId: '26139435',
                                    code: 'unitPrice',
                                    name: '单价（元/G）',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['unitPrice'],
                                    _idpath: ['26139435'],
                                  },
                                  {
                                    attrId: '62643',
                                    code: 'lastDiscount',
                                    name: '最终折扣',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['lastDiscount'],
                                    _idpath: ['62643'],
                                  },
                                  {
                                    attrId: '9425584',
                                    code: 'market',
                                    name: '营销案',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['market'],
                                    _idpath: ['9425584'],
                                  },
                                  {
                                    attrId: '442519',
                                    code: 'busiTypeName',
                                    name: '业务类型名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['busiTypeName'],
                                    _idpath: ['442519'],
                                  },
                                  {
                                    attrId: '3700349',
                                    code: 'areaType',
                                    name: '区域类型',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['areaType'],
                                    _idpath: ['3700349'],
                                  },
                                  {
                                    attrId: '7190864',
                                    code: 'joinWay',
                                    name: '接入方式',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['joinWay'],
                                    _idpath: ['7190864'],
                                  },
                                  {
                                    attrId: '026113',
                                    code: 'bandwidthUp',
                                    name: '上行宽带',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['bandwidthUp'],
                                    _idpath: ['026113'],
                                  },
                                  {
                                    attrId: '9865009',
                                    code: 'bandwidthDown',
                                    name: '下行宽带',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['bandwidthDown'],
                                    _idpath: ['9865009'],
                                  },
                                  {
                                    attrId: '262314',
                                    code: 'bandwidthPort',
                                    name: 'SDWAN端口带宽',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['bandwidthPort'],
                                    _idpath: ['262314'],
                                  },
                                  {
                                    attrId: '4672304',
                                    code: 'singleUseFee',
                                    name: '一次性费用',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['singleUseFee'],
                                    _idpath: ['4672304'],
                                  },
                                  {
                                    attrId: '567251',
                                    code: 'portFee',
                                    name: '端口费',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['portFee'],
                                    _idpath: ['567251'],
                                  },
                                  {
                                    attrId: '9620426',
                                    code: 'ipv6BeyondNum',
                                    name: 'IPv6超出个数',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['ipv6BeyondNum'],
                                    _idpath: ['9620426'],
                                  },
                                  {
                                    attrId: '1137346',
                                    code: 'ipv6BeyondCount',
                                    name: 'IPv6元/月/个',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['ipv6BeyondCount'],
                                    _idpath: ['1137346'],
                                  },
                                  {
                                    attrId: '467282',
                                    code: 'standardPriceSdWan',
                                    name: 'SDWAN标准价格',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['standardPriceSdWan'],
                                    _idpath: ['467282'],
                                  },
                                  {
                                    attrId: '801439',
                                    code: 'receiptsPriceSdWan',
                                    name: 'SDWAN实收价格',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['receiptsPriceSdWan'],
                                    _idpath: ['801439'],
                                  },
                                  {
                                    attrId: '5486426',
                                    code: 'bandwidthName',
                                    name: '带宽名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['bandwidthName'],
                                    _idpath: ['5486426'],
                                  },
                                  {
                                    attrId: '32349',
                                    code: 'portFeeMonth',
                                    name: '端口月租费（元/月）',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['portFeeMonth'],
                                    _idpath: ['32349'],
                                  },
                                  {
                                    attrId: '40523',
                                    code: 'receiptsPriceSum',
                                    name: '总实收价（元）',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['receiptsPriceSum'],
                                    _idpath: ['40523'],
                                  },
                                  {
                                    attrId: '76201',
                                    code: 'singleUseFeeName',
                                    name: '一次性费用名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['singleUseFeeName'],
                                    _idpath: ['76201'],
                                  },
                                  {
                                    attrId: '95735',
                                    code: 'groupCity',
                                    name: '集团归属地市',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['groupCity'],
                                    _idpath: ['95735'],
                                  },
                                  {
                                    attrId: '203369',
                                    code: 'joinWayName',
                                    name: '接入方式名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['joinWayName'],
                                    _idpath: ['203369'],
                                  },
                                  {
                                    attrId: '335167',
                                    code: 'areaTypeName',
                                    name: '区域类型名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['areaTypeName'],
                                    _idpath: ['335167'],
                                  },
                                  {
                                    attrId: '343475',
                                    code: 'portStandardFee',
                                    name: '端口月租费(元/月)',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['portStandardFee'],
                                    _idpath: ['343475'],
                                  },
                                  {
                                    attrId: '758304',
                                    code: 'rowId',
                                    name: '行id',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['rowId'],
                                    _idpath: ['758304'],
                                  },
                                  {
                                    attrId: '935972',
                                    code: 'aimCity',
                                    name: '集团接入地市',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['aimCity'],
                                    _idpath: ['935972'],
                                  },
                                  {
                                    attrId: '1150935',
                                    code: 'portDiscount',
                                    name: '端口折扣',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['portDiscount'],
                                    _idpath: ['1150935'],
                                  },
                                  {
                                    attrId: '2587274',
                                    code: 'portStandardPrice',
                                    name: '端口标准价格（元/月）',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['portStandardPrice'],
                                    _idpath: ['2587274'],
                                  },
                                  {
                                    attrId: '3825956',
                                    code: 'eleFeeMonth',
                                    name: '电路月租费（元/月）',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['eleFeeMonth'],
                                    _idpath: ['3825956'],
                                  },
                                  {
                                    attrId: '4269325',
                                    code: 'ipv4BeyondCost',
                                    name: 'IPv4超出费用',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['ipv4BeyondCost'],
                                    _idpath: ['4269325'],
                                  },
                                  {
                                    attrId: '4829836',
                                    code: 'row',
                                    name: '条数',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['row'],
                                    _idpath: ['4829836'],
                                  },
                                  {
                                    attrId: '8937669',
                                    code: 'marketName',
                                    name: '营销案名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['marketName'],
                                    _idpath: ['8937669'],
                                  },
                                  {
                                    attrId: '001846',
                                    code: 'bandwidthUpName',
                                    name: '上行宽带名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['bandwidthUpName'],
                                    _idpath: ['001846'],
                                  },
                                  {
                                    attrId: '083862',
                                    code: 'bandwidthDownName',
                                    name: '下行宽带名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['bandwidthDownName'],
                                    _idpath: ['083862'],
                                  },
                                  {
                                    attrId: '0663327',
                                    code: 'eleDiscount',
                                    name: '电路接入折扣',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['eleDiscount'],
                                    _idpath: ['0663327'],
                                  },
                                  {
                                    attrId: '8750128',
                                    code: 'crmAreaType',
                                    name: '区域类型',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['crmAreaType'],
                                    _idpath: ['8750128'],
                                  },
                                  {
                                    attrId: '645805',
                                    code: 'crmAreaTypeName',
                                    name: '区域类型名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['crmAreaTypeName'],
                                    _idpath: ['645805'],
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
                  eventDatashowCustomModal188.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatashowCustomModal188,
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
                  const eventDatagetTableSelectedKey66: any = [
                    {
                      type: 'getTableSelectedKey',
                      dataId: 166564437420303140,
                      options: {
                        compId: 'Table_8700198_43013',
                        compLib: 'comm',
                        pageJsonId: '537892',
                        compName: 'Table',
                        id: '262995',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'customActionCode',
                          dataId: 166564437954781280,
                          shielding: true,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '621692',
                            pageJsonId: '537892',
                            code: 'function main(data,state,success,fail){var feeInfo=data.feeInfo;var sel=selectedRowKeys_262995;var res=[];var instList=[];if(sel!=undefined&&sel.length>0){feeInfo.forEach(function(v){var exit=sel.findIndex(function(item){return item===v.rowId});console.log(exit);if(exit===-1){res.push(v)}});data.feeInfo=res;data.sceneSubmit.instList.forEach(function(v){var exit=sel.findIndex(function(item){return item===v.instCode});if(exit===-1){instList.push(v)}});data.sceneSubmit.instList=instList}success()};',
                          },
                          line_number: 2,
                          callback1: [
                            {
                              type: 'setDataSource',
                              dataId: 166564437954770880,
                              shielding: true,
                              options: {
                                compId: 'setDataSource',
                                compName: 'page',
                                id: '62585716',
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
                                    showInput: false,
                                    _codePath: ['busiType'],
                                    _idpath: ['739205'],
                                  },
                                  {
                                    attrId: '252243',
                                    code: 'standardPrice',
                                    name: '标准价格',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['standardPrice'],
                                    _idpath: ['252243'],
                                  },
                                  {
                                    attrId: '137802',
                                    code: 'receiptsPrice',
                                    name: '实收价',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['receiptsPrice'],
                                    _idpath: ['137802'],
                                  },
                                  {
                                    attrId: '963826',
                                    code: 'bandwidth',
                                    name: '带宽',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['bandwidth'],
                                    _idpath: ['963826'],
                                  },
                                  {
                                    attrId: '5031659',
                                    code: 'ipv6GiveNum',
                                    name: 'IPv6赠送数',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['ipv6GiveNum'],
                                    _idpath: ['5031659'],
                                  },
                                  {
                                    attrId: '6377456',
                                    code: 'ipv4GiveNum',
                                    name: 'IPv4赠送数',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['ipv4GiveNum'],
                                    _idpath: ['6377456'],
                                  },
                                  {
                                    attrId: '665968',
                                    code: 'ipv6DemandNum',
                                    name: 'IPv6需求数',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['ipv6DemandNum'],
                                    _idpath: ['665968'],
                                  },
                                  {
                                    attrId: '754893',
                                    code: 'ipv4DemandNum',
                                    name: 'IPv4需求数',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['ipv4DemandNum'],
                                    _idpath: ['754893'],
                                  },
                                  {
                                    attrId: '6429123',
                                    code: 'ipv6BeyondSel',
                                    name: 'IPv6超出选择',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['ipv6BeyondSel'],
                                    _idpath: ['6429123'],
                                  },
                                  {
                                    attrId: '197527',
                                    code: 'ipv4BeyondNum',
                                    name: 'IPv4超出个数',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['ipv4BeyondNum'],
                                    _idpath: ['197527'],
                                  },
                                  {
                                    attrId: '2152803',
                                    code: 'ipv6BeyondCost',
                                    name: 'IPv6超出费用',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['ipv6BeyondCost'],
                                    _idpath: ['2152803'],
                                  },
                                  {
                                    attrId: '017672',
                                    code: 'ipv4BeyondCount',
                                    name: 'IPv4元/月/个',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['ipv4BeyondCount'],
                                    _idpath: ['017672'],
                                  },
                                  {
                                    attrId: '26139435',
                                    code: 'unitPrice',
                                    name: '单价（元/G）',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['unitPrice'],
                                    _idpath: ['26139435'],
                                  },
                                  {
                                    attrId: '62643',
                                    code: 'lastDiscount',
                                    name: '最终折扣',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['lastDiscount'],
                                    _idpath: ['62643'],
                                  },
                                  {
                                    attrId: '9425584',
                                    code: 'market',
                                    name: '营销案',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['market'],
                                    _idpath: ['9425584'],
                                  },
                                  {
                                    attrId: '442519',
                                    code: 'busiTypeName',
                                    name: '业务类型名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['busiTypeName'],
                                    _idpath: ['442519'],
                                  },
                                  {
                                    attrId: '3700349',
                                    code: 'areaType',
                                    name: '区域类型',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['areaType'],
                                    _idpath: ['3700349'],
                                  },
                                  {
                                    attrId: '7190864',
                                    code: 'joinWay',
                                    name: '接入方式',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['joinWay'],
                                    _idpath: ['7190864'],
                                  },
                                  {
                                    attrId: '026113',
                                    code: 'bandwidthUp',
                                    name: '上行宽带',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['bandwidthUp'],
                                    _idpath: ['026113'],
                                  },
                                  {
                                    attrId: '9865009',
                                    code: 'bandwidthDown',
                                    name: '下行宽带',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['bandwidthDown'],
                                    _idpath: ['9865009'],
                                  },
                                  {
                                    attrId: '262314',
                                    code: 'bandwidthPort',
                                    name: 'SDWAN端口带宽',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['bandwidthPort'],
                                    _idpath: ['262314'],
                                  },
                                  {
                                    attrId: '4672304',
                                    code: 'singleUseFee',
                                    name: '一次性费用',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['singleUseFee'],
                                    _idpath: ['4672304'],
                                  },
                                  {
                                    attrId: '567251',
                                    code: 'portFee',
                                    name: '端口费',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['portFee'],
                                    _idpath: ['567251'],
                                  },
                                  {
                                    attrId: '9620426',
                                    code: 'ipv6BeyondNum',
                                    name: 'IPv6超出个数',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['ipv6BeyondNum'],
                                    _idpath: ['9620426'],
                                  },
                                  {
                                    attrId: '1137346',
                                    code: 'ipv6BeyondCount',
                                    name: 'IPv6元/月/个',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['ipv6BeyondCount'],
                                    _idpath: ['1137346'],
                                  },
                                  {
                                    attrId: '467282',
                                    code: 'standardPriceSdWan',
                                    name: 'SDWAN标准价格',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['standardPriceSdWan'],
                                    _idpath: ['467282'],
                                  },
                                  {
                                    attrId: '801439',
                                    code: 'receiptsPriceSdWan',
                                    name: 'SDWAN实收价格',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['receiptsPriceSdWan'],
                                    _idpath: ['801439'],
                                  },
                                  {
                                    attrId: '32349',
                                    code: 'portFeeMonth',
                                    name: '端口月租费（元/月）',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['portFeeMonth'],
                                    _idpath: ['32349'],
                                  },
                                  {
                                    attrId: '40523',
                                    code: 'receiptsPriceSum',
                                    name: '总实收价（元）',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['receiptsPriceSum'],
                                    _idpath: ['40523'],
                                  },
                                  {
                                    attrId: '76201',
                                    code: 'singleUseFeeName',
                                    name: '一次性费用名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['singleUseFeeName'],
                                    _idpath: ['76201'],
                                  },
                                  {
                                    attrId: '95735',
                                    code: 'groupCity',
                                    name: '集团归属地市',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['groupCity'],
                                    _idpath: ['95735'],
                                  },
                                  {
                                    attrId: '203369',
                                    code: 'joinWayName',
                                    name: '接入方式名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['joinWayName'],
                                    _idpath: ['203369'],
                                  },
                                  {
                                    attrId: '335167',
                                    code: 'areaTypeName',
                                    name: '区域类型名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['areaTypeName'],
                                    _idpath: ['335167'],
                                  },
                                  {
                                    attrId: '343475',
                                    code: 'portStandardFee',
                                    name: '端口月租费(元/月)',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['portStandardFee'],
                                    _idpath: ['343475'],
                                  },
                                  {
                                    attrId: '758304',
                                    code: 'rowId',
                                    name: '行id',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['rowId'],
                                    _idpath: ['758304'],
                                  },
                                  {
                                    attrId: '935972',
                                    code: 'aimCity',
                                    name: '集团接入地市',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['aimCity'],
                                    _idpath: ['935972'],
                                  },
                                  {
                                    attrId: '1150935',
                                    code: 'portDiscount',
                                    name: '端口折扣',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['portDiscount'],
                                    _idpath: ['1150935'],
                                  },
                                  {
                                    attrId: '2587274',
                                    code: 'portStandardPrice',
                                    name: '端口标准价格（元/月）',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['portStandardPrice'],
                                    _idpath: ['2587274'],
                                  },
                                  {
                                    attrId: '3825956',
                                    code: 'eleFeeMonth',
                                    name: '电路月租费（元/月）',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['eleFeeMonth'],
                                    _idpath: ['3825956'],
                                  },
                                  {
                                    attrId: '4269325',
                                    code: 'ipv4BeyondCost',
                                    name: 'IPv4超出费用',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['ipv4BeyondCost'],
                                    _idpath: ['4269325'],
                                  },
                                  {
                                    attrId: '4829836',
                                    code: 'row',
                                    name: '条数',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['row'],
                                    _idpath: ['4829836'],
                                  },
                                  {
                                    attrId: '5486426',
                                    code: 'bandwidthName',
                                    name: '带宽名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['bandwidthName'],
                                    _idpath: ['5486426'],
                                  },
                                  {
                                    attrId: '8937669',
                                    code: 'marketName',
                                    name: '营销案名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['marketName'],
                                    _idpath: ['8937669'],
                                  },
                                  {
                                    attrId: '001846',
                                    code: 'bandwidthUpName',
                                    name: '上行宽带名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['bandwidthUpName'],
                                    _idpath: ['001846'],
                                  },
                                  {
                                    attrId: '083862',
                                    code: 'bandwidthDownName',
                                    name: '下行宽带名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['bandwidthDownName'],
                                    _idpath: ['083862'],
                                  },
                                  {
                                    attrId: '0663327',
                                    code: 'eleDiscount',
                                    name: '电路接入折扣',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['eleDiscount'],
                                    _idpath: ['0663327'],
                                  },
                                  {
                                    attrId: '8750128',
                                    code: 'crmAreaType',
                                    name: '区域类型',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['crmAreaType'],
                                    _idpath: ['8750128'],
                                  },
                                  {
                                    attrId: '645805',
                                    code: 'crmAreaTypeName',
                                    name: '区域类型名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['crmAreaTypeName'],
                                    _idpath: ['645805'],
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
                              dataId: 166564437954734700,
                              shielding: true,
                              options: {
                                compId: 'callParentCustomFunc',
                                compName: 'system',
                                id: '8907398',
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
                                context: '$selectedRowKeys_262995$',
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
                                    context: '$selectedRowKeys_262995$',
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
                                    context: '$selectedRowKeys_262995.length$',
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
                          dataId: 168661873970610080,
                          elseIfs: [
                            {
                              dataName: 'elseIf',
                              dataId: 168661873974970000,
                              children: [
                                {
                                  dataName: 'action',
                                  dataId: 168661873974918300,
                                  children: [
                                    {
                                      dataName: 'callback',
                                      dataId: 168661873974948500,
                                      children: [
                                        {
                                          dataName: 'action',
                                          dataId: 168661878819133860,
                                          children: [
                                            {
                                              dataName: 'callback',
                                              dataId: 168661878819127740,
                                              children: [
                                                {
                                                  dataName: 'action',
                                                  dataId: 168661878819149570,
                                                  children: [
                                                    {
                                                      dataName: 'callback',
                                                      dataId: 168661878819131200,
                                                      children: [],
                                                      value: 'callback1',
                                                      params: [],
                                                    },
                                                    {
                                                      dataName: 'callback',
                                                      dataId: 168661878819139740,
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
                                                    id: '884552',
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
                                                  dataId: 168661878819126240,
                                                  children: [
                                                    {
                                                      dataName: 'callback',
                                                      dataId: 168661878819135300,
                                                      children: [],
                                                      value: 'callback1',
                                                      params: [],
                                                    },
                                                    {
                                                      dataName: 'callback',
                                                      dataId: 168661878819182750,
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
                                                    id: '328386',
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
                                              dataId: 168661878819153100,
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
                                            id: '6890106',
                                            pageJsonId: '537892',
                                            code: 'function main(data,state,success,fail){var feeInfo=data.feeInfo;var sel=selectedRowKeys_262995;var res=[];var instList=[];if(sel!=undefined&&sel.length>0){feeInfo.forEach(function(v){var exit=sel.findIndex(function(item){return item===v.rowId});console.log(exit);if(exit===-1){res.push(v)}});data.feeInfo=res;data.sceneSubmit.instList.forEach(function(v){var exit=sel.findIndex(function(item){return item===v.instCode});if(exit===-1){instList.push(v)}});data.sceneSubmit.instList=instList}success()};',
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
                                      dataId: 168661873974946020,
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
                                    id: '4021936',
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
                                  dataId: 168661873974918300,
                                  options: {
                                    compId: 'showModal',
                                    compName: 'page',
                                    id: '4021936',
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
                                      dataId: 168661878819133860,
                                      options: {
                                        compId: 'customActionCode',
                                        compName: 'page',
                                        id: '6890106',
                                        pageJsonId: '537892',
                                        code: 'function main(data,state,success,fail){var feeInfo=data.feeInfo;var sel=selectedRowKeys_262995;var res=[];var instList=[];if(sel!=undefined&&sel.length>0){feeInfo.forEach(function(v){var exit=sel.findIndex(function(item){return item===v.rowId});console.log(exit);if(exit===-1){res.push(v)}});data.feeInfo=res;data.sceneSubmit.instList.forEach(function(v){var exit=sel.findIndex(function(item){return item===v.instCode});if(exit===-1){instList.push(v)}});data.sceneSubmit.instList=instList}success()};',
                                      },
                                      line_number: 8,
                                      callback1: [
                                        {
                                          type: 'setDataSource',
                                          dataId: 168661878819149570,
                                          options: {
                                            compId: 'setDataSource',
                                            compName: 'page',
                                            id: '884552',
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
                                          dataId: 168661878819126240,
                                          options: {
                                            compId: 'callParentCustomFunc',
                                            compName: 'system',
                                            id: '328386',
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
                              dataId: 168661873974969630,
                              options: {
                                compId: 'showMessage',
                                compName: 'system',
                                id: '13086',
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
                  eventDatagetTableSelectedKey66.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatagetTableSelectedKey66,
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
                  id: 'Button_227466',
                  uid: 'Button_227466',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ width: 'fit-content', margin: '0px 10px 0px 0px' }}
                onClick={(e: any) => {
                  const eventDataifelse487: any = [
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
                                    attrId: '739205',
                                    code: 'busiType',
                                    name: '业务类型',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['busiType'],
                                    _idpath: ['739205'],
                                  },
                                  {
                                    attrId: '252243',
                                    code: 'standardPrice',
                                    name: '标准价格',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['standardPrice'],
                                    _idpath: ['252243'],
                                  },
                                  {
                                    attrId: '137802',
                                    code: 'receiptsPrice',
                                    name: '实收价',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['receiptsPrice'],
                                    _idpath: ['137802'],
                                  },
                                  {
                                    attrId: '963826',
                                    code: 'bandwidth',
                                    name: '带宽',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['bandwidth'],
                                    _idpath: ['963826'],
                                  },
                                  {
                                    attrId: '5031659',
                                    code: 'ipv6GiveNum',
                                    name: 'IPv6赠送数',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['ipv6GiveNum'],
                                    _idpath: ['5031659'],
                                  },
                                  {
                                    attrId: '6377456',
                                    code: 'ipv4GiveNum',
                                    name: 'IPv4赠送数',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['ipv4GiveNum'],
                                    _idpath: ['6377456'],
                                  },
                                  {
                                    attrId: '665968',
                                    code: 'ipv6DemandNum',
                                    name: 'IPv6需求数',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['ipv6DemandNum'],
                                    _idpath: ['665968'],
                                  },
                                  {
                                    attrId: '754893',
                                    code: 'ipv4DemandNum',
                                    name: 'IPv4需求数',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['ipv4DemandNum'],
                                    _idpath: ['754893'],
                                  },
                                  {
                                    attrId: '197527',
                                    code: 'ipv4BeyondNum',
                                    name: 'IPv4超出个数',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['ipv4BeyondNum'],
                                    _idpath: ['197527'],
                                  },
                                  {
                                    attrId: '017672',
                                    code: 'ipv4BeyondCount',
                                    name: 'IPv4元/月/个',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['ipv4BeyondCount'],
                                    _idpath: ['017672'],
                                  },
                                  {
                                    attrId: '26139435',
                                    code: 'unitPrice',
                                    name: '单价（元/G）',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['unitPrice'],
                                    _idpath: ['26139435'],
                                  },
                                  {
                                    attrId: '62643',
                                    code: 'lastDiscount',
                                    name: '最终折扣',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['lastDiscount'],
                                    _idpath: ['62643'],
                                  },
                                  {
                                    attrId: '9425584',
                                    code: 'market',
                                    name: '营销案',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['market'],
                                    _idpath: ['9425584'],
                                  },
                                  {
                                    attrId: '442519',
                                    code: 'busiTypeName',
                                    name: '业务类型名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['busiTypeName'],
                                    _idpath: ['442519'],
                                  },
                                  {
                                    attrId: '3700349',
                                    code: 'areaType',
                                    name: '区域类型',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['areaType'],
                                    _idpath: ['3700349'],
                                  },
                                  {
                                    attrId: '7190864',
                                    code: 'joinWay',
                                    name: '接入方式',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['joinWay'],
                                    _idpath: ['7190864'],
                                  },
                                  {
                                    attrId: '026113',
                                    code: 'bandwidthUp',
                                    name: '上行宽带',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['bandwidthUp'],
                                    _idpath: ['026113'],
                                  },
                                  {
                                    attrId: '9865009',
                                    code: 'bandwidthDown',
                                    name: '下行宽带',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['bandwidthDown'],
                                    _idpath: ['9865009'],
                                  },
                                  {
                                    attrId: '262314',
                                    code: 'bandwidthPort',
                                    name: 'SDWAN端口带宽',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['bandwidthPort'],
                                    _idpath: ['262314'],
                                  },
                                  {
                                    attrId: '4672304',
                                    code: 'singleUseFee',
                                    name: '一次性费用',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['singleUseFee'],
                                    _idpath: ['4672304'],
                                  },
                                  {
                                    attrId: '567251',
                                    code: 'portFee',
                                    name: '端口费',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['portFee'],
                                    _idpath: ['567251'],
                                  },
                                  {
                                    attrId: '9620426',
                                    code: 'ipv6BeyondNum',
                                    name: 'IPv6超出个数',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['ipv6BeyondNum'],
                                    _idpath: ['9620426'],
                                  },
                                  {
                                    attrId: '1137346',
                                    code: 'ipv6BeyondCount',
                                    name: 'IPv6元/月/个',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['ipv6BeyondCount'],
                                    _idpath: ['1137346'],
                                  },
                                  {
                                    attrId: '467282',
                                    code: 'standardPriceSdWan',
                                    name: 'SDWAN标准价格',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['standardPriceSdWan'],
                                    _idpath: ['467282'],
                                  },
                                  {
                                    attrId: '801439',
                                    code: 'receiptsPriceSdWan',
                                    name: 'SDWAN实收价格',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['receiptsPriceSdWan'],
                                    _idpath: ['801439'],
                                  },
                                  {
                                    attrId: '5486426',
                                    code: 'bandwidthName',
                                    name: '带宽名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['bandwidthName'],
                                    _idpath: ['5486426'],
                                  },
                                  {
                                    attrId: '758304',
                                    code: 'rowId',
                                    name: '行id',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['rowId'],
                                    _idpath: ['758304'],
                                  },
                                  {
                                    attrId: '4269325',
                                    code: 'ipv4BeyondCost',
                                    name: 'IPv4超出费用',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _idpath: ['4269325'],
                                    _codePath: ['ipv4BeyondCost'],
                                  },
                                  {
                                    attrId: '4829836',
                                    code: 'row',
                                    name: '条数',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _idpath: ['4829836'],
                                    _codePath: ['row'],
                                  },
                                  {
                                    attrId: '40523',
                                    code: 'receiptsPriceSum',
                                    name: '总实收价（元）',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _idpath: ['40523'],
                                    _codePath: ['receiptsPriceSum'],
                                  },
                                  {
                                    attrId: '8937669',
                                    code: 'marketName',
                                    name: '营销案名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _idpath: ['8937669'],
                                    _codePath: ['marketName'],
                                  },
                                  {
                                    attrId: '32349',
                                    code: 'portFeeMonth',
                                    name: '端口月租费（元/月）',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['portFeeMonth'],
                                    _idpath: ['32349'],
                                  },
                                  {
                                    attrId: '76201',
                                    code: 'singleUseFeeName',
                                    name: '一次性费用名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['singleUseFeeName'],
                                    _idpath: ['76201'],
                                  },
                                  {
                                    attrId: '95735',
                                    code: 'groupCity',
                                    name: '集团归属地市',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['groupCity'],
                                    _idpath: ['95735'],
                                  },
                                  {
                                    attrId: '203369',
                                    code: 'joinWayName',
                                    name: '接入方式名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['joinWayName'],
                                    _idpath: ['203369'],
                                  },
                                  {
                                    attrId: '335167',
                                    code: 'areaTypeName',
                                    name: '区域类型名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['areaTypeName'],
                                    _idpath: ['335167'],
                                  },
                                  {
                                    attrId: '343475',
                                    code: 'portStandardFee',
                                    name: '端口月租费(元/月)',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['portStandardFee'],
                                    _idpath: ['343475'],
                                  },
                                  {
                                    attrId: '935972',
                                    code: 'aimCity',
                                    name: '集团接入地市',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['aimCity'],
                                    _idpath: ['935972'],
                                  },
                                  {
                                    attrId: '1150935',
                                    code: 'portDiscount',
                                    name: '端口折扣',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['portDiscount'],
                                    _idpath: ['1150935'],
                                  },
                                  {
                                    attrId: '2152803',
                                    code: 'ipv6BeyondCost',
                                    name: 'IPv6超出费用',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['ipv6BeyondCost'],
                                    _idpath: ['2152803'],
                                  },
                                  {
                                    attrId: '2587274',
                                    code: 'portStandardPrice',
                                    name: '端口标准价格（元/月）',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['portStandardPrice'],
                                    _idpath: ['2587274'],
                                  },
                                  {
                                    attrId: '3825956',
                                    code: 'eleFeeMonth',
                                    name: '电路月租费（元/月）',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['eleFeeMonth'],
                                    _idpath: ['3825956'],
                                  },
                                  {
                                    attrId: '6429123',
                                    code: 'ipv6BeyondSel',
                                    name: 'IPv6超出选择',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['ipv6BeyondSel'],
                                    _idpath: ['6429123'],
                                  },
                                  {
                                    attrId: '001846',
                                    code: 'bandwidthUpName',
                                    name: '上行宽带名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['bandwidthUpName'],
                                    _idpath: ['001846'],
                                  },
                                  {
                                    attrId: '083862',
                                    code: 'bandwidthDownName',
                                    name: '下行宽带名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['bandwidthDownName'],
                                    _idpath: ['083862'],
                                  },
                                  {
                                    attrId: '0663327',
                                    code: 'eleDiscount',
                                    name: '电路接入折扣',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['eleDiscount'],
                                    _idpath: ['0663327'],
                                  },
                                  {
                                    attrId: '8750128',
                                    code: 'crmAreaType',
                                    name: '区域类型',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['crmAreaType'],
                                    _idpath: ['8750128'],
                                  },
                                  {
                                    attrId: '645805',
                                    code: 'crmAreaTypeName',
                                    name: '区域类型名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['crmAreaTypeName'],
                                    _idpath: ['645805'],
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
                  eventDataifelse487.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDataifelse487, { e }, 'ifelse', {
                    id: 'ifelse',
                    name: 'ifelse',
                    type: 'ifelse',
                    platform: 'pc',
                  });
                }}
                ref={(r: any) => (refs['Button_227466'] = r)}
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
                icon={{
                  type: undefined,
                  theme: 'outlined',
                  fontAddress: '',
                  isIconFont: false,
                  iconFileInfo: {},
                }}
                $$componentItem={{
                  id: 'StdUpload_304342_6986628',
                  uid: 'StdUpload_304342_6986628',
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
                  const eventDatasetLoading198: any = [
                    {
                      type: 'setLoading',
                      dataId: 167698790600546940,
                      options: {
                        compId: 'Table_8700198_43013',
                        compLib: 'comm',
                        pageJsonId: '537892',
                        compName: 'Table',
                        id: '4754126',
                        loading: true,
                      },
                      line_number: 1,
                    },
                  ];
                  eventDatasetLoading198.params =
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
                    eventDatasetLoading198,
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
                  const eventDataapiRequest752: any = [
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
                            code: 'header',
                            name: '请求头参数',
                            attrType: 'object',
                            _id: 'header',
                            compType: 'Input',
                            parents: [],
                            id: 'header',
                            dataKey: '9706607_header',
                          },
                          {
                            code: 'path',
                            name: '请求路径参数',
                            attrType: 'object',
                            _id: 'path',
                            compType: 'Input',
                            parents: [],
                            id: 'path',
                            dataKey: '9706607_path',
                          },
                          {
                            code: 'query',
                            name: 'URL 参数',
                            attrType: 'object',
                            _id: 'query',
                            compType: 'Input',
                            parents: [],
                            id: 'query',
                            dataKey: '9706607_query',
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
                                _id: 'body.fileCode',
                                compType: 'Input',
                                parents: ['body'],
                                id: 'body.fileCode',
                                dataKey: '9706607_body.fileCode',
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
                                name: '新增节点',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                defaultValue: '',
                                _id: 'body.sceneCode',
                                compType: 'Input',
                                parents: ['body'],
                                id: 'body.sceneCode',
                                dataKey: '9706607_body.sceneCode',
                                value: {
                                  type: ['customize'],
                                  code: 'CLS_CP_0007_0012',
                                },
                              },
                            ],
                            _id: 'body',
                            compType: 'Input',
                            parents: [],
                            id: 'body',
                            dataKey: '9706607_body',
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
                              condId: '540931',
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
                          dataId: 167642944440058560,
                          elseIfs: [
                            {
                              dataName: 'elseIf',
                              dataId: 167642950914085400,
                              children: [
                                {
                                  dataName: 'action',
                                  dataId: 167647360110629380,
                                  children: [
                                    {
                                      dataName: 'callback',
                                      dataId: 167647360110614560,
                                      children: [
                                        {
                                          dataName: 'action',
                                          dataId: 167647360110619870,
                                          children: [
                                            {
                                              dataName: 'callback',
                                              dataId: 167647360110681860,
                                              children: [
                                                {
                                                  dataName: 'action',
                                                  dataId: 167647360110609440,
                                                  children: [
                                                    {
                                                      dataName: 'callback',
                                                      dataId: 167647360110658050,
                                                      children: [
                                                        {
                                                          dataName: 'action',
                                                          dataId: 167647360110615460,
                                                          children: [
                                                            {
                                                              dataName:
                                                                'callback',
                                                              dataId: 167647360110644930,
                                                              children: [],
                                                              value:
                                                                'callback1',
                                                              params: [],
                                                              shielding: true,
                                                            },
                                                            {
                                                              dataName:
                                                                'callback',
                                                              dataId: 167647360110673250,
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
                                                            id: '331702',
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
                                                    },
                                                    {
                                                      dataName: 'callback',
                                                      dataId: 167647360110621700,
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
                                                    id: '4294692',
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
                                                  line_number: 7,
                                                },
                                              ],
                                              value: 'callback1',
                                              params: [],
                                            },
                                            {
                                              dataName: 'callback',
                                              dataId: 167647360110674240,
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
                                            compId: 'callParentCustomFunc',
                                            compName: 'system',
                                            id: '579593',
                                            pageJsonId: '537892',
                                            pathname: '/auditOrderPrepare',
                                            pageId: '884045146848604160',
                                            customFuncName: 'getFactor',
                                            customFuncParams: '$data_7743433$',
                                            modalPath: '/auditOrderPrepare',
                                          },
                                          actionObjId: 'callParentCustomFunc',
                                          actionObjName: 'system',
                                          value: 'callParentCustomFunc',
                                          line_number: 6,
                                        },
                                      ],
                                      value: 'callback1',
                                      params: [],
                                    },
                                    {
                                      dataName: 'callback',
                                      dataId: 167647360110685900,
                                      children: [],
                                      value: 'callback2',
                                      params: [],
                                    },
                                  ],
                                  todoOptions: ['actionTitle', 'editorCode'],
                                  options: {
                                    compId: 'customActionCode',
                                    compName: 'page',
                                    id: '7743433',
                                    pageJsonId: '537892',
                                    code: 'function main(data,state,success,fail){var infoList=reply_9706607.resultData;var instList=data.sceneSubmit.instList||[];for(var i=0;i<infoList.length;i++){if(infoList[i].marketList!=null&&infoList[i].marketList!=undefined){infoList[i].marketList=JSON.parse(infoList[i].marketList)}var list=[];for(var key in infoList[i]){if(key!="rowId"&&key!="marketList"){list.push({"attrCode":key,"attrName":"","attrValue":infoList[i][key]})}if(key=="marketList"){list.push({"attrCode":key,"attrName":"","attrValue":JSON.stringify(infoList[i][key])})}}var instObj={"instCode":infoList[i].rowId,"instAttrList":list};instList.push(instObj)}data.sceneSubmit.instList=instList;console.log("====\\u8BA2\\u5355\\u63D0\\u4EA4===",data.sceneSubmit);success(data.sceneSubmit)};',
                                  },
                                  actionObjId: 'customActionCode',
                                  actionObjName: 'page',
                                  value: 'customActionCode',
                                  line_number: 5,
                                },
                                {
                                  dataName: 'action',
                                  dataId: 168662110258775650,
                                  children: [
                                    {
                                      dataName: 'callback',
                                      dataId: 168662110258750000,
                                      children: [
                                        {
                                          dataName: 'action',
                                          dataId: 168662110258742820,
                                          children: [
                                            {
                                              dataName: 'callback',
                                              dataId: 168662110258786560,
                                              children: [],
                                              value: 'callback1',
                                              params: [],
                                            },
                                            {
                                              dataName: 'callback',
                                              dataId: 168662110258754240,
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
                                            id: '003719',
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
                                            newData: '$data_714056$',
                                            operateType: 3,
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
                                      dataId: 168662110258718600,
                                      children: [],
                                      value: 'callback2',
                                      params: [],
                                    },
                                  ],
                                  todoOptions: ['actionTitle', 'editorCode'],
                                  options: {
                                    compId: 'customActionCode',
                                    compName: 'page',
                                    id: '714056',
                                    pageJsonId: '537892',
                                    code: 'function main(data,state,success,fail){var infoList=reply_9706607.resultData;var feeInfoList=data.feeInfo||[];if(!infoList||infoList.length>0){feeInfoList=feeInfoList.concat(infoList)}success(feeInfoList)};',
                                  },
                                  actionObjId: 'customActionCode',
                                  actionObjName: 'page',
                                  value: 'customActionCode',
                                  tips: '注意：如果需要配合退出事件，请在代码块中增加return true',
                                  line_number: 9,
                                },
                                {
                                  dataName: 'action',
                                  dataId: 169873584868535700,
                                  children: [],
                                  todoOptions: ['valueArray'],
                                  options: {
                                    compId: 'debug',
                                    compName: 'system',
                                    id: '65141',
                                    pageJsonId: '537892',
                                    value: [
                                      '====解析响应====',
                                      '$reply_9706607$',
                                    ],
                                  },
                                  actionObjId: 'debug',
                                  actionObjName: 'system',
                                  value: 'console',
                                  line_number: 11,
                                },
                              ],
                              condition: [],
                              desc: '',
                              callback: [
                                {
                                  type: 'customActionCode',
                                  dataId: 167647360110629380,
                                  options: {
                                    compId: 'customActionCode',
                                    compName: 'page',
                                    id: '7743433',
                                    pageJsonId: '537892',
                                    code: 'function main(data,state,success,fail){var infoList=reply_9706607.resultData;var instList=data.sceneSubmit.instList||[];for(var i=0;i<infoList.length;i++){if(infoList[i].marketList!=null&&infoList[i].marketList!=undefined){infoList[i].marketList=JSON.parse(infoList[i].marketList)}var list=[];for(var key in infoList[i]){if(key!="rowId"&&key!="marketList"){list.push({"attrCode":key,"attrName":"","attrValue":infoList[i][key]})}if(key=="marketList"){list.push({"attrCode":key,"attrName":"","attrValue":JSON.stringify(infoList[i][key])})}}var instObj={"instCode":infoList[i].rowId,"instAttrList":list};instList.push(instObj)}data.sceneSubmit.instList=instList;console.log("====\\u8BA2\\u5355\\u63D0\\u4EA4===",data.sceneSubmit);success(data.sceneSubmit)};',
                                  },
                                  line_number: 5,
                                  callback1: [
                                    {
                                      type: 'callParentCustomFunc',
                                      dataId: 167647360110619870,
                                      options: {
                                        compId: 'callParentCustomFunc',
                                        compName: 'system',
                                        id: '579593',
                                        pageJsonId: '537892',
                                        pathname: '/auditOrderPrepare',
                                        pageId: '884045146848604160',
                                        customFuncName: 'getFactor',
                                        customFuncParams: '$data_7743433$',
                                        modalPath: '/auditOrderPrepare',
                                      },
                                      line_number: 6,
                                      callback1: [
                                        {
                                          type: 'setDataSource',
                                          dataId: 167647360110609440,
                                          options: {
                                            compId: 'setDataSource',
                                            compName: 'page',
                                            id: '4294692',
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
                                              dataId: 167647360110615460,
                                              shielding: true,
                                              options: {
                                                compId: 'callSelfFunc',
                                                compName: 'system',
                                                id: '331702',
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
                                  dataId: 168662110258775650,
                                  options: {
                                    compId: 'customActionCode',
                                    compName: 'page',
                                    id: '714056',
                                    pageJsonId: '537892',
                                    code: 'function main(data,state,success,fail){var infoList=reply_9706607.resultData;var feeInfoList=data.feeInfo||[];if(!infoList||infoList.length>0){feeInfoList=feeInfoList.concat(infoList)}success(feeInfoList)};',
                                  },
                                  line_number: 9,
                                  callback1: [
                                    {
                                      type: 'setDataSource',
                                      dataId: 168662110258742820,
                                      options: {
                                        compId: 'setDataSource',
                                        compName: 'page',
                                        id: '003719',
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
                                        newData: '$data_714056$',
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
                                  type: 'console',
                                  dataId: 169873584868535700,
                                  options: {
                                    compId: 'debug',
                                    compName: 'system',
                                    id: '65141',
                                    pageJsonId: '537892',
                                    value: [
                                      '====解析响应====',
                                      '$reply_9706607$',
                                    ],
                                  },
                                  line_number: 11,
                                },
                              ],
                            },
                          ],
                          line_number: 3,
                          callback1: [
                            {
                              type: 'showMessage',
                              dataId: 167642946858937630,
                              options: {
                                compId: 'showMessage',
                                compName: 'system',
                                id: '6179394',
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
                          dataId: 167698791933340670,
                          options: {
                            compId: 'Table_8700198_43013',
                            compLib: 'comm',
                            pageJsonId: '537892',
                            compName: 'Table',
                            id: '3523976',
                            loading: false,
                          },
                          line_number: 12,
                        },
                      ],
                      callback2: [
                        {
                          type: 'setLoading',
                          dataId: 16781826342577892,
                          options: {
                            compId: 'Table_8700198_43013',
                            compLib: 'comm',
                            pageJsonId: '537892',
                            compName: 'Table',
                            id: '2105457',
                            loading: false,
                          },
                          line_number: 13,
                        },
                      ],
                    },
                  ];
                  eventDataapiRequest752.params =
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
                    eventDataapiRequest752,
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
                  const eventDatacustomActionCode641: any = [
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
                  eventDatacustomActionCode641.params =
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
                    eventDatacustomActionCode641,
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
                ref={(r: any) => (refs['StdUpload_304342_6986628'] = r)}
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
                  id: 'Button_061196_31367',
                  uid: 'Button_061196_31367',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ width: 'fit-content', margin: '0px 0px 0px 8px' }}
                onClick={(e: any) => {
                  const eventDataapiRequest753: any = [
                    {
                      type: 'apiRequest',
                      dataId: 167642560665173020,
                      options: {
                        compId: 'apiRequest',
                        compName: 'system',
                        id: '2641213',
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
                            code: 'header',
                            name: '请求头参数',
                            attrType: 'object',
                            _id: 'header',
                            compType: 'Input',
                            parents: [],
                            id: 'header',
                            dataKey: '2641213_header',
                          },
                          {
                            code: 'path',
                            name: '请求路径参数',
                            attrType: 'object',
                            _id: 'path',
                            compType: 'Input',
                            parents: [],
                            id: 'path',
                            dataKey: '2641213_path',
                          },
                          {
                            code: 'query',
                            name: 'URL 参数',
                            attrType: 'object',
                            _id: 'query',
                            compType: 'Input',
                            parents: [],
                            id: 'query',
                            dataKey: '2641213_query',
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
                                _id: 'body.sceneCode',
                                compType: 'Input',
                                name: 'sceneCode',
                                parents: ['body'],
                                id: 'body.sceneCode',
                                dataKey: '2641213_body.sceneCode',
                                value: {
                                  type: ['customize'],
                                  code: 'CLS_CP_0007_0012',
                                },
                              },
                              {
                                code: 'fileTemplateName',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.fileTemplateName',
                                compType: 'Input',
                                name: 'fileTemplateName',
                                parents: ['body'],
                                id: 'body.fileTemplateName',
                                dataKey: '2641213_body.fileTemplateName',
                                value: {
                                  type: ['customize'],
                                  code: 'MV专线资费导入模板.xlsx',
                                },
                              },
                            ],
                            _id: 'body',
                            compType: 'Input',
                            parents: [],
                            id: 'body',
                            dataKey: '2641213_body',
                          },
                        ],
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'downloadByFileId',
                          dataId: 167642560665149280,
                          options: {
                            compId: 'downloadByFileId',
                            compName: 'system',
                            id: '533922',
                            pageJsonId: '537892',
                            data: '$reply_2641213.resultData.fileId$',
                          },
                          line_number: 2,
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDataapiRequest753.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDataapiRequest753, { e }, 'apiRequest', {
                    id: 'apiRequest',
                    name: 'apiRequest',
                    type: 'apiRequest',
                    platform: 'pc',
                  });
                }}
                ref={(r: any) => (refs['Button_061196_31367'] = r)}
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
                  id: 'Button_050256_034475_700844_22636411_941984',
                  uid: 'Button_050256_034475_700844_22636411_941984',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ width: 'fit-content', margin: '0px 0px 0px 8px' }}
                onClick={(e: any) => {
                  const eventDatagetTableSelected66: any = [
                    {
                      type: 'getTableSelected',
                      dataId: 167699512257836540,
                      shielding: true,
                      options: {
                        compId: 'Table_8700198_43013',
                        compLib: 'comm',
                        pageJsonId: '537892',
                        compName: 'Table',
                        id: '758039',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'ifelse',
                          shielding: true,
                          condition: [
                            {
                              condId: '2426417',
                              options: {
                                context: '$selectedRows_758039$',
                                operate: 'notEmpty',
                              },
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          dataId: 167699512478316670,
                          elseIfs: [
                            {
                              dataName: 'elseIf',
                              dataId: 167699514049443550,
                              children: [
                                {
                                  dataName: 'action',
                                  dataId: 167699515282497760,
                                  children: [],
                                  todoOptions: ['msgType', 'value'],
                                  options: {
                                    compId: 'showMessage',
                                    compName: 'system',
                                    id: '817776',
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
                                  dataId: 167699515282497760,
                                  shielding: true,
                                  options: {
                                    compId: 'showMessage',
                                    compName: 'system',
                                    id: '817776',
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
                              dataId: 167699513668047260,
                              shielding: true,
                              options: {
                                compId: 'customActionCode',
                                compName: 'page',
                                id: '236583',
                                pageJsonId: '537892',
                                code: 'function main(data,state,success,fail){var arr1=[];var arr2=[];var feeInfo=selectedRows_758039;for(var i=0;i<feeInfo.length;i++){var info=feeInfo[i];{arr2.push({"name":"\\u4E1A\\u52A1\\u7C7B\\u578B","value":info.busiTypeName});arr2.push({"name":"\\u5E26\\u5BBD","value":info.portStandardFee});arr2.push({"name":"\\u5E26\\u5BBD","value":info.bandwidthName});arr2.push({"name":"\\u7AEF\\u53E3\\u8D39","value":info.portFee});arr2.push({"name":"*\\u6807\\u51C6\\u4EF7\\u683C","value":info.standardPrice});arr2.push({"name":"\\u5355\\u6761\\u5B9E\\u6536\\u4EF7\\uFF08\\u5143\\uFF09","value":info.receiptsPrice});arr2.push({"name":"\\u6761\\u6570","value":info.row});arr2.push({"name":"\\u603B\\u5B9E\\u6536\\u4EF7\\uFF08\\u5143\\uFF09","value":info.receiptsPriceSum});arr2.push({"name":"\\u8425\\u9500\\u6848","value":info.market});arr2.push({"name":"\\u6700\\u7EC8\\u6298\\u6263","value":info.lastDiscount})}arr1.push(arr2);arr2=[]}success(JSON.stringify(arr1))};',
                              },
                              line_number: 3,
                              callback1: [
                                {
                                  type: 'apiRequest',
                                  dataId: 167699513668099940,
                                  shielding: true,
                                  options: {
                                    compId: 'apiRequest',
                                    compName: 'system',
                                    id: '826351',
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
                                                '$data_236583$',
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
                                      dataId: 167699513668077800,
                                      shielding: true,
                                      options: {
                                        compId: 'downloadByFileId',
                                        compName: 'system',
                                        id: '401327',
                                        pageJsonId: '537892',
                                        data: '$reply_826351.resultData.fileId$',
                                      },
                                      line_number: 5,
                                    },
                                    {
                                      type: 'console',
                                      dataId: 167699513668013630,
                                      shielding: true,
                                      options: {
                                        compId: 'debug',
                                        compName: 'system',
                                        id: '342381',
                                        pageJsonId: '537892',
                                        value: [
                                          '文件导出成功回调值：',
                                          '$reply_826351$',
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
                  eventDatagetTableSelected66.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatagetTableSelected66,
                    { e },
                    'getTableSelected',
                    {
                      id: 'getTableSelected',
                      name: 'getTableSelected',
                      type: 'getTableSelected',
                      platform: 'pc',
                    },
                  );
                  const eventDatacustomActionCode642: any = [
                    {
                      type: 'customActionCode',
                      dataId: 167706800449555680,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '428151',
                        pageJsonId: '537892',
                        code: 'function main(data,state,success,fail){var arr1=[];var arr2=[];var feeInfo=data.feeInfo;for(var i=0;i<feeInfo.length;i++){var info=feeInfo[i];{arr2.push({"name":"\\u4E1A\\u52A1\\u7C7B\\u578B","value":info.busiTypeName});arr2.push({"name":"\\u5E26\\u5BBD","value":info.bandwidthName});arr2.push({"name":"\\u6807\\u51C6\\u4EF7\\u683C\\uFF08\\u5143/\\u6708\\uFF09","value":info.standardPrice});arr2.push({"name":"\\u6708\\u529F\\u80FD\\u8D39\\uFF08\\u5143/\\u6708\\uFF09","value":info.receiptsPrice});arr2.push({"name":"\\u6761\\u6570","value":info.row});arr2.push({"name":"\\u603B\\u5B9E\\u6536\\u4EF7\\uFF08\\u5143\\uFF09","value":info.receiptsPriceSum});arr2.push({"name":"\\u6700\\u7EC8\\u6298\\u6263","value":info.lastDiscount})}arr1.push(arr2);arr2=[]}if(arr1.length>0){success(JSON.stringify(arr1))}else{fail()}};',
                      },
                      line_number: 8,
                      callback1: [
                        {
                          type: 'apiRequest',
                          dataId: 167706800449553250,
                          options: {
                            compId: 'apiRequest',
                            compName: 'system',
                            id: '712045',
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
                                      type: ['context', '$data_428151$'],
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
                              dataId: 167706800449611100,
                              options: {
                                compId: 'downloadByFileId',
                                compName: 'system',
                                id: '69586',
                                pageJsonId: '537892',
                                data: '$reply_712045.resultData.fileId$',
                              },
                              line_number: 10,
                            },
                            {
                              type: 'console',
                              dataId: 167706800449644160,
                              options: {
                                compId: 'debug',
                                compName: 'system',
                                id: '71815',
                                pageJsonId: '537892',
                                value: [
                                  '文件导出成功回调值：',
                                  '$reply_712045$',
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
                          dataId: 167713858970212320,
                          options: {
                            compId: 'showMessage',
                            compName: 'system',
                            id: '027511',
                            pageJsonId: '537892',
                            type: 'info',
                            value: '导出数据不能为空！',
                          },
                          line_number: 12,
                        },
                      ],
                    },
                  ];
                  eventDatacustomActionCode642.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatacustomActionCode642,
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
                  (refs['Button_050256_034475_700844_22636411_941984'] = r)
                }
                {...injectData}
              />
            </View>
          </Row>
          <Table
            name={'编辑'}
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
                id: '949543',
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
                key: 'bandwidthName',
                dataIndex: 'bandwidthName',
                className: 'divider',
                id: '064607',
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
                title: '电路标准价格（元/月）',
                key: 'standardPrice',
                dataIndex: 'standardPrice',
                className: 'divider',
                id: '15452604',
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
                title: '电路月租费（元/月）',
                key: 'receiptsPrice',
                dataIndex: 'eleFeeMonth',
                className: 'divider',
                id: '839325',
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
                id: '876018',
                title: '电路接入折扣',
                dataIndex: 'eleDiscount',
                key: '876018',
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
                id: '366733',
                title: '端口标准价格（元/月）',
                dataIndex: 'portStandardPrice',
                key: '366733',
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
                id: '575569',
                title: '端口月租费（元/月）',
                dataIndex: 'portFeeMonth',
                key: '575569',
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
                id: '090158',
                title: '端口折扣',
                dataIndex: 'portDiscount',
                key: '090158',
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
                title: '条数',
                key: 'row',
                dataIndex: 'row',
                className: 'divider',
                id: '320757',
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
                title: '总实收价（元/月）',
                key: 'receiptsPriceSum',
                dataIndex: 'receiptsPriceSum',
                className: 'divider',
                id: '380834',
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
                title: '区域类型名称',
                key: 'lastDiscount',
                dataIndex: 'crmAreaTypeName',
                className: 'divider',
                id: '8872977',
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
              id: 'Table_8700198_43013',
              uid: 'Table_8700198_43013',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ margin: '10px 0px 10px 0px' }}
            onRowEdit={(rowId: any, row: any, index: any) => {
              const eventDatashowCustomModal189: any = [
                {
                  type: 'showCustomModal',
                  dataId: 166539679318667200,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '951698',
                    pageJsonId: '537892',
                    modalname: '/mvFeeAudit',
                    pageId: '899188357497327616',
                    modalPath: '/mvFeeAudit',
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
                        actionTitle: '',
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
                                attrId: '739205',
                                code: 'busiType',
                                name: '业务类型',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['busiType'],
                                _idpath: ['739205'],
                              },
                              {
                                attrId: '252243',
                                code: 'standardPrice',
                                name: '标准价格',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['standardPrice'],
                                _idpath: ['252243'],
                              },
                              {
                                attrId: '137802',
                                code: 'receiptsPrice',
                                name: '实收价',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['receiptsPrice'],
                                _idpath: ['137802'],
                              },
                              {
                                attrId: '963826',
                                code: 'bandwidth',
                                name: '带宽',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['bandwidth'],
                                _idpath: ['963826'],
                              },
                              {
                                attrId: '5031659',
                                code: 'ipv6GiveNum',
                                name: 'IPv6赠送数',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['ipv6GiveNum'],
                                _idpath: ['5031659'],
                              },
                              {
                                attrId: '6377456',
                                code: 'ipv4GiveNum',
                                name: 'IPv4赠送数',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['ipv4GiveNum'],
                                _idpath: ['6377456'],
                              },
                              {
                                attrId: '665968',
                                code: 'ipv6DemandNum',
                                name: 'IPv6需求数',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['ipv6DemandNum'],
                                _idpath: ['665968'],
                              },
                              {
                                attrId: '754893',
                                code: 'ipv4DemandNum',
                                name: 'IPv4需求数',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['ipv4DemandNum'],
                                _idpath: ['754893'],
                              },
                              {
                                attrId: '6429123',
                                code: 'ipv6BeyondSel',
                                name: 'IPv6超出选择',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['ipv6BeyondSel'],
                                _idpath: ['6429123'],
                              },
                              {
                                attrId: '197527',
                                code: 'ipv4BeyondNum',
                                name: 'IPv4超出个数',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['ipv4BeyondNum'],
                                _idpath: ['197527'],
                              },
                              {
                                attrId: '2152803',
                                code: 'ipv6BeyondCost',
                                name: 'IPv6超出费用',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['ipv6BeyondCost'],
                                _idpath: ['2152803'],
                              },
                              {
                                attrId: '017672',
                                code: 'ipv4BeyondCount',
                                name: 'IPv4元/月/个',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['ipv4BeyondCount'],
                                _idpath: ['017672'],
                              },
                              {
                                attrId: '26139435',
                                code: 'unitPrice',
                                name: '单价（元/G）',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['unitPrice'],
                                _idpath: ['26139435'],
                              },
                              {
                                attrId: '62643',
                                code: 'lastDiscount',
                                name: '最终折扣',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['lastDiscount'],
                                _idpath: ['62643'],
                              },
                              {
                                attrId: '9425584',
                                code: 'market',
                                name: '营销案',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['market'],
                                _idpath: ['9425584'],
                              },
                              {
                                attrId: '442519',
                                code: 'busiTypeName',
                                name: '业务类型名称',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['busiTypeName'],
                                _idpath: ['442519'],
                              },
                              {
                                attrId: '3700349',
                                code: 'areaType',
                                name: '区域类型',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['areaType'],
                                _idpath: ['3700349'],
                              },
                              {
                                attrId: '7190864',
                                code: 'joinWay',
                                name: '接入方式',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['joinWay'],
                                _idpath: ['7190864'],
                              },
                              {
                                attrId: '026113',
                                code: 'bandwidthUp',
                                name: '上行宽带',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['bandwidthUp'],
                                _idpath: ['026113'],
                              },
                              {
                                attrId: '9865009',
                                code: 'bandwidthDown',
                                name: '下行宽带',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['bandwidthDown'],
                                _idpath: ['9865009'],
                              },
                              {
                                attrId: '262314',
                                code: 'bandwidthPort',
                                name: 'SDWAN端口带宽',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['bandwidthPort'],
                                _idpath: ['262314'],
                              },
                              {
                                attrId: '4672304',
                                code: 'singleUseFee',
                                name: '一次性费用',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['singleUseFee'],
                                _idpath: ['4672304'],
                              },
                              {
                                attrId: '567251',
                                code: 'portFee',
                                name: '端口费',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['portFee'],
                                _idpath: ['567251'],
                              },
                              {
                                attrId: '9620426',
                                code: 'ipv6BeyondNum',
                                name: 'IPv6超出个数',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['ipv6BeyondNum'],
                                _idpath: ['9620426'],
                              },
                              {
                                attrId: '1137346',
                                code: 'ipv6BeyondCount',
                                name: 'IPv6元/月/个',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['ipv6BeyondCount'],
                                _idpath: ['1137346'],
                              },
                              {
                                attrId: '467282',
                                code: 'standardPriceSdWan',
                                name: 'SDWAN标准价格',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['standardPriceSdWan'],
                                _idpath: ['467282'],
                              },
                              {
                                attrId: '801439',
                                code: 'receiptsPriceSdWan',
                                name: 'SDWAN实收价格',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['receiptsPriceSdWan'],
                                _idpath: ['801439'],
                              },
                              {
                                attrId: '5486426',
                                code: 'bandwidthName',
                                name: '带宽名称',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['bandwidthName'],
                                _idpath: ['5486426'],
                              },
                              {
                                attrId: '32349',
                                code: 'portFeeMonth',
                                name: '端口月租费（元/月）',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['portFeeMonth'],
                                _idpath: ['32349'],
                              },
                              {
                                attrId: '40523',
                                code: 'receiptsPriceSum',
                                name: '总实收价（元）',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['receiptsPriceSum'],
                                _idpath: ['40523'],
                              },
                              {
                                attrId: '76201',
                                code: 'singleUseFeeName',
                                name: '一次性费用名称',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['singleUseFeeName'],
                                _idpath: ['76201'],
                              },
                              {
                                attrId: '95735',
                                code: 'groupCity',
                                name: '集团归属地市',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['groupCity'],
                                _idpath: ['95735'],
                              },
                              {
                                attrId: '203369',
                                code: 'joinWayName',
                                name: '接入方式名称',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['joinWayName'],
                                _idpath: ['203369'],
                              },
                              {
                                attrId: '335167',
                                code: 'areaTypeName',
                                name: '区域类型名称',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['areaTypeName'],
                                _idpath: ['335167'],
                              },
                              {
                                attrId: '343475',
                                code: 'portStandardFee',
                                name: '端口月租费(元/月)',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['portStandardFee'],
                                _idpath: ['343475'],
                              },
                              {
                                attrId: '758304',
                                code: 'rowId',
                                name: '行id',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['rowId'],
                                _idpath: ['758304'],
                              },
                              {
                                attrId: '935972',
                                code: 'aimCity',
                                name: '集团接入地市',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['aimCity'],
                                _idpath: ['935972'],
                              },
                              {
                                attrId: '1150935',
                                code: 'portDiscount',
                                name: '端口折扣',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['portDiscount'],
                                _idpath: ['1150935'],
                              },
                              {
                                attrId: '2587274',
                                code: 'portStandardPrice',
                                name: '端口标准价格（元/月）',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['portStandardPrice'],
                                _idpath: ['2587274'],
                              },
                              {
                                attrId: '3825956',
                                code: 'eleFeeMonth',
                                name: '电路月租费（元/月）',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['eleFeeMonth'],
                                _idpath: ['3825956'],
                              },
                              {
                                attrId: '4269325',
                                code: 'ipv4BeyondCost',
                                name: 'IPv4超出费用',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['ipv4BeyondCost'],
                                _idpath: ['4269325'],
                              },
                              {
                                attrId: '4829836',
                                code: 'row',
                                name: '条数',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['row'],
                                _idpath: ['4829836'],
                              },
                              {
                                attrId: '8937669',
                                code: 'marketName',
                                name: '营销案名称',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['marketName'],
                                _idpath: ['8937669'],
                              },
                              {
                                attrId: '001846',
                                code: 'bandwidthUpName',
                                name: '上行宽带名称',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['bandwidthUpName'],
                                _idpath: ['001846'],
                              },
                              {
                                attrId: '083862',
                                code: 'bandwidthDownName',
                                name: '下行宽带名称',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['bandwidthDownName'],
                                _idpath: ['083862'],
                              },
                              {
                                attrId: '0663327',
                                code: 'eleDiscount',
                                name: '电路接入折扣',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['eleDiscount'],
                                _idpath: ['0663327'],
                              },
                              {
                                attrId: '8750128',
                                code: 'crmAreaType',
                                name: '区域类型',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['crmAreaType'],
                                _idpath: ['8750128'],
                              },
                              {
                                attrId: '645805',
                                code: 'crmAreaTypeName',
                                name: '区域类型名称',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['crmAreaTypeName'],
                                _idpath: ['645805'],
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
              eventDatashowCustomModal189.params =
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
                eventDatashowCustomModal189,
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
            ref={(r: any) => (refs['Table_8700198_43013'] = r)}
            {...injectData}
          />
          <Table
            name={'详情'}
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
                id: '96467',
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
                key: 'bandwidthName',
                dataIndex: 'bandwidthName',
                id: '116519',
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
                title: '电路标准价格（元/月）',
                key: 'standardPrice',
                dataIndex: 'standardPrice',
                className: 'divider',
                id: '275387',
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
                title: '电路月租费（元/月）',
                key: 'receiptsPrice',
                dataIndex: 'eleFeeMonth',
                className: 'divider',
                id: '484182',
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
                title: '电路接入折扣',
                key: 'row',
                dataIndex: 'eleDiscount',
                id: '3888133',
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
                title: '端口标准价格（元/月）',
                key: 'receiptsPriceSum',
                dataIndex: 'portStandardPrice',
                id: '8592483',
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
                title: '端口月租费（元/月）',
                key: 'lastDiscount',
                dataIndex: 'portFeeMonth',
                className: 'divider',
                id: '160369',
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
                id: '6189707',
                title: '端口折扣',
                dataIndex: 'portDiscount',
                key: '6189707',
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
                id: '599031',
                title: '条数',
                dataIndex: 'row',
                key: '599031',
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
                id: '2283636',
                title: '总实收价（元/月）',
                dataIndex: 'receiptsPriceSum',
                key: '2283636',
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
                id: '962148',
                title: '区域类型名称',
                dataIndex: 'crmAreaTypeName',
                key: '962148',
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
            rowActions={[]}
            extend={[]}
            dataSourceFromDataSourceConfig={'data.feeInfo'}
            $$componentItem={{
              id: 'Table_8700198_43013_22115',
              uid: 'Table_8700198_43013_22115',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={false}
            readOnly={false}
            style={{ margin: '10px 0px 10px 0px' }}
            onRowEdit={(rowId: any, row: any, index: any) => {
              const eventDatashowCustomModal190: any = [
                {
                  type: 'showCustomModal',
                  dataId: 166539679318667200,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '951698',
                    pageJsonId: '537892',
                    modalname: '/sdWanFeeAudit',
                    pageId: '899130537225986048',
                    modalPath: '/sdWanFeeAudit',
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
                        code: 'function main(data,state,success,fail){data.feeInfo=data.feeInfo.filter(function(v){return v.rowId!=okData_951698.rowId});data.feeInfo.push(okData_951698);var instList=[];for(var key in okData_951698){if(key!="rowId"){instList.push({"attrCode":key,"attrName":"","attrValue":okData_951698[key]})}}var instObj={"instCode":okData_951698.rowId,"instAttrList":instList};data.sceneSubmit.instList=data.sceneSubmit.instList.filter(function(v){return v.instCode!=okData_951698.rowId});data.sceneSubmit.instList.push(instObj);success()};',
                        actionTitle: '',
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
                                attrId: '739205',
                                code: 'busiType',
                                name: '业务类型',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['busiType'],
                                _idpath: ['739205'],
                              },
                              {
                                attrId: '252243',
                                code: 'standardPrice',
                                name: '标准价格',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['standardPrice'],
                                _idpath: ['252243'],
                              },
                              {
                                attrId: '137802',
                                code: 'receiptsPrice',
                                name: '实收价',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['receiptsPrice'],
                                _idpath: ['137802'],
                              },
                              {
                                attrId: '963826',
                                code: 'bandwidth',
                                name: '带宽',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['bandwidth'],
                                _idpath: ['963826'],
                              },
                              {
                                attrId: '5031659',
                                code: 'ipv6GiveNum',
                                name: 'IPv6赠送数',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['ipv6GiveNum'],
                                _idpath: ['5031659'],
                              },
                              {
                                attrId: '6377456',
                                code: 'ipv4GiveNum',
                                name: 'IPv4赠送数',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['ipv4GiveNum'],
                                _idpath: ['6377456'],
                              },
                              {
                                attrId: '665968',
                                code: 'ipv6DemandNum',
                                name: 'IPv6需求数',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['ipv6DemandNum'],
                                _idpath: ['665968'],
                              },
                              {
                                attrId: '754893',
                                code: 'ipv4DemandNum',
                                name: 'IPv4需求数',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['ipv4DemandNum'],
                                _idpath: ['754893'],
                              },
                              {
                                attrId: '6429123',
                                code: 'ipv6BeyondSel',
                                name: 'IPv6超出选择',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['ipv6BeyondSel'],
                                _idpath: ['6429123'],
                              },
                              {
                                attrId: '197527',
                                code: 'ipv4BeyondNum',
                                name: 'IPv4超出个数',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['ipv4BeyondNum'],
                                _idpath: ['197527'],
                              },
                              {
                                attrId: '2152803',
                                code: 'ipv6BeyondCost',
                                name: 'IPv6超出费用',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['ipv6BeyondCost'],
                                _idpath: ['2152803'],
                              },
                              {
                                attrId: '017672',
                                code: 'ipv4BeyondCount',
                                name: 'IPv4元/月/个',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['ipv4BeyondCount'],
                                _idpath: ['017672'],
                              },
                              {
                                attrId: '26139435',
                                code: 'unitPrice',
                                name: '单价（元/G）',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['unitPrice'],
                                _idpath: ['26139435'],
                              },
                              {
                                attrId: '62643',
                                code: 'lastDiscount',
                                name: '最终折扣',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['lastDiscount'],
                                _idpath: ['62643'],
                              },
                              {
                                attrId: '9425584',
                                code: 'market',
                                name: '营销案',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['market'],
                                _idpath: ['9425584'],
                              },
                              {
                                attrId: '442519',
                                code: 'busiTypeName',
                                name: '业务类型名称',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['busiTypeName'],
                                _idpath: ['442519'],
                              },
                              {
                                attrId: '3700349',
                                code: 'areaType',
                                name: '区域类型',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['areaType'],
                                _idpath: ['3700349'],
                              },
                              {
                                attrId: '7190864',
                                code: 'joinWay',
                                name: '接入方式',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['joinWay'],
                                _idpath: ['7190864'],
                              },
                              {
                                attrId: '026113',
                                code: 'bandwidthUp',
                                name: '上行宽带',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['bandwidthUp'],
                                _idpath: ['026113'],
                              },
                              {
                                attrId: '9865009',
                                code: 'bandwidthDown',
                                name: '下行宽带',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['bandwidthDown'],
                                _idpath: ['9865009'],
                              },
                              {
                                attrId: '262314',
                                code: 'bandwidthPort',
                                name: 'SDWAN端口带宽',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['bandwidthPort'],
                                _idpath: ['262314'],
                              },
                              {
                                attrId: '4672304',
                                code: 'singleUseFee',
                                name: '一次性费用',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['singleUseFee'],
                                _idpath: ['4672304'],
                              },
                              {
                                attrId: '567251',
                                code: 'portFee',
                                name: '端口费',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['portFee'],
                                _idpath: ['567251'],
                              },
                              {
                                attrId: '9620426',
                                code: 'ipv6BeyondNum',
                                name: 'IPv6超出个数',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['ipv6BeyondNum'],
                                _idpath: ['9620426'],
                              },
                              {
                                attrId: '1137346',
                                code: 'ipv6BeyondCount',
                                name: 'IPv6元/月/个',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['ipv6BeyondCount'],
                                _idpath: ['1137346'],
                              },
                              {
                                attrId: '467282',
                                code: 'standardPriceSdWan',
                                name: 'SDWAN标准价格',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['standardPriceSdWan'],
                                _idpath: ['467282'],
                              },
                              {
                                attrId: '801439',
                                code: 'receiptsPriceSdWan',
                                name: 'SDWAN实收价格',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['receiptsPriceSdWan'],
                                _idpath: ['801439'],
                              },
                              {
                                attrId: '5486426',
                                code: 'bandwidthName',
                                name: '带宽名称',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['bandwidthName'],
                                _idpath: ['5486426'],
                              },
                              {
                                attrId: '32349',
                                code: 'portFeeMonth',
                                name: '端口月租费（元/月）',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['portFeeMonth'],
                                _idpath: ['32349'],
                              },
                              {
                                attrId: '40523',
                                code: 'receiptsPriceSum',
                                name: '总实收价（元）',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['receiptsPriceSum'],
                                _idpath: ['40523'],
                              },
                              {
                                attrId: '76201',
                                code: 'singleUseFeeName',
                                name: '一次性费用名称',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['singleUseFeeName'],
                                _idpath: ['76201'],
                              },
                              {
                                attrId: '95735',
                                code: 'groupCity',
                                name: '集团归属地市',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['groupCity'],
                                _idpath: ['95735'],
                              },
                              {
                                attrId: '203369',
                                code: 'joinWayName',
                                name: '接入方式名称',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['joinWayName'],
                                _idpath: ['203369'],
                              },
                              {
                                attrId: '335167',
                                code: 'areaTypeName',
                                name: '区域类型名称',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['areaTypeName'],
                                _idpath: ['335167'],
                              },
                              {
                                attrId: '343475',
                                code: 'portStandardFee',
                                name: '端口月租费(元/月)',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['portStandardFee'],
                                _idpath: ['343475'],
                              },
                              {
                                attrId: '758304',
                                code: 'rowId',
                                name: '行id',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['rowId'],
                                _idpath: ['758304'],
                              },
                              {
                                attrId: '935972',
                                code: 'aimCity',
                                name: '集团接入地市',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['aimCity'],
                                _idpath: ['935972'],
                              },
                              {
                                attrId: '1150935',
                                code: 'portDiscount',
                                name: '端口折扣',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['portDiscount'],
                                _idpath: ['1150935'],
                              },
                              {
                                attrId: '2587274',
                                code: 'portStandardPrice',
                                name: '端口标准价格（元/月）',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['portStandardPrice'],
                                _idpath: ['2587274'],
                              },
                              {
                                attrId: '3825956',
                                code: 'eleFeeMonth',
                                name: '电路月租费（元/月）',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['eleFeeMonth'],
                                _idpath: ['3825956'],
                              },
                              {
                                attrId: '4269325',
                                code: 'ipv4BeyondCost',
                                name: 'IPv4超出费用',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['ipv4BeyondCost'],
                                _idpath: ['4269325'],
                              },
                              {
                                attrId: '4829836',
                                code: 'row',
                                name: '条数',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['row'],
                                _idpath: ['4829836'],
                              },
                              {
                                attrId: '8937669',
                                code: 'marketName',
                                name: '营销案名称',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['marketName'],
                                _idpath: ['8937669'],
                              },
                              {
                                attrId: '001846',
                                code: 'bandwidthUpName',
                                name: '上行宽带名称',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['bandwidthUpName'],
                                _idpath: ['001846'],
                              },
                              {
                                attrId: '083862',
                                code: 'bandwidthDownName',
                                name: '下行宽带名称',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['bandwidthDownName'],
                                _idpath: ['083862'],
                              },
                              {
                                attrId: '0663327',
                                code: 'eleDiscount',
                                name: '电路接入折扣',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['eleDiscount'],
                                _idpath: ['0663327'],
                              },
                              {
                                attrId: '8750128',
                                code: 'crmAreaType',
                                name: '区域类型',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['crmAreaType'],
                                _idpath: ['8750128'],
                              },
                              {
                                attrId: '645805',
                                code: 'crmAreaTypeName',
                                name: '区域类型名称',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: false,
                                _codePath: ['crmAreaTypeName'],
                                _idpath: ['645805'],
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
              eventDatashowCustomModal190.params =
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
                eventDatashowCustomModal190,
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
            ref={(r: any) => (refs['Table_8700198_43013_22115'] = r)}
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
                id: 'Form_395851_1727917_9692158_9612234_1000722_434628_511208_810317_526148_0671224_715263_7498453',
                uid: 'Form_395851_1727917_9692158_9612234_1000722_434628_511208_810317_526148_0671224_715263_7498453',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ padding: '0px 0px 0px 0px', margin: '10px 0px 0px 0px' }}
              ref={(r: any) =>
                (refs[
                  'Form_395851_1727917_9692158_9612234_1000722_434628_511208_810317_526148_0671224_715263_7498453'
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
                  id: 'Input_690228_5400337_280051_232429_7501497_288005_8195412_48663836_335482_595308_390707_814418',
                  uid: 'Input_690228_5400337_280051_232429_7501497_288005_8195412_48663836_335482_595308_390707_814418',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  (refs[
                    'Input_690228_5400337_280051_232429_7501497_288005_8195412_48663836_335482_595308_390707_814418'
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
                  id: 'View_22346374_875512_926873_4359147_729981_339083_0134945_145611_42193717_040342_7770243_505417',
                  uid: 'View_22346374_875512_926873_4359147_729981_339083_0134945_145611_42193717_040342_7770243_505417',
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
                    'View_22346374_875512_926873_4359147_729981_339083_0134945_145611_42193717_040342_7770243_505417'
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
                    id: 'StdUpload_6230546_867413_538179_36057857_3505279_0434_242878_424019_1466135_669041_933657_411443',
                    uid: 'StdUpload_6230546_867413_538179_36057857_3505279_0434_242878_424019_1466135_669041_933657_411443',
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
                    const eventDatagetSelectedData347: any = [
                      {
                        type: 'getSelectedData',
                        dataId: 166599073361788540,
                        options: {
                          compId:
                            'Input_690228_5400337_280051_232429_7501497_288005_8195412_48663836_335482_595308_390707_814418',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Select',
                          id: '6244403',
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'setDataSource',
                            dataId: 166599073801733340,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '718304',
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
                                    code: '$selectedData_6244403[0].value$',
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
                                    code: '$selectedData_6244403[0].label$',
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
                                dataId: 166599073801758460,
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '156808',
                                  pageJsonId: '537892',
                                  code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=data.fileInfoList;success(data.sceneSubmit)};',
                                },
                                line_number: 3,
                                callback1: [
                                  {
                                    type: 'console',
                                    dataId: 166599073801771460,
                                    options: {
                                      compId: 'debug',
                                      compName: 'system',
                                      id: '844275',
                                      pageJsonId: '537892',
                                      value: ['$data_156808$'],
                                    },
                                    line_number: 4,
                                  },
                                  {
                                    type: 'callParentCustomFunc',
                                    dataId: 166599073801794750,
                                    options: {
                                      compId: 'callParentCustomFunc',
                                      compName: 'system',
                                      id: '5417805',
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
                            dataId: 166599074168177440,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '695014',
                              pageJsonId: '537892',
                              type: 'error',
                              value: '请选择附件类型',
                            },
                            line_number: 6,
                          },
                        ],
                      },
                    ];
                    eventDatagetSelectedData347.params =
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
                      eventDatagetSelectedData347,
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
                    const eventDatacustomActionCode644: any = [
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
                    eventDatacustomActionCode644.params =
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
                      eventDatacustomActionCode644,
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
                      'StdUpload_6230546_867413_538179_36057857_3505279_0434_242878_424019_1466135_669041_933657_411443'
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
              const eventDatacustomActionCode645: any = [
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
              eventDatacustomActionCode645.params =
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
                eventDatacustomActionCode645,
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
              const eventDatadownloadByFileId66: any = [
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
              eventDatadownloadByFileId66.params =
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
                eventDatadownloadByFileId66,
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
          ref={(r: any) => (refs['BOFramer_068324'] = r)}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(ClsCp_0007_0012$$Page, {
  pageId: '899191518836793344',
  hasLogin: false,
  dataSource,
  defaultState: {},
});
