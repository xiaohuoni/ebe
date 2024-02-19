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

const ClsCp_0007_0003Old$$Page: React.FC<PageProps> = ({
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
  const calculSumBandwidth = (options_3240296: any) => {
    const eventDatagetValue73: any = [
      {
        type: 'getValue',
        dataId: 167031222061274940,
        options: {
          compId: 'Input_bandwidthUp_7220704_692435',
          compLib: 'comm',
          pageJsonId: '537892',
          compName: 'Input',
          id: '1848632',
        },
        line_number: 1,
        callback1: [
          {
            type: 'getValue',
            dataId: 167031222864134200,
            options: {
              compId: 'Input_total_8367775_635653',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Input',
              id: '924729',
            },
            line_number: 2,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '8664967',
                    options: { context: '$value_924729$', operate: 'notEmpty' },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                  {
                    options: {
                      context: '$value_1848632$',
                      operate: 'notEmpty',
                    },
                    condId: '9010993',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 167031224112140220,
                elseIfs: [],
                line_number: 3,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 167031224112193540,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '918647',
                      pageJsonId: '537892',
                      code: 'function main(data,state,success,fail){var sum=parseInt(value_924729)*parseInt(value_1848632);success(sum)};',
                    },
                    line_number: 4,
                    callback1: [
                      {
                        type: 'setValue',
                        dataId: 167031230304424200,
                        options: {
                          compId: 'Input_totalBandwidthUp_874141_463055',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Input',
                          id: '895809',
                          valueList: {
                            Input_totalBandwidthUp_874141_463055:
                              '$data_918647$',
                          },
                        },
                        line_number: 5,
                        callback1: [],
                      },
                    ],
                    callback2: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ];
    eventDatagetValue73.params =
      [
        {
          title: '事件入参',
          name: 'options_3240296',
          value: '$options_3240296$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue73, { options_3240296 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };
  const jointAddr = (options_289242: any) => {
    const eventDatacustomActionCode117: any = [
      {
        type: 'customActionCode',
        dataId: 167031104349189250,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '958444',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){var installAddr="";if(options_289242.cityName!=undefined&&options_289242.cityName!=null){installAddr+=options_289242.cityName}if(options_289242.areaName!=undefined&&options_289242.areaName!=null){installAddr+=options_289242.areaName}if(options_289242.countryName!=undefined&&options_289242.countryName!=null){installAddr+=options_289242.countryName}if(options_289242.street!=undefined&&options_289242.street!=null){installAddr+=options_289242.street}if(options_289242.houseNum!=undefined&&options_289242.houseNum!=null){installAddr+=options_289242.houseNum}if(options_289242.doorplate!=undefined&&options_289242.doorplate!=null){installAddr+=options_289242.doorplate}if(options_289242.floorName!=undefined&&options_289242.floorName!=null){installAddr+=options_289242.floorName}if(options_289242.element!=undefined&&options_289242.element!=null){installAddr+=options_289242.element}if(options_289242.roomName!=undefined&&options_289242.roomName!=null){installAddr+=options_289242.roomName}success(installAddr)};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setValue',
            dataId: 167031129639171900,
            options: {
              compId: 'Input_installAddr_72918684_445353',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Input',
              id: '434196',
              valueList: { Input_installAddr_72918684_445353: '$data_958444$' },
            },
            line_number: 2,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode117.params =
      [
        {
          title: '事件入参',
          name: 'options_289242',
          value: '$options_289242$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode117,
      { options_289242 },
      'customActionCode',
      {
        id: 'customActionCode',
        name: 'customActionCode',
        type: 'customActionCode',
        platform: 'undefined',
      },
    );
  };
  const fileUpload = (options_104394: any) => {
    const eventDatacustomActionCode118: any = [
      {
        type: 'customActionCode',
        dataId: 167282561441939100,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '0489633',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=options_104394;success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'callParentCustomFunc',
            dataId: 167282563196528130,
            options: {
              compId: 'callParentCustomFunc',
              compName: 'system',
              id: '41747',
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
    eventDatacustomActionCode118.params =
      [
        {
          title: '事件入参',
          name: 'options_104394',
          value: '$options_104394$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode118,
      { options_104394 },
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
    calculSumBandwidth,
    jointAddr,
    fileUpload,
  }));

  useEffect(() => {
    const eventDataapiRequest343: any = [
      {
        type: 'apiRequest',
        dataId: 166599835689108600,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '4682474',
          pageJsonId: '537892',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'SYS_qryRegionListByParentId',
          _apiCode: 'qryRegionListByParentId',
          _source: 'rhin',
          _serviceId: '878100790201982976',
          _serviceTitle:
            '根据父区域ID查询所有子区域-tsm: qryRegionListByParentId',
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
              dataKey: '4682474_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '4682474_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '4682474_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              children: [
                {
                  code: 'includeParent',
                  attrType: 'field',
                  type: 'boolean',
                  mustFlag: 'F',
                  _id: 'body.includeParent',
                  compType: 'Input',
                  name: 'includeParent',
                  parents: ['body'],
                  id: 'body.includeParent',
                  dataKey: '4682474_body.includeParent',
                  value: { type: ['customize'], code: 'false' },
                },
                {
                  code: 'parentRegionId',
                  attrType: 'field',
                  type: 'long',
                  mustFlag: 'F',
                  _id: 'body.parentRegionId',
                  compType: 'Input',
                  name: 'parentRegionId',
                  parents: ['body'],
                  id: 'body.parentRegionId',
                  dataKey: '4682474_body.parentRegionId',
                  value: { type: ['customize'], code: '350000' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '4682474_body',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166599840195623460,
            options: {
              compId: 'Input_city_753123',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '1651112',
              data: '$reply_4682474?.resultData$',
              labelKey: 'regionName',
              valueKey: 'regionId',
            },
            line_number: 2,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest343.params = [] || [];
    CMDGenerator(eventDataapiRequest343, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest344: any = [
      {
        type: 'apiRequest',
        dataId: 166972786001496000,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '443255',
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
        line_number: 3,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166972786263123520,
            options: {
              compId: 'Input_690228_5400337_280164_96733',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '478691',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
              data: '$reply_443255?.resultData$',
            },
            line_number: 4,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest344.params = [] || [];
    CMDGenerator(eventDataapiRequest344, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest345: any = [
      {
        type: 'apiRequest',
        dataId: 167141704588492800,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '4277124',
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
              dataKey: '4277124_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '4277124_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '4277124_query',
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
                  dataKey: '4277124_body.catalogCode',
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
                  dataKey: '4277124_body.attrCode',
                  value: { type: ['customize'], code: 'bandwidthUp' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '4277124_body',
            },
          ],
        },
        line_number: 5,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 167141706995502850,
            options: {
              compId: 'Input_bandwidthUp_7220704_692435',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '2194702',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
              data: '$reply_4277124?.resultData$',
            },
            line_number: 6,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest345.params = [] || [];
    CMDGenerator(eventDataapiRequest345, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest346: any = [
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
        },
        line_number: 7,
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
            line_number: 8,
            callback1: [
              {
                type: 'callParentCustomFunc',
                dataId: 166444109885062880,
                options: {
                  compId: 'callParentCustomFunc',
                  compName: 'system',
                  id: '046431',
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
    ];
    eventDataapiRequest346.params = [] || [];
    CMDGenerator(eventDataapiRequest346, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse187: any = [
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
        line_number: 10,
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
            line_number: 11,
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
                      code: 'city',
                      name: '地市',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '182276',
                      code: 'area',
                      name: '区县',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '905721',
                      code: 'country',
                      name: '街道/乡/镇',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '500673',
                      code: 'district',
                      name: '片区',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '007551',
                      code: 'street',
                      name: '街、路、行政村、居委会',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '303741',
                      code: 'doorplate',
                      name: '写字楼、小区（组团）、单位大院、自然村等',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '725859',
                      code: 'floorName',
                      name: '楼名、楼号(门面房前加"门面"标志)、村民组',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '7467836',
                      code: 'element',
                      name: '楼号或单元号',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '1586552',
                      code: 'roomName',
                      name: '房间号、户名',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '996532',
                      code: 'installAddr',
                      name: '安装地址',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '7370567',
                      code: 'setMeal',
                      name: '套餐',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '8998593',
                      code: 'bandwidthUp',
                      name: '上行带宽',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '569754',
                      code: 'total',
                      name: '条数',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '410393',
                      code: 'totalBandwidthUp',
                      name: '总上行带宽',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '087569',
                      code: 'houseNum',
                      name: '门牌号(含胡同)',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '0644498',
                      code: 'cityName',
                      name: '地市名称',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '451514',
                      code: 'areaName',
                      name: '区域名称',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '219589',
                      code: 'countryName',
                      name: '乡镇名称',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '7224988',
                      code: 'reason',
                      name: '申请原因',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 12,
                callback1: [
                  {
                    type: 'apiRequest',
                    dataId: 167051607168969660,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '959743',
                      pageJsonId: '537892',
                      sync: false,
                      method: 'post',
                      url: '/app/rhin/gateway/callRhinEngine',
                      _capabilityCode: 'SYS_qryRegionListByParentId',
                      _apiCode: 'qryRegionListByParentId',
                      _source: 'rhin',
                      _serviceId: '878100790201982976',
                      _serviceTitle:
                        '根据父区域ID查询所有子区域-tsm: qryRegionListByParentId',
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
                          dataKey: '959743_header',
                        },
                        {
                          code: 'path',
                          name: '请求路径参数',
                          attrType: 'object',
                          _id: 'path',
                          compType: 'Input',
                          parents: [],
                          id: 'path',
                          dataKey: '959743_path',
                        },
                        {
                          code: 'query',
                          name: 'URL 参数',
                          attrType: 'object',
                          _id: 'query',
                          compType: 'Input',
                          parents: [],
                          id: 'query',
                          dataKey: '959743_query',
                        },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          children: [
                            {
                              code: 'includeParent',
                              attrType: 'field',
                              type: 'boolean',
                              mustFlag: 'F',
                              _id: 'body.includeParent',
                              compType: 'Input',
                              name: 'includeParent',
                              parents: ['body'],
                              id: 'body.includeParent',
                              dataKey: '959743_body.includeParent',
                              value: { type: ['customize'], code: 'false' },
                            },
                            {
                              code: 'parentRegionId',
                              attrType: 'field',
                              type: 'long',
                              mustFlag: 'F',
                              _id: 'body.parentRegionId',
                              compType: 'Input',
                              name: 'parentRegionId',
                              parents: ['body'],
                              id: 'body.parentRegionId',
                              dataKey: '959743_body.parentRegionId',
                              value: {
                                type: ['customize'],
                                code: '$data.factorForm.city$',
                              },
                            },
                          ],
                          _id: 'body',
                          compType: 'Input',
                          parents: [],
                          id: 'body',
                          dataKey: '959743_body',
                        },
                      ],
                    },
                    line_number: 13,
                    callback1: [
                      {
                        type: 'reloadSelectData',
                        dataId: 167051619896137100,
                        options: {
                          compId: 'Input_area_647813',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Select',
                          id: '1116283',
                          labelKey: 'regionName',
                          valueKey: 'regionId',
                          data: '$reply_959743?.resultData$',
                        },
                        line_number: 14,
                        callback1: [],
                      },
                    ],
                    callback2: [],
                  },
                  {
                    type: 'apiRequest',
                    dataId: 167051607586481380,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '6576459',
                      pageJsonId: '537892',
                      sync: false,
                      method: 'post',
                      url: '/app/rhin/gateway/callRhinEngine',
                      _capabilityCode: 'SYS_qryRegionListByParentId',
                      _apiCode: 'qryRegionListByParentId',
                      _source: 'rhin',
                      _serviceId: '878100790201982976',
                      _serviceTitle:
                        '根据父区域ID查询所有子区域-tsm: qryRegionListByParentId',
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
                          dataKey: '6576459_header',
                        },
                        {
                          code: 'path',
                          name: '请求路径参数',
                          attrType: 'object',
                          _id: 'path',
                          compType: 'Input',
                          parents: [],
                          id: 'path',
                          dataKey: '6576459_path',
                        },
                        {
                          code: 'query',
                          name: 'URL 参数',
                          attrType: 'object',
                          _id: 'query',
                          compType: 'Input',
                          parents: [],
                          id: 'query',
                          dataKey: '6576459_query',
                        },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          children: [
                            {
                              code: 'includeParent',
                              attrType: 'field',
                              type: 'boolean',
                              mustFlag: 'F',
                              _id: 'body.includeParent',
                              compType: 'Input',
                              name: 'includeParent',
                              parents: ['body'],
                              id: 'body.includeParent',
                              dataKey: '6576459_body.includeParent',
                              value: { type: ['customize'], code: 'false' },
                            },
                            {
                              code: 'parentRegionId',
                              attrType: 'field',
                              type: 'long',
                              mustFlag: 'F',
                              _id: 'body.parentRegionId',
                              compType: 'Input',
                              name: 'parentRegionId',
                              parents: ['body'],
                              id: 'body.parentRegionId',
                              dataKey: '6576459_body.parentRegionId',
                              value: {
                                type: ['customize'],
                                code: '$data.factorForm.area$',
                              },
                            },
                          ],
                          _id: 'body',
                          compType: 'Input',
                          parents: [],
                          id: 'body',
                          dataKey: '6576459_body',
                        },
                      ],
                    },
                    line_number: 15,
                    callback1: [
                      {
                        type: 'reloadSelectData',
                        dataId: 167051607586425800,
                        options: {
                          compId: 'Input_country_582901',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Select',
                          id: '0174014',
                          labelKey: 'regionName',
                          valueKey: 'regionId',
                          data: '$reply_6576459?.resultData$',
                        },
                        line_number: 16,
                        callback1: [],
                      },
                    ],
                    callback2: [],
                  },
                ],
                callback2: [],
              },
              {
                type: 'setValue',
                dataId: 166599479197029570,
                options: {
                  compId: 'Input_361479_887285_2150708_7460276_60627',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '784687',
                  value: '$state.itemList.approveGradeName$',
                },
                line_number: 17,
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
            line_number: 18,
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
                line_number: 19,
                callback1: [],
                callback2: [],
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '8505651',
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
                    condId: '520775',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166746050396395550,
                elseIfs: [],
                line_number: 20,
                callback1: [
                  {
                    type: 'setVisible',
                    dataId: 166746051945984540,
                    options: {
                      compId: 'Table_5369494',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Table',
                      id: '83026',
                    },
                    line_number: 21,
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
            line_number: 22,
            callback1: [
              {
                type: 'setVisible',
                dataId: 166599480827529820,
                options: {
                  compId: 'Input_361479_887285_2150708_7460276_60627',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '6776648',
                  visible: 'true',
                },
                line_number: 23,
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
                line_number: 24,
              },
              {
                type: 'setDisable',
                dataId: 166599483528244300,
                options: {
                  compId: [
                    'Input_361479_887285_2150708_7460276_60627',
                    'Form_449441_1900385_068038',
                    'Form_449441_1900385_068038_425388',
                  ],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '16357',
                  disabled: 'true',
                  compid: [
                    'Input_361479_887285_2150708_7460276_60627',
                    'Form_449441_1900385_068038',
                    'Form_449441_1900385_068038_425388',
                  ],
                },
                line_number: 25,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse187.params = [] || [];
    CMDGenerator(eventDataifelse187, {}, 'ifelse', {
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
          dividerText={'企业宽带同址多宽'}
          showTitle={true}
          $$componentItem={{
            id: 'Divider_27607',
            uid: 'Divider_27607',
            type: 'Divider',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ margin: '12px 0 12px 0', height: 'auto' }}
          ref={(r: any) => (refs['Divider_27607'] = r)}
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
                  id: 'Form_4311097_9385662_302551_802694',
                  uid: 'Form_4311097_9385662_302551_802694',
                  type: 'Form',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) =>
                  (refs['Form_4311097_9385662_302551_802694'] = r)
                }
                {...injectData}
              >
                <Checkbox
                  name={'审批场景'}
                  titleTip={'text'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  text={'企业宽带同址多宽'}
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
                    id: 'Checkbox_882584_5289015_934499_292792_8224843',
                    uid: 'Checkbox_882584_5289015_934499_292792_8224843',
                    type: 'Checkbox',
                    ...componentItem,
                  }}
                  disabled={true}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    (refs['Checkbox_882584_5289015_934499_292792_8224843'] = r)
                  }
                  {...injectData}
                />
                <View
                  name={'布局容器'}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_971391_984792',
                    uid: 'View_971391_984792',
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
                  ref={(r: any) => (refs['View_971391_984792'] = r)}
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
                    id: 'Input_361479_887285_2150708_7460276_60627',
                    uid: 'Input_361479_887285_2150708_7460276_60627',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={false}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    (refs['Input_361479_887285_2150708_7460276_60627'] = r)
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
            labelCol={8}
            wrapperCol={16}
            $$componentItem={{
              id: 'Form_449441_1900385_068038',
              uid: 'Form_449441_1900385_068038',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px', margin: '0px 0px 0px 0px' }}
            onValuesChange={(changedFieldName: any, changedValue: any) => {
              const eventDatasetDataSource149: any = [
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
                        attrId: '08707745',
                        code: 'city',
                        name: '地市',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_068038',
                            'getFieldsValue',
                          ],
                          code: 'city',
                        },
                      },
                      {
                        attrId: '182276',
                        code: 'area',
                        name: '区县',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_068038',
                            'getFieldsValue',
                          ],
                          code: 'area',
                        },
                      },
                      {
                        attrId: '905721',
                        code: 'country',
                        name: '街道/乡/镇',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_068038',
                            'getFieldsValue',
                          ],
                          code: 'country',
                        },
                      },
                      {
                        attrId: '500673',
                        code: 'district',
                        name: '片区',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '007551',
                        code: 'street',
                        name: '街、路、行政村、居委会',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_068038',
                            'getFieldsValue',
                          ],
                          code: 'street',
                        },
                      },
                      {
                        attrId: '087569',
                        code: 'houseNum',
                        name: '门牌号(含胡同)',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_068038',
                            'getFieldsValue',
                          ],
                          code: 'houseNum',
                        },
                      },
                      {
                        attrId: '303741',
                        code: 'doorplate',
                        name: '写字楼、小区（组团）、单位大院、自然村等',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_068038',
                            'getFieldsValue',
                          ],
                          code: 'doorplate',
                        },
                      },
                      {
                        attrId: '725859',
                        code: 'floorName',
                        name: '楼名、楼号(门面房前加"门面"标志)、村民组',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_068038',
                            'getFieldsValue',
                          ],
                          code: 'floorName',
                        },
                      },
                      {
                        attrId: '7467836',
                        code: 'element',
                        name: '楼号或单元号',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_068038',
                            'getFieldsValue',
                          ],
                          code: 'element',
                        },
                      },
                      {
                        attrId: '1586552',
                        code: 'roomName',
                        name: '房间号、户名',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_068038',
                            'getFieldsValue',
                          ],
                          code: 'roomName',
                        },
                      },
                      {
                        attrId: '996532',
                        code: 'installAddr',
                        name: '安装地址',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '7370567',
                        code: 'setMeal',
                        name: '套餐',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '8998593',
                        code: 'bandwidthUp',
                        name: '上行带宽',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '569754',
                        code: 'total',
                        name: '条数',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '410393',
                        code: 'totalBandwidthUp',
                        name: '总上行带宽',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '0644498',
                        code: 'cityName',
                        name: '地市名称',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '451514',
                        code: 'areaName',
                        name: '区域名称',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '219589',
                        code: 'countryName',
                        name: '乡镇名称',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                    ],
                    onlySetPatch: true,
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'customActionCode',
                      dataId: 166366244013133920,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '395614',
                        pageJsonId: '537892',
                        actionTitle: '',
                        code: 'function main(data,state,success,fail){var attrList=[];var obj=data.factorForm;for(var key in obj){attrList.push({"attrCode":key,"attrName":"","attrValue":obj[key]})}data.sceneSubmit.attrList=attrList;success(attrList)};',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'callParentCustomFunc',
                          dataId: 166366244013131500,
                          options: {
                            compId: 'callParentCustomFunc',
                            compName: 'system',
                            id: '384369',
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
                        {
                          type: 'callSelfFunc',
                          dataId: 167031172053950300,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '5198397',
                            pageJsonId: '537892',
                            customFuncName: 'jointAddr',
                            customFuncParams: '$data.factorForm$',
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
              eventDatasetDataSource149.params =
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
                eventDatasetDataSource149,
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
            ref={(r: any) => (refs['Form_449441_1900385_068038'] = r)}
            {...injectData}
          >
            <Select
              name={'地市'}
              size={'default'}
              selfSpan={8}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              filter={'none'}
              classification={'default'}
              attr={{}}
              placeholder={'请选择'}
              fieldName={'city'}
              value={data?.factorForm?.city}
              formItemIndex={0}
              labelCol={8}
              wrapperCol={16}
              $$componentItem={{
                id: 'Input_city_753123',
                uid: 'Input_city_753123',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDataclearValue139: any = [
                  {
                    type: 'clearValue',
                    dataId: 166600111973233150,
                    options: {
                      compId: 'Input_area_647813',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Select',
                      id: '315082',
                    },
                    line_number: 1,
                  },
                ];
                eventDataclearValue139.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDataclearValue139, { e }, 'clearValue', {
                  id: 'clearValue',
                  name: 'clearValue',
                  type: 'clearValue',
                  platform: 'pc',
                });
                const eventDataclearValue140: any = [
                  {
                    type: 'clearValue',
                    dataId: 167052457072323170,
                    options: {
                      compId: 'Input_country_582901',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Select',
                      id: '97223',
                    },
                    line_number: 2,
                  },
                ];
                eventDataclearValue140.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDataclearValue140, { e }, 'clearValue', {
                  id: 'clearValue',
                  name: 'clearValue',
                  type: 'clearValue',
                  platform: 'pc',
                });
                const eventDatagetSelectedData291: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 166599846272350100,
                    options: {
                      compId: 'Input_city_753123',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Select',
                      id: '574924',
                    },
                    line_number: 3,
                    callback1: [
                      {
                        type: 'apiRequest',
                        dataId: 166599846995575300,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '8209674',
                          pageJsonId: '537892',
                          sync: false,
                          method: 'post',
                          url: '/app/rhin/gateway/callRhinEngine',
                          _capabilityCode: 'SYS_qryRegionListByParentId',
                          _apiCode: 'qryRegionListByParentId',
                          _source: 'rhin',
                          _serviceId: '878100790201982976',
                          _serviceTitle:
                            '根据父区域ID查询所有子区域-tsm: qryRegionListByParentId',
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
                              dataKey: '8209674_header',
                            },
                            {
                              code: 'path',
                              name: '请求路径参数',
                              attrType: 'object',
                              _id: 'path',
                              compType: 'Input',
                              parents: [],
                              id: 'path',
                              dataKey: '8209674_path',
                            },
                            {
                              code: 'query',
                              name: 'URL 参数',
                              attrType: 'object',
                              _id: 'query',
                              compType: 'Input',
                              parents: [],
                              id: 'query',
                              dataKey: '8209674_query',
                            },
                            {
                              code: 'body',
                              name: '请求体',
                              attrType: 'object',
                              children: [
                                {
                                  code: 'includeParent',
                                  attrType: 'field',
                                  type: 'boolean',
                                  mustFlag: 'F',
                                  _id: 'body.includeParent',
                                  compType: 'Input',
                                  name: 'includeParent',
                                  parents: ['body'],
                                  id: 'body.includeParent',
                                  dataKey: '8209674_body.includeParent',
                                  value: { type: ['customize'], code: 'false' },
                                },
                                {
                                  code: 'parentRegionId',
                                  attrType: 'field',
                                  type: 'long',
                                  mustFlag: 'F',
                                  _id: 'body.parentRegionId',
                                  compType: 'Input',
                                  name: 'parentRegionId',
                                  parents: ['body'],
                                  id: 'body.parentRegionId',
                                  dataKey: '8209674_body.parentRegionId',
                                  value: {
                                    type: ['customize'],
                                    code: '$selectedData_574924[0].value$',
                                  },
                                },
                              ],
                              _id: 'body',
                              compType: 'Input',
                              parents: [],
                              id: 'body',
                              dataKey: '8209674_body',
                            },
                          ],
                        },
                        line_number: 4,
                        callback1: [
                          {
                            type: 'reloadSelectData',
                            dataId: 167051590811786000,
                            options: {
                              compId: 'Input_area_647813',
                              compLib: 'comm',
                              pageJsonId: '537892',
                              compName: 'Select',
                              id: '820833',
                              labelKey: 'regionName',
                              valueKey: 'regionId',
                              data: '$reply_8209674?.resultData$',
                            },
                            line_number: 5,
                            callback1: [],
                          },
                        ],
                        callback2: [],
                      },
                      {
                        type: 'setDataSource',
                        dataId: 167031132501953340,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '067155',
                          pageJsonId: '537892',
                          dataSourceId: 166124254360037760,
                          dataSourceName: 'factorForm',
                          dataSourceRelType: 'custom',
                          dataSourceReloadFilter: [],
                          dataSourceSetValue: [
                            {
                              attrId: '08707745',
                              code: 'city',
                              name: '地市',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['customize'],
                                code: '$selectedData_574924[0].value$',
                              },
                            },
                            {
                              attrId: '182276',
                              code: 'area',
                              name: '区县',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '905721',
                              code: 'country',
                              name: '街道/乡/镇',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '500673',
                              code: 'district',
                              name: '片区',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '007551',
                              code: 'street',
                              name: '街、路、行政村、居委会',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '087569',
                              code: 'houseNum',
                              name: '门牌号(含胡同)',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '303741',
                              code: 'doorplate',
                              name: '写字楼、小区（组团）、单位大院、自然村等',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '725859',
                              code: 'floorName',
                              name: '楼名、楼号(门面房前加"门面"标志)、村民组',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '7467836',
                              code: 'element',
                              name: '楼号或单元号',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '1586552',
                              code: 'roomName',
                              name: '房间号、户名',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '996532',
                              code: 'installAddr',
                              name: '安装地址',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '7370567',
                              code: 'setMeal',
                              name: '套餐',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '8998593',
                              code: 'bandwidthUp',
                              name: '上行带宽',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '569754',
                              code: 'total',
                              name: '条数',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '410393',
                              code: 'totalBandwidthUp',
                              name: '总上行带宽',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '0644498',
                              code: 'cityName',
                              name: '地市名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['customize'],
                                code: '$selectedData_574924[0].label$',
                              },
                            },
                            {
                              attrId: '451514',
                              code: 'areaName',
                              name: '区域名称',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '219589',
                              code: 'countryName',
                              name: '乡镇名称',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                          ],
                          operateType: 1,
                          onlySetPatch: true,
                          otherObjectArrayOptions: {},
                        },
                        line_number: 6,
                        callback1: [
                          {
                            type: 'callSelfFunc',
                            dataId: 167031139237059740,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '768609',
                              pageJsonId: '537892',
                              customFuncName: 'jointAddr',
                              customFuncParams: '$data.factorForm$',
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
                ];
                eventDatagetSelectedData291.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData291,
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
              ref={(r: any) => (refs['Input_city_753123'] = r)}
              {...injectData}
            />
            <Select
              name={'区县'}
              size={'default'}
              selfSpan={8}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              filter={'none'}
              classification={'default'}
              attr={{}}
              placeholder={'请选择'}
              fieldName={'area'}
              value={data?.factorForm?.area}
              formItemIndex={1}
              labelCol={8}
              wrapperCol={16}
              $$componentItem={{
                id: 'Input_area_647813',
                uid: 'Input_area_647813',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDataclearValue141: any = [
                  {
                    type: 'clearValue',
                    dataId: 167052451129312400,
                    options: {
                      compId: 'Input_country_582901',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Select',
                      id: '77687232',
                    },
                    line_number: 1,
                  },
                ];
                eventDataclearValue141.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDataclearValue141, { e }, 'clearValue', {
                  id: 'clearValue',
                  name: 'clearValue',
                  type: 'clearValue',
                  platform: 'pc',
                });
                const eventDatagetSelectedData292: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 167031141579304900,
                    options: {
                      compId: 'Input_area_647813',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Select',
                      id: '8810325',
                    },
                    line_number: 2,
                    callback1: [
                      {
                        type: 'console',
                        dataId: 167280032273710430,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '006105',
                          pageJsonId: '537892',
                        },
                        line_number: 3,
                      },
                      {
                        type: 'setDataSource',
                        dataId: 167031142622790720,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '59823',
                          pageJsonId: '537892',
                          dataSourceId: 166124254360037760,
                          dataSourceName: 'factorForm',
                          dataSourceRelType: 'custom',
                          dataSourceReloadFilter: [],
                          dataSourceSetValue: [
                            {
                              attrId: '08707745',
                              code: 'city',
                              name: '地市',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '182276',
                              code: 'area',
                              name: '区县',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['customize'],
                                code: '$selectedData_8810325[0].value$',
                              },
                            },
                            {
                              attrId: '905721',
                              code: 'country',
                              name: '街道/乡/镇',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '500673',
                              code: 'district',
                              name: '片区',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '007551',
                              code: 'street',
                              name: '街、路、行政村、居委会',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '087569',
                              code: 'houseNum',
                              name: '门牌号(含胡同)',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '303741',
                              code: 'doorplate',
                              name: '写字楼、小区（组团）、单位大院、自然村等',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '725859',
                              code: 'floorName',
                              name: '楼名、楼号(门面房前加"门面"标志)、村民组',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '7467836',
                              code: 'element',
                              name: '楼号或单元号',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '1586552',
                              code: 'roomName',
                              name: '房间号、户名',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '996532',
                              code: 'installAddr',
                              name: '安装地址',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '7370567',
                              code: 'setMeal',
                              name: '套餐',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '8998593',
                              code: 'bandwidthUp',
                              name: '上行带宽',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '569754',
                              code: 'total',
                              name: '条数',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '410393',
                              code: 'totalBandwidthUp',
                              name: '总上行带宽',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '0644498',
                              code: 'cityName',
                              name: '地市名称',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '451514',
                              code: 'areaName',
                              name: '区域名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['customize'],
                                code: '$selectedData_8810325[0].label$',
                              },
                            },
                            {
                              attrId: '219589',
                              code: 'countryName',
                              name: '乡镇名称',
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
                            type: 'callSelfFunc',
                            dataId: 167031160627686050,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '843479',
                              pageJsonId: '537892',
                              customFuncName: 'jointAddr',
                              customFuncParams: '$data.factorForm$',
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
                        dataId: 167051566880931740,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '271975',
                          pageJsonId: '537892',
                          sync: false,
                          method: 'post',
                          url: '/app/rhin/gateway/callRhinEngine',
                          _capabilityCode: 'SYS_qryRegionListByParentId',
                          _apiCode: 'qryRegionListByParentId',
                          _source: 'rhin',
                          _serviceId: '878100790201982976',
                          _serviceTitle:
                            '根据父区域ID查询所有子区域-tsm: qryRegionListByParentId',
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
                              dataKey: '271975_header',
                            },
                            {
                              code: 'path',
                              name: '请求路径参数',
                              attrType: 'object',
                              _id: 'path',
                              compType: 'Input',
                              parents: [],
                              id: 'path',
                              dataKey: '271975_path',
                            },
                            {
                              code: 'query',
                              name: 'URL 参数',
                              attrType: 'object',
                              _id: 'query',
                              compType: 'Input',
                              parents: [],
                              id: 'query',
                              dataKey: '271975_query',
                            },
                            {
                              code: 'body',
                              name: '请求体',
                              attrType: 'object',
                              children: [
                                {
                                  code: 'includeParent',
                                  attrType: 'field',
                                  type: 'boolean',
                                  mustFlag: 'F',
                                  _id: 'body.includeParent',
                                  compType: 'Input',
                                  name: 'includeParent',
                                  parents: ['body'],
                                  id: 'body.includeParent',
                                  dataKey: '271975_body.includeParent',
                                  value: { type: ['customize'], code: 'false' },
                                },
                                {
                                  code: 'parentRegionId',
                                  attrType: 'field',
                                  type: 'long',
                                  mustFlag: 'F',
                                  _id: 'body.parentRegionId',
                                  compType: 'Input',
                                  name: 'parentRegionId',
                                  parents: ['body'],
                                  id: 'body.parentRegionId',
                                  dataKey: '271975_body.parentRegionId',
                                  value: {
                                    type: ['customize'],
                                    code: '$selectedData_8810325[0].value$',
                                  },
                                },
                              ],
                              _id: 'body',
                              compType: 'Input',
                              parents: [],
                              id: 'body',
                              dataKey: '271975_body',
                            },
                          ],
                        },
                        line_number: 6,
                        callback1: [
                          {
                            type: 'reloadSelectData',
                            dataId: 167051582516099780,
                            options: {
                              compId: 'Input_country_582901',
                              compLib: 'comm',
                              pageJsonId: '537892',
                              compName: 'Select',
                              id: '07548',
                              labelKey: 'regionName',
                              valueKey: 'regionId',
                              data: '$reply_271975?.resultData$',
                            },
                            line_number: 7,
                            callback1: [],
                          },
                        ],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetSelectedData292.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData292,
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
              ref={(r: any) => (refs['Input_area_647813'] = r)}
              {...injectData}
            />
            <Select
              name={'街道/乡/镇'}
              size={'default'}
              selfSpan={8}
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
              fieldName={'country'}
              value={data?.factorForm?.country}
              formItemIndex={2}
              $$componentItem={{
                id: 'Input_country_582901',
                uid: 'Input_country_582901',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatagetSelectedData293: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 167031148859395970,
                    shielding: true,
                    options: {
                      compId: 'Input_country_582901',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Select',
                      id: '041008',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'console',
                        dataId: 167383812312192420,
                        shielding: true,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '9762023',
                          pageJsonId: '537892',
                          value: ['获取街道信息=============================='],
                        },
                        line_number: 2,
                      },
                      {
                        type: 'setDataSource',
                        dataId: 167031149450181020,
                        shielding: true,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '875389',
                          pageJsonId: '537892',
                          dataSourceId: 166124254360037760,
                          dataSourceName: 'factorForm',
                          dataSourceRelType: 'custom',
                          dataSourceReloadFilter: [],
                          dataSourceSetValue: [
                            {
                              attrId: '08707745',
                              code: 'city',
                              name: '地市',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '182276',
                              code: 'area',
                              name: '区县',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '905721',
                              code: 'country',
                              name: '街道/乡/镇',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['customize'],
                                code: '$selectedData_041008[0].value$',
                              },
                            },
                            {
                              attrId: '500673',
                              code: 'district',
                              name: '片区',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '007551',
                              code: 'street',
                              name: '街、路、行政村、居委会',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '087569',
                              code: 'houseNum',
                              name: '门牌号(含胡同)',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '303741',
                              code: 'doorplate',
                              name: '写字楼、小区（组团）、单位大院、自然村等',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '725859',
                              code: 'floorName',
                              name: '楼名、楼号(门面房前加"门面"标志)、村民组',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '7467836',
                              code: 'element',
                              name: '楼号或单元号',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '1586552',
                              code: 'roomName',
                              name: '房间号、户名',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '996532',
                              code: 'installAddr',
                              name: '安装地址',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '7370567',
                              code: 'setMeal',
                              name: '套餐',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '8998593',
                              code: 'bandwidthUp',
                              name: '上行带宽',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '569754',
                              code: 'total',
                              name: '条数',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '410393',
                              code: 'totalBandwidthUp',
                              name: '总上行带宽',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '0644498',
                              code: 'cityName',
                              name: '地市名称',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '451514',
                              code: 'areaName',
                              name: '区域名称',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '219589',
                              code: 'countryName',
                              name: '乡镇名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['customize'],
                                code: '$selectedData_041008[0].label$',
                              },
                            },
                          ],
                          operateType: 1,
                          onlySetPatch: true,
                          otherObjectArrayOptions: {},
                        },
                        line_number: 3,
                        callback1: [
                          {
                            type: 'console',
                            dataId: 167383804865047800,
                            shielding: true,
                            options: {
                              compId: 'debug',
                              compName: 'system',
                              id: '724421',
                              pageJsonId: '537892',
                              value: ['调用自定义事件=================='],
                            },
                            line_number: 4,
                          },
                          {
                            type: 'callSelfFunc',
                            dataId: 167031162583507680,
                            shielding: true,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '4331448',
                              pageJsonId: '537892',
                              customFuncName: 'jointAddr',
                              customFuncParams: '$data.factorForm$',
                            },
                            line_number: 5,
                            callback1: [],
                            callback2: [],
                          },
                        ],
                        callback2: [],
                      },
                    ],
                    callback2: [
                      {
                        type: 'console',
                        dataId: 167383816749598080,
                        shielding: true,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '000348',
                          pageJsonId: '537892',
                          value: ['值获取失败============='],
                        },
                        line_number: 6,
                      },
                    ],
                  },
                ];
                eventDatagetSelectedData293.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData293,
                  { e },
                  'getSelectedData',
                  {
                    id: 'getSelectedData',
                    name: 'getSelectedData',
                    type: 'getSelectedData',
                    platform: 'pc',
                  },
                );
                const eventDatagetSelectedData294: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 167383820776184450,
                    options: {
                      compId: 'Input_country_582901',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Select',
                      id: '893525',
                    },
                    line_number: 7,
                    callback1: [
                      {
                        type: 'console',
                        dataId: 167383821038076960,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '146784',
                          pageJsonId: '537892',
                          value: ['成功============='],
                        },
                        line_number: 8,
                      },
                    ],
                    callback2: [
                      {
                        type: 'console',
                        dataId: 167383822017113600,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '875552',
                          pageJsonId: '537892',
                          value: ['失败============='],
                        },
                        line_number: 9,
                      },
                    ],
                  },
                ];
                eventDatagetSelectedData294.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData294,
                  { e },
                  'getSelectedData',
                  {
                    id: 'getSelectedData',
                    name: 'getSelectedData',
                    type: 'getSelectedData',
                    platform: 'pc',
                  },
                ); // console 167384716190159230
                console.log(e);
              }}
              ref={(r: any) => (refs['Input_country_582901'] = r)}
              {...injectData}
            />
            <Input
              name={'街/村'}
              size={'default'}
              selfSpan={8}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              fieldName={'street'}
              value={data?.factorForm?.street}
              formItemIndex={3}
              labelCol={8}
              wrapperCol={16}
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
                id: 'Input_street_1527572',
                uid: 'Input_street_1527572',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_street_1527572'] = r)}
              {...injectData}
            />
            <Input
              name={'号/弄'}
              size={'default'}
              selfSpan={8}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              fieldName={'houseNum'}
              value={data?.factorForm?.houseNum}
              formItemIndex={4}
              labelCol={8}
              wrapperCol={16}
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
                id: 'Input_param4_692314',
                uid: 'Input_param4_692314',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_param4_692314'] = r)}
              {...injectData}
            />
            <Input
              name={'楼宇/单位'}
              size={'default'}
              selfSpan={8}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'写字楼、小区（组团）、单位大院、自然村等'}
              fieldName={'doorplate'}
              value={data?.factorForm?.doorplate}
              formItemIndex={5}
              labelCol={8}
              wrapperCol={16}
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
                id: 'Input_doorplate_0544844',
                uid: 'Input_doorplate_0544844',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_doorplate_0544844'] = r)}
              {...injectData}
            />
            <Input
              name={'单元楼号'}
              size={'default'}
              selfSpan={8}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'楼名、楼号(门面房前加"门面"标志)、村民组'}
              fieldName={'floorName'}
              value={data?.factorForm?.floorName}
              formItemIndex={6}
              labelCol={8}
              wrapperCol={16}
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
                id: 'Input_floorName_609729',
                uid: 'Input_floorName_609729',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_floorName_609729'] = r)}
              {...injectData}
            />
            <Input
              name={'层号'}
              size={'default'}
              selfSpan={8}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              fieldName={'element'}
              value={data?.factorForm?.element}
              formItemIndex={7}
              labelCol={8}
              wrapperCol={16}
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
                id: 'Input_element_152438',
                uid: 'Input_element_152438',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_element_152438'] = r)}
              {...injectData}
            />
            <Input
              name={'房间号'}
              size={'default'}
              selfSpan={8}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              fieldName={'roomName'}
              value={data?.factorForm?.roomName}
              formItemIndex={8}
              labelCol={8}
              wrapperCol={16}
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
                id: 'Input_roomName_081681',
                uid: 'Input_roomName_081681',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_roomName_081681'] = r)}
              {...injectData}
            />
          </Form>
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
            labelCol={8}
            wrapperCol={16}
            $$componentItem={{
              id: 'Form_449441_1900385_068038_425388',
              uid: 'Form_449441_1900385_068038_425388',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px', margin: '10px 0px 0px 0px' }}
            onValuesChange={(changedFieldName: any, changedValue: any) => {
              const eventDatasetDataSource150: any = [
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
                        attrId: '08707745',
                        code: 'city',
                        name: '地市',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '182276',
                        code: 'area',
                        name: '区县',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '905721',
                        code: 'country',
                        name: '街道/乡/镇',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '500673',
                        code: 'district',
                        name: '片区',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '007551',
                        code: 'street',
                        name: '街、路、行政村、居委会',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '087569',
                        code: 'houseNum',
                        name: '门牌号(含胡同)',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '303741',
                        code: 'doorplate',
                        name: '写字楼、小区（组团）、单位大院、自然村等',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '725859',
                        code: 'floorName',
                        name: '楼名、楼号(门面房前加"门面"标志)、村民组',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '7467836',
                        code: 'element',
                        name: '楼号或单元号',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '1586552',
                        code: 'roomName',
                        name: '房间号、户名',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '996532',
                        code: 'installAddr',
                        name: '安装地址',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_068038_425388',
                            'getFieldsValue',
                          ],
                          code: 'installAddr',
                        },
                      },
                      {
                        attrId: '7370567',
                        code: 'setMeal',
                        name: '套餐',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_068038_425388',
                            'getFieldsValue',
                          ],
                          code: 'setMeal',
                        },
                      },
                      {
                        attrId: '8998593',
                        code: 'bandwidthUp',
                        name: '上行带宽',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_068038_425388',
                            'getFieldsValue',
                          ],
                          code: 'bandwidthUp',
                        },
                      },
                      {
                        attrId: '569754',
                        code: 'total',
                        name: '条数',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_068038_425388',
                            'getFieldsValue',
                          ],
                          code: 'total',
                        },
                      },
                      {
                        attrId: '410393',
                        code: 'totalBandwidthUp',
                        name: '总上行带宽',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_068038_425388',
                            'getFieldsValue',
                          ],
                          code: 'totalBandwidthUp',
                        },
                      },
                      {
                        attrId: '0644498',
                        code: 'cityName',
                        name: '地市名称',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '451514',
                        code: 'areaName',
                        name: '区域名称',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '219589',
                        code: 'countryName',
                        name: '乡镇名称',
                        type: 'string',
                        initialData: { type: 'static' },
                      },
                      {
                        attrId: '7224988',
                        code: 'reason',
                        name: '申请原因',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_1900385_068038_425388',
                            'getFieldsValue',
                          ],
                          code: 'reason',
                        },
                      },
                    ],
                    onlySetPatch: true,
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'customActionCode',
                      dataId: 166366244013133920,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '395614',
                        pageJsonId: '537892',
                        actionTitle: '',
                        code: 'function main(data,state,success,fail){var attrList=[];var obj=data.factorForm;for(var key in obj){attrList.push({"attrCode":key,"attrName":"","attrValue":obj[key]})}data.sceneSubmit.attrList=attrList;success(attrList)};',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'callParentCustomFunc',
                          dataId: 166366244013131500,
                          options: {
                            compId: 'callParentCustomFunc',
                            compName: 'system',
                            id: '384369',
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
              eventDatasetDataSource150.params =
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
                eventDatasetDataSource150,
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
            ref={(r: any) => (refs['Form_449441_1900385_068038_425388'] = r)}
            {...injectData}
          >
            <Input
              name={'安装地址'}
              size={'default'}
              selfSpan={24}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              fieldName={'installAddr'}
              value={data?.factorForm?.installAddr}
              formItemIndex={0}
              labelCol={'8'}
              wrapperCol={16}
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
                id: 'Input_installAddr_72918684_445353',
                uid: 'Input_installAddr_72918684_445353',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_installAddr_72918684_445353'] = r)}
              {...injectData}
            />
            <Input
              name={'套餐'}
              size={'default'}
              selfSpan={8}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              fieldName={'setMeal'}
              value={data?.factorForm?.setMeal}
              formItemIndex={1}
              icon={{
                type: '',
                theme: '',
                fontAddress: '',
                isIconFont: false,
                iconFileInfo: {},
              }}
              labelCol={8}
              wrapperCol={16}
              prefixIcon={{
                type: undefined,
                theme: 'outlined',
                fontAddress: '',
                isIconFont: false,
                iconFileInfo: {},
              }}
              $$componentItem={{
                id: 'Input_setMeal_339143_414187',
                uid: 'Input_setMeal_339143_414187',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_setMeal_339143_414187'] = r)}
              {...injectData}
            />
            <Select
              name={'上行带宽'}
              size={'default'}
              selfSpan={8}
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
              fieldName={'bandwidthUp'}
              value={data?.factorForm?.bandwidthUp}
              formItemIndex={2}
              $$componentItem={{
                id: 'Input_bandwidthUp_7220704_692435',
                uid: 'Input_bandwidthUp_7220704_692435',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatacallSelfFunc449: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166876073454101340,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '43517',
                      pageJsonId: '537892',
                      customFuncName: 'calculSumBandwidth',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc449.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc449, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Input_bandwidthUp_7220704_692435'] = r)}
              {...injectData}
            />
            <Input
              name={'条数'}
              size={'default'}
              selfSpan={8}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              fieldName={'total'}
              value={data?.factorForm?.total}
              formItemIndex={3}
              regexp={[
                {
                  id: '470606',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入大于等于0的正整数',
                  pattern: '/^(([1-9]{1}\\d*)|(0{1}))$/',
                },
              ]}
              labelCol={8}
              wrapperCol={16}
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
                id: 'Input_total_8367775_635653',
                uid: 'Input_total_8367775_635653',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatacallSelfFunc450: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166876074543734560,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '666807',
                      pageJsonId: '537892',
                      customFuncName: 'calculSumBandwidth',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc450.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc450, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Input_total_8367775_635653'] = r)}
              {...injectData}
            />
            <Input
              name={'上行带宽总和'}
              size={'default'}
              selfSpan={8}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'M'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              fieldName={'totalBandwidthUp'}
              value={data?.factorForm?.totalBandwidthUp}
              formItemIndex={4}
              labelCol={8}
              wrapperCol={16}
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
                id: 'Input_totalBandwidthUp_874141_463055',
                uid: 'Input_totalBandwidthUp_874141_463055',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) =>
                (refs['Input_totalBandwidthUp_874141_463055'] = r)
              }
              {...injectData}
            />
            <TextArea
              name={'申请原因'}
              selfSpan={24}
              labelCol={8}
              wrapperCol={16}
              titleTip={'text'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              placeholder={'请输入'}
              fieldName={'reason'}
              value={data?.factorForm?.reason}
              formItemIndex={5}
              tipIcon={{
                theme: 'outlined',
                type: 'question-circle',
                isIconFont: false,
              }}
              tipContent={
                '原已合作XX业务。现阶段有意向与我司合作商务快线业务，合作期XX年。鉴于XX，现申请办理同址多宽带'
              }
              $$componentItem={{
                id: 'Input_1215351',
                uid: 'Input_1215351',
                type: 'TextArea',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_1215351'] = r)}
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
                id: 'Form_395851_1727917_661735_9621297',
                uid: 'Form_395851_1727917_661735_9621297',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ padding: '0px 0px 0px 0px', margin: '10px 0px 0px 0px' }}
              ref={(r: any) => (refs['Form_395851_1727917_661735_9621297'] = r)}
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
                  id: 'Input_690228_5400337_280164_96733',
                  uid: 'Input_690228_5400337_280164_96733',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  (refs['Input_690228_5400337_280164_96733'] = r)
                }
                {...injectData}
              />
              <View
                name={'布局容器'}
                labelCol={8}
                wrapperCol={16}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_22346374_875512_9117364_7049835',
                  uid: 'View_22346374_875512_9117364_7049835',
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
                  (refs['View_22346374_875512_9117364_7049835'] = r)
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
                    id: 'StdUpload_6230546_867413_762296_377598',
                    uid: 'StdUpload_6230546_867413_762296_377598',
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
                    const eventDatagetSelectedData296: any = [
                      {
                        type: 'getSelectedData',
                        dataId: 166599492151597470,
                        options: {
                          compId: 'Input_690228_5400337_280164_96733',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Select',
                          id: '856638',
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'setDataSource',
                            dataId: 166599492955539300,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '623887',
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
                                    code: '$selectedData_856638[0].value$',
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
                                    code: '$selectedData_856638[0].label$',
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
                                dataId: 166599492955503070,
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '864716',
                                  pageJsonId: '537892',
                                  code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=data.fileInfoList;success(data.sceneSubmit)};',
                                },
                                line_number: 3,
                                callback1: [
                                  {
                                    type: 'callParentCustomFunc',
                                    dataId: 166599492955511550,
                                    options: {
                                      compId: 'callParentCustomFunc',
                                      compName: 'system',
                                      id: '791369',
                                      pageJsonId: '537892',
                                      pathname: '/commonAuditOrder',
                                      pageId: '872682457815691264',
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
                        ],
                        callback2: [
                          {
                            type: 'showMessage',
                            dataId: 166599494407546270,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '009618',
                              pageJsonId: '537892',
                              type: 'error',
                              value: '请选择附件类型',
                            },
                            line_number: 5,
                          },
                        ],
                      },
                    ];
                    eventDatagetSelectedData296.params =
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
                      eventDatagetSelectedData296,
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
                    const eventDatacustomActionCode590: any = [
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
                    eventDatacustomActionCode590.params =
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
                      eventDatacustomActionCode590,
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
                    (refs['StdUpload_6230546_867413_762296_377598'] = r)
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
              const eventDatacustomActionCode591: any = [
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
              eventDatacustomActionCode591.params =
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
                eventDatacustomActionCode591,
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
              const eventDatadownloadByFileId57: any = [
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
              eventDatadownloadByFileId57.params =
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
                eventDatadownloadByFileId57,
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
          ref={(r: any) => (refs['BOFramer_58639'] = r)}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(ClsCp_0007_0003Old$$Page, {
  pageId: '932464157937143808',
  hasLogin: false,
  dataSource,
  defaultState: {},
});
