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
  Select,
  DatePicker,
  TextArea,
  Button,
  StdUpload,
  Table,
} from '@/components/factory';

import BusiComp0521965 from '@/components/BusiComp0521965';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '1036157973422247936';
const ClsCp_0003_0011$$Page: React.FC<PageProps> = ({
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
  const fileUpload = (options_8246759: any) => {
    const eventDatacustomActionCode134: any = [
      {
        type: 'customActionCode',
        dataId: 167717152898307460,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '106464',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=options_8246759;success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'callParentCustomFunc',
            dataId: 167717152898378660,
            options: {
              compId: 'callParentCustomFunc',
              compName: 'system',
              id: '4678',
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
    eventDatacustomActionCode134.params =
      [
        {
          title: '事件入参',
          name: 'options_8246759',
          value: '$options_8246759$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode134,
      { options_8246759 },
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
    const eventDataapiRequest403: any = [
      {
        type: 'apiRequest',
        dataId: 166977384174251940,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '582001',
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
                  code: 'header',
                  name: '请求头参数',
                  attrType: 'object',
                  _id: 'root.header',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.header',
                  dataKey: '582001_root.header',
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
                  dataKey: '582001_root.path',
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
                  dataKey: '582001_root.query',
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
                      code: 'catalogCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.catalogCode',
                      compType: 'Input',
                      name: 'catalogCode',
                      parents: ['root', 'body'],
                      id: 'root.body.catalogCode',
                      dataKey: '582001_root.body.catalogCode',
                      value: {
                        type: ['customize'],
                        code: '$state.catalogCode$',
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
                      dataKey: '582001_root.body.attrCode',
                      value: { type: ['customize'], code: 'urgencyGrade' },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.body',
                  dataKey: '582001_root.body',
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
              dataKey: '582001_root',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 169864829305521300,
            options: {
              compId: 'Select_411778',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '989367',
              data: '$reply_582001?.resultData$',
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
    eventDataapiRequest403.params = [] || [];
    CMDGenerator(eventDataapiRequest403, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest404: any = [
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
    eventDataapiRequest404.params = [] || [];
    CMDGenerator(eventDataapiRequest404, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse214: any = [
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
              code: 'function main(data,state,success,fail){var item=state.itemList;data.sceneSubmit.approveGrade=item.approveGrade;data.sceneSubmit.approveGradeName=item.approveGradeName;data.sceneSubmit.instList=item.instList;var groupList=[];item.instList.forEach(function(v){var group={};var instList=v.instAttrList;if(instList!=undefined&&instList.length>0){for(var i=0;i<instList.length;i++){group[instList[i].attrCode]=instList[i].attrValue}group.rowId=v.instCode;groupList.push(group)}});success(groupList)};',
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
                  dataSourceId: 169864701493756640,
                  dataSourceName: 'groupInfoList',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      attrId: '763516',
                      code: 'groupId',
                      name: '集团编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                    },
                    {
                      attrId: '976473',
                      code: 'groupName',
                      name: '集团名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                    },
                    {
                      attrId: '321953',
                      code: 'devChannel',
                      name: '发展渠道',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                    },
                    {
                      attrId: '313289',
                      code: 'agentName',
                      name: '代理商名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                    },
                    {
                      attrId: '3122904',
                      code: 'basicAccessNumber',
                      name: '基本接入号',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                    },
                    {
                      attrId: '0694526',
                      code: 'busiAccessNumber',
                      name: '业务接入号',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                    },
                    {
                      attrId: '149064',
                      code: 'devChannelName',
                      name: '发展渠道',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                    },
                    {
                      attrId: '843119',
                      code: 'rowId',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                    },
                  ],
                  operateType: 3,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  newData: '$data_9981685$',
                  targetDataSourcePaths: [],
                },
                line_number: 8,
                callback1: [],
                callback2: [],
              },
              {
                type: 'setValue',
                dataId: 166856730120731680,
                options: {
                  compId: 'Input_361479_887285_3596799_872256_734178',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '7430234',
                  valueList: {
                    Input_361479_887285_3596799_872256_734178:
                      '$state.itemList.approveGradeName$',
                  },
                },
                line_number: 9,
                callback1: [],
              },
            ],
            callback2: [],
          },
          {
            type: 'customActionCode',
            dataId: 167703124909979600,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '3347475',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var item=state.itemList;data.sceneSubmit=item;var factorForm={};var attrList=item.attrList;if(attrList!=undefined&&attrList.length>0){for(var i=0;i<attrList.length;i++){factorForm[attrList[i].attrCode]=attrList[i].attrValue}}success(factorForm)};',
              actionTitle: '设置界面初始化值',
            },
            line_number: 10,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 167703124909912160,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '469416',
                  pageJsonId: '537892',
                  dataSourceId: 166849547046806900,
                  dataSourceName: 'factorForm',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '6692',
                      code: 'urgencyGrade',
                      name: '紧急程度',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['urgencyGrade'],
                      _idpath: ['6692'],
                      value: {
                        type: ['customize'],
                        code: '$data_3347475.urgencyGrade$',
                      },
                    },
                    {
                      attrId: '159522',
                      code: 'groupName',
                      name: '集团名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['groupName'],
                      _idpath: ['159522'],
                      value: { type: [], code: '' },
                    },
                    {
                      attrId: '360853',
                      code: 'groupId',
                      name: '集团编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['groupId'],
                      _idpath: ['360853'],
                    },
                    {
                      attrId: '413571',
                      code: 'suggestFinishDate',
                      name: '建议完成时间',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['suggestFinishDate'],
                      _idpath: ['413571'],
                      value: {
                        type: ['customize'],
                        code: '$data_3347475.suggestFinishDate$',
                      },
                    },
                    {
                      attrId: '478961',
                      code: 'busiAccessNumber',
                      name: '业务接入号',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['busiAccessNumber'],
                      _idpath: ['478961'],
                    },
                    {
                      attrId: '778059',
                      code: 'reason',
                      name: '申请原因',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['reason'],
                      _idpath: ['778059'],
                      value: {
                        type: ['customize'],
                        code: '$data_3347475.reason$',
                      },
                    },
                    {
                      attrId: '790351',
                      code: 'basicAccessNumber',
                      name: '基本接入号',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['basicAccessNumber'],
                      _idpath: ['790351'],
                    },
                    {
                      attrId: '817056',
                      code: 'attachmentType',
                      name: '附件类型',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['attachmentType'],
                      _idpath: ['817056'],
                    },
                    {
                      attrId: '902568',
                      code: 'agentName',
                      name: '代理商名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['agentName'],
                      _idpath: ['902568'],
                    },
                    {
                      attrId: '983031',
                      code: 'devChannel',
                      name: '发展渠道',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['devChannel'],
                      _idpath: ['983031'],
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 11,
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
            line_number: 12,
            callback1: [
              {
                type: 'setVisible',
                dataId: 166392734796303840,
                options: {
                  compId: [
                    'Input_361479_887285_2150708_936504_923334_755169',
                    'Table_8700198_532441_009092',
                    'Input_361479_887285_3596799_872256_734178',
                    'Table_8700198_532441_856774',
                    'Table_576505',
                  ],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '510887',
                  visible: 'true',
                  compid: [
                    'Input_361479_887285_2150708_936504_923334_755169',
                    'Table_8700198_532441_009092',
                    'Input_361479_887285_3596799_872256_734178',
                    'Table_8700198_532441_856774',
                    'Table_576505',
                  ],
                },
                line_number: 13,
              },
              {
                type: 'sysSetVisible',
                dataId: 166244953733999170,
                options: {
                  compId: [
                    'Row_851124',
                    'Row_851_2274664',
                    'Table_8700198_532441',
                    'Row_851124_869442',
                    'Button_683498_52655',
                    'Button_026256_333762',
                    'StdUpload_4835215_093406',
                    'Button_050256_448978',
                  ],
                  compName: 'page',
                  id: '675663',
                  pageJsonId: '537892',
                  compid: [
                    'Row_851124',
                    'Row_851_2274664',
                    'Table_8700198_532441',
                    'Row_851124_869442',
                    'Button_683498_52655',
                    'Button_026256_333762',
                    'StdUpload_4835215_093406',
                    'Button_050256_448978',
                  ],
                  visible: '',
                },
                line_number: 14,
              },
              {
                type: 'setDisable',
                dataId: 166392738103528860,
                options: {
                  compId: [
                    'Input_361479_887285_2150708_936504_923334_755169',
                    'Form_449441_9243547_908332_67909594',
                    'Input_361479_887285_3596799_872256_734178',
                    'Select_411778',
                    'DatePicker_8408173',
                    'TextArea_9188093',
                  ],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '075526',
                  disabled: 'true',
                  compid: [
                    'Input_361479_887285_2150708_936504_923334_755169',
                    'Form_449441_9243547_908332_67909594',
                    'Input_361479_887285_3596799_872256_734178',
                    'Select_411778',
                    'DatePicker_8408173',
                    'TextArea_9188093',
                  ],
                },
                line_number: 15,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse214.params = [] || [];
    CMDGenerator(eventDataifelse214, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    }); // console 169865277136700900
    console.log(state, '组件状态');

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_537892__"
    >
      <View
        className="View_View_537892_1_049877"
        name={'页面'}
        $$componentItem={{
          id: 'View_537892_1_049877',
          uid: 'View_537892_1_049877',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_537892_1_049877')}
        {...injectData}
      >
        <Divider
          name={'分割线'}
          orientation={'center'}
          type={'horizontal'}
          dashed={false}
          dividerText={'行业端口复通'}
          showTitle={true}
          $$componentItem={{
            id: 'Divider_52558_8209475',
            uid: 'Divider_52558_8209475',
            type: 'Divider',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ margin: '12px 0 12px 0', height: 'auto' }}
          ref={(r: any) => refs.setComponentRef(r, 'Divider_52558_8209475')}
          {...injectData}
        />
        <View
          className="View_View_6806553_078583"
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_6806553_078583',
            uid: 'View_6806553_078583',
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
          ref={(r: any) => refs.setComponentRef(r, 'View_6806553_078583')}
          {...injectData}
        >
          <HorizontalView
            name={'左右布局'}
            formItemIndex={0}
            $$componentItem={{
              id: 'HorizontalView_004602_024394',
              uid: 'HorizontalView_004602_024394',
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
              margin: '0px 0px 8px 0px',
            }}
            ref={(r: any) =>
              refs.setComponentRef(r, 'HorizontalView_004602_024394')
            }
            {...injectData}
          >
            <View
              className="View_View_339406_745623"
              name={'布局容器'}
              $$componentItem={{
                id: 'View_339406_745623',
                uid: 'View_339406_745623',
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
                margin: '0px 0px 0px 0px',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_339406_745623')}
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
                $$componentItem={{
                  id: 'Form_4311097_5142916_5246166_291064',
                  uid: 'Form_4311097_5142916_5246166_291064',
                  type: 'Form',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Form_4311097_5142916_5246166_291064')
                }
                {...injectData}
              >
                <Checkbox
                  name={'审批场景'}
                  titleTip={'text'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  text={'行业端口复通'}
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
                    id: 'Checkbox_882584_5289015_6659047_959402_947745',
                    uid: 'Checkbox_882584_5289015_6659047_959402_947745',
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
                      'Checkbox_882584_5289015_6659047_959402_947745',
                    )
                  }
                  {...injectData}
                />
                <View
                  className="View_View_859609_193133_743022"
                  name={'布局容器'}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_859609_193133_743022',
                    uid: 'View_859609_193133_743022',
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
                    refs.setComponentRef(r, 'View_859609_193133_743022')
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
                    id: 'Input_361479_887285_3596799_872256_734178',
                    uid: 'Input_361479_887285_3596799_872256_734178',
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
                      'Input_361479_887285_3596799_872256_734178',
                    )
                  }
                  {...injectData}
                />
              </Form>
            </View>
          </HorizontalView>
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
            $$componentItem={{
              id: 'Form_449441_9243547_908332_67909594',
              uid: 'Form_449441_9243547_908332_67909594',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            onValuesChange={(changedFieldName: any, changedValue: any) => {
              const eventDatasetDataSource175: any = [
                {
                  type: 'setDataSource',
                  dataId: 166849551364132600,
                  options: {
                    compId: 'page',
                    compName: 'page',
                    id: '513764',
                    pageJsonId: '537892',
                    dataSourceId: 166849547046806900,
                    dataSourceName: 'factorForm',
                    dataSourceRelType: 'custom',
                    dataSourceReloadFilter: [],
                    dataSourceSetValue: [
                      {
                        attrId: '6692',
                        code: 'urgencyGrade',
                        name: '紧急程度',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['urgencyGrade'],
                        _idpath: ['6692'],
                        value: {
                          type: [
                            'form',
                            'Form_449441_9243547_908332_67909594',
                            'getFieldsValue',
                          ],
                          code: 'urgencyGrade',
                        },
                      },
                      {
                        attrId: '159522',
                        code: 'groupName',
                        name: '集团名称',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['groupName'],
                        _idpath: ['159522'],
                        value: { type: [], code: '' },
                      },
                      {
                        attrId: '360853',
                        code: 'groupId',
                        name: '集团编码',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['groupId'],
                        _idpath: ['360853'],
                      },
                      {
                        attrId: '413571',
                        code: 'suggestFinishDate',
                        name: '建议完成时间',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['suggestFinishDate'],
                        _idpath: ['413571'],
                        value: {
                          type: [
                            'form',
                            'Form_449441_9243547_908332_67909594',
                            'getFieldsValue',
                          ],
                          code: 'suggestFinishDate',
                        },
                      },
                      {
                        attrId: '478961',
                        code: 'busiAccessNumber',
                        name: '业务接入号',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['busiAccessNumber'],
                        _idpath: ['478961'],
                      },
                      {
                        attrId: '778059',
                        code: 'reason',
                        name: '申请原因',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['reason'],
                        _idpath: ['778059'],
                        value: {
                          type: [
                            'form',
                            'Form_449441_9243547_908332_67909594',
                            'getFieldsValue',
                          ],
                          code: 'reason',
                        },
                      },
                      {
                        attrId: '790351',
                        code: 'basicAccessNumber',
                        name: '基本接入号',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['basicAccessNumber'],
                        _idpath: ['790351'],
                      },
                      {
                        attrId: '817056',
                        code: 'attachmentType',
                        name: '附件类型',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['attachmentType'],
                        _idpath: ['817056'],
                      },
                      {
                        attrId: '902568',
                        code: 'agentName',
                        name: '代理商名称',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['agentName'],
                        _idpath: ['902568'],
                      },
                      {
                        attrId: '983031',
                        code: 'devChannel',
                        name: '发展渠道',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['devChannel'],
                        _idpath: ['983031'],
                      },
                    ],
                    onlySetPatch: true,
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'customActionCode',
                      dataId: 167704854786810940,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '3914943',
                        pageJsonId: '537892',
                        actionTitle: '',
                        code: 'function main(data,state,success,fail){var attrList=[];var obj=data.factorForm;for(var key in obj){attrList.push({"attrCode":key,"attrName":"","attrValue":obj[key]})}data.sceneSubmit.attrList=attrList;success(attrList)};',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'callParentCustomFunc',
                          dataId: 167704854786854180,
                          options: {
                            compId: 'callParentCustomFunc',
                            compName: 'system',
                            id: '058555',
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
              eventDatasetDataSource175.params =
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
                eventDatasetDataSource175,
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
              refs.setComponentRef(r, 'Form_449441_9243547_908332_67909594')
            }
            {...injectData}
          >
            <Select
              name={'紧急程度'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              filter={'none'}
              classification={'default'}
              attr={{}}
              placeholder={'请选择紧急程度'}
              fieldName={'urgencyGrade'}
              formItemIndex={0}
              value={data?.factorForm?.urgencyGrade}
              $$componentItem={{
                id: 'Select_411778',
                uid: 'Select_411778',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Select_411778')}
              {...injectData}
            />
            <DatePicker
              name={'建议完成时间'}
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
              placeholder={'请选择完成日期'}
              pickerType={'DatePicker'}
              customTip={''}
              formItemIndex={1}
              fieldName={'suggestFinishDate'}
              value={data?.factorForm?.suggestFinishDate}
              $$componentItem={{
                id: 'DatePicker_8408173',
                uid: 'DatePicker_8408173',
                type: 'DatePicker',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              defaultValue={undefined}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'DatePicker_8408173')}
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
              formItemIndex={2}
              fieldName={'reason'}
              value={data?.factorForm?.reason}
              $$componentItem={{
                id: 'TextArea_9188093',
                uid: 'TextArea_9188093',
                type: 'TextArea',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'TextArea_9188093')}
              {...injectData}
            />
          </Form>
          <View
            className="View_View_278839_258589"
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_278839_258589',
              uid: 'View_278839_258589',
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
            ref={(r: any) => refs.setComponentRef(r, 'View_278839_258589')}
            {...injectData}
          >
            <Button
              name={'添加'}
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
                id: 'Button_683498_52655',
                uid: 'Button_683498_52655',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ width: 'fit-content', margin: '0px 0px 0px 0px' }}
              onClick={(e: any) => {
                const eventDatashowCustomModal194: any = [
                  {
                    type: 'showCustomModal',
                    dataId: 169864883530294880,
                    options: {
                      compId: 'showCustomModal',
                      compName: 'page',
                      id: '560302',
                      pageJsonId: '537892',
                      modalname: '/industryPortReopen',
                      pageId: '1036170946836533248',
                      modalPath: '/industryPortReopen',
                      paramsObj: {
                        staffCode: '$state.staffCode$',
                        orderNbr: '$state.fileInstNbr$',
                        catalogCode: '$state.catalogCode$',
                      },
                      paramsObjKeyValueMap: {
                        staffCode: '$state.staffCode$',
                        orderNbr: '$state.fileInstNbr$',
                        catalogCode: '$state.catalogCode$',
                      },
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'setDataSource',
                        dataId: 169865474617818980,
                        shielding: true,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '043807',
                          pageJsonId: '537892',
                          dataSourceId: 169864701493756640,
                          dataSourceName: 'groupInfoList',
                          dataSourceRelType: 'custom',
                          dataSourceSetValue: [
                            {
                              attrId: '763516',
                              code: 'groupId',
                              name: '集团编码',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: false,
                              value: {
                                type: ['context', '$okData_560302$'],
                                code: 'groupId',
                              },
                              _codePath: ['groupId'],
                              _idpath: ['763516'],
                            },
                            {
                              attrId: '976473',
                              code: 'groupName',
                              name: '集团名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: false,
                              value: {
                                type: ['context', '$okData_560302$'],
                                code: 'groupName',
                              },
                              _codePath: ['groupName'],
                              _idpath: ['976473'],
                            },
                            {
                              attrId: '321953',
                              code: 'devChannel',
                              name: '发展渠道',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: false,
                              value: {
                                type: ['context', '$okData_560302$'],
                                code: 'devChannel',
                              },
                              _codePath: ['devChannel'],
                              _idpath: ['321953'],
                            },
                            {
                              attrId: '313289',
                              code: 'agentName',
                              name: '代理商名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: false,
                              value: {
                                type: ['context', '$okData_560302$'],
                                code: 'agentName',
                              },
                              _codePath: ['agentName'],
                              _idpath: ['313289'],
                            },
                            {
                              attrId: '3122904',
                              code: 'basicAccessNumber',
                              name: '基本接入号',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: false,
                              value: {
                                type: ['context', '$okData_560302$'],
                                code: 'basicAccessNumber',
                              },
                              _codePath: ['basicAccessNumber'],
                              _idpath: ['3122904'],
                            },
                            {
                              attrId: '0694526',
                              code: 'busiAccessNumber',
                              name: '业务接入号',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: false,
                              value: {
                                type: ['context', '$okData_560302$'],
                                code: 'busiAccessNumber',
                              },
                              _codePath: ['busiAccessNumber'],
                              _idpath: ['0694526'],
                            },
                            {
                              attrId: '149064',
                              code: 'devChannelName',
                              name: '发展渠道',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: false,
                              _codePath: ['devChannelName'],
                              _idpath: ['149064'],
                              value: {
                                type: ['context', '$okData_560302$'],
                                code: 'devChannelName',
                              },
                            },
                            {
                              attrId: '843119',
                              code: 'rowId',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: false,
                              _codePath: ['rowId'],
                              _idpath: ['843119'],
                              value: {
                                type: ['context', '$okData_560302$'],
                                code: 'rowId',
                              },
                            },
                          ],
                          operateType: 0,
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
                        dataId: 169865576432146240,
                        shielding: true,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '9421363',
                          pageJsonId: '537892',
                          value: ['$okData_560302$'],
                        },
                        line_number: 3,
                      },
                      {
                        type: 'customActionCode',
                        dataId: 169871877306846200,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '424289',
                          pageJsonId: '537892',
                          code: 'function main(data,state,success,fail){console.log(okData_560302);data.groupInfoList.push(okData_560302);console.log(data.groupInfoList);var instList=[];for(var key in okData_560302){if(key!="rowId"){instList.push({"attrCode":key,"attrName":"","attrValue":okData_560302[key]})}}var instObj={"instCode":okData_560302.rowId,"instAttrList":instList};if(data.sceneSubmit.instList!=undefined&&data.sceneSubmit.instList.length>0){data.sceneSubmit.instList.push(instObj)}else{var instList=[];instList.push(instObj);data.sceneSubmit.instList=instList}success()};',
                        },
                        line_number: 4,
                        callback1: [
                          {
                            type: 'setDataSource',
                            dataId: 169871901363329540,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '647802',
                              pageJsonId: '537892',
                              dataSourceId: 169864701493756640,
                              dataSourceName: 'groupInfoList',
                              dataSourceRelType: 'custom',
                              dataSourceSetValue: [
                                {
                                  attrId: '763516',
                                  code: 'groupId',
                                  name: '集团编码',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                },
                                {
                                  attrId: '976473',
                                  code: 'groupName',
                                  name: '集团名称',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                },
                                {
                                  attrId: '321953',
                                  code: 'devChannel',
                                  name: '发展渠道',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                },
                                {
                                  attrId: '313289',
                                  code: 'agentName',
                                  name: '代理商名称',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                },
                                {
                                  attrId: '3122904',
                                  code: 'basicAccessNumber',
                                  name: '基本接入号',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                },
                                {
                                  attrId: '0694526',
                                  code: 'busiAccessNumber',
                                  name: '业务接入号',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                },
                                {
                                  attrId: '149064',
                                  code: 'devChannelName',
                                  name: '发展渠道',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                },
                                {
                                  attrId: '843119',
                                  code: 'rowId',
                                  name: '属性',
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
                            callback1: [],
                            callback2: [],
                          },
                          {
                            type: 'callParentCustomFunc',
                            dataId: 169871903852191650,
                            options: {
                              compId: 'callParentCustomFunc',
                              compName: 'system',
                              id: '2689474',
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
                eventDatashowCustomModal194.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatashowCustomModal194,
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
              ref={(r: any) => refs.setComponentRef(r, 'Button_683498_52655')}
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
              type={'default'}
              hasIcon={false}
              $$componentItem={{
                id: 'Button_026256_333762',
                uid: 'Button_026256_333762',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ width: 'fit-content', margin: '0px 8px 0px 8px' }}
              onClick={(e: any) => {
                const eventDatagetTableSelectedKey67: any = [
                  {
                    type: 'getTableSelectedKey',
                    dataId: 167703466754520900,
                    options: {
                      compId: 'Table_8700198_532441',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Table',
                      id: '4565446',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 167703467032000770,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '512405',
                          pageJsonId: '537892',
                          code: 'function main(data,state,success,fail){var groupInfoList=data.groupInfoList;var sel=selectedRowKeys_4565446;var res=[];var instList=[];console.log(sel);if(sel!=undefined&&sel.length>0){groupInfoList.forEach(function(v){var exit=sel.findIndex(function(item){console.log(item+"======"+v.rowId);return item===v.rowId});console.log(exit);if(exit===-1){res.push(v)}});data.groupInfoList=res;data.sceneSubmit.instList.forEach(function(v){var exit=sel.findIndex(function(item){return item===v.instCode});if(exit===-1){instList.push(v)}});data.sceneSubmit.instList=instList}console.log(res);success()};',
                        },
                        line_number: 2,
                        callback1: [
                          {
                            type: 'setDataSource',
                            dataId: 167703467032064030,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '365047',
                              pageJsonId: '537892',
                              dataSourceId: 169864701493756640,
                              dataSourceName: 'groupInfoList',
                              dataSourceRelType: 'custom',
                              dataSourceSetValue: [
                                {
                                  attrId: '763516',
                                  code: 'groupId',
                                  name: '集团编码',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                },
                                {
                                  attrId: '976473',
                                  code: 'groupName',
                                  name: '集团名称',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                },
                                {
                                  attrId: '321953',
                                  code: 'devChannel',
                                  name: '发展渠道',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                },
                                {
                                  attrId: '313289',
                                  code: 'agentName',
                                  name: '代理商名称',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                },
                                {
                                  attrId: '3122904',
                                  code: 'basicAccessNumber',
                                  name: '基本接入号',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                },
                                {
                                  attrId: '0694526',
                                  code: 'busiAccessNumber',
                                  name: '业务接入号',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                },
                                {
                                  attrId: '149064',
                                  code: 'devChannelName',
                                  name: '发展渠道',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                },
                                {
                                  attrId: '843119',
                                  code: 'rowId',
                                  name: '属性',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                },
                              ],
                              operateType: 1,
                              onlySetPatch: true,
                              otherObjectArrayOptions: {},
                              newData: '$data_512405$',
                              targetDataSourcePaths: [],
                            },
                            line_number: 3,
                            callback1: [],
                            callback2: [],
                          },
                          {
                            type: 'callParentCustomFunc',
                            dataId: 167703467032059740,
                            options: {
                              compId: 'callParentCustomFunc',
                              compName: 'system',
                              id: '7123794',
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
                eventDatagetTableSelectedKey67.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatagetTableSelectedKey67,
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
              ref={(r: any) => refs.setComponentRef(r, 'Button_026256_333762')}
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
                id: 'StdUpload_4835215_093406',
                uid: 'StdUpload_4835215_093406',
                type: 'StdUpload',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
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
                const eventDatasetLoading199: any = [
                  {
                    type: 'setLoading',
                    dataId: 167929452823603840,
                    options: {
                      compId: 'Table_8700198_532441',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Table',
                      id: '1218389',
                      loading: true,
                    },
                    line_number: 1,
                  },
                ];
                eventDatasetLoading199.params =
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
                  eventDatasetLoading199,
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
                const eventDataapiRequest755: any = [
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
                          dataKey: '144156_header',
                        },
                        {
                          code: 'path',
                          name: '请求路径参数',
                          attrType: 'object',
                          _id: 'path',
                          compType: 'Input',
                          parents: [],
                          id: 'path',
                          dataKey: '144156_path',
                        },
                        {
                          code: 'query',
                          name: 'URL 参数',
                          attrType: 'object',
                          _id: 'query',
                          compType: 'Input',
                          parents: [],
                          id: 'query',
                          dataKey: '144156_query',
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
                              dataKey: '144156_body.fileCode',
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
                              dataKey: '144156_body.sceneCode',
                              value: {
                                type: ['customize'],
                                code: 'CLS_JC_0003_0001',
                              },
                            },
                          ],
                          _id: 'body',
                          compType: 'Input',
                          parents: [],
                          id: 'body',
                          dataKey: '144156_body',
                        },
                      ],
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
                              manualValue: '-1',
                            },
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
                                dataId: 167642820700162530,
                                children: [
                                  {
                                    dataName: 'callback',
                                    dataId: 167642820701894620,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 167929151859223500,
                                        children: [
                                          {
                                            dataName: 'callback',
                                            dataId: 167929151859235070,
                                            children: [
                                              {
                                                dataName: 'action',
                                                dataId: 167929219427401950,
                                                children: [
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 167929219427437760,
                                                    children: [],
                                                    value: 'callback1',
                                                    params: [],
                                                    elseIfs: [],
                                                  },
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 167929219427426370,
                                                    children: [],
                                                    value: 'callback2',
                                                    params: [],
                                                    elseIfs: [],
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
                                                  id: '6587707',
                                                  pageJsonId: '537892',
                                                  dataSourceId: 167703044822071140,
                                                  dataSourceName:
                                                    'memberInfoList',
                                                  dataSourceRelType: 'custom',
                                                  dataSourceReloadFilter: [],
                                                  dataSourceSetValue: [
                                                    {
                                                      attrId: '811695',
                                                      code: 'msisdn',
                                                      name: '手机号码',
                                                      type: 'string',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                    },
                                                    {
                                                      attrId: '4595515',
                                                      code: 'city',
                                                      name: '所属地市',
                                                      type: 'string',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                    },
                                                    {
                                                      attrId: '17945308',
                                                      code: 'area',
                                                      name: '所属区县',
                                                      type: 'string',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                    },
                                                    {
                                                      attrId: '489059',
                                                      code: 'cityName',
                                                      name: '所属地市',
                                                      type: 'string',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                    },
                                                    {
                                                      attrId: '325747',
                                                      code: 'areaName',
                                                      name: '所属区县',
                                                      type: 'string',
                                                      initialData: {
                                                        type: 'static',
                                                      },
                                                    },
                                                    {
                                                      attrId: '670195',
                                                      code: 'rowId',
                                                      name: '属性',
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
                                                elseIfs: [],
                                                line_number: 7,
                                              },
                                              {
                                                dataName: 'action',
                                                dataId: 167929217301026720,
                                                children: [
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 167929217301012580,
                                                    children: [],
                                                    value: 'callback1',
                                                    params: [],
                                                    elseIfs: [],
                                                  },
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 167929217301044740,
                                                    children: [],
                                                    value: 'callback2',
                                                    params: [],
                                                    elseIfs: [],
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
                                                  id: '293174',
                                                  pageJsonId: '537892',
                                                  pathname:
                                                    '/auditOrderPrepare',
                                                  pageId: '884045146848604160',
                                                  customFuncName: 'getFactor',
                                                  customFuncParams:
                                                    '$data.sceneSubmit$',
                                                },
                                                actionObjId:
                                                  'callParentCustomFunc',
                                                actionObjName: 'system',
                                                value: 'callParentCustomFunc',
                                                elseIfs: [],
                                                line_number: 8,
                                              },
                                              {
                                                dataName: 'action',
                                                dataId: 16792922812187448,
                                                children: [],
                                                todoOptions: ['valueArray'],
                                                options: {
                                                  compId: 'debug',
                                                  compName: 'system',
                                                  id: '960271',
                                                  pageJsonId: '537892',
                                                  value: [
                                                    '构造完后的data.sceneSubmit',
                                                    '$data_921116$',
                                                  ],
                                                },
                                                actionObjId: 'debug',
                                                actionObjName: 'system',
                                                value: 'console',
                                                elseIfs: [],
                                                line_number: 9,
                                              },
                                            ],
                                            value: 'callback1',
                                            params: [],
                                            elseIfs: [],
                                          },
                                          {
                                            dataName: 'callback',
                                            dataId: 167929151859267330,
                                            children: [],
                                            value: 'callback2',
                                            params: [],
                                            elseIfs: [],
                                          },
                                        ],
                                        todoOptions: [
                                          'actionTitle',
                                          'editorCode',
                                        ],
                                        options: {
                                          compId: 'customActionCode',
                                          compName: 'page',
                                          id: '921116',
                                          pageJsonId: '537892',
                                          code: 'function main(data,state,success,fail){function buildAttrList(attrItem){var attrList=[];for(var key in attrItem){if(key=="rowId"){continue}attrList.push({"attrCode":key,"attrValue":attrItem[key],"attrName":""})}return attrList}var _data_=data_016273,attrItem=_data_.attrItem,res=_data_.res;var attrList=buildAttrList(attrItem);var instList=[];for(var i=0;i<res.length;i++){var list=buildAttrList(res[i]);var instObj={"instCode":res[i].rowId,"instAttrList":list};instList.push(instObj)}data.sceneSubmit.attrList=attrList;data.sceneSubmit.instList=instList;success(data.sceneSubmit)};',
                                          actionTitle: '构造报文',
                                        },
                                        actionObjId: 'customActionCode',
                                        actionObjName: 'page',
                                        value: 'customActionCode',
                                        elseIfs: [],
                                        line_number: 6,
                                      },
                                    ],
                                    value: 'callback1',
                                    params: [],
                                    elseIfs: [],
                                  },
                                  {
                                    dataName: 'callback',
                                    dataId: 167642820701820350,
                                    children: [],
                                    value: 'callback2',
                                    params: [],
                                    elseIfs: [],
                                  },
                                ],
                                todoOptions: ['actionTitle', 'editorCode'],
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '016273',
                                  pageJsonId: '537892',
                                  code: 'function main(data,state,success,fail){data.MemberInfo=reply_144156.resultData;var res=reply_144156.resultData;var firstData=res[0];var attrItem={openTime:firstData["openTime"],expireDate:firstData["expireDate"],applyType:firstData["applyType"],applyTypeName:firstData["applyTypeName"],ensureType:firstData["ensureType"],ensureTypeName:firstData["ensureTypeName"]};delete firstData["openTime"];delete firstData["expireDate"];delete firstData["applyType"];delete firstData["applyTypeName"];delete firstData["ensureType"];delete firstData["ensureTypeName"];res[0]=firstData;console.log("=======\\u7ED3\\u679C\\u2460======",attrItem);console.log("=======\\u7ED3\\u679C\\u2461======",res);data.factorForm=attrItem;data.memberInfoList=res;success({attrItem:attrItem,res:res})};',
                                  actionTitle: '处理返回结果',
                                },
                                actionObjId: 'customActionCode',
                                actionObjName: 'page',
                                value: 'customActionCode',
                                elseIfs: [],
                                line_number: 5,
                              },
                            ],
                            condition: [],
                            elseIfs: [],
                            callback: [
                              {
                                type: 'customActionCode',
                                dataId: 167642820700162530,
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '016273',
                                  pageJsonId: '537892',
                                  code: 'function main(data,state,success,fail){data.MemberInfo=reply_144156.resultData;var res=reply_144156.resultData;var firstData=res[0];var attrItem={openTime:firstData["openTime"],expireDate:firstData["expireDate"],applyType:firstData["applyType"],applyTypeName:firstData["applyTypeName"],ensureType:firstData["ensureType"],ensureTypeName:firstData["ensureTypeName"]};delete firstData["openTime"];delete firstData["expireDate"];delete firstData["applyType"];delete firstData["applyTypeName"];delete firstData["ensureType"];delete firstData["ensureTypeName"];res[0]=firstData;console.log("=======\\u7ED3\\u679C\\u2460======",attrItem);console.log("=======\\u7ED3\\u679C\\u2461======",res);data.factorForm=attrItem;data.memberInfoList=res;success({attrItem:attrItem,res:res})};',
                                  actionTitle: '处理返回结果',
                                },
                                line_number: 5,
                                callback1: [
                                  {
                                    type: 'customActionCode',
                                    dataId: 167929151859223500,
                                    options: {
                                      compId: 'customActionCode',
                                      compName: 'page',
                                      id: '921116',
                                      pageJsonId: '537892',
                                      code: 'function main(data,state,success,fail){function buildAttrList(attrItem){var attrList=[];for(var key in attrItem){if(key=="rowId"){continue}attrList.push({"attrCode":key,"attrValue":attrItem[key],"attrName":""})}return attrList}var _data_=data_016273,attrItem=_data_.attrItem,res=_data_.res;var attrList=buildAttrList(attrItem);var instList=[];for(var i=0;i<res.length;i++){var list=buildAttrList(res[i]);var instObj={"instCode":res[i].rowId,"instAttrList":list};instList.push(instObj)}data.sceneSubmit.attrList=attrList;data.sceneSubmit.instList=instList;success(data.sceneSubmit)};',
                                      actionTitle: '构造报文',
                                    },
                                    line_number: 6,
                                    callback1: [
                                      {
                                        type: 'setDataSource',
                                        dataId: 167929219427401950,
                                        options: {
                                          compId: 'setDataSource',
                                          compName: 'page',
                                          id: '6587707',
                                          pageJsonId: '537892',
                                          dataSourceId: 167703044822071140,
                                          dataSourceName: 'memberInfoList',
                                          dataSourceRelType: 'custom',
                                          dataSourceReloadFilter: [],
                                          dataSourceSetValue: [
                                            {
                                              attrId: '811695',
                                              code: 'msisdn',
                                              name: '手机号码',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                            },
                                            {
                                              attrId: '4595515',
                                              code: 'city',
                                              name: '所属地市',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                            },
                                            {
                                              attrId: '17945308',
                                              code: 'area',
                                              name: '所属区县',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                            },
                                            {
                                              attrId: '489059',
                                              code: 'cityName',
                                              name: '所属地市',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                            },
                                            {
                                              attrId: '325747',
                                              code: 'areaName',
                                              name: '所属区县',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                            },
                                            {
                                              attrId: '670195',
                                              code: 'rowId',
                                              name: '属性',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                            },
                                          ],
                                          operateType: 1,
                                          onlySetPatch: true,
                                          otherObjectArrayOptions: {},
                                        },
                                        line_number: 7,
                                        callback1: [],
                                        callback2: [],
                                      },
                                      {
                                        type: 'callParentCustomFunc',
                                        dataId: 167929217301026720,
                                        options: {
                                          compId: 'callParentCustomFunc',
                                          compName: 'system',
                                          id: '293174',
                                          pageJsonId: '537892',
                                          pathname: '/auditOrderPrepare',
                                          pageId: '884045146848604160',
                                          customFuncName: 'getFactor',
                                          customFuncParams:
                                            '$data.sceneSubmit$',
                                        },
                                        line_number: 8,
                                        callback1: [],
                                        callback2: [],
                                      },
                                      {
                                        type: 'console',
                                        dataId: 16792922812187448,
                                        options: {
                                          compId: 'debug',
                                          compName: 'system',
                                          id: '960271',
                                          pageJsonId: '537892',
                                          value: [
                                            '构造完后的data.sceneSubmit',
                                            '$data_921116$',
                                          ],
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
                          },
                        ],
                        line_number: 3,
                        callback1: [
                          {
                            type: 'showMessage',
                            dataId: 167642820036345500,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '17912',
                              pageJsonId: '537892',
                              type: 'error',
                              value: '$reply_144156.resultMsg$',
                            },
                            line_number: 4,
                          },
                        ],
                      },
                      {
                        type: 'setLoading',
                        dataId: 167929454043976350,
                        options: {
                          compId: 'Table_8700198_532441',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Table',
                          id: '761178',
                          loading: false,
                        },
                        line_number: 10,
                      },
                    ],
                    callback2: [
                      {
                        type: 'setLoading',
                        dataId: 167929454843596900,
                        options: {
                          compId: 'Table_8700198_532441',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Table',
                          id: '689179',
                          loading: false,
                        },
                        line_number: 11,
                      },
                    ],
                  },
                ];
                eventDataapiRequest755.params =
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
                  eventDataapiRequest755,
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
                const eventDatacustomActionCode651: any = [
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
                eventDatacustomActionCode651.params =
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
                  eventDatacustomActionCode651,
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
              ref={(r: any) =>
                refs.setComponentRef(r, 'StdUpload_4835215_093406')
              }
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
                id: 'Button_050256_448978',
                uid: 'Button_050256_448978',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              style={{ width: 'fit-content', margin: '0px 0px 0px 8px' }}
              onClick={(e: any) => {
                const eventDataapiRequest756: any = [
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
                          code: 'header',
                          name: '请求头参数',
                          attrType: 'object',
                          _id: 'header',
                          compType: 'Input',
                          parents: [],
                          id: 'header',
                          dataKey: '263949_header',
                        },
                        {
                          code: 'path',
                          name: '请求路径参数',
                          attrType: 'object',
                          _id: 'path',
                          compType: 'Input',
                          parents: [],
                          id: 'path',
                          dataKey: '263949_path',
                        },
                        {
                          code: 'query',
                          name: 'URL 参数',
                          attrType: 'object',
                          _id: 'query',
                          compType: 'Input',
                          parents: [],
                          id: 'query',
                          dataKey: '263949_query',
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
                              dataKey: '263949_body.sceneCode',
                              value: {
                                type: ['customize'],
                                code: 'CLS_JC_0003_0001',
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
                              dataKey: '263949_body.fileTemplateName',
                              value: {
                                type: ['customize'],
                                code: '红名单新增退出导入模板.xlsx',
                              },
                            },
                          ],
                          _id: 'body',
                          compType: 'Input',
                          parents: [],
                          id: 'body',
                          dataKey: '263949_body',
                        },
                      ],
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'downloadByFileId',
                        dataId: 167357642142749150,
                        options: {
                          compId: 'downloadByFileId',
                          compName: 'system',
                          id: '065914',
                          pageJsonId: '537892',
                          data: '$reply_263949.resultData.fileId$',
                        },
                        line_number: 2,
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDataapiRequest756.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDataapiRequest756, { e }, 'apiRequest', {
                  id: 'apiRequest',
                  name: 'apiRequest',
                  type: 'apiRequest',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Button_050256_448978')}
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
                id: 'Button_050256_034475_19183654_42432',
                uid: 'Button_050256_034475_19183654_42432',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              style={{ width: 'fit-content', margin: '0px 0px 0px 8px' }}
              onClick={(e: any) => {
                const eventDatavalidateCurrentForm77: any = [
                  {
                    type: 'validateCurrentForm',
                    dataId: 167929394715085700,
                    options: {
                      compId: 'Form_449441_9243547_908332_67909594',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Form',
                      id: '536089',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 167929395516785760,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '456058',
                          pageJsonId: '537892',
                          code: 'function main(data,state,success,fail){var arr1=[];var arr2=[];var memberInfo=data.memberInfoList;var applyTypeMap=new Map;applyTypeMap.set("1001","\\u65B0\\u589E");applyTypeMap.set("1002","\\u9000\\u51FA");var ensureTypeMap=new Map;ensureTypeMap.set("1001","\\u957F\\u671F\\u4FDD\\u969C");ensureTypeMap.set("1002","\\u4E34\\u65F6\\u4FDD\\u969C");for(var i=0;i<memberInfo.length;i++){var info=memberInfo[i];if(i==0){Object.assign(info,data.factorForm);info["applyTypeName"]=applyTypeMap.get(info["applyType"]);info["ensureTypeName"]=ensureTypeMap.get(info["ensureType"])}{arr2.push({"name":"\\u5F00\\u901A\\u65F6\\u95F4","value":info.openTime});arr2.push({"name":"\\u6709\\u6548\\u671F\\u81F3","value":info.expireDate});arr2.push({"name":"\\u7533\\u8BF7\\u7C7B\\u578B","value":info.applyTypeName});arr2.push({"name":"\\u4FDD\\u969C\\u7C7B\\u578B","value":info.ensureTypeName});arr2.push({"name":"\\u624B\\u673A\\u53F7\\u7801","value":info.msisdn});arr2.push({"name":"\\u6240\\u5C5E\\u5730\\u5E02","value":info.cityName});arr2.push({"name":"\\u6240\\u5C5E\\u533A\\u53BF","value":info.areaName})}arr1.push(arr2);arr2=[]}if(arr1.length>0){success(JSON.stringify(arr1))}else{fail()}};',
                        },
                        line_number: 2,
                        callback1: [
                          {
                            type: 'apiRequest',
                            dataId: 167929395516713120,
                            options: {
                              compId: 'apiRequest',
                              compName: 'system',
                              id: '4428404',
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
                                        type: ['context', '$data_456058$'],
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
                            line_number: 3,
                            callback1: [
                              {
                                type: 'downloadByFileId',
                                dataId: 167929395516711170,
                                options: {
                                  compId: 'downloadByFileId',
                                  compName: 'system',
                                  id: '547743',
                                  pageJsonId: '537892',
                                  data: '$reply_4428404.resultData.fileId$',
                                },
                                line_number: 4,
                              },
                              {
                                type: 'console',
                                dataId: 167929395516717060,
                                options: {
                                  compId: 'debug',
                                  compName: 'system',
                                  id: '6155667',
                                  pageJsonId: '537892',
                                  value: [
                                    '文件导出成功回调值：',
                                    '$reply_4428404$',
                                  ],
                                },
                                line_number: 5,
                              },
                            ],
                            callback2: [],
                          },
                        ],
                        callback2: [
                          {
                            type: 'showMessage',
                            dataId: 167929395516771260,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '289796',
                              pageJsonId: '537892',
                              type: 'info',
                              value: '导出数据不能为空！',
                            },
                            line_number: 6,
                          },
                        ],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatavalidateCurrentForm77.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatavalidateCurrentForm77,
                  { e },
                  'validateCurrentForm',
                  {
                    id: 'validateCurrentForm',
                    name: 'validateCurrentForm',
                    type: 'validateCurrentForm',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Button_050256_034475_19183654_42432')
              }
              {...injectData}
            />
          </View>
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
                className: '',
                id: '951027',
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
                id: '988883',
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
                title: '发展渠道',
                key: 'devChannelName',
                dataIndex: 'devChannelName',
                className: 'divider',
                id: '743377',
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
                title: '代理商名称',
                key: 'agentName',
                dataIndex: 'agentName',
                className: 'divider',
                id: '738918',
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
                title: '基本接入号',
                key: 'basicAccessNumber',
                dataIndex: 'basicAccessNumber',
                className: 'divider',
                id: '078245',
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
                title: '业务接入号',
                key: 'busiAccessNumber',
                dataIndex: 'busiAccessNumber',
                className: 'divider',
                id: '3046736',
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
                id: '4708314',
                title: 'rowId',
                dataIndex: 'rowId',
                hiddenRule: true,
                key: '4708314',
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
            fixedAction={true}
            rowSelection={{ type: 'checkbox' }}
            showHead={false}
            showTotal={true}
            showSizeChanger={true}
            showQuickJumper={false}
            pageSizeOptions={'[5,10,20]'}
            dataSource={data?.groupInfoList}
            fieldName={'data.MemberInfo.length'}
            total={data?.groupInfoList?.length}
            hiddenAction={false}
            rowKey={'rowId'}
            rowActions={[
              {
                title: '详情',
                iconPos: 'left',
                icon: { theme: 'outlined', type: 'file-search' },
                type: 'detail',
                id: '374419',
                checked: true,
              },
              {
                title: '编辑',
                iconPos: 'left',
                icon: { theme: 'outlined', type: 'edit' },
                type: 'edit',
                id: '935112',
                checked: true,
              },
            ]}
            extend={[]}
            dataSourceFromDataSourceConfig={'data.groupInfoList'}
            $$componentItem={{
              id: 'Table_8700198_532441',
              uid: 'Table_8700198_532441',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ margin: '10px 0px 10px 0px' }}
            onRowDetail={(rowId: any, row: any, index: any) => {
              const eventDatashowCustomModal195: any = [
                {
                  type: 'showCustomModal',
                  dataId: 166849945852987620,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '614514',
                    pageJsonId: '537892',
                    modalname: '/industryPortReopen',
                    pageId: '1036170946836533248',
                    modalPath: '/industryPortReopen',
                    paramsObj: {
                      memberInfo: '$row$',
                      redObj: '$row$',
                      sceneCode: 'V',
                      bizData: '$row$',
                      staffCode: '$state.staffCode$',
                      orderNbr: '$state.fileInstNbr$',
                      catalogCode: '$state.catalogCode$',
                    },
                    paramsObjKeyValueMap: {
                      memberInfo: '$row$',
                      redObj: '$row$',
                      sceneCode: 'V',
                      bizData: '$row$',
                      staffCode: '$state.staffCode$',
                      orderNbr: '$state.fileInstNbr$',
                      catalogCode: '$state.catalogCode$',
                    },
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatashowCustomModal195.params =
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
                eventDatashowCustomModal195,
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
            onRowEdit={(rowId: any, row: any, index: any) => {
              const eventDatashowCustomModal196: any = [
                {
                  type: 'showCustomModal',
                  dataId: 166849948424829380,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '5147087',
                    pageJsonId: '537892',
                    modalname: '/industryPortReopen',
                    pageId: '1036170946836533248',
                    modalPath: '/industryPortReopen',
                    paramsObj: {
                      memberInfo: '$row$',
                      redObj: '$row$',
                      catalogCode: '$state.catalogCode$',
                      orderNbr: '$state.fileInstNbr$',
                      staffCode: '$state.staffCode$',
                      bizData: '$row$',
                      sceneCode: 'M',
                    },
                    paramsObjKeyValueMap: {
                      memberInfo: '$row$',
                      redObj: '$row$',
                      catalogCode: '$state.catalogCode$',
                      orderNbr: '$state.fileInstNbr$',
                      staffCode: '$state.staffCode$',
                      bizData: '$row$',
                      sceneCode: 'M',
                    },
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'customActionCode',
                      dataId: 166850078016736670,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '132224',
                        pageJsonId: '537892',
                        code: 'function main(data,state,success,fail){console.log(data.groupInfoList,"groupInfoList");var arr=[];for(var i=0;i<data.groupInfoList.length;i++){if(data.groupInfoList[i].rowId!=okData_5147087.rowId){arr.push(data.groupInfoList[i])}}data.groupInfoList=arr;data.groupInfoList.push(okData_5147087);console.log(data.groupInfoList,"groupInfoList");var instList=[];for(var key in okData_5147087){if(key!="rowId"){instList.push({"attrCode":key,"attrName":"","attrValue":okData_5147087[key]})}}console.log(instList,"instList");var instObj={"instCode":okData_5147087.rowId,"instAttrList":instList};var arr2=[];for(var i=0;i<data.sceneSubmit.instList.length;i++){if(data.sceneSubmit.instList[i].instCode!=okData_5147087.rowId){arr2.push(data.sceneSubmit.instList[i])}}data.sceneSubmit.instList=arr2;data.sceneSubmit.instList.push(instObj);success()};',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'setDataSource',
                          dataId: 166850109260961200,
                          options: {
                            compId: 'setDataSource',
                            compName: 'page',
                            id: '47134',
                            pageJsonId: '537892',
                            dataSourceId: 167703044822071140,
                            dataSourceName: 'memberInfoList',
                            dataSourceRelType: 'custom',
                            dataSourceReloadFilter: [],
                            dataSourceSetValue: [
                              {
                                attrId: '811695',
                                code: 'msisdn',
                                name: '手机号码',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '4595515',
                                code: 'city',
                                name: '所属地市',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '17945308',
                                code: 'area',
                                name: '所属区县',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '489059',
                                code: 'cityName',
                                name: '所属地市',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '325747',
                                code: 'areaName',
                                name: '所属区县',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '670195',
                                code: 'rowId',
                                name: '属性',
                                type: 'string',
                                initialData: { type: 'static' },
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
                          dataId: 167703624679334940,
                          options: {
                            compId: 'callParentCustomFunc',
                            compName: 'system',
                            id: '1970823',
                            pageJsonId: '537892',
                            pathname: '/auditOrderSubmit',
                            pageId: '884057477263503360',
                            customFuncName: 'getFactor',
                            customFuncParams: '$data.sceneSubmit$',
                            modalPath: '/auditOrderSubmit',
                          },
                          line_number: 4,
                          callback1: [],
                          callback2: [],
                        },
                      ],
                      callback2: [],
                    },
                    {
                      type: 'customActionCode',
                      dataId: 169865910890245860,
                      shielding: true,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '495511',
                        pageJsonId: '537892',
                        code: 'function _createForOfIteratorHelper(o,allowArrayLike){var it=typeof Symbol!=="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(!it){if(Array.isArray(o)||(it=_unsupportedIterableToArray(o))||allowArrayLike&&o&&typeof o.length==="number"){if(it)o=it;var i=0;var F=function F(){};return{s:F,n:function n(){if(i>=o.length)return{done:true};return{done:false,value:o[i++]}},e:function e(_e){throw _e},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var normalCompletion=true,didErr=false,err;return{s:function s(){it=it.call(o)},n:function n(){var step=it.next();normalCompletion=step.done;return step},e:function e(_e2){didErr=true;err=_e2},f:function f(){try{if(!normalCompletion&&it["return"]!=null)it["return"]()}finally{if(didErr)throw err}}}}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i]}return arr2}function main(data,state,success,fail){console.log(data.groupInfoList,"groupInfoList");var arr=[];var _iterator=_createForOfIteratorHelper(data.groupInfoList),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var item=_step.value;if(item.rowId!=okData_5147087.rowId){arr.push(item)}}}catch(err){_iterator.e(err)}finally{_iterator.f()}data.groupInfoList=arr;data.groupInfoList.push(okData_5147087);console.log(data.groupInfoList,"groupInfoList");success()};',
                      },
                      line_number: 5,
                      callback1: [],
                      callback2: [],
                    },
                    {
                      type: 'console',
                      dataId: 169865922134075680,
                      shielding: true,
                      options: {
                        compId: 'debug',
                        compName: 'system',
                        id: '56715',
                        pageJsonId: '537892',
                        value: ['$okData_5147087$'],
                      },
                      line_number: 6,
                    },
                    {
                      type: 'customActionCode',
                      dataId: 169871754316115900,
                      shielding: true,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '563865',
                        pageJsonId: '537892',
                        code: 'function _createForOfIteratorHelper(o,allowArrayLike){var it=typeof Symbol!=="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(!it){if(Array.isArray(o)||(it=_unsupportedIterableToArray(o))||allowArrayLike&&o&&typeof o.length==="number"){if(it)o=it;var i=0;var F=function F(){};return{s:F,n:function n(){if(i>=o.length)return{done:true};return{done:false,value:o[i++]}},e:function e(_e){throw _e},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var normalCompletion=true,didErr=false,err;return{s:function s(){it=it.call(o)},n:function n(){var step=it.next();normalCompletion=step.done;return step},e:function e(_e2){didErr=true;err=_e2},f:function f(){try{if(!normalCompletion&&it["return"]!=null)it["return"]()}finally{if(didErr)throw err}}}}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i]}return arr2}function main(data,state,success,fail){console.log(data.groupInfoList,"groupInfoList");console.log(okData_5147087);var arr=[];var _iterator=_createForOfIteratorHelper(data.groupInfoList),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){item=_step.value;if(item.rowId!=okData_5147087.rowId){arr.push(item)}}}catch(err){_iterator.e(err)}finally{_iterator.f()}console.log(arr)};',
                      },
                      line_number: 7,
                      callback1: [],
                      callback2: [],
                    },
                  ],
                  callback2: [],
                },
              ];
              eventDatashowCustomModal196.params =
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
                eventDatashowCustomModal196,
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
            ref={(r: any) => refs.setComponentRef(r, 'Table_8700198_532441')}
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
                className: '',
                id: '906703',
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
                id: '672712',
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
                title: '发展渠道',
                key: 'devChannelName',
                dataIndex: 'devChannelName',
                className: 'divider',
                id: '8205435',
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
                title: '代理商名称',
                key: 'agentName',
                dataIndex: 'agentName',
                className: 'divider',
                id: '709605',
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
                title: '基本接入号',
                key: 'basicAccessNumber',
                dataIndex: 'basicAccessNumber',
                className: 'divider',
                id: '1827298',
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
                title: '业务接入号',
                key: 'busiAccessNumber',
                dataIndex: 'busiAccessNumber',
                className: 'divider',
                id: '071851',
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
            fixedAction={true}
            rowSelection={{ type: 'checkbox' }}
            showHead={false}
            showTotal={true}
            showSizeChanger={true}
            showQuickJumper={false}
            pageSizeOptions={'[5,10,20]'}
            dataSource={data?.groupInfoList}
            fieldName={'data.MemberInfo.length'}
            total={data?.groupInfoList?.length}
            hiddenAction={false}
            rowKey={'rowId'}
            rowActions={[]}
            extend={[]}
            dataSourceFromDataSourceConfig={'data.groupInfoList'}
            $$componentItem={{
              id: 'Table_576505',
              uid: 'Table_576505',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={false}
            readOnly={false}
            style={{ margin: '10px 0px 10px 0px' }}
            onRowDetail={(rowId: any, row: any, index: any) => {
              const eventDatashowCustomModal197: any = [
                {
                  type: 'showCustomModal',
                  dataId: 166849945852987620,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '614514',
                    pageJsonId: '537892',
                    modalname: '/redMemberInfo',
                    pageId: '945510835929104384',
                    modalPath: '/redMemberInfo',
                    paramsObj: {
                      memberInfo: '$row$',
                      redObj: '$row$',
                      sceneCode: 'V',
                    },
                    paramsObjKeyValueMap: {
                      memberInfo: '$row$',
                      redObj: '$row$',
                      sceneCode: 'V',
                    },
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatashowCustomModal197.params =
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
                eventDatashowCustomModal197,
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
            onRowEdit={(rowId: any, row: any, index: any) => {
              const eventDatashowCustomModal198: any = [
                {
                  type: 'showCustomModal',
                  dataId: 166849948424829380,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '5147087',
                    pageJsonId: '537892',
                    modalname: '/redMemberInfo',
                    pageId: '945510835929104384',
                    modalPath: '/redMemberInfo',
                    paramsObj: {
                      memberInfo: '$row$',
                      redObj: '$row$',
                      catalogCode: '$state.catalogCode$',
                    },
                    paramsObjKeyValueMap: {
                      memberInfo: '$row$',
                      redObj: '$row$',
                      catalogCode: '$state.catalogCode$',
                    },
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'customActionCode',
                      dataId: 166850078016736670,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '132224',
                        pageJsonId: '537892',
                        code: 'function main(data,state,success,fail){data.memberInfoList=data.memberInfoList.filter(function(v){return v.rowId!=okData_5147087.rowId});data.memberInfoList.push(okData_5147087);var instList=[];for(var key in okData_5147087){if(key!="rowId"){instList.push({"attrCode":key,"attrName":"","attrValue":okData_5147087[key]})}}var instObj={"instCode":okData_5147087.rowId,"instAttrList":instList};data.sceneSubmit.instList=data.sceneSubmit.instList.filter(function(v){return v.instCode!=okData_5147087.rowId});data.sceneSubmit.instList.push(instObj);success()};',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'setDataSource',
                          dataId: 166850109260961200,
                          options: {
                            compId: 'setDataSource',
                            compName: 'page',
                            id: '47134',
                            pageJsonId: '537892',
                            dataSourceId: 167703044822071140,
                            dataSourceName: 'memberInfoList',
                            dataSourceRelType: 'custom',
                            dataSourceReloadFilter: [],
                            dataSourceSetValue: [
                              {
                                attrId: '811695',
                                code: 'msisdn',
                                name: '手机号码',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '4595515',
                                code: 'city',
                                name: '所属地市',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '17945308',
                                code: 'area',
                                name: '所属区县',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '489059',
                                code: 'cityName',
                                name: '所属地市',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '325747',
                                code: 'areaName',
                                name: '所属区县',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '670195',
                                code: 'rowId',
                                name: '属性',
                                type: 'string',
                                initialData: { type: 'static' },
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
                          dataId: 167703624679334940,
                          options: {
                            compId: 'callParentCustomFunc',
                            compName: 'system',
                            id: '1970823',
                            pageJsonId: '537892',
                            pathname: '/auditOrderSubmit',
                            pageId: '884057477263503360',
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
              eventDatashowCustomModal198.params =
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
                eventDatashowCustomModal198,
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
            ref={(r: any) => refs.setComponentRef(r, 'Table_576505')}
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
          ref={(r: any) => refs.setComponentRef(r, 'BOFramer_574328')}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(ClsCp_0003_0011$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { staffCode: '', fileInstNbr: '' },
});
