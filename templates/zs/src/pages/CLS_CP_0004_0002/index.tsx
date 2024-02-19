// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import {
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

const ClsCp_0004_0002$$Page: React.FC<PageProps> = ({
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
  const fileUpload = (options_143186: any) => {
    const eventDatacustomActionCode69: any = [
      {
        type: 'customActionCode',
        dataId: 167282489935442720,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '885276',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=options_143186;success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'callParentCustomFunc',
            dataId: 167282492287555070,
            options: {
              compId: 'callParentCustomFunc',
              compName: 'system',
              id: '521004',
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
    eventDatacustomActionCode69.params =
      [
        {
          title: '事件入参',
          name: 'options_143186',
          value: '$options_143186$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode69,
      { options_143186 },
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
    const eventDataapiRequest214: any = [
      {
        type: 'apiRequest',
        dataId: 166972710095839070,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '77584',
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
              dataKey: '088178_path',
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
              dataKey: '088178_query',
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
                  dataKey: '088178_body.catalogCode',
                  value: { type: ['customize'], code: '$state.catalogCode$' },
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
                  id: 'body.attrCode',
                  dataKey: '088178_body.attrCode',
                  value: { type: ['customize'], code: 'attachmentType' },
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-1',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '088178_body',
              key: '3',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166972710854173300,
            options: {
              compId: 'Input_690228_5400337_5332635_403802',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '765148',
              data: '$reply_77584?.resultData$',
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
    eventDataapiRequest214.params = [] || [];
    CMDGenerator(eventDataapiRequest214, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest215: any = [
      {
        type: 'apiRequest',
        dataId: 166901203735542940,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '1191875',
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
              dataKey: '1191875_header',
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
              dataKey: '1191875_path',
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
              dataKey: '1191875_query',
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
                  dataKey: '1191875_body.catalogCode',
                  value: { type: ['customize'], code: '$state.catalogCode$' },
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
                  id: 'body.attrCode',
                  dataKey: '1191875_body.attrCode',
                  value: { type: ['customize'], code: 'discountType' },
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-1',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '1191875_body',
              key: '3',
            },
          ],
        },
        line_number: 3,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166901208451262720,
            options: {
              compId: 'Input_discountType_6879496_1564409',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '960778',
              data: '$reply_1191875?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 4,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest215.params = [] || [];
    CMDGenerator(eventDataapiRequest215, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest216: any = [
      {
        type: 'apiRequest',
        dataId: 169690149751816200,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '652522',
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
                      dataKey: '652522_root.body.catalogCode',
                      value: {
                        type: ['customize'],
                        code: '$state.catalogCode$',
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
                      dataKey: '652522_root.body.attrCode',
                      value: { type: ['customize'], code: 'comboName' },
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
                  dataKey: '652522_root.body',
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
              dataKey: '652522_root',
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
        line_number: 5,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 169804675544934200,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '267784',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){data.comboList=reply_652522};',
            },
            line_number: 6,
            callback1: [],
            callback2: [],
          },
          {
            type: 'reloadSelectData',
            dataId: 169690156995317500,
            options: {
              compId: 'Input_comboName_930373_632029',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '739951',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
              data: '$reply_652522?.resultData$',
            },
            line_number: 7,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest216.params = [] || [];
    CMDGenerator(eventDataapiRequest216, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest217: any = [
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
        line_number: 8,
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
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
            },
            line_number: 9,
            callback1: [
              {
                type: 'callParentCustomFunc',
                dataId: 166444112756181340,
                options: {
                  compId: 'callParentCustomFunc',
                  compName: 'system',
                  id: '849838',
                  pageJsonId: '537892',
                  pathname: '/auditOrderPrepare',
                  pageId: '884045146848604160',
                  customFuncName: 'getFactor',
                  customFuncParams: '$data.sceneSubmit$',
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
    ];
    eventDataapiRequest217.params = [] || [];
    CMDGenerator(eventDataapiRequest217, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse124: any = [
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
        line_number: 11,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 166132449559169250,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '9981685',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var item=state.itemList;data.sceneSubmit=item;var factorForm={};var attrList=item.attrList;if(attrList!=undefined&&attrList.length>0){for(var i=0;i<attrList.length;i++){factorForm[attrList[i].attrCode]=attrList[i].attrValue}}data.factorForm=factorForm;data.sceneSubmit.approveGrade=item.approveGrade;data.sceneSubmit.approveGradeName=item.approveGradeName;success(factorForm)};',
              actionTitle: '设置界面初始化值',
            },
            line_number: 12,
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
                  dataSourceSetValue: [
                    {
                      attrId: '13975535',
                      code: 'discountType',
                      name: '折扣类型',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['discountType'],
                      _idpath: ['13975535'],
                    },
                    {
                      attrId: '313383',
                      code: 'comboName',
                      name: '套餐名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['comboName'],
                      _idpath: ['313383'],
                    },
                    {
                      attrId: '3127557',
                      code: 'fee',
                      name: '开通6秒计费',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['fee'],
                      _idpath: ['3127557'],
                    },
                    {
                      attrId: '402303',
                      code: 'incomeScale',
                      name: '融合计费比例',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['incomeScale'],
                      _idpath: ['402303'],
                    },
                    {
                      attrId: '2372211',
                      code: 'reason',
                      name: '申请原因',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['reason'],
                      _idpath: ['2372211'],
                    },
                    {
                      attrId: '3561154',
                      code: 'monthFee',
                      name: '包月费',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['monthFee'],
                      _idpath: ['3561154'],
                    },
                    {
                      attrId: '7602484',
                      code: 'packFee',
                      name: '包打费',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['packFee'],
                      _idpath: ['7602484'],
                    },
                    {
                      attrId: '3539116',
                      code: 'packScale',
                      name: '包打比例',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['packScale'],
                      _idpath: ['3539116'],
                    },
                    {
                      attrId: '5642696',
                      code: 'discount',
                      name: '套餐折扣',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['discount'],
                      _idpath: ['5642696'],
                    },
                    {
                      attrId: '7813665',
                      code: 'groupFee',
                      name: '集团保底费',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['groupFee'],
                      _idpath: ['7813665'],
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
              {
                type: 'setValue',
                dataId: 166555949395206560,
                options: {
                  compId: 'Input_361479_887285_2150708_923492_5476653',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '9683529',
                  value: '$state.itemList.approveGradeName$',
                  valueList: {
                    Input_361479_887285_2150708_923492_5476653:
                      '$state.itemList.approveGradeName$',
                  },
                },
                line_number: 14,
                callback1: [],
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '698993975',
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$data_9981685.discountType$',
                      operate: '==',
                      manualValue: '2',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166927831251758200,
                elseIfs: [
                  {
                    dataName: 'elseIf',
                    dataId: 166927831251784640,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 166927831251703170,
                        children: [],
                        todoOptions: ['visible', 'selectComp'],
                        options: {
                          compId: [
                            'Input_incomeProp_701756',
                            'Select_1689445',
                            'Select_6376533',
                            'Select_923418',
                          ],
                          compName: 'page',
                          id: '6533728',
                          pageJsonId: '537892',
                          visible: '',
                          compid: [
                            'Input_incomeProp_701756',
                            'Select_1689445',
                            'Select_6376533',
                            'Select_923418',
                          ],
                        },
                        actionObjId: 'sysSetVisible',
                        actionObjName: 'page',
                        value: 'sysSetVisible',
                        line_number: 18,
                      },
                      {
                        dataName: 'action',
                        dataId: 166927831251701950,
                        children: [],
                        todoOptions: ['visible', 'selectComp'],
                        options: {
                          compId: [
                            'Input_comboName_930373_632029',
                            'Input_fee_3945494_488729',
                            'Select_8132662',
                          ],
                          compName: 'page',
                          id: '253335',
                          pageJsonId: '537892',
                          visible: 'true',
                          compid: [
                            'Input_comboName_930373_632029',
                            'Input_fee_3945494_488729',
                            'Select_8132662',
                          ],
                        },
                        actionObjId: 'sysSetVisible',
                        actionObjName: 'page',
                        value: 'sysSetVisible',
                        line_number: 19,
                      },
                    ],
                    condition: [],
                    callback: [
                      {
                        type: 'sysSetVisible',
                        dataId: 166927831251703170,
                        options: {
                          compId: [
                            'Input_incomeProp_701756',
                            'Select_1689445',
                            'Select_6376533',
                            'Select_923418',
                          ],
                          compName: 'page',
                          id: '6533728',
                          pageJsonId: '537892',
                          visible: '',
                          compid: [
                            'Input_incomeProp_701756',
                            'Select_1689445',
                            'Select_6376533',
                            'Select_923418',
                          ],
                        },
                        line_number: 18,
                      },
                      {
                        type: 'sysSetVisible',
                        dataId: 166927831251701950,
                        options: {
                          compId: [
                            'Input_comboName_930373_632029',
                            'Input_fee_3945494_488729',
                            'Select_8132662',
                          ],
                          compName: 'page',
                          id: '253335',
                          pageJsonId: '537892',
                          visible: 'true',
                          compid: [
                            'Input_comboName_930373_632029',
                            'Input_fee_3945494_488729',
                            'Select_8132662',
                          ],
                        },
                        line_number: 19,
                      },
                    ],
                  },
                ],
                line_number: 15,
                callback1: [
                  {
                    type: 'sysSetVisible',
                    dataId: 166927831251704640,
                    options: {
                      compId: [
                        'Input_incomeProp_701756',
                        'Select_1689445',
                        'Select_6376533',
                        'Select_923418',
                      ],
                      compName: 'page',
                      id: '9837204',
                      pageJsonId: '537892',
                      visible: 'true',
                      compid: [
                        'Input_incomeProp_701756',
                        'Select_1689445',
                        'Select_6376533',
                        'Select_923418',
                      ],
                    },
                    line_number: 16,
                  },
                  {
                    type: 'sysSetVisible',
                    dataId: 166927831251729700,
                    options: {
                      compId: [
                        'Input_comboName_930373_632029',
                        'Input_fee_3945494_488729',
                        'Select_8132662',
                        'Input_682426',
                      ],
                      compName: 'page',
                      id: '318662',
                      pageJsonId: '537892',
                      visible: '',
                      compid: [
                        'Input_comboName_930373_632029',
                        'Input_fee_3945494_488729',
                        'Select_8132662',
                        'Input_682426',
                      ],
                    },
                    line_number: 17,
                  },
                ],
              },
              {
                type: 'console',
                dataId: 168256511252013820,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '232164',
                  pageJsonId: '7946678',
                  value: ['$data_9981685$'],
                },
                line_number: 20,
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
            line_number: 21,
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
                line_number: 22,
                callback1: [],
                callback2: [],
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '52715',
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
                    condId: '4672444',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166746097913123400,
                elseIfs: [],
                line_number: 23,
                callback1: [
                  {
                    type: 'setVisible',
                    dataId: 166746099400013820,
                    options: {
                      compId: 'Table_5369494',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Table',
                      id: '91802',
                      visible: '',
                    },
                    line_number: 24,
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
            line_number: 25,
            callback1: [
              {
                type: 'setVisible',
                dataId: 166555953338606080,
                options: {
                  compId: 'Input_361479_887285_2150708_923492_5476653',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '383152',
                  visible: 'true',
                },
                line_number: 26,
              },
              {
                type: 'setDisable',
                dataId: 1665559545081572,
                options: {
                  compId: ['Form_449441_2604934_3373613', 'Form_565974'],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Form',
                  id: '555788',
                  disabled: 'true',
                  compid: ['Form_449441_2604934_3373613', 'Form_565974'],
                },
                line_number: 27,
              },
              {
                type: 'sysSetVisible',
                dataId: 166244953733999170,
                options: {
                  compId: ['Row_851124'],
                  compName: 'page',
                  id: '675663',
                  pageJsonId: '537892',
                  compid: ['Row_851124'],
                  visible: '',
                },
                line_number: 28,
              },
              {
                type: 'setDisable',
                dataId: 166555956977806080,
                options: {
                  compId: 'Input_361479_887285_2150708_923492_5476653',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '917445',
                  disabled: 'true',
                },
                line_number: 29,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse124.params = [] || [];
    CMDGenerator(eventDataifelse124, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    }); // console 170497294560440130
    console.log('====', state);

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
          dividerText={'固话套餐资费'}
          showTitle={true}
          $$componentItem={{
            id: 'Divider_6651058',
            uid: 'Divider_6651058',
            type: 'Divider',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ margin: '12px 0 12px 0', height: '0A' }}
          ref={(r: any) => (refs['Divider_6651058'] = r)}
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
                  id: 'Form_4311097_9385662_0413915_4904538',
                  uid: 'Form_4311097_9385662_0413915_4904538',
                  type: 'Form',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) =>
                  (refs['Form_4311097_9385662_0413915_4904538'] = r)
                }
                {...injectData}
              >
                <Checkbox
                  name={'审批场景'}
                  titleTip={'text'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  text={'固话套餐资费'}
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
                    id: 'Checkbox_882584_5289015_934499_6069114_220555',
                    uid: 'Checkbox_882584_5289015_934499_6069114_220555',
                    type: 'Checkbox',
                    ...componentItem,
                  }}
                  disabled={true}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    (refs['Checkbox_882584_5289015_934499_6069114_220555'] = r)
                  }
                  {...injectData}
                />
                <View
                  name={'布局容器'}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_5097806_951851',
                    uid: 'View_5097806_951851',
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
                  ref={(r: any) => (refs['View_5097806_951851'] = r)}
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
                    id: 'Input_361479_887285_2150708_923492_5476653',
                    uid: 'Input_361479_887285_2150708_923492_5476653',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={false}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    (refs['Input_361479_887285_2150708_923492_5476653'] = r)
                  }
                  {...injectData}
                />
              </Form>
            </View>
          </HorizontalView>
          <Form
            name={'要素'}
            colSpan={8}
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
                id: 'Input_discountType_6879496_1564409',
                label: '下拉框',
                compName: 'Select',
                type: 'Select',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '折扣类型',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: 8,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipPlacement: 'top',
                  required: true,
                  filter: 'none',
                  classification: 'default',
                  placeholder: '请选择',
                  fieldName: 'discountType',
                  value: data?.factorForm?.discountType,
                  formItemIndex: 0,
                  staticData: {
                    data: { selectedService: {} },
                    type: 'service',
                  },
                  labelCol: 8,
                  wrapperCol: 16,
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Select',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [
                  {
                    dataName: 'event',
                    dataId: 166901131140239740,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 166901131828486050,
                        children: [
                          {
                            dataName: 'callback',
                            dataId: 166901131828465020,
                            children: [
                              {
                                dataName: 'condition',
                                dataId: 166901132050062820,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 166901135302114100,
                                    children: [],
                                    todoOptions: ['visible', 'selectComp'],
                                    options: {
                                      compId: 'sysSetVisible',
                                      compName: 'page',
                                      id: '07745',
                                      pageJsonId: '537892',
                                      visible: 'true',
                                      compid: ['Input_incomeProp_701756'],
                                    },
                                    actionObjId: 'sysSetVisible',
                                    actionObjName: 'page',
                                    value: 'sysSetVisible',
                                  },
                                  {
                                    dataName: 'action',
                                    dataId: 166951816310156700,
                                    children: [],
                                    todoOptions: ['required', 'selectComp'],
                                    options: {
                                      compId: 'Input_incomeProp_701756',
                                      compLib: 'comm',
                                      pageJsonId: '537892',
                                      compName: 'Select',
                                      id: '2304068',
                                      required: 'true',
                                    },
                                    actionObjId: 'Input_incomeProp_701756',
                                    actionObjName: 'Select',
                                    value: 'setRequired',
                                    compLib: 'comm',
                                  },
                                  {
                                    dataName: 'action',
                                    dataId: 166901136375689280,
                                    children: [],
                                    todoOptions: ['visible', 'selectComp'],
                                    options: {
                                      compId: 'sysSetVisible',
                                      compName: 'page',
                                      id: '6275486',
                                      pageJsonId: '537892',
                                      visible: '',
                                      compid: [
                                        'Input_comboName_930373_632029',
                                        'Input_fee_3945494_488729',
                                      ],
                                    },
                                    actionObjId: 'sysSetVisible',
                                    actionObjName: 'page',
                                    value: 'sysSetVisible',
                                  },
                                  {
                                    dataName: 'action',
                                    dataId: 166951817469310100,
                                    children: [],
                                    todoOptions: ['required', 'selectComp'],
                                    options: {
                                      compId: 'Input_fee_3945494_488729',
                                      compLib: 'comm',
                                      pageJsonId: '537892',
                                      compName: 'Select',
                                      id: '705599',
                                      required: '',
                                    },
                                    actionObjId: 'Input_fee_3945494_488729',
                                    actionObjName: 'Select',
                                    value: 'setRequired',
                                    compLib: 'comm',
                                  },
                                ],
                                elseIfs: [
                                  {
                                    dataName: 'elseIf',
                                    dataId: 166901137712466400,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 166901138083659260,
                                        children: [],
                                        todoOptions: ['visible', 'selectComp'],
                                        options: {
                                          compId: 'sysSetVisible',
                                          compName: 'page',
                                          id: '687043',
                                          pageJsonId: '537892',
                                          visible: '',
                                          compid: ['Input_incomeProp_701756'],
                                        },
                                        actionObjId: 'sysSetVisible',
                                        actionObjName: 'page',
                                        value: 'sysSetVisible',
                                      },
                                      {
                                        dataName: 'action',
                                        dataId: 166951818227421820,
                                        children: [],
                                        todoOptions: ['required', 'selectComp'],
                                        options: {
                                          compId: 'Input_incomeProp_701756',
                                          compLib: 'comm',
                                          pageJsonId: '537892',
                                          compName: 'Select',
                                          id: '379546',
                                          required: '',
                                        },
                                        actionObjId: 'Input_incomeProp_701756',
                                        actionObjName: 'Select',
                                        value: 'setRequired',
                                        compLib: 'comm',
                                      },
                                      {
                                        dataName: 'action',
                                        dataId: 166951818835703870,
                                        children: [],
                                        todoOptions: ['required', 'selectComp'],
                                        options: {
                                          compId: 'Input_fee_3945494_488729',
                                          compLib: 'comm',
                                          pageJsonId: '537892',
                                          compName: 'Select',
                                          id: '500931',
                                          required: 'true',
                                          compid: ['Input_fee_3945494_488729'],
                                        },
                                        actionObjId: 'Input_fee_3945494_488729',
                                        actionObjName: 'Select',
                                        value: 'setRequired',
                                        compLib: 'comm',
                                      },
                                      {
                                        dataName: 'action',
                                        dataId: 166901138138033600,
                                        children: [],
                                        todoOptions: ['visible', 'selectComp'],
                                        options: {
                                          compId: 'sysSetVisible',
                                          compName: 'page',
                                          id: '645366',
                                          pageJsonId: '537892',
                                          visible: 'true',
                                          compid: [
                                            'Input_comboName_930373_632029',
                                            'Input_fee_3945494_488729',
                                          ],
                                        },
                                        actionObjId: 'sysSetVisible',
                                        actionObjName: 'page',
                                        value: 'sysSetVisible',
                                      },
                                    ],
                                    condition: [],
                                  },
                                ],
                                condition: [
                                  {
                                    condId: '698993975',
                                    options: {
                                      useManual: true,
                                      useObject: false,
                                      context: selectedData_513834[0]?.value,
                                      operate: '==',
                                      manualValue: '2',
                                    },
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                              },
                            ],
                            value: 'callback1',
                            params: [],
                            elseIfs: [],
                          },
                          {
                            dataName: 'callback',
                            dataId: 166901131828447580,
                            children: [],
                            value: 'callback2',
                            params: [],
                            elseIfs: [],
                          },
                        ],
                        todoOptions: [],
                        options: {
                          compId: 'Input_discountType_6879496_1564409',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Select',
                          id: '513834',
                        },
                        actionObjId: 'Input_discountType_6879496_1564409',
                        actionObjName: 'Select',
                        value: 'getSelectedData',
                        compLib: 'comm',
                        elseIfs: [],
                      },
                    ],
                    value: 'onChange',
                    params: [{ title: '下拉框取值', name: 'e', value: e }],
                    elseIfs: [],
                  },
                ],
                isLabelDropBoxChild: false,
                components: [],
              },
              {
                id: 'Input_comboName_930373_632029',
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '套餐名称',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: 8,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipContent: '',
                  tipPlacement: 'top',
                  prefixIconPosition: 'before',
                  postfix: '     ',
                  postfixIconPosition: 'before',
                  required: false,
                  placeholder: '请输入',
                  fieldName: 'comboName',
                  value: data?.factorForm?.comboName,
                  formItemIndex: 1,
                  compType: null,
                  icon: {
                    theme: 'outlined',
                    type: 'search',
                    isIconFont: false,
                  },
                  theme: 'outlined',
                  type: 'search',
                  isIconFont: false,
                  labelCol: 8,
                  wrapperCol: 16,
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
                components: [],
              },
              {
                id: 'Input_fee_3945494_488729',
                label: '下拉框',
                compName: 'Select',
                type: 'Select',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '开通6秒计费',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: 8,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipPlacement: 'top',
                  required: true,
                  filter: 'none',
                  classification: 'default',
                  placeholder: '请选择',
                  fieldName: 'fee',
                  value: data?.factorForm?.fee,
                  formItemIndex: 2,
                  staticData: {
                    data: { selectedService: {} },
                    type: 'service',
                  },
                  labelCol: 8,
                  wrapperCol: 16,
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Select',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                isLabelDropBoxChild: false,
                components: [],
              },
              {
                id: 'Input_incomeProp_701756',
                label: '下拉框',
                compName: 'Select',
                type: 'Select',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '成员和融合...',
                  basicStatus: 2,
                  size: 'default',
                  selfSpan: '',
                  titleTip: 'text',
                  tipLocation: 'after',
                  tipPlacement: 'top',
                  required: false,
                  filter: 'none',
                  classification: 'default',
                  attr: {},
                  placeholder: '请选择',
                  fieldName: 'incomeProp',
                  disabled: false,
                  value: data?.factorForm?.incomeProp,
                  formItemIndex: 3,
                  visible: false,
                  readOnly: false,
                  labelCol: 8,
                  wrapperCol: 16,
                  tipIcon: {
                    theme: 'outlined',
                    type: 'question-circle',
                    isIconFont: false,
                  },
                  tipContent: '成员和融合计费额度包月收入占比',
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Select',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                isLabelDropBoxChild: false,
                components: [],
              },
              {
                label: '文本框',
                compName: 'TextArea',
                type: 'TextArea',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '申请原因',
                  selfSpan: 24,
                  labelCol: '3',
                  wrapperCol: 21,
                  basicStatus: 1,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipPlacement: 'top',
                  required: false,
                  placeholder: '请输入',
                  fieldName: 'reason',
                  formItemIndex: 4,
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'TextArea',
                description: '',
                image: '',
                groupsName: '数据录入',
                alias: 'DformInput',
                setEvents: [],
                components: [],
                id: 'Input_9870174',
              },
            ]}
            labelCol={8}
            wrapperCol={16}
            className={'ued-legacy-form-label-ellipsis'}
            $$componentItem={{
              id: 'Form_449441_2604934_3373613',
              uid: 'Form_449441_2604934_3373613',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: 'px px px px', margin: '0px 0px 20px 0px' }}
            onValuesChange={(changedFieldName: any, changedValue: any) => {
              const eventDatasetDataSource100: any = [
                {
                  type: 'setDataSource',
                  dataId: 166124391997578100,
                  options: {
                    compId: 'page',
                    compName: 'page',
                    id: '3788211',
                    pageJsonId: '537892',
                    dataSourceId: 166124254360037760,
                    dataSourceName: 'factorForm',
                    dataSourceRelType: 'custom',
                    dataSourceReloadFilter: [],
                    dataSourceSetValue: [
                      {
                        attrId: '13975535',
                        code: 'discountType',
                        name: '折扣类型',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: [
                            'form',
                            'Form_449441_2604934_3373613',
                            'getFieldsValue',
                          ],
                          code: 'discountType',
                        },
                        _codePath: ['discountType'],
                        _idpath: ['13975535'],
                      },
                      {
                        attrId: '313383',
                        code: 'comboName',
                        name: '套餐名称',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: [
                            'form',
                            'Form_449441_2604934_3373613',
                            'getFieldsValue',
                          ],
                          code: 'comboName',
                        },
                        _codePath: ['comboName'],
                        _idpath: ['313383'],
                      },
                      {
                        attrId: '3127557',
                        code: 'fee',
                        name: '开通6秒计费',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['fee'],
                        _idpath: ['3127557'],
                      },
                      {
                        attrId: '402303',
                        code: 'incomeScale',
                        name: '融合计费比例',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: [
                            'form',
                            'Form_449441_2604934_3373613',
                            'getFieldsValue',
                          ],
                          code: 'incomeScale',
                        },
                        _codePath: ['incomeScale'],
                        _idpath: ['402303'],
                      },
                      {
                        attrId: '2372211',
                        code: 'reason',
                        name: '申请原因',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: { type: [], code: '' },
                        _codePath: ['reason'],
                        _idpath: ['2372211'],
                      },
                      {
                        attrId: '3561154',
                        code: 'monthFee',
                        name: '包月费',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: [
                            'form',
                            'Form_449441_2604934_3373613',
                            'getFieldsValue',
                          ],
                          code: 'monthFee',
                        },
                        _codePath: ['monthFee'],
                        _idpath: ['3561154'],
                      },
                      {
                        attrId: '7602484',
                        code: 'packFee',
                        name: '包打费',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: [
                            'form',
                            'Form_449441_2604934_3373613',
                            'getFieldsValue',
                          ],
                          code: 'packFee',
                        },
                        _codePath: ['packFee'],
                        _idpath: ['7602484'],
                      },
                      {
                        attrId: '3539116',
                        code: 'packScale',
                        name: '包打比例',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: [
                            'form',
                            'Form_449441_2604934_3373613',
                            'getFieldsValue',
                          ],
                          code: 'packScale',
                        },
                        _codePath: ['packScale'],
                        _idpath: ['3539116'],
                      },
                      {
                        attrId: '5642696',
                        code: 'discount',
                        name: '套餐折扣',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: [
                            'form',
                            'Form_449441_2604934_3373613',
                            'getFieldsValue',
                          ],
                          code: 'discount',
                        },
                        _codePath: ['discount'],
                        _idpath: ['5642696'],
                      },
                      {
                        attrId: '7813665',
                        code: 'groupFee',
                        name: '集团保底费',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: [
                            'form',
                            'Form_449441_2604934_3373613',
                            'getFieldsValue',
                          ],
                          code: 'groupFee',
                        },
                        _codePath: ['groupFee'],
                        _idpath: ['7813665'],
                      },
                    ],
                    onlySetPatch: true,
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'customActionCode',
                      dataId: 166366241025848900,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '5554038',
                        pageJsonId: '537892',
                        actionTitle: '',
                        code: 'function main(data,state,success,fail){var attrList=[];var obj=data.factorForm;for(var key in obj){attrList.push({"attrCode":key,"attrName":"","attrValue":obj[key]})}data.sceneSubmit.attrList=attrList;success(attrList)};',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'callParentCustomFunc',
                          dataId: 166366241025827650,
                          options: {
                            compId: 'callParentCustomFunc',
                            compName: 'system',
                            id: '6706125',
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
              eventDatasetDataSource100.params =
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
                eventDatasetDataSource100,
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
            ref={(r: any) => (refs['Form_449441_2604934_3373613'] = r)}
            {...injectData}
          >
            <Select
              name={'折扣类型'}
              size={'default'}
              selfSpan={8}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              filter={'none'}
              classification={'default'}
              placeholder={'请选择'}
              fieldName={'discountType'}
              value={data?.factorForm?.discountType}
              formItemIndex={0}
              labelCol={8}
              wrapperCol={16}
              dataSource={{ selectedService: {} }}
              $$componentItem={{
                id: 'Input_discountType_6879496_1564409',
                uid: 'Input_discountType_6879496_1564409',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatagetSelectedData169: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 166901131828486050,
                    options: {
                      compId: 'Input_discountType_6879496_1564409',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Select',
                      id: '513834',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '698993975',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$selectedData_513834[0].value$',
                              operate: '==',
                              manualValue: '2',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 166901132050062820,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 166901137712466400,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166901138083659260,
                                children: [],
                                todoOptions: ['visible', 'selectComp'],
                                options: {
                                  compId: [
                                    'Input_incomeProp_701756',
                                    'Select_1689445',
                                    'Select_6376533',
                                    'Select_923418',
                                  ],
                                  compName: 'page',
                                  id: '687043',
                                  pageJsonId: '537892',
                                  visible: '',
                                  compid: [
                                    'Input_incomeProp_701756',
                                    'Select_1689445',
                                    'Select_6376533',
                                    'Select_923418',
                                  ],
                                },
                                actionObjId: 'sysSetVisible',
                                actionObjName: 'page',
                                value: 'sysSetVisible',
                                line_number: 7,
                              },
                              {
                                dataName: 'action',
                                dataId: 166951818227421820,
                                children: [],
                                todoOptions: ['required', 'selectComp'],
                                options: {
                                  compId: [
                                    'Input_incomeProp_701756',
                                    'Select_1689445',
                                    'Select_6376533',
                                    'Select_923418',
                                  ],
                                  compLib: 'comm',
                                  pageJsonId: '537892',
                                  compName: 'Select',
                                  id: '379546',
                                  required: '',
                                  compid: [
                                    'Input_incomeProp_701756',
                                    'Select_1689445',
                                    'Select_6376533',
                                    'Select_923418',
                                  ],
                                },
                                actionObjId: 'Input_incomeProp_701756',
                                actionObjName: 'Select',
                                value: 'setRequired',
                                compLib: 'comm',
                                line_number: 8,
                              },
                              {
                                dataName: 'action',
                                dataId: 166951818835703870,
                                children: [],
                                todoOptions: ['required', 'selectComp'],
                                options: {
                                  compId: [
                                    'Select_8132662',
                                    'Input_comboName_930373_632029',
                                    'Input_fee_3945494_488729',
                                  ],
                                  compLib: 'comm',
                                  pageJsonId: '537892',
                                  compName: 'Select',
                                  id: '500931',
                                  required: 'true',
                                  compid: [
                                    'Select_8132662',
                                    'Input_comboName_930373_632029',
                                    'Input_fee_3945494_488729',
                                  ],
                                },
                                actionObjId: 'Input_fee_3945494_488729',
                                actionObjName: 'Select',
                                value: 'setRequired',
                                compLib: 'comm',
                                line_number: 9,
                              },
                              {
                                dataName: 'action',
                                dataId: 166901138138033600,
                                children: [],
                                todoOptions: ['visible', 'selectComp'],
                                options: {
                                  compId: [
                                    'Input_comboName_930373_632029',
                                    'Input_fee_3945494_488729',
                                    'Select_8132662',
                                    'Input_682426',
                                  ],
                                  compName: 'page',
                                  id: '645366',
                                  pageJsonId: '537892',
                                  visible: 'true',
                                  compid: [
                                    'Input_comboName_930373_632029',
                                    'Input_fee_3945494_488729',
                                    'Select_8132662',
                                    'Input_682426',
                                  ],
                                },
                                actionObjId: 'sysSetVisible',
                                actionObjName: 'page',
                                value: 'sysSetVisible',
                                line_number: 10,
                              },
                            ],
                            condition: [],
                            desc: '其他',
                            callback: [
                              {
                                type: 'sysSetVisible',
                                dataId: 166901138083659260,
                                options: {
                                  compId: [
                                    'Input_incomeProp_701756',
                                    'Select_1689445',
                                    'Select_6376533',
                                    'Select_923418',
                                  ],
                                  compName: 'page',
                                  id: '687043',
                                  pageJsonId: '537892',
                                  visible: '',
                                  compid: [
                                    'Input_incomeProp_701756',
                                    'Select_1689445',
                                    'Select_6376533',
                                    'Select_923418',
                                  ],
                                },
                                line_number: 7,
                              },
                              {
                                type: 'setRequired',
                                dataId: 166951818227421820,
                                options: {
                                  compId: [
                                    'Input_incomeProp_701756',
                                    'Select_1689445',
                                    'Select_6376533',
                                    'Select_923418',
                                  ],
                                  compLib: 'comm',
                                  pageJsonId: '537892',
                                  compName: 'Select',
                                  id: '379546',
                                  required: '',
                                  compid: [
                                    'Input_incomeProp_701756',
                                    'Select_1689445',
                                    'Select_6376533',
                                    'Select_923418',
                                  ],
                                },
                                line_number: 8,
                              },
                              {
                                type: 'setRequired',
                                dataId: 166951818835703870,
                                options: {
                                  compId: [
                                    'Select_8132662',
                                    'Input_comboName_930373_632029',
                                    'Input_fee_3945494_488729',
                                  ],
                                  compLib: 'comm',
                                  pageJsonId: '537892',
                                  compName: 'Select',
                                  id: '500931',
                                  required: 'true',
                                  compid: [
                                    'Select_8132662',
                                    'Input_comboName_930373_632029',
                                    'Input_fee_3945494_488729',
                                  ],
                                },
                                line_number: 9,
                              },
                              {
                                type: 'sysSetVisible',
                                dataId: 166901138138033600,
                                options: {
                                  compId: [
                                    'Input_comboName_930373_632029',
                                    'Input_fee_3945494_488729',
                                    'Select_8132662',
                                    'Input_682426',
                                  ],
                                  compName: 'page',
                                  id: '645366',
                                  pageJsonId: '537892',
                                  visible: 'true',
                                  compid: [
                                    'Input_comboName_930373_632029',
                                    'Input_fee_3945494_488729',
                                    'Select_8132662',
                                    'Input_682426',
                                  ],
                                },
                                line_number: 10,
                              },
                            ],
                          },
                        ],
                        line_number: 2,
                        callback1: [
                          {
                            type: 'sysSetVisible',
                            dataId: 166901135302114100,
                            options: {
                              compId: [
                                'Input_incomeProp_701756',
                                'Select_923418',
                                'Select_6376533',
                                'Select_1689445',
                              ],
                              compName: 'page',
                              id: '07745',
                              pageJsonId: '537892',
                              visible: 'true',
                              compid: [
                                'Input_incomeProp_701756',
                                'Select_923418',
                                'Select_6376533',
                                'Select_1689445',
                              ],
                            },
                            line_number: 3,
                          },
                          {
                            type: 'setRequired',
                            dataId: 166951816310156700,
                            options: {
                              compId: [
                                'Input_incomeProp_701756',
                                'Select_1689445',
                                'Select_6376533',
                                'Select_923418',
                              ],
                              compLib: 'comm',
                              pageJsonId: '537892',
                              compName: 'Select',
                              id: '2304068',
                              required: 'true',
                              compid: [
                                'Input_incomeProp_701756',
                                'Select_1689445',
                                'Select_6376533',
                                'Select_923418',
                              ],
                            },
                            line_number: 4,
                          },
                          {
                            type: 'sysSetVisible',
                            dataId: 166901136375689280,
                            options: {
                              compId: [
                                'Input_comboName_930373_632029',
                                'Input_fee_3945494_488729',
                                'Select_8132662',
                                'Input_682426',
                              ],
                              compName: 'page',
                              id: '6275486',
                              pageJsonId: '537892',
                              visible: '',
                              compid: [
                                'Input_comboName_930373_632029',
                                'Input_fee_3945494_488729',
                                'Select_8132662',
                                'Input_682426',
                              ],
                            },
                            line_number: 5,
                          },
                          {
                            type: 'setRequired',
                            dataId: 166951817469310100,
                            options: {
                              compId: [
                                'Input_fee_3945494_488729',
                                'Input_comboName_930373_632029',
                                'Select_8132662',
                                'Input_682426',
                              ],
                              compLib: 'comm',
                              pageJsonId: '537892',
                              compName: 'Select',
                              id: '705599',
                              required: '',
                              compid: [
                                'Input_fee_3945494_488729',
                                'Input_comboName_930373_632029',
                                'Select_8132662',
                                'Input_682426',
                              ],
                            },
                            line_number: 6,
                          },
                        ],
                      },
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '5084476',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$selectedData_513834[0].value$',
                              operate: '==',
                              manualValue: '1',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 169804523391300160,
                        elseIfs: [],
                        line_number: 11,
                        callback1: [
                          {
                            type: 'customActionCode',
                            dataId: 169804682757744580,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '534',
                              pageJsonId: '537892',
                              code: 'function main(data,state,success,fail){var response=data.comboList;success(response.resultData.filter(function(obj){return obj.attrValueDesc=="\\u957F\\u5E02\\u8BDD\\u6298\\u6263\\u5957\\u9910"}))};',
                            },
                            line_number: 12,
                            callback1: [
                              {
                                type: 'clearValue',
                                dataId: 169804740359180770,
                                options: {
                                  compId: 'Input_comboName_930373_632029',
                                  compLib: 'comm',
                                  pageJsonId: '537892',
                                  compName: 'Select',
                                  id: '612195',
                                },
                                line_number: 13,
                              },
                              {
                                type: 'reloadSelectData',
                                dataId: 169804728448681630,
                                options: {
                                  compId: 'Input_comboName_930373_632029',
                                  compLib: 'comm',
                                  pageJsonId: '537892',
                                  compName: 'Select',
                                  id: '0874132',
                                  labelKey: 'attrValueName',
                                  valueKey: 'attrValue',
                                  data: '$data_534$',
                                },
                                line_number: 14,
                                callback1: [],
                              },
                            ],
                            callback2: [],
                          },
                          {
                            type: 'console',
                            dataId: 169804701665788740,
                            options: {
                              compId: 'debug',
                              compName: 'system',
                              id: '24445',
                              pageJsonId: '537892',
                              value: ['====comboList=====', '$data.comboList$'],
                            },
                            line_number: 15,
                          },
                        ],
                      },
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '5084476',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$selectedData_513834[0].value$',
                              operate: '==',
                              manualValue: '3',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 169804531764006100,
                        elseIfs: [],
                        line_number: 16,
                        callback1: [
                          {
                            type: 'customActionCode',
                            dataId: 16980473621723988,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '937892',
                              pageJsonId: '537892',
                              code: 'function main(data,state,success,fail){var response=data.comboList;success(response.resultData.filter(function(obj){return obj.attrValueDesc=="\\u56FD\\u5185\\u5E02\\u5185\\u6298\\u6263\\u5957\\u9910"}))};',
                            },
                            line_number: 17,
                            callback1: [
                              {
                                type: 'clearValue',
                                dataId: 169804742644563100,
                                options: {
                                  compId: 'Input_comboName_930373_632029',
                                  compLib: 'comm',
                                  pageJsonId: '537892',
                                  compName: 'Select',
                                  id: '705638',
                                },
                                line_number: 18,
                              },
                              {
                                type: 'reloadSelectData',
                                dataId: 169804736217282240,
                                options: {
                                  compId: 'Input_comboName_930373_632029',
                                  compLib: 'comm',
                                  pageJsonId: '537892',
                                  compName: 'Select',
                                  id: '238222',
                                  labelKey: 'attrValueName',
                                  valueKey: 'attrValue',
                                  data: '$data_937892$',
                                },
                                line_number: 19,
                                callback1: [],
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
                eventDatagetSelectedData169.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData169,
                  { e },
                  'getSelectedData',
                  {
                    id: 'getSelectedData',
                    name: 'getSelectedData',
                    type: 'getSelectedData',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => (refs['Input_discountType_6879496_1564409'] = r)}
              {...injectData}
            />
            <Select
              name={'套餐名称'}
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
              fieldName={'comboName'}
              value={data?.factorForm?.comboName}
              formItemIndex={1}
              $$componentItem={{
                id: 'Input_comboName_930373_632029',
                uid: 'Input_comboName_930373_632029',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_comboName_930373_632029'] = r)}
              {...injectData}
            />
            <Input
              name={'融合计费比例'}
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
              fieldName={'incomeScale'}
              value={data?.factorForm?.incomeScale}
              formItemIndex={2}
              regexp={[
                {
                  id: '279356',
                  title: '按钮2',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入大于等于0的整数格式',
                  pattern: '/^[+]?\\d*$/',
                },
              ]}
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
                id: 'Input_incomeProp_701756',
                uid: 'Input_incomeProp_701756',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_incomeProp_701756'] = r)}
              {...injectData}
            />
            <Input
              name={'包打费'}
              size={'default'}
              selfSpan={8}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'元'}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              fieldName={'packFee'}
              value={data?.factorForm?.packFee}
              formItemIndex={3}
              regexp={[
                {
                  id: '0923027',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入正数（最多两位小数）',
                  pattern: '/^(([1-9]{1}\\d*)|(0{1}))(\\.\\d{0,2})?$/',
                },
              ]}
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
                id: 'Select_6376533',
                uid: 'Select_6376533',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatagetValue167: any = [
                  {
                    type: 'getValue',
                    dataId: 169692686647155140,
                    options: {
                      compId: 'Select_1689445',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '506929',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'console',
                        dataId: 169811626800712600,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '1490745',
                          pageJsonId: '537892',
                          value: ['$value_506929$'],
                        },
                        line_number: 2,
                      },
                      {
                        type: 'getValue',
                        dataId: 169692687832417440,
                        options: {
                          compId: 'Select_6376533',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Input',
                          id: '6214955',
                        },
                        line_number: 3,
                        callback1: [
                          {
                            type: 'customActionCode',
                            dataId: 169692688424652220,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '794736',
                              pageJsonId: '537892',
                              code: 'function main(data,state,success,fail){var pack=value_6214955;var month=value_506929;console.log("month:");console.log(month);console.log("pack:");console.log(pack);data.factorForm.packFee=value_6214955;if(month!=null&&month!=undefined&&month!=""&&pack!=null&&pack!=undefined&&pack!=""){console.log("----\\u8FDB\\u6765\\u4E86----");var result=(parseFloat(pack)/parseFloat(month)).toFixed(2);console.log("--\\u8BA1\\u7B97\\u7ED3\\u679C---"+result);data.factorForm.packScale=result;success(result)}}',
                            },
                            line_number: 4,
                            callback1: [
                              {
                                type: 'console',
                                dataId: 169692846897311700,
                                options: {
                                  compId: 'debug',
                                  compName: 'system',
                                  id: '004633',
                                  pageJsonId: '537892',
                                  value: [
                                    '----包打比例------',
                                    '$data_794736$',
                                  ],
                                },
                                line_number: 5,
                              },
                              {
                                type: 'setValue',
                                dataId: 169692727752914560,
                                options: {
                                  compId: 'Select_923418',
                                  compLib: 'comm',
                                  pageJsonId: '537892',
                                  compName: 'Input',
                                  id: '716529',
                                  valueList: { Select_923418: '$data_794736$' },
                                },
                                line_number: 6,
                                callback1: [],
                              },
                            ],
                            callback2: [],
                          },
                        ],
                      },
                    ],
                  },
                ];
                eventDatagetValue167.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatagetValue167, { e }, 'getValue', {
                  id: 'getValue',
                  name: 'getValue',
                  type: 'getValue',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Select_6376533'] = r)}
              {...injectData}
            />
            <Input
              name={'包月费'}
              size={'default'}
              selfSpan={8}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'元'}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              fieldName={'monthFee'}
              value={data?.factorForm?.monthFee}
              formItemIndex={4}
              regexp={[
                {
                  id: '44657',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入正数（最多两位小数）',
                  pattern: '/^(([1-9]{1}\\d*)|(0{1}))(\\.\\d{0,2})?$/',
                },
              ]}
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
                id: 'Select_1689445',
                uid: 'Select_1689445',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatagetValue168: any = [
                  {
                    type: 'getValue',
                    dataId: 169692723963367550,
                    options: {
                      compId: 'Select_1689445',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '283916',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'getValue',
                        dataId: 169692723963348320,
                        options: {
                          compId: 'Select_6376533',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Input',
                          id: '6471813',
                        },
                        line_number: 2,
                        callback1: [
                          {
                            type: 'customActionCode',
                            dataId: 169692723963372380,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '1881726',
                              pageJsonId: '537892',
                              code: 'function main(data,state,success,fail){var month=value_283916;var pack=value_6471813;console.log("month:");console.log(month);console.log("pack:");console.log(pack);data.factorForm.monthFee=value_283916;if(month!=null&&month!=undefined&&month!=""&&pack!=null&&pack!=undefined&&pack!=""){console.log("----\\u8FDB\\u6765\\u4E86----");var result=(parseFloat(pack)/parseFloat(month)).toFixed(2);console.log("--\\u8BA1\\u7B97\\u7ED3\\u679C---"+result);data.factorForm.packScale=result;success(result)}}',
                            },
                            line_number: 3,
                            callback1: [
                              {
                                type: 'setValue',
                                dataId: 169692726203182700,
                                options: {
                                  compId: 'Select_923418',
                                  compLib: 'comm',
                                  pageJsonId: '537892',
                                  compName: 'Input',
                                  id: '679798',
                                  valueList: {
                                    Select_923418: '$data_1881726$',
                                  },
                                },
                                line_number: 4,
                                callback1: [],
                              },
                            ],
                            callback2: [],
                          },
                        ],
                      },
                    ],
                  },
                ];
                eventDatagetValue168.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatagetValue168, { e }, 'getValue', {
                  id: 'getValue',
                  name: 'getValue',
                  type: 'getValue',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Select_1689445'] = r)}
              {...injectData}
            />
            <Input
              name={'包打比例'}
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
              fieldName={'packScale'}
              value={data?.factorForm?.packScale}
              formItemIndex={5}
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
                id: 'Select_923418',
                uid: 'Select_923418',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Select_923418'] = r)}
              {...injectData}
            />
            <Input
              name={'套餐折扣'}
              size={'default'}
              selfSpan={8}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'折'}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              fieldName={'discount'}
              value={data?.factorForm?.discount}
              formItemIndex={6}
              regexp={[
                {
                  id: '483305',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入正确格式的折扣数',
                  pattern: '/^0\\.\\d+$|^[1-9]+(\\.\\d+)?$/',
                },
              ]}
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
                id: 'Select_8132662',
                uid: 'Select_8132662',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatagetValue169: any = [
                  {
                    type: 'getValue',
                    dataId: 169695993982241200,
                    options: {
                      compId: 'Select_8132662',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '09744',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 169695994407594180,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '030086',
                          pageJsonId: '537892',
                          code: 'function main(data,state,success,fail){data.factorForm.discount=value_09744};',
                        },
                        line_number: 2,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                  },
                ];
                eventDatagetValue169.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatagetValue169, { e }, 'getValue', {
                  id: 'getValue',
                  name: 'getValue',
                  type: 'getValue',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Select_8132662'] = r)}
              {...injectData}
            />
            <Input
              name={'集团保底费'}
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
              fieldName={'groupFee'}
              value={data?.factorForm?.groupFee}
              formItemIndex={7}
              defaultValue={'0'}
              regexp={[
                {
                  id: '747716',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入正数（最多两位小数）',
                  pattern: '/^(([1-9]{1}\\d*)|(0{1}))(\\.\\d{0,2})?$/',
                },
              ]}
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
                id: 'Input_682426',
                uid: 'Input_682426',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatagetValue170: any = [
                  {
                    type: 'getValue',
                    dataId: 169695997371512480,
                    options: {
                      compId: 'Input_682426',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '292703',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 169695997702576540,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '245924',
                          pageJsonId: '537892',
                          code: 'function main(data,state,success,fail){data.factorForm.groupFee=value_292703};',
                        },
                        line_number: 2,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                  },
                ];
                eventDatagetValue170.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatagetValue170, { e }, 'getValue', {
                  id: 'getValue',
                  name: 'getValue',
                  type: 'getValue',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Input_682426'] = r)}
              {...injectData}
            />
          </Form>
          <Form
            name={'表单23'}
            colSpan={8}
            labelCol={'2'}
            wrapperCol={22}
            colon={true}
            layout={'horizontal'}
            labelAlign={'right'}
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_565974'}
            genRuleType={'key'}
            formType={'normal'}
            relationDataSource={data?.factorForm}
            busiObjectId={''}
            $$componentItem={{
              id: 'Form_565974',
              uid: 'Form_565974',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            onValuesChange={(changedFieldName: any, changedValue: any) => {
              const eventDatasetDataSource101: any = [
                {
                  type: 'setDataSource',
                  dataId: 170497269619185060,
                  options: {
                    compId: 'page',
                    compName: 'page',
                    id: '471814',
                    pageJsonId: '537892',
                    dataSourceId: 166124254360037760,
                    dataSourceName: 'factorForm',
                    dataSourceRelType: 'custom',
                    dataSourceReloadFilter: [],
                    dataSourceSetValue: [
                      {
                        attrId: '13975535',
                        code: 'discountType',
                        name: '折扣类型',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                      },
                      {
                        attrId: '313383',
                        code: 'comboName',
                        name: '套餐名称',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                      },
                      {
                        attrId: '3127557',
                        code: 'fee',
                        name: '开通6秒计费',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                      },
                      {
                        attrId: '402303',
                        code: 'incomeScale',
                        name: '融合计费比例',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                      },
                      {
                        attrId: '2372211',
                        code: 'reason',
                        name: '申请原因',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_565974', 'getFieldsValue'],
                          code: 'reason',
                        },
                      },
                      {
                        attrId: '3561154',
                        code: 'monthFee',
                        name: '包月费',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                      },
                      {
                        attrId: '7602484',
                        code: 'packFee',
                        name: '包打费',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                      },
                      {
                        attrId: '3539116',
                        code: 'packScale',
                        name: '包打比例',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                      },
                      {
                        attrId: '5642696',
                        code: 'discount',
                        name: '套餐折扣',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                      },
                      {
                        attrId: '7813665',
                        code: 'groupFee',
                        name: '集团保底费',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                      },
                    ],
                    onlySetPatch: true,
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'customActionCode',
                      dataId: 170497269619191580,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '844508',
                        pageJsonId: '537892',
                        actionTitle: '',
                        code: 'function main(data,state,success,fail){var attrList=[];var obj=data.factorForm;for(var key in obj){attrList.push({"attrCode":key,"attrName":"","attrValue":obj[key]})}data.sceneSubmit.attrList=attrList;success(attrList)};',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'callParentCustomFunc',
                          dataId: 170497269619102880,
                          options: {
                            compId: 'callParentCustomFunc',
                            compName: 'system',
                            id: '706086',
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
              eventDatasetDataSource101.params =
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
                eventDatasetDataSource101,
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
            ref={(r: any) => (refs['Form_565974'] = r)}
            {...injectData}
          >
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
              fieldName={'reason'}
              value={data?.factorForm?.reason}
              formItemIndex={0}
              allowClear={true}
              tipIcon={{
                theme: 'outlined',
                type: 'question-circle',
                isIconFont: false,
              }}
              tipContent={
                '该集团主要为XX（集团简单介绍），原已合作XX业务。现阶段有意向与我司合作集团固话业务，合作期XX年。鉴于XX，拟申请按以下资费合作'
              }
              $$componentItem={{
                id: 'Input_9870174',
                uid: 'Input_9870174',
                type: 'TextArea',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_9870174'] = r)}
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
                id: 'Form_395851_1727917_005435_539324',
                uid: 'Form_395851_1727917_005435_539324',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              style={{ padding: '0px 0px 0px 0px', margin: '10px 0px 0px 0px' }}
              ref={(r: any) => (refs['Form_395851_1727917_005435_539324'] = r)}
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
                  id: 'Input_690228_5400337_5332635_403802',
                  uid: 'Input_690228_5400337_5332635_403802',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  (refs['Input_690228_5400337_5332635_403802'] = r)
                }
                {...injectData}
              />
              <View
                name={'布局容器'}
                labelCol={8}
                wrapperCol={16}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_22346374_875512_807573_3143213',
                  uid: 'View_22346374_875512_807573_3143213',
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
                  (refs['View_22346374_875512_807573_3143213'] = r)
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
                    id: 'StdUpload_6230546_867413_48478_09082',
                    uid: 'StdUpload_6230546_867413_48478_09082',
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
                    const eventDatagetSelectedData171: any = [
                      {
                        type: 'getSelectedData',
                        dataId: 166555961607052380,
                        options: {
                          compId: 'Input_690228_5400337_5332635_403802',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Select',
                          id: '0834653',
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'setDataSource',
                            dataId: 166555962273478340,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '836662553',
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
                                    code: '$selectedData_0834653[0].value$',
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
                                    code: '$selectedData_0834653[0].label$',
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
                                dataId: 166555962273528420,
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '8262505',
                                  pageJsonId: '537892',
                                  code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=data.fileInfoList;success(data.sceneSubmit)};',
                                },
                                line_number: 3,
                                callback1: [
                                  {
                                    type: 'console',
                                    dataId: 166555962273500000,
                                    options: {
                                      compId: 'debug',
                                      compName: 'system',
                                      id: '396246',
                                      pageJsonId: '537892',
                                      value: ['$data_8262505$'],
                                    },
                                    line_number: 4,
                                  },
                                  {
                                    type: 'callParentCustomFunc',
                                    dataId: 166555962273540100,
                                    options: {
                                      compId: 'callParentCustomFunc',
                                      compName: 'system',
                                      id: '768727',
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
                        callback2: [],
                      },
                    ];
                    eventDatagetSelectedData171.params =
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
                      eventDatagetSelectedData171,
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
                    const eventDatacustomActionCode467: any = [
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
                    eventDatacustomActionCode467.params =
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
                      eventDatacustomActionCode467,
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
                    (refs['StdUpload_6230546_867413_48478_09082'] = r)
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
            visible={false}
            readOnly={false}
            style={{ margin: '10px 0px 0px 0px' }}
            onRowDelete={(rowId: any, row: any, index: any) => {
              const eventDatacustomActionCode468: any = [
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
              eventDatacustomActionCode468.params =
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
                eventDatacustomActionCode468,
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
              const eventDatadownloadByFileId30: any = [
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
              eventDatadownloadByFileId30.params =
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
                eventDatadownloadByFileId30,
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
          ref={(r: any) => (refs['BOFramer_251521'] = r)}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(ClsCp_0004_0002$$Page, {
  pageId: '897380777271992320',
  hasLogin: false,
  dataSource,
  defaultState: {},
});
