// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import {
  Button,
  Card,
  Checkbox,
  Divider,
  Form,
  HorizontalView,
  Input,
  Row,
  Select,
  StdUpload,
  Table,
  Text,
  TextArea,
  VerticalView,
  View,
} from '@/components/factory';

import BusiComp0521965 from '@/components/BusiComp0521965';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const ClsJc_0004_0003$$Page: React.FC<PageProps> = ({
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
  const fileUpload = (options_1827804: any) => {
    const eventDatacustomActionCode21: any = [
      {
        type: 'customActionCode',
        dataId: 167282082414102080,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '887325',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=options_1827804;success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'callParentCustomFunc',
            dataId: 167282083820454080,
            options: {
              compId: 'callParentCustomFunc',
              compName: 'system',
              id: '314628',
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
    eventDatacustomActionCode21.params =
      [
        {
          title: '事件入参',
          name: 'options_1827804',
          value: '$options_1827804$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode21,
      { options_1827804 },
      'customActionCode',
      {
        id: 'customActionCode',
        name: 'customActionCode',
        type: 'customActionCode',
        platform: 'undefined',
      },
    );
  };
  const updateTitle = (options_319546: any) => {
    const eventDatacustomActionCode22: any = [
      {
        type: 'customActionCode',
        dataId: 167592333376603200,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '1401741',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){console.log("data.MemberInfo",data.MemberInfo);var _value="";if(data.MemberInfo.length>0){_value=data.MemberInfo[0].groupName;if(data.MemberInfo.length>1){_value=_value+"\\u7B49"}}success({catalogCode:"CLS_JC_0004_0003",value:_value})};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'callParentCustomFunc',
            dataId: 167592333376636160,
            options: {
              compId: 'callParentCustomFunc',
              compName: 'system',
              id: '2426607',
              pageJsonId: '537892',
              pathname: '/auditOrderPrepare',
              pageId: '884045146848604160',
              customFuncName: 'updateTitleJC0004',
              customFuncParams: '$data_1401741$',
              modalPath: '/auditOrderPrepare',
            },
            line_number: 2,
            callback1: [],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode22.params =
      [
        {
          title: '事件入参',
          name: 'options_319546',
          value: '$options_319546$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode22,
      { options_319546 },
      'customActionCode',
      {
        id: 'customActionCode',
        name: 'customActionCode',
        type: 'customActionCode',
        platform: 'undefined',
      },
    );
  };
  const getSelectOptionsData = (options_67263: any) => {
    const eventDataifelse24: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '773801',
            options: { context: '$options_67263$', operate: 'empty' },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 167756976918093400,
        elseIfs: [],
        line_number: 1,
        callback1: [
          {
            type: 'apiRequest',
            dataId: 167756976918029630,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '471763',
              pageJsonId: 31,
              sync: false,
              actionTitle: '',
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
                  dataKey: '751091_header',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  _id: 'path',
                  compType: 'Input',
                  parents: [],
                  id: 'path',
                  dataKey: '751091_path',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'query',
                  compType: 'Input',
                  parents: [],
                  id: 'query',
                  dataKey: '751091_query',
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
                      dataKey: '751091_body.catalogCode',
                      value: {
                        type: ['customize'],
                        code: '$state.catalogCode$',
                      },
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
                      dataKey: '751091_body.attrCode',
                      value: { type: ['customize'], code: 'actionType' },
                    },
                  ],
                  _id: 'body',
                  compType: 'Input',
                  parents: [],
                  id: 'body',
                  dataKey: '751091_body',
                },
              ],
            },
            line_number: 2,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 167756976918012740,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '5998774',
                  pageJsonId: '537892',
                  dataSourceId: 167756950282581570,
                  dataSourceName: 'selectOptionsData',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '595829',
                      code: 'actionType',
                      name: '操作类型',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                      value: {
                        type: ['context', '$reply_471763?.resultData$'],
                        code: '',
                      },
                    },
                    {
                      attrId: '265819',
                      code: 'sceneType',
                      name: '场景类型',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '4782434',
                      code: 'msisdnomeCity',
                      name: '集团归属地',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '580774',
                      code: 'objType',
                      name: '对象类型',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '543396',
                      code: 'officialLevel',
                      name: '行政级别',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '569676',
                      code: 'memberType',
                      name: '成员类型',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '292789',
                      code: 'keyType',
                      name: '关键人标识',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '224781',
                      code: 'gender',
                      name: '性别',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
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
            ],
            callback2: [],
          },
          {
            type: 'apiRequest',
            dataId: 167756976918022820,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '227276',
              pageJsonId: 31,
              sync: false,
              actionTitle: '',
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
                  dataKey: '3456332_header',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  _id: 'path',
                  compType: 'Input',
                  parents: [],
                  id: 'path',
                  dataKey: '3456332_path',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'query',
                  compType: 'Input',
                  parents: [],
                  id: 'query',
                  dataKey: '3456332_query',
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
                      dataKey: '3456332_body.catalogCode',
                      value: {
                        type: ['customize'],
                        code: '$state.catalogCode$',
                      },
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
                      dataKey: '3456332_body.attrCode',
                      value: { type: ['customize'], code: 'sceneType' },
                    },
                  ],
                  _id: 'body',
                  compType: 'Input',
                  parents: [],
                  id: 'body',
                  dataKey: '3456332_body',
                },
              ],
            },
            line_number: 4,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 167756976918023360,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '820397',
                  pageJsonId: '537892',
                  dataSourceId: 167755002761934100,
                  dataSourceName: 'selectOptionsData',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '595829',
                      code: 'actionType',
                      name: '操作类型',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '265819',
                      code: 'sceneType',
                      name: '场景类型',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                      value: {
                        type: ['context', '$reply_227276?.resultData$'],
                        code: '',
                      },
                    },
                    {
                      attrId: '4782434',
                      code: 'msisdnomeCity',
                      name: '集团归属地',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '580774',
                      code: 'objType',
                      name: '对象类型',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '543396',
                      code: 'officialLevel',
                      name: '行政级别',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '569676',
                      code: 'memberType',
                      name: '成员类型',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '292789',
                      code: 'keyType',
                      name: '关键人标识',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '224781',
                      code: 'gender',
                      name: '性别',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
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
          {
            type: 'apiRequest',
            dataId: 167756976918130500,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '738221',
              pageJsonId: 31,
              sync: false,
              actionTitle: '',
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
                  dataKey: '738221_header',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  _id: 'path',
                  compType: 'Input',
                  parents: [],
                  id: 'path',
                  dataKey: '738221_path',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'query',
                  compType: 'Input',
                  parents: [],
                  id: 'query',
                  dataKey: '738221_query',
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
                      dataKey: '738221_body.catalogCode',
                      value: {
                        type: ['customize'],
                        code: '$state.catalogCode$',
                      },
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
                      dataKey: '738221_body.attrCode',
                      value: { type: ['customize'], code: 'msisdnHomeCity' },
                    },
                  ],
                  _id: 'body',
                  compType: 'Input',
                  parents: [],
                  id: 'body',
                  dataKey: '738221_body',
                },
              ],
            },
            line_number: 6,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 167756976918160300,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '621938',
                  pageJsonId: '537892',
                  dataSourceId: 167755002761934100,
                  dataSourceName: 'selectOptionsData',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '595829',
                      code: 'actionType',
                      name: '操作类型',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '265819',
                      code: 'sceneType',
                      name: '场景类型',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '4782434',
                      code: 'msisdnomeCity',
                      name: '集团归属地',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                      value: {
                        type: ['context', '$reply_738221?.resultData$'],
                        code: '',
                      },
                    },
                    {
                      attrId: '580774',
                      code: 'objType',
                      name: '对象类型',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '543396',
                      code: 'officialLevel',
                      name: '行政级别',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '569676',
                      code: 'memberType',
                      name: '成员类型',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '292789',
                      code: 'keyType',
                      name: '关键人标识',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '224781',
                      code: 'gender',
                      name: '性别',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
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
            ],
            callback2: [],
          },
          {
            type: 'apiRequest',
            dataId: 167756976918144800,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '8212244',
              pageJsonId: 31,
              sync: false,
              actionTitle: '',
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
                  dataKey: '342221_header',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  _id: 'path',
                  compType: 'Input',
                  parents: [],
                  id: 'path',
                  dataKey: '342221_path',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'query',
                  compType: 'Input',
                  parents: [],
                  id: 'query',
                  dataKey: '342221_query',
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
                      dataKey: '342221_body.catalogCode',
                      value: {
                        type: ['customize'],
                        code: '$state.catalogCode$',
                      },
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
                      dataKey: '342221_body.attrCode',
                      value: { type: ['customize'], code: 'objType' },
                    },
                  ],
                  _id: 'body',
                  compType: 'Input',
                  parents: [],
                  id: 'body',
                  dataKey: '342221_body',
                  value: { type: [], code: '' },
                },
              ],
            },
            line_number: 8,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 167756976918172900,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '423451',
                  pageJsonId: '537892',
                  dataSourceId: 167755002761934100,
                  dataSourceName: 'selectOptionsData',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '595829',
                      code: 'actionType',
                      name: '操作类型',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '265819',
                      code: 'sceneType',
                      name: '场景类型',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '4782434',
                      code: 'msisdnomeCity',
                      name: '集团归属地',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '580774',
                      code: 'objType',
                      name: '对象类型',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                      value: {
                        type: ['context', '$reply_8212244?.resultData$'],
                        code: '',
                      },
                    },
                    {
                      attrId: '543396',
                      code: 'officialLevel',
                      name: '行政级别',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '569676',
                      code: 'memberType',
                      name: '成员类型',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '292789',
                      code: 'keyType',
                      name: '关键人标识',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '224781',
                      code: 'gender',
                      name: '性别',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
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
            ],
            callback2: [],
          },
          {
            type: 'apiRequest',
            dataId: 167756976918196800,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '917637',
              pageJsonId: 31,
              sync: false,
              actionTitle: '',
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
                  dataKey: '4997655_header',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  _id: 'path',
                  compType: 'Input',
                  parents: [],
                  id: 'path',
                  dataKey: '4997655_path',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'query',
                  compType: 'Input',
                  parents: [],
                  id: 'query',
                  dataKey: '4997655_query',
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
                      dataKey: '4997655_body.catalogCode',
                      value: {
                        type: ['customize'],
                        code: '$state.catalogCode$',
                      },
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
                      dataKey: '4997655_body.attrCode',
                      value: { type: ['customize'], code: 'officialLevel' },
                    },
                  ],
                  _id: 'body',
                  compType: 'Input',
                  parents: [],
                  id: 'body',
                  dataKey: '4997655_body',
                },
              ],
            },
            line_number: 10,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 167756976918100930,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '9646154',
                  pageJsonId: '537892',
                  dataSourceId: 167755002761934100,
                  dataSourceName: 'selectOptionsData',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '595829',
                      code: 'actionType',
                      name: '操作类型',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '265819',
                      code: 'sceneType',
                      name: '场景类型',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '4782434',
                      code: 'msisdnomeCity',
                      name: '集团归属地',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '580774',
                      code: 'objType',
                      name: '对象类型',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '543396',
                      code: 'officialLevel',
                      name: '行政级别',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                      value: {
                        type: ['context', '$reply_917637?.resultData$'],
                        code: '',
                      },
                    },
                    {
                      attrId: '569676',
                      code: 'memberType',
                      name: '成员类型',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '292789',
                      code: 'keyType',
                      name: '关键人标识',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '224781',
                      code: 'gender',
                      name: '性别',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
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
            type: 'apiRequest',
            dataId: 167756976918109760,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '3943128',
              pageJsonId: 31,
              sync: false,
              actionTitle: '',
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
                  dataKey: '231282_header',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  _id: 'path',
                  compType: 'Input',
                  parents: [],
                  id: 'path',
                  dataKey: '231282_path',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'query',
                  compType: 'Input',
                  parents: [],
                  id: 'query',
                  dataKey: '231282_query',
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
                      dataKey: '231282_body.catalogCode',
                      value: {
                        type: ['customize'],
                        code: '$state.catalogCode$',
                      },
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
                      dataKey: '231282_body.attrCode',
                      value: { type: ['customize'], code: 'memberType' },
                    },
                  ],
                  _id: 'body',
                  compType: 'Input',
                  parents: [],
                  id: 'body',
                  dataKey: '231282_body',
                },
              ],
            },
            line_number: 12,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 167756976918123700,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '033621',
                  pageJsonId: '537892',
                  dataSourceId: 167755002761934100,
                  dataSourceName: 'selectOptionsData',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '595829',
                      code: 'actionType',
                      name: '操作类型',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '265819',
                      code: 'sceneType',
                      name: '场景类型',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '4782434',
                      code: 'msisdnomeCity',
                      name: '集团归属地',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '580774',
                      code: 'objType',
                      name: '对象类型',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '543396',
                      code: 'officialLevel',
                      name: '行政级别',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '569676',
                      code: 'memberType',
                      name: '成员类型',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                      value: {
                        type: ['context', '$reply_3943128?.resultData$'],
                        code: '',
                      },
                    },
                    {
                      attrId: '292789',
                      code: 'keyType',
                      name: '关键人标识',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '224781',
                      code: 'gender',
                      name: '性别',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 13,
                callback1: [],
                callback2: [],
              },
            ],
            callback2: [],
          },
          {
            type: 'apiRequest',
            dataId: 167756976918157120,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '324747',
              pageJsonId: 31,
              sync: false,
              actionTitle: '',
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
                  dataKey: '440564_header',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  _id: 'path',
                  compType: 'Input',
                  parents: [],
                  id: 'path',
                  dataKey: '440564_path',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'query',
                  compType: 'Input',
                  parents: [],
                  id: 'query',
                  dataKey: '440564_query',
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
                      dataKey: '440564_body.catalogCode',
                      value: {
                        type: ['customize'],
                        code: '$state.catalogCode$',
                      },
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
                      dataKey: '440564_body.attrCode',
                      value: { type: ['customize'], code: 'keyType' },
                    },
                  ],
                  _id: 'body',
                  compType: 'Input',
                  parents: [],
                  id: 'body',
                  dataKey: '440564_body',
                },
              ],
            },
            line_number: 14,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 167756976918168320,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '960059',
                  pageJsonId: '537892',
                  dataSourceId: 167755002761934100,
                  dataSourceName: 'selectOptionsData',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '595829',
                      code: 'actionType',
                      name: '操作类型',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '265819',
                      code: 'sceneType',
                      name: '场景类型',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '4782434',
                      code: 'msisdnomeCity',
                      name: '集团归属地',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '580774',
                      code: 'objType',
                      name: '对象类型',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '543396',
                      code: 'officialLevel',
                      name: '行政级别',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '569676',
                      code: 'memberType',
                      name: '成员类型',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '292789',
                      code: 'keyType',
                      name: '关键人标识',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                      value: {
                        type: ['context', '$reply_324747?.resultData$'],
                        code: '',
                      },
                    },
                    {
                      attrId: '224781',
                      code: 'gender',
                      name: '性别',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 15,
                callback1: [],
                callback2: [],
              },
            ],
            callback2: [],
          },
          {
            type: 'apiRequest',
            dataId: 167756976918197950,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '511942',
              pageJsonId: 31,
              sync: false,
              actionTitle: '',
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
                  dataKey: '475241_header',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  _id: 'path',
                  compType: 'Input',
                  parents: [],
                  id: 'path',
                  dataKey: '475241_path',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'query',
                  compType: 'Input',
                  parents: [],
                  id: 'query',
                  dataKey: '475241_query',
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
                      dataKey: '475241_body.catalogCode',
                      value: {
                        type: ['customize'],
                        code: '$state.catalogCode$',
                      },
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
                      dataKey: '475241_body.attrCode',
                      value: { type: ['customize'], code: 'gender' },
                    },
                  ],
                  _id: 'body',
                  compType: 'Input',
                  parents: [],
                  id: 'body',
                  dataKey: '475241_body',
                },
              ],
            },
            line_number: 16,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 167756976918126100,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '9770789',
                  pageJsonId: '537892',
                  dataSourceId: 167755002761934100,
                  dataSourceName: 'selectOptionsData',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '595829',
                      code: 'actionType',
                      name: '操作类型',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '265819',
                      code: 'sceneType',
                      name: '场景类型',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '4782434',
                      code: 'msisdnomeCity',
                      name: '集团归属地',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '580774',
                      code: 'objType',
                      name: '对象类型',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '543396',
                      code: 'officialLevel',
                      name: '行政级别',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '569676',
                      code: 'memberType',
                      name: '成员类型',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '292789',
                      code: 'keyType',
                      name: '关键人标识',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '224781',
                      code: 'gender',
                      name: '性别',
                      type: 'string',
                      initialData: { type: 'static', value: '[]' },
                      value: {
                        type: ['context', '$reply_511942?.resultData$'],
                        code: '',
                      },
                    },
                  ],
                  operateType: 1,
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
        ],
      },
    ];
    eventDataifelse24.params =
      [
        { title: '事件入参', name: 'options_67263', value: '$options_67263$' },
      ] || [];
    CMDGenerator(eventDataifelse24, { options_67263 }, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
  };
  const judageIsShowReplyBtn = (options_939374: any) => {
    const eventDataifelse25: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '39487209',
            options: {
              useManual: true,
              useObject: false,
              context: '$data.factorForm.acceptResult$',
              operate: '==',
              manualValue: '0',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 170480389939568220,
        elseIfs: [
          {
            dataName: 'elseIf',
            dataId: 170480393268024860,
            children: [
              {
                dataName: 'action',
                dataId: 170480393542728160,
                children: [],
                todoOptions: ['visible', 'selectComp'],
                options: {
                  compId: ['Button_3562167'],
                  compName: 'page',
                  id: '203945',
                  pageJsonId: '537892',
                  visible: '',
                  compid: ['Button_3562167'],
                },
                actionObjId: 'sysSetVisible',
                actionObjName: 'page',
                value: 'sysSetVisible',
                line_number: 3,
              },
            ],
            condition: [],
            value: 'elseIf',
            callback: [
              {
                type: 'sysSetVisible',
                dataId: 170480393542728160,
                options: {
                  compId: ['Button_3562167'],
                  compName: 'page',
                  id: '203945',
                  pageJsonId: '537892',
                  visible: '',
                  compid: ['Button_3562167'],
                },
                line_number: 3,
              },
            ],
          },
        ],
        line_number: 1,
        callback1: [
          {
            type: 'sysSetVisible',
            dataId: 170480392712212930,
            options: {
              compId: ['Button_3562167'],
              compName: 'page',
              id: '024444',
              pageJsonId: '537892',
              visible: 'true',
              compid: ['Button_3562167'],
            },
            line_number: 2,
          },
        ],
      },
    ];
    eventDataifelse25.params =
      [
        {
          title: '事件入参',
          name: 'options_939374',
          value: '$options_939374$',
        },
      ] || [];
    CMDGenerator(eventDataifelse25, { options_939374 }, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    fileUpload,
    updateTitle,
    getSelectOptionsData,
    judageIsShowReplyBtn,
  }));

  useEffect(() => {
    const eventDataapiRequest94: any = [
      {
        type: 'apiRequest',
        dataId: 166977354609576320,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '508721',
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
              parents: ['root'],
              id: 'header',
              dataKey: '088178_header',
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
              dataKey: '088178_path',
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
              dataKey: '088178_query',
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
                  _id: 'body.catalogCode',
                  compType: 'Input',
                  name: 'catalogCode',
                  parents: ['root', 'body'],
                  id: 'body.catalogCode',
                  dataKey: '088178_body.catalogCode',
                  value: { type: ['customize'], code: '$state.catalogCode$' },
                  parentType: 'object',
                  parentKey: '0-3',
                  key: '0-3-0',
                },
                {
                  code: 'attrCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.attrCode',
                  compType: 'Input',
                  name: 'attrCode',
                  parents: ['root', 'body'],
                  id: 'body.attrCode',
                  dataKey: '088178_body.attrCode',
                  value: { type: ['customize'], code: 'attachmentType' },
                  parentType: 'object',
                  parentKey: '0-3',
                  key: '0-3-1',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: ['root'],
              id: 'body',
              dataKey: '088178_body',
              parentType: 'object',
              parentKey: '0',
              key: '0-3',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166977354909766600,
            options: {
              compId: 'Input_690228_5400337_280051_232429_7501497_288005',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '237052',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
              data: '$reply_508721?.resultData$',
            },
            line_number: 2,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest94.params = [] || [];
    CMDGenerator(eventDataapiRequest94, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest95: any = [
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
              parents: ['root'],
              id: 'header',
              dataKey: '9817429_header',
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
              dataKey: '9817429_path',
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
              dataKey: '9817429_query',
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
                  _id: 'body.catalogCode',
                  compType: 'Input',
                  name: 'catalogCode',
                  parents: ['root', 'body'],
                  id: 'body.catalogCode',
                  dataKey: '9817429_body.catalogCode',
                  value: { type: ['customize'], code: '$state.catalogCode$' },
                  parentType: 'object',
                  parentKey: '0-3',
                  key: '0-3-0',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: ['root'],
              id: 'body',
              dataKey: '9817429_body',
              parentType: 'object',
              parentKey: '0',
              key: '0-3',
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
    eventDataapiRequest95.params = [] || [];
    CMDGenerator(eventDataapiRequest95, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDatacallSelfFunc12: any = [
      {
        type: 'callSelfFunc',
        dataId: 167756992273701660,
        options: {
          compId: 'callSelfFunc',
          compName: 'system',
          id: '056089',
          pageJsonId: '537892',
          customFuncName: 'getSelectOptionsData',
        },
        line_number: 6,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacallSelfFunc12.params = [] || [];
    CMDGenerator(eventDatacallSelfFunc12, {}, 'callSelfFunc', {
      id: 'callSelfFunc',
      name: 'callSelfFunc',
      type: 'callSelfFunc',
      platform: 'undefined',
    });
    const eventDataifelse66: any = [
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
              code: 'function main(data,state,success,fail){var item=state.itemList;data.sceneSubmit=item;var factorForm={};var attrList=item.attrList;if(attrList!=undefined&&attrList.length>0){for(var i=0;i<attrList.length;i++){factorForm[attrList[i].attrCode]=attrList[i].attrValue}}data.factorForm=factorForm;data.sceneSubmit.approveGrade=item.approveGrade;data.sceneSubmit.approveGradeName=item.approveGradeName;if(item.custMemberList&&item.custMemberList.length>0){for(var i=0;i<item.custMemberList.length;++i){var custMember=item.custMemberList[i];if(custMember.bossName&&custMember.bossName.length>1){var tempBossName=custMember.bossName[0];var length=custMember.bossName.length;for(var i=0;i<length-1;++i){tempBossName=tempBossName+"*"}custMember.tempBossName=tempBossName}if(custMember.name&&custMember.name.length>1){var tempName=custMember.name[0];var length=custMember.name.length;for(var i=0;i<length-1;++i){tempName=tempName+"*"}custMember.tempName=tempName}}}data.sceneSubmit.custMemberList=item.custMemberList;success(item.custMemberList)};',
              actionTitle: '设置界面初始化值',
            },
            line_number: 8,
            callback1: [
              {
                type: 'setValue',
                dataId: 166393201123439100,
                options: {
                  compId:
                    'Input_361479_887285_2150708_936504_923334_755169_97903',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '83855',
                  value: '$state.itemList.approveGradeName$',
                  valueList: {
                    Input_361479_887285_2150708_936504_923334_755169_97903:
                      '$state.itemList.approveGradeName$',
                  },
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
                    {
                      attrId: '666725',
                      code: 'actionTypeName',
                      name: '操作类型名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '2575794',
                      code: 'sceneTypeName',
                      name: '场景类型名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '845038',
                      code: 'objTypeName',
                      name: '对象类型名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '866365',
                      code: 'homeCityName',
                      name: '集团归属地名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '5803486',
                      code: 'genderName',
                      name: '性别中文名',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '6727147',
                      code: 'coreFlagName',
                      name: '是否重要成员名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '24725084',
                      code: 'msisdnHomeCity',
                      name: '成员号码归属地',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                    },
                    {
                      attrId: '270092',
                      code: 'msisdnHomeCityName',
                      name: '号码归属地名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '45433614',
                      code: 'clientSign',
                      name: '重要客户标识',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '875289',
                      code: 'netInTime',
                      name: '入网时间',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '197447',
                      code: 'contractNum',
                      name: '未到期合约数量',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '327877',
                      code: 'mainMeal',
                      name: '主套餐',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '08526',
                      code: 'onceDisc',
                      name: '主套餐一次折扣',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '1446296',
                      code: 'termType',
                      name: '终端类型',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '179012',
                      code: 'termModel',
                      name: '终端型号',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '080455',
                      code: 'arpuValue',
                      name: '近三个月ARPU值',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '8442355',
                      code: 'record',
                      name: '履历',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '340833',
                      code: 'interestTypeName',
                      name: '兴趣爱好',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '2811736',
                      code: 'managerName',
                      name: '看管人员',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                  ],
                  operateType: 3,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  newData: '$data_9981685$',
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
                    condId: '3392528',
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
                    condId: '302065',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166746013516900900,
                elseIfs: [],
                line_number: 13,
                callback1: [
                  {
                    type: 'setVisible',
                    dataId: 166746014928186370,
                    options: {
                      compId: 'Table_5369494',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Table',
                      id: '1834865',
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
                dataId: 166393205937106460,
                options: {
                  compId: [
                    'Input_361479_887285_2150708_936504_923334_755169_97903',
                    'Table_8700198_4997642',
                  ],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '977511',
                  visible: 'true',
                  compid: [
                    'Input_361479_887285_2150708_936504_923334_755169_97903',
                    'Table_8700198_4997642',
                  ],
                },
                line_number: 16,
              },
              {
                type: 'sysSetVisible',
                dataId: 166244953733999170,
                options: {
                  compId: [
                    'Row_851124',
                    'Row_851',
                    'Table_8700198',
                    'Button_683498',
                    'Button_026256',
                    'StdUpload_4835215_7877536',
                    'Button_430819',
                  ],
                  compName: 'page',
                  id: '675663',
                  pageJsonId: '537892',
                  compid: [
                    'Row_851124',
                    'Row_851',
                    'Table_8700198',
                    'Button_683498',
                    'Button_026256',
                    'StdUpload_4835215_7877536',
                    'Button_430819',
                  ],
                  visible: '',
                },
                line_number: 17,
              },
              {
                type: 'setDisable',
                dataId: 166393208105984500,
                options: {
                  compId: [
                    'Input_361479_887285_2150708_936504_923334_755169_97903',
                    'Form_1648074',
                  ],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '298875',
                  disabled: 'true',
                  compid: [
                    'Input_361479_887285_2150708_936504_923334_755169_97903',
                    'Form_1648074',
                  ],
                },
                line_number: 18,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse66.params = [] || [];
    CMDGenerator(eventDataifelse66, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDataapiRequest96: any = [
      {
        type: 'apiRequest',
        dataId: 170480091559632580,
        shielding: true,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '8266554',
          pageJsonId: '537892',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'queryBusiObjItemByOrderNbr',
          _apiCode: 'queryBusiObjItemByOrderNbr',
          _source: 'rhin',
          _sourceName: '根据审批单号查询DcBusiObjItemDTO',
          _serviceId: '1061974540563865600',
          _serviceTitle:
            '根据审批单号查询DcBusiObjItemDTO: queryBusiObjItemByOrderNbr',
          valueType: 'object',
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
                  dataKey: '8266554_root.header',
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
                  dataKey: '8266554_root.path',
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
                  dataKey: '8266554_root.query',
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  children: [
                    {
                      code: 'busiObjNbr',
                      name: '新增节点',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'root.body.busiObjNbr',
                      compType: 'Input',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-0',
                      id: 'root.body.busiObjNbr',
                      dataKey: '8266554_root.body.busiObjNbr',
                      value: {
                        type: ['customize'],
                        code: '$state.fileInstNbr$',
                      },
                    },
                    {
                      code: 'childCatalogCode',
                      name: '新增节点',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'root.body.childCatalogCode',
                      compType: 'Input',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                      id: 'root.body.childCatalogCode',
                      dataKey: '8266554_root.body.childCatalogCode',
                      value: { type: ['customize'], code: 'CLS_JC_0004_0003' },
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-3',
                  id: 'root.body',
                  dataKey: '8266554_root.body',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '8266554_root',
            },
          ],
        },
        line_number: 19,
        callback1: [],
        callback2: [],
      },
    ];
    eventDataapiRequest96.params = [] || [];
    CMDGenerator(eventDataapiRequest96, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest97: any = [
      {
        type: 'apiRequest',
        dataId: 170480156566712000,
        shielding: true,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '243063',
          pageJsonId: '537892',
          sync: false,
        },
        line_number: 20,
        callback1: [],
        callback2: [],
      },
    ];
    eventDataapiRequest97.params = [] || [];
    CMDGenerator(eventDataapiRequest97, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    }); // console 170480163713830700
    console.log('进入页面的各种信息', state, urlParam);
    const eventDataifelse67: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '9681904',
            options: {
              useManual: true,
              useObject: false,
              context: '$state.tacheCode$',
              operate: '==',
              manualValue: 'APPLY_FINISH',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 170480169203700600,
        elseIfs: [],
        line_number: 22,
        callback1: [
          {
            type: 'apiRequest',
            dataId: 170480174096930400,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '791412',
              pageJsonId: '537892',
              sync: false,
              method: 'post',
              url: '/app/rhin/gateway/callRhinEngine',
              _capabilityCode: 'queryBusiObjItemByOrderNbr',
              _apiCode: 'queryBusiObjItemByOrderNbr',
              _source: 'rhin',
              _sourceName: '根据审批单号查询DcBusiObjItemDTO',
              _serviceId: '1061974540563865600',
              _serviceTitle:
                '根据审批单号查询DcBusiObjItemDTO: queryBusiObjItemByOrderNbr',
              valueType: 'object',
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
                      dataKey: '8266554_root.header',
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
                      dataKey: '8266554_root.path',
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
                      dataKey: '8266554_root.query',
                    },
                    {
                      code: 'body',
                      name: '请求体',
                      attrType: 'object',
                      children: [
                        {
                          code: 'busiObjNbr',
                          name: '新增节点',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          defaultValue: '',
                          _id: 'root.body.busiObjNbr',
                          compType: 'Input',
                          parents: ['root', 'body'],
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-0',
                          id: 'root.body.busiObjNbr',
                          dataKey: '8266554_root.body.busiObjNbr',
                          value: {
                            type: ['customize'],
                            code: '$state.fileInstNbr$',
                          },
                        },
                        {
                          code: 'childCatalogCode',
                          name: '新增节点',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          defaultValue: '',
                          _id: 'root.body.childCatalogCode',
                          compType: 'Input',
                          parents: ['root', 'body'],
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-1',
                          id: 'root.body.childCatalogCode',
                          dataKey: '8266554_root.body.childCatalogCode',
                          value: {
                            type: ['customize'],
                            code: 'CLS_JC_0004_0003',
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
                      dataKey: '8266554_root.body',
                    },
                  ],
                  _id: 'root',
                  compType: 'Input',
                  isRoot: true,
                  parents: [],
                  key: '0',
                  id: 'root',
                  dataKey: '8266554_root',
                },
              ],
            },
            line_number: 23,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 170480320911154370,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '741358',
                  pageJsonId: '537892',
                  code: 'function main(data,state,success,fail){var _response$resultData;var response=reply_791412;var acceptResultDesc="\\u53D7\\u7406\\u5931\\u8D25\\u6216\\u672A\\u53D7\\u7406";var acceptResult="0";if(response!==null&&response!==void 0&&(_response$resultData=response.resultData)!==null&&_response$resultData!==void 0&&_response$resultData.dcBusiObjItemAttrList){for(var i=0;i<(response===null||response===void 0?void 0:(_response$resultData2=response.resultData)===null||_response$resultData2===void 0?void 0:_response$resultData2.dcBusiObjItemAttrList.length);++i){var _response$resultData2,_response$resultData3;var dcBusiObjItemAttr=response===null||response===void 0?void 0:(_response$resultData3=response.resultData)===null||_response$resultData3===void 0?void 0:_response$resultData3.dcBusiObjItemAttrList[i];if(dcBusiObjItemAttr.attrCode=="acceptResult"){acceptResultDesc=dcBusiObjItemAttr.attrValueDesc;acceptResult=dcBusiObjItemAttr.attrValue}}}data.factorForm.acceptResultDesc=acceptResultDesc;data.factorForm.acceptResult=acceptResult;success()};',
                },
                line_number: 24,
                callback1: [
                  {
                    type: 'setDataSource',
                    dataId: 170480337387961900,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '883158',
                      pageJsonId: '537892',
                      dataSourceId: 167049124945324580,
                      dataSourceName: 'factorForm',
                      dataSourceRelType: 'custom',
                      dataSourceSetValue: [
                        {
                          attrId: '021424',
                          code: 'reason',
                          name: '申请原因',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['reason'],
                          _idpath: ['021424'],
                        },
                        {
                          attrId: '857088',
                          code: 'acceptResultDesc',
                          name: '受理结果',
                          type: 'string',
                          initialData: { type: 'static', value: '受理失败' },
                          showInput: true,
                          _codePath: ['acceptResultDesc'],
                          _idpath: ['857088'],
                        },
                        {
                          attrId: '693922',
                          code: 'acceptResult',
                          name: '属性',
                          type: 'string',
                          initialData: { type: 'static', value: '0' },
                          showInput: true,
                          _codePath: ['acceptResult'],
                          _idpath: ['693922'],
                        },
                      ],
                      operateType: 1,
                      onlySetPatch: true,
                      otherObjectArrayOptions: {},
                      targetDataSourcePaths: [],
                    },
                    line_number: 25,
                    callback1: [],
                    callback2: [],
                  },
                  {
                    type: 'callSelfFunc',
                    dataId: 170480399559622180,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '8893975',
                      pageJsonId: '537892',
                      customFuncName: 'judageIsShowReplyBtn',
                    },
                    line_number: 26,
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
            type: 'sysSetVisible',
            dataId: 170480302142304420,
            options: {
              compId: ['Card_6933535'],
              compName: 'page',
              id: '5273142',
              pageJsonId: '537892',
              visible: 'true',
              compid: ['Card_6933535'],
            },
            line_number: 27,
          },
        ],
      },
    ];
    eventDataifelse67.params = [] || [];
    CMDGenerator(eventDataifelse67, {}, 'ifelse', {
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
          dividerText={'重要成员增减'}
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
                  id: 'Form_4311097_9385662_8411515_9167293_4337769_708507',
                  uid: 'Form_4311097_9385662_8411515_9167293_4337769_708507',
                  type: 'Form',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) =>
                  (refs['Form_4311097_9385662_8411515_9167293_4337769_708507'] =
                    r)
                }
                {...injectData}
              >
                <Checkbox
                  name={'审批场景'}
                  titleTip={'text'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  text={'重要成员增减'}
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
                    id: 'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694',
                    uid: 'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694',
                    type: 'Checkbox',
                    ...componentItem,
                  }}
                  disabled={true}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    (refs[
                      'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694'
                    ] = r)
                  }
                  {...injectData}
                />
                <View
                  name={'布局容器'}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_6319234_3569864',
                    uid: 'View_6319234_3569864',
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
                  ref={(r: any) => (refs['View_6319234_3569864'] = r)}
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
                    id: 'Input_361479_887285_2150708_936504_923334_755169_97903',
                    uid: 'Input_361479_887285_2150708_936504_923334_755169_97903',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={false}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    (refs[
                      'Input_361479_887285_2150708_936504_923334_755169_97903'
                    ] = r)
                  }
                  {...injectData}
                />
              </Form>
            </View>
          </HorizontalView>
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_278839_3369926',
              uid: 'View_278839_3369926',
              type: 'View',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              display: 'flex',
              flexDirection: 'row',
              padding: '20px 20px 20px 20px',
              width: '100%',
              margin: '0px 0px 0px 0px',
              justifyContent: 'flex-end',
            }}
            ref={(r: any) => (refs['View_278839_3369926'] = r)}
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
              style={{ width: 'fit-content', margin: '0px 0px 0px 8px' }}
              onClick={(e: any) => {
                const eventDatashowCustomModal7: any = [
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
                        catalogCode: '$state.catalogCode$',
                        isCoreFlag: '1',
                        staffCode: '$state.staffCode$',
                        selectOptionsData: '$data.selectOptionsData$',
                        zoneCode: '$state.zoneCode$',
                        orderNbr: '$state.fileInstNbr$',
                      },
                      paramsObjKeyValueMap: {
                        phone: '$value_24586657$',
                        lanId: '$state.lanId$',
                        catalogCode: '$state.catalogCode$',
                        isCoreFlag: '1',
                        staffCode: '$state.staffCode$',
                        selectOptionsData: '$data.selectOptionsData$',
                        zoneCode: '$state.zoneCode$',
                        orderNbr: '$state.fileInstNbr$',
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
                          code: 'function main(data,state,success,fail){data.MemberInfo.push(okData_611628);console.log("\\u91CD\\u8981\\u6210\\u5458-data.sceneSubmit.custMemberList",data.sceneSubmit.custMemberList);if(data.sceneSubmit.custMemberList!=undefined&&data.sceneSubmit.custMemberList.length>0){data.sceneSubmit.custMemberList.push(okData_611628)}else{var custMemberList=[];custMemberList.push(okData_611628);data.sceneSubmit.custMemberList=custMemberList}success()};',
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
                                  attrId: '4823123',
                                  code: 'msisdn',
                                  name: '手机号码',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                },
                                {
                                  attrId: '134739',
                                  code: 'memberJoinDate',
                                  name: '纳入成员骨干时间',
                                  type: 'datetime',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  value: { type: [], code: 'memberJoinDate' },
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
                                  attrId: '716457',
                                  code: 'memberType',
                                  name: '成员类型',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  value: { type: [], code: 'memberType' },
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
                                  attrId: '8583146',
                                  code: 'cutOffTime',
                                  name: '免扰截至时间',
                                  type: 'datetime',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
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
                                  attrId: '360409',
                                  code: 'supervise',
                                  name: '看管人员',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  value: { type: [], code: 'supervise' },
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
                                  attrId: '6475557',
                                  code: 'memberTypeName',
                                  name: '成员类型名称',
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
                              ],
                              operateType: 1,
                              onlySetPatch: true,
                              otherObjectArrayOptions: {},
                            },
                            line_number: 3,
                            callback1: [
                              {
                                type: 'callSelfFunc',
                                dataId: 167592337219107400,
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '5890647',
                                  pageJsonId: '537892',
                                  customFuncName: 'updateTitle',
                                },
                                line_number: 4,
                                callback1: [],
                                callback2: [],
                              },
                            ],
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
                eventDatashowCustomModal7.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatashowCustomModal7,
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
              type={'default'}
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
                const eventDatagetTableSelectedKey9: any = [
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
                        shielding: true,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '79825',
                          pageJsonId: '537892',
                          code: 'function main(data,state,success,fail){var memnerInfo=data.MemberInfo;var sel=selectedRowKeys_455736;var res=[];if(sel!=undefined&&sel.length>0){memnerInfo.forEach(function(v){var exit=true;sel.forEach(function(s){if(s===v.rowId){exit=false}});if(exit){res.push(v)}});data.MemberInfo=res;data.sceneSubmit.custMemberList=res}success()};',
                        },
                        line_number: 2,
                        callback1: [
                          {
                            type: 'setDataSource',
                            dataId: 166305417676623140,
                            shielding: true,
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
                            shielding: true,
                            options: {
                              compId: 'callParentCustomFunc',
                              compName: 'system',
                              id: '2648465',
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
                        type: 'showModal',
                        dataId: 167506473255267680,
                        options: {
                          compId: 'showModal',
                          compName: 'page',
                          id: '857908',
                          pageJsonId: '537892',
                          type: 'confirm',
                          title: '友情提示',
                          content: '你确定要删除吗？',
                          okText: '确认',
                        },
                        line_number: 5,
                        callback1: [
                          {
                            type: 'customActionCode',
                            dataId: 167506476712489730,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '2571',
                              pageJsonId: '537892',
                              code: 'function main(data,state,success,fail){var memnerInfo=data.MemberInfo;var sel=selectedRowKeys_455736;var res=[];if(sel!=undefined&&sel.length>0){memnerInfo.forEach(function(v){var exit=true;sel.forEach(function(s){if(s===v.rowId){exit=false}});if(exit){res.push(v)}});data.MemberInfo=res;data.sceneSubmit.custMemberList=res}success()};',
                            },
                            line_number: 6,
                            callback1: [
                              {
                                type: 'setDataSource',
                                dataId: 167506476712445200,
                                options: {
                                  compId: 'setDataSource',
                                  compName: 'page',
                                  id: '4647566',
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
                                      initialData: {
                                        type: 'static',
                                        value: '',
                                      },
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
                                      initialData: {
                                        type: 'static',
                                        value: '',
                                      },
                                    },
                                    {
                                      attrId: '915963',
                                      code: 'pageSize',
                                      name: '每页数量',
                                      type: 'long',
                                      sort: { isSort: true },
                                      initialData: {
                                        type: 'static',
                                        value: '',
                                      },
                                    },
                                    {
                                      attrId: '750397',
                                      code: 'childNode',
                                      name: '从表子节点',
                                      type: 'string',
                                      sort: { isSort: true },
                                      initialData: {
                                        type: 'static',
                                        value: '',
                                      },
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
                                      initialData: {
                                        type: 'static',
                                        value: '',
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
                                    dataId: 167592338350459520,
                                    options: {
                                      compId: 'callSelfFunc',
                                      compName: 'system',
                                      id: '562897',
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
                              {
                                type: 'callParentCustomFunc',
                                dataId: 167506476712430660,
                                options: {
                                  compId: 'callParentCustomFunc',
                                  compName: 'system',
                                  id: '999885',
                                  pageJsonId: '537892',
                                  pathname: '/auditOrderPrepare',
                                  pageId: '884045146848604160',
                                  customFuncName: 'getFactor',
                                  customFuncParams: '$data.sceneSubmit$',
                                },
                                line_number: 9,
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
                eventDatagetTableSelectedKey9.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatagetTableSelectedKey9,
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
                id: 'StdUpload_4835215_7877536',
                uid: 'StdUpload_4835215_7877536',
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
                const eventDatasetLoading60: any = [
                  {
                    type: 'setLoading',
                    dataId: 167698816454893760,
                    options: {
                      compId: 'Table_8700198',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Table',
                      id: '614125',
                      loading: true,
                    },
                    line_number: 1,
                  },
                ];
                eventDatasetLoading60.params =
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
                  eventDatasetLoading60,
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
                const eventDataapiRequest649: any = [
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
                                code: 'CLS_JC_0004_0003',
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
                      _sourceName: '下载Excle文件并解析-hdb',
                    },
                    line_number: 2,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '755519',
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
                        dataId: 167642666838200130,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 167642674612951500,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 167642674955574100,
                                children: [
                                  {
                                    dataName: 'callback',
                                    dataId: 167642674955570140,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 167642674955541100,
                                        children: [
                                          {
                                            dataName: 'callback',
                                            dataId: 167642674955595360,
                                            children: [
                                              {
                                                dataName: 'action',
                                                dataId: 167642674955586720,
                                                children: [
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 167642674955503170,
                                                    children: [],
                                                    value: 'callback1',
                                                    params: [],
                                                  },
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 167642674955559200,
                                                    children: [],
                                                    value: 'callback2',
                                                    params: [],
                                                  },
                                                ],
                                                todoOptions: [
                                                  'customFuncName',
                                                  'customFuncParams',
                                                ],
                                                options: {
                                                  compId: 'callSelfFunc',
                                                  compName: 'system',
                                                  id: '88851',
                                                  pageJsonId: '537892',
                                                  customFuncName: 'updateTitle',
                                                },
                                                actionObjId: 'callSelfFunc',
                                                actionObjName: 'system',
                                                value: 'callSelfFunc',
                                                line_number: 7,
                                              },
                                            ],
                                            value: 'callback1',
                                            params: [],
                                          },
                                          {
                                            dataName: 'callback',
                                            dataId: 167642674955567230,
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
                                          id: '241472',
                                          pageJsonId: '537892',
                                          dataSourceId: 166303981671487000,
                                          dataSourceName: 'MemberInfo',
                                          dataSourceRelType: 'object',
                                          dataSourceReloadFilter: [
                                            {
                                              attrId: '261566',
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
                                              attrId: '804406',
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
                                              attrId: '590862',
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
                                              attrId: '772484',
                                              code: 'actionTypeName',
                                              name: '操作类型名称',
                                              type: 'string',
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
                                              attrId: '5029193',
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
                                              attrId: '990941',
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
                                              attrId: '27162',
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
                                              attrId: '4013114',
                                              code: 'msisdnomeCityName',
                                              name: '号码归属地名称',
                                              type: 'string',
                                              sort: { isSort: true },
                                              initialData: {
                                                type: 'static',
                                                value: null,
                                              },
                                            },
                                            {
                                              attrId: '40917',
                                              code: 'sceneType',
                                              name: '场景类型',
                                              type: 'string',
                                              sort: { isSort: true },
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                            },
                                            {
                                              attrId: '3319386',
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
                                              attrId: '428051',
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
                                              attrId: '651884',
                                              code: 'coreFlagName',
                                              name: '是否重要成员名称',
                                              type: 'string',
                                              sort: { isSort: true },
                                              initialData: {
                                                type: 'static',
                                                value: null,
                                              },
                                            },
                                            {
                                              attrId: '024802',
                                              code: 'genderName',
                                              name: '性别中文名',
                                              type: 'string',
                                              sort: { isSort: true },
                                              initialData: {
                                                type: 'static',
                                                value: null,
                                              },
                                            },
                                            {
                                              attrId: '8042105',
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
                                              attrId: '962945',
                                              code: 'actionType',
                                              name: '操作类型',
                                              type: 'string',
                                              sort: { isSort: true },
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                            },
                                            {
                                              attrId: '23785',
                                              code: 'homeCityName',
                                              name: '集团归属地名称',
                                              type: 'string',
                                              sort: { isSort: true },
                                              initialData: {
                                                type: 'static',
                                                value: null,
                                              },
                                            },
                                            {
                                              attrId: '7803764',
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
                                              attrId: '501525',
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
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                            },
                                            {
                                              attrId: '337593',
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
                                              attrId: '231464',
                                              code: 'sceneTypeName',
                                              name: '场景类型名称',
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
                                              name: '看管人员',
                                              type: 'string',
                                              sort: { isSort: true },
                                              initialData: {
                                                type: 'static',
                                                value: null,
                                              },
                                            },
                                            {
                                              attrId: '513617',
                                              code: 'remark',
                                              name: '备注',
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
                                              attrId: '8599867',
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
                                              attrId: '325211',
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
                                              attrId: '8531766',
                                              code: 'msisdnomeCity',
                                              name: '成员号码归属地',
                                              type: 'string',
                                              sort: { isSort: true },
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                            },
                                            {
                                              attrId: '721256',
                                              code: 'homeCity',
                                              name: '集团归属地',
                                              type: 'string',
                                              sort: { isSort: true },
                                              initialData: {
                                                type: 'static',
                                                value: '',
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
                                              attrId: '990033',
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
                                              attrId: '2421913',
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
                                              attrId: '381982',
                                              code: 'coreFlag',
                                              name: '是否重要成员',
                                              type: 'string',
                                              sort: { isSort: true },
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                            },
                                            {
                                              attrId: '3582162',
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
                                              attrId: '016159',
                                              code: 'objTypeName',
                                              name: '对象类型名称',
                                              type: 'string',
                                              sort: { isSort: true },
                                              initialData: {
                                                type: 'static',
                                                value: null,
                                              },
                                            },
                                            {
                                              attrId: '28098',
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
                                              attrId: '638646',
                                              code: 'objType',
                                              name: '对象类型',
                                              type: 'string',
                                              sort: { isSort: true },
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                            },
                                            {
                                              attrId: '233847',
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
                                              attrId: '1412322',
                                              code: 'pageNum',
                                              name: '页数',
                                              type: 'long',
                                              sort: { isSort: true },
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                            },
                                            {
                                              attrId: '915963',
                                              code: 'pageSize',
                                              name: '每页数量',
                                              type: 'long',
                                              sort: { isSort: true },
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                            },
                                            {
                                              attrId: '750397',
                                              code: 'childNode',
                                              name: '从表子节点',
                                              type: 'string',
                                              sort: { isSort: true },
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
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
                                            },
                                            {
                                              attrId: '82682',
                                              code: 'noDisturbScope',
                                              name: '免扰范围',
                                              type: 'string',
                                              sort: { isSort: true },
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
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
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                            },
                                            {
                                              attrId: '351828',
                                              code: 'sceneType',
                                              name: '场景类型',
                                              type: 'string',
                                              sort: { isSort: true },
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                            },
                                            {
                                              attrId: '2212653',
                                              code: 'msisdnomeCity',
                                              name: '成员号码归属地',
                                              type: 'string',
                                              sort: { isSort: true },
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                            },
                                            {
                                              attrId: '688676',
                                              code: 'objType',
                                              name: '对象类型',
                                              type: 'string',
                                              sort: { isSort: true },
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                            },
                                            {
                                              attrId: '8138167',
                                              code: 'homeCity',
                                              name: '集团归属地',
                                              type: 'string',
                                              sort: { isSort: true },
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
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
                                            {
                                              attrId: '396255',
                                              code: 'coreFlag',
                                              name: '是否重要成员',
                                              type: 'string',
                                              sort: { isSort: true },
                                              initialData: {
                                                type: 'static',
                                                value: '',
                                              },
                                            },
                                            {
                                              attrId: '666725',
                                              code: 'actionTypeName',
                                              name: '操作类型名称',
                                              type: 'string',
                                              sort: { isSort: true },
                                              initialData: {
                                                type: 'static',
                                                value: null,
                                              },
                                            },
                                            {
                                              attrId: '2575794',
                                              code: 'sceneTypeName',
                                              name: '场景类型名称',
                                              type: 'string',
                                              sort: { isSort: true },
                                              initialData: {
                                                type: 'static',
                                                value: null,
                                              },
                                            },
                                            {
                                              attrId: '812994',
                                              code: 'msisdnomeCityName',
                                              name: '号码归属地名称',
                                              type: 'string',
                                              sort: { isSort: true },
                                              initialData: {
                                                type: 'static',
                                                value: null,
                                              },
                                            },
                                            {
                                              attrId: '845038',
                                              code: 'objTypeName',
                                              name: '对象类型名称',
                                              type: 'string',
                                              sort: { isSort: true },
                                              initialData: {
                                                type: 'static',
                                                value: null,
                                              },
                                            },
                                            {
                                              attrId: '866365',
                                              code: 'homeCityName',
                                              name: '集团归属地名称',
                                              type: 'string',
                                              sort: { isSort: true },
                                              initialData: {
                                                type: 'static',
                                                value: null,
                                              },
                                            },
                                            {
                                              attrId: '5803486',
                                              code: 'genderName',
                                              name: '性别中文名',
                                              type: 'string',
                                              sort: { isSort: true },
                                              initialData: {
                                                type: 'static',
                                                value: null,
                                              },
                                            },
                                            {
                                              attrId: '6727147',
                                              code: 'coreFlagName',
                                              name: '是否重要成员名称',
                                              type: 'string',
                                              sort: { isSort: true },
                                              initialData: {
                                                type: 'static',
                                                value: null,
                                              },
                                            },
                                          ],
                                          newData: '$data_824529$',
                                          operateType: 1,
                                          onlySetPatch: true,
                                          otherObjectArrayOptions: {},
                                        },
                                        actionObjId: 'setDataSource',
                                        actionObjName: 'page',
                                        value: 'setDataSource',
                                        line_number: 6,
                                      },
                                      {
                                        dataName: 'action',
                                        dataId: 170184389253382180,
                                        children: [
                                          {
                                            dataName: 'callback',
                                            dataId: 170184389253306800,
                                            children: [],
                                            value: 'callback1',
                                            params: [],
                                          },
                                          {
                                            dataName: 'callback',
                                            dataId: 170184389253388160,
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
                                          id: '422799',
                                          pageJsonId: '537892',
                                          pathname: '/auditOrderPrepare',
                                          pageId: '884045146848604160',
                                          customFuncName: 'getFactor',
                                          customFuncParams:
                                            '$data.sceneSubmit$',
                                          modalPath: '/auditOrderPrepare',
                                        },
                                        actionObjId: 'callParentCustomFunc',
                                        actionObjName: 'system',
                                        value: 'callParentCustomFunc',
                                        line_number: 8,
                                      },
                                      {
                                        dataName: 'condition',
                                        dataId: 170323621872161200,
                                        children: [
                                          {
                                            dataName: 'action',
                                            dataId: 170323691177309100,
                                            children: [
                                              {
                                                dataName: 'callback',
                                                dataId: 170323691177372450,
                                                children: [
                                                  {
                                                    dataName: 'action',
                                                    dataId: 170323699646156320,
                                                    children: [
                                                      {
                                                        dataName: 'callback',
                                                        dataId: 170323699646196930,
                                                        children: [],
                                                        value: 'callback1',
                                                        params: [],
                                                        shielding: true,
                                                      },
                                                      {
                                                        dataName: 'callback',
                                                        dataId: 170323699646190800,
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
                                                      compId:
                                                        'customActionCode',
                                                      compName: 'page',
                                                      id: '346013',
                                                      pageJsonId: '537892',
                                                      actionTitle:
                                                        '补充集团信息',
                                                    },
                                                    actionObjId:
                                                      'customActionCode',
                                                    actionObjName: 'page',
                                                    value: 'customActionCode',
                                                    tips: '注意：如果需要配合退出事件，请在代码块中增加return true',
                                                    shielding: true,
                                                    line_number: 11,
                                                  },
                                                  {
                                                    dataName: 'action',
                                                    dataId: 170323698176024860,
                                                    children: [
                                                      {
                                                        dataName: 'callback',
                                                        dataId: 170323698176074560,
                                                        children: [
                                                          {
                                                            dataName: 'action',
                                                            dataId: 170323698176017150,
                                                            children: [
                                                              {
                                                                dataName:
                                                                  'callback',
                                                                dataId: 170323698176043230,
                                                                children: [],
                                                                value:
                                                                  'callback1',
                                                                params: [],
                                                                shielding: true,
                                                              },
                                                              {
                                                                dataName:
                                                                  'callback',
                                                                dataId: 170323698176064160,
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
                                                              compName:
                                                                'system',
                                                              id: '7111926',
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
                                                        dataId: 170323698176059070,
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
                                                      id: '1233923',
                                                      pageJsonId: '537892',
                                                      dataSourceId: 166303981671487000,
                                                      dataSourceName:
                                                        'MemberInfo',
                                                      dataSourceRelType:
                                                        'object',
                                                      dataSourceReloadFilter: [
                                                        {
                                                          attrId: '261566',
                                                          code: 'keyType',
                                                          name: '关键人标识',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: null,
                                                          },
                                                        },
                                                        {
                                                          attrId: '804406',
                                                          code: 'customerId',
                                                          name: '客户ID',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: null,
                                                          },
                                                        },
                                                        {
                                                          attrId: '590862',
                                                          code: 'officialLevelName',
                                                          name: '行政级别名称',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
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
                                                          sort: {
                                                            isSort: true,
                                                          },
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
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: null,
                                                          },
                                                        },
                                                        {
                                                          attrId: '772484',
                                                          code: 'actionTypeName',
                                                          name: '操作类型名称',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
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
                                                          sort: {
                                                            isSort: true,
                                                          },
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
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: null,
                                                          },
                                                        },
                                                        {
                                                          attrId: '5029193',
                                                          code: 'rowId',
                                                          name: '行ID',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: null,
                                                          },
                                                        },
                                                        {
                                                          attrId: '990941',
                                                          code: 'tradeclassTop',
                                                          name: '行业类型ID',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: null,
                                                          },
                                                        },
                                                        {
                                                          attrId: '27162',
                                                          code: 'tradeclassTopName',
                                                          name: '行业类型名称',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: null,
                                                          },
                                                        },
                                                        {
                                                          attrId: '4013114',
                                                          code: 'msisdnomeCityName',
                                                          name: '号码归属地名称',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: null,
                                                          },
                                                        },
                                                        {
                                                          attrId: '40917',
                                                          code: 'sceneType',
                                                          name: '场景类型',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: '',
                                                          },
                                                        },
                                                        {
                                                          attrId: '3319386',
                                                          code: 'name',
                                                          name: '姓名',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: null,
                                                          },
                                                        },
                                                        {
                                                          attrId: '428051',
                                                          code: 'keyTypeName',
                                                          name: '关键人标识名称',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: null,
                                                          },
                                                        },
                                                        {
                                                          attrId: '651884',
                                                          code: 'coreFlagName',
                                                          name: '是否重要成员名称',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: null,
                                                          },
                                                        },
                                                        {
                                                          attrId: '024802',
                                                          code: 'genderName',
                                                          name: '性别中文名',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: null,
                                                          },
                                                        },
                                                        {
                                                          attrId: '8042105',
                                                          code: 'memberTypeName',
                                                          name: '成员类型名称',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: null,
                                                          },
                                                        },
                                                        {
                                                          attrId: '962945',
                                                          code: 'actionType',
                                                          name: '操作类型',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: '',
                                                          },
                                                        },
                                                        {
                                                          attrId: '23785',
                                                          code: 'homeCityName',
                                                          name: '集团归属地名称',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: null,
                                                          },
                                                        },
                                                        {
                                                          attrId: '7803764',
                                                          code: 'email',
                                                          name: '邮箱',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: null,
                                                          },
                                                        },
                                                        {
                                                          attrId: '501525',
                                                          code: 'groupName',
                                                          name: '集团名称',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
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
                                                          sort: {
                                                            isSort: true,
                                                          },
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
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: '',
                                                          },
                                                        },
                                                        {
                                                          attrId: '337593',
                                                          code: 'groupId',
                                                          name: '集团编码',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: null,
                                                          },
                                                        },
                                                        {
                                                          attrId: '231464',
                                                          code: 'sceneTypeName',
                                                          name: '场景类型名称',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: null,
                                                          },
                                                        },
                                                        {
                                                          attrId: '874366',
                                                          code: 'supervise',
                                                          name: '看管人员',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: null,
                                                          },
                                                        },
                                                        {
                                                          attrId: '513617',
                                                          code: 'remark',
                                                          name: '备注',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
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
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: null,
                                                          },
                                                        },
                                                        {
                                                          attrId: '8599867',
                                                          code: 'statusName',
                                                          name: '集团状态',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: null,
                                                          },
                                                        },
                                                        {
                                                          attrId: '325211',
                                                          code: 'gender',
                                                          name: '性别',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: null,
                                                          },
                                                        },
                                                        {
                                                          attrId: '8531766',
                                                          code: 'msisdnomeCity',
                                                          name: '成员号码归属地',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: '',
                                                          },
                                                        },
                                                        {
                                                          attrId: '721256',
                                                          code: 'homeCity',
                                                          name: '集团归属地',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: '',
                                                          },
                                                        },
                                                        {
                                                          attrId: '1988677',
                                                          code: 'memberJoinDate_begin',
                                                          name: '纳入成员骨干时间开始',
                                                          type: 'datetime',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: null,
                                                          },
                                                        },
                                                        {
                                                          attrId: '990033',
                                                          code: 'officialLevel',
                                                          name: '行政级别',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: null,
                                                          },
                                                        },
                                                        {
                                                          attrId: '2421913',
                                                          code: 'department',
                                                          name: '部门',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: null,
                                                          },
                                                        },
                                                        {
                                                          attrId: '381982',
                                                          code: 'coreFlag',
                                                          name: '是否重要成员',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: '',
                                                          },
                                                        },
                                                        {
                                                          attrId: '3582162',
                                                          code: 'duty',
                                                          name: '职务',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: null,
                                                          },
                                                        },
                                                        {
                                                          attrId: '016159',
                                                          code: 'objTypeName',
                                                          name: '对象类型名称',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: null,
                                                          },
                                                        },
                                                        {
                                                          attrId: '28098',
                                                          code: 'msisdn',
                                                          name: '手机号码',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: null,
                                                          },
                                                        },
                                                        {
                                                          attrId: '638646',
                                                          code: 'objType',
                                                          name: '对象类型',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: '',
                                                          },
                                                        },
                                                        {
                                                          attrId: '233847',
                                                          code: 'groupLevelName',
                                                          name: '价值等级',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
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
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: '',
                                                          },
                                                        },
                                                        {
                                                          attrId: '915963',
                                                          code: 'pageSize',
                                                          name: '每页数量',
                                                          type: 'long',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: '',
                                                          },
                                                        },
                                                        {
                                                          attrId: '750397',
                                                          code: 'childNode',
                                                          name: '从表子节点',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: '',
                                                          },
                                                          value: '',
                                                        },
                                                      ],
                                                      dataSourceSetValue: [
                                                        {
                                                          attrId: '4823123',
                                                          code: 'msisdn',
                                                          name: '手机号码',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
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
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: null,
                                                          },
                                                        },
                                                        {
                                                          attrId: '58013',
                                                          code: 'groupId',
                                                          name: '集团编码',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
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
                                                          sort: {
                                                            isSort: true,
                                                          },
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
                                                          sort: {
                                                            isSort: true,
                                                          },
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
                                                          sort: {
                                                            isSort: true,
                                                          },
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
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: null,
                                                          },
                                                        },
                                                        {
                                                          attrId: '54181',
                                                          code: 'officialLevel',
                                                          name: '行政级别',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
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
                                                          sort: {
                                                            isSort: true,
                                                          },
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
                                                          sort: {
                                                            isSort: true,
                                                          },
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
                                                          sort: {
                                                            isSort: true,
                                                          },
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
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: '',
                                                          },
                                                        },
                                                        {
                                                          attrId: '231866',
                                                          code: 'name',
                                                          name: '姓名',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
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
                                                          sort: {
                                                            isSort: true,
                                                          },
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
                                                          sort: {
                                                            isSort: true,
                                                          },
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
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: null,
                                                          },
                                                        },
                                                        {
                                                          attrId: '1046582',
                                                          code: 'keyTypeName',
                                                          name: '关键人标识名称',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
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
                                                          sort: {
                                                            isSort: true,
                                                          },
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
                                                          sort: {
                                                            isSort: true,
                                                          },
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
                                                          sort: {
                                                            isSort: true,
                                                          },
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
                                                          sort: {
                                                            isSort: true,
                                                          },
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
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: '',
                                                          },
                                                        },
                                                        {
                                                          attrId: '351828',
                                                          code: 'sceneType',
                                                          name: '场景类型',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: '',
                                                          },
                                                        },
                                                        {
                                                          attrId: '2212653',
                                                          code: 'msisdnomeCity',
                                                          name: '成员号码归属地',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: '',
                                                          },
                                                        },
                                                        {
                                                          attrId: '688676',
                                                          code: 'objType',
                                                          name: '对象类型',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: '',
                                                          },
                                                        },
                                                        {
                                                          attrId: '8138167',
                                                          code: 'homeCity',
                                                          name: '集团归属地',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: '',
                                                          },
                                                        },
                                                        {
                                                          attrId: '867706',
                                                          code: 'email',
                                                          name: '邮箱',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
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
                                                          sort: {
                                                            isSort: true,
                                                          },
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
                                                          sort: {
                                                            isSort: true,
                                                          },
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
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: null,
                                                          },
                                                        },
                                                        {
                                                          attrId: '396255',
                                                          code: 'coreFlag',
                                                          name: '是否重要成员',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: '',
                                                          },
                                                        },
                                                        {
                                                          attrId: '666725',
                                                          code: 'actionTypeName',
                                                          name: '操作类型名称',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: null,
                                                          },
                                                        },
                                                        {
                                                          attrId: '2575794',
                                                          code: 'sceneTypeName',
                                                          name: '场景类型名称',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: null,
                                                          },
                                                        },
                                                        {
                                                          attrId: '812994',
                                                          code: 'msisdnomeCityName',
                                                          name: '号码归属地名称',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: null,
                                                          },
                                                        },
                                                        {
                                                          attrId: '845038',
                                                          code: 'objTypeName',
                                                          name: '对象类型名称',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: null,
                                                          },
                                                        },
                                                        {
                                                          attrId: '866365',
                                                          code: 'homeCityName',
                                                          name: '集团归属地名称',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: null,
                                                          },
                                                        },
                                                        {
                                                          attrId: '5803486',
                                                          code: 'genderName',
                                                          name: '性别中文名',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: null,
                                                          },
                                                        },
                                                        {
                                                          attrId: '6727147',
                                                          code: 'coreFlagName',
                                                          name: '是否重要成员名称',
                                                          type: 'string',
                                                          sort: {
                                                            isSort: true,
                                                          },
                                                          initialData: {
                                                            type: 'static',
                                                            value: null,
                                                          },
                                                        },
                                                      ],
                                                      newData: '$data_824529$',
                                                      operateType: 1,
                                                      onlySetPatch: true,
                                                      otherObjectArrayOptions:
                                                        {},
                                                    },
                                                    actionObjId:
                                                      'setDataSource',
                                                    actionObjName: 'page',
                                                    value: 'setDataSource',
                                                    shielding: true,
                                                    line_number: 12,
                                                  },
                                                  {
                                                    dataName: 'action',
                                                    dataId: 170323697615126600,
                                                    children: [
                                                      {
                                                        dataName: 'callback',
                                                        dataId: 170323697615157920,
                                                        children: [],
                                                        value: 'callback1',
                                                        params: [],
                                                        shielding: true,
                                                      },
                                                      {
                                                        dataName: 'callback',
                                                        dataId: 170323697615178850,
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
                                                      compId:
                                                        'callParentCustomFunc',
                                                      compName: 'system',
                                                      id: '57353',
                                                      pageJsonId: '537892',
                                                      pathname:
                                                        '/auditOrderPrepare',
                                                      pageId:
                                                        '884045146848604160',
                                                      customFuncName:
                                                        'getFactor',
                                                      customFuncParams:
                                                        '$data.sceneSubmit$',
                                                      modalPath:
                                                        '/auditOrderPrepare',
                                                    },
                                                    actionObjId:
                                                      'callParentCustomFunc',
                                                    actionObjName: 'system',
                                                    value:
                                                      'callParentCustomFunc',
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
                                                dataId: 170323691177319200,
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
                                              id: '780719',
                                              pageJsonId: '6584614',
                                              sync: false,
                                              method: 'post',
                                              url: '/app/rhin/gateway/callRhinEngine',
                                              _capabilityCode:
                                                'groupCustomerInfo',
                                              _apiCode: 'groupCustomerInfo',
                                              _source: 'rhin',
                                              _serviceId: '915442281117552640',
                                              _serviceTitle:
                                                '查询集团详情-hdb: groupCustomerInfo',
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
                                                          code: 'orderNbr',
                                                          name: '新增节点',
                                                          attrType: 'field',
                                                          type: 'string',
                                                          mustFlag: 'F',
                                                          defaultValue: '',
                                                          _id: 'root.body.orderNbr',
                                                          compType: 'Input',
                                                          parents: [
                                                            'root',
                                                            'body',
                                                          ],
                                                          id: 'root.body.orderNbr',
                                                          dataKey:
                                                            '388048_root.body.orderNbr',
                                                          value: {
                                                            type: [
                                                              'page',
                                                              'url',
                                                            ],
                                                            code: 'orderId',
                                                          },
                                                          parentType: 'object',
                                                          parentKey: '0-3',
                                                          key: '0-3-1',
                                                        },
                                                        {
                                                          code: 'instanceList',
                                                          name: '新增节点',
                                                          attrType:
                                                            'objectArray',
                                                          _id: 'root.body.instanceList',
                                                          compType: 'Input',
                                                          parents: [
                                                            'root',
                                                            'body',
                                                          ],
                                                          id: 'root.body.instanceList',
                                                          dataKey:
                                                            '388048_root.body.instanceList',
                                                          value: {
                                                            type: [
                                                              'context',
                                                              '$data_824529$',
                                                            ],
                                                            code: '',
                                                          },
                                                          parentType: 'object',
                                                          parentKey: '0-3',
                                                          key: '0-3-3',
                                                        },
                                                        {
                                                          code: 'objType',
                                                          attrType: 'field',
                                                          type: 'string',
                                                          mustFlag: 'F',
                                                          _id: 'root.body.objType',
                                                          compType: 'Input',
                                                          name: 'objType',
                                                          parents: [
                                                            'root',
                                                            'body',
                                                          ],
                                                          parentType: 'object',
                                                          parentKey: '0-3',
                                                          key: '0-3-0',
                                                          id: 'root.body.objType',
                                                          dataKey:
                                                            '388048_root.body.objType',
                                                        },
                                                        {
                                                          code: 'objId',
                                                          attrType: 'field',
                                                          type: 'string',
                                                          mustFlag: 'F',
                                                          _id: 'root.body.objId',
                                                          compType: 'Input',
                                                          name: 'objId',
                                                          parents: [
                                                            'root',
                                                            'body',
                                                          ],
                                                          parentType: 'object',
                                                          parentKey: '0-3',
                                                          key: '0-3-2',
                                                          id: 'root.body.objId',
                                                          dataKey:
                                                            '388048_root.body.objId',
                                                        },
                                                      ],
                                                      _id: 'root.body',
                                                      compType: 'Input',
                                                      parents: ['root'],
                                                      id: 'root.body',
                                                      dataKey:
                                                        '388048_root.body',
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
                                                      dataKey:
                                                        '388048_root.header',
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
                                                      dataKey:
                                                        '388048_root.path',
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
                                                      dataKey:
                                                        '388048_root.query',
                                                    },
                                                  ],
                                                  _id: 'root',
                                                  compType: 'Input',
                                                  isRoot: true,
                                                  parents: [],
                                                  key: '0',
                                                  id: 'root',
                                                  dataKey: '388048_root',
                                                },
                                              ],
                                              _sourceName: '查询集团详情-hdb',
                                            },
                                            actionObjId: 'apiRequest',
                                            actionObjName: 'system',
                                            value: 'apiRequest',
                                            shielding: true,
                                            line_number: 10,
                                          },
                                        ],
                                        elseIfs: [],
                                        condition: [
                                          {
                                            condId: '83085907',
                                            options: {
                                              context: '$data.MemberInfo$',
                                              operate: 'notEmpty',
                                            },
                                            conditionType: 'checkContextValue',
                                            objType: 'system',
                                            objId: 'sys',
                                          },
                                          {
                                            options: {
                                              context:
                                                '$data.MemberInfo.groupId$',
                                              operate: 'notEmpty',
                                            },
                                            condId: '714902',
                                            connector: '&&',
                                            conditionType: 'checkContextValue',
                                            objType: 'system',
                                            objId: 'sys',
                                          },
                                        ],
                                        value: 'condition',
                                        shielding: true,
                                        line_number: 9,
                                      },
                                    ],
                                    value: 'callback1',
                                    params: [],
                                  },
                                  {
                                    dataName: 'callback',
                                    dataId: 167642674955581570,
                                    children: [],
                                    value: 'callback2',
                                    params: [],
                                  },
                                ],
                                todoOptions: ['actionTitle', 'editorCode'],
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '824529',
                                  pageJsonId: '537892',
                                  code: 'function main(data,state,success,fail){var res=reply_144156.resultData||[];if(res.length<1){fail();return}var memberInfoList=data.MemberInfo||[];var finalList=memberInfoList.concat(res);console.log("finalList = ",finalList);data.MemberInfo=finalList;data.sceneSubmit.custMemberList=finalList;var instanceList=[];instanceList.push({groupId:res[0].groupId});success(instanceList)};',
                                },
                                actionObjId: 'customActionCode',
                                actionObjName: 'page',
                                value: 'customActionCode',
                                line_number: 5,
                              },
                            ],
                            condition: [],
                            callback: [
                              {
                                type: 'customActionCode',
                                dataId: 167642674955574100,
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '824529',
                                  pageJsonId: '537892',
                                  code: 'function main(data,state,success,fail){var res=reply_144156.resultData||[];if(res.length<1){fail();return}var memberInfoList=data.MemberInfo||[];var finalList=memberInfoList.concat(res);console.log("finalList = ",finalList);data.MemberInfo=finalList;data.sceneSubmit.custMemberList=finalList;var instanceList=[];instanceList.push({groupId:res[0].groupId});success(instanceList)};',
                                },
                                line_number: 5,
                                callback1: [
                                  {
                                    type: 'setDataSource',
                                    dataId: 167642674955541100,
                                    options: {
                                      compId: 'setDataSource',
                                      compName: 'page',
                                      id: '241472',
                                      pageJsonId: '537892',
                                      dataSourceId: 166303981671487000,
                                      dataSourceName: 'MemberInfo',
                                      dataSourceRelType: 'object',
                                      dataSourceReloadFilter: [
                                        {
                                          attrId: '261566',
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
                                          attrId: '804406',
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
                                          attrId: '590862',
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
                                          attrId: '772484',
                                          code: 'actionTypeName',
                                          name: '操作类型名称',
                                          type: 'string',
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
                                          attrId: '5029193',
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
                                          attrId: '990941',
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
                                          attrId: '27162',
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
                                          attrId: '4013114',
                                          code: 'msisdnomeCityName',
                                          name: '号码归属地名称',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: null,
                                          },
                                        },
                                        {
                                          attrId: '40917',
                                          code: 'sceneType',
                                          name: '场景类型',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: '',
                                          },
                                        },
                                        {
                                          attrId: '3319386',
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
                                          attrId: '428051',
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
                                          attrId: '651884',
                                          code: 'coreFlagName',
                                          name: '是否重要成员名称',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: null,
                                          },
                                        },
                                        {
                                          attrId: '024802',
                                          code: 'genderName',
                                          name: '性别中文名',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: null,
                                          },
                                        },
                                        {
                                          attrId: '8042105',
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
                                          attrId: '962945',
                                          code: 'actionType',
                                          name: '操作类型',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: '',
                                          },
                                        },
                                        {
                                          attrId: '23785',
                                          code: 'homeCityName',
                                          name: '集团归属地名称',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: null,
                                          },
                                        },
                                        {
                                          attrId: '7803764',
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
                                          attrId: '501525',
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
                                          initialData: {
                                            type: 'static',
                                            value: '',
                                          },
                                        },
                                        {
                                          attrId: '337593',
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
                                          attrId: '231464',
                                          code: 'sceneTypeName',
                                          name: '场景类型名称',
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
                                          name: '看管人员',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: null,
                                          },
                                        },
                                        {
                                          attrId: '513617',
                                          code: 'remark',
                                          name: '备注',
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
                                          attrId: '8599867',
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
                                          attrId: '325211',
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
                                          attrId: '8531766',
                                          code: 'msisdnomeCity',
                                          name: '成员号码归属地',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: '',
                                          },
                                        },
                                        {
                                          attrId: '721256',
                                          code: 'homeCity',
                                          name: '集团归属地',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: '',
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
                                          attrId: '990033',
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
                                          attrId: '2421913',
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
                                          attrId: '381982',
                                          code: 'coreFlag',
                                          name: '是否重要成员',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: '',
                                          },
                                        },
                                        {
                                          attrId: '3582162',
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
                                          attrId: '016159',
                                          code: 'objTypeName',
                                          name: '对象类型名称',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: null,
                                          },
                                        },
                                        {
                                          attrId: '28098',
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
                                          attrId: '638646',
                                          code: 'objType',
                                          name: '对象类型',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: '',
                                          },
                                        },
                                        {
                                          attrId: '233847',
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
                                          attrId: '1412322',
                                          code: 'pageNum',
                                          name: '页数',
                                          type: 'long',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: '',
                                          },
                                        },
                                        {
                                          attrId: '915963',
                                          code: 'pageSize',
                                          name: '每页数量',
                                          type: 'long',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: '',
                                          },
                                        },
                                        {
                                          attrId: '750397',
                                          code: 'childNode',
                                          name: '从表子节点',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: '',
                                          },
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
                                        },
                                        {
                                          attrId: '82682',
                                          code: 'noDisturbScope',
                                          name: '免扰范围',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: '',
                                          },
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
                                          initialData: {
                                            type: 'static',
                                            value: '',
                                          },
                                        },
                                        {
                                          attrId: '351828',
                                          code: 'sceneType',
                                          name: '场景类型',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: '',
                                          },
                                        },
                                        {
                                          attrId: '2212653',
                                          code: 'msisdnomeCity',
                                          name: '成员号码归属地',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: '',
                                          },
                                        },
                                        {
                                          attrId: '688676',
                                          code: 'objType',
                                          name: '对象类型',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: '',
                                          },
                                        },
                                        {
                                          attrId: '8138167',
                                          code: 'homeCity',
                                          name: '集团归属地',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: '',
                                          },
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
                                        {
                                          attrId: '396255',
                                          code: 'coreFlag',
                                          name: '是否重要成员',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: '',
                                          },
                                        },
                                        {
                                          attrId: '666725',
                                          code: 'actionTypeName',
                                          name: '操作类型名称',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: null,
                                          },
                                        },
                                        {
                                          attrId: '2575794',
                                          code: 'sceneTypeName',
                                          name: '场景类型名称',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: null,
                                          },
                                        },
                                        {
                                          attrId: '812994',
                                          code: 'msisdnomeCityName',
                                          name: '号码归属地名称',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: null,
                                          },
                                        },
                                        {
                                          attrId: '845038',
                                          code: 'objTypeName',
                                          name: '对象类型名称',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: null,
                                          },
                                        },
                                        {
                                          attrId: '866365',
                                          code: 'homeCityName',
                                          name: '集团归属地名称',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: null,
                                          },
                                        },
                                        {
                                          attrId: '5803486',
                                          code: 'genderName',
                                          name: '性别中文名',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: null,
                                          },
                                        },
                                        {
                                          attrId: '6727147',
                                          code: 'coreFlagName',
                                          name: '是否重要成员名称',
                                          type: 'string',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: null,
                                          },
                                        },
                                      ],
                                      newData: '$data_824529$',
                                      operateType: 1,
                                      onlySetPatch: true,
                                      otherObjectArrayOptions: {},
                                    },
                                    line_number: 6,
                                    callback1: [
                                      {
                                        type: 'callSelfFunc',
                                        dataId: 167642674955586720,
                                        options: {
                                          compId: 'callSelfFunc',
                                          compName: 'system',
                                          id: '88851',
                                          pageJsonId: '537892',
                                          customFuncName: 'updateTitle',
                                        },
                                        line_number: 7,
                                        callback1: [],
                                        callback2: [],
                                      },
                                    ],
                                    callback2: [],
                                  },
                                  {
                                    type: 'callParentCustomFunc',
                                    dataId: 170184389253382180,
                                    options: {
                                      compId: 'callParentCustomFunc',
                                      compName: 'system',
                                      id: '422799',
                                      pageJsonId: '537892',
                                      pathname: '/auditOrderPrepare',
                                      pageId: '884045146848604160',
                                      customFuncName: 'getFactor',
                                      customFuncParams: '$data.sceneSubmit$',
                                      modalPath: '/auditOrderPrepare',
                                    },
                                    line_number: 8,
                                    callback1: [],
                                    callback2: [],
                                  },
                                  {
                                    type: 'ifelse',
                                    shielding: true,
                                    condition: [
                                      {
                                        condId: '83085907',
                                        options: {
                                          context: '$data.MemberInfo$',
                                          operate: 'notEmpty',
                                        },
                                        conditionType: 'checkContextValue',
                                        objType: 'system',
                                        objId: 'sys',
                                      },
                                      {
                                        options: {
                                          context: '$data.MemberInfo.groupId$',
                                          operate: 'notEmpty',
                                        },
                                        condId: '714902',
                                        connector: '&&',
                                        conditionType: 'checkContextValue',
                                        objType: 'system',
                                        objId: 'sys',
                                      },
                                    ],
                                    dataId: 170323621872161200,
                                    elseIfs: [],
                                    line_number: 9,
                                    callback1: [
                                      {
                                        type: 'apiRequest',
                                        dataId: 170323691177309100,
                                        shielding: true,
                                        options: {
                                          compId: 'apiRequest',
                                          compName: 'system',
                                          id: '780719',
                                          pageJsonId: '6584614',
                                          sync: false,
                                          method: 'post',
                                          url: '/app/rhin/gateway/callRhinEngine',
                                          _capabilityCode: 'groupCustomerInfo',
                                          _apiCode: 'groupCustomerInfo',
                                          _source: 'rhin',
                                          _serviceId: '915442281117552640',
                                          _serviceTitle:
                                            '查询集团详情-hdb: groupCustomerInfo',
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
                                                      code: 'orderNbr',
                                                      name: '新增节点',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      defaultValue: '',
                                                      _id: 'root.body.orderNbr',
                                                      compType: 'Input',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.orderNbr',
                                                      dataKey:
                                                        '388048_root.body.orderNbr',
                                                      value: {
                                                        type: ['page', 'url'],
                                                        code: 'orderId',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-1',
                                                    },
                                                    {
                                                      code: 'instanceList',
                                                      name: '新增节点',
                                                      attrType: 'objectArray',
                                                      _id: 'root.body.instanceList',
                                                      compType: 'Input',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.instanceList',
                                                      dataKey:
                                                        '388048_root.body.instanceList',
                                                      value: {
                                                        type: [
                                                          'context',
                                                          '$data_824529$',
                                                        ],
                                                        code: '',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-3',
                                                    },
                                                    {
                                                      code: 'objType',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.objType',
                                                      compType: 'Input',
                                                      name: 'objType',
                                                      parents: ['root', 'body'],
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-0',
                                                      id: 'root.body.objType',
                                                      dataKey:
                                                        '388048_root.body.objType',
                                                    },
                                                    {
                                                      code: 'objId',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.objId',
                                                      compType: 'Input',
                                                      name: 'objId',
                                                      parents: ['root', 'body'],
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-2',
                                                      id: 'root.body.objId',
                                                      dataKey:
                                                        '388048_root.body.objId',
                                                    },
                                                  ],
                                                  _id: 'root.body',
                                                  compType: 'Input',
                                                  parents: ['root'],
                                                  id: 'root.body',
                                                  dataKey: '388048_root.body',
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
                                                  dataKey: '388048_root.header',
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
                                                  dataKey: '388048_root.path',
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
                                                  dataKey: '388048_root.query',
                                                },
                                              ],
                                              _id: 'root',
                                              compType: 'Input',
                                              isRoot: true,
                                              parents: [],
                                              key: '0',
                                              id: 'root',
                                              dataKey: '388048_root',
                                            },
                                          ],
                                          _sourceName: '查询集团详情-hdb',
                                        },
                                        line_number: 10,
                                        callback1: [
                                          {
                                            type: 'customActionCode',
                                            dataId: 170323699646156320,
                                            shielding: true,
                                            options: {
                                              compId: 'customActionCode',
                                              compName: 'page',
                                              id: '346013',
                                              pageJsonId: '537892',
                                              actionTitle: '补充集团信息',
                                            },
                                            line_number: 11,
                                            callback1: [],
                                            callback2: [],
                                          },
                                          {
                                            type: 'setDataSource',
                                            dataId: 170323698176024860,
                                            shielding: true,
                                            options: {
                                              compId: 'setDataSource',
                                              compName: 'page',
                                              id: '1233923',
                                              pageJsonId: '537892',
                                              dataSourceId: 166303981671487000,
                                              dataSourceName: 'MemberInfo',
                                              dataSourceRelType: 'object',
                                              dataSourceReloadFilter: [
                                                {
                                                  attrId: '261566',
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
                                                  attrId: '804406',
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
                                                  attrId: '590862',
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
                                                  attrId: '772484',
                                                  code: 'actionTypeName',
                                                  name: '操作类型名称',
                                                  type: 'string',
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
                                                  attrId: '5029193',
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
                                                  attrId: '990941',
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
                                                  attrId: '27162',
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
                                                  attrId: '4013114',
                                                  code: 'msisdnomeCityName',
                                                  name: '号码归属地名称',
                                                  type: 'string',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                    value: null,
                                                  },
                                                },
                                                {
                                                  attrId: '40917',
                                                  code: 'sceneType',
                                                  name: '场景类型',
                                                  type: 'string',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                    value: '',
                                                  },
                                                },
                                                {
                                                  attrId: '3319386',
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
                                                  attrId: '428051',
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
                                                  attrId: '651884',
                                                  code: 'coreFlagName',
                                                  name: '是否重要成员名称',
                                                  type: 'string',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                    value: null,
                                                  },
                                                },
                                                {
                                                  attrId: '024802',
                                                  code: 'genderName',
                                                  name: '性别中文名',
                                                  type: 'string',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                    value: null,
                                                  },
                                                },
                                                {
                                                  attrId: '8042105',
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
                                                  attrId: '962945',
                                                  code: 'actionType',
                                                  name: '操作类型',
                                                  type: 'string',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                    value: '',
                                                  },
                                                },
                                                {
                                                  attrId: '23785',
                                                  code: 'homeCityName',
                                                  name: '集团归属地名称',
                                                  type: 'string',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                    value: null,
                                                  },
                                                },
                                                {
                                                  attrId: '7803764',
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
                                                  attrId: '501525',
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
                                                  initialData: {
                                                    type: 'static',
                                                    value: '',
                                                  },
                                                },
                                                {
                                                  attrId: '337593',
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
                                                  attrId: '231464',
                                                  code: 'sceneTypeName',
                                                  name: '场景类型名称',
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
                                                  name: '看管人员',
                                                  type: 'string',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                    value: null,
                                                  },
                                                },
                                                {
                                                  attrId: '513617',
                                                  code: 'remark',
                                                  name: '备注',
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
                                                  attrId: '8599867',
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
                                                  attrId: '325211',
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
                                                  attrId: '8531766',
                                                  code: 'msisdnomeCity',
                                                  name: '成员号码归属地',
                                                  type: 'string',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                    value: '',
                                                  },
                                                },
                                                {
                                                  attrId: '721256',
                                                  code: 'homeCity',
                                                  name: '集团归属地',
                                                  type: 'string',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                    value: '',
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
                                                  attrId: '990033',
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
                                                  attrId: '2421913',
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
                                                  attrId: '381982',
                                                  code: 'coreFlag',
                                                  name: '是否重要成员',
                                                  type: 'string',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                    value: '',
                                                  },
                                                },
                                                {
                                                  attrId: '3582162',
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
                                                  attrId: '016159',
                                                  code: 'objTypeName',
                                                  name: '对象类型名称',
                                                  type: 'string',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                    value: null,
                                                  },
                                                },
                                                {
                                                  attrId: '28098',
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
                                                  attrId: '638646',
                                                  code: 'objType',
                                                  name: '对象类型',
                                                  type: 'string',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                    value: '',
                                                  },
                                                },
                                                {
                                                  attrId: '233847',
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
                                                  attrId: '1412322',
                                                  code: 'pageNum',
                                                  name: '页数',
                                                  type: 'long',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                    value: '',
                                                  },
                                                },
                                                {
                                                  attrId: '915963',
                                                  code: 'pageSize',
                                                  name: '每页数量',
                                                  type: 'long',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                    value: '',
                                                  },
                                                },
                                                {
                                                  attrId: '750397',
                                                  code: 'childNode',
                                                  name: '从表子节点',
                                                  type: 'string',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                    value: '',
                                                  },
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
                                                },
                                                {
                                                  attrId: '82682',
                                                  code: 'noDisturbScope',
                                                  name: '免扰范围',
                                                  type: 'string',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                    value: '',
                                                  },
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
                                                  initialData: {
                                                    type: 'static',
                                                    value: '',
                                                  },
                                                },
                                                {
                                                  attrId: '351828',
                                                  code: 'sceneType',
                                                  name: '场景类型',
                                                  type: 'string',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                    value: '',
                                                  },
                                                },
                                                {
                                                  attrId: '2212653',
                                                  code: 'msisdnomeCity',
                                                  name: '成员号码归属地',
                                                  type: 'string',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                    value: '',
                                                  },
                                                },
                                                {
                                                  attrId: '688676',
                                                  code: 'objType',
                                                  name: '对象类型',
                                                  type: 'string',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                    value: '',
                                                  },
                                                },
                                                {
                                                  attrId: '8138167',
                                                  code: 'homeCity',
                                                  name: '集团归属地',
                                                  type: 'string',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                    value: '',
                                                  },
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
                                                {
                                                  attrId: '396255',
                                                  code: 'coreFlag',
                                                  name: '是否重要成员',
                                                  type: 'string',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                    value: '',
                                                  },
                                                },
                                                {
                                                  attrId: '666725',
                                                  code: 'actionTypeName',
                                                  name: '操作类型名称',
                                                  type: 'string',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                    value: null,
                                                  },
                                                },
                                                {
                                                  attrId: '2575794',
                                                  code: 'sceneTypeName',
                                                  name: '场景类型名称',
                                                  type: 'string',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                    value: null,
                                                  },
                                                },
                                                {
                                                  attrId: '812994',
                                                  code: 'msisdnomeCityName',
                                                  name: '号码归属地名称',
                                                  type: 'string',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                    value: null,
                                                  },
                                                },
                                                {
                                                  attrId: '845038',
                                                  code: 'objTypeName',
                                                  name: '对象类型名称',
                                                  type: 'string',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                    value: null,
                                                  },
                                                },
                                                {
                                                  attrId: '866365',
                                                  code: 'homeCityName',
                                                  name: '集团归属地名称',
                                                  type: 'string',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                    value: null,
                                                  },
                                                },
                                                {
                                                  attrId: '5803486',
                                                  code: 'genderName',
                                                  name: '性别中文名',
                                                  type: 'string',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                    value: null,
                                                  },
                                                },
                                                {
                                                  attrId: '6727147',
                                                  code: 'coreFlagName',
                                                  name: '是否重要成员名称',
                                                  type: 'string',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                    value: null,
                                                  },
                                                },
                                              ],
                                              newData: '$data_824529$',
                                              operateType: 1,
                                              onlySetPatch: true,
                                              otherObjectArrayOptions: {},
                                            },
                                            line_number: 12,
                                            callback1: [
                                              {
                                                type: 'callSelfFunc',
                                                dataId: 170323698176017150,
                                                shielding: true,
                                                options: {
                                                  compId: 'callSelfFunc',
                                                  compName: 'system',
                                                  id: '7111926',
                                                  pageJsonId: '537892',
                                                  customFuncName: 'updateTitle',
                                                },
                                                line_number: 13,
                                                callback1: [],
                                                callback2: [],
                                              },
                                            ],
                                            callback2: [],
                                          },
                                          {
                                            type: 'callParentCustomFunc',
                                            dataId: 170323697615126600,
                                            shielding: true,
                                            options: {
                                              compId: 'callParentCustomFunc',
                                              compName: 'system',
                                              id: '57353',
                                              pageJsonId: '537892',
                                              pathname: '/auditOrderPrepare',
                                              pageId: '884045146848604160',
                                              customFuncName: 'getFactor',
                                              customFuncParams:
                                                '$data.sceneSubmit$',
                                              modalPath: '/auditOrderPrepare',
                                            },
                                            line_number: 14,
                                            callback1: [],
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
                            ],
                          },
                        ],
                        line_number: 3,
                        callback1: [
                          {
                            type: 'showMessage',
                            dataId: 167642673660395330,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '832888',
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
                        dataId: 167698817276527300,
                        options: {
                          compId: 'Table_8700198',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Table',
                          id: '3177876',
                          loading: false,
                        },
                        line_number: 15,
                      },
                    ],
                    callback2: [
                      {
                        type: 'setLoading',
                        dataId: 167817588103947740,
                        options: {
                          compId: 'Table_8700198',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Table',
                          id: '529135',
                          loading: false,
                        },
                        line_number: 16,
                      },
                    ],
                  },
                ];
                eventDataapiRequest649.params =
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
                  eventDataapiRequest649,
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
                const eventDatacustomActionCode324: any = [
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
                eventDatacustomActionCode324.params =
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
                  eventDatacustomActionCode324,
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
              ref={(r: any) => (refs['StdUpload_4835215_7877536'] = r)}
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
                id: 'Button_430819',
                uid: 'Button_430819',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ width: 'fit-content', margin: '0px 0px 0px 8px' }}
              onClick={(e: any) => {
                const eventDataapiRequest650: any = [
                  {
                    type: 'apiRequest',
                    dataId: 167357650523585020,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '238058',
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
                          dataKey: '238058_header',
                        },
                        {
                          code: 'path',
                          name: '请求路径参数',
                          attrType: 'object',
                          _id: 'path',
                          compType: 'Input',
                          parents: [],
                          id: 'path',
                          dataKey: '238058_path',
                        },
                        {
                          code: 'query',
                          name: 'URL 参数',
                          attrType: 'object',
                          _id: 'query',
                          compType: 'Input',
                          parents: [],
                          id: 'query',
                          dataKey: '238058_query',
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
                              dataKey: '238058_body.sceneCode',
                              value: {
                                type: ['customize'],
                                code: 'CLS_JC_0004_0003',
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
                              dataKey: '238058_body.fileTemplateName',
                              value: {
                                type: ['customize'],
                                code: '重要成员增减模板.xlsx',
                              },
                            },
                          ],
                          _id: 'body',
                          compType: 'Input',
                          parents: [],
                          id: 'body',
                          dataKey: '238058_body',
                        },
                      ],
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'downloadByFileId',
                        dataId: 167357652362717300,
                        options: {
                          compId: 'downloadByFileId',
                          compName: 'system',
                          id: '7605736',
                          pageJsonId: '537892',
                          data: '$reply_238058.resultData.fileId$',
                        },
                        line_number: 2,
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDataapiRequest650.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDataapiRequest650, { e }, 'apiRequest', {
                  id: 'apiRequest',
                  name: 'apiRequest',
                  type: 'apiRequest',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Button_430819'] = r)}
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
                id: 'Button_050256_034475_19183654',
                uid: 'Button_050256_034475_19183654',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ width: 'fit-content', margin: '0px 0px 0px 8px' }}
              onClick={(e: any) => {
                const eventDatagetTableSelected16: any = [
                  {
                    type: 'getTableSelected',
                    dataId: 167699552928020700,
                    shielding: true,
                    options: {
                      compId: 'Table_8700198',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Table',
                      id: '759748',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'ifelse',
                        shielding: true,
                        condition: [
                          {
                            condId: '325298',
                            options: {
                              context: '$selectedRows_759748$',
                              operate: 'notEmpty',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 167699553135122620,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 167699555035159330,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 167699556065479500,
                                children: [],
                                todoOptions: ['msgType', 'value'],
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '9432925',
                                  pageJsonId: '537892',
                                  type: 'info',
                                  value: '请先选择需要导出的数据！',
                                },
                                actionObjId: 'showMessage',
                                actionObjName: 'system',
                                value: 'showMessage',
                                shielding: true,
                                line_number: 8,
                              },
                            ],
                            condition: [],
                            shielding: true,
                            callback: [
                              {
                                type: 'showMessage',
                                dataId: 167699556065479500,
                                shielding: true,
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '9432925',
                                  pageJsonId: '537892',
                                  type: 'info',
                                  value: '请先选择需要导出的数据！',
                                },
                                line_number: 8,
                              },
                            ],
                          },
                        ],
                        line_number: 2,
                        callback1: [
                          {
                            type: 'customActionCode',
                            dataId: 167699554456308060,
                            shielding: true,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '3622049',
                              pageJsonId: '537892',
                              code: 'function main(data,state,success,fail){var arr1=[];var arr2=[];var memberInfo=selectedRows_759748;for(var i=0;i<memberInfo.length;i++){var info=memberInfo[i];{arr2.push({"name":"\\u64CD\\u4F5C\\u7C7B\\u578B","value":info.actionTypeName});arr2.push({"name":"\\u573A\\u666F\\u7C7B\\u578B","value":info.sceneTypeName});arr2.push({"name":"\\u624B\\u673A\\u53F7\\u7801","value":info.msisdn});arr2.push({"name":"\\u59D3\\u540D","value":info.name});arr2.push({"name":"\\u6210\\u5458\\u53F7\\u7801\\u5F52\\u5C5E\\u5730","value":info.msisdnomeCityName});arr2.push({"name":"\\u5BF9\\u8C61\\u7C7B\\u578B","value":info.objTypeName});arr2.push({"name":"*\\u96C6\\u56E2\\u7F16\\u7801","value":info.groupId});arr2.push({"name":"\\u96C6\\u56E2\\u540D\\u79F0","value":info.groupName});arr2.push({"name":"\\u96C6\\u56E2\\u5F52\\u5C5E\\u5730","value":info.homeCityName});arr2.push({"name":"\\u6210\\u5458\\u7C7B\\u578B","value":info.memberTypeName});arr2.push({"name":"\\u884C\\u653F\\u7EA7\\u522B","value":info.officialLevelName});arr2.push({"name":"\\u5173\\u952E\\u4EBA\\u6807\\u8BC6","value":info.keyTypeName});arr2.push({"name":"\\u90AE\\u7BB1","value":info.email});arr2.push({"name":"\\u90E8\\u95E8","value":info.department});arr2.push({"name":"\\u6027\\u522B","value":info.genderName});arr2.push({"name":"\\u804C\\u52A1","value":info.duty});arr2.push({"name":"\\u5174\\u8DA3\\u7231\\u597D","value":info.hobby});arr2.push({"name":"\\u5C65\\u5386","value":info.record});arr2.push({"name":"\\u5907\\u6CE8","value":info.remark})}arr1.push(arr2);arr2=[]}success(JSON.stringify(arr1))};',
                            },
                            line_number: 3,
                            callback1: [
                              {
                                type: 'apiRequest',
                                dataId: 167699554456300400,
                                shielding: true,
                                options: {
                                  compId: 'apiRequest',
                                  compName: 'system',
                                  id: '838324',
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
                                            type: ['context', '$data_3622049$'],
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
                                    dataId: 167699554456337400,
                                    shielding: true,
                                    options: {
                                      compId: 'downloadByFileId',
                                      compName: 'system',
                                      id: '884619',
                                      pageJsonId: '537892',
                                      data: '$reply_838324.resultData.fileId$',
                                    },
                                    line_number: 5,
                                  },
                                  {
                                    type: 'console',
                                    dataId: 167699554456305060,
                                    shielding: true,
                                    options: {
                                      compId: 'debug',
                                      compName: 'system',
                                      id: '930351',
                                      pageJsonId: '537892',
                                      value: [
                                        '文件导出成功回调值：',
                                        '$reply_838324$',
                                      ],
                                    },
                                    line_number: 6,
                                  },
                                ],
                                callback2: [],
                              },
                            ],
                            callback2: [
                              {
                                type: 'showMessage',
                                dataId: 167699554456370750,
                                shielding: true,
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '2058766',
                                  pageJsonId: '537892',
                                  type: 'info',
                                  value: '导出数据不能为空',
                                },
                                line_number: 7,
                              },
                            ],
                          },
                        ],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetTableSelected16.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatagetTableSelected16,
                  { e },
                  'getTableSelected',
                  {
                    id: 'getTableSelected',
                    name: 'getTableSelected',
                    type: 'getTableSelected',
                    platform: 'pc',
                  },
                );
                const eventDatacustomActionCode325: any = [
                  {
                    type: 'customActionCode',
                    dataId: 167706812839033570,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '412675',
                      pageJsonId: '537892',
                      code: 'function main(data,state,success,fail){var arr1=[];var arr2=[];var memberInfo=data.MemberInfo;for(var i=0;i<memberInfo.length;i++){var info=memberInfo[i];{arr2.push({"name":"\\u64CD\\u4F5C\\u7C7B\\u578B","value":info.actionTypeName});arr2.push({"name":"\\u51ED\\u8BC1\\u7C7B\\u578B","value":info.sceneTypeName});arr2.push({"name":"\\u624B\\u673A\\u53F7\\u7801","value":info.msisdn});arr2.push({"name":"\\u59D3\\u540D","value":info.bossName});arr2.push({"name":"\\u4F7F\\u7528\\u4EBA\\u59D3\\u540D","value":info.name});arr2.push({"name":"\\u6210\\u5458\\u53F7\\u7801\\u5F52\\u5C5E\\u5730","value":info.msisdnHomeCityName});arr2.push({"name":"\\u5BF9\\u8C61\\u7C7B\\u578B","value":info.objTypeName});arr2.push({"name":"*\\u96C6\\u56E2\\u7F16\\u7801","value":info.groupId});arr2.push({"name":"\\u96C6\\u56E2\\u540D\\u79F0","value":info.groupName});arr2.push({"name":"\\u96C6\\u56E2\\u5F52\\u5C5E\\u5730","value":info.homeCityName});arr2.push({"name":"\\u6210\\u5458\\u7C7B\\u578B","value":info.memberTypeName});arr2.push({"name":"\\u804C\\u52A1","value":info.duty});arr2.push({"name":"\\u884C\\u653F\\u7EA7\\u522B","value":info.officialLevelName});arr2.push({"name":"\\u7ECF\\u529E\\u6807\\u8BC6","value":info.keyTypeName});arr2.push({"name":"\\u90AE\\u7BB1","value":info.email});arr2.push({"name":"\\u6240\\u5C5E\\u90E8\\u95E8","value":info.department});arr2.push({"name":"\\u6027\\u522B","value":info.genderName})}arr1.push(arr2);arr2=[]}if(arr1.length>0){success(JSON.stringify(arr1))}else{fail()}};',
                    },
                    line_number: 9,
                    callback1: [
                      {
                        type: 'apiRequest',
                        dataId: 167706812839030620,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '74074534',
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
                                    type: ['context', '$data_412675$'],
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
                          _sourceName: '文件导出-hyj',
                        },
                        line_number: 10,
                        callback1: [
                          {
                            type: 'downloadByFileId',
                            dataId: 167706812839067600,
                            options: {
                              compId: 'downloadByFileId',
                              compName: 'system',
                              id: '561874',
                              pageJsonId: '537892',
                              data: '$reply_74074534.resultData.fileId$',
                            },
                            line_number: 11,
                          },
                          {
                            type: 'console',
                            dataId: 167706812839047140,
                            options: {
                              compId: 'debug',
                              compName: 'system',
                              id: '4453103',
                              pageJsonId: '537892',
                              value: [
                                '文件导出成功回调值：',
                                '$reply_74074534$',
                              ],
                            },
                            line_number: 12,
                          },
                        ],
                        callback2: [],
                      },
                    ],
                    callback2: [
                      {
                        type: 'showMessage',
                        dataId: 167706812839069250,
                        options: {
                          compId: 'showMessage',
                          compName: 'system',
                          id: '8061626',
                          pageJsonId: '537892',
                          type: 'info',
                          value: '导出数据不能为空！',
                        },
                        line_number: 13,
                      },
                    ],
                  },
                ];
                eventDatacustomActionCode325.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatacustomActionCode325,
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
              ref={(r: any) => (refs['Button_050256_034475_19183654'] = r)}
              {...injectData}
            />
          </View>
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
                title: '操作类型',
                key: 'actionTypeName',
                dataIndex: 'actionTypeName',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '操作类型名称',
                      attrId: '890518166403903488',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                className: '',
                id: '119141',
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
                title: '凭证类型',
                key: 'sceneTypeName',
                dataIndex: 'sceneTypeName',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '场景类型名称',
                      attrId: '890518166403903489',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                className: 'divider',
                id: '6365854',
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
                id: '258672',
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
                dataIndex: 'tempBossName',
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
                id: '041225',
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
                id: '8233255',
                title: '使用人姓名',
                dataIndex: 'tempName',
                key: '8233255',
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
                title: '号码归属地',
                key: 'msisdnomeCityName',
                dataIndex: 'msisdnHomeCityName',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '号码归属地名称',
                      attrId: '890518166403903490',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                id: '895146',
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
                title: '集团归属地',
                key: 'homeCityName',
                dataIndex: 'homeCityName',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '集团归属地名称',
                      attrId: '890518166403903492',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                id: '009087',
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
                id: '700636',
                title: '旧集团编码',
                dataIndex: 'oldGroupId',
                key: '700636',
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
                id: '4752478',
                title: '旧集团名称',
                dataIndex: 'oldGroupName',
                key: '4752478',
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
                id: '959158',
                title: '旧集团归属地',
                dataIndex: 'oldHomeCityName',
                key: '959158',
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
                id: '725679',
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
                key: 'officialLevelName',
                dataIndex: 'officialLevelName',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '行政级别名称',
                      attrId: '887280289602863106',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                id: '757976',
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
                title: '成员类型',
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
                id: '792588',
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
                title: '经办标识',
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
                id: '701775',
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
            dataSource={data?.MemberInfo}
            fieldName={'data.MemberInfo.length'}
            total={data?.MemberInfo?.length}
            hiddenAction={false}
            rowKey={'rowId'}
            rowActions={[
              {
                title: '编辑',
                iconPos: 'left',
                icon: { theme: 'outlined', type: 'edit' },
                type: 'edit',
                id: '00596118',
                checked: true,
              },
            ]}
            extend={[]}
            dataSourceFromDataSourceConfig={'data.MemberInfo'}
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
              const eventDatagetTableSelected17: any = [
                {
                  type: 'getTableSelected',
                  dataId: 167022235188639580,
                  options: {
                    compId: 'Table_8700198',
                    compLib: 'comm',
                    pageJsonId: '537892',
                    compName: 'Table',
                    id: '879249',
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'showCustomModal',
                      dataId: 167022237903412700,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '5503555',
                        pageJsonId: '537892',
                        modalname: '/member',
                        pageId: '888741696593555456',
                        paramsObj: {
                          memberInfo: '$row$',
                          catalogCode: '$state.catalogCode$',
                          lanId: '$state.lanId$',
                          isCoreFlag: '1',
                          staffCode: '$state.staffCode$',
                          selectOptionsData: '$data.selectOptionsData$',
                          zoneCode: '$state.zoneCode$',
                          orderNbr: '$state.fileInstNbr$',
                        },
                        paramsObjKeyValueMap: {
                          memberInfo: '$row$',
                          catalogCode: '$state.catalogCode$',
                          lanId: '$state.lanId$',
                          isCoreFlag: '1',
                          staffCode: '$state.staffCode$',
                          selectOptionsData: '$data.selectOptionsData$',
                          zoneCode: '$state.zoneCode$',
                          orderNbr: '$state.fileInstNbr$',
                        },
                        modalPath: '/member',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'customActionCode',
                          dataId: 167022237903431000,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '364411',
                            pageJsonId: '537892',
                            code: 'function main(data,state,success,fail){data.MemberInfo=data.MemberInfo.filter(function(v){return v.rowId!=okData_5503555.rowId});data.MemberInfo.push(okData_5503555);data.sceneSubmit.custMemberList=data.MemberInfo;success(data.MemberInfo)};',
                          },
                          line_number: 3,
                          callback1: [
                            {
                              type: 'setDataSource',
                              dataId: 167022237903405630,
                              options: {
                                compId: 'setDataSource',
                                compName: 'page',
                                id: '864873',
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
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'msisdn',
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
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'memberJoinDate',
                                    },
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
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'groupId',
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
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'groupName',
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
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'groupLevelName',
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
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'statusName',
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
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'memberType',
                                    },
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
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'officialLevel',
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
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'keyType',
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
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'duty',
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
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'cutOffTime',
                                    },
                                  },
                                  {
                                    attrId: '82682',
                                    code: 'noDisturbScope',
                                    name: '免扰范围',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'noDisturbScope',
                                    },
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
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'name',
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
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'tradeclassTop',
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
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'customerId',
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
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'supervise',
                                    },
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
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'keyTypeName',
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
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'memberTypeName',
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
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'officialLevelName',
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
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'tradeclassTopName',
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
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'rowId',
                                    },
                                  },
                                ],
                                operateType: 3,
                                onlySetPatch: true,
                                otherObjectArrayOptions: {},
                                newData: '$data_364411$',
                              },
                              line_number: 4,
                              callback1: [
                                {
                                  type: 'callSelfFunc',
                                  dataId: 167592339542741600,
                                  options: {
                                    compId: 'callSelfFunc',
                                    compName: 'system',
                                    id: '91522',
                                    pageJsonId: '537892',
                                    customFuncName: 'updateTitle',
                                  },
                                  line_number: 5,
                                  callback1: [],
                                  callback2: [],
                                },
                              ],
                              callback2: [],
                            },
                            {
                              type: 'callParentCustomFunc',
                              dataId: 167022237903422240,
                              options: {
                                compId: 'callParentCustomFunc',
                                compName: 'system',
                                id: '686147',
                                pageJsonId: '537892',
                                pathname: '/auditOrderPrepare',
                                pageId: '884045146848604160',
                                customFuncName: 'getFactor',
                                customFuncParams: '$data.sceneSubmit$',
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
                  ],
                  callback2: [],
                },
              ];
              eventDatagetTableSelected17.params =
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
                eventDatagetTableSelected17,
                { rowId, row, index },
                'getTableSelected',
                {
                  id: 'getTableSelected',
                  name: 'getTableSelected',
                  type: 'getTableSelected',
                  platform: 'pc',
                },
              );
            }}
            ref={(r: any) => (refs['Table_8700198'] = r)}
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
                title: '操作类型',
                key: 'actionTypeName',
                dataIndex: 'actionTypeName',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '操作类型名称',
                      attrId: '890518166403903488',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                className: '',
                id: '119141',
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
                title: '凭证类型',
                key: 'sceneTypeName',
                dataIndex: 'sceneTypeName',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '场景类型名称',
                      attrId: '890518166403903489',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                className: 'divider',
                id: '6365854',
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
                id: '258672',
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
                dataIndex: 'tempBossName',
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
                id: '041225',
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
                id: '162948',
                title: '使用人姓名',
                dataIndex: 'tempName',
                key: '162948',
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
                title: '号码归属地',
                key: 'msisdnomeCityName',
                dataIndex: 'msisdnHomeCityName',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '号码归属地名称',
                      attrId: '890518166403903490',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                id: '895146',
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
                title: '集团归属地',
                key: 'homeCityName',
                dataIndex: 'homeCityName',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '集团归属地名称',
                      attrId: '890518166403903492',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                id: '009087',
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
                id: '725679',
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
                key: 'officialLevelName',
                dataIndex: 'officialLevelName',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '行政级别名称',
                      attrId: '887280289602863106',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                id: '757976',
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
                title: '成员类型',
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
                id: '792588',
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
                title: '经办标识',
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
                id: '701775',
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
            selectType={'radio'}
            bordered={'segmentation'}
            size={'middle'}
            fixedAction={false}
            rowSelection={undefined}
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
            rowActions={[
              {
                title: '详情',
                iconPos: 'left',
                icon: { theme: 'outlined', type: 'file-search' },
                type: 'detail',
                id: '6203133',
                checked: true,
              },
            ]}
            extend={[]}
            dataSourceFromDataSourceConfig={'data.MemberInfo'}
            $$componentItem={{
              id: 'Table_8700198_4997642',
              uid: 'Table_8700198_4997642',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={false}
            readOnly={false}
            style={{ margin: '10px 0px 10px 0px' }}
            onRowEdit={(rowId: any, row: any, index: any) => {
              const eventDatagetTableSelected18: any = [
                {
                  type: 'getTableSelected',
                  dataId: 167022235188639580,
                  options: {
                    compId: 'Table_8700198_4997642',
                    compLib: 'comm',
                    pageJsonId: '537892',
                    compName: 'Table',
                    id: '879249',
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'showCustomModal',
                      dataId: 167022237903412700,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '5503555',
                        pageJsonId: '537892',
                        modalname: '/member',
                        pageId: '888741696593555456',
                        paramsObj: {
                          memberInfo: '$row$',
                          catalogCode: '$state.catalogCode$',
                          lanId: '$state.lanId$',
                          isCoreFlag: '0',
                        },
                        paramsObjKeyValueMap: {
                          memberInfo: '$row$',
                          catalogCode: '$state.catalogCode$',
                          lanId: '$state.lanId$',
                          isCoreFlag: '0',
                        },
                        modalPath: '/member',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'customActionCode',
                          dataId: 167022237903431000,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '364411',
                            pageJsonId: '537892',
                            code: 'function main(data,state,success,fail){data.MemberInfo=data.MemberInfo.filter(function(v){return v.rowId!=okData_5503555.rowId});data.MemberInfo.push(okData_5503555);data.sceneSubmit.custMemberList=data.MemberInfo;success(data.MemberInfo)};',
                          },
                          line_number: 3,
                          callback1: [
                            {
                              type: 'setDataSource',
                              dataId: 167022237903405630,
                              options: {
                                compId: 'setDataSource',
                                compName: 'page',
                                id: '864873',
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
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'msisdn',
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
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'memberJoinDate',
                                    },
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
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'groupId',
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
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'groupName',
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
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'groupLevelName',
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
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'statusName',
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
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'memberType',
                                    },
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
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'officialLevel',
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
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'keyType',
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
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'duty',
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
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'cutOffTime',
                                    },
                                  },
                                  {
                                    attrId: '82682',
                                    code: 'noDisturbScope',
                                    name: '免扰范围',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'noDisturbScope',
                                    },
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
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'name',
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
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'tradeclassTop',
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
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'customerId',
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
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'supervise',
                                    },
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
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'keyTypeName',
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
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'memberTypeName',
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
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'officialLevelName',
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
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'tradeclassTopName',
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
                                    value: {
                                      type: ['context', '$okData_611628$'],
                                      code: 'rowId',
                                    },
                                  },
                                ],
                                operateType: 3,
                                onlySetPatch: true,
                                otherObjectArrayOptions: {},
                                newData: '$data_364411$',
                              },
                              line_number: 4,
                              callback1: [],
                              callback2: [],
                            },
                            {
                              type: 'callParentCustomFunc',
                              dataId: 167022237903422240,
                              options: {
                                compId: 'callParentCustomFunc',
                                compName: 'system',
                                id: '686147',
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
                  ],
                  callback2: [],
                },
              ];
              eventDatagetTableSelected18.params =
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
                eventDatagetTableSelected18,
                { rowId, row, index },
                'getTableSelected',
                {
                  id: 'getTableSelected',
                  name: 'getTableSelected',
                  type: 'getTableSelected',
                  platform: 'pc',
                },
              );
            }}
            onRowDetail={(rowId: any, row: any, index: any) => {
              const eventDatashowCustomModal8: any = [
                {
                  type: 'showCustomModal',
                  dataId: 170141349115052220,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '2301184',
                    pageJsonId: '537892',
                    modalname: '/member',
                    pageId: '888741696593555456',
                    modalPath: '/member',
                    paramsObj: {
                      feeInfo: '$row$',
                      catalogCode: '$state.catalogCode$',
                      isDetails: 'true',
                      memberInfo: '$row$',
                      staffCode: '$state.staffCode$',
                      selectOptionsData: '$data.selectOptionsData$',
                      zoneCode: '$state.zoneCode$',
                      lanId: '$state.lanId$',
                      isCoreFlag: '1',
                    },
                    paramsObjKeyValueMap: {
                      feeInfo: '$row$',
                      catalogCode: '$state.catalogCode$',
                      isDetails: 'true',
                      memberInfo: '$row$',
                      staffCode: '$state.staffCode$',
                      selectOptionsData: '$data.selectOptionsData$',
                      zoneCode: '$state.zoneCode$',
                      lanId: '$state.lanId$',
                      isCoreFlag: '1',
                    },
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'customActionCode',
                      dataId: 170141349115054370,
                      shielding: true,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '082747',
                        pageJsonId: '537892',
                        code: 'function main(data,state,success,fail){data.feeInfo=data.feeInfo.filter(function(v){return v.rowId!=okData_2301184.rowId});data.feeInfo.push(okData_2301184);var instList=[];for(var key in okData_2301184){if(key!="rowId"&&key!="marketList"){instList.push({"attrCode":key,"attrName":"","attrValue":okData_2301184[key]})}if(key=="marketList"){instList.push({"attrCode":key,"attrName":"","attrValue":JSON.stringify(okData_2301184[key])})}}var instObj={"instCode":okData_2301184.rowId,"instAttrList":instList};data.sceneSubmit.instList=data.sceneSubmit.instList.filter(function(v){return v.instCode!=okData_2301184.rowId});data.sceneSubmit.instList.push(instObj);success()};',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'callParentCustomFunc',
                          dataId: 170141349115019700,
                          shielding: true,
                          options: {
                            compId: 'callParentCustomFunc',
                            compName: 'system',
                            id: '114099',
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
              eventDatashowCustomModal8.params =
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
                eventDatashowCustomModal8,
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
            ref={(r: any) => (refs['Table_8700198_4997642'] = r)}
            {...injectData}
          />
          <Form
            name={'要素表单'}
            colSpan={8}
            labelCol={8}
            wrapperCol={16}
            colon={true}
            layout={'horizontal'}
            labelAlign={'right'}
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_1648074'}
            genRuleType={'key'}
            formType={'normal'}
            relationDataSource={data?.factorForm}
            busiObjectId={''}
            $$componentItem={{
              id: 'Form_1648074',
              uid: 'Form_1648074',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            onValuesChange={(changedFieldName: any, changedValue: any) => {
              const eventDatasetDataSource35: any = [
                {
                  type: 'setDataSource',
                  dataId: 167050435140500100,
                  options: {
                    compId: 'setDataSource',
                    compName: 'page',
                    id: '38725',
                    pageJsonId: '537892',
                    dataSourceId: 167049030475764160,
                    dataSourceName: 'factorForm',
                    dataSourceRelType: 'custom',
                    dataSourceReloadFilter: [],
                    dataSourceSetValue: [
                      {
                        attrId: '021424',
                        code: 'reason',
                        name: '申请原因',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_1648074', 'getFieldsValue'],
                          code: 'reason',
                        },
                      },
                    ],
                    operateType: 1,
                    onlySetPatch: true,
                    otherObjectArrayOptions: {},
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'customActionCode',
                      dataId: 167050435140540320,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '50218',
                        pageJsonId: '537892',
                        code: 'function main(data,state,success,fail){var attrList=[];var obj=data.factorForm;for(var key in obj){attrList.push({"attrCode":key,"attrName":"","attrValue":obj[key]})}data.sceneSubmit.attrList=attrList;success(attrList)};',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'callParentCustomFunc',
                          dataId: 167050435140514460,
                          options: {
                            compId: 'callParentCustomFunc',
                            compName: 'system',
                            id: '237953',
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
              eventDatasetDataSource35.params =
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
                eventDatasetDataSource35,
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
            ref={(r: any) => (refs['Form_1648074'] = r)}
            {...injectData}
          >
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
              formItemIndex={0}
              fieldName={'reason'}
              allowClear={true}
              tipIcon={{
                theme: 'outlined',
                type: 'question-circle',
                isIconFont: false,
              }}
              tipContent={
                '目前已合作XX业务等，为更好提供集团服务，近期通过外呼/通讯录收集/经办人处了解/上门拜访等方式收集夯实集团成员信息，现有X（职务）领导，需添加为该集团成员'
              }
              value={data?.factorForm?.reason}
              $$componentItem={{
                id: 'TextArea_794494',
                uid: 'TextArea_794494',
                type: 'TextArea',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['TextArea_794494'] = r)}
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
                id: 'Form_395851_1727917_9692158_9612234_1000722_434628',
                uid: 'Form_395851_1727917_9692158_9612234_1000722_434628',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ padding: '0px 0px 0px 0px', margin: '10px 0px 0px 0px' }}
              ref={(r: any) =>
                (refs['Form_395851_1727917_9692158_9612234_1000722_434628'] = r)
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
                  id: 'Input_690228_5400337_280051_232429_7501497_288005',
                  uid: 'Input_690228_5400337_280051_232429_7501497_288005',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  (refs['Input_690228_5400337_280051_232429_7501497_288005'] =
                    r)
                }
                {...injectData}
              />
              <View
                name={'布局容器'}
                labelCol={8}
                wrapperCol={16}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_22346374_875512_926873_4359147_729981_339083',
                  uid: 'View_22346374_875512_926873_4359147_729981_339083',
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
                  (refs['View_22346374_875512_926873_4359147_729981_339083'] =
                    r)
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
                    id: 'StdUpload_6230546_867413_538179_36057857_3505279_0434',
                    uid: 'StdUpload_6230546_867413_538179_36057857_3505279_0434',
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
                    const eventDatagetSelectedData44: any = [
                      {
                        type: 'getSelectedData',
                        dataId: 166393212631420350,
                        options: {
                          compId:
                            'Input_690228_5400337_280051_232429_7501497_288005',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Select',
                          id: '120182',
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'setDataSource',
                            dataId: 166393213069243260,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '399947',
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
                                    code: '$selectedData_120182[0].value$',
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
                                    code: '$selectedData_120182[0].label$',
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
                                dataId: 166393213069261060,
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '941567',
                                  pageJsonId: '537892',
                                  code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=data.fileInfoList;success(data.sceneSubmit)};',
                                },
                                line_number: 3,
                                callback1: [
                                  {
                                    type: 'console',
                                    dataId: 166393213069268160,
                                    options: {
                                      compId: 'debug',
                                      compName: 'system',
                                      id: '8088795',
                                      pageJsonId: '537892',
                                      value: ['$data_941567$'],
                                    },
                                    line_number: 4,
                                  },
                                  {
                                    type: 'callParentCustomFunc',
                                    dataId: 166393213069295260,
                                    options: {
                                      compId: 'callParentCustomFunc',
                                      compName: 'system',
                                      id: '066217',
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
                            dataId: 166393213439679520,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '701935',
                              pageJsonId: '537892',
                              type: 'error',
                              value: '请选择附件类型',
                            },
                            line_number: 6,
                          },
                        ],
                      },
                    ];
                    eventDatagetSelectedData44.params =
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
                      eventDatagetSelectedData44,
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
                    const eventDatacustomActionCode327: any = [
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
                    eventDatacustomActionCode327.params =
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
                      eventDatacustomActionCode327,
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
                      'StdUpload_6230546_867413_538179_36057857_3505279_0434'
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
              const eventDatacustomActionCode328: any = [
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
              eventDatacustomActionCode328.params =
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
                eventDatacustomActionCode328,
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
              const eventDatadownloadByFileId7: any = [
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
              eventDatadownloadByFileId7.params =
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
                eventDatadownloadByFileId7,
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
        <Card
          name={'受理结果'}
          cardIconType={'middle'}
          extendNum={3}
          title={'受理结果'}
          bordered={true}
          size={'default'}
          hasHeader={true}
          hasIcon={true}
          titleColor={'#1c242e'}
          headerColor={'#ffffff'}
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
            id: 'Card_6933535',
            uid: 'Card_6933535',
            type: 'Card',
            ...componentItem,
          }}
          disabled={false}
          visible={false}
          readOnly={false}
          style={{
            padding: '20px 20px 20px 20px',
            overflowY: 'visible',
            margin: '0 0 16px 0',
          }}
          ref={(r: any) => (refs['Card_6933535'] = r)}
          {...injectData}
        >
          <VerticalView
            name={'上下布局'}
            $$componentItem={{
              id: 'VerticalView_215699',
              uid: 'VerticalView_215699',
              type: 'VerticalView',
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
              height: '100%',
              overflowY: 'auto',
            }}
            ref={(r: any) => (refs['VerticalView_215699'] = r)}
            {...injectData}
          >
            <View
              name={'布局容器'}
              $$componentItem={{
                id: 'View_687037',
                uid: 'View_687037',
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
                height: '30%',
                width: '100%',
              }}
              ref={(r: any) => (refs['View_687037'] = r)}
              {...injectData}
            >
              <HorizontalView
                name={'左右布局'}
                $$componentItem={{
                  id: 'HorizontalView_1396834',
                  uid: 'HorizontalView_1396834',
                  type: 'HorizontalView',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'row',
                  padding: '0px 0px 0px 0px',
                  width: '100%',
                  height: '100%',
                  overflowY: 'auto',
                }}
                ref={(r: any) => (refs['HorizontalView_1396834'] = r)}
                {...injectData}
              >
                <View
                  name={'布局容器'}
                  $$componentItem={{
                    id: 'View_698028',
                    uid: 'View_698028',
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
                    width: '85%',
                    height: '100%',
                    overflowY: 'auto',
                  }}
                  ref={(r: any) => (refs['View_698028'] = r)}
                  {...injectData}
                >
                  <VerticalView
                    name={'上下布局'}
                    $$componentItem={{
                      id: 'VerticalView_470981',
                      uid: 'VerticalView_470981',
                      type: 'VerticalView',
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
                      height: '100%',
                      overflowY: 'auto',
                    }}
                    ref={(r: any) => (refs['VerticalView_470981'] = r)}
                    {...injectData}
                  >
                    <View
                      name={'布局容器'}
                      $$componentItem={{
                        id: 'View_651127',
                        uid: 'View_651127',
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
                        height: '30%',
                        width: '100%',
                      }}
                      ref={(r: any) => (refs['View_651127'] = r)}
                      {...injectData}
                    >
                      <Input
                        name={'受理结果'}
                        size={'default'}
                        selfSpan={6}
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
                        fieldName={'acceptResult'}
                        prefixWord={'受理结果'}
                        value={data?.factorForm?.acceptResultDesc}
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
                          id: 'Input_887963',
                          uid: 'Input_887963',
                          type: 'Input',
                          ...componentItem,
                        }}
                        disabled={true}
                        visible={true}
                        readOnly={false}
                        ref={(r: any) => (refs['Input_887963'] = r)}
                        {...injectData}
                      />
                    </View>
                    <View
                      name={'布局容器'}
                      $$componentItem={{
                        id: 'View_010555',
                        uid: 'View_010555',
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
                        height: '100%',
                        width: '100%',
                        margin: '20px 0px 0px 0px',
                      }}
                      ref={(r: any) => (refs['View_010555'] = r)}
                      {...injectData}
                    >
                      <Text
                        name={'注意:'}
                        content={
                          '注：成员受理为批量受理,若受理结果为失败则所有成员号码都视为受理失败'
                        }
                        textType={'p'}
                        version={'1.0'}
                        showHtml={false}
                        $$componentItem={{
                          id: 'Text_359785',
                          uid: 'Text_359785',
                          type: 'Text',
                          ...componentItem,
                        }}
                        disabled={false}
                        visible={true}
                        readOnly={false}
                        style={{
                          textAlign: 'left',
                          fontSize: '14px',
                          lineHeight: '24px',
                          color: 'rgba(208, 13, 2, 1)',
                          backgroundColor: 'rgba(255, 255, 255,0)',
                        }}
                        ref={(r: any) => (refs['Text_359785'] = r)}
                        {...injectData}
                      />
                    </View>
                  </VerticalView>
                </View>
                <View
                  name={'布局容器'}
                  $$componentItem={{
                    id: 'View_965239',
                    uid: 'View_965239',
                    type: 'View',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '0px 0px 0px 24px',
                    width: '15%',
                    height: '100%',
                    overflowY: 'auto',
                    textAlign: 'left',
                  }}
                  ref={(r: any) => (refs['View_965239'] = r)}
                  {...injectData}
                >
                  <Button
                    name={'重派'}
                    shape={'round'}
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
                      id: 'Button_3562167',
                      uid: 'Button_3562167',
                      type: 'Button',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={false}
                    readOnly={false}
                    style={{ width: 'fit-content' }}
                    onClick={(e: any) => {
                      const eventDataapiRequest651: any = [
                        {
                          type: 'apiRequest',
                          dataId: 170480564668511420,
                          options: {
                            compId: 'apiRequest',
                            compName: 'system',
                            id: '685053',
                            pageJsonId: '537892',
                            sync: false,
                            method: 'post',
                            url: '/app/rhin/gateway/callRhinEngine',
                            _capabilityCode: 'replyImprotMenbersFeedback',
                            _apiCode: 'replyImprotMenbersFeedback',
                            _source: 'rhin',
                            _sourceName: '重要成员增减集团成员受理重派',
                            _serviceId: '1061994494847705088',
                            _serviceTitle:
                              '重要成员增减集团成员受理重派: replyImprotMenbersFeedback',
                            valueType: 'object',
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
                                    dataKey: '685053_root.header',
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
                                    dataKey: '685053_root.path',
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
                                    dataKey: '685053_root.query',
                                  },
                                  {
                                    code: 'body',
                                    name: '请求体',
                                    attrType: 'object',
                                    children: [
                                      {
                                        code: 'orderNbr',
                                        name: '新增节点',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        defaultValue: '',
                                        _id: 'root.body.orderNbr',
                                        compType: 'Input',
                                        parents: ['root', 'body'],
                                        parentType: 'object',
                                        parentKey: '0-3',
                                        key: '0-3-0',
                                        id: 'root.body.orderNbr',
                                        dataKey: '685053_root.body.orderNbr',
                                        value: {
                                          type: ['customize'],
                                          code: '$state.fileInstNbr$',
                                        },
                                      },
                                      {
                                        code: 'childCatalogCode',
                                        name: '新增节点',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        defaultValue: '',
                                        _id: 'root.body.childCatalogCode',
                                        compType: 'Input',
                                        parents: ['root', 'body'],
                                        parentType: 'object',
                                        parentKey: '0-3',
                                        key: '0-3-1',
                                        id: 'root.body.childCatalogCode',
                                        dataKey:
                                          '685053_root.body.childCatalogCode',
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
                                    dataKey: '685053_root.body',
                                  },
                                ],
                                _id: 'root',
                                compType: 'Input',
                                isRoot: true,
                                parents: [],
                                key: '0',
                                id: 'root',
                                dataKey: '685053_root',
                              },
                            ],
                          },
                          line_number: 1,
                          callback1: [
                            {
                              type: 'customActionCode',
                              dataId: 170480580970934850,
                              options: {
                                compId: 'customActionCode',
                                compName: 'page',
                                id: '1157743',
                                pageJsonId: '537892',
                                code: 'function main(data,state,success,fail){var response=reply_685053;if((response===null||response===void 0?void 0:response.resultCode)=="0"&&response!==null&&response!==void 0&&response.resultData){for(var i=0;i<(response===null||response===void 0?void 0:response.resultData.length);++i){var dcBusiObjItemAttr=response===null||response===void 0?void 0:response.resultData[i];if(dcBusiObjItemAttr.attrCode=="acceptResult"){data.factorForm.acceptResultDesc=dcBusiObjItemAttr.attrValueDesc;data.factorForm.acceptResult=dcBusiObjItemAttr.attrValue}}success()}else{fail(response===null||response===void 0?void 0:response.resultMsg)}};',
                              },
                              line_number: 2,
                              callback1: [
                                {
                                  type: 'setDataSource',
                                  dataId: 170480594272877950,
                                  options: {
                                    compId: 'setDataSource',
                                    compName: 'page',
                                    id: '409054',
                                    pageJsonId: '537892',
                                    dataSourceId: 167049124945324580,
                                    dataSourceName: 'factorForm',
                                    dataSourceRelType: 'custom',
                                    dataSourceSetValue: [
                                      {
                                        attrId: '021424',
                                        code: 'reason',
                                        name: '申请原因',
                                        type: 'string',
                                        initialData: { type: 'static' },
                                        showInput: true,
                                        _codePath: ['reason'],
                                        _idpath: ['021424'],
                                      },
                                      {
                                        attrId: '857088',
                                        code: 'acceptResultDesc',
                                        name: '受理结果',
                                        type: 'string',
                                        initialData: {
                                          type: 'static',
                                          value: '受理失败',
                                        },
                                        showInput: true,
                                        _codePath: ['acceptResultDesc'],
                                        _idpath: ['857088'],
                                      },
                                      {
                                        attrId: '693922',
                                        code: 'acceptResult',
                                        name: '属性',
                                        type: 'string',
                                        initialData: {
                                          type: 'static',
                                          value: '0',
                                        },
                                        showInput: true,
                                        _codePath: ['acceptResult'],
                                        _idpath: ['693922'],
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
                                  type: 'callSelfFunc',
                                  dataId: 170480599060831870,
                                  options: {
                                    compId: 'callSelfFunc',
                                    compName: 'system',
                                    id: '4500093',
                                    pageJsonId: '537892',
                                    customFuncName: 'judageIsShowReplyBtn',
                                  },
                                  line_number: 4,
                                  callback1: [],
                                  callback2: [],
                                },
                                {
                                  type: 'showMessage',
                                  dataId: 170480624866182400,
                                  options: {
                                    compId: 'showMessage',
                                    compName: 'system',
                                    id: '4976297',
                                    pageJsonId: '537892',
                                    type: 'success',
                                    value: '重派成功',
                                  },
                                  line_number: 5,
                                },
                              ],
                              callback2: [
                                {
                                  type: 'showMessage',
                                  dataId: 170480625534019230,
                                  options: {
                                    compId: 'showMessage',
                                    compName: 'system',
                                    id: '551582',
                                    pageJsonId: '537892',
                                    type: 'info',
                                    value: '$fail_1157743$',
                                  },
                                  line_number: 6,
                                },
                              ],
                            },
                          ],
                          callback2: [],
                        },
                      ];
                      eventDataapiRequest651.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(
                        eventDataapiRequest651,
                        { e },
                        'apiRequest',
                        {
                          id: 'apiRequest',
                          name: 'apiRequest',
                          type: 'apiRequest',
                          platform: 'pc',
                        },
                      );
                    }}
                    ref={(r: any) => (refs['Button_3562167'] = r)}
                    {...injectData}
                  />
                </View>
              </HorizontalView>
            </View>
            <View
              name={'布局容器'}
              $$componentItem={{
                id: 'View_082589',
                uid: 'View_082589',
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
                height: '100%',
                width: '100%',
                margin: '24px 0px 0px 0px',
              }}
              ref={(r: any) => (refs['View_082589'] = r)}
              {...injectData}
            >
              <Table
                name={'表格'}
                isFlexColumn={false}
                extendNum={3}
                adjustModel={'auto'}
                pageSize={10}
                current={1}
                tableTitle={'表格名称'}
                headBtnNum={3}
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
                    className: '',
                    id: '12625',
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
                    className: 'divider',
                    id: '775345',
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
                    title: '操作类型',
                    key: 'actionTypeName',
                    dataIndex: 'actionTypeName',
                    editoption: {
                      edittype: 'Input',
                      selectoption: {
                        attr: {
                          attrName: '操作类型名称',
                          attrId: '890518166403903488',
                          attrNbr: null,
                        },
                      },
                    },
                    className: 'divider',
                    id: '3219919',
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
                    className: 'divider',
                    id: '579233',
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
                customNum={3}
                dataSource={data?.MemberInfo}
                rowKey={'rowId'}
                dataSourceFromDataSourceConfig={'data.MemberInfo'}
                $$componentItem={{
                  id: 'Table_886415',
                  uid: 'Table_886415',
                  type: 'Table',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                ref={(r: any) => (refs['Table_886415'] = r)}
                {...injectData}
              />
            </View>
          </VerticalView>
        </Card>
        <BusiComp0521965
          busiCompId={'922396081753948160'}
          name={'附件'}
          busiCompStates={{
            catalogCode: state?.catalogCode,
            scene: state?.scene,
            fileList: state?.itemList?.fileInfo,
          }}
          style={{ margin: '0 0 12px 0' }}
          ref={(r: any) => (refs['BOFramer_8459068'] = r)}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(ClsJc_0004_0003$$Page, {
  pageId: '890557641205051392',
  hasLogin: false,
  dataSource,
  defaultState: {},
});
