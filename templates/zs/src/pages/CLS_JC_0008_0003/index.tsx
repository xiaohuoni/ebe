// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import {
  Checkbox,
  Divider,
  Form,
  HorizontalView,
  Input,
  Select,
  TextArea,
  View,
} from '@/components/factory';

import BusiComp0521965 from '@/components/BusiComp0521965';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const ClsJc_0008_0003$$Page: React.FC<PageProps> = ({
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
  const fileUpload = (options_475312: any) => {
    const eventDatacustomActionCode135: any = [
      {
        type: 'customActionCode',
        dataId: 168621499868827500,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '692834',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=options_475312;;success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'callParentCustomFunc',
            dataId: 168621499868851500,
            options: {
              compId: 'callParentCustomFunc',
              compName: 'system',
              id: '9511768',
              pageJsonId: '537892',
              pathname: '/commonAuditOrder',
              pageId: '872682457815691264',
              customFuncName: 'getFactor',
              customFuncParams: '$data.sceneSubmit$',
              modalPath: '/commonAuditOrder',
            },
            line_number: 2,
            callback1: [],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode135.params =
      [
        {
          title: '事件入参',
          name: 'options_475312',
          value: '$options_475312$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode135,
      { options_475312 },
      'customActionCode',
      {
        id: 'customActionCode',
        name: 'customActionCode',
        type: 'customActionCode',
        platform: 'undefined',
      },
    );
  };
  const setAmountInfo = (options_988997: any) => {
    // console 168912849335934660
    console.log('=======入参======', options_988997);
    const eventDatacustomActionCode136: any = [
      {
        type: 'customActionCode',
        dataId: 168912891167300130,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '933376',
          pageJsonId: '285255',
          code: 'function main(data,state,success,fail){var groupId=options_988997.groupId;success(groupId)};',
          actionTitle: '设置集团信息',
        },
        line_number: 2,
        callback1: [
          {
            type: 'apiRequest',
            dataId: 168912953915055870,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '4039175',
              pageJsonId: '285255',
              sync: false,
              actionTitle: '有价卡金额查询',
              method: 'post',
              url: '/app/rhin/gateway/callRhinEngine',
              _capabilityCode: 'queryGroupValueCardAmount',
              _apiCode: 'queryGroupValueCardAmount',
              _source: 'rhin',
              _sourceName: '集团有价卡金额查询',
              _serviceId: '990190098114600960',
              _serviceTitle: '集团有价卡金额查询: queryGroupValueCardAmount',
              valueType: 'object',
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
                      dataKey: '4039175_root.header',
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
                      dataKey: '4039175_root.path',
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
                      dataKey: '4039175_root.query',
                    },
                    {
                      code: 'body',
                      name: '请求体',
                      attrType: 'object',
                      children: [
                        {
                          code: 'orderNbr',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'root.body.orderNbr',
                          compType: 'Input',
                          name: '订单号',
                          parents: ['root', 'body'],
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-0',
                          id: 'root.body.orderNbr',
                          dataKey: '4039175_root.body.orderNbr',
                          value: { type: [], code: '' },
                          defaultValue: '',
                        },
                        {
                          code: 'groupId',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'root.body.groupId',
                          compType: 'Input',
                          name: '集团ID',
                          parents: ['root', 'body'],
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-1',
                          id: 'root.body.groupId',
                          dataKey: '4039175_root.body.groupId',
                          value: { type: ['customize'], code: '$data_933376$' },
                        },
                      ],
                      _id: 'root.body',
                      compType: 'Input',
                      parents: ['root'],
                      parentType: 'object',
                      parentKey: '0',
                      key: '0-3',
                      id: 'root.body',
                      dataKey: '4039175_root.body',
                      value: { type: [], code: '' },
                    },
                  ],
                  _id: 'root',
                  compType: 'Input',
                  isRoot: true,
                  parents: [],
                  key: '0',
                  id: 'root',
                  dataKey: '4039175_root',
                },
              ],
              params: 'object',
              _requestType: 'object',
            },
            line_number: 3,
            callback1: [
              {
                type: 'console',
                dataId: 168921496208485200,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '780033',
                  pageJsonId: '285255',
                  value: [
                    '==========RESPONSE============',
                    '$reply_4039175$',
                    '$state$',
                    '$data$',
                  ],
                },
                line_number: 4,
              },
              {
                type: 'customActionCode',
                dataId: 168921509256030370,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '240029',
                  pageJsonId: '285255',
                  code: 'function main(data,state,success,fail){var result=reply_4039175.resultData;form=data.dataform;form.cumulativePurchaseTimesMouth=result.cumulativePurchaseTimesMouth;form.cumulativePurchaseAmountMouth=result.cumulativePurchaseAmountMouth;form.cumulativePurchaseTimesYear=result.cumulativePurchaseTimesYear;form.cumulativePurchaseAmountYear=result.cumulativePurchaseAmountYear;form.year=(parseFloat(result.cumulativePurchaseAmountYear)/10000).toFixed(2);form.mouth=(parseFloat(result.cumulativePurchaseAmountMouth)/10000).toFixed(2)};',
                },
                line_number: 5,
                callback1: [],
                callback2: [],
              },
              {
                type: 'clearValue',
                dataId: 168923809654821980,
                options: {
                  compId: 'Input_371687',
                  compLib: 'comm',
                  pageJsonId: '285255',
                  compName: 'Input',
                  id: '274493',
                },
                line_number: 6,
              },
            ],
            callback2: [],
          },
          {
            type: 'console',
            dataId: 168913115857937730,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '915064',
              pageJsonId: '285255',
              value: ['======GroupId=====', '$data_933376$'],
            },
            line_number: 7,
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode136.params =
      [
        {
          title: '事件入参',
          name: 'options_988997',
          value: '$options_988997$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode136,
      { options_988997 },
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
    setAmountInfo,
  }));

  useEffect(() => {
    const eventDataapiRequest405: any = [
      {
        type: 'apiRequest',
        dataId: 168629387834505660,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '68711',
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
                  code: 'header',
                  name: '请求头参数',
                  attrType: 'object',
                  _id: 'root.header',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.header',
                  dataKey: '68711_root.header',
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
                  dataKey: '68711_root.path',
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
                  dataKey: '68711_root.query',
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
                      _id: 'root.body.catalogCode',
                      compType: 'Input',
                      name: 'catalogCode',
                      parents: ['root', 'body'],
                      id: 'root.body.catalogCode',
                      dataKey: '68711_root.body.catalogCode',
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
                      dataKey: '68711_root.body.attrCode',
                      value: {
                        type: ['customize'],
                        code: 'whetherPartyArmyClient',
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
                  dataKey: '68711_root.body',
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
              dataKey: '68711_root',
            },
          ],
          actionTitle: '是否党政军客户枚举加载',
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 168629415650860450,
            options: {
              compId: 'Select_2249408',
              compLib: 'comm',
              pageJsonId: '285255',
              compName: 'Select',
              id: '4644177',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
              data: '$reply_68711?.resultData$',
            },
            line_number: 2,
            callback1: [],
          },
          {
            type: 'console',
            dataId: 169148542313036320,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '527657',
              pageJsonId: '285255',
              value: ['111'],
            },
            line_number: 3,
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest405.params = [] || [];
    CMDGenerator(eventDataapiRequest405, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest406: any = [
      {
        type: 'apiRequest',
        dataId: 168629431248201540,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '109169',
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
                  code: 'header',
                  name: '请求头参数',
                  attrType: 'object',
                  _id: 'root.header',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.header',
                  dataKey: '109169_root.header',
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
                  dataKey: '109169_root.path',
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
                  dataKey: '109169_root.query',
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
                      _id: 'root.body.catalogCode',
                      compType: 'Input',
                      name: 'catalogCode',
                      parents: ['root', 'body'],
                      id: 'root.body.catalogCode',
                      dataKey: '109169_root.body.catalogCode',
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
                      dataKey: '109169_root.body.attrCode',
                      value: { type: ['customize'], code: 'fundingSource' },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.body',
                  dataKey: '109169_root.body',
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
              dataKey: '109169_root',
            },
          ],
          actionTitle: '资金来源枚举加载',
        },
        line_number: 4,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 168629434862942430,
            options: {
              compId: 'Select_7878199',
              compLib: 'comm',
              pageJsonId: '285255',
              compName: 'Select',
              id: '632176',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
              data: '$reply_109169?.resultData$',
            },
            line_number: 5,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest406.params = [] || [];
    CMDGenerator(eventDataapiRequest406, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest407: any = [
      {
        type: 'apiRequest',
        dataId: 16868190342141286,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '7054945',
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
        line_number: 6,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 168681903421416060,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '888199',
              pageJsonId: '537892',
              dataSourceId: 168681894465504320,
              dataSourceName: 'sceneSubmit',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  attrId: '635103',
                  code: 'catalogCode',
                  name: '类目编码',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: [
                      'context',
                      '$reply_7054945?.resultData.catalogCode$',
                    ],
                    hideAttr: true,
                    code: '',
                  },
                },
                {
                  attrId: '18586',
                  code: 'approveGrade',
                  name: '审批等级',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: { type: [], code: '' },
                },
                {
                  attrId: '8950456',
                  code: 'attrList',
                  name: '要素',
                  type: 'objectArray',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: { type: [], code: '' },
                },
                {
                  attrId: '3746525',
                  code: 'fileInfo',
                  name: '附件',
                  type: 'objectArray',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: { type: [], code: '' },
                },
                {
                  attrId: '7201725',
                  code: 'catalogItemCode',
                  name: '类目项编码',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: { type: [], code: '' },
                },
                {
                  attrId: '1709863',
                  code: 'catalogItemSubType',
                  name: '类目项子类型',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: [
                      'context',
                      '$reply_7054945?.resultData.catalogItemSubType$',
                    ],
                    hideAttr: true,
                    code: '',
                  },
                },
                {
                  attrId: '362883',
                  code: 'childCatalogCode',
                  name: '子类目编码',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: [
                      'context',
                      '$reply_7054945?.resultData.childCatalogCode$',
                    ],
                    hideAttr: true,
                    code: '',
                  },
                },
                {
                  attrId: '222938',
                  code: 'parentCatalogCode',
                  name: '上级类目编码',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: [
                      'context',
                      '$reply_7054945?.resultData.parentCatalogCode$',
                    ],
                    hideAttr: true,
                    code: '',
                  },
                },
                {
                  attrId: '593244',
                  code: 'parentCatalogItemCode',
                  name: '上级类目项编码',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: [
                      'context',
                      '$reply_7054945?.resultData.parentCatalogItemCode$',
                    ],
                    hideAttr: true,
                    code: '',
                  },
                },
                {
                  attrId: '203746',
                  code: 'childCatalogDesc',
                  name: '子类目项描述',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: [
                      'context',
                      '$reply_7054945?.resultData.childCatalogDesc$',
                    ],
                    hideAttr: true,
                    code: '',
                  },
                },
                {
                  attrId: '993122',
                  code: 'approveGradeName',
                  name: '审批等级名称',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: { type: [], code: '' },
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
              targetDataSourcePaths: [],
            },
            line_number: 7,
            callback1: [
              {
                type: 'callParentCustomFunc',
                dataId: 168681903421460800,
                options: {
                  compId: 'callParentCustomFunc',
                  compName: 'system',
                  id: '5994685',
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
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest407.params = [] || [];
    CMDGenerator(eventDataapiRequest407, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest408: any = [
      {
        type: 'apiRequest',
        dataId: 168906012632398600,
        shielding: true,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '6030799',
          pageJsonId: '285255',
          sync: false,
          actionTitle: '有价卡金额查询',
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'queryGroupValueCardAmount',
          _apiCode: 'queryGroupValueCardAmount',
          _source: 'rhin',
          _sourceName: '集团有价卡金额查询',
          _serviceId: '990190098114600960',
          _serviceTitle: '集团有价卡金额查询: queryGroupValueCardAmount',
          valueType: 'object',
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
                  dataKey: '6030799_root.header',
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
                  dataKey: '6030799_root.path',
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
                  dataKey: '6030799_root.query',
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  children: [
                    {
                      code: 'orderNbr',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.orderNbr',
                      compType: 'Input',
                      name: '订单号',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-0',
                      id: 'root.body.orderNbr',
                      dataKey: '6030799_root.body.orderNbr',
                      value: {
                        type: ['customize'],
                        code: '$urlParam.busiObjNbr$',
                      },
                      defaultValue: '',
                    },
                    {
                      code: 'groupId',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.groupId',
                      compType: 'Input',
                      name: '集团ID',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-3',
                  id: 'root.body',
                  dataKey: '6030799_root.body',
                  value: { type: [], code: '' },
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '6030799_root',
            },
          ],
          params: 'object',
          _requestType: 'object',
        },
        line_number: 9,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 168906039630385800,
            shielding: true,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '177863',
              pageJsonId: '285255',
              dataSourceId: 168621770348862820,
              dataSourceName: 'dataform',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  code: 'valueCardBuyAmount',
                  name: '有价卡购买金额',
                  type: 'string',
                  attrId: '113211',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['valueCardBuyAmount'],
                  _idpath: ['113211'],
                },
                {
                  code: 'whetherPartyArmyClient',
                  name: '是否党政军客户',
                  type: 'string',
                  attrId: '673323',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['whetherPartyArmyClient'],
                  _idpath: ['673323'],
                },
                {
                  code: 'operatorName',
                  name: '经办人姓名',
                  type: 'string',
                  attrId: '068131',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['operatorName'],
                  _idpath: ['068131'],
                },
                {
                  code: 'operatorPhoneNumber',
                  name: '经办人电话',
                  type: 'string',
                  attrId: '94487',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['operatorPhoneNumber'],
                  _idpath: ['94487'],
                },
                {
                  code: 'fundingSource',
                  name: '资金来源',
                  type: 'string',
                  attrId: '3171068',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['fundingSource'],
                  _idpath: ['3171068'],
                },
                {
                  code: 'cumulativePurchaseAmountYear',
                  name: '当年累计购买金额（元）',
                  type: 'string',
                  attrId: '106662',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: [
                      'context',
                      '$reply_6030799?.cumulativePurchaseAmountYear$',
                    ],
                    hideAttr: true,
                    code: '',
                  },
                  _codePath: ['cumulativePurchaseAmountYear'],
                  _idpath: ['106662'],
                },
                {
                  code: 'cumulativePurchaseTimesYear',
                  name: '当年累积购买次数',
                  type: 'string',
                  attrId: '608147',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: [
                      'context',
                      '$reply_6030799?.cumulativePurchaseTimesYear$',
                    ],
                    hideAttr: true,
                    code: '',
                  },
                  _codePath: ['cumulativePurchaseTimesYear'],
                  _idpath: ['608147'],
                },
                {
                  code: 'cumulativePurchaseAmountMouth',
                  name: '当月累计购买金额（元）',
                  type: 'string',
                  attrId: '470019',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: [
                      'context',
                      '$reply_6030799?.cumulativePurchaseAmountMouth$',
                    ],
                    hideAttr: true,
                    code: '',
                  },
                  _codePath: ['cumulativePurchaseAmountMouth'],
                  _idpath: ['470019'],
                },
                {
                  code: 'cumulativePurchaseTimesMouth',
                  name: '当月累积购买次数',
                  type: 'string',
                  attrId: '167898',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: [
                      'context',
                      '$reply_6030799?.cumulativePurchaseTimesMouth$',
                    ],
                    hideAttr: true,
                    code: '',
                  },
                  _codePath: ['cumulativePurchaseTimesMouth'],
                  _idpath: ['167898'],
                },
                {
                  attrId: '972327',
                  code: 'buyAmountAddYearAmount',
                  name: '有价卡购买金额加当年累计购买金额\t',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['buyAmountAddYearAmount'],
                  _idpath: ['972327'],
                },
                {
                  attrId: '861286',
                  code: 'year',
                  name: '当年累计购买金额(万元)',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['year'],
                  _idpath: ['861286'],
                },
                {
                  attrId: '006038',
                  code: 'mouth',
                  name: '当月累计购买金额(万元)',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['mouth'],
                  _idpath: ['006038'],
                },
                {
                  attrId: '745912',
                  code: 'promptInfo',
                  name: '提示信息',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['promptInfo'],
                  _idpath: ['745912'],
                },
                {
                  attrId: '223492',
                  code: 'reason',
                  name: '申请原因',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['reason'],
                  _idpath: ['223492'],
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
              targetDataSourcePaths: [],
            },
            line_number: 10,
            callback1: [],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest408.params = [] || [];
    CMDGenerator(eventDataapiRequest408, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse215: any = [
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
        dataId: 168681811049866620,
        elseIfs: [],
        line_number: 11,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 168681830479293150,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '821324',
              pageJsonId: '7946678',
              code: 'function main(data,state,success,fail){console.log("===============================================state");console.log(state);console.log(urlParam);var itemList=state.itemList;data.sceneSubmit=itemList;var form={};var attrList=itemList.attrList;if(attrList!=undefined&&attrList.length>0){for(var i=0;i<attrList.length;i++){form[attrList[i].attrCode]=attrList[i].attrValue;if(attrList[i].attrCode=="cumulativePurchaseAmountYear"){form["year"]=(attrList[i].attrValue/10000).toFixed(2)}if(attrList[i].attrCode=="cumulativePurchaseAmountMouth"){form["mouth"]=(attrList[i].attrValue/10000).toFixed(2)}}}data.dataform=form;data.sceneSubmit.approveGrade=itemList.approveGrade;data.sceneSubmit.approveGradeName=itemList.approveGradeName;success(form)};',
              actionTitle: '表单赋值',
            },
            line_number: 12,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 168681830479304320,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '0776066',
                  pageJsonId: '7946678',
                  dataSourceId: 168621770348862820,
                  dataSourceName: 'dataform',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      code: 'valueCardBuyAmount',
                      name: '有价卡购买金额',
                      type: 'string',
                      attrId: '113211',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['valueCardBuyAmount'],
                      _idpath: ['113211'],
                    },
                    {
                      code: 'whetherPartyArmyClient',
                      name: '是否党政军客户',
                      type: 'string',
                      attrId: '673323',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['whetherPartyArmyClient'],
                      _idpath: ['673323'],
                    },
                    {
                      code: 'operatorName',
                      name: '经办人姓名',
                      type: 'string',
                      attrId: '068131',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['operatorName'],
                      _idpath: ['068131'],
                    },
                    {
                      code: 'operatorPhoneNumber',
                      name: '经办人电话',
                      type: 'string',
                      attrId: '94487',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['operatorPhoneNumber'],
                      _idpath: ['94487'],
                    },
                    {
                      code: 'fundingSource',
                      name: '资金来源',
                      type: 'string',
                      attrId: '3171068',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['fundingSource'],
                      _idpath: ['3171068'],
                    },
                    {
                      code: 'cumulativePurchaseAmountYear',
                      name: '当年累计购买金额（元）',
                      type: 'string',
                      attrId: '106662',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['cumulativePurchaseAmountYear'],
                      _idpath: ['106662'],
                    },
                    {
                      code: 'cumulativePurchaseTimesYear',
                      name: '当年累积购买次数',
                      type: 'string',
                      attrId: '608147',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['cumulativePurchaseTimesYear'],
                      _idpath: ['608147'],
                    },
                    {
                      code: 'cumulativePurchaseAmountMouth',
                      name: '当月累计购买金额（元）',
                      type: 'string',
                      attrId: '470019',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['cumulativePurchaseAmountMouth'],
                      _idpath: ['470019'],
                    },
                    {
                      code: 'cumulativePurchaseTimesMouth',
                      name: '当月累积购买次数',
                      type: 'string',
                      attrId: '167898',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      _codePath: ['cumulativePurchaseTimesMouth'],
                      _idpath: ['167898'],
                    },
                    {
                      attrId: '972327',
                      code: 'buyAmountAddYearAmount',
                      name: '有价卡购买金额加当年累计购买金额\t',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['buyAmountAddYearAmount'],
                      _idpath: ['972327'],
                    },
                    {
                      attrId: '861286',
                      code: 'year',
                      name: '当年累计购买金额(万元)',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['year'],
                      _idpath: ['861286'],
                    },
                    {
                      attrId: '006038',
                      code: 'mouth',
                      name: '当月累计购买金额(万元)',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['mouth'],
                      _idpath: ['006038'],
                    },
                    {
                      attrId: '745912',
                      code: 'promptInfo',
                      name: '提示信息',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['promptInfo'],
                      _idpath: ['745912'],
                    },
                    {
                      attrId: '223492',
                      code: 'reason',
                      name: '申请原因',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['reason'],
                      _idpath: ['223492'],
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
                dataId: 168681830479329250,
                options: {
                  compId: ['Input_843825'],
                  compLib: 'comm',
                  pageJsonId: '724622414',
                  compName: 'Input',
                  id: '2214675',
                  valueList: {
                    Input_843825: '$state.itemList.approveGradeName$',
                  },
                  compid: ['Input_843825'],
                },
                line_number: 14,
                callback1: [],
              },
              {
                type: 'console',
                dataId: 169416002571374200,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '518554',
                  pageJsonId: '285255',
                  value: [
                    '======审批单加载==金额数据赋值====',
                    '$data.dataform.year$',
                    '$data.dataform.cumulativePurchaseAmountYear$',
                  ],
                },
                line_number: 15,
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
            dataId: 168681811049806530,
            elseIfs: [],
            line_number: 16,
            callback1: [
              {
                type: 'setVisible',
                dataId: 168681811049847420,
                shielding: true,
                options: {
                  compId: [
                    'Input_361479_887285_2150708_923492',
                    'Input_361479_887285_2150708_923492_98259415',
                    'Input_723739',
                  ],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '104664',
                  visible: 'true',
                  compid: [
                    'Input_361479_887285_2150708_923492',
                    'Input_361479_887285_2150708_923492_98259415',
                    'Input_723739',
                  ],
                },
                line_number: 17,
              },
              {
                type: 'setDisable',
                dataId: 168681811049861100,
                options: {
                  compId: [
                    'Form_449441_2604934',
                    'Form_449441_2604934_614357',
                    'Input_361479_887285_2150708_923492_98259415',
                    'Input_723739',
                    'Form_2221675',
                  ],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Form',
                  id: '267114',
                  disabled: 'true',
                  compid: [
                    'Form_449441_2604934',
                    'Form_449441_2604934_614357',
                    'Input_361479_887285_2150708_923492_98259415',
                    'Input_723739',
                    'Form_2221675',
                  ],
                },
                line_number: 18,
              },
              {
                type: 'sysSetVisible',
                dataId: 168681811049892600,
                shielding: true,
                options: {
                  compId: [
                    'Row_851124',
                    'Form_395851_1727917_9692158_9612234_1000722_434628_511208_810317_323621_176164_1762145',
                    'Form_2221675',
                  ],
                  compName: 'page',
                  id: '962708',
                  pageJsonId: '537892',
                  compid: [
                    'Row_851124',
                    'Form_395851_1727917_9692158_9612234_1000722_434628_511208_810317_323621_176164_1762145',
                    'Form_2221675',
                  ],
                  visible: '',
                },
                line_number: 19,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse215.params = [] || [];
    CMDGenerator(eventDataifelse215, {}, 'ifelse', {
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
      className="__CustomClass_285255__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_285255_1',
          uid: 'View_285255_1',
          type: 'View',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
        style={{
          minHeight: '100%',
          display: 'flex',
          padding: '20px 20px 20px 20px',
          flexDirection: 'column',
          overflowY: 'auto',
          width: 'auto',
        }}
        ref={(r: any) => (refs['View_285255_1'] = r)}
        {...injectData}
      >
        <Divider
          name={'分割线'}
          orientation={'center'}
          type={'horizontal'}
          dashed={false}
          dividerText={'有价卡销售限额'}
          showTitle={true}
          $$componentItem={{
            id: 'Divider_812745',
            uid: 'Divider_812745',
            type: 'Divider',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ margin: '12px 0 12px 0', height: 'auto' }}
          ref={(r: any) => (refs['Divider_812745'] = r)}
          {...injectData}
        />
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_715417',
            uid: 'View_715417',
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
            overflowY: 'hidden',
            margin: '0px 0px 12px 0px',
          }}
          ref={(r: any) => (refs['View_715417'] = r)}
          {...injectData}
        >
          <HorizontalView
            name={'左右布局'}
            formItemIndex={0}
            $$componentItem={{
              id: 'HorizontalView_284938',
              uid: 'HorizontalView_284938',
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
              height: 'auto',
              overflowY: 'hidden',
              margin: '0px 0px 0px 0px',
            }}
            ref={(r: any) => (refs['HorizontalView_284938'] = r)}
            {...injectData}
          >
            <View
              name={'布局容器'}
              $$componentItem={{
                id: 'View_8287427',
                uid: 'View_8287427',
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
                height: 'auto',
                overflowY: 'hidden',
                margin: '0px 0px 0px 0px',
              }}
              ref={(r: any) => (refs['View_8287427'] = r)}
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
                  id: 'Form_754805',
                  uid: 'Form_754805',
                  type: 'Form',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) => (refs['Form_754805'] = r)}
                {...injectData}
              >
                <Checkbox
                  name={'审批场景'}
                  titleTip={'text'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  text={'有价卡销售限额'}
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
                    id: 'Checkbox_1925866',
                    uid: 'Checkbox_1925866',
                    type: 'Checkbox',
                    ...componentItem,
                  }}
                  disabled={true}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => (refs['Checkbox_1925866'] = r)}
                  {...injectData}
                />
                <View
                  name={'布局容器'}
                  labelCol={8}
                  wrapperCol={16}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_4158666',
                    uid: 'View_4158666',
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
                  ref={(r: any) => (refs['View_4158666'] = r)}
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
                    id: 'Input_843825',
                    uid: 'Input_843825',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={true}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => (refs['Input_843825'] = r)}
                  {...injectData}
                />
              </Form>
            </View>
          </HorizontalView>
        </View>
        <Form
          name={'表单'}
          colSpan={12}
          labelCol={8}
          wrapperCol={16}
          colon={true}
          layout={'horizontal'}
          labelAlign={'right'}
          header={'标题'}
          colSpace={0}
          rowSpace={16}
          formCode={'Form_1354964'}
          fieldName={'$dataform'}
          relationDataSource={data?.$dataform}
          busiObjectId={''}
          $$componentItem={{
            id: 'Form_2221675',
            uid: 'Form_2221675',
            type: 'Form',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ padding: '0px 0px 0px 0px' }}
          onValuesChange={(changedFieldName: any, changedValue: any) => {
            const eventDatasetDataSource176: any = [
              {
                type: 'setDataSource',
                dataId: 168681979329828960,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '9089458',
                  pageJsonId: '285255',
                  dataSourceId: 168621770348862820,
                  dataSourceName: 'dataform',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      code: 'valueCardBuyAmount',
                      name: '有价卡购买金额',
                      type: 'string',
                      attrId: '113211',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      value: {
                        type: ['form', 'Form_2221675', 'getFieldsValue'],
                        code: 'valueCardBuyAmount',
                      },
                      _codePath: ['valueCardBuyAmount'],
                      _idpath: ['113211'],
                    },
                    {
                      code: 'whetherPartyArmyClient',
                      name: '是否党政军客户',
                      type: 'string',
                      attrId: '673323',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      value: {
                        type: ['form', 'Form_2221675', 'getFieldsValue'],
                        code: 'whetherPartyArmyClient',
                      },
                      _codePath: ['whetherPartyArmyClient'],
                      _idpath: ['673323'],
                    },
                    {
                      code: 'operatorName',
                      name: '经办人姓名',
                      type: 'string',
                      attrId: '068131',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      value: {
                        type: ['form', 'Form_2221675', 'getFieldsValue'],
                        code: 'operatorName',
                      },
                      _codePath: ['operatorName'],
                      _idpath: ['068131'],
                    },
                    {
                      code: 'operatorPhoneNumber',
                      name: '经办人电话',
                      type: 'string',
                      attrId: '94487',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      value: {
                        type: ['form', 'Form_2221675', 'getFieldsValue'],
                        code: 'operatorPhoneNumber',
                      },
                      _codePath: ['operatorPhoneNumber'],
                      _idpath: ['94487'],
                    },
                    {
                      code: 'fundingSource',
                      name: '资金来源',
                      type: 'string',
                      attrId: '3171068',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      value: {
                        type: ['form', 'Form_2221675', 'getFieldsValue'],
                        code: 'fundingSource',
                      },
                      _codePath: ['fundingSource'],
                      _idpath: ['3171068'],
                    },
                    {
                      code: 'cumulativePurchaseAmountYear',
                      name: '当年累计购买金额（元）',
                      type: 'string',
                      attrId: '106662',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      value: {
                        type: ['form', 'Form_2221675', 'getFieldsValue'],
                        code: 'cumulativePurchaseAmountYear',
                      },
                      _codePath: ['cumulativePurchaseAmountYear'],
                      _idpath: ['106662'],
                    },
                    {
                      code: 'cumulativePurchaseTimesYear',
                      name: '当年累积购买次数',
                      type: 'string',
                      attrId: '608147',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      value: {
                        type: ['form', 'Form_2221675', 'getFieldsValue'],
                        code: 'cumulativePurchaseTimesYear',
                      },
                      _codePath: ['cumulativePurchaseTimesYear'],
                      _idpath: ['608147'],
                    },
                    {
                      code: 'cumulativePurchaseAmountMouth',
                      name: '当月累计购买金额（元）',
                      type: 'string',
                      attrId: '470019',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      value: {
                        type: ['form', 'Form_2221675', 'getFieldsValue'],
                        code: 'cumulativePurchaseAmountMouth',
                      },
                      _codePath: ['cumulativePurchaseAmountMouth'],
                      _idpath: ['470019'],
                    },
                    {
                      code: 'cumulativePurchaseTimesMouth',
                      name: '当月累积购买次数',
                      type: 'string',
                      attrId: '167898',
                      initialData: { type: 'static', value: '' },
                      parentKey: '1',
                      parentType: 'object',
                      showInput: true,
                      value: {
                        type: ['form', 'Form_2221675', 'getFieldsValue'],
                        code: 'cumulativePurchaseTimesMouth',
                      },
                      _codePath: ['cumulativePurchaseTimesMouth'],
                      _idpath: ['167898'],
                    },
                    {
                      attrId: '972327',
                      code: 'buyAmountAddYearAmount',
                      name: '有价卡购买金额加当年累计购买金额\t',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['buyAmountAddYearAmount'],
                      _idpath: ['972327'],
                    },
                    {
                      attrId: '861286',
                      code: 'year',
                      name: '当年累计购买金额(万元)',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['year'],
                      _idpath: ['861286'],
                    },
                    {
                      attrId: '006038',
                      code: 'mouth',
                      name: '当月累计购买金额(万元)',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['mouth'],
                      _idpath: ['006038'],
                    },
                    {
                      attrId: '745912',
                      code: 'promptInfo',
                      name: '提示信息',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['promptInfo'],
                      _idpath: ['745912'],
                    },
                    {
                      attrId: '223492',
                      code: 'reason',
                      name: '申请原因',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['reason'],
                      _idpath: ['223492'],
                      value: {
                        type: ['form', 'Form_2221675', 'getFieldsValue'],
                        code: 'reason',
                      },
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  targetDataSourcePaths: [],
                },
                line_number: 1,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 168681995400681820,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '9488154',
                      pageJsonId: '537892',
                      actionTitle: '',
                      code: 'function main(data,state,success,fail){var attrList=[];var obj=data.dataform;for(var key in obj){attrList.push({"attrCode":key,"attrName":"","attrValue":obj[key]})}data.sceneSubmit.attrList=attrList;success(attrList)};',
                    },
                    line_number: 2,
                    callback1: [
                      {
                        type: 'callParentCustomFunc',
                        dataId: 16868199540060556,
                        options: {
                          compId: 'callParentCustomFunc',
                          compName: 'system',
                          id: '074577',
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
            eventDatasetDataSource176.params =
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
              eventDatasetDataSource176,
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
          ref={(r: any) => (refs['Form_2221675'] = r)}
          {...injectData}
        >
          <Input
            name={'有价卡购买金额(元)'}
            size={'default'}
            selfSpan={12}
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
            formItemIndex={0}
            fieldName={'valueCardBuyAmount'}
            value={data?.dataform?.valueCardBuyAmount}
            regexp={[
              {
                id: '3791646',
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
              id: 'Input_371687',
              uid: 'Input_371687',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            onChange={(e: any) => {
              const eventDatacustomActionCode653: any = [
                {
                  type: 'customActionCode',
                  dataId: 168923627421710140,
                  options: {
                    compId: 'customActionCode',
                    compName: 'page',
                    id: '849457',
                    pageJsonId: '285255',
                    code: 'function main(data,state,success,fail){var sceneSubmit=data.sceneSubmit;if(sceneSubmit!=null&&sceneSubmit!=undefined){var attrList=sceneSubmit.attrList;if(attrList!=null&&attrList!=undefined){var year=0;if(data.dataform.cumulativePurchaseAmountYear!=null&&data.dataform.cumulativePurchaseAmountYear!=undefined&&data.dataform.cumulativePurchaseAmountYear!=""){year=parseFloat(data.dataform.cumulativePurchaseAmountYear)}var buy=e.target.value;;data.dataform.buyAmountAddYearAmount=parseFloat(year)+parseFloat(buy)+"";var year=parseFloat(data.dataform.cumulativePurchaseAmountYear)/10000;var mouth=parseFloat(data.dataform.cumulativePurchaseAmountMouth)/10000;console.log("\\u6570\\u636E\\u6E90year:"+data.dataform.cumulativePurchaseAmountYear);console.log("\\u6570\\u636E\\u6E90mouth:"+data.dataform.cumulativePurchaseAmountMouth);console.log("\\u5F85\\u8BA1\\u7B97year:"+data.dataform.year);console.log("\\u5F85\\u8BA1\\u7B97mouth:"+data.dataform.mouth);console.log("buy:"+buy);if(buy!=null&&buy!=undefined&&buy!=""){console.log("====\\u6B63\\u5728\\u8BA1\\u7B97====");data.dataform.year=parseFloat(year)+parseFloat(buy)/10000;data.dataform.mouth=parseFloat(mouth)+parseFloat(buy)/10000}else{data.dataform.year=year;data.dataform.mouth=mouth}data.dataform.year=parseFloat(data.dataform.year).toFixed(2);data.dataform.mouth=parseFloat(data.dataform.mouth).toFixed(2);console.log("\\u8BA1\\u7B97\\u540Eyear:"+data.dataform.year);console.log("\\u8BA1\\u7B97\\u540Emouth:"+data.dataform.mouth);console.log("\\u6570\\u636E\\u6E90year:"+data.dataform.cumulativePurchaseAmountYear);console.log("\\u6570\\u636E\\u6E90mouth:"+data.dataform.cumulativePurchaseAmountMouth)}}success()}',
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'setDataSource',
                      dataId: 169416381428493400,
                      options: {
                        compId: 'setDataSource',
                        compName: 'page',
                        id: '132392',
                        pageJsonId: '285255',
                        dataSourceId: 168621770348862820,
                        dataSourceName: 'dataform',
                        dataSourceRelType: 'custom',
                        dataSourceSetValue: [
                          {
                            code: 'valueCardBuyAmount',
                            name: '有价卡购买金额',
                            type: 'string',
                            attrId: '113211',
                            initialData: { type: 'static', value: '' },
                            parentKey: '1',
                            parentType: 'object',
                            showInput: true,
                            _codePath: ['valueCardBuyAmount'],
                            _idpath: ['113211'],
                          },
                          {
                            code: 'whetherPartyArmyClient',
                            name: '是否党政军客户',
                            type: 'string',
                            attrId: '673323',
                            initialData: { type: 'static', value: '' },
                            parentKey: '1',
                            parentType: 'object',
                            showInput: true,
                            _codePath: ['whetherPartyArmyClient'],
                            _idpath: ['673323'],
                          },
                          {
                            code: 'operatorName',
                            name: '经办人姓名',
                            type: 'string',
                            attrId: '068131',
                            initialData: { type: 'static', value: '' },
                            parentKey: '1',
                            parentType: 'object',
                            showInput: true,
                            _codePath: ['operatorName'],
                            _idpath: ['068131'],
                          },
                          {
                            code: 'operatorPhoneNumber',
                            name: '经办人电话',
                            type: 'string',
                            attrId: '94487',
                            initialData: { type: 'static', value: '' },
                            parentKey: '1',
                            parentType: 'object',
                            showInput: true,
                            _codePath: ['operatorPhoneNumber'],
                            _idpath: ['94487'],
                          },
                          {
                            code: 'fundingSource',
                            name: '资金来源',
                            type: 'string',
                            attrId: '3171068',
                            initialData: { type: 'static', value: '' },
                            parentKey: '1',
                            parentType: 'object',
                            showInput: true,
                            _codePath: ['fundingSource'],
                            _idpath: ['3171068'],
                          },
                          {
                            code: 'cumulativePurchaseAmountYear',
                            name: '当年累计购买金额（元）',
                            type: 'string',
                            attrId: '106662',
                            initialData: { type: 'static', value: '' },
                            parentKey: '1',
                            parentType: 'object',
                            showInput: true,
                            _codePath: ['cumulativePurchaseAmountYear'],
                            _idpath: ['106662'],
                          },
                          {
                            code: 'cumulativePurchaseTimesYear',
                            name: '当年累积购买次数',
                            type: 'string',
                            attrId: '608147',
                            initialData: { type: 'static', value: '' },
                            parentKey: '1',
                            parentType: 'object',
                            showInput: true,
                            _codePath: ['cumulativePurchaseTimesYear'],
                            _idpath: ['608147'],
                          },
                          {
                            code: 'cumulativePurchaseAmountMouth',
                            name: '当月累计购买金额（元）',
                            type: 'string',
                            attrId: '470019',
                            initialData: { type: 'static', value: '' },
                            parentKey: '1',
                            parentType: 'object',
                            showInput: true,
                            _codePath: ['cumulativePurchaseAmountMouth'],
                            _idpath: ['470019'],
                          },
                          {
                            code: 'cumulativePurchaseTimesMouth',
                            name: '当月累积购买次数',
                            type: 'string',
                            attrId: '167898',
                            initialData: { type: 'static', value: '' },
                            parentKey: '1',
                            parentType: 'object',
                            showInput: true,
                            _codePath: ['cumulativePurchaseTimesMouth'],
                            _idpath: ['167898'],
                          },
                          {
                            attrId: '972327',
                            code: 'buyAmountAddYearAmount',
                            name: '有价卡购买金额加当年累计购买金额\t',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['buyAmountAddYearAmount'],
                            _idpath: ['972327'],
                          },
                          {
                            attrId: '861286',
                            code: 'year',
                            name: '当年累计购买金额(万元)',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            value: { type: [], code: '' },
                            _codePath: ['year'],
                            _idpath: ['861286'],
                          },
                          {
                            attrId: '006038',
                            code: 'mouth',
                            name: '当月累计购买金额(万元)',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            value: { type: [], code: '' },
                            _codePath: ['mouth'],
                            _idpath: ['006038'],
                          },
                          {
                            attrId: '745912',
                            code: 'promptInfo',
                            name: '提示信息',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['promptInfo'],
                            _idpath: ['745912'],
                          },
                          {
                            attrId: '223492',
                            code: 'reason',
                            name: '申请原因',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['reason'],
                            _idpath: ['223492'],
                          },
                        ],
                        operateType: 1,
                        onlySetPatch: true,
                        otherObjectArrayOptions: {},
                        targetDataSourcePaths: [],
                      },
                      line_number: 2,
                      callback1: [],
                      callback2: [],
                    },
                  ],
                  callback2: [],
                },
              ];
              eventDatacustomActionCode653.params =
                [
                  { title: '输入框取值', name: 'e', value: '$e.target.value$' },
                ] || [];
              CMDGenerator(
                eventDatacustomActionCode653,
                { e },
                'customActionCode',
                {
                  id: 'customActionCode',
                  name: 'customActionCode',
                  type: 'customActionCode',
                  platform: 'pc',
                },
              ); // console 168923663199548380
              console.log('=====DATA====', data);
            }}
            ref={(r: any) => (refs['Input_371687'] = r)}
            {...injectData}
          />
          <Select
            name={'是否党政军客户'}
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
            attr={{}}
            placeholder={'请选择'}
            formItemIndex={1}
            fieldName={'whetherPartyArmyClient'}
            value={data?.dataform?.whetherPartyArmyClient}
            $$componentItem={{
              id: 'Select_2249408',
              uid: 'Select_2249408',
              type: 'Select',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['Select_2249408'] = r)}
            {...injectData}
          />
          <Input
            name={'经办人姓名'}
            size={'default'}
            selfSpan={12}
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
            fieldName={'operatorName'}
            value={data?.dataform?.operatorName}
            formItemIndex={2}
            regexp={[]}
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
              id: 'Input_583353',
              uid: 'Input_583353',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['Input_583353'] = r)}
            {...injectData}
          />
          <Input
            name={'经办人电话'}
            size={'default'}
            selfSpan={12}
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
            fieldName={'operatorPhoneNumber'}
            value={data?.dataform?.operatorPhoneNumber}
            formItemIndex={3}
            regexp={[
              {
                id: '248741',
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
              id: 'Input_332334',
              uid: 'Input_332334',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['Input_332334'] = r)}
            {...injectData}
          />
          <Select
            name={'资金来源'}
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
            formItemIndex={4}
            fieldName={'fundingSource'}
            value={data?.dataform?.fundingSource}
            $$componentItem={{
              id: 'Select_7878199',
              uid: 'Select_7878199',
              type: 'Select',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['Select_7878199'] = r)}
            {...injectData}
          />
          <Input
            name={'当年累积购买金额(万元)'}
            size={'default'}
            selfSpan={12}
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
            placeholder={'0'}
            fieldName={'year'}
            value={data?.dataform?.year}
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
              id: 'Input_992323',
              uid: 'Input_992323',
              type: 'Input',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['Input_992323'] = r)}
            {...injectData}
          />
          <Input
            name={'当年累积购买次数'}
            size={'default'}
            selfSpan={12}
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
            placeholder={'0'}
            fieldName={'cumulativePurchaseTimesYear'}
            value={data?.dataform?.cumulativePurchaseTimesYear}
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
              id: 'Input_2200236',
              uid: 'Input_2200236',
              type: 'Input',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['Input_2200236'] = r)}
            {...injectData}
          />
          <Input
            name={'当月累积购买金额(万元)'}
            size={'default'}
            selfSpan={12}
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
            placeholder={'0'}
            fieldName={'mouth'}
            value={data?.dataform?.mouth}
            formItemIndex={7}
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
              id: 'Input_453662',
              uid: 'Input_453662',
              type: 'Input',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['Input_453662'] = r)}
            {...injectData}
          />
          <Input
            name={'当月累积购买次数'}
            size={'default'}
            selfSpan={12}
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
            placeholder={'0'}
            fieldName={'cumulativePurchaseTimesMouth'}
            value={data?.dataform?.cumulativePurchaseTimesMouth}
            formItemIndex={8}
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
              id: 'Input_48235488',
              uid: 'Input_48235488',
              type: 'Input',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['Input_48235488'] = r)}
            {...injectData}
          />
          <Input
            name={'当年累积购买金额(元)'}
            size={'default'}
            selfSpan={12}
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
            placeholder={'0'}
            fieldName={'cumulativePurchaseAmountYear'}
            value={data?.dataform?.cumulativePurchaseAmountYear}
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
              id: 'Input_3606946',
              uid: 'Input_3606946',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={false}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['Input_3606946'] = r)}
            {...injectData}
          />
          <Input
            name={'当月累积购买金额(元)'}
            size={'default'}
            selfSpan={12}
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
            placeholder={'0'}
            fieldName={'cumulativePurchaseAmountMouth'}
            value={data?.dataform?.cumulativePurchaseAmountMouth}
            formItemIndex={10}
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
              id: 'Input_384318',
              uid: 'Input_384318',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={false}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['Input_384318'] = r)}
            {...injectData}
          />
          <Input
            name={'当月累积购买金额(元)'}
            size={'default'}
            selfSpan={12}
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
            placeholder={'0'}
            fieldName={'awdawd'}
            value={data?.dataform?.cumulativePurchaseAmountMouth}
            formItemIndex={11}
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
              id: 'Input_185842',
              uid: 'Input_185842',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={false}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['Input_185842'] = r)}
            {...injectData}
          />
          <TextArea
            name={'申请原因'}
            selfSpan={24}
            labelCol={'4'}
            wrapperCol={'20'}
            titleTip={'notext'}
            tipLocation={'after'}
            tipPlacement={'top'}
            required={true}
            placeholder={'请输入'}
            fieldName={'reason'}
            value={data?.dataform?.reason}
            formItemIndex={12}
            tipIcon={{
              theme: 'outlined',
              type: 'question-circle',
              isIconFont: false,
            }}
            $$componentItem={{
              id: 'TextArea_684205',
              uid: 'TextArea_684205',
              type: 'TextArea',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['TextArea_684205'] = r)}
            {...injectData}
          />
          <TextArea
            name={'风险信息'}
            selfSpan={24}
            labelCol={'4'}
            wrapperCol={20}
            titleTip={'notext'}
            tipLocation={'after'}
            tipPlacement={'top'}
            required={false}
            placeholder={'请输入'}
            fieldName={'promptInfo'}
            value={data?.dataform?.promptInfo}
            formItemIndex={13}
            tipIcon={{
              theme: 'outlined',
              type: 'question-circle',
              isIconFont: false,
            }}
            tipContent={'目前已合作XX业务等，因xx原因需申请集团拆分建档。'}
            $$componentItem={{
              id: 'TextArea_295834743',
              uid: 'TextArea_295834743',
              type: 'TextArea',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['TextArea_295834743'] = r)}
            {...injectData}
          />
        </Form>
      </View>
      <BusiComp0521965
        busiCompId={'922396081753948160'}
        name={'附件'}
        formItemIndex={5}
        busiCompStates={{
          catalogCode: state?.catalogCode,
          scene: state?.scene,
          fileList: state?.itemList?.fileInfo,
        }}
        style={{ margin: '0 0 12px 0' }}
        ref={(r: any) => (refs['BOFramer_9549493'] = r)}
        {...injectData}
      />
    </div>
  );
};

export default withPageHOC(ClsJc_0008_0003$$Page, {
  pageId: '984019098422775808',
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', bizData: '' },
});
