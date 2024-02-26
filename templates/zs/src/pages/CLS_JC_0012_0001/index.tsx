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
  DatePicker,
  TextArea,
  Select,
  StdUpload,
  Table,
} from '@/components/factory';

import BusiComp0521965 from '@/components/BusiComp0521965';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '940083910747631616';
const ClsJc_0012_0001$$Page: React.FC<PageProps> = ({
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
  const fileUpload = (options_516618: any) => {
    const eventDatacustomActionCode206: any = [
      {
        type: 'customActionCode',
        dataId: 167715541951663900,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '717763',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=options_516618;success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'callParentCustomFunc',
            dataId: 167715541951624130,
            options: {
              compId: 'callParentCustomFunc',
              compName: 'system',
              id: '4656844',
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
    eventDatacustomActionCode206.params =
      [
        {
          title: '事件入参',
          name: 'options_516618',
          value: '$options_516618$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode206,
      { options_516618 },
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
    const eventDataapiRequest570: any = [
      {
        type: 'apiRequest',
        dataId: 167576056351082940,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '438028',
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
            dataId: 167576056351030980,
            options: {
              compId: 'Input_690228_5400337_5332635',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '559133',
              data: '$reply_438028?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValueCode',
            },
            line_number: 2,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest570.params = [] || [];
    CMDGenerator(eventDataapiRequest570, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest571: any = [
      {
        type: 'apiRequest',
        dataId: 167576058132514200,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '560827',
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
            dataId: 167576058132584580,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '5372463',
              pageJsonId: '537892',
              dataSourceId: 167573938629575680,
              dataSourceName: 'sceneSubmit',
              dataSourceRelType: 'custom',
              dataSourceReloadFilter: [],
              dataSourceSetValue: [
                {
                  attrId: '827948',
                  code: 'catalogCode',
                  name: '类目编码',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$reply_560827?.resultData.catalogCode$'],
                    hideAttr: true,
                    code: '',
                  },
                },
                {
                  attrId: '655525',
                  code: 'approveGrade',
                  name: '审批等级',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '90487',
                  code: 'attrList',
                  name: '要素',
                  type: 'objectArray',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '112333',
                  code: 'fileInfo',
                  name: '附件',
                  type: 'objectArray',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '672676',
                  code: 'catalogItemCode',
                  name: '类目项编码',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '3452713',
                  code: 'catalogItemSubType',
                  name: '类目项子类型',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: [
                      'context',
                      '$reply_560827?.resultData.catalogItemSubType$',
                    ],
                    hideAttr: true,
                    code: '',
                  },
                },
                {
                  attrId: '1556908',
                  code: 'childCatalogCode',
                  name: '子类目编码',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: [
                      'context',
                      '$reply_560827?.resultData.childCatalogCode$',
                    ],
                    hideAttr: true,
                    code: '',
                  },
                },
                {
                  attrId: '114587',
                  code: 'parentCatalogCode',
                  name: '上级类目编码',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: [
                      'context',
                      '$reply_560827?.resultData.parentCatalogCode$',
                    ],
                    hideAttr: true,
                    code: '',
                  },
                },
                {
                  attrId: '583705',
                  code: 'parentCatalogItemCode',
                  name: '上级类目项编码',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: [
                      'context',
                      '$reply_560827?.resultData.parentCatalogItemCode$',
                    ],
                    hideAttr: true,
                    code: '',
                  },
                },
                {
                  attrId: '79484',
                  code: 'childCatalogDesc',
                  name: '子类目项描述',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: [
                      'context',
                      '$reply_560827?.resultData.childCatalogDesc$',
                    ],
                    hideAttr: true,
                    code: '',
                  },
                },
                {
                  attrId: '6584844',
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
            line_number: 4,
            callback1: [
              {
                type: 'callParentCustomFunc',
                dataId: 167576058132501150,
                options: {
                  compId: 'callParentCustomFunc',
                  compName: 'system',
                  id: '927477',
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
    eventDataapiRequest571.params = [] || [];
    CMDGenerator(eventDataapiRequest571, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse284: any = [
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
        dataId: 167576059312917020,
        elseIfs: [],
        line_number: 6,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 167576059312931000,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '584613',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var item=state.itemList;data.sceneSubmit=item;var factorForm={};var attrList=item.attrList;if(attrList!=undefined&&attrList.length>0){for(var i=0;i<attrList.length;i++){factorForm[attrList[i].attrCode]=attrList[i].attrValue}}data.factorForm=factorForm;data.sceneSubmit.approveGrade=item.approveGrade;data.sceneSubmit.approveGradeName=item.approveGradeName;success(factorForm)};',
              actionTitle: '设置界面初始化值',
            },
            line_number: 7,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 167576059312967170,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '111822',
                  pageJsonId: '537892',
                  dataSourceId: 167573960536522270,
                  dataSourceName: 'factorForm',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '949164',
                      code: 'applyReason',
                      name: '申请原因',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: [
                          'form',
                          'Form_449441_2604934_614357',
                          'getFieldsValue',
                        ],
                        code: 'applyReason',
                      },
                    },
                    {
                      attrId: '530126',
                      code: 'applyGridConnectionNumber',
                      name: '申请网格通工号',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: [
                          'form',
                          'Form_449441_2604934_614357',
                          'getFieldsValue',
                        ],
                        code: 'applyGridConnectionNumber',
                      },
                    },
                    {
                      attrId: '0149812',
                      code: 'whiteListStartTime',
                      name: '白名单开始日期',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: [
                          'form',
                          'Form_449441_2604934_614357',
                          'getFieldsValue',
                        ],
                        code: 'whiteListStartTime',
                      },
                    },
                    {
                      attrId: '474259',
                      code: 'whiteListEndTime',
                      name: '白名单结束日期',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: [
                          'form',
                          'Form_449441_2604934_614357',
                          'getFieldsValue',
                        ],
                        code: 'whiteListEndTime',
                      },
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
                dataId: 167576059312991700,
                options: {
                  compId: ['Input_361479_887285_2150708_923492_98259415'],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '252918',
                  value: '$state.itemList.approveGradeName$',
                  valueList: {
                    Input_361479_887285_2150708_923492_98259415:
                      '$state.itemList.approveGradeName$',
                  },
                  compid: ['Input_361479_887285_2150708_923492_98259415'],
                },
                line_number: 9,
                callback1: [],
              },
            ],
            callback2: [],
          },
          {
            type: 'customActionCode',
            dataId: 167576059312978880,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '380386',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var item=state.itemList;data.sceneSubmit=item;success(item.fileInfo)};',
            },
            line_number: 10,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 167576059312941860,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '4853577',
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
                  newData: '$data_380386$',
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
                    condId: '501796',
                    options: { context: '$data_380386$', operate: 'empty' },
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
                    condId: '105542',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 167576059312987740,
                elseIfs: [],
                line_number: 12,
                callback1: [
                  {
                    type: 'setVisible',
                    dataId: 167576059312966720,
                    options: {
                      compId: 'Table_5369494',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Table',
                      id: '288846',
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
            dataId: 167576059312976670,
            elseIfs: [],
            line_number: 14,
            callback1: [
              {
                type: 'setVisible',
                dataId: 167576059312978560,
                options: {
                  compId: [
                    'Input_361479_887285_2150708_923492',
                    'Input_361479_887285_2150708_923492_98259415',
                  ],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '712687',
                  visible: 'true',
                  compid: [
                    'Input_361479_887285_2150708_923492',
                    'Input_361479_887285_2150708_923492_98259415',
                  ],
                },
                line_number: 15,
              },
              {
                type: 'setDisable',
                dataId: 167576059312991330,
                options: {
                  compId: [
                    'Form_449441_2604934',
                    'Form_449441_2604934_614357',
                    'Input_361479_887285_2150708_923492_98259415',
                  ],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Form',
                  id: '1067777',
                  disabled: 'true',
                  compid: [
                    'Form_449441_2604934',
                    'Form_449441_2604934_614357',
                    'Input_361479_887285_2150708_923492_98259415',
                  ],
                },
                line_number: 16,
              },
              {
                type: 'sysSetVisible',
                dataId: 167576059312963140,
                options: {
                  compId: [
                    'Row_851124',
                    'Form_395851_1727917_9692158_9612234_1000722_434628_511208_810317_323621_176164_1762145',
                  ],
                  compName: 'page',
                  id: '9930454',
                  pageJsonId: '537892',
                  compid: [
                    'Row_851124',
                    'Form_395851_1727917_9692158_9612234_1000722_434628_511208_810317_323621_176164_1762145',
                  ],
                  visible: '',
                },
                line_number: 17,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse284.params = [] || [];
    CMDGenerator(eventDataifelse284, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDataifelse285: any = [
      {
        type: 'ifelse',
        shielding: true,
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
        dataId: 167715511245666240,
        elseIfs: [],
        line_number: 18,
        callback1: [
          {
            type: 'setDisable',
            dataId: 167715511245790700,
            shielding: true,
            options: {
              compId: [
                'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_639813',
                'Form_449441_1900385_965292_804694_0429677_280477_612369_661693',
                'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_639813_445106',
                'Form_449441_1900385_965292_804694_0429677_280477_612369_661693_1391522',
                'Form_449441_2604934_614357',
                'Input_690228_5400337_5332635_569139',
                'StdUpload_6230546_867413_48478_456747',
                'Form_395851_1727917_005435_53693',
              ],
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Input',
              id: '7852824',
              disabled: 'true',
              compid: [
                'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_639813',
                'Form_449441_1900385_965292_804694_0429677_280477_612369_661693',
                'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_639813_445106',
                'Form_449441_1900385_965292_804694_0429677_280477_612369_661693_1391522',
                'Form_449441_2604934_614357',
                'Input_690228_5400337_5332635_569139',
                'StdUpload_6230546_867413_48478_456747',
                'Form_395851_1727917_005435_53693',
              ],
            },
            line_number: 19,
          },
          {
            type: 'sysSetVisible',
            dataId: 167715576929137300,
            shielding: true,
            options: {
              compId: [
                'Form_395851_1727917_9692158_9612234_1000722_434628_511208_810317_323621_176164_1762145',
              ],
              compName: 'page',
              id: '843854',
              pageJsonId: '6620457',
              visible: '',
              compid: [
                'Form_395851_1727917_9692158_9612234_1000722_434628_511208_810317_323621_176164_1762145',
              ],
            },
            line_number: 20,
          },
        ],
      },
    ];
    eventDataifelse285.params = [] || [];
    CMDGenerator(eventDataifelse285, {}, 'ifelse', {
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
      className="__CustomClass_6620457__"
    >
      <View
        name={'页面'}
        visible={true}
        $$componentItem={{
          id: 'View_537892_1_0196438',
          uid: 'View_537892_1_0196438',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_537892_1_0196438')}
        {...injectData}
      >
        <Divider
          name={'分割线'}
          orientation={'center'}
          type={'horizontal'}
          visible={true}
          dashed={false}
          dividerText={'省内异地白名单'}
          $$componentItem={{
            id: 'Divider_6651058_9609896',
            uid: 'Divider_6651058_9609896',
            type: 'Divider',
            ...componentItem,
          }}
          style={{ margin: '12px 0 12px 0', height: '0A' }}
          ref={(r: any) => refs.setComponentRef(r, 'Divider_6651058_9609896')}
          {...injectData}
        />
        <View
          name={'布局容器'}
          visible={true}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_6806553_8058562',
            uid: 'View_6806553_8058562',
            type: 'View',
            ...componentItem,
          }}
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_6806553_8058562')}
          {...injectData}
        >
          <HorizontalView
            name={'左右布局'}
            visible={true}
            formItemIndex={0}
            $$componentItem={{
              id: 'HorizontalView_004602_698859',
              uid: 'HorizontalView_004602_698859',
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
            ref={(r: any) =>
              refs.setComponentRef(r, 'HorizontalView_004602_698859')
            }
            {...injectData}
          >
            <View
              name={'布局容器'}
              visible={true}
              $$componentItem={{
                id: 'View_339406_2087875',
                uid: 'View_339406_2087875',
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
              ref={(r: any) => refs.setComponentRef(r, 'View_339406_2087875')}
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
                  id: 'Form_4311097_9385662_0413915_5274814',
                  uid: 'Form_4311097_9385662_0413915_5274814',
                  type: 'Form',
                  ...componentItem,
                }}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) =>
                  refs.setComponentRef(
                    r,
                    'Form_4311097_9385662_0413915_5274814',
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
                  text={'省内异地白名单'}
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
                    id: 'Checkbox_882584_5289015_934499_6069114_916609',
                    uid: 'Checkbox_882584_5289015_934499_6069114_916609',
                    type: 'Checkbox',
                    ...componentItem,
                  }}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    refs.setComponentRef(
                      r,
                      'Checkbox_882584_5289015_934499_6069114_916609',
                    )
                  }
                  {...injectData}
                />
                <View
                  name={'布局容器'}
                  visible={true}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_5097806_1317393',
                    uid: 'View_5097806_1317393',
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
                    refs.setComponentRef(r, 'View_5097806_1317393')
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
                    id: 'Input_361479_887285_2150708_923492_98259415',
                    uid: 'Input_361479_887285_2150708_923492_98259415',
                    type: 'Input',
                    ...componentItem,
                  }}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    refs.setComponentRef(
                      r,
                      'Input_361479_887285_2150708_923492_98259415',
                    )
                  }
                  {...injectData}
                />
              </Form>
            </View>
          </HorizontalView>
          <Form
            name={'表单'}
            colSpan={24}
            labelCol={8}
            wrapperCol={16}
            colon={true}
            layout={'horizontal'}
            labelAlign={'right'}
            visible={true}
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
              id: 'Form_449441_2604934_614357',
              uid: 'Form_449441_2604934_614357',
              type: 'Form',
              ...componentItem,
            }}
            style={{ padding: '0px 0px 0px 0px', margin: '0px 150px 0px 0px' }}
            onValuesChange={(changedFieldName: any, changedValue: any) => {
              const eventDatasetDataSource265: any = [
                {
                  type: 'setDataSource',
                  dataId: 167574018276473570,
                  options: {
                    compId: 'page',
                    compName: 'page',
                    id: '3626835',
                    pageJsonId: '6620457',
                    dataSourceId: 167573960536522270,
                    dataSourceName: 'factorForm',
                    dataSourceRelType: 'custom',
                    dataSourceReloadFilter: [],
                    dataSourceSetValue: [
                      {
                        attrId: '949164',
                        code: 'applyReason',
                        name: '申请原因',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_2604934_614357',
                            'getFieldsValue',
                          ],
                          code: 'applyReason',
                        },
                      },
                      {
                        attrId: '530126',
                        code: 'applyGridConnectionNumber',
                        name: '申请网格通工号',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_2604934_614357',
                            'getFieldsValue',
                          ],
                          code: 'applyGridConnectionNumber',
                        },
                      },
                      {
                        attrId: '0149812',
                        code: 'whiteListStartTime',
                        name: '白名单开始日期',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_2604934_614357',
                            'getFieldsValue',
                          ],
                          code: 'whiteListStartTime',
                        },
                      },
                      {
                        attrId: '474259',
                        code: 'whiteListEndTime',
                        name: '白名单结束日期',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_2604934_614357',
                            'getFieldsValue',
                          ],
                          code: 'whiteListEndTime',
                        },
                      },
                    ],
                    onlySetPatch: true,
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'customActionCode',
                      dataId: 167575975430820260,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '96271',
                        pageJsonId: '537892',
                        actionTitle: '',
                        code: 'function main(data,state,success,fail){var attrList=[];var obj=data.factorForm;for(var key in obj){attrList.push({"attrCode":key,"attrName":"","attrValue":obj[key]})}data.sceneSubmit.attrList=attrList;success(attrList)};',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'callParentCustomFunc',
                          dataId: 167575975430871420,
                          options: {
                            compId: 'callParentCustomFunc',
                            compName: 'system',
                            id: '54018',
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
              eventDatasetDataSource265.params =
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
                eventDatasetDataSource265,
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
              refs.setComponentRef(r, 'Form_449441_2604934_614357')
            }
            {...injectData}
          >
            <Input
              name={'申请网格通工号'}
              size={'default'}
              selfSpan={''}
              labelCol={'3'}
              wrapperCol={'10'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              fieldName={'applyGridConnectionNumber'}
              value={data?.factorForm?.applyGridConnectionNumber}
              formItemIndex={0}
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
                id: 'Input_applyGridConnectionNumber_037071',
                uid: 'Input_applyGridConnectionNumber_037071',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(
                  r,
                  'Input_applyGridConnectionNumber_037071',
                )
              }
              {...injectData}
            />
            <DatePicker
              name={'白名单开始日期'}
              timeMode={'date'}
              format={'YYYY-MM-DD'}
              size={'default'}
              selfSpan={''}
              labelCol={'3'}
              wrapperCol={'10'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              limitRange={'no'}
              startTime={''}
              endTime={''}
              placeholder={'请选择日期'}
              pickerType={'DatePicker'}
              customTip={''}
              fieldName={'whiteListStartTime'}
              value={data?.factorForm?.whiteListStartTime}
              formItemIndex={1}
              $$componentItem={{
                id: 'Input_whiteListStartTime_02903',
                uid: 'Input_whiteListStartTime_02903',
                type: 'DatePicker',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              defaultValue={{}}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_whiteListStartTime_02903')
              }
              {...injectData}
            />
            <DatePicker
              name={'白名单结束日期'}
              timeMode={'date'}
              format={'YYYY-MM-DD'}
              size={'default'}
              selfSpan={''}
              labelCol={'3'}
              wrapperCol={'10'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              limitRange={'no'}
              startTime={''}
              endTime={''}
              placeholder={'请选择日期'}
              pickerType={'DatePicker'}
              customTip={''}
              fieldName={'whiteListEndTime'}
              value={data?.factorForm?.whiteListEndTime}
              formItemIndex={2}
              $$componentItem={{
                id: 'Input_whiteListEndTime_42131411',
                uid: 'Input_whiteListEndTime_42131411',
                type: 'DatePicker',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              defaultValue={{}}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_whiteListEndTime_42131411')
              }
              {...injectData}
            />
            <TextArea
              name={'申请原因'}
              selfSpan={24}
              labelCol={'3'}
              wrapperCol={'21'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              placeholder={'请输入'}
              fieldName={'applyReason'}
              value={data?.factorForm?.applyReason}
              formItemIndex={3}
              $$componentItem={{
                id: 'Input_applyReason_715318',
                uid: 'Input_applyReason_715318',
                type: 'TextArea',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_applyReason_715318')
              }
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
          ref={(r: any) => refs.setComponentRef(r, 'BOFramer_548427_874694')}
          {...injectData}
        />
        <View
          name={'布局容器'}
          visible={false}
          disabled={false}
          readOnly={false}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_4949093_2026766',
            uid: 'View_4949093_2026766',
            type: 'View',
            ...componentItem,
          }}
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_4949093_2026766')}
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
              id: 'Form_395851_1727917_9692158_9612234_1000722_434628_511208_810317_323621_176164_1762145',
              uid: 'Form_395851_1727917_9692158_9612234_1000722_434628_511208_810317_323621_176164_1762145',
              type: 'Form',
              ...componentItem,
            }}
            style={{ padding: '0px 0px 0px 0px', margin: '10px 0px 0px 0px' }}
            ref={(r: any) =>
              refs.setComponentRef(
                r,
                'Form_395851_1727917_9692158_9612234_1000722_434628_511208_810317_323621_176164_1762145',
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
                id: 'Input_690228_5400337_280051_232429_7501497_288005_8195412_48663836_035568_2132174_4924955',
                uid: 'Input_690228_5400337_280051_232429_7501497_288005_8195412_48663836_035568_2132174_4924955',
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
                  'Input_690228_5400337_280051_232429_7501497_288005_8195412_48663836_035568_2132174_4924955',
                )
              }
              {...injectData}
            />
            <View
              name={'布局容器'}
              visible={true}
              labelCol={8}
              wrapperCol={16}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_22346374_875512_926873_4359147_729981_339083_0134945_145611_9662925_280408_7978568',
                uid: 'View_22346374_875512_926873_4359147_729981_339083_0134945_145611_9662925_280408_7978568',
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
                  'View_22346374_875512_926873_4359147_729981_339083_0134945_145611_9662925_280408_7978568',
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
                  id: 'StdUpload_6230546_867413_538179_36057857_3505279_0434_242878_424019_831984_562591_0694885',
                  uid: 'StdUpload_6230546_867413_538179_36057857_3505279_0434_242878_424019_831984_562591_0694885',
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
                  const eventDatagetSelectedData431: any = [
                    {
                      type: 'getSelectedData',
                      dataId: 166519843675080320,
                      options: {
                        compId:
                          'Input_690228_5400337_280051_232429_7501497_288005_8195412_48663836_035568_2132174_4924955',
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
                            dataSourceId: 167702940007085220,
                            dataSourceName: 'feeInfo',
                            dataSourceRelType: 'custom',
                            dataSourceReloadFilter: [],
                            dataSourceSetValue: [
                              {
                                attrId: '989493',
                                code: 'orderType',
                                name: '类型',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '093277',
                                code: 'busiType',
                                name: '业务类型',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '558446',
                                code: 'busiTypeName',
                                name: '业务类型',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '044338',
                                code: 'orderTypeName',
                                name: '类型',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '429081',
                                code: 'testMonth',
                                name: '测试月数',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '397033',
                                code: 'testMonthName',
                                name: '测试月数',
                                type: 'string',
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
                  eventDatagetSelectedData431.params =
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
                    eventDatagetSelectedData431,
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
                  const eventDatacustomActionCode801: any = [
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
                  eventDatacustomActionCode801.params =
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
                    eventDatacustomActionCode801,
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
                    'StdUpload_6230546_867413_538179_36057857_3505279_0434_242878_424019_831984_562591_0694885',
                  )
                }
                {...injectData}
              />
            </View>
          </Form>
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
              id: 'Table_5369494_486586',
              uid: 'Table_5369494_486586',
              type: 'Table',
              ...componentItem,
            }}
            style={{ margin: '10px 0px 0px 0px' }}
            onRowDelete={(rowId: any, row: any, index: any) => {
              const eventDatacustomActionCode802: any = [
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
              eventDatacustomActionCode802.params =
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
                eventDatacustomActionCode802,
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
              const eventDatadownloadByFileId107: any = [
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
              eventDatadownloadByFileId107.params =
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
                eventDatadownloadByFileId107,
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
            ref={(r: any) => refs.setComponentRef(r, 'Table_5369494_486586')}
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(ClsJc_0012_0001$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
