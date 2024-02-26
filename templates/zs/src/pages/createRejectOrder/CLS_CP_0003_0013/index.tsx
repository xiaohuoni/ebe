// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  Divider,
  HorizontalView,
  Checkbox,
  Text,
  Form,
  Select,
  DatePicker,
  TextArea,
  Table,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import { styleInject } from '@/utils/styleInject';

import dataSource from './dataSource.json';

styleInject(
  '.__CustomClass_537892__ .Table_8700198_3717786 .custom-table-class .pcfactory-table-row .pcfactory-table-cell:last-child{max-width:400px;}',

  '537892',
);

const pageId = '1051414239773913088';
const CreateRejectOrderClsCp_0003_0013$$Page: React.FC<PageProps> = ({
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
    const eventDataapiRequest295: any = [
      {
        type: 'apiRequest',
        dataId: 169932078939439500,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '115742',
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
                      dataKey: '115742_root.body.catalogCode',
                      value: { type: ['customize'], code: 'CLS_CP_0003_0013' },
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
                      dataKey: '115742_root.body.attrCode',
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
                  dataKey: '115742_root.body',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-3',
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
                  dataKey: '115742_root.header',
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
                  dataKey: '115742_root.path',
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
                  dataKey: '115742_root.query',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '115742_root',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 169932084652971840,
            options: {
              compId: 'Select_1514685',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '038083',
              data: '$reply_115742?.resultData$',
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
    eventDataapiRequest295.params = [] || [];
    CMDGenerator(eventDataapiRequest295, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse157: any = [
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
        line_number: 3,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 166132449559169250,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '9981685',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var item=state.itemList;var factorForm={};var attrList=item.attrList;if(attrList!=undefined&&attrList.length>0){for(var i=0;i<attrList.length;i++){factorForm[attrList[i].attrCode]=attrList[i].attrValue}}data.factorForm=factorForm;data.sceneSubmit.approveGrade=item.approveGrade;data.sceneSubmit.approveGradeName=item.approveGradeName;data.sceneSubmit.instList=item.instList;data.sceneSubmit.attrList=item.attrList;var infoList=[];item.instList.forEach(function(v){var feeObj={};var instList=v.instAttrList;if(instList!=undefined&&instList.length>0){for(var i=0;i<instList.length;i++){feeObj[instList[i].attrCode]=instList[i].attrValue}feeObj.rowId=parseInt(v.instCode);infoList.push(feeObj)}});success(infoList)};',
              actionTitle: '设置界面初始化值',
            },
            line_number: 4,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 166305500105467000,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '013094',
                  pageJsonId: '537892',
                  dataSourceId: 169993114559322180,
                  dataSourceName: 'infoList',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      attrId: '906024',
                      code: 'agencyName',
                      name: '代理商名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['agencyName'],
                      _idpath: ['906024'],
                    },
                    {
                      attrId: '0346427',
                      code: 'majorNum',
                      name: '主码号',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['majorNum'],
                      _idpath: ['0346427'],
                    },
                    {
                      attrId: '494685',
                      code: 'applyRate',
                      name: '申请速率',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['applyRate'],
                      _idpath: ['494685'],
                    },
                    {
                      attrId: '238293',
                      code: 'linkNum',
                      name: '连接数',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['linkNum'],
                      _idpath: ['238293'],
                    },
                  ],
                  operateType: 3,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  newData: '$data_9981685$',
                  targetDataSourcePaths: [],
                },
                line_number: 5,
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
                line_number: 6,
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
            line_number: 7,
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
                line_number: 8,
                callback1: [],
                callback2: [],
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse157.params = [] || [];
    CMDGenerator(eventDataifelse157, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDatasetDisable47: any = [
      {
        type: 'setDisable',
        dataId: 170228342022293100,
        options: {
          compId:
            'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812',
          compLib: 'comm',
          pageJsonId: '537892',
          compName: 'Form',
          id: '844909',
          disabled: 'true',
        },
        line_number: 9,
      },
    ];
    eventDatasetDisable47.params = [] || [];
    CMDGenerator(eventDatasetDisable47, {}, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDataapiRequest296: any = [
      {
        type: 'apiRequest',
        dataId: 170228371694097760,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '895503',
          pageJsonId: '537892',
          sync: true,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryOneByDcSalesOrderFileInfo',
          _apiCode: 'qryOneByDcSalesOrderFileInfo',
          _source: 'rhin',
          _serviceId: '915178807448723456',
          _serviceTitle:
            '通过参数获取销售中心甩单归档表信息-lzs: qryOneByDcSalesOrderFileInfo',
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
              dataKey: '535255_header',
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
              dataKey: '535255_path',
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
              dataKey: '535255_query',
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
                  code: 'acceptanceSuccessCount',
                  attrType: 'field',
                  type: 'long',
                  mustFlag: 'F',
                  _id: 'body.acceptanceSuccessCount',
                  compType: 'Input',
                  name: 'acceptanceSuccessCount',
                  parents: ['root', 'body'],
                  id: 'body.acceptanceSuccessCount',
                  dataKey: '535255_body.acceptanceSuccessCount',
                  parentType: 'object',
                  parentKey: '0-3',
                  key: '0-3-0',
                },
                {
                  code: 'busiObjNbr',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.busiObjNbr',
                  compType: 'Input',
                  name: 'busiObjNbr',
                  parents: ['root', 'body'],
                  id: 'body.busiObjNbr',
                  dataKey: '535255_body.busiObjNbr',
                  value: { type: ['context', '$state.busiObjNbr$'], code: '' },
                  parentType: 'object',
                  parentKey: '0-3',
                  key: '0-3-1',
                },
                {
                  code: 'createDate',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.createDate',
                  compType: 'Input',
                  name: 'createDate',
                  parents: ['root', 'body'],
                  id: 'body.createDate',
                  dataKey: '535255_body.createDate',
                  parentType: 'object',
                  parentKey: '0-3',
                  key: '0-3-2',
                },
                {
                  code: 'createStaff',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.createStaff',
                  compType: 'Input',
                  name: 'createStaff',
                  parents: ['root', 'body'],
                  id: 'body.createStaff',
                  dataKey: '535255_body.createStaff',
                  parentType: 'object',
                  parentKey: '0-3',
                  key: '0-3-3',
                },
                {
                  code: 'salesNumber',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.salesNumber',
                  compType: 'Input',
                  name: 'salesNumber',
                  parents: ['root', 'body'],
                  id: 'body.salesNumber',
                  dataKey: '535255_body.salesNumber',
                  parentType: 'object',
                  parentKey: '0-3',
                  key: '0-3-4',
                },
                {
                  code: 'salesOrderFileId',
                  attrType: 'field',
                  type: 'long',
                  mustFlag: 'F',
                  _id: 'body.salesOrderFileId',
                  compType: 'Input',
                  name: 'salesOrderFileId',
                  parents: ['root', 'body'],
                  id: 'body.salesOrderFileId',
                  dataKey: '535255_body.salesOrderFileId',
                  parentType: 'object',
                  parentKey: '0-3',
                  key: '0-3-5',
                },
                {
                  code: 'sceneCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.sceneCode',
                  compType: 'Input',
                  name: 'sceneCode',
                  parents: ['root', 'body'],
                  id: 'body.sceneCode',
                  dataKey: '535255_body.sceneCode',
                  value: { type: ['context', '$state.sceneCode$'], code: '' },
                  parentType: 'object',
                  parentKey: '0-3',
                  key: '0-3-6',
                },
                {
                  code: 'updateDate',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.updateDate',
                  compType: 'Input',
                  name: 'updateDate',
                  parents: ['root', 'body'],
                  id: 'body.updateDate',
                  dataKey: '535255_body.updateDate',
                  parentType: 'object',
                  parentKey: '0-3',
                  key: '0-3-7',
                },
                {
                  code: 'updateStaff',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.updateStaff',
                  compType: 'Input',
                  name: 'updateStaff',
                  parents: ['root', 'body'],
                  id: 'body.updateStaff',
                  dataKey: '535255_body.updateStaff',
                  parentType: 'object',
                  parentKey: '0-3',
                  key: '0-3-8',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: ['root'],
              id: 'body',
              dataKey: '535255_body',
              parentType: 'object',
              parentKey: '0',
              key: '0-3',
            },
          ],
          _sourceName: '通过参数获取销售中心甩单归档表信息-lzs',
        },
        line_number: 10,
        callback1: [
          {
            type: 'ifelse',
            condition: [
              {
                condId: '2790316',
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$reply_895503?.resultCode$',
                  operate: '==',
                  manualValue: '0',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
              {
                options: {
                  context: '$reply_895503?.resultData$',
                  operate: 'notEmpty',
                },
                condId: '785758',
                connector: '&&',
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 170228371694024860,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 170228371694021250,
                children: [
                  {
                    dataName: 'action',
                    dataId: 170228483742999600,
                    children: [
                      {
                        dataName: 'callback',
                        dataId: 170228483742952960,
                        children: [],
                        value: 'callback1',
                        params: [],
                      },
                      {
                        dataName: 'callback',
                        dataId: 170228483742911230,
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
                      id: '2307477',
                      pageJsonId: '537892',
                      dataSourceId: 170228376863609380,
                      dataSourceName: 'pageData',
                      dataSourceRelType: 'custom',
                      dataSourceSetValue: [
                        {
                          attrId: '8775714',
                          code: 'fileCount',
                          name: '成功受理数',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          value: { type: ['customize'], code: '0' },
                        },
                        {
                          attrId: '1108763',
                          code: 'sceneCount',
                          name: '实例总数',
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
                    line_number: 13,
                  },
                ],
                condition: [],
                callback: [
                  {
                    type: 'setDataSource',
                    dataId: 170228483742999600,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '2307477',
                      pageJsonId: '537892',
                      dataSourceId: 170228376863609380,
                      dataSourceName: 'pageData',
                      dataSourceRelType: 'custom',
                      dataSourceSetValue: [
                        {
                          attrId: '8775714',
                          code: 'fileCount',
                          name: '成功受理数',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          value: { type: ['customize'], code: '0' },
                        },
                        {
                          attrId: '1108763',
                          code: 'sceneCount',
                          name: '实例总数',
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
                    line_number: 13,
                    callback1: [],
                    callback2: [],
                  },
                ],
              },
            ],
            line_number: 11,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 170228371694000740,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '492549',
                  pageJsonId: '537892',
                  dataSourceId: 170228376863609380,
                  dataSourceName: 'pageData',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      attrId: '8775714',
                      code: 'fileCount',
                      name: '成功受理数',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: [
                          'context',
                          '$reply_895503?.resultData.acceptanceSuccessCount$',
                        ],
                        hideAttr: true,
                        code: '',
                      },
                      _codePath: ['fileCount'],
                      _idpath: ['8775714'],
                    },
                    {
                      attrId: '1108763',
                      code: 'sceneCount',
                      name: '实例总数',
                      type: 'string',
                      initialData: { type: 'static', value: '999999' },
                      showInput: true,
                      _codePath: ['sceneCount'],
                      _idpath: ['1108763'],
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  targetDataSourcePaths: [],
                },
                line_number: 12,
                callback1: [],
                callback2: [],
              },
            ],
          },
        ],
        callback2: [
          {
            type: 'console',
            dataId: 170228371694017340,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '4752047',
              pageJsonId: '537892',
              value: ['失败失败'],
            },
            line_number: 14,
          },
        ],
      },
    ];
    eventDataapiRequest296.params = [] || [];
    CMDGenerator(eventDataapiRequest296, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_537892_1')}
        {...injectData}
      >
        <Divider
          name={'分割线'}
          orientation={'center'}
          type={'horizontal'}
          dashed={false}
          dividerText={'行业端口提速审批单'}
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
              name={'布局容器'}
              $$componentItem={{
                id: 'View_006963',
                uid: 'View_006963',
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
              ref={(r: any) => refs.setComponentRef(r, 'View_006963')}
              {...injectData}
            >
              <HorizontalView
                name={'左右布局'}
                $$componentItem={{
                  id: 'HorizontalView_294507',
                  uid: 'HorizontalView_294507',
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
                  margin: '0px 0px 0px 0px',
                }}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'HorizontalView_294507')
                }
                {...injectData}
              >
                <View
                  name={'布局容器'}
                  $$componentItem={{
                    id: 'View_810657',
                    uid: 'View_810657',
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
                  }}
                  ref={(r: any) => refs.setComponentRef(r, 'View_810657')}
                  {...injectData}
                >
                  <Checkbox
                    name={'审批场景'}
                    titleTip={'text'}
                    tipLocation={'after'}
                    tipPlacement={'top'}
                    text={'行业端口提速审批单'}
                    selfSpan={8}
                    labelCol={8}
                    wrapperCol={16}
                    formItemIndex={0}
                    fieldName={'aduitClass'}
                    defaultChecked={false}
                    tipIcon={{
                      theme: 'outlined',
                      type: 'question-circle',
                      isIconFont: false,
                    }}
                    tipContent={data?.sceneSubmit?.childCatalogDesc}
                    $$componentItem={{
                      id: 'Checkbox_867267',
                      uid: 'Checkbox_867267',
                      type: 'Checkbox',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    onChange={(e: any) => {
                      const eventDatacustomActionCode528: any = [
                        {
                          type: 'customActionCode',
                          dataId: 167091818482917060,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '70258',
                            pageJsonId: '537892',
                            code: 'function main(data,state,success,fail){success(data.pageData.fileCount==data.pageData.sceneCount)};',
                          },
                          line_number: 1,
                          callback1: [
                            {
                              type: 'ifelse',
                              condition: [
                                {
                                  condId: '09204',
                                  options: {
                                    context: '$data_70258$',
                                    operate: '== true',
                                  },
                                  conditionType: 'checkContextValue',
                                  objType: 'system',
                                  objId: 'sys',
                                },
                              ],
                              dataId: 167091820673104830,
                              elseIfs: [
                                {
                                  dataName: 'elseIf',
                                  dataId: 167091822645114780,
                                  children: [
                                    {
                                      dataName: 'condition',
                                      dataId: 167091823198976930,
                                      children: [
                                        {
                                          dataName: 'action',
                                          dataId: 167091823198907740,
                                          children: [
                                            {
                                              dataName: 'callback',
                                              dataId: 167091823198904260,
                                              children: [],
                                              value: 'callback1',
                                              params: [],
                                            },
                                            {
                                              dataName: 'callback',
                                              dataId: 16709182319897972,
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
                                            id: '5911387',
                                            pageJsonId: '537892',
                                            pathname:
                                              '/faqishuaidantanchuang7958',
                                            pageId: '908274270111293440',
                                            customFuncName: 'pushSceneCodeList',
                                            customFuncParams:
                                              '$state.sceneCode$',
                                            modalPath:
                                              '/faqishuaidantanchuang7958',
                                          },
                                          actionObjId: 'callParentCustomFunc',
                                          actionObjName: 'system',
                                          value: 'callParentCustomFunc',
                                          line_number: 6,
                                        },
                                      ],
                                      elseIfs: [
                                        {
                                          dataName: 'elseIf',
                                          dataId: 167091823198965900,
                                          children: [
                                            {
                                              dataName: 'action',
                                              dataId: 167091823198906460,
                                              children: [
                                                {
                                                  dataName: 'callback',
                                                  dataId: 167091823198921760,
                                                  children: [],
                                                  value: 'callback1',
                                                  params: [],
                                                },
                                                {
                                                  dataName: 'callback',
                                                  dataId: 167091823198917400,
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
                                                id: '949857',
                                                pageJsonId: '537892',
                                                pathname:
                                                  '/faqishuaidantanchuang7958',
                                                pageId: '908274270111293440',
                                                customFuncName:
                                                  'delScenceCodeList',
                                                customFuncParams:
                                                  '$state.sceneCode$',
                                              },
                                              actionObjId:
                                                'callParentCustomFunc',
                                              actionObjName: 'system',
                                              value: 'callParentCustomFunc',
                                              line_number: 7,
                                            },
                                          ],
                                          condition: [],
                                          callback: [
                                            {
                                              type: 'callParentCustomFunc',
                                              dataId: 167091823198906460,
                                              options: {
                                                compId: 'callParentCustomFunc',
                                                compName: 'system',
                                                id: '949857',
                                                pageJsonId: '537892',
                                                pathname:
                                                  '/faqishuaidantanchuang7958',
                                                pageId: '908274270111293440',
                                                customFuncName:
                                                  'delScenceCodeList',
                                                customFuncParams:
                                                  '$state.sceneCode$',
                                              },
                                              line_number: 7,
                                              callback1: [],
                                              callback2: [],
                                            },
                                          ],
                                        },
                                      ],
                                      condition: [
                                        {
                                          condId: '712658',
                                          options: {
                                            context: '$e.target.checked$',
                                            operate: '== true',
                                          },
                                          conditionType: 'checkContextValue',
                                          objType: 'system',
                                          objId: 'sys',
                                        },
                                      ],
                                      desc: '审批场景新增/删减数组',
                                      line_number: 5,
                                    },
                                  ],
                                  condition: [],
                                  callback: [
                                    {
                                      type: 'ifelse',
                                      condition: [
                                        {
                                          condId: '712658',
                                          options: {
                                            context: '$e.target.checked$',
                                            operate: '== true',
                                          },
                                          conditionType: 'checkContextValue',
                                          objType: 'system',
                                          objId: 'sys',
                                        },
                                      ],
                                      dataId: 167091823198976930,
                                      elseIfs: [
                                        {
                                          dataName: 'elseIf',
                                          dataId: 167091823198965900,
                                          children: [
                                            {
                                              dataName: 'action',
                                              dataId: 167091823198906460,
                                              children: [
                                                {
                                                  dataName: 'callback',
                                                  dataId: 167091823198921760,
                                                  children: [],
                                                  value: 'callback1',
                                                  params: [],
                                                },
                                                {
                                                  dataName: 'callback',
                                                  dataId: 167091823198917400,
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
                                                id: '949857',
                                                pageJsonId: '537892',
                                                pathname:
                                                  '/faqishuaidantanchuang7958',
                                                pageId: '908274270111293440',
                                                customFuncName:
                                                  'delScenceCodeList',
                                                customFuncParams:
                                                  '$state.sceneCode$',
                                              },
                                              actionObjId:
                                                'callParentCustomFunc',
                                              actionObjName: 'system',
                                              value: 'callParentCustomFunc',
                                              line_number: 7,
                                            },
                                          ],
                                          condition: [],
                                          callback: [
                                            {
                                              type: 'callParentCustomFunc',
                                              dataId: 167091823198906460,
                                              options: {
                                                compId: 'callParentCustomFunc',
                                                compName: 'system',
                                                id: '949857',
                                                pageJsonId: '537892',
                                                pathname:
                                                  '/faqishuaidantanchuang7958',
                                                pageId: '908274270111293440',
                                                customFuncName:
                                                  'delScenceCodeList',
                                                customFuncParams:
                                                  '$state.sceneCode$',
                                              },
                                              line_number: 7,
                                              callback1: [],
                                              callback2: [],
                                            },
                                          ],
                                        },
                                      ],
                                      line_number: 5,
                                      callback1: [
                                        {
                                          type: 'callParentCustomFunc',
                                          dataId: 167091823198907740,
                                          options: {
                                            compId: 'callParentCustomFunc',
                                            compName: 'system',
                                            id: '5911387',
                                            pageJsonId: '537892',
                                            pathname:
                                              '/faqishuaidantanchuang7958',
                                            pageId: '908274270111293440',
                                            customFuncName: 'pushSceneCodeList',
                                            customFuncParams:
                                              '$state.sceneCode$',
                                            modalPath:
                                              '/faqishuaidantanchuang7958',
                                          },
                                          line_number: 6,
                                          callback1: [],
                                          callback2: [],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                              line_number: 2,
                              callback1: [
                                {
                                  type: 'showModal',
                                  dataId: 167091826430071600,
                                  options: {
                                    compId: 'showModal',
                                    compName: 'page',
                                    id: '720637',
                                    pageJsonId: '537892',
                                    type: 'info',
                                    title: '选择失败',
                                    content:
                                      '该场景成功受理数已等于/大于最大实例数,无法再次甩单',
                                  },
                                  line_number: 3,
                                  callback1: [],
                                  callback2: [],
                                },
                                {
                                  type: 'setValue',
                                  dataId: 167091832755378530,
                                  options: {
                                    compId: 'Checkbox_867267',
                                    compLib: 'comm',
                                    pageJsonId: '537892',
                                    compName: 'Checkbox',
                                    id: '4457195',
                                    valueList: { Checkbox_867267: '$false$' },
                                  },
                                  line_number: 4,
                                  callback1: [],
                                },
                              ],
                            },
                          ],
                          callback2: [],
                        },
                      ];
                      eventDatacustomActionCode528.params =
                        [
                          {
                            title: '复选框取值',
                            name: 'e',
                            value: '$e.target.checked$',
                          },
                        ] || [];
                      CMDGenerator(
                        eventDatacustomActionCode528,
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
                    ref={(r: any) => refs.setComponentRef(r, 'Checkbox_867267')}
                    {...injectData}
                  />
                </View>
                <View
                  name={'布局容器'}
                  $$componentItem={{
                    id: 'View_927165',
                    uid: 'View_927165',
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
                    textAlign: 'right',
                  }}
                  ref={(r: any) => refs.setComponentRef(r, 'View_927165')}
                  {...injectData}
                >
                  <Text
                    name={'文本'}
                    content={'成功受理数：'}
                    textType={'span'}
                    version={'1.0'}
                    showHtml={false}
                    $$componentItem={{
                      id: 'Text_145348',
                      uid: 'Text_145348',
                      type: 'Text',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{
                      fontSize: '14px',
                      lineHeight: '24px',
                      color: '#1c242e',
                    }}
                    ref={(r: any) => refs.setComponentRef(r, 'Text_145348')}
                    {...injectData}
                  />
                </View>
                <View
                  name={'布局容器'}
                  $$componentItem={{
                    id: 'View_6804508',
                    uid: 'View_6804508',
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
                  }}
                  ref={(r: any) => refs.setComponentRef(r, 'View_6804508')}
                  {...injectData}
                >
                  <Text
                    name={'成功受理数value'}
                    content={data?.pageData?.fileCount}
                    textType={'span'}
                    version={'1.0'}
                    showHtml={false}
                    fieldName={'fileCount'}
                    $$componentItem={{
                      id: 'Text_377535',
                      uid: 'Text_377535',
                      type: 'Text',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{
                      fontSize: '14px',
                      lineHeight: '24px',
                      color: '#1c242e',
                    }}
                    ref={(r: any) => refs.setComponentRef(r, 'Text_377535')}
                    {...injectData}
                  />
                </View>
              </HorizontalView>
            </View>
          </HorizontalView>
          <Form
            name={'要素'}
            colSpan={8}
            labelCol={'6'}
            wrapperCol={18}
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
            ref={(r: any) =>
              refs.setComponentRef(
                r,
                'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812',
              )
            }
            {...injectData}
          >
            <Select
              name={'紧急程度'}
              size={'default'}
              selfSpan={8}
              labelCol={'6'}
              wrapperCol={18}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              filter={'none'}
              classification={'default'}
              attr={{}}
              placeholder={'请选择'}
              formItemIndex={0}
              fieldName={'urgencyGrade'}
              value={data?.factorForm?.urgencyGrade}
              $$componentItem={{
                id: 'Select_1514685',
                uid: 'Select_1514685',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Select_1514685')}
              {...injectData}
            />
            <DatePicker
              name={'建议完成时间'}
              timeMode={'date'}
              format={'YYYY-MM-DD'}
              size={'default'}
              selfSpan={8}
              labelCol={'6'}
              wrapperCol={18}
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
              formItemIndex={1}
              fieldName={'suggestFinishDate'}
              value={data?.factorForm?.suggestFinishDate}
              $$componentItem={{
                id: 'DatePicker_6606197',
                uid: 'DatePicker_6606197',
                type: 'DatePicker',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              defaultValue={undefined}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'DatePicker_6606197')}
              {...injectData}
            />
            <TextArea
              name={'申请原因'}
              selfSpan={24}
              labelCol={'2'}
              wrapperCol={22}
              titleTip={'text'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              placeholder={'请输入'}
              fieldName={'reason'}
              value={data?.factorForm?.reason}
              formItemIndex={2}
              tipIcon={{
                theme: 'outlined',
                type: 'question-circle',
                isIconFont: false,
              }}
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
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_7242206_974846_973427')
              }
              {...injectData}
            />
          </Form>
          <Table
            name={'信息表格'}
            isFlexColumn={false}
            pageSize={5}
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
                title: '代理商名称',
                key: 'agencyName',
                dataIndex: 'agencyName',
                className: '',
                id: '340587',
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
                title: '主码号',
                key: 'majorNum',
                dataIndex: 'majorNum',
                className: 'divider',
                id: '857197',
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
                title: '申请速率',
                key: 'applyRate',
                dataIndex: 'applyRate',
                className: 'divider',
                id: '4688648',
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
                title: '连接数',
                key: 'linkNum',
                dataIndex: 'linkNum',
                className: 'divider',
                id: '136036',
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
            dataSource={data?.infoList}
            fieldName={'data.MemberInfo.length'}
            total={data?.infoList?.length}
            hiddenAction={false}
            rowKey={'rowId'}
            rowActions={[]}
            extend={[]}
            adjustModel={'fill'}
            className={'Table_8700198_3717786'}
            dataSourceFromDataSourceConfig={'data.infoList'}
            $$componentItem={{
              id: 'Table_8700198_3717786',
              uid: 'Table_8700198_3717786',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ margin: '10px 0px 10px 0px' }}
            onRowEdit={(rowId: any, row: any, index: any) => {}}
            ref={(r: any) => refs.setComponentRef(r, 'Table_8700198_3717786')}
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(CreateRejectOrderClsCp_0003_0013$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { sceneCode: '', itemList: '', busiObjNbr: '' },
});
