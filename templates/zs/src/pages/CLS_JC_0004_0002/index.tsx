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
  Button,
  StdUpload,
  Table,
  TextArea,
  Row,
  Select,
  Card,
  VerticalView,
  Text,
} from '@/components/factory';

import BusiComp0521965 from '@/components/BusiComp0521965';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '887637531355385856';
const ClsJc_0004_0002$$Page: React.FC<PageProps> = ({
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
  const fileUpload = (options_263015: any) => {
    const eventDatacustomActionCode23: any = [
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
    eventDatacustomActionCode23.params =
      [
        {
          title: '事件入参',
          name: 'options_263015',
          value: '$options_263015$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode23,
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
    const eventDatacustomActionCode24: any = [
      {
        type: 'customActionCode',
        dataId: 167592245922136500,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '83029816',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){console.log("data.MemberInfo",data.MemberInfo);var _value="";if(data.MemberInfo.length>0){_value=data.MemberInfo[0].groupName;if(data.MemberInfo.length>1){_value=_value+"\\u7B49"}}success({catalogCode:"CLS_JC_0004_0002",value:_value})};',
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
    eventDatacustomActionCode24.params =
      [
        {
          title: '事件入参',
          name: 'options_9020026',
          value: '$options_9020026$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode24,
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
  const getSelectOptionsData = (options_125971: any) => {
    const eventDataifelse26: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '773801',
            options: { context: '$options_125971$', operate: 'empty' },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 167754927420929860,
        elseIfs: [],
        line_number: 1,
        callback1: [
          {
            type: 'apiRequest',
            dataId: 167754927420945660,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '751091',
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
                dataId: 167755010610200800,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '995408',
                  pageJsonId: '537892',
                  dataSourceId: 167755002761934100,
                  dataSourceName: 'selectOptionsData',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '166775',
                      code: 'actionType',
                      name: '操作类型',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                      value: {
                        type: ['context', '$reply_751091?.resultData$'],
                        code: '',
                      },
                    },
                    {
                      attrId: '921408',
                      code: 'sceneType',
                      name: '场景类型',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '757861',
                      code: 'msisdnomeCity',
                      name: '集团归属地',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '292509',
                      code: 'objType',
                      name: '对象类型',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '397322',
                      code: 'officialLevel',
                      name: '行政级别',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '911864',
                      code: 'memberType',
                      name: '成员类型',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '3451016',
                      code: 'keyType',
                      name: '关键人标识',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '92936',
                      code: 'gender',
                      name: '性别',
                      type: 'objectArray',
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
            dataId: 167754927420904420,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '3456332',
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
                dataId: 167755148770146660,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '766656',
                  pageJsonId: '537892',
                  dataSourceId: 167755002761934100,
                  dataSourceName: 'selectOptionsData',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '166775',
                      code: 'actionType',
                      name: '操作类型',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                      value: { type: [], code: '' },
                    },
                    {
                      attrId: '921408',
                      code: 'sceneType',
                      name: '场景类型',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                      value: {
                        type: ['context', '$reply_3456332?.resultData$'],
                        code: '',
                      },
                    },
                    {
                      attrId: '757861',
                      code: 'msisdnomeCity',
                      name: '集团归属地',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '292509',
                      code: 'objType',
                      name: '对象类型',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '397322',
                      code: 'officialLevel',
                      name: '行政级别',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '911864',
                      code: 'memberType',
                      name: '成员类型',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '3451016',
                      code: 'keyType',
                      name: '关键人标识',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '92936',
                      code: 'gender',
                      name: '性别',
                      type: 'objectArray',
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
            dataId: 167754927420926850,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '944571',
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
                  dataKey: '944571_header',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  _id: 'path',
                  compType: 'Input',
                  parents: [],
                  id: 'path',
                  dataKey: '944571_path',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'query',
                  compType: 'Input',
                  parents: [],
                  id: 'query',
                  dataKey: '944571_query',
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
                      dataKey: '944571_body.catalogCode',
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
                      dataKey: '944571_body.attrCode',
                      value: { type: ['customize'], code: 'msisdnHomeCity' },
                    },
                  ],
                  _id: 'body',
                  compType: 'Input',
                  parents: [],
                  id: 'body',
                  dataKey: '944571_body',
                },
              ],
            },
            line_number: 6,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 167755148491602050,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '814962',
                  pageJsonId: '537892',
                  dataSourceId: 167755002761934100,
                  dataSourceName: 'selectOptionsData',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '166775',
                      code: 'actionType',
                      name: '操作类型',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                      value: { type: [], code: '' },
                    },
                    {
                      attrId: '921408',
                      code: 'sceneType',
                      name: '场景类型',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '757861',
                      code: 'msisdnomeCity',
                      name: '集团归属地',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                      value: {
                        type: ['context', '$reply_944571?.resultData$'],
                        code: '',
                      },
                    },
                    {
                      attrId: '292509',
                      code: 'objType',
                      name: '对象类型',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '397322',
                      code: 'officialLevel',
                      name: '行政级别',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '911864',
                      code: 'memberType',
                      name: '成员类型',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '3451016',
                      code: 'keyType',
                      name: '关键人标识',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '92936',
                      code: 'gender',
                      name: '性别',
                      type: 'objectArray',
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
            dataId: 167754927420957920,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '342221',
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
                dataId: 167755148274035140,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '385827',
                  pageJsonId: '537892',
                  dataSourceId: 167755002761934100,
                  dataSourceName: 'selectOptionsData',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '166775',
                      code: 'actionType',
                      name: '操作类型',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                      value: { type: [], code: '' },
                    },
                    {
                      attrId: '921408',
                      code: 'sceneType',
                      name: '场景类型',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '757861',
                      code: 'msisdnomeCity',
                      name: '集团归属地',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '292509',
                      code: 'objType',
                      name: '对象类型',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                      value: {
                        type: ['context', '$reply_342221?.resultData$'],
                        code: '',
                      },
                    },
                    {
                      attrId: '397322',
                      code: 'officialLevel',
                      name: '行政级别',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '911864',
                      code: 'memberType',
                      name: '成员类型',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '3451016',
                      code: 'keyType',
                      name: '关键人标识',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '92936',
                      code: 'gender',
                      name: '性别',
                      type: 'objectArray',
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
            dataId: 167754927420943870,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '4997655',
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
                dataId: 167755147943797470,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '407071',
                  pageJsonId: '537892',
                  dataSourceId: 167755002761934100,
                  dataSourceName: 'selectOptionsData',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '166775',
                      code: 'actionType',
                      name: '操作类型',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                      value: { type: [], code: '' },
                    },
                    {
                      attrId: '921408',
                      code: 'sceneType',
                      name: '场景类型',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '757861',
                      code: 'msisdnomeCity',
                      name: '集团归属地',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '292509',
                      code: 'objType',
                      name: '对象类型',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '397322',
                      code: 'officialLevel',
                      name: '行政级别',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                      value: {
                        type: ['context', '$reply_4997655?.resultData$'],
                        code: '',
                      },
                    },
                    {
                      attrId: '911864',
                      code: 'memberType',
                      name: '成员类型',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '3451016',
                      code: 'keyType',
                      name: '关键人标识',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '92936',
                      code: 'gender',
                      name: '性别',
                      type: 'objectArray',
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
            dataId: 167754927420985380,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '231282',
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
                dataId: 167755147724479070,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '262421',
                  pageJsonId: '537892',
                  dataSourceId: 167755002761934100,
                  dataSourceName: 'selectOptionsData',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '166775',
                      code: 'actionType',
                      name: '操作类型',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                      value: { type: [], code: '' },
                    },
                    {
                      attrId: '921408',
                      code: 'sceneType',
                      name: '场景类型',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '757861',
                      code: 'msisdnomeCity',
                      name: '集团归属地',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '292509',
                      code: 'objType',
                      name: '对象类型',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '397322',
                      code: 'officialLevel',
                      name: '行政级别',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '911864',
                      code: 'memberType',
                      name: '成员类型',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                      value: {
                        type: ['context', '$reply_231282?.resultData$'],
                        code: '',
                      },
                    },
                    {
                      attrId: '3451016',
                      code: 'keyType',
                      name: '关键人标识',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '92936',
                      code: 'gender',
                      name: '性别',
                      type: 'objectArray',
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
            dataId: 167754927420907870,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '440564',
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
                dataId: 167755147502177150,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '8996513',
                  pageJsonId: '537892',
                  dataSourceId: 167755002761934100,
                  dataSourceName: 'selectOptionsData',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '166775',
                      code: 'actionType',
                      name: '操作类型',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                      value: { type: [], code: '' },
                    },
                    {
                      attrId: '921408',
                      code: 'sceneType',
                      name: '场景类型',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '757861',
                      code: 'msisdnomeCity',
                      name: '集团归属地',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '292509',
                      code: 'objType',
                      name: '对象类型',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '397322',
                      code: 'officialLevel',
                      name: '行政级别',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '911864',
                      code: 'memberType',
                      name: '成员类型',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '3451016',
                      code: 'keyType',
                      name: '关键人标识',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                      value: {
                        type: ['context', '$reply_440564?.resultData$'],
                        code: '',
                      },
                    },
                    {
                      attrId: '92936',
                      code: 'gender',
                      name: '性别',
                      type: 'objectArray',
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
            dataId: 167754927420941950,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '475241',
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
                dataId: 167755145771770140,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '4115752',
                  pageJsonId: '537892',
                  dataSourceId: 167755002761934100,
                  dataSourceName: 'selectOptionsData',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '166775',
                      code: 'actionType',
                      name: '操作类型',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                      value: { type: [], code: '' },
                    },
                    {
                      attrId: '921408',
                      code: 'sceneType',
                      name: '场景类型',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '757861',
                      code: 'msisdnomeCity',
                      name: '集团归属地',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '292509',
                      code: 'objType',
                      name: '对象类型',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '397322',
                      code: 'officialLevel',
                      name: '行政级别',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '911864',
                      code: 'memberType',
                      name: '成员类型',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '3451016',
                      code: 'keyType',
                      name: '关键人标识',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '92936',
                      code: 'gender',
                      name: '性别',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                      value: {
                        type: ['context', '$reply_475241?.resultData$'],
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
    eventDataifelse26.params =
      [
        {
          title: '事件入参',
          name: 'options_125971',
          value: '$options_125971$',
        },
      ] || [];
    CMDGenerator(eventDataifelse26, { options_125971 }, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
  };
  const judageIsShowReplyBtn = (options_784917: any) => {
    const eventDataifelse27: any = [
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
        dataId: 170487221082815580,
        elseIfs: [
          {
            dataName: 'elseIf',
            dataId: 170487221082882980,
            children: [
              {
                dataName: 'action',
                dataId: 170487221082853400,
                children: [],
                todoOptions: ['visible', 'selectComp'],
                options: {
                  compId: ['Button_3562167', 'Button_18036'],
                  compName: 'page',
                  id: '784868',
                  pageJsonId: '537892',
                  visible: '',
                  compid: ['Button_3562167', 'Button_18036'],
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
                dataId: 170487221082853400,
                options: {
                  compId: ['Button_3562167', 'Button_18036'],
                  compName: 'page',
                  id: '784868',
                  pageJsonId: '537892',
                  visible: '',
                  compid: ['Button_3562167', 'Button_18036'],
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
            dataId: 170487221082850140,
            options: {
              compId: ['Button_3562167', 'Button_18036'],
              compName: 'page',
              id: '665526',
              pageJsonId: '537892',
              visible: 'true',
              compid: ['Button_3562167', 'Button_18036'],
            },
            line_number: 2,
          },
        ],
      },
    ];
    eventDataifelse27.params =
      [
        {
          title: '事件入参',
          name: 'options_784917',
          value: '$options_784917$',
        },
      ] || [];
    CMDGenerator(eventDataifelse27, { options_784917 }, 'ifelse', {
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
    const eventDatacallSelfFunc13: any = [
      {
        type: 'callSelfFunc',
        dataId: 167755019739897120,
        options: {
          compId: 'callSelfFunc',
          compName: 'system',
          id: '1103476',
          pageJsonId: '537892',
          customFuncName: 'getSelectOptionsData',
        },
        line_number: 1,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacallSelfFunc13.params = [] || [];
    CMDGenerator(eventDatacallSelfFunc13, {}, 'callSelfFunc', {
      id: 'callSelfFunc',
      name: 'callSelfFunc',
      type: 'callSelfFunc',
      platform: 'undefined',
    });
    const eventDataapiRequest98: any = [
      {
        type: 'apiRequest',
        dataId: 166977359252100830,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '297058',
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
        line_number: 2,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166977359465177800,
            options: {
              compId: 'Input_690228_5400337_280051_232429_7501497',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '087468',
              labelKey: 'attrValueName',
              data: '$reply_297058?.resultData$',
              valueKey: 'attrValue',
            },
            line_number: 3,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest98.params = [] || [];
    CMDGenerator(eventDataapiRequest98, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest99: any = [
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
    eventDataapiRequest99.params = [] || [];
    CMDGenerator(eventDataapiRequest99, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse68: any = [
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
                      sourceAttrId: '886805849493164033',
                      _codePath: ['memberJoinDate'],
                      _idpath: ['134739'],
                    },
                    {
                      attrId: '716457',
                      code: 'memberType',
                      name: '成员类型',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      sourceAttrId: '886805849493164039',
                      _codePath: ['memberType'],
                      _idpath: ['716457'],
                    },
                    {
                      attrId: '8583146',
                      code: 'cutOffTime',
                      name: '免扰截至时间',
                      type: 'datetime',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      sourceAttrId: '886805849493164043',
                      _codePath: ['cutOffTime'],
                      _idpath: ['8583146'],
                    },
                    {
                      attrId: '82682',
                      code: 'noDisturbScope',
                      name: '免扰范围',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                      sourceAttrId: '886805849493164044',
                      _codePath: ['noDisturbScope'],
                      _idpath: ['82682'],
                    },
                    {
                      attrId: '360409',
                      code: 'supervise',
                      name: '看管人员',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      sourceAttrId: '886864173638352897',
                      _codePath: ['supervise'],
                      _idpath: ['360409'],
                    },
                    {
                      attrId: '6475557',
                      code: 'memberTypeName',
                      name: '成员类型名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      sourceAttrId: '887280289602863105',
                      _codePath: ['memberTypeName'],
                      _idpath: ['6475557'],
                    },
                    {
                      attrId: '4823123',
                      code: 'msisdn',
                      name: '手机号码',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      sourceAttrId: '886805849493164032',
                      _codePath: ['msisdn'],
                      _idpath: ['4823123'],
                    },
                    {
                      attrId: '58013',
                      code: 'groupId',
                      name: '集团编码',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      sourceAttrId: '886805849493164034',
                      _codePath: ['groupId'],
                      _idpath: ['58013'],
                    },
                    {
                      attrId: '2030545',
                      code: 'groupName',
                      name: '集团名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      sourceAttrId: '886805849493164035',
                      _codePath: ['groupName'],
                      _idpath: ['2030545'],
                    },
                    {
                      attrId: '005597',
                      code: 'groupLevelName',
                      name: '价值等级',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      sourceAttrId: '886805849493164037',
                      _codePath: ['groupLevelName'],
                      _idpath: ['005597'],
                    },
                    {
                      attrId: '149127',
                      code: 'statusName',
                      name: '集团状态',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      sourceAttrId: '886805849493164038',
                      _codePath: ['statusName'],
                      _idpath: ['149127'],
                    },
                    {
                      attrId: '54181',
                      code: 'officialLevel',
                      name: '行政级别',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      sourceAttrId: '886805849493164040',
                      _codePath: ['officialLevel'],
                      _idpath: ['54181'],
                    },
                    {
                      attrId: '244475',
                      code: 'keyType',
                      name: '关键人标识',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      sourceAttrId: '886805849493164041',
                      _codePath: ['keyType'],
                      _idpath: ['244475'],
                    },
                    {
                      attrId: '355331',
                      code: 'duty',
                      name: '职务',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      sourceAttrId: '886805849493164042',
                      _codePath: ['duty'],
                      _idpath: ['355331'],
                    },
                    {
                      attrId: '231866',
                      code: 'name',
                      name: '姓名',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      sourceAttrId: '886812890047664128',
                      _codePath: ['name'],
                      _idpath: ['231866'],
                    },
                    {
                      attrId: '231046',
                      code: 'tradeclassTop',
                      name: '行业类型ID',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      sourceAttrId: '886815549731328000',
                      _codePath: ['tradeclassTop'],
                      _idpath: ['231046'],
                    },
                    {
                      attrId: '170299',
                      code: 'customerId',
                      name: '客户ID',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      sourceAttrId: '886864173638352896',
                      _codePath: ['customerId'],
                      _idpath: ['170299'],
                    },
                    {
                      attrId: '1046582',
                      code: 'keyTypeName',
                      name: '关键人标识名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      sourceAttrId: '887280289602863104',
                      _codePath: ['keyTypeName'],
                      _idpath: ['1046582'],
                    },
                    {
                      attrId: '788913',
                      code: 'officialLevelName',
                      name: '行政级别名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      sourceAttrId: '887280289602863106',
                      _codePath: ['officialLevelName'],
                      _idpath: ['788913'],
                    },
                    {
                      attrId: '766652',
                      code: 'tradeclassTopName',
                      name: '行业类型名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      sourceAttrId: '887639661394923520',
                      _codePath: ['tradeclassTopName'],
                      _idpath: ['766652'],
                    },
                    {
                      attrId: '824624',
                      code: 'rowId',
                      name: '行ID',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      sourceAttrId: '887684753073770496',
                      _codePath: ['rowId'],
                      _idpath: ['824624'],
                    },
                    {
                      attrId: '547764',
                      code: 'actionType',
                      name: '操作类型',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                      sourceAttrId: '888739201762070528',
                      _codePath: ['actionType'],
                      _idpath: ['547764'],
                    },
                    {
                      attrId: '351828',
                      code: 'sceneType',
                      name: '场景类型',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                      sourceAttrId: '888739201762070529',
                      _codePath: ['sceneType'],
                      _idpath: ['351828'],
                    },
                    {
                      attrId: '688676',
                      code: 'objType',
                      name: '对象类型',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                      sourceAttrId: '888739201762070531',
                      _codePath: ['objType'],
                      _idpath: ['688676'],
                    },
                    {
                      attrId: '8138167',
                      code: 'homeCity',
                      name: '集团归属地',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                      sourceAttrId: '888739201762070532',
                      _codePath: ['homeCity'],
                      _idpath: ['8138167'],
                    },
                    {
                      attrId: '867706',
                      code: 'email',
                      name: '邮箱',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      sourceAttrId: '888739201762070533',
                      _codePath: ['email'],
                      _idpath: ['867706'],
                    },
                    {
                      attrId: '4067448',
                      code: 'gender',
                      name: '性别',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      sourceAttrId: '888739201762070534',
                      _codePath: ['gender'],
                      _idpath: ['4067448'],
                    },
                    {
                      attrId: '037691',
                      code: 'department',
                      name: '部门',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      sourceAttrId: '888739201762070535',
                      _codePath: ['department'],
                      _idpath: ['037691'],
                    },
                    {
                      attrId: '42604',
                      code: 'remark',
                      name: '备注',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      sourceAttrId: '888739201762070536',
                      _codePath: ['remark'],
                      _idpath: ['42604'],
                    },
                    {
                      attrId: '396255',
                      code: 'coreFlag',
                      name: '是否重要成员',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                      sourceAttrId: '888741322830737408',
                      _codePath: ['coreFlag'],
                      _idpath: ['396255'],
                    },
                    {
                      attrId: '666725',
                      code: 'actionTypeName',
                      name: '操作类型名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      sourceAttrId: '890518166403903488',
                      _codePath: ['actionTypeName'],
                      _idpath: ['666725'],
                    },
                    {
                      attrId: '2575794',
                      code: 'sceneTypeName',
                      name: '场景类型名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      sourceAttrId: '890518166403903489',
                      _codePath: ['sceneTypeName'],
                      _idpath: ['2575794'],
                    },
                    {
                      attrId: '845038',
                      code: 'objTypeName',
                      name: '对象类型名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      sourceAttrId: '890518166403903491',
                      _codePath: ['objTypeName'],
                      _idpath: ['845038'],
                    },
                    {
                      attrId: '866365',
                      code: 'homeCityName',
                      name: '集团归属地名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      sourceAttrId: '890518166403903492',
                      _codePath: ['homeCityName'],
                      _idpath: ['866365'],
                    },
                    {
                      attrId: '5803486',
                      code: 'genderName',
                      name: '性别中文名',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      sourceAttrId: '890518166403903493',
                      _codePath: ['genderName'],
                      _idpath: ['5803486'],
                    },
                    {
                      attrId: '6727147',
                      code: 'coreFlagName',
                      name: '是否重要成员名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      sourceAttrId: '890519656560422912',
                      _codePath: ['coreFlagName'],
                      _idpath: ['6727147'],
                    },
                    {
                      attrId: '7712785',
                      code: 'msisdnHomeCity',
                      name: '成员号码归属地',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                      sourceAttrId: '888739201762070530',
                      _codePath: ['msisdnHomeCity'],
                      _idpath: ['7712785'],
                    },
                    {
                      attrId: '5236663',
                      code: 'msisdnHomeCityName',
                      name: '号码归属地名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      sourceAttrId: '890518166403903490',
                      _codePath: ['msisdnHomeCityName'],
                      _idpath: ['5236663'],
                    },
                    {
                      attrId: '9217839',
                      code: 'clientSign',
                      name: '重要客户标识',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      sourceAttrId: '909684124516106240',
                      _codePath: ['clientSign'],
                      _idpath: ['9217839'],
                    },
                    {
                      attrId: '60656',
                      code: 'netInTime',
                      name: '入网时间',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      sourceAttrId: '909686709872914432',
                      _codePath: ['netInTime'],
                      _idpath: ['60656'],
                    },
                    {
                      attrId: '450522',
                      code: 'contractNum',
                      name: '未到期合约数量',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      sourceAttrId: '909686709872914433',
                      _codePath: ['contractNum'],
                      _idpath: ['450522'],
                    },
                    {
                      attrId: '0734155',
                      code: 'mainMeal',
                      name: '主套餐',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      sourceAttrId: '909686709872914434',
                      _codePath: ['mainMeal'],
                      _idpath: ['0734155'],
                    },
                    {
                      attrId: '677663',
                      code: 'onceDisc',
                      name: '主套餐一次折扣',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      sourceAttrId: '909686709872914435',
                      _codePath: ['onceDisc'],
                      _idpath: ['677663'],
                    },
                    {
                      attrId: '595481',
                      code: 'termType',
                      name: '终端类型',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      sourceAttrId: '909686709872914436',
                      _codePath: ['termType'],
                      _idpath: ['595481'],
                    },
                    {
                      attrId: '850205',
                      code: 'termModel',
                      name: '终端型号',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      sourceAttrId: '909686709872914437',
                      _codePath: ['termModel'],
                      _idpath: ['850205'],
                    },
                    {
                      attrId: '756812',
                      code: 'arpuValue',
                      name: '近三个月ARPU值',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      sourceAttrId: '909686709872914438',
                      _codePath: ['arpuValue'],
                      _idpath: ['756812'],
                    },
                    {
                      attrId: '446451',
                      code: 'record',
                      name: '履历',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      sourceAttrId: '917342493400453121',
                      _codePath: ['record'],
                      _idpath: ['446451'],
                    },
                    {
                      attrId: '963984',
                      code: 'interestTypeName',
                      name: '兴趣爱好',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      sourceAttrId: '917342493400453120',
                      _codePath: ['interestTypeName'],
                      _idpath: ['963984'],
                    },
                    {
                      attrId: '3143007',
                      code: 'managerName',
                      name: '看管人员',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                      sourceAttrId: '953248498772557824',
                      _codePath: ['managerName'],
                      _idpath: ['3143007'],
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
                    condId: '800487',
                    options: { context: '$data_859603$', operate: 'empty' },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166746009035238530,
                elseIfs: [],
                line_number: 13,
                callback1: [
                  {
                    type: 'setVisible',
                    dataId: 166746010413491800,
                    options: {
                      compId: 'Table_5369494',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Table',
                      id: '84579146',
                      visible: '',
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
                dataId: 166392734796303840,
                options: {
                  compId: [
                    'Input_361479_887285_2150708_936504_923334_755169',
                    'Table_8700198_829382',
                  ],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '510887',
                  visible: 'true',
                  compid: [
                    'Input_361479_887285_2150708_936504_923334_755169',
                    'Table_8700198_829382',
                  ],
                },
                line_number: 16,
              },
              {
                type: 'sysSetVisible',
                dataId: 167592869837733200,
                options: {
                  compId: [
                    'Table_8700198',
                    'Row_851124',
                    'Button_683498',
                    'Button_026256',
                    'StdUpload_4835215',
                    'Button_050256',
                  ],
                  compName: 'page',
                  id: '142487',
                  pageJsonId: '537892',
                  visible: '',
                  compid: [
                    'Table_8700198',
                    'Row_851124',
                    'Button_683498',
                    'Button_026256',
                    'StdUpload_4835215',
                    'Button_050256',
                  ],
                },
                line_number: 17,
              },
              {
                type: 'setVisible',
                dataId: 167592837832486370,
                shielding: true,
                options: {
                  compId: ['Table_8700198_829382'],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Table',
                  id: '755512',
                  visible: 'true',
                  compid: ['Table_8700198_829382'],
                },
                line_number: 18,
              },
              {
                type: 'setDisable',
                dataId: 166392738103528860,
                options: {
                  compId: [
                    'Input_361479_887285_2150708_936504_923334_755169',
                    'Form_345819',
                  ],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '075526',
                  disabled: 'true',
                  compid: [
                    'Input_361479_887285_2150708_936504_923334_755169',
                    'Form_345819',
                  ],
                },
                line_number: 19,
              },
              {
                type: 'setTimeout',
                dataId: 167593651358881020,
                options: {
                  compId: 'setTimeout',
                  compName: 'system',
                  id: '897928',
                  pageJsonId: '537892',
                  timername: 'ceshi',
                  interval: 10000,
                },
                line_number: 20,
                callback1: [
                  {
                    type: 'setVisible',
                    dataId: 167593653973833900,
                    options: {
                      compId: ['Table_8700198_829382'],
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Table',
                      id: '675782',
                      visible: 'true',
                      compid: ['Table_8700198_829382'],
                    },
                    line_number: 21,
                  },
                ],
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse68.params = [] || [];
    CMDGenerator(eventDataifelse68, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDataifelse69: any = [
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
        dataId: 170487217373503740,
        elseIfs: [],
        line_number: 22,
        callback1: [
          {
            type: 'apiRequest',
            dataId: 170487217373577470,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '8710004',
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
                dataId: 170487217373695200,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '7400777',
                  pageJsonId: '537892',
                  code: 'function main(data,state,success,fail){var _response$resultData;var response=reply_8710004;var acceptResultDesc="\\u53D7\\u7406\\u5931\\u8D25\\u6216\\u672A\\u53D7\\u7406";var acceptResult="0";if(response!==null&&response!==void 0&&(_response$resultData=response.resultData)!==null&&_response$resultData!==void 0&&_response$resultData.dcBusiObjItemAttrList){for(var i=0;i<(response===null||response===void 0?void 0:(_response$resultData2=response.resultData)===null||_response$resultData2===void 0?void 0:_response$resultData2.dcBusiObjItemAttrList.length);++i){var _response$resultData2,_response$resultData3;var dcBusiObjItemAttr=response===null||response===void 0?void 0:(_response$resultData3=response.resultData)===null||_response$resultData3===void 0?void 0:_response$resultData3.dcBusiObjItemAttrList[i];if(dcBusiObjItemAttr.attrCode=="acceptResult"){acceptResultDesc=dcBusiObjItemAttr.attrValueDesc;acceptResult=dcBusiObjItemAttr.attrValue}}}data.factorForm.acceptResultDesc=acceptResultDesc;data.factorForm.acceptResult=acceptResult;success()};',
                },
                line_number: 24,
                callback1: [
                  {
                    type: 'setDataSource',
                    dataId: 170487217373680000,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '770847',
                      pageJsonId: '537892',
                      dataSourceId: 167049030475764160,
                      dataSourceName: 'factorForm',
                      dataSourceRelType: 'custom',
                      dataSourceSetValue: [
                        {
                          attrId: '417081',
                          code: 'reason',
                          name: '申请原因',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['reason'],
                          _idpath: ['417081'],
                        },
                        {
                          attrId: '138061',
                          code: 'acceptResultDesc',
                          name: '属性',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['acceptResultDesc'],
                          _idpath: ['138061'],
                        },
                        {
                          attrId: '302534',
                          code: 'acceptResult',
                          name: '属性',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          _codePath: ['acceptResult'],
                          _idpath: ['302534'],
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
                    dataId: 170487217373634780,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '654753',
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
            dataId: 170487217373630300,
            options: {
              compId: ['Card_6933535', 'Card_96501'],
              compName: 'page',
              id: '203013',
              pageJsonId: '537892',
              visible: 'true',
              compid: ['Card_6933535', 'Card_96501'],
            },
            line_number: 27,
          },
        ],
      },
    ];
    eventDataifelse69.params = [] || [];
    CMDGenerator(eventDataifelse69, {}, 'ifelse', {
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
          dividerText={'普通成员增减'}
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
                  refs.setComponentRef(
                    r,
                    'Form_4311097_9385662_8411515_9167293_4337769',
                  )
                }
                {...injectData}
              >
                <Checkbox
                  name={'审批场景'}
                  titleTip={'text'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  text={'普通成员增减'}
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
                    refs.setComponentRef(
                      r,
                      'Checkbox_882584_5289015_934499_355644_646764_5265724',
                    )
                  }
                  {...injectData}
                />
                <View
                  className="View_View_6319234"
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
                  ref={(r: any) => refs.setComponentRef(r, 'View_6319234')}
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
                    refs.setComponentRef(
                      r,
                      'Input_361479_887285_2150708_936504_923334_755169',
                    )
                  }
                  {...injectData}
                />
              </Form>
            </View>
          </HorizontalView>
          <View
            className="View_View_278839"
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_278839',
              uid: 'View_278839',
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
            ref={(r: any) => refs.setComponentRef(r, 'View_278839')}
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
              style={{ width: 'fit-content', margin: '0px 0px 0px 0px' }}
              onClick={(e: any) => {
                const eventDatashowCustomModal9: any = [
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
                        isCoreFlag: '0',
                        staffCode: '$state.staffCode$',
                        selectOptionsData: '$data.selectOptionsData$',
                        zoneCode: '$state.zoneCode$',
                        orderNbr: '$state.fileInstNbr$',
                      },
                      paramsObjKeyValueMap: {
                        phone: '$value_24586657$',
                        lanId: '$state.lanId$',
                        catalogCode: '$state.catalogCode$',
                        isCoreFlag: '0',
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
                          code: 'function main(data,state,success,fail){console.log("okData_611628",okData_611628);data.MemberInfo.push(okData_611628);if(data.sceneSubmit.custMemberList!=undefined&&data.sceneSubmit.custMemberList.length>0){data.sceneSubmit.custMemberList.push(okData_611628)}else{var custMemberList=[];custMemberList.push(okData_611628);data.sceneSubmit.custMemberList=custMemberList}success()};',
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
                                  sourceAttrId: '886805849493164032',
                                  _codePath: ['msisdn'],
                                  _idpath: ['4823123'],
                                },
                                {
                                  attrId: '134739',
                                  code: 'memberJoinDate',
                                  name: '纳入成员骨干时间',
                                  type: 'datetime',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  value: { type: [], code: 'memberJoinDate' },
                                  sourceAttrId: '886805849493164033',
                                  _codePath: ['memberJoinDate'],
                                  _idpath: ['134739'],
                                },
                                {
                                  attrId: '58013',
                                  code: 'groupId',
                                  name: '集团编码',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '886805849493164034',
                                  _codePath: ['groupId'],
                                  _idpath: ['58013'],
                                },
                                {
                                  attrId: '2030545',
                                  code: 'groupName',
                                  name: '集团名称',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '886805849493164035',
                                  _codePath: ['groupName'],
                                  _idpath: ['2030545'],
                                },
                                {
                                  attrId: '005597',
                                  code: 'groupLevelName',
                                  name: '价值等级',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '886805849493164037',
                                  _codePath: ['groupLevelName'],
                                  _idpath: ['005597'],
                                },
                                {
                                  attrId: '149127',
                                  code: 'statusName',
                                  name: '集团状态',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '886805849493164038',
                                  _codePath: ['statusName'],
                                  _idpath: ['149127'],
                                },
                                {
                                  attrId: '716457',
                                  code: 'memberType',
                                  name: '成员类型',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  value: { type: [], code: 'memberType' },
                                  sourceAttrId: '886805849493164039',
                                  _codePath: ['memberType'],
                                  _idpath: ['716457'],
                                },
                                {
                                  attrId: '54181',
                                  code: 'officialLevel',
                                  name: '行政级别',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '886805849493164040',
                                  _codePath: ['officialLevel'],
                                  _idpath: ['54181'],
                                },
                                {
                                  attrId: '244475',
                                  code: 'keyType',
                                  name: '关键人标识',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '886805849493164041',
                                  _codePath: ['keyType'],
                                  _idpath: ['244475'],
                                },
                                {
                                  attrId: '355331',
                                  code: 'duty',
                                  name: '职务',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '886805849493164042',
                                  _codePath: ['duty'],
                                  _idpath: ['355331'],
                                },
                                {
                                  attrId: '8583146',
                                  code: 'cutOffTime',
                                  name: '免扰截至时间',
                                  type: 'datetime',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  value: { type: [], code: 'cutOffTime' },
                                  sourceAttrId: '886805849493164043',
                                  _codePath: ['cutOffTime'],
                                  _idpath: ['8583146'],
                                },
                                {
                                  attrId: '82682',
                                  code: 'noDisturbScope',
                                  name: '免扰范围',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  value: { type: [], code: 'noDisturbScope' },
                                  sourceAttrId: '886805849493164044',
                                  _codePath: ['noDisturbScope'],
                                  _idpath: ['82682'],
                                },
                                {
                                  attrId: '231866',
                                  code: 'name',
                                  name: '姓名',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '886812890047664128',
                                  _codePath: ['name'],
                                  _idpath: ['231866'],
                                },
                                {
                                  attrId: '231046',
                                  code: 'tradeclassTop',
                                  name: '行业类型ID',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '886815549731328000',
                                  _codePath: ['tradeclassTop'],
                                  _idpath: ['231046'],
                                },
                                {
                                  attrId: '170299',
                                  code: 'customerId',
                                  name: '客户ID',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '886864173638352896',
                                  _codePath: ['customerId'],
                                  _idpath: ['170299'],
                                },
                                {
                                  attrId: '360409',
                                  code: 'supervise',
                                  name: '看管人员',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  value: { type: [], code: 'supervise' },
                                  sourceAttrId: '886864173638352897',
                                  _codePath: ['supervise'],
                                  _idpath: ['360409'],
                                },
                                {
                                  attrId: '1046582',
                                  code: 'keyTypeName',
                                  name: '关键人标识名称',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '887280289602863104',
                                  _codePath: ['keyTypeName'],
                                  _idpath: ['1046582'],
                                },
                                {
                                  attrId: '6475557',
                                  code: 'memberTypeName',
                                  name: '成员类型名称',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '887280289602863105',
                                  _codePath: ['memberTypeName'],
                                  _idpath: ['6475557'],
                                },
                                {
                                  attrId: '788913',
                                  code: 'officialLevelName',
                                  name: '行政级别名称',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '887280289602863106',
                                  _codePath: ['officialLevelName'],
                                  _idpath: ['788913'],
                                },
                                {
                                  attrId: '766652',
                                  code: 'tradeclassTopName',
                                  name: '行业类型名称',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '887639661394923520',
                                  _codePath: ['tradeclassTopName'],
                                  _idpath: ['766652'],
                                },
                                {
                                  attrId: '824624',
                                  code: 'rowId',
                                  name: '行ID',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '887684753073770496',
                                  _codePath: ['rowId'],
                                  _idpath: ['824624'],
                                },
                                {
                                  attrId: '547764',
                                  code: 'actionType',
                                  name: '操作类型',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  sourceAttrId: '888739201762070528',
                                  _codePath: ['actionType'],
                                  _idpath: ['547764'],
                                },
                                {
                                  attrId: '351828',
                                  code: 'sceneType',
                                  name: '场景类型',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  sourceAttrId: '888739201762070529',
                                  _codePath: ['sceneType'],
                                  _idpath: ['351828'],
                                },
                                {
                                  attrId: '688676',
                                  code: 'objType',
                                  name: '对象类型',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  sourceAttrId: '888739201762070531',
                                  _codePath: ['objType'],
                                  _idpath: ['688676'],
                                },
                                {
                                  attrId: '8138167',
                                  code: 'homeCity',
                                  name: '集团归属地',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  sourceAttrId: '888739201762070532',
                                  _codePath: ['homeCity'],
                                  _idpath: ['8138167'],
                                },
                                {
                                  attrId: '867706',
                                  code: 'email',
                                  name: '邮箱',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '888739201762070533',
                                  _codePath: ['email'],
                                  _idpath: ['867706'],
                                },
                                {
                                  attrId: '4067448',
                                  code: 'gender',
                                  name: '性别',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '888739201762070534',
                                  _codePath: ['gender'],
                                  _idpath: ['4067448'],
                                },
                                {
                                  attrId: '037691',
                                  code: 'department',
                                  name: '部门',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '888739201762070535',
                                  _codePath: ['department'],
                                  _idpath: ['037691'],
                                },
                                {
                                  attrId: '42604',
                                  code: 'remark',
                                  name: '备注',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '888739201762070536',
                                  _codePath: ['remark'],
                                  _idpath: ['42604'],
                                },
                                {
                                  attrId: '60656',
                                  code: 'netInTime',
                                  name: '入网时间',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '909686709872914432',
                                  _codePath: ['netInTime'],
                                  _idpath: ['60656'],
                                },
                                {
                                  attrId: '396255',
                                  code: 'coreFlag',
                                  name: '是否重要成员',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  sourceAttrId: '888741322830737408',
                                  _codePath: ['coreFlag'],
                                  _idpath: ['396255'],
                                },
                                {
                                  attrId: '446451',
                                  code: 'record',
                                  name: '履历',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '917342493400453121',
                                  _codePath: ['record'],
                                  _idpath: ['446451'],
                                },
                                {
                                  attrId: '450522',
                                  code: 'contractNum',
                                  name: '未到期合约数量',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '909686709872914433',
                                  _codePath: ['contractNum'],
                                  _idpath: ['450522'],
                                },
                                {
                                  attrId: '595481',
                                  code: 'termType',
                                  name: '终端类型',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '909686709872914436',
                                  _codePath: ['termType'],
                                  _idpath: ['595481'],
                                },
                                {
                                  attrId: '666725',
                                  code: 'actionTypeName',
                                  name: '操作类型名称',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '890518166403903488',
                                  _codePath: ['actionTypeName'],
                                  _idpath: ['666725'],
                                },
                                {
                                  attrId: '677663',
                                  code: 'onceDisc',
                                  name: '主套餐一次折扣',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '909686709872914435',
                                  _codePath: ['onceDisc'],
                                  _idpath: ['677663'],
                                },
                                {
                                  attrId: '756812',
                                  code: 'arpuValue',
                                  name: '近三个月ARPU值',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '909686709872914438',
                                  _codePath: ['arpuValue'],
                                  _idpath: ['756812'],
                                },
                                {
                                  attrId: '845038',
                                  code: 'objTypeName',
                                  name: '对象类型名称',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '890518166403903491',
                                  _codePath: ['objTypeName'],
                                  _idpath: ['845038'],
                                },
                                {
                                  attrId: '850205',
                                  code: 'termModel',
                                  name: '终端型号',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '909686709872914437',
                                  _codePath: ['termModel'],
                                  _idpath: ['850205'],
                                },
                                {
                                  attrId: '866365',
                                  code: 'homeCityName',
                                  name: '集团归属地名称',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '890518166403903492',
                                  _codePath: ['homeCityName'],
                                  _idpath: ['866365'],
                                },
                                {
                                  attrId: '963984',
                                  code: 'interestTypeName',
                                  name: '兴趣爱好',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '917342493400453120',
                                  _codePath: ['interestTypeName'],
                                  _idpath: ['963984'],
                                },
                                {
                                  attrId: '2575794',
                                  code: 'sceneTypeName',
                                  name: '场景类型名称',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '890518166403903489',
                                  _codePath: ['sceneTypeName'],
                                  _idpath: ['2575794'],
                                },
                                {
                                  attrId: '3143007',
                                  code: 'managerName',
                                  name: '看管人员',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '953248498772557824',
                                  _codePath: ['managerName'],
                                  _idpath: ['3143007'],
                                },
                                {
                                  attrId: '5236663',
                                  code: 'msisdnHomeCityName',
                                  name: '号码归属地名称',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '890518166403903490',
                                  _codePath: ['msisdnHomeCityName'],
                                  _idpath: ['5236663'],
                                },
                                {
                                  attrId: '5803486',
                                  code: 'genderName',
                                  name: '性别中文名',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '890518166403903493',
                                  _codePath: ['genderName'],
                                  _idpath: ['5803486'],
                                },
                                {
                                  attrId: '6727147',
                                  code: 'coreFlagName',
                                  name: '是否重要成员名称',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '890519656560422912',
                                  _codePath: ['coreFlagName'],
                                  _idpath: ['6727147'],
                                },
                                {
                                  attrId: '7712785',
                                  code: 'msisdnHomeCity',
                                  name: '成员号码归属地',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  sourceAttrId: '888739201762070530',
                                  _codePath: ['msisdnHomeCity'],
                                  _idpath: ['7712785'],
                                },
                                {
                                  attrId: '9217839',
                                  code: 'clientSign',
                                  name: '重要客户标识',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '909684124516106240',
                                  _codePath: ['clientSign'],
                                  _idpath: ['9217839'],
                                },
                                {
                                  attrId: '0734155',
                                  code: 'mainMeal',
                                  name: '主套餐',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '909686709872914434',
                                  _codePath: ['mainMeal'],
                                  _idpath: ['0734155'],
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
                                dataId: 167592284266288640,
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '482457',
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
                eventDatashowCustomModal9.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatashowCustomModal9,
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
                const eventDatagetTableSelectedKey10: any = [
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
                                  sourceAttrId: '886805849493164033',
                                  _codePath: ['memberJoinDate'],
                                  _idpath: ['134739'],
                                },
                                {
                                  attrId: '716457',
                                  code: 'memberType',
                                  name: '成员类型',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '886805849493164039',
                                  _codePath: ['memberType'],
                                  _idpath: ['716457'],
                                },
                                {
                                  attrId: '8583146',
                                  code: 'cutOffTime',
                                  name: '免扰截至时间',
                                  type: 'datetime',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '886805849493164043',
                                  _codePath: ['cutOffTime'],
                                  _idpath: ['8583146'],
                                },
                                {
                                  attrId: '82682',
                                  code: 'noDisturbScope',
                                  name: '免扰范围',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  sourceAttrId: '886805849493164044',
                                  _codePath: ['noDisturbScope'],
                                  _idpath: ['82682'],
                                },
                                {
                                  attrId: '360409',
                                  code: 'supervise',
                                  name: '看管人员',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '886864173638352897',
                                  _codePath: ['supervise'],
                                  _idpath: ['360409'],
                                },
                                {
                                  attrId: '42604',
                                  code: 'remark',
                                  name: '备注',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '888739201762070536',
                                  _codePath: ['remark'],
                                  _idpath: ['42604'],
                                },
                                {
                                  attrId: '54181',
                                  code: 'officialLevel',
                                  name: '行政级别',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '886805849493164040',
                                  _codePath: ['officialLevel'],
                                  _idpath: ['54181'],
                                },
                                {
                                  attrId: '58013',
                                  code: 'groupId',
                                  name: '集团编码',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '886805849493164034',
                                  _codePath: ['groupId'],
                                  _idpath: ['58013'],
                                },
                                {
                                  attrId: '60656',
                                  code: 'netInTime',
                                  name: '入网时间',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '909686709872914432',
                                  _codePath: ['netInTime'],
                                  _idpath: ['60656'],
                                },
                                {
                                  attrId: '149127',
                                  code: 'statusName',
                                  name: '集团状态',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '886805849493164038',
                                  _codePath: ['statusName'],
                                  _idpath: ['149127'],
                                },
                                {
                                  attrId: '170299',
                                  code: 'customerId',
                                  name: '客户ID',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '886864173638352896',
                                  _codePath: ['customerId'],
                                  _idpath: ['170299'],
                                },
                                {
                                  attrId: '231046',
                                  code: 'tradeclassTop',
                                  name: '行业类型ID',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '886815549731328000',
                                  _codePath: ['tradeclassTop'],
                                  _idpath: ['231046'],
                                },
                                {
                                  attrId: '231866',
                                  code: 'name',
                                  name: '姓名',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '886812890047664128',
                                  _codePath: ['name'],
                                  _idpath: ['231866'],
                                },
                                {
                                  attrId: '244475',
                                  code: 'keyType',
                                  name: '关键人标识',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '886805849493164041',
                                  _codePath: ['keyType'],
                                  _idpath: ['244475'],
                                },
                                {
                                  attrId: '351828',
                                  code: 'sceneType',
                                  name: '场景类型',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  sourceAttrId: '888739201762070529',
                                  _codePath: ['sceneType'],
                                  _idpath: ['351828'],
                                },
                                {
                                  attrId: '355331',
                                  code: 'duty',
                                  name: '职务',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '886805849493164042',
                                  _codePath: ['duty'],
                                  _idpath: ['355331'],
                                },
                                {
                                  attrId: '396255',
                                  code: 'coreFlag',
                                  name: '是否重要成员',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  sourceAttrId: '888741322830737408',
                                  _codePath: ['coreFlag'],
                                  _idpath: ['396255'],
                                },
                                {
                                  attrId: '446451',
                                  code: 'record',
                                  name: '履历',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '917342493400453121',
                                  _codePath: ['record'],
                                  _idpath: ['446451'],
                                },
                                {
                                  attrId: '450522',
                                  code: 'contractNum',
                                  name: '未到期合约数量',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '909686709872914433',
                                  _codePath: ['contractNum'],
                                  _idpath: ['450522'],
                                },
                                {
                                  attrId: '547764',
                                  code: 'actionType',
                                  name: '操作类型',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  sourceAttrId: '888739201762070528',
                                  _codePath: ['actionType'],
                                  _idpath: ['547764'],
                                },
                                {
                                  attrId: '595481',
                                  code: 'termType',
                                  name: '终端类型',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '909686709872914436',
                                  _codePath: ['termType'],
                                  _idpath: ['595481'],
                                },
                                {
                                  attrId: '666725',
                                  code: 'actionTypeName',
                                  name: '操作类型名称',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '890518166403903488',
                                  _codePath: ['actionTypeName'],
                                  _idpath: ['666725'],
                                },
                                {
                                  attrId: '677663',
                                  code: 'onceDisc',
                                  name: '主套餐一次折扣',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '909686709872914435',
                                  _codePath: ['onceDisc'],
                                  _idpath: ['677663'],
                                },
                                {
                                  attrId: '688676',
                                  code: 'objType',
                                  name: '对象类型',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  sourceAttrId: '888739201762070531',
                                  _codePath: ['objType'],
                                  _idpath: ['688676'],
                                },
                                {
                                  attrId: '756812',
                                  code: 'arpuValue',
                                  name: '近三个月ARPU值',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '909686709872914438',
                                  _codePath: ['arpuValue'],
                                  _idpath: ['756812'],
                                },
                                {
                                  attrId: '766652',
                                  code: 'tradeclassTopName',
                                  name: '行业类型名称',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '887639661394923520',
                                  _codePath: ['tradeclassTopName'],
                                  _idpath: ['766652'],
                                },
                                {
                                  attrId: '788913',
                                  code: 'officialLevelName',
                                  name: '行政级别名称',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '887280289602863106',
                                  _codePath: ['officialLevelName'],
                                  _idpath: ['788913'],
                                },
                                {
                                  attrId: '824624',
                                  code: 'rowId',
                                  name: '行ID',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '887684753073770496',
                                  _codePath: ['rowId'],
                                  _idpath: ['824624'],
                                },
                                {
                                  attrId: '845038',
                                  code: 'objTypeName',
                                  name: '对象类型名称',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '890518166403903491',
                                  _codePath: ['objTypeName'],
                                  _idpath: ['845038'],
                                },
                                {
                                  attrId: '850205',
                                  code: 'termModel',
                                  name: '终端型号',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '909686709872914437',
                                  _codePath: ['termModel'],
                                  _idpath: ['850205'],
                                },
                                {
                                  attrId: '866365',
                                  code: 'homeCityName',
                                  name: '集团归属地名称',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '890518166403903492',
                                  _codePath: ['homeCityName'],
                                  _idpath: ['866365'],
                                },
                                {
                                  attrId: '867706',
                                  code: 'email',
                                  name: '邮箱',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '888739201762070533',
                                  _codePath: ['email'],
                                  _idpath: ['867706'],
                                },
                                {
                                  attrId: '963984',
                                  code: 'interestTypeName',
                                  name: '兴趣爱好',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '917342493400453120',
                                  _codePath: ['interestTypeName'],
                                  _idpath: ['963984'],
                                },
                                {
                                  attrId: '1046582',
                                  code: 'keyTypeName',
                                  name: '关键人标识名称',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '887280289602863104',
                                  _codePath: ['keyTypeName'],
                                  _idpath: ['1046582'],
                                },
                                {
                                  attrId: '2030545',
                                  code: 'groupName',
                                  name: '集团名称',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '886805849493164035',
                                  _codePath: ['groupName'],
                                  _idpath: ['2030545'],
                                },
                                {
                                  attrId: '2575794',
                                  code: 'sceneTypeName',
                                  name: '场景类型名称',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '890518166403903489',
                                  _codePath: ['sceneTypeName'],
                                  _idpath: ['2575794'],
                                },
                                {
                                  attrId: '3143007',
                                  code: 'managerName',
                                  name: '看管人员',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '953248498772557824',
                                  _codePath: ['managerName'],
                                  _idpath: ['3143007'],
                                },
                                {
                                  attrId: '4067448',
                                  code: 'gender',
                                  name: '性别',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '888739201762070534',
                                  _codePath: ['gender'],
                                  _idpath: ['4067448'],
                                },
                                {
                                  attrId: '4823123',
                                  code: 'msisdn',
                                  name: '手机号码',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '886805849493164032',
                                  _codePath: ['msisdn'],
                                  _idpath: ['4823123'],
                                },
                                {
                                  attrId: '5236663',
                                  code: 'msisdnHomeCityName',
                                  name: '号码归属地名称',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '890518166403903490',
                                  _codePath: ['msisdnHomeCityName'],
                                  _idpath: ['5236663'],
                                },
                                {
                                  attrId: '5803486',
                                  code: 'genderName',
                                  name: '性别中文名',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '890518166403903493',
                                  _codePath: ['genderName'],
                                  _idpath: ['5803486'],
                                },
                                {
                                  attrId: '6475557',
                                  code: 'memberTypeName',
                                  name: '成员类型名称',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '887280289602863105',
                                  _codePath: ['memberTypeName'],
                                  _idpath: ['6475557'],
                                },
                                {
                                  attrId: '6727147',
                                  code: 'coreFlagName',
                                  name: '是否重要成员名称',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '890519656560422912',
                                  _codePath: ['coreFlagName'],
                                  _idpath: ['6727147'],
                                },
                                {
                                  attrId: '7712785',
                                  code: 'msisdnHomeCity',
                                  name: '成员号码归属地',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  sourceAttrId: '888739201762070530',
                                  _codePath: ['msisdnHomeCity'],
                                  _idpath: ['7712785'],
                                },
                                {
                                  attrId: '8138167',
                                  code: 'homeCity',
                                  name: '集团归属地',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  sourceAttrId: '888739201762070532',
                                  _codePath: ['homeCity'],
                                  _idpath: ['8138167'],
                                },
                                {
                                  attrId: '9217839',
                                  code: 'clientSign',
                                  name: '重要客户标识',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '909684124516106240',
                                  _codePath: ['clientSign'],
                                  _idpath: ['9217839'],
                                },
                                {
                                  attrId: '005597',
                                  code: 'groupLevelName',
                                  name: '价值等级',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '886805849493164037',
                                  _codePath: ['groupLevelName'],
                                  _idpath: ['005597'],
                                },
                                {
                                  attrId: '037691',
                                  code: 'department',
                                  name: '部门',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '888739201762070535',
                                  _codePath: ['department'],
                                  _idpath: ['037691'],
                                },
                                {
                                  attrId: '0734155',
                                  code: 'mainMeal',
                                  name: '主套餐',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: null },
                                  sourceAttrId: '909686709872914434',
                                  _codePath: ['mainMeal'],
                                  _idpath: ['0734155'],
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
                        dataId: 167506443679239550,
                        options: {
                          compId: 'showModal',
                          compName: 'page',
                          id: '2276553',
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
                            dataId: 167506447195396700,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '4022546',
                              pageJsonId: '537892',
                              code: 'function main(data,state,success,fail){var memnerInfo=data.MemberInfo;var sel=selectedRowKeys_455736;var res=[];if(sel!=undefined&&sel.length>0){memnerInfo.forEach(function(v){var exit=true;sel.forEach(function(s){if(s===v.rowId){exit=false}});if(exit){res.push(v)}});data.MemberInfo=res;data.sceneSubmit.custMemberList=res}success()};',
                            },
                            line_number: 6,
                            callback1: [
                              {
                                type: 'setDataSource',
                                dataId: 167506447195307600,
                                options: {
                                  compId: 'setDataSource',
                                  compName: 'page',
                                  id: '7359024',
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
                                      sourceAttrId: '886805849493164033',
                                      _codePath: ['memberJoinDate'],
                                      _idpath: ['134739'],
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
                                      sourceAttrId: '886805849493164039',
                                      _codePath: ['memberType'],
                                      _idpath: ['716457'],
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
                                      sourceAttrId: '886805849493164043',
                                      _codePath: ['cutOffTime'],
                                      _idpath: ['8583146'],
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
                                      sourceAttrId: '886805849493164044',
                                      _codePath: ['noDisturbScope'],
                                      _idpath: ['82682'],
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
                                      sourceAttrId: '886864173638352897',
                                      _codePath: ['supervise'],
                                      _idpath: ['360409'],
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
                                      sourceAttrId: '888739201762070536',
                                      _codePath: ['remark'],
                                      _idpath: ['42604'],
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
                                      sourceAttrId: '886805849493164040',
                                      _codePath: ['officialLevel'],
                                      _idpath: ['54181'],
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
                                      sourceAttrId: '886805849493164034',
                                      _codePath: ['groupId'],
                                      _idpath: ['58013'],
                                    },
                                    {
                                      attrId: '60656',
                                      code: 'netInTime',
                                      name: '入网时间',
                                      type: 'string',
                                      sort: { isSort: true },
                                      initialData: {
                                        type: 'static',
                                        value: null,
                                      },
                                      sourceAttrId: '909686709872914432',
                                      _codePath: ['netInTime'],
                                      _idpath: ['60656'],
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
                                      sourceAttrId: '886805849493164038',
                                      _codePath: ['statusName'],
                                      _idpath: ['149127'],
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
                                      sourceAttrId: '886864173638352896',
                                      _codePath: ['customerId'],
                                      _idpath: ['170299'],
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
                                      sourceAttrId: '886815549731328000',
                                      _codePath: ['tradeclassTop'],
                                      _idpath: ['231046'],
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
                                      sourceAttrId: '886812890047664128',
                                      _codePath: ['name'],
                                      _idpath: ['231866'],
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
                                      sourceAttrId: '886805849493164041',
                                      _codePath: ['keyType'],
                                      _idpath: ['244475'],
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
                                      sourceAttrId: '888739201762070529',
                                      _codePath: ['sceneType'],
                                      _idpath: ['351828'],
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
                                      sourceAttrId: '886805849493164042',
                                      _codePath: ['duty'],
                                      _idpath: ['355331'],
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
                                      sourceAttrId: '888741322830737408',
                                      _codePath: ['coreFlag'],
                                      _idpath: ['396255'],
                                    },
                                    {
                                      attrId: '446451',
                                      code: 'record',
                                      name: '履历',
                                      type: 'string',
                                      sort: { isSort: true },
                                      initialData: {
                                        type: 'static',
                                        value: null,
                                      },
                                      sourceAttrId: '917342493400453121',
                                      _codePath: ['record'],
                                      _idpath: ['446451'],
                                    },
                                    {
                                      attrId: '450522',
                                      code: 'contractNum',
                                      name: '未到期合约数量',
                                      type: 'string',
                                      sort: { isSort: true },
                                      initialData: {
                                        type: 'static',
                                        value: null,
                                      },
                                      sourceAttrId: '909686709872914433',
                                      _codePath: ['contractNum'],
                                      _idpath: ['450522'],
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
                                      sourceAttrId: '888739201762070528',
                                      _codePath: ['actionType'],
                                      _idpath: ['547764'],
                                    },
                                    {
                                      attrId: '595481',
                                      code: 'termType',
                                      name: '终端类型',
                                      type: 'string',
                                      sort: { isSort: true },
                                      initialData: {
                                        type: 'static',
                                        value: null,
                                      },
                                      sourceAttrId: '909686709872914436',
                                      _codePath: ['termType'],
                                      _idpath: ['595481'],
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
                                      sourceAttrId: '890518166403903488',
                                      _codePath: ['actionTypeName'],
                                      _idpath: ['666725'],
                                    },
                                    {
                                      attrId: '677663',
                                      code: 'onceDisc',
                                      name: '主套餐一次折扣',
                                      type: 'string',
                                      sort: { isSort: true },
                                      initialData: {
                                        type: 'static',
                                        value: null,
                                      },
                                      sourceAttrId: '909686709872914435',
                                      _codePath: ['onceDisc'],
                                      _idpath: ['677663'],
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
                                      sourceAttrId: '888739201762070531',
                                      _codePath: ['objType'],
                                      _idpath: ['688676'],
                                    },
                                    {
                                      attrId: '756812',
                                      code: 'arpuValue',
                                      name: '近三个月ARPU值',
                                      type: 'string',
                                      sort: { isSort: true },
                                      initialData: {
                                        type: 'static',
                                        value: null,
                                      },
                                      sourceAttrId: '909686709872914438',
                                      _codePath: ['arpuValue'],
                                      _idpath: ['756812'],
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
                                      sourceAttrId: '887639661394923520',
                                      _codePath: ['tradeclassTopName'],
                                      _idpath: ['766652'],
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
                                      sourceAttrId: '887280289602863106',
                                      _codePath: ['officialLevelName'],
                                      _idpath: ['788913'],
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
                                      sourceAttrId: '887684753073770496',
                                      _codePath: ['rowId'],
                                      _idpath: ['824624'],
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
                                      sourceAttrId: '890518166403903491',
                                      _codePath: ['objTypeName'],
                                      _idpath: ['845038'],
                                    },
                                    {
                                      attrId: '850205',
                                      code: 'termModel',
                                      name: '终端型号',
                                      type: 'string',
                                      sort: { isSort: true },
                                      initialData: {
                                        type: 'static',
                                        value: null,
                                      },
                                      sourceAttrId: '909686709872914437',
                                      _codePath: ['termModel'],
                                      _idpath: ['850205'],
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
                                      sourceAttrId: '890518166403903492',
                                      _codePath: ['homeCityName'],
                                      _idpath: ['866365'],
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
                                      sourceAttrId: '888739201762070533',
                                      _codePath: ['email'],
                                      _idpath: ['867706'],
                                    },
                                    {
                                      attrId: '963984',
                                      code: 'interestTypeName',
                                      name: '兴趣爱好',
                                      type: 'string',
                                      sort: { isSort: true },
                                      initialData: {
                                        type: 'static',
                                        value: null,
                                      },
                                      sourceAttrId: '917342493400453120',
                                      _codePath: ['interestTypeName'],
                                      _idpath: ['963984'],
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
                                      sourceAttrId: '887280289602863104',
                                      _codePath: ['keyTypeName'],
                                      _idpath: ['1046582'],
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
                                      sourceAttrId: '886805849493164035',
                                      _codePath: ['groupName'],
                                      _idpath: ['2030545'],
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
                                      sourceAttrId: '890518166403903489',
                                      _codePath: ['sceneTypeName'],
                                      _idpath: ['2575794'],
                                    },
                                    {
                                      attrId: '3143007',
                                      code: 'managerName',
                                      name: '看管人员',
                                      type: 'string',
                                      sort: { isSort: true },
                                      initialData: {
                                        type: 'static',
                                        value: null,
                                      },
                                      sourceAttrId: '953248498772557824',
                                      _codePath: ['managerName'],
                                      _idpath: ['3143007'],
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
                                      sourceAttrId: '888739201762070534',
                                      _codePath: ['gender'],
                                      _idpath: ['4067448'],
                                    },
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
                                      sourceAttrId: '886805849493164032',
                                      _codePath: ['msisdn'],
                                      _idpath: ['4823123'],
                                    },
                                    {
                                      attrId: '5236663',
                                      code: 'msisdnHomeCityName',
                                      name: '号码归属地名称',
                                      type: 'string',
                                      sort: { isSort: true },
                                      initialData: {
                                        type: 'static',
                                        value: null,
                                      },
                                      sourceAttrId: '890518166403903490',
                                      _codePath: ['msisdnHomeCityName'],
                                      _idpath: ['5236663'],
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
                                      sourceAttrId: '890518166403903493',
                                      _codePath: ['genderName'],
                                      _idpath: ['5803486'],
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
                                      sourceAttrId: '887280289602863105',
                                      _codePath: ['memberTypeName'],
                                      _idpath: ['6475557'],
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
                                      sourceAttrId: '890519656560422912',
                                      _codePath: ['coreFlagName'],
                                      _idpath: ['6727147'],
                                    },
                                    {
                                      attrId: '7712785',
                                      code: 'msisdnHomeCity',
                                      name: '成员号码归属地',
                                      type: 'string',
                                      sort: { isSort: true },
                                      initialData: {
                                        type: 'static',
                                        value: '',
                                      },
                                      sourceAttrId: '888739201762070530',
                                      _codePath: ['msisdnHomeCity'],
                                      _idpath: ['7712785'],
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
                                      sourceAttrId: '888739201762070532',
                                      _codePath: ['homeCity'],
                                      _idpath: ['8138167'],
                                    },
                                    {
                                      attrId: '9217839',
                                      code: 'clientSign',
                                      name: '重要客户标识',
                                      type: 'string',
                                      sort: { isSort: true },
                                      initialData: {
                                        type: 'static',
                                        value: null,
                                      },
                                      sourceAttrId: '909684124516106240',
                                      _codePath: ['clientSign'],
                                      _idpath: ['9217839'],
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
                                      sourceAttrId: '886805849493164037',
                                      _codePath: ['groupLevelName'],
                                      _idpath: ['005597'],
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
                                      sourceAttrId: '888739201762070535',
                                      _codePath: ['department'],
                                      _idpath: ['037691'],
                                    },
                                    {
                                      attrId: '0734155',
                                      code: 'mainMeal',
                                      name: '主套餐',
                                      type: 'string',
                                      sort: { isSort: true },
                                      initialData: {
                                        type: 'static',
                                        value: null,
                                      },
                                      sourceAttrId: '909686709872914434',
                                      _codePath: ['mainMeal'],
                                      _idpath: ['0734155'],
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
                                    dataId: 167592308843606900,
                                    options: {
                                      compId: 'callSelfFunc',
                                      compName: 'system',
                                      id: '461006',
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
                                dataId: 167506447195330780,
                                options: {
                                  compId: 'callParentCustomFunc',
                                  compName: 'system',
                                  id: '31355613',
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
                eventDatagetTableSelectedKey10.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatagetTableSelectedKey10,
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
                id: 'StdUpload_4835215',
                uid: 'StdUpload_4835215',
                type: 'StdUpload',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
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
                const eventDatasetLoading61: any = [
                  {
                    type: 'setLoading',
                    dataId: 167698813394378880,
                    options: {
                      compId: 'Table_8700198',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Table',
                      id: '446395',
                      loading: true,
                    },
                    line_number: 1,
                  },
                ];
                eventDatasetLoading61.params =
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
                  eventDatasetLoading61,
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
                const eventDataapiRequest652: any = [
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
                                code: 'CLS_JC_0004_0002',
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
                                        dataId: 167642820701890460,
                                        children: [
                                          {
                                            dataName: 'callback',
                                            dataId: 167642820701804700,
                                            children: [
                                              {
                                                dataName: 'action',
                                                dataId: 167642820701809280,
                                                children: [
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 167642820701881060,
                                                    children: [],
                                                    value: 'callback1',
                                                    params: [],
                                                  },
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 167642820701895900,
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
                                                  id: '5049866',
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
                                            dataId: 167642820701810780,
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
                                          id: '7869004',
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
                                          newData: '$data_016273$',
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
                                        dataId: 170262937260864670,
                                        children: [
                                          {
                                            dataName: 'callback',
                                            dataId: 170262937260851870,
                                            children: [],
                                            value: 'callback1',
                                            params: [],
                                          },
                                          {
                                            dataName: 'callback',
                                            dataId: 170262937260815580,
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
                                          id: '135296',
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
                                    ],
                                    value: 'callback1',
                                    params: [],
                                  },
                                  {
                                    dataName: 'callback',
                                    dataId: 167642820701820350,
                                    children: [],
                                    value: 'callback2',
                                    params: [],
                                  },
                                ],
                                todoOptions: ['actionTitle', 'editorCode'],
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '016273',
                                  pageJsonId: '537892',
                                  code: 'function main(data,state,success,fail){var res=reply_144156.resultData||[];if(res.length<1){fail();return}var memberInfoList=data.MemberInfo||[];var finalList=memberInfoList.concat(res);console.log("finalList = ",finalList);data.MemberInfo=finalList;data.sceneSubmit.custMemberList=finalList;success()};',
                                },
                                actionObjId: 'customActionCode',
                                actionObjName: 'page',
                                value: 'customActionCode',
                                line_number: 5,
                              },
                              {
                                dataName: 'action',
                                dataId: 170262944164139650,
                                children: [],
                                todoOptions: ['valueArray'],
                                options: {
                                  compId: 'debug',
                                  compName: 'system',
                                  id: '253563',
                                  pageJsonId: '537892',
                                  value: ['测试是否修改有效'],
                                },
                                actionObjId: 'debug',
                                actionObjName: 'system',
                                value: 'console',
                                line_number: 9,
                              },
                            ],
                            condition: [],
                            callback: [
                              {
                                type: 'customActionCode',
                                dataId: 167642820700162530,
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '016273',
                                  pageJsonId: '537892',
                                  code: 'function main(data,state,success,fail){var res=reply_144156.resultData||[];if(res.length<1){fail();return}var memberInfoList=data.MemberInfo||[];var finalList=memberInfoList.concat(res);console.log("finalList = ",finalList);data.MemberInfo=finalList;data.sceneSubmit.custMemberList=finalList;success()};',
                                },
                                line_number: 5,
                                callback1: [
                                  {
                                    type: 'setDataSource',
                                    dataId: 167642820701890460,
                                    options: {
                                      compId: 'setDataSource',
                                      compName: 'page',
                                      id: '7869004',
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
                                      newData: '$data_016273$',
                                      operateType: 1,
                                      onlySetPatch: true,
                                      otherObjectArrayOptions: {},
                                    },
                                    line_number: 6,
                                    callback1: [
                                      {
                                        type: 'callSelfFunc',
                                        dataId: 167642820701809280,
                                        options: {
                                          compId: 'callSelfFunc',
                                          compName: 'system',
                                          id: '5049866',
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
                                    dataId: 170262937260864670,
                                    options: {
                                      compId: 'callParentCustomFunc',
                                      compName: 'system',
                                      id: '135296',
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
                                ],
                                callback2: [],
                              },
                              {
                                type: 'console',
                                dataId: 170262944164139650,
                                options: {
                                  compId: 'debug',
                                  compName: 'system',
                                  id: '253563',
                                  pageJsonId: '537892',
                                  value: ['测试是否修改有效'],
                                },
                                line_number: 9,
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
                        dataId: 167698814226621540,
                        options: {
                          compId: 'Table_8700198',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Table',
                          id: '4908711',
                          loading: false,
                        },
                        line_number: 10,
                      },
                    ],
                    callback2: [
                      {
                        type: 'setLoading',
                        dataId: 167817590090844800,
                        options: {
                          compId: 'Table_8700198',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Table',
                          id: '30557554',
                          loading: false,
                        },
                        line_number: 11,
                      },
                    ],
                  },
                ];
                eventDataapiRequest652.params =
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
                  eventDataapiRequest652,
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
                const eventDatacustomActionCode329: any = [
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
                eventDatacustomActionCode329.params =
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
                  eventDatacustomActionCode329,
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
              ref={(r: any) => refs.setComponentRef(r, 'StdUpload_4835215')}
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
                id: 'Button_050256',
                uid: 'Button_050256',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ width: 'fit-content', margin: '0px 8px 0px 8px' }}
              onClick={(e: any) => {
                const eventDataapiRequest653: any = [
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
                                code: 'CLS_JC_0004_0002',
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
                                code: '普通成员增减模板.xlsx',
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
                eventDataapiRequest653.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDataapiRequest653, { e }, 'apiRequest', {
                  id: 'apiRequest',
                  name: 'apiRequest',
                  type: 'apiRequest',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Button_050256')}
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
                id: 'Button_050256_034475',
                uid: 'Button_050256_034475',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ width: 'fit-content', margin: '0px 0px 0px 0px' }}
              onClick={(e: any) => {
                const eventDatagetTableSelected19: any = [
                  {
                    type: 'getTableSelected',
                    dataId: 167699543558915600,
                    shielding: true,
                    options: {
                      compId: 'Table_8700198',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Table',
                      id: '7982717',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'ifelse',
                        shielding: true,
                        condition: [
                          {
                            condId: '625432',
                            options: {
                              context: '$selectedRows_7982717$',
                              operate: 'notEmpty',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 167699543783170400,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 167699545868001250,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 167699547571814750,
                                children: [],
                                todoOptions: ['msgType', 'value'],
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '899909',
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
                            desc: '',
                            shielding: true,
                            callback: [
                              {
                                type: 'showMessage',
                                dataId: 167699547571814750,
                                shielding: true,
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '899909',
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
                            dataId: 167699545453592770,
                            shielding: true,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '6863',
                              pageJsonId: '537892',
                              code: 'function main(data,state,success,fail){var arr1=[];var arr2=[];var memberInfo=selectedRows_7982717;for(var i=0;i<memberInfo.length;i++){var info=memberInfo[i];{arr2.push({"name":"\\u64CD\\u4F5C\\u7C7B\\u578B","value":info.actionTypeName});arr2.push({"name":"\\u573A\\u666F\\u7C7B\\u578B","value":info.sceneTypeName});arr2.push({"name":"\\u624B\\u673A\\u53F7\\u7801","value":info.msisdn});arr2.push({"name":"\\u59D3\\u540D","value":info.name});arr2.push({"name":"\\u6210\\u5458\\u53F7\\u7801\\u5F52\\u5C5E\\u5730","value":info.msisdnomeCityName});arr2.push({"name":"\\u5BF9\\u8C61\\u7C7B\\u578B","value":info.objTypeName});arr2.push({"name":"\\u96C6\\u56E2\\u7F16\\u7801","value":info.groupId});arr2.push({"name":"\\u96C6\\u56E2\\u540D\\u79F0","value":info.groupName});arr2.push({"name":"\\u96C6\\u56E2\\u5F52\\u5C5E\\u5730","value":info.homeCityName});arr2.push({"name":"\\u6210\\u5458\\u7C7B\\u578B","value":info.memberTypeName});arr2.push({"name":"\\u884C\\u653F\\u7EA7\\u522B","value":info.officialLevelName});arr2.push({"name":"\\u5173\\u952E\\u4EBA\\u6807\\u8BC6","value":info.keyTypeName});arr2.push({"name":"\\u90AE\\u7BB1","value":info.email});arr2.push({"name":"\\u90E8\\u95E8","value":info.department});arr2.push({"name":"\\u6027\\u522B","value":info.genderName});arr2.push({"name":"\\u804C\\u52A1","value":info.duty});arr2.push({"name":"\\u5174\\u8DA3\\u7231\\u597D","value":info.hobby});arr2.push({"name":"\\u5C65\\u5386","value":info.record});arr2.push({"name":"\\u5907\\u6CE8","value":info.remark})}arr1.push(arr2);arr2=[]}success(JSON.stringify(arr1))};',
                            },
                            line_number: 3,
                            callback1: [
                              {
                                type: 'apiRequest',
                                dataId: 167699545453504060,
                                shielding: true,
                                options: {
                                  compId: 'apiRequest',
                                  compName: 'system',
                                  id: '8727496',
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
                                            type: ['context', '$data_6863$'],
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
                                    dataId: 167699545453576000,
                                    shielding: true,
                                    options: {
                                      compId: 'downloadByFileId',
                                      compName: 'system',
                                      id: '608611',
                                      pageJsonId: '537892',
                                      data: '$reply_8727496.resultData.fileId$',
                                    },
                                    line_number: 5,
                                  },
                                  {
                                    type: 'console',
                                    dataId: 167699545453528450,
                                    shielding: true,
                                    options: {
                                      compId: 'debug',
                                      compName: 'system',
                                      id: '482951',
                                      pageJsonId: '537892',
                                      value: [
                                        '文件导出成功回调值：',
                                        '$reply_8727496$',
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
                eventDatagetTableSelected19.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatagetTableSelected19,
                  { e },
                  'getTableSelected',
                  {
                    id: 'getTableSelected',
                    name: 'getTableSelected',
                    type: 'getTableSelected',
                    platform: 'pc',
                  },
                );
                const eventDatacustomActionCode330: any = [
                  {
                    type: 'customActionCode',
                    dataId: 167706816856435170,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '879836',
                      pageJsonId: '537892',
                      code: 'function main(data,state,success,fail){var arr1=[];var arr2=[];var memberInfo=data.MemberInfo;console.log("\\u6570\\u636E\\uFF1A",memberInfo);console.log("\\u957F\\u5EA6\\uFF1A",memberInfo.length);for(var i=0;i<memberInfo.length;i++){var info=memberInfo[i];{arr2.push({"name":"\\u64CD\\u4F5C\\u7C7B\\u578B","value":info.actionTypeName});arr2.push({"name":"\\u51ED\\u8BC1\\u7C7B\\u578B","value":info.sceneTypeName});arr2.push({"name":"\\u624B\\u673A\\u53F7\\u7801","value":info.msisdn});arr2.push({"name":"\\u59D3\\u540D","value":info.bossName});arr2.push({"name":"\\u4F7F\\u7528\\u4EBA\\u59D3\\u540D","value":info.name});arr2.push({"name":"\\u6210\\u5458\\u53F7\\u7801\\u5F52\\u5C5E\\u5730","value":info.msisdnHomeCityName});arr2.push({"name":"\\u5BF9\\u8C61\\u7C7B\\u578B","value":info.objTypeName});arr2.push({"name":"\\u96C6\\u56E2\\u7F16\\u7801","value":info.groupId});arr2.push({"name":"\\u96C6\\u56E2\\u540D\\u79F0","value":info.groupName});arr2.push({"name":"\\u96C6\\u56E2\\u5F52\\u5C5E\\u5730","value":info.homeCityName});arr2.push({"name":"\\u804C\\u52A1","value":info.duty});arr2.push({"name":"\\u884C\\u653F\\u7EA7\\u522B","value":info.officialLevelName});arr2.push({"name":"\\u7ECF\\u529E\\u6807\\u8BC6","value":info.keyTypeName});arr2.push({"name":"\\u6210\\u5458\\u7C7B\\u578B","value":info.memberTypeName});arr2.push({"name":"\\u90AE\\u7BB1","value":info.email});arr2.push({"name":"\\u6240\\u5C5E\\u90E8\\u95E8","value":info.department});arr2.push({"name":"\\u6027\\u522B","value":info.genderName})}arr1.push(arr2);arr2=[]}if(arr1.length>0){success(JSON.stringify(arr1))}else{fail()}};',
                    },
                    line_number: 8,
                    callback1: [
                      {
                        type: 'apiRequest',
                        dataId: 167706816856497400,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '80931519',
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
                                    type: ['context', '$data_879836$'],
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
                        line_number: 9,
                        callback1: [
                          {
                            type: 'downloadByFileId',
                            dataId: 167706816856401630,
                            options: {
                              compId: 'downloadByFileId',
                              compName: 'system',
                              id: '786192',
                              pageJsonId: '537892',
                              data: '$reply_80931519.resultData.fileId$',
                            },
                            line_number: 10,
                          },
                          {
                            type: 'console',
                            dataId: 167706816856409660,
                            options: {
                              compId: 'debug',
                              compName: 'system',
                              id: '208881',
                              pageJsonId: '537892',
                              value: [
                                '文件导出成功回调值：',
                                '$reply_80931519$',
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
                        dataId: 167713849515179200,
                        options: {
                          compId: 'showMessage',
                          compName: 'system',
                          id: '826577',
                          pageJsonId: '537892',
                          type: 'info',
                          value: '导出数据不能为空！',
                        },
                        line_number: 12,
                      },
                    ],
                  },
                ];
                eventDatacustomActionCode330.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatacustomActionCode330,
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
              ref={(r: any) => refs.setComponentRef(r, 'Button_050256_034475')}
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
                id: '091966',
                title: '使用人姓名',
                dataIndex: 'name',
                key: '091966',
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
                title: '对象类型',
                key: 'objTypeName',
                dataIndex: 'objTypeName',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '对象类型名称',
                      attrId: '890518166403903491',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                id: '411395',
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
                id: '199888',
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
                id: '156716',
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
                key: 'genderName',
                dataIndex: 'genderName',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '性别中文名',
                      attrId: '890518166403903493',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                id: '858253',
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
              const eventDatagetTableSelected20: any = [
                {
                  type: 'getTableSelected',
                  dataId: 167022168188970500,
                  options: {
                    compId: 'Table_8700198',
                    compLib: 'comm',
                    pageJsonId: '537892',
                    compName: 'Table',
                    id: '3982443',
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'showCustomModal',
                      dataId: 167022168471580930,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '058388',
                        pageJsonId: '537892',
                        modalname: '/member',
                        pageId: '888741696593555456',
                        paramsObj: {
                          memberInfo: '$row$',
                          catalogCode: '$state.catalogCode$',
                          lanId: '$state.lanId$',
                          isCoreFlag: '0',
                          staffCode: '$state.staffCode$',
                          selectOptionsData: '$data.selectOptionsData$',
                          zoneCode: '$state.zoneCode$',
                          orderNbr: '$state.fileInstNbr$',
                        },
                        paramsObjKeyValueMap: {
                          memberInfo: '$row$',
                          catalogCode: '$state.catalogCode$',
                          lanId: '$state.lanId$',
                          isCoreFlag: '0',
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
                          dataId: 167022168471569020,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '4812897',
                            pageJsonId: '537892',
                            code: 'function main(data,state,success,fail){console.log("data.MemberInfo",data.MemberInfo);data.MemberInfo=data.MemberInfo.filter(function(v){return v.rowId!=okData_058388.rowId});data.MemberInfo.push(okData_058388);data.sceneSubmit.custMemberList=data.MemberInfo;success(data.MemberInfo)};',
                          },
                          line_number: 3,
                          callback1: [
                            {
                              type: 'setDataSource',
                              dataId: 167022168471587460,
                              options: {
                                compId: 'setDataSource',
                                compName: 'page',
                                id: '466345',
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
                                    sourceAttrId: '886805849493164032',
                                    _codePath: ['msisdn'],
                                    _idpath: ['4823123'],
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
                                    sourceAttrId: '886805849493164033',
                                    _codePath: ['memberJoinDate'],
                                    _idpath: ['134739'],
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
                                    sourceAttrId: '886805849493164034',
                                    _codePath: ['groupId'],
                                    _idpath: ['58013'],
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
                                    sourceAttrId: '886805849493164035',
                                    _codePath: ['groupName'],
                                    _idpath: ['2030545'],
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
                                    sourceAttrId: '886805849493164037',
                                    _codePath: ['groupLevelName'],
                                    _idpath: ['005597'],
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
                                    sourceAttrId: '886805849493164038',
                                    _codePath: ['statusName'],
                                    _idpath: ['149127'],
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
                                    sourceAttrId: '886805849493164039',
                                    _codePath: ['memberType'],
                                    _idpath: ['716457'],
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
                                    sourceAttrId: '886805849493164040',
                                    _codePath: ['officialLevel'],
                                    _idpath: ['54181'],
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
                                    sourceAttrId: '886805849493164041',
                                    _codePath: ['keyType'],
                                    _idpath: ['244475'],
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
                                    sourceAttrId: '886805849493164042',
                                    _codePath: ['duty'],
                                    _idpath: ['355331'],
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
                                    sourceAttrId: '886805849493164043',
                                    _codePath: ['cutOffTime'],
                                    _idpath: ['8583146'],
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
                                    sourceAttrId: '886805849493164044',
                                    _codePath: ['noDisturbScope'],
                                    _idpath: ['82682'],
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
                                    sourceAttrId: '886812890047664128',
                                    _codePath: ['name'],
                                    _idpath: ['231866'],
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
                                    sourceAttrId: '886815549731328000',
                                    _codePath: ['tradeclassTop'],
                                    _idpath: ['231046'],
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
                                    sourceAttrId: '886864173638352896',
                                    _codePath: ['customerId'],
                                    _idpath: ['170299'],
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
                                    sourceAttrId: '886864173638352897',
                                    _codePath: ['supervise'],
                                    _idpath: ['360409'],
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
                                    sourceAttrId: '887280289602863104',
                                    _codePath: ['keyTypeName'],
                                    _idpath: ['1046582'],
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
                                    sourceAttrId: '887280289602863105',
                                    _codePath: ['memberTypeName'],
                                    _idpath: ['6475557'],
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
                                    sourceAttrId: '887280289602863106',
                                    _codePath: ['officialLevelName'],
                                    _idpath: ['788913'],
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
                                    sourceAttrId: '887639661394923520',
                                    _codePath: ['tradeclassTopName'],
                                    _idpath: ['766652'],
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
                                    sourceAttrId: '887684753073770496',
                                    _codePath: ['rowId'],
                                    _idpath: ['824624'],
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
                                    sourceAttrId: '888739201762070536',
                                    _codePath: ['remark'],
                                    _idpath: ['42604'],
                                  },
                                  {
                                    attrId: '60656',
                                    code: 'netInTime',
                                    name: '入网时间',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    sourceAttrId: '909686709872914432',
                                    _codePath: ['netInTime'],
                                    _idpath: ['60656'],
                                  },
                                  {
                                    attrId: '351828',
                                    code: 'sceneType',
                                    name: '场景类型',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                    sourceAttrId: '888739201762070529',
                                    _codePath: ['sceneType'],
                                    _idpath: ['351828'],
                                  },
                                  {
                                    attrId: '396255',
                                    code: 'coreFlag',
                                    name: '是否重要成员',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                    sourceAttrId: '888741322830737408',
                                    _codePath: ['coreFlag'],
                                    _idpath: ['396255'],
                                  },
                                  {
                                    attrId: '446451',
                                    code: 'record',
                                    name: '履历',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    sourceAttrId: '917342493400453121',
                                    _codePath: ['record'],
                                    _idpath: ['446451'],
                                  },
                                  {
                                    attrId: '450522',
                                    code: 'contractNum',
                                    name: '未到期合约数量',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    sourceAttrId: '909686709872914433',
                                    _codePath: ['contractNum'],
                                    _idpath: ['450522'],
                                  },
                                  {
                                    attrId: '547764',
                                    code: 'actionType',
                                    name: '操作类型',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                    sourceAttrId: '888739201762070528',
                                    _codePath: ['actionType'],
                                    _idpath: ['547764'],
                                  },
                                  {
                                    attrId: '595481',
                                    code: 'termType',
                                    name: '终端类型',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    sourceAttrId: '909686709872914436',
                                    _codePath: ['termType'],
                                    _idpath: ['595481'],
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
                                    sourceAttrId: '890518166403903488',
                                    _codePath: ['actionTypeName'],
                                    _idpath: ['666725'],
                                  },
                                  {
                                    attrId: '677663',
                                    code: 'onceDisc',
                                    name: '主套餐一次折扣',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    sourceAttrId: '909686709872914435',
                                    _codePath: ['onceDisc'],
                                    _idpath: ['677663'],
                                  },
                                  {
                                    attrId: '688676',
                                    code: 'objType',
                                    name: '对象类型',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                    sourceAttrId: '888739201762070531',
                                    _codePath: ['objType'],
                                    _idpath: ['688676'],
                                  },
                                  {
                                    attrId: '756812',
                                    code: 'arpuValue',
                                    name: '近三个月ARPU值',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    sourceAttrId: '909686709872914438',
                                    _codePath: ['arpuValue'],
                                    _idpath: ['756812'],
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
                                    sourceAttrId: '890518166403903491',
                                    _codePath: ['objTypeName'],
                                    _idpath: ['845038'],
                                  },
                                  {
                                    attrId: '850205',
                                    code: 'termModel',
                                    name: '终端型号',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    sourceAttrId: '909686709872914437',
                                    _codePath: ['termModel'],
                                    _idpath: ['850205'],
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
                                    sourceAttrId: '890518166403903492',
                                    _codePath: ['homeCityName'],
                                    _idpath: ['866365'],
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
                                    sourceAttrId: '888739201762070533',
                                    _codePath: ['email'],
                                    _idpath: ['867706'],
                                  },
                                  {
                                    attrId: '963984',
                                    code: 'interestTypeName',
                                    name: '兴趣爱好',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    sourceAttrId: '917342493400453120',
                                    _codePath: ['interestTypeName'],
                                    _idpath: ['963984'],
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
                                    sourceAttrId: '890518166403903489',
                                    _codePath: ['sceneTypeName'],
                                    _idpath: ['2575794'],
                                  },
                                  {
                                    attrId: '3143007',
                                    code: 'managerName',
                                    name: '看管人员',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    sourceAttrId: '953248498772557824',
                                    _codePath: ['managerName'],
                                    _idpath: ['3143007'],
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
                                    sourceAttrId: '888739201762070534',
                                    _codePath: ['gender'],
                                    _idpath: ['4067448'],
                                  },
                                  {
                                    attrId: '5236663',
                                    code: 'msisdnHomeCityName',
                                    name: '号码归属地名称',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    sourceAttrId: '890518166403903490',
                                    _codePath: ['msisdnHomeCityName'],
                                    _idpath: ['5236663'],
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
                                    sourceAttrId: '890518166403903493',
                                    _codePath: ['genderName'],
                                    _idpath: ['5803486'],
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
                                    sourceAttrId: '890519656560422912',
                                    _codePath: ['coreFlagName'],
                                    _idpath: ['6727147'],
                                  },
                                  {
                                    attrId: '7712785',
                                    code: 'msisdnHomeCity',
                                    name: '成员号码归属地',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                    sourceAttrId: '888739201762070530',
                                    _codePath: ['msisdnHomeCity'],
                                    _idpath: ['7712785'],
                                  },
                                  {
                                    attrId: '8138167',
                                    code: 'homeCity',
                                    name: '集团归属地',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                    sourceAttrId: '888739201762070532',
                                    _codePath: ['homeCity'],
                                    _idpath: ['8138167'],
                                  },
                                  {
                                    attrId: '9217839',
                                    code: 'clientSign',
                                    name: '重要客户标识',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    sourceAttrId: '909684124516106240',
                                    _codePath: ['clientSign'],
                                    _idpath: ['9217839'],
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
                                    sourceAttrId: '888739201762070535',
                                    _codePath: ['department'],
                                    _idpath: ['037691'],
                                  },
                                  {
                                    attrId: '0734155',
                                    code: 'mainMeal',
                                    name: '主套餐',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    sourceAttrId: '909686709872914434',
                                    _codePath: ['mainMeal'],
                                    _idpath: ['0734155'],
                                  },
                                ],
                                operateType: 3,
                                onlySetPatch: true,
                                otherObjectArrayOptions: {},
                                newData: '$data_4812897$',
                              },
                              line_number: 4,
                              callback1: [
                                {
                                  type: 'callSelfFunc',
                                  dataId: 167592282663747330,
                                  options: {
                                    compId: 'callSelfFunc',
                                    compName: 'system',
                                    id: '941526',
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
                              dataId: 167022168471566430,
                              options: {
                                compId: 'callParentCustomFunc',
                                compName: 'system',
                                id: '418389',
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
              eventDatagetTableSelected20.params =
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
                eventDatagetTableSelected20,
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
            ref={(r: any) => refs.setComponentRef(r, 'Table_8700198')}
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
                id: '149387',
                title: '使用人姓名',
                dataIndex: 'name',
                key: '149387',
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
                title: '对象类型',
                key: 'objTypeName',
                dataIndex: 'objTypeName',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '对象类型名称',
                      attrId: '890518166403903491',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                id: '411395',
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
                id: '199888',
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
                id: '156716',
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
                key: 'genderName',
                dataIndex: 'genderName',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '性别中文名',
                      attrId: '890518166403903493',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                id: '858253',
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
              id: 'Table_8700198_829382',
              uid: 'Table_8700198_829382',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={false}
            readOnly={false}
            style={{ margin: '10px 0px 10px 0px' }}
            onRowEdit={(rowId: any, row: any, index: any) => {
              const eventDatagetTableSelected21: any = [
                {
                  type: 'getTableSelected',
                  dataId: 167022168188970500,
                  options: {
                    compId: 'Table_8700198_829382',
                    compLib: 'comm',
                    pageJsonId: '537892',
                    compName: 'Table',
                    id: '3982443',
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'showCustomModal',
                      dataId: 167022168471580930,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '058388',
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
                          dataId: 167022168471569020,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '4812897',
                            pageJsonId: '537892',
                            code: 'function main(data,state,success,fail){data.MemberInfo=data.MemberInfo.filter(function(v){return v.rowId!=okData_058388.rowId});data.MemberInfo.push(okData_058388);data.sceneSubmit.custMemberList=data.MemberInfo;success(data.MemberInfo)};',
                          },
                          line_number: 3,
                          callback1: [
                            {
                              type: 'setDataSource',
                              dataId: 167022168471587460,
                              options: {
                                compId: 'setDataSource',
                                compName: 'page',
                                id: '466345',
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
                                    sourceAttrId: '886805849493164032',
                                    _codePath: ['msisdn'],
                                    _idpath: ['4823123'],
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
                                    sourceAttrId: '886805849493164033',
                                    _codePath: ['memberJoinDate'],
                                    _idpath: ['134739'],
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
                                    sourceAttrId: '886805849493164034',
                                    _codePath: ['groupId'],
                                    _idpath: ['58013'],
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
                                    sourceAttrId: '886805849493164035',
                                    _codePath: ['groupName'],
                                    _idpath: ['2030545'],
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
                                    sourceAttrId: '886805849493164037',
                                    _codePath: ['groupLevelName'],
                                    _idpath: ['005597'],
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
                                    sourceAttrId: '886805849493164038',
                                    _codePath: ['statusName'],
                                    _idpath: ['149127'],
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
                                    sourceAttrId: '886805849493164039',
                                    _codePath: ['memberType'],
                                    _idpath: ['716457'],
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
                                    sourceAttrId: '886805849493164040',
                                    _codePath: ['officialLevel'],
                                    _idpath: ['54181'],
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
                                    sourceAttrId: '886805849493164041',
                                    _codePath: ['keyType'],
                                    _idpath: ['244475'],
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
                                    sourceAttrId: '886805849493164042',
                                    _codePath: ['duty'],
                                    _idpath: ['355331'],
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
                                    sourceAttrId: '886805849493164043',
                                    _codePath: ['cutOffTime'],
                                    _idpath: ['8583146'],
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
                                    sourceAttrId: '886805849493164044',
                                    _codePath: ['noDisturbScope'],
                                    _idpath: ['82682'],
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
                                    sourceAttrId: '886812890047664128',
                                    _codePath: ['name'],
                                    _idpath: ['231866'],
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
                                    sourceAttrId: '886815549731328000',
                                    _codePath: ['tradeclassTop'],
                                    _idpath: ['231046'],
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
                                    sourceAttrId: '886864173638352896',
                                    _codePath: ['customerId'],
                                    _idpath: ['170299'],
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
                                    sourceAttrId: '886864173638352897',
                                    _codePath: ['supervise'],
                                    _idpath: ['360409'],
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
                                    sourceAttrId: '887280289602863104',
                                    _codePath: ['keyTypeName'],
                                    _idpath: ['1046582'],
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
                                    sourceAttrId: '887280289602863105',
                                    _codePath: ['memberTypeName'],
                                    _idpath: ['6475557'],
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
                                    sourceAttrId: '887280289602863106',
                                    _codePath: ['officialLevelName'],
                                    _idpath: ['788913'],
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
                                    sourceAttrId: '887639661394923520',
                                    _codePath: ['tradeclassTopName'],
                                    _idpath: ['766652'],
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
                                    sourceAttrId: '887684753073770496',
                                    _codePath: ['rowId'],
                                    _idpath: ['824624'],
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
                                    sourceAttrId: '888739201762070536',
                                    _codePath: ['remark'],
                                    _idpath: ['42604'],
                                  },
                                  {
                                    attrId: '60656',
                                    code: 'netInTime',
                                    name: '入网时间',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    sourceAttrId: '909686709872914432',
                                    _codePath: ['netInTime'],
                                    _idpath: ['60656'],
                                  },
                                  {
                                    attrId: '351828',
                                    code: 'sceneType',
                                    name: '场景类型',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                    sourceAttrId: '888739201762070529',
                                    _codePath: ['sceneType'],
                                    _idpath: ['351828'],
                                  },
                                  {
                                    attrId: '396255',
                                    code: 'coreFlag',
                                    name: '是否重要成员',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                    sourceAttrId: '888741322830737408',
                                    _codePath: ['coreFlag'],
                                    _idpath: ['396255'],
                                  },
                                  {
                                    attrId: '446451',
                                    code: 'record',
                                    name: '履历',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    sourceAttrId: '917342493400453121',
                                    _codePath: ['record'],
                                    _idpath: ['446451'],
                                  },
                                  {
                                    attrId: '450522',
                                    code: 'contractNum',
                                    name: '未到期合约数量',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    sourceAttrId: '909686709872914433',
                                    _codePath: ['contractNum'],
                                    _idpath: ['450522'],
                                  },
                                  {
                                    attrId: '547764',
                                    code: 'actionType',
                                    name: '操作类型',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                    sourceAttrId: '888739201762070528',
                                    _codePath: ['actionType'],
                                    _idpath: ['547764'],
                                  },
                                  {
                                    attrId: '595481',
                                    code: 'termType',
                                    name: '终端类型',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    sourceAttrId: '909686709872914436',
                                    _codePath: ['termType'],
                                    _idpath: ['595481'],
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
                                    sourceAttrId: '890518166403903488',
                                    _codePath: ['actionTypeName'],
                                    _idpath: ['666725'],
                                  },
                                  {
                                    attrId: '677663',
                                    code: 'onceDisc',
                                    name: '主套餐一次折扣',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    sourceAttrId: '909686709872914435',
                                    _codePath: ['onceDisc'],
                                    _idpath: ['677663'],
                                  },
                                  {
                                    attrId: '688676',
                                    code: 'objType',
                                    name: '对象类型',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                    sourceAttrId: '888739201762070531',
                                    _codePath: ['objType'],
                                    _idpath: ['688676'],
                                  },
                                  {
                                    attrId: '756812',
                                    code: 'arpuValue',
                                    name: '近三个月ARPU值',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    sourceAttrId: '909686709872914438',
                                    _codePath: ['arpuValue'],
                                    _idpath: ['756812'],
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
                                    sourceAttrId: '890518166403903491',
                                    _codePath: ['objTypeName'],
                                    _idpath: ['845038'],
                                  },
                                  {
                                    attrId: '850205',
                                    code: 'termModel',
                                    name: '终端型号',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    sourceAttrId: '909686709872914437',
                                    _codePath: ['termModel'],
                                    _idpath: ['850205'],
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
                                    sourceAttrId: '890518166403903492',
                                    _codePath: ['homeCityName'],
                                    _idpath: ['866365'],
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
                                    sourceAttrId: '888739201762070533',
                                    _codePath: ['email'],
                                    _idpath: ['867706'],
                                  },
                                  {
                                    attrId: '963984',
                                    code: 'interestTypeName',
                                    name: '兴趣爱好',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    sourceAttrId: '917342493400453120',
                                    _codePath: ['interestTypeName'],
                                    _idpath: ['963984'],
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
                                    sourceAttrId: '890518166403903489',
                                    _codePath: ['sceneTypeName'],
                                    _idpath: ['2575794'],
                                  },
                                  {
                                    attrId: '3143007',
                                    code: 'managerName',
                                    name: '看管人员',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    sourceAttrId: '953248498772557824',
                                    _codePath: ['managerName'],
                                    _idpath: ['3143007'],
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
                                    sourceAttrId: '888739201762070534',
                                    _codePath: ['gender'],
                                    _idpath: ['4067448'],
                                  },
                                  {
                                    attrId: '5236663',
                                    code: 'msisdnHomeCityName',
                                    name: '号码归属地名称',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    sourceAttrId: '890518166403903490',
                                    _codePath: ['msisdnHomeCityName'],
                                    _idpath: ['5236663'],
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
                                    sourceAttrId: '890518166403903493',
                                    _codePath: ['genderName'],
                                    _idpath: ['5803486'],
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
                                    sourceAttrId: '890519656560422912',
                                    _codePath: ['coreFlagName'],
                                    _idpath: ['6727147'],
                                  },
                                  {
                                    attrId: '7712785',
                                    code: 'msisdnHomeCity',
                                    name: '成员号码归属地',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                    sourceAttrId: '888739201762070530',
                                    _codePath: ['msisdnHomeCity'],
                                    _idpath: ['7712785'],
                                  },
                                  {
                                    attrId: '8138167',
                                    code: 'homeCity',
                                    name: '集团归属地',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: { type: 'static', value: '' },
                                    sourceAttrId: '888739201762070532',
                                    _codePath: ['homeCity'],
                                    _idpath: ['8138167'],
                                  },
                                  {
                                    attrId: '9217839',
                                    code: 'clientSign',
                                    name: '重要客户标识',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    sourceAttrId: '909684124516106240',
                                    _codePath: ['clientSign'],
                                    _idpath: ['9217839'],
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
                                    sourceAttrId: '888739201762070535',
                                    _codePath: ['department'],
                                    _idpath: ['037691'],
                                  },
                                  {
                                    attrId: '0734155',
                                    code: 'mainMeal',
                                    name: '主套餐',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: {
                                      type: 'static',
                                      value: null,
                                    },
                                    sourceAttrId: '909686709872914434',
                                    _codePath: ['mainMeal'],
                                    _idpath: ['0734155'],
                                  },
                                ],
                                operateType: 3,
                                onlySetPatch: true,
                                otherObjectArrayOptions: {},
                                newData: '$data_4812897$',
                              },
                              line_number: 4,
                              callback1: [],
                              callback2: [],
                            },
                            {
                              type: 'callParentCustomFunc',
                              dataId: 167022168471566430,
                              options: {
                                compId: 'callParentCustomFunc',
                                compName: 'system',
                                id: '418389',
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
              eventDatagetTableSelected21.params =
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
                eventDatagetTableSelected21,
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
              const eventDatashowCustomModal10: any = [
                {
                  type: 'showCustomModal',
                  dataId: 170140257591978200,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '526044',
                    pageJsonId: '537892',
                    modalname: '/member',
                    pageId: '888741696593555456',
                    modalPath: '/member',
                    paramsObj: {
                      feeInfo: '$row$',
                      catalogCode: '$state.catalogCode$',
                      isDetails: 'true',
                      memberInfo: '$row$',
                      lanId: '$state.lanId$',
                      staffCode: '$state.staffCode$',
                      selectOptionsData: '$data.selectOptionsData$',
                      zoneCode: '$state.zoneCode$',
                    },
                    paramsObjKeyValueMap: {
                      feeInfo: '$row$',
                      catalogCode: '$state.catalogCode$',
                      isDetails: 'true',
                      memberInfo: '$row$',
                      lanId: '$state.lanId$',
                      staffCode: '$state.staffCode$',
                      selectOptionsData: '$data.selectOptionsData$',
                      zoneCode: '$state.zoneCode$',
                    },
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'customActionCode',
                      dataId: 170140257591912700,
                      shielding: true,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '853875',
                        pageJsonId: '537892',
                        code: 'function main(data,state,success,fail){data.feeInfo=data.feeInfo.filter(function(v){return v.rowId!=okData_526044.rowId});data.feeInfo.push(okData_526044);var instList=[];for(var key in okData_526044){if(key!="rowId"&&key!="marketList"){instList.push({"attrCode":key,"attrName":"","attrValue":okData_526044[key]})}if(key=="marketList"){instList.push({"attrCode":key,"attrName":"","attrValue":JSON.stringify(okData_526044[key])})}}var instObj={"instCode":okData_526044.rowId,"instAttrList":instList};data.sceneSubmit.instList=data.sceneSubmit.instList.filter(function(v){return v.instCode!=okData_526044.rowId});data.sceneSubmit.instList.push(instObj);success()};',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'callParentCustomFunc',
                          dataId: 170140257591918000,
                          shielding: true,
                          options: {
                            compId: 'callParentCustomFunc',
                            compName: 'system',
                            id: '660598',
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
              eventDatashowCustomModal10.params =
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
                eventDatashowCustomModal10,
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
            ref={(r: any) => refs.setComponentRef(r, 'Table_8700198_829382')}
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
            formCode={'Form_345819'}
            genRuleType={'key'}
            formType={'normal'}
            relationDataSource={data?.factorForm}
            busiObjectId={''}
            $$componentItem={{
              id: 'Form_345819',
              uid: 'Form_345819',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            onValuesChange={(changedFieldName: any, changedValue: any) => {
              const eventDatasetDataSource36: any = [
                {
                  type: 'setDataSource',
                  dataId: 167049067361341500,
                  options: {
                    compId: 'setDataSource',
                    compName: 'page',
                    id: '96762',
                    pageJsonId: '537892',
                    dataSourceId: 167049030475764160,
                    dataSourceName: 'factorForm',
                    dataSourceRelType: 'custom',
                    dataSourceReloadFilter: [],
                    dataSourceSetValue: [
                      {
                        attrId: '417081',
                        code: 'reason',
                        name: '申请原因',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_345819', 'getFieldsValue'],
                          code: 'reason',
                        },
                        showInput: true,
                        _codePath: ['reason'],
                        _idpath: ['417081'],
                      },
                      {
                        attrId: '138061',
                        code: 'acceptResultDesc',
                        name: '属性',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['acceptResultDesc'],
                        _idpath: ['138061'],
                      },
                      {
                        attrId: '302534',
                        code: 'acceptResult',
                        name: '属性',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['acceptResult'],
                        _idpath: ['302534'],
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
                      dataId: 167049070606043870,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '971403',
                        pageJsonId: '537892',
                        code: 'function main(data,state,success,fail){var attrList=[];var obj=data.factorForm;for(var key in obj){attrList.push({"attrCode":key,"attrName":"","attrValue":obj[key]})}data.sceneSubmit.attrList=attrList;success(attrList)};',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'callParentCustomFunc',
                          dataId: 167049072087661540,
                          options: {
                            compId: 'callParentCustomFunc',
                            compName: 'system',
                            id: '7858454',
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
              eventDatasetDataSource36.params =
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
                eventDatasetDataSource36,
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
            ref={(r: any) => refs.setComponentRef(r, 'Form_345819')}
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
                '目前已合作XX业务等，为更好提供集团服务，近期通过外呼/通讯录收集/经办人处了解/上门拜访等方式收集夯实集团成员信息，现有XX户成员拟纳入该集团成员管理成员类型均为一线员工'
              }
              value={data?.factorForm?.reason}
              $$componentItem={{
                id: 'TextArea_009045',
                uid: 'TextArea_009045',
                type: 'TextArea',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'TextArea_009045')}
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
                id: 'Form_395851_1727917_9692158_9612234_1000722',
                uid: 'Form_395851_1727917_9692158_9612234_1000722',
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
                  'Form_395851_1727917_9692158_9612234_1000722',
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
                defaultValue={'0'}
                $$componentItem={{
                  id: 'Input_690228_5400337_280051_232429_7501497',
                  uid: 'Input_690228_5400337_280051_232429_7501497',
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
                    'Input_690228_5400337_280051_232429_7501497',
                  )
                }
                {...injectData}
              />
              <View
                className="View_View_22346374_875512_926873_4359147_729981"
                name={'布局容器'}
                labelCol={8}
                wrapperCol={16}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_22346374_875512_926873_4359147_729981',
                  uid: 'View_22346374_875512_926873_4359147_729981',
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
                    'View_22346374_875512_926873_4359147_729981',
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
                    id: 'StdUpload_6230546_867413_538179_36057857_3505279',
                    uid: 'StdUpload_6230546_867413_538179_36057857_3505279',
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
                    const eventDatagetSelectedData46: any = [
                      {
                        type: 'getSelectedData',
                        dataId: 166521847771133400,
                        options: {
                          compId: 'Input_690228_5400337_280051_232429_7501497',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Select',
                          id: '723236',
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'setDataSource',
                            dataId: 166521848153409470,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '3978006',
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
                                    code: '$selectedData_723236[0].value$',
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
                                    code: '$selectedData_723236[0].label$',
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
                                dataId: 166521848153432260,
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '469213',
                                  pageJsonId: '537892',
                                  code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=data.fileInfoList;success(data.sceneSubmit)};',
                                },
                                line_number: 3,
                                callback1: [
                                  {
                                    type: 'console',
                                    dataId: 166521848153483550,
                                    options: {
                                      compId: 'debug',
                                      compName: 'system',
                                      id: '8140861',
                                      pageJsonId: '537892',
                                      value: ['$data_469213$'],
                                    },
                                    line_number: 4,
                                  },
                                  {
                                    type: 'callParentCustomFunc',
                                    dataId: 166521848153489440,
                                    options: {
                                      compId: 'callParentCustomFunc',
                                      compName: 'system',
                                      id: '2711304',
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
                            dataId: 166521848639856160,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '062205',
                              pageJsonId: '537892',
                              type: 'error',
                              value: '请选择附件类型',
                            },
                            line_number: 6,
                          },
                        ],
                      },
                    ];
                    eventDatagetSelectedData46.params =
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
                      eventDatagetSelectedData46,
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
                    const eventDatacustomActionCode332: any = [
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
                    eventDatacustomActionCode332.params =
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
                      eventDatacustomActionCode332,
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
                      'StdUpload_6230546_867413_538179_36057857_3505279',
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
              const eventDatacustomActionCode333: any = [
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
              eventDatacustomActionCode333.params =
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
                eventDatacustomActionCode333,
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
              const eventDatadownloadByFileId8: any = [
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
              eventDatadownloadByFileId8.params =
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
                eventDatadownloadByFileId8,
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
        ref={(r: any) => refs.setComponentRef(r, 'BOFramer_231933')}
        {...injectData}
      />
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
          id: 'Card_96501',
          uid: 'Card_96501',
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
        ref={(r: any) => refs.setComponentRef(r, 'Card_96501')}
        {...injectData}
      >
        <VerticalView
          name={'上下布局'}
          $$componentItem={{
            id: 'VerticalView_0188413',
            uid: 'VerticalView_0188413',
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
          ref={(r: any) => refs.setComponentRef(r, 'VerticalView_0188413')}
          {...injectData}
        >
          <View
            className="View_View_253779"
            name={'布局容器'}
            $$componentItem={{
              id: 'View_253779',
              uid: 'View_253779',
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
            ref={(r: any) => refs.setComponentRef(r, 'View_253779')}
            {...injectData}
          >
            <HorizontalView
              name={'左右布局'}
              $$componentItem={{
                id: 'HorizontalView_797878',
                uid: 'HorizontalView_797878',
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
              ref={(r: any) => refs.setComponentRef(r, 'HorizontalView_797878')}
              {...injectData}
            >
              <View
                className="View_View_950336"
                name={'布局容器'}
                $$componentItem={{
                  id: 'View_950336',
                  uid: 'View_950336',
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
                ref={(r: any) => refs.setComponentRef(r, 'View_950336')}
                {...injectData}
              >
                <VerticalView
                  name={'上下布局'}
                  $$componentItem={{
                    id: 'VerticalView_840796',
                    uid: 'VerticalView_840796',
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
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'VerticalView_840796')
                  }
                  {...injectData}
                >
                  <View
                    className="View_View_094015"
                    name={'布局容器'}
                    $$componentItem={{
                      id: 'View_094015',
                      uid: 'View_094015',
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
                    ref={(r: any) => refs.setComponentRef(r, 'View_094015')}
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
                        id: 'Input_871996',
                        uid: 'Input_871996',
                        type: 'Input',
                        ...componentItem,
                      }}
                      disabled={true}
                      visible={true}
                      readOnly={false}
                      ref={(r: any) => refs.setComponentRef(r, 'Input_871996')}
                      {...injectData}
                    />
                  </View>
                  <View
                    className="View_View_149518"
                    name={'布局容器'}
                    $$componentItem={{
                      id: 'View_149518',
                      uid: 'View_149518',
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
                    ref={(r: any) => refs.setComponentRef(r, 'View_149518')}
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
                        id: 'Text_5110674',
                        uid: 'Text_5110674',
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
                      ref={(r: any) => refs.setComponentRef(r, 'Text_5110674')}
                      {...injectData}
                    />
                  </View>
                </VerticalView>
              </View>
              <View
                className="View_View_792636"
                name={'布局容器'}
                $$componentItem={{
                  id: 'View_792636',
                  uid: 'View_792636',
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
                ref={(r: any) => refs.setComponentRef(r, 'View_792636')}
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
                    id: 'Button_18036',
                    uid: 'Button_18036',
                    type: 'Button',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={false}
                  readOnly={false}
                  style={{ width: 'fit-content' }}
                  onClick={(e: any) => {
                    const eventDataapiRequest654: any = [
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
                                  dataSourceId: 167049030475764160,
                                  dataSourceName: 'factorForm',
                                  dataSourceRelType: 'custom',
                                  dataSourceSetValue: [
                                    {
                                      attrId: '417081',
                                      code: 'reason',
                                      name: '申请原因',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: true,
                                    },
                                    {
                                      attrId: '302534',
                                      code: 'acceptResult',
                                      name: '属性',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      showInput: true,
                                    },
                                    {
                                      attrId: '138061',
                                      code: 'acceptResultDesc',
                                      name: '属性',
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
                    eventDataapiRequest654.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(eventDataapiRequest654, { e }, 'apiRequest', {
                      id: 'apiRequest',
                      name: 'apiRequest',
                      type: 'apiRequest',
                      platform: 'pc',
                    });
                  }}
                  ref={(r: any) => refs.setComponentRef(r, 'Button_18036')}
                  {...injectData}
                />
              </View>
            </HorizontalView>
          </View>
          <View
            className="View_View_407433"
            name={'布局容器'}
            $$componentItem={{
              id: 'View_407433',
              uid: 'View_407433',
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
            ref={(r: any) => refs.setComponentRef(r, 'View_407433')}
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
                id: 'Table_042984',
                uid: 'Table_042984',
                type: 'Table',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              ref={(r: any) => refs.setComponentRef(r, 'Table_042984')}
              {...injectData}
            />
          </View>
        </VerticalView>
      </Card>
    </div>
  );
};

export default withPageHOC(ClsJc_0004_0002$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
