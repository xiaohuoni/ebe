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
  TextArea,
  Table,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '911801900878163968';
const ClsTy_0005_0001$$Page: React.FC<PageProps> = ({
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
  const updataSubmitDataProdList = (options_379575: any) => {
    const eventDatagetTableData5: any = [
      {
        type: 'getTableData',
        dataId: 166859684429948860,
        shielding: true,
        options: {
          compId: 'Table_093003_975455',
          compLib: 'comm',
          pageJsonId: '537892',
          compName: 'Table',
          id: '282046',
        },
        line_number: 1,
        callback1: [
          {
            type: 'console',
            dataId: 166859685337740500,
            shielding: true,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '107915',
              pageJsonId: '537892',
              value: ['更新表格事件-表格数据', '$tableData_282046$'],
            },
            line_number: 2,
          },
          {
            type: 'customActionCode',
            dataId: 166859686826823700,
            shielding: true,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '370086',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){console.log("\\u66F4\\u65B0\\u4EA7\\u54C1\\u63D0\\u4EA4\\u6570\\u636E-\\u4E8B\\u4EF6\\u5165\\u53C2",options_379575);var instList=options_379575.map(function(item){var _arr=[];for(var key in item){if(item.hasOwnProperty(key))_arr.push({"attrCode":key,"attrName":"","attrValue":item[key]})}return{"instCode":item.__RowId__,"instAttrList":_arr}});console.log("\\u66F4\\u65B0\\u540E\\u4EA7\\u54C1\\u5217\\u8868\\u63D0\\u4EA4\\u6570\\u636E",instList);success(instList)};',
            },
            line_number: 3,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 166859686826859170,
                shielding: true,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '099106',
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
                      value: { type: ['context', '$data_370086$'], code: '' },
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
                    dataId: 166859686826895100,
                    shielding: true,
                    options: {
                      compId: 'callParentCustomFunc',
                      compName: 'system',
                      id: '760403',
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
                  {
                    type: 'console',
                    dataId: 166859686826820030,
                    shielding: true,
                    options: {
                      compId: 'debug',
                      compName: 'system',
                      id: '0732933',
                      pageJsonId: '537892',
                      value: ['产品提交数据', '$data.sceneSubmit$'],
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
    ];
    eventDatagetTableData5.params =
      [
        {
          title: '事件入参',
          name: 'options_379575',
          value: '$options_379575$',
        },
      ] || [];
    CMDGenerator(eventDatagetTableData5, { options_379575 }, 'getTableData', {
      id: 'getTableData',
      name: 'getTableData',
      type: 'getTableData',
      platform: 'undefined',
    });
    const eventDatacustomActionCode220: any = [
      {
        type: 'customActionCode',
        dataId: 166859813995785100,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '438453',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){console.log("\\u66F4\\u65B0\\u4EA7\\u54C1\\u63D0\\u4EA4\\u6570\\u636E-\\u4E8B\\u4EF6\\u5165\\u53C2",data.prodList);var instList=data.prodList.map(function(item){var _arr=[];for(var name in item){if(item.hasOwnProperty(name))_arr.push({"attrCode":name,"attrName":"","attrValue":item[name]})}return{"instCode":item.key,"instAttrList":_arr}});console.log("\\u66F4\\u65B0\\u540E\\u4EA7\\u54C1\\u5217\\u8868\\u63D0\\u4EA4\\u6570\\u636E",instList);success(instList)};',
        },
        line_number: 7,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 166859813995742340,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '580273',
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
                  value: { type: ['context', '$data_438453$'], code: '' },
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
            },
            line_number: 8,
            callback1: [
              {
                type: 'callParentCustomFunc',
                dataId: 166859813995726200,
                options: {
                  compId: 'callParentCustomFunc',
                  compName: 'system',
                  id: '014082',
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
              {
                type: 'console',
                dataId: 166859813995737660,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '305627',
                  pageJsonId: '537892',
                  value: ['产品提交数据', '$data.sceneSubmit$'],
                },
                line_number: 10,
              },
            ],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode220.params =
      [
        {
          title: '事件入参',
          name: 'options_379575',
          value: '$options_379575$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode220,
      { options_379575 },
      'customActionCode',
      {
        id: 'customActionCode',
        name: 'customActionCode',
        type: 'customActionCode',
        platform: 'undefined',
      },
    );
  };
  const updataSubmitDataFormData = (options_543189: any) => {
    const eventDatagetCurrentFormValues12: any = [
      {
        type: 'getCurrentFormValues',
        dataId: 166859611130438080,
        options: {
          compId: 'Form_190947_1873837',
          compLib: 'comm',
          pageJsonId: '537892',
          compName: 'Form',
          id: '692279',
        },
        line_number: 1,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 166859611809543500,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '6066416',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){console.log("\\u63D0\\u4EA4\\u8868\\u5355\\u6570\\u636E",Form_190947_1873837);var attrList=[];var obj=Form_190947_1873837;for(var key in obj){if(obj.hasOwnProperty(key)){attrList.push({"attrCode":key,"attrName":"","attrValue":obj[key]})}}success(attrList)};',
            },
            line_number: 2,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 166859648532066530,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '3757663',
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
                      value: { type: ['context', '$data_6066416$'], code: '' },
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
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'callParentCustomFunc',
                    dataId: 166859650841718660,
                    options: {
                      compId: 'callParentCustomFunc',
                      compName: 'system',
                      id: '185869',
                      pageJsonId: '537892',
                      pathname: '/auditOrderPrepare',
                      pageId: '884045146848604160',
                      modalPath: '/auditOrderPrepare',
                      customFuncName: 'getFactor',
                      customFuncParams: '$data.sceneSubmit$',
                    },
                    line_number: 4,
                    callback1: [],
                    callback2: [],
                  },
                  {
                    type: 'console',
                    dataId: 166859653177717220,
                    options: {
                      compId: 'debug',
                      compName: 'system',
                      id: '243254',
                      pageJsonId: '537892',
                      value: ['提交数据', '$data.sceneSubmit$'],
                    },
                    line_number: 5,
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
    eventDatagetCurrentFormValues12.params =
      [
        {
          title: '事件入参',
          name: 'options_543189',
          value: '$options_543189$',
        },
      ] || [];
    CMDGenerator(
      eventDatagetCurrentFormValues12,
      { options_543189 },
      'getCurrentFormValues',
      {
        id: 'getCurrentFormValues',
        name: 'getCurrentFormValues',
        type: 'getCurrentFormValues',
        platform: 'undefined',
      },
    );
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    updataSubmitDataProdList,
    updataSubmitDataFormData,
  }));

  useEffect(() => {
    const eventDataapiRequest622: any = [
      {
        type: 'apiRequest',
        dataId: 166125298599862820,
        shielding: true,
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
        },
        line_number: 1,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 166139448631288800,
            shielding: true,
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
            line_number: 2,
            callback1: [
              {
                type: 'callParentCustomFunc',
                dataId: 166444018774646720,
                shielding: true,
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
    eventDataapiRequest622.params = [] || [];
    CMDGenerator(eventDataapiRequest622, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse311: any = [
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
              code: 'function main(data,state,success,fail){var item=state.itemList;data.sceneSubmit.approveGrade=item.approveGrade;data.sceneSubmit.approveGradeName=item.approveGradeName;success()};',
              actionTitle: '设置界面初始化值',
            },
            line_number: 5,
            callback1: [
              {
                type: 'setValue',
                dataId: 166901095101088900,
                options: {
                  compId:
                    'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_941508_021439',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '1262916',
                  valueList: {
                    Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_941508_021439:
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
          {
            type: 'customActionCode',
            dataId: 166860111116770660,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '94043',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var item=state.itemList;var factorForm={};var attrList=item.attrList;if(attrList!=undefined&&attrList.length>0){for(var i=0;i<attrList.length;i++){factorForm[attrList[i].attrCode]=attrList[i].attrValue}}console.log("\\u77ED\\u4FE1\\u6A21\\u677F-\\u8868\\u5355\\u8BE6\\u60C5",factorForm);success(factorForm)};',
            },
            line_number: 9,
            callback1: [
              {
                type: 'setValue',
                dataId: 166901229771491070,
                options: {
                  compId: [
                    'Input_379441_56819334_854937',
                    'Input_914852',
                    'Input_0360323_306855_440462',
                    'Input_661573_036761_536088',
                    'Input_2130535',
                    'Input_600918',
                  ],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '9787542',
                  valueList: {
                    Input_379441_56819334_854937: '$data_94043.moduleId$',
                    Input_914852: '$data_94043.portNo$',
                    Input_0360323_306855_440462: '$data_94043.templateType$',
                    Input_661573_036761_536088: '$data_94043.actionType$',
                    Input_2130535: '$data_94043.effTime$',
                    Input_600918: '$data_94043.expTime$',
                  },
                  compid: [
                    'Input_379441_56819334_854937',
                    'Input_914852',
                    'Input_0360323_306855_440462',
                    'Input_661573_036761_536088',
                    'Input_2130535',
                    'Input_600918',
                  ],
                },
                line_number: 10,
                callback1: [],
              },
              {
                type: 'setValue',
                dataId: 166901240618946620,
                options: {
                  compId: 'TextArea_162866',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'TextArea',
                  id: '7846151',
                  valueList: {
                    TextArea_162866: '$data_94043.templateContent$',
                  },
                },
                line_number: 11,
                callback1: [],
              },
            ],
            callback2: [],
          },
          {
            type: 'ifelse',
            condition: [
              {
                condId: '649979',
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
                condId: '5431207',
                connector: '||',
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 166901254405685340,
            elseIfs: [],
            line_number: 12,
            callback1: [
              {
                type: 'setVisible',
                dataId: 166901259772959970,
                options: {
                  compId:
                    'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_941508_021439',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '407801',
                  visible: 'true',
                },
                line_number: 13,
              },
              {
                type: 'setDisable',
                dataId: 166901260092695650,
                options: {
                  compId:
                    'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_941508_021439',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '1587306',
                  disabled: 'true',
                },
                line_number: 14,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse311.params = [] || [];
    CMDGenerator(eventDataifelse311, {}, 'ifelse', {
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
        visible={true}
        $$componentItem={{
          id: 'View_537892_1_573149_25821',
          uid: 'View_537892_1_573149_25821',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_537892_1_573149_25821')}
        {...injectData}
      >
        <Divider
          name={'分割线'}
          orientation={'center'}
          type={'horizontal'}
          visible={true}
          dashed={false}
          dividerText={'行业短信模板审批'}
          $$componentItem={{
            id: 'Divider_52558_7410426_1755395',
            uid: 'Divider_52558_7410426_1755395',
            type: 'Divider',
            ...componentItem,
          }}
          style={{ margin: '12px 0 12px 0', height: 'auto' }}
          ref={(r: any) =>
            refs.setComponentRef(r, 'Divider_52558_7410426_1755395')
          }
          {...injectData}
        />
        <View
          name={'布局容器'}
          visible={true}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_6806553_3483268_507445',
            uid: 'View_6806553_3483268_507445',
            type: 'View',
            ...componentItem,
          }}
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
          }}
          ref={(r: any) =>
            refs.setComponentRef(r, 'View_6806553_3483268_507445')
          }
          {...injectData}
        >
          <HorizontalView
            name={'左右布局'}
            visible={true}
            formItemIndex={0}
            $$componentItem={{
              id: 'HorizontalView_004602_830821_981275',
              uid: 'HorizontalView_004602_830821_981275',
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
              refs.setComponentRef(r, 'HorizontalView_004602_830821_981275')
            }
            {...injectData}
          >
            <View
              name={'布局容器'}
              visible={true}
              $$componentItem={{
                id: 'View_339406_177732_29838',
                uid: 'View_339406_177732_29838',
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
              ref={(r: any) =>
                refs.setComponentRef(r, 'View_339406_177732_29838')
              }
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
                  id: 'Form_4311097_9385662_8411515_9167293_4337769_708507_903502_3391966_6232938_348644',
                  uid: 'Form_4311097_9385662_8411515_9167293_4337769_708507_903502_3391966_6232938_348644',
                  type: 'Form',
                  ...componentItem,
                }}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) =>
                  refs.setComponentRef(
                    r,
                    'Form_4311097_9385662_8411515_9167293_4337769_708507_903502_3391966_6232938_348644',
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
                  text={'行业短信模板审批'}
                  selfSpan={8}
                  labelCol={'9'}
                  wrapperCol={'15'}
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
                    id: 'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_508524_791227',
                    uid: 'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_508524_791227',
                    type: 'Checkbox',
                    ...componentItem,
                  }}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    refs.setComponentRef(
                      r,
                      'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_508524_791227',
                    )
                  }
                  {...injectData}
                />
                <View
                  name={'布局容器'}
                  visible={true}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_6319234_3569864_15467365_781748_88437_680104',
                    uid: 'View_6319234_3569864_15467365_781748_88437_680104',
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
                      'View_6319234_3569864_15467365_781748_88437_680104',
                    )
                  }
                  {...injectData}
                />
                <Input
                  name={'场景最高审批等级'}
                  size={'default'}
                  selfSpan={8}
                  labelCol={'9'}
                  wrapperCol={'15'}
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
                    id: 'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_941508_021439',
                    uid: 'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_941508_021439',
                    type: 'Input',
                    ...componentItem,
                  }}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    refs.setComponentRef(
                      r,
                      'Input_361479_887285_2150708_936504_923334_755169_97903_059209_7061384_941508_021439',
                    )
                  }
                  {...injectData}
                />
              </Form>
            </View>
          </HorizontalView>
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
            formCode={'Form_190947'}
            $$componentItem={{
              id: 'Form_190947_1873837_6980499',
              uid: 'Form_190947_1873837_6980499',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) =>
              refs.setComponentRef(r, 'Form_190947_1873837_6980499')
            }
            {...injectData}
          >
            <Input
              name={'模块ID'}
              size={'default'}
              selfSpan={''}
              labelCol={'9'}
              wrapperCol={'15'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={0}
              fieldName={'moduleId'}
              disabled={false}
              visible={true}
              readOnly={true}
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
                id: 'Input_379441_56819334_854937',
                uid: 'Input_379441_56819334_854937',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_379441_56819334_854937')
              }
              {...injectData}
            />
            <Input
              name={'端口号'}
              size={'default'}
              selfSpan={''}
              labelCol={'9'}
              wrapperCol={'15'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={1}
              fieldName={'portNo'}
              disabled={false}
              visible={true}
              readOnly={true}
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
                id: 'Input_914852',
                uid: 'Input_914852',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_914852')}
              {...injectData}
            />
            <Input
              name={'模板类型'}
              size={'default'}
              selfSpan={''}
              labelCol={'9'}
              wrapperCol={'15'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={2}
              fieldName={'templateType'}
              disabled={false}
              visible={true}
              readOnly={true}
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
                id: 'Input_0360323_306855_440462',
                uid: 'Input_0360323_306855_440462',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_0360323_306855_440462')
              }
              {...injectData}
            />
            <Input
              name={'模板处理动作'}
              size={'default'}
              selfSpan={''}
              labelCol={'9'}
              wrapperCol={'15'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={3}
              fieldName={'actionType'}
              disabled={false}
              visible={true}
              readOnly={true}
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
                id: 'Input_661573_036761_536088',
                uid: 'Input_661573_036761_536088',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_661573_036761_536088')
              }
              {...injectData}
            />
            <Input
              name={'生效时间'}
              size={'default'}
              selfSpan={''}
              labelCol={'9'}
              wrapperCol={'15'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={4}
              fieldName={'effTime'}
              disabled={false}
              visible={true}
              readOnly={true}
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
                id: 'Input_2130535',
                uid: 'Input_2130535',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_2130535')}
              {...injectData}
            />
            <Input
              name={'失效时间'}
              size={'default'}
              selfSpan={''}
              labelCol={'9'}
              wrapperCol={'15'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={5}
              fieldName={'expTime'}
              disabled={false}
              visible={true}
              readOnly={true}
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
                id: 'Input_600918',
                uid: 'Input_600918',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_600918')}
              {...injectData}
            />
          </Form>
        </View>
        <Form
          name={'表单'}
          colSpan={24}
          labelCol={8}
          wrapperCol={16}
          colon={true}
          layout={'horizontal'}
          labelAlign={'right'}
          header={'标题'}
          colSpace={0}
          rowSpace={16}
          formCode={'Form_421435'}
          $$componentItem={{
            id: 'Form_421435',
            uid: 'Form_421435',
            type: 'Form',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ padding: '0px 0px 0px 0px', margin: '16px 0px 0px 0px' }}
          ref={(r: any) => refs.setComponentRef(r, 'Form_421435')}
          {...injectData}
        >
          <TextArea
            name={'模板内容'}
            selfSpan={''}
            labelCol={'3'}
            wrapperCol={21}
            titleTip={'notext'}
            tipLocation={'after'}
            tipPlacement={'top'}
            required={false}
            placeholder={'请输入'}
            formItemIndex={0}
            fieldName={'templateContent'}
            disabled={false}
            visible={true}
            readOnly={true}
            $$componentItem={{
              id: 'TextArea_162866',
              uid: 'TextArea_162866',
              type: 'TextArea',
              ...componentItem,
            }}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'TextArea_162866')}
            {...injectData}
          />
        </Form>
        <View
          name={'布局容器'}
          visible={true}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_4949093_2824552_132528',
            uid: 'View_4949093_2824552_132528',
            type: 'View',
            ...componentItem,
          }}
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
          }}
          ref={(r: any) =>
            refs.setComponentRef(r, 'View_4949093_2824552_132528')
          }
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
              id: 'Table_5369494_400146_74185804',
              uid: 'Table_5369494_400146_74185804',
              type: 'Table',
              ...componentItem,
            }}
            style={{ margin: '24px 0px 0px 0px' }}
            onRowDelete={(rowId: any, row: any, index: any) => {
              const eventDatacustomActionCode890: any = [
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
              eventDatacustomActionCode890.params =
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
                eventDatacustomActionCode890,
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
              const eventDatadownloadByFileId128: any = [
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
              eventDatadownloadByFileId128.params =
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
                eventDatadownloadByFileId128,
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
            ref={(r: any) =>
              refs.setComponentRef(r, 'Table_5369494_400146_74185804')
            }
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(ClsTy_0005_0001$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
