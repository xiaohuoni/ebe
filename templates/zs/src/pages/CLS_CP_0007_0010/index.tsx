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
  Table,
  Select,
  StdUpload,
} from '@/components/factory';

import BusiComp0521965 from '@/components/BusiComp0521965';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '899202134045597696';
const ClsCp_0007_0010$$Page: React.FC<PageProps> = ({
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
  const calculSumBandwidth = (options_3240296: any) => {
    const eventDatagetValue46: any = [
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
    eventDatagetValue46.params =
      [
        {
          title: '事件入参',
          name: 'options_3240296',
          value: '$options_3240296$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue46, { options_3240296 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };
  const jointAddr = (options_289242: any) => {
    const eventDatacustomActionCode75: any = [
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
    eventDatacustomActionCode75.params =
      [
        {
          title: '事件入参',
          name: 'options_289242',
          value: '$options_289242$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode75,
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
    const eventDatacustomActionCode76: any = [
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
    eventDatacustomActionCode76.params =
      [
        {
          title: '事件入参',
          name: 'options_104394',
          value: '$options_104394$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode76,
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
  const submitToFather = (options_528314: any) => {
    const eventDatacustomActionCode77: any = [
      {
        type: 'customActionCode',
        dataId: 168837760794975700,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '4466333',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){var list=options_528314.list;var instList=[];list.forEach(function(item){var singleObj={};var instAttrList=[];for(var key in item){if(key=="rowId"){continue}instAttrList.push({"attrValue":item[key],"attrCode":key})}singleObj["instAttrList"]=instAttrList;singleObj["instCode"]=item.rowId;instList.push(singleObj)});data.sceneSubmit.instList=instList;console.log("instList = ",instList);success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'callParentCustomFunc',
            dataId: 168837818024414560,
            options: {
              compId: 'callParentCustomFunc',
              compName: 'system',
              id: '346904',
              pageJsonId: '537892',
              pathname: '/auditOrderPrepare',
              pageId: '884045146848604160',
              customFuncName: 'getFactor',
              customFuncParams: '$data.sceneSubmit$',
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
    eventDatacustomActionCode77.params =
      [
        {
          title: '事件入参',
          name: 'options_528314',
          value: '$options_528314$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode77,
      { options_528314 },
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
    submitToFather,
  }));

  useEffect(() => {
    const eventDataapiRequest230: any = [
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
        line_number: 1,
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
            line_number: 2,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest230.params = [] || [];
    CMDGenerator(eventDataapiRequest230, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest231: any = [
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
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
            },
            line_number: 4,
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
    ];
    eventDataapiRequest231.params = [] || [];
    CMDGenerator(eventDataapiRequest231, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse130: any = [
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
              code: 'function main(data,state,success,fail){var item=state.itemList;data.sceneSubmit=item;var factorForm=[];var instList=item.instList;if(instList!=undefined&&instList.length>0){for(var i=0;i<instList.length;i++){var instAttrList=instList[i].instAttrList;var obj={};for(var j=0;j<instAttrList.length;j++){obj[instAttrList[j]["attrCode"]]=instAttrList[j]["attrValue"]}obj.rowId=instList[i]["instCode"]||Math.floor(Math.random()*100)+""+Date.now();factorForm.push(obj)}}console.log("\\u89E3\\u6790\\u5B8C\\u540E\\u7684factorForm:",factorForm);var factorFormFinal=[];var _loop=function _loop(_i){var obj=factorForm[_i];var index=factorFormFinal.findIndex(function(item){return item.installAddr==obj.installAddr});if(index!=-1){return"continue"}var sameList=factorForm.filter(function(item){return item.installAddr==obj.installAddr&&item.rowId!=obj.rowId});if(sameList.length>0){sameList.forEach(function(item){obj.total=parseInt(obj.total)+parseInt(item.total);obj.totalBandwidthUp=parseInt(obj.totalBandwidthUp)+parseInt(item.totalBandwidthUp);obj.handleTotalBandwidthUp=parseInt(obj.handleTotalBandwidthUp)+parseInt(item.handleTotalBandwidthUp);obj.handleTotalNum=parseInt(obj.handleTotalNum)+parseInt(item.handleTotalNum);var busiTypeOld=item.busiType;var busiTypeNew=obj.busiType;var busiTypeFinal="";if(busiTypeOld!=busiTypeNew&&busiTypeOld.indexOf(",")==-1){if(busiTypeOld.indexOf(busiTypeNew)==-1){if(busiTypeNew.indexOf(busiTypeOld)==-1){if(busiTypeNew>busiTypeOld){busiTypeFinal=busiTypeOld+","+busiTypeNew}else{busiTypeFinal=busiTypeNew+","+busiTypeOld}}else{busiTypeFinal=busiTypeNew}}else{busiTypeFinal=busiTypeOld}}else{busiTypeFinal=busiTypeOld}obj.busiType=busiTypeFinal})}obj.rowId=Math.floor(Math.random()*10)+""+Date.now();factorFormFinal.push(obj)};for(var _i=0;_i<factorForm.length;_i++){var _ret=_loop(_i);if(_ret==="continue")continue}console.log(factorFormFinal);data.sceneSubmit.approveGrade=item.approveGrade;data.sceneSubmit.approveGradeName=item.approveGradeName;success(factorFormFinal)};',
              actionTitle: '设置界面初始化值',
            },
            line_number: 7,
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
                      showInput: false,
                      _codePath: ['city'],
                      _idpath: ['08707745'],
                    },
                    {
                      attrId: '182276',
                      code: 'area',
                      name: '区县',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['area'],
                      _idpath: ['182276'],
                    },
                    {
                      attrId: '905721',
                      code: 'country',
                      name: '街道/乡/镇',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['country'],
                      _idpath: ['905721'],
                    },
                    {
                      attrId: '500673',
                      code: 'district',
                      name: '片区',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['district'],
                      _idpath: ['500673'],
                    },
                    {
                      attrId: '007551',
                      code: 'street',
                      name: '街、路、行政村、居委会',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['street'],
                      _idpath: ['007551'],
                    },
                    {
                      attrId: '303741',
                      code: 'doorplate',
                      name: '写字楼、小区（组团）、单位大院、自然村等',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['doorplate'],
                      _idpath: ['303741'],
                    },
                    {
                      attrId: '725859',
                      code: 'floorName',
                      name: '楼名、楼号(门面房前加"门面"标志)、村民组',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['floorName'],
                      _idpath: ['725859'],
                    },
                    {
                      attrId: '7467836',
                      code: 'element',
                      name: '楼号或单元号',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['element'],
                      _idpath: ['7467836'],
                    },
                    {
                      attrId: '1586552',
                      code: 'roomName',
                      name: '房间号、户名',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['roomName'],
                      _idpath: ['1586552'],
                    },
                    {
                      attrId: '996532',
                      code: 'installAddr',
                      name: '安装地址',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['installAddr'],
                      _idpath: ['996532'],
                    },
                    {
                      attrId: '8998593',
                      code: 'bandwidthUp',
                      name: '上行带宽',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['bandwidthUp'],
                      _idpath: ['8998593'],
                    },
                    {
                      attrId: '569754',
                      code: 'total',
                      name: '受理后总条数',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['total'],
                      _idpath: ['569754'],
                    },
                    {
                      attrId: '410393',
                      code: 'totalBandwidthUp',
                      name: '受理后总上行带宽',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['totalBandwidthUp'],
                      _idpath: ['410393'],
                    },
                    {
                      attrId: '087569',
                      code: 'houseNum',
                      name: '门牌号(含胡同)',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['houseNum'],
                      _idpath: ['087569'],
                    },
                    {
                      attrId: '0644498',
                      code: 'cityName',
                      name: '地市名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['cityName'],
                      _idpath: ['0644498'],
                    },
                    {
                      attrId: '451514',
                      code: 'areaName',
                      name: '区域名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['areaName'],
                      _idpath: ['451514'],
                    },
                    {
                      attrId: '219589',
                      code: 'countryName',
                      name: '乡镇名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['countryName'],
                      _idpath: ['219589'],
                    },
                    {
                      attrId: '7224988',
                      code: 'reason',
                      name: '申请原因',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['reason'],
                      _idpath: ['7224988'],
                    },
                    {
                      attrId: '224539',
                      code: 'handleTotalNum',
                      name: '本次受理总条数',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['handleTotalNum'],
                      _idpath: ['224539'],
                    },
                    {
                      attrId: '012241',
                      code: 'stockTotalBandwidthUp',
                      name: '存量总上行带宽(M)',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['stockTotalBandwidthUp'],
                      _idpath: ['012241'],
                    },
                    {
                      attrId: '014989',
                      code: 'stockNum',
                      name: '存量条数',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['stockNum'],
                      _idpath: ['014989'],
                    },
                    {
                      attrId: '0177956',
                      code: 'handleTotalBandwidthUp',
                      name: '本次受理总上行带宽(M)',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['handleTotalBandwidthUp'],
                      _idpath: ['0177956'],
                    },
                    {
                      attrId: '2160153',
                      code: 'busiType',
                      name: '业务类型',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      _codePath: ['busiType'],
                      _idpath: ['2160153'],
                    },
                  ],
                  operateType: 3,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  newData: '$data_9981685$',
                },
                line_number: 8,
                callback1: [],
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
                  valueList: {
                    Input_361479_887285_2150708_7460276_60627:
                      '$state.itemList.approveGradeName$',
                  },
                },
                line_number: 9,
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
                line_number: 12,
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
                      visible: '',
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
                type: 'sysSetVisible',
                dataId: 166244953733999170,
                options: {
                  compId: ['Row_851124', 'Table_608103', 'View_752361'],
                  compName: 'page',
                  id: '675663',
                  pageJsonId: '537892',
                  compid: ['Row_851124', 'Table_608103', 'View_752361'],
                  visible: '',
                },
                line_number: 15,
              },
              {
                type: 'setVisible',
                dataId: 166599480827529820,
                options: {
                  compId: [
                    'Input_361479_887285_2150708_7460276_60627',
                    'Table_01275',
                  ],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '6776648',
                  visible: 'true',
                  compid: [
                    'Input_361479_887285_2150708_7460276_60627',
                    'Table_01275',
                  ],
                },
                line_number: 16,
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
                line_number: 17,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse130.params = [] || [];
    CMDGenerator(eventDataifelse130, {}, 'ifelse', {
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
          dividerText={'商务快线同址多宽'}
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
          ref={(r: any) => refs.setComponentRef(r, 'Divider_27607')}
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
                  refs.setComponentRef(r, 'Form_4311097_9385662_302551_802694')
                }
                {...injectData}
              >
                <Checkbox
                  name={'审批场景'}
                  titleTip={'text'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  text={'商务快线同址多宽'}
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
                    refs.setComponentRef(
                      r,
                      'Checkbox_882584_5289015_934499_292792_8224843',
                    )
                  }
                  {...injectData}
                />
                <View
                  className="View_View_971391_984792"
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
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'View_971391_984792')
                  }
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
                    refs.setComponentRef(
                      r,
                      'Input_361479_887285_2150708_7460276_60627',
                    )
                  }
                  {...injectData}
                />
              </Form>
            </View>
          </HorizontalView>
          <View
            className="View_View_205214"
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_205214',
              uid: 'View_205214',
              type: 'View',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              textAlign: 'left',
              display: 'block',
              flexDirection: 'column',
              padding: '0px 0px 0px 0px',
              width: '100%',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_205214')}
            {...injectData}
          >
            <Row
              name={'行容器'}
              colSpan={24}
              gutterHorizontal={0}
              gutterVertical={0}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'Row_4281005',
                uid: 'Row_4281005',
                type: 'Row',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              ref={(r: any) => refs.setComponentRef(r, 'Row_4281005')}
              {...injectData}
            >
              <View
                className="View_View_752361"
                name={'布局容器'}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_752361',
                  uid: 'View_752361',
                  type: 'View',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'right',
                  display: 'block',
                  flexDirection: 'column',
                  padding: '0px 0px 12px 0px',
                  width: '100%',
                }}
                ref={(r: any) => refs.setComponentRef(r, 'View_752361')}
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
                    id: 'Button_1583204',
                    uid: 'Button_1583204',
                    type: 'Button',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ width: 'fit-content' }}
                  onClick={(e: any) => {
                    const eventDatacallCustomPageFunc15: any = [
                      {
                        type: 'callCustomPageFunc',
                        dataId: 169986524240211040,
                        options: {
                          compId: 'callCustomPageFunc',
                          compName: 'system',
                          id: '924629',
                          pageJsonId: '537892',
                          pathname: '/auditOrderPrepare',
                          pageId: '884045146848604160',
                          modalPath: '/auditOrderPrepare',
                          customFuncName: 'getGroupInfo',
                          customFuncParams: 'object',
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'ifelse',
                            condition: [
                              {
                                condId: '894289',
                                options: {
                                  context: '$CustoPageFuncs_924629$',
                                  operate: 'notEmpty',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 169986529582844100,
                            elseIfs: [
                              {
                                dataName: 'elseIf',
                                dataId: 169986533400417280,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 169986533785066180,
                                    children: [],
                                    todoOptions: [
                                      'msgType',
                                      'value',
                                      'duration',
                                    ],
                                    options: {
                                      compId: 'showMessage',
                                      compName: 'system',
                                      id: '636517',
                                      pageJsonId: '537892',
                                      type: 'info',
                                      value: '请先选择集团！',
                                    },
                                    actionObjId: 'showMessage',
                                    actionObjName: 'system',
                                    value: 'showMessage',
                                    tips: '注意：当加载时长为0时，表示一直显示加载中。当加载时长大于0时，表示按照设置时间显示加载中。',
                                    line_number: 9,
                                  },
                                ],
                                condition: [],
                                value: 'elseIf',
                                callback: [
                                  {
                                    type: 'showMessage',
                                    dataId: 169986533785066180,
                                    options: {
                                      compId: 'showMessage',
                                      compName: 'system',
                                      id: '636517',
                                      pageJsonId: '537892',
                                      type: 'info',
                                      value: '请先选择集团！',
                                    },
                                    line_number: 9,
                                  },
                                ],
                              },
                            ],
                            line_number: 2,
                            callback1: [
                              {
                                type: 'console',
                                dataId: 169986530485788200,
                                options: {
                                  compId: 'debug',
                                  compName: 'system',
                                  id: '639919',
                                  pageJsonId: '537892',
                                },
                                line_number: 3,
                              },
                              {
                                type: 'showCustomModal',
                                dataId: 169986531121248740,
                                options: {
                                  compId: 'showCustomModal',
                                  compName: 'page',
                                  id: '2797117',
                                  pageJsonId: '537892',
                                  modalname: '/busiFeeAddAudit',
                                  pageId: '991967406355632128',
                                  modalPath: '/busiFeeAddAudit',
                                  paramsObj: {
                                    catalogCode: '$state.catalogCode$',
                                    groupId: '$CustoPageFuncs_924629$',
                                    instNbr: '$state.fileInstNbr$',
                                  },
                                  paramsObjKeyValueMap: {
                                    catalogCode: '$state.catalogCode$',
                                    groupId: '$CustoPageFuncs_924629$',
                                    instNbr: '$state.fileInstNbr$',
                                  },
                                },
                                line_number: 4,
                                callback1: [
                                  {
                                    type: 'console',
                                    dataId: 169986531121278720,
                                    options: {
                                      compId: 'debug',
                                      compName: 'system',
                                      id: '046643',
                                      pageJsonId: '537892',
                                      value: [
                                        '弹窗确认回调参数：',
                                        '$okData_2797117$',
                                      ],
                                    },
                                    line_number: 5,
                                  },
                                  {
                                    type: 'customActionCode',
                                    dataId: 169986531121279420,
                                    options: {
                                      compId: 'customActionCode',
                                      compName: 'page',
                                      id: '6502604',
                                      pageJsonId: '537892',
                                      code: 'function main(data,state,success,fail){var info=okData_2797117;info.busiType=info.busiType.join(",");var factorForm=data.factorForm||[];if(!info.rowId){var sameAddrItem=factorForm.filter(function(item){return item.installAddr==info.installAddr});console.log("sameAddrItem = ",sameAddrItem);if(sameAddrItem.length>0){sameAddrItem=sameAddrItem[0];info.total=parseInt(info.total)+parseInt(sameAddrItem.total);info.totalBandwidthUp=parseInt(info.totalBandwidthUp)+parseInt(sameAddrItem.totalBandwidthUp);info.handleTotalBandwidthUp=parseInt(info.handleTotalBandwidthUp)+parseInt(sameAddrItem.handleTotalBandwidthUp);info.handleTotalNum=parseInt(info.handleTotalNum)+parseInt(sameAddrItem.handleTotalNum);var busiTypeOld=sameAddrItem.busiType;var busiTypeNew=info.busiType;var busiTypeFinal="";if(busiTypeOld!=busiTypeNew&&busiTypeOld.indexOf(",")==-1){if(busiTypeOld.indexOf(busiTypeNew)==-1){if(busiTypeNew.indexOf(busiTypeOld)==-1){if(busiTypeNew>busiTypeOld){busiTypeFinal=busiTypeOld+","+busiTypeNew}else{busiTypeFinal=busiTypeNew+","+busiTypeOld}}else{busiTypeFinal=busiTypeNew}}else{busiTypeFinal=busiTypeOld}}else{busiTypeFinal=busiTypeOld}info.busiType=busiTypeFinal;factorForm=factorForm.filter(function(item){return item.rowId!=sameAddrItem.rowId})}else{info.rowId=Date.now();console.log("info.rowId",info)}}else{factorForm=data.factorForm.filter(function(item){return item.rowId!=info.rowId})}console.log("info = ",info);factorForm.unshift(info);success(factorForm)};',
                                    },
                                    line_number: 6,
                                    callback1: [
                                      {
                                        type: 'setDataSource',
                                        dataId: 169986531121253920,
                                        options: {
                                          compId: 'setDataSource',
                                          compName: 'page',
                                          id: '910477',
                                          pageJsonId: '537892',
                                          dataSourceId: 166124254360037760,
                                          dataSourceName: 'factorForm',
                                          dataSourceRelType: 'custom',
                                          dataSourceSetValue: [
                                            {
                                              attrId: '08707745',
                                              code: 'city',
                                              name: '地市',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: false,
                                              _codePath: ['city'],
                                              _idpath: ['08707745'],
                                            },
                                            {
                                              attrId: '182276',
                                              code: 'area',
                                              name: '区县',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: false,
                                              _codePath: ['area'],
                                              _idpath: ['182276'],
                                            },
                                            {
                                              attrId: '905721',
                                              code: 'country',
                                              name: '街道/乡/镇',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: false,
                                              _codePath: ['country'],
                                              _idpath: ['905721'],
                                            },
                                            {
                                              attrId: '500673',
                                              code: 'district',
                                              name: '片区',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: false,
                                              _codePath: ['district'],
                                              _idpath: ['500673'],
                                            },
                                            {
                                              attrId: '007551',
                                              code: 'street',
                                              name: '街、路、行政村、居委会',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: false,
                                              _codePath: ['street'],
                                              _idpath: ['007551'],
                                            },
                                            {
                                              attrId: '087569',
                                              code: 'houseNum',
                                              name: '门牌号(含胡同)',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: false,
                                              _codePath: ['houseNum'],
                                              _idpath: ['087569'],
                                            },
                                            {
                                              attrId: '303741',
                                              code: 'doorplate',
                                              name: '写字楼、小区（组团）、单位大院、自然村等',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: false,
                                              _codePath: ['doorplate'],
                                              _idpath: ['303741'],
                                            },
                                            {
                                              attrId: '725859',
                                              code: 'floorName',
                                              name: '楼名、楼号(门面房前加"门面"标志)、村民组',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: false,
                                              _codePath: ['floorName'],
                                              _idpath: ['725859'],
                                            },
                                            {
                                              attrId: '7467836',
                                              code: 'element',
                                              name: '楼号或单元号',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: false,
                                              _codePath: ['element'],
                                              _idpath: ['7467836'],
                                            },
                                            {
                                              attrId: '1586552',
                                              code: 'roomName',
                                              name: '房间号、户名',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: false,
                                              _codePath: ['roomName'],
                                              _idpath: ['1586552'],
                                            },
                                            {
                                              attrId: '996532',
                                              code: 'installAddr',
                                              name: '安装地址',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: false,
                                              _codePath: ['installAddr'],
                                              _idpath: ['996532'],
                                            },
                                            {
                                              attrId: '8998593',
                                              code: 'bandwidthUp',
                                              name: '上行带宽',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: false,
                                              _codePath: ['bandwidthUp'],
                                              _idpath: ['8998593'],
                                            },
                                            {
                                              attrId: '569754',
                                              code: 'total',
                                              name: '受理后总条数',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: false,
                                              _codePath: ['total'],
                                              _idpath: ['569754'],
                                            },
                                            {
                                              attrId: '410393',
                                              code: 'totalBandwidthUp',
                                              name: '受理后总上行带宽',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: false,
                                              _codePath: ['totalBandwidthUp'],
                                              _idpath: ['410393'],
                                            },
                                            {
                                              attrId: '0644498',
                                              code: 'cityName',
                                              name: '地市名称',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: false,
                                              _codePath: ['cityName'],
                                              _idpath: ['0644498'],
                                            },
                                            {
                                              attrId: '451514',
                                              code: 'areaName',
                                              name: '区域名称',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: false,
                                              _codePath: ['areaName'],
                                              _idpath: ['451514'],
                                            },
                                            {
                                              attrId: '219589',
                                              code: 'countryName',
                                              name: '乡镇名称',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: false,
                                              _codePath: ['countryName'],
                                              _idpath: ['219589'],
                                            },
                                            {
                                              attrId: '7224988',
                                              code: 'reason',
                                              name: '申请原因',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: false,
                                              _codePath: ['reason'],
                                              _idpath: ['7224988'],
                                            },
                                            {
                                              attrId: '012241',
                                              code: 'stockTotalBandwidthUp',
                                              name: '存量总上行带宽(M)',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: false,
                                              _codePath: [
                                                'stockTotalBandwidthUp',
                                              ],
                                              _idpath: ['012241'],
                                            },
                                            {
                                              attrId: '014989',
                                              code: 'stockNum',
                                              name: '存量条数',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: false,
                                              _codePath: ['stockNum'],
                                              _idpath: ['014989'],
                                            },
                                            {
                                              attrId: '0177956',
                                              code: 'handleTotalBandwidthUp',
                                              name: '本次受理总上行带宽(M)',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: false,
                                              _codePath: [
                                                'handleTotalBandwidthUp',
                                              ],
                                              _idpath: ['0177956'],
                                            },
                                            {
                                              attrId: '224539',
                                              code: 'handleTotalNum',
                                              name: '本次受理总条数',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: false,
                                              _codePath: ['handleTotalNum'],
                                              _idpath: ['224539'],
                                            },
                                            {
                                              attrId: '2160153',
                                              code: 'busiType',
                                              name: '业务类型',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                              showInput: false,
                                              _codePath: ['busiType'],
                                              _idpath: ['2160153'],
                                            },
                                          ],
                                          newData: '$data_6502604$',
                                          operateType: 3,
                                          onlySetPatch: false,
                                          otherObjectArrayOptions: {},
                                          targetDataSourcePaths: [],
                                        },
                                        line_number: 7,
                                        callback1: [
                                          {
                                            type: 'callSelfFunc',
                                            dataId: 169986531121206140,
                                            options: {
                                              compId: 'callSelfFunc',
                                              compName: 'system',
                                              id: '564512',
                                              pageJsonId: '537892',
                                              customFuncName: 'submitToFather',
                                              customFuncParams: 'object',
                                              paramsObj: {
                                                list: '$data_6502604$',
                                              },
                                              paramsObjKeyValueMap: {
                                                list: '$data_6502604$',
                                              },
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
                                ],
                                callback2: [],
                              },
                            ],
                          },
                        ],
                        callback2: [],
                      },
                    ];
                    eventDatacallCustomPageFunc15.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(
                      eventDatacallCustomPageFunc15,
                      { e },
                      'callCustomPageFunc',
                      {
                        id: 'callCustomPageFunc',
                        name: 'callCustomPageFunc',
                        type: 'callCustomPageFunc',
                        platform: 'pc',
                      },
                    );
                  }}
                  ref={(r: any) => refs.setComponentRef(r, 'Button_1583204')}
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
                  type={'primary'}
                  hasIcon={false}
                  $$componentItem={{
                    id: 'Button_7675117',
                    uid: 'Button_7675117',
                    type: 'Button',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ width: 'fit-content', margin: '0px 0px 0px 16px' }}
                  onClick={(e: any) => {
                    const eventDatashowModal17: any = [
                      {
                        type: 'showModal',
                        dataId: 168836973171657950,
                        options: {
                          compId: 'showModal',
                          compName: 'page',
                          id: '102312',
                          pageJsonId: '537892',
                          type: 'confirm',
                          title: '温馨提示',
                          content: '您确定要删除吗？',
                          okText: '确认',
                          cancelText: '取消',
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'getTableSelectedKey',
                            dataId: 168836977385599650,
                            options: {
                              compId: 'Table_608103',
                              compLib: 'comm',
                              pageJsonId: '537892',
                              compName: 'Table',
                              id: '173408',
                            },
                            line_number: 2,
                            callback1: [
                              {
                                type: 'customActionCode',
                                dataId: 168836977385558000,
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '3546992',
                                  pageJsonId: '537892',
                                  code: 'function main(data,state,success,fail){var keys=selectedRowKeys_173408;var factorForm=data.factorForm.filter(function(item){return keys.indexOf(item.rowId)==-1});success(factorForm)};',
                                },
                                line_number: 3,
                                callback1: [
                                  {
                                    type: 'setDataSource',
                                    dataId: 168836977385554400,
                                    options: {
                                      compId: 'setDataSource',
                                      compName: 'page',
                                      id: '0936292',
                                      pageJsonId: '537892',
                                      dataSourceId: 166124254360037760,
                                      dataSourceName: 'factorForm',
                                      dataSourceRelType: 'custom',
                                      dataSourceSetValue: [
                                        {
                                          attrId: '08707745',
                                          code: 'city',
                                          name: '地市',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['city'],
                                          _idpath: ['08707745'],
                                        },
                                        {
                                          attrId: '182276',
                                          code: 'area',
                                          name: '区县',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['area'],
                                          _idpath: ['182276'],
                                        },
                                        {
                                          attrId: '905721',
                                          code: 'country',
                                          name: '街道/乡/镇',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['country'],
                                          _idpath: ['905721'],
                                        },
                                        {
                                          attrId: '500673',
                                          code: 'district',
                                          name: '片区',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['district'],
                                          _idpath: ['500673'],
                                        },
                                        {
                                          attrId: '007551',
                                          code: 'street',
                                          name: '街、路、行政村、居委会',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['street'],
                                          _idpath: ['007551'],
                                        },
                                        {
                                          attrId: '087569',
                                          code: 'houseNum',
                                          name: '门牌号(含胡同)',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['houseNum'],
                                          _idpath: ['087569'],
                                        },
                                        {
                                          attrId: '303741',
                                          code: 'doorplate',
                                          name: '写字楼、小区（组团）、单位大院、自然村等',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['doorplate'],
                                          _idpath: ['303741'],
                                        },
                                        {
                                          attrId: '725859',
                                          code: 'floorName',
                                          name: '楼名、楼号(门面房前加"门面"标志)、村民组',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['floorName'],
                                          _idpath: ['725859'],
                                        },
                                        {
                                          attrId: '7467836',
                                          code: 'element',
                                          name: '楼号或单元号',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['element'],
                                          _idpath: ['7467836'],
                                        },
                                        {
                                          attrId: '1586552',
                                          code: 'roomName',
                                          name: '房间号、户名',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['roomName'],
                                          _idpath: ['1586552'],
                                        },
                                        {
                                          attrId: '996532',
                                          code: 'installAddr',
                                          name: '安装地址',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['installAddr'],
                                          _idpath: ['996532'],
                                        },
                                        {
                                          attrId: '8998593',
                                          code: 'bandwidthUp',
                                          name: '上行带宽',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['bandwidthUp'],
                                          _idpath: ['8998593'],
                                        },
                                        {
                                          attrId: '569754',
                                          code: 'total',
                                          name: '受理后总条数',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['total'],
                                          _idpath: ['569754'],
                                        },
                                        {
                                          attrId: '410393',
                                          code: 'totalBandwidthUp',
                                          name: '受理后总上行带宽',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['totalBandwidthUp'],
                                          _idpath: ['410393'],
                                        },
                                        {
                                          attrId: '0644498',
                                          code: 'cityName',
                                          name: '地市名称',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['cityName'],
                                          _idpath: ['0644498'],
                                        },
                                        {
                                          attrId: '451514',
                                          code: 'areaName',
                                          name: '区域名称',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['areaName'],
                                          _idpath: ['451514'],
                                        },
                                        {
                                          attrId: '219589',
                                          code: 'countryName',
                                          name: '乡镇名称',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['countryName'],
                                          _idpath: ['219589'],
                                        },
                                        {
                                          attrId: '7224988',
                                          code: 'reason',
                                          name: '申请原因',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['reason'],
                                          _idpath: ['7224988'],
                                        },
                                        {
                                          attrId: '012241',
                                          code: 'stockTotalBandwidthUp',
                                          name: '存量总上行带宽(M)',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['stockTotalBandwidthUp'],
                                          _idpath: ['012241'],
                                        },
                                        {
                                          attrId: '014989',
                                          code: 'stockNum',
                                          name: '存量条数',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['stockNum'],
                                          _idpath: ['014989'],
                                        },
                                        {
                                          attrId: '0177956',
                                          code: 'handleTotalBandwidthUp',
                                          name: '本次受理总上行带宽(M)',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['handleTotalBandwidthUp'],
                                          _idpath: ['0177956'],
                                        },
                                        {
                                          attrId: '224539',
                                          code: 'handleTotalNum',
                                          name: '本次受理总条数',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['handleTotalNum'],
                                          _idpath: ['224539'],
                                        },
                                        {
                                          attrId: '2160153',
                                          code: 'busiType',
                                          name: '业务类型',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['busiType'],
                                          _idpath: ['2160153'],
                                        },
                                      ],
                                      newData: '$data_3546992$',
                                      operateType: 3,
                                      onlySetPatch: true,
                                      otherObjectArrayOptions: {},
                                      targetDataSourcePaths: [],
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
                        callback2: [],
                      },
                    ];
                    eventDatashowModal17.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(eventDatashowModal17, { e }, 'showModal', {
                      id: 'showModal',
                      name: 'showModal',
                      type: 'showModal',
                      platform: 'pc',
                    });
                  }}
                  ref={(r: any) => refs.setComponentRef(r, 'Button_7675117')}
                  {...injectData}
                />
              </View>
            </Row>
            <Table
              name={'编辑表格'}
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
                  title: '业务类型',
                  key: 'busiType',
                  dataIndex: 'busiType',
                  className: '',
                  id: '093835',
                  customRendering:
                    'function renderFunc(text, row, index) {  return text ? "" + text : "";}',
                  originCustomRendering: [
                    '    /**',
                    ' * 自定义渲染函数',
                    ' * @param {String} text 单元格显示的文字内容',
                    ' * @param {Object} row 行数据对象',
                    ' * @param {number} index 行索引',
                    ' * @returns 渲染的内容：可以是 html 模板字符串',
                    ' */',
                    'function renderFunc(text, row, index) {',
                    "  // return IF(text.indexOf('1,2') != -1,'开通/变更', IF(text.indexOf('1') != -1,'开通','变更'))",
                    '  return text ? `${text}` : ""',
                    '}',
                  ],
                  staticDataSource: [
                    { id: '376645', label: '开通', value: '1' },
                    { id: '3667048', label: '变更', value: '2' },
                    { id: '810714', label: '开通/变更', value: '1,2' },
                    { id: '238072', label: '开通/变更', value: '2,1' },
                  ],
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
                  title: '安装地址',
                  key: 'installAddr',
                  dataIndex: 'installAddr',
                  className: 'divider',
                  id: '836778',
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
                  title: '受理后总条数',
                  key: 'total',
                  dataIndex: 'total',
                  className: 'divider',
                  id: '836819',
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
                  title: '受理后总上行带宽',
                  key: 'bandwidthUp',
                  dataIndex: 'totalBandwidthUp',
                  className: 'divider',
                  id: '666217',
                  customRendering:
                    'function renderFunc(text, row, index) {  return text + "M";}',
                  originCustomRendering: [
                    ' /**',
                    ' * 自定义渲染函数',
                    ' * @param {String} text 单元格显示的文字内容',
                    ' * @param {Object} row 行数据对象',
                    ' * @param {number} index 行索引',
                    ' * @returns 渲染的内容：可以是 html 模板字符串',
                    ' */',
                    'function renderFunc(text, row, index) {',
                    '    return `${text}M`',
                    '}',
                  ],
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
                  title: '本次受理条数',
                  key: 'handleTotalNum',
                  dataIndex: 'handleTotalNum',
                  className: 'divider',
                  id: '355793',
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
                  title: '本次受理总上行带宽',
                  key: 'handleTotalBandwidthUp',
                  dataIndex: 'handleTotalBandwidthUp',
                  className: 'divider',
                  id: '228277',
                  customRendering:
                    'function renderFunc(text, row, index) {  return text + "M";}',
                  originCustomRendering: [
                    ' /**',
                    ' * 自定义渲染函数',
                    ' * @param {String} text 单元格显示的文字内容',
                    ' * @param {Object} row 行数据对象',
                    ' * @param {number} index 行索引',
                    ' * @returns 渲染的内容：可以是 html 模板字符串',
                    ' */',
                    'function renderFunc(text, row, index) {',
                    '    return `${text}M`',
                    '}',
                  ],
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
                  title: '存量条数',
                  key: 'stockNum',
                  dataIndex: 'stockNum',
                  className: 'divider',
                  id: '931279',
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
                  title: '存量总上行带宽',
                  key: 'stockTotalBandwidthUp',
                  dataIndex: 'stockTotalBandwidthUp',
                  className: 'divider',
                  id: '88630372',
                  customRendering:
                    'function renderFunc(text, row, index) {  return text + "M";}',
                  originCustomRendering: [
                    ' /**',
                    ' * 自定义渲染函数',
                    ' * @param {String} text 单元格显示的文字内容',
                    ' * @param {Object} row 行数据对象',
                    ' * @param {number} index 行索引',
                    ' * @returns 渲染的内容：可以是 html 模板字符串',
                    ' */',
                    'function renderFunc(text, row, index) {',
                    '    return `${text}M`',
                    '}',
                  ],
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
              selectType={'checkbox'}
              bordered={'segmentation'}
              size={'middle'}
              fixedAction={false}
              rowSelection={{ type: 'checkbox' }}
              showHead={false}
              showTotal={true}
              showSizeChanger={false}
              showQuickJumper={false}
              pageSizeOptions={'[5,10,20]'}
              customNum={3}
              rowKey={'rowId'}
              rowActions={[
                {
                  title: '编辑',
                  iconPos: 'left',
                  icon: { theme: 'outlined', type: 'edit' },
                  type: 'edit',
                  id: '084911',
                  checked: true,
                },
              ]}
              extend={[]}
              dataSource={data?.factorForm}
              dataSourceFromDataSourceConfig={'data.factorForm'}
              $$componentItem={{
                id: 'Table_608103',
                uid: 'Table_608103',
                type: 'Table',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              onRowEdit={(rowId: any, row: any, index: any) => {
                const eventDatashowCustomModal108: any = [
                  {
                    type: 'showCustomModal',
                    dataId: 168835506621187170,
                    shielding: true,
                    options: {
                      compId: 'showCustomModal',
                      compName: 'page',
                      id: '4228255',
                      pageJsonId: '537892',
                      modalname: '/busiFeeAddAudit',
                      pageId: '991967406355632128',
                      modalPath: '/busiFeeAddAudit',
                      paramsObj: {
                        formData: '$row$',
                        catalogCode: '$state.catalogCode$',
                      },
                      paramsObjKeyValueMap: {
                        formData: '$row$',
                        catalogCode: '$state.catalogCode$',
                      },
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 168836543592584100,
                        shielding: true,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '28253345',
                          pageJsonId: '537892',
                          code: 'function main(data,state,success,fail){var info=okData_4228255;info.busiType=info.busiType.join(",");console.log("\\u5F39\\u7A97\\u786E\\u8BA4\\u56DE\\u8C03\\u53C2\\u6570\\uFF1A",info);var factorForm=data.factorForm||[];factorForm=data.factorForm.filter(function(item){return item.rowId!=info.rowId});var sameAddrItem=factorForm.filter(function(item){return item.installAddr==info.installAddr});if(sameAddrItem.length>0){console.log("\\u5F53\\u524D\\u53D1\\u73B0\\u6709\\u76F8\\u540C\\u5730\\u5740\\u7684\\u6570\\u636E\\uFF1A",sameAddrItem);sameAddrItem=sameAddrItem[0];info.total=parseInt(info.total)+parseInt(sameAddrItem.total);info.totalBandwidthUp=parseInt(info.totalBandwidthUp)+parseInt(sameAddrItem.totalBandwidthUp);info.handleTotalBandwidthUp=parseInt(info.handleTotalBandwidthUp)+parseInt(sameAddrItem.handleTotalBandwidthUp);info.handleTotalNum=parseInt(info.handleTotalNum)+parseInt(sameAddrItem.handleTotalNum);var busiTypeOld=sameAddrItem.busiType;var busiTypeNew=info.busiType;var busiTypeFinal="";if(busiTypeOld!=busiTypeNew&&busiTypeOld.indexOf(",")==-1){if(busiTypeOld.indexOf(busiTypeNew)==-1){if(busiTypeNew.indexOf(busiTypeOld)==-1){if(busiTypeNew>busiTypeOld){busiTypeFinal=busiTypeOld+","+busiTypeNew}else{busiTypeFinal=busiTypeNew+","+busiTypeOld}}else{busiTypeFinal=busiTypeNew}}else{busiTypeFinal=busiTypeOld}}else{busiTypeFinal=busiTypeOld}info.busiType=busiTypeFinal;factorForm=factorForm.filter(function(item){return item.rowId!=sameAddrItem.rowId})}factorForm.unshift(info);success(factorForm)};',
                        },
                        line_number: 2,
                        callback1: [
                          {
                            type: 'setDataSource',
                            dataId: 168836543592526100,
                            shielding: true,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '787388',
                              pageJsonId: '537892',
                              dataSourceId: 166124254360037760,
                              dataSourceName: 'factorForm',
                              dataSourceRelType: 'custom',
                              dataSourceSetValue: [
                                {
                                  attrId: '08707745',
                                  code: 'city',
                                  name: '地市',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['city'],
                                  _idpath: ['08707745'],
                                },
                                {
                                  attrId: '182276',
                                  code: 'area',
                                  name: '区县',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['area'],
                                  _idpath: ['182276'],
                                },
                                {
                                  attrId: '905721',
                                  code: 'country',
                                  name: '街道/乡/镇',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['country'],
                                  _idpath: ['905721'],
                                },
                                {
                                  attrId: '500673',
                                  code: 'district',
                                  name: '片区',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['district'],
                                  _idpath: ['500673'],
                                },
                                {
                                  attrId: '007551',
                                  code: 'street',
                                  name: '街、路、行政村、居委会',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['street'],
                                  _idpath: ['007551'],
                                },
                                {
                                  attrId: '087569',
                                  code: 'houseNum',
                                  name: '门牌号(含胡同)',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['houseNum'],
                                  _idpath: ['087569'],
                                },
                                {
                                  attrId: '303741',
                                  code: 'doorplate',
                                  name: '写字楼、小区（组团）、单位大院、自然村等',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['doorplate'],
                                  _idpath: ['303741'],
                                },
                                {
                                  attrId: '725859',
                                  code: 'floorName',
                                  name: '楼名、楼号(门面房前加"门面"标志)、村民组',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['floorName'],
                                  _idpath: ['725859'],
                                },
                                {
                                  attrId: '7467836',
                                  code: 'element',
                                  name: '楼号或单元号',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['element'],
                                  _idpath: ['7467836'],
                                },
                                {
                                  attrId: '1586552',
                                  code: 'roomName',
                                  name: '房间号、户名',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['roomName'],
                                  _idpath: ['1586552'],
                                },
                                {
                                  attrId: '996532',
                                  code: 'installAddr',
                                  name: '安装地址',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['installAddr'],
                                  _idpath: ['996532'],
                                },
                                {
                                  attrId: '8998593',
                                  code: 'bandwidthUp',
                                  name: '上行带宽',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['bandwidthUp'],
                                  _idpath: ['8998593'],
                                },
                                {
                                  attrId: '569754',
                                  code: 'total',
                                  name: '受理后总条数',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['total'],
                                  _idpath: ['569754'],
                                },
                                {
                                  attrId: '410393',
                                  code: 'totalBandwidthUp',
                                  name: '受理后总上行带宽',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['totalBandwidthUp'],
                                  _idpath: ['410393'],
                                },
                                {
                                  attrId: '0644498',
                                  code: 'cityName',
                                  name: '地市名称',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['cityName'],
                                  _idpath: ['0644498'],
                                },
                                {
                                  attrId: '451514',
                                  code: 'areaName',
                                  name: '区域名称',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['areaName'],
                                  _idpath: ['451514'],
                                },
                                {
                                  attrId: '219589',
                                  code: 'countryName',
                                  name: '乡镇名称',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['countryName'],
                                  _idpath: ['219589'],
                                },
                                {
                                  attrId: '7224988',
                                  code: 'reason',
                                  name: '申请原因',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['reason'],
                                  _idpath: ['7224988'],
                                },
                                {
                                  attrId: '012241',
                                  code: 'stockTotalBandwidthUp',
                                  name: '存量总上行带宽(M)',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['stockTotalBandwidthUp'],
                                  _idpath: ['012241'],
                                },
                                {
                                  attrId: '014989',
                                  code: 'stockNum',
                                  name: '存量条数',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['stockNum'],
                                  _idpath: ['014989'],
                                },
                                {
                                  attrId: '0177956',
                                  code: 'handleTotalBandwidthUp',
                                  name: '本次受理总上行带宽(M)',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['handleTotalBandwidthUp'],
                                  _idpath: ['0177956'],
                                },
                                {
                                  attrId: '224539',
                                  code: 'handleTotalNum',
                                  name: '本次受理总条数',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['handleTotalNum'],
                                  _idpath: ['224539'],
                                },
                                {
                                  attrId: '2160153',
                                  code: 'busiType',
                                  name: '业务类型',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['busiType'],
                                  _idpath: ['2160153'],
                                },
                              ],
                              newData: '$data_28253345$',
                              operateType: 3,
                              onlySetPatch: true,
                              otherObjectArrayOptions: {},
                              targetDataSourcePaths: [],
                            },
                            line_number: 3,
                            callback1: [
                              {
                                type: 'callSelfFunc',
                                dataId: 168837854646838100,
                                shielding: true,
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '801211',
                                  pageJsonId: '537892',
                                  customFuncName: 'submitToFather',
                                  customFuncParams: 'object',
                                  paramsObj: { list: '$data_28253345$' },
                                  paramsObjKeyValueMap: {
                                    list: '$data_28253345$',
                                  },
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
                    callback2: [],
                  },
                ];
                eventDatashowCustomModal108.params =
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
                  eventDatashowCustomModal108,
                  { rowId, row, index },
                  'showCustomModal',
                  {
                    id: 'showCustomModal',
                    name: 'showCustomModal',
                    type: 'showCustomModal',
                    platform: 'pc',
                  },
                );
                const eventDatacallCustomPageFunc16: any = [
                  {
                    type: 'callCustomPageFunc',
                    dataId: 170470184418970800,
                    options: {
                      compId: 'callCustomPageFunc',
                      compName: 'system',
                      id: '300236',
                      pageJsonId: '537892',
                      pathname: '/auditOrderPrepare',
                      pageId: '884045146848604160',
                      modalPath: '/auditOrderPrepare',
                      customFuncName: 'getGroupInfo',
                      customFuncParams: 'object',
                    },
                    line_number: 5,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '894289',
                            options: {
                              context: '$CustoPageFuncs_300236$',
                              operate: 'notEmpty',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 170470184418997900,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 170470184418904350,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 170470184418959900,
                                children: [],
                                todoOptions: ['msgType', 'value', 'duration'],
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '8960106',
                                  pageJsonId: '537892',
                                  type: 'info',
                                  value: '清先选择集团！',
                                },
                                actionObjId: 'showMessage',
                                actionObjName: 'system',
                                value: 'showMessage',
                                tips: '注意：当加载时长为0时，表示一直显示加载中。当加载时长大于0时，表示按照设置时间显示加载中。',
                                line_number: 12,
                              },
                            ],
                            condition: [],
                            value: 'elseIf',
                            callback: [
                              {
                                type: 'showMessage',
                                dataId: 170470184418959900,
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '8960106',
                                  pageJsonId: '537892',
                                  type: 'info',
                                  value: '清先选择集团！',
                                },
                                line_number: 12,
                              },
                            ],
                          },
                        ],
                        line_number: 6,
                        callback1: [
                          {
                            type: 'console',
                            dataId: 170470184418983420,
                            options: {
                              compId: 'debug',
                              compName: 'system',
                              id: '593181',
                              pageJsonId: '537892',
                            },
                            line_number: 7,
                          },
                          {
                            type: 'showCustomModal',
                            dataId: 170470187463476030,
                            options: {
                              compId: 'showCustomModal',
                              compName: 'page',
                              id: '5399887',
                              pageJsonId: '537892',
                              modalname: '/busiFeeAddAudit',
                              pageId: '991967406355632128',
                              modalPath: '/busiFeeAddAudit',
                              paramsObj: {
                                formData: '$row$',
                                catalogCode: '$state.catalogCode$',
                                groupId: '$CustoPageFuncs_300236$',
                                instNbr: '$state.fileInstNbr$',
                              },
                              paramsObjKeyValueMap: {
                                formData: '$row$',
                                catalogCode: '$state.catalogCode$',
                                groupId: '$CustoPageFuncs_300236$',
                                instNbr: '$state.fileInstNbr$',
                              },
                            },
                            line_number: 8,
                            callback1: [
                              {
                                type: 'customActionCode',
                                dataId: 170470187463432100,
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '622667',
                                  pageJsonId: '537892',
                                  code: 'function main(data,state,success,fail){var info=okData_5399887;info.busiType=info.busiType.join(",");console.log("\\u5F39\\u7A97\\u786E\\u8BA4\\u56DE\\u8C03\\u53C2\\u6570\\uFF1A",info);var factorForm=data.factorForm||[];factorForm=data.factorForm.filter(function(item){return item.rowId!=info.rowId});var sameAddrItem=factorForm.filter(function(item){return item.installAddr==info.installAddr});if(sameAddrItem.length>0){console.log("\\u5F53\\u524D\\u53D1\\u73B0\\u6709\\u76F8\\u540C\\u5730\\u5740\\u7684\\u6570\\u636E\\uFF1A",sameAddrItem);sameAddrItem=sameAddrItem[0];info.total=parseInt(info.total)+parseInt(sameAddrItem.total);info.totalBandwidthUp=parseInt(info.totalBandwidthUp)+parseInt(sameAddrItem.totalBandwidthUp);info.handleTotalBandwidthUp=parseInt(info.handleTotalBandwidthUp)+parseInt(sameAddrItem.handleTotalBandwidthUp);info.handleTotalNum=parseInt(info.handleTotalNum)+parseInt(sameAddrItem.handleTotalNum);var busiTypeOld=sameAddrItem.busiType;var busiTypeNew=info.busiType;var busiTypeFinal="";if(busiTypeOld!=busiTypeNew&&busiTypeOld.indexOf(",")==-1){if(busiTypeOld.indexOf(busiTypeNew)==-1){if(busiTypeNew.indexOf(busiTypeOld)==-1){if(busiTypeNew>busiTypeOld){busiTypeFinal=busiTypeOld+","+busiTypeNew}else{busiTypeFinal=busiTypeNew+","+busiTypeOld}}else{busiTypeFinal=busiTypeNew}}else{busiTypeFinal=busiTypeOld}}else{busiTypeFinal=busiTypeOld}info.busiType=busiTypeFinal;factorForm=factorForm.filter(function(item){return item.rowId!=sameAddrItem.rowId})}factorForm.unshift(info);success(factorForm)};',
                                },
                                line_number: 9,
                                callback1: [
                                  {
                                    type: 'setDataSource',
                                    dataId: 170470187463488670,
                                    options: {
                                      compId: 'setDataSource',
                                      compName: 'page',
                                      id: '1030827',
                                      pageJsonId: '537892',
                                      dataSourceId: 166124254360037760,
                                      dataSourceName: 'factorForm',
                                      dataSourceRelType: 'custom',
                                      dataSourceSetValue: [
                                        {
                                          attrId: '08707745',
                                          code: 'city',
                                          name: '地市',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['city'],
                                          _idpath: ['08707745'],
                                        },
                                        {
                                          attrId: '182276',
                                          code: 'area',
                                          name: '区县',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['area'],
                                          _idpath: ['182276'],
                                        },
                                        {
                                          attrId: '905721',
                                          code: 'country',
                                          name: '街道/乡/镇',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['country'],
                                          _idpath: ['905721'],
                                        },
                                        {
                                          attrId: '500673',
                                          code: 'district',
                                          name: '片区',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['district'],
                                          _idpath: ['500673'],
                                        },
                                        {
                                          attrId: '007551',
                                          code: 'street',
                                          name: '街、路、行政村、居委会',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['street'],
                                          _idpath: ['007551'],
                                        },
                                        {
                                          attrId: '087569',
                                          code: 'houseNum',
                                          name: '门牌号(含胡同)',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['houseNum'],
                                          _idpath: ['087569'],
                                        },
                                        {
                                          attrId: '303741',
                                          code: 'doorplate',
                                          name: '写字楼、小区（组团）、单位大院、自然村等',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['doorplate'],
                                          _idpath: ['303741'],
                                        },
                                        {
                                          attrId: '725859',
                                          code: 'floorName',
                                          name: '楼名、楼号(门面房前加"门面"标志)、村民组',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['floorName'],
                                          _idpath: ['725859'],
                                        },
                                        {
                                          attrId: '7467836',
                                          code: 'element',
                                          name: '楼号或单元号',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['element'],
                                          _idpath: ['7467836'],
                                        },
                                        {
                                          attrId: '1586552',
                                          code: 'roomName',
                                          name: '房间号、户名',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['roomName'],
                                          _idpath: ['1586552'],
                                        },
                                        {
                                          attrId: '996532',
                                          code: 'installAddr',
                                          name: '安装地址',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['installAddr'],
                                          _idpath: ['996532'],
                                        },
                                        {
                                          attrId: '8998593',
                                          code: 'bandwidthUp',
                                          name: '上行带宽',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['bandwidthUp'],
                                          _idpath: ['8998593'],
                                        },
                                        {
                                          attrId: '569754',
                                          code: 'total',
                                          name: '受理后总条数',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['total'],
                                          _idpath: ['569754'],
                                        },
                                        {
                                          attrId: '410393',
                                          code: 'totalBandwidthUp',
                                          name: '受理后总上行带宽',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['totalBandwidthUp'],
                                          _idpath: ['410393'],
                                        },
                                        {
                                          attrId: '0644498',
                                          code: 'cityName',
                                          name: '地市名称',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['cityName'],
                                          _idpath: ['0644498'],
                                        },
                                        {
                                          attrId: '451514',
                                          code: 'areaName',
                                          name: '区域名称',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['areaName'],
                                          _idpath: ['451514'],
                                        },
                                        {
                                          attrId: '219589',
                                          code: 'countryName',
                                          name: '乡镇名称',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['countryName'],
                                          _idpath: ['219589'],
                                        },
                                        {
                                          attrId: '7224988',
                                          code: 'reason',
                                          name: '申请原因',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['reason'],
                                          _idpath: ['7224988'],
                                        },
                                        {
                                          attrId: '012241',
                                          code: 'stockTotalBandwidthUp',
                                          name: '存量总上行带宽(M)',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['stockTotalBandwidthUp'],
                                          _idpath: ['012241'],
                                        },
                                        {
                                          attrId: '014989',
                                          code: 'stockNum',
                                          name: '存量条数',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['stockNum'],
                                          _idpath: ['014989'],
                                        },
                                        {
                                          attrId: '0177956',
                                          code: 'handleTotalBandwidthUp',
                                          name: '本次受理总上行带宽(M)',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['handleTotalBandwidthUp'],
                                          _idpath: ['0177956'],
                                        },
                                        {
                                          attrId: '224539',
                                          code: 'handleTotalNum',
                                          name: '本次受理总条数',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['handleTotalNum'],
                                          _idpath: ['224539'],
                                        },
                                        {
                                          attrId: '2160153',
                                          code: 'busiType',
                                          name: '业务类型',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                          _codePath: ['busiType'],
                                          _idpath: ['2160153'],
                                        },
                                      ],
                                      newData: '$data_622667$',
                                      operateType: 3,
                                      onlySetPatch: true,
                                      otherObjectArrayOptions: {},
                                      targetDataSourcePaths: [],
                                    },
                                    line_number: 10,
                                    callback1: [
                                      {
                                        type: 'callSelfFunc',
                                        dataId: 170470187463429540,
                                        options: {
                                          compId: 'callSelfFunc',
                                          compName: 'system',
                                          id: '7538947',
                                          pageJsonId: '537892',
                                          customFuncName: 'submitToFather',
                                          customFuncParams: 'object',
                                          paramsObj: { list: '$data_622667$' },
                                          paramsObjKeyValueMap: {
                                            list: '$data_622667$',
                                          },
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
                            ],
                            callback2: [],
                          },
                        ],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatacallCustomPageFunc16.params =
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
                  eventDatacallCustomPageFunc16,
                  { rowId, row, index },
                  'callCustomPageFunc',
                  {
                    id: 'callCustomPageFunc',
                    name: 'callCustomPageFunc',
                    type: 'callCustomPageFunc',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Table_608103')}
              {...injectData}
            />
            <Table
              name={'详情表格'}
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
                  title: '业务类型',
                  key: 'busiType',
                  dataIndex: 'busiType',
                  className: '',
                  id: '093835',
                  customRendering:
                    'function renderFunc(text, row, index) {  return text ? "" + text : "";}',
                  originCustomRendering: [
                    ' /**',
                    ' * 自定义渲染函数',
                    ' * @param {String} text 单元格显示的文字内容',
                    ' * @param {Object} row 行数据对象',
                    ' * @param {number} index 行索引',
                    ' * @returns 渲染的内容：可以是 html 模板字符串',
                    ' */',
                    'function renderFunc(text, row, index) {',
                    '    return text ? `${text}` : ""',
                    '}',
                  ],
                  staticDataSource: [
                    { id: '1096064', label: '开通', value: '1' },
                    { id: '8274634', label: '变更', value: '2' },
                    { id: '756452', label: '开通/变更', value: '1,2' },
                    { id: '1685514', label: '开通/变更', value: '2,1' },
                  ],
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
                  title: '安装地址',
                  key: 'installAddr',
                  dataIndex: 'installAddr',
                  className: 'divider',
                  id: '836778',
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
                  title: '受理后总条数',
                  key: 'total',
                  dataIndex: 'total',
                  className: 'divider',
                  id: '836819',
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
                  title: '受理后总上行带宽',
                  key: 'bandwidthUp',
                  dataIndex: 'totalBandwidthUp',
                  className: 'divider',
                  id: '666217',
                  customRendering:
                    'function renderFunc(text, row, index) {  return text + "M";}',
                  originCustomRendering: [
                    ' /**',
                    ' * 自定义渲染函数',
                    ' * @param {String} text 单元格显示的文字内容',
                    ' * @param {Object} row 行数据对象',
                    ' * @param {number} index 行索引',
                    ' * @returns 渲染的内容：可以是 html 模板字符串',
                    ' */',
                    'function renderFunc(text, row, index) {',
                    '    return `${text}M`',
                    '}',
                  ],
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
                  title: '本次受理条数',
                  key: 'handleTotalNum',
                  dataIndex: 'handleTotalNum',
                  className: 'divider',
                  id: '355793',
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
                  title: '本次受理总上行带宽',
                  key: 'handleTotalBandwidthUp',
                  dataIndex: 'handleTotalBandwidthUp',
                  className: 'divider',
                  id: '228277',
                  customRendering:
                    'function renderFunc(text, row, index) {  return text + "M";}',
                  originCustomRendering: [
                    ' /**',
                    ' * 自定义渲染函数',
                    ' * @param {String} text 单元格显示的文字内容',
                    ' * @param {Object} row 行数据对象',
                    ' * @param {number} index 行索引',
                    ' * @returns 渲染的内容：可以是 html 模板字符串',
                    ' */',
                    'function renderFunc(text, row, index) {',
                    '    return `${text}M`',
                    '}',
                  ],
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
                  title: '存量条数',
                  key: 'stockNum',
                  dataIndex: 'stockNum',
                  className: 'divider',
                  id: '931279',
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
                  title: '存量总上行带宽',
                  key: 'stockTotalBandwidthUp',
                  dataIndex: 'stockTotalBandwidthUp',
                  className: 'divider',
                  id: '88630372',
                  customRendering:
                    'function renderFunc(text, row, index) {  return text + "M";}',
                  originCustomRendering: [
                    ' /**',
                    ' * 自定义渲染函数',
                    ' * @param {String} text 单元格显示的文字内容',
                    ' * @param {Object} row 行数据对象',
                    ' * @param {number} index 行索引',
                    ' * @returns 渲染的内容：可以是 html 模板字符串',
                    ' */',
                    'function renderFunc(text, row, index) {',
                    '    return `${text}M`',
                    '}',
                  ],
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
              selectType={'checkbox'}
              bordered={'segmentation'}
              size={'middle'}
              fixedAction={false}
              rowSelection={undefined}
              showHead={false}
              showTotal={true}
              showSizeChanger={false}
              showQuickJumper={false}
              pageSizeOptions={'[5,10,20]'}
              customNum={3}
              rowKey={'rowId'}
              rowActions={[]}
              extend={[]}
              dataSource={data?.factorForm}
              dataSourceFromDataSourceConfig={'data.factorForm'}
              $$componentItem={{
                id: 'Table_01275',
                uid: 'Table_01275',
                type: 'Table',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              onRowEdit={(rowId: any, row: any, index: any) => {
                const eventDatashowCustomModal109: any = [
                  {
                    type: 'showCustomModal',
                    dataId: 168835506621187170,
                    options: {
                      compId: 'showCustomModal',
                      compName: 'page',
                      id: '4228255',
                      pageJsonId: '537892',
                      modalname: '/busiFeeAddAudit',
                      pageId: '991967406355632128',
                      modalPath: '/busiFeeAddAudit',
                      paramsObj: {
                        formData: '$row$',
                        catalogCode: '$state.catalogCode$',
                      },
                      paramsObjKeyValueMap: {
                        formData: '$row$',
                        catalogCode: '$state.catalogCode$',
                      },
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 168836543592584100,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '28253345',
                          pageJsonId: '537892',
                          code: 'function main(data,state,success,fail){var info=okData_4228255;var factorForm=data.factorForm||[];factorForm=data.factorForm.filter(function(item){return item.rowId!=info.rowId});info.rowId=Date.now();factorForm.unshift(info);success(factorForm)};',
                        },
                        line_number: 2,
                        callback1: [
                          {
                            type: 'setDataSource',
                            dataId: 168836543592526100,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '787388',
                              pageJsonId: '537892',
                              dataSourceId: 166124254360037760,
                              dataSourceName: 'factorForm',
                              dataSourceRelType: 'custom',
                              dataSourceSetValue: [
                                {
                                  attrId: '08707745',
                                  code: 'city',
                                  name: '地市',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['city'],
                                  _idpath: ['08707745'],
                                },
                                {
                                  attrId: '182276',
                                  code: 'area',
                                  name: '区县',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['area'],
                                  _idpath: ['182276'],
                                },
                                {
                                  attrId: '905721',
                                  code: 'country',
                                  name: '街道/乡/镇',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['country'],
                                  _idpath: ['905721'],
                                },
                                {
                                  attrId: '500673',
                                  code: 'district',
                                  name: '片区',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['district'],
                                  _idpath: ['500673'],
                                },
                                {
                                  attrId: '007551',
                                  code: 'street',
                                  name: '街、路、行政村、居委会',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['street'],
                                  _idpath: ['007551'],
                                },
                                {
                                  attrId: '087569',
                                  code: 'houseNum',
                                  name: '门牌号(含胡同)',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['houseNum'],
                                  _idpath: ['087569'],
                                },
                                {
                                  attrId: '303741',
                                  code: 'doorplate',
                                  name: '写字楼、小区（组团）、单位大院、自然村等',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['doorplate'],
                                  _idpath: ['303741'],
                                },
                                {
                                  attrId: '725859',
                                  code: 'floorName',
                                  name: '楼名、楼号(门面房前加"门面"标志)、村民组',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['floorName'],
                                  _idpath: ['725859'],
                                },
                                {
                                  attrId: '7467836',
                                  code: 'element',
                                  name: '楼号或单元号',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['element'],
                                  _idpath: ['7467836'],
                                },
                                {
                                  attrId: '1586552',
                                  code: 'roomName',
                                  name: '房间号、户名',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['roomName'],
                                  _idpath: ['1586552'],
                                },
                                {
                                  attrId: '996532',
                                  code: 'installAddr',
                                  name: '安装地址',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['installAddr'],
                                  _idpath: ['996532'],
                                },
                                {
                                  attrId: '8998593',
                                  code: 'bandwidthUp',
                                  name: '上行带宽',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['bandwidthUp'],
                                  _idpath: ['8998593'],
                                },
                                {
                                  attrId: '569754',
                                  code: 'total',
                                  name: '受理后总条数',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['total'],
                                  _idpath: ['569754'],
                                },
                                {
                                  attrId: '410393',
                                  code: 'totalBandwidthUp',
                                  name: '受理后总上行带宽',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['totalBandwidthUp'],
                                  _idpath: ['410393'],
                                },
                                {
                                  attrId: '0644498',
                                  code: 'cityName',
                                  name: '地市名称',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['cityName'],
                                  _idpath: ['0644498'],
                                },
                                {
                                  attrId: '451514',
                                  code: 'areaName',
                                  name: '区域名称',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['areaName'],
                                  _idpath: ['451514'],
                                },
                                {
                                  attrId: '219589',
                                  code: 'countryName',
                                  name: '乡镇名称',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['countryName'],
                                  _idpath: ['219589'],
                                },
                                {
                                  attrId: '7224988',
                                  code: 'reason',
                                  name: '申请原因',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['reason'],
                                  _idpath: ['7224988'],
                                },
                                {
                                  attrId: '012241',
                                  code: 'stockTotalBandwidthUp',
                                  name: '存量总上行带宽(M)',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['stockTotalBandwidthUp'],
                                  _idpath: ['012241'],
                                },
                                {
                                  attrId: '014989',
                                  code: 'stockNum',
                                  name: '存量条数',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['stockNum'],
                                  _idpath: ['014989'],
                                },
                                {
                                  attrId: '0177956',
                                  code: 'handleTotalBandwidthUp',
                                  name: '本次受理总上行带宽(M)',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['handleTotalBandwidthUp'],
                                  _idpath: ['0177956'],
                                },
                                {
                                  attrId: '224539',
                                  code: 'handleTotalNum',
                                  name: '本次受理总条数',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['handleTotalNum'],
                                  _idpath: ['224539'],
                                },
                                {
                                  attrId: '2160153',
                                  code: 'busiType',
                                  name: '业务类型',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['busiType'],
                                  _idpath: ['2160153'],
                                },
                              ],
                              newData: '$data_28253345$',
                              operateType: 3,
                              onlySetPatch: true,
                              otherObjectArrayOptions: {},
                              targetDataSourcePaths: [],
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
                eventDatashowCustomModal109.params =
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
                  eventDatashowCustomModal109,
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
              ref={(r: any) => refs.setComponentRef(r, 'Table_01275')}
              {...injectData}
            />
          </View>
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
                id: 'Form_395851_1727917_661735_9621297',
                uid: 'Form_395851_1727917_661735_9621297',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ padding: '0px 0px 0px 0px', margin: '10px 0px 0px 0px' }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Form_395851_1727917_661735_9621297')
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
                  refs.setComponentRef(r, 'Input_690228_5400337_280164_96733')
                }
                {...injectData}
              />
              <View
                className="View_View_22346374_875512_9117364_7049835"
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
                  refs.setComponentRef(
                    r,
                    'View_22346374_875512_9117364_7049835',
                  )
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
                    const eventDatagetSelectedData179: any = [
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
                    eventDatagetSelectedData179.params =
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
                      eventDatagetSelectedData179,
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
                    const eventDatacustomActionCode485: any = [
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
                    eventDatacustomActionCode485.params =
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
                      eventDatacustomActionCode485,
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
                      'StdUpload_6230546_867413_762296_377598',
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
              const eventDatacustomActionCode486: any = [
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
              eventDatacustomActionCode486.params =
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
                eventDatacustomActionCode486,
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
              const eventDatadownloadByFileId33: any = [
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
              eventDatadownloadByFileId33.params =
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
                eventDatadownloadByFileId33,
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
          ref={(r: any) => refs.setComponentRef(r, 'BOFramer_58639')}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(ClsCp_0007_0010$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
