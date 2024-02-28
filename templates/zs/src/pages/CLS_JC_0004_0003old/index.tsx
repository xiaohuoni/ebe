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

import BusiComp0521965 from '@/components/BusiComp0521965';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '888747411576025088';
const ClsJc_0004_0003old$$Page: React.FC<PageProps> = ({
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
  const fileUpload = (options_1578097: any) => {
    const eventDatacustomActionCode219: any = [
      {
        type: 'customActionCode',
        dataId: 167282122156666100,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '548479',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=options_1578097;success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'callParentCustomFunc',
            dataId: 167282123529561120,
            options: {
              compId: 'callParentCustomFunc',
              compName: 'system',
              id: '2026464',
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
    eventDatacustomActionCode219.params =
      [
        {
          title: '事件入参',
          name: 'options_1578097',
          value: '$options_1578097$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode219,
      { options_1578097 },
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
    const eventDatasetVisible14: any = [
      {
        type: 'setVisible',
        dataId: 166322084033353540,
        options: {
          compId: 'Table_8700198_583861',
          compLib: 'comm',
          pageJsonId: '537892',
          compName: 'Table',
          id: '36743',
        },
        line_number: 1,
      },
    ];
    eventDatasetVisible14.params = [] || [];
    CMDGenerator(eventDatasetVisible14, {}, 'setVisible', {
      id: 'setVisible',
      name: 'setVisible',
      type: 'setVisible',
      platform: 'undefined',
    });
    const eventDataapiRequest603: any = [
      {
        type: 'apiRequest',
        dataId: 166260670851443300,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '945709',
          pageJsonId: '537892',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryEnumValueByCode',
          _apiCode: 'qryEnumValueByCode',
          _source: 'rhin',
          _serviceId: '876388007192457216',
          _serviceTitle: '根据编码查询枚举值信息-hdb: qryEnumValueByCode',
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
              dataKey: '945709_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '945709_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '945709_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              children: [
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
                  dataKey: '945709_body.attrCode',
                  value: { type: ['customize'], code: 'ACCESSORY_TYPE' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '945709_body',
            },
          ],
        },
        line_number: 2,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166303882907789540,
            options: {
              compId: 'Input_690228_5400337_280051_232429',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '0633723',
              data: '$reply_945709?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValueCode',
            },
            line_number: 3,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest603.params = [] || [];
    CMDGenerator(eventDataapiRequest603, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest604: any = [
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
        line_number: 4,
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
    ];
    eventDataapiRequest604.params = [] || [];
    CMDGenerator(eventDataapiRequest604, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse302: any = [
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
              code: 'function main(data,state,success,fail){var item=state.itemList;var factorForm={};var attrList=item.attrList;for(var i=0;i<attrList.length;i++){factorForm[attrList[i].attrCode]=attrList[i].attrValue}data.factorForm=factorForm;data.sceneSubmit.approveGrade=item.approveGrade;data.sceneSubmit.approveGradeName=item.approveGradeName;data.MemberInfo=item.custMemberList;data.sceneSubmit.custMemberList=item.custMemberList;success(factorForm)};',
              actionTitle: '设置界面初始化值',
            },
            line_number: 7,
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
                      attrId: '08707745',
                      code: 'needExp',
                      name: '需求说明',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 8,
                callback1: [],
                callback2: [],
              },
              {
                type: 'setValue',
                dataId: 166303887941342430,
                options: {
                  compId: 'Input_361479_887285_2150708_936504_923334',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '9235807',
                  value: '$state.itemList.approveGradeName$',
                },
                line_number: 9,
                callback1: [],
              },
              {
                type: 'setDataSource',
                dataId: 166305500105467000,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '013094',
                  pageJsonId: '537892',
                  dataSourceId: 166303981671487000,
                  dataSourceName: 'MemberInfo',
                  dataSourceRelType: 'object',
                  dataSourceReloadFilter: [
                    {
                      attrId: '308593',
                      code: 'custValueLevel',
                      name: '价值等级',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '76420078',
                      code: 'memberJoinDate_end',
                      name: '纳入成员骨干时间结束',
                      type: 'datetime',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '754296',
                      code: 'noDisturbScope',
                      name: '免扰范围',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                    },
                    {
                      attrId: '345095',
                      code: 'industType',
                      name: '行业类型',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '3229073',
                      code: 'custId',
                      name: '客户ID',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '874366',
                      code: 'supervise',
                      name: '监察人员',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '171017',
                      code: 'cutOffTime_begin',
                      name: '免扰截至时间开始',
                      type: 'datetime',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '9418766',
                      code: 'memberType',
                      name: '成员类型',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '6734957',
                      code: 'memberJoinDate',
                      name: '纳入成员骨干时间',
                      type: 'datetime',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '190524',
                      code: 'cutOffTime_end',
                      name: '免扰截至时间结束',
                      type: 'datetime',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '90892034',
                      code: 'cutOffTime',
                      name: '免扰截至时间',
                      type: 'datetime',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '948067',
                      code: 'memberNbr',
                      name: '手机号码',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '720127',
                      code: 'custCode',
                      name: '集团编码',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '730646',
                      code: 'administrativeLevel',
                      name: '行政级别',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '664057',
                      code: 'keyManFlag',
                      name: '关键人标识',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '1988677',
                      code: 'memberJoinDate_begin',
                      name: '纳入成员骨干时间开始',
                      type: 'datetime',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '3531835',
                      code: 'custStatus',
                      name: '集团状态',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '4681609',
                      code: 'memberName',
                      name: '姓名',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '824869',
                      code: 'custName',
                      name: '集团名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '619628',
                      code: 'job',
                      name: '职务',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '1412322',
                      code: 'pageNum',
                      name: '页数',
                      type: 'long',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                    },
                    {
                      attrId: '915963',
                      code: 'pageSize',
                      name: '每页数量',
                      type: 'long',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                    },
                    {
                      attrId: '750397',
                      code: 'childNode',
                      name: '从表子节点',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                      value: '',
                    },
                  ],
                  dataSourceSetValue: [
                    {
                      attrId: '134739',
                      code: 'memberJoinDate',
                      name: '纳入成员骨干时间',
                      type: 'datetime',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '716457',
                      code: 'memberType',
                      name: '成员类型',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '8583146',
                      code: 'cutOffTime',
                      name: '免扰截至时间',
                      type: 'datetime',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '82682',
                      code: 'noDisturbScope',
                      name: '免扰范围',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                    },
                    {
                      attrId: '360409',
                      code: 'supervise',
                      name: '看管人员',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '6475557',
                      code: 'memberTypeName',
                      name: '成员类型名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '4823123',
                      code: 'msisdn',
                      name: '手机号码',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '58013',
                      code: 'groupId',
                      name: '集团编码',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '2030545',
                      code: 'groupName',
                      name: '集团名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '005597',
                      code: 'groupLevelName',
                      name: '价值等级',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '149127',
                      code: 'statusName',
                      name: '集团状态',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '54181',
                      code: 'officialLevel',
                      name: '行政级别',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '244475',
                      code: 'keyType',
                      name: '关键人标识',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '355331',
                      code: 'duty',
                      name: '职务',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '231866',
                      code: 'name',
                      name: '姓名',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '231046',
                      code: 'tradeclassTop',
                      name: '行业类型ID',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '170299',
                      code: 'customerId',
                      name: '客户ID',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '1046582',
                      code: 'keyTypeName',
                      name: '关键人标识名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '788913',
                      code: 'officialLevelName',
                      name: '行政级别名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '766652',
                      code: 'tradeclassTopName',
                      name: '行业类型名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '824624',
                      code: 'rowId',
                      name: '行ID',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '547764',
                      code: 'actionType',
                      name: '操作类型',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                    },
                    {
                      attrId: '351828',
                      code: 'sceneType',
                      name: '场景类型',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                    },
                    {
                      attrId: '2212653',
                      code: 'msisdnomeCity',
                      name: '成员号码归属地',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                    },
                    {
                      attrId: '688676',
                      code: 'objType',
                      name: '对象类型',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                    },
                    {
                      attrId: '8138167',
                      code: 'homeCity',
                      name: '集团归属地',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                    },
                    {
                      attrId: '867706',
                      code: 'email',
                      name: '邮箱',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '4067448',
                      code: 'gender',
                      name: '性别',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '037691',
                      code: 'department',
                      name: '部门',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '42604',
                      code: 'remark',
                      name: '备注',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '396255',
                      code: 'coreFlag',
                      name: '是否重要成员',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
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
                    condId: '75545496',
                    options: { context: '$data_859603$', operate: 'empty' },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166746021391533950,
                elseIfs: [],
                line_number: 13,
                callback1: [
                  {
                    type: 'setVisible',
                    dataId: 166746023399929500,
                    options: {
                      compId: 'Table_5369494',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Table',
                      id: '645151',
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
                dataId: 166303890497365920,
                options: {
                  compId: 'Input_361479_887285_2150708_936504_923334',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '3468796',
                  visible: 'true',
                },
                line_number: 16,
              },
              {
                type: 'setDisable',
                dataId: 166303891639714000,
                options: {
                  compId: 'Form_449441_552329_741341',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Form',
                  id: '3571834',
                  disabled: 'true',
                },
                line_number: 17,
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
                line_number: 18,
              },
              {
                type: 'setDisable',
                dataId: 166303893900701500,
                options: {
                  compId: 'Input_361479_887285_2150708_936504_923334',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '214454',
                  disabled: 'true',
                },
                line_number: 19,
              },
              {
                type: 'setVisible',
                dataId: 166322078921268540,
                options: {
                  compId: 'Table_8700198_583861',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Table',
                  id: '910315',
                  visible: 'true',
                },
                line_number: 20,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse302.params = [] || [];
    CMDGenerator(eventDataifelse302, {}, 'ifelse', {
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
          visible={true}
          dashed={false}
          dividerText={'重要成员增减变更'}
          $$componentItem={{
            id: 'Divider_8826999',
            uid: 'Divider_8826999',
            type: 'Divider',
            ...componentItem,
          }}
          style={{ margin: '12px 0 12px 0', height: 'auto' }}
          ref={(r: any) => refs.setComponentRef(r, 'Divider_8826999')}
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
            width: '100%',
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
                  id: 'Form_4311097_9385662_8411515_9167293_4337769_8356441',
                  uid: 'Form_4311097_9385662_8411515_9167293_4337769_8356441',
                  type: 'Form',
                  ...componentItem,
                }}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) =>
                  refs.setComponentRef(
                    r,
                    'Form_4311097_9385662_8411515_9167293_4337769_8356441',
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
                  text={'重要成员增减变更'}
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
                    id: 'Checkbox_882584_5289015_934499_355644_646764_5265724_609235',
                    uid: 'Checkbox_882584_5289015_934499_355644_646764_5265724_609235',
                    type: 'Checkbox',
                    ...componentItem,
                  }}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    refs.setComponentRef(
                      r,
                      'Checkbox_882584_5289015_934499_355644_646764_5265724_609235',
                    )
                  }
                  {...injectData}
                />
                <View
                  className="View_View_885847"
                  name={'布局容器'}
                  visible={true}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_885847',
                    uid: 'View_885847',
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
                  ref={(r: any) => refs.setComponentRef(r, 'View_885847')}
                  {...injectData}
                />
                <Input
                  name={'审批等级'}
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
                    id: 'Input_361479_887285_2150708_936504_923334_755169_410577',
                    uid: 'Input_361479_887285_2150708_936504_923334_755169_410577',
                    type: 'Input',
                    ...componentItem,
                  }}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    refs.setComponentRef(
                      r,
                      'Input_361479_887285_2150708_936504_923334_755169_410577',
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
                  const eventDatashowCustomModal277: any = [
                    {
                      type: 'showCustomModal',
                      dataId: 166314610874318850,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '611628',
                        pageJsonId: '537892',
                        modalname: '/member',
                        pageId: '888741696593555456',
                        paramsObj: {
                          phone: '$value_24586657$',
                          lanId: '$state.lanId$',
                          memberInfo: '$data.MemberInfo.memberInfo$',
                          catalogCode: '$state.catalogCode$',
                        },
                        paramsObjKeyValueMap: {
                          phone: '$value_24586657$',
                          lanId: '$state.lanId$',
                          memberInfo: '$data.MemberInfo.memberInfo$',
                          catalogCode: '$state.catalogCode$',
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
                            code: 'function main(data,state,success,fail){data.MemberInfo.push(okData_611628);if(data.sceneSubmit.custMemberList!=undefined&&data.sceneSubmit.custMemberList.length>0){data.sceneSubmit.custMemberList.push(okData_611628)}else{var custMemberList=[];custMemberList.push(okData_611628);data.sceneSubmit.custMemberList=custMemberList}success()};',
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
                                dataSourceId: 166303981671487000,
                                dataSourceName: 'MemberInfo',
                                dataSourceRelType: 'object',
                                dataSourceReloadFilter: [
                                  {
                                    attrId: '308593',
                                    code: 'custValueLevel',
                                    name: '价值等级',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '76420078',
                                    code: 'memberJoinDate_end',
                                    name: '纳入成员骨干时间结束',
                                    type: 'datetime',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '754296',
                                    code: 'noDisturbScope',
                                    name: '免扰范围',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                  },
                                  {
                                    attrId: '345095',
                                    code: 'industType',
                                    name: '行业类型',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '3229073',
                                    code: 'custId',
                                    name: '客户ID',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '874366',
                                    code: 'supervise',
                                    name: '监察人员',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '171017',
                                    code: 'cutOffTime_begin',
                                    name: '免扰截至时间开始',
                                    type: 'datetime',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '9418766',
                                    code: 'memberType',
                                    name: '成员类型',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '6734957',
                                    code: 'memberJoinDate',
                                    name: '纳入成员骨干时间',
                                    type: 'datetime',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '190524',
                                    code: 'cutOffTime_end',
                                    name: '免扰截至时间结束',
                                    type: 'datetime',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '90892034',
                                    code: 'cutOffTime',
                                    name: '免扰截至时间',
                                    type: 'datetime',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '948067',
                                    code: 'memberNbr',
                                    name: '手机号码',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '720127',
                                    code: 'custCode',
                                    name: '集团编码',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '730646',
                                    code: 'administrativeLevel',
                                    name: '行政级别',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '664057',
                                    code: 'keyManFlag',
                                    name: '关键人标识',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '1988677',
                                    code: 'memberJoinDate_begin',
                                    name: '纳入成员骨干时间开始',
                                    type: 'datetime',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '3531835',
                                    code: 'custStatus',
                                    name: '集团状态',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '4681609',
                                    code: 'memberName',
                                    name: '姓名',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '824869',
                                    code: 'custName',
                                    name: '集团名称',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '619628',
                                    code: 'job',
                                    name: '职务',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '1412322',
                                    code: 'pageNum',
                                    name: '页数',
                                    type: 'long',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                  },
                                  {
                                    attrId: '915963',
                                    code: 'pageSize',
                                    name: '每页数量',
                                    type: 'long',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                  },
                                  {
                                    attrId: '750397',
                                    code: 'childNode',
                                    name: '从表子节点',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                    value: '',
                                  },
                                ],
                                dataSourceSetValue: [
                                  {
                                    attrId: '4823123',
                                    code: 'msisdn',
                                    name: '手机号码',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '134739',
                                    code: 'memberJoinDate',
                                    name: '纳入成员骨干时间',
                                    type: 'datetime',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    value: { type: [], code: 'memberJoinDate' },
                                  },
                                  {
                                    attrId: '58013',
                                    code: 'groupId',
                                    name: '集团编码',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '2030545',
                                    code: 'groupName',
                                    name: '集团名称',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '005597',
                                    code: 'groupLevelName',
                                    name: '价值等级',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '149127',
                                    code: 'statusName',
                                    name: '集团状态',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '716457',
                                    code: 'memberType',
                                    name: '成员类型',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    value: { type: [], code: 'memberType' },
                                  },
                                  {
                                    attrId: '54181',
                                    code: 'officialLevel',
                                    name: '行政级别',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '244475',
                                    code: 'keyType',
                                    name: '关键人标识',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '355331',
                                    code: 'duty',
                                    name: '职务',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '8583146',
                                    code: 'cutOffTime',
                                    name: '免扰截至时间',
                                    type: 'datetime',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    value: { type: [], code: 'cutOffTime' },
                                  },
                                  {
                                    attrId: '82682',
                                    code: 'noDisturbScope',
                                    name: '免扰范围',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                    value: { type: [], code: 'noDisturbScope' },
                                  },
                                  {
                                    attrId: '231866',
                                    code: 'name',
                                    name: '姓名',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '231046',
                                    code: 'tradeclassTop',
                                    name: '行业类型ID',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '170299',
                                    code: 'customerId',
                                    name: '客户ID',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '360409',
                                    code: 'supervise',
                                    name: '看管人员',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    value: { type: [], code: 'supervise' },
                                  },
                                  {
                                    attrId: '1046582',
                                    code: 'keyTypeName',
                                    name: '关键人标识名称',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '6475557',
                                    code: 'memberTypeName',
                                    name: '成员类型名称',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '788913',
                                    code: 'officialLevelName',
                                    name: '行政级别名称',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '766652',
                                    code: 'tradeclassTopName',
                                    name: '行业类型名称',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '824624',
                                    code: 'rowId',
                                    name: '行ID',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '547764',
                                    code: 'actionType',
                                    name: '操作类型',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                  },
                                  {
                                    attrId: '351828',
                                    code: 'sceneType',
                                    name: '场景类型',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                  },
                                  {
                                    attrId: '2212653',
                                    code: 'msisdnomeCity',
                                    name: '成员号码归属地',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                  },
                                  {
                                    attrId: '688676',
                                    code: 'objType',
                                    name: '对象类型',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                  },
                                  {
                                    attrId: '8138167',
                                    code: 'homeCity',
                                    name: '集团归属地',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                  },
                                  {
                                    attrId: '867706',
                                    code: 'email',
                                    name: '邮箱',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '4067448',
                                    code: 'gender',
                                    name: '性别',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '037691',
                                    code: 'department',
                                    name: '部门',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '42604',
                                    code: 'remark',
                                    name: '备注',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
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
                                modalPath: '/auditOrderPrepare',
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
                  eventDatashowCustomModal277.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatashowCustomModal277,
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
                  const eventDatagetTableSelectedKey92: any = [
                    {
                      type: 'getTableSelectedKey',
                      dataId: 166305363866117100,
                      options: {
                        compId: 'Table_8700198',
                        compLib: 'comm',
                        pageJsonId: '537892',
                        compName: 'Table',
                        id: '455736',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'customActionCode',
                          dataId: 166305364328024830,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '79825',
                            pageJsonId: '537892',
                            code: 'function main(data,state,success,fail){var memnerInfo=data.MemberInfo;var sel=selectedRowKeys_455736;var res=[];if(sel!=undefined&&sel.length>0){memnerInfo.forEach(function(v){var exit=true;sel.forEach(function(s){if(s===v.memberNbr){exit=false}});if(exit){res.push(v)}});data.MemberInfo=res;data.sceneSubmit.custMemberList=data.MemberInfo}success()};',
                          },
                          line_number: 2,
                          callback1: [
                            {
                              type: 'setDataSource',
                              dataId: 166305417676623140,
                              options: {
                                compId: 'setDataSource',
                                compName: 'page',
                                id: '561374',
                                pageJsonId: '537892',
                                dataSourceId: 166303981671487000,
                                dataSourceName: 'MemberInfo',
                                dataSourceRelType: 'object',
                                dataSourceReloadFilter: [
                                  {
                                    attrId: '308593',
                                    code: 'custValueLevel',
                                    name: '价值等级',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '76420078',
                                    code: 'memberJoinDate_end',
                                    name: '纳入成员骨干时间结束',
                                    type: 'datetime',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '754296',
                                    code: 'noDisturbScope',
                                    name: '免扰范围',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                  },
                                  {
                                    attrId: '345095',
                                    code: 'industType',
                                    name: '行业类型',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '3229073',
                                    code: 'custId',
                                    name: '客户ID',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '874366',
                                    code: 'supervise',
                                    name: '监察人员',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '171017',
                                    code: 'cutOffTime_begin',
                                    name: '免扰截至时间开始',
                                    type: 'datetime',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '9418766',
                                    code: 'memberType',
                                    name: '成员类型',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '6734957',
                                    code: 'memberJoinDate',
                                    name: '纳入成员骨干时间',
                                    type: 'datetime',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '190524',
                                    code: 'cutOffTime_end',
                                    name: '免扰截至时间结束',
                                    type: 'datetime',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '90892034',
                                    code: 'cutOffTime',
                                    name: '免扰截至时间',
                                    type: 'datetime',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '948067',
                                    code: 'memberNbr',
                                    name: '手机号码',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '720127',
                                    code: 'custCode',
                                    name: '集团编码',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '730646',
                                    code: 'administrativeLevel',
                                    name: '行政级别',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '664057',
                                    code: 'keyManFlag',
                                    name: '关键人标识',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '1988677',
                                    code: 'memberJoinDate_begin',
                                    name: '纳入成员骨干时间开始',
                                    type: 'datetime',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '3531835',
                                    code: 'custStatus',
                                    name: '集团状态',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '4681609',
                                    code: 'memberName',
                                    name: '姓名',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '824869',
                                    code: 'custName',
                                    name: '集团名称',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '619628',
                                    code: 'job',
                                    name: '职务',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '1412322',
                                    code: 'pageNum',
                                    name: '页数',
                                    type: 'long',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                  },
                                  {
                                    attrId: '915963',
                                    code: 'pageSize',
                                    name: '每页数量',
                                    type: 'long',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                  },
                                  {
                                    attrId: '750397',
                                    code: 'childNode',
                                    name: '从表子节点',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                    value: '',
                                  },
                                ],
                                dataSourceSetValue: [
                                  {
                                    attrId: '134739',
                                    code: 'memberJoinDate',
                                    name: '纳入成员骨干时间',
                                    type: 'datetime',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '716457',
                                    code: 'memberType',
                                    name: '成员类型',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '8583146',
                                    code: 'cutOffTime',
                                    name: '免扰截至时间',
                                    type: 'datetime',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                  },
                                  {
                                    attrId: '82682',
                                    code: 'noDisturbScope',
                                    name: '免扰范围',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                  },
                                  {
                                    attrId: '360409',
                                    code: 'supervise',
                                    name: '看管人员',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
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
                              dataId: 166320896523261020,
                              options: {
                                compId: 'callParentCustomFunc',
                                compName: 'system',
                                id: '2648465',
                                pageJsonId: '537892',
                                pathname: '/auditOrderPrepare',
                                pageId: '884045146848604160',
                                modalPath: '/auditOrderPrepare',
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
                  eventDatagetTableSelectedKey92.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatagetTableSelectedKey92,
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
                title: '操作类型',
                key: 'actionType',
                dataIndex: 'actionType',
                editoption: {
                  edittype: 'Select',
                  selectoption: {
                    attr: {
                      attrName: '操作类型',
                      attrId: '888739201762070528',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
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
                title: '场景类型',
                key: 'sceneType',
                dataIndex: 'sceneType',
                editoption: {
                  edittype: 'Select',
                  selectoption: {
                    attr: {
                      attrName: '场景类型',
                      attrId: '888739201762070529',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
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
                title: '手机号码',
                key: 'msisdn',
                dataIndex: 'msisdn',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '手机号码',
                      attrId: '886805849493164032',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
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
                title: '姓名',
                key: 'name',
                dataIndex: 'name',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '姓名',
                      attrId: '886812890047664128',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
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
                title: '成员号码归属地',
                key: 'msisdnomeCity',
                dataIndex: 'msisdnomeCity',
                editoption: {
                  edittype: 'Select',
                  selectoption: {
                    attr: {
                      attrName: '成员号码归属地',
                      attrId: '888739201762070530',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
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
                title: '对象类型',
                key: 'objType',
                dataIndex: 'objType',
                editoption: {
                  edittype: 'Select',
                  selectoption: {
                    attr: {
                      attrName: '对象类型',
                      attrId: '888739201762070531',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
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
                title: '集团编码',
                key: 'groupId',
                dataIndex: 'groupId',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '集团编码',
                      attrId: '886805849493164034',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
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
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '集团名称',
                      attrId: '886805849493164035',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
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
                title: '集团归属地',
                key: 'homeCity',
                dataIndex: 'homeCity',
                editoption: {
                  edittype: 'Select',
                  selectoption: {
                    attr: {
                      attrName: '集团归属地',
                      attrId: '888739201762070532',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
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
                title: '职务',
                key: 'duty',
                dataIndex: 'duty',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '职务',
                      attrId: '886805849493164042',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
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
                title: '行政级别',
                key: 'officialLevel',
                dataIndex: 'officialLevel',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '行政级别',
                      attrId: '886805849493164040',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
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
                title: '成员类型名称',
                key: 'memberTypeName',
                dataIndex: 'memberTypeName',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '成员类型名称',
                      attrId: '887280289602863105',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
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
                title: '关键人标识名称',
                key: 'keyTypeName',
                dataIndex: 'keyTypeName',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '关键人标识名称',
                      attrId: '887280289602863104',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
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
                title: '邮箱',
                key: 'email',
                dataIndex: 'email',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '邮箱',
                      attrId: '888739201762070533',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
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
                title: '部门',
                key: 'department',
                dataIndex: 'department',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '部门',
                      attrId: '888739201762070535',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
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
                title: '性别',
                key: 'gender',
                dataIndex: 'gender',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '性别',
                      attrId: '888739201762070534',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
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
            visible={true}
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
            dataSource={data?.MemberInfo}
            fieldName={'data.MemberInfo.length'}
            total={data?.MemberInfo?.length}
            hiddenAction={false}
            rowKey={'rowId'}
            dataSourceFromDataSourceConfig={'data.MemberInfo'}
            $$componentItem={{
              id: 'Table_8700198',
              uid: 'Table_8700198',
              type: 'Table',
              ...componentItem,
            }}
            style={{ margin: '10px 0px 10px 0px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Table_8700198')}
            {...injectData}
          />
          <Row
            name={'行容器'}
            visible={false}
            colSpan={24}
            gutterHorizontal={0}
            gutterVertical={0}
            disabled={false}
            readOnly={false}
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
                id: 'Form_395851_1727917_9692158_9612234_1000722_17810495',
                uid: 'Form_395851_1727917_9692158_9612234_1000722_17810495',
                type: 'Form',
                ...componentItem,
              }}
              style={{ padding: '0px 0px 0px 0px', margin: '10px 0px 0px 0px' }}
              ref={(r: any) =>
                refs.setComponentRef(
                  r,
                  'Form_395851_1727917_9692158_9612234_1000722_17810495',
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
                $$componentItem={{
                  id: 'Input_690228_5400337_280051_232429_7501497_5507217',
                  uid: 'Input_690228_5400337_280051_232429_7501497_5507217',
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
                    'Input_690228_5400337_280051_232429_7501497_5507217',
                  )
                }
                {...injectData}
              />
              <View
                className="View_View_22346374_875512_926873_4359147_729981_1523415"
                name={'布局容器'}
                visible={true}
                labelCol={8}
                wrapperCol={16}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_22346374_875512_926873_4359147_729981_1523415',
                  uid: 'View_22346374_875512_926873_4359147_729981_1523415',
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
                    'View_22346374_875512_926873_4359147_729981_1523415',
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
                    id: 'StdUpload_6230546_867413_538179_36057857_3505279_423967',
                    uid: 'StdUpload_6230546_867413_538179_36057857_3505279_423967',
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
                    const eventDatagetSelectedData457: any = [
                      {
                        type: 'getSelectedData',
                        dataId: 166303897040515230,
                        options: {
                          compId: 'Input_690228_5400337_280051_232429',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Select',
                          id: '39896',
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'setDataSource',
                            dataId: 166303897559846750,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '296104',
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
                                    code: '$selectedData_39896[0].value$',
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
                                    code: '$selectedData_39896[0].label$',
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
                                dataId: 166303897559855550,
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '619622',
                                  pageJsonId: '537892',
                                  code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=data.fileInfoList;success(data.sceneSubmit)};',
                                },
                                line_number: 3,
                                callback1: [
                                  {
                                    type: 'console',
                                    dataId: 166303897559829400,
                                    options: {
                                      compId: 'debug',
                                      compName: 'system',
                                      id: '88698',
                                      pageJsonId: '537892',
                                      value: ['$data_619622$'],
                                    },
                                    line_number: 4,
                                  },
                                  {
                                    type: 'callParentCustomFunc',
                                    dataId: 166303897559855300,
                                    options: {
                                      compId: 'callParentCustomFunc',
                                      compName: 'system',
                                      id: '0744579',
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
                        callback2: [
                          {
                            type: 'showMessage',
                            dataId: 166303898381373400,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '655191',
                              pageJsonId: '537892',
                              type: 'error',
                              value: '请选择附件类型',
                            },
                            line_number: 6,
                          },
                        ],
                      },
                    ];
                    eventDatagetSelectedData457.params =
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
                      eventDatagetSelectedData457,
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
                    const eventDatacustomActionCode856: any = [
                      {
                        type: 'customActionCode',
                        dataId: 166192905624837500,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '5697634',
                          pageJsonId: '537892',
                          code: 'function main(data,state,success,fail){document.querySelectorAll(".pcfactory-upload-list-text").forEach(function(v){v.style="display:none"})};',
                        },
                        line_number: 1,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatacustomActionCode856.params =
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
                      eventDatacustomActionCode856,
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
                      'StdUpload_6230546_867413_538179_36057857_3505279_423967',
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
          visible={false}
          disabled={false}
          readOnly={false}
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
              const eventDatacustomActionCode857: any = [
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
              eventDatacustomActionCode857.params =
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
                eventDatacustomActionCode857,
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
              const eventDatadownloadByFileId120: any = [
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
              eventDatadownloadByFileId120.params =
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
                eventDatadownloadByFileId120,
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
          ref={(r: any) => refs.setComponentRef(r, 'BOFramer_3936793')}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(ClsJc_0004_0003old$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
