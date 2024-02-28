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
  Row,
  Text,
  Button,
  StdUpload,
  Table,
} from '@/components/factory';

import BusiComp0521965 from '@/components/BusiComp0521965';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import { styleInject } from '@/utils/styleInject';

import dataSource from './dataSource.json';

styleInject(
  '.__CustomClass_537892__ .Table_076617 .custom-table-class .pcfactory-table-row .pcfactory-table-cell:last-child{max-width:400px;}',

  '537892',
);

const pageId = '1044810860926447616';
const ClsCp_0003_0005$$Page: React.FC<PageProps> = ({
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
  const fileUpload = (options_1964167: any) => {
    const eventDatacustomActionCode115: any = [
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
    eventDatacustomActionCode115.params =
      [
        {
          title: '事件入参',
          name: 'options_1964167',
          value: '$options_1964167$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode115,
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
    const eventDataifelse184: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '626343',
            options: {
              useManual: true,
              useObject: false,
              context: '$state.scene$',
              operate: '!=',
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
              operate: '!=',
              manualValue: 'P',
            },
            condId: '7546792',
            connector: '&&',
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 169932782226499900,
        elseIfs: [],
        line_number: 1,
        callback1: [
          {
            type: 'sysSetVisible',
            dataId: 169932785814670980,
            options: {
              compId: ['Text_961049'],
              compName: 'page',
              id: '539124',
              pageJsonId: '537892',
              visible: 'true',
              compid: ['Text_961049'],
            },
            line_number: 2,
          },
        ],
      },
    ];
    eventDataifelse184.params = [] || [];
    CMDGenerator(eventDataifelse184, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDataapiRequest339: any = [
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
        line_number: 3,
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
            line_number: 4,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest339.params = [] || [];
    CMDGenerator(eventDataapiRequest339, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest340: any = [
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
                      dataKey: '115742_root.body.attrCode',
                      value: { type: ['customize'], code: 'urgencyGrade' },
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
                  dataKey: '115742_root.body',
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
              dataKey: '115742_root',
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
            line_number: 6,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest340.params = [] || [];
    CMDGenerator(eventDataapiRequest340, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest341: any = [
      {
        type: 'apiRequest',
        dataId: 170104959621040500,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '0051025',
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
                      dataKey: '0051025_root.body.catalogCode',
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
                      dataKey: '0051025_root.body.attrCode',
                      value: { type: ['customize'], code: 'devChannel' },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.body',
                  dataKey: '0051025_root.body',
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
                  dataKey: '0051025_root.header',
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
                  dataKey: '0051025_root.path',
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
                  dataKey: '0051025_root.query',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '0051025_root',
            },
          ],
        },
        line_number: 7,
        callback1: [
          {
            type: 'reloadColServiceData',
            dataId: 170104962259731970,
            options: {
              compId: 'Table_076617',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Table',
              id: '4334856',
              colName: 'devChannel',
              data: '$reply_0051025?.resultData$',
            },
            line_number: 8,
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest341.params = [] || [];
    CMDGenerator(eventDataapiRequest341, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest342: any = [
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
        line_number: 9,
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
            line_number: 10,
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
                line_number: 11,
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
    eventDataapiRequest342.params = [] || [];
    CMDGenerator(eventDataapiRequest342, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse185: any = [
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
        line_number: 12,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 166132449559169250,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '9981685',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var item=state.itemList;var factorForm={};var attrList=item.attrList;if(attrList!=undefined&&attrList.length>0){for(var i=0;i<attrList.length;i++){factorForm[attrList[i].attrCode]=attrList[i].attrValue}}data.factorForm=factorForm;data.sceneSubmit.approveGrade=item.approveGrade;data.sceneSubmit.approveGradeName=item.approveGradeName;data.sceneSubmit.instList=item.instList;data.sceneSubmit.attrList=item.attrList;var groupInfoList=[];item.instList.forEach(function(v){var feeObj={};var instList=v.instAttrList;if(instList!=undefined&&instList.length>0){for(var i=0;i<instList.length;i++){feeObj[instList[i].attrCode]=instList[i].attrValue}feeObj.rowId=parseInt(v.instCode);groupInfoList.push(feeObj)}});success(groupInfoList)};',
              actionTitle: '设置界面初始化值',
            },
            line_number: 13,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 166305500105467000,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '013094',
                  pageJsonId: '537892',
                  dataSourceId: 170070915432264800,
                  dataSourceName: 'groupInfoList',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      attrId: '7393296',
                      code: 'groupId',
                      name: '集团编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['groupId'],
                      _idpath: ['7393296'],
                    },
                    {
                      attrId: '797788',
                      code: 'groupName',
                      name: '集团名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['groupName'],
                      _idpath: ['797788'],
                    },
                    {
                      attrId: '779542',
                      code: 'busiAccessNumber',
                      name: '业务接入号',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['busiAccessNumber'],
                      _idpath: ['779542'],
                    },
                    {
                      attrId: '387571',
                      code: 'sign',
                      name: '签名',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['sign'],
                      _idpath: ['387571'],
                    },
                    {
                      attrId: '2941536',
                      code: 'devChannel',
                      name: '发展渠道',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['devChannel'],
                      _idpath: ['2941536'],
                    },
                    {
                      attrId: '00254',
                      code: 'channelName',
                      name: '渠道名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['channelName'],
                      _idpath: ['00254'],
                    },
                    {
                      attrId: '488447',
                      code: 'devChannelName',
                      name: '发展渠道名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['devChannelName'],
                      _idpath: ['488447'],
                    },
                  ],
                  operateType: 3,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  newData: '$data_9981685$',
                  targetDataSourcePaths: [],
                },
                line_number: 14,
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
                line_number: 15,
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
            line_number: 16,
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
                line_number: 17,
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
            line_number: 18,
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
                line_number: 19,
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
                line_number: 20,
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
                line_number: 21,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse185.params = [] || [];
    CMDGenerator(eventDataifelse185, {}, 'ifelse', {
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
          dividerText={'行业端口重点保障审批单'}
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
                height: '100%',
                overflowY: 'hidden',
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
                  refs.setComponentRef(
                    r,
                    'Form_4311097_9385662_8411515_9167293_4337769_708507_903502_3391966_7284254',
                  )
                }
                {...injectData}
              >
                <Checkbox
                  name={'审批场景'}
                  titleTip={'text'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  text={'行业端口重点保障审批单'}
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
                    refs.setComponentRef(
                      r,
                      'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_855402',
                    )
                  }
                  {...injectData}
                />
                <View
                  className="View_View_6319234_3569864_15467365_781748_241037"
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
                    refs.setComponentRef(
                      r,
                      'View_6319234_3569864_15467365_781748_241037',
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
                    refs.setComponentRef(
                      r,
                      'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_3906775',
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
            onValuesChange={(changedFieldName: any, changedValue: any) => {
              const eventDatasetDataSource148: any = [
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
                        showInput: true,
                        _codePath: ['reason'],
                        _idpath: ['371174'],
                      },
                      {
                        attrId: '351233',
                        code: 'urgencyGrade',
                        name: '紧急程度',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['urgencyGrade'],
                        _idpath: ['351233'],
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812',
                            'getFieldsValue',
                          ],
                          code: 'urgencyGrade',
                        },
                      },
                      {
                        attrId: '2220604',
                        code: 'suggestFinishDate',
                        name: '建议完成时间',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['suggestFinishDate'],
                        _idpath: ['2220604'],
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812',
                            'getFieldsValue',
                          ],
                          code: 'suggestFinishDate',
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
                        code: 'function main(data,state,success,fail){var attrList=[];var obj=data.factorForm;for(var key in obj){attrList.push({"attrCode":key,"attrName":"","attrValue":obj[key]})}data.sceneSubmit.attrList=attrList;console.log("data.sceneSubmit.attrList",data.sceneSubmit.attrList);success(attrList)};',
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
              eventDatasetDataSource148.params =
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
                eventDatasetDataSource148,
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
          <Row
            name={'行容器'}
            colSpan={12}
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
            ref={(r: any) => refs.setComponentRef(r, 'Row_851')}
            {...injectData}
          >
            <View
              className="View_View_632947"
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_632947',
                uid: 'View_632947',
                type: 'View',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
                lineHeight: '100%px',
                height: '100%',
                justifyContent: 'flex-end',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_632947')}
              {...injectData}
            >
              <Text
                name={'至少填写一个代理商信息'}
                content={'至少填写一个集团\n'}
                textType={'span'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_961049',
                  uid: 'Text_961049',
                  type: 'Text',
                  ...componentItem,
                }}
                disabled={false}
                visible={false}
                readOnly={false}
                style={{
                  textAlign: 'left',
                  fontSize: '14px',
                  lineHeight: '24px',
                  color: 'rgba(208, 2, 27, 1)',
                  backgroundColor: 'rgba(255, 255, 255,0)',
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Text_961049')}
                {...injectData}
              />
            </View>
            <View
              className="View_View_859813"
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
              ref={(r: any) => refs.setComponentRef(r, 'View_859813')}
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
                  const eventDatashowCustomModal174: any = [
                    {
                      type: 'showCustomModal',
                      dataId: 166314610874318850,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '611628',
                        pageJsonId: '537892',
                        modalname: '/CLS_CP_0003_0005ADDINFOcopy',
                        pageId: '1044814615281512448',
                        paramsObj: {
                          phone: '$value_24586657$',
                          lanId: '$state.lanId$',
                          catalogCode: '$state.catalogCode$',
                          isCoreFlag: '1',
                          officialAgencyList: '$data.officialAgencyList$',
                          staffCode: '$state.staffCode$',
                        },
                        paramsObjKeyValueMap: {
                          phone: '$value_24586657$',
                          lanId: '$state.lanId$',
                          catalogCode: '$state.catalogCode$',
                          isCoreFlag: '1',
                          officialAgencyList: '$data.officialAgencyList$',
                          staffCode: '$state.staffCode$',
                        },
                        modalPath: '/CLS_CP_0003_0005ADDINFOcopy',
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
                            code: 'function main(data,state,success,fail){console.log("\\u5F39\\u7A97\\u8FD4\\u56DE:",okData_611628);var res=okData_611628;var groupInfoList=data.groupInfoList||[];console.log("groupInfoList = ",groupInfoList);if(groupInfoList.length>0){var maxRowId=1;for(var i=0;i<groupInfoList.length;i++){var rowId=parseInt(groupInfoList[i]["rowId"]);if(maxRowId<=rowId){maxRowId=rowId}}res.rowId=parseInt(maxRowId)+1}else{res.rowId=1}groupInfoList.unshift(res);var instList=[];for(var key in res){instList.push({"attrCode":key,"attrName":"","attrValue":res[key]})}var instObj={"instCode":res.rowId,"instAttrList":instList};if(data.sceneSubmit.instList!=undefined&&data.sceneSubmit.instList.length>0){data.sceneSubmit.instList.unshift(instObj)}else{var instList=[];instList.unshift(instObj);data.sceneSubmit.instList=instList}data.groupInfoList=groupInfoList;success()};',
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
                                dataSourceId: 170070915432264800,
                                dataSourceName: 'groupInfoList',
                                dataSourceRelType: 'custom',
                                dataSourceSetValue: [
                                  {
                                    attrId: '7393296',
                                    code: 'groupId',
                                    name: '集团编码',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['groupId'],
                                    _idpath: ['7393296'],
                                  },
                                  {
                                    attrId: '797788',
                                    code: 'groupName',
                                    name: '集团名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['groupName'],
                                    _idpath: ['797788'],
                                  },
                                  {
                                    attrId: '779542',
                                    code: 'busiAccessNumber',
                                    name: '业务接入号',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['busiAccessNumber'],
                                    _idpath: ['779542'],
                                  },
                                  {
                                    attrId: '387571',
                                    code: 'sign',
                                    name: '签名',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['sign'],
                                    _idpath: ['387571'],
                                  },
                                  {
                                    attrId: '2941536',
                                    code: 'devChannel',
                                    name: '发展渠道',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['devChannel'],
                                    _idpath: ['2941536'],
                                  },
                                  {
                                    attrId: '00254',
                                    code: 'channelName',
                                    name: '渠道名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['channelName'],
                                    _idpath: ['00254'],
                                  },
                                  {
                                    attrId: '488447',
                                    code: 'devChannelName',
                                    name: '发展渠道名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['devChannelName'],
                                    _idpath: ['488447'],
                                  },
                                ],
                                operateType: 1,
                                onlySetPatch: true,
                                otherObjectArrayOptions: {},
                                targetDataSourcePaths: [],
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
                  eventDatashowCustomModal174.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatashowCustomModal174,
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
                classification={'default'}
                autoProcessFlow={false}
                flowProcessResult={'common'}
                iconPosition={'left'}
                ghost={false}
                block={false}
                size={'default'}
                type={'danger'}
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
                  const eventDatagetTableSelectedKey62: any = [
                    {
                      type: 'getTableSelectedKey',
                      dataId: 169943184402124000,
                      options: {
                        compId: 'Table_076617',
                        compLib: 'comm',
                        pageJsonId: '537892',
                        compName: 'Table',
                        id: '242263',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'ifelse',
                          condition: [
                            {
                              condId: '03277678',
                              options: {
                                context: '$selectedRowKeys_242263$',
                                operate: 'empty',
                              },
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          dataId: 169943185193838300,
                          elseIfs: [
                            {
                              dataName: 'elseIf',
                              dataId: 169943185193800670,
                              children: [
                                {
                                  dataName: 'action',
                                  dataId: 169943185193851000,
                                  children: [
                                    {
                                      dataName: 'callback',
                                      dataId: 169943185193830100,
                                      children: [
                                        {
                                          dataName: 'action',
                                          dataId: 169943185193829000,
                                          children: [
                                            {
                                              dataName: 'callback',
                                              dataId: 169943185193863140,
                                              children: [
                                                {
                                                  dataName: 'action',
                                                  dataId: 169943185193865820,
                                                  children: [
                                                    {
                                                      dataName: 'callback',
                                                      dataId: 169943185193852320,
                                                      children: [],
                                                      value: 'callback1',
                                                      params: [],
                                                    },
                                                    {
                                                      dataName: 'callback',
                                                      dataId: 169943185193803740,
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
                                                    id: '609044',
                                                    pageJsonId: '537892',
                                                    dataSourceId: 170070915432264800,
                                                    dataSourceName:
                                                      'groupInfoList',
                                                    dataSourceRelType: 'custom',
                                                    dataSourceSetValue: [
                                                      {
                                                        attrId: '7393296',
                                                        code: 'groupId',
                                                        name: '集团编码',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                        showInput: false,
                                                      },
                                                      {
                                                        attrId: '797788',
                                                        code: 'groupName',
                                                        name: '集团名称',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                        showInput: false,
                                                      },
                                                      {
                                                        attrId: '779542',
                                                        code: 'busiAccessNumber',
                                                        name: '业务接入号',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                        showInput: false,
                                                      },
                                                      {
                                                        attrId: '387571',
                                                        code: 'sign',
                                                        name: '签名',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                        showInput: false,
                                                      },
                                                      {
                                                        attrId: '2941536',
                                                        code: 'devChannel',
                                                        name: '发展渠道',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                        showInput: false,
                                                      },
                                                      {
                                                        attrId: '00254',
                                                        code: 'channelName',
                                                        name: '渠道名称',
                                                        type: 'string',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                        showInput: false,
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
                                                  line_number: 6,
                                                },
                                                {
                                                  dataName: 'action',
                                                  dataId: 169943185193837440,
                                                  children: [
                                                    {
                                                      dataName: 'callback',
                                                      dataId: 169943185193879900,
                                                      children: [
                                                        {
                                                          dataName: 'action',
                                                          dataId: 169943189659108960,
                                                          children: [],
                                                          todoOptions: [],
                                                          options: {
                                                            compId:
                                                              'Table_076617',
                                                            compLib: 'comm',
                                                            pageJsonId:
                                                              '537892',
                                                            compName: 'Table',
                                                            id: '510375',
                                                          },
                                                          actionObjId:
                                                            'Table_076617',
                                                          actionObjName:
                                                            'Table',
                                                          value:
                                                            'clearTableSelected',
                                                          compLib: 'comm',
                                                          line_number: 8,
                                                        },
                                                      ],
                                                      value: 'callback1',
                                                      params: [],
                                                    },
                                                    {
                                                      dataName: 'callback',
                                                      dataId: 169943185193893120,
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
                                                    id: '903344',
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
                                                  line_number: 7,
                                                },
                                              ],
                                              value: 'callback1',
                                              params: [],
                                            },
                                            {
                                              dataName: 'callback',
                                              dataId: 169943185193879100,
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
                                            id: '23945',
                                            pageJsonId: '537892',
                                            code: 'function main(data,state,success,fail){var groupInfoList=data.groupInfoList;var sel=selectedRowKeys_242263;var res=[];var instList=[];if(sel!=undefined&&sel.length>0){groupInfoList.forEach(function(v){var exit=sel.findIndex(function(item){return item==v.rowId});console.log(exit);if(exit===-1){res.push(v)}});data.groupInfoList=res;data.sceneSubmit.instList.forEach(function(v){var exit=sel.findIndex(function(item){return item==v.instCode});if(exit===-1){instList.push(v)}});data.sceneSubmit.instList=instList}success()};',
                                          },
                                          actionObjId: 'customActionCode',
                                          actionObjName: 'page',
                                          value: 'customActionCode',
                                          line_number: 5,
                                        },
                                      ],
                                      value: 'callback1',
                                      params: [],
                                    },
                                    {
                                      dataName: 'callback',
                                      dataId: 169943185193835360,
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
                                    id: '701974',
                                    pageJsonId: '537892',
                                    type: 'confirm',
                                    title: '温馨提示',
                                    content: '您确定要删除吗?',
                                    okText: '确认',
                                  },
                                  actionObjId: 'showModal',
                                  actionObjName: 'page',
                                  value: 'showModal',
                                  line_number: 4,
                                },
                              ],
                              condition: [],
                              value: 'elseIf',
                              callback: [
                                {
                                  type: 'showModal',
                                  dataId: 169943185193851000,
                                  options: {
                                    compId: 'showModal',
                                    compName: 'page',
                                    id: '701974',
                                    pageJsonId: '537892',
                                    type: 'confirm',
                                    title: '温馨提示',
                                    content: '您确定要删除吗?',
                                    okText: '确认',
                                  },
                                  line_number: 4,
                                  callback1: [
                                    {
                                      type: 'customActionCode',
                                      dataId: 169943185193829000,
                                      options: {
                                        compId: 'customActionCode',
                                        compName: 'page',
                                        id: '23945',
                                        pageJsonId: '537892',
                                        code: 'function main(data,state,success,fail){var groupInfoList=data.groupInfoList;var sel=selectedRowKeys_242263;var res=[];var instList=[];if(sel!=undefined&&sel.length>0){groupInfoList.forEach(function(v){var exit=sel.findIndex(function(item){return item==v.rowId});console.log(exit);if(exit===-1){res.push(v)}});data.groupInfoList=res;data.sceneSubmit.instList.forEach(function(v){var exit=sel.findIndex(function(item){return item==v.instCode});if(exit===-1){instList.push(v)}});data.sceneSubmit.instList=instList}success()};',
                                      },
                                      line_number: 5,
                                      callback1: [
                                        {
                                          type: 'setDataSource',
                                          dataId: 169943185193865820,
                                          options: {
                                            compId: 'setDataSource',
                                            compName: 'page',
                                            id: '609044',
                                            pageJsonId: '537892',
                                            dataSourceId: 170070915432264800,
                                            dataSourceName: 'groupInfoList',
                                            dataSourceRelType: 'custom',
                                            dataSourceSetValue: [
                                              {
                                                attrId: '7393296',
                                                code: 'groupId',
                                                name: '集团编码',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                                showInput: false,
                                              },
                                              {
                                                attrId: '797788',
                                                code: 'groupName',
                                                name: '集团名称',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                                showInput: false,
                                              },
                                              {
                                                attrId: '779542',
                                                code: 'busiAccessNumber',
                                                name: '业务接入号',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                                showInput: false,
                                              },
                                              {
                                                attrId: '387571',
                                                code: 'sign',
                                                name: '签名',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                                showInput: false,
                                              },
                                              {
                                                attrId: '2941536',
                                                code: 'devChannel',
                                                name: '发展渠道',
                                                type: 'string',
                                                initialData: { type: 'static' },
                                                showInput: false,
                                              },
                                              {
                                                attrId: '00254',
                                                code: 'channelName',
                                                name: '渠道名称',
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
                                          line_number: 6,
                                          callback1: [],
                                          callback2: [],
                                        },
                                        {
                                          type: 'callParentCustomFunc',
                                          dataId: 169943185193837440,
                                          options: {
                                            compId: 'callParentCustomFunc',
                                            compName: 'system',
                                            id: '903344',
                                            pageJsonId: '537892',
                                            pathname: '/auditOrderPrepare',
                                            pageId: '884045146848604160',
                                            customFuncName: 'getFactor',
                                            customFuncParams:
                                              '$data.sceneSubmit$',
                                            modalPath: '/auditOrderPrepare',
                                          },
                                          line_number: 7,
                                          callback1: [
                                            {
                                              type: 'clearTableSelected',
                                              dataId: 169943189659108960,
                                              options: {
                                                compId: 'Table_076617',
                                                compLib: 'comm',
                                                pageJsonId: '537892',
                                                compName: 'Table',
                                                id: '510375',
                                              },
                                              line_number: 8,
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
                            },
                          ],
                          line_number: 2,
                          callback1: [
                            {
                              type: 'showMessage',
                              dataId: 169943185193817150,
                              options: {
                                compId: 'showMessage',
                                compName: 'system',
                                id: '643315',
                                pageJsonId: '537892',
                                type: 'warn',
                                value: '清先选择数据！',
                              },
                              line_number: 3,
                            },
                          ],
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatagetTableSelectedKey62.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatagetTableSelectedKey62,
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
                  const eventDataifelse481: any = [
                    {
                      type: 'ifelse',
                      condition: [
                        {
                          condId: '913482',
                          options: {
                            context: '$data.groupInfoList$',
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
                            context: '$data.groupInfoList.length$',
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
                            okText: '确认',
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
                                dataSourceId: 170070915432264800,
                                dataSourceName: 'groupInfoList',
                                dataSourceRelType: 'custom',
                                dataSourceSetValue: [
                                  {
                                    attrId: '7393296',
                                    code: 'groupId',
                                    name: '集团编码',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['groupId'],
                                    _idpath: ['7393296'],
                                  },
                                  {
                                    attrId: '797788',
                                    code: 'groupName',
                                    name: '集团名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['groupName'],
                                    _idpath: ['797788'],
                                  },
                                  {
                                    attrId: '779542',
                                    code: 'busiAccessNumber',
                                    name: '业务接入号',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['busiAccessNumber'],
                                    _idpath: ['779542'],
                                  },
                                  {
                                    attrId: '387571',
                                    code: 'sign',
                                    name: '签名',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['sign'],
                                    _idpath: ['387571'],
                                  },
                                  {
                                    attrId: '2941536',
                                    code: 'devChannel',
                                    name: '发展渠道',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['devChannel'],
                                    _idpath: ['2941536'],
                                  },
                                  {
                                    attrId: '00254',
                                    code: 'channelName',
                                    name: '渠道名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['channelName'],
                                    _idpath: ['00254'],
                                  },
                                  {
                                    attrId: '488447',
                                    code: 'devChannelName',
                                    name: '发展渠道名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: false,
                                    _codePath: ['devChannelName'],
                                    _idpath: ['488447'],
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
                  eventDataifelse481.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDataifelse481, { e }, 'ifelse', {
                    id: 'ifelse',
                    name: 'ifelse',
                    type: 'ifelse',
                    platform: 'pc',
                  });
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Button_5473437')}
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
                  const eventDatasetLoading186: any = [
                    {
                      type: 'setLoading',
                      dataId: 169943178025949100,
                      options: {
                        compId: 'Table_076617',
                        compLib: 'comm',
                        pageJsonId: '537892',
                        compName: 'Table',
                        id: '084422',
                        loading: true,
                      },
                      line_number: 1,
                    },
                  ];
                  eventDatasetLoading186.params =
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
                    eventDatasetLoading186,
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
                  const eventDataapiRequest741: any = [
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
                                dataKey: '9706607_root.header',
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
                                dataKey: '9706607_root.path',
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
                                dataKey: '9706607_root.query',
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
                                    dataKey: '9706607_root.body.fileCode',
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
                                    dataKey: '9706607_root.body.sceneCode',
                                    value: {
                                      type: ['customize'],
                                      code: '$state.catalogCode$',
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
                                dataKey: '9706607_root.body',
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
                        _sourceName: '使用EasyExcel解析Excel-hyj',
                        valueType: 'object',
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
                                context: '$reply_9706607?.resultCode$',
                                operate: '==',
                                manualValue: '0',
                              },
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                            {
                              options: {
                                context: '$reply_9706607?.resultMsg$',
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
                                context: '$reply_9706607?.resultMsg$',
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
                          dataId: 169926446650638270,
                          elseIfs: [
                            {
                              dataName: 'elseIf',
                              dataId: 169926446650686430,
                              children: [
                                {
                                  dataName: 'action',
                                  dataId: 169932150871785630,
                                  children: [
                                    {
                                      dataName: 'callback',
                                      dataId: 169932150871768740,
                                      children: [
                                        {
                                          dataName: 'action',
                                          dataId: 169932151784983330,
                                          children: [
                                            {
                                              dataName: 'callback',
                                              dataId: 169932151784901000,
                                              children: [
                                                {
                                                  dataName: 'action',
                                                  dataId: 169932151784975000,
                                                  children: [
                                                    {
                                                      dataName: 'callback',
                                                      dataId: 169932151784922370,
                                                      children: [
                                                        {
                                                          dataName: 'action',
                                                          dataId: 169932151784973860,
                                                          children: [
                                                            {
                                                              dataName:
                                                                'callback',
                                                              dataId: 169932151784971600,
                                                              children: [],
                                                              value:
                                                                'callback1',
                                                              params: [],
                                                            },
                                                            {
                                                              dataName:
                                                                'callback',
                                                              dataId: 169932151784963000,
                                                              children: [],
                                                              value:
                                                                'callback2',
                                                              params: [],
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
                                                            id: '96367',
                                                            pageJsonId:
                                                              '537892',
                                                            dataSourceId: 170070915432264800,
                                                            dataSourceName:
                                                              'groupInfoList',
                                                            dataSourceRelType:
                                                              'custom',
                                                            dataSourceSetValue:
                                                              [
                                                                {
                                                                  attrId:
                                                                    '7393296',
                                                                  code: 'groupId',
                                                                  name: '集团编码',
                                                                  type: 'string',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                  showInput: false,
                                                                },
                                                                {
                                                                  attrId:
                                                                    '797788',
                                                                  code: 'groupName',
                                                                  name: '集团名称',
                                                                  type: 'string',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                  showInput: false,
                                                                },
                                                                {
                                                                  attrId:
                                                                    '779542',
                                                                  code: 'busiAccessNumber',
                                                                  name: '业务接入号',
                                                                  type: 'string',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                  showInput: false,
                                                                },
                                                                {
                                                                  attrId:
                                                                    '387571',
                                                                  code: 'sign',
                                                                  name: '签名',
                                                                  type: 'string',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                  showInput: false,
                                                                },
                                                                {
                                                                  attrId:
                                                                    '2941536',
                                                                  code: 'devChannel',
                                                                  name: '发展渠道',
                                                                  type: 'string',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                  showInput: false,
                                                                },
                                                                {
                                                                  attrId:
                                                                    '00254',
                                                                  code: 'channelName',
                                                                  name: '渠道名称',
                                                                  type: 'string',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                  showInput: false,
                                                                },
                                                              ],
                                                            operateType: 3,
                                                            onlySetPatch: true,
                                                            otherObjectArrayOptions:
                                                              {},
                                                            targetDataSourcePaths:
                                                              [],
                                                            newData:
                                                              '$data_4868144$',
                                                          },
                                                          actionObjId:
                                                            'setDataSource',
                                                          actionObjName: 'page',
                                                          value:
                                                            'setDataSource',
                                                          line_number: 10,
                                                        },
                                                        {
                                                          dataName: 'action',
                                                          dataId: 169932151784943970,
                                                          children: [
                                                            {
                                                              dataName:
                                                                'callback',
                                                              dataId: 169932151784964000,
                                                              children: [
                                                                {
                                                                  dataName:
                                                                    'action',
                                                                  dataId: 169932151784918340,
                                                                  children: [
                                                                    {
                                                                      dataName:
                                                                        'callback',
                                                                      dataId: 169932151784983680,
                                                                      children:
                                                                        [
                                                                          {
                                                                            dataName:
                                                                              'action',
                                                                            dataId: 169932151784948100,
                                                                            children:
                                                                              [],
                                                                            todoOptions:
                                                                              [
                                                                                'msgType',
                                                                                'value',
                                                                                'duration',
                                                                              ],
                                                                            options:
                                                                              {
                                                                                compId:
                                                                                  'showMessage',
                                                                                compName:
                                                                                  'system',
                                                                                id: '365449',
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
                                                                            line_number: 13,
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
                                                                      dataId: 169932151784977250,
                                                                      children:
                                                                        [],
                                                                      value:
                                                                        'callback2',
                                                                      params:
                                                                        [],
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
                                                                    compName:
                                                                      'system',
                                                                    id: '937256',
                                                                    pageJsonId:
                                                                      '537892',
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
                                                                  actionObjName:
                                                                    'system',
                                                                  value:
                                                                    'callParentCustomFunc',
                                                                  line_number: 12,
                                                                },
                                                              ],
                                                              value:
                                                                'callback1',
                                                              params: [],
                                                            },
                                                            {
                                                              dataName:
                                                                'callback',
                                                              dataId: 169932151784993950,
                                                              children: [],
                                                              value:
                                                                'callback2',
                                                              params: [],
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
                                                            id: '75859',
                                                            pageJsonId:
                                                              '537892',
                                                            dataSourceId: 166096152690913730,
                                                            dataSourceName:
                                                              'sceneSubmit',
                                                            dataSourceRelType:
                                                              'custom',
                                                            dataSourceSetValue:
                                                              [
                                                                {
                                                                  attrId:
                                                                    '154379',
                                                                  code: 'catalogCode',
                                                                  name: '类目编码',
                                                                  type: 'string',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                  showInput: true,
                                                                },
                                                                {
                                                                  attrId:
                                                                    '4562264',
                                                                  code: 'approveGrade',
                                                                  name: '审批等级',
                                                                  type: 'string',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                  showInput: true,
                                                                },
                                                                {
                                                                  attrId:
                                                                    '63768',
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
                                                                      '$data_9667386$',
                                                                    ],
                                                                    code: 'attrList',
                                                                  },
                                                                },
                                                                {
                                                                  attrId:
                                                                    '919265',
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
                                                                  attrId:
                                                                    '360171',
                                                                  code: 'catalogItemCode',
                                                                  name: '类目项编码',
                                                                  type: 'string',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                  showInput: true,
                                                                },
                                                                {
                                                                  attrId:
                                                                    '420623',
                                                                  code: 'catalogItemSubType',
                                                                  name: '类目项子类型',
                                                                  type: 'string',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                  showInput: true,
                                                                },
                                                                {
                                                                  attrId:
                                                                    '375466',
                                                                  code: 'childCatalogCode',
                                                                  name: '子类目项编码',
                                                                  type: 'string',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                  showInput: true,
                                                                },
                                                                {
                                                                  attrId:
                                                                    '9257773',
                                                                  code: 'parentCatalogCode',
                                                                  name: '上级类目编码',
                                                                  type: 'string',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                  showInput: true,
                                                                },
                                                                {
                                                                  attrId:
                                                                    '5733013',
                                                                  code: 'parentCatalogItemCode',
                                                                  name: '上级类目项编码',
                                                                  type: 'string',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                  showInput: true,
                                                                },
                                                                {
                                                                  attrId:
                                                                    '440627',
                                                                  code: 'childCatalogDesc',
                                                                  name: '子类目项描述',
                                                                  type: 'string',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                  showInput: true,
                                                                },
                                                                {
                                                                  attrId:
                                                                    '177104',
                                                                  code: 'approveGradeName',
                                                                  name: '审批等级名称',
                                                                  type: 'string',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                  showInput: true,
                                                                },
                                                                {
                                                                  attrId:
                                                                    '13154521',
                                                                  code: 'custMemberList',
                                                                  name: '成员信息',
                                                                  type: 'objectArray',
                                                                  initialData: {
                                                                    type: 'static',
                                                                  },
                                                                  showInput: true,
                                                                },
                                                                {
                                                                  attrId:
                                                                    '1349543',
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
                                                                      '$data_9667386$',
                                                                    ],
                                                                    code: 'instList',
                                                                  },
                                                                },
                                                              ],
                                                            operateType: 1,
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
                                                          line_number: 11,
                                                        },
                                                      ],
                                                      value: 'callback1',
                                                      params: [],
                                                    },
                                                    {
                                                      dataName: 'callback',
                                                      dataId: 169932151784959200,
                                                      children: [
                                                        {
                                                          dataName: 'action',
                                                          dataId: 169932151784909220,
                                                          children: [],
                                                          todoOptions: [
                                                            'msgType',
                                                            'value',
                                                            'duration',
                                                          ],
                                                          options: {
                                                            compId:
                                                              'showMessage',
                                                            compName: 'system',
                                                            id: '24928',
                                                            pageJsonId:
                                                              '537892',
                                                            type: 'error',
                                                            value:
                                                              '$fail_9667386$',
                                                          },
                                                          actionObjId:
                                                            'showMessage',
                                                          actionObjName:
                                                            'system',
                                                          value: 'showMessage',
                                                          tips: '注意：当加载时长为0时，表示一直显示加载中。当加载时长大于0时，表示按照设置时间显示加载中。',
                                                          line_number: 14,
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
                                                    id: '9667386',
                                                    pageJsonId: '537892',
                                                    code: 'function main(data,state,success,fail){var list=data_4868144||[];var instList=[];for(var i=0;i<list.length;i++){var obj=list[i];var instAttrList=[];for(var key in obj){instAttrList.push({"attrCode":key,"attrValue":obj[key]})}var instCode=obj["rowId"];instList.push({instCode:instCode,instAttrList:instAttrList})}var factorForm=data.factorForm||{};var attrList=[];for(var _key in factorForm){attrList.push({"attrCode":_key,"attrValue":factorForm[_key]})}data.sceneSubmit.attrList=attrList;data.sceneSubmit.instList=instList;console.log("attrList = ",attrList);console.log("instList = ",instList);success(data.sceneSubmit)};',
                                                  },
                                                  actionObjId:
                                                    'customActionCode',
                                                  actionObjName: 'page',
                                                  value: 'customActionCode',
                                                  tips: '注意：如果需要配合退出事件，请在代码块中增加return true',
                                                  line_number: 9,
                                                },
                                              ],
                                              value: 'callback1',
                                              params: [],
                                            },
                                            {
                                              dataName: 'callback',
                                              dataId: 169932151784966000,
                                              children: [
                                                {
                                                  dataName: 'action',
                                                  dataId: 169932151784932740,
                                                  children: [],
                                                  todoOptions: ['valueArray'],
                                                  options: {
                                                    compId: 'debug',
                                                    compName: 'system',
                                                    id: '06975',
                                                    pageJsonId: '537892',
                                                    value: ['$fail_4868144$'],
                                                  },
                                                  actionObjId: 'debug',
                                                  actionObjName: 'system',
                                                  value: 'console',
                                                  line_number: 15,
                                                },
                                                {
                                                  dataName: 'action',
                                                  dataId: 169932151784947970,
                                                  children: [],
                                                  todoOptions: [
                                                    'msgType',
                                                    'value',
                                                    'duration',
                                                  ],
                                                  options: {
                                                    compId: 'showMessage',
                                                    compName: 'system',
                                                    id: '353663',
                                                    pageJsonId: '537892',
                                                    type: 'warn',
                                                    value: '$fail_4868144$',
                                                    duration: 1,
                                                  },
                                                  actionObjId: 'showMessage',
                                                  actionObjName: 'system',
                                                  value: 'showMessage',
                                                  tips: '注意：当加载时长为0时，表示一直显示加载中。当加载时长大于0时，表示按照设置时间显示加载中。',
                                                  line_number: 16,
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
                                            id: '4868144',
                                            pageJsonId: '537892',
                                            code: 'function main(data,state,success,fail){var list=JSON.parse(reply_9706607.resultData||"[]");console.log("====\\u6587\\u4EF6\\u89E3\\u6790\\u8FD4\\u56DE\\u6570\\u636E:",list);success(list)};',
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
                                  ],
                                  todoOptions: [],
                                  options: {
                                    compId:
                                      'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812',
                                    compLib: 'comm',
                                    pageJsonId: '537892',
                                    compName: 'Form',
                                    id: '149913',
                                  },
                                  actionObjId:
                                    'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812',
                                  actionObjName: 'Form',
                                  value: 'getCurrentFormValues',
                                  compLib: 'comm',
                                  line_number: 7,
                                },
                              ],
                              condition: [
                                {
                                  options: {
                                    useManual: true,
                                    useObject: false,
                                    context: '$reply_9706607.resultCode$',
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
                                  type: 'getCurrentFormValues',
                                  dataId: 169932150871785630,
                                  options: {
                                    compId:
                                      'Form_449441_1900385_965292_804694_0429677_280477_612369_3241812',
                                    compLib: 'comm',
                                    pageJsonId: '537892',
                                    compName: 'Form',
                                    id: '149913',
                                  },
                                  line_number: 7,
                                  callback1: [
                                    {
                                      type: 'customActionCode',
                                      dataId: 169932151784983330,
                                      options: {
                                        compId: 'customActionCode',
                                        compName: 'page',
                                        id: '4868144',
                                        pageJsonId: '537892',
                                        code: 'function main(data,state,success,fail){var list=JSON.parse(reply_9706607.resultData||"[]");console.log("====\\u6587\\u4EF6\\u89E3\\u6790\\u8FD4\\u56DE\\u6570\\u636E:",list);success(list)};',
                                      },
                                      line_number: 8,
                                      callback1: [
                                        {
                                          type: 'customActionCode',
                                          dataId: 169932151784975000,
                                          options: {
                                            compId: 'customActionCode',
                                            compName: 'page',
                                            id: '9667386',
                                            pageJsonId: '537892',
                                            code: 'function main(data,state,success,fail){var list=data_4868144||[];var instList=[];for(var i=0;i<list.length;i++){var obj=list[i];var instAttrList=[];for(var key in obj){instAttrList.push({"attrCode":key,"attrValue":obj[key]})}var instCode=obj["rowId"];instList.push({instCode:instCode,instAttrList:instAttrList})}var factorForm=data.factorForm||{};var attrList=[];for(var _key in factorForm){attrList.push({"attrCode":_key,"attrValue":factorForm[_key]})}data.sceneSubmit.attrList=attrList;data.sceneSubmit.instList=instList;console.log("attrList = ",attrList);console.log("instList = ",instList);success(data.sceneSubmit)};',
                                          },
                                          line_number: 9,
                                          callback1: [
                                            {
                                              type: 'setDataSource',
                                              dataId: 169932151784973860,
                                              options: {
                                                compId: 'setDataSource',
                                                compName: 'page',
                                                id: '96367',
                                                pageJsonId: '537892',
                                                dataSourceId: 170070915432264800,
                                                dataSourceName: 'groupInfoList',
                                                dataSourceRelType: 'custom',
                                                dataSourceSetValue: [
                                                  {
                                                    attrId: '7393296',
                                                    code: 'groupId',
                                                    name: '集团编码',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: false,
                                                  },
                                                  {
                                                    attrId: '797788',
                                                    code: 'groupName',
                                                    name: '集团名称',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: false,
                                                  },
                                                  {
                                                    attrId: '779542',
                                                    code: 'busiAccessNumber',
                                                    name: '业务接入号',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: false,
                                                  },
                                                  {
                                                    attrId: '387571',
                                                    code: 'sign',
                                                    name: '签名',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: false,
                                                  },
                                                  {
                                                    attrId: '2941536',
                                                    code: 'devChannel',
                                                    name: '发展渠道',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: false,
                                                  },
                                                  {
                                                    attrId: '00254',
                                                    code: 'channelName',
                                                    name: '渠道名称',
                                                    type: 'string',
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    showInput: false,
                                                  },
                                                ],
                                                operateType: 3,
                                                onlySetPatch: true,
                                                otherObjectArrayOptions: {},
                                                targetDataSourcePaths: [],
                                                newData: '$data_4868144$',
                                              },
                                              line_number: 10,
                                              callback1: [],
                                              callback2: [],
                                            },
                                            {
                                              type: 'setDataSource',
                                              dataId: 169932151784943970,
                                              options: {
                                                compId: 'setDataSource',
                                                compName: 'page',
                                                id: '75859',
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
                                                        '$data_9667386$',
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
                                                        '$data_9667386$',
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
                                              line_number: 11,
                                              callback1: [
                                                {
                                                  type: 'callParentCustomFunc',
                                                  dataId: 169932151784918340,
                                                  options: {
                                                    compId:
                                                      'callParentCustomFunc',
                                                    compName: 'system',
                                                    id: '937256',
                                                    pageJsonId: '537892',
                                                    pathname:
                                                      '/auditOrderPrepare',
                                                    pageId:
                                                      '884045146848604160',
                                                    modalPath:
                                                      '/auditOrderPrepare',
                                                    customFuncName: 'getFactor',
                                                    customFuncParams:
                                                      '$data.sceneSubmit$',
                                                  },
                                                  line_number: 12,
                                                  callback1: [
                                                    {
                                                      type: 'showMessage',
                                                      dataId: 169932151784948100,
                                                      options: {
                                                        compId: 'showMessage',
                                                        compName: 'system',
                                                        id: '365449',
                                                        pageJsonId: '537892',
                                                        type: 'success',
                                                        value: '上传成功！',
                                                      },
                                                      line_number: 13,
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
                                              dataId: 169932151784909220,
                                              options: {
                                                compId: 'showMessage',
                                                compName: 'system',
                                                id: '24928',
                                                pageJsonId: '537892',
                                                type: 'error',
                                                value: '$fail_9667386$',
                                              },
                                              line_number: 14,
                                            },
                                          ],
                                        },
                                      ],
                                      callback2: [
                                        {
                                          type: 'console',
                                          dataId: 169932151784932740,
                                          options: {
                                            compId: 'debug',
                                            compName: 'system',
                                            id: '06975',
                                            pageJsonId: '537892',
                                            value: ['$fail_4868144$'],
                                          },
                                          line_number: 15,
                                        },
                                        {
                                          type: 'showMessage',
                                          dataId: 169932151784947970,
                                          options: {
                                            compId: 'showMessage',
                                            compName: 'system',
                                            id: '353663',
                                            pageJsonId: '537892',
                                            type: 'warn',
                                            value: '$fail_4868144$',
                                            duration: 1,
                                          },
                                          line_number: 16,
                                        },
                                      ],
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
                              dataId: 169926446650661060,
                              options: {
                                compId: 'customActionCode',
                                compName: 'page',
                                id: '4729323',
                                pageJsonId: '537892',
                                code: 'function main(data,state,success,fail){var _reply_;var errorList=JSON.parse(((_reply_=reply_9706607)===null||_reply_===void 0?void 0:_reply_.resultMsg)||"[]");var finalList=[];for(var i=0;i<errorList.length;i++){finalList.push({"errorMsg":errorList[i],"rowId":i+1})}success(finalList)};',
                              },
                              line_number: 4,
                              callback1: [
                                {
                                  type: 'console',
                                  dataId: 169926446650639100,
                                  options: {
                                    compId: 'debug',
                                    compName: 'system',
                                    id: '9891221',
                                    pageJsonId: '537892',
                                    value: ['finalList = ', '$data_4729323$'],
                                  },
                                  line_number: 5,
                                },
                                {
                                  type: 'showCustomModal',
                                  dataId: 169926446650693060,
                                  options: {
                                    compId: 'showCustomModal',
                                    compName: 'page',
                                    id: '520965',
                                    pageJsonId: '537892',
                                    modalname: '/cuowuxinxi0064',
                                    pageId: '1037555797777207296',
                                    modalPath: '/cuowuxinxi0064',
                                    paramsObj: { errorList: '$data_4729323$' },
                                    paramsObjKeyValueMap: {
                                      errorList: '$data_4729323$',
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
                          dataId: 169943179725473570,
                          options: {
                            compId: 'Table_076617',
                            compLib: 'comm',
                            pageJsonId: '537892',
                            compName: 'Table',
                            id: '9878662',
                            loading: false,
                          },
                          line_number: 17,
                        },
                      ],
                      callback2: [
                        {
                          type: 'setLoading',
                          dataId: 169943180474138080,
                          options: {
                            compId: 'Table_076617',
                            compLib: 'comm',
                            pageJsonId: '537892',
                            compName: 'Table',
                            id: '985175',
                            loading: false,
                          },
                          line_number: 18,
                        },
                      ],
                    },
                  ];
                  eventDataapiRequest741.params =
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
                    eventDataapiRequest741,
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
                  const eventDatacustomActionCode584: any = [
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
                  eventDatacustomActionCode584.params =
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
                    eventDatacustomActionCode584,
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
                  refs.setComponentRef(r, 'StdUpload_304342_6986628_433547')
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
                  const eventDatasetLoading187: any = [
                    {
                      type: 'setLoading',
                      dataId: 169932545391423840,
                      options: {
                        compId: 'Button_061196_858258',
                        compLib: 'comm',
                        pageJsonId: '537892',
                        compName: 'Button',
                        id: '5161456',
                        loading: true,
                      },
                      line_number: 1,
                    },
                  ];
                  eventDatasetLoading187.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDatasetLoading187, { e }, 'setLoading', {
                    id: 'setLoading',
                    name: 'setLoading',
                    type: 'setLoading',
                    platform: 'pc',
                  });
                  const eventDataapiRequest742: any = [
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
                                      code: '$state.catalogCode$',
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
                                      code: '行业端口重点保障审批单导入模板.xlsx',
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
                      line_number: 2,
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
                            fileName: '',
                          },
                          line_number: 3,
                        },
                        {
                          type: 'setLoading',
                          dataId: 169932546027086430,
                          options: {
                            compId: 'Button_061196_858258',
                            compLib: 'comm',
                            pageJsonId: '537892',
                            compName: 'Button',
                            id: '853996',
                            loading: false,
                          },
                          line_number: 4,
                        },
                      ],
                      callback2: [
                        {
                          type: 'setLoading',
                          dataId: 169932546434433250,
                          options: {
                            compId: 'Button_061196_858258',
                            compLib: 'comm',
                            pageJsonId: '537892',
                            compName: 'Button',
                            id: '8885957',
                            loading: false,
                          },
                          line_number: 5,
                        },
                      ],
                    },
                  ];
                  eventDataapiRequest742.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDataapiRequest742, { e }, 'apiRequest', {
                    id: 'apiRequest',
                    name: 'apiRequest',
                    type: 'apiRequest',
                    platform: 'pc',
                  });
                }}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Button_061196_858258')
                }
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
                  const eventDatagetTableSelected62: any = [
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
                  eventDatagetTableSelected62.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatagetTableSelected62,
                    { e },
                    'getTableSelected',
                    {
                      id: 'getTableSelected',
                      name: 'getTableSelected',
                      type: 'getTableSelected',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetLoading188: any = [
                    {
                      type: 'setLoading',
                      dataId: 169932587468381820,
                      options: {
                        compId: 'Button_050256_034475_700844_765858',
                        compLib: 'comm',
                        pageJsonId: '537892',
                        compName: 'Button',
                        id: '028425',
                        loading: true,
                      },
                      line_number: 8,
                    },
                  ];
                  eventDatasetLoading188.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDatasetLoading188, { e }, 'setLoading', {
                    id: 'setLoading',
                    name: 'setLoading',
                    type: 'setLoading',
                    platform: 'pc',
                  });
                  const eventDatacustomActionCode585: any = [
                    {
                      type: 'customActionCode',
                      dataId: 167706806820034340,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '7076346',
                        pageJsonId: '537892',
                        code: 'function main(data,state,success,fail){var arr1=[];var arr2=[];var infoList=data.groupInfoList||[];for(var i=0;i<infoList.length;i++){var info=infoList[i];{arr2.push({"name":"\\u96C6\\u56E2\\u7F16\\u7801","value":info.groupId});arr2.push({"name":"\\u96C6\\u56E2\\u540D\\u79F0","value":info.groupName});arr2.push({"name":"\\u4E1A\\u52A1\\u63A5\\u5165\\u53F7","value":info.busiAccessNumber});arr2.push({"name":"\\u7B7E\\u540D","value":info.sign});arr2.push({"name":"\\u53D1\\u5C55\\u6E20\\u9053","value":info.devChannelName});arr2.push({"name":"\\u6E20\\u9053\\u540D\\u79F0","value":info.channelName})}arr1.push(arr2);arr2=[]}if(arr1.length>0){success(JSON.stringify(arr1))}else{fail()}};',
                      },
                      line_number: 9,
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
                          line_number: 10,
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
                              line_number: 11,
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
                              line_number: 12,
                            },
                            {
                              type: 'setLoading',
                              dataId: 169932588572275650,
                              options: {
                                compId: 'Button_050256_034475_700844_765858',
                                compLib: 'comm',
                                pageJsonId: '537892',
                                compName: 'Button',
                                id: '41664',
                                loading: false,
                              },
                              line_number: 13,
                            },
                          ],
                          callback2: [
                            {
                              type: 'setLoading',
                              dataId: 169932589134152420,
                              options: {
                                compId: 'Button_050256_034475_700844_765858',
                                compLib: 'comm',
                                pageJsonId: '537892',
                                compName: 'Button',
                                id: '54013',
                                loading: false,
                              },
                              line_number: 14,
                            },
                          ],
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
                          line_number: 15,
                        },
                        {
                          type: 'setLoading',
                          dataId: 169932589359162850,
                          options: {
                            compId: 'Button_050256_034475_700844_765858',
                            compLib: 'comm',
                            pageJsonId: '537892',
                            compName: 'Button',
                            id: '829329',
                            loading: false,
                          },
                          line_number: 16,
                        },
                      ],
                    },
                  ];
                  eventDatacustomActionCode585.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatacustomActionCode585,
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
                  refs.setComponentRef(r, 'Button_050256_034475_700844_765858')
                }
                {...injectData}
              />
            </View>
          </Row>
          <Table
            name={'集团信息表格'}
            isFlexColumn={false}
            pageSize={5}
            current={1}
            tableTitle={'表格名称'}
            showCustom={{
              iconPosition: 'left',
              type: 'arrow-right',
              theme: 'outlined',
              fontAddress: undefined,
              isIconFont: false,
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
                id: '072362',
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
                id: '444774',
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
                id: '6470695',
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
                title: '签名',
                key: 'sign',
                dataIndex: 'sign',
                className: 'divider',
                id: '648983',
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
                key: 'devChannel',
                dataIndex: 'devChannel',
                className: 'divider',
                id: '2367862',
                staticService: {
                  labelKey: 'attrValueName',
                  valueKey: 'attrValue',
                },
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
                title: '渠道名称',
                key: 'channelName',
                dataIndex: 'channelName',
                className: 'divider',
                id: '7231566',
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
            dataSource={data?.groupInfoList}
            fieldName={'data.MemberInfo.length'}
            total={data?.officialAgencyList?.length}
            hiddenAction={false}
            rowKey={'rowId'}
            rowActions={[]}
            extend={[]}
            headExtends={[{ id: '0906464', title: '按钮1', iconPos: 'left' }]}
            className={'Table_076617'}
            dataSourceFromDataSourceConfig={'data.groupInfoList'}
            $$componentItem={{
              id: 'Table_076617',
              uid: 'Table_076617',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ margin: '10px 0px 10px 0px' }}
            onRowEdit={(rowId: any, row: any, index: any) => {}}
            ref={(r: any) => refs.setComponentRef(r, 'Table_076617')}
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
                refs.setComponentRef(
                  r,
                  'Form_395851_1727917_9692158_9612234_1000722_434628_511208_810317_526148',
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
                  refs.setComponentRef(
                    r,
                    'Input_690228_5400337_280051_232429_7501497_288005_8195412_48663836_335482',
                  )
                }
                {...injectData}
              />
              <View
                className="View_View_22346374_875512_926873_4359147_729981_339083_0134945_145611_42193717"
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
                  refs.setComponentRef(
                    r,
                    'View_22346374_875512_926873_4359147_729981_339083_0134945_145611_42193717',
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
                    const eventDatagetSelectedData285: any = [
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
                    eventDatagetSelectedData285.params =
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
                      eventDatagetSelectedData285,
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
                    const eventDatagetSelectedData286: any = [
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
                    eventDatagetSelectedData286.params =
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
                      eventDatagetSelectedData286,
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
                    const eventDatacustomActionCode587: any = [
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
                    eventDatacustomActionCode587.params =
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
                      eventDatacustomActionCode587,
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
                      'StdUpload_6230546_867413_538179_36057857_3505279_0434_242878_424019_1466135',
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
              const eventDatacustomActionCode588: any = [
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
              eventDatacustomActionCode588.params =
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
                eventDatacustomActionCode588,
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
              const eventDatadownloadByFileId56: any = [
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
              eventDatadownloadByFileId56.params =
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
                eventDatadownloadByFileId56,
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
          ref={(r: any) => refs.setComponentRef(r, 'BOFramer_613401')}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(ClsCp_0003_0005$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
