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
  StdUpload,
  Table,
  TextArea,
  Select,
  Card,
  VerticalView,
  Text,
} from '@/components/factory';

import BusiComp0521965 from '@/components/BusiComp0521965';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '886795395387576320';
const ClsJc_0004_0001$$Page: React.FC<PageProps> = ({
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
  const fileUpload = (options_1284577: any) => {
    const eventDatacustomActionCode72: any = [
      {
        type: 'customActionCode',
        dataId: 167282111386911650,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '713847',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=options_1284577;success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'callParentCustomFunc',
            dataId: 167282113537361950,
            options: {
              compId: 'callParentCustomFunc',
              compName: 'system',
              id: '13342',
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
    eventDatacustomActionCode72.params =
      [
        {
          title: '事件入参',
          name: 'options_1284577',
          value: '$options_1284577$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode72,
      { options_1284577 },
      'customActionCode',
      {
        id: 'customActionCode',
        name: 'customActionCode',
        type: 'customActionCode',
        platform: 'undefined',
      },
    );
  };
  const updateTitle = (options_0883253: any) => {
    const eventDatacustomActionCode73: any = [
      {
        type: 'customActionCode',
        dataId: 167592319016545730,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '023407',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){console.log("data.MemberInfo",data.MemberInfo);var _value="";if(data.MemberInfo.length>0){_value=data.MemberInfo[0].groupName}success({catalogCode:"CLS_JC_0004_0001",value:_value})};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'callParentCustomFunc',
            dataId: 167592319016546500,
            options: {
              compId: 'callParentCustomFunc',
              compName: 'system',
              id: '1663903',
              pageJsonId: '537892',
              pathname: '/auditOrderPrepare',
              pageId: '884045146848604160',
              customFuncName: 'updateTitleJC0004',
              customFuncParams: '$data_023407$',
            },
            line_number: 2,
            callback1: [],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode73.params =
      [
        {
          title: '事件入参',
          name: 'options_0883253',
          value: '$options_0883253$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode73,
      { options_0883253 },
      'customActionCode',
      {
        id: 'customActionCode',
        name: 'customActionCode',
        type: 'customActionCode',
        platform: 'undefined',
      },
    );
  };
  const getSelectOptionsData = (options_131109: any) => {
    const eventDataifelse44: any = [
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
        dataId: 167757730444737660,
        elseIfs: [],
        line_number: 1,
        callback1: [
          {
            type: 'apiRequest',
            dataId: 167757730444768800,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '73022',
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
            line_number: 2,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 167757730444746700,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '705731',
                  pageJsonId: '537892',
                  dataSourceId: 167757704949209300,
                  dataSourceName: 'selectOptionsData',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '7482812',
                      code: 'officialLevel',
                      name: '属性',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                      value: {
                        type: ['context', '$reply_73022?.resultData$'],
                        code: '',
                      },
                    },
                    {
                      attrId: '9495843',
                      code: 'memberType',
                      name: '属性',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '639558',
                      code: 'keyType',
                      name: '属性',
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
            dataId: 167841656046612100,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '275526',
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
                  dataKey: '275526_header',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  _id: 'path',
                  compType: 'Input',
                  parents: [],
                  id: 'path',
                  dataKey: '275526_path',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'query',
                  compType: 'Input',
                  parents: [],
                  id: 'query',
                  dataKey: '275526_query',
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
                      dataKey: '275526_body.catalogCode',
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
                      dataKey: '275526_body.attrCode',
                      value: { type: ['customize'], code: 'noDisturbScope' },
                    },
                  ],
                  _id: 'body',
                  compType: 'Input',
                  parents: [],
                  id: 'body',
                  dataKey: '275526_body',
                },
              ],
            },
            line_number: 4,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 167841656046615140,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '3341325',
                  pageJsonId: '537892',
                  dataSourceId: 167757704949209300,
                  dataSourceName: 'selectOptionsData',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '7482812',
                      code: 'officialLevel',
                      name: '属性',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                      value: { type: [], code: '' },
                    },
                    {
                      attrId: '9495843',
                      code: 'memberType',
                      name: '属性',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '639558',
                      code: 'keyType',
                      name: '属性',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '99908',
                      code: 'noDisturbScope',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['context', '$reply_275526?.resultData$'],
                        code: '',
                      },
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
            dataId: 167757730444772480,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '287',
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
            line_number: 6,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 167757730444724770,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '1783273',
                  pageJsonId: '537892',
                  dataSourceId: 167757704949209300,
                  dataSourceName: 'selectOptionsData',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '7482812',
                      code: 'officialLevel',
                      name: '属性',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '9495843',
                      code: 'memberType',
                      name: '属性',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                      value: {
                        type: ['context', '$reply_287?.resultData$'],
                        code: '',
                      },
                    },
                    {
                      attrId: '639558',
                      code: 'keyType',
                      name: '属性',
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
            dataId: 167757730444751970,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '0917626',
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
                  dataKey: '0917626_header',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  _id: 'path',
                  compType: 'Input',
                  parents: [],
                  id: 'path',
                  dataKey: '0917626_path',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'query',
                  compType: 'Input',
                  parents: [],
                  id: 'query',
                  dataKey: '0917626_query',
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
                      dataKey: '0917626_body.catalogCode',
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
                      dataKey: '0917626_body.attrCode',
                      value: { type: ['customize'], code: 'keyType' },
                    },
                  ],
                  _id: 'body',
                  compType: 'Input',
                  parents: [],
                  id: 'body',
                  dataKey: '0917626_body',
                },
              ],
            },
            line_number: 8,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 167757730444723330,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '066149',
                  pageJsonId: '537892',
                  dataSourceId: 167757704949209300,
                  dataSourceName: 'selectOptionsData',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '7482812',
                      code: 'officialLevel',
                      name: '属性',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '9495843',
                      code: 'memberType',
                      name: '属性',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                    },
                    {
                      attrId: '639558',
                      code: 'keyType',
                      name: '属性',
                      type: 'objectArray',
                      initialData: { type: 'static', value: '[]' },
                      value: {
                        type: ['context', '$reply_0917626?.resultData$'],
                        code: '',
                      },
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 9,
                callback1: [
                  {
                    type: 'console',
                    dataId: 167765068160779300,
                    options: {
                      compId: 'debug',
                      compName: 'system',
                      id: '2304782',
                      pageJsonId: '537892',
                      value: ['selectOptions', '$data.selectOptionsData$'],
                    },
                    line_number: 10,
                  },
                ],
                callback2: [],
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse44.params =
      [
        {
          title: '事件入参',
          name: 'options_131109',
          value: '$options_131109$',
        },
      ] || [];
    CMDGenerator(eventDataifelse44, { options_131109 }, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
  };
  const judageIsShowReplyBtn = (options_48341: any) => {
    const eventDataifelse45: any = [
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
        dataId: 170487087719938700,
        elseIfs: [
          {
            dataName: 'elseIf',
            dataId: 170487087719948300,
            children: [
              {
                dataName: 'action',
                dataId: 170487087719923550,
                children: [],
                todoOptions: ['visible', 'selectComp'],
                options: {
                  compId: ['Button_3562167', 'Button_749483'],
                  compName: 'page',
                  id: '713508',
                  pageJsonId: '537892',
                  visible: '',
                  compid: ['Button_3562167', 'Button_749483'],
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
                dataId: 170487087719923550,
                options: {
                  compId: ['Button_3562167', 'Button_749483'],
                  compName: 'page',
                  id: '713508',
                  pageJsonId: '537892',
                  visible: '',
                  compid: ['Button_3562167', 'Button_749483'],
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
            dataId: 170487087719971970,
            options: {
              compId: ['Button_3562167', 'Button_749483'],
              compName: 'page',
              id: '8255173',
              pageJsonId: '537892',
              visible: 'true',
              compid: ['Button_3562167', 'Button_749483'],
            },
            line_number: 2,
          },
        ],
      },
    ];
    eventDataifelse45.params =
      [
        { title: '事件入参', name: 'options_48341', value: '$options_48341$' },
      ] || [];
    CMDGenerator(eventDataifelse45, { options_48341 }, 'ifelse', {
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
    const eventDatasetVisible13: any = [
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
    eventDatasetVisible13.params = [] || [];
    CMDGenerator(eventDatasetVisible13, {}, 'setVisible', {
      id: 'setVisible',
      name: 'setVisible',
      type: 'setVisible',
      platform: 'undefined',
    });
    const eventDataapiRequest219: any = [
      {
        type: 'apiRequest',
        dataId: 166977364677568640,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '1781127',
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
            dataId: 166977365019750100,
            options: {
              compId: 'Input_690228_5400337_280051_232429',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '2711285',
              data: '$reply_1781127?.resultData$',
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
    eventDataapiRequest219.params = [] || [];
    CMDGenerator(eventDataapiRequest219, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest220: any = [
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
                {
                  attrId: '1445764',
                  code: 'isMultiInst',
                  name: '是否多实例',
                  type: 'string',
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
                dataId: 166444021709873860,
                options: {
                  compId: 'callParentCustomFunc',
                  compName: 'system',
                  id: '077334',
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
    ];
    eventDataapiRequest220.params = [] || [];
    CMDGenerator(eventDataapiRequest220, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDatacallSelfFunc28: any = [
      {
        type: 'callSelfFunc',
        dataId: 167763569513621280,
        options: {
          compId: 'callSelfFunc',
          compName: 'system',
          id: '454518',
          pageJsonId: '537892',
          customFuncName: 'getSelectOptionsData',
        },
        line_number: 7,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacallSelfFunc28.params = [] || [];
    CMDGenerator(eventDatacallSelfFunc28, {}, 'callSelfFunc', {
      id: 'callSelfFunc',
      name: 'callSelfFunc',
      type: 'callSelfFunc',
      platform: 'undefined',
    });
    const eventDataifelse126: any = [
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
        line_number: 8,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 166132449559169250,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '9981685',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var item=state.itemList;data.sceneSubmit=item;var factorForm={};var attrList=item.attrList;if(attrList!=undefined&&attrList.length>0){for(var i=0;i<attrList.length;i++){factorForm[attrList[i].attrCode]=attrList[i].attrValue}}data.factorForm=factorForm;data.sceneSubmit.approveGrade=item.approveGrade;data.sceneSubmit.approveGradeName=item.approveGradeName;data.MemberInfo=item.custMemberList;data.sceneSubmit.custMemberList=item.custMemberList;success(factorForm)};',
              actionTitle: '设置界面初始化值',
            },
            line_number: 9,
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
                      showInput: true,
                      _codePath: ['needExp'],
                      _idpath: ['08707745'],
                    },
                    {
                      attrId: '8082267',
                      code: 'acceptResultDesc',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['acceptResultDesc'],
                      _idpath: ['8082267'],
                    },
                    {
                      attrId: '66641262',
                      code: 'acceptResult',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['acceptResult'],
                      _idpath: ['66641262'],
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
                line_number: 11,
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
                      attrId: '6670664',
                      code: 'msisdn',
                      name: '手机号码',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '240711',
                      code: 'groupLevelName',
                      name: '价值等级',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '79206',
                      code: 'statusName',
                      name: '集团状态',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '55781',
                      code: 'officialLevel',
                      name: '行政级别',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '866846',
                      code: 'keyType',
                      name: '关键人标识',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '9222634',
                      code: 'duty',
                      name: '职务',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '6091965',
                      code: 'name',
                      name: '姓名',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '209821',
                      code: 'tradeclassTop',
                      name: '行业类型ID',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '4177873',
                      code: 'keyTypeName',
                      name: '关键人标识名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '14827',
                      code: 'officialLevelName',
                      name: '行政级别名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '112952',
                      code: 'tradeclassTopName',
                      name: '行业类型名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '47717',
                      code: 'customerId',
                      name: '客户ID',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '528437',
                      code: 'groupId',
                      name: '集团编码',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '303036',
                      code: 'groupName',
                      name: '集团名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '1971066',
                      code: 'rowId',
                      name: '行ID',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '2737033',
                      code: 'actionType',
                      name: '操作类型',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                    },
                    {
                      attrId: '5873083',
                      code: 'sceneType',
                      name: '场景类型',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                    },
                    {
                      attrId: '839742',
                      code: 'msisdnHomeCity',
                      name: '成员号码归属地',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                    },
                    {
                      attrId: '114123',
                      code: 'objType',
                      name: '对象类型',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                    },
                    {
                      attrId: '869007',
                      code: 'homeCity',
                      name: '集团归属地',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                    },
                    {
                      attrId: '785001',
                      code: 'email',
                      name: '邮箱',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '313531',
                      code: 'gender',
                      name: '性别',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '480428',
                      code: 'department',
                      name: '部门',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '081258',
                      code: 'remark',
                      name: '备注',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '7332432',
                      code: 'coreFlag',
                      name: '是否重要成员',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                    },
                    {
                      attrId: '50306',
                      code: 'actionTypeName',
                      name: '操作类型名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '021291',
                      code: 'sceneTypeName',
                      name: '场景类型名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '135706',
                      code: 'msisdnHomeCityName',
                      name: '号码归属地名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '8931083',
                      code: 'objTypeName',
                      name: '对象类型名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '870074',
                      code: 'homeCityName',
                      name: '集团归属地名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '8767044',
                      code: 'genderName',
                      name: '性别中文名',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '3037413',
                      code: 'coreFlagName',
                      name: '是否重要成员名称',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '9463714',
                      code: 'clientSign',
                      name: '重要客户标识',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '436681',
                      code: 'netInTime',
                      name: '入网时间',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '16114',
                      code: 'contractNum',
                      name: '未到期合约数量',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '907348',
                      code: 'mainMeal',
                      name: '主套餐',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '473169',
                      code: 'onceDisc',
                      name: '主套餐一次折扣',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '633959',
                      code: 'termType',
                      name: '终端类型',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '1673772',
                      code: 'termModel',
                      name: '终端型号',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '390091',
                      code: 'arpuValue',
                      name: '近三个月ARPU值',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '1218215',
                      code: 'record',
                      name: '履历',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '4904645',
                      code: 'managerName',
                      name: '看管人员',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '9048351',
                      code: 'interestTypeName',
                      name: '兴趣爱好',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 12,
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
            line_number: 13,
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
                line_number: 14,
                callback1: [],
                callback2: [],
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '366656',
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
                    condId: '5855493',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166745991114664900,
                elseIfs: [],
                line_number: 15,
                callback1: [
                  {
                    type: 'setVisible',
                    dataId: 166745992810332450,
                    options: {
                      compId: 'Table_5369494',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Table',
                      id: '1685307',
                    },
                    line_number: 16,
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
            line_number: 17,
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
                line_number: 18,
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
                line_number: 19,
              },
              {
                type: 'sysSetVisible',
                dataId: 166244953733999170,
                options: {
                  compId: [
                    'Row_851124',
                    'Table_8700198',
                    'Table_8700198_021115',
                    'Button_683498',
                    'Button_026256',
                    'StdUpload_4835215_7240896',
                    'Button_050256_8076884',
                  ],
                  compName: 'page',
                  id: '675663',
                  pageJsonId: '537892',
                  compid: [
                    'Row_851124',
                    'Table_8700198',
                    'Table_8700198_021115',
                    'Button_683498',
                    'Button_026256',
                    'StdUpload_4835215_7240896',
                    'Button_050256_8076884',
                  ],
                  visible: '',
                },
                line_number: 20,
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
                line_number: 21,
              },
              {
                type: 'setVisible',
                dataId: 166322078921268540,
                options: {
                  compId: [
                    'Table_8700198_583861',
                    'Table_8700198_021115_010381',
                  ],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Table',
                  id: '910315',
                  visible: 'true',
                  compid: [
                    'Table_8700198_583861',
                    'Table_8700198_021115_010381',
                  ],
                },
                line_number: 22,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse126.params = [] || [];
    CMDGenerator(eventDataifelse126, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    }); // console 167765034321544260
    console.log('state', state);
    const eventDataifelse127: any = [
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
        dataId: 170485758806344100,
        elseIfs: [],
        line_number: 24,
        callback1: [
          {
            type: 'apiRequest',
            dataId: 170485758806306460,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '9229047',
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
                      dataKey: '9229047_root.header',
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
                      dataKey: '9229047_root.path',
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
                      dataKey: '9229047_root.query',
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
                          dataKey: '9229047_root.body.busiObjNbr',
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
                          dataKey: '9229047_root.body.childCatalogCode',
                          value: {
                            type: ['customize'],
                            code: 'CLS_JC_0004_0001',
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
                      dataKey: '9229047_root.body',
                    },
                  ],
                  _id: 'root',
                  compType: 'Input',
                  isRoot: true,
                  parents: [],
                  key: '0',
                  id: 'root',
                  dataKey: '9229047_root',
                },
              ],
            },
            line_number: 25,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 170485758806353500,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '512286',
                  pageJsonId: '537892',
                  code: 'function main(data,state,success,fail){var _response$resultData;var response=reply_9229047;var acceptResultDesc="\\u53D7\\u7406\\u5931\\u8D25\\u6216\\u672A\\u53D7\\u7406";var acceptResult="0";if(response!==null&&response!==void 0&&(_response$resultData=response.resultData)!==null&&_response$resultData!==void 0&&_response$resultData.dcBusiObjItemAttrList){for(var i=0;i<(response===null||response===void 0?void 0:(_response$resultData2=response.resultData)===null||_response$resultData2===void 0?void 0:_response$resultData2.dcBusiObjItemAttrList.length);++i){var _response$resultData2,_response$resultData3;var dcBusiObjItemAttr=response===null||response===void 0?void 0:(_response$resultData3=response.resultData)===null||_response$resultData3===void 0?void 0:_response$resultData3.dcBusiObjItemAttrList[i];if(dcBusiObjItemAttr.attrCode=="acceptResult"){acceptResultDesc=dcBusiObjItemAttr.attrValueDesc;acceptResult=dcBusiObjItemAttr.attrValue}}}data.factorForm.acceptResultDesc=acceptResultDesc;data.factorForm.acceptResult=acceptResult;success()};',
                },
                line_number: 26,
                callback1: [
                  {
                    type: 'setDataSource',
                    dataId: 170485758806385860,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '140444',
                      pageJsonId: '537892',
                      dataSourceId: 166124254360037760,
                      dataSourceName: 'factorForm',
                      dataSourceRelType: 'custom',
                      dataSourceSetValue: [
                        {
                          attrId: '08707745',
                          code: 'needExp',
                          name: '需求说明',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '66641262',
                          code: 'acceptResult',
                          name: '属性',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '8082267',
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
                    line_number: 27,
                    callback1: [],
                    callback2: [],
                  },
                  {
                    type: 'callSelfFunc',
                    dataId: 170485758806351600,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '621242',
                      pageJsonId: '537892',
                      customFuncName: 'judageIsShowReplyBtn',
                    },
                    line_number: 28,
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
            dataId: 170485758806306100,
            options: {
              compId: ['Card_814848'],
              compName: 'page',
              id: '923234',
              pageJsonId: '537892',
              visible: 'true',
              compid: ['Card_814848'],
            },
            line_number: 29,
          },
        ],
      },
    ];
    eventDataifelse127.params = [] || [];
    CMDGenerator(eventDataifelse127, {}, 'ifelse', {
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
          dividerText={'集团重要成员特殊免扰权限'}
          showTitle={true}
          $$componentItem={{
            id: 'Divider_5468797',
            uid: 'Divider_5468797',
            type: 'Divider',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ margin: '12px 0 12px 0', height: 'auto' }}
          ref={(r: any) => refs.setComponentRef(r, 'Divider_5468797')}
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
                  id: 'Form_4311097_9385662_8411515_9167293',
                  uid: 'Form_4311097_9385662_8411515_9167293',
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
                    'Form_4311097_9385662_8411515_9167293',
                  )
                }
                {...injectData}
              >
                <Checkbox
                  name={'审批场景'}
                  titleTip={'text'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  text={'集团重要成员特殊免扰权限'}
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
                    id: 'Checkbox_882584_5289015_934499_355644_646764',
                    uid: 'Checkbox_882584_5289015_934499_355644_646764',
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
                      'Checkbox_882584_5289015_934499_355644_646764',
                    )
                  }
                  {...injectData}
                />
                <View
                  className="View_View_813846"
                  name={'布局容器'}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_813846',
                    uid: 'View_813846',
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
                  ref={(r: any) => refs.setComponentRef(r, 'View_813846')}
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
                    id: 'Input_361479_887285_2150708_936504_923334',
                    uid: 'Input_361479_887285_2150708_936504_923334',
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
                      'Input_361479_887285_2150708_936504_923334',
                    )
                  }
                  {...injectData}
                />
              </Form>
            </View>
          </HorizontalView>
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
            ref={(r: any) => refs.setComponentRef(r, 'Row_851')}
            {...injectData}
          >
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
                textAlign: 'right',
                justifyContent: 'flex-end',
                alignItems: 'center',
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
                  const eventDatashowCustomModal94: any = [
                    {
                      type: 'showCustomModal',
                      dataId: 166314610874318850,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '611628',
                        pageJsonId: '537892',
                        modalname: '/memberInfo',
                        pageId: '886851191046930432',
                        paramsObj: {
                          phone: '$value_24586657$',
                          lanId: '$state.lanId$',
                          selectOptionsData: '$data.selectOptionsData$',
                        },
                        paramsObjKeyValueMap: {
                          phone: '$value_24586657$',
                          lanId: '$state.lanId$',
                          selectOptionsData: '$data.selectOptionsData$',
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
                            code: 'function main(data,state,success,fail){if(data.sceneSubmit.custMemberList!=undefined&&data.sceneSubmit.custMemberList.length>0){data.sceneSubmit.custMemberList.push(okData_611628)}else{var custMemberList=[];custMemberList.push(okData_611628);data.sceneSubmit.custMemberList=custMemberList}success()};',
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
                                    attrId: '6670664',
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
                                    attrId: '528437',
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
                                    attrId: '303036',
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
                                    attrId: '240711',
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
                                    attrId: '79206',
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
                                    attrId: '55781',
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
                                    attrId: '866846',
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
                                    attrId: '9222634',
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
                                    attrId: '6091965',
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
                                    attrId: '209821',
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
                                    attrId: '47717',
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
                                    attrId: '4177873',
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
                                    attrId: '14827',
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
                                    attrId: '112952',
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
                                    attrId: '1971066',
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
                                operateType: 0,
                                onlySetPatch: true,
                                otherObjectArrayOptions: {},
                              },
                              line_number: 3,
                              callback1: [
                                {
                                  type: 'callSelfFunc',
                                  dataId: 167592323461327330,
                                  options: {
                                    compId: 'callSelfFunc',
                                    compName: 'system',
                                    id: '788288',
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
                  eventDatashowCustomModal94.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatashowCustomModal94,
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
                style={{ width: 'fit-content', margin: '0px 10px 0px 10px' }}
                onClick={(e: any) => {
                  const eventDatagetTableSelectedKey43: any = [
                    {
                      type: 'getTableSelectedKey',
                      dataId: 166324634516847900,
                      options: {
                        compId: 'Table_8700198_021115',
                        compLib: 'comm',
                        pageJsonId: '537892',
                        compName: 'Table',
                        id: '723944',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'showModal',
                          dataId: 167593234562951680,
                          options: {
                            compId: 'showModal',
                            compName: 'page',
                            id: '05536',
                            pageJsonId: '537892',
                            type: 'confirm',
                            title: '友情提示',
                            content: '你确定要删除吗？',
                            okText: '确认',
                          },
                          line_number: 2,
                          callback1: [
                            {
                              type: 'customActionCode',
                              dataId: 167593234890159680,
                              options: {
                                compId: 'customActionCode',
                                compName: 'page',
                                id: '536226',
                                pageJsonId: '537892',
                                code: 'function main(data,state,success,fail){var memnerInfo=data.MemberInfo;var sel=selectedRowKeys_723944;console.log(memnerInfo);console.log(sel);var res=[];if(sel!=undefined&&sel.length>0){memnerInfo.forEach(function(v){var exit=true;sel.forEach(function(s){if(s===v.rowId){exit=false}});if(exit){res.push(v)}});data.MemberInfo=res;data.sceneSubmit.custMemberList=data.MemberInfo}success()};',
                              },
                              line_number: 3,
                              callback1: [
                                {
                                  type: 'setDataSource',
                                  dataId: 167593234890121400,
                                  options: {
                                    compId: 'setDataSource',
                                    compName: 'page',
                                    id: '7537573',
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
                                  line_number: 4,
                                  callback1: [
                                    {
                                      type: 'callSelfFunc',
                                      dataId: 167593234890113000,
                                      options: {
                                        compId: 'callSelfFunc',
                                        compName: 'system',
                                        id: '5567265',
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
                                  dataId: 167593234890136420,
                                  options: {
                                    compId: 'callParentCustomFunc',
                                    compName: 'system',
                                    id: '79662',
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
                  eventDatagetTableSelectedKey43.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatagetTableSelectedKey43,
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
                  id: 'StdUpload_4835215_7240896',
                  uid: 'StdUpload_4835215_7240896',
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
                  const eventDatasetLoading153: any = [
                    {
                      type: 'setLoading',
                      dataId: 167698809125129380,
                      options: {
                        compId: 'Table_8700198_021115',
                        compLib: 'comm',
                        pageJsonId: '537892',
                        compName: 'Table',
                        id: '535783',
                        loading: true,
                      },
                      line_number: 1,
                    },
                  ];
                  eventDatasetLoading153.params =
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
                    eventDatasetLoading153,
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
                  const eventDataapiRequest708: any = [
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
                                  code: 'CLS_JC_0004_0001',
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
                              condId: '1339316',
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
                          dataId: 167642825847654270,
                          elseIfs: [
                            {
                              dataName: 'elseIf',
                              dataId: 167642837973233730,
                              children: [
                                {
                                  dataName: 'action',
                                  dataId: 167642838385468860,
                                  children: [
                                    {
                                      dataName: 'callback',
                                      dataId: 167642838385470460,
                                      children: [
                                        {
                                          dataName: 'action',
                                          dataId: 167642838385435000,
                                          children: [
                                            {
                                              dataName: 'callback',
                                              dataId: 167642838385477280,
                                              children: [
                                                {
                                                  dataName: 'action',
                                                  dataId: 167642838385491840,
                                                  children: [
                                                    {
                                                      dataName: 'callback',
                                                      dataId: 167642838385427500,
                                                      children: [],
                                                      value: 'callback1',
                                                      params: [],
                                                      elseIfs: [],
                                                    },
                                                    {
                                                      dataName: 'callback',
                                                      dataId: 167642838385445100,
                                                      children: [],
                                                      value: 'callback2',
                                                      params: [],
                                                      elseIfs: [],
                                                    },
                                                  ],
                                                  todoOptions: [
                                                    'customFuncName',
                                                    'customFuncParams',
                                                  ],
                                                  options: {
                                                    compId: 'callSelfFunc',
                                                    compName: 'system',
                                                    id: '9926558',
                                                    pageJsonId: '537892',
                                                    customFuncName:
                                                      'updateTitle',
                                                  },
                                                  actionObjId: 'callSelfFunc',
                                                  actionObjName: 'system',
                                                  value: 'callSelfFunc',
                                                  elseIfs: [],
                                                  line_number: 7,
                                                },
                                              ],
                                              value: 'callback1',
                                              params: [],
                                              elseIfs: [],
                                            },
                                            {
                                              dataName: 'callback',
                                              dataId: 167642838385496450,
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
                                            id: '8908645',
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
                                            newData: '$data_980547$',
                                            operateType: 1,
                                            onlySetPatch: true,
                                            otherObjectArrayOptions: {},
                                          },
                                          actionObjId: 'setDataSource',
                                          actionObjName: 'page',
                                          value: 'setDataSource',
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
                                      dataId: 167642838385424480,
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
                                    id: '980547',
                                    pageJsonId: '537892',
                                    code: 'function main(data,state,success,fail){data.MemberInfo=reply_144156.resultData;data.sceneSubmit.custMemberList=reply_144156.resultData;success()};',
                                  },
                                  actionObjId: 'customActionCode',
                                  actionObjName: 'page',
                                  value: 'customActionCode',
                                  elseIfs: [],
                                  line_number: 5,
                                },
                              ],
                              condition: [],
                              callback: [
                                {
                                  type: 'customActionCode',
                                  dataId: 167642838385468860,
                                  options: {
                                    compId: 'customActionCode',
                                    compName: 'page',
                                    id: '980547',
                                    pageJsonId: '537892',
                                    code: 'function main(data,state,success,fail){data.MemberInfo=reply_144156.resultData;data.sceneSubmit.custMemberList=reply_144156.resultData;success()};',
                                  },
                                  line_number: 5,
                                  callback1: [
                                    {
                                      type: 'setDataSource',
                                      dataId: 167642838385435000,
                                      options: {
                                        compId: 'setDataSource',
                                        compName: 'page',
                                        id: '8908645',
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
                                        newData: '$data_980547$',
                                        operateType: 1,
                                        onlySetPatch: true,
                                        otherObjectArrayOptions: {},
                                      },
                                      line_number: 6,
                                      callback1: [
                                        {
                                          type: 'callSelfFunc',
                                          dataId: 167642838385491840,
                                          options: {
                                            compId: 'callSelfFunc',
                                            compName: 'system',
                                            id: '9926558',
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
                              dataId: 167642829697653280,
                              options: {
                                compId: 'showMessage',
                                compName: 'system',
                                id: '538751',
                                pageJsonId: '537892',
                                type: 'success',
                                value: '$reply_144156.resultMsg$',
                              },
                              line_number: 4,
                            },
                          ],
                        },
                        {
                          type: 'setLoading',
                          dataId: 167698810076450430,
                          options: {
                            compId: 'Table_8700198_021115',
                            compLib: 'comm',
                            pageJsonId: '537892',
                            compName: 'Table',
                            id: '2217286',
                            loading: false,
                          },
                          line_number: 8,
                        },
                      ],
                      callback2: [
                        {
                          type: 'setLoading',
                          dataId: 167817594169558900,
                          options: {
                            compId: 'Table_8700198_021115',
                            compLib: 'comm',
                            pageJsonId: '537892',
                            compName: 'Table',
                            id: '7071781',
                            loading: false,
                          },
                          line_number: 9,
                        },
                      ],
                    },
                  ];
                  eventDataapiRequest708.params =
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
                    eventDataapiRequest708,
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
                  const eventDatacustomActionCode469: any = [
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
                  eventDatacustomActionCode469.params =
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
                    eventDatacustomActionCode469,
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
                  refs.setComponentRef(r, 'StdUpload_4835215_7240896')
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
                  id: 'Button_050256_8076884',
                  uid: 'Button_050256_8076884',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ width: 'fit-content', margin: '0px 0px 0px 8px' }}
                onClick={(e: any) => {
                  const eventDataapiRequest709: any = [
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
                                  code: 'CLS_JC_0004_0001',
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
                                  code: '集团重要成员特殊免扰权限导入模板.xlsx',
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
                  eventDataapiRequest709.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDataapiRequest709, { e }, 'apiRequest', {
                    id: 'apiRequest',
                    name: 'apiRequest',
                    type: 'apiRequest',
                    platform: 'pc',
                  });
                }}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Button_050256_8076884')
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
                  id: 'Button_050256_034475_5963705',
                  uid: 'Button_050256_034475_5963705',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ width: 'fit-content', margin: '0px 0px 0px 8px' }}
                onClick={(e: any) => {
                  const eventDatagetTableSelected36: any = [
                    {
                      type: 'getTableSelected',
                      dataId: 167699532371153860,
                      shielding: true,
                      options: {
                        compId: 'Table_8700198_021115',
                        compLib: 'comm',
                        pageJsonId: '537892',
                        compName: 'Table',
                        id: '732157',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'ifelse',
                          shielding: true,
                          condition: [
                            {
                              condId: '066724',
                              options: {
                                context: '$selectedRows_732157$',
                                operate: 'notEmpty',
                              },
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          dataId: 167699532752940380,
                          elseIfs: [
                            {
                              dataName: 'elseIf',
                              dataId: 167699534456159260,
                              children: [
                                {
                                  dataName: 'action',
                                  dataId: 167699535781526980,
                                  children: [],
                                  todoOptions: ['msgType', 'value'],
                                  options: {
                                    compId: 'showMessage',
                                    compName: 'system',
                                    id: '414696',
                                    pageJsonId: '537892',
                                    type: 'info',
                                    value: '请先选择需要导出的数据！',
                                  },
                                  actionObjId: 'showMessage',
                                  actionObjName: 'system',
                                  value: 'showMessage',
                                  elseIfs: [],
                                  shielding: true,
                                  line_number: 8,
                                },
                              ],
                              condition: [],
                              elseIfs: [],
                              shielding: true,
                              callback: [
                                {
                                  type: 'showMessage',
                                  dataId: 167699535781526980,
                                  shielding: true,
                                  options: {
                                    compId: 'showMessage',
                                    compName: 'system',
                                    id: '414696',
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
                              dataId: 167699534040539330,
                              shielding: true,
                              options: {
                                compId: 'customActionCode',
                                compName: 'page',
                                id: '8526503',
                                pageJsonId: '537892',
                                code: 'function main(data,state,success,fail){var arr1=[];var arr2=[];var memberInfo=selectedRows_732157;for(var i=0;i<memberInfo.length;i++){var info=memberInfo[i];var scopeResult=[];var result="";var scope=info.noDisturbScope||"";var scopeList=scope.split(",");for(var j=0;i<scopeList.length;j++){if(scopeList[j]=="1"){scopeResult.push("10086\\u77ED\\u4FE1")}if(scopeList[j]=="2"){scopeResult.push("10086\\u5F69\\u4FE1")}if(scopeList[j]=="3"){scopeResult.push("10086\\u4EBA\\u5DE5\\u5916\\u547C")}if(scopeList[j]=="4"){scopeResult.push("10085\\u4EBA\\u5DE5\\u5916\\u547C")}if(scopeList[j]=="5"){scopeResult.push("10088")}if(scopeList[j]=="6"){scopeResult.push("10050")}if(scopeList[j]=="7"){scopeResult.push("\\u81EA\\u52A8\\u8BED\\u97F3\\u5916\\u547C")}}result=scopeResult.join(",");{arr2.push({"name":"\\u624B\\u673A\\u53F7\\u7801","value":info.msisdn});arr2.push({"name":"\\u59D3\\u540D","value":info.name});arr2.push({"name":"\\u96C6\\u56E2\\u7F16\\u7801","value":info.groupId});arr2.push({"name":"\\u96C6\\u56E2\\u540D\\u79F0","value":info.groupName});arr2.push({"name":"\\u5BA2\\u6237\\u7ECF\\u7406","value":info.supervise});arr2.push({"name":"\\u4EF7\\u503C\\u7B49\\u7EA7","value":info.groupLevelName});arr2.push({"name":"\\u6210\\u5458\\u7C7B\\u578B","value":info.memberTypeName});arr2.push({"name":"\\u884C\\u653F\\u7EA7\\u522B","value":info.officialLevelName});arr2.push({"name":"\\u5173\\u952E\\u4EBA\\u6807\\u8BC6","value":info.keyTypeName});arr2.push({"name":"\\u804C\\u52A1","value":info.duty});arr2.push({"name":"\\u884C\\u4E1A\\u7C7B\\u578B","value":info.tradeclassTopName});arr2.push({"name":"\\u7EB3\\u5165\\u6210\\u5458\\u7BA1\\u7406\\u65F6\\u95F4","value":info.memberJoinDate});arr2.push({"name":"\\u96C6\\u56E2\\u72B6\\u6001","value":info.statusName});arr2.push({"name":"\\u514D\\u6270\\u622A\\u6B62\\u65F6\\u95F4","value":info.cutOffTime});arr2.push({"name":"\\u514D\\u6270\\u8303\\u56F4","value":result})}arr1.push(arr2);arr2=[]}success(JSON.stringify(arr1))};',
                              },
                              line_number: 3,
                              callback1: [
                                {
                                  type: 'apiRequest',
                                  dataId: 167699534040585950,
                                  shielding: true,
                                  options: {
                                    compId: 'apiRequest',
                                    compName: 'system',
                                    id: '98296',
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
                                                '$data_8526503$',
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
                                      dataId: 167699534040505380,
                                      shielding: true,
                                      options: {
                                        compId: 'downloadByFileId',
                                        compName: 'system',
                                        id: '189937',
                                        pageJsonId: '537892',
                                        data: '$reply_98296.resultData.fileId$',
                                      },
                                      line_number: 5,
                                    },
                                    {
                                      type: 'console',
                                      dataId: 167699534040511500,
                                      shielding: true,
                                      options: {
                                        compId: 'debug',
                                        compName: 'system',
                                        id: '000468',
                                        pageJsonId: '537892',
                                        value: [
                                          '文件导出成功回调值：',
                                          '$reply_98296$',
                                        ],
                                      },
                                      line_number: 6,
                                    },
                                  ],
                                  callback2: [],
                                },
                                {
                                  type: 'console',
                                  dataId: 167699534040595460,
                                  shielding: true,
                                  options: {
                                    compId: 'debug',
                                    compName: 'system',
                                    id: '641656',
                                    pageJsonId: '537892',
                                    value: ['$data_8526503$'],
                                  },
                                  line_number: 7,
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
                  eventDatagetTableSelected36.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatagetTableSelected36,
                    { e },
                    'getTableSelected',
                    {
                      id: 'getTableSelected',
                      name: 'getTableSelected',
                      type: 'getTableSelected',
                      platform: 'pc',
                    },
                  );
                  const eventDatacustomActionCode470: any = [
                    {
                      type: 'customActionCode',
                      dataId: 167706821204635260,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '816252',
                        pageJsonId: '537892',
                        code: 'function main(data,state,success,fail){var arr1=[];var arr2=[];var memberInfo=data.MemberInfo;console.log("\\u6210\\u5458\\u4FE1\\u606F:",memberInfo);for(var i=0;i<memberInfo.length;i++){var info=memberInfo[i];{arr2.push({"name":"\\u624B\\u673A\\u53F7\\u7801","value":info.msisdn});arr2.push({"name":"\\u59D3\\u540D","value":info.name});arr2.push({"name":"\\u96C6\\u56E2\\u7F16\\u7801","value":info.groupId});arr2.push({"name":"\\u96C6\\u56E2\\u540D\\u79F0","value":info.groupName});arr2.push({"name":"\\u4EF7\\u503C\\u7B49\\u7EA7","value":info.groupLevelName});arr2.push({"name":"\\u6210\\u5458\\u7C7B\\u578B","value":info.memberTypeName});arr2.push({"name":"\\u884C\\u653F\\u7EA7\\u522B","value":info.officialLevelName});arr2.push({"name":"\\u7ECF\\u529E\\u6807\\u8BC6","value":info.keyTypeName});arr2.push({"name":"\\u804C\\u52A1","value":info.duty});arr2.push({"name":"\\u7EB3\\u5165\\u6210\\u5458\\u7BA1\\u7406\\u65F6\\u95F4","value":info.memberJoinDate});arr2.push({"name":"\\u96C6\\u56E2\\u72B6\\u6001","value":info.statusName});arr2.push({"name":"\\u514D\\u6270\\u622A\\u6B62\\u65F6\\u95F4","value":info.cutOffTime});arr2.push({"name":"\\u514D\\u6270\\u8303\\u56F4","value":info.noDisturbScope})}arr1.push(arr2);arr2=[]}if(arr1.length>0){success(JSON.stringify(arr1))}else{fail()}};',
                      },
                      line_number: 9,
                      callback1: [
                        {
                          type: 'apiRequest',
                          dataId: 167706821204643900,
                          options: {
                            compId: 'apiRequest',
                            compName: 'system',
                            id: '6354069',
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
                                      type: ['context', '$data_816252$'],
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
                          line_number: 10,
                          callback1: [
                            {
                              type: 'downloadByFileId',
                              dataId: 167706821204621730,
                              options: {
                                compId: 'downloadByFileId',
                                compName: 'system',
                                id: '7612386',
                                pageJsonId: '537892',
                                data: '$reply_6354069.resultData.fileId$',
                              },
                              line_number: 11,
                            },
                            {
                              type: 'console',
                              dataId: 167706821204638500,
                              options: {
                                compId: 'debug',
                                compName: 'system',
                                id: '7252083',
                                pageJsonId: '537892',
                                value: [
                                  '文件导出成功回调值：',
                                  '$reply_6354069$',
                                ],
                              },
                              line_number: 12,
                            },
                          ],
                          callback2: [],
                        },
                        {
                          type: 'console',
                          dataId: 167706821204681380,
                          options: {
                            compId: 'debug',
                            compName: 'system',
                            id: '00039522',
                            pageJsonId: '537892',
                            value: ['$data_816252$'],
                          },
                          line_number: 13,
                        },
                      ],
                      callback2: [
                        {
                          type: 'showMessage',
                          dataId: 167713856289609820,
                          options: {
                            compId: 'showMessage',
                            compName: 'system',
                            id: '277275',
                            pageJsonId: '537892',
                            type: 'info',
                            value: '导出数据不能为空！',
                          },
                          line_number: 14,
                        },
                      ],
                    },
                  ];
                  eventDatacustomActionCode470.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatacustomActionCode470,
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
                  refs.setComponentRef(r, 'Button_050256_034475_5963705')
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
                id: '682755',
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
                title: '看管人员',
                key: 'name',
                dataIndex: 'managerName',
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
                id: '994382',
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
                id: '954316',
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
                id: '7023026',
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
                title: '价值等级',
                key: 'groupLevelName',
                dataIndex: 'valueTypeName',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '价值等级',
                      attrId: '886805849493164037',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                id: '559377',
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
                id: '178303',
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
                id: '62649',
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
                id: '9373175',
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
                id: '868893',
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
                title: '纳入成员管理时间',
                key: 'memberJoinDate',
                dataIndex: 'memberJoinDate',
                editoption: {
                  edittype: 'TimePicker',
                  selectoption: {
                    attr: {
                      attrName: '纳入成员骨干时间',
                      attrId: '886805849493164033',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'datetime',
                id: '472718',
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
                title: '集团状态',
                key: 'statusName',
                dataIndex: 'statusName',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '集团状态',
                      attrId: '886805849493164038',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                id: '676725',
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
                title: '免扰截至时间',
                key: 'cutOffTime',
                dataIndex: 'cutOffTime',
                editoption: {
                  edittype: 'TimePicker',
                  selectoption: {
                    attr: {
                      attrName: '免扰截至时间',
                      attrId: '886805849493164043',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'datetime',
                id: '180652',
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
                title: '免扰范围',
                key: 'noDisturbScope',
                dataIndex: 'noDisturbScope',
                editoption: {
                  edittype: 'MultipleSelect',
                  selectoption: {
                    attr: {
                      attrName: '免扰范围',
                      attrId: '886805849493164044',
                      attrNbr: 'noDisturbScope',
                    },
                    options: attrDataMap['noDisturbScope'],
                  },
                },
                edittype: 'string',
                id: '35583',
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
                staticDataSource: attrDataMap['noDisturbScope'],
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
            total={'data?.MemberInfo?.length'}
            hiddenAction={false}
            rowKey={'rowId'}
            rowActions={[
              {
                title: '编辑',
                iconPos: 'left',
                icon: { theme: 'outlined', type: 'edit' },
                type: 'edit',
                id: '121913',
                checked: true,
              },
            ]}
            extend={[]}
            dataSourceFromDataSourceConfig={'data.MemberInfo'}
            $$componentItem={{
              id: 'Table_8700198_021115',
              uid: 'Table_8700198_021115',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ margin: '10px 0px 10px 0px' }}
            onRowEdit={(rowId: any, row: any, index: any) => {
              const eventDatagetTableSelected37: any = [
                {
                  type: 'getTableSelected',
                  dataId: 167021058270999000,
                  options: {
                    compId: 'Table_8700198_021115',
                    compLib: 'comm',
                    pageJsonId: '537892',
                    compName: 'Table',
                    id: '9416202',
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'showCustomModal',
                      dataId: 167021061728671100,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '885566',
                        pageJsonId: '537892',
                        modalname: '/memberInfo',
                        pageId: '886851191046930432',
                        paramsObj: {
                          memberInfo: '$row$',
                          selectOptionsData: '$data.selectOptionsData$',
                        },
                        paramsObjKeyValueMap: {
                          memberInfo: '$row$',
                          selectOptionsData: '$data.selectOptionsData$',
                        },
                        modalPath: '/memberInfo',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'customActionCode',
                          dataId: 167021995814931420,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '636271',
                            pageJsonId: '537892',
                            code: 'function main(data,state,success,fail){data.MemberInfo=data.MemberInfo.filter(function(v){return v.rowId!=okData_885566.rowId});data.MemberInfo.push(okData_885566);data.sceneSubmit.custMemberList=data.MemberInfo;success(data.MemberInfo)};',
                          },
                          line_number: 3,
                          callback1: [
                            {
                              type: 'setDataSource',
                              dataId: 167021995814963940,
                              options: {
                                compId: 'setDataSource',
                                compName: 'page',
                                id: '5928847',
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
                                    attrId: '6670664',
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
                                    attrId: '528437',
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
                                    attrId: '303036',
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
                                    attrId: '240711',
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
                                    attrId: '79206',
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
                                    attrId: '55781',
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
                                    attrId: '866846',
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
                                    attrId: '9222634',
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
                                    attrId: '6091965',
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
                                    attrId: '209821',
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
                                    attrId: '47717',
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
                                    attrId: '4177873',
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
                                    attrId: '14827',
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
                                    attrId: '112952',
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
                                    attrId: '1971066',
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
                                newData: '$data_636271$',
                              },
                              line_number: 4,
                              callback1: [
                                {
                                  type: 'callSelfFunc',
                                  dataId: 167592325642210180,
                                  options: {
                                    compId: 'callSelfFunc',
                                    compName: 'system',
                                    id: '441013',
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
                              dataId: 167021995815087780,
                              options: {
                                compId: 'callParentCustomFunc',
                                compName: 'system',
                                id: '508015',
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
                  ],
                  callback2: [],
                },
              ];
              eventDatagetTableSelected37.params =
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
                eventDatagetTableSelected37,
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
            onRowClick={(rowId: any, row: any, index: any) => {
              // console 167884750289997060
              console.log(row);
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Table_8700198_021115')}
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
                id: '682755',
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
                title: '看管人员',
                key: 'name',
                dataIndex: 'managerName',
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
                id: '994382',
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
                id: '954316',
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
                id: '7023026',
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
                title: '价值等级',
                key: 'groupLevelName',
                dataIndex: 'valueTypeName',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '价值等级',
                      attrId: '886805849493164037',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                id: '559377',
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
                id: '178303',
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
                id: '62649',
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
                id: '9373175',
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
                id: '868893',
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
                title: '纳入成员管理时间',
                key: 'memberJoinDate',
                dataIndex: 'memberJoinDate',
                editoption: {
                  edittype: 'TimePicker',
                  selectoption: {
                    attr: {
                      attrName: '纳入成员骨干时间',
                      attrId: '886805849493164033',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'datetime',
                id: '472718',
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
                title: '集团状态',
                key: 'statusName',
                dataIndex: 'statusName',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '集团状态',
                      attrId: '886805849493164038',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                id: '676725',
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
                title: '免扰截至时间',
                key: 'cutOffTime',
                dataIndex: 'cutOffTime',
                editoption: {
                  edittype: 'TimePicker',
                  selectoption: {
                    attr: {
                      attrName: '免扰截至时间',
                      attrId: '886805849493164043',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'datetime',
                id: '180652',
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
                title: '免扰范围',
                key: 'noDisturbScope',
                dataIndex: 'noDisturbScope',
                editoption: {
                  edittype: 'MultipleSelect',
                  selectoption: {
                    attr: {
                      attrName: '免扰范围',
                      attrId: '886805849493164044',
                      attrNbr: 'noDisturbScope',
                    },
                    options: attrDataMap['noDisturbScope'],
                  },
                },
                edittype: 'string',
                id: '35583',
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
                staticDataSource: attrDataMap['noDisturbScope'],
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
            total={'data?.MemberInfo?.length'}
            hiddenAction={false}
            rowKey={'rowId'}
            rowActions={[]}
            extend={[]}
            dataSourceFromDataSourceConfig={'data.MemberInfo'}
            $$componentItem={{
              id: 'Table_8700198_021115_010381',
              uid: 'Table_8700198_021115_010381',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={false}
            readOnly={false}
            style={{ margin: '10px 0px 10px 0px' }}
            onRowEdit={(rowId: any, row: any, index: any) => {
              const eventDatagetTableSelected38: any = [
                {
                  type: 'getTableSelected',
                  dataId: 167021058270999000,
                  options: {
                    compId: 'Table_8700198_021115_010381',
                    compLib: 'comm',
                    pageJsonId: '537892',
                    compName: 'Table',
                    id: '9416202',
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'showCustomModal',
                      dataId: 167021061728671100,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '885566',
                        pageJsonId: '537892',
                        modalname: '/memberInfo',
                        pageId: '886851191046930432',
                        paramsObj: { memberInfo: '$row$' },
                        paramsObjKeyValueMap: { memberInfo: '$row$' },
                        modalPath: '/memberInfo',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'customActionCode',
                          dataId: 167021995814931420,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '636271',
                            pageJsonId: '537892',
                            code: 'function main(data,state,success,fail){data.MemberInfo=data.MemberInfo.filter(function(v){return v.rowId!=okData_885566.rowId});data.MemberInfo.push(okData_885566);data.sceneSubmit.custMemberList=data.MemberInfo;success(data.MemberInfo)};',
                          },
                          line_number: 3,
                          callback1: [
                            {
                              type: 'setDataSource',
                              dataId: 167021995814963940,
                              options: {
                                compId: 'setDataSource',
                                compName: 'page',
                                id: '5928847',
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
                                    attrId: '6670664',
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
                                    attrId: '528437',
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
                                    attrId: '303036',
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
                                    attrId: '240711',
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
                                    attrId: '79206',
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
                                    attrId: '55781',
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
                                    attrId: '866846',
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
                                    attrId: '9222634',
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
                                    attrId: '6091965',
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
                                    attrId: '209821',
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
                                    attrId: '47717',
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
                                    attrId: '4177873',
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
                                    attrId: '14827',
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
                                    attrId: '112952',
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
                                    attrId: '1971066',
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
                                newData: '$data_636271$',
                              },
                              line_number: 4,
                              callback1: [],
                              callback2: [],
                            },
                            {
                              type: 'callParentCustomFunc',
                              dataId: 167021995815087780,
                              options: {
                                compId: 'callParentCustomFunc',
                                compName: 'system',
                                id: '508015',
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
                  ],
                  callback2: [],
                },
              ];
              eventDatagetTableSelected38.params =
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
                eventDatagetTableSelected38,
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
            ref={(r: any) =>
              refs.setComponentRef(r, 'Table_8700198_021115_010381')
            }
            {...injectData}
          />
          <Form
            name={'要素表单'}
            colSpan={24}
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
              id: 'Form_449441_552329_741341',
              uid: 'Form_449441_552329_741341',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px', margin: '0px 0px 12px 0px' }}
            onValuesChange={(changedFieldName: any, changedValue: any) => {
              const eventDatasetDataSource102: any = [
                {
                  type: 'setDataSource',
                  dataId: 166320866055043680,
                  options: {
                    compId: 'page',
                    compName: 'page',
                    id: '814323',
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
                        value: {
                          type: [
                            'form',
                            'Form_449441_552329_741341',
                            'getFieldsValue',
                          ],
                          code: 'needExp',
                        },
                        showInput: true,
                        _codePath: ['needExp'],
                        _idpath: ['08707745'],
                      },
                      {
                        attrId: '8082267',
                        code: 'acceptResultDesc',
                        name: '属性',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['acceptResultDesc'],
                        _idpath: ['8082267'],
                      },
                      {
                        attrId: '66641262',
                        code: 'acceptResult',
                        name: '属性',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['acceptResult'],
                        _idpath: ['66641262'],
                      },
                    ],
                    onlySetPatch: true,
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'customActionCode',
                      dataId: 166320890166471840,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '1478494',
                        pageJsonId: '537892',
                        actionTitle: '',
                        code: 'function main(data,state,success,fail){var attrList=[];var obj=data.factorForm;for(var key in obj){attrList.push({"attrCode":key,"attrName":"","attrValue":obj[key]})}data.sceneSubmit.attrList=attrList;success(attrList)};',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'callParentCustomFunc',
                          dataId: 166320890166401100,
                          options: {
                            compId: 'callParentCustomFunc',
                            compName: 'system',
                            id: '523635',
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
              eventDatasetDataSource102.params =
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
                eventDatasetDataSource102,
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
              refs.setComponentRef(r, 'Form_449441_552329_741341')
            }
            {...injectData}
          >
            <TextArea
              name={'申请原因'}
              selfSpan={24}
              labelCol={'3'}
              wrapperCol={21}
              titleTip={'text'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              placeholder={'请输入'}
              fieldName={'needExp'}
              value={data?.factorForm?.needExp}
              formItemIndex={0}
              allowClear={true}
              tipIcon={{
                theme: 'outlined',
                type: 'question-circle',
                isIconFont: false,
              }}
              tipContent={
                '目前已合作XX业务等，为更好提供集团服务，近期通过外呼/通讯录收集/经办人处了解/上门拜访等方式收集夯实集团成员信息，现为集团重要成员申请特殊免扰权限'
              }
              $$componentItem={{
                id: 'Input_needExp_092674',
                uid: 'Input_needExp_092674',
                type: 'TextArea',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_needExp_092674')}
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
                id: 'Form_395851_1727917_9692158_9612234',
                uid: 'Form_395851_1727917_9692158_9612234',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ padding: '0px 0px 0px 0px', margin: '10px 0px 0px 0px' }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Form_395851_1727917_9692158_9612234')
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
                  id: 'Input_690228_5400337_280051_232429',
                  uid: 'Input_690228_5400337_280051_232429',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_690228_5400337_280051_232429')
                }
                {...injectData}
              />
              <View
                className="View_View_22346374_875512_926873_4359147"
                name={'布局容器'}
                labelCol={8}
                wrapperCol={16}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_22346374_875512_926873_4359147',
                  uid: 'View_22346374_875512_926873_4359147',
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
                  refs.setComponentRef(r, 'View_22346374_875512_926873_4359147')
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
                    id: 'StdUpload_6230546_867413_538179_36057857',
                    uid: 'StdUpload_6230546_867413_538179_36057857',
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
                    const eventDatagetSelectedData173: any = [
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
                    eventDatagetSelectedData173.params =
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
                      eventDatagetSelectedData173,
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
                    const eventDatacustomActionCode472: any = [
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
                    eventDatacustomActionCode472.params =
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
                      eventDatacustomActionCode472,
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
                      'StdUpload_6230546_867413_538179_36057857',
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
              const eventDatacustomActionCode473: any = [
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
              eventDatacustomActionCode473.params =
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
                eventDatacustomActionCode473,
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
              const eventDatadownloadByFileId31: any = [
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
              eventDatadownloadByFileId31.params =
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
                eventDatadownloadByFileId31,
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
          ref={(r: any) => refs.setComponentRef(r, 'BOFramer_187832')}
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
            id: 'Card_814848',
            uid: 'Card_814848',
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
          ref={(r: any) => refs.setComponentRef(r, 'Card_814848')}
          {...injectData}
        >
          <VerticalView
            name={'上下布局'}
            $$componentItem={{
              id: 'VerticalView_3028388',
              uid: 'VerticalView_3028388',
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
            ref={(r: any) => refs.setComponentRef(r, 'VerticalView_3028388')}
            {...injectData}
          >
            <View
              className="View_View_93683"
              name={'布局容器'}
              $$componentItem={{
                id: 'View_93683',
                uid: 'View_93683',
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
              ref={(r: any) => refs.setComponentRef(r, 'View_93683')}
              {...injectData}
            >
              <HorizontalView
                name={'左右布局'}
                $$componentItem={{
                  id: 'HorizontalView_891274',
                  uid: 'HorizontalView_891274',
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
                ref={(r: any) =>
                  refs.setComponentRef(r, 'HorizontalView_891274')
                }
                {...injectData}
              >
                <View
                  className="View_View_855031"
                  name={'布局容器'}
                  $$componentItem={{
                    id: 'View_855031',
                    uid: 'View_855031',
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
                  ref={(r: any) => refs.setComponentRef(r, 'View_855031')}
                  {...injectData}
                >
                  <VerticalView
                    name={'上下布局'}
                    $$componentItem={{
                      id: 'VerticalView_3916324',
                      uid: 'VerticalView_3916324',
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
                      refs.setComponentRef(r, 'VerticalView_3916324')
                    }
                    {...injectData}
                  >
                    <View
                      className="View_View_9175405"
                      name={'布局容器'}
                      $$componentItem={{
                        id: 'View_9175405',
                        uid: 'View_9175405',
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
                      ref={(r: any) => refs.setComponentRef(r, 'View_9175405')}
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
                          id: 'Input_613316',
                          uid: 'Input_613316',
                          type: 'Input',
                          ...componentItem,
                        }}
                        disabled={true}
                        visible={true}
                        readOnly={false}
                        ref={(r: any) =>
                          refs.setComponentRef(r, 'Input_613316')
                        }
                        {...injectData}
                      />
                    </View>
                    <View
                      className="View_View_81597"
                      name={'布局容器'}
                      $$componentItem={{
                        id: 'View_81597',
                        uid: 'View_81597',
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
                      ref={(r: any) => refs.setComponentRef(r, 'View_81597')}
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
                          id: 'Text_292051',
                          uid: 'Text_292051',
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
                        ref={(r: any) => refs.setComponentRef(r, 'Text_292051')}
                        {...injectData}
                      />
                    </View>
                  </VerticalView>
                </View>
                <View
                  className="View_View_257884"
                  name={'布局容器'}
                  $$componentItem={{
                    id: 'View_257884',
                    uid: 'View_257884',
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
                  ref={(r: any) => refs.setComponentRef(r, 'View_257884')}
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
                      id: 'Button_749483',
                      uid: 'Button_749483',
                      type: 'Button',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={false}
                    readOnly={false}
                    style={{ width: 'fit-content' }}
                    onClick={(e: any) => {
                      const eventDataapiRequest710: any = [
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
                                    dataSourceId: 166124254360037760,
                                    dataSourceName: 'factorForm',
                                    dataSourceRelType: 'custom',
                                    dataSourceSetValue: [
                                      {
                                        attrId: '08707745',
                                        code: 'needExp',
                                        name: '需求说明',
                                        type: 'string',
                                        initialData: { type: 'static' },
                                        showInput: true,
                                      },
                                      {
                                        attrId: '66641262',
                                        code: 'acceptResult',
                                        name: '属性',
                                        type: 'string',
                                        initialData: { type: 'static' },
                                        showInput: true,
                                      },
                                      {
                                        attrId: '8082267',
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
                      eventDataapiRequest710.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(
                        eventDataapiRequest710,
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
                    ref={(r: any) => refs.setComponentRef(r, 'Button_749483')}
                    {...injectData}
                  />
                </View>
              </HorizontalView>
            </View>
            <View
              className="View_View_1628505"
              name={'布局容器'}
              $$componentItem={{
                id: 'View_1628505',
                uid: 'View_1628505',
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
              ref={(r: any) => refs.setComponentRef(r, 'View_1628505')}
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
                  {
                    title: '免扰范围',
                    key: 'noDisturbScope',
                    dataIndex: 'noDisturbScope',
                    editoption: {
                      edittype: 'MultipleSelect',
                      selectoption: {
                        attr: {
                          attrName: '免扰范围',
                          attrId: '886805849493164044',
                          attrNbr: 'noDisturbScope',
                        },
                        options: attrDataMap['noDisturbScope'],
                      },
                    },
                    className: 'divider',
                    staticDataSource: attrDataMap['noDisturbScope'],
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
                  id: 'Table_5512983',
                  uid: 'Table_5512983',
                  type: 'Table',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                ref={(r: any) => refs.setComponentRef(r, 'Table_5512983')}
                {...injectData}
              />
            </View>
          </VerticalView>
        </Card>
      </View>
    </div>
  );
};

export default withPageHOC(ClsJc_0004_0001$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
