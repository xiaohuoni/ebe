// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import {
  Button,
  Checkbox,
  Divider,
  Form,
  HorizontalView,
  Input,
  Row,
  Select,
  StdUpload,
  Table,
  View,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const ClsYx_0001_0005$$Page: React.FC<PageProps> = ({
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
  const countFeedback = (options_737582: any) => {
    const eventDatagetValue105: any = [
      {
        type: 'getValue',
        dataId: 166971427582379620,
        options: {
          compId: 'Input_discountAmount_3930146',
          compLib: 'comm',
          pageJsonId: '537892',
          compName: 'Input',
          id: '654382',
        },
        line_number: 1,
        callback1: [
          {
            type: 'ifelse',
            condition: [
              {
                condId: '7306345',
                options: { context: '$value_654382$', operate: 'notEmpty' },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 166971427776493440,
            elseIfs: [],
            line_number: 2,
            callback1: [
              {
                type: 'getValue',
                dataId: 166971429386287700,
                options: {
                  compId: 'Input_assumeAmount_4296604',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '470735545',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '349764',
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$value_470735545$',
                          operate: '>',
                          manualValue: '0',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 166971429741416600,
                    elseIfs: [],
                    line_number: 4,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 166971431696477820,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '429077',
                          pageJsonId: '537892',
                          code: 'function main(data,state,success,fail){var toFixed=function toFixed(number,n){if(n>20||n<0){throw new RangeError("toFixed() digits argument must be between 0 and 20")}if(isNaN(number)||number>=Math.pow(10,21)){return number.toString()}if(typeof n=="undefined"||n==0){return Math.round(number).toString()}var result=number.toString();var arr=result.split(".");if(arr.length<2){result+=".";for(var i=0;i<n;i+=1){result+="0"}return result}var integer=arr[0];var decimal=arr[1];if(decimal.length==n){return result}if(decimal.length<n){for(var _i=0;_i<n-decimal.length;_i+=1){result+="0"}return result}result=integer+"."+decimal.substr(0,n);var last=decimal.substr(n,1);if(parseInt(last,10)>=5){var x=Math.pow(10,n);result=(Math.round(parseFloat(result)*x)+1)/x;result=result.toFixed(n)}return result};var $result=toFixed(value_654382/value_470735545*100,2);success($result)};',
                        },
                        line_number: 5,
                        callback1: [
                          {
                            type: 'setValue',
                            dataId: 166971435767716800,
                            options: {
                              compId: 'Input_feedback_983877',
                              compLib: 'comm',
                              pageJsonId: '537892',
                              compName: 'Input',
                              id: '496032',
                              valueList: {
                                Input_feedback_983877: '$data_429077$',
                              },
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
            ],
          },
        ],
      },
    ];
    eventDatagetValue105.params =
      [
        {
          title: '事件入参',
          name: 'options_737582',
          value: '$options_737582$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue105, { options_737582 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    countFeedback,
  }));

  useEffect(() => {
    const eventDataapiRequest618: any = [
      {
        type: 'apiRequest',
        dataId: 166977382125414750,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '3785431',
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
        line_number: 1,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166977382419101200,
            options: {
              compId: 'Input_690228_5400337_280051_232429_7501497_16314',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Select',
              id: '058693',
              data: '$reply_3785431?.resultData$',
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
    eventDataapiRequest618.params = [] || [];
    CMDGenerator(eventDataapiRequest618, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest619: any = [
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
    eventDataapiRequest619.params = [] || [];
    CMDGenerator(eventDataapiRequest619, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse308: any = [
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
        line_number: 6,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 166132449559169250,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '9981685',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var item=state.itemList;data.sceneSubmit.approveGrade=item.approveGrade;data.sceneSubmit.approveGradeName=item.approveGradeName;data.sceneSubmit.custMemberList=item.custMemberList;success(item.custMemberList)};',
              actionTitle: '设置界面初始化值',
            },
            line_number: 7,
            callback1: [
              {
                type: 'setValue',
                dataId: 166856737315973400,
                options: {
                  compId: 'Input_361479_887285_3596799_872256',
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '577151',
                  valueList: {
                    Input_361479_887285_3596799_872256:
                      '$state.itemList.approveGradeName$',
                  },
                },
                line_number: 8,
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
                      attrId: '2212653',
                      code: 'msisdnomeCity',
                      name: '成员号码归属地',
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
                      attrId: '812994',
                      code: 'msisdnomeCityName',
                      name: '号码归属地名称',
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
                      attrId: '154475',
                      code: 'clientSign',
                      name: '重要客户标识',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '72821',
                      code: 'netInTime',
                      name: '入网时间',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '013506',
                      code: 'contractNum',
                      name: '未到期合约数量',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '0539517',
                      code: 'mainMeal',
                      name: '主套餐',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '5877006',
                      code: 'onceDisc',
                      name: '主套餐一次折扣',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '7035532',
                      code: 'termType',
                      name: '终端类型',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '7719953',
                      code: 'termModel',
                      name: '终端型号',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: null },
                    },
                    {
                      attrId: '118151',
                      code: 'arpuValue',
                      name: '近三个月ARPU值',
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
                line_number: 9,
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
            line_number: 10,
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
                line_number: 11,
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
                  {
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$state.scene$',
                      operate: '==',
                      manualValue: 'V',
                    },
                    condId: '3177516',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166746009035238530,
                elseIfs: [],
                line_number: 12,
                callback1: [
                  {
                    type: 'setVisible',
                    dataId: 166746010413491800,
                    options: {
                      compId: ['Table_5369494', 'View_4949093_8809663'],
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Table',
                      id: '84579146',
                      visible: '',
                      compid: ['Table_5369494', 'View_4949093_8809663'],
                    },
                    line_number: 13,
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
            line_number: 14,
            callback1: [
              {
                type: 'setVisible',
                dataId: 166392734796303840,
                options: {
                  compId: [
                    'Input_361479_887285_2150708_936504_923334_755169',
                    'Input_361479_887285_3596799_872256',
                    'Table_8700198_532441_935003',
                  ],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '510887',
                  visible: 'true',
                  compid: [
                    'Input_361479_887285_2150708_936504_923334_755169',
                    'Input_361479_887285_3596799_872256',
                    'Table_8700198_532441_935003',
                  ],
                },
                line_number: 15,
              },
              {
                type: 'sysSetVisible',
                dataId: 166244953733999170,
                options: {
                  compId: [
                    'Row_851124',
                    'Row_851_2274664',
                    'Table_8700198_532441',
                    'Row_851124_869442',
                  ],
                  compName: 'page',
                  id: '675663',
                  pageJsonId: '537892',
                  compid: [
                    'Row_851124',
                    'Row_851_2274664',
                    'Table_8700198_532441',
                    'Row_851124_869442',
                  ],
                  visible: '',
                },
                line_number: 16,
              },
              {
                type: 'setDisable',
                dataId: 166392738103528860,
                options: {
                  compId: [
                    'Input_361479_887285_2150708_936504_923334_755169',
                    'Form_449441_9243547_908332',
                  ],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '075526',
                  disabled: 'true',
                  compid: [
                    'Input_361479_887285_2150708_936504_923334_755169',
                    'Form_449441_9243547_908332',
                  ],
                },
                line_number: 17,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse308.params = [] || [];
    CMDGenerator(eventDataifelse308, {}, 'ifelse', {
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
          id: 'View_537892_1_049877',
          uid: 'View_537892_1_049877',
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
        ref={(r: any) => (refs['View_537892_1_049877'] = r)}
        {...injectData}
      >
        <Divider
          name={'分割线'}
          orientation={'center'}
          type={'horizontal'}
          visible={true}
          dashed={false}
          dividerText={'集团成员营销案（无终端）'}
          $$componentItem={{
            id: 'Divider_52558_8209475',
            uid: 'Divider_52558_8209475',
            type: 'Divider',
            ...componentItem,
          }}
          style={{ margin: '12px 0 12px 0', height: 'auto' }}
          ref={(r: any) => (refs['Divider_52558_8209475'] = r)}
          {...injectData}
        />
        <View
          name={'布局容器'}
          visible={true}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_6806553_078583',
            uid: 'View_6806553_078583',
            type: 'View',
            ...componentItem,
          }}
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
          }}
          ref={(r: any) => (refs['View_6806553_078583'] = r)}
          {...injectData}
        >
          <HorizontalView
            name={'左右布局'}
            visible={true}
            formItemIndex={0}
            $$componentItem={{
              id: 'HorizontalView_004602_024394',
              uid: 'HorizontalView_004602_024394',
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
              margin: '0px 0px 8px 0px',
            }}
            ref={(r: any) => (refs['HorizontalView_004602_024394'] = r)}
            {...injectData}
          >
            <View
              name={'布局容器'}
              visible={true}
              $$componentItem={{
                id: 'View_339406_745623',
                uid: 'View_339406_745623',
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
                margin: '0px 0px 0px 0px',
              }}
              ref={(r: any) => (refs['View_339406_745623'] = r)}
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
                $$componentItem={{
                  id: 'Form_4311097_5142916_5246166',
                  uid: 'Form_4311097_5142916_5246166',
                  type: 'Form',
                  ...componentItem,
                }}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) => (refs['Form_4311097_5142916_5246166'] = r)}
                {...injectData}
              >
                <Checkbox
                  name={'审批场景'}
                  titleTip={'text'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  visible={true}
                  text={'集团成员营销案（无终端）'}
                  selfSpan={8}
                  labelCol={8}
                  wrapperCol={16}
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
                    id: 'Checkbox_882584_5289015_6659047_959402',
                    uid: 'Checkbox_882584_5289015_6659047_959402',
                    type: 'Checkbox',
                    ...componentItem,
                  }}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    (refs['Checkbox_882584_5289015_6659047_959402'] = r)
                  }
                  {...injectData}
                />
                <View
                  name={'布局容器'}
                  visible={true}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_859609_193133',
                    uid: 'View_859609_193133',
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
                  ref={(r: any) => (refs['View_859609_193133'] = r)}
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
                    id: 'Input_361479_887285_3596799_872256',
                    uid: 'Input_361479_887285_3596799_872256',
                    type: 'Input',
                    ...componentItem,
                  }}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    (refs['Input_361479_887285_3596799_872256'] = r)
                  }
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
            visible={true}
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
              id: 'Form_449441_9243547_908332',
              uid: 'Form_449441_9243547_908332',
              type: 'Form',
              ...componentItem,
            }}
            style={{ padding: '0px 0px 0px 0px' }}
            onValuesChange={(changedFieldName: any, changedValue: any) => {
              const eventDatasetDataSource287: any = [
                {
                  type: 'setDataSource',
                  dataId: 166849551364132600,
                  options: {
                    compId: 'page',
                    compName: 'page',
                    id: '513764',
                    pageJsonId: '537892',
                    dataSourceId: 166849547046806900,
                    dataSourceName: 'factorForm',
                    dataSourceRelType: 'custom',
                    dataSourceReloadFilter: [],
                    dataSourceSetValue: [
                      {
                        attrId: '6868715',
                        code: 'prodSel',
                        name: '产品选择',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_9243547_908332',
                            'getFieldsValue',
                          ],
                          code: 'prodSel',
                        },
                      },
                      {
                        attrId: '356079',
                        code: 'dealName',
                        name: '营销案档次编码',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_9243547_908332',
                            'getFieldsValue',
                          ],
                          code: 'dealName',
                        },
                      },
                      {
                        attrId: '586186',
                        code: 'saleName',
                        name: '营销案名称',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_9243547_908332',
                            'getFieldsValue',
                          ],
                          code: 'saleName',
                        },
                      },
                      {
                        attrId: '7625729',
                        code: 'prestoreAmount',
                        name: '预存金额',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_9243547_908332',
                            'getFieldsValue',
                          ],
                          code: 'prestoreAmount',
                        },
                      },
                      {
                        attrId: '478511',
                        code: 'acceptMul',
                        name: '受理倍数',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_9243547_908332',
                            'getFieldsValue',
                          ],
                          code: 'acceptMul',
                        },
                      },
                      {
                        attrId: '908094',
                        code: 'inureType',
                        name: '生效类型',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_9243547_908332',
                            'getFieldsValue',
                          ],
                          code: 'inureType',
                        },
                      },
                      {
                        attrId: '11859',
                        code: 'saleDesc',
                        name: '营销案描述',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_9243547_908332',
                            'getFieldsValue',
                          ],
                          code: 'saleDesc',
                        },
                      },
                      {
                        attrId: '367937',
                        code: 'discountAmount',
                        name: '优惠金额',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_9243547_908332',
                            'getFieldsValue',
                          ],
                          code: 'discountAmount',
                        },
                      },
                      {
                        attrId: '627843',
                        code: 'assumeAmount',
                        name: '保底金额',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_9243547_908332',
                            'getFieldsValue',
                          ],
                          code: 'assumeAmount',
                        },
                      },
                      {
                        attrId: '378236',
                        code: 'feedback',
                        name: '回馈率',
                        type: 'string',
                        initialData: { type: 'static' },
                        value: {
                          type: [
                            'form',
                            'Form_449441_9243547_908332',
                            'getFieldsValue',
                          ],
                          code: 'feedback',
                        },
                      },
                    ],
                    onlySetPatch: true,
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatasetDataSource287.params =
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
                eventDatasetDataSource287,
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
            ref={(r: any) => (refs['Form_449441_9243547_908332'] = r)}
            {...injectData}
          >
            <Input
              name={'产品选择'}
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
              fieldName={'prodSel'}
              value={data?.factorForm?.prodSel}
              formItemIndex={0}
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
                id: 'Input_prodSel_076035',
                uid: 'Input_prodSel_076035',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_prodSel_076035'] = r)}
              {...injectData}
            />
            <Input
              name={'营销案档次编码'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'选择营销案'}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              fieldName={'dealName'}
              value={data?.factorForm?.dealName}
              formItemIndex={1}
              postfixStyle={'3'}
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
                id: 'Input_dealName_000414',
                uid: 'Input_dealName_000414',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onIconClick={() => {
                const eventDatashowCustomModal288: any = [
                  {
                    type: 'showCustomModal',
                    dataId: 166856645370666240,
                    options: {
                      compId: 'showCustomModal',
                      compName: 'page',
                      id: '0299876',
                      pageJsonId: '537892',
                      modalname: '/marketSel',
                      pageId: '899632499889246208',
                      paramsObj: { multiple: '1' },
                      paramsObjKeyValueMap: { multiple: '1' },
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'setDataSource',
                        dataId: 166856648790561600,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '7580665',
                          pageJsonId: '537892',
                          dataSourceId: 166849547046806900,
                          dataSourceName: 'factorForm',
                          dataSourceRelType: 'custom',
                          dataSourceReloadFilter: [],
                          dataSourceSetValue: [
                            {
                              attrId: '6868715',
                              code: 'prodSel',
                              name: '产品选择',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '356079',
                              code: 'dealName',
                              name: '营销案档次编码',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['customize'],
                                code: '$okData_0299876[0].dealName$',
                              },
                            },
                            {
                              attrId: '586186',
                              code: 'saleName',
                              name: '营销案名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['customize'],
                                code: '$okData_0299876[0].saleName$',
                              },
                            },
                            {
                              attrId: '7625729',
                              code: 'prestoreAmount',
                              name: '预存金额',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['customize'],
                                code: '$okData_0299876[0].prestoreAmount$',
                              },
                            },
                            {
                              attrId: '478511',
                              code: 'acceptMul',
                              name: '受理倍数',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['customize'],
                                code: '$okData_0299876[0].acceptMul$',
                              },
                            },
                            {
                              attrId: '908094',
                              code: 'inureType',
                              name: '生效类型',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['customize'],
                                code: '$okData_0299876[0].inureType$',
                              },
                            },
                            {
                              attrId: '11859',
                              code: 'saleDesc',
                              name: '营销案描述',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['customize'],
                                code: '$okData_0299876[0].saleDesc$',
                              },
                            },
                            {
                              attrId: '367937',
                              code: 'discountAmount',
                              name: '优惠金额',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['customize'],
                                code: '$okData_0299876[0].discountAmount$',
                              },
                            },
                            {
                              attrId: '627843',
                              code: 'assumeAmount',
                              name: '保底金额',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['customize'],
                                code: '$okData_0299876[0].assumeAmount$',
                              },
                            },
                            {
                              attrId: '378236',
                              code: 'feedback',
                              name: '回馈率',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: { type: [], code: 'feedback' },
                            },
                          ],
                          operateType: 1,
                          onlySetPatch: true,
                          otherObjectArrayOptions: {},
                        },
                        line_number: 2,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatashowCustomModal288.params = [] || [];
                CMDGenerator(
                  eventDatashowCustomModal288,
                  {},
                  'showCustomModal',
                  {
                    id: 'showCustomModal',
                    name: 'showCustomModal',
                    type: 'showCustomModal',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => (refs['Input_dealName_000414'] = r)}
              {...injectData}
            />
            <Input
              name={'营销案名称'}
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
              fieldName={'saleName'}
              value={data?.factorForm?.saleName}
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
                id: 'Input_saleName_3627547',
                uid: 'Input_saleName_3627547',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_saleName_3627547'] = r)}
              {...injectData}
            />
            <Input
              name={'预存金额'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'元'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              fieldName={'prestoreAmount'}
              value={data?.factorForm?.prestoreAmount}
              formItemIndex={3}
              regexp={[
                {
                  id: '561317',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入正数最多2位小数',
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
                id: 'Input_prestoreAmount_107646',
                uid: 'Input_prestoreAmount_107646',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_prestoreAmount_107646'] = r)}
              {...injectData}
            />
            <Input
              name={'受理倍数'}
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
              fieldName={'acceptMul'}
              value={data?.factorForm?.acceptMul}
              formItemIndex={4}
              regexp={[
                {
                  id: '663232',
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
                id: 'Input_acceptMul_169395',
                uid: 'Input_acceptMul_169395',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_acceptMul_169395'] = r)}
              {...injectData}
            />
            <Input
              name={'生效类型'}
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
              fieldName={'inureType'}
              value={data?.factorForm?.inureType}
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
                id: 'Input_inureType_823399',
                uid: 'Input_inureType_823399',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_inureType_823399'] = r)}
              {...injectData}
            />
            <Input
              name={'营销案描述'}
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
              fieldName={'saleDesc'}
              value={data?.factorForm?.saleDesc}
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
                id: 'Input_saleDesc_077566',
                uid: 'Input_saleDesc_077566',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_saleDesc_077566'] = r)}
              {...injectData}
            />
            <Input
              name={'优惠金额'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'元'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              fieldName={'discountAmount'}
              value={data?.factorForm?.discountAmount}
              formItemIndex={7}
              regexp={[
                {
                  id: '465745',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入正数最多2位小数',
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
                id: 'Input_discountAmount_3930146',
                uid: 'Input_discountAmount_3930146',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatacallSelfFunc799: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166971438167693300,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '776434',
                      pageJsonId: '537892',
                      customFuncName: 'countFeedback',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc799.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc799, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Input_discountAmount_3930146'] = r)}
              {...injectData}
            />
            <Input
              name={'保底金额'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'元'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              fieldName={'assumeAmount'}
              value={data?.factorForm?.assumeAmount}
              formItemIndex={8}
              regexp={[
                {
                  id: '311519',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入大于0且最多2位小数',
                  pattern:
                    '/^([1-9]\\d*(\\.\\d{0,2})?|([0](\\.([0][1-9]|[1-9]\\d{0,1}))))$/',
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
                id: 'Input_assumeAmount_4296604',
                uid: 'Input_assumeAmount_4296604',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatacallSelfFunc800: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166971438932471740,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '942264',
                      pageJsonId: '537892',
                      customFuncName: 'countFeedback',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc800.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc800, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Input_assumeAmount_4296604'] = r)}
              {...injectData}
            />
            <Input
              name={'回馈率'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'%'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              fieldName={'feedback'}
              value={data?.factorForm?.feedback}
              formItemIndex={9}
              disabled={true}
              visible={true}
              readOnly={false}
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
                id: 'Input_feedback_983877',
                uid: 'Input_feedback_983877',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_feedback_983877'] = r)}
              {...injectData}
            />
          </Form>
          <Row
            name={'行容器'}
            visible={true}
            colSpan={4}
            gutterHorizontal={0}
            gutterVertical={0}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'Row_851_2274664',
              uid: 'Row_851_2274664',
              type: 'Row',
              ...componentItem,
            }}
            style={{ margin: '10px 0px 0px 0px' }}
            ref={(r: any) => (refs['Row_851_2274664'] = r)}
            {...injectData}
          >
            <View
              name={'布局容器'}
              visible={true}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_919043_703503',
                uid: 'View_919043_703503',
                type: 'View',
                ...componentItem,
              }}
              style={{
                display: 'block',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
              }}
              ref={(r: any) => (refs['View_919043_703503'] = r)}
              {...injectData}
            />
            <View
              name={'布局容器'}
              visible={true}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_281081_940833',
                uid: 'View_281081_940833',
                type: 'View',
                ...componentItem,
              }}
              style={{
                display: 'block',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
              }}
              ref={(r: any) => (refs['View_281081_940833'] = r)}
              {...injectData}
            />
            <View
              name={'布局容器'}
              visible={true}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_9696145_360431',
                uid: 'View_9696145_360431',
                type: 'View',
                ...componentItem,
              }}
              style={{
                display: 'block',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
              }}
              ref={(r: any) => (refs['View_9696145_360431'] = r)}
              {...injectData}
            />
            <View
              name={'布局容器'}
              visible={true}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_335931_032047',
                uid: 'View_335931_032047',
                type: 'View',
                ...componentItem,
              }}
              style={{
                display: 'block',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
              }}
              ref={(r: any) => (refs['View_335931_032047'] = r)}
              {...injectData}
            />
            <View
              name={'布局容器'}
              visible={true}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_006783_7425663',
                uid: 'View_006783_7425663',
                type: 'View',
                ...componentItem,
              }}
              style={{
                display: 'block',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
              }}
              ref={(r: any) => (refs['View_006783_7425663'] = r)}
              {...injectData}
            />
            <View
              name={'布局容器'}
              visible={true}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_859813_969715',
                uid: 'View_859813_969715',
                type: 'View',
                ...componentItem,
              }}
              style={{
                display: 'block',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
              }}
              ref={(r: any) => (refs['View_859813_969715'] = r)}
              {...injectData}
            >
              <Button
                name={'添加'}
                shape={null}
                visible={true}
                classification={'default'}
                autoProcessFlow={false}
                flowProcessResult={'common'}
                iconPosition={'left'}
                ghost={false}
                block={false}
                size={'default'}
                disabled={false}
                type={'primary'}
                hasIcon={false}
                $$componentItem={{
                  id: 'Button_683498_0183894',
                  uid: 'Button_683498_0183894',
                  type: 'Button',
                  ...componentItem,
                }}
                style={{ width: 'fit-content' }}
                onClick={(e: any) => {
                  const eventDatashowCustomModal289: any = [
                    {
                      type: 'showCustomModal',
                      dataId: 166314610874318850,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '611628',
                        pageJsonId: '537892',
                        modalname: '/marketSelMember',
                        pageId: '909364195753476096',
                        paramsObj: {
                          phone: '$value_24586657$',
                          lanId: '$state.lanId$',
                          catalogCode: '$state.catalogCode$',
                          isCoreFlag: '0',
                        },
                        paramsObjKeyValueMap: {
                          phone: '$value_24586657$',
                          lanId: '$state.lanId$',
                          catalogCode: '$state.catalogCode$',
                          isCoreFlag: '0',
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
                            code: 'function main(data,state,success,fail){data.MemberInfo.push(okData_611628);if(data.sceneSubmit.custMemberList!=undefined&&data.sceneSubmit.custMemberList.length>0){data.sceneSubmit.custMemberList.push(okData_611628)}else{var custMemberList=[];custMemberList.push(okData_611628);data.sceneSubmit.custMemberList=custMemberList}success()};',
                          },
                          line_number: 2,
                          callback1: [
                            {
                              type: 'console',
                              dataId: 166320824742517730,
                              options: {
                                compId: 'debug',
                                compName: 'system',
                                id: '1522329',
                                pageJsonId: '537892',
                                value: ['$data.sceneSubmit.custMemberList$'],
                              },
                              line_number: 3,
                            },
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
                                    value: { type: [], code: 'memberJoinDate' },
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
                                    value: { type: [], code: 'memberType' },
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
                                    value: { type: [], code: 'supervise' },
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
                                    attrId: '2212653',
                                    code: 'msisdnomeCity',
                                    name: '成员号码归属地',
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
                                ],
                                operateType: 1,
                                onlySetPatch: true,
                                otherObjectArrayOptions: {},
                              },
                              line_number: 4,
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
                  eventDatashowCustomModal289.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatashowCustomModal289,
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
                ref={(r: any) => (refs['Button_683498_0183894'] = r)}
                {...injectData}
              />
              <Button
                name={'删除'}
                shape={null}
                visible={true}
                classification={'default'}
                autoProcessFlow={false}
                flowProcessResult={'common'}
                iconPosition={'left'}
                ghost={false}
                block={false}
                size={'default'}
                disabled={false}
                type={'primary'}
                hasIcon={false}
                $$componentItem={{
                  id: 'Button_026256_000087',
                  uid: 'Button_026256_000087',
                  type: 'Button',
                  ...componentItem,
                }}
                style={{ width: 'fit-content', margin: '0px 0px 0px 10px' }}
                onClick={(e: any) => {
                  const eventDatagetTableSelectedKey94: any = [
                    {
                      type: 'getTableSelectedKey',
                      dataId: 166305363866117100,
                      options: {
                        compId: 'Table_8700198_532441',
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
                                    initialData: { type: 'static', value: '' },
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
                              line_number: 3,
                              callback1: [],
                              callback2: [],
                            },
                            {
                              type: 'callParentCustomFunc',
                              dataId: 166320896523261020,
                              options: {
                                compId: 'callParentCustomFunc',
                                compName: 'system',
                                id: '2648465',
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
                  eventDatagetTableSelectedKey94.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatagetTableSelectedKey94,
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
                ref={(r: any) => (refs['Button_026256_000087'] = r)}
                {...injectData}
              />
            </View>
          </Row>
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
                className: '',
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
                title: '重要成员标识',
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
                title: '纳入成员骨干时间',
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
                dataIndex: 'groupLevelName',
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
                title: '未到期合约数量',
                key: 'contractNum',
                dataIndex: 'contractNum',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '未到期合约数量',
                      attrId: '909686709872914433',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
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
                title: '入网时间',
                key: 'netInTime',
                dataIndex: 'netInTime',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '入网时间',
                      attrId: '909686709872914432',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
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
                title: '重要客户标识',
                key: 'clientSign',
                dataIndex: 'clientSign',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '重要客户标识',
                      attrId: '909684124516106240',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
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
                title: '主套餐',
                key: 'mainMeal',
                dataIndex: 'mainMeal',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '主套餐',
                      attrId: '909686709872914434',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
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
                title: '主套餐一次折扣',
                key: 'onceDisc',
                dataIndex: 'onceDisc',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '主套餐一次折扣',
                      attrId: '909686709872914435',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
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
                title: '近三个月ARPU值',
                key: 'arpuValue',
                dataIndex: 'arpuValue',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '近三个月ARPU值',
                      attrId: '909686709872914438',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
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
            visible={true}
            editMode={'single'}
            selectType={'checkbox'}
            bordered={'segmentation'}
            size={'middle'}
            fixedAction={true}
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
                title: '详情',
                iconPos: 'left',
                icon: { theme: 'outlined', type: 'file-search' },
                type: 'detail',
                id: '374419',
                checked: true,
              },
              {
                title: '编辑',
                iconPos: 'left',
                icon: { theme: 'outlined', type: 'edit' },
                type: 'edit',
                id: '935112',
                checked: true,
              },
            ]}
            extend={[]}
            className={'nowrap'}
            dataSourceFromDataSourceConfig={'data.MemberInfo'}
            $$componentItem={{
              id: 'Table_8700198_532441',
              uid: 'Table_8700198_532441',
              type: 'Table',
              ...componentItem,
            }}
            style={{ margin: '10px 0px 10px 0px' }}
            onRowDetail={(rowId: any, row: any, index: any) => {
              const eventDatashowCustomModal290: any = [
                {
                  type: 'showCustomModal',
                  dataId: 166849945852987620,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '614514',
                    pageJsonId: '537892',
                    modalname: '/marketSelMember',
                    pageId: '909364195753476096',
                    modalPath: '/marketSelMember',
                    paramsObj: { memberInfo: '$row$' },
                    paramsObjKeyValueMap: { memberInfo: '$row$' },
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatashowCustomModal290.params =
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
                eventDatashowCustomModal290,
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
            onRowEdit={(rowId: any, row: any, index: any) => {
              const eventDatashowCustomModal291: any = [
                {
                  type: 'showCustomModal',
                  dataId: 166849948424829380,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '5147087',
                    pageJsonId: '537892',
                    modalname: '/marketSelMember',
                    pageId: '909364195753476096',
                    modalPath: '/marketSelMember',
                    paramsObj: { memberInfo: '$row$' },
                    paramsObjKeyValueMap: { memberInfo: '$row$' },
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'customActionCode',
                      dataId: 166850078016736670,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '132224',
                        pageJsonId: '537892',
                        code: 'function main(data,state,success,fail){var res=[];data.MemberInfo.forEach(function(v){if(okData_5147087.rowId!=v.rowId){res.push(v)}});res.push(okData_5147087);data.MemberInfo=res;success(res)};',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'setDataSource',
                          dataId: 166850109260961200,
                          options: {
                            compId: 'setDataSource',
                            compName: 'page',
                            id: '47134',
                            pageJsonId: '537892',
                            dataSourceId: 166303981671487000,
                            dataSourceName: 'MemberInfo',
                            dataSourceRelType: 'object',
                            dataSourceReloadFilter: [
                              {
                                attrId: '658028',
                                code: 'onceDisc',
                                name: '主套餐一次折扣',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '513617',
                                code: 'remark',
                                name: '备注',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '23785',
                                code: 'homeCityName',
                                name: '集团归属地名称',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '024802',
                                code: 'genderName',
                                name: '性别中文名',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '5029193',
                                code: 'rowId',
                                name: '行ID',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '943875',
                                code: 'termModel',
                                name: '终端型号',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '381982',
                                code: 'coreFlag',
                                name: '是否重要成员',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                              },
                              {
                                attrId: '772484',
                                code: 'actionTypeName',
                                name: '操作类型名称',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '231464',
                                code: 'sceneTypeName',
                                name: '场景类型名称',
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
                                attrId: '073913',
                                code: 'clientSign',
                                name: '重要客户标识',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '962945',
                                code: 'actionType',
                                name: '操作类型',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                              },
                              {
                                attrId: '8531766',
                                code: 'msisdnomeCity',
                                name: '成员号码归属地',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                              },
                              {
                                attrId: '016159',
                                code: 'objTypeName',
                                name: '对象类型名称',
                                type: 'string',
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
                                attrId: '261566',
                                code: 'keyType',
                                name: '关键人标识',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '325211',
                                code: 'gender',
                                name: '性别',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '8042105',
                                code: 'memberTypeName',
                                name: '成员类型名称',
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
                                attrId: '990033',
                                code: 'officialLevel',
                                name: '行政级别',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '0131364',
                                code: 'termType',
                                name: '终端类型',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '337593',
                                code: 'groupId',
                                name: '集团编码',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '501525',
                                code: 'groupName',
                                name: '集团名称',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '40917',
                                code: 'sceneType',
                                name: '场景类型',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                              },
                              {
                                attrId: '638646',
                                code: 'objType',
                                name: '对象类型',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                              },
                              {
                                attrId: '3319386',
                                code: 'name',
                                name: '姓名',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '390053',
                                code: 'netInTime',
                                name: '入网时间',
                                type: 'string',
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
                                attrId: '394008',
                                code: 'contractNum',
                                name: '未到期合约数量',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '874366',
                                code: 'supervise',
                                name: '看管人员',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '4013114',
                                code: 'msisdnomeCityName',
                                name: '号码归属地名称',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '804406',
                                code: 'customerId',
                                name: '客户ID',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '651884',
                                code: 'coreFlagName',
                                name: '是否重要成员名称',
                                type: 'string',
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
                                attrId: '1988677',
                                code: 'memberJoinDate_begin',
                                name: '纳入成员骨干时间开始',
                                type: 'datetime',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '7803764',
                                code: 'email',
                                name: '邮箱',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '428051',
                                code: 'keyTypeName',
                                name: '关键人标识名称',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '27162',
                                code: 'tradeclassTopName',
                                name: '行业类型名称',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '3582162',
                                code: 'duty',
                                name: '职务',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '230936',
                                code: 'arpuValue',
                                name: '近三个月ARPU值',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '590862',
                                code: 'officialLevelName',
                                name: '行政级别名称',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '721256',
                                code: 'homeCity',
                                name: '集团归属地',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                              },
                              {
                                attrId: '2421913',
                                code: 'department',
                                name: '部门',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '8599867',
                                code: 'statusName',
                                name: '集团状态',
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
                                attrId: '28098',
                                code: 'msisdn',
                                name: '手机号码',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '233847',
                                code: 'groupLevelName',
                                name: '价值等级',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '5568285',
                                code: 'mainMeal',
                                name: '主套餐',
                                type: 'string',
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
                                attrId: '990941',
                                code: 'tradeclassTop',
                                name: '行业类型ID',
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
                                attrId: '2212653',
                                code: 'msisdnomeCity',
                                name: '成员号码归属地',
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
                                attrId: '812994',
                                code: 'msisdnomeCityName',
                                name: '号码归属地名称',
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
                                attrId: '154475',
                                code: 'clientSign',
                                name: '重要客户标识',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '72821',
                                code: 'netInTime',
                                name: '入网时间',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '013506',
                                code: 'contractNum',
                                name: '未到期合约数量',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '0539517',
                                code: 'mainMeal',
                                name: '主套餐',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '5877006',
                                code: 'onceDisc',
                                name: '主套餐一次折扣',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '7035532',
                                code: 'termType',
                                name: '终端类型',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '7719953',
                                code: 'termModel',
                                name: '终端型号',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '118151',
                                code: 'arpuValue',
                                name: '近三个月ARPU值',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                            ],
                            newData: '$data_132224$',
                            operateType: 3,
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
                  ],
                  callback2: [],
                },
              ];
              eventDatashowCustomModal291.params =
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
                eventDatashowCustomModal291,
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
            ref={(r: any) => (refs['Table_8700198_532441'] = r)}
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
                className: '',
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
                title: '重要成员标识',
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
                title: '纳入成员骨干时间',
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
                dataIndex: 'groupLevelName',
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
                title: '未到期合约数量',
                key: 'contractNum',
                dataIndex: 'contractNum',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '未到期合约数量',
                      attrId: '909686709872914433',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
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
                title: '入网时间',
                key: 'netInTime',
                dataIndex: 'netInTime',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '入网时间',
                      attrId: '909686709872914432',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
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
                title: '重要客户标识',
                key: 'clientSign',
                dataIndex: 'clientSign',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '重要客户标识',
                      attrId: '909684124516106240',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
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
                title: '主套餐',
                key: 'mainMeal',
                dataIndex: 'mainMeal',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '主套餐',
                      attrId: '909686709872914434',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
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
                title: '主套餐一次折扣',
                key: 'onceDisc',
                dataIndex: 'onceDisc',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '主套餐一次折扣',
                      attrId: '909686709872914435',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
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
                title: '近三个月ARPU值',
                key: 'arpuValue',
                dataIndex: 'arpuValue',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '近三个月ARPU值',
                      attrId: '909686709872914438',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
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
            visible={false}
            editMode={'single'}
            selectType={'checkbox'}
            bordered={'segmentation'}
            size={'middle'}
            fixedAction={true}
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
            rowActions={[]}
            extend={[]}
            className={'nowrap'}
            dataSourceFromDataSourceConfig={'data.MemberInfo'}
            $$componentItem={{
              id: 'Table_8700198_532441_935003',
              uid: 'Table_8700198_532441_935003',
              type: 'Table',
              ...componentItem,
            }}
            style={{ margin: '10px 0px 10px 0px' }}
            onRowDetail={(rowId: any, row: any, index: any) => {
              const eventDatashowCustomModal292: any = [
                {
                  type: 'showCustomModal',
                  dataId: 166849945852987620,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '614514',
                    pageJsonId: '537892',
                    modalname: '/marketSelMember',
                    pageId: '909364195753476096',
                    modalPath: '/marketSelMember',
                    paramsObj: { memberInfo: '$row$' },
                    paramsObjKeyValueMap: { memberInfo: '$row$' },
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatashowCustomModal292.params =
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
                eventDatashowCustomModal292,
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
            onRowEdit={(rowId: any, row: any, index: any) => {
              const eventDatashowCustomModal293: any = [
                {
                  type: 'showCustomModal',
                  dataId: 166849948424829380,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '5147087',
                    pageJsonId: '537892',
                    modalname: '/marketSelMember',
                    pageId: '909364195753476096',
                    modalPath: '/marketSelMember',
                    paramsObj: { memberInfo: '$row$' },
                    paramsObjKeyValueMap: { memberInfo: '$row$' },
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'customActionCode',
                      dataId: 166850078016736670,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '132224',
                        pageJsonId: '537892',
                        code: 'function main(data,state,success,fail){var res=[];data.MemberInfo.forEach(function(v){if(okData_5147087.rowId!=v.rowId){res.push(v)}});res.push(okData_5147087);data.MemberInfo=res;success(res)};',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'setDataSource',
                          dataId: 166850109260961200,
                          options: {
                            compId: 'setDataSource',
                            compName: 'page',
                            id: '47134',
                            pageJsonId: '537892',
                            dataSourceId: 166303981671487000,
                            dataSourceName: 'MemberInfo',
                            dataSourceRelType: 'object',
                            dataSourceReloadFilter: [
                              {
                                attrId: '658028',
                                code: 'onceDisc',
                                name: '主套餐一次折扣',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '513617',
                                code: 'remark',
                                name: '备注',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '23785',
                                code: 'homeCityName',
                                name: '集团归属地名称',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '024802',
                                code: 'genderName',
                                name: '性别中文名',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '5029193',
                                code: 'rowId',
                                name: '行ID',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '943875',
                                code: 'termModel',
                                name: '终端型号',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '381982',
                                code: 'coreFlag',
                                name: '是否重要成员',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                              },
                              {
                                attrId: '772484',
                                code: 'actionTypeName',
                                name: '操作类型名称',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '231464',
                                code: 'sceneTypeName',
                                name: '场景类型名称',
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
                                attrId: '073913',
                                code: 'clientSign',
                                name: '重要客户标识',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '962945',
                                code: 'actionType',
                                name: '操作类型',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                              },
                              {
                                attrId: '8531766',
                                code: 'msisdnomeCity',
                                name: '成员号码归属地',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                              },
                              {
                                attrId: '016159',
                                code: 'objTypeName',
                                name: '对象类型名称',
                                type: 'string',
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
                                attrId: '261566',
                                code: 'keyType',
                                name: '关键人标识',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '325211',
                                code: 'gender',
                                name: '性别',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '8042105',
                                code: 'memberTypeName',
                                name: '成员类型名称',
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
                                attrId: '990033',
                                code: 'officialLevel',
                                name: '行政级别',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '0131364',
                                code: 'termType',
                                name: '终端类型',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '337593',
                                code: 'groupId',
                                name: '集团编码',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '501525',
                                code: 'groupName',
                                name: '集团名称',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '40917',
                                code: 'sceneType',
                                name: '场景类型',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                              },
                              {
                                attrId: '638646',
                                code: 'objType',
                                name: '对象类型',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                              },
                              {
                                attrId: '3319386',
                                code: 'name',
                                name: '姓名',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '390053',
                                code: 'netInTime',
                                name: '入网时间',
                                type: 'string',
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
                                attrId: '394008',
                                code: 'contractNum',
                                name: '未到期合约数量',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '874366',
                                code: 'supervise',
                                name: '看管人员',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '4013114',
                                code: 'msisdnomeCityName',
                                name: '号码归属地名称',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '804406',
                                code: 'customerId',
                                name: '客户ID',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '651884',
                                code: 'coreFlagName',
                                name: '是否重要成员名称',
                                type: 'string',
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
                                attrId: '1988677',
                                code: 'memberJoinDate_begin',
                                name: '纳入成员骨干时间开始',
                                type: 'datetime',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '7803764',
                                code: 'email',
                                name: '邮箱',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '428051',
                                code: 'keyTypeName',
                                name: '关键人标识名称',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '27162',
                                code: 'tradeclassTopName',
                                name: '行业类型名称',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '3582162',
                                code: 'duty',
                                name: '职务',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '230936',
                                code: 'arpuValue',
                                name: '近三个月ARPU值',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '590862',
                                code: 'officialLevelName',
                                name: '行政级别名称',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '721256',
                                code: 'homeCity',
                                name: '集团归属地',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                              },
                              {
                                attrId: '2421913',
                                code: 'department',
                                name: '部门',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '8599867',
                                code: 'statusName',
                                name: '集团状态',
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
                                attrId: '28098',
                                code: 'msisdn',
                                name: '手机号码',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '233847',
                                code: 'groupLevelName',
                                name: '价值等级',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '5568285',
                                code: 'mainMeal',
                                name: '主套餐',
                                type: 'string',
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
                                attrId: '990941',
                                code: 'tradeclassTop',
                                name: '行业类型ID',
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
                                attrId: '2212653',
                                code: 'msisdnomeCity',
                                name: '成员号码归属地',
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
                                attrId: '812994',
                                code: 'msisdnomeCityName',
                                name: '号码归属地名称',
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
                                attrId: '154475',
                                code: 'clientSign',
                                name: '重要客户标识',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '72821',
                                code: 'netInTime',
                                name: '入网时间',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '013506',
                                code: 'contractNum',
                                name: '未到期合约数量',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '0539517',
                                code: 'mainMeal',
                                name: '主套餐',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '5877006',
                                code: 'onceDisc',
                                name: '主套餐一次折扣',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '7035532',
                                code: 'termType',
                                name: '终端类型',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '7719953',
                                code: 'termModel',
                                name: '终端型号',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                              {
                                attrId: '118151',
                                code: 'arpuValue',
                                name: '近三个月ARPU值',
                                type: 'string',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: null },
                              },
                            ],
                            newData: '$data_132224$',
                            operateType: 3,
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
                  ],
                  callback2: [],
                },
              ];
              eventDatashowCustomModal293.params =
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
                eventDatashowCustomModal293,
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
            ref={(r: any) => (refs['Table_8700198_532441_935003'] = r)}
            {...injectData}
          />
          <Row
            name={'行容器'}
            visible={true}
            colSpan={24}
            gutterHorizontal={0}
            gutterVertical={0}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'Row_851124_869442',
              uid: 'Row_851124_869442',
              type: 'Row',
              ...componentItem,
            }}
            ref={(r: any) => (refs['Row_851124_869442'] = r)}
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
              colSpace={12}
              rowSpace={16}
              formCode={'Form_395851'}
              $$componentItem={{
                id: 'Form_395851_1727917_9692158_9612234_1000722_8150693',
                uid: 'Form_395851_1727917_9692158_9612234_1000722_8150693',
                type: 'Form',
                ...componentItem,
              }}
              style={{ padding: '0px 0px 0px 0px', margin: '10px 0px 0px 0px' }}
              ref={(r: any) =>
                (refs['Form_395851_1727917_9692158_9612234_1000722_8150693'] =
                  r)
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
                  id: 'Input_690228_5400337_280051_232429_7501497_16314',
                  uid: 'Input_690228_5400337_280051_232429_7501497_16314',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  (refs['Input_690228_5400337_280051_232429_7501497_16314'] = r)
                }
                {...injectData}
              />
              <View
                name={'布局容器'}
                visible={true}
                labelCol={8}
                wrapperCol={16}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_22346374_875512_926873_4359147_729981_7620959',
                  uid: 'View_22346374_875512_926873_4359147_729981_7620959',
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
                  (refs['View_22346374_875512_926873_4359147_729981_7620959'] =
                    r)
                }
                {...injectData}
              >
                <StdUpload
                  name={'附件上传'}
                  visible={true}
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
                    id: 'StdUpload_6230546_867413_538179_36057857_3505279_7445817',
                    uid: 'StdUpload_6230546_867413_538179_36057857_3505279_7445817',
                    type: 'StdUpload',
                    ...componentItem,
                  }}
                  style={{ margin: '0px 0px 0px 0px' }}
                  onFinishUpload={(
                    file: any,
                    fileList: any,
                    fileId: any,
                    fileSize: any,
                    fileName: any,
                    fileResponse: any,
                  ) => {
                    const eventDatagetSelectedData467: any = [
                      {
                        type: 'getSelectedData',
                        dataId: 166521847771133400,
                        options: {
                          compId:
                            'Input_690228_5400337_280051_232429_7501497_16314',
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
                    eventDatagetSelectedData467.params =
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
                      eventDatagetSelectedData467,
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
                    const eventDatacustomActionCode880: any = [
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
                    eventDatacustomActionCode880.params =
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
                      eventDatacustomActionCode880,
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
                      'StdUpload_6230546_867413_538179_36057857_3505279_7445817'
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
          visible={true}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_4949093_8809663',
            uid: 'View_4949093_8809663',
            type: 'View',
            ...componentItem,
          }}
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
          }}
          ref={(r: any) => (refs['View_4949093_8809663'] = r)}
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
              id: 'Table_5369494_800135',
              uid: 'Table_5369494_800135',
              type: 'Table',
              ...componentItem,
            }}
            style={{ margin: '10px 0px 0px 0px' }}
            onRowDelete={(rowId: any, row: any, index: any) => {
              const eventDatacustomActionCode881: any = [
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
              eventDatacustomActionCode881.params =
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
                eventDatacustomActionCode881,
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
              const eventDatadownloadByFileId125: any = [
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
              eventDatadownloadByFileId125.params =
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
                eventDatadownloadByFileId125,
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
            ref={(r: any) => (refs['Table_5369494_800135'] = r)}
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(ClsYx_0001_0005$$Page, {
  pageId: '907444049361006592',
  hasLogin: false,
  dataSource,
  defaultState: {},
});
