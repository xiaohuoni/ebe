// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import {
  Card,
  Checkbox,
  Description,
  Divider,
  Form,
  HorizontalView,
  Input,
  TextArea,
  View,
} from '@/components/factory';

import BusiComp0521965 from '@/components/BusiComp0521965';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import { styleInject } from '@/utils/styleInject';

import dataSource from './dataSource.json';

styleInject(
  '.__CustomClass_537892__ .Description_4825964 .index-module_label__1LnmS{word-wrap:break-word;white-space:normal;min-width:100px;padding:8px 16px;}',

  '537892',
);

const ClsCp_0019_0003$$Page: React.FC<PageProps> = ({
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
  const fileUpload = (options_263015: any) => {
    const eventDatacustomActionCode67: any = [
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
    eventDatacustomActionCode67.params =
      [
        {
          title: '事件入参',
          name: 'options_263015',
          value: '$options_263015$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode67,
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
  const updateTitle = (options_9020026: any) => {
    const eventDatacustomActionCode68: any = [
      {
        type: 'customActionCode',
        dataId: 167592245922136500,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '83029816',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){console.log("data.MemberInfo",data.MemberInfo);var _value="";if(data.MemberInfo.length>0){_value=data.MemberInfo[0].groupName}success({catalogCode:"CLS_JC_0004_0002",value:_value})};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'callParentCustomFunc',
            dataId: 167592277382884130,
            options: {
              compId: 'callParentCustomFunc',
              compName: 'system',
              id: '707431',
              pageJsonId: '537892',
              pathname: '/auditOrderPrepare',
              pageId: '884045146848604160',
              customFuncName: 'updateTitleJC0004',
              customFuncParams: '$data_83029816$',
            },
            line_number: 2,
            callback1: [],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode68.params =
      [
        {
          title: '事件入参',
          name: 'options_9020026',
          value: '$options_9020026$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode68,
      { options_9020026 },
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
    updateTitle,
  }));

  useEffect(() => {
    const eventDataapiRequest213: any = [
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
        line_number: 1,
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
            line_number: 2,
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
    eventDataapiRequest213.params = [] || [];
    CMDGenerator(eventDataapiRequest213, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse123: any = [
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
        line_number: 4,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 166132449559169250,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '9981685',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var item=state.itemList;console.log("zrj",item);var factorForm={};var attrList=item.attrList;if(attrList!=undefined&&attrList.length>0){for(var i=0;i<attrList.length;i++){factorForm[attrList[i].attrCode]=attrList[i].attrValue}}data.factorForm=factorForm;console.log(data.factorForm,"factorForm");data.sceneSubmit.approveGrade=item.approveGrade;data.sceneSubmit.approveGradeName=item.approveGradeName;data.sceneSubmit.instList=item.instList;data.groupInfo=item.customObject.groupInfo;data.accountInfo=item.customObject.accountInfo;console.log(data.groupInfo,"groupInfo");console.log(data.accountInfo,"accountInfo");success()};',
              actionTitle: '设置界面初始化值',
            },
            line_number: 5,
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
                line_number: 6,
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
                  dataSourceId: 170469362309245760,
                  dataSourceName: 'groupInfo',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      attrId: '775124',
                      code: 'groupId',
                      name: '集团编码',
                      type: 'string',
                      initialData: {
                        type: 'static',
                        value: 'as1d56as16d<br>aaaaaaa',
                      },
                      showInput: true,
                      _codePath: ['groupId'],
                      _idpath: ['775124'],
                    },
                    {
                      attrId: '629789',
                      code: 'groupName',
                      name: '集团名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['groupName'],
                      _idpath: ['629789'],
                    },
                    {
                      attrId: '0041347',
                      code: 'isAgencyGroup',
                      name: '是否代理商集团',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['isAgencyGroup'],
                      _idpath: ['0041347'],
                    },
                    {
                      attrId: '581599',
                      code: 'belongCityText',
                      name: '归属地市',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['belongCityText'],
                      _idpath: ['581599'],
                    },
                    {
                      attrId: '057907',
                      code: 'belongAreaText',
                      name: '归属县市',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['belongAreaText'],
                      _idpath: ['057907'],
                    },
                    {
                      attrId: '1892002',
                      code: 'groupCreditRate',
                      name: '集团征信等级',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['groupCreditRate'],
                      _idpath: ['1892002'],
                    },
                    {
                      attrId: '363133',
                      code: 'paidNum',
                      name: '付费号码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['paidNum'],
                      _idpath: ['363133'],
                    },
                    {
                      attrId: '8720222',
                      code: 'groupLevelName',
                      name: '价值等级',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['groupLevelName'],
                      _idpath: ['8720222'],
                    },
                    {
                      attrId: '170383',
                      code: 'custManager',
                      name: '客户经理',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['custManager'],
                      _idpath: ['170383'],
                    },
                    {
                      attrId: '5626437',
                      code: 'groupEarliestOverdueTime',
                      name: '集团最早欠费时间',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['groupEarliestOverdueTime'],
                      _idpath: ['5626437'],
                    },
                    {
                      attrId: '086899',
                      code: 'groupTotalOverdueFee',
                      name: '集团总欠费(元)',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['groupTotalOverdueFee'],
                      _idpath: ['086899'],
                    },
                    {
                      attrId: '63167',
                      code: 'custManagerCreditRate',
                      name: '客户经理征信等级',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['custManagerCreditRate'],
                      _idpath: ['63167'],
                    },
                    {
                      attrId: '9963307',
                      code: 'maxOverdueMonth',
                      name: '最大逾期月数(月)',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['maxOverdueMonth'],
                      _idpath: ['9963307'],
                    },
                    {
                      attrId: '445823',
                      code: 'groupCumulativeOverdueFee',
                      name: '集团累计逾期(元)',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['groupCumulativeOverdueFee'],
                      _idpath: ['445823'],
                    },
                    {
                      attrId: '877715',
                      code: 'lastCollectionRequireYear',
                      name: '最近一次催缴要求(近一年)',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['lastCollectionRequireYear'],
                      _idpath: ['877715'],
                    },
                    {
                      attrId: '008987',
                      code: 'lastCollectionTimeYear',
                      name: '最近一次催缴时间(近一年)',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['lastCollectionTimeYear'],
                      _idpath: ['008987'],
                    },
                    {
                      attrId: '248176',
                      code: 'lastCollectionActionYear',
                      name: '最近一次催缴动作(近一年)',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['lastCollectionActionYear'],
                      _idpath: ['248176'],
                    },
                    {
                      attrId: '458636',
                      code: 'appliedWhiteListNum',
                      name: '已申请白名单次数(次)',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['appliedWhiteListNum'],
                      _idpath: ['458636'],
                    },
                    {
                      attrId: '1307556',
                      code: 'appliedWhiteListDay',
                      name: '已申请白名单天数(天)',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['appliedWhiteListDay'],
                      _idpath: ['1307556'],
                    },
                    {
                      attrId: '207052',
                      code: 'param0',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['param0'],
                      _idpath: ['207052'],
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  targetDataSourcePaths: [],
                },
                line_number: 7,
                callback1: [],
                callback2: [],
              },
              {
                type: 'setDataSource',
                dataId: 170470098583648420,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '8675415',
                  pageJsonId: '537892',
                  dataSourceId: 170479218148343260,
                  dataSourceName: 'accountInfo',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      code: 'marginAccountCode ',
                      name: '保证金账户编号',
                      type: 'string',
                      attrId: '090854',
                      initialData: { type: 'static', value: '保证金账户编号' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'marginAccountName',
                      name: '保证金账户名称',
                      type: 'string',
                      attrId: '3950515',
                      initialData: { type: 'static', value: '保证金账户名称' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'marginAccountLineType',
                      name: '保证金账本类型',
                      type: 'string',
                      attrId: '679156',
                      initialData: { type: 'static', value: '保证金账本类型' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'marginAccountLine',
                      name: '保证金账本金额（元）',
                      type: 'string',
                      attrId: '731417',
                      initialData: {
                        type: 'static',
                        value: '保证金账本金额（元）',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'transferFeeAmount',
                      name: '申请转缴费金额（元）',
                      type: 'string',
                      attrId: '8939592',
                      initialData: {
                        type: 'static',
                        value: '申请转缴费金额（元）',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'FeeToAccountCode',
                      name: '申请转缴费缴入账户编号',
                      type: 'string',
                      attrId: '372294',
                      initialData: {
                        type: 'static',
                        value: '申请转缴费缴入账户编号',
                      },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                    },
                    {
                      code: 'FeeToAccountName',
                      name: '申请转缴费缴入账户名称',
                      type: 'string',
                      attrId: '159407',
                      initialData: {
                        type: 'static',
                        value: '申请转缴费缴入账户名称',
                      },
                      parentKey: '1',
                      parentType: 'object',
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
            line_number: 9,
            callback1: [
              {
                type: 'sysSetVisible',
                dataId: 167695862138840540,
                options: {
                  compId: [
                    'Table_8700198_047366',
                    'Input_361479_887285_2150708_936504_923334_755169',
                  ],
                  compName: 'page',
                  id: '7058517',
                  pageJsonId: '537892',
                  visible: 'true',
                  compid: [
                    'Table_8700198_047366',
                    'Input_361479_887285_2150708_936504_923334_755169',
                  ],
                },
                line_number: 10,
              },
              {
                type: 'sysSetVisible',
                dataId: 167695863893710180,
                options: {
                  compId: ['Table_8700198', 'View_278839'],
                  compName: 'page',
                  id: '460984',
                  pageJsonId: '537892',
                  visible: '',
                  compid: ['Table_8700198', 'View_278839'],
                },
                line_number: 11,
              },
              {
                type: 'setDisable',
                dataId: 166392738103528860,
                options: {
                  compId: [
                    'Input_361479_887285_2150708_936504_923334_755169',
                    'Form_345819',
                    'Form_063831',
                  ],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '075526',
                  disabled: 'true',
                  compid: [
                    'Input_361479_887285_2150708_936504_923334_755169',
                    'Form_345819',
                    'Form_063831',
                  ],
                },
                line_number: 12,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse123.params = [] || [];
    CMDGenerator(eventDataifelse123, {}, 'ifelse', {
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
          dividerText={'集团客户退保证金转缴费申请'}
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
                  (refs['Form_4311097_9385662_8411515_9167293_4337769'] = r)
                }
                {...injectData}
              >
                <Checkbox
                  name={'审批场景'}
                  titleTip={'text'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  text={'集团客户退保证金转缴费申请'}
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
                    (refs[
                      'Checkbox_882584_5289015_934499_355644_646764_5265724'
                    ] = r)
                  }
                  {...injectData}
                />
                <View
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
                  ref={(r: any) => (refs['View_6319234'] = r)}
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
                    (refs['Input_361479_887285_2150708_936504_923334_755169'] =
                      r)
                  }
                  {...injectData}
                />
              </Form>
            </View>
          </HorizontalView>
          <Card
            name={'集团信息'}
            cardIconType={'middle'}
            title={'集团信息'}
            bordered={false}
            size={'default'}
            hasHeader={true}
            hasIcon={true}
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
              id: 'Card_246617',
              uid: 'Card_246617',
              type: 'Card',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              padding: '20px 20px 20px 20px',
              overflowY: 'visible',
              margin: '0px 0px 12px 0px',
              'margin-bottom': '2.5px',
            }}
            ref={(r: any) => (refs['Card_246617'] = r)}
            {...injectData}
          >
            <Description
              name={'描述列表'}
              columns={[
                {
                  title: '集团编码',
                  key: 'groupId',
                  dataIndex: 'groupId',
                  label: '集团编码',
                  id: '596528',
                  customRendering: undefined,
                },
                {
                  title: '集团名称',
                  key: 'groupName',
                  dataIndex: 'groupName',
                  label: '集团名称',
                  id: '1722396',
                  customRendering: undefined,
                },
                {
                  title: '是否代理商集团',
                  key: 'isAgencyGroup',
                  dataIndex: 'isAgencyGroup',
                  label: '是否代理商集团',
                  id: '857267',
                  customRendering: undefined,
                },
                {
                  title: '归属地市',
                  key: 'belongCityText',
                  dataIndex: 'belongCityText',
                  label: '归属地市',
                  id: '136695',
                  customRendering: undefined,
                },
                {
                  title: '归属县市',
                  key: 'belongAreaText',
                  dataIndex: 'belongAreaText',
                  label: '归属县市',
                  id: '715978',
                  customRendering: undefined,
                },
                {
                  title: '集团征信等级',
                  key: 'groupCreditRate',
                  dataIndex: 'groupCreditRate',
                  label: '集团征信等级',
                  id: '760344',
                  customRendering: undefined,
                },
                {
                  title: '付费号码',
                  key: 'paidNum',
                  dataIndex: 'paidNum',
                  label: '付费号码',
                  id: '7864685',
                  customRendering: undefined,
                },
                {
                  title: '价值等级',
                  key: 'groupLevelName',
                  dataIndex: 'groupLevelName',
                  label: '价值等级',
                  id: '794133',
                  customRendering: undefined,
                },
                {
                  title: '客户经理',
                  key: 'custManager',
                  dataIndex: 'custManager',
                  label: '客户经理',
                  id: '49045',
                  customRendering: undefined,
                },
                {
                  title: '集团最早欠费时间',
                  key: 'groupEarliestOverdueTime',
                  dataIndex: 'groupEarliestOverdueTime',
                  label: '集团最早欠费时间',
                  id: '6676255',
                  customRendering: undefined,
                },
                {
                  title: '集团总欠费(元)',
                  key: 'groupTotalOverdueFee',
                  dataIndex: 'groupTotalOverdueFee',
                  label: '集团总欠费(元)',
                  id: '063569',
                  customRendering: undefined,
                },
                {
                  title: '客户经理征信等级',
                  key: 'custManagerCreditRate',
                  dataIndex: 'custManagerCreditRate',
                  label: '客户经理征信等级',
                  id: '625929',
                  customRendering: undefined,
                },
                {
                  title: '最大逾期月数(月)',
                  key: 'maxOverdueMonth',
                  dataIndex: 'maxOverdueMonth',
                  label: '最大逾期月数(月)',
                  id: '2898603',
                  customRendering: undefined,
                },
                {
                  title: '集团累计逾期(元)',
                  key: 'groupCumulativeOverdueFee',
                  dataIndex: 'groupCumulativeOverdueFee',
                  label: '集团累计逾期(元)',
                  id: '792338',
                  customRendering: undefined,
                },
                {
                  title: '属性',
                  key: 'param0',
                  dataIndex: 'param0',
                  label: ' ',
                  id: '681095',
                  type: 'ROW',
                  customRendering: undefined,
                },
                {
                  title: '最近一次催缴要求(近一年)',
                  key: 'lastCollectionRequireYear',
                  dataIndex: 'lastCollectionRequireYear',
                  label: '最近一次催缴要求(近一年)',
                  id: '6652766',
                  customRendering: undefined,
                },
                {
                  title: '最近一次催缴时间(近一年)',
                  key: 'lastCollectionTimeYear',
                  dataIndex: 'lastCollectionTimeYear',
                  label: '最近一次催缴时间(近一年)',
                  id: '7006544',
                  customRendering: undefined,
                },
                {
                  title: '最近一次催缴动作(近一年)',
                  key: 'lastCollectionActionYear',
                  dataIndex: 'lastCollectionActionYear',
                  label: '最近一次催缴动作(近一年)',
                  id: '625043',
                  customRendering: undefined,
                },
                {
                  title: '已申请白名单次数(次)',
                  key: 'appliedWhiteListNum',
                  dataIndex: 'appliedWhiteListNum',
                  label: '已申请白名单次数(次)',
                  id: '8468125',
                  customRendering: undefined,
                },
                {
                  title: '已申请白名单天数(天)',
                  key: 'appliedWhiteListDay',
                  dataIndex: 'appliedWhiteListDay',
                  label: '已申请白名单天数(天)',
                  id: '907244',
                  customRendering: undefined,
                },
              ]}
              bordered={true}
              labelWidth={undefined}
              colSpan={8}
              colon={true}
              labelAlign={'left'}
              dataSource={data?.groupInfo}
              descColumns={[
                {
                  title: '集团编码',
                  key: 'groupId',
                  dataIndex: 'groupId',
                  label: '集团编码',
                  id: '596528',
                },
                {
                  title: '集团名称',
                  key: 'groupName',
                  dataIndex: 'groupName',
                  label: '集团名称',
                  id: '1722396',
                },
                {
                  title: '是否代理商集团',
                  key: 'isAgencyGroup',
                  dataIndex: 'isAgencyGroup',
                  label: '是否代理商集团',
                  id: '857267',
                },
                {
                  title: '归属地市',
                  key: 'belongCityText',
                  dataIndex: 'belongCityText',
                  label: '归属地市',
                  id: '136695',
                },
                {
                  title: '归属县市',
                  key: 'belongAreaText',
                  dataIndex: 'belongAreaText',
                  label: '归属县市',
                  id: '715978',
                },
                {
                  title: '集团征信等级',
                  key: 'groupCreditRate',
                  dataIndex: 'groupCreditRate',
                  label: '集团征信等级',
                  id: '760344',
                },
                {
                  title: '付费号码',
                  key: 'paidNum',
                  dataIndex: 'paidNum',
                  label: '付费号码',
                  id: '7864685',
                },
                {
                  title: '价值等级',
                  key: 'groupLevelName',
                  dataIndex: 'groupLevelName',
                  label: '价值等级',
                  id: '794133',
                },
                {
                  title: '客户经理',
                  key: 'custManager',
                  dataIndex: 'custManager',
                  label: '客户经理',
                  id: '49045',
                },
                {
                  title: '集团最早欠费时间',
                  key: 'groupEarliestOverdueTime',
                  dataIndex: 'groupEarliestOverdueTime',
                  label: '集团最早欠费时间',
                  id: '6676255',
                },
                {
                  title: '集团总欠费(元)',
                  key: 'groupTotalOverdueFee',
                  dataIndex: 'groupTotalOverdueFee',
                  label: '集团总欠费(元)',
                  id: '063569',
                },
                {
                  title: '客户经理征信等级',
                  key: 'custManagerCreditRate',
                  dataIndex: 'custManagerCreditRate',
                  label: '客户经理征信等级',
                  id: '625929',
                },
                {
                  title: '最大逾期月数(月)',
                  key: 'maxOverdueMonth',
                  dataIndex: 'maxOverdueMonth',
                  label: '最大逾期月数(月)',
                  id: '2898603',
                },
                {
                  title: '集团累计逾期(元)',
                  key: 'groupCumulativeOverdueFee',
                  dataIndex: 'groupCumulativeOverdueFee',
                  label: '集团累计逾期(元)',
                  id: '792338',
                },
                {
                  title: '属性',
                  key: 'param0',
                  dataIndex: 'param0',
                  label: ' ',
                  id: '681095',
                  type: 'ROW',
                },
                {
                  title: '最近一次催缴要求(近一年)',
                  key: 'lastCollectionRequireYear',
                  dataIndex: 'lastCollectionRequireYear',
                  label: '最近一次催缴要求(近一年)',
                  id: '6652766',
                },
                {
                  title: '最近一次催缴时间(近一年)',
                  key: 'lastCollectionTimeYear',
                  dataIndex: 'lastCollectionTimeYear',
                  label: '最近一次催缴时间(近一年)',
                  id: '7006544',
                },
                {
                  title: '最近一次催缴动作(近一年)',
                  key: 'lastCollectionActionYear',
                  dataIndex: 'lastCollectionActionYear',
                  label: '最近一次催缴动作(近一年)',
                  id: '625043',
                },
                {
                  title: '已申请白名单次数(次)',
                  key: 'appliedWhiteListNum',
                  dataIndex: 'appliedWhiteListNum',
                  label: '已申请白名单次数(次)',
                  id: '8468125',
                },
                {
                  title: '已申请白名单天数(天)',
                  key: 'appliedWhiteListDay',
                  dataIndex: 'appliedWhiteListDay',
                  label: '已申请白名单天数(天)',
                  id: '907244',
                },
              ]}
              className={'Description_4825964'}
              labelSize={'200px'}
              $$componentItem={{
                id: 'Description_4825964',
                uid: 'Description_4825964',
                type: 'Description',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ margin: '12px 0px 12px 0px' }}
              ref={(r: any) => (refs['Description_4825964'] = r)}
              {...injectData}
            />
          </Card>
          <Card
            name={'缴费信息'}
            cardIconType={'middle'}
            title={'账户信息'}
            bordered={false}
            size={'default'}
            hasHeader={true}
            hasIcon={true}
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
              id: 'Card_687933',
              uid: 'Card_687933',
              type: 'Card',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              padding: '20px 20px 20px 20px',
              overflowY: 'visible',
              margin: '0px 0px 12px 0px',
              'margin-bottom': '2.5px',
            }}
            ref={(r: any) => (refs['Card_687933'] = r)}
            {...injectData}
          >
            <Description
              name={'描述列表'}
              columns={[
                {
                  title: '保证金账户编号',
                  key: 'marginAccountCode ',
                  dataIndex: 'marginAccountCode ',
                  label: '保证金账户编号',
                  customRendering: undefined,
                },
                {
                  title: '保证金账户名称',
                  key: 'marginAccountName',
                  dataIndex: 'marginAccountName',
                  label: '保证金账户名称',
                  customRendering: undefined,
                },
                {
                  title: '保证金账本类型',
                  key: 'marginAccountLineType',
                  dataIndex: 'marginAccountLineType',
                  label: '保证金账本类型',
                  customRendering: undefined,
                },
                {
                  title: '保证金账本金额（元）',
                  key: 'marginAccountLine',
                  dataIndex: 'marginAccountLine',
                  label: '保证金账本金额（元）',
                  customRendering: undefined,
                },
                {
                  title: '申请转缴费金额（元）',
                  key: 'transferFeeAmount',
                  dataIndex: 'transferFeeAmount',
                  label: '申请转缴费金额（元）',
                  customRendering: undefined,
                },
                {
                  title: '申请转缴费缴入账户编号',
                  key: 'FeeToAccountCode',
                  dataIndex: 'FeeToAccountCode',
                  label: '申请转缴费缴入账户编号',
                  customRendering: undefined,
                },
                {
                  title: '申请转缴费缴入账户名称',
                  key: 'FeeToAccountName',
                  dataIndex: 'FeeToAccountName',
                  label: '申请转缴费缴入账户名称',
                  customRendering: undefined,
                },
              ]}
              bordered={true}
              labelWidth={undefined}
              colSpan={8}
              colon={true}
              labelAlign={'left'}
              dataSource={data?.accountInfo}
              labelSize={'200px'}
              $$componentItem={{
                id: 'Description_479217',
                uid: 'Description_479217',
                type: 'Description',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              ref={(r: any) => (refs['Description_479217'] = r)}
              {...injectData}
            />
          </Card>
          <Form
            name={'要素'}
            colSpan={8}
            labelCol={8}
            wrapperCol={16}
            colon={true}
            layout={'horizontal'}
            labelAlign={'right'}
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_22304545'}
            $$componentItem={{
              id: 'Form_063831',
              uid: 'Form_063831',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => (refs['Form_063831'] = r)}
            {...injectData}
          >
            <TextArea
              name={'欠费原因'}
              selfSpan={24}
              labelCol={'2'}
              wrapperCol={22}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              placeholder={'请输入'}
              formItemIndex={0}
              fieldName={'arrearsReason'}
              value={data?.factorForm?.arrearsReason}
              $$componentItem={{
                id: 'TextArea_739311',
                uid: 'TextArea_739311',
                type: 'TextArea',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['TextArea_739311'] = r)}
              {...injectData}
            />
            <TextArea
              name={'缴费情况'}
              selfSpan={24}
              labelCol={'2'}
              wrapperCol={22}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              placeholder={'请输入'}
              formItemIndex={1}
              fieldName={'paymentStatus'}
              value={data?.factorForm?.paymentStatus}
              $$componentItem={{
                id: 'TextArea_2012576',
                uid: 'TextArea_2012576',
                type: 'TextArea',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['TextArea_2012576'] = r)}
              {...injectData}
            />
            <TextArea
              name={'风险评估'}
              selfSpan={24}
              labelCol={'2'}
              wrapperCol={22}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              placeholder={'请输入'}
              formItemIndex={2}
              fieldName={'risk'}
              value={data?.factorForm?.riskAssessment}
              $$componentItem={{
                id: 'TextArea_2434036',
                uid: 'TextArea_2434036',
                type: 'TextArea',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['TextArea_2434036'] = r)}
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
              required={true}
              placeholder={'请输入'}
              formItemIndex={3}
              fieldName={'reason'}
              value={data?.factorForm?.reason}
              $$componentItem={{
                id: 'TextArea_75462695',
                uid: 'TextArea_75462695',
                type: 'TextArea',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['TextArea_75462695'] = r)}
              {...injectData}
            />
          </Form>
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
          ref={(r: any) => (refs['BOFramer_866214'] = r)}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(ClsCp_0019_0003$$Page, {
  pageId: '1061916117600133120',
  hasLogin: false,
  dataSource,
  defaultState: {},
});
