// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import {
  Checkbox,
  DatePicker,
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

const ClsTy_0001_0001$$Page: React.FC<PageProps> = ({
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
  const sceneFormCheck = (options_22250626: any) => {
    const eventDatavalidateCurrentForm: any = [
      {
        type: 'validateCurrentForm',
        dataId: 166961800892291840,
        options: {
          compId: 'Form_449441',
          compLib: 'comm',
          pageJsonId: '537892',
          compName: 'Form',
          id: '556794',
        },
        line_number: 1,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatavalidateCurrentForm.params =
      [
        {
          title: '事件入参',
          name: 'options_22250626',
          value: '$options_22250626$',
        },
      ] || [];
    CMDGenerator(
      eventDatavalidateCurrentForm,
      { options_22250626 },
      'validateCurrentForm',
      {
        id: 'validateCurrentForm',
        name: 'validateCurrentForm',
        type: 'validateCurrentForm',
        platform: 'undefined',
      },
    );
  };
  const fileUpload = (options_1725587: any) => {
    // console 167037751393324100
    console.log('普通代理商。。。。。');
    const eventDatacustomActionCode35: any = [
      {
        type: 'customActionCode',
        dataId: 167039532491870180,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '183259',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=options_1725587;success()};',
        },
        line_number: 2,
        callback1: [
          {
            type: 'callParentCustomFunc',
            dataId: 167039899420824830,
            options: {
              compId: 'callParentCustomFunc',
              compName: 'system',
              id: '634014',
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
    ];
    eventDatacustomActionCode35.params =
      [
        {
          title: '事件入参',
          name: 'options_1725587',
          value: '$options_1725587$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode35,
      { options_1725587 },
      'customActionCode',
      {
        id: 'customActionCode',
        name: 'customActionCode',
        type: 'customActionCode',
        platform: 'undefined',
      },
    );
  };
  const __page_function_call__ = (options_7003484: any) => {
    // console 167152706256867870
    console.log('调用成功。。。。。。。。。。。');
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    sceneFormCheck,
    fileUpload,
    __page_function_call__,
  }));

  useEffect(() => {
    const eventDataapiRequest125: any = [
      {
        type: 'apiRequest',
        dataId: 166977376706766180,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '3812277',
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
            dataId: 166977376918925200,
            options: {
              compId: 'Input_690228',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '585296',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
              data: '$reply_3812277?.resultData$',
            },
            line_number: 2,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest125.params = [] || [];
    CMDGenerator(eventDataapiRequest125, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest126: any = [
      {
        type: 'apiRequest',
        dataId: 168563207326812800,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '401998',
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
                      dataKey: '401998_root.body.catalogCode',
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
                      dataKey: '401998_root.body.attrCode',
                      value: {
                        type: ['customize'],
                        code: 'legelPersonCertificateType',
                      },
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
                  dataKey: '401998_root.body',
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
              dataKey: '401998_root',
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
        line_number: 3,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 168563211414703800,
            options: {
              compId: 'Input_legelPersonCertificateType_392074',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '391817',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
              data: '$reply_401998?.resultData$',
            },
            line_number: 4,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest126.params = [] || [];
    CMDGenerator(eventDataapiRequest126, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest127: any = [
      {
        type: 'apiRequest',
        dataId: 168563213754069760,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '402262',
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
                      dataKey: '402262_root.body.catalogCode',
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
                      dataKey: '402262_root.body.attrCode',
                      value: {
                        type: ['customize'],
                        code: 'enterpriseCertificateType',
                      },
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
                  dataKey: '402262_root.body',
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
              dataKey: '402262_root',
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
            dataId: 168563216000202370,
            options: {
              compId: 'Input_enterpriseCertificateType_5378208',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '755082',
              labelKey: 'attrValueName',
              data: '$reply_402262?.resultData$',
              valueKey: 'attrValue',
            },
            line_number: 6,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest127.params = [] || [];
    CMDGenerator(eventDataapiRequest127, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest128: any = [
      {
        type: 'apiRequest',
        dataId: 166087684444516740,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '350795',
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
              dataKey: '350795_header',
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
              dataKey: '350795_path',
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
              dataKey: '350795_query',
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
                  dataKey: '350795_body.catalogCode',
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
                  dataKey: '350795_body.attrCode',
                  value: { type: ['customize'], code: 'auditProject' },
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-1',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '350795_body',
              key: '3',
            },
          ],
        },
        line_number: 7,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166357961150308130,
            options: {
              compId: 'Select_3069885',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '562901',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
              data: '$reply_350795?.resultData$',
            },
            line_number: 8,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest128.params = [] || [];
    CMDGenerator(eventDataapiRequest128, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest129: any = [
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
                  attrId: '204969',
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
            line_number: 10,
            callback1: [
              {
                type: 'callParentCustomFunc',
                dataId: 166436852589141900,
                options: {
                  compId: 'callParentCustomFunc',
                  compName: 'system',
                  id: '3948363',
                  pageJsonId: '537892',
                  pathname: '/commonAuditOrder',
                  pageId: '872682457815691264',
                  customFuncName: 'getFactor',
                  customFuncParams: '$data.sceneSubmit$',
                  modalPath: '/commonAuditOrder',
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
    eventDataapiRequest129.params = [] || [];
    CMDGenerator(eventDataapiRequest129, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse85: any = [
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
        elseIfs: [
          {
            dataName: 'elseIf',
            dataId: 167040020543891400,
            children: [
              {
                dataName: 'action',
                dataId: 167040022240572600,
                children: [],
                todoOptions: ['pathname', 'compState'],
                options: {
                  compId: 'Pageview_095833',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Pageview',
                  id: '066931',
                  pathname: '/commonAccessory',
                  selectedType: 'page',
                  pageId: '917361051253690368',
                  modalPath: '/commonAccessory',
                  paramsObj: {
                    catalogCode: '$ state.catalogCode$',
                    createStaff: '$ state.createStaff$',
                  },
                  paramsObjKeyValueMap: {
                    catalogCode: '$ state.catalogCode$',
                    createStaff: '$ state.createStaff$',
                  },
                },
                actionObjId: 'Pageview_095833',
                actionObjName: 'Pageview',
                value: 'setPageSrc',
                compLib: 'comm',
                line_number: 39,
              },
            ],
            condition: [],
            callback: [
              {
                type: 'setPageSrc',
                dataId: 167040022240572600,
                options: {
                  compId: 'Pageview_095833',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Pageview',
                  id: '066931',
                  pathname: '/commonAccessory',
                  selectedType: 'page',
                  pageId: '917361051253690368',
                  modalPath: '/commonAccessory',
                  paramsObj: {
                    catalogCode: '$ state.catalogCode$',
                    createStaff: '$ state.createStaff$',
                  },
                  paramsObjKeyValueMap: {
                    catalogCode: '$ state.catalogCode$',
                    createStaff: '$ state.createStaff$',
                  },
                },
                line_number: 39,
              },
            ],
          },
        ],
        line_number: 12,
        callback1: [
          {
            type: 'console',
            dataId: 168982167967788930,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '2910354',
              pageJsonId: '537892',
              value: ['$data.factorForm$', '======$data.factorForm$'],
            },
            line_number: 13,
          },
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
            line_number: 14,
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
                      attrId: '862761',
                      code: 'auditProject',
                      name: '审批项目',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['auditProject'],
                      _idpath: ['862761'],
                    },
                    {
                      attrId: '913471',
                      code: 'agentName',
                      name: '代理商名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['customize'],
                        code: '$data_9981685.agentName$',
                      },
                      showInput: true,
                      _codePath: ['agentName'],
                      _idpath: ['913471'],
                    },
                    {
                      attrId: '14207',
                      code: 'legalRep',
                      name: '法人代表',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['customize'],
                        code: '$data_9981685.legalRep$',
                      },
                      showInput: true,
                      _codePath: ['legalRep'],
                      _idpath: ['14207'],
                    },
                    {
                      attrId: '345282',
                      code: 'contractTime',
                      name: '签约/续签日期',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['customize'],
                        code: '$data_9981685.contractTime$',
                      },
                      showInput: true,
                      _codePath: ['contractTime'],
                      _idpath: ['345282'],
                    },
                    {
                      attrId: '697477',
                      code: 'phone',
                      name: '电话',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['customize'],
                        code: '$data_9981685.phone$',
                      },
                      showInput: true,
                      _codePath: ['phone'],
                      _idpath: ['697477'],
                    },
                    {
                      attrId: '0214598',
                      code: 'busiScope',
                      name: '代理业务范围',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['customize'],
                        code: '$data_9981685.busiScope$',
                      },
                      showInput: true,
                      _codePath: ['busiScope'],
                      _idpath: ['0214598'],
                    },
                    {
                      attrId: '3101704',
                      code: 'performance',
                      name: '业绩评估',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['customize'],
                        code: '$data_9981685.performance$',
                      },
                      showInput: true,
                      _codePath: ['performance'],
                      _idpath: ['3101704'],
                    },
                    {
                      attrId: '08707745',
                      code: 'reason',
                      name: '申请原因',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['customize'],
                        code: '$data_9981685.reason$',
                      },
                      showInput: true,
                      _codePath: ['reason'],
                      _idpath: ['08707745'],
                    },
                    {
                      attrId: '02414',
                      code: 'quitTime',
                      name: '退出日期',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['customize'],
                        code: '$data_9981685.quitTime$',
                      },
                      showInput: true,
                      _codePath: ['quitTime'],
                      _idpath: ['02414'],
                    },
                    {
                      attrId: '528358',
                      code: 'deadline',
                      name: '签约/续签期限',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['customize'],
                        code: '$data_9981685.deadline$',
                      },
                      showInput: true,
                      _codePath: ['deadline'],
                      _idpath: ['528358'],
                    },
                    {
                      attrId: '561561',
                      code: 'auditProjectName',
                      name: '审批项目名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['auditProjectName'],
                      _idpath: ['561561'],
                      value: { type: [], code: '' },
                    },
                    {
                      attrId: '532775',
                      code: 'enterpriseCertificateType',
                      name: '企业证件类型',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['enterpriseCertificateType'],
                      _idpath: ['532775'],
                      value: {
                        type: ['context', '$data_9981685$'],
                        code: 'enterpriseCertificateType',
                      },
                    },
                    {
                      attrId: '656147',
                      code: 'legelPersonCertificateCode',
                      name: '法人证件编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['legelPersonCertificateCode'],
                      _idpath: ['656147'],
                      value: {
                        type: ['context', '$data_9981685$'],
                        code: 'legelPersonCertificateCode',
                      },
                    },
                    {
                      attrId: '685691',
                      code: 'agentCode',
                      name: '代理商编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['agentCode'],
                      _idpath: ['685691'],
                      value: {
                        type: ['context', '$data_9981685$'],
                        code: 'agentCode',
                      },
                    },
                    {
                      attrId: '1061333',
                      code: 'legelPersonCertificateType',
                      name: '法人证件类型',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['legelPersonCertificateType'],
                      _idpath: ['1061333'],
                      value: {
                        type: ['context', '$data_9981685$'],
                        code: 'legelPersonCertificateType',
                      },
                    },
                    {
                      attrId: '4203007',
                      code: 'enterpriseCertificateCode',
                      name: '企业证件编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['enterpriseCertificateCode'],
                      _idpath: ['4203007'],
                      value: {
                        type: ['context', '$data_9981685$'],
                        code: 'enterpriseCertificateCode',
                      },
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
              {
                type: 'setValue',
                dataId: 166253126518464860,
                options: {
                  compId: 'Input_361479_887285',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '286706',
                  value: '$state.itemList.approveGradeName$',
                  valueList: {
                    Input_361479_887285: '$state.itemList.approveGradeName$',
                  },
                },
                line_number: 16,
                callback1: [],
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '0100777',
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$data_9981685.auditProject$',
                      operate: '==',
                      manualValue: '3',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 168567665962927230,
                elseIfs: [
                  {
                    dataName: 'elseIf',
                    dataId: 168567665962996640,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 168567665962925570,
                        children: [],
                        todoOptions: ['visible'],
                        options: {
                          compId: [
                            'Input_quitTime_5963657',
                            'Input_enterpriseCertificateType_5378208',
                            'Input_enterpriseCertificateCode_718668',
                            'Input_legelPersonCertificateType_392074',
                            'Input_legelPersonCertificateCode_877952',
                          ],
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Input',
                          id: '557218',
                          visible: '',
                          compid: [
                            'Input_quitTime_5963657',
                            'Input_enterpriseCertificateType_5378208',
                            'Input_enterpriseCertificateCode_718668',
                            'Input_legelPersonCertificateType_392074',
                            'Input_legelPersonCertificateCode_877952',
                          ],
                        },
                        actionObjId: 'Input_quitTime_5963657',
                        actionObjName: 'Input',
                        value: 'setVisible',
                        compLib: 'comm',
                        line_number: 22,
                      },
                      {
                        dataName: 'action',
                        dataId: 168567665962970620,
                        children: [],
                        todoOptions: ['visible'],
                        options: {
                          compId: [
                            'Input_contractTime_746901',
                            'Input_deadline_8684165',
                            'Input_agentCode_424715',
                          ],
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Input',
                          id: '559766',
                          visible: 'true',
                          compid: [
                            'Input_contractTime_746901',
                            'Input_deadline_8684165',
                            'Input_agentCode_424715',
                          ],
                        },
                        actionObjId: 'Input_contractTime_746901',
                        actionObjName: 'Input',
                        value: 'setVisible',
                        compLib: 'comm',
                        line_number: 23,
                      },
                      {
                        dataName: 'action',
                        dataId: 168567665962927740,
                        children: [],
                        todoOptions: ['required', 'selectComp'],
                        options: {
                          compId: [
                            'Input_enterpriseCertificateType_5378208',
                            'Input_enterpriseCertificateCode_718668',
                            'Input_legelPersonCertificateType_392074',
                            'Input_legelPersonCertificateCode_877952',
                            'Input_quitTime_5963657',
                          ],
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Input',
                          id: '024918',
                          required: '',
                          compid: [
                            'Input_enterpriseCertificateType_5378208',
                            'Input_enterpriseCertificateCode_718668',
                            'Input_legelPersonCertificateType_392074',
                            'Input_legelPersonCertificateCode_877952',
                            'Input_quitTime_5963657',
                          ],
                        },
                        actionObjId: 'Input_agentCode_424715',
                        actionObjName: 'Input',
                        value: 'setRequired',
                        compLib: 'comm',
                        line_number: 24,
                      },
                      {
                        dataName: 'action',
                        dataId: 168567665962996450,
                        children: [],
                        todoOptions: ['required', 'selectComp'],
                        options: {
                          compId: [
                            'Input_agentCode_424715',
                            'Input_deadline_8684165',
                            'Input_contractTime_746901',
                          ],
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Input',
                          id: '99815',
                          required: 'true',
                          compid: [
                            'Input_agentCode_424715',
                            'Input_deadline_8684165',
                            'Input_contractTime_746901',
                          ],
                        },
                        actionObjId: 'Input_agentCode_424715',
                        actionObjName: 'Input',
                        value: 'setRequired',
                        compLib: 'comm',
                        line_number: 25,
                      },
                    ],
                    condition: [
                      {
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$data_9981685.auditProject$',
                          operate: '==',
                          manualValue: '2',
                        },
                        condId: '090663',
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    desc: '续签',
                    callback: [
                      {
                        type: 'setVisible',
                        dataId: 168567665962925570,
                        options: {
                          compId: [
                            'Input_quitTime_5963657',
                            'Input_enterpriseCertificateType_5378208',
                            'Input_enterpriseCertificateCode_718668',
                            'Input_legelPersonCertificateType_392074',
                            'Input_legelPersonCertificateCode_877952',
                          ],
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Input',
                          id: '557218',
                          visible: '',
                          compid: [
                            'Input_quitTime_5963657',
                            'Input_enterpriseCertificateType_5378208',
                            'Input_enterpriseCertificateCode_718668',
                            'Input_legelPersonCertificateType_392074',
                            'Input_legelPersonCertificateCode_877952',
                          ],
                        },
                        line_number: 22,
                      },
                      {
                        type: 'setVisible',
                        dataId: 168567665962970620,
                        options: {
                          compId: [
                            'Input_contractTime_746901',
                            'Input_deadline_8684165',
                            'Input_agentCode_424715',
                          ],
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Input',
                          id: '559766',
                          visible: 'true',
                          compid: [
                            'Input_contractTime_746901',
                            'Input_deadline_8684165',
                            'Input_agentCode_424715',
                          ],
                        },
                        line_number: 23,
                      },
                      {
                        type: 'setRequired',
                        dataId: 168567665962927740,
                        options: {
                          compId: [
                            'Input_enterpriseCertificateType_5378208',
                            'Input_enterpriseCertificateCode_718668',
                            'Input_legelPersonCertificateType_392074',
                            'Input_legelPersonCertificateCode_877952',
                            'Input_quitTime_5963657',
                          ],
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Input',
                          id: '024918',
                          required: '',
                          compid: [
                            'Input_enterpriseCertificateType_5378208',
                            'Input_enterpriseCertificateCode_718668',
                            'Input_legelPersonCertificateType_392074',
                            'Input_legelPersonCertificateCode_877952',
                            'Input_quitTime_5963657',
                          ],
                        },
                        line_number: 24,
                      },
                      {
                        type: 'setRequired',
                        dataId: 168567665962996450,
                        options: {
                          compId: [
                            'Input_agentCode_424715',
                            'Input_deadline_8684165',
                            'Input_contractTime_746901',
                          ],
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Input',
                          id: '99815',
                          required: 'true',
                          compid: [
                            'Input_agentCode_424715',
                            'Input_deadline_8684165',
                            'Input_contractTime_746901',
                          ],
                        },
                        line_number: 25,
                      },
                    ],
                  },
                  {
                    dataName: 'elseIf',
                    dataId: 168567665962929920,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 168567665962961730,
                        children: [],
                        todoOptions: ['visible', 'selectComp'],
                        options: {
                          compId: [
                            'Input_agentCode_424715',
                            'Input_quitTime_5963657',
                          ],
                          compName: 'page',
                          id: '779169',
                          pageJsonId: '537892',
                          visible: '',
                          compid: [
                            'Input_agentCode_424715',
                            'Input_quitTime_5963657',
                          ],
                        },
                        actionObjId: 'sysSetVisible',
                        actionObjName: 'page',
                        value: 'sysSetVisible',
                        line_number: 26,
                      },
                      {
                        dataName: 'action',
                        dataId: 168567665962932380,
                        children: [],
                        todoOptions: ['visible', 'selectComp'],
                        options: {
                          compId: [
                            'Input_enterpriseCertificateType_5378208',
                            'Input_enterpriseCertificateCode_718668',
                            'Input_legelPersonCertificateType_392074',
                            'Input_legelPersonCertificateCode_877952',
                            'Input_contractTime_746901',
                            'Input_deadline_8684165',
                          ],
                          compName: 'page',
                          id: '83099',
                          pageJsonId: '537892',
                          visible: 'true',
                          compid: [
                            'Input_enterpriseCertificateType_5378208',
                            'Input_enterpriseCertificateCode_718668',
                            'Input_legelPersonCertificateType_392074',
                            'Input_legelPersonCertificateCode_877952',
                            'Input_contractTime_746901',
                            'Input_deadline_8684165',
                          ],
                        },
                        actionObjId: 'sysSetVisible',
                        actionObjName: 'page',
                        value: 'sysSetVisible',
                        line_number: 27,
                      },
                      {
                        dataName: 'action',
                        dataId: 168567665962907680,
                        children: [],
                        todoOptions: ['required', 'selectComp'],
                        options: {
                          compId: [
                            'Input_agentCode_424715',
                            'Input_quitTime_5963657',
                          ],
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Input',
                          id: '817835',
                          required: '',
                          compid: [
                            'Input_agentCode_424715',
                            'Input_quitTime_5963657',
                          ],
                        },
                        actionObjId: 'Input_agentCode_424715',
                        actionObjName: 'Input',
                        value: 'setRequired',
                        compLib: 'comm',
                        line_number: 28,
                      },
                      {
                        dataName: 'action',
                        dataId: 168567665962963140,
                        children: [],
                        todoOptions: ['required', 'selectComp'],
                        options: {
                          compId: [
                            'Input_enterpriseCertificateType_5378208',
                            'Input_enterpriseCertificateCode_718668',
                            'Input_legelPersonCertificateType_392074',
                            'Input_legelPersonCertificateCode_877952',
                            'Input_contractTime_746901',
                            'Input_deadline_8684165',
                          ],
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Input',
                          id: '004907',
                          required: 'true',
                          compid: [
                            'Input_enterpriseCertificateType_5378208',
                            'Input_enterpriseCertificateCode_718668',
                            'Input_legelPersonCertificateType_392074',
                            'Input_legelPersonCertificateCode_877952',
                            'Input_contractTime_746901',
                            'Input_deadline_8684165',
                          ],
                        },
                        actionObjId: 'Input_agentCode_424715',
                        actionObjName: 'Input',
                        value: 'setRequired',
                        compLib: 'comm',
                        line_number: 29,
                      },
                    ],
                    condition: [
                      {
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$data_9981685.auditProject$',
                          operate: '==',
                          manualValue: '1',
                        },
                        condId: '3028126',
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    value: 'elseIf',
                    desc: '引入',
                    callback: [
                      {
                        type: 'sysSetVisible',
                        dataId: 168567665962961730,
                        options: {
                          compId: [
                            'Input_agentCode_424715',
                            'Input_quitTime_5963657',
                          ],
                          compName: 'page',
                          id: '779169',
                          pageJsonId: '537892',
                          visible: '',
                          compid: [
                            'Input_agentCode_424715',
                            'Input_quitTime_5963657',
                          ],
                        },
                        line_number: 26,
                      },
                      {
                        type: 'sysSetVisible',
                        dataId: 168567665962932380,
                        options: {
                          compId: [
                            'Input_enterpriseCertificateType_5378208',
                            'Input_enterpriseCertificateCode_718668',
                            'Input_legelPersonCertificateType_392074',
                            'Input_legelPersonCertificateCode_877952',
                            'Input_contractTime_746901',
                            'Input_deadline_8684165',
                          ],
                          compName: 'page',
                          id: '83099',
                          pageJsonId: '537892',
                          visible: 'true',
                          compid: [
                            'Input_enterpriseCertificateType_5378208',
                            'Input_enterpriseCertificateCode_718668',
                            'Input_legelPersonCertificateType_392074',
                            'Input_legelPersonCertificateCode_877952',
                            'Input_contractTime_746901',
                            'Input_deadline_8684165',
                          ],
                        },
                        line_number: 27,
                      },
                      {
                        type: 'setRequired',
                        dataId: 168567665962907680,
                        options: {
                          compId: [
                            'Input_agentCode_424715',
                            'Input_quitTime_5963657',
                          ],
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Input',
                          id: '817835',
                          required: '',
                          compid: [
                            'Input_agentCode_424715',
                            'Input_quitTime_5963657',
                          ],
                        },
                        line_number: 28,
                      },
                      {
                        type: 'setRequired',
                        dataId: 168567665962963140,
                        options: {
                          compId: [
                            'Input_enterpriseCertificateType_5378208',
                            'Input_enterpriseCertificateCode_718668',
                            'Input_legelPersonCertificateType_392074',
                            'Input_legelPersonCertificateCode_877952',
                            'Input_contractTime_746901',
                            'Input_deadline_8684165',
                          ],
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Input',
                          id: '004907',
                          required: 'true',
                          compid: [
                            'Input_enterpriseCertificateType_5378208',
                            'Input_enterpriseCertificateCode_718668',
                            'Input_legelPersonCertificateType_392074',
                            'Input_legelPersonCertificateCode_877952',
                            'Input_contractTime_746901',
                            'Input_deadline_8684165',
                          ],
                        },
                        line_number: 29,
                      },
                    ],
                  },
                ],
                line_number: 17,
                callback1: [
                  {
                    type: 'setVisible',
                    dataId: 168567665962950560,
                    options: {
                      compId: [
                        'Input_deadline_8684165',
                        'Input_contractTime_746901',
                        'Input_enterpriseCertificateType_5378208',
                        'Input_enterpriseCertificateCode_718668',
                        'Input_legelPersonCertificateType_392074',
                        'Input_legelPersonCertificateCode_877952',
                      ],
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '9752',
                      visible: '',
                      compid: [
                        'Input_deadline_8684165',
                        'Input_contractTime_746901',
                        'Input_enterpriseCertificateType_5378208',
                        'Input_enterpriseCertificateCode_718668',
                        'Input_legelPersonCertificateType_392074',
                        'Input_legelPersonCertificateCode_877952',
                      ],
                    },
                    line_number: 18,
                  },
                  {
                    type: 'setVisible',
                    dataId: 168567665962977860,
                    options: {
                      compId: [
                        'Input_quitTime_5963657',
                        'Input_agentCode_424715',
                      ],
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '327369',
                      visible: 'true',
                      compid: [
                        'Input_quitTime_5963657',
                        'Input_agentCode_424715',
                      ],
                    },
                    line_number: 19,
                  },
                  {
                    type: 'setRequired',
                    dataId: 168567665962972060,
                    options: {
                      compId: [
                        'Input_enterpriseCertificateType_5378208',
                        'Input_enterpriseCertificateCode_718668',
                        'Input_legelPersonCertificateType_392074',
                        'Input_legelPersonCertificateCode_877952',
                        'Input_contractTime_746901',
                        'Input_deadline_8684165',
                      ],
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '149374',
                      required: '',
                      compid: [
                        'Input_enterpriseCertificateType_5378208',
                        'Input_enterpriseCertificateCode_718668',
                        'Input_legelPersonCertificateType_392074',
                        'Input_legelPersonCertificateCode_877952',
                        'Input_contractTime_746901',
                        'Input_deadline_8684165',
                      ],
                    },
                    line_number: 20,
                  },
                  {
                    type: 'setRequired',
                    dataId: 168567665962988130,
                    options: {
                      compId: [
                        'Input_agentCode_424715',
                        'Input_quitTime_5963657',
                      ],
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '042255',
                      required: 'true',
                      compid: [
                        'Input_agentCode_424715',
                        'Input_quitTime_5963657',
                      ],
                    },
                    line_number: 21,
                  },
                ],
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
            line_number: 30,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 167050443364676500,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '026746',
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
                line_number: 31,
                callback1: [],
                callback2: [],
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    options: { context: '$data_859603$', operate: 'empty' },
                    condId: '4927332',
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
                    condId: '298542',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166738091123361340,
                elseIfs: [],
                line_number: 32,
                callback1: [
                  {
                    type: 'setVisible',
                    dataId: 166738099977158880,
                    options: {
                      compId: 'Table_5369494',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Table',
                      id: '727833',
                      visible: '',
                    },
                    line_number: 33,
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
            line_number: 34,
            callback1: [
              {
                type: 'setVisible',
                dataId: 166237240702865340,
                options: {
                  compId: 'Input_361479_887285',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '456386',
                  visible: 'true',
                },
                line_number: 35,
              },
              {
                type: 'setDisable',
                dataId: 166176050746976930,
                options: {
                  compId: 'Form_449441',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Form',
                  id: '142454',
                  disabled: 'true',
                },
                line_number: 36,
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
                line_number: 37,
              },
              {
                type: 'setDisable',
                dataId: 166244978968202100,
                options: {
                  compId: 'Input_361479_887285',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '796996',
                  disabled: 'true',
                },
                line_number: 38,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse85.params = [] || [];
    CMDGenerator(eventDataifelse85, {}, 'ifelse', {
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
          padding: '0px 0px 0px 0px',
          overflowY: 'hidden',
          width: '100%',
          margin: 'px px px px',
          overflow: 'hidden',
        }}
        ref={(r: any) => (refs['View_537892_1'] = r)}
        {...injectData}
      >
        <Divider
          name={'分割线'}
          orientation={'center'}
          type={'horizontal'}
          dashed={false}
          dividerText={'普通代理商引入、续签、退出'}
          showTitle={true}
          $$componentItem={{
            id: 'Divider_8693014',
            uid: 'Divider_8693014',
            type: 'Divider',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ margin: '12px 0 12px 0', height: '0A' }}
          ref={(r: any) => (refs['Divider_8693014'] = r)}
          {...injectData}
        />
        <View
          name={'布局容器'}
          className={'fixed-form-item-label-width-150'}
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
              overflowY: 'visible',
              margin: '0px 0px 8px 0px',
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
                overflowY: 'visible',
                margin: '0px 0px 0px 0px',
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
                $$componentItem={{
                  id: 'Form_4311097',
                  uid: 'Form_4311097',
                  type: 'Form',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) => (refs['Form_4311097'] = r)}
                {...injectData}
              >
                <Checkbox
                  name={'审批场景'}
                  titleTip={'text'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  text={'普通代理商引入、续签、退出'}
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
                    id: 'Checkbox_882584_5289015',
                    uid: 'Checkbox_882584_5289015',
                    type: 'Checkbox',
                    ...componentItem,
                  }}
                  disabled={true}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => (refs['Checkbox_882584_5289015'] = r)}
                  {...injectData}
                />
                <View
                  name={'布局容器'}
                  labelCol={8}
                  wrapperCol={16}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_556162',
                    uid: 'View_556162',
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
                  ref={(r: any) => (refs['View_556162'] = r)}
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
                    id: 'Input_361479_887285',
                    uid: 'Input_361479_887285',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={false}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => (refs['Input_361479_887285'] = r)}
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
            rowSpace={8}
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
              id: 'Form_449441',
              uid: 'Form_449441',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            onValuesChange={(changedFieldName: any, changedValue: any) => {
              const eventDatasetDataSource50: any = [
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
                        attrId: '862761',
                        code: 'auditProject',
                        name: '审批项目',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_449441', 'getFieldsValue'],
                          code: 'auditProject',
                        },
                      },
                      {
                        attrId: '913471',
                        code: 'agentName',
                        name: '代理商名称',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_449441', 'getFieldsValue'],
                          code: 'agentName',
                        },
                      },
                      {
                        attrId: '14207',
                        code: 'legalRep',
                        name: '法人代表',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_449441', 'getFieldsValue'],
                          code: 'legalRep',
                        },
                      },
                      {
                        attrId: '345282',
                        code: 'contractTime',
                        name: '签约/续签日期',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_449441', 'getFieldsValue'],
                          code: 'contractTime',
                        },
                      },
                      {
                        attrId: '697477',
                        code: 'phone',
                        name: '电话',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_449441', 'getFieldsValue'],
                          code: 'phone',
                        },
                      },
                      {
                        attrId: '0214598',
                        code: 'busiScope',
                        name: '代理业务范围',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_449441', 'getFieldsValue'],
                          code: 'busiScope',
                        },
                      },
                      {
                        attrId: '3101704',
                        code: 'performance',
                        name: '业绩评估',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_449441', 'getFieldsValue'],
                          code: 'performance',
                        },
                      },
                      {
                        attrId: '08707745',
                        code: 'reason',
                        name: '申请原因',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_449441', 'getFieldsValue'],
                          code: 'reason',
                        },
                      },
                      {
                        attrId: '02414',
                        code: 'quitTime',
                        name: '退出日期',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_449441', 'getFieldsValue'],
                          code: 'quitTime',
                        },
                      },
                      {
                        attrId: '528358',
                        code: 'deadline',
                        name: '签约/续签期限',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_449441', 'getFieldsValue'],
                          code: 'deadline',
                        },
                      },
                      {
                        attrId: '561561',
                        code: 'auditProjectName',
                        name: '审批项目名称',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                      },
                      {
                        attrId: '656147',
                        code: 'legelPersonCertificateCode',
                        name: '法人证件编码',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_449441', 'getFieldsValue'],
                          code: 'legelPersonCertificateCode',
                        },
                      },
                      {
                        attrId: '1061333',
                        code: 'legelPersonCertificateType',
                        name: '法人证件类型',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_449441', 'getFieldsValue'],
                          code: 'legelPersonCertificateType',
                        },
                      },
                      {
                        attrId: '4203007',
                        code: 'enterpriseCertificateCode',
                        name: '企业证件编码',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_449441', 'getFieldsValue'],
                          code: 'enterpriseCertificateCode',
                        },
                      },
                      {
                        attrId: '532775',
                        code: 'enterpriseCertificateType',
                        name: '企业证件类型',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_449441', 'getFieldsValue'],
                          code: 'enterpriseCertificateType',
                        },
                      },
                      {
                        attrId: '685691',
                        code: 'agentCode',
                        name: '代理商编码',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: ['form', 'Form_449441', 'getFieldsValue'],
                          code: 'agentCode',
                        },
                      },
                    ],
                    onlySetPatch: true,
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'customActionCode',
                      dataId: 166320892101808900,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '981235',
                        pageJsonId: '537892',
                        actionTitle: '',
                        code: 'function main(data,state,success,fail){var attrList=[];var obj=data.factorForm;for(var key in obj){attrList.push({"attrCode":key,"attrName":"","attrValue":obj[key]})}data.sceneSubmit.attrList=attrList;console.log("\\u63D0\\u4EA4\\u6570\\u636E\\u3002\\u3002\\u3002\\u3002\\u3002\\u3002\\u3002\\u3002\\u3002\\u3002\\u3002");console.log(data.sceneSubmit);success(attrList)};',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'callParentCustomFunc',
                          dataId: 166320892101881500,
                          options: {
                            compId: 'callParentCustomFunc',
                            compName: 'system',
                            id: '853032',
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
              eventDatasetDataSource50.params =
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
                eventDatasetDataSource50,
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
            ref={(r: any) => (refs['Form_449441'] = r)}
            {...injectData}
          >
            <Select
              name={'审批项目'}
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
              placeholder={'请选择'}
              formItemIndex={0}
              fieldName={'auditProject'}
              value={data?.factorForm?.auditProject}
              $$componentItem={{
                id: 'Select_3069885',
                uid: 'Select_3069885',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDataclearValue69: any = [
                  {
                    type: 'clearValue',
                    dataId: 168552101012167040,
                    options: {
                      compId: 'Input_agentCode_424715',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '584916',
                    },
                    line_number: 1,
                  },
                ];
                eventDataclearValue69.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDataclearValue69, { e }, 'clearValue', {
                  id: 'clearValue',
                  name: 'clearValue',
                  type: 'clearValue',
                  platform: 'pc',
                });
                const eventDataclearValue70: any = [
                  {
                    type: 'clearValue',
                    dataId: 168552102004982820,
                    options: {
                      compId: 'Input_enterpriseCertificateType_5378208',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Select',
                      id: '861001',
                    },
                    line_number: 2,
                  },
                ];
                eventDataclearValue70.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDataclearValue70, { e }, 'clearValue', {
                  id: 'clearValue',
                  name: 'clearValue',
                  type: 'clearValue',
                  platform: 'pc',
                });
                const eventDataclearValue71: any = [
                  {
                    type: 'clearValue',
                    dataId: 168552102282211940,
                    options: {
                      compId: 'Input_enterpriseCertificateCode_718668',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '18771',
                    },
                    line_number: 3,
                  },
                ];
                eventDataclearValue71.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDataclearValue71, { e }, 'clearValue', {
                  id: 'clearValue',
                  name: 'clearValue',
                  type: 'clearValue',
                  platform: 'pc',
                });
                const eventDataclearValue72: any = [
                  {
                    type: 'clearValue',
                    dataId: 168552102537430370,
                    options: {
                      compId: 'Input_legelPersonCertificateType_392074',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Select',
                      id: '063496',
                    },
                    line_number: 4,
                  },
                ];
                eventDataclearValue72.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDataclearValue72, { e }, 'clearValue', {
                  id: 'clearValue',
                  name: 'clearValue',
                  type: 'clearValue',
                  platform: 'pc',
                });
                const eventDataclearValue73: any = [
                  {
                    type: 'clearValue',
                    dataId: 168552102847574050,
                    options: {
                      compId: 'Input_legelPersonCertificateCode_877952',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '730783',
                    },
                    line_number: 5,
                  },
                ];
                eventDataclearValue73.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDataclearValue73, { e }, 'clearValue', {
                  id: 'clearValue',
                  name: 'clearValue',
                  type: 'clearValue',
                  platform: 'pc',
                });
                const eventDataclearValue74: any = [
                  {
                    type: 'clearValue',
                    dataId: 168552103120613540,
                    options: {
                      compId: 'Input_contractTime_746901',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'DatePicker',
                      id: '7693964',
                    },
                    line_number: 6,
                  },
                ];
                eventDataclearValue74.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDataclearValue74, { e }, 'clearValue', {
                  id: 'clearValue',
                  name: 'clearValue',
                  type: 'clearValue',
                  platform: 'pc',
                });
                const eventDataclearValue75: any = [
                  {
                    type: 'clearValue',
                    dataId: 168552103438830200,
                    options: {
                      compId: 'Input_deadline_8684165',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '288822',
                    },
                    line_number: 7,
                  },
                ];
                eventDataclearValue75.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDataclearValue75, { e }, 'clearValue', {
                  id: 'clearValue',
                  name: 'clearValue',
                  type: 'clearValue',
                  platform: 'pc',
                });
                const eventDataclearValue76: any = [
                  {
                    type: 'clearValue',
                    dataId: 168552103646491300,
                    options: {
                      compId: 'Input_quitTime_5963657',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'DatePicker',
                      id: '727614',
                    },
                    line_number: 8,
                  },
                ];
                eventDataclearValue76.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDataclearValue76, { e }, 'clearValue', {
                  id: 'clearValue',
                  name: 'clearValue',
                  type: 'clearValue',
                  platform: 'pc',
                });
                const eventDatagetSelectedData71: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 168552100134636930,
                    options: {
                      compId: 'Select_3069885',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Select',
                      id: '837176',
                    },
                    line_number: 9,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '0100777',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$selectedData_837176[0].value$',
                              operate: '==',
                              manualValue: '3',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 168552100134637630,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 168552100134671840,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 168552100134622500,
                                children: [],
                                todoOptions: ['visible'],
                                options: {
                                  compId: [
                                    'Input_quitTime_5963657',
                                    'Input_enterpriseCertificateType_5378208',
                                    'Input_enterpriseCertificateCode_718668',
                                    'Input_legelPersonCertificateType_392074',
                                    'Input_legelPersonCertificateCode_877952',
                                  ],
                                  compLib: 'comm',
                                  pageJsonId: '537892',
                                  compName: 'Input',
                                  id: '1712213',
                                  visible: '',
                                  compid: [
                                    'Input_quitTime_5963657',
                                    'Input_enterpriseCertificateType_5378208',
                                    'Input_enterpriseCertificateCode_718668',
                                    'Input_legelPersonCertificateType_392074',
                                    'Input_legelPersonCertificateCode_877952',
                                  ],
                                },
                                actionObjId: 'Input_quitTime_5963657',
                                actionObjName: 'Input',
                                value: 'setVisible',
                                compLib: 'comm',
                                line_number: 15,
                              },
                              {
                                dataName: 'action',
                                dataId: 168552100134687100,
                                children: [],
                                todoOptions: ['visible'],
                                options: {
                                  compId: [
                                    'Input_contractTime_746901',
                                    'Input_deadline_8684165',
                                    'Input_agentCode_424715',
                                  ],
                                  compLib: 'comm',
                                  pageJsonId: '537892',
                                  compName: 'Input',
                                  id: '697981',
                                  visible: 'true',
                                  compid: [
                                    'Input_contractTime_746901',
                                    'Input_deadline_8684165',
                                    'Input_agentCode_424715',
                                  ],
                                },
                                actionObjId: 'Input_contractTime_746901',
                                actionObjName: 'Input',
                                value: 'setVisible',
                                compLib: 'comm',
                                line_number: 16,
                              },
                              {
                                dataName: 'action',
                                dataId: 168552100134685250,
                                children: [],
                                todoOptions: ['required', 'selectComp'],
                                options: {
                                  compId: [
                                    'Input_enterpriseCertificateType_5378208',
                                    'Input_enterpriseCertificateCode_718668',
                                    'Input_legelPersonCertificateType_392074',
                                    'Input_legelPersonCertificateCode_877952',
                                    'Input_quitTime_5963657',
                                  ],
                                  compLib: 'comm',
                                  pageJsonId: '537892',
                                  compName: 'Input',
                                  id: '057583',
                                  required: '',
                                  compid: [
                                    'Input_enterpriseCertificateType_5378208',
                                    'Input_enterpriseCertificateCode_718668',
                                    'Input_legelPersonCertificateType_392074',
                                    'Input_legelPersonCertificateCode_877952',
                                    'Input_quitTime_5963657',
                                  ],
                                },
                                actionObjId: 'Input_agentCode_424715',
                                actionObjName: 'Input',
                                value: 'setRequired',
                                compLib: 'comm',
                                line_number: 17,
                              },
                              {
                                dataName: 'action',
                                dataId: 168552100134668480,
                                children: [],
                                todoOptions: ['required', 'selectComp'],
                                options: {
                                  compId: [
                                    'Input_agentCode_424715',
                                    'Input_deadline_8684165',
                                    'Input_contractTime_746901',
                                  ],
                                  compLib: 'comm',
                                  pageJsonId: '537892',
                                  compName: 'Input',
                                  id: '1337857',
                                  required: 'true',
                                  compid: [
                                    'Input_agentCode_424715',
                                    'Input_deadline_8684165',
                                    'Input_contractTime_746901',
                                  ],
                                },
                                actionObjId: 'Input_agentCode_424715',
                                actionObjName: 'Input',
                                value: 'setRequired',
                                compLib: 'comm',
                                line_number: 18,
                              },
                            ],
                            condition: [
                              {
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context: '$selectedData_837176[0].value$',
                                  operate: '==',
                                  manualValue: '2',
                                },
                                condId: '090663',
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            desc: '续签',
                            callback: [
                              {
                                type: 'setVisible',
                                dataId: 168552100134622500,
                                options: {
                                  compId: [
                                    'Input_quitTime_5963657',
                                    'Input_enterpriseCertificateType_5378208',
                                    'Input_enterpriseCertificateCode_718668',
                                    'Input_legelPersonCertificateType_392074',
                                    'Input_legelPersonCertificateCode_877952',
                                  ],
                                  compLib: 'comm',
                                  pageJsonId: '537892',
                                  compName: 'Input',
                                  id: '1712213',
                                  visible: '',
                                  compid: [
                                    'Input_quitTime_5963657',
                                    'Input_enterpriseCertificateType_5378208',
                                    'Input_enterpriseCertificateCode_718668',
                                    'Input_legelPersonCertificateType_392074',
                                    'Input_legelPersonCertificateCode_877952',
                                  ],
                                },
                                line_number: 15,
                              },
                              {
                                type: 'setVisible',
                                dataId: 168552100134687100,
                                options: {
                                  compId: [
                                    'Input_contractTime_746901',
                                    'Input_deadline_8684165',
                                    'Input_agentCode_424715',
                                  ],
                                  compLib: 'comm',
                                  pageJsonId: '537892',
                                  compName: 'Input',
                                  id: '697981',
                                  visible: 'true',
                                  compid: [
                                    'Input_contractTime_746901',
                                    'Input_deadline_8684165',
                                    'Input_agentCode_424715',
                                  ],
                                },
                                line_number: 16,
                              },
                              {
                                type: 'setRequired',
                                dataId: 168552100134685250,
                                options: {
                                  compId: [
                                    'Input_enterpriseCertificateType_5378208',
                                    'Input_enterpriseCertificateCode_718668',
                                    'Input_legelPersonCertificateType_392074',
                                    'Input_legelPersonCertificateCode_877952',
                                    'Input_quitTime_5963657',
                                  ],
                                  compLib: 'comm',
                                  pageJsonId: '537892',
                                  compName: 'Input',
                                  id: '057583',
                                  required: '',
                                  compid: [
                                    'Input_enterpriseCertificateType_5378208',
                                    'Input_enterpriseCertificateCode_718668',
                                    'Input_legelPersonCertificateType_392074',
                                    'Input_legelPersonCertificateCode_877952',
                                    'Input_quitTime_5963657',
                                  ],
                                },
                                line_number: 17,
                              },
                              {
                                type: 'setRequired',
                                dataId: 168552100134668480,
                                options: {
                                  compId: [
                                    'Input_agentCode_424715',
                                    'Input_deadline_8684165',
                                    'Input_contractTime_746901',
                                  ],
                                  compLib: 'comm',
                                  pageJsonId: '537892',
                                  compName: 'Input',
                                  id: '1337857',
                                  required: 'true',
                                  compid: [
                                    'Input_agentCode_424715',
                                    'Input_deadline_8684165',
                                    'Input_contractTime_746901',
                                  ],
                                },
                                line_number: 18,
                              },
                            ],
                          },
                          {
                            dataName: 'elseIf',
                            dataId: 168552100134697860,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 168552100134613660,
                                children: [],
                                todoOptions: ['visible', 'selectComp'],
                                options: {
                                  compId: [
                                    'Input_agentCode_424715',
                                    'Input_quitTime_5963657',
                                  ],
                                  compName: 'page',
                                  id: '969619',
                                  pageJsonId: '537892',
                                  visible: '',
                                  compid: [
                                    'Input_agentCode_424715',
                                    'Input_quitTime_5963657',
                                  ],
                                },
                                actionObjId: 'sysSetVisible',
                                actionObjName: 'page',
                                value: 'sysSetVisible',
                                line_number: 19,
                              },
                              {
                                dataName: 'action',
                                dataId: 168552100134685060,
                                children: [],
                                todoOptions: ['visible', 'selectComp'],
                                options: {
                                  compId: [
                                    'Input_enterpriseCertificateType_5378208',
                                    'Input_enterpriseCertificateCode_718668',
                                    'Input_legelPersonCertificateType_392074',
                                    'Input_legelPersonCertificateCode_877952',
                                    'Input_contractTime_746901',
                                    'Input_deadline_8684165',
                                  ],
                                  compName: 'page',
                                  id: '044936',
                                  pageJsonId: '537892',
                                  visible: 'true',
                                  compid: [
                                    'Input_enterpriseCertificateType_5378208',
                                    'Input_enterpriseCertificateCode_718668',
                                    'Input_legelPersonCertificateType_392074',
                                    'Input_legelPersonCertificateCode_877952',
                                    'Input_contractTime_746901',
                                    'Input_deadline_8684165',
                                  ],
                                },
                                actionObjId: 'sysSetVisible',
                                actionObjName: 'page',
                                value: 'sysSetVisible',
                                line_number: 20,
                              },
                              {
                                dataName: 'action',
                                dataId: 168552100134616220,
                                children: [],
                                todoOptions: ['required', 'selectComp'],
                                options: {
                                  compId: [
                                    'Input_agentCode_424715',
                                    'Input_quitTime_5963657',
                                  ],
                                  compLib: 'comm',
                                  pageJsonId: '537892',
                                  compName: 'Input',
                                  id: '750618',
                                  required: '',
                                  compid: [
                                    'Input_agentCode_424715',
                                    'Input_quitTime_5963657',
                                  ],
                                },
                                actionObjId: 'Input_agentCode_424715',
                                actionObjName: 'Input',
                                value: 'setRequired',
                                compLib: 'comm',
                                line_number: 21,
                              },
                              {
                                dataName: 'action',
                                dataId: 168552100134630660,
                                children: [],
                                todoOptions: ['required', 'selectComp'],
                                options: {
                                  compId: [
                                    'Input_enterpriseCertificateType_5378208',
                                    'Input_enterpriseCertificateCode_718668',
                                    'Input_legelPersonCertificateType_392074',
                                    'Input_legelPersonCertificateCode_877952',
                                    'Input_contractTime_746901',
                                    'Input_deadline_8684165',
                                  ],
                                  compLib: 'comm',
                                  pageJsonId: '537892',
                                  compName: 'Input',
                                  id: '0556284',
                                  required: 'true',
                                  compid: [
                                    'Input_enterpriseCertificateType_5378208',
                                    'Input_enterpriseCertificateCode_718668',
                                    'Input_legelPersonCertificateType_392074',
                                    'Input_legelPersonCertificateCode_877952',
                                    'Input_contractTime_746901',
                                    'Input_deadline_8684165',
                                  ],
                                },
                                actionObjId: 'Input_agentCode_424715',
                                actionObjName: 'Input',
                                value: 'setRequired',
                                compLib: 'comm',
                                line_number: 22,
                              },
                            ],
                            condition: [
                              {
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context: '$selectedData_837176[0].value$',
                                  operate: '==',
                                  manualValue: '1',
                                },
                                condId: '3028126',
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            value: 'elseIf',
                            desc: '引入',
                            callback: [
                              {
                                type: 'sysSetVisible',
                                dataId: 168552100134613660,
                                options: {
                                  compId: [
                                    'Input_agentCode_424715',
                                    'Input_quitTime_5963657',
                                  ],
                                  compName: 'page',
                                  id: '969619',
                                  pageJsonId: '537892',
                                  visible: '',
                                  compid: [
                                    'Input_agentCode_424715',
                                    'Input_quitTime_5963657',
                                  ],
                                },
                                line_number: 19,
                              },
                              {
                                type: 'sysSetVisible',
                                dataId: 168552100134685060,
                                options: {
                                  compId: [
                                    'Input_enterpriseCertificateType_5378208',
                                    'Input_enterpriseCertificateCode_718668',
                                    'Input_legelPersonCertificateType_392074',
                                    'Input_legelPersonCertificateCode_877952',
                                    'Input_contractTime_746901',
                                    'Input_deadline_8684165',
                                  ],
                                  compName: 'page',
                                  id: '044936',
                                  pageJsonId: '537892',
                                  visible: 'true',
                                  compid: [
                                    'Input_enterpriseCertificateType_5378208',
                                    'Input_enterpriseCertificateCode_718668',
                                    'Input_legelPersonCertificateType_392074',
                                    'Input_legelPersonCertificateCode_877952',
                                    'Input_contractTime_746901',
                                    'Input_deadline_8684165',
                                  ],
                                },
                                line_number: 20,
                              },
                              {
                                type: 'setRequired',
                                dataId: 168552100134616220,
                                options: {
                                  compId: [
                                    'Input_agentCode_424715',
                                    'Input_quitTime_5963657',
                                  ],
                                  compLib: 'comm',
                                  pageJsonId: '537892',
                                  compName: 'Input',
                                  id: '750618',
                                  required: '',
                                  compid: [
                                    'Input_agentCode_424715',
                                    'Input_quitTime_5963657',
                                  ],
                                },
                                line_number: 21,
                              },
                              {
                                type: 'setRequired',
                                dataId: 168552100134630660,
                                options: {
                                  compId: [
                                    'Input_enterpriseCertificateType_5378208',
                                    'Input_enterpriseCertificateCode_718668',
                                    'Input_legelPersonCertificateType_392074',
                                    'Input_legelPersonCertificateCode_877952',
                                    'Input_contractTime_746901',
                                    'Input_deadline_8684165',
                                  ],
                                  compLib: 'comm',
                                  pageJsonId: '537892',
                                  compName: 'Input',
                                  id: '0556284',
                                  required: 'true',
                                  compid: [
                                    'Input_enterpriseCertificateType_5378208',
                                    'Input_enterpriseCertificateCode_718668',
                                    'Input_legelPersonCertificateType_392074',
                                    'Input_legelPersonCertificateCode_877952',
                                    'Input_contractTime_746901',
                                    'Input_deadline_8684165',
                                  ],
                                },
                                line_number: 22,
                              },
                            ],
                          },
                        ],
                        line_number: 10,
                        callback1: [
                          {
                            type: 'setVisible',
                            dataId: 168552100134608160,
                            options: {
                              compId: [
                                'Input_deadline_8684165',
                                'Input_contractTime_746901',
                                'Input_enterpriseCertificateType_5378208',
                                'Input_enterpriseCertificateCode_718668',
                                'Input_legelPersonCertificateType_392074',
                                'Input_legelPersonCertificateCode_877952',
                              ],
                              compLib: 'comm',
                              pageJsonId: '537892',
                              compName: 'Input',
                              id: '33446',
                              visible: '',
                              compid: [
                                'Input_deadline_8684165',
                                'Input_contractTime_746901',
                                'Input_enterpriseCertificateType_5378208',
                                'Input_enterpriseCertificateCode_718668',
                                'Input_legelPersonCertificateType_392074',
                                'Input_legelPersonCertificateCode_877952',
                              ],
                            },
                            line_number: 11,
                          },
                          {
                            type: 'setVisible',
                            dataId: 168552100134652030,
                            options: {
                              compId: [
                                'Input_quitTime_5963657',
                                'Input_agentCode_424715',
                              ],
                              compLib: 'comm',
                              pageJsonId: '537892',
                              compName: 'Input',
                              id: '2503735',
                              visible: 'true',
                              compid: [
                                'Input_quitTime_5963657',
                                'Input_agentCode_424715',
                              ],
                            },
                            line_number: 12,
                          },
                          {
                            type: 'setRequired',
                            dataId: 168552100134638700,
                            options: {
                              compId: [
                                'Input_enterpriseCertificateType_5378208',
                                'Input_enterpriseCertificateCode_718668',
                                'Input_legelPersonCertificateType_392074',
                                'Input_legelPersonCertificateCode_877952',
                                'Input_contractTime_746901',
                                'Input_deadline_8684165',
                              ],
                              compLib: 'comm',
                              pageJsonId: '537892',
                              compName: 'Input',
                              id: '7885461',
                              required: '',
                              compid: [
                                'Input_enterpriseCertificateType_5378208',
                                'Input_enterpriseCertificateCode_718668',
                                'Input_legelPersonCertificateType_392074',
                                'Input_legelPersonCertificateCode_877952',
                                'Input_contractTime_746901',
                                'Input_deadline_8684165',
                              ],
                            },
                            line_number: 13,
                          },
                          {
                            type: 'setRequired',
                            dataId: 168552100134666200,
                            options: {
                              compId: [
                                'Input_agentCode_424715',
                                'Input_quitTime_5963657',
                              ],
                              compLib: 'comm',
                              pageJsonId: '537892',
                              compName: 'Input',
                              id: '8472363',
                              required: 'true',
                              compid: [
                                'Input_agentCode_424715',
                                'Input_quitTime_5963657',
                              ],
                            },
                            line_number: 14,
                          },
                        ],
                      },
                      {
                        type: 'setDataSource',
                        dataId: 168552100134678620,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '014189',
                          pageJsonId: '537892',
                          dataSourceId: 166124254360037760,
                          dataSourceName: 'factorForm',
                          dataSourceRelType: 'custom',
                          dataSourceReloadFilter: [],
                          dataSourceSetValue: [
                            {
                              attrId: '862761',
                              code: 'auditProject',
                              name: '审批项目',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['customize'],
                                code: '$selectedData_837176[0].value$',
                              },
                              showInput: true,
                              _codePath: ['auditProject'],
                              _idpath: ['862761'],
                            },
                            {
                              attrId: '913471',
                              code: 'agentName',
                              name: '代理商名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['agentName'],
                              _idpath: ['913471'],
                            },
                            {
                              attrId: '14207',
                              code: 'legalRep',
                              name: '法人代表',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['legalRep'],
                              _idpath: ['14207'],
                            },
                            {
                              attrId: '345282',
                              code: 'contractTime',
                              name: '签约/续签日期',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['contractTime'],
                              _idpath: ['345282'],
                            },
                            {
                              attrId: '697477',
                              code: 'phone',
                              name: '电话',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['phone'],
                              _idpath: ['697477'],
                            },
                            {
                              attrId: '0214598',
                              code: 'busiScope',
                              name: '代理业务范围',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['busiScope'],
                              _idpath: ['0214598'],
                            },
                            {
                              attrId: '3101704',
                              code: 'performance',
                              name: '业绩评估',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['performance'],
                              _idpath: ['3101704'],
                            },
                            {
                              attrId: '08707745',
                              code: 'reason',
                              name: '申请原因',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['reason'],
                              _idpath: ['08707745'],
                            },
                            {
                              attrId: '02414',
                              code: 'quitTime',
                              name: '退出日期',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['quitTime'],
                              _idpath: ['02414'],
                            },
                            {
                              attrId: '528358',
                              code: 'deadline',
                              name: '签约/续签期限',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['deadline'],
                              _idpath: ['528358'],
                            },
                            {
                              attrId: '561561',
                              code: 'auditProjectName',
                              name: '审批项目名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['customize'],
                                code: '$selectedData_837176[0].label$',
                              },
                              showInput: true,
                              _codePath: ['auditProjectName'],
                              _idpath: ['561561'],
                            },
                            {
                              attrId: '532775',
                              code: 'enterpriseCertificateType',
                              name: '企业证件类型',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['enterpriseCertificateType'],
                              _idpath: ['532775'],
                            },
                            {
                              attrId: '656147',
                              code: 'legelPersonCertificateCode',
                              name: '法人证件编码',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['legelPersonCertificateCode'],
                              _idpath: ['656147'],
                            },
                            {
                              attrId: '685691',
                              code: 'agentCode',
                              name: '代理商编码',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['agentCode'],
                              _idpath: ['685691'],
                            },
                            {
                              attrId: '1061333',
                              code: 'legelPersonCertificateType',
                              name: '法人证件类型',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['legelPersonCertificateType'],
                              _idpath: ['1061333'],
                            },
                            {
                              attrId: '4203007',
                              code: 'enterpriseCertificateCode',
                              name: '企业证件编码',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              _codePath: ['enterpriseCertificateCode'],
                              _idpath: ['4203007'],
                            },
                          ],
                          operateType: 1,
                          onlySetPatch: true,
                          otherObjectArrayOptions: {},
                        },
                        line_number: 23,
                        callback1: [],
                        callback2: [],
                      },
                      {
                        type: 'console',
                        dataId: 168552100134666800,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '4222335',
                          pageJsonId: '537892',
                          value: ['$selectedData_837176[0]$'],
                        },
                        line_number: 24,
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetSelectedData71.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData71,
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
              ref={(r: any) => (refs['Select_3069885'] = r)}
              {...injectData}
            />
            <View
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_6209',
                uid: 'View_6209',
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
                textAlign: 'left',
                display: 'block',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
              }}
              ref={(r: any) => (refs['View_6209'] = r)}
              {...injectData}
            />
            <View
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_810035',
                uid: 'View_810035',
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
                  formItemIndex: 2,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{
                textAlign: 'left',
                display: 'block',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
              }}
              ref={(r: any) => (refs['View_810035'] = r)}
              {...injectData}
            />
            <Input
              name={'代理商名称'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              fieldName={'agentName'}
              value={data?.factorForm?.agentName}
              formItemIndex={3}
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
                id: 'Input_agentName_4780553',
                uid: 'Input_agentName_4780553',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatacustomActionCode385: any = [
                  {
                    type: 'customActionCode',
                    dataId: 167530549317428030,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '1722136',
                      pageJsonId: '537892',
                      code: 'function main(data,state,success,fail){success({catalogCode:"CLS_TY_0001_0001",value:e.target.value})};',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'callParentCustomFunc',
                        dataId: 167530562122241100,
                        options: {
                          compId: 'callParentCustomFunc',
                          compName: 'system',
                          id: '720214',
                          pageJsonId: '537892',
                          pathname: '/auditOrderPrepare',
                          pageId: '884045146848604160',
                          customFuncName: 'updateTitle',
                          customFuncParams: '$data_1722136$',
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
                eventDatacustomActionCode385.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(
                  eventDatacustomActionCode385,
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
              ref={(r: any) => (refs['Input_agentName_4780553'] = r)}
              {...injectData}
            />
            <Input
              name={'代理商编码'}
              size={'default'}
              selfSpan={''}
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
              fieldName={'agentCode'}
              value={data?.factorForm?.agentCode}
              formItemIndex={4}
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
                id: 'Input_agentCode_424715',
                uid: 'Input_agentCode_424715',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_agentCode_424715'] = r)}
              {...injectData}
            />
            <Select
              name={'企业证件类型'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={false}
              filter={'none'}
              classification={'default'}
              placeholder={'请选择'}
              fieldName={'enterpriseCertificateType'}
              value={data?.factorForm?.enterpriseCertificateType}
              formItemIndex={5}
              dataSource={{ selectedService: {} }}
              $$componentItem={{
                id: 'Input_enterpriseCertificateType_5378208',
                uid: 'Input_enterpriseCertificateType_5378208',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) =>
                (refs['Input_enterpriseCertificateType_5378208'] = r)
              }
              {...injectData}
            />
            <Input
              name={'企业证件编码'}
              size={'default'}
              selfSpan={''}
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
              fieldName={'enterpriseCertificateCode'}
              value={data?.factorForm?.enterpriseCertificateCode}
              formItemIndex={6}
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
                id: 'Input_enterpriseCertificateCode_718668',
                uid: 'Input_enterpriseCertificateCode_718668',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) =>
                (refs['Input_enterpriseCertificateCode_718668'] = r)
              }
              {...injectData}
            />
            <Input
              name={'法人代表'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              fieldName={'legalRep'}
              value={data?.factorForm?.legalRep}
              formItemIndex={7}
              tipIcon={{
                theme: 'outlined',
                type: 'question-circle',
                isIconFont: false,
              }}
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
                id: 'Input_legalRep_219094',
                uid: 'Input_legalRep_219094',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_legalRep_219094'] = r)}
              {...injectData}
            />
            <Select
              name={'法人证件类型'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={false}
              filter={'none'}
              classification={'default'}
              placeholder={'请选择'}
              fieldName={'legelPersonCertificateType'}
              value={data?.factorForm?.legelPersonCertificateType}
              formItemIndex={8}
              dataSource={{ selectedService: {} }}
              $$componentItem={{
                id: 'Input_legelPersonCertificateType_392074',
                uid: 'Input_legelPersonCertificateType_392074',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) =>
                (refs['Input_legelPersonCertificateType_392074'] = r)
              }
              {...injectData}
            />
            <Input
              name={'法人证件编码'}
              size={'default'}
              selfSpan={''}
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
              fieldName={'legelPersonCertificateCode'}
              value={data?.factorForm?.legelPersonCertificateCode}
              formItemIndex={9}
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
                id: 'Input_legelPersonCertificateCode_877952',
                uid: 'Input_legelPersonCertificateCode_877952',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) =>
                (refs['Input_legelPersonCertificateCode_877952'] = r)
              }
              {...injectData}
            />
            <DatePicker
              name={'签约/续签日期'}
              timeMode={'date'}
              format={'YYYY-MM-DD'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={false}
              limitRange={'no'}
              startTime={''}
              endTime={''}
              placeholder={'请选择日期'}
              pickerType={'DatePicker'}
              customTip={''}
              fieldName={'contractTime'}
              value={data?.factorForm?.contractTime}
              formItemIndex={10}
              $$componentItem={{
                id: 'Input_contractTime_746901',
                uid: 'Input_contractTime_746901',
                type: 'DatePicker',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              defaultValue={{}}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_contractTime_746901'] = r)}
              {...injectData}
            />
            <Input
              name={'签约/续签期限'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'年'}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              fieldName={'deadline'}
              value={data?.factorForm?.deadline}
              formItemIndex={11}
              postfixStyle={'1'}
              regexp={[
                {
                  id: '529488',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 1,
                  message: '请输入正整数',
                  pattern: '/^[1-9]\\d*$/',
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
                id: 'Input_deadline_8684165',
                uid: 'Input_deadline_8684165',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_deadline_8684165'] = r)}
              {...injectData}
            />
            <DatePicker
              name={'退出日期'}
              timeMode={'date'}
              format={'YYYY-MM-DD'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={false}
              limitRange={''}
              startTime={''}
              endTime={''}
              placeholder={'请选择日期'}
              pickerType={'DatePicker'}
              fieldName={'quitTime'}
              value={data?.factorForm?.quitTime}
              formItemIndex={12}
              $$componentItem={{
                id: 'Input_quitTime_5963657',
                uid: 'Input_quitTime_5963657',
                type: 'DatePicker',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              defaultValue={{}}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_quitTime_5963657'] = r)}
              {...injectData}
            />
            <Input
              name={'电话'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              fieldName={'phone'}
              value={data?.factorForm?.phone}
              formItemIndex={13}
              regexp={[
                {
                  id: '645523',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 1,
                  message: '请输入正确的手机号码',
                  pattern: '/^1[3-9]\\d{9}$/',
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
                id: 'Input_phone_8265674',
                uid: 'Input_phone_8265674',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_phone_8265674'] = r)}
              {...injectData}
            />
            <Input
              name={'业绩评估'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              fieldName={'performance'}
              value={data?.factorForm?.performance}
              formItemIndex={14}
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
                id: 'Input_performance_1233197',
                uid: 'Input_performance_1233197',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_performance_1233197'] = r)}
              {...injectData}
            />
            <Input
              name={'代理业务范围'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              fieldName={'busiScope'}
              value={data?.factorForm?.busiScope}
              formItemIndex={15}
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
                id: 'Input_busiScope_57392777',
                uid: 'Input_busiScope_57392777',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_busiScope_57392777'] = r)}
              {...injectData}
            />
            <TextArea
              name={'申请原因'}
              selfSpan={24}
              labelCol={'8'}
              wrapperCol={'16'}
              titleTip={'text'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={16}
              fieldName={'reason'}
              value={data?.factorForm?.reason}
              tipIcon={{
                theme: 'outlined',
                type: 'question-circle',
                isIconFont: false,
              }}
              tipContent={
                '因XX原因（申请原因），现为XX代理商申请引入/续签/退出'
              }
              $$componentItem={{
                id: 'TextArea_344333',
                uid: 'TextArea_344333',
                type: 'TextArea',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['TextArea_344333'] = r)}
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
                id: 'Form_395851',
                uid: 'Form_395851',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ padding: '0px 0px 0px 0px', margin: '10px 0px 0px 0px' }}
              ref={(r: any) => (refs['Form_395851'] = r)}
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
                  id: 'Input_690228',
                  uid: 'Input_690228',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_690228'] = r)}
                {...injectData}
              />
              <View
                name={'布局容器'}
                labelCol={8}
                wrapperCol={16}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_22346374',
                  uid: 'View_22346374',
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
                ref={(r: any) => (refs['View_22346374'] = r)}
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
                  uploadAccepType={{
                    accept:
                      '.jpg,.jpeg,.png,.pdf,.tiff,.swf,.txt,.doc,.xls,.ppt,.docx,.xlsx,.pptx',
                    acceptExtension: '',
                  }}
                  $$componentItem={{
                    id: 'StdUpload_6230546',
                    uid: 'StdUpload_6230546',
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
                    const eventDatagetSelectedData73: any = [
                      {
                        type: 'getSelectedData',
                        dataId: 166191611647792670,
                        options: {
                          compId: 'Input_690228',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Select',
                          id: '23676',
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'setDataSource',
                            dataId: 166192842525012400,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '85922',
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
                                    code: '$selectedData_23676[0].value$',
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
                                    code: '$selectedData_23676[0].label$',
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
                                dataId: 166201311012954300,
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '347083',
                                  pageJsonId: '537892',
                                  code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=data.fileInfoList;success(data.sceneSubmit)};',
                                },
                                line_number: 3,
                                callback1: [
                                  {
                                    type: 'console',
                                    dataId: 166201319605168300,
                                    options: {
                                      compId: 'debug',
                                      compName: 'system',
                                      id: '1681963',
                                      pageJsonId: '537892',
                                      value: ['$data_347083$'],
                                    },
                                    line_number: 4,
                                  },
                                  {
                                    type: 'callParentCustomFunc',
                                    dataId: 166201320834529760,
                                    options: {
                                      compId: 'callParentCustomFunc',
                                      compName: 'system',
                                      id: '092158',
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
                            dataId: 166260601149263970,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '187311',
                              pageJsonId: '537892',
                              type: 'error',
                              value: '请选择附件类型',
                            },
                            line_number: 6,
                          },
                        ],
                      },
                    ];
                    eventDatagetSelectedData73.params =
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
                      eventDatagetSelectedData73,
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
                    const eventDatacustomActionCode387: any = [
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
                    eventDatacustomActionCode387.params =
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
                      eventDatacustomActionCode387,
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
                  onCheckUpload={() => {
                    const eventDatavalidateCurrentForm68: any = [
                      {
                        type: 'validateCurrentForm',
                        dataId: 167030763661307940,
                        shielding: true,
                        options: {
                          compId: 'Form_395851',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Form',
                          id: '629183',
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'console',
                            dataId: 167031973979745860,
                            shielding: true,
                            options: {
                              compId: 'debug',
                              compName: 'system',
                              id: '392717',
                              pageJsonId: '537892',
                              value: ['成功'],
                            },
                            line_number: 2,
                          },
                        ],
                        callback2: [
                          {
                            type: 'console',
                            dataId: 167049097276728030,
                            shielding: true,
                            options: {
                              compId: 'debug',
                              compName: 'system',
                              id: '990224',
                              pageJsonId: '537892',
                              value: ['失败'],
                            },
                            line_number: 3,
                          },
                          {
                            type: 'return',
                            dataId: 167031852948735420,
                            shielding: true,
                            options: {
                              compId: 'return',
                              compName: 'system',
                              id: '9605207',
                              pageJsonId: '537892',
                              returnType: 'failure',
                              returnValue: '',
                            },
                            line_number: 4,
                          },
                        ],
                      },
                    ];
                    eventDatavalidateCurrentForm68.params = [] || [];
                    CMDGenerator(
                      eventDatavalidateCurrentForm68,
                      {},
                      'validateCurrentForm',
                      {
                        id: 'validateCurrentForm',
                        name: 'validateCurrentForm',
                        type: 'validateCurrentForm',
                        platform: 'pc',
                      },
                    );
                  }}
                  ref={(r: any) => (refs['StdUpload_6230546'] = r)}
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
            padding: '0px 0px 0px 0px',
            width: '0A',
            height: 'auto',
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
              const eventDatacustomActionCode388: any = [
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
              eventDatacustomActionCode388.params =
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
                eventDatacustomActionCode388,
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
              const eventDatadownloadByFileId17: any = [
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
              eventDatadownloadByFileId17.params =
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
                eventDatadownloadByFileId17,
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
          name={'新增业务组件'}
          busiCompStates={{
            catalogCode: state?.catalogCode,
            scene: state?.scene,
            fileList: state?.itemList?.fileInfo,
          }}
          style={{ margin: '0 0 12px 0' }}
          ref={(r: any) => (refs['BOFramer_134087'] = r)}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(ClsTy_0001_0001$$Page, {
  pageId: '874929996767342592',
  hasLogin: false,
  dataSource,
  defaultState: {},
});
