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
  TextArea,
  View,
} from '@/components/factory';

import BusiComp0521965 from '@/components/BusiComp0521965';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const ClsDz_0002_0002$$Page: React.FC<PageProps> = ({
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
    const eventDatavalidateCurrentForm8: any = [
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
    eventDatavalidateCurrentForm8.params =
      [
        {
          title: '事件入参',
          name: 'options_22250626',
          value: '$options_22250626$',
        },
      ] || [];
    CMDGenerator(
      eventDatavalidateCurrentForm8,
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
    const eventDatacustomActionCode166: any = [
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
    eventDatacustomActionCode166.params =
      [
        {
          title: '事件入参',
          name: 'options_1725587',
          value: '$options_1725587$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode166,
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
    const eventDataapiRequest456: any = [
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
              dataKey: '3812277_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '3812277_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '3812277_query',
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
                  dataKey: '3812277_body.catalogCode',
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
                  dataKey: '3812277_body.attrCode',
                  value: { type: ['customize'], code: 'periods' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '3812277_body',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 167780742992360300,
            options: {
              compId: 'Input_periods_7297227',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '860772',
              data: '$reply_3812277?.resultData$',
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
    eventDataapiRequest456.params = [] || [];
    CMDGenerator(eventDataapiRequest456, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest457: any = [
      {
        type: 'apiRequest',
        dataId: 167781145047511600,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '230821',
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
              dataKey: '230821_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '230821_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '230821_query',
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
                  dataKey: '230821_body.catalogCode',
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
                  dataKey: '230821_body.attrCode',
                  value: { type: ['customize'], code: 'allCity' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '230821_body',
            },
          ],
        },
        line_number: 3,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 167781147045246200,
            options: {
              compId: 'Input_city_84519',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '721801',
              data: '$reply_230821?.resultData$',
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
    eventDataapiRequest457.params = [] || [];
    CMDGenerator(eventDataapiRequest457, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest458: any = [
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
                  value: { type: ['customize'], code: 'reportDimension' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '350795_body',
            },
          ],
        },
        line_number: 5,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 167780748583649600,
            options: {
              compId: 'Input_reportDimension_06575',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '053598',
              data: '$reply_350795?.resultData$',
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
    eventDataapiRequest458.params = [] || [];
    CMDGenerator(eventDataapiRequest458, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest459: any = [
      {
        type: 'apiRequest',
        dataId: 167780750162554800,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '444715',
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
              dataKey: '444715_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '444715_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '444715_query',
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
                  dataKey: '444715_body.catalogCode',
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
                  dataKey: '444715_body.attrCode',
                  value: { type: ['customize'], code: 'reportType' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '444715_body',
            },
          ],
        },
        line_number: 7,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 167780752352714460,
            options: {
              compId: 'Input_reportType_5828085',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '189632',
              labelKey: 'attrValueName',
              data: '$reply_444715?.resultData$',
              valueKey: 'attrValue',
            },
            line_number: 8,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest459.params = [] || [];
    CMDGenerator(eventDataapiRequest459, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse241: any = [
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
                line_number: 29,
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
                  paramsObj: {
                    catalogCode: '$ state.catalogCode$',
                    createStaff: '$ state.createStaff$',
                  },
                  paramsObjKeyValueMap: {
                    catalogCode: '$ state.catalogCode$',
                    createStaff: '$ state.createStaff$',
                  },
                },
                line_number: 29,
              },
            ],
          },
        ],
        line_number: 9,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 166132449559169250,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '9981685',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){console.log("\\u9875\\u9762\\u8F93\\u5165itemList = ",state.itemList);var item=state.itemList;data.sceneSubmit=item;var factorForm={};var attrList=item.attrList;if(attrList!=undefined&&attrList.length>0){for(var i=0;i<attrList.length;i++){factorForm[attrList[i].attrCode]=attrList[i].attrValue}}data.factorForm=factorForm;data.sceneSubmit.approveGrade=item.approveGrade;data.sceneSubmit.approveGradeName=item.approveGradeName;success(factorForm)};',
              actionTitle: '设置界面初始化值',
            },
            line_number: 10,
            callback1: [
              {
                type: 'setCurrentFormValues',
                dataId: 168992736805254050,
                options: {
                  compId: 'Form_449441',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Form',
                  id: '5982395',
                },
                line_number: 11,
              },
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
                      attrId: '02414',
                      code: 'reason',
                      name: '申请原因',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['customize'],
                        code: '$data_9981685.reason$',
                      },
                    },
                    {
                      attrId: '14207',
                      code: 'monthName',
                      name: '月份',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '345282',
                      code: 'periods',
                      name: '旬',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '697477',
                      code: 'reportDimension',
                      name: '报表维度',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '0214598',
                      code: 'reportType',
                      name: '报表类型',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '08707745',
                      code: 'callReportName',
                      name: '调用报表名称',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '862761',
                      code: 'allCity',
                      name: '地市',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '913471',
                      code: 'allCounty',
                      name: '归属区县',
                      type: 'string',
                      initialData: { type: 'static' },
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
                line_number: 13,
                callback1: [],
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '970168',
                    options: { context: '$data_9981685$', operate: 'notEmpty' },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                  {
                    options: {
                      context: '$data_9981685.reportType$',
                      operate: 'notEmpty',
                    },
                    condId: '467817',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 168992702756367000,
                elseIfs: [],
                line_number: 14,
                callback1: [
                  {
                    type: 'apiRequest',
                    dataId: 168992706312845300,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '082022',
                      pageJsonId: '537892',
                      sync: false,
                      method: 'post',
                      url: '/app/rhin/gateway/callRhinEngine',
                      _capabilityCode: 'qryDcAttrValueRelListByObj',
                      _apiCode: 'qryDcAttrValueRelListByObj',
                      _source: 'rhin',
                      _serviceId: '948750330757386240',
                      _serviceTitle:
                        '根据父规格属性编码和属性值查询下级属性值列表-tsm: qryDcAttrValueRelListByObj',
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
                          dataKey: '873939_header',
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
                          dataKey: '873939_path',
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
                          dataKey: '873939_query',
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
                              code: 'parAttrCode',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.parAttrCode',
                              compType: 'Input',
                              name: 'parAttrCode',
                              parents: ['root', 'body'],
                              id: 'body.parAttrCode',
                              dataKey: '873939_body.parAttrCode',
                              value: {
                                type: ['customize'],
                                code: 'reportType',
                              },
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-0',
                            },
                            {
                              code: 'parAttrValue',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.parAttrValue',
                              compType: 'Input',
                              name: 'parAttrValue',
                              parents: ['root', 'body'],
                              id: 'body.parAttrValue',
                              dataKey: '873939_body.parAttrValue',
                              value: {
                                type: ['context', '$data_9981685$'],
                                code: 'reportType',
                              },
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-1',
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
                              dataKey: '873939_body.attrCode',
                              value: {
                                type: ['customize'],
                                code: 'callReportName',
                              },
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-2',
                            },
                          ],
                          _id: 'body',
                          compType: 'Input',
                          parents: ['root'],
                          id: 'body',
                          dataKey: '873939_body',
                          parentType: 'object',
                          parentKey: '0',
                          key: '0-3',
                        },
                      ],
                      _sourceName:
                        '根据父规格属性编码和属性值查询下级属性值列表-tsm',
                    },
                    line_number: 15,
                    callback1: [
                      {
                        type: 'reloadSelectData',
                        dataId: 168992706312871040,
                        options: {
                          compId: 'Input_callReportName_9508676',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Select',
                          id: '672264',
                          data: '$reply_082022?.resultData$',
                          labelKey: 'attrValueName',
                          valueKey: 'attrValue',
                        },
                        line_number: 16,
                        callback1: [],
                      },
                    ],
                    callback2: [],
                  },
                ],
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '9882004',
                    options: { context: '$data_9981685$', operate: 'notEmpty' },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                  {
                    options: {
                      context: '$data_9981685.allCity$',
                      operate: 'notEmpty',
                    },
                    condId: '2412094',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 168992711904788540,
                elseIfs: [],
                line_number: 17,
                callback1: [
                  {
                    type: 'apiRequest',
                    dataId: 168992715907850100,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '7498743',
                      pageJsonId: '537892',
                      sync: false,
                      method: 'post',
                      url: '/app/rhin/gateway/callRhinEngine',
                      _capabilityCode: 'qryDcAttrValueRelListByObj',
                      _apiCode: 'qryDcAttrValueRelListByObj',
                      _source: 'rhin',
                      _serviceId: '948750330757386240',
                      _serviceTitle:
                        '根据父规格属性编码和属性值查询下级属性值列表-tsm: qryDcAttrValueRelListByObj',
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
                          dataKey: '1669115_header',
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
                          dataKey: '1669115_path',
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
                          dataKey: '1669115_query',
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
                              code: 'parAttrCode',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.parAttrCode',
                              compType: 'Input',
                              name: 'parAttrCode',
                              parents: ['root', 'body'],
                              id: 'body.parAttrCode',
                              dataKey: '1669115_body.parAttrCode',
                              value: { type: ['customize'], code: 'allCity' },
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-0',
                            },
                            {
                              code: 'parAttrValue',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.parAttrValue',
                              compType: 'Input',
                              name: 'parAttrValue',
                              parents: ['root', 'body'],
                              id: 'body.parAttrValue',
                              dataKey: '1669115_body.parAttrValue',
                              value: {
                                type: ['context', '$data_9981685$'],
                                code: 'allCity',
                              },
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-1',
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
                              dataKey: '1669115_body.attrCode',
                              value: { type: ['customize'], code: 'allCounty' },
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-2',
                            },
                          ],
                          _id: 'body',
                          compType: 'Input',
                          parents: ['root'],
                          id: 'body',
                          dataKey: '1669115_body',
                          parentType: 'object',
                          parentKey: '0',
                          key: '0-3',
                        },
                      ],
                      _sourceName:
                        '根据父规格属性编码和属性值查询下级属性值列表-tsm',
                    },
                    line_number: 18,
                    callback1: [
                      {
                        type: 'reloadSelectData',
                        dataId: 168992715907871100,
                        options: {
                          compId: 'Input_area_891638',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Select',
                          id: '0942016',
                          data: '$reply_7498743?.resultData$',
                          labelKey: 'attrValueName',
                          valueKey: 'attrValue',
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
            line_number: 20,
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
                line_number: 21,
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
                line_number: 22,
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
                    line_number: 23,
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
            line_number: 24,
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
                line_number: 25,
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
                line_number: 26,
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
                line_number: 27,
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
                line_number: 28,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse241.params = [] || [];
    CMDGenerator(eventDataifelse241, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDataapiRequest460: any = [
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
        line_number: 30,
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
            line_number: 31,
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
                line_number: 32,
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
    eventDataapiRequest460.params = [] || [];
    CMDGenerator(eventDataapiRequest460, {}, 'apiRequest', {
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
          dividerText={'账务报表调阅申请'}
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
                  text={'账务报表调阅申请'}
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
              const eventDatasetDataSource200: any = [
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
                        code: 'allCity',
                        name: '地市',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_449441', 'getFieldsValue'],
                          code: 'allCity',
                        },
                      },
                      {
                        attrId: '913471',
                        code: 'allCounty',
                        name: '归属区县',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_449441', 'getFieldsValue'],
                          code: 'allCounty',
                        },
                      },
                      {
                        attrId: '14207',
                        code: 'monthName',
                        name: '月份',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_449441', 'getFieldsValue'],
                          code: 'monthName',
                        },
                      },
                      {
                        attrId: '345282',
                        code: 'periods',
                        name: '旬',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_449441', 'getFieldsValue'],
                          code: 'periods',
                        },
                      },
                      {
                        attrId: '697477',
                        code: 'reportDimension',
                        name: '报表维度',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_449441', 'getFieldsValue'],
                          code: 'reportDimension',
                        },
                      },
                      {
                        attrId: '0214598',
                        code: 'reportType',
                        name: '报表类型',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_449441', 'getFieldsValue'],
                          code: 'reportType',
                        },
                      },
                      {
                        attrId: '08707745',
                        code: 'callReportName',
                        name: '调用报表名称',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_449441', 'getFieldsValue'],
                          code: 'callReportName',
                        },
                      },
                      {
                        attrId: '02414',
                        code: 'reason',
                        name: '申请原因',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: ['form', 'Form_449441', 'getFieldsValue'],
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
              eventDatasetDataSource200.params =
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
                eventDatasetDataSource200,
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
            <TextArea
              name={'申请原因'}
              selfSpan={24}
              labelCol={'8'}
              wrapperCol={'16'}
              titleTip={'text'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              placeholder={'请输入'}
              formItemIndex={0}
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
              useEffect={() => {
                const eventDataapiRequest777: any = [
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
                      _serviceTitle:
                        '查询场景规格属性值列表: qryCatalogAttrValueList',
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
                          dataKey: '3812277_header',
                        },
                        {
                          code: 'path',
                          name: '请求路径参数',
                          attrType: 'object',
                          _id: 'path',
                          compType: 'Input',
                          parents: [],
                          id: 'path',
                          dataKey: '3812277_path',
                        },
                        {
                          code: 'query',
                          name: 'URL 参数',
                          attrType: 'object',
                          _id: 'query',
                          compType: 'Input',
                          parents: [],
                          id: 'query',
                          dataKey: '3812277_query',
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
                              dataKey: '3812277_body.catalogCode',
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
                              dataKey: '3812277_body.attrCode',
                              value: { type: ['customize'], code: 'periods' },
                            },
                          ],
                          _id: 'body',
                          compType: 'Input',
                          parents: [],
                          id: 'body',
                          dataKey: '3812277_body',
                        },
                      ],
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'reloadSelectData',
                        dataId: 167780742992360300,
                        options: {
                          compId: 'Input_periods_7297227',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Select',
                          id: '860772',
                          data: '$reply_3812277?.resultData$',
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
                eventDataapiRequest777.params = [] || [];
                CMDGenerator(eventDataapiRequest777, {}, 'apiRequest', {
                  id: 'apiRequest',
                  name: 'apiRequest',
                  type: 'apiRequest',
                  platform: 'pc',
                });
                const eventDataapiRequest778: any = [
                  {
                    type: 'apiRequest',
                    dataId: 167781145047511600,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '230821',
                      pageJsonId: '537892',
                      sync: false,
                      method: 'post',
                      url: '/app/rhin/gateway/callRhinEngine',
                      _capabilityCode: 'qryCatalogAttrValueList',
                      _apiCode: 'qryCatalogAttrValueList',
                      _source: 'rhin',
                      _serviceId: '889391610000404480',
                      _serviceTitle:
                        '查询场景规格属性值列表: qryCatalogAttrValueList',
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
                          dataKey: '230821_header',
                        },
                        {
                          code: 'path',
                          name: '请求路径参数',
                          attrType: 'object',
                          _id: 'path',
                          compType: 'Input',
                          parents: [],
                          id: 'path',
                          dataKey: '230821_path',
                        },
                        {
                          code: 'query',
                          name: 'URL 参数',
                          attrType: 'object',
                          _id: 'query',
                          compType: 'Input',
                          parents: [],
                          id: 'query',
                          dataKey: '230821_query',
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
                              dataKey: '230821_body.catalogCode',
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
                              dataKey: '230821_body.attrCode',
                              value: { type: ['customize'], code: 'allCity' },
                            },
                          ],
                          _id: 'body',
                          compType: 'Input',
                          parents: [],
                          id: 'body',
                          dataKey: '230821_body',
                        },
                      ],
                    },
                    line_number: 3,
                    callback1: [
                      {
                        type: 'reloadSelectData',
                        dataId: 167781147045246200,
                        options: {
                          compId: 'Input_city_84519',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Select',
                          id: '721801',
                          data: '$reply_230821?.resultData$',
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
                eventDataapiRequest778.params = [] || [];
                CMDGenerator(eventDataapiRequest778, {}, 'apiRequest', {
                  id: 'apiRequest',
                  name: 'apiRequest',
                  type: 'apiRequest',
                  platform: 'pc',
                });
                const eventDataapiRequest779: any = [
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
                      _serviceTitle:
                        '查询场景规格属性值列表: qryCatalogAttrValueList',
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
                              dataKey: '350795_body.attrCode',
                              value: {
                                type: ['customize'],
                                code: 'reportDimension',
                              },
                            },
                          ],
                          _id: 'body',
                          compType: 'Input',
                          parents: [],
                          id: 'body',
                          dataKey: '350795_body',
                        },
                      ],
                    },
                    line_number: 5,
                    callback1: [
                      {
                        type: 'reloadSelectData',
                        dataId: 167780748583649600,
                        options: {
                          compId: 'Input_reportDimension_06575',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Select',
                          id: '053598',
                          data: '$reply_350795?.resultData$',
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
                eventDataapiRequest779.params = [] || [];
                CMDGenerator(eventDataapiRequest779, {}, 'apiRequest', {
                  id: 'apiRequest',
                  name: 'apiRequest',
                  type: 'apiRequest',
                  platform: 'pc',
                });
                const eventDataapiRequest780: any = [
                  {
                    type: 'apiRequest',
                    dataId: 167780750162554800,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '444715',
                      pageJsonId: '537892',
                      sync: false,
                      method: 'post',
                      url: '/app/rhin/gateway/callRhinEngine',
                      _capabilityCode: 'qryCatalogAttrValueList',
                      _apiCode: 'qryCatalogAttrValueList',
                      _source: 'rhin',
                      _serviceId: '889391610000404480',
                      _serviceTitle:
                        '查询场景规格属性值列表: qryCatalogAttrValueList',
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
                          dataKey: '444715_header',
                        },
                        {
                          code: 'path',
                          name: '请求路径参数',
                          attrType: 'object',
                          _id: 'path',
                          compType: 'Input',
                          parents: [],
                          id: 'path',
                          dataKey: '444715_path',
                        },
                        {
                          code: 'query',
                          name: 'URL 参数',
                          attrType: 'object',
                          _id: 'query',
                          compType: 'Input',
                          parents: [],
                          id: 'query',
                          dataKey: '444715_query',
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
                              dataKey: '444715_body.catalogCode',
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
                              dataKey: '444715_body.attrCode',
                              value: {
                                type: ['customize'],
                                code: 'reportType',
                              },
                            },
                          ],
                          _id: 'body',
                          compType: 'Input',
                          parents: [],
                          id: 'body',
                          dataKey: '444715_body',
                        },
                      ],
                    },
                    line_number: 7,
                    callback1: [
                      {
                        type: 'reloadSelectData',
                        dataId: 167780752352714460,
                        options: {
                          compId: 'Input_reportType_5828085',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Select',
                          id: '189632',
                          labelKey: 'attrValueName',
                          data: '$reply_444715?.resultData$',
                          valueKey: 'attrValue',
                        },
                        line_number: 8,
                        callback1: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDataapiRequest780.params = [] || [];
                CMDGenerator(eventDataapiRequest780, {}, 'apiRequest', {
                  id: 'apiRequest',
                  name: 'apiRequest',
                  type: 'apiRequest',
                  platform: 'pc',
                });
                const eventDataapiRequest781: any = [
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
                              value: {
                                type: ['customize'],
                                code: '$state.catalogCode$',
                              },
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
                eventDataapiRequest781.params = [] || [];
                CMDGenerator(eventDataapiRequest781, {}, 'apiRequest', {
                  id: 'apiRequest',
                  name: 'apiRequest',
                  type: 'apiRequest',
                  platform: 'pc',
                });
                const eventDataifelse514: any = [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '56263',
                        options: {
                          context: '$state.itemList$',
                          operate: 'notEmpty',
                        },
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
                            elseIfs: [],
                            line_number: 29,
                          },
                        ],
                        condition: [],
                        elseIfs: [],
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
                              paramsObj: {
                                catalogCode: '$ state.catalogCode$',
                                createStaff: '$ state.createStaff$',
                              },
                              paramsObjKeyValueMap: {
                                catalogCode: '$ state.catalogCode$',
                                createStaff: '$ state.createStaff$',
                              },
                            },
                            line_number: 29,
                          },
                        ],
                      },
                    ],
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
                          code: 'function main(data,state,success,fail){var item=state.itemList;data.sceneSubmit=item;var factorForm={};var attrList=item.attrList;if(attrList!=undefined&&attrList.length>0){for(var i=0;i<attrList.length;i++){factorForm[attrList[i].attrCode]=attrList[i].attrValue}}data.factorForm=factorForm;data.sceneSubmit.approveGrade=item.approveGrade;data.sceneSubmit.approveGradeName=item.approveGradeName;success(factorForm)};',
                          actionTitle: '设置界面初始化值',
                        },
                        line_number: 13,
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
                                  attrId: '02414',
                                  code: 'reason',
                                  name: '申请原因',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  value: {
                                    type: ['customize'],
                                    code: '$data_9981685.reason$',
                                  },
                                },
                                {
                                  attrId: '14207',
                                  code: 'monthName',
                                  name: '月份',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                },
                                {
                                  attrId: '345282',
                                  code: 'periods',
                                  name: '旬',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                },
                                {
                                  attrId: '697477',
                                  code: 'reportDimension',
                                  name: '报表维度',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                },
                                {
                                  attrId: '0214598',
                                  code: 'reportType',
                                  name: '报表类型',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                },
                                {
                                  attrId: '08707745',
                                  code: 'callReportName',
                                  name: '调用报表名称',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                },
                                {
                                  attrId: '862761',
                                  code: 'allCity',
                                  name: '地市',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                },
                                {
                                  attrId: '913471',
                                  code: 'allCounty',
                                  name: '归属区县',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                },
                              ],
                              operateType: 1,
                              onlySetPatch: true,
                              otherObjectArrayOptions: {},
                            },
                            line_number: 14,
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
                                Input_361479_887285:
                                  '$state.itemList.approveGradeName$',
                              },
                            },
                            line_number: 15,
                            callback1: [],
                          },
                          {
                            type: 'apiRequest',
                            dataId: 167896740431618270,
                            options: {
                              compId: 'apiRequest',
                              compName: 'system',
                              id: '873939',
                              pageJsonId: '537892',
                              sync: false,
                              method: 'post',
                              url: '/app/rhin/gateway/callRhinEngine',
                              _capabilityCode: 'qryDcAttrValueRelListByObj',
                              _apiCode: 'qryDcAttrValueRelListByObj',
                              _source: 'rhin',
                              _serviceId: '948750330757386240',
                              _serviceTitle:
                                '根据父规格属性编码和属性值查询下级属性值列表-tsm: qryDcAttrValueRelListByObj',
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
                                  dataKey: '873939_header',
                                },
                                {
                                  code: 'path',
                                  name: '请求路径参数',
                                  attrType: 'object',
                                  _id: 'path',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'path',
                                  dataKey: '873939_path',
                                },
                                {
                                  code: 'query',
                                  name: 'URL 参数',
                                  attrType: 'object',
                                  _id: 'query',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'query',
                                  dataKey: '873939_query',
                                },
                                {
                                  code: 'body',
                                  name: '请求体',
                                  attrType: 'object',
                                  children: [
                                    {
                                      code: 'parAttrCode',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.parAttrCode',
                                      compType: 'Input',
                                      name: 'parAttrCode',
                                      parents: ['body'],
                                      id: 'body.parAttrCode',
                                      dataKey: '873939_body.parAttrCode',
                                      value: {
                                        type: ['customize'],
                                        code: 'reportType',
                                      },
                                    },
                                    {
                                      code: 'parAttrValue',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.parAttrValue',
                                      compType: 'Input',
                                      name: 'parAttrValue',
                                      parents: ['body'],
                                      id: 'body.parAttrValue',
                                      dataKey: '873939_body.parAttrValue',
                                      value: {
                                        type: ['context', '$data_9981685$'],
                                        code: 'reportType',
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
                                      dataKey: '873939_body.attrCode',
                                      value: {
                                        type: ['customize'],
                                        code: 'callReportName',
                                      },
                                    },
                                  ],
                                  _id: 'body',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'body',
                                  dataKey: '873939_body',
                                },
                              ],
                            },
                            line_number: 16,
                            callback1: [
                              {
                                type: 'reloadSelectData',
                                dataId: 167896740431671840,
                                options: {
                                  compId: 'Input_callReportName_9508676',
                                  compLib: 'comm',
                                  pageJsonId: '537892',
                                  compName: 'Select',
                                  id: '682801',
                                  data: '$reply_873939?.resultData$',
                                  labelKey: 'attrValueName',
                                  valueKey: 'attrValue',
                                },
                                line_number: 17,
                                callback1: [],
                              },
                            ],
                            callback2: [],
                          },
                          {
                            type: 'apiRequest',
                            dataId: 167896754965702400,
                            options: {
                              compId: 'apiRequest',
                              compName: 'system',
                              id: '1669115',
                              pageJsonId: '537892',
                              sync: false,
                              method: 'post',
                              url: '/app/rhin/gateway/callRhinEngine',
                              _capabilityCode: 'qryDcAttrValueRelListByObj',
                              _apiCode: 'qryDcAttrValueRelListByObj',
                              _source: 'rhin',
                              _serviceId: '948750330757386240',
                              _serviceTitle:
                                '根据父规格属性编码和属性值查询下级属性值列表-tsm: qryDcAttrValueRelListByObj',
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
                                  dataKey: '1669115_header',
                                },
                                {
                                  code: 'path',
                                  name: '请求路径参数',
                                  attrType: 'object',
                                  _id: 'path',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'path',
                                  dataKey: '1669115_path',
                                },
                                {
                                  code: 'query',
                                  name: 'URL 参数',
                                  attrType: 'object',
                                  _id: 'query',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'query',
                                  dataKey: '1669115_query',
                                },
                                {
                                  code: 'body',
                                  name: '请求体',
                                  attrType: 'object',
                                  children: [
                                    {
                                      code: 'parAttrCode',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.parAttrCode',
                                      compType: 'Input',
                                      name: 'parAttrCode',
                                      parents: ['body'],
                                      id: 'body.parAttrCode',
                                      dataKey: '1669115_body.parAttrCode',
                                      value: {
                                        type: ['customize'],
                                        code: 'allCity',
                                      },
                                    },
                                    {
                                      code: 'parAttrValue',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.parAttrValue',
                                      compType: 'Input',
                                      name: 'parAttrValue',
                                      parents: ['body'],
                                      id: 'body.parAttrValue',
                                      dataKey: '1669115_body.parAttrValue',
                                      value: {
                                        type: ['context', '$data_9981685$'],
                                        code: 'allCity',
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
                                      dataKey: '1669115_body.attrCode',
                                      value: {
                                        type: ['customize'],
                                        code: 'allCounty',
                                      },
                                    },
                                  ],
                                  _id: 'body',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'body',
                                  dataKey: '1669115_body',
                                },
                              ],
                            },
                            line_number: 18,
                            callback1: [
                              {
                                type: 'reloadSelectData',
                                dataId: 167896754965790600,
                                options: {
                                  compId: 'Input_area_891638',
                                  compLib: 'comm',
                                  pageJsonId: '537892',
                                  compName: 'Select',
                                  id: '605121',
                                  data: '$reply_1669115?.resultData$',
                                  labelKey: 'attrValueName',
                                  valueKey: 'attrValue',
                                },
                                line_number: 19,
                                callback1: [],
                              },
                            ],
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
                        line_number: 20,
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
                              newData: '$data_859603$',
                              operateType: 3,
                              onlySetPatch: true,
                              otherObjectArrayOptions: {},
                            },
                            line_number: 21,
                            callback1: [],
                            callback2: [],
                          },
                          {
                            type: 'ifelse',
                            condition: [
                              {
                                options: {
                                  context: '$data_859603$',
                                  operate: 'empty',
                                },
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
                            line_number: 22,
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
                                line_number: 23,
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
                        line_number: 24,
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
                            line_number: 25,
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
                            line_number: 26,
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
                            line_number: 27,
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
                            line_number: 28,
                          },
                        ],
                      },
                    ],
                  },
                ];
                eventDataifelse514.params = [] || [];
                CMDGenerator(eventDataifelse514, {}, 'ifelse', {
                  id: 'ifelse',
                  name: 'ifelse',
                  type: 'ifelse',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['TextArea_344333'] = r)}
              {...injectData}
            />
            <Select
              name={'地市'}
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
              fieldName={'allCity'}
              value={data?.factorForm?.allCity}
              formItemIndex={1}
              $$componentItem={{
                id: 'Input_city_84519',
                uid: 'Input_city_84519',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDataclearValue180: any = [
                  {
                    type: 'clearValue',
                    dataId: 167781171697031700,
                    options: {
                      compId: 'Input_area_891638',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Select',
                      id: '101067',
                    },
                    line_number: 1,
                  },
                ];
                eventDataclearValue180.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDataclearValue180, { e }, 'clearValue', {
                  id: 'clearValue',
                  name: 'clearValue',
                  type: 'clearValue',
                  platform: 'pc',
                });
                const eventDatagetSelectedData380: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 167781152056227700,
                    options: {
                      compId: 'Input_city_84519',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Select',
                      id: '131985',
                    },
                    line_number: 2,
                    callback1: [
                      {
                        type: 'console',
                        dataId: 167781152435582270,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '1456345',
                          pageJsonId: '537892',
                          value: ['$selectedData_131985[0]$'],
                        },
                        line_number: 3,
                      },
                      {
                        type: 'apiRequest',
                        dataId: 167781152780251940,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '981595',
                          pageJsonId: '537892',
                          sync: false,
                          method: 'post',
                          url: '/app/rhin/gateway/callRhinEngine',
                          _capabilityCode: 'qryDcAttrValueRelListByObj',
                          _apiCode: 'qryDcAttrValueRelListByObj',
                          _source: 'rhin',
                          _serviceId: '948750330757386240',
                          _serviceTitle:
                            '根据父规格属性编码和属性值查询下级属性值列表-tsm: qryDcAttrValueRelListByObj',
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
                              dataKey: '981595_header',
                            },
                            {
                              code: 'path',
                              name: '请求路径参数',
                              attrType: 'object',
                              _id: 'path',
                              compType: 'Input',
                              parents: [],
                              id: 'path',
                              dataKey: '981595_path',
                            },
                            {
                              code: 'query',
                              name: 'URL 参数',
                              attrType: 'object',
                              _id: 'query',
                              compType: 'Input',
                              parents: [],
                              id: 'query',
                              dataKey: '981595_query',
                            },
                            {
                              code: 'body',
                              name: '请求体',
                              attrType: 'object',
                              children: [
                                {
                                  code: 'parAttrCode',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.parAttrCode',
                                  compType: 'Input',
                                  name: 'parAttrCode',
                                  parents: ['body'],
                                  id: 'body.parAttrCode',
                                  dataKey: '981595_body.parAttrCode',
                                  value: {
                                    type: ['customize'],
                                    code: 'allCity',
                                  },
                                },
                                {
                                  code: 'parAttrValue',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.parAttrValue',
                                  compType: 'Input',
                                  name: 'parAttrValue',
                                  parents: ['body'],
                                  id: 'body.parAttrValue',
                                  dataKey: '981595_body.parAttrValue',
                                  value: {
                                    type: ['customize'],
                                    code: '$selectedData_131985[0].value$',
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
                                  dataKey: '981595_body.attrCode',
                                  value: {
                                    type: ['customize'],
                                    code: 'allCounty',
                                  },
                                },
                              ],
                              _id: 'body',
                              compType: 'Input',
                              parents: [],
                              id: 'body',
                              dataKey: '981595_body',
                            },
                          ],
                        },
                        line_number: 4,
                        callback1: [
                          {
                            type: 'reloadSelectData',
                            dataId: 167781160406636000,
                            options: {
                              compId: 'Input_area_891638',
                              compLib: 'comm',
                              pageJsonId: '537892',
                              compName: 'Select',
                              id: '7128',
                              data: '$reply_981595?.resultData$',
                              labelKey: 'attrValueName',
                              valueKey: 'attrValue',
                            },
                            line_number: 5,
                            callback1: [],
                          },
                        ],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetSelectedData380.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData380,
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
              ref={(r: any) => (refs['Input_city_84519'] = r)}
              {...injectData}
            />
            <Select
              name={'归属区县'}
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
              fieldName={'allCounty'}
              value={data?.factorForm?.allCounty}
              formItemIndex={2}
              $$componentItem={{
                id: 'Input_area_891638',
                uid: 'Input_area_891638',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_area_891638'] = r)}
              {...injectData}
            />
            <Input
              name={'月份'}
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
              placeholder={'多个月份用逗号分隔，单个月份格式为YYYY-MM'}
              formItemIndex={3}
              fieldName={'monthName'}
              regexp={[
                {
                  id: '939058',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '单个月份格式为YYYY-MM，不同月份请用逗号分隔',
                  pattern:
                    '/^\\d{4}-(?:0[1-9]|1[0-2])(?:[，,]\\d{4}-(?:0[1-9]|1[0-2]))*$/',
                },
              ]}
              value={data?.factorForm?.monthName}
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
                id: 'Input_3158738',
                uid: 'Input_3158738',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_3158738'] = r)}
              {...injectData}
            />
            <Select
              name={'旬'}
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
              fieldName={'periods'}
              value={data?.factorForm?.periods}
              formItemIndex={4}
              $$componentItem={{
                id: 'Input_periods_7297227',
                uid: 'Input_periods_7297227',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_periods_7297227'] = r)}
              {...injectData}
            />
            <Select
              name={'报表维度'}
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
              fieldName={'reportDimension'}
              value={data?.factorForm?.reportDimension}
              formItemIndex={5}
              $$componentItem={{
                id: 'Input_reportDimension_06575',
                uid: 'Input_reportDimension_06575',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_reportDimension_06575'] = r)}
              {...injectData}
            />
            <Select
              name={'报表类型'}
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
              fieldName={'reportType'}
              value={data?.factorForm?.reportType}
              formItemIndex={6}
              $$componentItem={{
                id: 'Input_reportType_5828085',
                uid: 'Input_reportType_5828085',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDataclearValue181: any = [
                  {
                    type: 'clearValue',
                    dataId: 167781169290656670,
                    options: {
                      compId: 'Input_callReportName_9508676',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Select',
                      id: '92128',
                    },
                    line_number: 1,
                  },
                ];
                eventDataclearValue181.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDataclearValue181, { e }, 'clearValue', {
                  id: 'clearValue',
                  name: 'clearValue',
                  type: 'clearValue',
                  platform: 'pc',
                });
                const eventDatagetSelectedData381: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 167780792904774720,
                    options: {
                      compId: 'Input_reportType_5828085',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Select',
                      id: '835312',
                    },
                    line_number: 2,
                    callback1: [
                      {
                        type: 'console',
                        dataId: 167780793075299680,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '875164',
                          pageJsonId: '537892',
                          value: ['$selectedData_835312[0]$'],
                        },
                        line_number: 3,
                      },
                      {
                        type: 'apiRequest',
                        dataId: 167780793471274400,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '568281',
                          pageJsonId: '537892',
                          sync: false,
                          method: 'post',
                          url: '/app/rhin/gateway/callRhinEngine',
                          _capabilityCode: 'qryDcAttrValueRelListByObj',
                          _apiCode: 'qryDcAttrValueRelListByObj',
                          _source: 'rhin',
                          _serviceId: '948750330757386240',
                          _serviceTitle:
                            '根据父规格属性编码和属性值查询下级属性值列表-tsm: qryDcAttrValueRelListByObj',
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
                              dataKey: '568281_header',
                            },
                            {
                              code: 'path',
                              name: '请求路径参数',
                              attrType: 'object',
                              _id: 'path',
                              compType: 'Input',
                              parents: [],
                              id: 'path',
                              dataKey: '568281_path',
                            },
                            {
                              code: 'query',
                              name: 'URL 参数',
                              attrType: 'object',
                              _id: 'query',
                              compType: 'Input',
                              parents: [],
                              id: 'query',
                              dataKey: '568281_query',
                            },
                            {
                              code: 'body',
                              name: '请求体',
                              attrType: 'object',
                              children: [
                                {
                                  code: 'parAttrCode',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.parAttrCode',
                                  compType: 'Input',
                                  name: 'parAttrCode',
                                  parents: ['body'],
                                  id: 'body.parAttrCode',
                                  dataKey: '568281_body.parAttrCode',
                                  value: {
                                    type: ['customize'],
                                    code: 'reportType',
                                  },
                                },
                                {
                                  code: 'parAttrValue',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'body.parAttrValue',
                                  compType: 'Input',
                                  name: 'parAttrValue',
                                  parents: ['body'],
                                  id: 'body.parAttrValue',
                                  dataKey: '568281_body.parAttrValue',
                                  value: {
                                    type: ['customize'],
                                    code: '$selectedData_835312[0].value$',
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
                                  dataKey: '568281_body.attrCode',
                                  value: {
                                    type: ['customize'],
                                    code: 'callReportName',
                                  },
                                },
                              ],
                              _id: 'body',
                              compType: 'Input',
                              parents: [],
                              id: 'body',
                              dataKey: '568281_body',
                            },
                          ],
                        },
                        line_number: 4,
                        callback1: [
                          {
                            type: 'reloadSelectData',
                            dataId: 167780803815989500,
                            options: {
                              compId: 'Input_callReportName_9508676',
                              compLib: 'comm',
                              pageJsonId: '537892',
                              compName: 'Select',
                              id: '6661906',
                              data: '$reply_568281?.resultData$',
                              labelKey: 'attrValueName',
                              valueKey: 'attrValue',
                            },
                            line_number: 5,
                            callback1: [],
                          },
                        ],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetSelectedData381.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData381,
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
              ref={(r: any) => (refs['Input_reportType_5828085'] = r)}
              {...injectData}
            />
            <Select
              name={'调用报表名称'}
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
              fieldName={'callReportName'}
              value={data?.factorForm?.callReportName}
              formItemIndex={7}
              $$componentItem={{
                id: 'Input_callReportName_9508676',
                uid: 'Input_callReportName_9508676',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_callReportName_9508676'] = r)}
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

export default withPageHOC(ClsDz_0002_0002$$Page, {
  pageId: '948096795770634240',
  hasLogin: false,
  dataSource,
  defaultState: {},
});
