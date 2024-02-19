// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import {
  Card,
  Description,
  Form,
  QuillEditor,
  Table,
  Text,
  View,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const AuditDetailsModal$$Modal: React.FC<PageProps> = ({
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
  forwardedRef,
}) => {
  const getFactor = (options_357128: any) => {
    // console 166255097358009000
    console.log('父页面回调。。。。');
    // console 166255097672324030
    console.log(options_357128);
    const eventDatacustomActionCode221: any = [
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
    eventDatacustomActionCode221.params =
      [
        {
          title: '事件入参',
          name: 'options_357128',
          value: '$options_357128$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode221,
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
    const eventDatacustomActionCode222: any = [
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
    eventDatacustomActionCode222.params =
      [
        { title: '事件入参', name: 'options_49305', value: '$options_49305$' },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode222,
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
  const auditOrderDeal = (options_4658057: any) => {
    const eventDatacustomActionCode223: any = [
      {
        type: 'customActionCode',
        dataId: 166571689396703200,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '8258255',
          pageJsonId: '9704152',
          code: 'function main(data,state,success,fail){var customerListResp=options_4658057.svcCont.data.content.customerList;var customerList=[];if(customerListResp!=undefined){for(var i=0;i<customerListResp.length;i++){customerList.push({"groupId":customerListResp[i].custId,"groupName":customerListResp[i].custName,"valueLevel":customerListResp[i].custValueLevel,"valueLevelName":customerListResp[i].custValueLevelName,"orgTypeName":customerListResp[i].custOrgName,"orgType":customerListResp[i].custOrg,"managerName":customerListResp[i].custManageName,"managerId":customerListResp[i].custManageStaff,"manageContactTel":customerListResp[i].custManagerTel,"homeCityName":customerListResp[i].custLanName,"homeCounty":customerListResp[i].custAreaId,"tradeclassTopName":customerListResp[i].custIndustryTypeName,"address":customerListResp[i].custAddress,"homeCountyName":customerListResp[i].custAreaName,"tradeclassTop":customerListResp[i].custIndustryType,"homeCity":customerListResp[i].custLanId,"contactTel":customerListResp[i].contactTel,"enterpriseScope":customerListResp[i].enterpriseScope,"enterpriseScopeName":customerListResp[i].enterpriseScopeName})}}var url=[];var childProper=[];var urlResp=options_4658057.svcCont.data.content.itemList;for(var i=0;i<urlResp.length;i++){url.push(urlResp[i].childCatalogCode);childProper.push({"url":urlResp[i].childCatalogCode,"itemList":urlResp[i]})}options_4658057=options_4658057;data.pageParam.childProper=childProper;data.fileInfoList=options_4658057.svcCont.data.content.fileInfo;data.groupObjList=customerList;if(customerList.length>0){data.groupObj=customerList[0]}data.draft_message=options_4658057.svcCont.operator;data.draft_message.addr=data.draft_message.lanId+data.draft_message.areaId;data.draft_message.staffInfo=data.draft_message.staffName+"("+data.draft_message.staffCode+")";console.log("detailData",data);console.log("childProper",childProper);success(childProper)};',
          actionTitle: '客户信息转换、子场景路径设置',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 166571689396779230,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '460348',
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
                  value: { type: ['context', '$data_8258255$'], code: '' },
                },
                {
                  attrId: '033692',
                  code: 'flowCode',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static', value: '' },
                },
                {
                  attrId: '0977908',
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
            line_number: 2,
            callback1: [],
            callback2: [],
          },
          {
            type: 'setValue',
            dataId: 166571689396713150,
            options: {
              compId: ['QuillEditor_637236_25551'],
              compLib: 'comm',
              pageJsonId: '9704152',
              compName: 'QuillEditor',
              id: '40315145',
              value:
                '$options_4658057.svcCont.data.content.approveInfo.applyInfo$',
              valueList: {
                QuillEditor_637236_25551:
                  '$options_4658057.svcCont.data.content.approveInfo.applyInfo$',
              },
              compid: ['QuillEditor_637236_25551'],
            },
            line_number: 3,
            callback1: [],
          },
          {
            type: 'setCompContentValue',
            dataId: 166823765922363260,
            options: {
              compId: 'Text_331457_850218_1983355',
              compLib: 'custom',
              pageJsonId: '9704152',
              compName: 'Text',
              id: '77738',
              value: '$options_4658057.svcCont.data.orderNbr$',
            },
            line_number: 4,
            callback1: [],
          },
          {
            type: 'apiRequest',
            dataId: 166571689396738530,
            shielding: true,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '104855',
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
                  dataKey: '9149204_header',
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
                      dataKey: '9149204_path.catalogCode',
                      value: {
                        type: ['customize'],
                        code: '$data_8258255[0].url$',
                      },
                    },
                  ],
                  _id: 'path',
                  compType: 'Input',
                  parents: [],
                  id: 'path',
                  dataKey: '9149204_path',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'query',
                  compType: 'Input',
                  parents: [],
                  id: 'query',
                  dataKey: '9149204_query',
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  _id: 'body',
                  compType: 'Input',
                  parents: [],
                  id: 'body',
                  dataKey: '9149204_body',
                },
              ],
            },
            line_number: 5,
            callback1: [
              {
                type: 'ifelse',
                shielding: true,
                condition: [
                  {
                    condId: '164447',
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$reply_104855?.resultData.col7$',
                      operate: '==',
                      manualValue: '1000',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166571689396726560,
                elseIfs: [],
                line_number: 6,
                callback1: [
                  {
                    type: 'sysSetVisible',
                    dataId: 166571689396750820,
                    shielding: true,
                    options: {
                      compId: ['Table_994258'],
                      compName: 'page',
                      id: '069413',
                      pageJsonId: '9704152',
                      compid: ['Table_994258'],
                    },
                    line_number: 7,
                  },
                  {
                    type: 'sysSetVisible',
                    dataId: 166571689396701570,
                    shielding: true,
                    options: {
                      compId: ['Description_424409'],
                      compName: 'page',
                      id: '847738',
                      pageJsonId: '9704152',
                      compid: ['Description_424409'],
                      visible: 'true',
                    },
                    line_number: 8,
                  },
                ],
              },
              {
                type: 'ifelse',
                shielding: true,
                condition: [
                  {
                    condId: '866644',
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$reply_104855?.resultData.col7$',
                      operate: '==',
                      manualValue: '2000',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166571689396799800,
                elseIfs: [],
                line_number: 9,
                callback1: [
                  {
                    type: 'sysSetVisible',
                    dataId: 166571689396797500,
                    shielding: true,
                    options: {
                      compId: ['Description_424409'],
                      compName: 'page',
                      id: '11236',
                      pageJsonId: '9704152',
                      compid: ['Description_424409'],
                    },
                    line_number: 10,
                  },
                  {
                    type: 'sysSetVisible',
                    dataId: 166571689396728350,
                    shielding: true,
                    options: {
                      compId: ['Table_994258'],
                      compName: 'page',
                      id: '1181597',
                      pageJsonId: '9704152',
                      compid: ['Table_994258'],
                      visible: 'true',
                    },
                    line_number: 11,
                  },
                ],
              },
              {
                type: 'ifelse',
                shielding: true,
                condition: [
                  {
                    condId: '510536',
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$reply_104855?.resultData.col7$',
                      operate: '==',
                      manualValue: '3000',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                  {
                    options: {
                      context: '$reply_104855?.resultData.col7$',
                      operate: 'empty',
                    },
                    condId: '17922',
                    connector: '||',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166571689396729500,
                elseIfs: [],
                line_number: 12,
                callback1: [
                  {
                    type: 'sysSetVisible',
                    dataId: 166571689396714050,
                    shielding: true,
                    options: {
                      compId: ['Card_5914895'],
                      compName: 'page',
                      id: '15665',
                      pageJsonId: '9704152',
                      compid: ['Card_5914895'],
                    },
                    line_number: 13,
                  },
                ],
              },
              {
                type: 'setDataSource',
                dataId: 166571689396734430,
                shielding: true,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '5440165',
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
                      attrId: '0977908',
                      code: 'groupType',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['customize'],
                        code: '$reply_104855?.resultData.col7$',
                      },
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
            ],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode223.params =
      [
        {
          title: '事件入参',
          name: 'options_4658057',
          value: '$options_4658057$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode223,
      { options_4658057 },
      'customActionCode',
      {
        id: 'customActionCode',
        name: 'customActionCode',
        type: 'customActionCode',
        platform: 'undefined',
      },
    );
    const eventDataifelse62: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '185552',
            options: {
              context: '$options_4658057.svcCont.data.extOrderNbr$',
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
              context: '$options_4658057.svcCont.data.sourceFrom$',
              operate: '==',
              manualValue: 'bop',
            },
            condId: '1839283',
            connector: '&&',
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 166571690410362140,
        elseIfs: [],
        line_number: 15,
        callback1: [
          {
            type: 'setVisible',
            dataId: 166571690410354430,
            options: {
              compId: 'Input_32550878_867458',
              compLib: 'comm',
              pageJsonId: '9704152',
              compName: 'Input',
              id: '680724',
              visible: 'true',
            },
            line_number: 16,
          },
          {
            type: 'setValue',
            dataId: 166571690410330780,
            options: {
              compId: 'Input_32550878_867458',
              compLib: 'comm',
              pageJsonId: '9704152',
              compName: 'Input',
              id: '18518064',
              value: '$options_4658057.svcCont.data.extOrderNbr$',
            },
            line_number: 17,
            callback1: [],
          },
          {
            type: 'setDisable',
            dataId: 166571690410313380,
            options: {
              compId: 'Input_32550878_867458',
              compLib: 'comm',
              pageJsonId: '9704152',
              compName: 'Input',
              id: '49856092',
              disabled: 'true',
            },
            line_number: 18,
          },
        ],
      },
    ];
    eventDataifelse62.params =
      [
        {
          title: '事件入参',
          name: 'options_4658057',
          value: '$options_4658057$',
        },
      ] || [];
    CMDGenerator(eventDataifelse62, { options_4658057 }, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    getFactor,
    auditClassCalcul,
    auditOrderDeal,
  }));

  useEffect(() => {
    const eventDataapiRequest643: any = [
      {
        type: 'apiRequest',
        dataId: 166798676442372670,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '0730843',
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
              parents: [],
              id: 'header',
              dataKey: '580094_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '580094_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '580094_query',
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
                  parents: ['body'],
                  id: 'body.instNbr',
                  dataKey: '580094_body.instNbr',
                  value: { type: ['context', '$state.instNbr$'], code: '' },
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
                  parents: ['body'],
                  id: 'body.instId',
                  dataKey: '580094_body.instId',
                  value: { type: ['context', '$state.instId$'], code: '' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '580094_body',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 166798676442348600,
            shielding: true,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '8996718',
              pageJsonId: '9704152',
              code: 'function main(data,state,success,fail){var _reply_;data.ordersSubmit=JSON.parse((_reply_=reply_391948)===null||_reply_===void 0?void 0:_reply_.resultData);var customerListResp=data.ordersSubmit.svcCont.data.content.customerList;var customerList=[];if(customerListResp!=undefined){for(var i=0;i<customerListResp.length;i++){customerList.push({"group_id":customerListResp[i].custId,"group_name":customerListResp[i].custName,"group_level":customerListResp[i].custValueLevel,"group_level_name":customerListResp[i].custValueLevelName,"org_type_name":customerListResp[i].custOrgName,"org_type":customerListResp[i].custOrg,"manager_name":customerListResp[i].custManageName,"manager_id":customerListResp[i].custManageStaff,"manage_contact_tel":customerListResp[i].custManagerTel,"Home_city_name":customerListResp[i].custLanName,"home_county":customerListResp[i].custAreaId,"tradeclass_top_name":customerListResp[i].custIndustryTypeName,"address":customerListResp[i].custAddress,"home_county_name":customerListResp[i].custAreaName,"tradeclass_top":customerListResp[i].custIndustryType,"home_city":customerListResp[i].custLanId})}}var url=[];var childProper=[];var urlResp=data.ordersSubmit.svcCont.data.content.itemList;console.log("-------------------------------------------------------------------");console.log(data.ordersSubmit);console.log(urlResp[0]);for(var i=0;i<urlResp.length;i++){url.push(urlResp[i].childCatalogCode);childProper.push({"url":urlResp[i].childCatalogCode,"itemList":urlResp[i]})}data.ordersSubmit=data.ordersSubmit;data.pageParam.childProper=childProper;data.fileInfoList=data.ordersSubmit.svcCont.data.content.fileInfo;data.group_info=customerList;if(customerList.length>0){data.singleGroupInfo=customerList[0]}data.draft_message=data.ordersSubmit.svcCont.operator;success(childProper)};',
              actionTitle: '客户信息转换、子场景路径设置',
            },
            line_number: 2,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 166798676442381380,
                shielding: true,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '141478',
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
                      value: { type: ['context', '$data_8996718$'], code: '' },
                    },
                    {
                      attrId: '033692',
                      code: 'flowCode',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static', value: '' },
                    },
                    {
                      attrId: '0977908',
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
                line_number: 3,
                callback1: [],
                callback2: [],
              },
              {
                type: 'setValue',
                dataId: 166798676442355650,
                shielding: true,
                options: {
                  compId: 'QuillEditor_637236',
                  compLib: 'comm',
                  pageJsonId: '9704152',
                  compName: 'QuillEditor',
                  id: '568609',
                  value:
                    '$data.ordersSubmit.svcCont.data.content.approveInfo.applyInfo$',
                },
                line_number: 4,
                callback1: [],
              },
              {
                type: 'setValue',
                dataId: 166798676442351360,
                shielding: true,
                options: {
                  compId: 'Input_014189',
                  compLib: 'comm',
                  pageJsonId: '9704152',
                  compName: 'Input',
                  id: '6641978',
                  value:
                    '$data.ordersSubmit.svcCont.data.content.approveInfo.approveGradeName$',
                },
                line_number: 5,
                callback1: [],
              },
              {
                type: 'setValue',
                dataId: 166798676442396500,
                shielding: true,
                options: {
                  compId: 'Input_32550878',
                  compLib: 'comm',
                  pageJsonId: '9704152',
                  compName: 'Input',
                  id: '37224',
                  value: '$data.ordersSubmit.svcCont.data.title$',
                },
                line_number: 6,
                callback1: [],
              },
              {
                type: 'setCompContentValue',
                dataId: 166798676442366600,
                shielding: true,
                options: {
                  compId: 'Text_331457_850218',
                  compLib: 'custom',
                  pageJsonId: '9704152',
                  compName: 'Text',
                  id: '9101194',
                  value: '$data.ordersSubmit.svcCont.data.orderNbr$',
                },
                line_number: 7,
                callback1: [],
              },
              {
                type: 'apiRequest',
                dataId: 166798676442321500,
                shielding: true,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '4537654',
                  pageJsonId: '9704152',
                  sync: false,
                  method: 'post',
                  url: '/app/rhin/gateway/callRhinEngine',
                  _capabilityCode: 'SYS_getDcCatalogByCode',
                  _apiCode: 'getDcCatalogByCode',
                  _source: 'rhin',
                  _serviceId: '881821311255793664',
                  _serviceTitle:
                    '根据类目编码查询单个类目-wy: getDcCatalogByCode',
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
                      dataKey: '9149204_header',
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
                          dataKey: '9149204_path.catalogCode',
                          value: {
                            type: ['customize'],
                            code: '$data_8996718[0].url$',
                          },
                        },
                      ],
                      _id: 'path',
                      compType: 'Input',
                      parents: [],
                      id: 'path',
                      dataKey: '9149204_path',
                    },
                    {
                      code: 'query',
                      name: 'URL 参数',
                      attrType: 'object',
                      _id: 'query',
                      compType: 'Input',
                      parents: [],
                      id: 'query',
                      dataKey: '9149204_query',
                    },
                    {
                      code: 'body',
                      name: '请求体',
                      attrType: 'object',
                      _id: 'body',
                      compType: 'Input',
                      parents: [],
                      id: 'body',
                      dataKey: '9149204_body',
                    },
                  ],
                },
                line_number: 8,
                callback1: [
                  {
                    type: 'ifelse',
                    shielding: true,
                    condition: [
                      {
                        condId: '164447',
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$reply_4537654?.resultData.col7$',
                          operate: '==',
                          manualValue: '1000',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 166798676442322460,
                    elseIfs: [],
                    line_number: 9,
                    callback1: [
                      {
                        type: 'sysSetVisible',
                        dataId: 166798676442303040,
                        shielding: true,
                        options: {
                          compId: ['Table_994258'],
                          compName: 'page',
                          id: '861008',
                          pageJsonId: '9704152',
                          compid: ['Table_994258'],
                        },
                        line_number: 10,
                      },
                      {
                        type: 'sysSetVisible',
                        dataId: 166798676442319330,
                        shielding: true,
                        options: {
                          compId: ['Description_424409'],
                          compName: 'page',
                          id: '5474617',
                          pageJsonId: '9704152',
                          compid: ['Description_424409'],
                          visible: 'true',
                        },
                        line_number: 11,
                      },
                    ],
                  },
                  {
                    type: 'ifelse',
                    shielding: true,
                    condition: [
                      {
                        condId: '866644',
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$reply_4537654?.resultData.col7$',
                          operate: '==',
                          manualValue: '2000',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 166798676442375970,
                    elseIfs: [],
                    line_number: 12,
                    callback1: [
                      {
                        type: 'sysSetVisible',
                        dataId: 166798676442310050,
                        shielding: true,
                        options: {
                          compId: ['Description_424409'],
                          compName: 'page',
                          id: '0053323',
                          pageJsonId: '9704152',
                          compid: ['Description_424409'],
                        },
                        line_number: 13,
                      },
                      {
                        type: 'sysSetVisible',
                        dataId: 166798676442364770,
                        shielding: true,
                        options: {
                          compId: ['Table_994258'],
                          compName: 'page',
                          id: '7395865',
                          pageJsonId: '9704152',
                          compid: ['Table_994258'],
                          visible: 'true',
                        },
                        line_number: 14,
                      },
                    ],
                  },
                  {
                    type: 'ifelse',
                    shielding: true,
                    condition: [
                      {
                        condId: '510536',
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$reply_4537654?.resultData.col7$',
                          operate: '==',
                          manualValue: '3000',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                      {
                        options: {
                          context: '$reply_4537654?.resultData.col7$',
                          operate: 'empty',
                        },
                        condId: '17922',
                        connector: '||',
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 166798676442363780,
                    elseIfs: [],
                    line_number: 15,
                    callback1: [
                      {
                        type: 'sysSetVisible',
                        dataId: 166798676442335140,
                        shielding: true,
                        options: {
                          compId: ['Card_5914895'],
                          compName: 'page',
                          id: '079631',
                          pageJsonId: '9704152',
                          compid: ['Card_5914895'],
                        },
                        line_number: 16,
                      },
                    ],
                  },
                  {
                    type: 'setDataSource',
                    dataId: 166798676442391580,
                    shielding: true,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '4158646',
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
                          attrId: '0977908',
                          code: 'groupType',
                          name: '属性',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: [
                              'context',
                              '$reply_4537654?.resultObject.resultData.col7$',
                            ],
                            hideAttr: true,
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
            callback2: [],
          },
          {
            type: 'ifelse',
            shielding: true,
            condition: [
              {
                condId: '185552',
                options: {
                  context:
                    '$JSON.parse(reply_0730843?.resultData).svcCont.data.extOrderNbr$',
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
                  context:
                    '$JSON.parse(reply_0730843?.resultData).svcCont.data.sourceFrom$',
                  operate: '==',
                  manualValue: 'bop',
                },
                condId: '1839283',
                connector: '&&',
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 166798676442397280,
            elseIfs: [],
            line_number: 18,
            callback1: [
              {
                type: 'setVisible',
                dataId: 166798676442395650,
                shielding: true,
                options: {
                  compId: 'Input_32550878_867458',
                  compLib: 'comm',
                  pageJsonId: '9704152',
                  compName: 'Input',
                  id: '600432',
                  visible: 'true',
                },
                line_number: 19,
              },
              {
                type: 'setValue',
                dataId: 166798676442304770,
                shielding: true,
                options: {
                  compId: 'Input_32550878_867458',
                  compLib: 'comm',
                  pageJsonId: '9704152',
                  compName: 'Input',
                  id: '544358',
                  value:
                    '$JSON.parse(reply_0730843?.resultData).svcCont.data.extOrderNbr$',
                },
                line_number: 20,
                callback1: [],
              },
              {
                type: 'setDisable',
                dataId: 166798676442319200,
                shielding: true,
                options: {
                  compId: 'Input_32550878_867458',
                  compLib: 'comm',
                  pageJsonId: '9704152',
                  compName: 'Input',
                  id: '181944',
                  disabled: 'true',
                },
                line_number: 21,
              },
            ],
          },
          {
            type: 'customActionCode',
            dataId: 166798676442337500,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '3469045',
              pageJsonId: '9704152',
              code: 'function main(data,state,success,fail){var _reply_;success(JSON.parse((_reply_=reply_0730843)===null||_reply_===void 0?void 0:_reply_.resultData))};',
            },
            line_number: 22,
            callback1: [
              {
                type: 'console',
                dataId: 166823737344143940,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '379774',
                  pageJsonId: '9704152',
                  value: ['审批详情数据', '$data_3469045$'],
                },
                line_number: 23,
              },
              {
                type: 'callSelfFunc',
                dataId: 166798676442333900,
                options: {
                  compId: 'callSelfFunc',
                  compName: 'system',
                  id: '9755036',
                  pageJsonId: '9704152',
                  customFuncName: 'auditOrderDeal',
                  customFuncParams: '$data_3469045$',
                },
                line_number: 24,
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
    eventDataapiRequest643.params = [] || [];
    CMDGenerator(eventDataapiRequest643, {}, 'apiRequest', {
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
      className="__CustomClass_9704152__"
    >
      <View
        name={'页面'}
        visible={true}
        className={'fixed-form-item-label-width-120'}
        backgroundType={{ type: 'cleanColor', color: undefined }}
        $$componentItem={{
          id: 'View_9704152_1_436365',
          uid: 'View_9704152_1_436365',
          type: 'View',
          ...componentItem,
        }}
        style={{
          minHeight: '100%',
          display: 'flex',
          padding: '20px 20px 20px 20px',
          flexDirection: 'column',
          overflowY: 'auto',
          width: 'auto',
        }}
        ref={(r: any) => (refs['View_9704152_1_436365'] = r)}
        {...injectData}
      >
        <View
          name={'布局容器'}
          visible={true}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_183103_0410717',
            uid: 'View_183103_0410717',
            type: 'View',
            ...componentItem,
          }}
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '10px 0px 0px 0px',
            width: '100%',
            textAlign: 'center',
            margin: '0px 0px 0px 0px',
          }}
          ref={(r: any) => (refs['View_183103_0410717'] = r)}
          {...injectData}
        >
          <Text
            name={'title'}
            visible={true}
            content={'集团客户业务审批单'}
            textType={'h1'}
            version={'1.0'}
            showHtml={false}
            $$componentItem={{
              id: 'Text_728821_875879',
              uid: 'Text_728821_875879',
              type: 'Text',
              ...componentItem,
            }}
            style={{
              fontSize: 26,
              lineHeight: '24px',
              color: '#1c242e',
              textAlign: 'center',
              fontWeight: '',
              letterSpacing: '',
            }}
            ref={(r: any) => (refs['Text_728821_875879'] = r)}
            {...injectData}
          />
        </View>
        <View
          name={'布局容器'}
          visible={true}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_2218655_657974',
            uid: 'View_2218655_657974',
            type: 'View',
            ...componentItem,
          }}
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '0px 8px 0px 0px',
            width: '100%',
            textAlign: 'right',
          }}
          ref={(r: any) => (refs['View_2218655_657974'] = r)}
          {...injectData}
        >
          <Text
            name={'编号'}
            visible={true}
            content={'                                编号：'}
            textType={'span'}
            version={'1.0'}
            showHtml={false}
            formItemIndex={4}
            $$componentItem={{
              id: 'Text_331457_3626',
              uid: 'Text_331457_3626',
              type: 'Text',
              ...componentItem,
            }}
            style={{
              fontSize: 16,
              lineHeight: '24px',
              color: 'rgba(50, 137, 249, 1)',
              textAlign: 'right',
            }}
            ref={(r: any) => (refs['Text_331457_3626'] = r)}
            {...injectData}
          />
          <Text
            name={'文本'}
            visible={true}
            textType={'span'}
            version={'1.0'}
            showHtml={false}
            formItemIndex={5}
            $$componentItem={{
              id: 'Text_331457_850218_1983355',
              uid: 'Text_331457_850218_1983355',
              type: 'Text',
              ...componentItem,
            }}
            style={{ fontSize: 18, lineHeight: '24px', color: '#3289f9' }}
            ref={(r: any) => (refs['Text_331457_850218_1983355'] = r)}
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
          visible={true}
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
            id: 'Card_886999_6204882',
            uid: 'Card_886999_6204882',
            type: 'Card',
            ...componentItem,
          }}
          disabled={false}
          readOnly={false}
          style={{
            padding: '20px 20px 20px 20px',
            overflowY: 'visible',
            margin: '0 0 16px 0',
          }}
          ref={(r: any) => (refs['Card_886999_6204882'] = r)}
          {...injectData}
        >
          <Description
            name={'描述列表'}
            visible={true}
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
                id: '082894',
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
                id: '98836',
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
                id: '692037',
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
                id: '147138',
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
                id: '363559',
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
                id: '082894',
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
                id: '98836',
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
                id: '692037',
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
                id: '147138',
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
                id: '363559',
                span: 16,
              },
            ]}
            labelSize={'120px'}
            $$componentItem={{
              id: 'Description_61586_690029',
              uid: 'Description_61586_690029',
              type: 'Description',
              ...componentItem,
            }}
            ref={(r: any) => (refs['Description_61586_690029'] = r)}
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
          visible={true}
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
            id: 'Card_5914895_299813',
            uid: 'Card_5914895_299813',
            type: 'Card',
            ...componentItem,
          }}
          disabled={false}
          readOnly={false}
          style={{
            padding: '20px 20px 20px 20px',
            overflowY: 'visible',
            margin: '0 0 16px 0',
          }}
          ref={(r: any) => (refs['Card_5914895_299813'] = r)}
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
                id: '536393',
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
                id: '114884',
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
                id: '283545',
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
                key: 'enterpriseScopeName',
                dataIndex: 'enterpriseScopeName',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '企业类型名称',
                      attrId: '904701091378315266',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                id: '31985',
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
                title: '客户经理',
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
                id: '148874',
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
                className: 'divider',
                id: '163765',
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
                className: 'divider',
                id: '7826993',
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
                id: '707212',
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
            selectType={0}
            bordered={'segmentation'}
            size={'middle'}
            fixedAction={false}
            showHead={false}
            showTotal={false}
            showSizeChanger={false}
            showQuickJumper={false}
            pageSizeOptions={'[5,10,20]'}
            rowKey={'id'}
            dataSource={data?.groupObjList}
            dataSourceFromDataSourceConfig={'data.groupObjList'}
            $$componentItem={{
              id: 'Table_994258_0297237',
              uid: 'Table_994258_0297237',
              type: 'Table',
              ...componentItem,
            }}
            rowSelection={undefined}
            style={{ margin: '10px 0px 0px 0px' }}
            ref={(r: any) => (refs['Table_994258_0297237'] = r)}
            {...injectData}
          />
          <Description
            name={'描述列表'}
            visible={false}
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
                id: '092564',
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
                id: '564316',
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
                id: '089772',
                customRendering: undefined,
              },
              {
                title: '企业类型名称',
                key: 'enterpriseScopeName',
                dataIndex: 'enterpriseScopeName',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '企业类型名称',
                      attrId: '904701091378315266',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                label: '企业类型名称',
                id: '408073',
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
                label: '客户经理',
                id: '424503',
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
                label: '客户经理工号',
                id: '116797',
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
                label: '客户经理电话',
                id: '511047',
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
                id: '4447724',
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
                id: '092564',
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
                id: '564316',
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
                id: '089772',
              },
              {
                title: '企业类型名称',
                key: 'enterpriseScopeName',
                dataIndex: 'enterpriseScopeName',
                editoption: {
                  edittype: 'Input',
                  selectoption: {
                    attr: {
                      attrName: '企业类型名称',
                      attrId: '904701091378315266',
                      attrNbr: null,
                    },
                  },
                },
                edittype: 'string',
                label: '企业类型名称',
                id: '408073',
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
                label: '客户经理',
                id: '424503',
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
                label: '客户经理工号',
                id: '116797',
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
                label: '客户经理电话',
                id: '511047',
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
                id: '4447724',
              },
            ]}
            labelSize={'120px'}
            $$componentItem={{
              id: 'Description_424409_381284',
              uid: 'Description_424409_381284',
              type: 'Description',
              ...componentItem,
            }}
            style={{ margin: '10px 0px 0px 0px' }}
            ref={(r: any) => (refs['Description_424409_381284'] = r)}
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
          visible={true}
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
            id: 'Card_6571733_52364',
            uid: 'Card_6571733_52364',
            type: 'Card',
            ...componentItem,
          }}
          disabled={false}
          readOnly={false}
          style={{
            padding: '20px 20px 20px 20px',
            overflowY: 'visible',
            margin: '0 0 16px 0',
          }}
          ref={(r: any) => (refs['Card_6571733_52364'] = r)}
          {...injectData}
        >
          <Form
            name={'表单'}
            colSpan={24}
            labelCol={8}
            wrapperCol={16}
            colon={true}
            layout={'horizontal'}
            labelAlign={'right'}
            visible={true}
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_541805'}
            $$componentItem={{
              id: 'Form_541805_6251186',
              uid: 'Form_541805_6251186',
              type: 'Form',
              ...componentItem,
            }}
            style={{ padding: '0px 0px 0px 0px', margin: '8px 0px 8px 0px' }}
            ref={(r: any) => (refs['Form_541805_6251186'] = r)}
            {...injectData}
          >
            <QuillEditor
              name={'审批内容'}
              disabled={true}
              visible={true}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              selfSpan={24}
              labelCol={'120px'}
              wrapperCol={'auto'}
              height={200}
              imageType={'file'}
              fieldName={'applyContent'}
              required={false}
              formItemIndex={0}
              $$componentItem={{
                id: 'QuillEditor_637236_25551',
                uid: 'QuillEditor_637236_25551',
                type: 'QuillEditor',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => (refs['QuillEditor_637236_25551'] = r)}
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
            visible={false}
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
              id: 'Table_035381_986137',
              uid: 'Table_035381_986137',
              type: 'Table',
              ...componentItem,
            }}
            style={{ margin: '10px 0px 0px 0px' }}
            onClickBtn1={(rowId: any, row: any, index: any) => {
              // console 166087437703121660
              console.log('行ID');
              // console 166087439177279200
              console.log(rowId);
              const eventDatadownloadByFileId129: any = [
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
              eventDatadownloadByFileId129.params =
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
                eventDatadownloadByFileId129,
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
              const eventDatacustomActionCode897: any = [
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
              eventDatacustomActionCode897.params =
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
                eventDatacustomActionCode897,
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
            ref={(r: any) => (refs['Table_035381_986137'] = r)}
            {...injectData}
          />
        </Card>
      </View>
    </div>
  );
};

export default withPageHOC(AuditDetailsModal$$Modal, {
  pageId: '907454980792348672',
  hasLogin: false,
  dataSource,
  defaultState: {
    ordersSubmit: '',
    bizId: '',
    sceneCode: '',
    pageUrl: '',
    instId: '',
    scene: '',
    instNbr: '',
    workId: '',
    flowCode: '',
    tacheName: '',
    workItemId: '',
    busiObjNbr: '',
    isRollback: '',
  },
});
