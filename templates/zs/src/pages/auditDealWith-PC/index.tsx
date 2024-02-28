// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  Text,
  Card,
  RemoteComponent,
  Icon,
  Collapse,
  CollapsePanel,
  Description,
  Form,
  Input,
  QuillEditor,
  Table,
  GridView,
  Button,
} from '@/components/factory';

import Pageview from '@/components/Pageview';

import BusiComp3851874 from '@/components/BusiComp3851874';

import BusiComp0496635 from '@/components/BusiComp0496635';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import { styleInject } from '@/utils/styleInject';

import dataSource from './dataSource.json';

styleInject(
  '.__CustomClass_9704152__ .View_9704152_1 .custom-class .ued-collapse-panel-header::before{left:8px!important;}.__CustomClass_9704152__ .View_9704152_1 .custom-class .ued-collapse-panel-header{padding-left:20px!important;}',

  '9704152',
);

const pageId = '884773713167953920';
const AuditDealWithPc$$Page: React.FC<PageProps> = ({
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
  const getFactor = (options_357128: any) => {
    // console 166255097358009000
    console.log('父页面回调。。。。');
    // console 166255097672324030
    console.log(options_357128);
    const eventDatacustomActionCode82: any = [
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
    eventDatacustomActionCode82.params =
      [
        {
          title: '事件入参',
          name: 'options_357128',
          value: '$options_357128$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode82,
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
    const eventDatacustomActionCode83: any = [
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
    eventDatacustomActionCode83.params =
      [
        { title: '事件入参', name: 'options_49305', value: '$options_49305$' },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode83,
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
    const eventDatacustomActionCode84: any = [
      {
        type: 'customActionCode',
        dataId: 166571689396703200,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '8258255',
          pageJsonId: '9704152',
          code: 'function main(data,state,success,fail){console.log("\\u5BA1\\u6279\\u5355\\u5904\\u7406\\u81EA\\u5B9A\\u4E49\\u4E8B\\u4EF6-\\u4E8B\\u4EF6\\u5165\\u53C2",options_4658057);var customerListResp=options_4658057.svcCont.data.content.customerList;var customerList=[];if(customerListResp!=undefined){for(var i=0;i<customerListResp.length;i++){customerList.push({"groupId":customerListResp[i].custId,"groupName":customerListResp[i].custName,"valueLevel":customerListResp[i].custValueLevel,"valueLevelName":customerListResp[i].custValueLevelName,"orgTypeName":customerListResp[i].custOrgName,"orgType":customerListResp[i].custOrg,"managerName":customerListResp[i].custManageName,"managerId":customerListResp[i].custManageStaff,"managerContactTel":customerListResp[i].custManagerTel,"homeCityName":customerListResp[i].custLanName,"homeCounty":customerListResp[i].custAreaId,"tradeclassTopName":customerListResp[i].custIndustryTypeName,"address":customerListResp[i].custAddress,"homeCountyName":customerListResp[i].custAreaName,"tradeclassTop":customerListResp[i].custIndustryType,"homeCity":customerListResp[i].custLanId,"contactTel":customerListResp[i].contactTel,"enterpriseKind":customerListResp[i].enterpriseKind,"enterpriseKindName":customerListResp[i].enterpriseKindName,"groupCreditLevel":customerListResp[i].groupCreditLevel,"managerCreditRisk":customerListResp[i].managerCreditRisk})}}var url=[];var childProper=[];var urlResp=options_4658057.svcCont.data.content.itemList;var sourceFrom=options_4658057.svcCont.data.sourceFrom;for(var i=0;i<urlResp.length;i++){url.push(urlResp[i].childCatalogCode);if(urlResp[i].sceneUrl==null||urlResp[i].sceneUrl==undefined){urlResp[i].sceneUrl=urlResp[i].childCatalogCode}if(urlResp[i].childCatalogCode==="CLS_CP_0007_0003"){if(urlResp[i].instList==null||urlResp[i].instList.length<1){urlResp[i].sceneUrl=urlResp[i].sceneUrl+"_OLD"}}childProper.push({"url":urlResp[i].sceneUrl,"itemList":urlResp[i],"catalogCode":urlResp[i].childCatalogCode,"sourceFrom":sourceFrom})}options_4658057=options_4658057;data.pageParam.childProper=childProper;console.log("\\u9875\\u9762\\u53C2\\u6570\\u3002\\u3002\\u3002\\u3002\\u3002\\u3002\\u3002\\u3002\\u3002\\u3002\\u3002\\u3002\\u3002\\u3002\\u3002");console.log(data.pageParam);var fileInfo=options_4658057.svcCont.data.content.fileInfo;if(fileInfo!=null&&fileInfo!=undefined&&fileInfo.length>0&&fileInfo[0].fileName!=undefined){data.fileInfoList=fileInfo}data.groupObjList=customerList;if(customerList.length>0){data.groupObj=customerList[0]}data.draft_message=options_4658057.svcCont.operator;var addr="";if(data.draft_message.lanId!=undefined&&data.draft_message.lanId!=null){addr=data.draft_message.lanId}if(data.draft_message.areaId!=undefined&&data.draft_message.areaId!=null){addr=addr+data.draft_message.areaId}data.draft_message.addr=addr;var staffInfo="";if(data.draft_message.staffName!=undefined&&data.draft_message.staffName!=null){staffInfo=data.draft_message.staffName}if(data.draft_message.staffCode!=undefined&&data.draft_message.staffCode!=null){staffInfo=staffInfo+"("+data.draft_message.staffCode+")"}data.draft_message.staffInfo=staffInfo;data.draft_message.coding=options_4658057.svcCont.data.orderNbr;success(childProper)};',
          actionTitle: '客户信息转换、子场景路径设置',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 168872064649288030,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '153779',
              pageJsonId: '9704152',
              dataSourceId: 166029173018920830,
              dataSourceName: 'pageParam',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  attrId: '045638',
                  code: 'tacheCode',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static', value: 'CreateOrder' },
                  showInput: true,
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
                      showInput: false,
                    },
                    {
                      attrId: '51947094',
                      code: 'itemList',
                      name: '子节点参数',
                      type: 'object',
                      initialData: { type: 'static' },
                      parentCode: 'childProper',
                      parentKey: 'childProper',
                      showInput: false,
                    },
                    {
                      attrId: '778353',
                      code: 'catalogCode',
                      name: '场景编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      parentCode: 'childProper',
                      parentKey: 'childProper',
                    },
                  ],
                  showInput: true,
                  value: { type: ['context', '$data_8258255$'], code: '' },
                },
                {
                  attrId: '033692',
                  code: 'flowCode',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static', value: '' },
                  showInput: true,
                },
                {
                  attrId: '0977908',
                  code: 'groupType',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                },
                {
                  attrId: '594383',
                  code: 'instOrder',
                  name: '审批编号',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                },
                {
                  attrId: '9825589',
                  code: 'instId',
                  name: '审批单id',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                },
                {
                  attrId: '570193',
                  code: 'effectDate',
                  name: '审批单有效期',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                },
                {
                  attrId: '860434',
                  code: 'dealPageUrl',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                },
                {
                  attrId: '77864',
                  code: 'createRejectBtnDisable',
                  name: '属性',
                  type: 'boolean',
                  initialData: { type: 'static', value: 'false' },
                  showInput: true,
                },
                {
                  attrId: '284931',
                  code: 'catalogCode',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                },
                {
                  attrId: '975583',
                  code: 'isRollback',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                },
                {
                  attrId: '795999',
                  code: 'isSendHead',
                  name: '送总部标识',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: ['customize'],
                    code: '$options_4658057.svcCont.data.content.approveInfo.isSendHead$',
                  },
                },
                {
                  attrId: '884583',
                  code: 'busiObjNbr',
                  name: '单号',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: ['customize'],
                    code: '$options_4658057.svcCont.data.orderNbr$',
                  },
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
              targetDataSourcePaths: [],
            },
            line_number: 2,
            callback1: [
              {
                type: 'sysSetVisible',
                dataId: 169096527039918820,
                options: {
                  compId: ['BOFramer_438929'],
                  compName: 'page',
                  id: '640754',
                  pageJsonId: '9704152',
                  visible: 'true',
                  compid: ['BOFramer_438929'],
                },
                line_number: 3,
              },
            ],
            callback2: [],
          },
          {
            type: 'console',
            dataId: 169095871377948060,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '939918',
              pageJsonId: '9704152',
              value: [
                '是否：',
                '$options_4658057.svcCont.data.content.approveInfo.isSendHead$',
              ],
            },
            line_number: 4,
          },
          {
            type: 'setValue',
            dataId: 166987896106688160,
            shielding: true,
            options: {
              compId: 'QuillEditor_637236_622641',
              compLib: 'comm',
              pageJsonId: '9704152',
              compName: 'QuillEditor',
              id: '202206',
              valueList: {
                QuillEditor_637236_622641:
                  '$options_4658057.svcCont.data.content.approveInfo.applyInfo$',
              },
            },
            line_number: 5,
            callback1: [],
          },
          {
            type: 'setValue',
            dataId: 166571689396713150,
            shielding: true,
            options: {
              compId: 'QuillEditor_637236',
              compLib: 'comm',
              pageJsonId: '9704152',
              compName: 'QuillEditor',
              id: '40315145',
              value:
                '$options_4658057.svcCont.data.content.approveInfo.applyInfo$',
              valueList: {
                QuillEditor_637236:
                  '$options_4658057.svcCont.data.content.approveInfo.applyInfo$',
              },
            },
            line_number: 6,
            callback1: [],
          },
          {
            type: 'setValue',
            dataId: 166571689396703840,
            options: {
              compId: 'Input_014189',
              compLib: 'comm',
              pageJsonId: '9704152',
              compName: 'Input',
              id: '5707862',
              value:
                '$options_4658057.svcCont.data.content.approveInfo.approveGradeName$',
              valueList: {
                Input_014189:
                  '$options_4658057.svcCont.data.content.approveInfo.approveGradeName$',
              },
            },
            line_number: 7,
            callback1: [],
          },
          {
            type: 'setValue',
            dataId: 166571689396790750,
            options: {
              compId: 'Input_32550878',
              compLib: 'comm',
              pageJsonId: '9704152',
              compName: 'Input',
              id: '313361',
              value: '$options_4658057.svcCont.data.title$',
              valueList: {
                Input_32550878: '$options_4658057.svcCont.data.title$',
              },
            },
            line_number: 8,
            callback1: [],
          },
          {
            type: 'setCompContentValue',
            dataId: 167052152488690180,
            options: {
              compId: 'Text_331457_850218_85208',
              compLib: 'custom',
              pageJsonId: '9704152',
              compName: 'Text',
              id: '398673',
              value: '$options_4658057.svcCont.data.orderNbr$',
            },
            line_number: 9,
            callback1: [],
          },
          {
            type: 'apiRequest',
            dataId: 166571689396738530,
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
                      dataKey: '104855_root.header',
                      key: '0-0',
                      parentType: 'object',
                      parentKey: '0',
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
                          _id: 'root.path.catalogCode',
                          compType: 'Input',
                          parents: ['root', 'path'],
                          id: 'root.path.catalogCode',
                          dataKey: '104855_root.path.catalogCode',
                          value: {
                            type: ['customize'],
                            code: '$data_8258255[0].catalogCode$',
                          },
                          parentType: 'object',
                          parentKey: '0-1',
                          key: '0-1-0',
                        },
                      ],
                      _id: 'root.path',
                      compType: 'Input',
                      parents: ['root'],
                      id: 'root.path',
                      dataKey: '104855_root.path',
                      key: '0-1',
                      parentType: 'object',
                      parentKey: '0',
                    },
                    {
                      code: 'query',
                      name: 'URL 参数',
                      attrType: 'object',
                      _id: 'root.query',
                      compType: 'Input',
                      parents: ['root'],
                      id: 'root.query',
                      dataKey: '104855_root.query',
                      key: '0-2',
                      parentType: 'object',
                      parentKey: '0',
                    },
                    {
                      code: 'body',
                      name: '请求体',
                      attrType: 'object',
                      _id: 'root.body',
                      compType: 'Input',
                      parents: ['root'],
                      id: 'root.body',
                      dataKey: '104855_root.body',
                      key: '0-3',
                      parentType: 'object',
                      parentKey: '0',
                    },
                  ],
                  _id: 'root',
                  compType: 'Input',
                  isRoot: true,
                  parents: [],
                  key: '0',
                  id: 'root',
                  dataKey: '104855_root',
                },
              ],
              _sourceName: '根据类目编码查询单个类目-tsm',
            },
            line_number: 10,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '164447',
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$reply_104855?.resultData.groupType$',
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
                line_number: 11,
                callback1: [
                  {
                    type: 'sysSetVisible',
                    dataId: 166571689396750820,
                    options: {
                      compId: ['Table_994258'],
                      compName: 'page',
                      id: '069413',
                      pageJsonId: '9704152',
                      compid: ['Table_994258'],
                    },
                    line_number: 12,
                  },
                  {
                    type: 'sysSetVisible',
                    dataId: 166571689396701570,
                    options: {
                      compId: ['Description_424409'],
                      compName: 'page',
                      id: '847738',
                      pageJsonId: '9704152',
                      compid: ['Description_424409'],
                      visible: 'true',
                    },
                    line_number: 13,
                  },
                ],
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '866644',
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$reply_104855?.resultData.groupType$',
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
                line_number: 14,
                callback1: [
                  {
                    type: 'sysSetVisible',
                    dataId: 166571689396797500,
                    options: {
                      compId: ['Description_424409'],
                      compName: 'page',
                      id: '11236',
                      pageJsonId: '9704152',
                      compid: ['Description_424409'],
                    },
                    line_number: 15,
                  },
                  {
                    type: 'sysSetVisible',
                    dataId: 166571689396728350,
                    options: {
                      compId: ['Table_994258'],
                      compName: 'page',
                      id: '1181597',
                      pageJsonId: '9704152',
                      compid: ['Table_994258'],
                      visible: 'true',
                    },
                    line_number: 16,
                  },
                ],
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '510536',
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$reply_104855?.resultData.groupType$',
                      operate: '==',
                      manualValue: '3000',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                  {
                    options: {
                      context: '$reply_104855?.resultData.groupType$',
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
                line_number: 17,
                callback1: [
                  {
                    type: 'sysSetVisible',
                    dataId: 166571689396714050,
                    options: {
                      compId: ['Card_5914895'],
                      compName: 'page',
                      id: '15665',
                      pageJsonId: '9704152',
                      compid: ['Card_5914895'],
                      visible: '',
                    },
                    line_number: 18,
                  },
                ],
              },
              {
                type: 'setDataSource',
                dataId: 166571689396734430,
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
                line_number: 19,
                callback1: [],
                callback2: [],
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '2286437',
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$reply_104855?.resultData.isSupportThrowOrder$',
                      operate: '==',
                      manualValue: '1',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166916782115255680,
                elseIfs: [
                  {
                    dataName: 'elseIf',
                    dataId: 16691681746917862,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 166916818348427420,
                        children: [],
                        todoOptions: ['visible', 'selectComp'],
                        options: {
                          compId: [
                            'BOFramer_308744',
                            'Pageview_232504',
                            'BOFramer_848795',
                          ],
                          compName: 'page',
                          id: '472806',
                          pageJsonId: '9704152',
                          visible: '',
                          compid: [
                            'BOFramer_308744',
                            'Pageview_232504',
                            'BOFramer_848795',
                          ],
                        },
                        actionObjId: 'sysSetVisible',
                        actionObjName: 'page',
                        value: 'sysSetVisible',
                        line_number: 35,
                      },
                    ],
                    condition: [],
                    callback: [
                      {
                        type: 'sysSetVisible',
                        dataId: 166916818348427420,
                        options: {
                          compId: [
                            'BOFramer_308744',
                            'Pageview_232504',
                            'BOFramer_848795',
                          ],
                          compName: 'page',
                          id: '472806',
                          pageJsonId: '9704152',
                          visible: '',
                          compid: [
                            'BOFramer_308744',
                            'Pageview_232504',
                            'BOFramer_848795',
                          ],
                        },
                        line_number: 35,
                      },
                    ],
                  },
                ],
                line_number: 20,
                callback1: [
                  {
                    type: 'apiRequest',
                    dataId: 166916819207304400,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '208793',
                      pageJsonId: '9704152',
                      sync: true,
                      method: 'post',
                      url: '/app/rhin/gateway/callRhinEngine',
                      _capabilityCode: 'judgeIsRejectedByBusiObjNbr',
                      _apiCode: 'judgeIsRejectedByBusiObjNbr',
                      _source: 'rhin',
                      _serviceId: '912182650893594624',
                      _serviceTitle:
                        '根据审批单号判断审批单是否进行过甩单-lzs: judgeIsRejectedByBusiObjNbr',
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
                          dataKey: '823577_header',
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
                          dataKey: '823577_path',
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
                          dataKey: '823577_query',
                          key: '2',
                        },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          children: [
                            {
                              code: 'busiObjNbr',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.busiObjNbr',
                              compType: 'Input',
                              name: 'busiObjNbr',
                              parents: ['body'],
                              id: 'body.busiObjNbr',
                              dataKey: '823577_body.busiObjNbr',
                              value: {
                                type: ['context', '$urlParam.instNbr$'],
                                code: '',
                              },
                              parentType: 'object',
                              parentKey: '3',
                              key: '3-0',
                            },
                          ],
                          _id: 'body',
                          compType: 'Input',
                          parents: [],
                          id: 'body',
                          dataKey: '823577_body',
                          key: '3',
                        },
                      ],
                      _sourceName: '根据审批单号判断审批单是否进行过甩单-lzs',
                    },
                    line_number: 21,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 170307814674421800,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '217969',
                          pageJsonId: '9704152',
                          code: 'function main(data,state,success,fail){var _options_,_options_$svcCont,_options_$svcCont$dat;var sourceFrom=(_options_=options_4658057)===null||_options_===void 0?void 0:(_options_$svcCont=_options_.svcCont)===null||_options_$svcCont===void 0?void 0:(_options_$svcCont$dat=_options_$svcCont.data)===null||_options_$svcCont$dat===void 0?void 0:_options_$svcCont$dat.sourceFrom;if(sourceFrom=="gaap"){success(1)}else{success(0)}};',
                          actionTitle: '增加外部系统发起审批的场景，不允许甩单',
                        },
                        line_number: 22,
                        callback1: [
                          {
                            type: 'ifelse',
                            condition: [
                              {
                                condId: '152715',
                                options: {
                                  context: '$reply_208793?.resultData$',
                                  operate: 'notEmpty',
                                  manualValue: '0',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                              {
                                options: {
                                  context: '$reply_208793?.resultData$',
                                  operate: '== true',
                                  manualValue: '0',
                                },
                                condId: '7746685',
                                connector: '&&',
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                              {
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context: '$data_217969$',
                                  operate: '==',
                                  manualValue: '1',
                                },
                                condId: '023127',
                                connector: '&&',
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 170307820137936030,
                            elseIfs: [
                              {
                                dataName: 'elseIf',
                                dataId: 170307820137932200,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 170307820137926900,
                                    children: [],
                                    todoOptions: ['visible', 'selectComp'],
                                    options: {
                                      compId: [
                                        'BOFramer_308744',
                                        'Pageview_232504',
                                      ],
                                      compName: 'page',
                                      id: '8790234',
                                      pageJsonId: '9704152',
                                      visible: '',
                                      compid: [
                                        'BOFramer_308744',
                                        'Pageview_232504',
                                      ],
                                    },
                                    actionObjId: 'sysSetVisible',
                                    actionObjName: 'page',
                                    value: 'sysSetVisible',
                                    line_number: 25,
                                  },
                                ],
                                condition: [],
                                callback: [
                                  {
                                    type: 'sysSetVisible',
                                    dataId: 170307820137926900,
                                    options: {
                                      compId: [
                                        'BOFramer_308744',
                                        'Pageview_232504',
                                      ],
                                      compName: 'page',
                                      id: '8790234',
                                      pageJsonId: '9704152',
                                      visible: '',
                                      compid: [
                                        'BOFramer_308744',
                                        'Pageview_232504',
                                      ],
                                    },
                                    line_number: 25,
                                  },
                                ],
                              },
                            ],
                            line_number: 23,
                            callback1: [
                              {
                                type: 'setPageSrc',
                                dataId: 170307820137935550,
                                options: {
                                  compId: 'Pageview_232504',
                                  compLib: 'comm',
                                  pageJsonId: '9704152',
                                  compName: 'Pageview',
                                  id: '145979',
                                  pathname: '/rejectOrderTrack',
                                  selectedType: 'page',
                                  paramsObj: {
                                    gaapOrderNbr: '$urlParam.instNbr$',
                                  },
                                  paramsObjKeyValueMap: {
                                    gaapOrderNbr: '$urlParam.instNbr$',
                                  },
                                  pageId: '912540533005234176',
                                  modalPath: '/rejectOrderTrack',
                                },
                                line_number: 24,
                              },
                            ],
                          },
                        ],
                        callback2: [],
                      },
                    ],
                    callback2: [
                      {
                        type: 'sysSetVisible',
                        dataId: 166916819207328060,
                        options: {
                          compId: ['BOFramer_308744', 'Pageview_232504'],
                          compName: 'page',
                          id: '8130676',
                          pageJsonId: '9704152',
                          visible: '',
                          compid: ['BOFramer_308744', 'Pageview_232504'],
                        },
                        line_number: 26,
                      },
                    ],
                  },
                  {
                    type: 'apiRequest',
                    dataId: 166925576990084260,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '07047701',
                      pageJsonId: '9704152',
                      sync: true,
                      method: 'post',
                      url: '/app/rhin/gateway/callRhinEngine',
                      _capabilityCode: 'SYS_qryDcApproveOrdPage',
                      _apiCode: 'qryDcApproveOrdPage',
                      _source: 'rhin',
                      _serviceId: '878844583295881216',
                      _serviceTitle: '审批单分页查询-wy: qryDcApproveOrdPage',
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
                          dataKey: '428283_header',
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
                          dataKey: '428283_path',
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
                          dataKey: '428283_query',
                          key: '2',
                        },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          children: [
                            {
                              code: 'minCreateTime',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.minCreateTime',
                              compType: 'Input',
                              name: 'minCreateTime',
                              parents: ['body'],
                              id: 'body.minCreateTime',
                              dataKey: '428283_body.minCreateTime',
                              parentType: 'object',
                              parentKey: '3',
                              key: '3-10',
                            },
                            {
                              code: 'title',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.title',
                              compType: 'Input',
                              name: 'title',
                              parents: ['body'],
                              id: 'body.title',
                              dataKey: '428283_body.title',
                              parentType: 'object',
                              parentKey: '3',
                              key: '3-11',
                            },
                            {
                              code: 'extBusiObjNbr',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.extBusiObjNbr',
                              compType: 'Input',
                              name: 'extBusiObjNbr',
                              parents: ['body'],
                              id: 'body.extBusiObjNbr',
                              dataKey: '428283_body.extBusiObjNbr',
                              parentType: 'object',
                              parentKey: '3',
                              key: '3-0',
                            },
                            {
                              code: 'approveGrade',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.approveGrade',
                              compType: 'Input',
                              name: 'approveGrade',
                              parents: ['body'],
                              id: 'body.approveGrade',
                              dataKey: '428283_body.approveGrade',
                              parentType: 'object',
                              parentKey: '3',
                              key: '3-2',
                            },
                            {
                              code: 'busiObjStatusList',
                              attrType: 'fieldArray',
                              mustFlag: 'F',
                              children: [
                                {
                                  code: 'listItem',
                                  name: '列表元素',
                                  attrType: 'field',
                                  type: 'object',
                                  _id: 'body.busiObjStatusList.listItem',
                                  compType: 'Input',
                                  parents: ['body', 'busiObjStatusList'],
                                  id: 'body.busiObjStatusList.listItem',
                                  dataKey:
                                    '428283_body.busiObjStatusList.listItem',
                                  parentType: 'fieldArray',
                                  parentKey: '3-6',
                                  key: '3-6-0',
                                },
                              ],
                              _id: 'body.busiObjStatusList',
                              compType: 'Input',
                              name: 'busiObjStatusList',
                              parents: ['body'],
                              id: 'body.busiObjStatusList',
                              dataKey: '428283_body.busiObjStatusList',
                              parentType: 'object',
                              parentKey: '3',
                              key: '3-6',
                            },
                            {
                              code: 'createStaff',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.createStaff',
                              compType: 'Input',
                              name: 'createStaff',
                              parents: ['body'],
                              id: 'body.createStaff',
                              dataKey: '428283_body.createStaff',
                              parentType: 'object',
                              parentKey: '3',
                              key: '3-5',
                            },
                            {
                              code: 'regionId',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.regionId',
                              compType: 'Input',
                              name: 'regionId',
                              parents: ['body'],
                              id: 'body.regionId',
                              dataKey: '428283_body.regionId',
                              parentType: 'object',
                              parentKey: '3',
                              key: '3-3',
                            },
                            {
                              code: 'lanId',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.lanId',
                              compType: 'Input',
                              name: 'lanId',
                              parents: ['body'],
                              id: 'body.lanId',
                              dataKey: '428283_body.lanId',
                              parentType: 'object',
                              parentKey: '3',
                              key: '3-4',
                            },
                            {
                              code: 'maxCreateTime',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.maxCreateTime',
                              compType: 'Input',
                              name: 'maxCreateTime',
                              parents: ['body'],
                              id: 'body.maxCreateTime',
                              dataKey: '428283_body.maxCreateTime',
                              parentType: 'object',
                              parentKey: '3',
                              key: '3-12',
                            },
                            {
                              code: 'pageSize',
                              attrType: 'field',
                              type: 'long',
                              mustFlag: 'F',
                              _id: 'body.pageSize',
                              compType: 'Input',
                              name: 'pageSize',
                              parents: ['body'],
                              id: 'body.pageSize',
                              dataKey: '428283_body.pageSize',
                              value: { type: ['customize'], code: '1' },
                              parentType: 'object',
                              parentKey: '3',
                              key: '3-8',
                            },
                            {
                              code: 'pageNum',
                              attrType: 'field',
                              type: 'long',
                              mustFlag: 'F',
                              _id: 'body.pageNum',
                              compType: 'Input',
                              name: 'pageNum',
                              parents: ['body'],
                              id: 'body.pageNum',
                              dataKey: '428283_body.pageNum',
                              value: { type: ['customize'], code: '1' },
                              parentType: 'object',
                              parentKey: '3',
                              key: '3-9',
                            },
                            {
                              code: 'approveOrdNbr',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.approveOrdNbr',
                              compType: 'Input',
                              name: 'approveOrdNbr',
                              parents: ['body'],
                              id: 'body.approveOrdNbr',
                              dataKey: '428283_body.approveOrdNbr',
                              value: {
                                type: ['context', '$urlParam.instNbr$'],
                                code: '',
                              },
                              parentType: 'object',
                              parentKey: '3',
                              key: '3-1',
                            },
                            {
                              code: 'catalogValue',
                              name: '场景值',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              defaultValue: '',
                              _id: 'body.catalogValue',
                              compType: 'Input',
                              parents: ['body'],
                              id: 'body.catalogValue',
                              dataKey: '428283_body.catalogValue',
                              parentType: 'object',
                              parentKey: '3',
                              key: '3-13',
                            },
                            {
                              code: 'catalogType',
                              name: '场景值类型',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              defaultValue: '',
                              _id: 'body.catalogType',
                              compType: 'Input',
                              parents: ['body'],
                              id: 'body.catalogType',
                              dataKey: '428283_body.catalogType',
                              parentType: 'object',
                              parentKey: '3',
                              key: '3-7',
                            },
                          ],
                          _id: 'body',
                          compType: 'Input',
                          parents: [],
                          id: 'body',
                          dataKey: '428283_body',
                          key: '3',
                        },
                      ],
                      _sourceName: '审批单分页查询-wy',
                    },
                    line_number: 27,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 166925576990146750,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '485541',
                          pageJsonId: '9704152',
                          code: 'function main(data,state,success,fail){var _reply_,_options_,_options_$svcCont,_options_$svcCont$dat;var records=(_reply_=reply_07047701)===null||_reply_===void 0?void 0:_reply_.resultData.records;var sourceFrom=(_options_=options_4658057)===null||_options_===void 0?void 0:(_options_$svcCont=_options_.svcCont)===null||_options_$svcCont===void 0?void 0:(_options_$svcCont$dat=_options_$svcCont.data)===null||_options_$svcCont$dat===void 0?void 0:_options_$svcCont$dat.sourceFrom;if(!records||records.length<1||sourceFrom!="gaap"){console.log("\\u4E0D\\u652F\\u6301\\u7529\\u5355\\uFF0CsourceFrom = ",sourceFrom);success({isShow:false});return}console.log("\\u652F\\u6301\\u7529\\u5355\\uFF0CsourceFrom = ",sourceFrom);var record=records[0];success({isShow:record.effectDate!==null,isBan:new Date(record.effectDate)<new Date,effectDate:record.effectDate,catalogCode:record.catalogCode})};',
                        },
                        line_number: 28,
                        callback1: [
                          {
                            type: 'ifelse',
                            condition: [
                              {
                                condId: '475622',
                                options: {
                                  context: '$data_485541.isShow$',
                                  operate: '== true',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 166925576990110430,
                            elseIfs: [
                              {
                                dataName: 'elseIf',
                                dataId: 166925576990175000,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 166925576990146270,
                                    children: [],
                                    todoOptions: ['visible', 'selectComp'],
                                    options: {
                                      compId: [
                                        'BOFramer_538257',
                                        'BOFramer_848795',
                                      ],
                                      compName: 'page',
                                      id: '8672024',
                                      pageJsonId: '9704152',
                                      visible: '',
                                      compid: [
                                        'BOFramer_538257',
                                        'BOFramer_848795',
                                      ],
                                    },
                                    actionObjId: 'sysSetVisible',
                                    actionObjName: 'page',
                                    value: 'sysSetVisible',
                                    line_number: 34,
                                  },
                                ],
                                condition: [],
                                callback: [
                                  {
                                    type: 'sysSetVisible',
                                    dataId: 166925576990146270,
                                    options: {
                                      compId: [
                                        'BOFramer_538257',
                                        'BOFramer_848795',
                                      ],
                                      compName: 'page',
                                      id: '8672024',
                                      pageJsonId: '9704152',
                                      visible: '',
                                      compid: [
                                        'BOFramer_538257',
                                        'BOFramer_848795',
                                      ],
                                    },
                                    line_number: 34,
                                  },
                                ],
                              },
                            ],
                            line_number: 29,
                            callback1: [
                              {
                                type: 'sysSetVisible',
                                dataId: 166925576990163330,
                                options: {
                                  compId: [
                                    'BOFramer_538257',
                                    'BOFramer_848795',
                                  ],
                                  compName: 'page',
                                  id: '078022',
                                  pageJsonId: '9704152',
                                  visible: 'true',
                                  compid: [
                                    'BOFramer_538257',
                                    'BOFramer_848795',
                                  ],
                                },
                                line_number: 30,
                              },
                              {
                                type: 'setDataSource',
                                dataId: 166925576990153200,
                                options: {
                                  compId: 'setDataSource',
                                  compName: 'page',
                                  id: '7938623',
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
                                      initialData: {
                                        type: 'static',
                                        value: 'CreateOrder',
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
                                        value: '',
                                      },
                                    },
                                    {
                                      attrId: '0977908',
                                      code: 'groupType',
                                      name: '属性',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                    },
                                    {
                                      attrId: '594383',
                                      code: 'instOrder',
                                      name: '审批编号',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                    },
                                    {
                                      attrId: '9825589',
                                      code: 'instId',
                                      name: '审批单id',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                    },
                                    {
                                      attrId: '570193',
                                      code: 'effectDate',
                                      name: '审批单有效期',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      value: {
                                        type: ['context', '$data_485541$'],
                                        code: 'effectDate',
                                      },
                                    },
                                    {
                                      attrId: '860434',
                                      code: 'dealPageUrl',
                                      name: '属性',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                    },
                                    {
                                      attrId: '77864',
                                      code: 'createRejectBtnDisable',
                                      name: '属性',
                                      type: 'boolean',
                                      initialData: {
                                        type: 'static',
                                        value: 'false',
                                      },
                                    },
                                    {
                                      attrId: '284931',
                                      code: 'catalogCode',
                                      name: '属性',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      value: {
                                        type: ['context', '$data_485541$'],
                                        code: 'catalogCode',
                                      },
                                    },
                                  ],
                                  operateType: 1,
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
                                    condId: '630414',
                                    options: {
                                      context: '$data_485541.isBan$',
                                      operate: '== true',
                                    },
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                                dataId: 167106927531185950,
                                elseIfs: [],
                                line_number: 32,
                                callback1: [
                                  {
                                    type: 'setDataSource',
                                    dataId: 167106962434797700,
                                    options: {
                                      compId: 'setDataSource',
                                      compName: 'page',
                                      id: '3221467',
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
                                          initialData: {
                                            type: 'static',
                                            value: 'CreateOrder',
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
                                            value: '',
                                          },
                                        },
                                        {
                                          attrId: '0977908',
                                          code: 'groupType',
                                          name: '属性',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                        },
                                        {
                                          attrId: '594383',
                                          code: 'instOrder',
                                          name: '审批编号',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                        },
                                        {
                                          attrId: '9825589',
                                          code: 'instId',
                                          name: '审批单id',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                        },
                                        {
                                          attrId: '570193',
                                          code: 'effectDate',
                                          name: '审批单有效期',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                        },
                                        {
                                          attrId: '860434',
                                          code: 'dealPageUrl',
                                          name: '属性',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                        },
                                        {
                                          attrId: '77864',
                                          code: 'createRejectBtnDisable',
                                          name: '属性',
                                          type: 'boolean',
                                          initialData: {
                                            type: 'static',
                                            value: 'false',
                                          },
                                          value: {
                                            type: ['context', '$data_485541$'],
                                            code: 'isBan',
                                          },
                                        },
                                      ],
                                      operateType: 1,
                                      onlySetPatch: true,
                                      otherObjectArrayOptions: {},
                                    },
                                    line_number: 33,
                                    callback1: [],
                                    callback2: [],
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
            ],
            callback2: [],
          },
          {
            type: 'ifelse',
            condition: [
              {
                condId: '810753',
                options: { context: '$data.fileInfoList$', operate: 'empty' },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 166972442638439300,
            elseIfs: [],
            line_number: 36,
            callback1: [
              {
                type: 'sysSetVisible',
                dataId: 166972447943253700,
                options: {
                  compId: ['Table_035381'],
                  compName: 'page',
                  id: '712816',
                  pageJsonId: '9704152',
                  visible: '',
                  compid: ['Table_035381'],
                },
                line_number: 37,
              },
            ],
          },
          {
            type: 'console',
            dataId: 167403581624484380,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '914363',
              pageJsonId: '9704152',
              value: ['成功了呀。。。。。。。。。'],
            },
            line_number: 38,
          },
          {
            type: 'customActionCode',
            dataId: 170125310819918340,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '2850543',
              pageJsonId: '9704152',
              code: 'function main(data,state,success,fail){var coding=urlParam.instNbr;console.log("\\u5BA1\\u6279\\u5904\\u7406-coding",coding);if(coding!=null&&coding!=undefined){var ordersSubmit=window.localStorage.getItem(coding);if(ordersSubmit!=null&&ordersSubmit!=undefined){data.ordersSubmit=JSON.parse(ordersSubmit);console.log("\\u5BA1\\u6279\\u5904\\u7406-coding-data.ordersSubmit",data.ordersSubmit);success(data.ordersSubmit);return}}fail()};',
              actionTitle: '判断是否是回退到起草环节时的处理',
            },
            line_number: 39,
            callback1: [
              {
                type: 'console',
                dataId: 170125310819922370,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '111186',
                  pageJsonId: '9704152',
                  value: ['====回到起草成功===='],
                },
                line_number: 40,
              },
              {
                type: 'customActionCode',
                dataId: 170125313777626370,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '8131408',
                  pageJsonId: '9704152',
                  code: 'function main(data,state,success,fail){var _data_,_data_$svcCont,_data_$svcCont$data,_data_$svcCont$data$c,_data_$svcCont$data$c2;var applyInfo=(_data_=data_2850543)===null||_data_===void 0?void 0:(_data_$svcCont=_data_.svcCont)===null||_data_$svcCont===void 0?void 0:(_data_$svcCont$data=_data_$svcCont.data)===null||_data_$svcCont$data===void 0?void 0:(_data_$svcCont$data$c=_data_$svcCont$data.content)===null||_data_$svcCont$data$c===void 0?void 0:(_data_$svcCont$data$c2=_data_$svcCont$data$c.approveInfo)===null||_data_$svcCont$data$c2===void 0?void 0:_data_$svcCont$data$c2.applyInfo;console.log("\\u56DE\\u9000\\u8D77\\u8349\\u4EBA\\u83B7\\u53D6\\u7684applyInfo = ",applyInfo);if(applyInfo){success(applyInfo)}};',
                  actionTitle: '获取最新的审批内容',
                },
                line_number: 41,
                callback1: [
                  {
                    type: 'setValue',
                    dataId: 170125326029606660,
                    options: {
                      compId: 'QuillEditor_637236_622641',
                      compLib: 'comm',
                      pageJsonId: '9704152',
                      compName: 'QuillEditor',
                      id: '280895',
                      valueList: {
                        QuillEditor_637236_622641: '$data_8131408$',
                      },
                    },
                    line_number: 42,
                    callback1: [],
                  },
                ],
                callback2: [],
              },
            ],
            callback2: [
              {
                type: 'apiRequest',
                dataId: 170125312914374560,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '448426',
                  pageJsonId: '9704152',
                  sync: false,
                  method: 'post',
                  url: '/app/rhin/gateway/callRhinEngine',
                  _capabilityCode: 'auditOrderDistail',
                  _apiCode: 'auditOrderDistail',
                  _source: 'rhin',
                  _sourceName: '审批单详情-hdb',
                  _serviceId: '879342105577734144',
                  _serviceTitle: '审批单详情-hdb: auditOrderDistail',
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
                          dataKey: '644711_root.header',
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
                          dataKey: '644711_root.path',
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
                          dataKey: '644711_root.query',
                        },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          children: [
                            {
                              code: 'instId',
                              name: '新增节点',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              defaultValue: '',
                              _id: 'root.body.instId',
                              compType: 'Input',
                              parents: ['root', 'body'],
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-0',
                              id: 'root.body.instId',
                              dataKey: '644711_root.body.instId',
                              value: {
                                type: ['context', '$urlParam.instId$'],
                                code: '',
                              },
                            },
                            {
                              code: 'instNbr',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'root.body.instNbr',
                              compType: 'Input',
                              name: 'instNbr',
                              parents: ['root', 'body'],
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-1',
                              id: 'root.body.instNbr',
                              dataKey: '644711_root.body.instNbr',
                              value: {
                                type: ['context', '$urlParam.instNbr$'],
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
                          dataKey: '644711_root.body',
                        },
                      ],
                      _id: 'root',
                      compType: 'Input',
                      isRoot: true,
                      parents: [],
                      key: '0',
                      id: 'root',
                      dataKey: '644711_root',
                    },
                  ],
                  params: 'object',
                },
                line_number: 43,
                callback1: [
                  {
                    type: 'console',
                    dataId: 170125312914383360,
                    options: {
                      compId: 'debug',
                      compName: 'system',
                      id: '216835',
                      pageJsonId: '9704152',
                      value: ['$reply_448426?.resultData$', '啊萨达萨达'],
                    },
                    line_number: 44,
                  },
                  {
                    type: 'customActionCode',
                    dataId: 170125312914353630,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '883423',
                      pageJsonId: '9704152',
                      code: 'function main(data,state,success,fail){var _reply_;var info=JSON.parse((_reply_=reply_448426)===null||_reply_===void 0?void 0:_reply_.resultData);console.log("infoinfo",info);success(info.svcCont.data.content.approveInfo.applyInfo)};',
                    },
                    line_number: 45,
                    callback1: [
                      {
                        type: 'setValue',
                        dataId: 170125312914311100,
                        options: {
                          compId: 'QuillEditor_637236_622641',
                          compLib: 'comm',
                          pageJsonId: '9704152',
                          compName: 'QuillEditor',
                          id: '2568358',
                          valueList: {
                            QuillEditor_637236_622641: '$data_883423$',
                          },
                        },
                        line_number: 46,
                        callback1: [],
                      },
                    ],
                    callback2: [],
                  },
                ],
                callback2: [],
              },
            ],
          },
          {
            type: 'apiRequest',
            dataId: 169468140938774050,
            shielding: true,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '644711',
              pageJsonId: '9704152',
              sync: false,
              method: 'post',
              url: '/app/rhin/gateway/callRhinEngine',
              _capabilityCode: 'auditOrderDistail',
              _apiCode: 'auditOrderDistail',
              _source: 'rhin',
              _sourceName: '审批单详情-hdb',
              _serviceId: '879342105577734144',
              _serviceTitle: '审批单详情-hdb: auditOrderDistail',
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
                      dataKey: '644711_root.header',
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
                      dataKey: '644711_root.path',
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
                      dataKey: '644711_root.query',
                    },
                    {
                      code: 'body',
                      name: '请求体',
                      attrType: 'object',
                      children: [
                        {
                          code: 'instId',
                          name: '新增节点',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          defaultValue: '',
                          _id: 'root.body.instId',
                          compType: 'Input',
                          parents: ['root', 'body'],
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-0',
                          id: 'root.body.instId',
                          dataKey: '644711_root.body.instId',
                          value: {
                            type: ['context', '$urlParam.instId$'],
                            code: '',
                          },
                        },
                        {
                          code: 'instNbr',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'root.body.instNbr',
                          compType: 'Input',
                          name: 'instNbr',
                          parents: ['root', 'body'],
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-1',
                          id: 'root.body.instNbr',
                          dataKey: '644711_root.body.instNbr',
                          value: {
                            type: ['context', '$urlParam.instNbr$'],
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
                      dataKey: '644711_root.body',
                    },
                  ],
                  _id: 'root',
                  compType: 'Input',
                  isRoot: true,
                  parents: [],
                  key: '0',
                  id: 'root',
                  dataKey: '644711_root',
                },
              ],
              params: 'object',
            },
            line_number: 47,
            callback1: [
              {
                type: 'console',
                dataId: 169468156023742880,
                shielding: true,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '1362377',
                  pageJsonId: '9704152',
                  value: ['$reply_644711?.resultData$', '啊萨达萨达'],
                },
                line_number: 48,
              },
              {
                type: 'customActionCode',
                dataId: 169468219391319800,
                shielding: true,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '521168',
                  pageJsonId: '9704152',
                  code: 'function main(data,state,success,fail){var _reply_;var info=JSON.parse((_reply_=reply_644711)===null||_reply_===void 0?void 0:_reply_.resultData);console.log("infoinfo",info);success(info.svcCont.data.content.approveInfo.applyInfo)};',
                },
                line_number: 49,
                callback1: [
                  {
                    type: 'setValue',
                    dataId: 169468229602941280,
                    shielding: true,
                    options: {
                      compId: 'QuillEditor_637236_622641',
                      compLib: 'comm',
                      pageJsonId: '9704152',
                      compName: 'QuillEditor',
                      id: '191161',
                      valueList: { QuillEditor_637236_622641: '$data_521168$' },
                    },
                    line_number: 50,
                    callback1: [],
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
            type: 'console',
            dataId: 167403585885998100,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '566232',
              pageJsonId: '9704152',
              value: ['失败了呀。。。。。。。'],
            },
            line_number: 51,
          },
        ],
      },
    ];
    eventDatacustomActionCode84.params =
      [
        {
          title: '事件入参',
          name: 'options_4658057',
          value: '$options_4658057$',
          label: '事件入参',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode84,
      { options_4658057 },
      'customActionCode',
      {
        id: 'customActionCode',
        name: 'customActionCode',
        type: 'customActionCode',
        platform: 'undefined',
      },
    );
    const eventDataifelse48: any = [
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
        line_number: 52,
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
            line_number: 53,
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
              valueList: {
                Input_32550878_867458:
                  '$options_4658057.svcCont.data.extOrderNbr$',
              },
            },
            line_number: 54,
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
            line_number: 55,
          },
        ],
      },
    ];
    eventDataifelse48.params =
      [
        {
          title: '事件入参',
          name: 'options_4658057',
          value: '$options_4658057$',
          label: '事件入参',
        },
      ] || [];
    CMDGenerator(eventDataifelse48, { options_4658057 }, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDatacallSelfFunc4: any = [
      {
        type: 'callSelfFunc',
        dataId: 169502023123317120,
        options: {
          compId: 'callSelfFunc',
          compName: 'system',
          id: '670615',
          pageJsonId: '9704152',
          customFuncName: 'dealPageUrl',
        },
        line_number: 56,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacallSelfFunc4.params =
      [
        {
          title: '事件入参',
          name: 'options_4658057',
          value: '$options_4658057$',
          label: '事件入参',
        },
      ] || [];
    CMDGenerator(eventDatacallSelfFunc4, { options_4658057 }, 'callSelfFunc', {
      id: 'callSelfFunc',
      name: 'callSelfFunc',
      type: 'callSelfFunc',
      platform: 'undefined',
    });
  };
  const screenshot = (options_256634: any) => {
    const eventDatasetTimeout: any = [
      {
        type: 'setTimeout',
        dataId: 167109023992309860,
        options: {
          compId: 'setTimeout',
          compName: 'system',
          id: '063425',
          pageJsonId: '9704152',
          interval: 5000,
        },
        line_number: 1,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 167109024840386980,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '6495732',
              pageJsonId: '96362242',
              code: 'function main(data,state,success,fail){var dom=document.querySelector("div[compid=\\"View_9704152_1\\"]");if(dom!=undefined&&dom!=null){html2canvas(document.getElementById("root"),{allowTaint:true,logging:true,imageTimeout:3000,height:dom.scrollHeight,windowHeight:dom.scrollHeight}).then(function(canvas){success(canvas.toDataURL())})}};',
            },
            line_number: 2,
            callback1: [
              {
                type: 'apiRequest',
                dataId: 167109024840369150,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '912222',
                  pageJsonId: '9704152',
                  sync: false,
                  method: 'post',
                  url: '/app/rhin/gateway/callRhinEngine',
                  _capabilityCode: 'screenshotUpload',
                  _apiCode: 'screenshotUpload',
                  _source: 'rhin',
                  _serviceId: '914779436842196992',
                  _serviceTitle: '上传截图服务-hdb: screenshotUpload',
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
                      dataKey: '82239_header',
                    },
                    {
                      code: 'path',
                      name: '请求路径参数',
                      attrType: 'object',
                      _id: 'path',
                      compType: 'Input',
                      parents: [],
                      id: 'path',
                      dataKey: '82239_path',
                    },
                    {
                      code: 'query',
                      name: 'URL 参数',
                      attrType: 'object',
                      _id: 'query',
                      compType: 'Input',
                      parents: [],
                      id: 'query',
                      dataKey: '82239_query',
                    },
                    {
                      code: 'body',
                      name: '请求体',
                      attrType: 'object',
                      children: [
                        {
                          code: 'fileFlow',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.fileFlow',
                          compType: 'Input',
                          name: 'fileFlow',
                          parents: ['body'],
                          id: 'body.fileFlow',
                          dataKey: '82239_body.fileFlow',
                          value: {
                            type: ['customize'],
                            code: '$JSON.stringify(data_6495732)$',
                          },
                        },
                        {
                          code: 'instId',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.instId',
                          compType: 'Input',
                          name: 'instId',
                          parents: ['body'],
                          id: 'body.instId',
                          dataKey: '82239_body.instId',
                          value: {
                            type: ['context', '$urlParam.instNbr$'],
                            code: '',
                          },
                        },
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
                          dataKey: '82239_body.catalogCode',
                        },
                      ],
                      _id: 'body',
                      compType: 'Input',
                      parents: [],
                      id: 'body',
                      dataKey: '82239_body',
                    },
                  ],
                  _sourceName: '上传截图服务-hdb',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 167109024840337440,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '5138857',
                      pageJsonId: '9704152',
                      code: 'function main(data,state,success,fail){var fileList=[];if(data.fileInfoList!=undefined&&data.fileInfoList!=null){data.fileInfoList.forEach(function(v){if(v.fileType!="26"){fileList.push(v)}})}fileList.push(reply_912222.resultData);success(fileList)};',
                      actionTitle: '文件列表',
                    },
                    line_number: 4,
                    callback1: [
                      {
                        type: 'setDataSource',
                        dataId: 167109024840372320,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '549076',
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
                              value: {
                                type: ['customize'],
                                code: '$reply_912222.resultData.fileName$',
                              },
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
                              value: {
                                type: ['customize'],
                                code: '$reply_912222.resultData.fileType$',
                              },
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
                              value: {
                                type: ['customize'],
                                code: '$reply_912222.resultData.fileCode$',
                              },
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
                              value: {
                                type: ['customize'],
                                code: '$reply_912222.resultData.createStaff$',
                              },
                            },
                            {
                              attrId: '0896825',
                              code: 'fileTypeName',
                              name: '附件类型',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['customize'],
                                code: '$reply_912222.resultData.fileTypeName$',
                              },
                            },
                          ],
                          newData: '$data_5138857$',
                          operateType: 3,
                          onlySetPatch: false,
                          otherObjectArrayOptions: {},
                        },
                        line_number: 5,
                        callback1: [
                          {
                            type: 'sysSetVisible',
                            dataId: 167109024840315460,
                            options: {
                              compId: ['Table_035381'],
                              compName: 'page',
                              id: '062546',
                              pageJsonId: '9704152',
                              visible: 'true',
                              compid: ['Table_035381'],
                            },
                            line_number: 6,
                          },
                        ],
                        callback2: [],
                      },
                      {
                        type: 'setDataSource',
                        dataId: 167109024840347360,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '600613',
                          pageJsonId: '9704152',
                          dataSourceId: 167099951341076400,
                          dataSourceName: 'fileInfoObj',
                          dataSourceRelType: 'custom',
                          dataSourceReloadFilter: [],
                          dataSourceSetValue: [
                            {
                              attrId: '3748172',
                              code: 'fileName',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['customize'],
                                code: '$reply_912222.resultData.fileName$',
                              },
                            },
                            {
                              attrId: '41051',
                              code: 'filePath',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '5337764',
                              code: 'fileServerType',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '289335',
                              code: 'fileSubType',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '9511007',
                              code: 'fileType',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['customize'],
                                code: '$reply_912222.resultData.fileType$',
                              },
                            },
                            {
                              attrId: '5020196',
                              code: 'fileUrl',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '5530615',
                              code: 'tacheCode',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '88422',
                              code: 'fileCode',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['customize'],
                                code: '$reply_912222.resultData.fileCode$',
                              },
                            },
                            {
                              attrId: '8560791',
                              code: 'createTime',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['customize'],
                                code: '$reply_912222.resultData.createTime$',
                              },
                            },
                            {
                              attrId: '996746',
                              code: 'createStaff',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['customize'],
                                code: '$reply_912222.resultData.createStaff$',
                              },
                            },
                            {
                              attrId: '60129',
                              code: 'fileTypeName',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['customize'],
                                code: '$reply_912222.resultData.fileTypeName$',
                              },
                            },
                            {
                              attrId: '5210218',
                              code: 'instNbr',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['customize'],
                                code: '$data.draft_message.coding$',
                              },
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
                ],
                callback2: [],
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDatasetTimeout.params =
      [
        {
          title: '事件入参',
          name: 'options_256634',
          value: '$options_256634$',
        },
      ] || [];
    CMDGenerator(eventDatasetTimeout, { options_256634 }, 'setTimeout', {
      id: 'setTimeout',
      name: 'setTimeout',
      type: 'setTimeout',
      platform: 'undefined',
    });
  };
  const dealPageUrl = (options_3602656: any) => {
    const eventDatacustomActionCode85: any = [
      {
        type: 'customActionCode',
        dataId: 167099828103970750,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '00978784',
          pageJsonId: '9704152',
          code: 'function main(data,state,success,fail){var url="";if(urlParam.pageUrl==="COUNTERSIGN"){url="/flow/meeting/audit"}else{url="/flow/audit"}success(url)};',
          actionTitle: '处理界面嵌入路径处理',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 167099828103921400,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '87635',
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
                },
                {
                  attrId: '594383',
                  code: 'instOrder',
                  name: '审批编号',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '9825589',
                  code: 'instId',
                  name: '审批单id',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '570193',
                  code: 'effectDate',
                  name: '审批单有效期',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '860434',
                  code: 'dealPageUrl',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: { type: ['context', '$data_00978784$'], code: '' },
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
    eventDatacustomActionCode85.params =
      [
        {
          title: '事件入参',
          name: 'options_3602656',
          value: '$options_3602656$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode85,
      { options_3602656 },
      'customActionCode',
      {
        id: 'customActionCode',
        name: 'customActionCode',
        type: 'customActionCode',
        platform: 'undefined',
      },
    );
  };
  const closeWin = (options_402478: any) => {
    const eventDatacustomActionCode86: any = [
      {
        type: 'customActionCode',
        dataId: 170307576614676540,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '46119264',
          pageJsonId: '9704152',
          code: 'function main(data,state,success,fail){window.close()};',
        },
        line_number: 1,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacustomActionCode86.params =
      [
        {
          title: '事件入参',
          name: 'options_402478',
          value: '$options_402478$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode86,
      { options_402478 },
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
    getFactor,
    auditClassCalcul,
    auditOrderDeal,
    screenshot,
    dealPageUrl,
    closeWin,
  }));

  useEffect(() => {
    // console 167869087720936400
    console.log(
      urlParam?.isRollback,
      state?.ordersSubmit,
      'isRollback1===',
      '界面参数',
      urlParam,
    );
    const eventDatacustomActionCode246: any = [
      {
        type: 'customActionCode',
        dataId: 169952387238106880,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '5334814',
          pageJsonId: '030387',
          code: 'function main(data,state,success,fail){if(window.opener){console.log("\\u662F\\u4ECEwindow.open\\u6253\\u5F00\\u7684")}else{console.log("\\u4E0D\\u662F\\u4ECEwindow.open\\u6253\\u5F00\\u7684")}};',
        },
        line_number: 2,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacustomActionCode246.params = [] || [];
    CMDGenerator(eventDatacustomActionCode246, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });
    const eventDataapiRequest254: any = [
      {
        type: 'apiRequest',
        dataId: 170417554094907970,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '925628',
          pageJsonId: 30,
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'getFlowItemSimpleInfo',
          _apiCode: 'getFlowItemSimpleInfo',
          _source: 'rhin',
          _serviceId: '874132034304221184',
          _serviceTitle: '获取流程环节实例简要信息: getFlowItemSimpleInfo',
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
              dataKey: '593559_header',
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
              dataKey: '593559_path',
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
              dataKey: '593559_query',
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
                  code: 'workItemId',
                  name: '环节实例id',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  defaultValue: '',
                  _id: 'body.workItemId',
                  compType: 'Input',
                  parents: ['root', 'body'],
                  id: 'body.workItemId',
                  dataKey: '593559_body.workItemId',
                  value: { type: ['page', 'url'], code: 'workItemId' },
                  parentType: 'object',
                  parentKey: '0-3',
                  key: '0-3-0',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: ['root'],
              id: 'body',
              dataKey: '593559_body',
              parentType: 'object',
              parentKey: '0',
              key: '0-3',
            },
          ],
          actionTitle: '获取环节编码',
        },
        line_number: 3,
        callback1: [
          {
            type: 'ifelse',
            condition: [
              {
                condId: '408733',
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$reply_925628?.resultCode$',
                  operate: '==',
                  manualValue: '0',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 170417554094960740,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 170417554094929730,
                children: [
                  {
                    dataName: 'action',
                    dataId: 170417554094996060,
                    children: [],
                    todoOptions: ['msgType', 'value'],
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '0192018',
                      pageJsonId: 30,
                      type: 'info',
                      value: '$reply_925628?.resultMsg$',
                    },
                    actionObjId: 'showMessage',
                    actionObjName: 'system',
                    value: 'showMessage',
                    line_number: 6,
                  },
                ],
                condition: [],
                callback: [
                  {
                    type: 'showMessage',
                    dataId: 170417554094996060,
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '0192018',
                      pageJsonId: 30,
                      type: 'info',
                      value: '$reply_925628?.resultMsg$',
                    },
                    line_number: 6,
                  },
                ],
              },
            ],
            line_number: 4,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 170417558068896000,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '916679',
                  pageJsonId: '9704152',
                  dataSourceId: 166029173018920830,
                  dataSourceName: 'pageParam',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      attrId: '045638',
                      code: 'tacheCode',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static', value: 'CreateOrder' },
                      showInput: true,
                      value: {
                        type: ['customize'],
                        code: '$reply_925628?.resultData.traceCode$',
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
                          showInput: false,
                        },
                        {
                          attrId: '51947094',
                          code: 'itemList',
                          name: '子节点参数',
                          type: 'object',
                          initialData: { type: 'static' },
                          parentCode: 'childProper',
                          parentKey: 'childProper',
                          showInput: false,
                        },
                        {
                          attrId: '778353',
                          code: 'catalogCode',
                          name: '场景编码',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: false,
                          parentCode: 'childProper',
                          parentKey: 'childProper',
                        },
                      ],
                      showInput: true,
                    },
                    {
                      attrId: '033692',
                      code: 'flowCode',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static', value: '' },
                      showInput: true,
                    },
                    {
                      attrId: '0977908',
                      code: 'groupType',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '594383',
                      code: 'instOrder',
                      name: '审批编号',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '9825589',
                      code: 'instId',
                      name: '审批单id',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '570193',
                      code: 'effectDate',
                      name: '审批单有效期',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '860434',
                      code: 'dealPageUrl',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '77864',
                      code: 'createRejectBtnDisable',
                      name: '属性',
                      type: 'boolean',
                      initialData: { type: 'static', value: 'false' },
                      showInput: true,
                    },
                    {
                      attrId: '284931',
                      code: 'catalogCode',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '975583',
                      code: 'isRollback',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '795999',
                      code: 'isSendHead',
                      name: '送总部标识',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                    },
                    {
                      attrId: '884583',
                      code: 'busiObjNbr',
                      name: '单号',
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
                line_number: 5,
                callback1: [],
                callback2: [],
              },
            ],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest254.params = [] || [];
    CMDGenerator(eventDataapiRequest254, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse137: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '117483',
            options: {
              useManual: true,
              useObject: false,
              context: '$urlParam.sceneOrigin$',
              operate: '==',
              manualValue: 'U',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 169019244173778370,
        elseIfs: [
          {
            dataName: 'elseIf',
            dataId: 169026786193990080,
            children: [
              {
                dataName: 'action',
                dataId: 169458724659357300,
                children: [
                  {
                    dataName: 'callback',
                    dataId: 169458724659352540,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 169458724659319840,
                        children: [
                          {
                            dataName: 'callback',
                            dataId: 1694587246593203,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 169458806888924160,
                                children: [
                                  {
                                    dataName: 'callback',
                                    dataId: 169458806888954700,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 169458806888936900,
                                        children: [
                                          {
                                            dataName: 'callback',
                                            dataId: 169458806888902370,
                                            children: [
                                              {
                                                dataName: 'action',
                                                dataId: 169458806888936000,
                                                children: [
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 169458806888975800,
                                                    children: [],
                                                    value: 'callback1',
                                                    params: [],
                                                    shielding: true,
                                                  },
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 169458806888942370,
                                                    children: [],
                                                    value: 'callback2',
                                                    params: [],
                                                    shielding: true,
                                                  },
                                                ],
                                                todoOptions: [
                                                  'customFuncName',
                                                  'customFuncParams',
                                                ],
                                                options: {
                                                  compId: 'callSelfFunc',
                                                  compName: 'system',
                                                  id: '7076821',
                                                  pageJsonId: '9704152',
                                                  customFuncName:
                                                    'auditOrderDeal',
                                                  customFuncParams:
                                                    '$data_940125$',
                                                },
                                                actionObjId: 'callSelfFunc',
                                                actionObjName: 'system',
                                                value: 'callSelfFunc',
                                                shielding: true,
                                                line_number: 41,
                                              },
                                            ],
                                            value: 'callback1',
                                            params: [],
                                            shielding: true,
                                          },
                                        ],
                                        todoOptions: ['timername', 'interval'],
                                        options: {
                                          compId: 'setTimeout',
                                          compName: 'system',
                                          id: '168544434',
                                          pageJsonId: '9704152',
                                          interval: 1000,
                                        },
                                        actionObjId: 'setTimeout',
                                        actionObjName: 'system',
                                        value: 'setTimeout',
                                        shielding: true,
                                        line_number: 40,
                                      },
                                      {
                                        dataName: 'action',
                                        dataId: 169458806888985920,
                                        children: [],
                                        todoOptions: ['valueArray'],
                                        options: {
                                          compId: 'debug',
                                          compName: 'system',
                                          id: '514522',
                                          pageJsonId: '9704152',
                                          value: ['====回到起草成功===='],
                                        },
                                        actionObjId: 'debug',
                                        actionObjName: 'system',
                                        value: 'console',
                                        line_number: 42,
                                      },
                                      {
                                        dataName: 'action',
                                        dataId: 169458806888919550,
                                        children: [
                                          {
                                            dataName: 'callback',
                                            dataId: 169458806888979420,
                                            children: [],
                                            value: 'callback1',
                                            params: [],
                                          },
                                          {
                                            dataName: 'callback',
                                            dataId: 169458806888926720,
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
                                          id: '717058',
                                          pageJsonId: '9704152',
                                          customFuncName: 'auditOrderDeal',
                                          customFuncParams: '$data_940125$',
                                        },
                                        actionObjId: 'callSelfFunc',
                                        actionObjName: 'system',
                                        value: 'callSelfFunc',
                                        line_number: 43,
                                      },
                                    ],
                                    value: 'callback1',
                                    params: [],
                                  },
                                  {
                                    dataName: 'callback',
                                    dataId: 169458806888945100,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 169458806888940380,
                                        children: [
                                          {
                                            dataName: 'callback',
                                            dataId: 169458806888993100,
                                            children: [
                                              {
                                                dataName: 'action',
                                                dataId: 169458806888926340,
                                                children: [
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 169458806888924860,
                                                    children: [
                                                      {
                                                        dataName: 'action',
                                                        dataId: 169458806888997060,
                                                        children: [
                                                          {
                                                            dataName:
                                                              'callback',
                                                            dataId: 16945880688898920,
                                                            children: [],
                                                            value: 'callback1',
                                                            params: [],
                                                          },
                                                          {
                                                            dataName:
                                                              'callback',
                                                            dataId: 169458806888932830,
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
                                                          compId:
                                                            'callSelfFunc',
                                                          compName: 'system',
                                                          id: '89524',
                                                          pageJsonId: '9704152',
                                                          customFuncName:
                                                            'auditOrderDeal',
                                                          customFuncParams:
                                                            '$data_095965$',
                                                        },
                                                        actionObjId:
                                                          'callSelfFunc',
                                                        actionObjName: 'system',
                                                        value: 'callSelfFunc',
                                                        line_number: 46,
                                                      },
                                                    ],
                                                    value: 'callback1',
                                                    params: [],
                                                  },
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 169458806888918850,
                                                    children: [],
                                                    value: 'callback2',
                                                    params: [],
                                                  },
                                                ],
                                                todoOptions: [
                                                  'actionTitle',
                                                  'editorCode',
                                                ],
                                                options: {
                                                  compId: 'customActionCode',
                                                  compName: 'page',
                                                  id: '095965',
                                                  pageJsonId: '9704152',
                                                  code: 'function main(data,state,success,fail){var _reply_,_reply_2,_reply_3;var orderSubmit=JSON.parse((_reply_=reply_080583)===null||_reply_===void 0?void 0:_reply_.resultData);var orderNbr=orderSubmit.svcCont.data.orderNbr;console.log("\\u5BA1\\u6279\\u5904\\u7406-\\u8BF7\\u6C42\\u8BE6\\u60C5\\u6570\\u636E-orderSubmit",orderSubmit);data.ordersSubmit=orderSubmit;window.localStorage.setItem(orderNbr,(_reply_2=reply_080583)===null||_reply_2===void 0?void 0:_reply_2.resultData);success(JSON.parse((_reply_3=reply_080583)===null||_reply_3===void 0?void 0:_reply_3.resultData))};',
                                                },
                                                actionObjId: 'customActionCode',
                                                actionObjName: 'page',
                                                value: 'customActionCode',
                                                line_number: 45,
                                              },
                                            ],
                                            value: 'callback1',
                                            params: [],
                                          },
                                          {
                                            dataName: 'callback',
                                            dataId: 169458806888982850,
                                            children: [],
                                            value: 'callback2',
                                            params: [],
                                          },
                                        ],
                                        todoOptions: [
                                          'actionTitle',
                                          'sync',
                                          'url',
                                          'params',
                                        ],
                                        options: {
                                          compId: 'apiRequest',
                                          compName: 'system',
                                          id: '080583',
                                          pageJsonId: '9704152',
                                          sync: false,
                                          method: 'post',
                                          url: '/app/rhin/gateway/callRhinEngine',
                                          _capabilityCode: 'auditOrderDistail',
                                          _apiCode: 'auditOrderDistail',
                                          _source: 'rhin',
                                          _serviceId: '879342105577734144',
                                          _serviceTitle:
                                            '审批单详情-hdb: auditOrderDistail',
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
                                              dataKey: '424703_header',
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
                                              dataKey: '424703_path',
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
                                              dataKey: '424703_query',
                                              key: '2',
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
                                                  dataKey:
                                                    '424703_body.instNbr',
                                                  value: {
                                                    type: [
                                                      'context',
                                                      '$urlParam.instNbr$',
                                                    ],
                                                    code: '',
                                                  },
                                                  parentType: 'object',
                                                  parentKey: '3',
                                                  key: '3-1',
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
                                                  dataKey: '424703_body.instId',
                                                  value: {
                                                    type: [
                                                      'context',
                                                      '$urlParam.instId$',
                                                    ],
                                                    code: '',
                                                  },
                                                  parentType: 'object',
                                                  parentKey: '3',
                                                  key: '3-0',
                                                },
                                              ],
                                              _id: 'body',
                                              compType: 'Input',
                                              parents: [],
                                              id: 'body',
                                              dataKey: '424703_body',
                                              key: '3',
                                            },
                                          ],
                                          _sourceName: '审批单详情-hdb',
                                        },
                                        actionObjId: 'apiRequest',
                                        actionObjName: 'system',
                                        value: 'apiRequest',
                                        line_number: 44,
                                      },
                                    ],
                                    value: 'callback2',
                                    params: [],
                                  },
                                ],
                                todoOptions: ['actionTitle', 'editorCode'],
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '940125',
                                  pageJsonId: '9704152',
                                  code: 'function main(data,state,success,fail){var coding=urlParam.instNbr;console.log("\\u5BA1\\u6279\\u5904\\u7406-coding",coding);if(coding!=null&&coding!=undefined){var ordersSubmit=window.localStorage.getItem(coding);if(ordersSubmit!=null&&ordersSubmit!=undefined){data.ordersSubmit=JSON.parse(ordersSubmit);console.log("\\u5BA1\\u6279\\u5904\\u7406-coding-data.ordersSubmit",data.ordersSubmit);success(data.ordersSubmit);return}}fail()};',
                                  actionTitle:
                                    '判断是否是回退到起草环节时的处理',
                                },
                                actionObjId: 'customActionCode',
                                actionObjName: 'page',
                                value: 'customActionCode',
                                line_number: 39,
                              },
                            ],
                            value: 'callback1',
                            params: [],
                          },
                          {
                            dataName: 'callback',
                            dataId: 169458724659346980,
                            children: [],
                            value: 'callback2',
                            params: [],
                          },
                        ],
                        todoOptions: ['actionTitle', 'editorCode'],
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '719397',
                          pageJsonId: '9704152',
                          code: 'function main(data,state,success,fail){var _reply_,_reply_2;var orderSubmit=JSON.parse((_reply_=reply_028219)===null||_reply_===void 0?void 0:_reply_.resultData);var orderNbr=orderSubmit.svcCont.data.orderNbr;console.log("\\u5BA1\\u6279\\u5904\\u7406-\\u8BF7\\u6C42\\u8BE6\\u60C5\\u6570\\u636E-orderSubmit",orderSubmit);success(JSON.parse((_reply_2=reply_028219)===null||_reply_2===void 0?void 0:_reply_2.resultData))};',
                        },
                        actionObjId: 'customActionCode',
                        actionObjName: 'page',
                        value: 'customActionCode',
                        line_number: 38,
                      },
                    ],
                    value: 'callback1',
                    params: [],
                  },
                  {
                    dataName: 'callback',
                    dataId: 169458724659331200,
                    children: [],
                    value: 'callback2',
                    params: [],
                  },
                ],
                todoOptions: ['actionTitle', 'sync', 'url', 'params'],
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '028219',
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
                      key: '0-0',
                      parentType: 'object',
                      parentKey: '0',
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
                      key: '0-1',
                      parentType: 'object',
                      parentKey: '0',
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
                      key: '0-2',
                      parentType: 'object',
                      parentKey: '0',
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
                      key: '0-3',
                      parentType: 'object',
                      parentKey: '0',
                    },
                  ],
                  _sourceName: '审批单详情-hdb',
                },
                actionObjId: 'apiRequest',
                actionObjName: 'system',
                value: 'apiRequest',
                line_number: 37,
              },
              {
                dataName: 'action',
                dataId: 169026788108077920,
                children: [
                  {
                    dataName: 'callback',
                    dataId: 169026788108002400,
                    children: [
                      {
                        dataName: 'condition',
                        dataId: 169026788108037340,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 169026788108013920,
                            children: [],
                            todoOptions: ['rProps'],
                            options: {
                              compId: 'RemoteComponent_8565859',
                              compLib: 'comm',
                              pageJsonId: '9704152',
                              compName: 'RemoteComponent',
                              id: '719876',
                              rProps: '$reply_723494?.resultData$',
                            },
                            actionObjId: 'RemoteComponent_8565859',
                            actionObjName: 'RemoteComponent',
                            value: 'setRemoteCompProps',
                            compLib: 'comm',
                            line_number: 49,
                          },
                        ],
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 169026788108054880,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 169026788108041000,
                                children: [],
                                todoOptions: ['visible', 'selectComp'],
                                options: {
                                  compId: ['Card_931416'],
                                  compName: 'page',
                                  id: '849384',
                                  pageJsonId: '9704152',
                                  visible: '',
                                  compid: ['Card_931416'],
                                },
                                actionObjId: 'sysSetVisible',
                                actionObjName: 'page',
                                value: 'sysSetVisible',
                                line_number: 50,
                              },
                            ],
                            condition: [],
                            callback: [
                              {
                                type: 'sysSetVisible',
                                dataId: 169026788108041000,
                                options: {
                                  compId: ['Card_931416'],
                                  compName: 'page',
                                  id: '849384',
                                  pageJsonId: '9704152',
                                  visible: '',
                                  compid: ['Card_931416'],
                                },
                                line_number: 50,
                              },
                            ],
                          },
                        ],
                        condition: [
                          {
                            condId: '262574',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$reply_723494?.resultData.flowCode$',
                              operate: '!=',
                              manualValue: 'COMMON_MEETING_FLOW',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        desc: '不为会签流程',
                        line_number: 48,
                      },
                    ],
                    value: 'callback1',
                    params: [],
                  },
                  {
                    dataName: 'callback',
                    dataId: 169026788108023260,
                    children: [],
                    value: 'callback2',
                    params: [],
                  },
                ],
                todoOptions: ['actionTitle', 'sync', 'url', 'params'],
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '723494',
                  pageJsonId: '9704152',
                  sync: false,
                  actionTitle: '查询流程视图',
                  method: 'post',
                  url: '/app/rhin/gateway/callRhinEngine',
                  _capabilityCode: 'qryFlowView',
                  _apiCode: 'qryFlowView',
                  _source: 'rhin',
                  _serviceId: '887698304253431808',
                  _serviceTitle: '查询流程视图: qryFlowView',
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
                      dataKey: '234904_header',
                      parentType: 'object',
                      parentKey: '0',
                      key: '0-0',
                    },
                    {
                      code: 'path',
                      name: '请求路径参数',
                      attrType: 'object',
                      children: [
                        {
                          code: 'workId',
                          name: '新增节点',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'T',
                          defaultValue: '',
                          _id: 'path.workId',
                          compType: 'Input',
                          parents: ['root', 'path'],
                          id: 'path.workId',
                          dataKey: '234904_path.workId',
                          value: {
                            type: ['context', '$urlParam.workId$'],
                            code: '',
                          },
                          parentType: 'object',
                          parentKey: '0-1',
                          key: '0-1-0',
                        },
                      ],
                      _id: 'path',
                      compType: 'Input',
                      parents: ['root'],
                      id: 'path',
                      dataKey: '234904_path',
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
                      dataKey: '234904_query',
                      parentType: 'object',
                      parentKey: '0',
                      key: '0-2',
                    },
                    {
                      code: 'body',
                      name: '请求体',
                      attrType: 'object',
                      _id: 'body',
                      compType: 'Input',
                      parents: ['root'],
                      id: 'body',
                      dataKey: '234904_body',
                      parentType: 'object',
                      parentKey: '0',
                      key: '0-3',
                    },
                  ],
                },
                actionObjId: 'apiRequest',
                actionObjName: 'system',
                value: 'apiRequest',
                line_number: 47,
              },
              {
                dataName: 'action',
                dataId: 169026788957236060,
                children: [
                  {
                    dataName: 'callback',
                    dataId: 169026788957242000,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 169026788957220130,
                        children: [
                          {
                            dataName: 'callback',
                            dataId: 169026788957214940,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 169026788957286700,
                                children: [
                                  {
                                    dataName: 'callback',
                                    dataId: 169026788957238720,
                                    children: [],
                                    value: 'callback1',
                                    params: [],
                                    shielding: true,
                                  },
                                  {
                                    dataName: 'callback',
                                    dataId: 169026788957265660,
                                    children: [],
                                    value: 'callback2',
                                    params: [],
                                    shielding: true,
                                  },
                                ],
                                todoOptions: [
                                  'customFuncName',
                                  'customFuncParams',
                                ],
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '05155',
                                  pageJsonId: '9704152',
                                  customFuncName: 'auditOrderDeal',
                                  customFuncParams: '$data_341527$',
                                },
                                actionObjId: 'callSelfFunc',
                                actionObjName: 'system',
                                value: 'callSelfFunc',
                                shielding: true,
                                line_number: 53,
                              },
                            ],
                            value: 'callback1',
                            params: [],
                            shielding: true,
                          },
                        ],
                        todoOptions: ['timername', 'interval'],
                        options: {
                          compId: 'setTimeout',
                          compName: 'system',
                          id: '346498',
                          pageJsonId: '9704152',
                          interval: 1000,
                        },
                        actionObjId: 'setTimeout',
                        actionObjName: 'system',
                        value: 'setTimeout',
                        shielding: true,
                        line_number: 52,
                      },
                      {
                        dataName: 'action',
                        dataId: 169026788957271840,
                        children: [],
                        todoOptions: ['valueArray'],
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '746509',
                          pageJsonId: '9704152',
                          value: ['====回到起草成功===='],
                        },
                        actionObjId: 'debug',
                        actionObjName: 'system',
                        value: 'console',
                        shielding: true,
                        line_number: 54,
                      },
                      {
                        dataName: 'action',
                        dataId: 169026788957274660,
                        children: [
                          {
                            dataName: 'callback',
                            dataId: 169026788957283170,
                            children: [],
                            value: 'callback1',
                            params: [],
                            shielding: true,
                          },
                          {
                            dataName: 'callback',
                            dataId: 169026788957220160,
                            children: [],
                            value: 'callback2',
                            params: [],
                            shielding: true,
                          },
                        ],
                        todoOptions: ['customFuncName', 'customFuncParams'],
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '294213',
                          pageJsonId: '9704152',
                          customFuncName: 'auditOrderDeal',
                          customFuncParams: '$data_341527$',
                        },
                        actionObjId: 'callSelfFunc',
                        actionObjName: 'system',
                        value: 'callSelfFunc',
                        shielding: true,
                        line_number: 55,
                      },
                    ],
                    value: 'callback1',
                    params: [],
                    shielding: true,
                  },
                  {
                    dataName: 'callback',
                    dataId: 169026788957251170,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 169026788957208830,
                        children: [
                          {
                            dataName: 'callback',
                            dataId: 169026788957270720,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 169026788957233000,
                                children: [
                                  {
                                    dataName: 'callback',
                                    dataId: 169026788957248100,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 169026788957277000,
                                        children: [
                                          {
                                            dataName: 'callback',
                                            dataId: 169026788957277800,
                                            children: [],
                                            value: 'callback1',
                                            params: [],
                                            shielding: true,
                                          },
                                          {
                                            dataName: 'callback',
                                            dataId: 169026788957215600,
                                            children: [],
                                            value: 'callback2',
                                            params: [],
                                            shielding: true,
                                          },
                                        ],
                                        todoOptions: [
                                          'customFuncName',
                                          'customFuncParams',
                                        ],
                                        options: {
                                          compId: 'callSelfFunc',
                                          compName: 'system',
                                          id: '895439',
                                          pageJsonId: '9704152',
                                          customFuncName: 'auditOrderDeal',
                                          customFuncParams: '$data_868071$',
                                        },
                                        actionObjId: 'callSelfFunc',
                                        actionObjName: 'system',
                                        value: 'callSelfFunc',
                                        shielding: true,
                                        line_number: 58,
                                      },
                                    ],
                                    value: 'callback1',
                                    params: [],
                                    shielding: true,
                                  },
                                  {
                                    dataName: 'callback',
                                    dataId: 169026788957296200,
                                    children: [],
                                    value: 'callback2',
                                    params: [],
                                    shielding: true,
                                  },
                                ],
                                todoOptions: ['actionTitle', 'editorCode'],
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '868071',
                                  pageJsonId: '9704152',
                                  code: 'function main(data,state,success,fail){var _reply_,_reply_2,_reply_3;var orderSubmit=JSON.parse((_reply_=reply_1961817)===null||_reply_===void 0?void 0:_reply_.resultData);var orderNbr=orderSubmit.svcCont.data.orderNbr;console.log("\\u5BA1\\u6279\\u5904\\u7406-\\u8BF7\\u6C42\\u8BE6\\u60C5\\u6570\\u636E-orderSubmit",orderSubmit);window.localStorage.setItem(orderNbr,(_reply_2=reply_1961817)===null||_reply_2===void 0?void 0:_reply_2.resultData);success(JSON.parse((_reply_3=reply_1961817)===null||_reply_3===void 0?void 0:_reply_3.resultData))};',
                                },
                                actionObjId: 'customActionCode',
                                actionObjName: 'page',
                                value: 'customActionCode',
                                shielding: true,
                                line_number: 57,
                              },
                            ],
                            value: 'callback1',
                            params: [],
                            shielding: true,
                          },
                          {
                            dataName: 'callback',
                            dataId: 169026788957230240,
                            children: [],
                            value: 'callback2',
                            params: [],
                            shielding: true,
                          },
                        ],
                        todoOptions: ['actionTitle', 'sync', 'url', 'params'],
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '1961817',
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
                              dataKey: '424703_header',
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
                              dataKey: '424703_path',
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
                              dataKey: '424703_query',
                              key: '2',
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
                                  dataKey: '424703_body.instNbr',
                                  value: {
                                    type: ['context', '$urlParam.instNbr$'],
                                    code: '',
                                  },
                                  parentType: 'object',
                                  parentKey: '3',
                                  key: '3-1',
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
                                  dataKey: '424703_body.instId',
                                  value: {
                                    type: ['context', '$urlParam.instId$'],
                                    code: '',
                                  },
                                  parentType: 'object',
                                  parentKey: '3',
                                  key: '3-0',
                                },
                              ],
                              _id: 'body',
                              compType: 'Input',
                              parents: [],
                              id: 'body',
                              dataKey: '424703_body',
                              key: '3',
                            },
                          ],
                          _sourceName: '审批单详情-hdb',
                        },
                        actionObjId: 'apiRequest',
                        actionObjName: 'system',
                        value: 'apiRequest',
                        shielding: true,
                        line_number: 56,
                      },
                    ],
                    value: 'callback2',
                    params: [],
                    shielding: true,
                  },
                ],
                todoOptions: ['actionTitle', 'editorCode'],
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '341527',
                  pageJsonId: '9704152',
                  code: 'function main(data,state,success,fail){var coding=urlParam.instNbr;console.log("\\u5BA1\\u6279\\u5904\\u7406-coding",coding);if(coding!=null&&coding!=undefined){var ordersSubmit=window.localStorage.getItem(coding);if(ordersSubmit!=null&&ordersSubmit!=undefined){data.ordersSubmit=JSON.parse(ordersSubmit);console.log("\\u5BA1\\u6279\\u5904\\u7406-coding-data.ordersSubmit",data.ordersSubmit);success(data.ordersSubmit);return}}fail()};',
                  actionTitle: '判断是否是回退到起草环节时的处理',
                },
                actionObjId: 'customActionCode',
                actionObjName: 'page',
                value: 'customActionCode',
                shielding: true,
                line_number: 51,
              },
            ],
            condition: [],
            value: 'elseIf',
            callback: [
              {
                type: 'apiRequest',
                dataId: 169458724659357300,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '028219',
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
                      key: '0-0',
                      parentType: 'object',
                      parentKey: '0',
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
                      key: '0-1',
                      parentType: 'object',
                      parentKey: '0',
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
                      key: '0-2',
                      parentType: 'object',
                      parentKey: '0',
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
                      key: '0-3',
                      parentType: 'object',
                      parentKey: '0',
                    },
                  ],
                  _sourceName: '审批单详情-hdb',
                },
                line_number: 37,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 169458724659319840,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '719397',
                      pageJsonId: '9704152',
                      code: 'function main(data,state,success,fail){var _reply_,_reply_2;var orderSubmit=JSON.parse((_reply_=reply_028219)===null||_reply_===void 0?void 0:_reply_.resultData);var orderNbr=orderSubmit.svcCont.data.orderNbr;console.log("\\u5BA1\\u6279\\u5904\\u7406-\\u8BF7\\u6C42\\u8BE6\\u60C5\\u6570\\u636E-orderSubmit",orderSubmit);success(JSON.parse((_reply_2=reply_028219)===null||_reply_2===void 0?void 0:_reply_2.resultData))};',
                    },
                    line_number: 38,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 169458806888924160,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '940125',
                          pageJsonId: '9704152',
                          code: 'function main(data,state,success,fail){var coding=urlParam.instNbr;console.log("\\u5BA1\\u6279\\u5904\\u7406-coding",coding);if(coding!=null&&coding!=undefined){var ordersSubmit=window.localStorage.getItem(coding);if(ordersSubmit!=null&&ordersSubmit!=undefined){data.ordersSubmit=JSON.parse(ordersSubmit);console.log("\\u5BA1\\u6279\\u5904\\u7406-coding-data.ordersSubmit",data.ordersSubmit);success(data.ordersSubmit);return}}fail()};',
                          actionTitle: '判断是否是回退到起草环节时的处理',
                        },
                        line_number: 39,
                        callback1: [
                          {
                            type: 'setTimeout',
                            dataId: 169458806888936900,
                            shielding: true,
                            options: {
                              compId: 'setTimeout',
                              compName: 'system',
                              id: '168544434',
                              pageJsonId: '9704152',
                              interval: 1000,
                            },
                            line_number: 40,
                            callback1: [
                              {
                                type: 'callSelfFunc',
                                dataId: 169458806888936000,
                                shielding: true,
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '7076821',
                                  pageJsonId: '9704152',
                                  customFuncName: 'auditOrderDeal',
                                  customFuncParams: '$data_940125$',
                                },
                                line_number: 41,
                                callback1: [],
                                callback2: [],
                              },
                            ],
                          },
                          {
                            type: 'console',
                            dataId: 169458806888985920,
                            options: {
                              compId: 'debug',
                              compName: 'system',
                              id: '514522',
                              pageJsonId: '9704152',
                              value: ['====回到起草成功===='],
                            },
                            line_number: 42,
                          },
                          {
                            type: 'callSelfFunc',
                            dataId: 169458806888919550,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '717058',
                              pageJsonId: '9704152',
                              customFuncName: 'auditOrderDeal',
                              customFuncParams: '$data_940125$',
                            },
                            line_number: 43,
                            callback1: [],
                            callback2: [],
                          },
                        ],
                        callback2: [
                          {
                            type: 'apiRequest',
                            dataId: 169458806888940380,
                            options: {
                              compId: 'apiRequest',
                              compName: 'system',
                              id: '080583',
                              pageJsonId: '9704152',
                              sync: false,
                              method: 'post',
                              url: '/app/rhin/gateway/callRhinEngine',
                              _capabilityCode: 'auditOrderDistail',
                              _apiCode: 'auditOrderDistail',
                              _source: 'rhin',
                              _serviceId: '879342105577734144',
                              _serviceTitle:
                                '审批单详情-hdb: auditOrderDistail',
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
                                  dataKey: '424703_header',
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
                                  dataKey: '424703_path',
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
                                  dataKey: '424703_query',
                                  key: '2',
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
                                      dataKey: '424703_body.instNbr',
                                      value: {
                                        type: ['context', '$urlParam.instNbr$'],
                                        code: '',
                                      },
                                      parentType: 'object',
                                      parentKey: '3',
                                      key: '3-1',
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
                                      dataKey: '424703_body.instId',
                                      value: {
                                        type: ['context', '$urlParam.instId$'],
                                        code: '',
                                      },
                                      parentType: 'object',
                                      parentKey: '3',
                                      key: '3-0',
                                    },
                                  ],
                                  _id: 'body',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'body',
                                  dataKey: '424703_body',
                                  key: '3',
                                },
                              ],
                              _sourceName: '审批单详情-hdb',
                            },
                            line_number: 44,
                            callback1: [
                              {
                                type: 'customActionCode',
                                dataId: 169458806888926340,
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '095965',
                                  pageJsonId: '9704152',
                                  code: 'function main(data,state,success,fail){var _reply_,_reply_2,_reply_3;var orderSubmit=JSON.parse((_reply_=reply_080583)===null||_reply_===void 0?void 0:_reply_.resultData);var orderNbr=orderSubmit.svcCont.data.orderNbr;console.log("\\u5BA1\\u6279\\u5904\\u7406-\\u8BF7\\u6C42\\u8BE6\\u60C5\\u6570\\u636E-orderSubmit",orderSubmit);data.ordersSubmit=orderSubmit;window.localStorage.setItem(orderNbr,(_reply_2=reply_080583)===null||_reply_2===void 0?void 0:_reply_2.resultData);success(JSON.parse((_reply_3=reply_080583)===null||_reply_3===void 0?void 0:_reply_3.resultData))};',
                                },
                                line_number: 45,
                                callback1: [
                                  {
                                    type: 'callSelfFunc',
                                    dataId: 169458806888997060,
                                    options: {
                                      compId: 'callSelfFunc',
                                      compName: 'system',
                                      id: '89524',
                                      pageJsonId: '9704152',
                                      customFuncName: 'auditOrderDeal',
                                      customFuncParams: '$data_095965$',
                                    },
                                    line_number: 46,
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
                    callback2: [],
                  },
                ],
                callback2: [],
              },
              {
                type: 'apiRequest',
                dataId: 169026788108077920,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '723494',
                  pageJsonId: '9704152',
                  sync: false,
                  actionTitle: '查询流程视图',
                  method: 'post',
                  url: '/app/rhin/gateway/callRhinEngine',
                  _capabilityCode: 'qryFlowView',
                  _apiCode: 'qryFlowView',
                  _source: 'rhin',
                  _serviceId: '887698304253431808',
                  _serviceTitle: '查询流程视图: qryFlowView',
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
                      dataKey: '234904_header',
                      parentType: 'object',
                      parentKey: '0',
                      key: '0-0',
                    },
                    {
                      code: 'path',
                      name: '请求路径参数',
                      attrType: 'object',
                      children: [
                        {
                          code: 'workId',
                          name: '新增节点',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'T',
                          defaultValue: '',
                          _id: 'path.workId',
                          compType: 'Input',
                          parents: ['root', 'path'],
                          id: 'path.workId',
                          dataKey: '234904_path.workId',
                          value: {
                            type: ['context', '$urlParam.workId$'],
                            code: '',
                          },
                          parentType: 'object',
                          parentKey: '0-1',
                          key: '0-1-0',
                        },
                      ],
                      _id: 'path',
                      compType: 'Input',
                      parents: ['root'],
                      id: 'path',
                      dataKey: '234904_path',
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
                      dataKey: '234904_query',
                      parentType: 'object',
                      parentKey: '0',
                      key: '0-2',
                    },
                    {
                      code: 'body',
                      name: '请求体',
                      attrType: 'object',
                      _id: 'body',
                      compType: 'Input',
                      parents: ['root'],
                      id: 'body',
                      dataKey: '234904_body',
                      parentType: 'object',
                      parentKey: '0',
                      key: '0-3',
                    },
                  ],
                },
                line_number: 47,
                callback1: [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '262574',
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$reply_723494?.resultData.flowCode$',
                          operate: '!=',
                          manualValue: 'COMMON_MEETING_FLOW',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 169026788108037340,
                    elseIfs: [
                      {
                        dataName: 'elseIf',
                        dataId: 169026788108054880,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 169026788108041000,
                            children: [],
                            todoOptions: ['visible', 'selectComp'],
                            options: {
                              compId: ['Card_931416'],
                              compName: 'page',
                              id: '849384',
                              pageJsonId: '9704152',
                              visible: '',
                              compid: ['Card_931416'],
                            },
                            actionObjId: 'sysSetVisible',
                            actionObjName: 'page',
                            value: 'sysSetVisible',
                            line_number: 50,
                          },
                        ],
                        condition: [],
                        callback: [
                          {
                            type: 'sysSetVisible',
                            dataId: 169026788108041000,
                            options: {
                              compId: ['Card_931416'],
                              compName: 'page',
                              id: '849384',
                              pageJsonId: '9704152',
                              visible: '',
                              compid: ['Card_931416'],
                            },
                            line_number: 50,
                          },
                        ],
                      },
                    ],
                    line_number: 48,
                    callback1: [
                      {
                        type: 'setRemoteCompProps',
                        dataId: 169026788108013920,
                        options: {
                          compId: 'RemoteComponent_8565859',
                          compLib: 'comm',
                          pageJsonId: '9704152',
                          compName: 'RemoteComponent',
                          id: '719876',
                          rProps: '$reply_723494?.resultData$',
                        },
                        line_number: 49,
                      },
                    ],
                  },
                ],
                callback2: [],
              },
              {
                type: 'customActionCode',
                dataId: 169026788957236060,
                shielding: true,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '341527',
                  pageJsonId: '9704152',
                  code: 'function main(data,state,success,fail){var coding=urlParam.instNbr;console.log("\\u5BA1\\u6279\\u5904\\u7406-coding",coding);if(coding!=null&&coding!=undefined){var ordersSubmit=window.localStorage.getItem(coding);if(ordersSubmit!=null&&ordersSubmit!=undefined){data.ordersSubmit=JSON.parse(ordersSubmit);console.log("\\u5BA1\\u6279\\u5904\\u7406-coding-data.ordersSubmit",data.ordersSubmit);success(data.ordersSubmit);return}}fail()};',
                  actionTitle: '判断是否是回退到起草环节时的处理',
                },
                line_number: 51,
                callback1: [
                  {
                    type: 'setTimeout',
                    dataId: 169026788957220130,
                    shielding: true,
                    options: {
                      compId: 'setTimeout',
                      compName: 'system',
                      id: '346498',
                      pageJsonId: '9704152',
                      interval: 1000,
                    },
                    line_number: 52,
                    callback1: [
                      {
                        type: 'callSelfFunc',
                        dataId: 169026788957286700,
                        shielding: true,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '05155',
                          pageJsonId: '9704152',
                          customFuncName: 'auditOrderDeal',
                          customFuncParams: '$data_341527$',
                        },
                        line_number: 53,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                  },
                  {
                    type: 'console',
                    dataId: 169026788957271840,
                    shielding: true,
                    options: {
                      compId: 'debug',
                      compName: 'system',
                      id: '746509',
                      pageJsonId: '9704152',
                      value: ['====回到起草成功===='],
                    },
                    line_number: 54,
                  },
                  {
                    type: 'callSelfFunc',
                    dataId: 169026788957274660,
                    shielding: true,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '294213',
                      pageJsonId: '9704152',
                      customFuncName: 'auditOrderDeal',
                      customFuncParams: '$data_341527$',
                    },
                    line_number: 55,
                    callback1: [],
                    callback2: [],
                  },
                ],
                callback2: [
                  {
                    type: 'apiRequest',
                    dataId: 169026788957208830,
                    shielding: true,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '1961817',
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
                          dataKey: '424703_header',
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
                          dataKey: '424703_path',
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
                          dataKey: '424703_query',
                          key: '2',
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
                              dataKey: '424703_body.instNbr',
                              value: {
                                type: ['context', '$urlParam.instNbr$'],
                                code: '',
                              },
                              parentType: 'object',
                              parentKey: '3',
                              key: '3-1',
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
                              dataKey: '424703_body.instId',
                              value: {
                                type: ['context', '$urlParam.instId$'],
                                code: '',
                              },
                              parentType: 'object',
                              parentKey: '3',
                              key: '3-0',
                            },
                          ],
                          _id: 'body',
                          compType: 'Input',
                          parents: [],
                          id: 'body',
                          dataKey: '424703_body',
                          key: '3',
                        },
                      ],
                      _sourceName: '审批单详情-hdb',
                    },
                    line_number: 56,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 169026788957233000,
                        shielding: true,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '868071',
                          pageJsonId: '9704152',
                          code: 'function main(data,state,success,fail){var _reply_,_reply_2,_reply_3;var orderSubmit=JSON.parse((_reply_=reply_1961817)===null||_reply_===void 0?void 0:_reply_.resultData);var orderNbr=orderSubmit.svcCont.data.orderNbr;console.log("\\u5BA1\\u6279\\u5904\\u7406-\\u8BF7\\u6C42\\u8BE6\\u60C5\\u6570\\u636E-orderSubmit",orderSubmit);window.localStorage.setItem(orderNbr,(_reply_2=reply_1961817)===null||_reply_2===void 0?void 0:_reply_2.resultData);success(JSON.parse((_reply_3=reply_1961817)===null||_reply_3===void 0?void 0:_reply_3.resultData))};',
                        },
                        line_number: 57,
                        callback1: [
                          {
                            type: 'callSelfFunc',
                            dataId: 169026788957277000,
                            shielding: true,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '895439',
                              pageJsonId: '9704152',
                              customFuncName: 'auditOrderDeal',
                              customFuncParams: '$data_868071$',
                            },
                            line_number: 58,
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
          },
        ],
        line_number: 7,
        callback1: [
          {
            type: 'apiRequest',
            dataId: 169019248629037280,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '42396',
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
                  key: '0-0',
                  parentType: 'object',
                  parentKey: '0',
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
                  key: '0-1',
                  parentType: 'object',
                  parentKey: '0',
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
                  key: '0-2',
                  parentType: 'object',
                  parentKey: '0',
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
                  key: '0-3',
                  parentType: 'object',
                  parentKey: '0',
                },
              ],
              _sourceName: '审批单详情-hdb',
            },
            line_number: 8,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 169019248629092540,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '269565',
                  pageJsonId: '9704152',
                  code: 'function main(data,state,success,fail){var _reply_,_reply_2;console.log("\\u8FD4\\u56DE\\u7ED3\\u679C: ",(_reply_=reply_42396)===null||_reply_===void 0?void 0:_reply_.resultData);var info=JSON.parse((_reply_2=reply_42396)===null||_reply_2===void 0?void 0:_reply_2.resultData);var itemList=info.svcCont.data.content.itemList;var item=itemList[0];var catalogCode=item.childCatalogCode;if("CLS_TY_0004_0001"==catalogCode){var busiOppCode=item.customObject.busiOppInfoObj.busiOppCode;success(busiOppCode)}else{fail()}};',
                  actionTitle: '售前工作量特殊处理',
                },
                line_number: 9,
                callback1: [
                  {
                    type: 'apiRequest',
                    dataId: 169019248629076300,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '357645',
                      pageJsonId: '9704152',
                      sync: false,
                      actionTitle: '',
                      method: 'post',
                      url: '/app/rhin/gateway/callRhinEngine',
                      _capabilityCode: 'updateIctTotalWorkload',
                      _apiCode: 'updateIctTotalWorkload',
                      _source: 'rhin',
                      _sourceName: '更新累计工作量-hyj',
                      _serviceId: '1000691397773922304',
                      _serviceTitle:
                        '更新累计工作量-hyj: updateIctTotalWorkload',
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
                              dataKey: '9747235_root.header',
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
                              dataKey: '9747235_root.path',
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
                              dataKey: '9747235_root.query',
                            },
                            {
                              code: 'body',
                              name: '请求体',
                              attrType: 'object',
                              children: [
                                {
                                  code: 'busiOppCode',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'root.body.busiOppCode',
                                  compType: 'Input',
                                  name: 'busiOppCode',
                                  parents: ['root', 'body'],
                                  parentType: 'object',
                                  parentKey: '0-3',
                                  key: '0-3-0',
                                  id: 'root.body.busiOppCode',
                                  dataKey: '9747235_root.body.busiOppCode',
                                  value: {
                                    type: ['context', '$data_269565$'],
                                    code: '',
                                  },
                                },
                                {
                                  code: 'orderNbr',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'root.body.orderNbr',
                                  compType: 'Input',
                                  name: 'orderNbr',
                                  parents: ['root', 'body'],
                                  parentType: 'object',
                                  parentKey: '0-3',
                                  key: '0-3-1',
                                  id: 'root.body.orderNbr',
                                  dataKey: '9747235_root.body.orderNbr',
                                  value: {
                                    type: ['context', '$urlParam.instNbr$'],
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
                              dataKey: '9747235_root.body',
                            },
                          ],
                          _id: 'root',
                          compType: 'Input',
                          isRoot: true,
                          parents: [],
                          key: '0',
                          id: 'root',
                          dataKey: '9747235_root',
                        },
                      ],
                      _requestType: 'object',
                    },
                    line_number: 10,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '077544',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$reply_357645?.resultCode$',
                              operate: '==',
                              manualValue: '0',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 169019248629085000,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 169019248629032320,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 169019248629035620,
                                children: [],
                                todoOptions: ['msgType', 'value', 'duration'],
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '853017',
                                  pageJsonId: '9704152',
                                  type: 'error',
                                  value: '$reply_357645?.resultMsg$',
                                },
                                actionObjId: 'showMessage',
                                actionObjName: 'system',
                                value: 'showMessage',
                                tips: '注意：当加载时长为0时，表示一直显示加载中。当加载时长大于0时，表示按照设置时间显示加载中。',
                                line_number: 24,
                              },
                            ],
                            condition: [],
                            value: 'elseIf',
                            desc: '',
                            callback: [
                              {
                                type: 'showMessage',
                                dataId: 169019248629035620,
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '853017',
                                  pageJsonId: '9704152',
                                  type: 'error',
                                  value: '$reply_357645?.resultMsg$',
                                },
                                line_number: 24,
                              },
                            ],
                          },
                        ],
                        line_number: 11,
                        callback1: [
                          {
                            type: 'apiRequest',
                            dataId: 169026591547462900,
                            options: {
                              compId: 'apiRequest',
                              compName: 'system',
                              id: '284886',
                              pageJsonId: '9704152',
                              sync: false,
                              actionTitle: '查询流程视图',
                              method: 'post',
                              url: '/app/rhin/gateway/callRhinEngine',
                              _capabilityCode: 'qryFlowView',
                              _apiCode: 'qryFlowView',
                              _source: 'rhin',
                              _serviceId: '887698304253431808',
                              _serviceTitle: '查询流程视图: qryFlowView',
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
                                  dataKey: '234904_header',
                                  parentType: 'object',
                                  parentKey: '0',
                                  key: '0-0',
                                },
                                {
                                  code: 'path',
                                  name: '请求路径参数',
                                  attrType: 'object',
                                  children: [
                                    {
                                      code: 'workId',
                                      name: '新增节点',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'T',
                                      defaultValue: '',
                                      _id: 'path.workId',
                                      compType: 'Input',
                                      parents: ['root', 'path'],
                                      id: 'path.workId',
                                      dataKey: '234904_path.workId',
                                      value: {
                                        type: ['context', '$urlParam.workId$'],
                                        code: '',
                                      },
                                      parentType: 'object',
                                      parentKey: '0-1',
                                      key: '0-1-0',
                                    },
                                  ],
                                  _id: 'path',
                                  compType: 'Input',
                                  parents: ['root'],
                                  id: 'path',
                                  dataKey: '234904_path',
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
                                  dataKey: '234904_query',
                                  parentType: 'object',
                                  parentKey: '0',
                                  key: '0-2',
                                },
                                {
                                  code: 'body',
                                  name: '请求体',
                                  attrType: 'object',
                                  _id: 'body',
                                  compType: 'Input',
                                  parents: ['root'],
                                  id: 'body',
                                  dataKey: '234904_body',
                                  parentType: 'object',
                                  parentKey: '0',
                                  key: '0-3',
                                },
                              ],
                            },
                            line_number: 12,
                            callback1: [
                              {
                                type: 'ifelse',
                                condition: [
                                  {
                                    condId: '262574',
                                    options: {
                                      useManual: true,
                                      useObject: false,
                                      context:
                                        '$reply_284886?.resultData.flowCode$',
                                      operate: '!=',
                                      manualValue: 'COMMON_MEETING_FLOW',
                                    },
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                                dataId: 169026591551462620,
                                elseIfs: [
                                  {
                                    dataName: 'elseIf',
                                    dataId: 169026591551478180,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 169026591551456800,
                                        children: [],
                                        todoOptions: ['visible', 'selectComp'],
                                        options: {
                                          compId: ['Card_931416'],
                                          compName: 'page',
                                          id: '266447',
                                          pageJsonId: '9704152',
                                          visible: '',
                                          compid: ['Card_931416'],
                                        },
                                        actionObjId: 'sysSetVisible',
                                        actionObjName: 'page',
                                        value: 'sysSetVisible',
                                        line_number: 15,
                                      },
                                    ],
                                    condition: [],
                                    callback: [
                                      {
                                        type: 'sysSetVisible',
                                        dataId: 169026591551456800,
                                        options: {
                                          compId: ['Card_931416'],
                                          compName: 'page',
                                          id: '266447',
                                          pageJsonId: '9704152',
                                          visible: '',
                                          compid: ['Card_931416'],
                                        },
                                        line_number: 15,
                                      },
                                    ],
                                  },
                                ],
                                line_number: 13,
                                callback1: [
                                  {
                                    type: 'setRemoteCompProps',
                                    dataId: 169026591551489120,
                                    options: {
                                      compId: 'RemoteComponent_8565859',
                                      compLib: 'comm',
                                      pageJsonId: '9704152',
                                      compName: 'RemoteComponent',
                                      id: '93803',
                                      rProps: '$reply_284886?.resultData$',
                                    },
                                    line_number: 14,
                                  },
                                ],
                              },
                            ],
                            callback2: [],
                          },
                          {
                            type: 'customActionCode',
                            dataId: 169026592852471580,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '3581683',
                              pageJsonId: '9704152',
                              code: 'function main(data,state,success,fail){var coding=urlParam.instNbr;console.log("\\u5BA1\\u6279\\u5904\\u7406-coding",coding);if(coding!=null&&coding!=undefined){var ordersSubmit=window.localStorage.getItem(coding);if(ordersSubmit!=null&&ordersSubmit!=undefined){data.ordersSubmit=JSON.parse(ordersSubmit);console.log("\\u5BA1\\u6279\\u5904\\u7406-coding-data.ordersSubmit",data.ordersSubmit);success(data.ordersSubmit);return}}fail()};',
                              actionTitle: '判断是否是回退到起草环节时的处理',
                            },
                            line_number: 16,
                            callback1: [
                              {
                                type: 'setTimeout',
                                dataId: 169026592852488200,
                                shielding: true,
                                options: {
                                  compId: 'setTimeout',
                                  compName: 'system',
                                  id: '376123',
                                  pageJsonId: '9704152',
                                  interval: 1000,
                                },
                                line_number: 17,
                                callback1: [
                                  {
                                    type: 'callSelfFunc',
                                    dataId: 169026592852423070,
                                    shielding: true,
                                    options: {
                                      compId: 'callSelfFunc',
                                      compName: 'system',
                                      id: '082883',
                                      pageJsonId: '9704152',
                                      customFuncName: 'auditOrderDeal',
                                      customFuncParams: '$data_3581683$',
                                    },
                                    line_number: 18,
                                    callback1: [],
                                    callback2: [],
                                  },
                                ],
                              },
                              {
                                type: 'console',
                                dataId: 169026592852410660,
                                options: {
                                  compId: 'debug',
                                  compName: 'system',
                                  id: '21324',
                                  pageJsonId: '9704152',
                                  value: ['====回到起草成功===='],
                                },
                                line_number: 19,
                              },
                              {
                                type: 'callSelfFunc',
                                dataId: 169026592852468260,
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '944084',
                                  pageJsonId: '9704152',
                                  customFuncName: 'auditOrderDeal',
                                  customFuncParams: '$data_3581683$',
                                },
                                line_number: 20,
                                callback1: [],
                                callback2: [],
                              },
                            ],
                            callback2: [
                              {
                                type: 'apiRequest',
                                dataId: 169026592852466530,
                                options: {
                                  compId: 'apiRequest',
                                  compName: 'system',
                                  id: '746405',
                                  pageJsonId: '9704152',
                                  sync: false,
                                  method: 'post',
                                  url: '/app/rhin/gateway/callRhinEngine',
                                  _capabilityCode: 'auditOrderDistail',
                                  _apiCode: 'auditOrderDistail',
                                  _source: 'rhin',
                                  _serviceId: '879342105577734144',
                                  _serviceTitle:
                                    '审批单详情-hdb: auditOrderDistail',
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
                                      key: '0-0',
                                      parentType: 'object',
                                      parentKey: '0',
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
                                      key: '0-1',
                                      parentType: 'object',
                                      parentKey: '0',
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
                                      key: '0-2',
                                      parentType: 'object',
                                      parentKey: '0',
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
                                            type: [
                                              'context',
                                              '$urlParam.instNbr$',
                                            ],
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
                                            type: [
                                              'context',
                                              '$urlParam.instId$',
                                            ],
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
                                      key: '0-3',
                                      parentType: 'object',
                                      parentKey: '0',
                                    },
                                  ],
                                  _sourceName: '审批单详情-hdb',
                                },
                                line_number: 21,
                                callback1: [
                                  {
                                    type: 'customActionCode',
                                    dataId: 169026592852437000,
                                    options: {
                                      compId: 'customActionCode',
                                      compName: 'page',
                                      id: '985225',
                                      pageJsonId: '9704152',
                                      code: 'function main(data,state,success,fail){var _reply_,_reply_2,_reply_3;var orderSubmit=JSON.parse((_reply_=reply_746405)===null||_reply_===void 0?void 0:_reply_.resultData);var orderNbr=orderSubmit.svcCont.data.orderNbr;console.log("\\u5BA1\\u6279\\u5904\\u7406-\\u8BF7\\u6C42\\u8BE6\\u60C5\\u6570\\u636E-orderSubmit",orderSubmit);data.ordersSubmit=orderSubmit;window.localStorage.setItem(orderNbr,(_reply_2=reply_746405)===null||_reply_2===void 0?void 0:_reply_2.resultData);success(JSON.parse((_reply_3=reply_746405)===null||_reply_3===void 0?void 0:_reply_3.resultData))};',
                                    },
                                    line_number: 22,
                                    callback1: [
                                      {
                                        type: 'callSelfFunc',
                                        dataId: 169026592852410900,
                                        options: {
                                          compId: 'callSelfFunc',
                                          compName: 'system',
                                          id: '265503',
                                          pageJsonId: '9704152',
                                          customFuncName: 'auditOrderDeal',
                                          customFuncParams: '$data_985225$',
                                        },
                                        line_number: 23,
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
                      },
                    ],
                    callback2: [],
                  },
                ],
                callback2: [
                  {
                    type: 'apiRequest',
                    dataId: 169026601308343700,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '836504',
                      pageJsonId: '9704152',
                      sync: false,
                      actionTitle: '查询流程视图',
                      method: 'post',
                      url: '/app/rhin/gateway/callRhinEngine',
                      _capabilityCode: 'qryFlowView',
                      _apiCode: 'qryFlowView',
                      _source: 'rhin',
                      _serviceId: '887698304253431808',
                      _serviceTitle: '查询流程视图: qryFlowView',
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
                          dataKey: '234904_header',
                          parentType: 'object',
                          parentKey: '0',
                          key: '0-0',
                        },
                        {
                          code: 'path',
                          name: '请求路径参数',
                          attrType: 'object',
                          children: [
                            {
                              code: 'workId',
                              name: '新增节点',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'T',
                              defaultValue: '',
                              _id: 'path.workId',
                              compType: 'Input',
                              parents: ['root', 'path'],
                              id: 'path.workId',
                              dataKey: '234904_path.workId',
                              value: {
                                type: ['context', '$urlParam.workId$'],
                                code: '',
                              },
                              parentType: 'object',
                              parentKey: '0-1',
                              key: '0-1-0',
                            },
                          ],
                          _id: 'path',
                          compType: 'Input',
                          parents: ['root'],
                          id: 'path',
                          dataKey: '234904_path',
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
                          dataKey: '234904_query',
                          parentType: 'object',
                          parentKey: '0',
                          key: '0-2',
                        },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          _id: 'body',
                          compType: 'Input',
                          parents: ['root'],
                          id: 'body',
                          dataKey: '234904_body',
                          parentType: 'object',
                          parentKey: '0',
                          key: '0-3',
                        },
                      ],
                    },
                    line_number: 25,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '262574',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$reply_836504?.resultData.flowCode$',
                              operate: '!=',
                              manualValue: 'COMMON_MEETING_FLOW',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 169026601308335400,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 169026601308321120,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 169026601308391940,
                                children: [],
                                todoOptions: ['visible', 'selectComp'],
                                options: {
                                  compId: ['Card_931416'],
                                  compName: 'page',
                                  id: '276841',
                                  pageJsonId: '9704152',
                                  visible: '',
                                  compid: ['Card_931416'],
                                },
                                actionObjId: 'sysSetVisible',
                                actionObjName: 'page',
                                value: 'sysSetVisible',
                                line_number: 28,
                              },
                            ],
                            condition: [],
                            callback: [
                              {
                                type: 'sysSetVisible',
                                dataId: 169026601308391940,
                                options: {
                                  compId: ['Card_931416'],
                                  compName: 'page',
                                  id: '276841',
                                  pageJsonId: '9704152',
                                  visible: '',
                                  compid: ['Card_931416'],
                                },
                                line_number: 28,
                              },
                            ],
                          },
                        ],
                        line_number: 26,
                        callback1: [
                          {
                            type: 'setRemoteCompProps',
                            dataId: 169026601308308930,
                            options: {
                              compId: 'RemoteComponent_8565859',
                              compLib: 'comm',
                              pageJsonId: '9704152',
                              compName: 'RemoteComponent',
                              id: '18705',
                              rProps: '$reply_836504?.resultData$',
                            },
                            line_number: 27,
                          },
                        ],
                      },
                    ],
                    callback2: [],
                  },
                  {
                    type: 'customActionCode',
                    dataId: 169026603001501220,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '2835825',
                      pageJsonId: '9704152',
                      code: 'function main(data,state,success,fail){var coding=urlParam.instNbr;console.log("\\u5BA1\\u6279\\u5904\\u7406-coding",coding);if(coding!=null&&coding!=undefined){var ordersSubmit=window.localStorage.getItem(coding);if(ordersSubmit!=null&&ordersSubmit!=undefined){data.ordersSubmit=JSON.parse(ordersSubmit);console.log("\\u5BA1\\u6279\\u5904\\u7406-coding-data.ordersSubmit",data.ordersSubmit);success(data.ordersSubmit);return}}fail()};',
                      actionTitle: '判断是否是回退到起草环节时的处理',
                    },
                    line_number: 29,
                    callback1: [
                      {
                        type: 'setTimeout',
                        dataId: 169026603001578300,
                        shielding: true,
                        options: {
                          compId: 'setTimeout',
                          compName: 'system',
                          id: '499627',
                          pageJsonId: '9704152',
                          interval: 1000,
                        },
                        line_number: 30,
                        callback1: [
                          {
                            type: 'callSelfFunc',
                            dataId: 169026603001512030,
                            shielding: true,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '830766',
                              pageJsonId: '9704152',
                              customFuncName: 'auditOrderDeal',
                              customFuncParams: '$data_2835825$',
                            },
                            line_number: 31,
                            callback1: [],
                            callback2: [],
                          },
                        ],
                      },
                      {
                        type: 'console',
                        dataId: 169026603001518430,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '937799',
                          pageJsonId: '9704152',
                          value: ['====回到起草成功===='],
                        },
                        line_number: 32,
                      },
                      {
                        type: 'callSelfFunc',
                        dataId: 169026603001594500,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '4679374',
                          pageJsonId: '9704152',
                          customFuncName: 'auditOrderDeal',
                          customFuncParams: '$data_2835825$',
                        },
                        line_number: 33,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                    callback2: [
                      {
                        type: 'apiRequest',
                        dataId: 169026603001566080,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '985169',
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
                              key: '0-0',
                              parentType: 'object',
                              parentKey: '0',
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
                              key: '0-1',
                              parentType: 'object',
                              parentKey: '0',
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
                              key: '0-2',
                              parentType: 'object',
                              parentKey: '0',
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
                              key: '0-3',
                              parentType: 'object',
                              parentKey: '0',
                            },
                          ],
                          _sourceName: '审批单详情-hdb',
                        },
                        line_number: 34,
                        callback1: [
                          {
                            type: 'customActionCode',
                            dataId: 169026603001518660,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '289737',
                              pageJsonId: '9704152',
                              code: 'function main(data,state,success,fail){var _reply_,_reply_2,_reply_3;var orderSubmit=JSON.parse((_reply_=reply_985169)===null||_reply_===void 0?void 0:_reply_.resultData);var orderNbr=orderSubmit.svcCont.data.orderNbr;console.log("\\u5BA1\\u6279\\u5904\\u7406-\\u8BF7\\u6C42\\u8BE6\\u60C5\\u6570\\u636E-orderSubmit",orderSubmit);data.ordersSubmit=orderSubmit;window.localStorage.setItem(orderNbr,(_reply_2=reply_985169)===null||_reply_2===void 0?void 0:_reply_2.resultData);success(JSON.parse((_reply_3=reply_985169)===null||_reply_3===void 0?void 0:_reply_3.resultData))};',
                            },
                            line_number: 35,
                            callback1: [
                              {
                                type: 'callSelfFunc',
                                dataId: 169026603001587500,
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '577497',
                                  pageJsonId: '9704152',
                                  customFuncName: 'auditOrderDeal',
                                  customFuncParams: '$data_289737$',
                                },
                                line_number: 36,
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
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse137.params = [] || [];
    CMDGenerator(eventDataifelse137, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDataifelse138: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '184075',
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
        dataId: 166271276293686240,
        elseIfs: [
          {
            dataName: 'elseIf',
            dataId: 167048392877187140,
            children: [
              {
                dataName: 'action',
                dataId: 167048393962741400,
                children: [
                  {
                    dataName: 'callback',
                    dataId: 167048393962751420,
                    children: [],
                    value: 'callback1',
                    params: [],
                  },
                  {
                    dataName: 'callback',
                    dataId: 167048393962779300,
                    children: [],
                    value: 'callback2',
                    params: [],
                  },
                ],
                todoOptions: ['actionTitle', 'editorCode'],
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '483509',
                  pageJsonId: '9704152',
                  code: 'function main(data,state,success,fail){var footer=document.querySelector(".View_View_938709");footer.style.left="".concat(footer.parentNode.getBoundingClientRect().x,"px");footer.style.right="58px"};',
                },
                actionObjId: 'customActionCode',
                actionObjName: 'page',
                value: 'customActionCode',
                line_number: 62,
              },
              {
                dataName: 'action',
                dataId: 167048395186733250,
                children: [],
                todoOptions: ['compId', 'visible'],
                options: {
                  compId: [
                    'View_106266',
                    'Button_2061707_637045_014961',
                    'View_227491',
                  ],
                  compName: 'page',
                  id: '235652',
                  pageJsonId: '9704152',
                  compid: [
                    'View_106266',
                    'Button_2061707_637045_014961',
                    'View_227491',
                  ],
                  visible: '',
                },
                actionObjId: 'sysSetVisible',
                actionObjName: 'page',
                value: 'sysSetVisible',
                line_number: 63,
              },
              {
                dataName: 'action',
                dataId: 167048402137397630,
                children: [],
                todoOptions: ['visible', 'selectComp'],
                options: {
                  compId: 'Button_2061707_637045_014961_479135',
                  compLib: 'comm',
                  pageJsonId: '9704152',
                  compName: 'Button',
                  id: '6261757',
                  visible: 'true',
                },
                actionObjId: 'Button_2061707_637045_014961_479135',
                actionObjName: 'Button',
                value: 'setVisible',
                compLib: 'comm',
                line_number: 64,
              },
            ],
            condition: [
              {
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$urlParam.scene$',
                  operate: '==',
                  manualValue: 'R',
                },
                condId: '9835697',
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            desc: '阅办',
            callback: [
              {
                type: 'customActionCode',
                dataId: 167048393962741400,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '483509',
                  pageJsonId: '9704152',
                  code: 'function main(data,state,success,fail){var footer=document.querySelector(".View_View_938709");footer.style.left="".concat(footer.parentNode.getBoundingClientRect().x,"px");footer.style.right="58px"};',
                },
                line_number: 62,
                callback1: [],
                callback2: [],
              },
              {
                type: 'sysSetVisible',
                dataId: 167048395186733250,
                options: {
                  compId: [
                    'View_106266',
                    'Button_2061707_637045_014961',
                    'View_227491',
                  ],
                  compName: 'page',
                  id: '235652',
                  pageJsonId: '9704152',
                  compid: [
                    'View_106266',
                    'Button_2061707_637045_014961',
                    'View_227491',
                  ],
                  visible: '',
                },
                line_number: 63,
              },
              {
                type: 'setVisible',
                dataId: 167048402137397630,
                options: {
                  compId: 'Button_2061707_637045_014961_479135',
                  compLib: 'comm',
                  pageJsonId: '9704152',
                  compName: 'Button',
                  id: '6261757',
                  visible: 'true',
                },
                line_number: 64,
              },
            ],
          },
          {
            dataName: 'elseIf',
            dataId: 166391267134593440,
            children: [
              {
                dataName: 'action',
                dataId: 166391308308953250,
                children: [],
                todoOptions: ['visible'],
                options: {
                  compId: 'View_938709',
                  compLib: 'custom',
                  pageJsonId: '9704152',
                  compName: 'View',
                  id: '4759336',
                  visible: 'toggle',
                },
                actionObjId: 'View_938709',
                actionObjName: 'View',
                value: 'setVisible',
                compLib: 'custom',
                line_number: 65,
              },
            ],
            condition: [],
            callback: [
              {
                type: 'setVisible',
                dataId: 166391308308953250,
                options: {
                  compId: 'View_938709',
                  compLib: 'custom',
                  pageJsonId: '9704152',
                  compName: 'View',
                  id: '4759336',
                  visible: 'toggle',
                },
                line_number: 65,
              },
            ],
          },
        ],
        line_number: 59,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 166391303823225950,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '577451',
              pageJsonId: '9704152',
              code: 'function main(data,state,success,fail){var footer=document.querySelector(".View_View_938709");footer.style.left="".concat(footer.parentNode.getBoundingClientRect().x,"px");footer.style.right="58px"};',
            },
            line_number: 60,
            callback1: [],
            callback2: [],
          },
          {
            type: 'sysSetVisible',
            dataId: 166390008810660400,
            options: {
              compId: [
                'View_106266',
                'Button_2061707_637045_014961',
                'View_227491',
              ],
              compName: 'page',
              id: '425893',
              pageJsonId: '9704152',
              compid: [
                'View_106266',
                'Button_2061707_637045_014961',
                'View_227491',
              ],
              visible: '',
            },
            line_number: 61,
          },
        ],
      },
    ];
    eventDataifelse138.params = [] || [];
    CMDGenerator(eventDataifelse138, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDataifelse139: any = [
      {
        type: 'ifelse',
        condition: [
          {
            options: {
              useManual: true,
              useObject: false,
              context: '$urlParam.scene$',
              operate: '==',
              manualValue: 'U',
            },
            condId: '1726624',
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 166797983677025150,
        elseIfs: [],
        line_number: 66,
        callback1: [
          {
            type: 'apiRequest',
            dataId: 166841708505185800,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '2558419',
              pageJsonId: '9704152',
              sync: false,
              method: 'post',
              url: '/app/rhin/gateway/callRhinEngine',
              _capabilityCode: 'getFlowItemSimpleInfo',
              _apiCode: 'getFlowItemSimpleInfo',
              _source: 'rhin',
              _serviceId: '874132034304221184',
              _serviceTitle:
                '获取流程环节实例简要信息-tzp: getFlowItemSimpleInfo',
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
                  dataKey: '92238_header',
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
                  dataKey: '92238_path',
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
                  dataKey: '92238_query',
                  key: '2',
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  children: [
                    {
                      code: 'workItemId',
                      name: '环节实例id',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'body.workItemId',
                      compType: 'Input',
                      parents: ['body'],
                      id: 'body.workItemId',
                      dataKey: '92238_body.workItemId',
                      value: {
                        type: ['context', '$urlParam.workItemId$'],
                        code: '',
                      },
                      parentType: 'object',
                      parentKey: '3',
                      key: '3-0',
                    },
                  ],
                  _id: 'body',
                  compType: 'Input',
                  parents: [],
                  id: 'body',
                  dataKey: '92238_body',
                  key: '3',
                },
              ],
              _sourceName: '获取流程环节实例简要信息-tzp',
            },
            line_number: 67,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '2345078',
                    options: {
                      useManual: true,
                      useObject: false,
                      context:
                        '$reply_2558419?.resultData.isSupportMergeOrder$',
                      operate: '==',
                      manualValue: '1',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166841708505162780,
                elseIfs: [],
                line_number: 68,
                callback1: [
                  {
                    type: 'apiRequest',
                    dataId: 166841711478700400,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '676622',
                      pageJsonId: '9704152',
                      sync: false,
                      method: 'post',
                      url: '/app/rhin/gateway/callRhinEngine',
                      _capabilityCode: 'qrySameApproveOrdCount',
                      _apiCode: 'qrySameApproveOrdCount',
                      _source: 'rhin',
                      _serviceId: '907802653982552064',
                      _serviceTitle:
                        '可合单工单数量-tzp: qrySameApproveOrdCount',
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
                          dataKey: '353009_header',
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
                          dataKey: '353009_path',
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
                          dataKey: '353009_query',
                          key: '2',
                        },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          children: [
                            {
                              code: 'workItemId',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.workItemId',
                              compType: 'Input',
                              name: 'workItemId',
                              parents: ['body'],
                              id: 'body.workItemId',
                              dataKey: '353009_body.workItemId',
                              value: {
                                type: ['page', 'url'],
                                code: 'workItemId',
                              },
                              parentType: 'object',
                              parentKey: '3',
                              key: '3-0',
                            },
                          ],
                          _id: 'body',
                          compType: 'Input',
                          parents: [],
                          id: 'body',
                          dataKey: '353009_body',
                          key: '3',
                        },
                      ],
                      actionTitle: '查询可合单数量',
                      _sourceName: '可合单工单数量-tzp',
                    },
                    line_number: 69,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '458473',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$reply_676622?.resultData$',
                              operate: '>=',
                              manualValue: '2',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 167030785845304960,
                        elseIfs: [],
                        line_number: 70,
                        callback1: [
                          {
                            type: 'setDataSource',
                            dataId: 167030790626593150,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '479541',
                              pageJsonId: '9704152',
                              dataSourceId: 166856886513002800,
                              dataSourceName: 'sameApproveOrdCount',
                              dataSourceRelType: 'custom',
                              dataSourceReloadFilter: [],
                              dataSourceSetValue: [
                                {
                                  attrId: '448004',
                                  code: 'count',
                                  name: '可合单工单数量',
                                  type: 'number',
                                  initialData: { type: 'static', value: '0' },
                                  value: {
                                    type: [
                                      'context',
                                      '$reply_676622?.resultData$',
                                    ],
                                    hideAttr: true,
                                    code: '',
                                  },
                                },
                              ],
                              operateType: 1,
                              onlySetPatch: false,
                              otherObjectArrayOptions: {},
                            },
                            line_number: 71,
                            callback1: [
                              {
                                type: 'console',
                                dataId: 167030790626581980,
                                options: {
                                  compId: 'debug',
                                  compName: 'system',
                                  id: '215697',
                                  pageJsonId: '9704152',
                                  value: [
                                    '可合单数量',
                                    '$data.sameApproveOrdCount$',
                                  ],
                                },
                                line_number: 72,
                              },
                            ],
                            callback2: [],
                          },
                          {
                            type: 'setCompContentValue',
                            dataId: 167030981652940350,
                            options: {
                              compId: 'Text_144135',
                              compLib: 'custom',
                              pageJsonId: '9704152',
                              compName: 'Text',
                              id: '32353',
                              value: '$reply_676622?.resultData$',
                            },
                            line_number: 73,
                            callback1: [
                              {
                                type: 'sysSetVisible',
                                dataId: 167030985843291300,
                                options: {
                                  compId: ['View_23774'],
                                  compName: 'page',
                                  id: '621301',
                                  pageJsonId: '9704152',
                                  visible: 'true',
                                  compid: ['View_23774'],
                                },
                                line_number: 74,
                              },
                            ],
                          },
                        ],
                      },
                    ],
                    callback2: [],
                  },
                ],
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse139.params = [] || [];
    CMDGenerator(eventDataifelse139, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDatasysSetVisible1: any = [
      {
        type: 'sysSetVisible',
        dataId: 166964025931557570,
        shielding: true,
        options: {
          compId: ['BOFramer_848795', 'Pageview_232504'],
          compName: 'page',
          id: '2699186',
          pageJsonId: '9704152',
          visible: '',
          compid: ['BOFramer_848795', 'Pageview_232504'],
        },
        line_number: 75,
      },
    ];
    eventDatasysSetVisible1.params = [] || [];
    CMDGenerator(eventDatasysSetVisible1, {}, 'sysSetVisible', {
      id: 'sysSetVisible',
      name: 'sysSetVisible',
      type: 'sysSetVisible',
      platform: 'undefined',
    });
    const eventDataifelse140: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '9978169',
            options: {
              useManual: true,
              useObject: false,
              context: '$urlParam.isScreenshot$',
              operate: '==',
              manualValue: '1',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 167099933551325860,
        elseIfs: [],
        line_number: 76,
        callback1: [
          {
            type: 'console',
            dataId: 167099933551360060,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '147727',
              pageJsonId: '9704152',
              value: ['开始截图。。。。。。。。。。。'],
            },
            line_number: 77,
          },
          {
            type: 'customActionCode',
            dataId: 167099935242301200,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '215935',
              pageJsonId: '96362242',
              code: 'function main(data,state,success,fail){var head=document.head||document.getElementsByTagName("head")[0];var appendJs=function appendJs(code){var script=document.createElement("script");script.type="text/javascript";script.async=false;script.setAttribute("src","server/app/file/appFileResource/downloadFileByFileCode?appId=871672424566726656&fileCode=".concat(code,"&X-B-AUTH=1&X-B-TARGET-ID=876477551371075584"));script.onload=success;head.appendChild(script)};appendJs("html2canvas")};',
            },
            line_number: 78,
            callback1: [
              {
                type: 'callSelfFunc',
                dataId: 167099937727174460,
                options: {
                  compId: 'callSelfFunc',
                  compName: 'system',
                  id: '81926226',
                  pageJsonId: '9704152',
                  customFuncName: 'screenshot',
                },
                line_number: 79,
                callback1: [],
                callback2: [],
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse140.params = [] || [];
    CMDGenerator(eventDataifelse140, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDatacallSelfFunc31: any = [
      {
        type: 'callSelfFunc',
        dataId: 167151807768512740,
        shielding: true,
        options: {
          compId: 'callSelfFunc',
          compName: 'system',
          id: '133768',
          pageJsonId: '9704152',
          customFuncName: 'dealPageUrl',
        },
        line_number: 80,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacallSelfFunc31.params = [] || [];
    CMDGenerator(eventDatacallSelfFunc31, {}, 'callSelfFunc', {
      id: 'callSelfFunc',
      name: 'callSelfFunc',
      type: 'callSelfFunc',
      platform: 'undefined',
    });
    const eventDatasetDataSource16: any = [
      {
        type: 'setDataSource',
        dataId: 167895403401885340,
        options: {
          compId: 'setDataSource',
          compName: 'page',
          id: '457425',
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
              showInput: true,
              _codePath: ['tacheCode'],
              _idpath: ['045638'],
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
                  showInput: false,
                  _codePath: ['childProper', 'url'],
                  _idpath: ['248702', '264439'],
                },
                {
                  attrId: '51947094',
                  code: 'itemList',
                  name: '子节点参数',
                  type: 'object',
                  initialData: { type: 'static' },
                  parentCode: 'childProper',
                  parentKey: 'childProper',
                  showInput: false,
                  _codePath: ['childProper', 'itemList'],
                  _idpath: ['248702', '51947094'],
                },
                {
                  attrId: '778353',
                  code: 'catalogCode',
                  name: '场景编码',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                  _codePath: ['childProper', 'catalogCode'],
                  _idpath: ['248702', '778353'],
                  parentCode: 'childProper',
                  parentKey: 'childProper',
                },
              ],
              showInput: true,
              _codePath: ['childProper'],
              _idpath: ['248702'],
            },
            {
              attrId: '033692',
              code: 'flowCode',
              name: '属性',
              type: 'string',
              initialData: { type: 'static', value: '' },
              showInput: true,
              _codePath: ['flowCode'],
              _idpath: ['033692'],
            },
            {
              attrId: '0977908',
              code: 'groupType',
              name: '属性',
              type: 'string',
              initialData: { type: 'static' },
              showInput: true,
              _codePath: ['groupType'],
              _idpath: ['0977908'],
            },
            {
              attrId: '594383',
              code: 'instOrder',
              name: '审批编号',
              type: 'string',
              initialData: { type: 'static' },
              value: { type: ['context', '$urlParam.instNbr$'], code: '' },
              showInput: true,
              _codePath: ['instOrder'],
              _idpath: ['594383'],
            },
            {
              attrId: '9825589',
              code: 'instId',
              name: '审批单id',
              type: 'string',
              initialData: { type: 'static' },
              showInput: true,
              _codePath: ['instId'],
              _idpath: ['9825589'],
            },
            {
              attrId: '570193',
              code: 'effectDate',
              name: '审批单有效期',
              type: 'string',
              initialData: { type: 'static' },
              showInput: true,
              _codePath: ['effectDate'],
              _idpath: ['570193'],
            },
            {
              attrId: '860434',
              code: 'dealPageUrl',
              name: '属性',
              type: 'string',
              initialData: { type: 'static' },
              showInput: true,
              _codePath: ['dealPageUrl'],
              _idpath: ['860434'],
            },
            {
              attrId: '77864',
              code: 'createRejectBtnDisable',
              name: '属性',
              type: 'boolean',
              initialData: { type: 'static', value: 'false' },
              showInput: true,
              _codePath: ['createRejectBtnDisable'],
              _idpath: ['77864'],
            },
            {
              attrId: '284931',
              code: 'catalogCode',
              name: '属性',
              type: 'string',
              initialData: { type: 'static' },
              showInput: true,
              _codePath: ['catalogCode'],
              _idpath: ['284931'],
            },
            {
              attrId: '975583',
              code: 'isRollback',
              name: '属性',
              type: 'string',
              initialData: { type: 'static' },
              showInput: true,
              _codePath: ['isRollback'],
              _idpath: ['975583'],
            },
            {
              attrId: '795999',
              code: 'isSendHead',
              name: '送总部标识',
              type: 'string',
              initialData: { type: 'static' },
              showInput: true,
              _codePath: ['isSendHead'],
              _idpath: ['795999'],
            },
            {
              attrId: '884583',
              code: 'busiObjNbr',
              name: '单号',
              type: 'string',
              initialData: { type: 'static' },
              showInput: true,
              _codePath: ['busiObjNbr'],
              _idpath: ['884583'],
            },
          ],
          operateType: 1,
          onlySetPatch: true,
          otherObjectArrayOptions: {},
        },
        line_number: 81,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatasetDataSource16.params = [] || [];
    CMDGenerator(eventDatasetDataSource16, {}, 'setDataSource', {
      id: 'setDataSource',
      name: 'setDataSource',
      type: 'setDataSource',
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
        className={'View_9704152_1'}
        backgroundType={{ type: 'cleanColor', color: undefined }}
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
          padding: '0px 0px 25px 0px',
          flexDirection: 'column',
          overflowY: 'auto',
          width: 'auto',
          margin: '0px 0px 0px 0px',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_9704152_1')}
        {...injectData}
      >
        <View
          className="View_View_183103_093211"
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_183103_093211',
            uid: 'View_183103_093211',
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
          ref={(r: any) => refs.setComponentRef(r, 'View_183103_093211')}
          {...injectData}
        >
          <View
            className="View_View_2218655_35852399"
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_2218655_35852399',
              uid: 'View_2218655_35852399',
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
            ref={(r: any) => refs.setComponentRef(r, 'View_2218655_35852399')}
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
                id: 'Text_331457_4558343',
                uid: 'Text_331457_4558343',
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
              ref={(r: any) => refs.setComponentRef(r, 'Text_331457_4558343')}
              {...injectData}
            />
            <Text
              name={'文本'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              formItemIndex={5}
              $$componentItem={{
                id: 'Text_331457_850218_85208',
                uid: 'Text_331457_850218_85208',
                type: 'Text',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ fontSize: 18, lineHeight: '24px', color: '#3289f9' }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Text_331457_850218_85208')
              }
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
              id: 'Text_728821_969279',
              uid: 'Text_728821_969279',
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
            ref={(r: any) => refs.setComponentRef(r, 'Text_728821_969279')}
            {...injectData}
          />
        </View>
        <Card
          name={'卡片'}
          cardIconType={'middle'}
          title={'流程向导'}
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
            id: 'Card_931416',
            uid: 'Card_931416',
            type: 'Card',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            padding: '16px 20px 20px 20px',
            overflowY: 'visible',
            margin: '0px 0px 0px 0px',
            'margin-bottom': '2.5px',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'Card_931416')}
          {...injectData}
        >
          <RemoteComponent
            name={'远程组件'}
            fileCode={'flow_view'}
            $$componentItem={{
              id: 'RemoteComponent_8565859',
              uid: 'RemoteComponent_8565859',
              type: 'RemoteComponent',
              ...componentItem,
            }}
            appId={undefined}
            lcdpParentRenderId={undefined}
            onMessage={(msg: any) => {}}
            ref={(r: any) => refs.setComponentRef(r, 'RemoteComponent_8565859')}
            {...injectData}
          />
        </Card>
        <View
          className="View_View_23774"
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_23774',
            uid: 'View_23774',
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
            width: '64px',
            position: 'fixed',
            top: '50%',
            right: '80px',
            'z-index': '1000',
            'background-color': 'transparent',
            cursor: 'pointer',
          }}
          onClick={(e: any) => {
            const eventDataifelse442: any = [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '03267',
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$data.sameApproveOrdCount.count$',
                      operate: '>=',
                      manualValue: '2',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166849951106726080,
                elseIfs: [
                  {
                    dataName: 'elseIf',
                    dataId: 166849964108931900,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 166849964749771360,
                        children: [],
                        todoOptions: ['msgType', 'value'],
                        options: {
                          compId: 'showMessage',
                          compName: 'system',
                          id: '513321',
                          pageJsonId: '9704152',
                          type: 'warn',
                          value: '没有可以合并处理的审批单',
                        },
                        actionObjId: 'showMessage',
                        actionObjName: 'system',
                        value: 'showMessage',
                        line_number: 3,
                      },
                    ],
                    condition: [],
                    callback: [
                      {
                        type: 'showMessage',
                        dataId: 166849964749771360,
                        options: {
                          compId: 'showMessage',
                          compName: 'system',
                          id: '513321',
                          pageJsonId: '9704152',
                          type: 'warn',
                          value: '没有可以合并处理的审批单',
                        },
                        line_number: 3,
                      },
                    ],
                  },
                ],
                line_number: 1,
                callback1: [
                  {
                    type: 'history',
                    dataId: 166849962187229400,
                    options: {
                      compId: 'history',
                      compName: 'system',
                      id: '962487',
                      pageJsonId: '9704152',
                      type: 'push',
                      pathname: '/chuangjianhedanshenpi2133',
                      selectedType: 'page',
                      paramsObj: {
                        workItemId: '$urlParam.workItemId$',
                        approveOrdNbr: '$urlParam.instNbr$',
                      },
                      paramsObjKeyValueMap: {
                        workItemId: '$urlParam.workItemId$',
                        approveOrdNbr: '$urlParam.instNbr$',
                      },
                    },
                    line_number: 2,
                  },
                ],
              },
            ];
            eventDataifelse442.params =
              [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
            CMDGenerator(eventDataifelse442, { e }, 'ifelse', {
              id: 'ifelse',
              name: 'ifelse',
              type: 'ifelse',
              platform: 'pc',
            });
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_23774')}
          {...injectData}
        >
          <Icon
            name={'图标'}
            rotate={0}
            icon={{
              type: 'medicine-box',
              theme: 'filled',
              fontAddress: '',
              isIconFont: false,
              iconFileInfo: {},
            }}
            $$componentItem={{
              id: 'Icon_981767',
              uid: 'Icon_981767',
              type: 'Icon',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              fontSize: 36,
              color: '#F59A23',
              margin: '0auto',
              display: 'block',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Icon_981767')}
            {...injectData}
          />
          <Text
            name={'可合单数量'}
            content={0}
            textType={'span'}
            version={'1.0'}
            showHtml={false}
            fieldName={'resultData'}
            $$componentItem={{
              id: 'Text_144135',
              uid: 'Text_144135',
              type: 'Text',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              fontSize: '14px',
              lineHeight: '20px',
              color: '#fff',
              position: 'absolute',
              top: '0',
              'background-color': 'rgb(255,93,87)',
              'border-radius': '10px',
              height: '20px',
              'line-height': '20px',
              'padding-top': '0',
              'padding-right': '4px',
              'padding-bottom': '0',
              'padding-left': '4px',
              left: '36px',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Text_144135')}
            {...injectData}
          />
          <Text
            name={'文本'}
            content={'合并同类\n审批单'}
            textType={'span'}
            version={'1.0'}
            showHtml={false}
            $$componentItem={{
              id: 'Text_633474',
              uid: 'Text_633474',
              type: 'Text',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              fontSize: '14px',
              lineHeight: '24px',
              color: '#1c242e',
              textAlign: 'center',
              display: 'block',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Text_633474')}
            {...injectData}
          />
        </View>
        <Collapse
          name={'折叠面板'}
          defaultActiveKey={functorsMap?.IF(false, ['1'], ['2'])}
          expandIconPosition={'right'}
          collapseType={''}
          size={'default'}
          bordered={true}
          hasIcon={true}
          cardIconType={'middle'}
          accordion={false}
          className={'custom-class'}
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
            id: 'Collapse_55754',
            uid: 'Collapse_55754',
            type: 'Collapse',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            width: '100%',
            margin: '0px 0px 0px 0px',
            padding: '20px 20px 20px 20px',
            'margin-bottom': '2.5px',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'Collapse_55754')}
          {...injectData}
        >
          <CollapsePanel
            name={'折叠子面板'}
            header={'起草人信息'}
            key={'1'}
            cardIconType={'middle'}
            $$componentItem={{
              id: 'CollapsePanel_62692348',
              uid: 'CollapsePanel_62692348',
              type: 'CollapsePanel',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ minHeight: 40 }}
            ref={(r: any) => refs.setComponentRef(r, 'CollapsePanel_62692348')}
            {...injectData}
            uid="CollapsePanel_62692348"
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
                id: 'Description_61586_563957',
                uid: 'Description_61586_563957',
                type: 'Description',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Description_61586_563957')
              }
              {...injectData}
            />
          </CollapsePanel>
        </Collapse>
        <Card
          name={'审批内容卡片'}
          cardIconType={'middle'}
          extendNum={3}
          title={'审批信息'}
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
            id: 'Card_5478263',
            uid: 'Card_5478263',
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
          }}
          ref={(r: any) => refs.setComponentRef(r, 'Card_5478263')}
          {...injectData}
        >
          <Form
            name={'表单'}
            colSpan={24}
            labelCol={'4'}
            wrapperCol={20}
            colon={false}
            layout={'horizontal'}
            labelAlign={'right'}
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_541805'}
            $$componentItem={{
              id: 'Form_541805_391396',
              uid: 'Form_541805_391396',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px', margin: '8px 0px 8px 0px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_541805_391396')}
            {...injectData}
          >
            <Input
              name={'工单主题'}
              size={'default'}
              selfSpan={24}
              labelCol={'2'}
              wrapperCol={'22'}
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
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_32550878')}
              {...injectData}
            />
            <QuillEditor
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              selfSpan={24}
              labelCol={'2'}
              wrapperCol={22}
              height={250}
              imageType={'file'}
              fieldName={'applyContent'}
              required={false}
              formItemIndex={1}
              name={'审批内容'}
              heightType={'auto'}
              minHeight={200}
              maxHeight={705}
              $$componentItem={{
                id: 'QuillEditor_637236_622641',
                uid: 'QuillEditor_637236_622641',
                type: 'QuillEditor',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'QuillEditor_637236_622641')
              }
              {...injectData}
            />
          </Form>
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
            margin: '3px 0px 16px 0px',
            'margin-bottom': '2.5px',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'Card_5914895')}
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
                type: 'staticCol',
                id: '983462',
                title: '集团客户信用等级',
                dataIndex: 'groupCreditLevel',
                key: '983462',
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
                id: '388372',
                title: '集团客户经理信用等级',
                dataIndex: 'managerCreditRisk',
                key: '388372',
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
                id: '339011',
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
            style={{ margin: '0px 0px 0px 0px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Table_994258')}
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
                id: '839384',
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
                label: '看管人工号',
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
                label: '看管人电话',
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
                id: '595332006',
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
                id: '191777',
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
                id: '839384',
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
                label: '看管人工号',
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
                label: '看管人电话',
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
                id: '595332006',
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
                id: '191777',
              },
            ]}
            labelSize={'120px'}
            $$componentItem={{
              id: 'Description_424409',
              uid: 'Description_424409',
              type: 'Description',
              ...componentItem,
            }}
            disabled={false}
            visible={false}
            readOnly={false}
            style={{ margin: '10px 0px 0px 0px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Description_424409')}
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
            margin: '0px 0px 0px 0px',
            'margin-bottom': '2.5px',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'Card_6571733')}
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
            formCode={'Form_245058'}
            $$componentItem={{
              id: 'Form_245058_252079',
              uid: 'Form_245058_252079',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px', margin: '10px 0px 0px 0px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_245058_252079')}
            {...injectData}
          >
            <Input
              name={'外部审批单号'}
              size={'default'}
              selfSpan={16}
              labelCol={'4'}
              wrapperCol={20}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={0}
              fieldName={'extOrderNbr'}
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
                id: 'Input_32550878_867458',
                uid: 'Input_32550878_867458',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_32550878_867458')}
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
            ref={(r: any) => refs.setComponentRef(r, 'GridView_295504')}
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
                            sceneOrigin: urlParam?.sceneOrigin,
                            workItemId: urlParam?.workItemId,
                            SourceFrom: item?.sourceFrom,
                          }}
                          pageSrc={'/' + item?.url}
                          style={{
                            height: 'auto',
                            width: '100%',
                            margin: '0px 0px 0px 0px',
                            overflow: 'visible',
                          }}
                          ref={(r: any) =>
                            refs.setComponentRef(r, 'Pageview_8687683')
                          }
                          {...injectData}
                          parentEngineId={parentEngineId}
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
            ref={(r: any) => refs.setComponentRef(r, 'Form_476484')}
            {...injectData}
          >
            <Input
              name={'最高审批等级'}
              size={'default'}
              selfSpan={8}
              labelCol={'8'}
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
              ref={(r: any) => refs.setComponentRef(r, 'Input_014189')}
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
                id: 'Text_2770074',
                uid: 'Text_2770074',
                type: 'Text',
                ...componentItem,
              }}
              disabled={
                `${functorsMap?.IF(
                  data?.pageParam?.isSendHead == '1',
                  1,
                  2,
                )}` === '3'
              }
              visible={
                `${functorsMap?.IF(
                  data?.pageParam?.isSendHead == '1',
                  1,
                  2,
                )}` !== '2'
              }
              readOnly={
                `${functorsMap?.IF(
                  data?.pageParam?.isSendHead == '1',
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
              ref={(r: any) => refs.setComponentRef(r, 'Text_2770074')}
              {...injectData}
            />
            <View
              className="View_View_186904"
              name={'布局容器'}
              labelCol={8}
              wrapperCol={16}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_186904',
                uid: 'View_186904',
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
                display: 'block',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_186904')}
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
              const eventDatadownloadByFileId37: any = [
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
              eventDatadownloadByFileId37.params =
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
                eventDatadownloadByFileId37,
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
              const eventDatacustomActionCode495: any = [
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
              eventDatacustomActionCode495.params =
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
                eventDatacustomActionCode495,
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
              const eventDatapreviewFile21: any = [
                {
                  type: 'previewFile',
                  dataId: 169500762838402140,
                  options: {
                    compId: 'previewFile',
                    compName: 'page',
                    id: '317488',
                    pageJsonId: '9704152',
                    fileId: '$rowId$',
                  },
                  line_number: 1,
                },
              ];
              eventDatapreviewFile21.params =
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
                eventDatapreviewFile21,
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
            ref={(r: any) => refs.setComponentRef(r, 'Table_035381')}
            {...injectData}
          />
        </Card>
        <BusiComp3851874
          pageId={pageId}
          busiCompId={'908252960735510528'}
          name={'处理信息'}
          busiCompStates={{
            orderNbr: data?.pageParam?.instOrder,
            instId: data?.pageParam?.instId,
            custName: data?.groupObj?.groupName,
            effectDate: data?.pageParam?.effectDate,
            createRejectBtnDisable: data?.pageParam?.createRejectBtnDisable,
            sceneCode: data?.pageParam?.catalogCode,
          }}
          style={{ margin: '0px 0px 0px 0px' }}
          ref={(r: any) => refs.setComponentRef(r, 'BOFramer_848795')}
          {...injectData}
        />
        <Pageview
          name={'页面容器'}
          pageViewCompState={{ gaapOrderNbr: urlParam?.instNbr }}
          style={{
            height: 'auto',
            width: '100%',
            'margin-top': '2.5px',
            'margin-bottom': '2.5px',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'Pageview_232504')}
          {...injectData}
          parentEngineId={parentEngineId}
        />
        <BusiComp0496635
          pageId={pageId}
          name={'处理过程组件'}
          busiCompId={'878166584210399232'}
          busiCompStates={{
            workId: urlParam?.workId,
            isBig: data?.pageParam?.isSendHead,
            busiObjNbr: data?.pageParam?.busiObjNbr,
          }}
          basicStatus={2}
          style={{ margin: '0px 0px 0px 0px' }}
          ref={(r: any) => refs.setComponentRef(r, 'BOFramer_438929')}
          {...injectData}
        />
        <View
          className="View_View_106266"
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_106266',
            uid: 'View_106266',
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
          ref={(r: any) => refs.setComponentRef(r, 'View_106266')}
          {...injectData}
        >
          <Pageview
            name={'页面容器'}
            pageViewCompState={{
              workId: urlParam?.workId,
              senceCode: urlParam?.scene,
              workItemId: urlParam?.workItemId,
              busiObjNb: urlParam?.instNbr,
              isRollback: urlParam?.isRollback,
              ordersSubmit: data?.ordersSubmit,
              isScreenshot: urlParam?.isScreenshot,
              fileInfoObj: data?.fileInfoObj,
              origin: urlParam?.origin,
              tacheCode: urlParam?.tacheCode,
              originTab: urlParam?.originTab,
            }}
            pageSrc={data?.pageParam?.dealPageUrl}
            style={{ height: 'auto', width: '100%', 'margin-top': '2.5px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Pageview_117636')}
            {...injectData}
            parentEngineId={parentEngineId}
          />
        </View>
        <View
          className="View_View_938709"
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
            width: '100%',
            textAlign: 'center',
            margin: '20px 0px 0px 0px',
            position: 'fixed',
            bottom: '0',
            left: '0',
            'background-color': '#f0f0f0',
            'z-index': '3',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_938709')}
          {...injectData}
        >
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
              // console 167403415877125300
              console.log('提交走这里。。。。。');
              const eventDatagetFormValue7: any = [
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
                  line_number: 2,
                  callback1: [
                    {
                      type: 'customActionCode',
                      dataId: 166253894029639800,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '280708',
                        pageJsonId: '9704152',
                        code: 'function main(data,state,success,fail){var handleStaff={};handleStaff.handleStaffCode=formValues.nextStaff;handleStaff.handleStaffName=formValues.nextStaffName;data.ordersSubmit.svcCont.data.content.flowInfo.tacheNode=formValues.nextTache;data.ordersSubmit.svcCont.data.content.flowInfo.handleStaffList=[];data.ordersSubmit.svcCont.data.content.flowInfo.handleStaffList.push(handleStaff)};',
                      },
                      line_number: 3,
                      callback1: [],
                      callback2: [],
                    },
                    {
                      type: 'console',
                      dataId: 166245661811583650,
                      options: {
                        compId: 'debug',
                        compName: 'system',
                        id: '316137',
                        pageJsonId: '9704152',
                        value: [
                          '$JSON.stringify(refData.current.ordersSubmit)$',
                        ],
                      },
                      line_number: 4,
                    },
                    {
                      type: 'apiRequest',
                      dataId: 166245660716236960,
                      options: {
                        compId: 'apiRequest',
                        compName: 'system',
                        id: '420199',
                        pageJsonId: '9704152',
                        sync: false,
                        method: 'post',
                        url: '/app/orchestration/run',
                        serviceVersionId: '882514373217726464',
                        serviceCode: 'flow_moka_start',
                        versionCode: '1.0',
                        _serviceType: 'orchestration',
                        _source: 'std',
                        _serviceId: '882514373217726464',
                        _serviceTitle: '启动摩卡流程: flow_moka_start',
                        params: 'object',
                        apiRequestSetParams: [
                          {
                            code: 'flowCode',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '流程编码',
                            defaultValue: '',
                            key: '0',
                            _id: 'flowCode',
                            compType: 'Input',
                            name: 'flowCode',
                            parents: [],
                            id: 'flowCode',
                            dataKey: '8080904_flowCode',
                            value: {
                              type: ['customize'],
                              code: 'CHANNEL_CITY_FLOW',
                            },
                            rootAttrType: 'object',
                          },
                          {
                            code: 'isSkip',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '是否跳过',
                            defaultValue: '',
                            key: '1',
                            _id: 'isSkip',
                            compType: 'Input',
                            name: 'isSkip',
                            parents: [],
                            id: 'isSkip',
                            dataKey: '8080904_isSkip',
                            value: { type: ['customize'], code: 'Y' },
                            rootAttrType: 'object',
                          },
                          {
                            code: 'nextStaff',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '下一个处理人',
                            defaultValue: '',
                            key: '2',
                            _id: 'nextStaff',
                            compType: 'Input',
                            name: 'nextStaff',
                            parents: [],
                            id: 'nextStaff',
                            dataKey: '8080904_nextStaff',
                            value: {
                              type: ['context', '$formValues$'],
                              code: 'nextStaff',
                            },
                            rootAttrType: 'object',
                          },
                          {
                            code: 'nextTache',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '下一个环节',
                            defaultValue: '',
                            key: '3',
                            _id: 'nextTache',
                            compType: 'Input',
                            name: 'nextTache',
                            parents: [],
                            id: 'nextTache',
                            dataKey: '8080904_nextTache',
                            value: {
                              type: ['context', '$formValues$'],
                              code: 'nextTache',
                            },
                            rootAttrType: 'object',
                          },
                          {
                            code: 'orderType',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '订单类型',
                            defaultValue: '',
                            key: '4',
                            _id: 'orderType',
                            compType: 'Input',
                            name: 'orderType',
                            parents: [],
                            id: 'orderType',
                            dataKey: '8080904_orderType',
                            value: { type: ['customize'], code: '1100' },
                            rootAttrType: 'object',
                          },
                          {
                            code: 'tacheAttachments',
                            attrType: 'objectArray',
                            children: [
                              {
                                key: '5-0',
                                parentKey: '5',
                                code: 'fileId',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                exampleValue: '115400',
                                defaultValue: '',
                                _id: 'tacheAttachments.fileId',
                                compType: 'Input',
                                name: 'fileId',
                                parents: ['tacheAttachments'],
                                parentType: 'objectArray',
                              },
                              {
                                key: '5-1',
                                parentKey: '5',
                                code: 'fileName',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                exampleValue: 'test.png',
                                defaultValue: '',
                                _id: 'tacheAttachments.fileName',
                                compType: 'Input',
                                name: 'fileName',
                                parents: ['tacheAttachments'],
                                parentType: 'objectArray',
                              },
                              {
                                key: '5-2',
                                parentKey: '5',
                                code: 'url',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                exampleValue:
                                  'lcdp-app-platform-ystest-integration-pg/2e06f788-9ef1-4ea8-a62e-7ce2f1eeb4ac.png',
                                defaultValue: '',
                                _id: 'tacheAttachments.url',
                                compType: 'Input',
                                name: 'url',
                                parents: ['tacheAttachments'],
                                parentType: 'objectArray',
                              },
                            ],
                            key: '5',
                            _id: 'tacheAttachments',
                            compType: 'Input',
                            name: 'tacheAttachments',
                            parents: [],
                            id: 'tacheAttachments',
                            dataKey: '8080904_tacheAttachments',
                            value: {
                              type: ['context', '$formValues$'],
                              code: 'tacheAttachments',
                            },
                            rootAttrType: 'object',
                          },
                          {
                            code: 'tacheRemark',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '',
                            defaultValue: '',
                            key: '6',
                            _id: 'tacheRemark',
                            compType: 'Input',
                            name: 'tacheRemark',
                            parents: [],
                            id: 'tacheRemark',
                            dataKey: '8080904_tacheRemark',
                            value: {
                              type: ['context', '$formValues$'],
                              code: 'tacheRemark',
                            },
                            rootAttrType: 'object',
                          },
                          {
                            code: 'workOrderId',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '',
                            defaultValue: '',
                            key: '1-7',
                            parentKey: '1',
                            parentType: 'object',
                            _id: 'workOrderId',
                            compType: 'Input',
                            name: 'workOrderId',
                            parents: [],
                            id: 'workOrderId',
                            dataKey: '8080904_workOrderId',
                            value: {
                              type: ['context', '$formValues$'],
                              code: 'workOrderId',
                            },
                            _deletable: true,
                          },
                          {
                            key: '8',
                            code: 'orderMessage',
                            attrType: 'object',
                            name: '新增节点',
                            mustFlag: 'F',
                            exampleValue: '',
                            defaultValue: '',
                            children: [],
                            preCodes: ['param', 'order', 'orderMesg'],
                            _id: 'orderMessage',
                            compType: 'Input',
                            parents: [],
                            id: 'orderMessage',
                            dataKey: '8080904_orderMessage',
                            value: {
                              type: ['customize'],
                              code: '$refData.current.ordersSubmit$',
                            },
                            rootAttrType: 'object',
                          },
                          {
                            key: '7',
                            code: 'busiObjNbr',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '',
                            defaultValue: '',
                            rootAttrType: 'object',
                            _id: 'busiObjNbr',
                            compType: 'Input',
                            name: 'busiObjNbr',
                            parents: [],
                          },
                        ],
                        _sourceName: '启动摩卡流程',
                      },
                      line_number: 5,
                      callback1: [
                        {
                          type: 'showMessage',
                          dataId: 166245660716218400,
                          options: {
                            compId: 'showMessage',
                            compName: 'system',
                            id: '492816',
                            pageJsonId: '9704152',
                            type: 'success',
                            value: '流程启动成功',
                          },
                          line_number: 6,
                        },
                        {
                          type: 'customActionCode',
                          dataId: 166246320347796640,
                          shielding: true,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '976419',
                            pageJsonId: '9704152',
                            code: 'function main(data,state,success,fail){console.log("\\u7F13\\u5B58\\u4E2D\\u7684\\u6570\\u636E\\u3002\\u3002\\u3002\\u3002\\u3002\\u3002\\u3002\\u3002\\u3002"+data.draft_message.coding);window.localStorage.removeItem(data.draft_message.coding)};',
                            actionTitle: '清除缓存中的表单对象',
                          },
                          line_number: 7,
                          callback1: [],
                          callback2: [],
                        },
                        {
                          type: 'history',
                          dataId: 166245660716295140,
                          options: {
                            compId: 'history',
                            compName: 'system',
                            id: '293956',
                            pageJsonId: '9704152',
                            type: 'push',
                            pathname: '/auditStartcopy',
                            selectedType: 'page',
                          },
                          line_number: 8,
                        },
                      ],
                      callback2: [],
                    },
                  ],
                },
              ];
              eventDatagetFormValue7.params =
                [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
              CMDGenerator(eventDatagetFormValue7, { e }, 'getFormValue', {
                id: 'getFormValue',
                name: 'getFormValue',
                type: 'getFormValue',
                platform: 'pc',
              });
            }}
            ref={(r: any) =>
              refs.setComponentRef(r, 'Button_2061707_637045_014961')
            }
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
            visible={true}
            readOnly={false}
            style={{ width: 'fit-content', margin: '0px 0px 0px 5px' }}
            onClick={(e: any) => {
              const eventDatacustomActionCode496: any = [
                {
                  type: 'customActionCode',
                  dataId: 170305534968271940,
                  options: {
                    compId: 'customActionCode',
                    compName: 'page',
                    id: '256963',
                    pageJsonId: '030387',
                    code: 'function main(data,state,success,fail){if(window.opener){console.log("\\u662F\\u4ECEwindow.open\\u6253\\u5F00\\u7684");window.close()}else{console.log("\\u4E0D\\u662F\\u4ECEwindow.open\\u6253\\u5F00\\u7684\\uFF0C\\u4E0D\\u505A\\u5904\\u7406")}};',
                    actionTitle: '如果当前页面是window.open打开',
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatacustomActionCode496.params =
                [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
              CMDGenerator(
                eventDatacustomActionCode496,
                { e },
                'customActionCode',
                {
                  id: 'customActionCode',
                  name: 'customActionCode',
                  type: 'customActionCode',
                  platform: 'pc',
                },
              );
              const eventDatahistoryGoBack1: any = [
                {
                  type: 'historyGoBack',
                  dataId: 166209870313587680,
                  options: {
                    compId: 'historyGoBack',
                    compName: 'system',
                    id: '817483',
                    pageJsonId: '9704152',
                  },
                  line_number: 2,
                },
              ];
              eventDatahistoryGoBack1.params =
                [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
              CMDGenerator(eventDatahistoryGoBack1, { e }, 'historyGoBack', {
                id: 'historyGoBack',
                name: 'historyGoBack',
                type: 'historyGoBack',
                platform: 'pc',
              });
              const eventDatacustomActionCode497: any = [
                {
                  type: 'customActionCode',
                  dataId: 168509324547984900,
                  options: {
                    compId: 'customActionCode',
                    compName: 'page',
                    id: '5123887',
                    pageJsonId: '9704152',
                    actionTitle: '',
                    code: 'function main(data,state,success,fail){console.log("\\u7F13\\u5B58\\u4E2D\\u7684\\u6570\\u636E\\u3002\\u3002\\u3002\\u3002\\u3002\\u3002\\u3002\\u3002\\u3002"+data.draft_message.coding);window.localStorage.removeItem(data.draft_message.coding)};',
                  },
                  line_number: 3,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatacustomActionCode497.params =
                [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
              CMDGenerator(
                eventDatacustomActionCode497,
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
            ref={(r: any) => refs.setComponentRef(r, 'Button_8796906_85186')}
            {...injectData}
          />
          <Button
            name={'阅办'}
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
              id: 'Button_2061707_637045_014961_479135',
              uid: 'Button_2061707_637045_014961_479135',
              type: 'Button',
              ...componentItem,
            }}
            disabled={false}
            visible={false}
            readOnly={false}
            style={{ width: 'fit-content', margin: '0px 0px 0px 5px' }}
            onClick={(e: any) => {
              const eventDatasetLoading156: any = [
                {
                  type: 'setLoading',
                  dataId: 167048313833177020,
                  options: {
                    compId: 'Button_2061707_637045_014961_479135',
                    compLib: 'comm',
                    pageJsonId: '9704152',
                    compName: 'Button',
                    id: '159884',
                    loading: true,
                  },
                  line_number: 1,
                },
              ];
              eventDatasetLoading156.params =
                [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
              CMDGenerator(eventDatasetLoading156, { e }, 'setLoading', {
                id: 'setLoading',
                name: 'setLoading',
                type: 'setLoading',
                platform: 'pc',
              });
              const eventDataapiRequest717: any = [
                {
                  type: 'apiRequest',
                  dataId: 167048242709977000,
                  options: {
                    compId: 'apiRequest',
                    compName: 'system',
                    id: '2127693',
                    pageJsonId: 30,
                    sync: false,
                    method: 'post',
                    url: '/app/rhin/gateway/callRhinEngine',
                    serviceVersionId: '882904961025191936',
                    versionCode: '1.0',
                    _serviceType: 'orchestration',
                    _source: 'rhin',
                    _serviceId: '898464857954422784',
                    _serviceTitle: '待阅处理-tzp: dealReadTask',
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
                        dataKey: '199337_header',
                      },
                      {
                        code: 'path',
                        name: '请求路径参数',
                        attrType: 'object',
                        _id: 'path',
                        compType: 'Input',
                        parents: [],
                        id: 'path',
                        dataKey: '199337_path',
                      },
                      {
                        code: 'query',
                        name: 'URL 参数',
                        attrType: 'object',
                        _id: 'query',
                        compType: 'Input',
                        parents: [],
                        id: 'query',
                        dataKey: '199337_query',
                      },
                      {
                        code: 'body',
                        name: '请求体',
                        attrType: 'object',
                        children: [
                          {
                            code: 'workItemId',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            _id: 'body.workItemId',
                            compType: 'Input',
                            name: 'workItemId',
                            parents: ['body'],
                            id: 'body.workItemId',
                            dataKey: '199337_body.workItemId',
                            value: {
                              type: ['context', '$urlParam.workItemId$'],
                              code: '',
                            },
                          },
                          {
                            code: 'busiObjNbr',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            _id: 'body.busiObjNbr',
                            compType: 'Input',
                            name: 'busiObjNbr',
                            parents: ['body'],
                            id: 'body.busiObjNbr',
                            dataKey: '199337_body.busiObjNbr',
                            value: {
                              type: ['context', '$urlParam.busiObjNbr$'],
                              code: '',
                            },
                          },
                          {
                            code: 'workId',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            _id: 'body.workId',
                            compType: 'Input',
                            name: 'workId',
                            parents: ['body'],
                            id: 'body.workId',
                            dataKey: '199337_body.workId',
                            value: {
                              type: ['context', '$urlParam.workId$'],
                              code: '',
                            },
                          },
                          {
                            code: 'parentWorkItemId',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            _id: 'body.parentWorkItemId',
                            compType: 'Input',
                            name: 'parentWorkItemId',
                            parents: ['body'],
                            id: 'body.parentWorkItemId',
                            dataKey: '199337_body.parentWorkItemId',
                          },
                          {
                            code: 'parentWorkId',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            _id: 'body.parentWorkId',
                            compType: 'Input',
                            name: 'parentWorkId',
                            parents: ['body'],
                            id: 'body.parentWorkId',
                            dataKey: '199337_body.parentWorkId',
                          },
                        ],
                        _id: 'body',
                        compType: 'Input',
                        parents: [],
                        id: 'body',
                        dataKey: '199337_body',
                      },
                    ],
                    actionTitle: '',
                    _capabilityCode: 'dealReadTask',
                    _apiCode: 'dealReadTask',
                  },
                  line_number: 2,
                  callback1: [
                    {
                      type: 'ifelse',
                      condition: [
                        {
                          condId: '323013',
                          options: {
                            useManual: true,
                            useObject: false,
                            context: '$reply_2127693?.resultCode$',
                            operate: '==',
                            manualValue: '0',
                          },
                          conditionType: 'checkContextValue',
                          objType: 'system',
                          objId: 'sys',
                        },
                      ],
                      dataId: 167048242709935070,
                      elseIfs: [],
                      line_number: 3,
                      callback1: [
                        {
                          type: 'showMessage',
                          dataId: 167048242709957100,
                          options: {
                            compId: 'showMessage',
                            compName: 'system',
                            id: '444582',
                            pageJsonId: 30,
                            type: 'success',
                            value: '阅办处理成功',
                          },
                          line_number: 4,
                        },
                        {
                          type: 'setLoading',
                          dataId: 167048314681983000,
                          options: {
                            compId: 'Button_2061707_637045_014961_479135',
                            compLib: 'comm',
                            pageJsonId: '9704152',
                            compName: 'Button',
                            id: '7093072',
                            loading: false,
                          },
                          line_number: 5,
                        },
                        {
                          type: 'history',
                          dataId: 167048321765971800,
                          options: {
                            compId: 'history',
                            compName: 'system',
                            id: '070581',
                            pageJsonId: 30,
                            type: 'push',
                            pathname: '/approveOrderTodo',
                            selectedType: 'page',
                            pageId: '878815340415455232',
                            modalPath: '/approveOrderTodo',
                          },
                          line_number: 6,
                        },
                      ],
                    },
                  ],
                  callback2: [
                    {
                      type: 'showMessage',
                      dataId: 167048242709920450,
                      options: {
                        compId: 'showMessage',
                        compName: 'system',
                        id: '8380426',
                        pageJsonId: 30,
                        type: 'warn',
                        value: '阅办处理失败',
                      },
                      line_number: 7,
                    },
                    {
                      type: 'setLoading',
                      dataId: 167048315325288100,
                      options: {
                        compId: 'Button_2061707_637045_014961_479135',
                        compLib: 'comm',
                        pageJsonId: '9704152',
                        compName: 'Button',
                        id: '6809682',
                        loading: false,
                      },
                      line_number: 8,
                    },
                  ],
                },
              ];
              eventDataapiRequest717.params =
                [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
              CMDGenerator(eventDataapiRequest717, { e }, 'apiRequest', {
                id: 'apiRequest',
                name: 'apiRequest',
                type: 'apiRequest',
                platform: 'pc',
              });
            }}
            ref={(r: any) =>
              refs.setComponentRef(r, 'Button_2061707_637045_014961_479135')
            }
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(AuditDealWithPc$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { ordersSubmit: '' },
});
