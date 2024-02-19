// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import {
  Button,
  Card,
  Description,
  Form,
  GridView,
  Input,
  QuillEditor,
  Table,
  Text,
  View,
} from '@/components/factory';

import Pageview from '@/components/Pageview';

import BusiComp6260603 from '@/components/BusiComp6260603';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import { styleInject } from '@/utils/styleInject';

import dataSource from './dataSource.json';

styleInject(
  '.__CustomClass_9704152__ .Form_541805 .ql-snow .ql-picker-options .ql-picker-item{line-height:36px;}',

  '9704152',
);

const AuditOrderSubmit$$Page: React.FC<PageProps> = ({
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
  const getFactor = (options_357128: any) => {
    // console 166255097358009000
    console.log('父页面回调。。。。');
    // console 166255097672324030
    console.log(options_357128);
    const eventDatacustomActionCode54: any = [
      {
        type: 'customActionCode',
        dataId: 166134341293617920,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '9785688',
          pageJsonId: '9704152',
          code: 'function main(data,state,success,fail){var catalogCode=options_357128.catalogCode;var index;if(data.itemList!=undefined&&data.itemList!=null&&data.itemList.length>0){var exist=false;for(var i=0;i<data.itemList.length;i++){if(data.itemList[i].catalogCode===catalogCode){index=i;exist=true}}if(exist){data.itemList.splice(index,1);data.itemList.push(options_357128)}else{data.itemList.push(options_357128)}}else{if(catalogCode!=undefined&&catalogCode!=null){data.itemList.push(options_357128)}}success(data.itemList)};',
        },
        line_number: 3,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacustomActionCode54.params =
      [
        {
          title: '事件入参',
          name: 'options_357128',
          value: '$options_357128$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode54,
      { options_357128 },
      'customActionCode',
      {
        id: 'customActionCode',
        name: 'customActionCode',
        type: 'customActionCode',
        platform: 'undefined',
      },
    );
  };
  const auditClassCalcul = (options_49305: any) => {
    const eventDatacustomActionCode55: any = [
      {
        type: 'customActionCode',
        dataId: 166149795121568400,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '175918',
          pageJsonId: '9704152',
          code: 'function main(data,state,success,fail){var childClass=options_49305;var maxClass=data.AuditClass;if(maxClass.approveLevelSize!=undefined&&maxClass.approveLevelSize!=null){if(maxClass.approveLevelSize<childClass.approveLevelSize){maxClass=childClass}}else{maxClass=childClass}data.AuditClass=maxClass;success(maxClass)};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setValue',
            dataId: 166149865129773920,
            options: {
              compId: 'Input_014189',
              compLib: 'comm',
              pageJsonId: '9704152',
              compName: 'Input',
              id: '343346',
              value: '$data_175918.approveLevelName$',
            },
            line_number: 2,
            callback1: [],
          },
          {
            type: 'setDataSource',
            dataId: 166175520713849800,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '8833991',
              pageJsonId: '9704152',
              dataSourceId: 166175493826668260,
              dataSourceName: 'AuditClass',
              dataSourceRelType: 'custom',
              dataSourceReloadFilter: [],
              dataSourceSetValue: [
                {
                  attrId: '0591208',
                  code: 'approveLevel',
                  name: '审批级别',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['customize'],
                    code: '$data_175918.approveLevel$',
                  },
                },
                {
                  attrId: '03702',
                  code: 'approveLevelName',
                  name: '审批级别名称',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['customize'],
                    code: '$data_175918.approveLevelName$',
                  },
                },
                {
                  attrId: '904215',
                  code: 'approveLevelDesc',
                  name: '描述',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['customize'],
                    code: '$data_175918.approveLevelDesc$',
                  },
                },
                {
                  attrId: '4586244',
                  code: 'catalogCode',
                  name: '场景编码',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['customize'],
                    code: '$data_175918.catalogCode$',
                  },
                },
                {
                  attrId: '7698266',
                  code: 'approveLevelSize',
                  name: '审批级别大小',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['customize'],
                    code: '$data_175918.approveLevelSize$',
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
            type: 'apiRequest',
            dataId: 166210978604350400,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '762463',
              pageJsonId: '9704152',
              sync: false,
              method: 'post',
              url: '/app/rhin/gateway/callRhinEngine',
              _capabilityCode: 'getFlowFirstTache',
              _apiCode: 'getFlowFirstTache',
              _source: 'rhin',
              _serviceId: '882912128551780352',
              _serviceTitle: '获取首环节信息-hdb: getFlowFirstTache',
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
                  dataKey: '759846_header',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  _id: 'path',
                  compType: 'Input',
                  parents: [],
                  id: 'path',
                  dataKey: '759846_path',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'query',
                  compType: 'Input',
                  parents: [],
                  id: 'query',
                  dataKey: '759846_query',
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  children: [
                    {
                      code: 'flowCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.flowCode',
                      compType: 'Input',
                      name: 'flowCode',
                      parents: ['body'],
                      id: 'body.flowCode',
                      dataKey: '759846_body.flowCode',
                      value: {
                        type: ['customize'],
                        code: '$data_175918.flowCode$',
                      },
                    },
                  ],
                  _id: 'body',
                  compType: 'Input',
                  parents: [],
                  id: 'body',
                  dataKey: '759846_body',
                },
              ],
            },
            line_number: 4,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 166210978604399940,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '2283699',
                  pageJsonId: '9704152',
                  dataSourceId: 166029173018920830,
                  dataSourceName: 'pageParam',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '045638',
                      code: 'tacheCode',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static', value: 'CreateOrder' },
                      value: {
                        type: [
                          'context',
                          '$reply_762463?.resultData.tacheCode$',
                        ],
                        hideAttr: true,
                        code: '',
                      },
                    },
                    {
                      attrId: '248702',
                      code: 'childProper',
                      name: '属性',
                      type: 'objectArray',
                      initialData: { type: 'static' },
                      children: [
                        {
                          attrId: '264439',
                          code: 'url',
                          name: '路径',
                          type: 'string',
                          initialData: { type: 'static' },
                          parentCode: 'childProper',
                          parentKey: 'childProper',
                        },
                        {
                          attrId: '51947094',
                          code: 'itemList',
                          name: '子节点参数',
                          type: 'object',
                          initialData: { type: 'static' },
                          parentCode: 'childProper',
                          parentKey: 'childProper',
                        },
                      ],
                    },
                    {
                      attrId: '033692',
                      code: 'flowCode',
                      name: '属性',
                      type: 'string',
                      initialData: {
                        type: 'static',
                        value: 'CHANNEL_CITY_FLOW',
                      },
                      value: {
                        type: ['customize'],
                        code: '$data_175918.flowCode$',
                      },
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 5,
                callback1: [
                  {
                    type: 'resetForm',
                    dataId: 166210978604371900,
                    options: {
                      compId: 'BOFramer_823276',
                      compLib: '@/components',
                      pageJsonId: '9704152',
                      compName: 'BOFramer',
                      id: '039695',
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
        callback2: [],
      },
    ];
    eventDatacustomActionCode55.params =
      [
        { title: '事件入参', name: 'options_49305', value: '$options_49305$' },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode55,
      { options_49305 },
      'customActionCode',
      {
        id: 'customActionCode',
        name: 'customActionCode',
        type: 'customActionCode',
        platform: 'undefined',
      },
    );
  };
  const initInput = (options_3765: any) => {
    const eventDatasetCompContentValue2: any = [
      {
        type: 'setCompContentValue',
        dataId: 166260486304949300,
        options: {
          compId: 'Text_331457_850218',
          compLib: 'custom',
          pageJsonId: '9704152',
          compName: 'Text',
          id: '3163748',
          value: '$options_3765.coding$',
        },
        line_number: 1,
        callback1: [],
      },
    ];
    eventDatasetCompContentValue2.params =
      [{ title: '事件入参', name: 'options_3765', value: '$options_3765$' }] ||
      [];
    CMDGenerator(
      eventDatasetCompContentValue2,
      { options_3765 },
      'setCompContentValue',
      {
        id: 'setCompContentValue',
        name: 'setCompContentValue',
        type: 'setCompContentValue',
        platform: 'undefined',
      },
    );
    const eventDatasetValue4: any = [
      {
        type: 'setValue',
        dataId: 166260488426493900,
        options: {
          compId: 'Input_32550878',
          compLib: 'comm',
          pageJsonId: '9704152',
          compName: 'Input',
          id: '3678225',
          value: '$options_3765.title$',
        },
        line_number: 2,
        callback1: [],
      },
    ];
    eventDatasetValue4.params =
      [{ title: '事件入参', name: 'options_3765', value: '$options_3765$' }] ||
      [];
    CMDGenerator(eventDatasetValue4, { options_3765 }, 'setValue', {
      id: 'setValue',
      name: 'setValue',
      type: 'setValue',
      platform: 'undefined',
    });
    const eventDatasetValue5: any = [
      {
        type: 'setValue',
        dataId: 166260490867486900,
        options: {
          compId: 'QuillEditor_637236',
          compLib: 'comm',
          pageJsonId: '9704152',
          compName: 'QuillEditor',
          id: '89735',
          value: '$options_3765.auditDesc$',
          valueList: { QuillEditor_637236: '$options_3765.auditDesc$' },
        },
        line_number: 3,
        callback1: [],
      },
    ];
    eventDatasetValue5.params =
      [{ title: '事件入参', name: 'options_3765', value: '$options_3765$' }] ||
      [];
    CMDGenerator(eventDatasetValue5, { options_3765 }, 'setValue', {
      id: 'setValue',
      name: 'setValue',
      type: 'setValue',
      platform: 'undefined',
    });
    const eventDatasetValue6: any = [
      {
        type: 'setValue',
        dataId: 166260500592107970,
        options: {
          compId: 'Input_014189',
          compLib: 'comm',
          pageJsonId: '9704152',
          compName: 'Input',
          id: '394573',
          value: '$options_3765.approveGradeName$',
        },
        line_number: 4,
        callback1: [],
      },
    ];
    eventDatasetValue6.params =
      [{ title: '事件入参', name: 'options_3765', value: '$options_3765$' }] ||
      [];
    CMDGenerator(eventDatasetValue6, { options_3765 }, 'setValue', {
      id: 'setValue',
      name: 'setValue',
      type: 'setValue',
      platform: 'undefined',
    }); // console 169458380885761660
    console.log(options_3765.auditDesc, '审批内容');
  };
  const judgeGroup = (options_098498: any) => {
    const eventDataapiRequest30: any = [
      {
        type: 'apiRequest',
        dataId: 166383580832914900,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '3591',
          pageJsonId: '9704152',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'getDcCatalogByCode',
          _apiCode: 'getDcCatalogByCode',
          _source: 'rhin',
          _serviceId: '881821311255793664',
          _serviceTitle: '根据类目编码查询单个类目-tsm: getDcCatalogByCode',
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
              dataKey: '3591_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              children: [
                {
                  code: 'catalogCode',
                  name: '新增节点',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'T',
                  defaultValue: '',
                  _id: 'path.catalogCode',
                  compType: 'Input',
                  parents: ['path'],
                  id: 'path.catalogCode',
                  dataKey: '3591_path.catalogCode',
                  value: {
                    type: ['context', '$options_098498$'],
                    code: 'catalogCode',
                  },
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '3591_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '3591_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '3591_body',
            },
          ],
          _sourceName: '根据类目编码查询单个类目-tsm',
        },
        line_number: 1,
        callback1: [
          {
            type: 'ifelse',
            condition: [
              {
                condId: '3517348',
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$reply_3591.resultData.groupType$',
                  operate: '==',
                  manualValue: '1000',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 166383580833021000,
            elseIfs: [],
            line_number: 2,
            callback1: [
              {
                type: 'sysSetVisible',
                dataId: 166383580833031600,
                options: {
                  compId: ['Table_994258'],
                  compName: 'page',
                  id: '884574',
                  pageJsonId: '9704152',
                  compid: ['Table_994258'],
                },
                line_number: 3,
              },
              {
                type: 'sysSetVisible',
                dataId: 16638358083305654,
                options: {
                  compId: ['Description_055584'],
                  compName: 'page',
                  id: '320156',
                  pageJsonId: '9704152',
                  compid: ['Description_055584'],
                  visible: 'true',
                },
                line_number: 4,
              },
            ],
          },
          {
            type: 'ifelse',
            condition: [
              {
                condId: '2409667',
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$reply_3591.resultData.groupType$',
                  operate: '==',
                  manualValue: '2000',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 166383580833081060,
            elseIfs: [],
            line_number: 5,
            callback1: [
              {
                type: 'sysSetVisible',
                dataId: 166383580833019840,
                options: {
                  compId: ['Description_055584'],
                  compName: 'page',
                  id: '599247',
                  pageJsonId: '9704152',
                  compid: ['Description_055584'],
                },
                line_number: 6,
              },
              {
                type: 'sysSetVisible',
                dataId: 166383580833006460,
                options: {
                  compId: ['Table_994258'],
                  compName: 'page',
                  id: '1224404',
                  pageJsonId: '9704152',
                  compid: ['Table_994258'],
                  visible: 'true',
                },
                line_number: 7,
              },
            ],
          },
          {
            type: 'ifelse',
            condition: [
              {
                condId: '645717',
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$reply_3591.resultData.groupType$',
                  operate: '==',
                  manualValue: '3000',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
              {
                options: {
                  context: '$reply_3591.resultData.groupType$',
                  operate: 'empty',
                },
                condId: '4318267',
                connector: '||',
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 166383580833083520,
            elseIfs: [],
            line_number: 8,
            callback1: [
              {
                type: 'sysSetVisible',
                dataId: 166383580833026430,
                options: {
                  compId: ['Card_5914895'],
                  compName: 'page',
                  id: '5775727',
                  pageJsonId: '9704152',
                  compid: ['Card_5914895'],
                },
                line_number: 9,
              },
            ],
          },
          {
            type: 'setDataSource',
            dataId: 166383580833066750,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '462259',
              pageJsonId: '9704152',
              dataSourceId: 166029173018920830,
              dataSourceName: 'pageParam',
              dataSourceRelType: 'custom',
              dataSourceReloadFilter: [],
              dataSourceSetValue: [
                {
                  attrId: '045638',
                  code: 'tacheCode',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static', value: 'CreateOrder' },
                },
                {
                  attrId: '248702',
                  code: 'childProper',
                  name: '属性',
                  type: 'objectArray',
                  initialData: { type: 'static' },
                  children: [
                    {
                      attrId: '264439',
                      code: 'url',
                      name: '路径',
                      type: 'string',
                      initialData: { type: 'static' },
                      parentCode: 'childProper',
                      parentKey: 'childProper',
                    },
                    {
                      attrId: '51947094',
                      code: 'itemList',
                      name: '子节点参数',
                      type: 'object',
                      initialData: { type: 'static' },
                      parentCode: 'childProper',
                      parentKey: 'childProper',
                    },
                  ],
                },
                {
                  attrId: '033692',
                  code: 'flowCode',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static', value: '' },
                },
                {
                  attrId: '978967',
                  code: 'groupType',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['customize'],
                    code: '$reply_3591.resultData.col7$',
                  },
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
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest30.params =
      [
        {
          title: '事件入参',
          name: 'options_098498',
          value: '$options_098498$',
        },
      ] || [];
    CMDGenerator(eventDataapiRequest30, { options_098498 }, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    getFactor,
    auditClassCalcul,
    initInput,
    judgeGroup,
  }));

  useEffect(() => {
    // console 167893658690861470
    console.log('==================审批单提交==========');
    // console 169664593198431170
    console.log(data?.ordersSubmit);
    // console 167893660879659940
    console.log('urlParam', urlParam);
    const eventDatacustomActionCode233: any = [
      {
        type: 'customActionCode',
        dataId: 166322284149226560,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '90083',
          pageJsonId: '9704152',
          code: 'function main(data,state,success,fail){var footer=document.querySelector(".View_View_938709");footer.style.left="".concat(footer.parentNode.getBoundingClientRect().x,"px");footer.style.right="0px"};',
        },
        line_number: 4,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacustomActionCode233.params = [] || [];
    CMDGenerator(eventDatacustomActionCode233, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });
    const eventDatacustomActionCode234: any = [
      {
        type: 'customActionCode',
        dataId: 166261723332970270,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '33434',
          pageJsonId: '9704152',
          code: 'function main(data,state,success,fail){var coding=urlParam.instNbr;if(coding!=null&&coding!=undefined){var ordersSubmit=window.localStorage.getItem(coding);console.log("===\\u5BA1\\u6279\\u5355\\u63D0\\u4EA4",ordersSubmit);if(ordersSubmit!=null&&ordersSubmit!=undefined){console.log("\\u5BA1\\u6279\\u5355\\u63D0\\u4EA4-data.ordersSubmit-before",data.ordersSubmit);data.ordersSubmit=JSON.parse(ordersSubmit);console.log("\\u5BA1\\u6279\\u5355\\u63D0\\u4EA4-data.ordersSubmit",data.ordersSubmit);success();return}}fail()};',
          actionTitle: '',
        },
        line_number: 5,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 166261723332940030,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '474806',
              pageJsonId: '9704152',
              code: 'function main(data,state,success,fail){var customerListResp=data.ordersSubmit.svcCont.data.content.customerList;var customerList=[];for(var i=0;i<customerListResp.length;i++){customerList.push({"groupId":customerListResp[i].custId,"groupName":customerListResp[i].custName,"valueLevel":customerListResp[i].custValueLevel,"valueLevelName":customerListResp[i].custValueLevelName,"orgTypeName":customerListResp[i].custOrgName,"orgType":customerListResp[i].custOrg,"managerName":customerListResp[i].custManageName,"managerId":customerListResp[i].custManageStaff,"managerContactTel":customerListResp[i].custManagerTel,"homeCityName":customerListResp[i].custLanName,"homeCounty":customerListResp[i].custAreaId,"tradeclassTopName":customerListResp[i].custIndustryTypeName,"address":customerListResp[i].custAddress,"homeCountyName":customerListResp[i].custAreaName,"tradeclassTop":customerListResp[i].custIndustryType,"homeCity":customerListResp[i].custLanId,"contactTel":customerListResp[i].contactTel,"enterpriseKind":customerListResp[i].enterpriseKind,"enterpriseKindName":customerListResp[i].enterpriseKindName,"groupCreditLevel":customerListResp[i].groupCreditLevel,"managerCreditRisk":customerListResp[i].managerCreditRisk})}var childProper=[];var urlResp=data.ordersSubmit.svcCont.data.content.itemList;for(var i=0;i<urlResp.length;i++){childProper.push({"url":urlResp[i].childCatalogCode,"catalogCode":urlResp[i].childCatalogCode,"itemList":urlResp[i]})}data.pageParam.childProper=childProper;data.fileInfoList=data.ordersSubmit.svcCont.data.content.fileInfo;data.groupObjList=customerList;if(customerList.length>0){data.groupObj=customerList[0]}data.draft_message=data.ordersSubmit.svcCont.operator;data.draft_message.addr=data.draft_message.lanId+data.draft_message.areaId;data.draft_message.staffInfo=data.draft_message.staffName+"("+data.draft_message.staffCode+")";success(childProper)};',
              actionTitle: '客户信息转换、子场景路径设置',
            },
            line_number: 6,
            callback1: [
              {
                type: 'console',
                dataId: 169664416242968030,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '336065',
                  pageJsonId: '9704152',
                  value: ['childProper = ', '$data_474806$'],
                },
                line_number: 7,
              },
              {
                type: 'setDataSource',
                dataId: 166261723332928030,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '2921225',
                  pageJsonId: '9704152',
                  dataSourceId: 166029173018920830,
                  dataSourceName: 'pageParam',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '045638',
                      code: 'tacheCode',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static', value: 'CreateOrder' },
                    },
                    {
                      attrId: '248702',
                      code: 'childProper',
                      name: '属性',
                      type: 'objectArray',
                      initialData: { type: 'static' },
                      children: [
                        {
                          attrId: '264439',
                          code: 'url',
                          name: '路径',
                          type: 'string',
                          initialData: { type: 'static' },
                          parentCode: 'childProper',
                          parentKey: 'childProper',
                        },
                        {
                          attrId: '51947094',
                          code: 'itemList',
                          name: '子节点参数',
                          type: 'object',
                          initialData: { type: 'static' },
                          parentCode: 'childProper',
                          parentKey: 'childProper',
                        },
                        {
                          attrId: '179435',
                          code: 'catalogCode',
                          name: '场景编码',
                          type: 'string',
                          initialData: { type: 'static' },
                          parentCode: 'childProper',
                          parentKey: 'childProper',
                        },
                      ],
                      value: { type: ['context', '$data_474806$'], code: '' },
                    },
                    {
                      attrId: '033692',
                      code: 'flowCode',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static', value: '' },
                    },
                    {
                      attrId: '978967',
                      code: 'groupType',
                      name: '属性',
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
                    type: 'callSelfFunc',
                    dataId: 166261723332900220,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '238251',
                      pageJsonId: '9704152',
                      customFuncName: 'initInput',
                      customFuncParams: 'object',
                      paramsObj: {
                        auditDesc:
                          '$data.ordersSubmit.svcCont.data.content.approveInfo.applyInfo$',
                        approveGradeName:
                          '$data.ordersSubmit.svcCont.data.content.approveInfo.approveGradeName$',
                        title: '$data.ordersSubmit.svcCont.data.title$',
                        coding: '$data.ordersSubmit.svcCont.data.orderNbr$',
                      },
                      paramsObjKeyValueMap: {
                        auditDesc:
                          '$data.ordersSubmit.svcCont.data.content.approveInfo.applyInfo$',
                        approveGradeName:
                          '$data.ordersSubmit.svcCont.data.content.approveInfo.approveGradeName$',
                        title: '$data.ordersSubmit.svcCont.data.title$',
                        coding: '$data.ordersSubmit.svcCont.data.orderNbr$',
                      },
                    },
                    line_number: 9,
                    callback1: [],
                    callback2: [],
                  },
                  {
                    type: 'callSelfFunc',
                    dataId: 166383589417634200,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '659571',
                      pageJsonId: '9704152',
                      customFuncName: 'judgeGroup',
                      customFuncParams: 'object',
                      paramsObj: { catalogCode: '$data_474806[0].url$' },
                      paramsObjKeyValueMap: {
                        catalogCode: '$data_474806[0].url$',
                      },
                    },
                    line_number: 10,
                    callback1: [],
                    callback2: [],
                  },
                  {
                    type: 'customActionCode',
                    dataId: 170589168199386600,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '602162',
                      pageJsonId: '9704152',
                      code: 'function main(data,state,success,fail){var _data$ordersSubmit;var svcCont=data===null||data===void 0?void 0:(_data$ordersSubmit=data.ordersSubmit)===null||_data$ordersSubmit===void 0?void 0:_data$ordersSubmit.svcCont;success(svcCont)};',
                      actionTitle: '获取流程流转参数',
                    },
                    line_number: 11,
                    callback1: [
                      {
                        type: 'apiRequest',
                        dataId: 170589168199459000,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '634409',
                          pageJsonId: '9704152',
                          sync: false,
                          actionTitle: '',
                          method: 'post',
                          url: '/app/rhin/gateway/callRhinEngine',
                          _capabilityCode: 'extractFlowAssociationParams',
                          _apiCode: 'extractFlowAssociationParams',
                          _source: 'rhin',
                          _sourceName: '提取流程流转参数-hyj',
                          _serviceId: '1065566140853374976',
                          _serviceTitle:
                            '提取流程流转参数-hyj: extractFlowAssociationParams',
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
                                  dataKey: '47811_root.header',
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
                                  dataKey: '47811_root.path',
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
                                  dataKey: '47811_root.query',
                                },
                                {
                                  code: 'body',
                                  name: '请求体',
                                  attrType: 'object',
                                  children: [
                                    {
                                      code: 'svcCont',
                                      name: '新增节点',
                                      attrType: 'object',
                                      _id: 'root.body.svcCont',
                                      compType: 'Input',
                                      parents: ['root', 'body'],
                                      parentType: 'object',
                                      parentKey: '0-3',
                                      key: '0-3-0',
                                      id: 'root.body.svcCont',
                                      dataKey: '47811_root.body.svcCont',
                                      value: {
                                        type: ['context', '$data_602162$'],
                                        code: '',
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
                                  dataKey: '47811_root.body',
                                },
                              ],
                              _id: 'root',
                              compType: 'Input',
                              isRoot: true,
                              parents: [],
                              key: '0',
                              id: 'root',
                              dataKey: '47811_root',
                            },
                          ],
                        },
                        line_number: 12,
                        callback1: [
                          {
                            type: 'setDataSource',
                            dataId: 170589168199475200,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '368312',
                              pageJsonId: '9704152',
                              dataSourceId: 170384074716075550,
                              dataSourceName: 'pageData',
                              dataSourceRelType: 'custom',
                              dataSourceSetValue: [
                                {
                                  attrId: '5855845',
                                  code: 'flowAssociationParams',
                                  name: '流程流转需要的参数',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                  value: {
                                    type: [
                                      'context',
                                      '$reply_634409?.resultData$',
                                    ],
                                    hideAttr: true,
                                    code: '',
                                  },
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
                        ],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ],
                callback2: [],
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '7442626',
                    options: {
                      context: '$data.fileInfoList$',
                      operate: 'empty',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166972483509932640,
                elseIfs: [],
                line_number: 14,
                callback1: [
                  {
                    type: 'sysSetVisible',
                    dataId: 166972485162673950,
                    options: {
                      compId: ['Table_035381'],
                      compName: 'page',
                      id: '245879',
                      pageJsonId: '9704152',
                      visible: '',
                      compid: ['Table_035381'],
                    },
                    line_number: 15,
                  },
                ],
              },
            ],
            callback2: [],
          },
        ],
        callback2: [
          {
            type: 'apiRequest',
            dataId: 166261726694365660,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '193408',
              pageJsonId: '9704152',
              sync: false,
              method: 'post',
              url: '/app/rhin/gateway/callRhinEngine',
              _capabilityCode: 'auditOrderDistail',
              _apiCode: 'auditOrderDistail',
              _source: 'rhin',
              _serviceId: '879342105577734144',
              _serviceTitle: '审批单详情-hdb: auditOrderDistail',
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
                  dataKey: '424703_header',
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
                  dataKey: '424703_path',
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
                  dataKey: '424703_query',
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
                      code: 'instNbr',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.instNbr',
                      compType: 'Input',
                      name: 'instNbr',
                      parents: ['root', 'body'],
                      id: 'body.instNbr',
                      dataKey: '424703_body.instNbr',
                      value: {
                        type: ['context', '$urlParam.instNbr$'],
                        code: '',
                      },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-0',
                    },
                    {
                      code: 'instId',
                      name: '新增节点',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'body.instId',
                      compType: 'Input',
                      parents: ['root', 'body'],
                      id: 'body.instId',
                      dataKey: '424703_body.instId',
                      value: {
                        type: ['context', '$urlParam.instId$'],
                        code: '',
                      },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                    },
                  ],
                  _id: 'body',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'body',
                  dataKey: '424703_body',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-3',
                },
              ],
              _sourceName: '审批单详情-hdb',
            },
            line_number: 16,
            callback1: [
              {
                type: 'console',
                dataId: 168982274151736300,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '888999',
                  pageJsonId: '9704152',
                  value: ['$reply_193408$', '===$reply_193408$'],
                },
                line_number: 17,
              },
              {
                type: 'customActionCode',
                dataId: 166261726694316000,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '623131',
                  pageJsonId: '9704152',
                  code: 'function main(data,state,success,fail){var _reply_;data.ordersSubmit=JSON.parse((_reply_=reply_193408)===null||_reply_===void 0?void 0:_reply_.resultData);var customerListResp=data.ordersSubmit.svcCont.data.content.customerList;var customerList=[];for(var i=0;i<customerListResp.length;i++){customerList.push({"groupId":customerListResp[i].custId,"groupName":customerListResp[i].custName,"valueLevel":customerListResp[i].custValueLevel,"valueLevelName":customerListResp[i].custValueLevelName,"orgTypeName":customerListResp[i].custOrgName,"orgType":customerListResp[i].custOrg,"managerName":customerListResp[i].custManageName,"managerId":customerListResp[i].custManageStaff,"manageContactTel":customerListResp[i].custManagerTel,"homeCityName":customerListResp[i].custLanName,"homeCounty":customerListResp[i].custAreaId,"tradeclassTopName":customerListResp[i].custIndustryTypeName,"address":customerListResp[i].custAddress,"homeCountyName":customerListResp[i].custAreaName,"tradeclassTop":customerListResp[i].custIndustryType,"homeCity":customerListResp[i].custLanId,"contactTel":customerListResp[i].contactTel,"enterpriseKind":customerListResp[i].enterpriseKind,"enterpriseKindName":customerListResp[i].enterpriseKindName})}var url=[];var childProper=[];var urlResp=data.ordersSubmit.svcCont.data.content.itemList;for(var i=0;i<urlResp.length;i++){url.push(urlResp[i].childCatalogCode);childProper.push({"url":urlResp[i].sceneUrl,"itemList":urlResp[i],"catalogCode":urlResp[i].childCatalogCode})}data.ordersSubmit=data.ordersSubmit;data.pageParam.childProper=childProper;data.pageParam.flowCode=data.ordersSubmit.svcCont.data.content.flowInfo.flowCode;data.fileInfoList=data.ordersSubmit.svcCont.data.content.fileInfo;data.groupObjList=customerList;if(customerList.length>0){data.groupObj=customerList[0]}data.draft_message=data.ordersSubmit.svcCont.operator;data.draft_message.addr=data.draft_message.lanId+data.draft_message.areaId;data.draft_message.staffInfo=data.draft_message.staffName+"("+data.draft_message.staffCode+")";success(childProper)};',
                  actionTitle: '客户信息转换、子场景路径设置',
                },
                line_number: 18,
                callback1: [
                  {
                    type: 'setDataSource',
                    dataId: 166261726694344160,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '426326',
                      pageJsonId: '9704152',
                      dataSourceId: 166029173018920830,
                      dataSourceName: 'pageParam',
                      dataSourceRelType: 'custom',
                      dataSourceReloadFilter: [],
                      dataSourceSetValue: [
                        {
                          attrId: '045638',
                          code: 'tacheCode',
                          name: '属性',
                          type: 'string',
                          initialData: { type: 'static', value: 'CreateOrder' },
                        },
                        {
                          attrId: '248702',
                          code: 'childProper',
                          name: '属性',
                          type: 'objectArray',
                          initialData: { type: 'static' },
                          children: [
                            {
                              attrId: '264439',
                              code: 'url',
                              name: '路径',
                              type: 'string',
                              initialData: { type: 'static' },
                              parentCode: 'childProper',
                              parentKey: 'childProper',
                            },
                            {
                              attrId: '51947094',
                              code: 'itemList',
                              name: '子节点参数',
                              type: 'object',
                              initialData: { type: 'static' },
                              parentCode: 'childProper',
                              parentKey: 'childProper',
                            },
                          ],
                          value: {
                            type: ['context', '$data_623131$'],
                            code: '',
                          },
                        },
                        {
                          attrId: '033692',
                          code: 'flowCode',
                          name: '属性',
                          type: 'string',
                          initialData: { type: 'static', value: '' },
                          value: {
                            type: ['customize'],
                            code: '$reply_193408?.resultData.svcCont.data.content.flowInfo.flowCode$',
                          },
                        },
                        {
                          attrId: '978967',
                          code: 'groupType',
                          name: '属性',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                      ],
                      operateType: 1,
                      onlySetPatch: true,
                      otherObjectArrayOptions: {},
                    },
                    line_number: 19,
                    callback1: [],
                    callback2: [],
                  },
                  {
                    type: 'callSelfFunc',
                    dataId: 166383634976299520,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '0299914',
                      pageJsonId: '9704152',
                      customFuncName: 'judgeGroup',
                      customFuncParams: 'object',
                      paramsObj: { catalogCode: '$data_623131[0].url$' },
                      paramsObjKeyValueMap: {
                        catalogCode: '$data_623131[0].url$',
                      },
                    },
                    line_number: 20,
                    callback1: [],
                    callback2: [],
                  },
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '8193525',
                        options: { context: '$data_623131$', operate: 'empty' },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 166972486846671040,
                    elseIfs: [],
                    line_number: 21,
                    callback1: [
                      {
                        type: 'sysSetVisible',
                        dataId: 166972488197430430,
                        options: {
                          compId: ['Table_035381'],
                          compName: 'page',
                          id: '8203147',
                          pageJsonId: '9704152',
                          visible: '',
                          compid: ['Table_035381'],
                        },
                        line_number: 22,
                      },
                    ],
                  },
                  {
                    type: 'customActionCode',
                    dataId: 170589168624065800,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '1418316',
                      pageJsonId: '9704152',
                      code: 'function main(data,state,success,fail){var _data$ordersSubmit;var svcCont=data===null||data===void 0?void 0:(_data$ordersSubmit=data.ordersSubmit)===null||_data$ordersSubmit===void 0?void 0:_data$ordersSubmit.svcCont;success(svcCont)};',
                      actionTitle: '获取流程流转参数',
                    },
                    line_number: 23,
                    callback1: [
                      {
                        type: 'apiRequest',
                        dataId: 170589168624033630,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '04718338',
                          pageJsonId: '9704152',
                          sync: false,
                          actionTitle: '',
                          method: 'post',
                          url: '/app/rhin/gateway/callRhinEngine',
                          _capabilityCode: 'extractFlowAssociationParams',
                          _apiCode: 'extractFlowAssociationParams',
                          _source: 'rhin',
                          _sourceName: '提取流程流转参数-hyj',
                          _serviceId: '1065566140853374976',
                          _serviceTitle:
                            '提取流程流转参数-hyj: extractFlowAssociationParams',
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
                                  dataKey: '47811_root.header',
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
                                  dataKey: '47811_root.path',
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
                                  dataKey: '47811_root.query',
                                },
                                {
                                  code: 'body',
                                  name: '请求体',
                                  attrType: 'object',
                                  children: [
                                    {
                                      code: 'svcCont',
                                      name: '新增节点',
                                      attrType: 'object',
                                      _id: 'root.body.svcCont',
                                      compType: 'Input',
                                      parents: ['root', 'body'],
                                      parentType: 'object',
                                      parentKey: '0-3',
                                      key: '0-3-0',
                                      id: 'root.body.svcCont',
                                      dataKey: '47811_root.body.svcCont',
                                      value: {
                                        type: ['context', '$data_1418316$'],
                                        code: '',
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
                                  dataKey: '47811_root.body',
                                },
                              ],
                              _id: 'root',
                              compType: 'Input',
                              isRoot: true,
                              parents: [],
                              key: '0',
                              id: 'root',
                              dataKey: '47811_root',
                            },
                          ],
                        },
                        line_number: 24,
                        callback1: [
                          {
                            type: 'setDataSource',
                            dataId: 170589168624087580,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '9370796',
                              pageJsonId: '9704152',
                              dataSourceId: 170384074716075550,
                              dataSourceName: 'pageData',
                              dataSourceRelType: 'custom',
                              dataSourceSetValue: [
                                {
                                  attrId: '5855845',
                                  code: 'flowAssociationParams',
                                  name: '流程流转需要的参数',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                  value: {
                                    type: [
                                      'context',
                                      '$reply_04718338?.resultData$',
                                    ],
                                    hideAttr: true,
                                    code: '',
                                  },
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
                        ],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ],
                callback2: [],
              },
              {
                type: 'callSelfFunc',
                dataId: 166261726694319300,
                options: {
                  compId: 'callSelfFunc',
                  compName: 'system',
                  id: '645719',
                  pageJsonId: '9704152',
                  customFuncName: 'initInput',
                  customFuncParams: 'object',
                  paramsObj: {
                    title:
                      '$JSON.parse(reply_193408?.resultData).svcCont.data.title$',
                    approveGradeName:
                      '$JSON.parse(reply_193408?.resultData).svcCont.data.content.approveInfo.approveGradeName$',
                    auditDesc:
                      '$JSON.parse(reply_193408?.resultData).svcCont.data.content.approveInfo.applyInfo$',
                    coding:
                      '$JSON.parse(reply_193408?.resultData).svcCont.data.orderNbr$',
                  },
                  paramsObjKeyValueMap: {
                    title:
                      '$JSON.parse(reply_193408?.resultData).svcCont.data.title$',
                    approveGradeName:
                      '$JSON.parse(reply_193408?.resultData).svcCont.data.content.approveInfo.approveGradeName$',
                    auditDesc:
                      '$JSON.parse(reply_193408?.resultData).svcCont.data.content.approveInfo.applyInfo$',
                    coding:
                      '$JSON.parse(reply_193408?.resultData).svcCont.data.orderNbr$',
                  },
                },
                line_number: 26,
                callback1: [],
                callback2: [],
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDatacustomActionCode234.params = [] || [];
    CMDGenerator(eventDatacustomActionCode234, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });
    const eventDatasetDisable44: any = [
      {
        type: 'setDisable',
        dataId: 166260747058551940,
        options: {
          compId: 'Input_014189',
          compLib: 'comm',
          pageJsonId: '9704152',
          compName: 'Input',
          id: '28672',
          disabled: 'true',
        },
        line_number: 27,
      },
    ];
    eventDatasetDisable44.params = [] || [];
    CMDGenerator(eventDatasetDisable44, {}, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDatasetDisable45: any = [
      {
        type: 'setDisable',
        dataId: 166261774875943650,
        options: {
          compId: 'Input_32550878',
          compLib: 'comm',
          pageJsonId: '9704152',
          compName: 'Input',
          id: '681446',
          disabled: 'true',
        },
        line_number: 28,
      },
    ];
    eventDatasetDisable45.params = [] || [];
    CMDGenerator(eventDatasetDisable45, {}, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDatasetDisable46: any = [
      {
        type: 'setDisable',
        dataId: 166261775771212800,
        options: {
          compId: ['QuillEditor_637236'],
          compLib: 'comm',
          pageJsonId: '9704152',
          compName: 'QuillEditor',
          id: '12673',
          disabled: 'true',
          compid: ['QuillEditor_637236'],
        },
        line_number: 29,
      },
    ];
    eventDatasetDisable46.params = [] || [];
    CMDGenerator(eventDatasetDisable46, {}, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDataifelse110: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '020923',
            options: {
              useManual: true,
              useObject: false,
              context: '$urlParam.scene$',
              operate: '==',
              manualValue: 'U',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 166261787491183200,
        elseIfs: [],
        line_number: 30,
        callback1: [
          {
            type: 'setVisible',
            dataId: 166261789802432220,
            options: {
              compId: 'Button_8796906_85186',
              compLib: 'comm',
              pageJsonId: '9704152',
              compName: 'Button',
              id: '9738955',
              visible: 'true',
            },
            line_number: 31,
          },
        ],
      },
    ];
    eventDataifelse110.params = [] || [];
    CMDGenerator(eventDataifelse110, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDataifelse111: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '278625',
            options: {
              useManual: true,
              useObject: false,
              context: '$urlParam.scene$',
              operate: '==',
              manualValue: 'V',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 166270225775244100,
        elseIfs: [],
        line_number: 32,
        callback1: [
          {
            type: 'sysSetVisible',
            dataId: 166270228236010780,
            options: {
              compId: [
                'Button_0567358',
                'Button_2061707_637045_014961_038089',
                'Button_2061707_637045_014961',
              ],
              compName: 'page',
              id: '205099',
              pageJsonId: '9704152',
              compid: [
                'Button_0567358',
                'Button_2061707_637045_014961_038089',
                'Button_2061707_637045_014961',
              ],
            },
            line_number: 33,
          },
          {
            type: 'setVisible',
            dataId: 166270230196882200,
            options: {
              compId: 'Button_8796906_85186',
              compLib: 'comm',
              pageJsonId: '9704152',
              compName: 'Button',
              id: '3160968',
              visible: 'true',
            },
            line_number: 34,
          },
        ],
      },
    ];
    eventDataifelse111.params = [] || [];
    CMDGenerator(eventDataifelse111, {}, 'ifelse', {
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
      className="__CustomClass_9704152__"
    >
      <View
        name={'页面'}
        className={'fixed-form-item-label-width-120'}
        backgroundType={{ type: 'cleanColor', color: '#f2f3f5' }}
        $$componentItem={{
          id: 'View_9704152_1',
          uid: 'View_9704152_1',
          type: 'View',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
        style={{
          minHeight: '100%',
          display: 'flex',
          padding: '0px 0px 0px 0px',
          flexDirection: 'column',
          overflowY: 'auto',
          width: 'auto',
        }}
        ref={(r: any) => (refs['View_9704152_1'] = r)}
        {...injectData}
      >
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_183103',
            uid: 'View_183103',
            type: 'View',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '8px 0px 8px 0px',
            width: '100%',
            textAlign: 'center',
            margin: '0px 0px 0px 0px',
            position: 'relative',
          }}
          ref={(r: any) => (refs['View_183103'] = r)}
          {...injectData}
        >
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_2218655',
              uid: 'View_2218655',
              type: 'View',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              display: 'block',
              flexDirection: 'column',
              padding: '0px 8px 0px 0px',
              width: '100%',
              textAlign: 'right',
              margin: 0,
              position: 'absolute',
              background: 'transparent',
              right: '4px',
              top: '12px',
            }}
            ref={(r: any) => (refs['View_2218655'] = r)}
            {...injectData}
          >
            <Text
              name={'编号'}
              content={'                                编号：'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              formItemIndex={4}
              $$componentItem={{
                id: 'Text_331457',
                uid: 'Text_331457',
                type: 'Text',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                fontSize: 16,
                lineHeight: '24px',
                color: 'rgba(50, 137, 249, 1)',
                textAlign: 'right',
              }}
              ref={(r: any) => (refs['Text_331457'] = r)}
              {...injectData}
            />
            <Text
              name={'文本'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              formItemIndex={5}
              $$componentItem={{
                id: 'Text_331457_850218',
                uid: 'Text_331457_850218',
                type: 'Text',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ fontSize: 18, lineHeight: '24px', color: '#3289f9' }}
              ref={(r: any) => (refs['Text_331457_850218'] = r)}
              {...injectData}
            />
          </View>
          <Text
            name={'title'}
            content={'审批单详情'}
            textType={'h1'}
            version={'1.0'}
            showHtml={false}
            $$componentItem={{
              id: 'Text_728821',
              uid: 'Text_728821',
              type: 'Text',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              fontSize: 26,
              lineHeight: '24px',
              color: '#1c242e',
              textAlign: 'center',
              fontWeight: '',
              letterSpacing: '',
            }}
            ref={(r: any) => (refs['Text_728821'] = r)}
            {...injectData}
          />
        </View>
        <Card
          name={'卡片'}
          cardIconType={'middle'}
          title={'起草人信息'}
          bordered={true}
          size={'default'}
          hasHeader={true}
          hasIcon={true}
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
            id: 'Card_886999',
            uid: 'Card_886999',
            type: 'Card',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            padding: '20px 20px 20px 20px',
            overflowY: 'visible',
            margin: '0px 0px 0px 0px',
            'margin-bottom': '2.5px',
          }}
          ref={(r: any) => (refs['Card_886999'] = r)}
          {...injectData}
        >
          <Description
            name={'描述列表'}
            columns={[
              {
                title: '起草人信息',
                key: 'staffInfo',
                dataIndex: 'staffInfo',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '起草人信息',
                      attrId: '904922239730925569',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                label: '起草人',
                id: '2520778',
                customRendering: undefined,
              },
              {
                title: '申请时间',
                key: 'applyTime',
                dataIndex: 'applyTime',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '申请时间',
                      attrId: '874528506746351618',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                label: '申请时间',
                id: '0506732',
                customRendering: undefined,
              },
              {
                title: '电话',
                key: 'staffTel',
                dataIndex: 'staffTel',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '电话',
                      attrId: '874528506746351620',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                label: '电话',
                id: '056972437',
                customRendering: undefined,
              },
              {
                title: '地址',
                key: 'addr',
                dataIndex: 'addr',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '地址',
                      attrId: '904922239730925568',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                label: '归属区域',
                id: '108729',
                customRendering: undefined,
              },
              {
                title: '起草部门',
                key: 'staffOrg',
                dataIndex: 'staffOrg',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '起草部门',
                      attrId: '874528506746351617',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                label: '起草部门',
                id: '5301713',
                span: 16,
                customRendering: undefined,
              },
            ]}
            bordered={true}
            labelWidth={undefined}
            colSpan={8}
            colon={true}
            labelAlign={'left'}
            dataSource={data?.draft_message}
            descColumns={[
              {
                title: '起草人信息',
                key: 'staffInfo',
                dataIndex: 'staffInfo',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '起草人信息',
                      attrId: '904922239730925569',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                label: '起草人',
                id: '2520778',
              },
              {
                title: '申请时间',
                key: 'applyTime',
                dataIndex: 'applyTime',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '申请时间',
                      attrId: '874528506746351618',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                label: '申请时间',
                id: '0506732',
              },
              {
                title: '电话',
                key: 'staffTel',
                dataIndex: 'staffTel',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '电话',
                      attrId: '874528506746351620',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                label: '电话',
                id: '056972437',
              },
              {
                title: '地址',
                key: 'addr',
                dataIndex: 'addr',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '地址',
                      attrId: '904922239730925568',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                label: '归属区域',
                id: '108729',
              },
              {
                title: '起草部门',
                key: 'staffOrg',
                dataIndex: 'staffOrg',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '起草部门',
                      attrId: '874528506746351617',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                label: '起草部门',
                id: '5301713',
                span: 16,
              },
            ]}
            labelSize={'120px'}
            $$componentItem={{
              id: 'Description_61586',
              uid: 'Description_61586',
              type: 'Description',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            ref={(r: any) => (refs['Description_61586'] = r)}
            {...injectData}
          />
        </Card>
        <Card
          name={'卡片'}
          cardIconType={'middle'}
          title={'集团信息'}
          bordered={true}
          size={'default'}
          hasHeader={true}
          hasIcon={true}
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
            id: 'Card_5914895',
            uid: 'Card_5914895',
            type: 'Card',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            padding: '20px 20px 20px 20px',
            overflowY: 'visible',
            margin: '0px 0px 0px 0px',
            'margin-bottom': '2.5px',
          }}
          ref={(r: any) => (refs['Card_5914895'] = r)}
          {...injectData}
        >
          <Table
            name={'表格'}
            isFlexColumn={false}
            pageSize={5}
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
                title: '集团编码',
                key: 'groupId',
                dataIndex: 'groupId',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '集团编码',
                      attrId: '899594855889211392',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                className: '',
                id: '892151',
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
                      attrId: '899594855889211393',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                className: 'divider',
                id: '998457',
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
                title: '集团价值等级',
                key: 'valueLevelName',
                dataIndex: 'valueLevelName',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '集团价值等级名称',
                      attrId: '899594855889211405',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                className: 'divider',
                id: '983312',
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
                id: '410968',
                title: '集团客户信用等级',
                dataIndex: 'groupCreditLevel',
                key: '410968',
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
                id: '60281687',
                title: '集团客户经理信用等级',
                dataIndex: 'managerCreditRisk',
                key: '60281687',
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
                title: '企业类型',
                key: 'enterpriseKindName',
                dataIndex: 'enterpriseKindName',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '企业类型名称',
                      attrId: '904662320488783873',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                id: '780903',
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
                title: '看管人员',
                key: 'managerName',
                dataIndex: 'managerName',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '客户经理姓名',
                      attrId: '899594855889211396',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                className: 'divider',
                id: '931328',
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
                title: '看管人工号',
                key: 'managerId',
                dataIndex: 'managerId',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '客户经理工号',
                      attrId: '904568273973772288',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                className: 'divider',
                id: '7608858',
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
                title: '看管人电话',
                key: 'managerContactTel',
                dataIndex: 'managerContactTel',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '客户经理电话',
                      attrId: '899594855889211397',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                className: 'divider',
                id: '882037',
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
                title: '行业类型',
                key: 'tradeclassTopName',
                dataIndex: 'tradeclassTopName',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '行业大类名称',
                      attrId: '899594855889211409',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                className: 'divider',
                id: '421434',
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
            selectType={0}
            bordered={'segmentation'}
            size={'middle'}
            fixedAction={false}
            showHead={false}
            showTotal={true}
            showSizeChanger={false}
            showQuickJumper={false}
            pageSizeOptions={'[5,10,20]'}
            rowKey={'id'}
            dataSource={data?.groupObjList}
            dataSourceFromDataSourceConfig={'data.groupObjList'}
            $$componentItem={{
              id: 'Table_994258',
              uid: 'Table_994258',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            rowSelection={undefined}
            style={{ margin: '10px 0px 0px 0px' }}
            ref={(r: any) => (refs['Table_994258'] = r)}
            {...injectData}
          />
          <Description
            name={'描述列表'}
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
                      attrId: '899594855889211392',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                label: '集团编码',
                id: '372729',
                customRendering: undefined,
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
                      attrId: '899594855889211393',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                label: '集团名称',
                id: '3741556',
                customRendering: undefined,
              },
              {
                title: '集团价值等级名称',
                key: 'valueLevelName',
                dataIndex: 'valueLevelName',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '集团价值等级名称',
                      attrId: '899594855889211405',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                label: '集团价值等级',
                id: '2177162',
                customRendering: undefined,
              },
              {
                title: '企业类型名称',
                key: 'enterpriseKindName',
                dataIndex: 'enterpriseKindName',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '企业类型名称',
                      attrId: '904662320488783873',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                label: '企业类型',
                id: '642932',
                customRendering: undefined,
              },
              {
                title: '客户经理姓名',
                key: 'managerName',
                dataIndex: 'managerName',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '客户经理姓名',
                      attrId: '899594855889211396',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                label: '看管人员',
                id: '813319',
                customRendering: undefined,
              },
              {
                title: '客户经理工号',
                key: 'managerId',
                dataIndex: 'managerId',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '客户经理工号',
                      attrId: '904568273973772288',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                label: '看管人工号',
                id: '8324273',
                customRendering: undefined,
              },
              {
                title: '客户经理电话',
                key: 'managerContactTel',
                dataIndex: 'managerContactTel',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '客户经理电话',
                      attrId: '899594855889211397',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                label: '看管人电话',
                id: '217764',
                customRendering: undefined,
              },
              {
                title: '行业大类名称',
                key: 'tradeclassTopName',
                dataIndex: 'tradeclassTopName',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '行业大类名称',
                      attrId: '899594855889211409',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                label: '行业类型',
                id: '7482593',
                customRendering: undefined,
              },
              {
                title: '集团客户信用等级',
                key: 'groupCreditLevel',
                dataIndex: 'groupCreditLevel',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '集团客户信用等级',
                      attrId: '1050015436441317402',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                label: '集团客户信用等级',
                id: '862405',
                customRendering: undefined,
              },
              {
                title: '集团客户经理信用等级',
                key: 'managerCreditRisk',
                dataIndex: 'managerCreditRisk',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '集团客户经理信用等级',
                      attrId: '1050015436441317403',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                label: '集团客户经理信用等级',
                id: '0347647',
                customRendering: undefined,
              },
            ]}
            bordered={true}
            labelWidth={undefined}
            colSpan={8}
            colon={true}
            labelAlign={'left'}
            dataSource={data?.groupObj}
            descColumns={[
              {
                title: '集团编码',
                key: 'groupId',
                dataIndex: 'groupId',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '集团编码',
                      attrId: '899594855889211392',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                label: '集团编码',
                id: '372729',
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
                      attrId: '899594855889211393',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                label: '集团名称',
                id: '3741556',
              },
              {
                title: '集团价值等级名称',
                key: 'valueLevelName',
                dataIndex: 'valueLevelName',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '集团价值等级名称',
                      attrId: '899594855889211405',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                label: '集团价值等级',
                id: '2177162',
              },
              {
                title: '企业类型名称',
                key: 'enterpriseKindName',
                dataIndex: 'enterpriseKindName',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '企业类型名称',
                      attrId: '904662320488783873',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                label: '企业类型',
                id: '642932',
              },
              {
                title: '客户经理姓名',
                key: 'managerName',
                dataIndex: 'managerName',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '客户经理姓名',
                      attrId: '899594855889211396',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                label: '看管人员',
                id: '813319',
              },
              {
                title: '客户经理工号',
                key: 'managerId',
                dataIndex: 'managerId',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '客户经理工号',
                      attrId: '904568273973772288',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                label: '看管人工号',
                id: '8324273',
              },
              {
                title: '客户经理电话',
                key: 'managerContactTel',
                dataIndex: 'managerContactTel',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '客户经理电话',
                      attrId: '899594855889211397',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                label: '看管人电话',
                id: '217764',
              },
              {
                title: '行业大类名称',
                key: 'tradeclassTopName',
                dataIndex: 'tradeclassTopName',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '行业大类名称',
                      attrId: '899594855889211409',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                label: '行业类型',
                id: '7482593',
              },
              {
                title: '集团客户信用等级',
                key: 'groupCreditLevel',
                dataIndex: 'groupCreditLevel',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '集团客户信用等级',
                      attrId: '1050015436441317402',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                label: '集团客户信用等级',
                id: '862405',
              },
              {
                title: '集团客户经理信用等级',
                key: 'managerCreditRisk',
                dataIndex: 'managerCreditRisk',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '集团客户经理信用等级',
                      attrId: '1050015436441317403',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                label: '集团客户经理信用等级',
                id: '0347647',
              },
            ]}
            labelSize={'120px'}
            $$componentItem={{
              id: 'Description_055584',
              uid: 'Description_055584',
              type: 'Description',
              ...componentItem,
            }}
            disabled={false}
            visible={false}
            readOnly={false}
            style={{ margin: '10px 0px 0px 0px' }}
            ref={(r: any) => (refs['Description_055584'] = r)}
            {...injectData}
          />
        </Card>
        <Card
          name={'卡片'}
          cardIconType={'middle'}
          title={'审批单信息'}
          bordered={true}
          size={'default'}
          hasHeader={true}
          hasIcon={true}
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
            id: 'Card_6571733',
            uid: 'Card_6571733',
            type: 'Card',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            padding: '20px 20px 20px 20px',
            overflowY: 'visible',
            margin: '0px 0px 12px 0px',
            'margin-bottom': '2.5px',
          }}
          ref={(r: any) => (refs['Card_6571733'] = r)}
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
            formCode={'Form_702034'}
            backgroundType={{
              type: 'cleanColor',
              color: 'rgba(255, 255, 255, 0)',
            }}
            $$componentItem={{
              id: 'Form_702034',
              uid: 'Form_702034',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px', margin: '0px 0px 0px 0px' }}
            ref={(r: any) => (refs['Form_702034'] = r)}
            {...injectData}
          >
            <Input
              name={'工单主题'}
              size={'default'}
              selfSpan={16}
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
              fieldName={'title'}
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
                id: 'Input_32550878',
                uid: 'Input_32550878',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_32550878'] = r)}
              {...injectData}
            />
          </Form>
          <GridView
            name={'属性'}
            itemKey={'item'}
            indexKey={'i'}
            pieceData={[]}
            defaultValue={[]}
            isChecked={false}
            isMultiple={false}
            columnNum={1}
            valueKey={'value'}
            span={24}
            vspace={16}
            hspace={16}
            isEditor={false}
            value={data?.pageParam?.childProper}
            fieldName={'data.scenePage.url'}
            gridData={data?.pageParam?.childProper}
            $$componentItem={{
              id: 'GridView_295504',
              uid: 'GridView_295504',
              type: 'GridView',
              ...componentItem,
            }}
            style={{ minHeight: 40 }}
            ref={(r: any) => (refs['GridView_295504'] = r)}
            {...injectData}
            getEngineApis={() => {
              return {
                ...injectData.getEngineApis(),
                MemoRenderer: {
                  renderer: null,
                  MemoLoopItem: (props: any) => {
                    const item = props[props.itemKey] ?? props?.item;
                    const i = props[props.indexKey] ?? props?.i;
                    return (
                      <>
                        <Pageview
                          name={'页面容器'}
                          pageViewCompState={{
                            fileInstNbr: data?.draft_message?.coding,
                            catalogCode: item?.catalogCode,
                            tacheCode: data?.pageParam?.tacheCode,
                            createStaff: data?.draft_message?.staffName,
                            itemList: item?.itemList,
                            scene: 'V',
                            code7: urlParam?.scene,
                          }}
                          pageSrc={'/' + item?.url}
                          style={{ height: 'auto', width: '100%' }}
                          ref={(r: any) => (refs['Pageview_8687683'] = r)}
                          {...injectData}
                        />
                      </>
                    );
                  },
                },
              };
            }}
          />
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
            formCode={'Form_476484'}
            $$componentItem={{
              id: 'Form_476484',
              uid: 'Form_476484',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px', margin: '10px 0px 0px 0px' }}
            ref={(r: any) => (refs['Form_476484'] = r)}
            {...injectData}
          >
            <Input
              name={'最高审批等级'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'text'}
              tipLocation={'after'}
              tipContent={refData?.current?.AuditClass?.approveLevelDesc}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfixIconPosition={'after'}
              required={true}
              placeholder={'请输入'}
              fieldName={'auditGrade'}
              formItemIndex={0}
              prefixIcon={{
                prefixIconType: '',
                prefixIconTheme: '',
                prefixIconFontAddress: '',
                prefixIconIsIconFont: false,
              }}
              icon={{ type: '', theme: '', fontAddress: '', isIconFont: false }}
              tipIcon={{
                theme: 'outlined',
                type: 'exclamation-circle',
                isIconFont: false,
              }}
              className={'fixed-form-item-label-width-150'}
              $$componentItem={{
                id: 'Input_014189',
                uid: 'Input_014189',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_014189'] = r)}
              {...injectData}
            />
            <Text
              name={'省内审批后送总部审批'}
              content={'省内审批后送总部审批'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              labelCol={8}
              wrapperCol={16}
              $$componentItem={{
                id: 'Text_680937',
                uid: 'Text_680937',
                type: 'Text',
                ...componentItem,
              }}
              disabled={
                `${functorsMap?.IF(
                  data?.ordersSubmit?.svcCont?.data?.content?.approveInfo
                    ?.isSendHead == 1,
                  1,
                  2,
                )}` === '3'
              }
              visible={
                `${functorsMap?.IF(
                  data?.ordersSubmit?.svcCont?.data?.content?.approveInfo
                    ?.isSendHead == 1,
                  1,
                  2,
                )}` !== '2'
              }
              readOnly={
                `${functorsMap?.IF(
                  data?.ordersSubmit?.svcCont?.data?.content?.approveInfo
                    ?.isSendHead == 1,
                  1,
                  2,
                )}` === '4'
              }
              isFormRootChild={true}
              schema={{
                compType: 1,
                props: {
                  formItemIndex: 1,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{
                textAlign: 'left',
                fontSize: '14px',
                lineHeight: '24px',
                color: 'rgba(233, 21, 48, 1)',
                backgroundColor: 'rgba(255, 255, 255,0)',
              }}
              ref={(r: any) => (refs['Text_680937'] = r)}
              {...injectData}
            />
          </Form>
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
            formCode={'Form_541805'}
            className={'Form_541805'}
            $$componentItem={{
              id: 'Form_541805',
              uid: 'Form_541805',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px', margin: '8px 0px 8px 0px' }}
            ref={(r: any) => (refs['Form_541805'] = r)}
            {...injectData}
          >
            <QuillEditor
              name={'审批内容'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              selfSpan={24}
              labelCol={8}
              wrapperCol={16}
              height={250}
              imageType={'file'}
              fieldName={'applyContent'}
              required={false}
              formItemIndex={0}
              heightType={'fixed'}
              minHeight={200}
              maxHeight={425}
              $$componentItem={{
                id: 'QuillEditor_637236',
                uid: 'QuillEditor_637236',
                type: 'QuillEditor',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['QuillEditor_637236'] = r)}
              {...injectData}
            />
          </Form>
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
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '文件名称',
                      attrId: '875570884376276993',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                className: '',
                id: '1343166',
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
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: 'CREATE_STAFF',
                      attrId: '877361835476492292',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                className: 'divider',
                id: '872926',
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
            rowKey={'fileCode'}
            rowActions={[]}
            extend={[
              {
                id: '298054',
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
            dataSourceFromDataSourceConfig={'data.fileInfoList'}
            $$componentItem={{
              id: 'Table_035381',
              uid: 'Table_035381',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ margin: '10px 0px 0px 0px' }}
            onClickBtn1={(rowId: any, row: any, index: any) => {
              // console 166087437703121660
              console.log('行ID');
              // console 166087439177279200
              console.log(rowId);
              const eventDatadownloadByFileId28: any = [
                {
                  type: 'downloadByFileId',
                  dataId: 166079342806115780,
                  options: {
                    compId: 'downloadByFileId',
                    compName: 'system',
                    id: '273821',
                    pageJsonId: '9704152',
                    data: '$rowId$',
                  },
                  line_number: 3,
                },
              ];
              eventDatadownloadByFileId28.params =
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
                eventDatadownloadByFileId28,
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
            onRowDelete={(rowId: any, row: any, index: any) => {
              const eventDatacustomActionCode453: any = [
                {
                  type: 'customActionCode',
                  dataId: 166201816356350080,
                  options: {
                    compId: 'customActionCode',
                    compName: 'page',
                    id: '965638',
                    pageJsonId: '9704152',
                    code: 'function main(data,state,success,fail){var newFileInfoList=[];for(var i=0;i<data.fileInfoList.length;i++){if(data.fileInfoList[i].fileCode!=rowId){newFileInfoList.push(data.fileInfoList[i])}}success(newFileInfoList)};',
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'setDataSource',
                      dataId: 166201824557916930,
                      options: {
                        compId: 'setDataSource',
                        compName: 'page',
                        id: '661666',
                        pageJsonId: '9704152',
                        dataSourceId: 166201651569911700,
                        dataSourceName: 'fileInfoList',
                        dataSourceRelType: 'custom',
                        dataSourceReloadFilter: [],
                        dataSourceSetValue: [
                          {
                            attrId: '184669',
                            code: 'fileName',
                            name: '附件名称',
                            type: 'string',
                            initialData: { type: 'static' },
                          },
                          {
                            attrId: '794395',
                            code: 'filePath',
                            name: '附件文件路径',
                            type: 'string',
                            initialData: { type: 'static' },
                          },
                          {
                            attrId: '79176685',
                            code: 'fileServerType',
                            name: '附件文件服务器类型',
                            type: 'string',
                            initialData: { type: 'static' },
                          },
                          {
                            attrId: '0194615',
                            code: 'fileSubType',
                            name: '属性',
                            type: 'string',
                            initialData: { type: 'static' },
                          },
                          {
                            attrId: '138056',
                            code: 'fileType',
                            name: '附件分类-大类',
                            type: 'string',
                            initialData: { type: 'static' },
                          },
                          {
                            attrId: '633899615',
                            code: 'fileUrl',
                            name: '附件url地址',
                            type: 'string',
                            initialData: { type: 'static' },
                          },
                          {
                            attrId: '920152',
                            code: 'tacheCode',
                            name: '环节编码',
                            type: 'string',
                            initialData: { type: 'static' },
                          },
                          {
                            attrId: '9023423',
                            code: 'fileCode',
                            name: '文件编码',
                            type: 'string',
                            initialData: { type: 'static' },
                          },
                          {
                            attrId: '351505',
                            code: 'createTime',
                            name: '创建时间',
                            type: 'string',
                            initialData: { type: 'static' },
                          },
                          {
                            attrId: '858614',
                            code: 'createStaff',
                            name: '创建人',
                            type: 'string',
                            initialData: { type: 'static' },
                          },
                          {
                            attrId: '0896825',
                            code: 'fileTypeName',
                            name: '附件类型',
                            type: 'string',
                            initialData: { type: 'static' },
                          },
                        ],
                        newData: '$data_965638$',
                        operateType: 3,
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
              eventDatacustomActionCode453.params =
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
                eventDatacustomActionCode453,
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
            onRowDoubleClick={(rowId: any, row: any, index: any) => {
              // console 169501538001773630
              console.log('行主键：', rowId);
              const eventDatapreviewFile19: any = [
                {
                  type: 'previewFile',
                  dataId: 169501516275228000,
                  options: {
                    compId: 'previewFile',
                    compName: 'page',
                    id: '437036',
                    pageJsonId: '9704152',
                    fileId: '$rowId$',
                  },
                  line_number: 2,
                },
              ];
              eventDatapreviewFile19.params =
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
                eventDatapreviewFile19,
                { rowId, row, index },
                'previewFile',
                {
                  id: 'previewFile',
                  name: 'previewFile',
                  type: 'previewFile',
                  platform: 'pc',
                },
              );
            }}
            onClickBtn2={(rowId: any, row: any, index: any) => {
              const eventDatapreviewFile20: any = [
                {
                  type: 'previewFile',
                  dataId: 169501584728897470,
                  options: {
                    compId: 'previewFile',
                    compName: 'page',
                    id: '5805994',
                    pageJsonId: '9704152',
                    fileId: '$rowId$',
                  },
                  line_number: 1,
                },
              ];
              eventDatapreviewFile20.params =
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
                eventDatapreviewFile20,
                { rowId, row, index },
                'previewFile',
                {
                  id: 'previewFile',
                  name: 'previewFile',
                  type: 'previewFile',
                  platform: 'pc',
                },
              );
            }}
            ref={(r: any) => (refs['Table_035381'] = r)}
            {...injectData}
          />
        </Card>
        <BusiComp6260603
          name={'起草环节组件'}
          busiCompId={'874216482399985664'}
          busiCompStates={{
            flowCode: urlParam?.flowCode,
            mode: urlParam?.scene,
            level:
              data?.ordersSubmit?.svcCont?.data?.content?.approveInfo
                ?.approveGrade,
            instNbr: urlParam?.instNbr,
            flowAssociationParams: data?.pageData?.flowAssociationParams,
          }}
          basicStatus={!!(urlParam?.scene != 'V') === false ? 2 : 1}
          fieldName={'flowAssociationParams'}
          style={{ margin: '0 0 12px 0' }}
          onValuesChange={(changedValues: any, allValues: any) => {
            const eventDatavalidateForm2: any = [
              {
                type: 'validateForm',
                dataId: 166113570597079460,
                shielding: true,
                options: {
                  compId: 'BOFramer_823276',
                  compLib: '@/components',
                  pageJsonId: '9704152',
                  compName: 'BOFramer',
                  id: '7325347',
                },
                line_number: 1,
                callback1: [
                  {
                    type: 'console',
                    dataId: 166113571165331040,
                    shielding: true,
                    options: {
                      compId: 'debug',
                      compName: 'system',
                      id: '363573',
                      pageJsonId: '9704152',
                      value: ['$allValues$'],
                    },
                    line_number: 2,
                  },
                ],
                callback2: [],
              },
            ];
            eventDatavalidateForm2.params =
              [
                {
                  title: '表单变化值',
                  name: 'changedValues',
                  value: '$changedValues$',
                },
                {
                  title: '表单所有值',
                  name: 'allValues',
                  value: '$allValues$',
                },
              ] || [];
            CMDGenerator(
              eventDatavalidateForm2,
              { changedValues, allValues },
              'validateForm',
              {
                id: 'validateForm',
                name: 'validateForm',
                type: 'validateForm',
                platform: 'pc',
              },
            );
          }}
          ref={(r: any) => (refs['BOFramer_823276'] = r)}
          {...injectData}
        />
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_938709',
            uid: 'View_938709',
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
            width: 'auto',
            textAlign: 'center',
            margin: '20px 0px 0px 0px',
            position: 'fixed',
            bottom: '0',
            left: '0',
            backgroundColor: '#f0f0f0',
            zIndex: '3',
          }}
          ref={(r: any) => (refs['View_938709'] = r)}
          {...injectData}
        >
          <Button
            name={'上一步'}
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
              id: 'Button_0567358',
              uid: 'Button_0567358',
              type: 'Button',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ width: 'fit-content' }}
            onClick={(e: any) => {
              // console 167052363787958370
              console.log(data?.ordersSubmit);
              const eventDatahistory4: any = [
                {
                  type: 'history',
                  dataId: 166113499330719970,
                  options: {
                    compId: 'history',
                    compName: 'system',
                    id: '106521',
                    pageJsonId: '9704152',
                    type: 'push',
                    pathname: '/auditOrderPrepare',
                    selectedType: 'page',
                    paramsObj: {
                      pageUrl: '$urlParam.pageUrl$',
                      instNbr: '$urlParam.instNbr$',
                      instId: '$urlParam.instId$',
                      scene: '$urlParam.scene$',
                      origin: '$urlParam.origin$',
                      originTab: '$urlParam.originTab$',
                    },
                    paramsObjKeyValueMap: {
                      pageUrl: '$urlParam.pageUrl$',
                      instNbr: '$urlParam.instNbr$',
                      instId: '$urlParam.instId$',
                      scene: '$urlParam.scene$',
                      origin: '$urlParam.origin$',
                      originTab: '$urlParam.originTab$',
                    },
                    pageId: '884045146848604160',
                    modalPath: '/auditOrderPrepare',
                  },
                  line_number: 2,
                },
              ];
              eventDatahistory4.params =
                [
                  {
                    title: '事件对象',
                    value: '$e$',
                    name: 'e',
                    label: '事件对象',
                  },
                ] || [];
              CMDGenerator(eventDatahistory4, { e }, 'history', {
                id: 'history',
                name: 'history',
                type: 'history',
                platform: 'pc',
              });
            }}
            ref={(r: any) => (refs['Button_0567358'] = r)}
            {...injectData}
          />
          <Button
            name={'保存草稿'}
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
              id: 'Button_2061707_637045_014961_038089',
              uid: 'Button_2061707_637045_014961_038089',
              type: 'Button',
              ...componentItem,
            }}
            disabled={false}
            visible={false}
            readOnly={false}
            style={{ width: 'fit-content', margin: '0px 0px 0px 5px' }}
            onClick={(e: any) => {
              const eventDatagetFormValue5: any = [
                {
                  type: 'getFormValue',
                  dataId: 166203531613569860,
                  options: {
                    compId: 'BOFramer_823276',
                    compLib: '@/components',
                    pageJsonId: '9704152',
                    compName: 'BOFramer',
                    id: '1528506',
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'customActionCode',
                      dataId: 166253894029639800,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '280708',
                        pageJsonId: '9704152',
                        code: 'function main(data,state,success,fail){var handleStaff={};handleStaff.handleStaffCode=formValues.nextStaff;handleStaff.handleStaffName=formValues.nextStaffName;data.ordersSubmit.svcCont.data.content.flowInfo.tacheNode=formValues.nextTache;data.ordersSubmit.svcCont.data.content.flowInfo.handleStaffList=[];data.ordersSubmit.svcCont.data.content.flowInfo.handleStaffList.push(handleStaff);window.localStorage.removeItem(data.draft_message.coding);success()};',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'console',
                          dataId: 166254593859413020,
                          options: {
                            compId: 'debug',
                            compName: 'system',
                            id: '611142',
                            pageJsonId: '9704152',
                            value: [
                              '$JSON.stringify(refData.current.ordersSubmit)$',
                            ],
                          },
                          line_number: 3,
                        },
                        {
                          type: 'apiRequest',
                          dataId: 166254935435570600,
                          options: {
                            compId: 'apiRequest',
                            compName: 'system',
                            id: '2446353',
                            pageJsonId: '9704152',
                            sync: false,
                            method: 'post',
                            url: '/app/rhin/gateway/callRhinEngine',
                            _capabilityCode: 'auditSaveDraft',
                            _apiCode: 'auditSaveDraft',
                            _source: 'rhin',
                            _serviceId: '884737392814850048',
                            _serviceTitle: '审批单保存-hdb: auditSaveDraft',
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
                                dataKey: '2446353_header',
                                value: { type: [], code: '' },
                              },
                              {
                                code: 'path',
                                name: '请求路径参数',
                                attrType: 'object',
                                _id: 'path',
                                compType: 'Input',
                                parents: [],
                                id: 'path',
                                dataKey: '2446353_path',
                                value: { type: [], code: '' },
                              },
                              {
                                code: 'query',
                                name: 'URL 参数',
                                attrType: 'object',
                                _id: 'query',
                                compType: 'Input',
                                parents: [],
                                id: 'query',
                                dataKey: '2446353_query',
                                value: { type: [], code: '' },
                              },
                              {
                                code: 'body',
                                name: '请求体',
                                attrType: 'object',
                                _id: 'body',
                                compType: 'Input',
                                parents: [],
                                id: 'body',
                                dataKey: '2446353_body',
                                value: {
                                  type: ['datasource', 'ordersSubmit', 'data'],
                                  code: '',
                                },
                              },
                            ],
                            _sourceName: '审批单保存-hdb',
                          },
                          line_number: 4,
                          callback1: [
                            {
                              type: 'showMessage',
                              dataId: 166255003493828320,
                              options: {
                                compId: 'showMessage',
                                compName: 'system',
                                id: '836759',
                                pageJsonId: '9704152',
                                type: 'success',
                                value: '草稿保存成功',
                              },
                              line_number: 5,
                            },
                            {
                              type: 'ifelse',
                              shielding: true,
                              condition: [
                                {
                                  condId: '587563',
                                  options: {
                                    useManual: true,
                                    useObject: false,
                                    context: '$urlParam.scene$',
                                    operate: '==',
                                    manualValue: 'U',
                                  },
                                  conditionType: 'checkContextValue',
                                  objType: 'system',
                                  objId: 'sys',
                                },
                              ],
                              dataId: 166383008347127200,
                              elseIfs: [
                                {
                                  dataName: 'elseIf',
                                  dataId: 166383010475599360,
                                  children: [
                                    {
                                      dataName: 'action',
                                      dataId: 166383013567264420,
                                      children: [],
                                      todoOptions: [
                                        'historyType',
                                        'pathname',
                                        'searchParams',
                                      ],
                                      options: {
                                        compId: 'history',
                                        compName: 'system',
                                        id: '281872',
                                        pageJsonId: '9704152',
                                        type: 'push',
                                        pathname: '/auditStart',
                                        selectedType: 'page',
                                        pageId: '887537833022541824',
                                      },
                                      actionObjId: 'history',
                                      actionObjName: 'system',
                                      value: 'history',
                                      shielding: true,
                                      line_number: 8,
                                    },
                                  ],
                                  condition: [],
                                  shielding: true,
                                  callback: [
                                    {
                                      type: 'history',
                                      dataId: 166383013567264420,
                                      shielding: true,
                                      options: {
                                        compId: 'history',
                                        compName: 'system',
                                        id: '281872',
                                        pageJsonId: '9704152',
                                        type: 'push',
                                        pathname: '/auditStart',
                                        selectedType: 'page',
                                        pageId: '887537833022541824',
                                      },
                                      line_number: 8,
                                    },
                                  ],
                                },
                              ],
                              line_number: 6,
                              callback1: [
                                {
                                  type: 'history',
                                  dataId: 166383151140991100,
                                  shielding: true,
                                  options: {
                                    compId: 'history',
                                    compName: 'system',
                                    id: '103678',
                                    pageJsonId: '9704152',
                                    type: 'push',
                                    pathname: '/approveOrderTodo',
                                    selectedType: 'page',
                                  },
                                  line_number: 7,
                                },
                              ],
                            },
                            {
                              type: 'ifelse',
                              condition: [
                                {
                                  condId: '836793',
                                  options: {
                                    useManual: true,
                                    useObject: false,
                                    context: '$urlParam.origin$',
                                    operate: '==',
                                    manualValue: '0',
                                  },
                                  conditionType: 'checkContextValue',
                                  objType: 'system',
                                  objId: 'sys',
                                },
                              ],
                              dataId: 167152226342168860,
                              elseIfs: [
                                {
                                  dataName: 'elseIf',
                                  dataId: 167893334879275500,
                                  children: [
                                    {
                                      dataName: 'condition',
                                      dataId: 167893337385875170,
                                      children: [
                                        {
                                          dataName: 'condition',
                                          dataId: 169468551618755800,
                                          children: [
                                            {
                                              dataName: 'action',
                                              dataId: 169468552082975780,
                                              children: [
                                                {
                                                  dataName: 'callback',
                                                  dataId: 169468552082962560,
                                                  children: [],
                                                  value: 'callback1',
                                                  params: [],
                                                },
                                                {
                                                  dataName: 'callback',
                                                  dataId: 169468552082981760,
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
                                                compId: 'callCustomPageFunc',
                                                compName: 'system',
                                                id: '9567958',
                                                pageJsonId: '9704152',
                                                pathname:
                                                  '/marketDeptApproveWorkbench',
                                                pageId: '953465319297417216',
                                                modalPath:
                                                  '/marketDeptApproveWorkbench',
                                                customFuncName: 'refreshTable',
                                                customFuncParams: 'object',
                                                paramsObj: {
                                                  originTab:
                                                    '$urlParam.originTab$',
                                                },
                                                paramsObjKeyValueMap: {
                                                  originTab:
                                                    '$urlParam.originTab$',
                                                },
                                              },
                                              actionObjId: 'callCustomPageFunc',
                                              actionObjName: 'system',
                                              value: 'callCustomPageFunc',
                                              tips: '注意：选择的页面需要开启缓存（如：A页面跳转到B页面，B页面需要调用A页面的自定义事件，那么需要A页面需开启缓存）；',
                                              line_number: 17,
                                            },
                                          ],
                                          elseIfs: [],
                                          condition: [
                                            {
                                              condId: '169792',
                                              options: {
                                                context: '$urlParam.originTab$',
                                                operate: 'notEmpty',
                                              },
                                              conditionType:
                                                'checkContextValue',
                                              objType: 'system',
                                              objId: 'sys',
                                            },
                                            {
                                              options: {
                                                useManual: true,
                                                useObject: false,
                                                context: '$urlParam.originTab$',
                                                operate: '!=',
                                                manualValue: 'none',
                                              },
                                              condId: '796323',
                                              connector: '&&',
                                              conditionType:
                                                'checkContextValue',
                                              objType: 'system',
                                              objId: 'sys',
                                            },
                                          ],
                                          value: 'condition',
                                          desc: '防止非工作台发起',
                                          line_number: 16,
                                        },
                                        {
                                          dataName: 'action',
                                          dataId: 167893337385842180,
                                          children: [],
                                          todoOptions: [
                                            'historyType',
                                            'pathname',
                                            'searchParams',
                                          ],
                                          options: {
                                            compId: 'history',
                                            compName: 'system',
                                            id: '5603325',
                                            pageJsonId: '9704152',
                                            type: 'push',
                                            pathname:
                                              '/marketDeptApproveWorkbench',
                                            selectedType: 'page',
                                            pageId: '953465319297417216',
                                            modalPath:
                                              '/marketDeptApproveWorkbench',
                                            paramsObj: {
                                              orginTab: '$state.ordersSubmit$',
                                            },
                                            paramsObjKeyValueMap: {
                                              orginTab: '$state.ordersSubmit$',
                                            },
                                          },
                                          actionObjId: 'history',
                                          actionObjName: 'system',
                                          value: 'history',
                                          line_number: 18,
                                        },
                                      ],
                                      elseIfs: [
                                        {
                                          dataName: 'elseIf',
                                          dataId: 167893337385892770,
                                          children: [
                                            {
                                              dataName: 'action',
                                              dataId: 167893337385878700,
                                              children: [],
                                              todoOptions: [
                                                'historyType',
                                                'pathname',
                                                'searchParams',
                                              ],
                                              options: {
                                                compId: 'history',
                                                compName: 'system',
                                                id: '998758',
                                                pageJsonId: '9704152',
                                                type: 'push',
                                                pathname:
                                                  '/marketDeptAuditStart',
                                                selectedType: 'page',
                                                paramsObj: {
                                                  origin: '$urlParam.origin$',
                                                },
                                                paramsObjKeyValueMap: {
                                                  origin: '$urlParam.origin$',
                                                },
                                              },
                                              actionObjId: 'history',
                                              actionObjName: 'system',
                                              value: 'history',
                                              line_number: 19,
                                            },
                                          ],
                                          condition: [],
                                          callback: [
                                            {
                                              type: 'history',
                                              dataId: 167893337385878700,
                                              options: {
                                                compId: 'history',
                                                compName: 'system',
                                                id: '998758',
                                                pageJsonId: '9704152',
                                                type: 'push',
                                                pathname:
                                                  '/marketDeptAuditStart',
                                                selectedType: 'page',
                                                paramsObj: {
                                                  origin: '$urlParam.origin$',
                                                },
                                                paramsObjKeyValueMap: {
                                                  origin: '$urlParam.origin$',
                                                },
                                              },
                                              line_number: 19,
                                            },
                                          ],
                                        },
                                      ],
                                      condition: [
                                        {
                                          condId: '587563',
                                          options: {
                                            useManual: true,
                                            useObject: false,
                                            context: '$urlParam.scene$',
                                            operate: '==',
                                            manualValue: 'U',
                                          },
                                          conditionType: 'checkContextValue',
                                          objType: 'system',
                                          objId: 'sys',
                                        },
                                      ],
                                      line_number: 15,
                                    },
                                  ],
                                  condition: [
                                    {
                                      options: {
                                        useManual: true,
                                        useObject: false,
                                        context: '$urlParam.origin$',
                                        operate: '==',
                                        manualValue: '1',
                                      },
                                      condId: '949564',
                                      conditionType: 'checkContextValue',
                                      objType: 'system',
                                      objId: 'sys',
                                    },
                                  ],
                                  desc: '等于1入口为市场部审批工作台',
                                  callback: [
                                    {
                                      type: 'ifelse',
                                      condition: [
                                        {
                                          condId: '587563',
                                          options: {
                                            useManual: true,
                                            useObject: false,
                                            context: '$urlParam.scene$',
                                            operate: '==',
                                            manualValue: 'U',
                                          },
                                          conditionType: 'checkContextValue',
                                          objType: 'system',
                                          objId: 'sys',
                                        },
                                      ],
                                      dataId: 167893337385875170,
                                      elseIfs: [
                                        {
                                          dataName: 'elseIf',
                                          dataId: 167893337385892770,
                                          children: [
                                            {
                                              dataName: 'action',
                                              dataId: 167893337385878700,
                                              children: [],
                                              todoOptions: [
                                                'historyType',
                                                'pathname',
                                                'searchParams',
                                              ],
                                              options: {
                                                compId: 'history',
                                                compName: 'system',
                                                id: '998758',
                                                pageJsonId: '9704152',
                                                type: 'push',
                                                pathname:
                                                  '/marketDeptAuditStart',
                                                selectedType: 'page',
                                                paramsObj: {
                                                  origin: '$urlParam.origin$',
                                                },
                                                paramsObjKeyValueMap: {
                                                  origin: '$urlParam.origin$',
                                                },
                                              },
                                              actionObjId: 'history',
                                              actionObjName: 'system',
                                              value: 'history',
                                              line_number: 19,
                                            },
                                          ],
                                          condition: [],
                                          callback: [
                                            {
                                              type: 'history',
                                              dataId: 167893337385878700,
                                              options: {
                                                compId: 'history',
                                                compName: 'system',
                                                id: '998758',
                                                pageJsonId: '9704152',
                                                type: 'push',
                                                pathname:
                                                  '/marketDeptAuditStart',
                                                selectedType: 'page',
                                                paramsObj: {
                                                  origin: '$urlParam.origin$',
                                                },
                                                paramsObjKeyValueMap: {
                                                  origin: '$urlParam.origin$',
                                                },
                                              },
                                              line_number: 19,
                                            },
                                          ],
                                        },
                                      ],
                                      line_number: 15,
                                      callback1: [
                                        {
                                          type: 'ifelse',
                                          condition: [
                                            {
                                              condId: '169792',
                                              options: {
                                                context: '$urlParam.originTab$',
                                                operate: 'notEmpty',
                                              },
                                              conditionType:
                                                'checkContextValue',
                                              objType: 'system',
                                              objId: 'sys',
                                            },
                                            {
                                              options: {
                                                useManual: true,
                                                useObject: false,
                                                context: '$urlParam.originTab$',
                                                operate: '!=',
                                                manualValue: 'none',
                                              },
                                              condId: '796323',
                                              connector: '&&',
                                              conditionType:
                                                'checkContextValue',
                                              objType: 'system',
                                              objId: 'sys',
                                            },
                                          ],
                                          dataId: 169468551618755800,
                                          elseIfs: [],
                                          line_number: 16,
                                          callback1: [
                                            {
                                              type: 'callCustomPageFunc',
                                              dataId: 169468552082975780,
                                              options: {
                                                compId: 'callCustomPageFunc',
                                                compName: 'system',
                                                id: '9567958',
                                                pageJsonId: '9704152',
                                                pathname:
                                                  '/marketDeptApproveWorkbench',
                                                pageId: '953465319297417216',
                                                modalPath:
                                                  '/marketDeptApproveWorkbench',
                                                customFuncName: 'refreshTable',
                                                customFuncParams: 'object',
                                                paramsObj: {
                                                  originTab:
                                                    '$urlParam.originTab$',
                                                },
                                                paramsObjKeyValueMap: {
                                                  originTab:
                                                    '$urlParam.originTab$',
                                                },
                                              },
                                              line_number: 17,
                                              callback1: [],
                                              callback2: [],
                                            },
                                          ],
                                        },
                                        {
                                          type: 'history',
                                          dataId: 167893337385842180,
                                          options: {
                                            compId: 'history',
                                            compName: 'system',
                                            id: '5603325',
                                            pageJsonId: '9704152',
                                            type: 'push',
                                            pathname:
                                              '/marketDeptApproveWorkbench',
                                            selectedType: 'page',
                                            pageId: '953465319297417216',
                                            modalPath:
                                              '/marketDeptApproveWorkbench',
                                            paramsObj: {
                                              orginTab: '$state.ordersSubmit$',
                                            },
                                            paramsObjKeyValueMap: {
                                              orginTab: '$state.ordersSubmit$',
                                            },
                                          },
                                          line_number: 18,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  dataName: 'elseIf',
                                  dataId: 167152227683766660,
                                  children: [
                                    {
                                      dataName: 'condition',
                                      dataId: 167152228142100200,
                                      children: [
                                        {
                                          dataName: 'action',
                                          dataId: 167152228142153400,
                                          children: [],
                                          todoOptions: [
                                            'historyType',
                                            'pathname',
                                            'searchParams',
                                          ],
                                          options: {
                                            compId: 'history',
                                            compName: 'system',
                                            id: '182595',
                                            pageJsonId: '9704152',
                                            type: 'push',
                                            pathname: '/approveOrderTodo',
                                            selectedType: 'page',
                                            pageId: '878815340415455232',
                                            modalPath: '/approveOrderTodo',
                                          },
                                          actionObjId: 'history',
                                          actionObjName: 'system',
                                          value: 'history',
                                          line_number: 21,
                                        },
                                      ],
                                      elseIfs: [
                                        {
                                          dataName: 'elseIf',
                                          dataId: 167152228142144060,
                                          children: [
                                            {
                                              dataName: 'action',
                                              dataId: 167152228142183940,
                                              children: [],
                                              todoOptions: [
                                                'historyType',
                                                'pathname',
                                                'searchParams',
                                              ],
                                              options: {
                                                compId: 'history',
                                                compName: 'system',
                                                id: '739294',
                                                pageJsonId: '9704152',
                                                type: 'push',
                                                pathname: '/auditStart',
                                                selectedType: 'page',
                                                pageId: '887537833022541824',
                                                modalPath: '/auditStart',
                                              },
                                              actionObjId: 'history',
                                              actionObjName: 'system',
                                              value: 'history',
                                              line_number: 22,
                                            },
                                          ],
                                          condition: [],
                                          desc: '返回发起',
                                          callback: [
                                            {
                                              type: 'history',
                                              dataId: 167152228142183940,
                                              options: {
                                                compId: 'history',
                                                compName: 'system',
                                                id: '739294',
                                                pageJsonId: '9704152',
                                                type: 'push',
                                                pathname: '/auditStart',
                                                selectedType: 'page',
                                                pageId: '887537833022541824',
                                                modalPath: '/auditStart',
                                              },
                                              line_number: 22,
                                            },
                                          ],
                                        },
                                      ],
                                      condition: [
                                        {
                                          condId: '587563',
                                          options: {
                                            useManual: true,
                                            useObject: false,
                                            context: '$urlParam.scene$',
                                            operate: '==',
                                            manualValue: 'U',
                                          },
                                          conditionType: 'checkContextValue',
                                          objType: 'system',
                                          objId: 'sys',
                                        },
                                      ],
                                      desc: '返回待办',
                                      line_number: 20,
                                    },
                                  ],
                                  condition: [],
                                  desc: '原发起流程',
                                  callback: [
                                    {
                                      type: 'ifelse',
                                      condition: [
                                        {
                                          condId: '587563',
                                          options: {
                                            useManual: true,
                                            useObject: false,
                                            context: '$urlParam.scene$',
                                            operate: '==',
                                            manualValue: 'U',
                                          },
                                          conditionType: 'checkContextValue',
                                          objType: 'system',
                                          objId: 'sys',
                                        },
                                      ],
                                      dataId: 167152228142100200,
                                      elseIfs: [
                                        {
                                          dataName: 'elseIf',
                                          dataId: 167152228142144060,
                                          children: [
                                            {
                                              dataName: 'action',
                                              dataId: 167152228142183940,
                                              children: [],
                                              todoOptions: [
                                                'historyType',
                                                'pathname',
                                                'searchParams',
                                              ],
                                              options: {
                                                compId: 'history',
                                                compName: 'system',
                                                id: '739294',
                                                pageJsonId: '9704152',
                                                type: 'push',
                                                pathname: '/auditStart',
                                                selectedType: 'page',
                                                pageId: '887537833022541824',
                                                modalPath: '/auditStart',
                                              },
                                              actionObjId: 'history',
                                              actionObjName: 'system',
                                              value: 'history',
                                              line_number: 22,
                                            },
                                          ],
                                          condition: [],
                                          desc: '返回发起',
                                          callback: [
                                            {
                                              type: 'history',
                                              dataId: 167152228142183940,
                                              options: {
                                                compId: 'history',
                                                compName: 'system',
                                                id: '739294',
                                                pageJsonId: '9704152',
                                                type: 'push',
                                                pathname: '/auditStart',
                                                selectedType: 'page',
                                                pageId: '887537833022541824',
                                                modalPath: '/auditStart',
                                              },
                                              line_number: 22,
                                            },
                                          ],
                                        },
                                      ],
                                      line_number: 20,
                                      callback1: [
                                        {
                                          type: 'history',
                                          dataId: 167152228142153400,
                                          options: {
                                            compId: 'history',
                                            compName: 'system',
                                            id: '182595',
                                            pageJsonId: '9704152',
                                            type: 'push',
                                            pathname: '/approveOrderTodo',
                                            selectedType: 'page',
                                            pageId: '878815340415455232',
                                            modalPath: '/approveOrderTodo',
                                          },
                                          line_number: 21,
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                              line_number: 9,
                              callback1: [
                                {
                                  type: 'ifelse',
                                  condition: [
                                    {
                                      condId: '587563',
                                      options: {
                                        useManual: true,
                                        useObject: false,
                                        context: '$urlParam.scene$',
                                        operate: '==',
                                        manualValue: 'U',
                                      },
                                      conditionType: 'checkContextValue',
                                      objType: 'system',
                                      objId: 'sys',
                                    },
                                  ],
                                  dataId: 167152228951086200,
                                  elseIfs: [
                                    {
                                      dataName: 'elseIf',
                                      dataId: 167152228951098660,
                                      children: [
                                        {
                                          dataName: 'action',
                                          dataId: 167152228951016670,
                                          children: [],
                                          todoOptions: [
                                            'historyType',
                                            'pathname',
                                            'searchParams',
                                          ],
                                          options: {
                                            compId: 'history',
                                            compName: 'system',
                                            id: '4521139',
                                            pageJsonId: '9704152',
                                            type: 'push',
                                            pathname: '/auditStart',
                                            selectedType: 'page',
                                            pageId: '887537833022541824',
                                            paramsObj: {
                                              origin: '$urlParam.origin$',
                                            },
                                            paramsObjKeyValueMap: {
                                              origin: '$urlParam.origin$',
                                            },
                                          },
                                          actionObjId: 'history',
                                          actionObjName: 'system',
                                          value: 'history',
                                          line_number: 14,
                                        },
                                      ],
                                      condition: [],
                                      callback: [
                                        {
                                          type: 'history',
                                          dataId: 167152228951016670,
                                          options: {
                                            compId: 'history',
                                            compName: 'system',
                                            id: '4521139',
                                            pageJsonId: '9704152',
                                            type: 'push',
                                            pathname: '/auditStart',
                                            selectedType: 'page',
                                            pageId: '887537833022541824',
                                            paramsObj: {
                                              origin: '$urlParam.origin$',
                                            },
                                            paramsObjKeyValueMap: {
                                              origin: '$urlParam.origin$',
                                            },
                                          },
                                          line_number: 14,
                                        },
                                      ],
                                    },
                                  ],
                                  line_number: 10,
                                  callback1: [
                                    {
                                      type: 'ifelse',
                                      condition: [
                                        {
                                          condId: '169792',
                                          options: {
                                            context: '$urlParam.originTab$',
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
                                            context: '$urlParam.originTab$',
                                            operate: '!=',
                                            manualValue: 'none',
                                          },
                                          condId: '796323',
                                          connector: '&&',
                                          conditionType: 'checkContextValue',
                                          objType: 'system',
                                          objId: 'sys',
                                        },
                                      ],
                                      dataId: 169468548232381250,
                                      elseIfs: [],
                                      line_number: 11,
                                      callback1: [
                                        {
                                          type: 'callCustomPageFunc',
                                          dataId: 169468553082054240,
                                          options: {
                                            compId: 'callCustomPageFunc',
                                            compName: 'system',
                                            id: '1927874',
                                            pageJsonId: '9704152',
                                            pathname: '/approveWorkbench',
                                            pageId: '922008281896452096',
                                            modalPath: '/approveWorkbench',
                                            customFuncName: 'refreshTable',
                                            customFuncParams: 'object',
                                            paramsObj: {
                                              originTab: '$urlParam.originTab$',
                                            },
                                            paramsObjKeyValueMap: {
                                              originTab: '$urlParam.originTab$',
                                            },
                                          },
                                          line_number: 12,
                                          callback1: [],
                                          callback2: [],
                                        },
                                      ],
                                    },
                                    {
                                      type: 'history',
                                      dataId: 167152228951035230,
                                      options: {
                                        compId: 'history',
                                        compName: 'system',
                                        id: '1794136',
                                        pageJsonId: '9704152',
                                        type: 'push',
                                        pathname: '/approveWorkbench',
                                        selectedType: 'page',
                                        pageId: '922008281896452096',
                                        modalPath: '/approveWorkbench',
                                        paramsObj: {
                                          originTab: '$urlParam.originTab$',
                                        },
                                        paramsObjKeyValueMap: {
                                          originTab: '$urlParam.originTab$',
                                        },
                                      },
                                      line_number: 13,
                                    },
                                  ],
                                },
                              ],
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
              eventDatagetFormValue5.params =
                [
                  {
                    title: '事件对象',
                    value: '$e$',
                    name: 'e',
                    label: '事件对象',
                  },
                ] || [];
              CMDGenerator(eventDatagetFormValue5, { e }, 'getFormValue', {
                id: 'getFormValue',
                name: 'getFormValue',
                type: 'getFormValue',
                platform: 'pc',
              });
            }}
            ref={(r: any) => (refs['Button_2061707_637045_014961_038089'] = r)}
            {...injectData}
          />
          <Button
            name={'提交'}
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
              id: 'Button_2061707_637045_014961',
              uid: 'Button_2061707_637045_014961',
              type: 'Button',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ width: 'fit-content', margin: '0px 0px 0px 5px' }}
            onClick={(e: any) => {
              // console 167894565982032700
              console.log('====审批单提交===');
              // console 169468207335740770
              console.log('来源Tab：', urlParam);
              const eventDatavalidateForm3: any = [
                {
                  type: 'validateForm',
                  dataId: 166261895029637700,
                  options: {
                    compId: 'BOFramer_823276',
                    compLib: '@/components',
                    pageJsonId: '9704152',
                    compName: 'BOFramer',
                    id: '5196313',
                  },
                  line_number: 3,
                  callback1: [
                    {
                      type: 'console',
                      dataId: 167357735284907740,
                      shielding: true,
                      options: {
                        compId: 'debug',
                        compName: 'system',
                        id: '3049784',
                        pageJsonId: '9704152',
                        value: ['$formValues$'],
                      },
                      line_number: 4,
                    },
                    {
                      type: 'ifelse',
                      condition: [
                        {
                          condId: '416753',
                          options: {
                            context: '$formValues.nextStaff$',
                            operate: 'notEmpty',
                          },
                          conditionType: 'checkContextValue',
                          objType: 'system',
                          objId: 'sys',
                        },
                        {
                          options: {
                            context: 'formValues.nextTache',
                            operate: 'notEmpty',
                          },
                          condId: '509973',
                          connector: '&&',
                          conditionType: 'checkContextValue',
                          objType: 'system',
                          objId: 'sys',
                        },
                      ],
                      dataId: 166417569152224160,
                      elseIfs: [
                        {
                          dataName: 'elseIf',
                          dataId: 166417574605165600,
                          children: [
                            {
                              dataName: 'action',
                              dataId: 166417575210083900,
                              children: [],
                              todoOptions: ['msgType', 'value'],
                              options: {
                                compId: 'showMessage',
                                compName: 'system',
                                id: '881128',
                                pageJsonId: '9704152',
                                type: 'error',
                                value: '请选择下一环节、下一环节处理人',
                              },
                              actionObjId: 'showMessage',
                              actionObjName: 'system',
                              value: 'showMessage',
                              line_number: 42,
                            },
                          ],
                          condition: [],
                          callback: [
                            {
                              type: 'showMessage',
                              dataId: 166417575210083900,
                              options: {
                                compId: 'showMessage',
                                compName: 'system',
                                id: '881128',
                                pageJsonId: '9704152',
                                type: 'error',
                                value: '请选择下一环节、下一环节处理人',
                              },
                              line_number: 42,
                            },
                          ],
                        },
                      ],
                      line_number: 5,
                      callback1: [
                        {
                          type: 'setLoading',
                          dataId: 166417581470417300,
                          shielding: true,
                          options: {
                            compId: 'Button_2061707_637045_014961',
                            compLib: 'comm',
                            pageJsonId: '9704152',
                            compName: 'Button',
                            id: '0144844',
                            loading: true,
                          },
                          line_number: 6,
                        },
                        {
                          type: 'setLoading',
                          dataId: 168923332021553630,
                          options: {
                            compId: 'View_9704152_1',
                            compLib: 'custom',
                            pageJsonId: '9704152',
                            compName: 'View',
                            id: '98302526',
                            loading: true,
                          },
                          line_number: 7,
                        },
                        {
                          type: 'customActionCode',
                          dataId: 166417574222747000,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '908336',
                            pageJsonId: '9704152',
                            code: 'function main(data,state,success,fail){var handleStaff={};handleStaff.handleStaffCode=formValues.nextStaff;handleStaff.handleStaffName=formValues.nextStaffName;data.ordersSubmit.svcCont.data.content.flowInfo.tacheNode=formValues.nextTache;data.ordersSubmit.svcCont.data.content.flowInfo.handleStaffList=[];data.ordersSubmit.svcCont.data.content.flowInfo.handleStaffList.push(handleStaff);data.ordersSubmit.svcCont.data.content.flowInfo.flowCode=urlParam.flowCode;window.localStorage.removeItem(data.draft_message.coding);success()};',
                            actionTitle: '',
                          },
                          line_number: 8,
                          callback1: [
                            {
                              type: 'apiRequest',
                              dataId: 166417574222777440,
                              options: {
                                compId: 'apiRequest',
                                compName: 'system',
                                id: '582834',
                                pageJsonId: '9704152',
                                sync: false,
                                method: 'post',
                                url: '/app/rhin/gateway/callRhinEngine',
                                _capabilityCode: 'saveDataAndStartFlow',
                                _apiCode: 'saveDataAndStartFlow',
                                _source: 'rhin',
                                _serviceId: '889687786058772480',
                                _serviceTitle:
                                  '保存数据并启动摩卡流程-tzp: saveDataAndStartFlow',
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
                                        dataKey: '582834_root.header',
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
                                        dataKey: '582834_root.path',
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
                                        dataKey: '582834_root.query',
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
                                            code: 'flowCode',
                                            attrType: 'field',
                                            type: 'string',
                                            mustFlag: 'F',
                                            _id: 'root.body.flowCode',
                                            compType: 'Input',
                                            name: 'flowCode',
                                            parents: ['root', 'body'],
                                            id: 'root.body.flowCode',
                                            dataKey:
                                              '582834_root.body.flowCode',
                                            value: {
                                              type: [
                                                'context',
                                                '$urlParam.flowCode$',
                                              ],
                                              code: '',
                                            },
                                            parentType: 'object',
                                            parentKey: '0-3',
                                            key: '0-3-3',
                                          },
                                          {
                                            code: 'isSkip',
                                            attrType: 'field',
                                            type: 'string',
                                            mustFlag: 'F',
                                            _id: 'root.body.isSkip',
                                            compType: 'Input',
                                            name: 'isSkip',
                                            parents: ['root', 'body'],
                                            id: 'root.body.isSkip',
                                            dataKey: '582834_root.body.isSkip',
                                            value: {
                                              type: ['customize'],
                                              code: 'Y',
                                            },
                                            parentType: 'object',
                                            parentKey: '0-3',
                                            key: '0-3-1',
                                          },
                                          {
                                            code: 'nextStaff',
                                            attrType: 'field',
                                            type: 'string',
                                            mustFlag: 'F',
                                            _id: 'root.body.nextStaff',
                                            compType: 'Input',
                                            name: 'nextStaff',
                                            parents: ['root', 'body'],
                                            id: 'root.body.nextStaff',
                                            dataKey:
                                              '582834_root.body.nextStaff',
                                            value: {
                                              type: ['context', '$formValues$'],
                                              code: 'nextStaff',
                                            },
                                            parentType: 'object',
                                            parentKey: '0-3',
                                            key: '0-3-4',
                                          },
                                          {
                                            code: 'nextTache',
                                            attrType: 'field',
                                            type: 'string',
                                            mustFlag: 'F',
                                            _id: 'root.body.nextTache',
                                            compType: 'Input',
                                            name: 'nextTache',
                                            parents: ['root', 'body'],
                                            id: 'root.body.nextTache',
                                            dataKey:
                                              '582834_root.body.nextTache',
                                            value: {
                                              type: ['context', '$formValues$'],
                                              code: 'nextTache',
                                            },
                                            parentType: 'object',
                                            parentKey: '0-3',
                                            key: '0-3-8',
                                          },
                                          {
                                            code: 'orderType',
                                            attrType: 'field',
                                            type: 'string',
                                            mustFlag: 'F',
                                            _id: 'root.body.orderType',
                                            compType: 'Input',
                                            name: 'orderType',
                                            parents: ['root', 'body'],
                                            id: 'root.body.orderType',
                                            dataKey:
                                              '582834_root.body.orderType',
                                            value: {
                                              type: ['customize'],
                                              code: '1000',
                                            },
                                            parentType: 'object',
                                            parentKey: '0-3',
                                            key: '0-3-7',
                                          },
                                          {
                                            code: 'tacheRemark',
                                            attrType: 'field',
                                            type: 'string',
                                            mustFlag: 'F',
                                            _id: 'root.body.tacheRemark',
                                            compType: 'Input',
                                            name: 'tacheRemark',
                                            parents: ['root', 'body'],
                                            id: 'root.body.tacheRemark',
                                            dataKey:
                                              '582834_root.body.tacheRemark',
                                            value: {
                                              type: ['context', '$formValues$'],
                                              code: 'tacheRemark',
                                            },
                                            parentType: 'object',
                                            parentKey: '0-3',
                                            key: '0-3-2',
                                          },
                                          {
                                            code: 'busiObjNbr',
                                            attrType: 'field',
                                            type: 'string',
                                            mustFlag: 'F',
                                            _id: 'root.body.busiObjNbr',
                                            compType: 'Input',
                                            name: 'busiObjNbr',
                                            parents: ['root', 'body'],
                                            id: 'root.body.busiObjNbr',
                                            dataKey:
                                              '582834_root.body.busiObjNbr',
                                            parentType: 'object',
                                            parentKey: '0-3',
                                            key: '0-3-6',
                                          },
                                          {
                                            code: 'orderMessage',
                                            attrType: 'field',
                                            type: 'object',
                                            mustFlag: 'F',
                                            _id: 'root.body.orderMessage',
                                            compType: 'Input',
                                            name: 'orderMessage',
                                            parents: ['root', 'body'],
                                            id: 'root.body.orderMessage',
                                            dataKey:
                                              '582834_root.body.orderMessage',
                                            value: {
                                              type: ['customize'],
                                              code: '$refData.current.ordersSubmit$',
                                            },
                                            parentType: 'object',
                                            parentKey: '0-3',
                                            key: '0-3-5',
                                          },
                                          {
                                            code: 'tacheAttachments',
                                            attrType: 'objectArray',
                                            children: [
                                              {
                                                code: 'fileId',
                                                attrType: 'field',
                                                type: 'string',
                                                mustFlag: 'F',
                                                _id: 'root.body.tacheAttachments.fileId',
                                                compType: 'Input',
                                                name: 'fileId',
                                                parents: [
                                                  'root',
                                                  'body',
                                                  'tacheAttachments',
                                                ],
                                                id: 'root.body.tacheAttachments.fileId',
                                                dataKey:
                                                  '582834_root.body.tacheAttachments.fileId',
                                                parentType: 'objectArray',
                                                parentKey: '0-3-9',
                                                key: '0-3-9-0',
                                                parentCode: 'tacheAttachments',
                                              },
                                              {
                                                code: 'fileName',
                                                attrType: 'field',
                                                type: 'string',
                                                mustFlag: 'F',
                                                _id: 'root.body.tacheAttachments.fileName',
                                                compType: 'Input',
                                                name: 'fileName',
                                                parents: [
                                                  'root',
                                                  'body',
                                                  'tacheAttachments',
                                                ],
                                                id: 'root.body.tacheAttachments.fileName',
                                                dataKey:
                                                  '582834_root.body.tacheAttachments.fileName',
                                                parentType: 'objectArray',
                                                parentKey: '0-3-9',
                                                key: '0-3-9-1',
                                                parentCode: 'tacheAttachments',
                                              },
                                              {
                                                code: 'url',
                                                attrType: 'field',
                                                type: 'string',
                                                mustFlag: 'F',
                                                _id: 'root.body.tacheAttachments.url',
                                                compType: 'Input',
                                                name: 'url',
                                                parents: [
                                                  'root',
                                                  'body',
                                                  'tacheAttachments',
                                                ],
                                                id: 'root.body.tacheAttachments.url',
                                                dataKey:
                                                  '582834_root.body.tacheAttachments.url',
                                                parentType: 'objectArray',
                                                parentKey: '0-3-9',
                                                key: '0-3-9-2',
                                                parentCode: 'tacheAttachments',
                                              },
                                            ],
                                            _id: 'root.body.tacheAttachments',
                                            compType: 'Input',
                                            name: 'tacheAttachments',
                                            parents: ['root', 'body'],
                                            id: 'root.body.tacheAttachments',
                                            dataKey:
                                              '582834_root.body.tacheAttachments',
                                            value: {
                                              type: ['context', '$formValues$'],
                                              code: 'tacheAttachments',
                                            },
                                            parentType: 'object',
                                            parentKey: '0-3',
                                            key: '0-3-9',
                                          },
                                          {
                                            code: 'flowAssociationParams',
                                            name: '流程流转需要的参数（JSON格式，起流程时保存到库中）',
                                            attrType: 'field',
                                            type: 'string',
                                            mustFlag: 'F',
                                            defaultValue: '',
                                            _id: 'root.body.flowAssociationParams',
                                            compType: 'Input',
                                            parents: ['root', 'body'],
                                            parentType: 'object',
                                            parentKey: '0-3',
                                            key: '0-3-0',
                                            id: 'root.body.flowAssociationParams',
                                            dataKey:
                                              '582834_root.body.flowAssociationParams',
                                            value: {
                                              type: [
                                                'datasource',
                                                'pageData',
                                                'data',
                                              ],
                                              code: 'flowAssociationParams',
                                            },
                                          },
                                        ],
                                        _id: 'root.body',
                                        compType: 'Input',
                                        parents: ['root'],
                                        id: 'root.body',
                                        dataKey: '582834_root.body',
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
                                    dataKey: '582834_root',
                                  },
                                ],
                                _sourceName: '保存数据并启动摩卡流程-tzp',
                              },
                              line_number: 9,
                              callback1: [
                                {
                                  type: 'customActionCode',
                                  dataId: 167403424427449540,
                                  options: {
                                    compId: 'customActionCode',
                                    compName: 'page',
                                    id: '227215',
                                    pageJsonId: '9704152',
                                    actionTitle: '清除缓存',
                                    code: 'function main(data,state,success,fail){var _reply_;window.localStorage.removeItem((_reply_=reply_582834)===null||_reply_===void 0?void 0:_reply_.resultData.busiObjNbr)};',
                                  },
                                  line_number: 10,
                                  callback1: [],
                                  callback2: [],
                                },
                                {
                                  type: 'console',
                                  dataId: 166417574222747230,
                                  options: {
                                    compId: 'debug',
                                    compName: 'system',
                                    id: '373442',
                                    pageJsonId: '9704152',
                                    value: ['$reply_582834$'],
                                  },
                                  line_number: 11,
                                },
                                {
                                  type: 'ifelse',
                                  condition: [
                                    {
                                      condId: '834971',
                                      options: {
                                        useManual: true,
                                        useObject: false,
                                        context: '$reply_582834?.resultCode$',
                                        operate: '==',
                                        manualValue: '0',
                                      },
                                      conditionType: 'checkContextValue',
                                      objType: 'system',
                                      objId: 'sys',
                                    },
                                  ],
                                  dataId: 166417574222706780,
                                  elseIfs: [],
                                  line_number: 12,
                                  callback1: [
                                    {
                                      type: 'history',
                                      dataId: 166417574222711230,
                                      shielding: true,
                                      options: {
                                        compId: 'history',
                                        compName: 'system',
                                        id: '103541',
                                        pageJsonId: '9704152',
                                        type: 'push',
                                        pathname: '/auditStart',
                                        selectedType: 'page',
                                        pageId: '887537833022541824',
                                        modalPath: '/auditStart',
                                      },
                                      line_number: 13,
                                    },
                                    {
                                      type: 'showMessage',
                                      dataId: 166417574222708600,
                                      shielding: true,
                                      options: {
                                        compId: 'showMessage',
                                        compName: 'system',
                                        id: '30958',
                                        pageJsonId: '9704152',
                                        type: 'success',
                                        value: '流程启动成功',
                                      },
                                      line_number: 14,
                                    },
                                    {
                                      type: 'showCustomModal',
                                      dataId: 166419283955732830,
                                      options: {
                                        compId: 'showCustomModal',
                                        compName: 'page',
                                        id: '571376',
                                        pageJsonId: '9704152',
                                        modalname: '/auditSubmitPop',
                                        pageId: '891650785732694016',
                                        paramsObj: {
                                          instNbr:
                                            '$reply_582834?.resultData.busiObjNbr$',
                                          nextStaffName:
                                            '$reply_582834?.resultData.nextStaffName$',
                                        },
                                        paramsObjKeyValueMap: {
                                          instNbr:
                                            '$reply_582834?.resultData.busiObjNbr$',
                                          nextStaffName:
                                            '$reply_582834?.resultData.nextStaffName$',
                                        },
                                        modalPath: '/auditSubmitPop',
                                      },
                                      line_number: 15,
                                      callback1: [
                                        {
                                          type: 'ifelse',
                                          shielding: true,
                                          condition: [
                                            {
                                              condId: '83338006',
                                              options: {
                                                useManual: true,
                                                useObject: false,
                                                context: '$urlParam.scene$',
                                                operate: '==',
                                                manualValue: 'U',
                                              },
                                              conditionType:
                                                'checkContextValue',
                                              objType: 'system',
                                              objId: 'sys',
                                            },
                                          ],
                                          dataId: 166633651781589470,
                                          elseIfs: [
                                            {
                                              dataName: 'elseIf',
                                              dataId: 166633653568834000,
                                              children: [
                                                {
                                                  dataName: 'action',
                                                  dataId: 166633654216940770,
                                                  children: [],
                                                  todoOptions: [
                                                    'historyType',
                                                    'pathname',
                                                    'searchParams',
                                                  ],
                                                  options: {
                                                    compId: 'history',
                                                    compName: 'system',
                                                    id: '8491267',
                                                    pageJsonId: '9704152',
                                                    type: 'push',
                                                    pathname: '/auditStart',
                                                    selectedType: 'page',
                                                    pageId:
                                                      '887537833022541824',
                                                  },
                                                  actionObjId: 'history',
                                                  actionObjName: 'system',
                                                  value: 'history',
                                                  shielding: true,
                                                  line_number: 18,
                                                },
                                              ],
                                              condition: [],
                                              shielding: true,
                                              callback: [
                                                {
                                                  type: 'history',
                                                  dataId: 166633654216940770,
                                                  shielding: true,
                                                  options: {
                                                    compId: 'history',
                                                    compName: 'system',
                                                    id: '8491267',
                                                    pageJsonId: '9704152',
                                                    type: 'push',
                                                    pathname: '/auditStart',
                                                    selectedType: 'page',
                                                    pageId:
                                                      '887537833022541824',
                                                  },
                                                  line_number: 18,
                                                },
                                              ],
                                            },
                                          ],
                                          line_number: 16,
                                          callback1: [
                                            {
                                              type: 'history',
                                              dataId: 166633654888856830,
                                              shielding: true,
                                              options: {
                                                compId: 'history',
                                                compName: 'system',
                                                id: '798374',
                                                pageJsonId: '9704152',
                                                type: 'push',
                                                pathname: '/approveOrderTodo',
                                                selectedType: 'page',
                                                pageId: '878815340415455232',
                                              },
                                              line_number: 17,
                                            },
                                          ],
                                        },
                                        {
                                          type: 'console',
                                          dataId: 167894631500368130,
                                          options: {
                                            compId: 'debug',
                                            compName: 'system',
                                            id: '9624782',
                                            pageJsonId: '9704152',
                                            value: [
                                              '=====审批单提交弹窗确认回调=====',
                                            ],
                                          },
                                          line_number: 19,
                                        },
                                      ],
                                      callback2: [],
                                    },
                                    {
                                      type: 'ifelse',
                                      condition: [
                                        {
                                          condId: '83338006',
                                          options: {
                                            useManual: true,
                                            useObject: false,
                                            context: '$urlParam.scene$',
                                            operate: '==',
                                            manualValue: 'U',
                                          },
                                          conditionType: 'checkContextValue',
                                          objType: 'system',
                                          objId: 'sys',
                                        },
                                      ],
                                      dataId: 166744626201401600,
                                      elseIfs: [
                                        {
                                          dataName: 'elseIf',
                                          dataId: 166744626201514500,
                                          children: [
                                            {
                                              dataName: 'condition',
                                              dataId: 167893723455041800,
                                              children: [
                                                {
                                                  dataName: 'condition',
                                                  dataId: 169468609093719970,
                                                  children: [
                                                    {
                                                      dataName: 'action',
                                                      dataId: 169468609093776830,
                                                      children: [
                                                        {
                                                          dataName: 'callback',
                                                          dataId: 169468609093764260,
                                                          children: [],
                                                          value: 'callback1',
                                                          params: [],
                                                        },
                                                        {
                                                          dataName: 'callback',
                                                          dataId: 169468609093747460,
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
                                                          'callCustomPageFunc',
                                                        compName: 'system',
                                                        id: '948534',
                                                        pageJsonId: '9704152',
                                                        pathname:
                                                          '/approveWorkbench',
                                                        pageId:
                                                          '922008281896452096',
                                                        modalPath:
                                                          '/approveWorkbench',
                                                        customFuncName:
                                                          'refreshTable',
                                                        customFuncParams:
                                                          'object',
                                                        paramsObj: {
                                                          originTab:
                                                            '$urlParam.originTab$',
                                                        },
                                                        paramsObjKeyValueMap: {
                                                          originTab:
                                                            '$urlParam.originTab$',
                                                        },
                                                      },
                                                      actionObjId:
                                                        'callCustomPageFunc',
                                                      actionObjName: 'system',
                                                      value:
                                                        'callCustomPageFunc',
                                                      tips: '注意：选择的页面需要开启缓存（如：A页面跳转到B页面，B页面需要调用A页面的自定义事件，那么需要A页面需开启缓存）；',
                                                      line_number: 32,
                                                    },
                                                  ],
                                                  elseIfs: [],
                                                  condition: [
                                                    {
                                                      condId: '88707527',
                                                      options: {
                                                        context:
                                                          '$urlParam.originTab$',
                                                        operate: 'notEmpty',
                                                      },
                                                      conditionType:
                                                        'checkContextValue',
                                                      objType: 'system',
                                                      objId: 'sys',
                                                    },
                                                    {
                                                      options: {
                                                        useManual: true,
                                                        useObject: false,
                                                        context:
                                                          '$urlParam.originTab$',
                                                        operate: '!=',
                                                        manualValue: 'none',
                                                      },
                                                      condId: '668292',
                                                      connector: '&&',
                                                      conditionType:
                                                        'checkContextValue',
                                                      objType: 'system',
                                                      objId: 'sys',
                                                    },
                                                  ],
                                                  value: 'condition',
                                                  desc: '防止非工作台发起',
                                                  line_number: 31,
                                                },
                                                {
                                                  dataName: 'action',
                                                  dataId: 167893723455036100,
                                                  children: [],
                                                  todoOptions: [
                                                    'historyType',
                                                    'pathname',
                                                    'searchParams',
                                                  ],
                                                  options: {
                                                    compId: 'history',
                                                    compName: 'system',
                                                    id: '762607',
                                                    pageJsonId: '9704152',
                                                    type: 'push',
                                                    pathname:
                                                      '/approveWorkbench',
                                                    selectedType: 'page',
                                                    pageId:
                                                      '922008281896452096',
                                                    modalPath:
                                                      '/approveWorkbench',
                                                    paramsObj: {
                                                      originTab:
                                                        '$urlParam.originTab$',
                                                    },
                                                    paramsObjKeyValueMap: {
                                                      originTab:
                                                        '$urlParam.originTab$',
                                                    },
                                                  },
                                                  actionObjId: 'history',
                                                  actionObjName: 'system',
                                                  value: 'history',
                                                  line_number: 33,
                                                },
                                              ],
                                              elseIfs: [
                                                {
                                                  dataName: 'elseIf',
                                                  dataId: 167893723455067520,
                                                  children: [
                                                    {
                                                      dataName: 'condition',
                                                      dataId: 169468610435322530,
                                                      children: [
                                                        {
                                                          dataName: 'action',
                                                          dataId: 169468610435304700,
                                                          children: [
                                                            {
                                                              dataName:
                                                                'callback',
                                                              dataId: 169468610435324160,
                                                              children: [],
                                                              value:
                                                                'callback1',
                                                              params: [],
                                                            },
                                                            {
                                                              dataName:
                                                                'callback',
                                                              dataId: 169468610435399100,
                                                              children: [],
                                                              value:
                                                                'callback2',
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
                                                              'callCustomPageFunc',
                                                            compName: 'system',
                                                            id: '8853675',
                                                            pageJsonId:
                                                              '9704152',
                                                            pathname:
                                                              '/marketDeptApproveWorkbench',
                                                            pageId:
                                                              '953465319297417216',
                                                            modalPath:
                                                              '/marketDeptApproveWorkbench',
                                                            customFuncName:
                                                              'refreshTable',
                                                            customFuncParams:
                                                              'object',
                                                            paramsObj: {
                                                              originTab:
                                                                '$urlParam.originTab$',
                                                            },
                                                            paramsObjKeyValueMap:
                                                              {
                                                                originTab:
                                                                  '$urlParam.originTab$',
                                                              },
                                                          },
                                                          actionObjId:
                                                            'callCustomPageFunc',
                                                          actionObjName:
                                                            'system',
                                                          value:
                                                            'callCustomPageFunc',
                                                          tips: '注意：选择的页面需要开启缓存（如：A页面跳转到B页面，B页面需要调用A页面的自定义事件，那么需要A页面需开启缓存）；',
                                                          line_number: 35,
                                                        },
                                                      ],
                                                      elseIfs: [],
                                                      condition: [
                                                        {
                                                          condId: '88707527',
                                                          options: {
                                                            context:
                                                              '$urlParam.originTab$',
                                                            operate: 'notEmpty',
                                                          },
                                                          conditionType:
                                                            'checkContextValue',
                                                          objType: 'system',
                                                          objId: 'sys',
                                                        },
                                                        {
                                                          options: {
                                                            useManual: true,
                                                            useObject: false,
                                                            context:
                                                              '$urlParam.originTab$',
                                                            operate: '!=',
                                                            manualValue: 'none',
                                                          },
                                                          condId: '668292',
                                                          connector: '&&',
                                                          conditionType:
                                                            'checkContextValue',
                                                          objType: 'system',
                                                          objId: 'sys',
                                                        },
                                                      ],
                                                      value: 'condition',
                                                      desc: '防止非工作台发起',
                                                      line_number: 34,
                                                    },
                                                    {
                                                      dataName: 'action',
                                                      dataId: 167893723455032670,
                                                      children: [],
                                                      todoOptions: [
                                                        'historyType',
                                                        'pathname',
                                                        'searchParams',
                                                      ],
                                                      options: {
                                                        compId: 'history',
                                                        compName: 'system',
                                                        id: '285694',
                                                        pageJsonId: '9704152',
                                                        type: 'push',
                                                        pathname:
                                                          '/marketDeptApproveWorkbench',
                                                        selectedType: 'page',
                                                        pageId:
                                                          '953465319297417216',
                                                        modalPath:
                                                          '/marketDeptApproveWorkbench',
                                                        paramsObj: {
                                                          orginTab:
                                                            '$urlParam.originTab$',
                                                        },
                                                        paramsObjKeyValueMap: {
                                                          orginTab:
                                                            '$urlParam.originTab$',
                                                        },
                                                      },
                                                      actionObjId: 'history',
                                                      actionObjName: 'system',
                                                      value: 'history',
                                                      line_number: 36,
                                                    },
                                                  ],
                                                  condition: [
                                                    {
                                                      options: {
                                                        useManual: true,
                                                        useObject: false,
                                                        context:
                                                          '$urlParam.origin$',
                                                        operate: '==',
                                                        manualValue: '1',
                                                      },
                                                      condId: '7754044',
                                                      conditionType:
                                                        'checkContextValue',
                                                      objType: 'system',
                                                      objId: 'sys',
                                                    },
                                                  ],
                                                  desc: '等于1入口为市场部审批单工作台',
                                                  callback: [
                                                    {
                                                      type: 'ifelse',
                                                      condition: [
                                                        {
                                                          condId: '88707527',
                                                          options: {
                                                            context:
                                                              '$urlParam.originTab$',
                                                            operate: 'notEmpty',
                                                          },
                                                          conditionType:
                                                            'checkContextValue',
                                                          objType: 'system',
                                                          objId: 'sys',
                                                        },
                                                        {
                                                          options: {
                                                            useManual: true,
                                                            useObject: false,
                                                            context:
                                                              '$urlParam.originTab$',
                                                            operate: '!=',
                                                            manualValue: 'none',
                                                          },
                                                          condId: '668292',
                                                          connector: '&&',
                                                          conditionType:
                                                            'checkContextValue',
                                                          objType: 'system',
                                                          objId: 'sys',
                                                        },
                                                      ],
                                                      dataId: 169468610435322530,
                                                      elseIfs: [],
                                                      line_number: 34,
                                                      callback1: [
                                                        {
                                                          type: 'callCustomPageFunc',
                                                          dataId: 169468610435304700,
                                                          options: {
                                                            compId:
                                                              'callCustomPageFunc',
                                                            compName: 'system',
                                                            id: '8853675',
                                                            pageJsonId:
                                                              '9704152',
                                                            pathname:
                                                              '/marketDeptApproveWorkbench',
                                                            pageId:
                                                              '953465319297417216',
                                                            modalPath:
                                                              '/marketDeptApproveWorkbench',
                                                            customFuncName:
                                                              'refreshTable',
                                                            customFuncParams:
                                                              'object',
                                                            paramsObj: {
                                                              originTab:
                                                                '$urlParam.originTab$',
                                                            },
                                                            paramsObjKeyValueMap:
                                                              {
                                                                originTab:
                                                                  '$urlParam.originTab$',
                                                              },
                                                          },
                                                          line_number: 35,
                                                          callback1: [],
                                                          callback2: [],
                                                        },
                                                      ],
                                                    },
                                                    {
                                                      type: 'history',
                                                      dataId: 167893723455032670,
                                                      options: {
                                                        compId: 'history',
                                                        compName: 'system',
                                                        id: '285694',
                                                        pageJsonId: '9704152',
                                                        type: 'push',
                                                        pathname:
                                                          '/marketDeptApproveWorkbench',
                                                        selectedType: 'page',
                                                        pageId:
                                                          '953465319297417216',
                                                        modalPath:
                                                          '/marketDeptApproveWorkbench',
                                                        paramsObj: {
                                                          orginTab:
                                                            '$urlParam.originTab$',
                                                        },
                                                        paramsObjKeyValueMap: {
                                                          orginTab:
                                                            '$urlParam.originTab$',
                                                        },
                                                      },
                                                      line_number: 36,
                                                    },
                                                  ],
                                                },
                                              ],
                                              condition: [
                                                {
                                                  condId: '18122',
                                                  options: {
                                                    useManual: true,
                                                    useObject: false,
                                                    context:
                                                      '$urlParam.origin$',
                                                    operate: '==',
                                                    manualValue: '0',
                                                  },
                                                  conditionType:
                                                    'checkContextValue',
                                                  objType: 'system',
                                                  objId: 'sys',
                                                },
                                              ],
                                              desc: '等于0入口为政企部审批单工作台',
                                              line_number: 30,
                                            },
                                            {
                                              dataName: 'action',
                                              dataId: 167894575248876580,
                                              children: [],
                                              todoOptions: ['valueArray'],
                                              options: {
                                                compId: 'debug',
                                                compName: 'system',
                                                id: '519042',
                                                pageJsonId: '9704152',
                                                value: [
                                                  '=====审批单提交非处理=====',
                                                ],
                                              },
                                              actionObjId: 'debug',
                                              actionObjName: 'system',
                                              value: 'console',
                                              line_number: 37,
                                            },
                                          ],
                                          condition: [],
                                          callback: [
                                            {
                                              type: 'ifelse',
                                              condition: [
                                                {
                                                  condId: '18122',
                                                  options: {
                                                    useManual: true,
                                                    useObject: false,
                                                    context:
                                                      '$urlParam.origin$',
                                                    operate: '==',
                                                    manualValue: '0',
                                                  },
                                                  conditionType:
                                                    'checkContextValue',
                                                  objType: 'system',
                                                  objId: 'sys',
                                                },
                                              ],
                                              dataId: 167893723455041800,
                                              elseIfs: [
                                                {
                                                  dataName: 'elseIf',
                                                  dataId: 167893723455067520,
                                                  children: [
                                                    {
                                                      dataName: 'condition',
                                                      dataId: 169468610435322530,
                                                      children: [
                                                        {
                                                          dataName: 'action',
                                                          dataId: 169468610435304700,
                                                          children: [
                                                            {
                                                              dataName:
                                                                'callback',
                                                              dataId: 169468610435324160,
                                                              children: [],
                                                              value:
                                                                'callback1',
                                                              params: [],
                                                            },
                                                            {
                                                              dataName:
                                                                'callback',
                                                              dataId: 169468610435399100,
                                                              children: [],
                                                              value:
                                                                'callback2',
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
                                                              'callCustomPageFunc',
                                                            compName: 'system',
                                                            id: '8853675',
                                                            pageJsonId:
                                                              '9704152',
                                                            pathname:
                                                              '/marketDeptApproveWorkbench',
                                                            pageId:
                                                              '953465319297417216',
                                                            modalPath:
                                                              '/marketDeptApproveWorkbench',
                                                            customFuncName:
                                                              'refreshTable',
                                                            customFuncParams:
                                                              'object',
                                                            paramsObj: {
                                                              originTab:
                                                                '$urlParam.originTab$',
                                                            },
                                                            paramsObjKeyValueMap:
                                                              {
                                                                originTab:
                                                                  '$urlParam.originTab$',
                                                              },
                                                          },
                                                          actionObjId:
                                                            'callCustomPageFunc',
                                                          actionObjName:
                                                            'system',
                                                          value:
                                                            'callCustomPageFunc',
                                                          tips: '注意：选择的页面需要开启缓存（如：A页面跳转到B页面，B页面需要调用A页面的自定义事件，那么需要A页面需开启缓存）；',
                                                          line_number: 35,
                                                        },
                                                      ],
                                                      elseIfs: [],
                                                      condition: [
                                                        {
                                                          condId: '88707527',
                                                          options: {
                                                            context:
                                                              '$urlParam.originTab$',
                                                            operate: 'notEmpty',
                                                          },
                                                          conditionType:
                                                            'checkContextValue',
                                                          objType: 'system',
                                                          objId: 'sys',
                                                        },
                                                        {
                                                          options: {
                                                            useManual: true,
                                                            useObject: false,
                                                            context:
                                                              '$urlParam.originTab$',
                                                            operate: '!=',
                                                            manualValue: 'none',
                                                          },
                                                          condId: '668292',
                                                          connector: '&&',
                                                          conditionType:
                                                            'checkContextValue',
                                                          objType: 'system',
                                                          objId: 'sys',
                                                        },
                                                      ],
                                                      value: 'condition',
                                                      desc: '防止非工作台发起',
                                                      line_number: 34,
                                                    },
                                                    {
                                                      dataName: 'action',
                                                      dataId: 167893723455032670,
                                                      children: [],
                                                      todoOptions: [
                                                        'historyType',
                                                        'pathname',
                                                        'searchParams',
                                                      ],
                                                      options: {
                                                        compId: 'history',
                                                        compName: 'system',
                                                        id: '285694',
                                                        pageJsonId: '9704152',
                                                        type: 'push',
                                                        pathname:
                                                          '/marketDeptApproveWorkbench',
                                                        selectedType: 'page',
                                                        pageId:
                                                          '953465319297417216',
                                                        modalPath:
                                                          '/marketDeptApproveWorkbench',
                                                        paramsObj: {
                                                          orginTab:
                                                            '$urlParam.originTab$',
                                                        },
                                                        paramsObjKeyValueMap: {
                                                          orginTab:
                                                            '$urlParam.originTab$',
                                                        },
                                                      },
                                                      actionObjId: 'history',
                                                      actionObjName: 'system',
                                                      value: 'history',
                                                      line_number: 36,
                                                    },
                                                  ],
                                                  condition: [
                                                    {
                                                      options: {
                                                        useManual: true,
                                                        useObject: false,
                                                        context:
                                                          '$urlParam.origin$',
                                                        operate: '==',
                                                        manualValue: '1',
                                                      },
                                                      condId: '7754044',
                                                      conditionType:
                                                        'checkContextValue',
                                                      objType: 'system',
                                                      objId: 'sys',
                                                    },
                                                  ],
                                                  desc: '等于1入口为市场部审批单工作台',
                                                  callback: [
                                                    {
                                                      type: 'ifelse',
                                                      condition: [
                                                        {
                                                          condId: '88707527',
                                                          options: {
                                                            context:
                                                              '$urlParam.originTab$',
                                                            operate: 'notEmpty',
                                                          },
                                                          conditionType:
                                                            'checkContextValue',
                                                          objType: 'system',
                                                          objId: 'sys',
                                                        },
                                                        {
                                                          options: {
                                                            useManual: true,
                                                            useObject: false,
                                                            context:
                                                              '$urlParam.originTab$',
                                                            operate: '!=',
                                                            manualValue: 'none',
                                                          },
                                                          condId: '668292',
                                                          connector: '&&',
                                                          conditionType:
                                                            'checkContextValue',
                                                          objType: 'system',
                                                          objId: 'sys',
                                                        },
                                                      ],
                                                      dataId: 169468610435322530,
                                                      elseIfs: [],
                                                      line_number: 34,
                                                      callback1: [
                                                        {
                                                          type: 'callCustomPageFunc',
                                                          dataId: 169468610435304700,
                                                          options: {
                                                            compId:
                                                              'callCustomPageFunc',
                                                            compName: 'system',
                                                            id: '8853675',
                                                            pageJsonId:
                                                              '9704152',
                                                            pathname:
                                                              '/marketDeptApproveWorkbench',
                                                            pageId:
                                                              '953465319297417216',
                                                            modalPath:
                                                              '/marketDeptApproveWorkbench',
                                                            customFuncName:
                                                              'refreshTable',
                                                            customFuncParams:
                                                              'object',
                                                            paramsObj: {
                                                              originTab:
                                                                '$urlParam.originTab$',
                                                            },
                                                            paramsObjKeyValueMap:
                                                              {
                                                                originTab:
                                                                  '$urlParam.originTab$',
                                                              },
                                                          },
                                                          line_number: 35,
                                                          callback1: [],
                                                          callback2: [],
                                                        },
                                                      ],
                                                    },
                                                    {
                                                      type: 'history',
                                                      dataId: 167893723455032670,
                                                      options: {
                                                        compId: 'history',
                                                        compName: 'system',
                                                        id: '285694',
                                                        pageJsonId: '9704152',
                                                        type: 'push',
                                                        pathname:
                                                          '/marketDeptApproveWorkbench',
                                                        selectedType: 'page',
                                                        pageId:
                                                          '953465319297417216',
                                                        modalPath:
                                                          '/marketDeptApproveWorkbench',
                                                        paramsObj: {
                                                          orginTab:
                                                            '$urlParam.originTab$',
                                                        },
                                                        paramsObjKeyValueMap: {
                                                          orginTab:
                                                            '$urlParam.originTab$',
                                                        },
                                                      },
                                                      line_number: 36,
                                                    },
                                                  ],
                                                },
                                              ],
                                              line_number: 30,
                                              callback1: [
                                                {
                                                  type: 'ifelse',
                                                  condition: [
                                                    {
                                                      condId: '88707527',
                                                      options: {
                                                        context:
                                                          '$urlParam.originTab$',
                                                        operate: 'notEmpty',
                                                      },
                                                      conditionType:
                                                        'checkContextValue',
                                                      objType: 'system',
                                                      objId: 'sys',
                                                    },
                                                    {
                                                      options: {
                                                        useManual: true,
                                                        useObject: false,
                                                        context:
                                                          '$urlParam.originTab$',
                                                        operate: '!=',
                                                        manualValue: 'none',
                                                      },
                                                      condId: '668292',
                                                      connector: '&&',
                                                      conditionType:
                                                        'checkContextValue',
                                                      objType: 'system',
                                                      objId: 'sys',
                                                    },
                                                  ],
                                                  dataId: 169468609093719970,
                                                  elseIfs: [],
                                                  line_number: 31,
                                                  callback1: [
                                                    {
                                                      type: 'callCustomPageFunc',
                                                      dataId: 169468609093776830,
                                                      options: {
                                                        compId:
                                                          'callCustomPageFunc',
                                                        compName: 'system',
                                                        id: '948534',
                                                        pageJsonId: '9704152',
                                                        pathname:
                                                          '/approveWorkbench',
                                                        pageId:
                                                          '922008281896452096',
                                                        modalPath:
                                                          '/approveWorkbench',
                                                        customFuncName:
                                                          'refreshTable',
                                                        customFuncParams:
                                                          'object',
                                                        paramsObj: {
                                                          originTab:
                                                            '$urlParam.originTab$',
                                                        },
                                                        paramsObjKeyValueMap: {
                                                          originTab:
                                                            '$urlParam.originTab$',
                                                        },
                                                      },
                                                      line_number: 32,
                                                      callback1: [],
                                                      callback2: [],
                                                    },
                                                  ],
                                                },
                                                {
                                                  type: 'history',
                                                  dataId: 167893723455036100,
                                                  options: {
                                                    compId: 'history',
                                                    compName: 'system',
                                                    id: '762607',
                                                    pageJsonId: '9704152',
                                                    type: 'push',
                                                    pathname:
                                                      '/approveWorkbench',
                                                    selectedType: 'page',
                                                    pageId:
                                                      '922008281896452096',
                                                    modalPath:
                                                      '/approveWorkbench',
                                                    paramsObj: {
                                                      originTab:
                                                        '$urlParam.originTab$',
                                                    },
                                                    paramsObjKeyValueMap: {
                                                      originTab:
                                                        '$urlParam.originTab$',
                                                    },
                                                  },
                                                  line_number: 33,
                                                },
                                              ],
                                            },
                                            {
                                              type: 'console',
                                              dataId: 167894575248876580,
                                              options: {
                                                compId: 'debug',
                                                compName: 'system',
                                                id: '519042',
                                                pageJsonId: '9704152',
                                                value: [
                                                  '=====审批单提交非处理=====',
                                                ],
                                              },
                                              line_number: 37,
                                            },
                                          ],
                                        },
                                      ],
                                      line_number: 20,
                                      callback1: [
                                        {
                                          type: 'ifelse',
                                          condition: [
                                            {
                                              condId: '18122',
                                              options: {
                                                useManual: true,
                                                useObject: false,
                                                context: '$urlParam.origin$',
                                                operate: '==',
                                                manualValue: '0',
                                              },
                                              conditionType:
                                                'checkContextValue',
                                              objType: 'system',
                                              objId: 'sys',
                                            },
                                          ],
                                          dataId: 167145393676783520,
                                          elseIfs: [
                                            {
                                              dataName: 'elseIf',
                                              dataId: 167893292437729860,
                                              children: [
                                                {
                                                  dataName: 'condition',
                                                  dataId: 169468606405485020,
                                                  children: [
                                                    {
                                                      dataName: 'action',
                                                      dataId: 169468607776321340,
                                                      children: [
                                                        {
                                                          dataName: 'callback',
                                                          dataId: 169468607776378270,
                                                          children: [],
                                                          value: 'callback1',
                                                          params: [],
                                                        },
                                                        {
                                                          dataName: 'callback',
                                                          dataId: 169468607776383840,
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
                                                          'callCustomPageFunc',
                                                        compName: 'system',
                                                        id: '957513',
                                                        pageJsonId: '9704152',
                                                        pathname:
                                                          '/marketDeptApproveWorkbench',
                                                        pageId:
                                                          '953465319297417216',
                                                        modalPath:
                                                          '/marketDeptApproveWorkbench',
                                                        customFuncName:
                                                          'refreshTable',
                                                        customFuncParams:
                                                          'object',
                                                        paramsObj: {
                                                          originTab:
                                                            '$urlParam.originTab$',
                                                        },
                                                        paramsObjKeyValueMap: {
                                                          originTab:
                                                            '$urlParam.originTab$',
                                                        },
                                                      },
                                                      actionObjId:
                                                        'callCustomPageFunc',
                                                      actionObjName: 'system',
                                                      value:
                                                        'callCustomPageFunc',
                                                      tips: '注意：选择的页面需要开启缓存（如：A页面跳转到B页面，B页面需要调用A页面的自定义事件，那么需要A页面需开启缓存）；',
                                                      line_number: 26,
                                                    },
                                                  ],
                                                  elseIfs: [],
                                                  condition: [
                                                    {
                                                      condId: '88707527',
                                                      options: {
                                                        context:
                                                          '$urlParam.originTab$',
                                                        operate: 'notEmpty',
                                                      },
                                                      conditionType:
                                                        'checkContextValue',
                                                      objType: 'system',
                                                      objId: 'sys',
                                                    },
                                                    {
                                                      options: {
                                                        useManual: true,
                                                        useObject: false,
                                                        context:
                                                          '$urlParam.originTab$',
                                                        operate: '!=',
                                                        manualValue: 'none',
                                                      },
                                                      condId: '668292',
                                                      connector: '&&',
                                                      conditionType:
                                                        'checkContextValue',
                                                      objType: 'system',
                                                      objId: 'sys',
                                                    },
                                                  ],
                                                  value: 'condition',
                                                  desc: '防止非工作台发起',
                                                  line_number: 25,
                                                },
                                                {
                                                  dataName: 'action',
                                                  dataId: 167893294665200060,
                                                  children: [],
                                                  todoOptions: [
                                                    'historyType',
                                                    'pathname',
                                                    'searchParams',
                                                  ],
                                                  options: {
                                                    compId: 'history',
                                                    compName: 'system',
                                                    id: '83802',
                                                    pageJsonId: '9704152',
                                                    type: 'push',
                                                    pathname:
                                                      '/marketDeptApproveWorkbench',
                                                    selectedType: 'page',
                                                    pageId:
                                                      '953465319297417216',
                                                    modalPath:
                                                      '/marketDeptApproveWorkbench',
                                                    paramsObj: {},
                                                    paramsObjKeyValueMap: {},
                                                  },
                                                  actionObjId: 'history',
                                                  actionObjName: 'system',
                                                  value: 'history',
                                                  line_number: 27,
                                                },
                                              ],
                                              condition: [
                                                {
                                                  options: {
                                                    useManual: true,
                                                    useObject: false,
                                                    context:
                                                      '$urlParam.origin$',
                                                    operate: '==',
                                                    manualValue: '1',
                                                  },
                                                  condId: '7754044',
                                                  conditionType:
                                                    'checkContextValue',
                                                  objType: 'system',
                                                  objId: 'sys',
                                                },
                                              ],
                                              desc: '等于1入口为市场部审批单工作台',
                                              callback: [
                                                {
                                                  type: 'ifelse',
                                                  condition: [
                                                    {
                                                      condId: '88707527',
                                                      options: {
                                                        context:
                                                          '$urlParam.originTab$',
                                                        operate: 'notEmpty',
                                                      },
                                                      conditionType:
                                                        'checkContextValue',
                                                      objType: 'system',
                                                      objId: 'sys',
                                                    },
                                                    {
                                                      options: {
                                                        useManual: true,
                                                        useObject: false,
                                                        context:
                                                          '$urlParam.originTab$',
                                                        operate: '!=',
                                                        manualValue: 'none',
                                                      },
                                                      condId: '668292',
                                                      connector: '&&',
                                                      conditionType:
                                                        'checkContextValue',
                                                      objType: 'system',
                                                      objId: 'sys',
                                                    },
                                                  ],
                                                  dataId: 169468606405485020,
                                                  elseIfs: [],
                                                  line_number: 25,
                                                  callback1: [
                                                    {
                                                      type: 'callCustomPageFunc',
                                                      dataId: 169468607776321340,
                                                      options: {
                                                        compId:
                                                          'callCustomPageFunc',
                                                        compName: 'system',
                                                        id: '957513',
                                                        pageJsonId: '9704152',
                                                        pathname:
                                                          '/marketDeptApproveWorkbench',
                                                        pageId:
                                                          '953465319297417216',
                                                        modalPath:
                                                          '/marketDeptApproveWorkbench',
                                                        customFuncName:
                                                          'refreshTable',
                                                        customFuncParams:
                                                          'object',
                                                        paramsObj: {
                                                          originTab:
                                                            '$urlParam.originTab$',
                                                        },
                                                        paramsObjKeyValueMap: {
                                                          originTab:
                                                            '$urlParam.originTab$',
                                                        },
                                                      },
                                                      line_number: 26,
                                                      callback1: [],
                                                      callback2: [],
                                                    },
                                                  ],
                                                },
                                                {
                                                  type: 'history',
                                                  dataId: 167893294665200060,
                                                  options: {
                                                    compId: 'history',
                                                    compName: 'system',
                                                    id: '83802',
                                                    pageJsonId: '9704152',
                                                    type: 'push',
                                                    pathname:
                                                      '/marketDeptApproveWorkbench',
                                                    selectedType: 'page',
                                                    pageId:
                                                      '953465319297417216',
                                                    modalPath:
                                                      '/marketDeptApproveWorkbench',
                                                    paramsObj: {},
                                                    paramsObjKeyValueMap: {},
                                                  },
                                                  line_number: 27,
                                                },
                                              ],
                                            },
                                            {
                                              dataName: 'elseIf',
                                              dataId: 167145395434262180,
                                              children: [
                                                {
                                                  dataName: 'action',
                                                  dataId: 167145395575944580,
                                                  children: [],
                                                  todoOptions: [
                                                    'historyType',
                                                    'pathname',
                                                    'searchParams',
                                                  ],
                                                  options: {
                                                    compId: 'history',
                                                    compName: 'system',
                                                    id: '411942',
                                                    pageJsonId: '9704152',
                                                    type: 'push',
                                                    pathname:
                                                      '/approveOrderTodo',
                                                    selectedType: 'page',
                                                    pageId:
                                                      '878815340415455232',
                                                    modalPath:
                                                      '/approveOrderTodo',
                                                  },
                                                  actionObjId: 'history',
                                                  actionObjName: 'system',
                                                  value: 'history',
                                                  line_number: 28,
                                                },
                                              ],
                                              condition: [],
                                              callback: [
                                                {
                                                  type: 'history',
                                                  dataId: 167145395575944580,
                                                  options: {
                                                    compId: 'history',
                                                    compName: 'system',
                                                    id: '411942',
                                                    pageJsonId: '9704152',
                                                    type: 'push',
                                                    pathname:
                                                      '/approveOrderTodo',
                                                    selectedType: 'page',
                                                    pageId:
                                                      '878815340415455232',
                                                    modalPath:
                                                      '/approveOrderTodo',
                                                  },
                                                  line_number: 28,
                                                },
                                              ],
                                            },
                                          ],
                                          line_number: 21,
                                          callback1: [
                                            {
                                              type: 'ifelse',
                                              condition: [
                                                {
                                                  condId: '88707527',
                                                  options: {
                                                    context:
                                                      '$urlParam.originTab$',
                                                    operate: 'notEmpty',
                                                  },
                                                  conditionType:
                                                    'checkContextValue',
                                                  objType: 'system',
                                                  objId: 'sys',
                                                },
                                                {
                                                  options: {
                                                    useManual: true,
                                                    useObject: false,
                                                    context:
                                                      '$urlParam.originTab$',
                                                    operate: '!=',
                                                    manualValue: 'none',
                                                  },
                                                  condId: '668292',
                                                  connector: '&&',
                                                  conditionType:
                                                    'checkContextValue',
                                                  objType: 'system',
                                                  objId: 'sys',
                                                },
                                              ],
                                              dataId: 169468602390020200,
                                              elseIfs: [],
                                              line_number: 22,
                                              callback1: [
                                                {
                                                  type: 'callCustomPageFunc',
                                                  dataId: 169468606934055330,
                                                  options: {
                                                    compId:
                                                      'callCustomPageFunc',
                                                    compName: 'system',
                                                    id: '9506948',
                                                    pageJsonId: '9704152',
                                                    pathname:
                                                      '/approveWorkbench',
                                                    pageId:
                                                      '922008281896452096',
                                                    modalPath:
                                                      '/approveWorkbench',
                                                    customFuncName:
                                                      'refreshTable',
                                                    customFuncParams: 'object',
                                                    paramsObj: {
                                                      originTab:
                                                        '$urlParam.originTab$',
                                                    },
                                                    paramsObjKeyValueMap: {
                                                      originTab:
                                                        '$urlParam.originTab$',
                                                    },
                                                  },
                                                  line_number: 23,
                                                  callback1: [],
                                                  callback2: [],
                                                },
                                              ],
                                            },
                                            {
                                              type: 'history',
                                              dataId: 167145395323295600,
                                              options: {
                                                compId: 'history',
                                                compName: 'system',
                                                id: '226853',
                                                pageJsonId: '9704152',
                                                type: 'push',
                                                pathname: '/approveWorkbench',
                                                selectedType: 'page',
                                                pageId: '922008281896452096',
                                                modalPath: '/approveWorkbench',
                                                paramsObj: {},
                                                paramsObjKeyValueMap: {},
                                              },
                                              line_number: 24,
                                            },
                                          ],
                                        },
                                        {
                                          type: 'console',
                                          dataId: 167894572210430530,
                                          options: {
                                            compId: 'debug',
                                            compName: 'system',
                                            id: '677302',
                                            pageJsonId: '9704152',
                                            value: [
                                              '===审批单提交-处理界面===',
                                            ],
                                          },
                                          line_number: 29,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  type: 'setLoading',
                                  dataId: 166417574222786940,
                                  shielding: true,
                                  options: {
                                    compId: 'Button_2061707_637045_014961',
                                    compLib: 'comm',
                                    pageJsonId: '9704152',
                                    compName: 'Button',
                                    id: '41061',
                                    loading: false,
                                  },
                                  line_number: 38,
                                },
                                {
                                  type: 'setLoading',
                                  dataId: 168923335102490000,
                                  options: {
                                    compId: 'View_9704152_1',
                                    compLib: 'custom',
                                    pageJsonId: '9704152',
                                    compName: 'View',
                                    id: '697359',
                                    loading: false,
                                  },
                                  line_number: 39,
                                },
                              ],
                              callback2: [
                                {
                                  type: 'setLoading',
                                  dataId: 166417574222740600,
                                  shielding: true,
                                  options: {
                                    compId: 'Button_2061707_637045_014961',
                                    compLib: 'comm',
                                    pageJsonId: '9704152',
                                    compName: 'Button',
                                    id: '2067096',
                                    loading: false,
                                  },
                                  line_number: 40,
                                },
                                {
                                  type: 'setLoading',
                                  dataId: 168923335913804540,
                                  options: {
                                    compId: 'View_9704152_1',
                                    compLib: 'custom',
                                    pageJsonId: '9704152',
                                    compName: 'View',
                                    id: '995134',
                                    loading: false,
                                  },
                                  line_number: 41,
                                },
                              ],
                            },
                          ],
                          callback2: [],
                        },
                      ],
                    },
                  ],
                  callback2: [
                    {
                      type: 'showMessage',
                      dataId: 166261905291356580,
                      options: {
                        compId: 'showMessage',
                        compName: 'system',
                        id: '379168',
                        pageJsonId: '9704152',
                        type: 'warn',
                        value: '请选择处理人',
                      },
                      line_number: 43,
                    },
                  ],
                },
              ];
              eventDatavalidateForm3.params =
                [
                  {
                    title: '事件对象',
                    value: '$e$',
                    name: 'e',
                    label: '事件对象',
                  },
                ] || [];
              CMDGenerator(eventDatavalidateForm3, { e }, 'validateForm', {
                id: 'validateForm',
                name: 'validateForm',
                type: 'validateForm',
                platform: 'pc',
              });
            }}
            ref={(r: any) => (refs['Button_2061707_637045_014961'] = r)}
            {...injectData}
          />
          <Button
            name={'返回'}
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
              id: 'Button_8796906_85186',
              uid: 'Button_8796906_85186',
              type: 'Button',
              ...componentItem,
            }}
            disabled={false}
            visible={false}
            readOnly={false}
            style={{ width: 'fit-content', margin: '0px 0px 0px 5px' }}
            onClick={(e: any) => {
              const eventDatacustomActionCode454: any = [
                {
                  type: 'customActionCode',
                  dataId: 167383770805888670,
                  options: {
                    compId: 'customActionCode',
                    compName: 'page',
                    id: '297486',
                    pageJsonId: '9704152',
                    code: 'function main(data,state,success,fail){window.localStorage.removeItem(data.draft_message.coding);success()};',
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatacustomActionCode454.params =
                [
                  {
                    title: '事件对象',
                    value: '$e$',
                    name: 'e',
                    label: '事件对象',
                  },
                ] || [];
              CMDGenerator(
                eventDatacustomActionCode454,
                { e },
                'customActionCode',
                {
                  id: 'customActionCode',
                  name: 'customActionCode',
                  type: 'customActionCode',
                  platform: 'pc',
                },
              );
              const eventDataifelse409: any = [
                {
                  type: 'ifelse',
                  condition: [
                    {
                      condId: '142305',
                      options: {
                        useManual: true,
                        useObject: false,
                        context: '$urlParam.origin$',
                        operate: '==',
                        manualValue: '0',
                      },
                      conditionType: 'checkContextValue',
                      objType: 'system',
                      objId: 'sys',
                    },
                  ],
                  dataId: 167151608618715600,
                  elseIfs: [
                    {
                      dataName: 'elseIf',
                      dataId: 167893310126438180,
                      children: [
                        {
                          dataName: 'action',
                          dataId: 167893313498005950,
                          children: [],
                          todoOptions: [
                            'historyType',
                            'pathname',
                            'searchParams',
                          ],
                          options: {
                            compId: 'history',
                            compName: 'system',
                            id: '5221615',
                            pageJsonId: '9704152',
                            type: 'push',
                            pathname: '/marketDeptApproveWorkbench',
                            selectedType: 'page',
                          },
                          actionObjId: 'history',
                          actionObjName: 'system',
                          value: 'history',
                          line_number: 6,
                        },
                        {
                          dataName: 'condition',
                          dataId: 169468614554985180,
                          children: [
                            {
                              dataName: 'action',
                              dataId: 169468614987304930,
                              children: [
                                {
                                  dataName: 'callback',
                                  dataId: 169468614987369900,
                                  children: [],
                                  value: 'callback1',
                                  params: [],
                                },
                                {
                                  dataName: 'callback',
                                  dataId: 169468614987381950,
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
                                compId: 'callCustomPageFunc',
                                compName: 'system',
                                id: '12654595',
                                pageJsonId: '9704152',
                                pathname: '/marketDeptApproveWorkbench',
                                pageId: '953465319297417216',
                                modalPath: '/marketDeptApproveWorkbench',
                                customFuncName: 'refreshTable',
                                customFuncParams: 'object',
                                paramsObj: {
                                  originTab: '$urlParam.originTab$',
                                },
                                paramsObjKeyValueMap: {
                                  originTab: '$urlParam.originTab$',
                                },
                              },
                              actionObjId: 'callCustomPageFunc',
                              actionObjName: 'system',
                              value: 'callCustomPageFunc',
                              tips: '注意：选择的页面需要开启缓存（如：A页面跳转到B页面，B页面需要调用A页面的自定义事件，那么需要A页面需开启缓存）；',
                              line_number: 8,
                            },
                          ],
                          elseIfs: [],
                          condition: [
                            {
                              condId: '88707527',
                              options: {
                                context: '$urlParam.originTab$',
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
                                context: '$urlParam.originTab$',
                                operate: '!=',
                                manualValue: 'none',
                              },
                              condId: '668292',
                              connector: '&&',
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          value: 'condition',
                          desc: '防止非工作台发起',
                          line_number: 7,
                        },
                      ],
                      condition: [
                        {
                          options: {
                            useManual: true,
                            useObject: false,
                            context: '$urlParam.origin$',
                            operate: '==',
                            manualValue: '1',
                          },
                          condId: '761651',
                          conditionType: 'checkContextValue',
                          objType: 'system',
                          objId: 'sys',
                        },
                      ],
                      desc: 'origin为1则返回市场部审批工作台',
                      callback: [
                        {
                          type: 'history',
                          dataId: 167893313498005950,
                          options: {
                            compId: 'history',
                            compName: 'system',
                            id: '5221615',
                            pageJsonId: '9704152',
                            type: 'push',
                            pathname: '/marketDeptApproveWorkbench',
                            selectedType: 'page',
                          },
                          line_number: 6,
                        },
                        {
                          type: 'ifelse',
                          condition: [
                            {
                              condId: '88707527',
                              options: {
                                context: '$urlParam.originTab$',
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
                                context: '$urlParam.originTab$',
                                operate: '!=',
                                manualValue: 'none',
                              },
                              condId: '668292',
                              connector: '&&',
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          dataId: 169468614554985180,
                          elseIfs: [],
                          line_number: 7,
                          callback1: [
                            {
                              type: 'callCustomPageFunc',
                              dataId: 169468614987304930,
                              options: {
                                compId: 'callCustomPageFunc',
                                compName: 'system',
                                id: '12654595',
                                pageJsonId: '9704152',
                                pathname: '/marketDeptApproveWorkbench',
                                pageId: '953465319297417216',
                                modalPath: '/marketDeptApproveWorkbench',
                                customFuncName: 'refreshTable',
                                customFuncParams: 'object',
                                paramsObj: {
                                  originTab: '$urlParam.originTab$',
                                },
                                paramsObjKeyValueMap: {
                                  originTab: '$urlParam.originTab$',
                                },
                              },
                              line_number: 8,
                              callback1: [],
                              callback2: [],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      dataName: 'elseIf',
                      dataId: 167151610280664480,
                      children: [
                        {
                          dataName: 'action',
                          dataId: 167151610466882620,
                          children: [],
                          todoOptions: [
                            'historyType',
                            'pathname',
                            'searchParams',
                          ],
                          options: {
                            compId: 'history',
                            compName: 'system',
                            id: '1660253',
                            pageJsonId: '9704152',
                            type: 'push',
                            pathname: '/approveOrderTodo',
                            selectedType: 'page',
                            pageId: '878815340415455232',
                            modalPath: '/approveOrderTodo',
                          },
                          actionObjId: 'history',
                          actionObjName: 'system',
                          value: 'history',
                          line_number: 9,
                        },
                      ],
                      condition: [],
                      callback: [
                        {
                          type: 'history',
                          dataId: 167151610466882620,
                          options: {
                            compId: 'history',
                            compName: 'system',
                            id: '1660253',
                            pageJsonId: '9704152',
                            type: 'push',
                            pathname: '/approveOrderTodo',
                            selectedType: 'page',
                            pageId: '878815340415455232',
                            modalPath: '/approveOrderTodo',
                          },
                          line_number: 9,
                        },
                      ],
                    },
                  ],
                  line_number: 2,
                  callback1: [
                    {
                      type: 'ifelse',
                      condition: [
                        {
                          condId: '88707527',
                          options: {
                            context: '$urlParam.originTab$',
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
                            context: '$urlParam.originTab$',
                            operate: '!=',
                            manualValue: 'none',
                          },
                          condId: '668292',
                          connector: '&&',
                          conditionType: 'checkContextValue',
                          objType: 'system',
                          objId: 'sys',
                        },
                      ],
                      dataId: 169468612892879580,
                      elseIfs: [],
                      line_number: 3,
                      callback1: [
                        {
                          type: 'callCustomPageFunc',
                          dataId: 169468613604137570,
                          options: {
                            compId: 'callCustomPageFunc',
                            compName: 'system',
                            id: '131421',
                            pageJsonId: '9704152',
                            pathname: '/approveWorkbench',
                            pageId: '922008281896452096',
                            modalPath: '/approveWorkbench',
                            customFuncName: 'refreshTable',
                            customFuncParams: 'object',
                            paramsObj: { originTab: '$urlParam.originTab$' },
                            paramsObjKeyValueMap: {
                              originTab: '$urlParam.originTab$',
                            },
                          },
                          line_number: 4,
                          callback1: [],
                          callback2: [],
                        },
                      ],
                    },
                    {
                      type: 'history',
                      dataId: 167151610924473150,
                      options: {
                        compId: 'history',
                        compName: 'system',
                        id: '2393967',
                        pageJsonId: '9704152',
                        type: 'push',
                        pathname: '/approveWorkbench',
                        selectedType: 'page',
                        pageId: '922008281896452096',
                        modalPath: '/approveWorkbench',
                      },
                      line_number: 5,
                    },
                  ],
                },
              ];
              eventDataifelse409.params =
                [
                  {
                    title: '事件对象',
                    value: '$e$',
                    name: 'e',
                    label: '事件对象',
                  },
                ] || [];
              CMDGenerator(eventDataifelse409, { e }, 'ifelse', {
                id: 'ifelse',
                name: 'ifelse',
                type: 'ifelse',
                platform: 'pc',
              });
            }}
            ref={(r: any) => (refs['Button_8796906_85186'] = r)}
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(AuditOrderSubmit$$Page, {
  pageId: '884057477263503360',
  hasLogin: false,
  dataSource,
  defaultState: { ordersSubmit: '' },
});
